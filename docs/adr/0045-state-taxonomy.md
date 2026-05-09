# 0045 - State Taxonomy and State Machine

## Status

Accepted

## Context

Users can hit half-loaded, unsupported, in-progress, skipped-file, cancelled, and storage-error states.

## Decision

Document states in `docs/phase2-substance/states.md` and make the UI expose explicit exits for recoverable states.

## Consequences

- No stuck state should survive testing.
- Cancellation and double-run behavior are defined.

## Alternatives Considered

- Let React state imply the state machine: rejected because implicit state produced silent skips and weak feedback.
