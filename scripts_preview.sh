#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

printf 'Starting preview server at http://localhost:%s\n' "$PORT"
python3 -m http.server "$PORT"
