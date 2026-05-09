# Phase 2 Substance Real-Data Audit

Date: 2026-05-08

Product: browser-codeium v0.1.0

Current happy path audited: open/load a file, run analysis, read the structure panel, generate the local assistant draft.

## 10 Real-World Inputs

| #   | Input                             | Shape                                                | Source                                                                                              | What v1 did                                                                                                                                                      | What it should have done                                                                                                                                  | Failure mode                                              | Manual work v1 forces                                          |
| --- | --------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------- |
| 1   | React `ReactHooks.js`             | Clean JavaScript, Flow-ish imports, 6.7KB            | https://raw.githubusercontent.com/facebook/react/main/packages/react/src/ReactHooks.js              | Tree-sitter parses and lists imports/exports/functions. Assistant gives generic "add tests" style advice.                                                        | Recognize this as framework/library API surface, group exported hooks, identify public API vs helper imports, flag Flow/type syntax confidence.           | Partly useful but shallow.                                | User must infer what symbols matter and why.                   |
| 2   | Next.js `client/index.tsx`        | Real TSX entrypoint, 31KB                            | https://raw.githubusercontent.com/vercel/next.js/canary/packages/next/src/client/index.tsx          | Parses as TSX, shows a flat list of imports/exports/functions/variables. No module role, no route/client-entry understanding.                                    | Detect "client entrypoint" shape, summarize bootstrap flow, imports, side effects, exported surface, and risky globals.                                   | Useful first parse, weak domain understanding.            | User manually reads structure to discover initialization flow. |
| 3   | Vue `component.ts`                | Complex TypeScript runtime code, 35KB                | https://raw.githubusercontent.com/vuejs/core/main/packages/runtime-core/src/component.ts            | Parses and extracts many declarations, but flat outline loses relationships between interfaces, instances, setup paths, and lifecycle concepts.                  | Group related types/functions, detect component instance/lifecycle domain terms, surface high-confidence public concepts first.                           | Wrong abstraction level.                                  | User has to build the mental model from a long flat list.      |
| 4   | TypeScript `checker.ts`           | Huge TypeScript file, 3.1MB                          | https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/checker.ts                 | Folder import silently skips it because v1 ignores files over 500KB. If forced into the editor, analysis would run on the main thread with no progress/cancel.   | Admit the file is huge, offer partial/indexed analysis, show progress, allow cancellation, and explain skipped files.                                     | Silent failure on import, possible UI freeze if analyzed. | User has to notice the file is missing and guess why.          |
| 5   | Prettier JS postprocess module    | Nested real JavaScript, 8.5KB                        | https://raw.githubusercontent.com/prettier/prettier/main/src/language-js/parse/postprocess/index.js | Parses and lists top-level imports/functions. It misses pipeline intent and does not explain transformation stages.                                              | Recognize transformation pipeline shape, show ordered steps and exported postprocess behavior.                                                            | Partly useful but not "smart."                            | User must infer operation order manually.                      |
| 6   | Django `base.py`                  | Python ORM model core, 99KB                          | https://raw.githubusercontent.com/django/django/main/django/db/models/base.py                       | v1 opens `.py`, but analysis falls back to JS/TS regex and usually finds little or nothing meaningful. Diagnostic says tree-sitter is JS/TS-only.                | Either provide a Python-aware outline or clearly say "Python analysis unavailable" with next steps and no fake confidence.                                | Recoverable but dumb.                                     | User must know the app is not actually analyzing Python.       |
| 7   | Kubernetes `scheduler.go`         | Go production code, 25KB                             | https://raw.githubusercontent.com/kubernetes/kubernetes/master/pkg/scheduler/scheduler.go           | v1 opens `.go`, fallback analysis is not Go-aware. It may show no useful symbols despite obvious Go structs/functions.                                           | Use Go-aware parsing or a transparent unsupported-language state with file-level summary and next step.                                                   | Silent low-value output.                                  | User must scan the file manually.                              |
| 8   | jQuery minified production bundle | Minified JavaScript, adversarial shape               | https://code.jquery.com/jquery-3.7.1.min.js                                                         | File may load, but outline is mostly useless. Analysis has no minified-code detection, no warning that identifiers are compressed, no "format first" suggestion. | Detect minified bundle, lower confidence, suggest formatting or summarize as bundled artifact, avoid pretending symbol names are semantically meaningful. | Wrong-but-confident risk.                                 | User must realize the outline is meaningless.                  |
| 9   | Svelte client runtime index       | Real framework barrel/module file, 5.7KB             | https://raw.githubusercontent.com/sveltejs/svelte/main/packages/svelte/src/internal/client/index.js | Parses imports/exports, but treats a barrel/runtime boundary like any other file. No "re-export surface" summary.                                                | Detect barrel/re-export module, group exports by source, show public surface and missing/ambiguous exports.                                               | Shallow output.                                           | User must inspect every export manually.                       |
| 10  | Truncated `checker.ts` paste      | Partial/broken TypeScript, real source cut mid-block | https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/checker.ts                 | Tree-sitter may report syntax errors, but v1 only says "syntax issues" without line, likely cause, confidence, or recovery guidance.                             | Detect truncated input, identify likely cut point, keep partial outline with low confidence, and suggest "paste the rest" or "analyze partial anyway."    | Failure is visible but not actionable.                    | User must diagnose truncation manually.                        |

