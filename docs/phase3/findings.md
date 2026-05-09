# Phase 3 Findings

Date: 2026-05-09

Product: browser-codeium v0.3.0

## Top 5 Usability Gaps Closed

1. Real-user file import was Chromium-only. Closed with file upload, drag/drop, paste, and clipboard input.
2. Work could not leave the browser cleanly. Closed with file export, state export/import, draft copy, and share links.
3. Reset semantics were muddy. Closed with a true fresh-workspace action.
4. Preferences vanished on reload. Closed with persisted settings and immediate write-through storage.
5. The shell owned too much repeated session logic. Closed with transfer, toast, persistence, and analysis helper modules.

## Half-Baked Feature Outcomes

- Workspace import: finished.
- Workspace export/import round-trip: finished.
- Small-state URL sharing: finished.
- Assistant draft copy affordance: finished.
- BYO-key future-facing hint: deleted from production copy.
- Print/PDF: cut and documented.
- Remote URL import: cut and documented.

## Top 5 Codebase Pain Points After Work

1. `src/App.tsx` is still the largest shell file, but it is thinner and more honest about being orchestration.
2. `src/features/analysis/substance.ts` remains large by design from Phase 2.
3. Mode A browser capability differences still require careful user-facing copy.
4. Export/share payload size limits need ongoing discipline as features grow.
5. Mobile browser-specific behavior still relies on standard input behavior instead of dedicated device testing.

## Top 5 Documentation / Reality Fixes

1. README now documents non-Chromium import paths.
2. README now documents workspace state export/import.
3. README now documents limitations instead of implying a broader surface.
4. Assistant copy no longer hints at unbuilt provider features.
5. Phase 3 audits and postmortem are now linked directly from README.

## Fully Usable Means

- A first-time user can import their own files on a normal browser.
- A first-time user can edit, analyze, export, reload, and restore the same workspace.
- A first-time user can recover with a true fresh start.
- A first-time user can share a small workspace or move a larger one with a state file.
- The README and in-app copy tell the truth about what the app does today.

## Phase 3 Success Metrics

- Input audit: 10 green, 1 out of scope.
- Output audit: 8 green, 2 out of scope.
- Playwright stranger flow passes on import, analyze, export, restore, share, and settings persistence.
- TODO/FIXME/XXX/HACK debt remains `0`.
- Product-source `@ts-ignore` count remains `0`.

## Out Of Scope

- No hosted backend, auth, cloud sync, or remote execution.
- No LLM provider integration.
- No print/PDF workflow in this release.
- No remote URL import in this release.
- No polish-only work such as command palette or theme redesign.
