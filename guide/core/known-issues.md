# Known Issues and Workarounds

Every tool has quirks, and Codex is no exception. This page lists the current known issues along with practical workarounds so you are never stuck.

---

## Windows Support Is Experimental

**The issue:** Codex was originally built for macOS and Linux. Windows support is available but considered experimental, which means you may encounter rough edges, unexpected behavior, or features that do not work as smoothly.

**What you might notice:**
- Some sandbox features may not work as expected
- Certain file path formats can cause issues
- Performance may differ from macOS or Linux

**The workaround:** Install and use **WSL2** (Windows Subsystem for Linux). This gives you a Linux environment inside Windows where Codex runs much more reliably.

How to set up WSL2:
1. Open PowerShell as Administrator
2. Type `wsl --install` and press Enter
3. Restart your computer when prompted
4. Once WSL2 is set up, run Codex from within your WSL2 terminal

If you prefer to run Codex natively on Windows without WSL2, it will still work for most tasks, but be aware that some features may behave differently.

---

## Hooks Are Experimental (and Disabled on Windows)

**The issue:** Hooks are scripts that run automatically when certain events happen in Codex (like when a session starts or before a tool is used). This feature is still experimental across all platforms, and on Windows it is temporarily disabled entirely.

**What this means:**
- If you set up hooks in `.codex/hooks.json`, they may not run reliably
- On Windows, hooks will not run at all for now
- The behavior of hooks may change in future updates

**The workaround:** If you need automated actions:
- On macOS or Linux, hooks work but should be tested carefully. Treat them as beta features.
- On Windows, perform any hook-related tasks manually for now, or use WSL2 where hooks function normally.
- Keep your hooks simple. Complex hooks are more likely to cause unexpected behavior during this experimental phase.

---

## Some MCP Servers May Have Compatibility Issues

**The issue:** MCP (Model Context Protocol) servers are created by many different developers, and not all of them work perfectly with every version of Codex. You might encounter servers that crash, give errors, or behave unexpectedly.

**What you might notice:**
- An MCP server that worked before stops responding after a Codex update
- Error messages when Codex tries to use an MCP server
- Unexpected results from MCP server tools

**The workaround:**
- Start with well-known, widely-used MCP servers that have active communities
- Check that the MCP server is compatible with your version of Codex
- If an MCP server is not working, try restarting Codex
- You can remove a problematic MCP server from your `config.toml` to prevent it from loading
- Check the MCP server's documentation or issue tracker for known problems

---

## Context Can Fill Up During Long Sessions

**The issue:** Every message, file, and result in your conversation takes up space in Codex's context window. During long or complex sessions, this space fills up, and Codex starts to lose track of earlier information. It may repeat itself, forget instructions you gave earlier, or give less accurate responses.

**What you might notice:**
- Codex seems to "forget" something you told it earlier
- Responses become less accurate or relevant
- Codex repeats work it already did
- The `/status` command shows you are in the orange or red zone

**The workaround:**
- Use `/compact` regularly to compress your conversation and free up space. Do this before you hit the red zone, ideally around 60-70% usage.
- Start a new session for each distinct task (the Fresh Context Pattern).
- Be selective about what files you ask Codex to read. Each file takes up space.
- If you are in the red zone and `/compact` is not enough, start a fresh session.

---

## Large Binary Files Should Not Be Added to Context

**The issue:** Codex works with text. If you add large binary files (like images, videos, compiled programs, or zip archives) to the conversation, it wastes context space and Codex cannot meaningfully read or understand them anyway.

**What you might notice:**
- Context fills up very quickly after adding a binary file
- Codex cannot provide useful information about the file's contents
- Performance slows down

**The workaround:**
- Do not use `--add` with binary files (images, videos, executables, archives)
- If you need Codex to work with an image, describe it in words instead
- For data files, convert them to a text format (like CSV) first if possible
- If you accidentally added a large file, use `/compact` or start a new session

---

## Network Access Is Blocked in Workspace-Write Mode

**The issue:** This is actually a safety feature, not a bug, but it surprises some people. When Codex is in `workspace-write` sandbox mode (the default), it cannot access the internet. This means it cannot download files, check websites, or call external services.

**What you might notice:**
- Commands that need internet access fail
- Codex cannot install packages from the internet
- Web-related MCP servers do not work

**The workaround:**
- If your task requires internet access, switch to `danger-full-access` sandbox mode: `codex --sandbox danger-full-access`
- Be aware that danger-full-access mode removes many safety restrictions, so only use it when you trust the task
- For tasks that only occasionally need the internet, you can do the internet-dependent steps manually and let Codex handle the rest in workspace-write mode

---

## Tips for Staying Ahead of Issues

1. **Keep Codex updated.** Many issues are fixed in new versions. Check for updates regularly.
2. **Use WSL2 on Windows.** This avoids most Windows-specific issues.
3. **Save your work.** Use version control (like Git) so you can undo any changes Codex makes that you did not expect.
4. **Start simple.** When trying a new feature (like hooks or MCP servers), test with a small example first before using it on important work.
5. **Check the community.** If you run into a problem, chances are someone else has too. Online forums and issue trackers are great resources.
