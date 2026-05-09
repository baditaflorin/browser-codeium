# 0071 - Stranger-Test Findings and Response

## Status

Accepted

## Context

Phase 3 requires a cold-start stranger workflow instead of a happy-path developer demo.

## Decision

The stranger test for v0.3.0 is:

- Import a normal local file.
- Let auto-analysis run.
- Export state.
- Change a setting and reload immediately.
- Copy a share link.
- Start fresh.
- Restore from the exported state.
- Re-open from the share link.

The release is not complete unless that flow passes without manual repair.

## Consequences

- Settings persistence must survive immediate reloads.
- Import/export/share are treated as a single usable workflow, not isolated buttons.

## Alternatives Considered

- Treat manual spot-checking as enough: rejected because this phase is explicitly about stranger usability.
