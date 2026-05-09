# 0047 - Error Taxonomy and Messaging

## Status

Accepted

## Context

V1 diagnostics do not consistently say what failed, why, and what to do next.

## Decision

Every recoverable diagnostic has:

- `what`: user-facing failure or finding.
- `why`: domain-level cause.
- `nowWhat`: specific next action.
- `severity`: info, warning, or error.

Fatal errors are reserved for unexpected engine failures and must keep source text intact.

## Consequences

- Tests can assert actionable diagnostics.
- Assistant can reuse diagnostics without inventing explanations.

## Alternatives Considered

- Raw exception messages: rejected because they are not domain guidance.
