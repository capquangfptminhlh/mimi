# Lumi Pet VPS deployment

Target architecture:

- GitHub repository: private source of truth.
- GitHub Actions: build and QA on every push to `main`.
- VPS: receives only `dist/` static production files.
- Nginx: serves `/var/www/lumipet/current`.
- Domain: `https://lumipet.vn`.
- Deployments are atomic by release SHA and keep the 5 newest releases.

## One-time VPS setup

On the VPS, from a checkout of the repository while it is still accessible:

```bash
sudo bash ops/bootstrap-vps.sh
```

The script installs Nginx, rsync and Certbot, creates the `deploy` user, prepares `/var/www/lumipet`, and installs `ops/nginx/lumipet.vn.conf`.

## GitHub repository secrets

Add in **Settings → Secrets and variables → Actions → Repository secrets**:

- `VPS_HOST`: VPS public IP or hostname.
- `VPS_USER`: usually `deploy`.
- `VPS_SSH_KEY`: private SSH key whose public key is in `/home/deploy/.ssh/authorized_keys` on the VPS.
- `VPS_PORT`: optional; defaults to `22`.

Do not put any private key, password or token in tracked repository files.

## Automatic deploy

Workflow: `.github/workflows/deploy-vps.yml`

Every push to `main`:

1. installs dependencies;
2. validates booking/UI/blog JavaScript;
3. typechecks and builds;
4. verifies production pages, content and release gates;
5. creates `dist/release.json` containing the exact Git SHA;
6. uploads `dist/` into `/var/www/lumipet/releases/<SHA>`;
7. atomically switches `/var/www/lumipet/current` to that release;
8. retains the five newest releases;
9. verifies the release marker on the VPS.

If VPS secrets are not configured yet, build/QA still passes and the deploy step is safely skipped.

## DNS cutover

Point the apex domain to the VPS public IPv4:

- Type: `A`
- Host/name: `@`
- Value: VPS public IP

For `www`, either create another A record to the VPS or use a CNAME to `lumipet.vn` if the DNS provider supports it.

After DNS resolves to the VPS:

```bash
sudo certbot --nginx -d lumipet.vn -d www.lumipet.vn --redirect
```

Then set repository variable `VPS_LIVE_VERIFY=1`. The deployment workflow will additionally read back:

- `https://lumipet.vn/release.json`
- `https://lumipet.vn/bai-viet/`
- `https://lumipet.vn/dat-lich/`

## Final privacy cutover

Only after `lumipet.vn` is confirmed on the VPS:

1. update canonical URLs, sitemap and schema from GitHub Pages URLs to `https://lumipet.vn`;
2. disable the old GitHub Pages deploy workflow;
3. make the GitHub repository private;
4. keep the ChatGPT/GitHub integration authorized for the private repository so future edits can still be pushed normally.
