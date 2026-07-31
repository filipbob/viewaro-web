# Deploying viewaro-web (oracle-server)

**Status:** live at https://viewaro.itquotes.hr since 2026-07-31 — the "Issue
the TLS certificate" step below is done; kept for reference (re-issuing on a
fresh server, debugging renewal, etc).

Runs as a single Docker container (`nginx:alpine` serving the Next.js static
export). nginx itself stays containerized, but its access/error logs are
bind-mounted to `~/app/nginx-logs/` on the host so the host's fail2ban
(`/etc/fail2ban/jail.d/nginx.local`) can read them — fail2ban cannot see
inside a container's own filesystem.

## Layout on the server (`~/app/`)

```
app/
├── viewaro-web/          # this repo, git-cloned
├── nginx-logs/           # bind mount target for access.log / error.log
└── certbot-webroot/      # bind mount target for ACME HTTP-01 challenges
```

## First deploy

```sh
cd ~/app/viewaro-web
docker compose up -d --build
```

Runs HTTP-only (`deploy/nginx/viewaro.conf`) until a TLS cert exists — that's
the bootstrap config, since certbot's HTTP-01 challenge needs port 80 serving
first.

## Issue the TLS certificate (after DNS points here)

```sh
sudo apt install -y certbot
sudo certbot certonly --webroot \
  -w ~/app/certbot-webroot \
  -d viewaro.itquotes.hr

cp deploy/nginx/viewaro.conf.tls-template deploy/nginx/viewaro.conf
docker exec viewaro-web nginx -s reload
```

Certbot's systemd timer (installed with the package) renews automatically.
Add a deploy hook so nginx reloads after renewal:

```sh
sudo tee /etc/letsencrypt/renewal-hooks/deploy/reload-viewaro.sh << 'EOF'
#!/bin/sh
docker exec viewaro-web nginx -s reload
EOF
sudo chmod +x /etc/letsencrypt/renewal-hooks/deploy/reload-viewaro.sh
```

## Releasing (CI/CD)

`.github/workflows/deploy.yml` deploys automatically — but only on a
**version tag**, not on every push to `main`. Merging to `main` alone ships
nothing; pushing a `v*` tag is the release:

```sh
git checkout main && git pull
git tag v1.0.1
git push origin v1.0.1
```

That SSHes into oracle-server (key in the `DEPLOY_SSH_KEY` secret, a
dedicated deploy-only key — not the personal `oracle_key`) and runs:

```sh
cd ~/app/viewaro-web
git fetch --tags -f
git checkout <the pushed tag>
docker compose up -d --build
```

This leaves the server's checkout in detached HEAD at that tag — expected,
it's a deploy target, not a working copy. Watch it run with
`gh run watch -R filipbob/viewaro-web`.

## Updating the site manually

Same as what CI does, run by hand (skips the tag requirement — useful for a
quick fix without cutting a release):

```sh
cd ~/app/viewaro-web
git checkout main && git pull
docker compose up -d --build
```
