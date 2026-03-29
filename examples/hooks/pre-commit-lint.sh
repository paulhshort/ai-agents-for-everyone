#!/usr/bin/env bash

# ============================================================
# WHAT IS THIS FILE?
# ============================================================
# This is a "hook" -- a small script that runs automatically at a
# specific moment. This particular hook runs BEFORE a git commit
# is saved (that is why it is called "pre-commit").
#
# WHAT DOES IT DO?
# It checks your code for common mistakes (called "linting") before
# you commit. If it finds problems, it stops the commit so you can
# fix them first. Think of it like a spell-checker that runs
# automatically every time you try to save.
#
# HOW DO HOOKS WORK IN CODEX?
# Codex supports hooks that run at specific moments during its work.
# You configure them in .codex/hooks.json. The format looks like this:
#
#   {
#     "hooks": [
#       {
#         "event": "pre-commit",
#         "command": "bash .codex/hooks/pre-commit-lint.sh"
#       }
#     ]
#   }
#
# Available hook events include moments before and after Codex
# takes actions like writing files or running commands.
#
# WHERE DOES THIS FILE GO?
# Save it to: .codex/hooks/pre-commit-lint.sh
# Then reference it in: .codex/hooks.json
#
# HOW TO MAKE IT WORK:
# 1. Save this file to your project
# 2. Make it executable: chmod +x .codex/hooks/pre-commit-lint.sh
# 3. Add it to .codex/hooks.json (see format above)
# ============================================================

# "set -euo pipefail" is a safety setting that makes the script stop
# immediately if anything goes wrong, rather than continuing with errors.
set -euo pipefail

# Get the list of files that are about to be committed.
# We only check changed files, not the entire project -- this keeps it fast.
# --cached means "files that are staged for commit"
# --name-only means "just give me the file names"
# --diff-filter=ACM means "only files that were Added, Changed, or Modified"
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

# If there are no staged files, there is nothing to check. Exit successfully.
if [ -z "$STAGED_FILES" ]; then
  echo "No staged files to lint. Proceeding with commit."
  exit 0
fi

echo "Checking staged files for issues..."
echo ""

# Detect what kind of project this is and run the right linting tool.
# Different programming languages use different tools.

if [ -f "package.json" ]; then
  # This is a JavaScript/TypeScript project.
  # ESLint is the standard tool for checking JavaScript code.
  echo "Detected JavaScript/TypeScript project. Running ESLint..."

  # Find all .js, .ts, .jsx, .tsx files in the staged list and check them.
  # The --fix flag automatically fixes simple problems (like formatting).
  JS_FILES=$(echo "$STAGED_FILES" | grep -E '\.(js|ts|jsx|tsx)$' || true)
  if [ -n "$JS_FILES" ]; then
    echo "$JS_FILES" | xargs -r npx eslint --fix
    echo "ESLint check passed."
  else
    echo "No JavaScript/TypeScript files to check."
  fi

elif [ -f "pyproject.toml" ] || [ -f "setup.py" ]; then
  # This is a Python project.
  # Ruff is a fast, modern tool for checking Python code.
  echo "Detected Python project. Running Ruff..."

  PY_FILES=$(echo "$STAGED_FILES" | grep -E '\.py$' || true)
  if [ -n "$PY_FILES" ]; then
    echo "$PY_FILES" | xargs -r ruff check --fix
    echo "Ruff check passed."
  else
    echo "No Python files to check."
  fi

elif [ -f "go.mod" ]; then
  # This is a Go project.
  # "go vet" is Go's built-in tool for finding common mistakes.
  echo "Detected Go project. Running go vet..."
  go vet ./...
  echo "Go vet check passed."

else
  echo "Could not detect project type. Skipping lint check."
  echo "Tip: Add a package.json, pyproject.toml, or go.mod to enable linting."
fi

echo ""
echo "All checks passed. Proceeding with commit."
