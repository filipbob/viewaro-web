# viewaro-web

Marketing site for **Viewaro** — an IPTV player for iPhone, iPad, Mac,
Apple TV, Android and Android TV.

Production URL: `https://viewaro.itquotes.hr`

The Viewaro apps link to these routes from their Settings/About screens, so
the paths are part of the app contract:

| Route | Purpose |
|---|---|
| `/` | Landing page (marketing URL for App Store / Play Store) |
| `/privacy` | Privacy policy (required by both stores) |
| `/terms` | Terms of use / EULA (required for subscriptions) |
| `/support` | Support page (required by both stores) |

## Stack

Next.js (App Router) + Tailwind CSS 4 + TypeScript. No backend, fully static
content — deployable on Vercel or any static host.

## Development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Notes

- The logo (`public/logo.png`) is the Viewaro app icon master (TV + feather
  mark, owned by Filip Bobinac).
- Support email on `/support` is `support@itquotes.hr` — make sure the
  mailbox exists before store submission.
- Legal pages carry a "Last updated" date — bump it when editing them.
