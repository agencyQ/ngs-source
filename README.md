# ngs-source

No Greater Sacrifice — production website backed by Acquia Source (Drupal CMS 2.0) with a Next.js 16 App Router frontend.

## Status

Spike phase. See `docs/` for design spec and implementation plan (copied from the design archive in `agencyQ/no-greater-sacrifice`).

## Structure

- `nextjs/` — Next.js 16 App Router app, deploys to Vercel
- `drupal/` — Drupal-side IaC artifacts (config exports, custom modules)

## Quickstart

```bash
pnpm install
cp nextjs/.env.example nextjs/.env.local
# Fill in Acquia Source OAuth credentials
pnpm dev
```

## Deployment

Vercel `agency-q-sandbox` team. Preview deploys on every PR.

## Design archive

The visual reference and prior design history live at `agencyQ/no-greater-sacrifice` (frozen at tag `v1.0-design-archive`).
