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

## BROKEN: the server cannot fetch from GitHub

Since this repo went private, the deploy job fails at its first step:

```
fatal: could not read Username for 'https://github.com': No such device or address
```

The checkout in `~/app/viewaro-web` has an **HTTPS** remote and the server
holds no GitHub credential — anonymous fetch worked only while the repo was
public. Every `v*` tag will keep failing until one of these is done:

- add a read-only **deploy key** for this repo (GitHub → Settings → Deploy
  keys) and switch the server's remote to `git@github.com:filipbob/viewaro-web.git`, or
- store a PAT in a credential helper on the server (weaker: one token, all repos).

`pausal-manager` needs the same treatment — its deploy job has never run, and
that repo additionally has no `DEPLOY_*` secrets set at all.

Until then, a release can still be moved without credentials, by carrying the
objects over ssh instead of fetching them:

```sh
# on the laptop
git bundle create /tmp/viewaro-v1.8.0.bundle v1.7.0..v1.8.0 --tags=v1.8.0
scp /tmp/viewaro-v1.8.0.bundle oracle-server:/tmp/

# on the server
cd ~/app/viewaro-web
git fetch /tmp/viewaro-v1.8.0.bundle 'refs/tags/v1.8.0:refs/tags/v1.8.0'
git checkout v1.8.0
docker compose up -d          # --build only when the site itself changed
```

This lands a clean checkout at the real tag, so a later CI deploy is not
confused by a dirty tree. `v1.8.0` reached the server exactly this way.

`deploy/nginx/viewaro.conf` stays modified in the server's working tree — it
is the TLS variant copied over the bootstrap file. That is expected; do not
`git checkout --` it, or the site drops to HTTP-only.

## pausal-manager behind this nginx

`pausal.conf` (bootstrap) and `pausal.conf.tls-template` are the vhost for
pausal-manager, which runs as its own compose stack in `~/app/pausal-manager`
and publishes no ports. Both files are authored in the pausal-manager repo and
copied here; keep them in sync from there, not the other way round.

State as of 2026-08-13:

- DNS: `pausal.itquotes.hr` → this host, **DNS only** in Cloudflare. Keep the
  proxy off until the TLS config below is live: with the bootstrap config
  nothing answers on 443 for that name, and the zone is on Full (not strict),
  so a proxied record would silently serve viewaro's cert and content.
- Cert: issued 2026-08-13, expires 2026-11-11. It renews through the same
  webroot and the existing `reload-viewaro.sh` deploy hook — that hook reloads
  this container, which is also pausal's nginx, so no second hook is needed.
  `sudo certbot renew --dry-run` passes for both names.
- Serving: bootstrap `pausal.conf` only — ACME challenge plus 404. The
  tls-template is NOT in place yet, because it proxies to `pausal-api` /
  `pausal-web` and nginx refuses to start when those aliases do not resolve.
  The pausal stack is not on the server at all yet (private repo, no deploy
  key), so this is the correct state, not a leftover.

Once the pausal stack is up on the `proxy` network:

```sh
cd ~/app/viewaro-web
cp deploy/nginx/pausal.conf.tls-template deploy/nginx/pausal.conf
docker exec viewaro-web nginx -t     # must pass before the reload
docker exec viewaro-web nginx -s reload
```

Then flip the Cloudflare record to Proxied.
