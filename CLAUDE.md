# Project rules

## Writing style (STRICT)

NEVER use em dashes (—, U+2014) or horizontal bars (―) in ANY output: site content, code, comments, commit messages, documents, or chat replies. This is a hard rule with no exceptions.

When a pause or break is needed, use a comma, a colon, a semicolon, parentheses, or split into two sentences. For a literal dash, use a normal hyphen (-).

This applies to everything generated for Michael / dewgrave and, by his standing instruction, to all of his sites.

## Site notes

- Hosting: Cloudflare Pages project `drewgrave`; `deploy_v3` is the live folder; deploy with `wrangler pages deploy deploy_v3 --project-name drewgrave --branch dewgrave`.
- Content is in the D1 database `dewgrave-cms` (bound as `DB`); the public SPA reads it via `/api/content`. Static `index.html` holds fallback copies.
- See `ADMIN_SETUP.md` for the admin, login, analytics, and contact-form details.
