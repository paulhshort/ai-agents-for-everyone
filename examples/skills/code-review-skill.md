# Code Review Skill

> **What is a Skill?**
> A skill is a reusable capability you can teach Codex. Skills live in the
> `.agents/skills/` folder inside your project, and each skill has a file
> called SKILL.md that explains what the skill does and how to use it.
>
> Think of skills like recipes in a cookbook. Each one teaches Codex how to
> do a specific task, and you can use them over and over.
>
> **How to set this up:**
> 1. Create the folder: `.agents/skills/code-review/`
> 2. Save this file as: `.agents/skills/code-review/SKILL.md`
> 3. Now you can ask Codex to "use the code review skill" or trigger it
>    with the /review command.

---

## Skill: Code Review

**Trigger:** /review
**Description:** Performs a thorough review of code changes, organized by severity.

## When to Use This Skill

Use this skill when you want Codex to:
- Review code before committing or merging it
- Check a specific file for problems
- Get a second opinion on a piece of code
- Audit code for security issues

## What This Skill Checks For

### 1. Correctness
- Does the code do what it is supposed to do?
- Are there logic errors or edge cases not handled?
- Could it crash or produce wrong results?

### 2. Security
- Are there vulnerabilities (like SQL injection, XSS, etc.)?
- Are secrets or credentials exposed?
- Is user input properly validated?

### 3. Performance
- Are there operations that could be slow with large data?
- Is work being repeated unnecessarily?
- Are resources (memory, connections) properly released?

### 4. Readability
- Is the code easy to understand?
- Are names descriptive and consistent?
- Are complex parts commented?

### 5. Test Coverage
- Are there tests for the new or changed code?
- Do the tests cover edge cases?
- Could the tests be more thorough?

## How This Skill Works

### Step 1: Gather the Changes
Read the code to review. This might be:
- Staged git changes (`git diff --staged`)
- A specific file or set of files
- A git branch comparison (`git diff main..feature-branch`)

### Step 2: Understand the Context
Read the surrounding code -- not just the changes, but the full files.
Understand what the code is part of and how it fits into the bigger picture.

### Step 3: Analyze and Categorize
Review the code and organize findings into three categories:
- **Critical** -- Must be fixed. Bugs, security holes, or things that will break.
- **Warning** -- Should be fixed. Not urgent, but will cause problems later.
- **Suggestion** -- Nice to fix. Would make the code better but is not required.

### Step 4: Report
Present findings in this format:

```
## Code Review Results

### Critical Issues (Must Fix)
- **[file:line]** [Description of issue]
  Fix: [How to fix it]

### Warnings (Should Fix)
- **[file:line]** [Description of issue]
  Fix: [How to fix it]

### Suggestions (Nice to Have)
- **[file:line]** [Description of suggestion]
  Suggestion: [What to do]

### What Looks Good
- [Something positive about the code]

### Summary
[1-2 sentence overall assessment]
- Issues found: X critical, X warnings, X suggestions
- Recommendation: Approve / Approve with changes / Request changes
```
