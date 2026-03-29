# OpenAI Codex -- Student Quickstart

**Keep this handout. Tape it to your wall. Reference it when you get home.**

---

## Install Codex (one time)

You need Node.js 22+ first. Download it from https://nodejs.org if you don't have it.

Then open your terminal and run:

```
npm install -g @openai/codex
```

On Mac, you can also use:

```
brew install --cask codex
```

## Sign In (one time)

Run `codex` and choose "Sign in with ChatGPT" to authenticate with your OpenAI account.
Alternatively, you can use an API key.

## Start Codex

```
codex
```

That's it. You're in. Start typing prompts.

---

## Essential Commands

| Command | What It Does |
|---------|-------------|
| `/status` | Shows how much context (memory) you've used |
| `/compact` | Frees up context by summarizing the conversation |
| `/clear` | Clears the conversation entirely |
| `/model` | Switch between AI models |
| `/diff` | Shows what changes were made to files |
| `/plan` | Asks the AI to make a plan before acting |
| `/review` | Reviews pending changes before you approve |
| `/init` | Creates an AGENTS.md file for your project |
| `/permissions` | View and manage permission settings |
| `/mcp` | Manage external tool connections |

## Keyboard Shortcuts

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+C` | Cancel the current operation |
| `@` | Reference a file in your prompt |
| `!` | Run a shell command |
| `Ctrl+G` | Accept pending changes |
| `Esc Esc` | Interrupt the AI's response |

## Available Models

| Model | Best For |
|-------|---------|
| `gpt-5.4` | General use (default -- most capable) |
| `gpt-5.4-mini` | Quick tasks where speed matters |
| `gpt-5.3-codex` | Specialized code tasks |

Switch models with: `/model gpt-5.4-mini`

---

## The Golden Rules

1. **Always review before approving.** Read what Codex plans to do before you say yes.
2. **Be specific.** "Make a website" is worse than "Create an HTML page with a dark theme and three sections."
3. **Use /status.** If Codex starts acting confused, check your context usage.
4. **Iterate.** Your first prompt won't be perfect. Tell Codex what to fix.
5. **Start fresh when stuck.** Close and reopen Codex if things get messy.
6. **Never share secrets.** Don't paste passwords, API keys, or personal info into prompts.

---

## Prompt Formula: WHAT-WHERE-HOW-VERIFY

```
WHAT   -- What do you want done?
WHERE  -- Which files or folders?
HOW    -- Style, format, constraints?
VERIFY -- How will you check it worked?
```

**Example:**
```
Create an HTML file (WHAT) called portfolio.html in this folder (WHERE)
with a dark theme, my name in the header, and three sections for
hobbies, skills, and contact info (HOW). Open it in a browser
to make sure it renders correctly (VERIFY).
```

---

## Safety Modes at a Glance

| Mode | Can Read Files | Can Write Files | Can Run Commands |
|------|---------------|----------------|-----------------|
| `read-only` | Yes | No | No |
| `workspace-write` | Yes | Yes (project folder only) | Limited |
| `danger-full-access` | Yes | Yes (anywhere) | Yes (anything) |

Stay in **workspace-write** for most tasks. Only use read-only when exploring. Avoid danger-full-access unless you know exactly what you're doing.

---

## What to Try Next

Now that you know the basics, try these at home:

- [ ] Ask Codex to explain a concept from one of your classes
- [ ] Have Codex create a study guide for an upcoming test
- [ ] Use Codex to organize a messy folder on your computer
- [ ] Build a simple HTML page about something you love
- [ ] Ask Codex to write a short story in a genre you pick
- [ ] Use Codex to analyze a CSV file (download one from data.gov or kaggle.com)
- [ ] Create an AGENTS.md file for a project (`/init`)
- [ ] Try the same prompt with different models and compare results

---

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| "command not found: codex" | Run `npm install -g @openai/codex` again |
| "node: command not found" | Install Node.js from https://nodejs.org |
| Authentication won't work | Try signing in with a different browser |
| Codex seems confused | Use `/compact` or start a fresh session |
| "Permission denied" | Run terminal as admin (Windows) or use `sudo` (Mac/Linux) |
| Codex won't create files | Check that you're not in read-only sandbox mode |

---

## Course Repository

`[QR CODE PLACEHOLDER -- insert QR code linking to the course repo]`

Scan this code or visit the URL to access all course materials,
guide files, and labs.

---

*You learned this in the AI Agents and OpenAI Codex course. Keep building.*
