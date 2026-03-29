#!/usr/bin/env bash
# ============================================================
# Sync version number across all project files
# ============================================================
# Usage: ./scripts/sync-version.sh <new-version>
# Example: ./scripts/sync-version.sh 0.3.0
#
# Updates:
#   - VERSION file
#   - machine-readable/reference.yaml (version + updated date)
#   - mcp-server/package.json
#   - quiz/package.json (if exists)
#   - guide/ultimate-guide.md header
#   - README.md badge
# ============================================================

set -euo pipefail

# Color output helpers
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Ensure script runs from project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

if [ $# -ne 1 ]; then
  echo -e "${RED}Usage: $0 <new-version>${NC}"
  echo "Example: $0 0.3.0"
  echo ""
  echo "Current version: $(cat VERSION 2>/dev/null || echo 'unknown')"
  exit 1
fi

NEW_VERSION="$1"
TODAY=$(date +%Y-%m-%d)
OLD_VERSION=$(cat VERSION 2>/dev/null || echo "0.0.0")

# Validate version format (basic semver check)
if ! echo "$NEW_VERSION" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9.]+)?$'; then
  echo -e "${RED}Error: Version must be in semver format (e.g., 1.2.3 or 1.2.3-beta.1)${NC}"
  exit 1
fi

echo "============================================"
echo "  Version Sync: $OLD_VERSION -> $NEW_VERSION"
echo "  Date: $TODAY"
echo "============================================"
echo ""

updated=0
failed=0

# Helper function to update a file
update_file() {
  local file="$1"
  local description="$2"
  local sed_command="$3"

  if [ -f "$file" ]; then
    if sed -i "$sed_command" "$file" 2>/dev/null; then
      echo -e "  ${GREEN}PASS${NC} $description ($file)"
      updated=$((updated + 1))
    else
      echo -e "  ${RED}FAIL${NC} $description ($file)"
      failed=$((failed + 1))
    fi
  else
    echo -e "  ${YELLOW}SKIP${NC} $description ($file not found)"
  fi
}

# 1. VERSION file
echo "$NEW_VERSION" > VERSION
echo -e "  ${GREEN}PASS${NC} VERSION file"
updated=$((updated + 1))

# 2. reference.yaml — version field
update_file \
  "machine-readable/reference.yaml" \
  "reference.yaml version" \
  "s/^version: .*/version: \"$NEW_VERSION\"/"

# 3. reference.yaml — updated date
update_file \
  "machine-readable/reference.yaml" \
  "reference.yaml date" \
  "s/^updated: .*/updated: \"$TODAY\"/"

# 4. mcp-server/package.json
update_file \
  "mcp-server/package.json" \
  "mcp-server/package.json" \
  "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/"

# 5. quiz/package.json (if it exists)
update_file \
  "quiz/package.json" \
  "quiz/package.json" \
  "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/"

# 6. guide/ultimate-guide.md header
update_file \
  "guide/ultimate-guide.md" \
  "guide header" \
  "s/^> Version .*/> Version $NEW_VERSION | Last updated: $TODAY/"

# 7. README.md version badge
update_file \
  "README.md" \
  "README badge" \
  "s/version-[0-9]*\.[0-9]*\.[0-9]*/version-$NEW_VERSION/"

echo ""
echo "============================================"
echo "  Results: $updated updated, $failed failed"
echo "============================================"

if [ $failed -gt 0 ]; then
  echo -e "${RED}Some files could not be updated. Check the errors above.${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}Version synced to $NEW_VERSION successfully.${NC}"
echo ""
echo "Next steps:"
echo "  1. Review changes: git diff"
echo "  2. Commit: git add -A && git commit -m 'chore: bump version to $NEW_VERSION'"
echo "  3. Tag: git tag v$NEW_VERSION"
