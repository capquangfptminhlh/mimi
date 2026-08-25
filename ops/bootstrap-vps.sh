#!/usr/bin/env bash
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run this script as root: sudo bash ops/bootstrap-vps.sh"
  exit 1
fi

DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_ROOT="/var/www/lumipet"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NGINX_SOURCE="$SCRIPT_DIR/nginx/lumipet.vn.conf"
NGINX_TARGET="/etc/nginx/sites-available/lumipet.vn"
NGINX_ENABLED="/etc/nginx/sites-enabled/00-lumipet.vn"
CERT="/etc/letsencrypt/live/lumipet.vn/fullchain.pem"
KEY="/etc/letsencrypt/live/lumipet.vn/privkey.pem"

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx rsync curl ca-certificates certbot python3-certbot-nginx

if ! id -u "$DEPLOY_USER" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$DEPLOY_USER"
fi

install -d -m 0755 "$DEPLOY_ROOT" "$DEPLOY_ROOT/releases" /var/www/html
chown -R "$DEPLOY_USER":www-data "$DEPLOY_ROOT"
chmod -R u+rwX,g+rX,o-rwx "$DEPLOY_ROOT"

if [ ! -f "$NGINX_SOURCE" ]; then
  echo "Missing nginx config: $NGINX_SOURCE"
  exit 1
fi

if [ -f "$CERT" ] && [ -f "$KEY" ]; then
  install -m 0644 "$NGINX_SOURCE" "$NGINX_TARGET"
else
  cat > "$NGINX_TARGET" <<'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name lumipet.vn www.lumipet.vn;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        try_files $uri =404;
    }

    location / {
        root /var/www/lumipet/current;
        try_files $uri $uri/ =404;
    }
}
NGINX
  echo "SSL certificate not present yet; installed HTTP-only bootstrap vhost."
fi

# The 00- prefix makes the explicit Lumi Pet vhost load before unrelated sites.
ln -sfn "$NGINX_TARGET" "$NGINX_ENABLED"
rm -f /etc/nginx/sites-enabled/lumipet.vn
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl enable nginx
systemctl reload nginx

cat <<EOF

Lumi Pet VPS bootstrap complete.

Deploy root : $DEPLOY_ROOT
Deploy user : $DEPLOY_USER
Nginx site  : $NGINX_TARGET
Load order  : $NGINX_ENABLED

The site is isolated from AutoTax and other VPS websites by an explicit
lumipet.vn virtual host and a dedicated /var/www/lumipet root.
EOF

if [ ! -f "$CERT" ] || [ ! -f "$KEY" ]; then
  cat <<'EOF'

NEXT FOR HTTPS:
1. Confirm DNS A records for lumipet.vn and www.lumipet.vn point to this VPS.
2. Run:
   sudo certbot --nginx -d lumipet.vn -d www.lumipet.vn
3. Then apply the hardened HTTPS vhost:
   sudo bash ops/fix-nginx-vhost.sh
EOF
fi
