# 0061 - Input Pathway Coverage Policy

## Status

Accepted

## Context

The app currently depends on a sample loader or Chromium folder picker.

## Decision

Support these first-class input paths in Mode A:

- Sample workspace
- Multi-file upload through standard file input
- Drag and drop of files
- Paste raw text into a new file
- Import versioned workspace state files
- Optional Chromium folder picker when available

Unsupported sources such as remote URL fetch will remain out of scope unless they can be handled honestly without a backend.

## Consequences

- Non-Chromium browsers gain a usable path.
- Input validation must move to reusable boundary schemas.

## Alternatives Considered

- Keep folder picker as the primary “real” path: rejected because it excludes too many browsers and devices.
