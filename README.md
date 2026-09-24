# viewaro-web

Marketing and support site for **Viewaro 1.0**, a native IPTV player for Macs
running macOS 15 or later. The current release imports user-provided M3U/M3U8
playlists and includes no channels, playlists, media subscriptions, Viewaro
account, or cloud sync.

iPhone, iPad, Apple TV, Android and Android TV are roadmap platforms and are
not available in the current macOS release.

Live at: **https://viewaro.itquotes.hr**

## Route contract

The Viewaro apps link to these routes from their Settings/About screens, so
the paths themselves are part of the app contract and must not change:

| Route | Purpose |
|---|---|
| `/` | Landing page (marketing URL for the Mac App Store) |
| `/privacy` | Privacy policy (required by the Mac App Store) |
| `/terms` | Terms of use / EULA (required for subscriptions) |
| `/support` | Support page (required by the Mac App Store) |
| `/app-review` | Non-indexed App Review instructions for the three demo sources |

The review page walks App Review through one demo per source type: the M3U
playlist below, and the Tvheadend and Xtream Codes-compatible servers from
[`deploy/tvheadend-demo/`](deploy/tvheadend-demo/README.md). It gives their
addresses and form steps but never the account: the two servers share one
review login, which the owner gives Apple only in App Store Connect's App
Review Information, so the page refers the reviewer there. It also says that
the free tier holds one source at a time, and that the default player must
stay on Automatic, because only the Compatibility Player opens the Tvheadend
demo's MPEG-TS.

The M3U part links to generated fixtures at
`/app-review/viewaro-demo.m3u8` and `/app-review/viewaro-demo.xml`. The
playlist contains six fictional channels and points only to Apple's public HLS
developer sample; it includes the XMLTV address in its `x-tvg-url` header. Run
`npm run validate:review-demo` after generation to verify the feed contract, or
pass `-- --base-url=https://viewaro.itquotes.hr` to validate the deployed files
and their response content types.

A separate, unlinked compatibility fixture is available at
`/app-review/viewaro-vlc-dash.m3u8`. It contains three fictional test channels
that point to public Shaka and Akamai MPEG-DASH assets. This feed is for the
isolated VLCKit compatibility suite; it is not part of the Apple-review guide
and does not change the six-channel HLS reviewer feed. Run
`npm run validate:vlc-dash-demo` locally, or append
`-- --base-url=https://viewaro.itquotes.hr` to validate the deployed playlist,
content type, and upstream MPD manifests.

The unlinked `/app-review/viewaro-playback-matrix.m3u8` fixture contains four
synthetic channels for Viewaro's signed VLC hardening suite: HLS, MPEG-TS, MP4,
and MKV. All media is generated from FFmpeg test patterns, sine tones, and the
repository-owned caption fixture; it contains no provider credentials, user
playlist data, or third-party programme. Regenerate the media with
`scripts/generate-playback-matrix-media.sh`, then run
`npm run validate:playback-matrix` locally. Append
`-- --base-url=https://viewaro.itquotes.hr` to validate the deployed assets.

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
npm run validate:review-demo
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
