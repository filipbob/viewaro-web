# viewaro-web

Marketing site for **Viewaro** — an IPTV player for iPhone, iPad, Mac,
Apple TV, Android and Android TV.

Live at: **https://viewaro.itquotes.hr**

## Route contract

The Viewaro apps link to these routes from their Settings/About screens, so
the paths themselves are part of the app contract and must not change:

| Route | Purpose |
|---|---|
| `/` | Landing page (marketing URL for App Store / Play Store) |
| `/privacy` | Privacy policy (required by both stores) |
| `/terms` | Terms of use / EULA (required for subscriptions) |
| `/support` | Support page (required by both stores) |

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**
- `output: "export"` — the whole site is pre-rendered to static HTML at
  build time (`next.config.ts`). No server runtime, no API routes, no
  database. This is what makes the site simple enough to run as one small
  Docker image.

## Project structure

```
src/app/
├── layout.tsx           # <html>/<body>, fonts, metadata, OG tags
├── page.tsx              # landing page (hero, features, how-it-works, FAQ)
├── privacy/page.tsx
├── terms/page.tsx
└── support/page.tsx

src/components/
├── SiteHeader.tsx         # sticky pill nav, shared across all pages
├── SiteFooter.tsx         # shared footer (nav, copyright, itQuotes link)
└── LegalShell.tsx         # page shell for privacy/terms/support (title +
                            # "Last updated" + prose styling from .legal in
                            # globals.css)

public/logo.png            # Viewaro app icon master (TV + feather mark)

Dockerfile                 # multi-stage: Node build -> nginx:alpine serve
docker-compose.yml          # the one container this site runs as
deploy/                    # server-side nginx config + ops runbook
```

## Local development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
```

## Production: self-hosted on a VPS

This is **not** deployed to Vercel/GitHub Pages — it runs as a single
Docker container on a private VPS (`oracle-server`), behind nginx with a
Let's Encrypt certificate.

```
Internet ──443/80──▶ ufw ──▶ Docker (nginx:alpine, container "viewaro-web")
                                │
                                ├─ serves /usr/share/nginx/html (the static export)
                                ├─ TLS: /etc/letsencrypt (bind-mounted, host-managed certbot)
                                └─ logs: ~/app/nginx-logs/{access,error}.log (bind-mounted)
```

**Why logs are bind-mounted, and why that matters:** the host also runs
`fail2ban` (jails: `sshd`, `nginx-http-auth`, `nginx-botsearch`,
`nginx-limit-req`, all banning via `ufw`). fail2ban cannot see inside a
container's filesystem, so nginx's access/error logs are bind-mounted out to
`~/app/nginx-logs/` on the host, where fail2ban's jails read them.

That alone wasn't enough, and is worth remembering if this ever gets
rebuilt: Ubuntu's default fail2ban `backend = auto` prefers the **systemd
journal** over the configured `logpath` whenever a filter defines
`journalmatch` — which every nginx filter does. A container's nginx never
logs to the host's `nginx.service` journal, so with `backend = auto` these
jails silently do nothing, no error, no warning. The fix (already applied on
the server, not part of this repo since it's host policy, not app config)
is an explicit `backend = polling` in `/etc/fail2ban/jail.d/nginx.local` for
the three nginx jails.

Full deploy / TLS renewal / update procedure: **[deploy/README.md](deploy/README.md)**.

## Notes

- The logo (`public/logo.png`) is the Viewaro app icon master, owned by
  ITQuotes.
- Support email on `/support` is `support@itquotes.hr` — make sure the
  mailbox exists before store submission.
- Legal pages carry a "Last updated" date — bump it when editing them.
