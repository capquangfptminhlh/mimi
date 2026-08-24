#!/usr/bin/env bash
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run this script as root: sudo bash ops/bootstrap-vps.sh"
  exit 1
fi

DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_ROOT="/var/www/lumipet"
NGINX_SOURCE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/nginx/lumipet.vn.conf"
NGINX_TARGET="/etc/nginx/sites-available/lumipet.vn"

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx rsync curl ca-certificates certbot python3-certbot-nginx

if ! id -u "$DEPLOY_USER" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$DEPLOY_USER"
fi

install -d -m 0755 "$DEPLOY_ROOT"
install -d -m 0755 "$DEPLOY_ROOT/releases"
chown -R "$DEPLOY_USER":www-data "$DEPLOY_ROOT"
chmod -R u+rwX,g+rX,o-rwx "$DEPLOY_ROOT"

if [ ! -f "$NGINX_SOURCE" ]; then
  echo "Missing nginx config: $NGINX_SOURCE"
  exit 1
fi

install -m 0644 "$NGINX_SOURCE" "$NGINX_TARGET"
ln -sfn "$NGINX_TARGET" /etc/nginx/sites-enabled/lumipet.vn
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl enable nginx
systemctl reload nginx

cat <<EOF

Lumi Pet VPS bootstrap complete.

Deploy root : $DEPLOY_ROOT
Deploy user : $DEPLOY_USER
Nginx site  : $NGINX_TARGET

NEXT:
1. Install/register a GitHub Actions self-hosted runner for capquangfptminhlh/mimi on this VPS.
2. Run the GitHub runner service as $DEPLOY_USER (recommended).
3. Confirm the runner appears Online in GitHub -> Settings -> Actions -> Runners.
4. Push/dispatch .github/workflows/deploy-vps.yml; it uses runs-on: self-hosted.
5. Point lumipet.vn DNS A record to this VPS IP.
6. After DNS resolves, run:
   certbot --nginx -d lumipet.vn -d www.lumipet.vn --redirect
7. In GitHub repo variables set VPS_LIVE_VERIFY=1 after HTTPS is live.

No VPS SSH deployment secrets are required. The GitHub Actions job builds and deploys locally on this VPS and Nginx serves only /var/www/lumipet/current.
EOF
