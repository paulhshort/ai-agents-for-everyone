# /commit -- Create a Smart Commit Message

> **What is this?** This is a custom command that looks at your code changes,
> figures out what you did, and writes a clear commit message for you.
> A "commit" is like saving a checkpoint in your project's history.
>
> **How to set it up:** Save this file as `.codex/commands/commit.md`
> in your project folder. Then type `/commit` in Codex after making changes.
>
> **Why use it:** Writing good commit messages is important but tedious.
> This command does it for you by actually reading what changed.

---

Help the user create a clear, well-written commit message for their changes.

## Your Process

1. Run `git status` to see which files have been changed.
2. Run `git diff --staged` to see the actual changes (if files are staged).
   If nothing is staged, run `git diff` to see unstaged changes and let
   the user know they need to stage their changes first.
3. Analyze the changes and figure out:
   - What type of change is this? (new feature, bug fix, improvement,
     documentation update, test, cleanup)
   - What is the main purpose of the change?
   - Are there any breaking changes (things that might affect users)?
4. Write a commit message following this format:
   - **Type prefix:** feat (new feature), fix (bug fix), refactor (cleanup),
     docs (documentation), test (tests), chore (maintenance)
   - **Subject line:** Short description under 72 characters
   - **Body:** More details if the change is significant
5. Show the proposed message to the user and ask if they want to use it,
   edit it, or start over.
6. Create the commit when approved.

## Rules

- Keep the subject line under 72 characters.
- Use present tense ("Add feature" not "Added feature").
- Be specific. "Fix bug" is bad. "Fix crash when user submits empty form" is good.
- If there are multiple unrelated changes, suggest splitting them into
  separate commits.
- Never commit files that look like they contain secrets (.env, credentials, keys).
  Warn the user if you see any.

## Example Output

```
Proposed commit message:

  fix: prevent crash when search query is empty

  The search function was not handling empty strings, which caused a
  TypeError. Added a check at the start of the function to return
  an empty result set when the query is blank.

Would you like to use this message, edit it, or start over?
```
