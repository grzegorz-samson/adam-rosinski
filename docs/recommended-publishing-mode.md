# Recommended Publishing Mode

## Goal

Publish the current website to:

- `https://grzegorz-samson.github.io/adam-rosinski/`

in the most stable way, without relying on GitHub Pages to build the Astro project from source.

## Recommended Mode

Use:

- local Astro build
- static output from `dist/`
- deploy only the built files to branch `gh-pages`

Do not use GitHub Pages in the old "build Astro from source on `gh-pages`" style.

## Why This Is Recommended

The source-based `legacy` Pages flow caused unstable results:

- builds could hang or fail
- GitHub Pages could serve an outdated version
- branch `gh-pages` could contain source files instead of actual site output

The static-output approach is simpler and safer:

- build happens locally, under control
- `gh-pages` contains only production-ready files
- no `docs`, `context`, `src`, `package.json`, or other authoring files need to be public
- deploy behavior is easy to verify

## What Should Be Published

Only the static site output:

- `index.html`
- route folders such as `about/`, `publications/`, `contact/`
- `_astro/`
- `images/`
- `favicon.svg`
- `.nojekyll`

## What Should Not Be Published

Do not publish:

- `docs/`
- `docs/context/`
- `docs/edit-scripts/`
- `tasks/`
- `src/`
- `node_modules/`
- `dist/` as a folder inside the repo branch
- local helper scripts
- any private working materials

## Required GitHub Pages Settings

Repository Pages settings should stay:

- source branch: `gh-pages`
- source path: `/`

## Recommended Release Procedure

From repo root:

```powershell
$env:GITHUB_ACTIONS='true'
$env:GITHUB_REPOSITORY_OWNER='grzegorz-samson'
$env:GITHUB_REPOSITORY='grzegorz-samson/adam-rosinski'
npm run build
```

This ensures Astro builds with the correct GitHub Pages base path:

- `/adam-rosinski/`

Then publish the contents of `dist/` to `gh-pages`, not the project source.

## Safe Deploy Logic

1. Build locally with GitHub Pages environment variables.
2. Confirm `dist/index.html` exists.
3. Replace branch `gh-pages` contents with files from `dist/`.
4. Add `.nojekyll`.
5. Commit to `gh-pages`.
6. Push `gh-pages`.
7. Verify the Pages status and public URL.

## Verification Checklist

After deploy, verify:

- `gh api repos/grzegorz-samson/adam-rosinski/pages`
- status is `built`
- latest Pages build points to the expected `gh-pages` commit
- `https://grzegorz-samson.github.io/adam-rosinski/` returns `HTTP 200`
- homepage content matches the latest update

## Important Note

If GitHub Pages shows `building` for too long or still serves an older version, check whether:

- `gh-pages` accidentally contains source files instead of built output
- `index.html` exists at the root of `gh-pages`
- the latest pushed commit really contains the `_astro/` assets and route folders

## Summary

For future updates, the recommended publication model is:

- edit on the working branch
- build locally
- publish only static output to `gh-pages`

This is the current stable deployment path for this repo.
