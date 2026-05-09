# 0062 - Output Pathway Coverage Policy

## Status

Accepted

## Context

Users can edit and analyze code but cannot reliably export or share their work.

## Decision

Support these first-class outputs in Mode A:

- Download workspace state as versioned JSON
- Import the same state JSON later
- Download the active file
- Copy the active file
- Copy the assistant draft
- Share small workspaces through the URL hash

Print/PDF and backend-driven share tokens remain out of scope.

## Consequences

- Round-trip tests become a required part of the product contract.
- The app needs size limits and messaging for URL-based sharing.

## Alternatives Considered

- Keep IndexedDB as the only persistence path: rejected because it traps user work in one browser profile.
