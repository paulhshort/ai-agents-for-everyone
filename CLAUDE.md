# CLAUDE.md — Project Memory for Codex Ultimate Guide

## Project Overview
This is the most comprehensive community guide for OpenAI Codex (CLI + App + Web) and GPT-5.4. It teaches the agentic paradigm — that AI can DO things, not just answer questions — to a non-technical audience.

## Critical: Audience and Tone
- **Target audience**: Non-technical people who are NEW to AI. Not developers.
- **Mission**: Teach the agentic paradigm — AI agents take actions, they are not chatbots.
- **Language**: Simple, conversational, accessible. No unexplained jargon.
- **Analogies**: Use everyday comparisons (desk, plumber, assistant, whiteboard).
- **Tone**: Friendly, clear, never condescending. Like a knowledgeable friend helping out.

## Architecture
- `guide/ultimate-guide.md` is the monolithic main document (~4000 lines, 15 sections)
- `machine-readable/reference.yaml` is the master index — every topic has a line-number or file-path pointer
- `examples/` contains production-ready templates organized by type
- `quiz/` is a Node.js interactive quiz pulling from YAML question banks
- `tools/` contains interactive prompts (onboarding, audit, context audit)
- `mcp-server/` is a TypeScript MCP server for querying the guide remotely
- `docs/` has audience-specific guides (CTOs, tech leads, PMs, beginners)

## Codex Facts (Always Accurate)
- Open source Rust project, npm package @openai/codex, also brew install --cask codex
- Models: GPT-5.4 (default), GPT-5.4-mini, GPT-5.3-codex
- Included with ChatGPT Plus/Pro/Business/Team/Edu/Enterprise
- Config: TOML format, ~/.codex/config.toml (user), .codex/config.toml (project), /etc/codex/config.toml (system)
- Project instructions: AGENTS.md
- Sandbox: read-only, workspace-write, danger-full-access
- Approval: untrusted, on-request, never, --full-auto, --yolo
- MCP support: codex mcp add/list/get/remove, config.toml [mcp_servers], HTTP and stdio servers
- Hooks: .codex/hooks.json, events: SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, Stop
- Skills: .agents/skills/ with SKILL.md
- Commands: /clear, /compact, /diff, /model, /plan, /status, /review, /init, /permissions, /mcp, /mention, /fork, /resume, /new, /personality, /theme, /ps, /agent, /apps, /fast
- CLI flags: --model, --full-auto, --sandbox, --search, --profile, --config, --image, --cd, --add-dir, --oss, --yolo
- codex exec for non-interactive, codex cloud for cloud tasks, codex resume for sessions
- Keyboard: Ctrl+C, Ctrl+G, Esc Esc, @, !, $
- Env vars: CODEX_HOME, CODEX_API_KEY, CODEX_CA_CERTIFICATE, CODEX_SQLITE_HOME
- Multi-agent: features.multi_agent, agents.max_threads, agents.max_depth
- Web search: disabled/cached/live
- Feature flags: multi_agent, shell_tool, web_search, codex_hooks, js_repl, fast_mode, undo, memories

## Key Conventions
- When adding new guide sections, always update `reference.yaml` with the line number
- Keep `VERSION` file, `reference.yaml` version field, and package.json files in sync
- Quiz questions reference their source guide section
- Examples include explanatory comments
- Security content is split across multiple focused files
- All content must be understandable by someone with no coding background

## Scripts
- `scripts/sync-version.sh` — Propagate version across all files
- `scripts/compile-questions.sh` — Build quiz data from YAML sources
- `scripts/validate-onboarding.sh` — Validate onboarding matrix topics exist in reference.yaml

## Style Rules
- Clear, simple English — write for a smart 14-year-old
- Practical examples over abstract theory
- Code blocks for all commands
- Tables for structured comparisons
- Explain jargon the first time it appears
- Use analogies to make concepts tangible
- Never condescend — assume the reader is intelligent but unfamiliar with the topic
- Reinforce the agentic paradigm: Codex DOES things, it is not a chatbot
