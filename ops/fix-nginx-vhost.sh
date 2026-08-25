#!/usr/bin/env bash
set -euo pipefail

if [ "${EUID}" -ne 0 ]; then
  echo "Run as root: sudo bash ops/fix-nginx-vhost.sh"
  exit 1
fi

DOMAIN="lumipet.vn"
DEPLOY_ROOT="/var/www/lumipet/current"
TARGET="/etc/nginx/sites-available/lumipet.vn"
ENABLED="/etc/nginx/sites-enabled/00-lumipet.vn"
LEGACY_ENABLED="/etc/nginx/sites-enabled/lumipet.vn"
TMP_CONFIG="$(mktemp)"
BACKUP=""

cleanup() {
  rm -f "$TMP_CONFIG"
}
trap cleanup EXIT

if ! command -v nginx >/dev/null 2>&1; then
  echo "nginx is not installed on this VPS."
  exit 2
fi

CERT_DIR=""
for candidate in /etc/letsencrypt/live/lumipet.vn /etc/letsencrypt/live/lumipet.vn-*; do
  [ -d "$candidate" ] || continue
  if [ -f "$candidate/fullchain.pem" ] && [ -f "$candidate/privkey.pem" ]; then
    CERT_DIR="$candidate"
    break
  fi
done

if [ -z "$CERT_DIR" ]; then
  echo "LUMIPET_SSL_CERT_MISSING"
  echo "No Lumi Pet certificate was found under /etc/letsencrypt/live/."
  echo "Do not change the live HTTPS vhost until the Lumi Pet certificate exists."
  exit 3
fi

if [ ! -f "$DEPLOY_ROOT/index.html" ]; then
  echo "LUMIPET_RELEASE_MISSING: $DEPLOY_ROOT/index.html"
  exit 4
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOCAL_CONFIG="$SCRIPT_DIR/nginx/lumipet.vn.conf"

if [ -f "$LOCAL_CONFIG" ]; then
  cp "$LOCAL_CONFIG" "$TMP_CONFIG"
else
  echo "Downloading canonical Lumi Pet vhost from main..."
  curl -fsSL "https://raw.githubusercontent.com/capquangfptminhlh/mimi/main/ops/nginx/lumipet.vn.conf?ts=$(date +%s)" -o "$TMP_CONFIG"
fi

# If Certbot created lumipet.vn-0001 (or another suffix), render that real path
# into the vhost instead of assuming the first certificate name.
if [ "$CERT_DIR" != "/etc/letsencrypt/live/lumipet.vn" ]; then
  sed -i "s#/etc/letsencrypt/live/lumipet\.vn/#${CERT_DIR}/#g" "$TMP_CONFIG"
fi

grep -Fq 'server_name lumipet.vn www.lumipet.vn;' "$TMP_CONFIG"
grep -Fq 'listen 443 ssl;' "$TMP_CONFIG"
grep -Fq 'root /var/www/lumipet/current;' "$TMP_CONFIG"
grep -Fq 'X-Lumi-Site "lumipet"' "$TMP_CONFIG"
grep -Fq "ssl_certificate ${CERT_DIR}/fullchain.pem;" "$TMP_CONFIG"
grep -Fq "ssl_certificate_key ${CERT_DIR}/privkey.pem;" "$TMP_CONFIG"

if [ -f "$TARGET" ]; then
  BACKUP="${TARGET}.backup.$(date +%Y%m%d%H%M%S)"
  cp -a "$TARGET" "$BACKUP"
  echo "Backup: $BACKUP"
fi

install -m 0644 "$TMP_CONFIG" "$TARGET"

# Load Lumi Pet before other vhosts. This prevents an unrelated default or
# accidentally overlapping site (for example AutoTax) from winning first.
ln -sfn "$TARGET" "$ENABLED"
rm -f "$LEGACY_ENABLED"

# Show any other enabled config that also claims the Lumi Pet hostname.
echo "Checking for duplicate Lumi Pet server_name declarations..."
DUPLICATES=0
for site in /etc/nginx/sites-enabled/*; do
  [ -e "$site" ] || continue
  [ "$(readlink -f "$site")" = "$TARGET" ] && continue
  if grep -Eq 'server_name[^;]*(^|[[:space:]])(www\.)?lumipet\.vn([[:space:];]|$)' "$(readlink -f "$site")" 2>/dev/null; then
    echo "WARNING duplicate hostname claim: $site -> $(readlink -f "$site")"
    DUPLICATES=$((DUPLICATES + 1))
  fi
done

if ! nginx -t; then
  echo "Nginx validation failed. Restoring previous Lumi Pet config."
  if [ -n "$BACKUP" ] && [ -f "$BACKUP" ]; then
    cp -a "$BACKUP" "$TARGET"
  fi
  nginx -t || true
  exit 5
fi

systemctl reload nginx

HEADERS="$(mktemp)"
BODY="$(mktemp)"
trap 'rm -f "$TMP_CONFIG" "$HEADERS" "$BODY"' EXIT

curl -kfsS --resolve "${DOMAIN}:443:127.0.0.1" \
  -D "$HEADERS" "https://${DOMAIN}/?vhost-check=$(date +%s)" -o "$BODY"

grep -Eiq '^X-Lumi-Site:[[:space:]]*lumipet' "$HEADERS"
grep -Fqi 'Lumi Pet' "$BODY"
if grep -Eqi 'AutoTax|AutoTaxPOS|autotaxpos\.com' "$BODY"; then
  echo "VHOST_ISOLATION_FAIL: Lumi Pet request returned AutoTax content."
  exit 6
fi

echo "LUMIPET_VHOST_READY"
echo "Domain      : $DOMAIN"
echo "Root        : $DEPLOY_ROOT"
echo "Nginx site  : $TARGET"
echo "Load order  : $ENABLED"
echo "SSL cert    : $CERT_DIR"
echo "Duplicates  : $DUPLICATES warning(s)"
echo "Local HTTPS : PASS (X-Lumi-Site=lumipet, no AutoTax content)"
