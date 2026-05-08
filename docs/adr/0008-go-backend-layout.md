# 0008 - Go Backend Project Layout

## Status

Accepted

## Context

The bootstrap rules require Go layout only for Mode B or Mode C.

## Decision

Skip Go backend directories in v1.

No `cmd/`, `internal/`, `pkg/`, `api/`, `configs/`, or Docker backend is created because ADR 0001 chooses Mode A.

## Consequences

- The repository remains frontend-focused.
- Backend conventions can be introduced later if the project graduates to Mode B or Mode C.

## Alternatives Considered

- Add empty Go directories: rejected because placeholder backend structure would misrepresent the architecture.
