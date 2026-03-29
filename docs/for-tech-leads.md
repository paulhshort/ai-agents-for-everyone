# OpenAI Codex — A Guide for Tech Leads

> How to set up Codex for your team: shared configuration, code review processes, training plans, and best practices.

---

## Your Role in the Codex Rollout

As a tech lead, you are the bridge between the CTO's adoption strategy and your team's daily workflow. Your job is to make Codex productive and safe for your team — setting up the right defaults, establishing review practices, and helping everyone learn effectively.

---

## Team Setup Checklist

### 1. Create a Shared Project Configuration

Put this file in your project repository so every team member gets the same Codex settings:

**`.codex/config.toml`** (commit this to your repo):

```toml
# Team-wide Codex configuration
# Everyone who clones this repo gets these settings automatically

[model]
default = "gpt-5.4"
fast = "gpt-5.4-mini"  # For simple tasks

[sandbox]
mode = "workspace-write"  # Can modify project files, nothing outside

[approval]
mode = "on-request"  # Asks before risky actions

[web_search]
mode = "cached"  # Allow web search with caching

[features]
multi_agent = false     # Enable when the team is ready
shell_tool = true       # Allow running commands
web_search = true       # Allow web lookups
codex_hooks = true      # Enable hooks
fast_mode = false       # Default to full-quality responses
undo = true             # Allow undoing changes
memories = true         # Remember project context
```

### 2. Write an AGENTS.md for Each Project

This is the single most important file for team Codex usage. Put it at the project root:

```markdown
# AGENTS.md

## Project Overview
[1-2 sentences about what the project does and who uses it]

## Tech Stack
- Language: [e.g., TypeScript]
- Framework: [e.g., Next.js 14]
- Database: [e.g., PostgreSQL with Prisma ORM]
- Testing: [e.g., Vitest + Playwright]
- CI/CD: [e.g., GitHub Actions]

## Getting Started
[Commands to install dependencies, start dev server, etc.]

## Testing
[Command to run tests, where test files live, testing conventions]

## Architecture
[Brief description of project structure — what lives where]

## Coding Conventions
- [Style rules, naming conventions, file organization]
- [Import ordering, commenting standards]
- [Patterns to follow, patterns to avoid]

## Restrictions
- Never modify migration files directly
- Never commit .env files
- Never use `any` type in TypeScript
- Always use parameterized queries for database access
- Do not delete test files without explicit approval

## Code Review Standards
- All changes require at least one human reviewer
- Test coverage must not decrease
- No console.log left in production code
```

### 3. Set Up Standard Hooks

Create **`.codex/hooks.json`** to enforce team standards automatically:

```json
{
  "hooks": [
    {
      "event": "PostToolUse",
      "tool": "file_write",
      "command": "npx eslint --fix ${file}",
      "description": "Auto-format written files"
    },
    {
      "event": "PostToolUse",
      "tool": "file_edit",
      "command": "npx eslint --fix ${file}",
      "description": "Auto-format edited files"
    },
    {
      "event": "Stop",
      "command": "npm test --silent 2>/dev/null || echo 'Some tests may need attention'",
      "description": "Run tests when session ends"
    }
  ]
}
```

### 4. Create Reusable Agents for Team Workflows

Build agents for common tasks your team does repeatedly:

**Test Writer Agent** (`.codex/agents/test-writer.md`):
```markdown
You are a test-writing specialist for this project.
Read AGENTS.md for project conventions.
For each function or component you are asked to test:
1. Read the source code to understand behavior
2. Write tests covering happy path, edge cases, and error cases
3. Follow existing test patterns in the project
4. Run tests to verify they pass
```

**Code Reviewer Agent** (`.codex/agents/code-reviewer.md`):
```markdown
You are a code reviewer for this project.
Read AGENTS.md for project conventions and restrictions.
For each file or change you review:
1. Check for correctness and potential bugs
2. Verify it follows project conventions
3. Look for security issues
4. Check test coverage
5. Suggest improvements (but distinguish "must fix" from "nice to have")
```

**Documentation Agent** (`.codex/agents/doc-writer.md`):
```markdown
You are a documentation specialist for this project.
Read AGENTS.md for project context.
When documenting code:
1. Write clear, concise explanations
2. Include usage examples
3. Document parameters, return values, and side effects
4. Keep documentation close to the code it describes
5. Update any related documentation that references this code
```

---

## Code Review Process with AI-Generated Code

### The Review Mindset

Treat AI-generated code like a pull request from a capable but sometimes careless junior developer:
- It usually works, but might miss edge cases
- It follows patterns well but might not understand your specific business logic
- It can introduce subtle bugs that look correct at first glance
- It sometimes generates more code than necessary

### Review Checklist for AI Changes

When reviewing code that Codex produced, pay extra attention to:

1. **Business logic accuracy**: Does the code actually do what was requested? AI can misinterpret requirements.
2. **Edge cases**: Does it handle null, empty, out-of-range, and concurrent scenarios?
3. **Security**: No hardcoded secrets? Input validation? SQL injection protection?
4. **Performance**: No unnecessary loops, API calls, or memory allocation?
5. **Test coverage**: Are the tests meaningful or just checking that the code runs?
6. **Dependencies**: Did it add any new dependencies? Are they necessary and trustworthy?
7. **Consistency**: Does it follow existing patterns or introduce a new style?

