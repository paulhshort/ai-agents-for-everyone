# Security Hardening

This page explains how to make Codex as safe as possible. Think of it as locking the doors and windows of your house. Codex comes with good default security, but you can tighten things further depending on your needs.

---

## Why Security Matters

Codex is powerful. It can read files, write files, run commands, and connect to external services. That power is what makes it useful, but it also means you want guardrails in place. Security hardening is about making sure Codex only does what you want it to do, and nothing more.

**Analogy:** Imagine hiring a very capable assistant. You would not give them the keys to every room, your credit card, and your email password on their first day. You would start with limited access and expand it as trust builds. That is exactly the approach to take with Codex.

---

## Sandbox Configuration: Your First Line of Defense

The sandbox is the most important security feature. It creates a protective boundary around what Codex can do.

### Recommended Starting Point

Start with `workspace-write` mode. This is the default, and it provides a good balance:

```toml
# In your config.toml
sandbox = "workspace-write"
```

- Codex can read and change files only in your project folder
- Codex cannot access files elsewhere on your computer
- Network access is disabled (Codex cannot reach the internet)
- Certain critical files (like `.git`, `.codex`, `.agents`) are always protected

### When to Use Read-Only Mode

Use `read-only` when you just want Codex to look at things without changing anything:

```toml
sandbox = "read-only"
```

This is ideal for:
- Exploring an unfamiliar project
- Getting explanations about existing files
- Reviewing code or documents without risk

### When Full Access Is Needed

Some tasks genuinely require full access (installing software, downloading files, running tests that need network access). Use it sparingly:

```toml
sandbox = "full-access"
```

When using full access, pair it with a strict approval policy (see below).

---

## Approval Policies: Your Second Line of Defense

Even within the sandbox, you can control when Codex asks for your permission before acting.

### The Strict Approach (Recommended for Important Work)

```toml
approval_policy = "untrusted"
```

Codex will ask before nearly every action. This is slower but gives you maximum control. You see and approve every step.

**Analogy:** Like a new employee who checks with you before sending every email. Thorough, but you always know what is happening.

### The Balanced Approach (Default)

```toml
approval_policy = "on-request"
```

Codex asks for permission on actions it considers significant but handles routine tasks on its own. Good for everyday use.

### The Hands-Off Approach (Only When You Fully Trust the Task)

```toml
approval_policy = "never"
```

Codex acts without asking. Only use this for well-understood tasks in a restricted sandbox mode.

---

## Network Restrictions

By default, Codex in `workspace-write` mode has no internet access. This is an important security feature because it prevents:

- Accidentally downloading malicious software
- Data being sent to unknown servers
- Codex making changes based on potentially compromised web content

If you need internet access for a specific task, switch to `full-access` mode temporarily, complete the task, then switch back.

**Best practice:** Keep network disabled for most work. Enable it only when the task specifically requires it.

---

## File System Restrictions

Beyond the sandbox mode, you can control exactly which files and folders Codex can access.

### Protected Paths

Codex automatically protects certain critical paths regardless of sandbox mode:

- **`.git/`** -- Your version history (so Codex cannot rewrite your project history)
- **`.agents/`** -- Your skills and agent configurations
- **`.codex/`** -- Codex's own configuration files

### Project Instruction Boundaries

Your AGENTS.md file can include instructions that tell Codex not to touch certain files or folders:

```markdown
# AGENTS.md
- Never modify files in the /data directory
- Do not read or write to any .env file
- The /secrets folder is off-limits
```

While these are instructions (not hard technical barriers), Codex generally follows them reliably.

---

## Execution Policies (ExecPolicy)

For organizations that need precise control, Codex supports **ExecPolicy rules** written in a language called Starlark. These are hard rules (not just suggestions) that define exactly what Codex is allowed to do.

**Analogy:** If AGENTS.md is like a "please do not enter" sign, ExecPolicy is like a locked door with a key card reader. The sign can be ignored; the locked door cannot.

### What ExecPolicy Can Control

- Which commands Codex can and cannot run
- Which files Codex can and cannot access
- Which tools Codex is allowed to use
- Whether Codex can perform certain types of actions

### Example ExecPolicy Rule

```python
# Allow reading any file, but only allow writing to .txt files
def check_tool(tool_name, tool_args):
    if tool_name == "write_file":
        if not tool_args["path"].endswith(".txt"):
            return deny("Only .txt files can be written")
    return allow()
```

ExecPolicy rules are typically set up by IT administrators and placed in system-level configuration. Individual users usually do not need to create these.

---

## The Guardian Feature

The **Guardian** is an advanced safety feature where a second, separate AI reviews what the main Codex agent wants to do before it actually happens.

**How it works:**
1. Codex decides it wants to take an action (like writing to a file)
2. Before the action happens, a separate "Guardian" AI reviews it
3. The Guardian checks if the action is safe and appropriate
4. Only if the Guardian approves does the action proceed

**Analogy:** Think of it as a two-person approval system at a bank. One person prepares the transaction, but a second person has to verify and approve it before the money moves.

This feature is particularly useful in enterprise environments where automated Codex tasks run without a human watching every step.

---

## MCP Server Security

MCP servers extend what Codex can do, but each new server is a potential security consideration. Here is how to stay safe:

### Before Adding an MCP Server

Ask yourself:
1. **Who made it?** Is it from a known, trusted source?
2. **What does it need access to?** Does it require credentials or sensitive information?
3. **Is it actively maintained?** When was it last updated?
4. **Does it need network access?** If so, what does it connect to?

### Safe MCP Practices

- Only install MCP servers from sources you trust
- Review the permissions each server requests
- Use project-level configuration so MCP servers are only available where they are needed
- Remove MCP servers you are no longer using

---

## Security Hardening Checklist

Use this checklist to make sure your Codex setup is locked down:

- [ ] Sandbox mode is set to `workspace-write` or `read-only` for most tasks
- [ ] Approval policy is set to `untrusted` or `on-request`
- [ ] API key is stored as an environment variable, not in a plain text file
- [ ] AGENTS.md includes rules about which files are off-limits
- [ ] MCP servers are from trusted sources only
- [ ] Sensitive files (`.env`, credentials, private keys) are excluded from Codex's reach
- [ ] Version control (Git) is in place so you can undo unexpected changes
- [ ] You review all diffs before accepting changes
- [ ] Team members understand the security settings and why they matter

---

## Recommended Security Profiles

### For Personal Projects (Low Risk)

```toml
sandbox = "workspace-write"
approval_policy = "on-request"
```

Good balance of convenience and safety.

### For Work Projects (Medium Risk)

```toml
sandbox = "workspace-write"
approval_policy = "untrusted"
```

Every action gets your approval. Network is blocked.

### For Sensitive Work (High Risk)

```toml
sandbox = "read-only"
approval_policy = "untrusted"
```

Codex can only look, not touch. You approve everything.

### For Trusted Automation (Low Supervision)

```toml
sandbox = "workspace-write"
approval_policy = "never"
```

Only use this when you have thoroughly tested the task and trust Codex to handle it.
