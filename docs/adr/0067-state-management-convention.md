# 0067 - State-Management Convention

## Status

Accepted

## Context

Some user state is persisted while adjacent state is transient, and the root component handles everything directly.

## Decision

Model state in three layers:

- Persisted workspace state
- Persisted user settings
- Ephemeral derived UI state such as current analysis, toasts, and generated assistant drafts

Transient state must be reset explicitly when workspace identity changes.

## Consequences

- Reload behavior becomes predictable.
- Importing a workspace can invalidate only the right state.

## Alternatives Considered

- Persist every bit of UI state: rejected because it adds migration burden without helping core user workflows.
