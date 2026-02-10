#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Starting Valentine AI Companion (client + server)..."

cleanup() {
  echo "Stopping services..."
  kill "$SERVER_PID" "$CLIENT_PID" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

(cd "$ROOT_DIR/server" && npm run dev) &
SERVER_PID=$!

(cd "$ROOT_DIR/client" && npm run dev) &
CLIENT_PID=$!

wait -n
