# 0046 - Performance Budgets

## Status

Accepted

## Context

Real files range from empty to multi-megabyte compiler internals.

## Decision

Budgets:

- Under 100KB: useful first result under 1s median.
- 100KB to 750KB: deep analysis allowed, progress state required.
- 750KB to 5MB: lightweight analysis only unless a later worker implementation exists.
- Over 5MB: skip on import with reason.
- Operations over 5s must be cancellable.

## Consequences

- Huge files do not freeze the UI.
- Fixture performance is documented in `docs/perf/`.

## Alternatives Considered

- Parse every file deeply: rejected because v1 runs in the browser main thread.
