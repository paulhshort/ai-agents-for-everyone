# OpenAI Codex Quick Reference

> Your one-page guide. Print it, pin it, and keep it handy.

---

## Five Golden Rules

1. **Always review before you accept.** Codex will show you what it wants to change. Read through it. Think of it like proofreading a letter before you send it.
2. **Keep your context tidy.** Type `/compact` when Codex tells you the context is getting full (or when you notice things slowing down). It is like clearing your desk so you can focus.
3. **Be specific.** The more clearly you describe what you want, the better the result. Use the WHAT-WHERE-HOW-VERIFY formula below.
4. **Ask for a plan first on big tasks.** Before Codex starts making changes, have it explain what it intends to do. You would not let a contractor start remodeling without seeing plans first.
5. **Set up project instructions.** Create an AGENTS.md file so Codex understands your project every time you start a session. Type `/init` to generate one automatically.

---

## Essential Commands

| What You Type | What It Does |
|---|---|
| `codex` | Start a new conversation with Codex |
| `codex "your question here"` | Ask something quick without entering the full interface |
| `codex --model gpt-5.4-mini` | Use the faster, lighter model |
| `codex --add notes.txt` | Include a specific file in the conversation so Codex can see it |
| `codex cloud "your task"` | Run a task in the cloud (no need to keep your computer on) |
| `codex resume` | Pick up where you left off in a previous session |
| `codex apply <task_id>` | Pull down results from a cloud task you ran earlier |

---

## Slash Commands (type these during a session)

| Command | What It Does |
|---|---|
| `/help` | Show a list of available commands |
| `/compact` | Compress your conversation to free up space |
| `/clear` | Start completely fresh (erases current conversation) |
| `/status` | See how much context space you have used |
| `/model` | Switch to a different AI model mid-conversation |
| `/init` | Create a starter AGENTS.md instructions file for your project |

---

## Context Health Zones

Think of context like the storage space in a suitcase. As you pack more in, you need to be more careful.

| Zone | Usage | What To Do |
|---|---|---|
| Green | 0-50% | Work freely, plenty of room |
| Yellow | 50-70% | Start being mindful of what you add |
| Orange | 70-85% | Type `/compact` soon to free up space |
| Red | 85%+ | Type `/compact` right now, or start a fresh session |

---

## The Prompt Formula: WHAT-WHERE-HOW-VERIFY

When you ask Codex to do something, structure your request like this:

```
WHAT:   What do you want done?
WHERE:  Where should it happen? (which file, folder, or area)
HOW:    Any specific approach or rules to follow?
VERIFY: How will you know it worked?
```

**Example (even a non-technical one works):**

```
WHAT:   Organize all the photos in my project folder by date
WHERE:  in the /images directory
HOW:    create subfolders named by year and month (like 2026-03)
VERIFY: every image should be in a dated subfolder, none left loose
```

---

## Quick Decision Tree

Not sure what to do? Follow this:

```
Simple question or small change?   -->  Just ask directly.
Big or complicated task?           -->  Ask Codex to plan first, then execute.
Context getting full?              -->  Type /compact to free up space.
Starting something unrelated?      -->  Open a new session (fresh start).
Need info from an outside service? -->  Check if an MCP server can help.
Something went wrong?              -->  Describe the problem clearly and ask for help.
```

---

## Sandbox Modes at a Glance

These control what Codex is allowed to do on your computer:

| Mode | What It Can Do | Best For |
|---|---|---|
| Read-only (safest) | Look at files, but not change anything | Exploring, learning, reviewing |
| Workspace-write | Read and change files in your project folder only | Most everyday tasks |
| Danger-full-access (most powerful) | Read, write, install software, access the internet | Advanced tasks that need full control |

---

## Models at a Glance

| Model | Best For |
|---|---|
| GPT-5.4 (default) | General-purpose work, best overall quality |
| GPT-5.4-mini | Quick tasks where speed matters more than depth |
| GPT-5.3-codex | Specialized for code-related work |
| GPT-5.3-codex-spark | Near-instant coding, ChatGPT Pro only |

---

## Helpful Tips

- Use `gpt-5.4-mini` for quick, simple tasks to get faster responses.
- Type `/compact` early and often to keep your conversation running smoothly.
- Start a new session for each new task so Codex has a clean slate.
- The more specific you are, the fewer back-and-forth rounds you need.
- Codex is included with your ChatGPT Plus or Pro subscription. No extra billing to worry about.

---

## Quick Links

- [Full Guide](ultimate-guide.md)
- [Glossary](core/glossary.md)
- [Settings Reference](core/settings-reference.md)
- [Known Issues](core/known-issues.md)
