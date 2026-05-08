# 0010 - GitHub Pages Publishing Strategy

## Status

Accepted

## Context

The live site must work from day one and every build must produce a Pages-ready directory committed to the repository.

## Decision

Serve GitHub Pages from the `main` branch `/docs` directory.

Vite builds into `docs/` with base path `/browser-codeium/`. The repository does not gitignore `docs/`. Hashed assets live under `docs/assets/`. A `docs/404.html` fallback supports SPA routes.

## Consequences

- A simple push to `main` publishes the app.
- The built site is reviewable in git.
- `dist/` remains ignored, while `docs/` is committed.

## Alternatives Considered

- `gh-pages` branch: rejected to keep publish state visible on `main`.
- Pages from repo root: rejected to avoid mixing source and built assets.
