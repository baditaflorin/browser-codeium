# 0003 - Frontend Framework and Build Tooling

## Status

Accepted

## Context

The frontend needs a component model, strict TypeScript, fast local development, and a Pages-compatible static build.

## Decision

Use React, TypeScript strict mode, Vite, Tailwind CSS, TanStack Query, Zod, Vitest, and Playwright.

Vite builds directly into `docs/`, with `base` set to `/browser-codeium/`. Monaco is lazy-loaded so the initial app shell stays small.

## Consequences

- Development remains fast and familiar.
- Static assets are hashed for cache busting.
- The Pages publish directory is committed.

## Alternatives Considered

- Vanilla TypeScript: rejected because the app has enough stateful UI to benefit from React.
- Next.js: rejected because server features are unnecessary for Mode A.
