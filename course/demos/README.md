# Codex CLI Live Demos -- Instructor Guide

> **Course:** AI Agents for the Next Generation (2.5 days)
> **Audience:** High school and early college students
> **Tool:** OpenAI Codex CLI

---

## How to Use This Guide

Each demo is designed to be projected on a classroom screen while the instructor
drives. Demos build on each other conceptually, but each can also stand alone.
Read the full demo file before class -- it includes exact prompts, talking
points, and timing.

**Preparation checklist (run the night before):**

1. `npm install -g @openai/codex` and confirm `codex --version` works.
2. Authenticate: run `codex`, choose "Sign in with ChatGPT."
3. Create the demo working folders described in each demo file.
4. Do one dry-run of Demo 01 to make sure screen sharing looks clean.

---

## Demo Index

| # | Title | Concept Taught | Difficulty | Wow Factor | Time | File |
|---|-------|---------------|------------|------------|------|------|
| 01 | First Contact | AI reads and understands files | Beginner | ★★★★☆ | 10 min | `demo-01-first-contact.md` |
| 02 | The Agent Creates | Writing to disk -- chatbot vs agent | Beginner | ★★★★★ | 12 min | `demo-02-agent-creates.md` |
| 03 | Token Explorer | Tokens, context, cost awareness | Beginner | ★★★☆☆ | 10 min | `demo-03-token-explorer.md` |
| 04 | Prompt Showdown | Prompt engineering basics | Beginner | ★★★★☆ | 12 min | `demo-04-prompt-showdown.md` |
| 05 | The Sandbox | Permissions and AI safety | Intermediate | ★★★★☆ | 12 min | `demo-05-sandbox-showdown.md` |
| 06 | Think Before You Act | Plan mode and review | Intermediate | ★★★★☆ | 12 min | `demo-06-plan-mode.md` |
| 07 | Side by Side | Codex agent vs ChatGPT | Beginner | ★★★★★ | 10 min | `demo-07-codex-vs-chatgpt.md` |
| 08 | Adding Superpowers | MCP external tools | Intermediate | ★★★★★ | 12 min | `demo-08-mcp-superpower.md` |
| 09 | The 30-Second Project | Full-auto multi-file creation | Intermediate | ★★★★★ | 10 min | `demo-09-multi-step-magic.md` |
| 10 | Teaching Your Agent | AGENTS.md configuration | Intermediate | ★★★★☆ | 12 min | `demo-10-agents-md.md` |

---

## Suggested Schedule

### Day 1 -- "What Is an AI Agent?"
| Time | Demo |
|------|------|
| Morning block | Demo 01: First Contact |
| Morning block | Demo 02: The Agent Creates |
| After break | Demo 03: Token Explorer |
| After break | Demo 04: Prompt Showdown |

### Day 2 -- "Working With Agents"
| Time | Demo |
|------|------|
| Morning block | Demo 05: The Sandbox |
| Morning block | Demo 06: Think Before You Act |
| After break | Demo 07: Side by Side |
| After break | Demo 08: Adding Superpowers |

### Day 3 -- "Building With Agents"
| Time | Demo |
|------|------|
| Morning block | Demo 09: The 30-Second Project |
| Morning block | Demo 10: Teaching Your Agent |

---

## Tips for Maximum Impact

- **Pause after every WOW moment.** Let the reaction happen. Count to three.
- **Ask "What just happened?" after each step.** Force the class to articulate it.
- **Keep your terminal font at 18pt or larger** so the back row can read it.
- **Use a dark terminal theme** -- it projects better in bright classrooms.
- **Have a backup hotspot** in case classroom Wi-Fi drops.
- **Pre-type long prompts** in a notes app and paste them in. Typos kill momentum.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `codex: command not found` | `npm install -g @openai/codex` again, check PATH |
| Authentication error | Run `codex` fresh and re-authenticate |
| Slow responses | Switch to GPT-5.4-mini: `/model gpt-5.4-mini` |
| Sandbox blocks something unexpectedly | Explain to students -- this is a feature, not a bug |
| Rate limit hit | Take a 2-minute break, continue |

---

*All demos written for Codex CLI. Last updated March 2026.*
