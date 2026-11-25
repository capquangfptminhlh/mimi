#!/usr/bin/env bash
# Lumi Pet VPS Defense-in-Depth Security Hardening Script
# Works both locally (sudo bash ops/harden-vps-security.sh) and via curl | sudo bash
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run as root: sudo bash ops/harden-vps-security.sh"
  exit 1
fi

RAW_BASE="https://raw.githubusercontent.com/capquangfptminhlh/mimi/main/ops"
TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

SCRIPT_PATH="${BASH_SOURCE[0]:-}"
SCRIPT_DIR=""
if [ -n "$SCRIPT_PATH" ] && [ -f "$SCRIPT_PATH" ]; then
  SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"
fi

echo "=== 1. Applying hardened Nginx vhost (HSTS, CSP, Permissions-Policy, scanner blocking) ==="
if [ -n "$SCRIPT_DIR" ] && [ -f "${SCRIPT_DIR}/fix-nginx-vhost.sh" ]; then
  bash "${SCRIPT_DIR}/fix-nginx-vhost.sh"
else
  curl -fsSL "${RAW_BASE}/fix-nginx-vhost.sh?ts=$(date +%s)" -o "${TMP_DIR}/fix-nginx-vhost.sh"
  bash "${TMP_DIR}/fix-nginx-vhost.sh"
fi

echo "=== 2. Hardening global Nginx server_tokens ==="
if [ -f /etc/nginx/nginx.conf ] && ! grep -Eq '^\s*server_tokens\s+off;' /etc/nginx/nginx.conf; then
  sed -i 's/#\s*server_tokens off;/server_tokens off;/' /etc/nginx/nginx.conf || true
  nginx -t && systemctl reload nginx
fi

echo "=== 3. Configuring UFW Firewall (Allow SSH 22, HTTP 80, HTTPS 443 only) ==="
if command -v ufw >/dev/null 2>&1; then
  ufw default deny incoming
  ufw default allow outgoing
  ufw allow 22/tcp comment 'SSH'
  ufw allow 80/tcp comment 'HTTP'
  ufw allow 443/tcp comment 'HTTPS'
  ufw --force enable
  ufw status verbose
else
  echo "UFW not installed. Installing ufw..."
  apt-get update -qq && apt-get install -y -qq ufw
  ufw default deny incoming
  ufw default allow outgoing
  ufw allow 22/tcp comment 'SSH'
  ufw allow 80/tcp comment 'HTTP'
  ufw allow 443/tcp comment 'HTTPS'
  ufw --force enable
  ufw status verbose
fi

echo "=== 4. Enabling Fail2Ban (SSH + Nginx brute-force/scanner auto-ban) ==="
if ! command -v fail2ban-client >/dev/null 2>&1; then
  apt-get update -qq && apt-get install -y -qq fail2ban
fi
cat >/etc/fail2ban/jail.d/lumipet-hardening.local <<'EOF'
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
maxretry = 4
bantime = 2h

[nginx-http-auth]
enabled = true

[nginx-botsearch]
enabled = true
maxretry = 3
bantime = 6h
EOF
systemctl enable --now fail2ban
systemctl restart fail2ban
fail2ban-client status || true

echo "=== 5. Securing Lumi Pet API environment permissions ==="
for envf in /etc/lumipet-api.env /var/www/lumipet/.env; do
  if [ -f "$envf" ]; then
    chmod 600 "$envf"
    echo "Secured $envf (chmod 600)"
  fi
done

echo "=== 6. Verifying unattended security upgrades ==="
if ! dpkg -s unattended-upgrades >/dev/null 2>&1; then
  apt-get install -y -qq unattended-upgrades || true
fi

echo "=== LUMI PET VPS SECURITY HARDENING COMPLETE ==="
