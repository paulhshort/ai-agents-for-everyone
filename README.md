# AI Agents for Everyone

> Learn how to use an AI that does not just answer questions — it actually does things for you.

[![Version](https://img.shields.io/badge/version-0.2.0-blue.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## What Is an AI Agent?

Most people think of AI as something that answers questions — like a very smart search engine. You ask it something, it gives you an answer.

**An AI agent is different.** An agent can actually *do* things. You tell it what you want, and it goes and does it — editing files, writing code, running commands, fixing problems, building features. Then it shows you what it did, and you approve or ask it to try again.

**OpenAI Codex is an AI agent.** It is like having a capable assistant who can work on your software projects. You describe the task in plain English, and Codex handles the rest.

This guide teaches you everything you need to know to use Codex effectively and safely — even if you have never used an AI tool before.

---

## Who Is This Guide For?

**Everyone.** Whether you are:

- **A complete beginner** wondering what AI agents even are -> Start with [Codex for Beginners](docs/for-beginners.md)
- **A student** learning AI for the first time -> Start with [AI Foundations](guide/foundations/what-is-ai.md) or join the [2.5-Day Course](course/)
- **A teacher or trainer** preparing an AI course -> See the [Course Materials](course/) (ready-to-use 2.5-day curriculum with slides, demos, and labs)
- **A developer** who wants to be more productive -> Read the [Main Guide](guide/ultimate-guide.md)
- **A tech lead** setting up Codex for your team -> See [For Tech Leads](docs/for-tech-leads.md)
- **A product manager** planning around AI-assisted development -> See [For Product Managers](docs/for-product-managers.md)
- **A CTO** evaluating adoption -> See [For CTOs](docs/for-cto.md)
- **In a hurry** -> Grab the [Cheat Sheet](guide/cheatsheet.md)

---

## Quick Start (5 Minutes)

### 1. Install Codex

```bash
npm install -g @openai/codex
```

Or on Mac:
```bash
brew install --cask codex
```

### 2. Start Your First Session

```bash
codex
```

### 3. Try Your First Task

Type something like:
```
Explain what files are in this folder and what they do
```

Codex will read your files and give you a clear explanation. That is the agentic paradigm in action — you asked, and it went and investigated.

### 4. Get a Personalized Tour

For a guided introduction tailored to your experience level:

```bash
codex "Fetch and follow the onboarding instructions from: https://raw.githubusercontent.com/paulhshort/ai-agents-for-everyone/main/tools/onboarding-prompt.md"
```

---

## The 5 Golden Rules

These five simple rules will make your Codex experience dramatically better:

1. **Always review changes before accepting** — Codex is powerful but not perfect. A quick review catches mistakes.
2. **Manage your context** — Use `/compact` before your conversation fills up. Think of it like tidying your desk.
3. **Be specific** — Tell Codex WHAT you want, WHERE in the project, HOW to do it, and how to VERIFY it worked.
4. **Plan first for big tasks** — Use `/plan` to see the approach before Codex starts making changes.
5. **Create AGENTS.md for every project** — This file tells Codex about your project so it does not have to guess.

---

## What Is in This Guide

### AI Foundations (Start Here If You Are New to AI)

| Resource | What It Covers |
|---|---|
| [What Is AI?](guide/foundations/what-is-ai.md) | AI demystified — not magic, not Terminator, just very good pattern matching |
| [How LLMs Work](guide/foundations/how-llms-work.md) | Tokens, context windows, and why AI sometimes makes things up |
| [Reasoning Models](guide/foundations/reasoning-models.md) | How AI "thinks" and why some models are smarter than others |
| [What Are Agents?](guide/foundations/what-are-agents.md) | The big idea — AI that DOES things, not just talks about them |
| [AI Safety Basics](guide/foundations/ai-safety-basics.md) | Staying safe, being smart, using AI responsibly |

### Course Materials (For Teachers and Students)

| Resource | What It Is |
|---|---|
| [Course Overview](course/) | Complete 2.5-day curriculum for high school / college students |
| [Day 1: What Is AI?](course/day-1/) | From chat to agent — installation, first session, exploration lab |
| [Day 2: Power User](course/day-2/) | Prompting, safety, building projects, the AI ecosystem |
| [Day 3: Build](course/day-3/) | Final projects, presentations, the future |
| [Live Demos](course/demos/) | 10 scripted demos with wow-factor moments |
| [Hands-On Labs](course/labs/) | 3 labs from mystery folder detective to final project |
| [Presentation Slides](course/slides/) | Projector-ready markdown slides, activities, and discussion prompts |
| [Student Handouts](course/handouts/) | Take-home quickstart, prompt cheatsheet, safety card |

### Core Documentation

| Resource | What It Is |
|---|---|
| [Main Guide](guide/ultimate-guide.md) | The complete guide — 15 sections covering everything from installation to advanced patterns |
| [Cheat Sheet](guide/cheatsheet.md) | A printable one-page reference with all commands and shortcuts |
| [Glossary](guide/core/glossary.md) | Plain-language definitions of every term |
| [Architecture](guide/core/architecture.md) | How Codex works under the hood |

### Interactive Tools

| Tool | What It Does |
|---|---|
| [Onboarding](tools/onboarding-prompt.md) | A personalized guided tour — adapts to your experience level (5-120 min) |
| [Setup Audit](tools/audit-prompt.md) | Checks your Codex configuration and suggests improvements |
| [Context Audit](tools/context-audit-prompt.md) | Analyzes how you use context and helps you optimize it |
| [Quiz](quiz/) | Test your knowledge with interactive questions |

### Guides for Different Roles

| Role | Guide |
|---|---|
| Complete beginners | [For Beginners](docs/for-beginners.md) — What is AI? What is an agent? Is it safe? |
| CTOs | [For CTOs](docs/for-cto.md) — Adoption strategy, risks, security, cost |
| Tech leads | [For Tech Leads](docs/for-tech-leads.md) — Team setup, review processes, training |
| Product managers | [For Product Managers](docs/for-product-managers.md) — Velocity impact, sprint planning |

### Examples and Templates

| Category | What You Get |
|---|---|
| [Agent Templates](examples/agents/) | Ready-to-use agent definitions for common tasks |
| [Custom Commands](examples/commands/) | Slash command templates you can use in Codex |
| [Hook Scripts](examples/hooks/) | Automation examples that run at specific events |
| [Config Files](examples/configs/) | Configuration templates for different use cases |
| [Skills](examples/skills/) | Custom skill definitions |

### Security

| Resource | What It Covers |
|---|---|
| [Sandbox Modes](guide/security/sandbox-modes.md) | How to control what Codex can and cannot do |
| [Security Hardening](guide/security/security-hardening.md) | Making your setup as safe as possible |
| [Data Privacy](guide/security/data-privacy.md) | How your data is handled |
| [Enterprise Governance](guide/security/enterprise-governance.md) | Organization-wide policies |

---

## Repository Structure

```
ai-agents-for-everyone/
|-- guide/                    # Core documentation
|   |-- ultimate-guide.md     # The main guide (15 sections)
|   |-- cheatsheet.md         # Printable quick reference
|   |-- foundations/           # AI basics for absolute beginners
|   |-- core/                 # Architecture, glossary, settings
|   |-- security/             # Security docs
|   +-- workflows/            # Step-by-step workflow guides
|-- course/                   # 2.5-day training course
|   |-- day-1/                # Day 1: What Is AI, Really?
|   |-- day-2/                # Day 2: Becoming a Power User
|   |-- day-3/                # Day 3: Build Something Amazing
|   |-- demos/                # 10 scripted live demos
|   |-- labs/                 # 3 hands-on lab experiments
|   |-- slides/               # Projector-ready presentation slides
|   +-- handouts/             # Take-home student materials
|-- docs/                     # Audience-specific guides
|   |-- for-beginners.md      # Complete beginner FAQ
|   |-- for-cto.md            # CTO adoption guide
|   |-- for-tech-leads.md     # Team setup guide
|   +-- for-product-managers.md # PM velocity guide
|-- tools/                    # Interactive prompts
|   |-- onboarding-prompt.md  # Personalized guided tour
|   |-- audit-prompt.md       # Setup checkup
|   +-- context-audit-prompt.md # Context optimization
|-- machine-readable/         # AI-optimized indexes
|   |-- reference.yaml        # Master navigation index
|   +-- llms.txt              # LLM-friendly index
|-- examples/                 # Production-ready templates
|-- quiz/                     # Interactive quiz system
|-- mcp-server/               # MCP server for remote access
+-- scripts/                  # Maintenance automation
```

---

## MCP Server

Query the guide from any MCP-compatible AI assistant without cloning the repo:

```bash
# Add to Codex
codex mcp add codex-guide -- npx -y ai-agents-for-everyone-mcp

# Add to Claude Code
claude mcp add codex-guide -- npx -y ai-agents-for-everyone-mcp
```

Available tools: `search_guide`, `read_section`, `get_cheatsheet`, `get_commands`, `get_golden_rules`, `troubleshoot`, `get_glossary_term`

---

## About Codex

| | |
|---|---|
| **Made by** | OpenAI |
| **What it is** | An AI coding agent (CLI + Desktop App + Web) |
| **Powered by** | GPT-5.4 (default), GPT-5.4-mini (fast), GPT-5.3-codex (legacy) |
| **Install** | `npm install -g @openai/codex` or `brew install --cask codex` |
| **Included with** | ChatGPT Plus, Pro, Business, Team, Edu, Enterprise |
| **Open source** | Yes (Rust codebase) |
| **Config format** | TOML |

---

## Contributing

This guide is for everyone, so contributions from everyone are welcome — even if you are not a developer.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details. We especially welcome:
- Simpler explanations for complex topics
- Better analogies and examples
- Typo fixes and corrections
- Translations

---

## License

MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgments

Inspired by the structure and approach of [The Ultimate Claude Code Guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) by Florian Bruniaux.
