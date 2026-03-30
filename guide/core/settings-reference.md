# Settings Reference

This page documents all the key settings you can configure in Codex. You do not need to change any of these to get started, but as you get more comfortable, customizing these settings lets you tailor Codex to work exactly the way you want.

---

## Where Settings Live

Codex uses configuration files written in a format called TOML (a simple text format that is easy to read and edit). There are three levels, and each one overrides the one before it:

| Level | File Location | What It Controls | Priority |
|---|---|---|---|
| System-wide (admin) | `/etc/codex/config.toml` | Settings for everyone on the machine (set by IT admins) | Lowest |
| Personal (user) | `~/.codex/config.toml` | Your personal preferences across all projects | Medium |
| Project | `.codex/config.toml` (inside your project folder) | Settings specific to one project | Highest |
| Environment variables | `CODEX_*` variables set in your system | Override any file-based setting | Highest |

**How to think about it:** System-wide settings are like company policies. Personal settings are your own preferences. Project settings are rules for a specific job. And environment variables are last-minute overrides for special situations.

---

## How to Edit Settings

Open the appropriate `config.toml` file in any text editor. The format looks like this:

```toml
# This is a comment (Codex ignores it)
model = "gpt-5.4"
sandbox = "workspace-write"
```

Each setting is a key (the name) followed by an equals sign and a value. Text values go in quotes. True/false values and numbers do not need quotes.

---

## Model Settings

These control which AI brain Codex uses and how it behaves.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `model` | Which AI model Codex uses for thinking | `"gpt-5.4"` | `model = "gpt-5.4-mini"` |
| `model_reasoning_effort` | How hard the model thinks before answering (minimal, low, medium, high, xhigh) | `"high"` | `model_reasoning_effort = "medium"` |

**Available models:**
- `"gpt-5.4"` -- Best all-around quality (default)
- `"gpt-5.4-mini"` -- Faster and lighter, good for simple tasks
- `"gpt-5.3-codex"` -- Specialized for code-related work
- `"gpt-5.3-codex-spark"` -- Near-instant coding responses (ChatGPT Pro only)

---

## Sandbox Settings

These control what Codex is allowed to do on your computer.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `sandbox` | Which sandbox mode to use | `"workspace-write"` | `sandbox = "read-only"` |

**Available sandbox modes:**
- `"read-only"` -- Codex can look at files but not change anything
- `"workspace-write"` -- Codex can change files only in your project folder (network disabled)
- `"danger-full-access"` -- Codex can do anything, including accessing the internet (use with caution)

---

## Approval Settings

These control when Codex asks for your permission before acting.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `approval_policy` | When Codex asks permission before taking actions | `"on-request"` | `approval_policy = "untrusted"` |

**Available policies:**
- `"untrusted"` -- Codex asks before almost every action (safest)
- `"on-request"` -- Codex asks when it is not sure, skips for routine actions (balanced)
- `"never"` -- Codex acts without asking (fastest, but you fully trust it)

---

## Shell Settings

These control how Codex interacts with your computer's command line.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `shell` | Which shell program Codex uses to run commands | Your system default | `shell = "/bin/bash"` |
| `shell_environment_policy` | Whether Codex inherits your shell's environment variables | `"inherit"` | `shell_environment_policy = "isolate"` |

---

## History and Session Settings

These control how Codex saves your conversations.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `history` | Whether to save conversation history | `true` | `history = false` |
| `project_doc_max_bytes` | Maximum size of project instruction files Codex will read | `65536` (64 KB) | `project_doc_max_bytes = 131072` |

---

## MCP Server Settings

MCP (Model Context Protocol) servers extend Codex with new capabilities, like connecting to databases or external services. Configure them in a special section of your config file.

```toml
[mcp_servers.my-server-name]
command = "npx"
args = ["-y", "some-mcp-server"]
env = { API_KEY = "your-key-here" }
```

| Key | What It Does | Example |
|---|---|---|
| `command` | The program to run to start the MCP server | `"npx"`, `"python"`, `"node"` |
| `args` | Arguments to pass to the command | `["-y", "server-package-name"]` |
| `env` | Environment variables the server needs | `{ API_KEY = "abc123" }` |

You can configure multiple MCP servers by adding more `[mcp_servers.name]` sections.

---

## Feature Flags

These turn specific Codex capabilities on or off.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `notify` | Show desktop notifications when tasks finish | `true` | `notify = false` |
| `project_doc_enabled` | Whether Codex reads project instruction files (AGENTS.md) | `true` | `project_doc_enabled = false` |

---

## TUI (Interface) Settings

These control how Codex looks in your terminal.

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `theme` | Color theme for the interface | `"dark"` | `theme = "light"` |
| `hide_agent_reasoning` | Whether to show Codex's internal thinking process | `false` | `hide_agent_reasoning = true` |

---

## Notification Settings

| Setting | What It Does | Default Value | Example |
|---|---|---|---|
| `notify` | Send a desktop notification when a task completes | `true` | `notify = false` |

---

## Environment Variables

These are set in your system (not in config files) and override any file-based settings.

| Variable | What It Does |
|---|---|
| `CODEX_HOME` | Changes where Codex looks for its configuration folder (default is `~/.codex`) |
| `CODEX_API_KEY` | Provides your API key (alternative to storing it in a file) |
| `CODEX_CA_CERTIFICATE` | Points to a custom security certificate (used by companies with web proxies) |

---

## Example: A Complete Personal Config File

Here is what a typical `~/.codex/config.toml` might look like:

```toml
# My Codex preferences
model = "gpt-5.4"
sandbox = "workspace-write"
approval_policy = "on-request"
notify = true

# A useful MCP server for web searches
[mcp_servers.web-search]
command = "npx"
args = ["-y", "web-search-mcp"]
```

---

## Example: A Project-Specific Config File

Place this in `.codex/config.toml` inside a specific project folder:

```toml
# This project needs danger-full-access to run its test suite
sandbox = "danger-full-access"
approval_policy = "untrusted"
model = "gpt-5.3-codex"
```

This tells Codex: "When working in this project, use danger-full-access (but ask me before doing anything) and use the code-specialized model."
