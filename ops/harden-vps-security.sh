#!/usr/bin/env bash
# Lumi Pet VPS Defense-in-Depth Security Hardening Script
# Run once as root on VPS: sudo bash ops/harden-vps-security.sh
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run as root: sudo bash ops/harden-vps-security.sh"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== 1. Applying hardened Nginx vhost (HSTS, CSP, Permissions-Policy, scanner blocking) ==="
bash "${SCRIPT_DIR}/fix-nginx-vhost.sh"

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
  echo "UFW not installed. Install with: apt-get update && apt-get install -y ufw"
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
if [ -f /etc/lumipet-api.env ]; then
  chmod 600 /etc/lumipet-api.env
  chown root:root /etc/lumipet-api.env
  echo "Secured /etc/lumipet-api.env (chmod 600)"
else
  echo "NOTE: Store rotated ZALO_BOT_TOKEN & ZALO_CHAT_ID in /etc/lumipet-api.env (chmod 600), NOT in git!"
fi

echo "=== 6. Verifying unattended security upgrades ==="
if dpkg -s unattended-upgrades >/dev/null 2>&1; then
  echo "unattended-upgrades is already installed."
else
  apt-get install -y -qq unattended-upgrades || true
fi

echo "=== LUMI PET VPS SECURITY HARDENING COMPLETE ==="
