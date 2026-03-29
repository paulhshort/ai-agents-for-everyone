#!/usr/bin/env bash
# ============================================================
# Compile and audit quiz questions across all YAML files
# ============================================================
# Usage: ./scripts/compile-questions.sh
#
# This script:
#   1. Counts questions in each YAML file
#   2. Reports statistics by category
#   3. Reports statistics by difficulty level
#   4. Checks for duplicate question IDs
#   5. Validates question format
#   6. Provides a summary report
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

QUIZ_DIR="quiz/questions"

echo "============================================"
echo "  Quiz Question Statistics"
echo "============================================"
echo ""

# Check if quiz directory exists
if [ ! -d "$QUIZ_DIR" ]; then
  echo -e "${RED}Error: Quiz directory not found at $QUIZ_DIR${NC}"
  exit 1
fi

# Count YAML files
yaml_files=$(find "$QUIZ_DIR" -name "*.yaml" -o -name "*.yml" 2>/dev/null | sort)
file_count=$(echo "$yaml_files" | grep -c . 2>/dev/null || echo 0)

if [ "$file_count" -eq 0 ]; then
  echo -e "${YELLOW}No YAML question files found in $QUIZ_DIR${NC}"
  exit 0
fi

echo -e "${BLUE}--- Questions by File ---${NC}"
echo ""

total=0
declare -A difficulty_counts 2>/dev/null || true
easy_count=0
medium_count=0
hard_count=0
expert_count=0
unknown_diff_count=0

for file in $yaml_files; do
  if [ -f "$file" ]; then
    basename_file=$(basename "$file")

    # Count questions (lines starting with "- id:" or "  - id:" patterns)
    count=$(grep -cE '^\s*-\s*id:' "$file" 2>/dev/null || echo 0)
    total=$((total + count))

    # Count by difficulty in this file
    file_easy=$(grep -ciE 'difficulty:\s*(easy|beginner)' "$file" 2>/dev/null || echo 0)
    file_medium=$(grep -ciE 'difficulty:\s*(medium|intermediate)' "$file" 2>/dev/null || echo 0)
    file_hard=$(grep -ciE 'difficulty:\s*(hard|advanced)' "$file" 2>/dev/null || echo 0)
    file_expert=$(grep -ciE 'difficulty:\s*(expert|power)' "$file" 2>/dev/null || echo 0)

    easy_count=$((easy_count + file_easy))
    medium_count=$((medium_count + file_medium))
    hard_count=$((hard_count + file_hard))
    expert_count=$((expert_count + file_expert))

    # Display file stats
    printf "  %-35s %3d questions" "$basename_file" "$count"
    if [ "$count" -gt 0 ]; then
      details=""
      [ "$file_easy" -gt 0 ] && details="${details} easy:${file_easy}"
      [ "$file_medium" -gt 0 ] && details="${details} medium:${file_medium}"
      [ "$file_hard" -gt 0 ] && details="${details} hard:${file_hard}"
      [ "$file_expert" -gt 0 ] && details="${details} expert:${file_expert}"
      if [ -n "$details" ]; then
        echo " ($details )"
      else
        echo ""
      fi
    else
      echo ""
    fi
  fi
done

unknown_diff_count=$((total - easy_count - medium_count - hard_count - expert_count))

echo ""
echo -e "${BLUE}--- Summary ---${NC}"
echo ""
echo "  Total files:     $file_count"
echo "  Total questions: $total"
echo ""

echo -e "${BLUE}--- By Difficulty ---${NC}"
echo ""
printf "  %-15s %3d\n" "Easy:" "$easy_count"
printf "  %-15s %3d\n" "Medium:" "$medium_count"
printf "  %-15s %3d\n" "Hard:" "$hard_count"
printf "  %-15s %3d\n" "Expert:" "$expert_count"
if [ "$unknown_diff_count" -gt 0 ]; then
  printf "  %-15s %3d\n" "Unspecified:" "$unknown_diff_count"
fi
echo ""

# Check for duplicate IDs
echo -e "${BLUE}--- Duplicate Check ---${NC}"
echo ""

all_ids_file=$(mktemp)
for file in $yaml_files; do
  if [ -f "$file" ]; then
    grep -oE '^\s*-?\s*id:\s*\S+' "$file" 2>/dev/null | sed 's/.*id:\s*//' >> "$all_ids_file"
  fi
done

if [ -s "$all_ids_file" ]; then
  dupes=$(sort "$all_ids_file" | uniq -d 2>/dev/null)
  if [ -n "$dupes" ]; then
    echo -e "  ${RED}FAIL: Duplicate IDs found:${NC}"
    echo "$dupes" | while read -r dupe_id; do
      echo -e "    ${RED}- $dupe_id${NC}"
      # Show which files contain the duplicate
      for file in $yaml_files; do
        if grep -q "id:\s*$dupe_id" "$file" 2>/dev/null; then
          echo "      in: $(basename "$file")"
        fi
      done
    done
    echo ""
    rm -f "$all_ids_file"
    exit 1
  else
    total_ids=$(wc -l < "$all_ids_file" | tr -d ' ')
    echo -e "  ${GREEN}PASS: No duplicates found ($total_ids unique IDs)${NC}"
  fi
else
  echo -e "  ${YELLOW}SKIP: No question IDs found to check${NC}"
fi

rm -f "$all_ids_file"

# Validation checks
echo ""
echo -e "${BLUE}--- Validation ---${NC}"
echo ""

warnings=0

# Check for questions without a difficulty level
for file in $yaml_files; do
  if [ -f "$file" ]; then
    question_count=$(grep -cE '^\s*-\s*id:' "$file" 2>/dev/null || echo 0)
    difficulty_count=$(grep -ciE 'difficulty:' "$file" 2>/dev/null || echo 0)
    if [ "$question_count" -gt 0 ] && [ "$difficulty_count" -lt "$question_count" ]; then
      missing=$((question_count - difficulty_count))
      echo -e "  ${YELLOW}WARN: $(basename "$file") — $missing question(s) without difficulty level${NC}"
      warnings=$((warnings + 1))
    fi
  fi
done

# Check for questions without answer explanations
for file in $yaml_files; do
  if [ -f "$file" ]; then
    question_count=$(grep -cE '^\s*-\s*id:' "$file" 2>/dev/null || echo 0)
    explanation_count=$(grep -ciE 'explanation:' "$file" 2>/dev/null || echo 0)
    if [ "$question_count" -gt 0 ] && [ "$explanation_count" -lt "$question_count" ]; then
      missing=$((question_count - explanation_count))
      echo -e "  ${YELLOW}WARN: $(basename "$file") — $missing question(s) without explanation${NC}"
      warnings=$((warnings + 1))
    fi
  fi
done

if [ "$warnings" -eq 0 ]; then
  echo -e "  ${GREEN}PASS: All validation checks passed${NC}"
fi

echo ""
echo "============================================"
echo -e "  ${GREEN}Done.${NC} $total questions across $file_count files."
echo "============================================"
