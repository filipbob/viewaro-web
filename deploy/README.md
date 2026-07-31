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

## Updating the site

```sh
cd ~/app/viewaro-web
git pull
docker compose up -d --build
```
