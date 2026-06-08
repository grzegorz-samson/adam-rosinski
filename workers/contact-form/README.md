# Contact Form Worker

Cloudflare Worker endpoint for the Adam Rosiński contact form.

## Runtime

- Cloudflare Worker on `workers.dev`
- Cloudflare Turnstile for anti-spam verification
- Resend for email delivery

## Local setup

1. Copy `.dev.vars.example` to `.dev.vars`.
2. Fill in:
   - `TURNSTILE_SECRET_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL=contact@adamrosinski.com`
   - `CONTACT_FROM_EMAIL=forms@adamrosinski.com`
3. Run:

```powershell
npx wrangler dev --config workers/contact-form/wrangler.toml
```

Local frontend fallback expects the worker at:

`http://127.0.0.1:8787/contact`

## Deploy

```powershell
npx wrangler secret put TURNSTILE_SECRET_KEY --config workers/contact-form/wrangler.toml
npx wrangler secret put RESEND_API_KEY --config workers/contact-form/wrangler.toml
npx wrangler secret put CONTACT_TO_EMAIL --config workers/contact-form/wrangler.toml
npx wrangler secret put CONTACT_FROM_EMAIL --config workers/contact-form/wrangler.toml
npx wrangler deploy --config workers/contact-form/wrangler.toml
```

## Frontend env vars

Set these before `npm run build` or `scripts/deploy.ps1`:

```powershell
$env:PUBLIC_CONTACT_FORM_ENDPOINT = "https://<worker-subdomain>.workers.dev/contact"
$env:PUBLIC_TURNSTILE_SITE_KEY = "<turnstile-site-key>"
```
