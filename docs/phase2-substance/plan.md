# Phase 2 Substance Plan

This plan is ranked by impact on the 10 real-data audit inputs, not by implementation novelty.

## Success Definition

The app stops acting like a demo parser and starts acting like a code-understanding workspace: it identifies the kind of file it is looking at, admits uncertainty, gives useful first-pass structure, avoids silent skips, and tells the user what to do next when it cannot analyze something well.

## Picklist

| Rank | Catalog | Item                                 | Real-data impact                                                                               |
| ---- | ------: | ------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 1    |      16 | Confidence scores on every inference | Prevents minified, partial, unsupported, and weak outlines from sounding authoritative.        |
| 2    |      32 | Actionable errors                    | Turns weak states into what/why/now-what guidance.                                             |
| 3    |       6 | Auto-detect structure                | Detects minified bundle, barrel file, entrypoint, pipeline, huge, partial, empty, unsupported. |
| 4    |      13 | Recognize common shapes              | Makes framework and repo files feel understood.                                                |
| 5    |       3 | Huge inputs                          | Stops silent skip and main-thread cliff on large files.                                        |
| 6    |      24 | Enumerate reachable states           | Makes loading/unsupported/partial/huge/error states intentional.                               |
| 7    |      25 | No stuck states                      | Every failure has an exit path.                                                                |
| 8    |      27 | Concurrency safety                   | Double-click Analyze and file switches are deterministic.                                      |
| 9    |      26 | Cancellation actually cancels        | Long analysis can be aborted without corrupting state.                                         |
| 10   |       2 | Encoding and format variants         | Normalize BOM, CRLF, NBSP, and suspicious replacement chars.                                   |
| 11   |       4 | Partial inputs                       | Identify likely truncation and keep low-confidence partial outline.                            |
| 12   |       5 | Adversarial input                    | Minified/broken code no longer gets confident output.                                          |
| 13   |      17 | Suggest fixes                        | Diagnostics recommend concrete next actions.                                                   |
| 14   |      18 | Surface anomalies                    | Report syntax errors, huge files, minified files, skipped files, empty files.                  |
| 15   |      19 | Explain decisions                    | File-shape and confidence reasons are visible.                                                 |
| 16   |      11 | Domain vocabulary                    | UI says "barrel file", "entrypoint", "minified bundle", "unsupported language".                |
| 17   |      12 | Domain-aware validation              | Detect suspicious year, missing parser, unsupported language, skipped size.                    |
| 18   |      15 | Domain conventions                   | Respect indentation, line endings, minification, and module export conventions.                |
| 19   |      22 | Stable IDs                           | Symbols and diagnostics have deterministic IDs.                                                |
| 20   |      31 | Cache expensive things               | Re-analysis of same file is instant and deterministic.                                         |
| 21   |      28 | Profile real-data inputs             | Document timings for the audit set.                                                            |
| 22   |      35 | Deterministic outputs                | Same fixture produces byte-identical analysis JSON.                                            |
| 23   |      37 | Debug overlay                        | `?debug=1` shows analysis internals without new product surface.                               |
| 24   |      38 | Output provenance                    | Analysis carries source hash, schema version, app version, parameters.                         |
| 25   |      33 | Validate at boundaries               | Static data, fixtures, workspace files, and analysis inputs are schema-checked.                |
| 26   |      34 | Recoverable vs fatal explicit        | Recoverable errors keep workspace state.                                                       |
| 27   |       8 | Useful first guess on first input    | Auto-run analysis when a file becomes active and is safe to analyze.                           |
| 28   |       1 | Fuzz parser                          | Real fixtures plus synthetic edge cases assert no crashes.                                     |

## Deliberately Not Picked

- 14 Domain-aware export: v1 has no export surface, and adding one would be a new feature.
- 20 Pipelines: no multi-operation flow exists yet.
- 21 Lossless round-trip: no export/import state format exists yet.
- 23 Inverse operations: undo beyond current editor behavior would be a new feature.
- 29 Heavy work off main thread: useful later, but confidence, huge-file cliffs, and cancellation are higher impact now.
- 30 Stream where possible: deferred until worker/indexed parsing exists.
- 39/40 Learning from interaction: correction UI does not exist yet.

## Implementation Order

1. Fixtures and deterministic expected properties.
2. Analysis schema v2: file shape, confidence, diagnostics, stable IDs, provenance.
3. Input normalization and unsupported/huge/minified/partial handling.
4. Workspace skipped-file reports and explicit states.
5. UI surfacing in existing panels only.
6. Cancellation, cache, auto-first-guess, and debug mode.
7. Fixture tests, performance notes, postmortem, version bump.