### Labeling AI-Generated Code

Consider adding labels or tags to pull requests that include AI-generated code:
- `ai-assisted` — Code written with AI help
- `ai-generated` — Code primarily written by AI
- This helps with auditing and understanding code provenance

---

## Training Plan

### Week 1: Foundations (Everyone)

**Day 1-2: Introduction**
- What is an AI agent (vs. a chatbot or autocomplete)
- Install Codex and verify it works
- Run through the onboarding prompt together as a team

**Day 3-4: Core Skills**
- The 5 Golden Rules
- The WHAT + WHERE + HOW + VERIFY prompt formula
- Context management: /status, /compact, /clear
- Reviewing diffs before accepting

**Day 5: Practice**
- Each developer picks a small, real task and completes it with Codex
- Share results and discuss what worked and what did not

### Week 2: Workflow Integration (Everyone)

**Day 1-2: Real Work**
- Use Codex for actual sprint tasks
- Focus on test writing, bug fixes, and documentation (lower risk)
- Check in as a team — what patterns are people discovering?

**Day 3-4: Configuration**
- Review the shared AGENTS.md and suggest improvements
- Learn about MCP servers and when they are useful
- Practice starting fresh sessions for each task

**Day 5: Retrospective**
- What worked? What did not?
- What took longer with Codex? What was faster?
- Update AGENTS.md with team learnings

### Week 3: Advanced (Interested Developers)

- Custom agents for team-specific workflows
- Hooks for automated quality checks
- /plan mode for complex multi-step tasks
- Multi-agent patterns for parallel work
- codex exec for automation scripts

### Ongoing: Learning Together

- **Weekly Codex tips**: One team member shares a trick they discovered
- **Prompt library**: Collect effective prompts for common tasks in a shared doc
- **Agent marketplace**: Share and reuse custom agents across the team
- **Monthly review**: Check AI-assisted code quality metrics

---

## Managing Team Productivity

### Metrics to Track

| Metric | What It Tells You | How to Measure |
|---|---|---|
| Tasks per sprint | Overall velocity change | Sprint tracking tool |
| Time to first commit | Onboarding speed for new members | Git history |
| Test coverage delta | Whether AI code is well tested | CI coverage reports |
| Bug rate (AI vs. manual) | Quality of AI-generated code | Bug tracker labels |
| Review time per PR | Whether AI code takes more review | PR analytics |
| Developer satisfaction | Whether the team finds it helpful | Quick surveys |

### Red Flags to Watch For

- **Rubber-stamping reviews**: Developers accepting AI changes without looking → Reinforce the review culture
- **Quality dip**: More bugs from AI-generated code → Tighten review checklist, restrict to lower-risk tasks
- **Over-reliance on one model**: Only using GPT-5.4 for everything → Teach when to use GPT-5.4-mini
- **Context waste**: Team members fighting context limits constantly → Retrain on context management
- **Inconsistent configuration**: Different developers using different settings → Commit shared config to repo

---

## Common Scenarios and Solutions

### "A developer accepted a bad change and it broke the build"
- Tighten the review process — require a second set of eyes for AI-generated code
- Add PostToolUse hooks to run tests automatically
- No blame — use it as a teaching moment about reviewing diffs

### "The team is not using Codex at all"
- Pair program: sit with team members and work through a real task together
- Start with pain points they already have (writing tests, updating docs)
- Remove friction: make sure config is committed, AGENTS.md is written

### "Codex keeps doing the wrong thing in our project"
- Improve AGENTS.md with more specific instructions
- Add restrictions for things Codex should never do
- Check that project conventions are documented, not just assumed

### "We are worried about security"
- Use `workspace-write` sandbox (default)
- Use `on-request` approval mode
- Audit MCP server installations
- Review hooks for any unintended side effects
- Use the audit prompt to check each developer's setup

### "Management wants metrics yesterday"
- Start tracking task completion velocity in Week 1
- Compare sprint velocity before and after (give it at least 2-3 sprints)
- Survey developer satisfaction weekly during rollout

---

## Quick Reference for Team Setup

```
ESSENTIAL FILES (commit to repo):
  .codex/config.toml    — Team-wide settings
  AGENTS.md             — Project instructions
  .codex/hooks.json     — Automated quality checks

RECOMMENDED SETTINGS:
  Sandbox:    workspace-write
  Approval:   on-request
  Model:      gpt-5.4 (default), gpt-5.4-mini (simple tasks)
  Features:   shell_tool, web_search, codex_hooks, undo

DAILY WORKFLOW:
  1. Start fresh Codex session per task
  2. Use WHAT + WHERE + HOW + VERIFY
  3. Review every diff before accepting
  4. Run tests to verify
  5. Commit when satisfied
```

---

## Next Steps

1. **Set up your first project**: Follow the Team Setup Checklist above
2. **Run the onboarding**: Use [the onboarding prompt](../tools/onboarding-prompt.md) with your team
3. **Audit your setup**: Use [the audit prompt](../tools/audit-prompt.md) to verify everything is configured correctly
4. **Read the full guide**: [The Ultimate OpenAI Codex Guide](../guide/ultimate-guide.md) has deep coverage of every topic
