# 0017 - Dependency Policy

## Status

Accepted

## Context

The app should use production-ready libraries rather than custom implementations for editor, parsing, data fetching, validation, and testing.

## Decision

Use established packages for core needs:

- Monaco for editor UI.
- `web-tree-sitter` and `@vscode/tree-sitter-wasm` for parsing.
- TanStack Query for fetch caching.
- Zod for runtime validation.
- Vite, Vitest, ESLint, Prettier, and Playwright for local delivery.

Dependencies must pass `npm audit` with no high or critical vulnerabilities before release.

## Consequences

- More behavior comes from maintained libraries.
- Bundle size is managed through lazy loading and asset budgets.

## Alternatives Considered

- Handwritten editor/parser/test harness: rejected as fragile and outside v1 scope.
