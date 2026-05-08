# 0013 - Testing Strategy

## Status

Accepted

## Context

Local checks replace GitHub Actions. Tests must be fast enough for pre-push hooks.

## Decision

Use Vitest for unit tests, Playwright for one happy-path browser test, and `scripts/smoke.sh` for the Pages build smoke test.

`make test` runs unit tests. `make smoke` builds, serves `docs/`, and runs Playwright against the static output.

## Consequences

- Core logic has fast feedback.
- The deployed shape of the app is tested locally.
- No remote CI is required.

## Alternatives Considered

- GitHub Actions: rejected by project constraints.
- Manual-only browser checks: rejected because Pages base path issues are easy to miss.
