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

## The deploy job depends on this repo staying public

The server's checkout in `~/app/viewaro-web` has an **HTTPS** remote and no
GitHub credential, so `git fetch` only works anonymously. While this repo was
briefly private (2026-08-09 to 08-13) every `v*` tag failed at the first step:

```
fatal: could not read Username for 'https://github.com': No such device or address
```

If it goes private again, fix it at the source rather than working around it:
add a read-only **deploy key** and switch the server's remote to
`git@github.com:filipbob/viewaro-web.git` — that is exactly how the private
`pausal-manager` checkout on the same host works (key `~/.ssh/gh_pausal`,
selected for github.com in the server's `~/.ssh/config`).

A release can also be moved with no credentials at all, by carrying the objects
over ssh instead of fetching them:

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
confused by a dirty tree. `v1.8.0` first reached the server this way, and the
same tag deployed again through CI once the repo was public — both paths are
verified.

`deploy/nginx/viewaro.conf` stays modified in the server's working tree — it
is the TLS variant copied over the bootstrap file. That is expected; do not
`git checkout --` it, or the site drops to HTTP-only.

## pausal-manager behind this nginx

`pausal.conf` (bootstrap) and `pausal.conf.tls-template` are the vhost for
pausal-manager, which runs as its own compose stack in `~/app/pausal-manager`
and publishes no ports. Both files are authored in the pausal-manager repo and
copied here; keep them in sync from there, not the other way round.

State as of 2026-08-13 — live at <https://pausal.itquotes.hr>:

- Serving: `pausal.conf` is the **TLS variant**, copied over the bootstrap file
  in the server's working tree (same arrangement as `viewaro.conf`). The
  bootstrap version only answers the ACME challenge and 404s; it is what runs
  before the pausal stack exists, since the TLS variant proxies to `pausal-api`
  / `pausal-web` and nginx refuses to start while those aliases do not resolve.
- DNS: `pausal.itquotes.hr` is **proxied** in Cloudflare. Order matters if this
  is ever rebuilt: turn the proxy on only after the TLS config is live. With the
  bootstrap config nothing answers on 443 for that name and the zone is on Full
  (not strict), so a proxied record would silently serve viewaro's cert.
- Cert: issued 2026-08-13, expires 2026-11-11. It renews through the same
  webroot and the existing `reload-viewaro.sh` deploy hook — that hook reloads
  this container, which is also pausal's nginx, so no second hook is needed.
  `sudo certbot renew --dry-run` passes for both names, proxy on included:
  Cloudflare forwards a plain-HTTP challenge to port 80, where the ACME location
  still lives in both variants.
- Behind the proxy, `real_ip_header CF-Connecting-IP` (+ `set_real_ip_from` on
  Cloudflare's ranges) is what keeps `$remote_addr` and the appended
  `X-Forwarded-For` entry pointing at the visitor. pausal's API reads the last
  XFF entry, so without it every visitor behind one PoP shared a login-attempt
  counter. Verified in `pausal.access.log`: visitor address through Cloudflare,
  and a direct-to-origin request carrying a forged `CF-Connecting-IP` is ignored.

Swapping the vhost after a template change (the file the deploy checks out is
the template, so this cp is needed again each time):

```sh
cd ~/app/viewaro-web
cp deploy/nginx/pausal.conf.tls-template deploy/nginx/pausal.conf
docker exec viewaro-web nginx -t     # must pass before the reload
docker exec viewaro-web nginx -s reload
```

A tagged deploy can `git checkout` cleanly even with `pausal.conf` and
`viewaro.conf` modified in place, as long as a release does not change those two
files — change the `.tls-template` files instead, then re-run the cp above.

## Tvheadend review demo behind this nginx

`tvh.conf` (bootstrap) and `tvh.conf.tls-template` are the vhost for the
Tvheadend server App Review uses to try Viewaro's Tvheadend source kind. The
server itself is its own compose stack in `~/app/tvheadend-demo`, synced from
`deploy/tvheadend-demo/` in this repo; its README is the runbook for the
container, the media and the review account.

- Network: this container joins `tvh-demo` as well as `proxy`. Only nginx and
  `tvheadend-demo` are on it, so the demo server cannot reach the pausal
  containers. Create it once, before the first deploy that carries it:
  `docker network create --subnet 172.30.40.0/24 tvh-demo`.
- DNS: `tvh.viewaro.itquotes.hr` is an A record to this server, **DNS only**
  (grey cloud). Cloudflare's self-serve CDN terms do not allow video through
  the proxy, and this host streams it. The cost is that the server's address
  is public under that name.
- Cert: issued through the same webroot as the others, once the bootstrap vhost
  is live and the name resolves here:

  ```sh
  sudo certbot certonly --webroot -w ~/app/certbot-webroot -d tvh.viewaro.itquotes.hr
  cd ~/app/viewaro-web
  cp deploy/nginx/tvh.conf.tls-template deploy/nginx/tvh.conf
  docker exec viewaro-web nginx -t && docker exec viewaro-web nginx -s reload
  ```

  Renewal rides on the existing timer and `reload-viewaro.sh` hook.
- What is forwarded: only the six paths Viewaro's Tvheadend client uses.
  Tvheadend's web UI, its imagecache and every write endpoint answer 404 here;
  the channel icons are plain files on this site, under
  `/app-review/tvheadend/`. Access is logged to `tvh.access.log`, not the
  fail2ban-parsed `access.log`.
- The vhost resolves `tvheadend-demo` per request, so nginx still starts when
  the demo stack is down; those requests get a 502 instead.
