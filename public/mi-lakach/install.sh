#!/usr/bin/env bash
# Install the mi-lakach command, then Mi-Lakach itself (Linux, Windows with WSL, or a Mac without Homebrew):
#
#   curl -fsSL https://target-ops.io/mi-lakach/install.sh | bash
#
# The command comes from the target-ops Homebrew tap (the same file brew installs). It goes into
# ~/.local/bin (or /usr/local/bin when that is writable). Only the command, without installing
# Mi-Lakach yet:  curl -fsSL https://target-ops.io/mi-lakach/install.sh | bash -s -- --no-install
set -euo pipefail

CLI_URL="${MI_LAKACH_CLI_URL:-https://raw.githubusercontent.com/target-ops/homebrew-tap/main/mi-lakach/mi-lakach}"

say() { printf '%s\n' "$*"; }
fail() { printf '✗ %s\n' "$*" >&2; exit 1; }

command -v curl >/dev/null 2>&1 || fail "curl is missing. Install it, then run this again."

if [ -n "${MI_LAKACH_BIN_DIR:-}" ]; then
  bin_dir="$MI_LAKACH_BIN_DIR"
elif [ -w /usr/local/bin ]; then
  bin_dir=/usr/local/bin
else
  bin_dir="$HOME/.local/bin"
fi
mkdir -p "$bin_dir"

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT
curl -fsSL "$CLI_URL" -o "$tmp" || fail "Could not download the mi-lakach command from $CLI_URL"
head -1 "$tmp" | grep -q '^#!/usr/bin/env bash' || fail "The download is not the mi-lakach command; try again later."
install -m 755 "$tmp" "$bin_dir/mi-lakach"
say "✓ $("$bin_dir/mi-lakach" version) is in $bin_dir"

case ":$PATH:" in
  *":$bin_dir:"*) ;;
  *) say "! $bin_dir is not on your PATH. Add it (for example to ~/.bashrc):  export PATH=\"$bin_dir:\$PATH\"" ;;
esac

if [ "${1:-}" = "--no-install" ]; then
  say "Install Mi-Lakach with: mi-lakach install"
  exit 0
fi
# Read from the terminal (when there is one), not from this script's pipe.
if (exec </dev/tty) 2>/dev/null; then
  exec "$bin_dir/mi-lakach" install </dev/tty
fi
exec "$bin_dir/mi-lakach" install
