#!/usr/bin/env bash
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run as root: sudo bash ops/runner-doctor.sh"
  exit 1
fi

REPO_SLUG="${REPO_SLUG:-capquangfptminhlh/mimi}"
REPO_URL="${REPO_URL:-https://github.com/${REPO_SLUG}}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
RUNNER_DIR="${RUNNER_DIR:-/home/${DEPLOY_USER}/actions-runner}"
DEPLOY_ROOT="${DEPLOY_ROOT:-/var/www/lumipet}"
SERVICE_FRAGMENT="${REPO_SLUG//\//-}"

if ! id -u "$DEPLOY_USER" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$DEPLOY_USER"
fi

install -d -m 0755 "$DEPLOY_ROOT" "$DEPLOY_ROOT/releases"
chown -R "$DEPLOY_USER":www-data "$DEPLOY_ROOT"
chmod -R u+rwX,g+rX,o-rwx "$DEPLOY_ROOT"

echo "=== Lumi Pet runner doctor ==="
echo "Expected repo   : $REPO_URL"
echo "Expected dir    : $RUNNER_DIR"
echo "Expected labels : lumipet,production"
echo

echo "Detected GitHub runner services on this VPS:"
mapfile -t ALL_RUNNER_SERVICES < <(
  systemctl list-unit-files --type=service --no-legend 2>/dev/null \
    | awk '{print $1}' \
    | grep '^actions\.runner\..*\.service$' || true
)
if [ "${#ALL_RUNNER_SERVICES[@]}" -eq 0 ]; then
  echo "  (none)"
else
  for svc in "${ALL_RUNNER_SERVICES[@]}"; do
    state="$(systemctl is-active "$svc" 2>/dev/null || true)"
    echo "  $svc [$state]"
  done
fi

echo

find_lumipet_service() {
  printf '%s\n' "${ALL_RUNNER_SERVICES[@]:-}" \
    | grep -F "$SERVICE_FRAGMENT" \
    | head -n1 || true
}

runner_dir_matches_repo() {
  [ -f "$RUNNER_DIR/.runner" ] || return 1
  grep -Fq "$REPO_URL" "$RUNNER_DIR/.runner" 2>/dev/null
}

restart_lumipet_runner() {
  local service
  service="$(find_lumipet_service)"
  if [ -z "$service" ]; then
    return 1
  fi

  echo "Found Lumi Pet runner service: $service"
  systemctl daemon-reload
  systemctl enable "$service" >/dev/null
  systemctl restart "$service"
  sleep 3
  systemctl --no-pager --full status "$service" || true

  if systemctl is-active --quiet "$service"; then
    echo "RUNNER_OK service=$service repo=$REPO_URL"
    return 0
  fi

  echo "Runner service exists but is not active. Recent log:"
  journalctl -u "$service" -n 80 --no-pager || true
  return 1
}

# IMPORTANT: do not accept a runner belonging to another repository.
if restart_lumipet_runner; then
  sudo -u "$DEPLOY_USER" test -w "$DEPLOY_ROOT/releases"
  echo "LUMIPET_RUNNER_READY"
  exit 0
fi

# If the expected runner directory is already configured for this repo,
# reinstall its systemd service instead of requiring a new registration token.
if runner_dir_matches_repo && [ -x "$RUNNER_DIR/run.sh" ]; then
  echo "Lumi Pet runner files are registered but its service is missing/inactive."
  cd "$RUNNER_DIR"
  if [ -x ./svc.sh ]; then
    ./svc.sh uninstall >/dev/null 2>&1 || true
    ./svc.sh install "$DEPLOY_USER"
    ./svc.sh start
    sleep 3
    mapfile -t ALL_RUNNER_SERVICES < <(
      systemctl list-unit-files --type=service --no-legend 2>/dev/null \
        | awk '{print $1}' \
        | grep '^actions\.runner\..*\.service$' || true
    )
    if restart_lumipet_runner; then
      sudo -u "$DEPLOY_USER" test -w "$DEPLOY_ROOT/releases"
      echo "LUMIPET_RUNNER_READY"
      exit 0
    fi
  fi
fi

# A different project runner may be active on the same VPS. That is not enough.
if [ "${#ALL_RUNNER_SERVICES[@]}" -gt 0 ]; then
  echo "Other GitHub runner service(s) exist, but none belongs to ${REPO_SLUG}."
  echo "They will NOT be treated as the Lumi Pet runner."
fi

if [ -z "${RUNNER_TOKEN:-}" ]; then
  cat <<EOF

LUMIPET_RUNNER_NOT_REGISTERED

The VPS does not currently have a working self-hosted runner for:
  ${REPO_URL}

Create a fresh repository runner token at:
  GitHub -> ${REPO_SLUG} -> Settings -> Actions -> Runners -> New self-hosted runner

Then run:
  sudo RUNNER_TOKEN='PASTE_FRESH_TOKEN_HERE' bash ops/runner-doctor.sh

The token is short-lived. Do not commit or paste it into website source files.
EOF
  exit 2
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl ca-certificates jq tar gzip

ARCH="$(uname -m)"
case "$ARCH" in
  x86_64|amd64) RUNNER_ARCH="x64" ;;
  aarch64|arm64) RUNNER_ARCH="arm64" ;;
  *) echo "Unsupported architecture: $ARCH"; exit 3 ;;
esac

LATEST_JSON="$(curl -fsSL https://api.github.com/repos/actions/runner/releases/latest)"
TAG="$(printf '%s' "$LATEST_JSON" | jq -r '.tag_name')"
VERSION="${TAG#v}"
ASSET="actions-runner-linux-${RUNNER_ARCH}-${VERSION}.tar.gz"
DOWNLOAD="https://github.com/actions/runner/releases/download/${TAG}/${ASSET}"

echo "Installing GitHub Actions runner ${TAG} (${RUNNER_ARCH}) into ${RUNNER_DIR}"
rm -rf "$RUNNER_DIR"
install -d -m 0755 -o "$DEPLOY_USER" -g "$DEPLOY_USER" "$RUNNER_DIR"
curl -fL "$DOWNLOAD" -o "/tmp/${ASSET}"
tar -xzf "/tmp/${ASSET}" -C "$RUNNER_DIR"
chown -R "$DEPLOY_USER":"$DEPLOY_USER" "$RUNNER_DIR"

sudo -u "$DEPLOY_USER" bash -lc "cd '$RUNNER_DIR' && ./config.sh --unattended --url '$REPO_URL' --token '$RUNNER_TOKEN' --name 'lumipet-vps' --labels 'lumipet,production' --work '_work' --replace"

cd "$RUNNER_DIR"
./svc.sh install "$DEPLOY_USER"
./svc.sh start
sleep 3

mapfile -t ALL_RUNNER_SERVICES < <(
  systemctl list-unit-files --type=service --no-legend 2>/dev/null \
    | awk '{print $1}' \
    | grep '^actions\.runner\..*\.service$' || true
)

if ! restart_lumipet_runner; then
  echo "Lumi Pet runner service did not become active."
  echo "Inspect all runner logs with:"
  echo "  journalctl -u 'actions.runner.*' -n 200 --no-pager"
  exit 4
fi

sudo -u "$DEPLOY_USER" test -w "$DEPLOY_ROOT/releases"
echo "LUMIPET_RUNNER_READY repo=$REPO_URL user=$DEPLOY_USER deploy_root=$DEPLOY_ROOT"
echo "The next push to main will be picked up only by a runner labelled lumipet + production."
