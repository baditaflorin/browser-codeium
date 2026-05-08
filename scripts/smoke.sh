#!/usr/bin/env bash
set -euo pipefail

npm run build
PLAYWRIGHT_SKIP_SERVER=1 PLAYWRIGHT_BASE_URL=http://127.0.0.1:4179/browser-codeium/ npm run preview >/tmp/browser-codeium-preview.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT

for attempt in {1..30}; do
  if curl -fsS http://127.0.0.1:4179/browser-codeium/ >/dev/null 2>&1; then
    break
  fi
  sleep 1
  if [[ "$attempt" == "30" ]]; then
    cat /tmp/browser-codeium-preview.log
    exit 1
  fi
done

PLAYWRIGHT_SKIP_SERVER=1 PLAYWRIGHT_BASE_URL=http://127.0.0.1:4179/browser-codeium/ npx playwright test
