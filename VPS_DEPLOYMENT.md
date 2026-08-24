# Lumi Pet VPS deployment

Target architecture:

- GitHub repository: private source of truth.
- GitHub Actions: build and QA on every push to `main`.
- Runner: GitHub Actions `self-hosted` runner installed directly on the production VPS.
- Nginx: serves `/var/www/lumipet/current`.
- Domain: `https://lumipet.vn`.
- Deployments are atomic by release SHA and keep the 5 newest releases.

## One-time VPS setup

Run the VPS bootstrap once:

```bash
sudo bash ops/bootstrap-vps.sh
```

The script installs Nginx, rsync and Certbot, creates the `deploy` user, prepares `/var/www/lumipet`, and installs `ops/nginx/lumipet.vn.conf`.

Then install a GitHub Actions self-hosted runner for repository `capquangfptminhlh/mimi` on this VPS and run the runner service as the `deploy` user (or another user that has write permission to `/var/www/lumipet`).

The production workflow intentionally uses:

```yaml
runs-on: self-hosted
```

No `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` or `VPS_PORT` repository secrets are required for deployment because the job already executes on the VPS itself.

## Automatic deploy

Workflow: `.github/workflows/deploy-vps.yml`

Every push to `main`:

1. checks out the exact Git SHA on the self-hosted runner;
2. installs dependencies;
3. validates booking/UI/blog JavaScript;
4. typechecks and builds;
5. verifies production pages and content gates;
6. creates `dist/release.json` containing the exact Git SHA;
7. copies `dist/` locally into `/var/www/lumipet/releases/<SHA>`;
8. verifies the release before activation;
9. atomically switches `/var/www/lumipet/current` to the new release;
10. verifies the active release;
11. retains the five newest releases.

Only built production files under `dist/` are activated by Nginx. The GitHub checkout remains inside the runner workspace and is not the public web root.

## Runner permissions

The runner account must be able to write to:

```text
/var/www/lumipet/releases
/var/www/lumipet/current
```

Recommended runner account: `deploy`.

If another account runs the GitHub runner, grant that account appropriate ownership/group access to `/var/www/lumipet` before enabling deployment. Do not solve permissions by making the web directory world-writable.

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

## Private repository

After `lumipet.vn` is confirmed on the VPS:

1. update canonical URLs, sitemap and schema to `https://lumipet.vn`;
2. disable the old GitHub Pages deployment workflow;
3. make the GitHub repository private;
4. keep the self-hosted runner registered to the private repository;
5. keep the ChatGPT/GitHub integration authorized for this private repository so future edits can still be committed to `main`.

## Working rule

All production code changes are committed to the `main` branch. A successful push to `main` is the trigger for the self-hosted VPS deployment workflow.
