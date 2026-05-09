# Phase 3 Postmortem

Date: 2026-05-09

Release: v0.3.0

Live site: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

## Audit Grids

| Audit          | Before                                              | After                                                 |
| -------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Input          | 3 green, 2 yellow, 7 red                            | 10 green, 1 out of scope                              |
| Output         | 2 green, 8 red                                      | 8 green, 2 out of scope                               |
| Controls       | Several partials                                    | All visible controls green                            |
| Feature claims | Truthful but incomplete                             | All claims shipped and documented                     |
| Codebase       | Repeated session logic, no import/export boundaries | Shared transfer/persistence/analysis helpers in place |

## Half-Baked Feature Triage

- Finished: multi-file import, drag/drop import, pasted file import, clipboard import, state export/import, active-file copy/download, assistant-draft copy, small-workspace share links, persisted settings, real fresh start.
- Hidden or deleted: BYO-key future-facing copy.
- Cut with rationale: remote URL import, print/PDF export, automation-ready API export.

## Codebase Health

| Metric                       | Before | After          |
| ---------------------------- | ------ | -------------- |
| Core DRY violations          | 3      | 0              |
| TODO/FIXME/XXX/HACK debt     | 0      | 0              |
| Product-source `@ts-ignore`  | 0      | 0              |
| Product-source `any` escapes | 0      | 0              |
| Stranger-flow e2e            | 0      | 1 passing flow |

## Stranger-Test Findings

Top 3 issues found and fixed:

1. Settings persistence could lose changes on immediate reload. Fixed with localStorage write-through plus IndexedDB persistence.
2. Reset semantics were muddy. Fixed with a true fresh workspace action that clears persisted state.
3. There was no clean way to move work in or out of the app. Fixed with file import, drag/drop, pasted-file import, snapshot export/import, and share links.

## Documentation / Reality Mismatches Fixed

- Non-Chromium import options are now documented.
- Workspace export/import is documented.
- Limitations are explicit instead of implied.
- README claims now line up with tested flows.
- Phase 3 audit and postmortem links are exposed from the README.

## Surprises

- The biggest user-facing bug in this phase was not a parser issue, but timing: settings persistence felt fine until a real reload race exposed it.
- Standard file input plus good copy does more for real usability than a clever browser-only API by itself.
- Share-link support becomes immediately more valuable once state export/import already exists, because the two paths explain each other.

## Still Open

1. Add mobile-device validation beyond desktop browser coverage.
2. Reduce `src/App.tsx` further by splitting sidebar workflow state into a dedicated controller hook.
3. Add a print-focused export if a real user workflow demands it.
4. Add a visual indicator for share-link payload limits before the user clicks.
5. Add selective multi-file merge into an existing workspace instead of replacing it.

## Honest Take

Could a stranger use this app for their own real work, end-to-end, with zero help? For the product boundary it claims today, yes. They can bring in files, edit them, analyze supported languages, save, export, restore, share small workspaces, and recover from mistakes. The remaining "no" is only if they expect things the product now explicitly says it does not do, such as remote URL import, print/PDF export, or non-JS/TS analysis.
