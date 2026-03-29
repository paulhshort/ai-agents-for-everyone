# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-03-28

### Added
- Complete MCP server implementation with 7 tools: search_guide, read_section, get_cheatsheet, get_commands, get_golden_rules, troubleshoot, get_glossary_term
- MCP server build config (tsup.config.ts) and server/tool registration (server.ts)
- Context audit prompt (tools/context-audit-prompt.md) — analyzes context usage habits and suggests optimizations
- Beginner FAQ guide (docs/for-beginners.md) — answers fundamental questions for people new to AI
- Product manager guide (docs/for-product-managers.md) — velocity impact, sprint planning, stakeholder communication
- llms.txt updated to llmstxt.org format with all resources

### Changed
- **Audience pivot**: Entire project reoriented toward non-technical users and the agentic paradigm
- README completely rewritten — leads with "What Is an AI Agent?" and uses accessible language throughout
- CLAUDE.md updated with audience/tone guidance and complete Codex facts
- reference.yaml completely rewritten with all sections filled in (no TODOs or placeholders):
  - 100+ deep_dive entries with line number estimates
  - Complete decision tree with 12 scenarios
  - All 20 slash commands documented
  - All 6 keyboard shortcuts documented
  - All 11 CLI flags documented
  - Full context zone descriptions with symptoms
  - AGENTS.md locations and priority order
  - All 5 permission/approval modes explained
  - MCP overview with management commands and popular servers
  - Architecture with agentic loop explanation
  - Subscription-based cost model with all 6 plan tiers
  - 12 anti-patterns
  - 14 troubleshooting quick fixes
  - 10 debug techniques
  - 5 golden rules with explanations
  - Complete AGENTS.md template with example
  - All 5 hook events documented
  - Expanded onboarding matrix with beginner-friendly profiles
  - Enhanced onboarding questions with friendlier prompts
- Onboarding prompt completely rewritten for non-technical audience with agentic paradigm focus
- Audit prompt rewritten as "Setup Checkup" with friendly, non-intimidating language
- CTO guide expanded with complete content (benefits, risks, adoption strategy, security framework, cost model)
- Tech leads guide expanded with team setup checklist, code review process, training plan, metrics
- All three scripts rewritten with proper error handling, color output, and project-root detection
- Guide reviewer agent updated to check accessibility and agentic framing
- Daily maintenance command expanded with link checking and accessibility review
- Sync command enhanced with mismatch reporting and validation
- Search command expanded to cover all document types
- CONTRIBUTING.md updated to welcome non-technical contributions

### Fixed
- reference.yaml no longer contains any TODO, placeholder, or incomplete sections
- All scripts now properly detect project root regardless of where they are called from
- MCP server package.json now includes all required dependencies (zod) and correct module settings

## [0.1.0] - 2026-03-28

### Added
- Initial project scaffold
- Directory structure mirroring the Ultimate Claude Code Guide (original template)
- Guide outline with 15 sections adapted for OpenAI Codex
- Machine-readable reference.yaml index (with TODOs)
- Example templates structure
- Quiz framework
- Onboarding prompt (developer-focused)
- Audit prompt (developer-focused)
- MCP server scaffold (not implemented)
