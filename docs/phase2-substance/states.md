# Phase 2 State Taxonomy

## Workspace States

- `bootstrapping`: loading IndexedDB and static samples.
- `loaded-empty`: workspace exists but has no analyzable file.
- `loaded-some`: workspace has 1-20 files.
- `loaded-many`: workspace has more than 20 files.
- `loaded-too-many`: import stopped at the file-count cap.
- `skipped-files`: one or more files were omitted with recorded reasons.
- `storage-error-recoverable`: IndexedDB failed, current in-memory work remains usable.
- `storage-error-fatal`: browser storage is unavailable and persistence cannot be promised.

## File States

- `selected-supported`: active file can be analyzed deeply.
- `selected-unsupported`: active file opens but language-specific analysis is unavailable.
- `selected-empty`: active file contains no source text.
- `selected-huge`: active file exceeds deep-analysis budget.
- `selected-minified`: active file appears bundled/minified.
- `selected-partial`: active file appears truncated or structurally incomplete.

## Analysis States

- `idle`: no analysis for active file.
- `queued`: auto-analysis scheduled.
- `in-progress`: analysis running.
- `cancelled`: user aborted analysis and previous stable result remains.
- `complete-high-confidence`: result is suitable as first-pass structure.
- `complete-low-confidence`: result is partial or weak and marked as such.
- `error-recoverable`: failure has a domain reason and next step.
- `error-fatal`: unexpected failure is isolated and the user's source remains intact.

Every state has an exit: select another file, reload sample, retry analysis, cancel analysis, or reset workspace.
