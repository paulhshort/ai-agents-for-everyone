# Data Privacy

This page explains what information Codex sends to OpenAI, how it is handled, and what you can do to protect your privacy. No fear-mongering here, just clear facts so you can make informed decisions.

---

## What Gets Sent to OpenAI

When you use Codex, certain information is sent to OpenAI's servers so the AI model can process your request. Here is exactly what gets transmitted:

### Always Sent

| Data | Why It Is Sent |
|---|---|
| **Your messages** | The text you type is sent so the AI can understand and respond to your request |
| **Codex's responses** | Previous responses in the conversation are sent back so the AI remembers the context |
| **System instructions** | Information about your Codex version, configuration, and session setup |

### Sent When Relevant

| Data | When It Is Sent |
|---|---|
| **File contents** | Only when Codex reads a file (because you asked it to, or because it decided it needed to). Only the portions read are sent, not your entire hard drive |
| **Command output** | When Codex runs a command, the results are sent back so the AI can interpret them |
| **AGENTS.md instructions** | Your project instructions file is sent at the start of a session so Codex knows the rules |
| **Tool results** | Output from any tools Codex uses (search results, file listings, etc.) |

### Not Sent

| Data | Why Not |
|---|---|
| **Files you did not ask Codex to look at** | Codex only reads files when there is a reason to |
| **Your passwords or system credentials** | Codex does not access your keychain or password manager unless you explicitly configure it to |
| **Other applications on your computer** | Codex does not scan your system |
| **Files outside the sandbox scope** | If you are in workspace-write mode, Codex cannot even see files outside your project folder |

---

## How Long Does OpenAI Keep Your Data?

OpenAI has data retention policies that depend on how you are using the service:

| Usage Type | Retention |
|---|---|
| **ChatGPT Plus/Pro (consumer)** | Conversations are stored to improve your experience. You can delete them from your account settings |
| **API usage** | Data is retained for a limited period (typically 30 days) for abuse monitoring, then deleted. Not used for training unless you opt in |
| **Enterprise / Team plans** | Data is not used for training. Retention is governed by your organization's agreement with OpenAI |

**Key point:** If privacy is a top concern, enterprise plans offer the strongest protections.

---

## What About AI Training?

One common concern is whether your data is used to train future AI models.

- **ChatGPT Plus/Pro:** By default, your conversations may be used to improve models. You can opt out in your account settings.
- **API usage:** Data is not used for training by default.
- **Enterprise plans:** Data is never used for training.

To opt out of training on the consumer plan:
1. Go to your OpenAI account settings (at chat.openai.com)
2. Navigate to Data Controls
3. Turn off the setting for improving models

---

## Practical Privacy Tips

These are simple steps anyone can take to protect their privacy while using Codex:

### 1. Never Paste Secrets Into Codex

Do not type or paste passwords, API keys, credit card numbers, or other sensitive information directly into a Codex conversation. Once something is in the conversation, it is sent to OpenAI's servers.

**Instead:** Use environment variables on your computer. Codex can reference environment variables without sending their actual values to OpenAI.

### 2. Be Mindful of What Files You Add

When you use `--add` to include a file in the conversation, or when Codex reads a file during a task, the contents of that file are sent to OpenAI. Before adding a file, ask yourself: "Would I be comfortable if someone else saw this?"

**Watch out for:**
- `.env` files (often contain passwords and API keys)
- Configuration files with embedded credentials
- Files containing personal data (customer lists, health records, financial data)
- Proprietary business documents

### 3. Use the Right Sandbox Mode

In `read-only` or `workspace-write` mode, Codex is restricted in what it can access. This naturally limits what data could be sent to OpenAI because Codex simply cannot read files outside its allowed scope.

### 4. Review Before You Approve

When Codex shows you a diff (a summary of changes it wants to make), read through it. This is your chance to catch anything unexpected, including any case where Codex might be writing sensitive data into a file that gets shared or committed.

### 5. Start Fresh for Sensitive Work

If you have been working on something sensitive and want to move to a different task, start a new session. This ensures no residual information from the sensitive task carries over.

### 6. Use Project-Level Ignore Rules

You can configure Codex to ignore certain files or folders entirely, preventing it from reading them even accidentally. This is especially useful for folders that contain sensitive data.

---

## Enterprise Privacy Options

If you are using Codex in a business context where data privacy is critical, here are the enterprise-grade options available:

| Feature | What It Does |
|---|---|
| **Enterprise plan** | Guarantees your data is not used for model training |
| **Data retention controls** | Customize how long data is retained |
| **Custom CA certificates** | Route Codex traffic through your corporate proxy for monitoring |
| **System-level configuration** | IT administrators can enforce privacy settings across the entire organization |
| **Credential management** | Use your operating system's secure keyring instead of plain text files |
| **OpenTelemetry integration** | Monitor exactly what Codex is doing across your organization |

---

## A Balanced Perspective

Codex is designed to be a helpful tool, and OpenAI has privacy protections in place. For most people using Codex for everyday tasks, the default settings are reasonable. The key is to be thoughtful about what information you share, just as you would with any cloud-based service.

If you would not paste something into an email or a Google Doc, do not paste it into Codex either. That simple rule covers most situations.

For organizations handling truly sensitive data (healthcare, finance, legal, government), the enterprise plans provide the level of control and assurance those environments require.
