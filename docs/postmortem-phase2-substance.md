# Phase 2 Substance Postmortem

Date: 2026-05-09

Release: v0.2.0

Live site: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

## Real-Data Pass Rate

Before: 3/10 fixtures were useful without manual interpretation.

After: 10/10 fixtures pass the committed real-data gate.

| Fixture                 | Before  | After | Evidence                                                             |
| ----------------------- | ------- | ----- | -------------------------------------------------------------------- |
| React Hooks             | Partial | Pass  | Detects normal module, high confidence, required hook symbols.       |
| Next client             | Partial | Pass  | Detects entrypoint and `renderApp`.                                  |
| Vue component           | Partial | Pass  | Detects framework runtime and prioritizes `createComponentInstance`. |
| TypeScript checker      | Fail    | Pass  | Detects huge-file state and avoids deep parse.                       |
| Prettier postprocess    | Partial | Pass  | Detects transformation pipeline.                                     |
| Django base             | Fail    | Pass  | Explicit unsupported-language state.                                 |
| Kubernetes scheduler    | Fail    | Pass  | Explicit unsupported-language state.                                 |
| jQuery minified         | Fail    | Pass  | Detects minified bundle with low confidence.                         |
| Svelte client index     | Partial | Pass  | Detects multiline barrel file.                                       |
| Truncated checker paste | Fail    | Pass  | Detects partial input with low confidence.                           |

## Top Logic Gaps

1. JS/TS-only analysis looked broader than it was. Closed with explicit language classification, unsupported states, confidence, and next steps.
2. Large-file behavior was silent. Closed with skipped-file reporting, a 5MB import cap, huge-file classification, and low-confidence lightweight output.
3. The outline was flat. Improved with file-shape inference for entrypoint, framework runtime, pipeline, barrel, minified, partial, huge, empty, and unsupported inputs.
4. Confidence did not exist. Closed with file-level confidence, symbol confidence, deterministic IDs, and visible reasoning.
5. Errors were not actionable. Closed with structured diagnostics containing what, why, and now what.

## Smart Behaviors

- First useful guess: the active file now auto-analyzes and caches repeat runs.
- Honest uncertainty: weak inputs surface low confidence in the UI and assistant draft.
- Domain-shaped classification: real fixtures are classified as entrypoint, pipeline, barrel, framework runtime, minified, partial, huge, normal, or unsupported.
- Recoverable guidance: skipped files, unsupported languages, minified bundles, and partial inputs all include user-facing next steps.
- Inspectability: `?debug=1` exposes source hash, diagnostics, anomalies, confidence, and file shape.

## Determinism

All 10 fixtures pass the deterministic analysis check after normalizing timing fields. The output carries schema version, app version, source hash, and analysis parameters.

## Performance

Measurement details: https://github.com/baditaflorin/browser-codeium/blob/main/docs/perf/phase2-realdata.md

Median fixture median: 0.85ms.

Worst observed run: 129.70ms on the TypeScript huge-file guard path.

No fixture crossed the 300ms progress threshold in the local measurement. Cancellation is still wired for manual analysis because browser tree-sitter grammar loading can vary by cache state.

## Surprises

- Multiline barrel files need statement-level detection; line-ratio heuristics missed Svelte's export blocks.
- Import/export pseudo-symbols can crowd real declarations out of a capped outline, so declaration priority matters.
- The partial-input heuristic was too eager when it looked at any line near the end instead of the final source tail.

## Still Open

1. Move deep parsing to a Web Worker for better main-thread isolation.
2. Add language-aware lightweight outlines for Python and Go instead of only honest unsupported states.
3. Group symbols by role, such as public API, lifecycle, bootstrap, and helpers.
4. Add line-level syntax error localization and recovery hints.
5. Add a canonical export/import analysis artifact if an export feature becomes in-scope.

## Honest Take

The app no longer feels like a toy for the audited code-understanding flow. It still is not a full IDE or semantic index, but it now behaves like a careful static workspace: it guesses useful structure quickly, admits weak evidence, and tells the user what to do next instead of pretending every input is clean TypeScript.
