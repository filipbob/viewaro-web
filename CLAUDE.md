# viewaro-web — project rules

Project overview, routes and deploy: [README.md](README.md), [deploy/README.md](deploy/README.md).

## Personal data on the site — STRICT RULE

Never put any personal data of the owner (or any other private person) on the
website without the owner's explicit, written approval for that exact text:

- first name / surname (e.g. the "vl. …" owner suffix of the obrt name)
- postal or street address
- mobile or phone number
- OIB or any other personal identifier

This covers every locale in `src/i18n/dictionaries/*.ts`,
`src/i18n/metadata-copy.json`, page components, metadata/OG tags, generated
fixtures and docs that get published. The public provider name is
**IT QUOTES** only, and the only public contact is
`support@itquotes.hr`.

If a store review, law or template seems to require such data, stop and ask
the owner first — do not add it "temporarily" and do not copy it from git
history or older builds. Before any commit or deploy, check:

```sh
grep -rniE 'bobinac|blažon|vukomere|\+385|tel:' src scripts deploy README.md
```

It must return nothing.
