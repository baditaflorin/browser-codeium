# Deployment

Live URL: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

## Publishing Strategy

GitHub Pages serves the `main` branch from `/docs`.

Source files live outside `docs/`. The Vite build writes the public app into `docs/` while preserving documentation such as `docs/adr/`.

## Manual Publish

```sh
npm install
make build
git add docs public package-lock.json
git commit -m "build: publish pages"
git push
```

## Preview Pages Locally

```sh
make build
make pages-preview
```

Local preview URL: http://127.0.0.1:4179/browser-codeium/

## Rollback

Revert the publishing commit and push:

```sh
git revert <commit_sha>
git push
```

GitHub Pages will republish the reverted `docs/` contents from `main`.

## Custom Domain

No custom domain is configured in v1.

If a custom domain is added later, commit `docs/CNAME` with the domain and point DNS at GitHub Pages according to:

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Pages Gotchas

- GitHub Pages does not support `_headers` or `_redirects`.
- SPA fallback is handled by copying `docs/index.html` to `docs/404.html`.
- Vite `base` is `/browser-codeium/`.
- Service worker scope is `/browser-codeium/`.
- Cache busting comes from hashed Vite assets in `docs/assets/`.
