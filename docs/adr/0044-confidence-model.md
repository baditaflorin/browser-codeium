# 0044 - Confidence Model

## Status

Accepted

## Context

Wrong-but-confident output is worse than honest partial output.

## Decision

Represent confidence as:

- Numeric score from 0 to 1.
- Label: high, medium, low.
- Reasons that explain evidence and penalties.

File-level confidence starts from parser/support evidence and is adjusted for minification, syntax errors, truncation, unsupported language, huge size, and normalization warnings. Symbol confidence inherits file confidence with small bonuses for named declarations.

## Consequences

- UI can surface uncertainty.
- Assistant output can avoid overclaiming.
- Expected fixture tests can assert confidence ranges.

## Alternatives Considered

- Boolean "valid/invalid": rejected because many real inputs are useful but partial.
