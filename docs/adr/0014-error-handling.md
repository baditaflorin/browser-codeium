# 0014 - Error Handling Conventions

## Status

Accepted

## Context

Browser APIs, WASM loading, and storage can fail. Failures should be recoverable and clear.

## Decision

Use typed result objects for recoverable domain operations and React error boundaries for unexpected render failures. UI errors appear in a global toast region and in the relevant panel.

## Consequences

- Users can understand parser, storage, or capability failures.
- Tests can assert failure messages without relying on console output.

## Alternatives Considered

- Throwing from all feature functions: rejected because it makes recoverable errors harder to handle in UI flows.
