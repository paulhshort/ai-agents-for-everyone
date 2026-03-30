# Claude Code: Another Agent in Your Toolkit

## Why This Chapter Exists

This guide mostly uses OpenAI Codex as its example agent tool.
But here's the thing: **Codex is not the only agent out there.**
And learning only one tool is like learning to drive only
one car -- the steering wheel is always in the same place.

Claude Code is another AI agent tool, built by Anthropic.
It works in the terminal, just like Codex. It follows the
same agentic paradigm -- think, act, observe, decide. It can
read your files, search the web, run commands, and complete
multi-step tasks.

The reason we cover it here is simple:

> **The skills you're learning -- prompting, context engineering,
> safety awareness, understanding design patterns -- work with
> ANY agent tool. The paradigm is universal. The specific tool
> is interchangeable.**

---

## What Is Claude Code?

Claude Code is Anthropic's AI agent for the terminal. If you've
used Codex, Claude Code will feel immediately familiar.

| | Codex | Claude Code |
|---|-------|-------------|
| **Made by** | OpenAI | Anthropic |
| **AI models** | GPT-5.4, GPT-5.3-codex | Claude Opus 4.6, Claude Sonnet 4.6 |
| **Where it runs** | Terminal (command line) | Terminal (command line) |
| **Project memory** | AGENTS.md | CLAUDE.md |
| **Sandbox** | Yes | Yes |
| **Tool use** | Yes (files, terminal, web, MCP) | Yes (files, terminal, web, MCP) |
| **Approval prompts** | Yes | Yes |
| **Install method** | `npm install -g @openai/codex` | `npm install -g @anthropic-ai/claude-code` |

Notice how similar they are? That's not a coincidence. They're
both implementations of the **same idea**: an AI agent that lives
in your terminal and can do real work.

---

## Same Concept, Different Provider

Think of it like email. Gmail and Outlook are different apps,
made by different companies, with different interfaces. But
they both do the same thing -- send and receive email. If you
know how to use one, you can figure out the other in minutes.

Codex and Claude Code are like that. Different companies,
different AI models under the hood, but the same fundamental
concept:

1. You give the agent a task
2. It plans an approach
3. It uses tools to do the work
4. It checks its results
5. It reports back to you

The agentic loop is the same. The design patterns are the same.
The skills you've been building throughout this guide apply to both.

---

## Key Differences to Know

While the concept is the same, there are some practical
differences worth knowing:

### Project Memory File

- **Codex** uses `AGENTS.md`
- **Claude Code** uses `CLAUDE.md`

They serve the exact same purpose -- a file that tells the
agent about your project, your preferences, and the current
status. Everything you learned in the
[Context Engineering](context-engineering.md) chapter about
writing good AGENTS.md files applies directly to CLAUDE.md.

### Different AI Models

Codex uses OpenAI's models (like GPT-5.4). Claude Code uses
Anthropic's models (like Claude Opus 4.6 and Claude Sonnet 4.6).

These are different AI "brains" with different strengths.
Some people prefer one over the other for certain tasks.
The important thing is that the **agent paradigm** -- the
loop, the tools, the patterns -- stays the same regardless
of which brain is underneath.

### Command Names

Some commands are shared, some are different:

| Action | Codex | Claude Code |
|--------|-------|-------------|
| Clear conversation | `/clear` | `/clear` |
| Compress context | `/compact` | `/compact` |
| Check status | `/status` | `/status` |
| Start fresh | `/new` | Start a new session |
| Review changes | `/diff` | `/diff` |

Most commands do the same things with the same names.
If you know one, you'll pick up the other quickly.

---

## Quick Start with Claude Code

If you want to try Claude Code, here's how to get started:

### Step 1: Install It

```
npm install -g @anthropic-ai/claude-code
```

(You need Node.js installed first, just like with Codex.)

### Step 2: Get an API Key

You'll need an Anthropic account and API key. Go to
console.anthropic.com, create an account, and generate a key.

### Step 3: Start a Session

Open your terminal, navigate to a project folder, and type:

```
claude
```

That's it. Claude Code starts up and is ready to work.

### Step 4: Give It a Task

Just like with Codex, you type what you want done:

```
You:  "Read through my notes folder and create a summary
       of the key themes across all my files."

Claude Code: "I'll start by reading the files in your
              notes folder..."
              (reads files)
              (identifies themes)
              (creates summary)
              "I found 4 major themes across your 12 note
               files. Here's the summary..."
```

---

## Useful Commands

Here are the commands you'll use most often:

| Command | What It Does |
|---------|-------------|
| `/compact` | Summarize the conversation to free up context window space |
| `/clear` | Clear the conversation and start fresh |
| `/status` | Show what the agent knows about the current session |
| `/diff` | Show what files have been changed |
| `/help` | Show all available commands |

These should look familiar. They work the same way as in Codex.

---

## Beyond Codex and Claude Code

Codex and Claude Code are just two examples. The AI agent
landscape includes several other tools:

- **Cursor** -- An AI-powered editor with agent capabilities
- **GitHub Copilot** -- AI assistance built into code editors
- **Windsurf** -- Another AI agent for the terminal
- **Gemini CLI** -- Google's command-line AI agent

Each one implements the same fundamental ideas:

- The agentic loop (think, act, observe, decide)
- Tool use (files, terminal, web)
- Context management (project files, memory)
- Safety controls (sandboxing, approval prompts)

**The tool you use matters far less than the skills you bring
to using it.**

---

## The Universal Agent Skillset

Here's what transfers across every single agent tool:

### 1. Context Engineering
How you provide information to the agent -- the 6 components
(instructions, knowledge, tools, memory, state, queries) --
works identically regardless of which tool you're using.

### 2. Design Patterns
The Agent Loop, Planning Pattern, Memory Pattern, Human-in-the-Loop --
these are patterns of *interaction*, not features of a specific tool.

### 3. Safety Thinking
Understanding sandboxes, approval prompts, autonomy levels, and
what to trust an agent with -- this applies universally.

### 4. Clear Communication
Being specific about what you want, providing relevant context,
and knowing when to course-correct -- these are human skills
that make every agent better.

### 5. Knowing When to Step In
Understanding when to let the agent work independently and
when to check its work -- this judgment is tool-agnostic.

---

## The Point

If you take only one thing from this chapter, let it be this:

> **You are not learning Codex. You are not learning Claude Code.
> You are learning how to work with AI agents. The specific tool
> is just the vehicle. The skills are what you keep forever.**

Five years from now, Codex and Claude Code might not exist in
their current form. But the skills you're learning --
context engineering, design patterns, safety awareness,
clear communication -- will still be the foundation of
working effectively with whatever AI agents exist then.

Learn the paradigm. The tools will follow.

---

## Key Takeaways

1. **Claude Code is Anthropic's AI agent for the terminal**,
   similar in concept to OpenAI's Codex.

2. **The core paradigm is identical**: agentic loop, tool use,
   context management, safety controls.

3. **Practical differences are small**: CLAUDE.md instead of
   AGENTS.md, Claude models instead of GPT models, some
   different command names.

4. **Your skills transfer completely.** Context engineering,
   design patterns, and safety thinking work with any agent.

5. **The landscape is growing.** Cursor, Copilot, Gemini CLI,
   and more all follow the same agent paradigm.

6. **Learn the paradigm, not just the tool.** Tools change.
   Skills endure.

---

*Back to: [What Are Agents?](what-are-agents.md) | Next: [AI Safety Basics](ai-safety-basics.md)*
