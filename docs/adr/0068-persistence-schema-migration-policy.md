# 0068 - Persistence Schema and Migration Policy

## Status

Accepted

## Context

Phase 3 adds settings persistence and workspace state export/import, so schema evolution can no longer be implicit.

## Decision

- Persist workspace and settings under explicit versioned schemas.
- Exported state files include schema version and app metadata.
- Imported state is migrated or rejected with an actionable message.
- Storage loaders migrate old saved data forward before use.

## Consequences

- Version bumps can preserve user data.
- Round-trip testing becomes reliable.

## Alternatives Considered

- Keep versioning only in docs: rejected because exported/imported state is now part of the product contract.
