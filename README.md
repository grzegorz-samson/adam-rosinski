# Adam Rosiński Website

Astro site configured for deployment to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact form

The public contact form uses:

- Cloudflare Turnstile
- Cloudflare Worker on `workers.dev`
- Resend for mail delivery

Frontend build-time variables:

```bash
PUBLIC_CONTACT_FORM_ENDPOINT=https://<worker-subdomain>.workers.dev/contact
PUBLIC_TURNSTILE_SITE_KEY=<turnstile-site-key>
```

Worker setup lives in `workers/contact-form/`.

## GitHub Pages

This repository is configured for project-style GitHub Pages deployments:

- repository URL: `https://github.com/<your-user>/adam-rosinski`
- site URL: `https://<your-user>.github.io/adam-rosinski/`

The Astro config supports a project base path so the site can be deployed under `/<repo-name>/`.
