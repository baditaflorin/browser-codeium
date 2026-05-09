# 0064 - DRY Consolidation Map

## Status

Accepted

## Context

The root app currently repeats reset, toast, and session-transition logic.

## Decision

Consolidate around:

- Shared workspace transfer utilities for import/export/share
- Shared storage helpers for workspace + settings
- Shared session reset helpers for “workspace changed, invalidate derived state”
- Smaller hooks/modules instead of repeating orchestration branches in `App.tsx`

## Consequences

- `App.tsx` shrinks and becomes easier to reason about.
- New input/output features can share the same boundaries and migration rules.

## Alternatives Considered

- Aggressive abstraction across analysis internals: rejected because it risks worse abstractions for little Phase 3 payoff.
