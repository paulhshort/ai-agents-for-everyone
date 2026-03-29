# /security-check -- Check Your Setup for Safety Issues

> **What is this?** This is a custom command that checks your Codex setup
> for potential security problems. Think of it like a safety inspection
> for your AI assistant's configuration.
>
> **How to set it up:** Save this file as `.codex/commands/security-check.md`
> in your project folder. Then type `/security-check` in Codex to run it.
>
> **When to use it:** Run this whenever you set up a new project, add
> a new MCP server, or just want peace of mind that your setup is safe.

---

Perform a safety audit of the current Codex setup. Check everything below
and report your findings.

## What to Check

### 1. Sandbox Mode
- What sandbox mode is currently active? (read-only, workspace-write, or danger-full-access)
- Is it appropriate for what the user is doing?
- If it is set to "danger-full-access," flag this as a warning.

### 2. Approval Settings
- What is the current approval mode? (untrusted, on-request, never, full-auto)
- If set to "never" or "full-auto," flag this as a warning -- the agent
  can make changes without asking.

### 3. Sensitive Files
- Are there any files that contain secrets? Look for:
  - .env files with real values (not .env.example)
  - Files with "password," "secret," "token," or "key" in their contents
  - Private key files (.pem, .key)
  - Credential files (credentials.json, service-account.json)
- Are these files listed in .gitignore?

### 4. MCP Servers
- List all installed MCP servers.
- For each one, note what permissions it has.
- Flag any that you do not recognize or that have very broad permissions.

### 5. AGENTS.md Safety
- Check the AGENTS.md file for instructions that could be risky:
  - Does it tell the agent to delete files?
  - Does it tell the agent to run commands without approval?
  - Does it give the agent access to sensitive systems?

## How to Report

Use this format for each check:

```
## Security Check Results

### Sandbox Mode
[PASS/WARN/FAIL] -- [Details and recommendation]

### Approval Settings
[PASS/WARN/FAIL] -- [Details and recommendation]

### Sensitive Files
[PASS/WARN/FAIL] -- [Details and recommendation]

### MCP Servers
[PASS/WARN/FAIL] -- [Details and recommendation]

### AGENTS.md Safety
[PASS/WARN/FAIL] -- [Details and recommendation]

### Overall Rating
[Safe / Needs Attention / Unsafe]

### Recommended Actions
1. [Most important thing to fix]
2. [Next most important]
```