## Top 5 Logic Gaps

1. **Language understanding is mostly JS/TS-only, but the workspace invites many languages.** Python, Go, Rust, Markdown, and other common repo files open as if supported, then produce little or no meaningful analysis.
2. **Large-file behavior is silent and brittle.** Folder import skips files over 500KB without telling the user, and forced analysis has no progress, cancellation, or partial mode.
3. **The outline is flat, not semantic.** Framework entrypoints, barrels, transformation pipelines, public API surfaces, and lifecycle-heavy modules all collapse into a generic symbol list.
4. **No confidence model exists.** Minified code, syntax-error code, unsupported-language files, and partial inputs can look as authoritative as clean TypeScript.
5. **Errors and diagnostics lack next steps.** "Syntax issues" or "Tree-sitter is JS/TS-only" does not say where, why, what changed, or what the user can do next.

## Top 3 Intuition Failures

1. **A real project folder can import successfully while important files are missing.** The user gets no skipped-file report.
2. **Clicking Analyze on unsupported languages feels like it should work because the editor loaded the file.** The resulting empty/weak outline is surprising.
3. **The assistant sounds confident even when the underlying analysis is weak.** It does not inherit uncertainty from unsupported syntax, minification, or partial parses.

## Top 3 "Feels Stupid" Moments

1. The user has to tell the app that `jquery.min.js` is minified and should not be read like normal source.
2. The user has to notice that `checker.ts` was skipped during folder import and infer the size limit.
3. The user has to mentally group obvious domain shapes such as "barrel file," "client entrypoint," "pipeline," or "framework lifecycle module."

## What "Smart" Means For browser-codeium

- On first analysis, the app identifies the file shape: normal module, barrel/re-export file, framework entrypoint, transformation pipeline, minified bundle, unsupported language, huge file, or partial/broken file.
- Every analysis result carries confidence and explains why confidence is high, medium, or low.
- Unsupported or weakly supported files fail honestly with domain-language next steps instead of empty or generic output.
- Large and partial files produce a useful first result without freezing: skipped-file reports, partial outlines, progress, and cancellation where needed.
- The assistant draft reflects the analysis confidence and file shape instead of giving the same generic advice for every file.

## Phase 2 Substance Success Metrics

- **Real-data pass rate:** at least 7 of the 10 audit inputs complete the primary flow with no manual intervention beyond opening/selecting the file.
- **No silent skips:** 100% of skipped files appear in a user-visible skipped-file report with reason and next step.
- **Confidence coverage:** 100% of analysis outputs include file-level confidence and per-symbol or per-detection confidence where applicable.
- **Unsupported honesty:** unsupported-language fixtures produce an explicit unsupported state with next step, not an empty confident outline.
- **Large-file behavior:** inputs up to 5MB do not freeze the UI; operations over 300ms show progress; operations over 5s are cancellable.
- **Determinism:** running the same fixture twice produces byte-identical analysis JSON for all 10 fixtures.
- **Actionable errors:** every recoverable failure includes what failed, why it likely failed, and what to do next.
- **Median time to useful first result:** under 1s for files under 100KB on the 10-input audit set.

## Explicitly Out Of Scope

- No new product surface beyond the existing workspace, editor, analysis panel, assistant panel, and runtime panel.
- No hosted backend, auth, cloud sync, or server-side code execution.
- No visual polish pass, command palette, themes, sharing, or collaboration.
- No full LLM provider integration in this phase.
- No full IDE parity, terminal, package manager, debugger, or multi-file semantic index.
- No architecture mode change; Phase 2 remains Mode A on GitHub Pages.

## Implementation Result

Phase 2 v0.2.0 result: 10/10 fixtures now pass the substance gate for file-shape classification, confidence exposure, required diagnostics, required symbols where applicable, and deterministic output.

Pass-rate trend:

- Baseline audit: 3/10 useful without manual interpretation; unsupported, huge, partial, minified, and barrel inputs were weak or misleading.
- After analysis schema v2 and input classification: 8/10 classified honestly, with remaining misses in declaration prioritization and multiline barrel detection.
- After regression fixes: 10/10 fixtures pass with no crashes and byte-identical stabilized analysis JSON.

The committed gate is `src/features/analysis/realdata-fixtures.test.ts`; the fixtures live in `test/fixtures/realdata/`.
