# 0041 - Input Robustness and Normalization Policy

## Status

Accepted

## Context

Real source files include BOMs, CRLF line endings, NBSP, replacement characters, minified code, empty files, and partial pastes.

## Decision

Normalize analysis input without mutating editor text:

- Strip UTF-8 BOM for analysis.
- Normalize CRLF/CR to LF for deterministic line numbers.
- Convert NBSP to ordinary spaces for heuristics.
- Detect Unicode replacement characters and report possible encoding loss.
- Detect empty, minified, huge, and partial files before deep parsing.

## Consequences

- Analysis is deterministic across platforms.
- The editor preserves the user's original content.
- Diagnostics explain normalization when it affects confidence.

## Alternatives Considered

- Mutate file contents on load: rejected because analysis should not rewrite user code.
