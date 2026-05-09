# 0069 - Type-Safety Policy at Boundaries

## Status

Accepted

## Context

New import/export pathways introduce new untrusted data boundaries.

## Decision

Use `zod` schemas at every new boundary:

- Uploaded/imported workspace snapshots
- Shareable URL payloads
- Persisted settings records
- Imported text/file payload normalization

## Consequences

- Unknown data is validated before entering app state.
- Future migrations have a typed contract to target.

## Alternatives Considered

- Trust internal JSON because the app writes it itself: rejected because imported files and shared URLs are untrusted.
