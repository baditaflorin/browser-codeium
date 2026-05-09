# 0065 - Module Boundaries and Dependency Direction

## Status

Accepted

## Context

The root app owns too many responsibilities, which slows feature completion and testing.

## Decision

Use this dependency direction:

- UI components depend on hooks/helpers, not raw storage or transfer logic.
- Workspace/session helpers own import/export/migration/storage behavior.
- Analysis helpers remain separate from workspace transfer concerns.

## Consequences

- The shell becomes thinner.
- Session lifecycle work is easier to test without UI.

## Alternatives Considered

- Keep all orchestration in `App.tsx`: rejected because it already carries too much state and branching.
