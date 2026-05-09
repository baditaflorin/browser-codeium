# Phase 3 Stranger Test

Date: 2026-05-09

Tester: self-as-stranger in a clean Chromium context

Product: browser-codeium v0.3.0

## Scenario

1. Open the live app with an empty browser profile.
2. Import a local `notes.ts` file through the standard file input.
3. Let auto-analysis run.
4. Export workspace state.
5. Change `Word wrap` to `off`.
6. Reload immediately.
7. Confirm the workspace and setting persisted.
8. Copy a share link.
9. Start fresh.
10. Restore from the exported state file.
11. Open the share link.

## Findings

### Before fixes

1. Settings persistence could lose a change on immediate reload because the save path was debounce-only.
2. Reset semantics were ambiguous; returning to the sample felt more like "demo me" than "start fresh."
3. A stranger had no clear way to take work out of the browser.

### After fixes

1. Settings now write through immediately via localStorage plus IndexedDB.
2. `Fresh` now creates a real empty workspace and clears persisted state.
3. Export, restore, and share all work end-to-end.

## Result

Pass. A stranger can bring in their own file, analyze it, save/share/export it, recover from a reset, and reload their session without asking for help.
