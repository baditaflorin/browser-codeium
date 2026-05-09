# 0040 - Real-Data Audit Findings and Substance Metrics

## Status

Accepted

## Context

The v1 happy path works on the sample TypeScript file but degrades on real repositories: huge files are skipped, unsupported languages look analyzable, and complex modules become flat symbol lists.

## Decision

Use the 10-input audit in `docs/phase2-substance/realdata-audit.md` as the Phase 2 grading rubric. Phase 2 succeeds when at least 7 of 10 fixtures produce a useful, honest first-pass analysis without manual configuration.

## Consequences

- Tests must encode real fixture expectations.
- Low-confidence output is acceptable; silent wrongness is not.
- Performance and determinism are measured against the fixture set.

## Alternatives Considered

- Continue optimizing the curated demo: rejected because it would not improve real-project behavior.
