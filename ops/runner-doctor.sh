#!/usr/bin/env bash
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run as root: sudo bash ops/runner-doctor.sh"
  exit 1
fi

REPO_URL="${REPO_URL:-https://github.com/capquangfptminhlh/mimi}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
RUNNER_DIR="${RUNNER_DIR:-/home/${DEPLOY_USER}/actions-runner}"
DEPLOY_ROOT="${DEPLOY_ROOT:-/var/www/lumipet}"

if ! id -u "$DEPLOY_USER" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$DEPLOY_USER"
fi

install -d -m 0755 "$DEPLOY_ROOT" "$DEPLOY_ROOT/releases"
chown -R "$DEPLOY_USER":www-data "$DEPLOY_ROOT"
chmod -R u+rwX,g+rX,o-rwx "$DEPLOY_ROOT"

find_runner_service() {
  systemctl list-unit-files --type=service --no-legend 2>/dev/null \
    | awk '{print $1}' \
    | grep '^actions\.runner\..*\.service$' \
    | head -n1 || true
}

restart_existing_runner() {
  local service
  service="$(find_runner_service)"
  if [ -n "$service" ]; then
    echo "Found runner service: $service"
    systemctl daemon-reload
    systemctl enable "$service" >/dev/null
    systemctl restart "$service"
    sleep 2
    systemctl --no-pager --full status "$service" || true
    if systemctl is-active --quiet "$service"; then
      echo "RUNNER_OK service=$service"
      return 0
    fi
  fi
  return 1
}

if restart_existing_runner; then
  echo "Runner service is active. Push to main or re-run Deploy Lumi Pet to VPS."
  exit 0
fi

if [ -x "$RUNNER_DIR/run.sh" ] && [ -f "$RUNNER_DIR/.runner" ]; then
  echo "Runner files are registered but systemd service is missing/inactive. Installing service..."
  cd "$RUNNER_DIR"
  if [ -x ./svc.sh ]; then
    ./svc.sh uninstall >/dev/null 2>&1 || true
    ./svc.sh install "$DEPLOY_USER"
    ./svc.sh start
    sleep 2
    if restart_existing_runner; then
      exit 0
    fi
  fi
fi

if [ -z "${RUNNER_TOKEN:-}" ]; then
  cat <<'EOF'
RUNNER_NOT_REGISTERED

No working GitHub Actions runner was found on this VPS.
Create a fresh repository runner token at:
GitHub repo -> Settings -> Actions -> Runners -> New self-hosted runner

Then run this script again with:
  sudo RUNNER_TOKEN='PASTE_FRESH_TOKEN_HERE' bash ops/runner-doctor.sh

The token is short-lived and must never be committed to GitHub.
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

if ! restart_existing_runner; then
  echo "Runner service did not become active. Inspect: journalctl -u 'actions.runner.*' -n 200 --no-pager"
  exit 4
fi

sudo -u "$DEPLOY_USER" test -w "$DEPLOY_ROOT/releases"
echo "RUNNER_READY repo=$REPO_URL user=$DEPLOY_USER deploy_root=$DEPLOY_ROOT"
echo "Now push to main or use Actions -> Deploy Lumi Pet to VPS -> Run workflow."
