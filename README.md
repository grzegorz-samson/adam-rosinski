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

## GitHub Pages

This repository is configured for project-style GitHub Pages deployments:

- repository URL: `https://github.com/<your-user>/adam-rosinski`
- site URL: `https://<your-user>.github.io/adam-rosinski/`

The Astro config detects GitHub Actions and automatically sets:

- `site` to `https://<github-owner>.github.io`
- `base` to `/<repo-name>` for non-`<user>.github.io` repositories

The deployment workflow lives in `.github/workflows/deploy.yml`.
