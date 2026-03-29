#!/usr/bin/env bash
# ============================================================
# Validate that onboarding matrix topics exist in reference.yaml
# ============================================================
# Usage: ./scripts/validate-onboarding.sh
#
# This script:
#   1. Extracts all topic keys from onboarding_matrix in reference.yaml
#   2. Checks that each topic exists in the deep_dive section
#   3. Reports any missing or orphaned topics
#   4. Validates the matrix structure
# ============================================================

set -euo pipefail

# Color output helpers
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure script runs from project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

REF="machine-readable/reference.yaml"

if [ ! -f "$REF" ]; then
  echo -e "${RED}Error: $REF not found${NC}"
  exit 1
fi

echo "============================================"
echo "  Onboarding Matrix Validation"
echo "============================================"
echo ""

errors=0
warnings=0
passed=0

# Step 1: Extract deep_dive keys
echo -e "${BLUE}--- Step 1: Extracting deep_dive topics ---${NC}"
echo ""

# Get all keys from the deep_dive section
# We look for lines that are indented with 2 spaces and have a colon (key: value)
# between the "deep_dive:" marker and the next top-level section
deep_dive_keys=$(awk '
  /^deep_dive:/ { in_section=1; next }
  /^[a-z_]+:/ && in_section { exit }
  in_section && /^  [a-z_]+:/ { gsub(/^  /, ""); gsub(/:.*/, ""); print }
' "$REF" | sort -u)

deep_dive_count=$(echo "$deep_dive_keys" | grep -c . 2>/dev/null || echo 0)
echo "  Found $deep_dive_count topics in deep_dive section"
echo ""

# Step 2: Extract onboarding matrix topic references
echo -e "${BLUE}--- Step 2: Extracting onboarding_matrix topic references ---${NC}"
echo ""

# Extract topics from arrays in the onboarding_matrix section
# These appear as items in core: [...] and in adaptive trigger/default arrays
matrix_topics=$(awk '
  /^onboarding_matrix:/ { in_section=1; next }
  /^[a-z_]+:/ && !/^  / && in_section { exit }
  in_section {
    # Match topics inside square brackets: [topic1, topic2, ...]
    while (match($0, /\[([^\]]+)\]/, arr)) {
      split(arr[1], items, ",")
      for (i in items) {
        gsub(/^[ \t]+/, "", items[i])
        gsub(/[ \t]+$/, "", items[i])
        if (items[i] != "" && items[i] !~ /^[0-9]/) {
          print items[i]
        }
      }
      sub(/\[[^\]]+\]/, "DONE", $0)
    }
  }
' "$REF" | sort -u)

matrix_count=$(echo "$matrix_topics" | grep -c . 2>/dev/null || echo 0)
echo "  Found $matrix_count unique topics referenced in onboarding_matrix"
echo ""

# Step 3: Validate that each matrix topic exists in deep_dive
echo -e "${BLUE}--- Step 3: Checking matrix topics against deep_dive ---${NC}"
echo ""

missing_topics=""
while IFS= read -r topic; do
  if [ -z "$topic" ]; then
    continue
  fi

  if echo "$deep_dive_keys" | grep -qx "$topic"; then
    echo -e "  ${GREEN}PASS${NC} $topic"
    passed=$((passed + 1))
  else
    echo -e "  ${RED}FAIL${NC} $topic (not found in deep_dive)"
    errors=$((errors + 1))
    missing_topics="$missing_topics $topic"
  fi
done <<< "$matrix_topics"

echo ""

# Step 4: Check for deep_dive topics not used in onboarding matrix
echo -e "${BLUE}--- Step 4: Checking for unused deep_dive topics ---${NC}"
echo ""

unused_count=0
while IFS= read -r topic; do
  if [ -z "$topic" ]; then
    continue
  fi

  if ! echo "$matrix_topics" | grep -qx "$topic"; then
    echo -e "  ${YELLOW}INFO${NC} $topic (in deep_dive but not in onboarding matrix)"
    unused_count=$((unused_count + 1))
  fi
done <<< "$deep_dive_keys"

if [ "$unused_count" -eq 0 ]; then
  echo -e "  ${GREEN}All deep_dive topics are referenced in the onboarding matrix${NC}"
else
  echo ""
  echo -e "  ${YELLOW}$unused_count topic(s) in deep_dive are not in the onboarding matrix${NC}"
  echo "  (This is okay — not every topic needs to be in the onboarding flow)"
  warnings=$((warnings + 1))
fi

echo ""

# Step 5: Validate matrix structure
echo -e "${BLUE}--- Step 5: Validating matrix structure ---${NC}"
echo ""

# Check that expected goal categories exist
for goal in get_started optimize build_agents learn_security fix_problem learn_everything; do
  if grep -q "^  $goal:" "$REF"; then
    echo -e "  ${GREEN}PASS${NC} Goal category: $goal"
    passed=$((passed + 1))
  else
    echo -e "  ${RED}FAIL${NC} Goal category missing: $goal"
    errors=$((errors + 1))
  fi
done

# Check that profiles have core and topics_max
profile_count=$(grep -cE '^\s{4}[a-z]+_[0-9]+min:' "$REF" 2>/dev/null || echo 0)
core_count=$(grep -cE '^\s{6}core:' "$REF" 2>/dev/null || echo 0)
max_count=$(grep -cE '^\s{6}topics_max:' "$REF" 2>/dev/null || echo 0)

echo ""
echo "  Profiles found: $profile_count"
echo "  Profiles with core topics: $core_count"
echo "  Profiles with topics_max: $max_count"

if [ "$core_count" -lt "$profile_count" ]; then
  missing_core=$((profile_count - core_count))
  echo -e "  ${YELLOW}WARN: $missing_core profile(s) may be missing core topics${NC}"
  warnings=$((warnings + 1))
fi

if [ "$max_count" -lt "$profile_count" ]; then
  missing_max=$((profile_count - max_count))
  echo -e "  ${YELLOW}WARN: $missing_max profile(s) may be missing topics_max${NC}"
  warnings=$((warnings + 1))
fi

# Final report
echo ""
echo "============================================"
echo "  Results"
echo "============================================"
echo ""
echo -e "  Passed:   ${GREEN}$passed${NC}"
echo -e "  Warnings: ${YELLOW}$warnings${NC}"
echo -e "  Errors:   ${RED}$errors${NC}"
echo ""

if [ $errors -gt 0 ]; then
  echo -e "${RED}FAILED: $errors error(s) found.${NC}"
  if [ -n "$missing_topics" ]; then
    echo ""
    echo "Missing topics that need to be added to deep_dive:"
    for topic in $missing_topics; do
      echo "  - $topic"
    done
  fi
  exit 1
else
  echo -e "${GREEN}PASSED: All onboarding matrix topics are valid.${NC}"
fi
