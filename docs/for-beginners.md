# Codex for Complete Beginners

> Your questions answered in plain language. No coding experience required.

---

## The Basics

### What is AI?

AI (Artificial Intelligence) is software that can do things that normally require human thinking — like understanding language, recognizing patterns, writing text, and solving problems.

When you talk to ChatGPT and it answers your questions, that is AI. When your email suggests replies, that is AI. When your phone unlocks with your face, that is AI.

AI is not magic, and it is not perfect. It is a very sophisticated tool that is very good at certain tasks and still learning at others.

### What is an AI agent?

This is the big idea that makes Codex different from a regular chatbot.

A **chatbot** (like basic ChatGPT) answers questions. You ask something, it gives you an answer. That is it.

An **AI agent** (like Codex) can actually **do things**. You tell it what you want, and it goes and does it — editing files, running programs, building things, fixing problems. Then it shows you what it did, and you decide if it looks right.

Think of the difference like this:
- A **chatbot** is like calling a friend for advice: "How do I fix a leaky faucet?" and they tell you the steps.
- An **AI agent** is like hiring a plumber: "Fix the leaky faucet" and they go do it, then show you the result.

Codex is the plumber. You describe the job, it does the work, you inspect the result.

### What is OpenAI Codex?

Codex is an AI agent made by OpenAI (the same company that makes ChatGPT). It is specifically designed to help with software development — writing code, fixing bugs, running tests, creating documentation, and more.

It comes in three forms:
- **Codex CLI** — A tool you use in the terminal (the text-based interface that developers work in)
- **Codex App** — A desktop application you can download
- **Codex Web** — A version you can use in your web browser

All three do the same thing — they just offer different ways to access it.

### Do I need to know how to code to use Codex?

You do not need to be a professional developer, but some basic understanding of coding concepts helps. Here is why:

- **Codex writes the code for you** — You describe what you want in plain English
- **But you need to review what it writes** — Just like you would check a contractor's work
- **Understanding helps** — If you can read basic code, you will catch mistakes faster

Think of it like hiring a contractor to renovate your kitchen. You do not need to know plumbing or electrical work, but understanding what "moving a load-bearing wall" means helps you make better decisions.

**Good news**: Codex is actually a great way to *learn* coding. You can ask it to explain everything it does, and it will teach you as it works.

### Is it safe?

Yes, with the right settings. Codex has safety features built in:

- **Sandbox modes** — You can limit what Codex is allowed to do:
  - *Read-only*: It can look at your files but cannot change anything (safest)
  - *Workspace-write*: It can change files in your project folder but nothing outside it (recommended for everyday use)
  - *Full access*: It can change anything on your computer (only for experts who know what they are doing)

- **Approval modes** — You can make Codex ask permission before doing anything risky

- **Review step** — You always see exactly what Codex changed before you accept it

The most important safety rule: **always review changes before accepting them**. This is Rule number 1 of the 5 Golden Rules.

### How much does it cost?

Codex is included with your ChatGPT subscription. If you already pay for ChatGPT Plus, Pro, Business, Team, Edu, or Enterprise, you already have access to Codex.

There are no per-use charges or surprise bills. You pay your subscription and use Codex as much as you want.

### Is it the same as ChatGPT?

Not exactly. They are related but different:

| | ChatGPT | Codex |
|---|---|---|
| **What it does** | Answers questions, writes text | Writes code, edits files, runs commands |
| **How it works** | You chat back and forth | You describe a task, it does the work |
| **Where it runs** | In your browser | In your terminal, on your desktop, or in your browser |
| **What it changes** | Nothing — it just gives you text | It can actually modify your files and run programs |
| **Made by** | OpenAI | OpenAI (same company) |
| **Powered by** | GPT-5.4 | GPT-5.4 (same AI brain) |

Think of ChatGPT as the AI's mouth (it talks) and Codex as the AI's hands (it does things).

---

## Getting Started

### What do I need to install Codex?

You need:
1. **A computer** — Mac, Windows, or Linux
2. **Node.js** — A free program that lets Codex run (download from nodejs.org)
3. **A ChatGPT subscription** — Plus, Pro, Business, Team, Edu, or Enterprise
4. **A terminal** — This is already on your computer (Terminal on Mac, Command Prompt or PowerShell on Windows)

### How do I install it?

**Option 1: Using npm (works on all platforms)**

Open your terminal and type:
```bash
npm install -g @openai/codex
```

**Option 2: Using Homebrew (Mac only)**
```bash
brew install --cask codex
```

That is it. Codex is installed.

### How do I start using it?

1. Open your terminal
2. Navigate to a project folder (any folder with code in it)
3. Type `codex` and press Enter
4. Codex starts and waits for you to tell it what to do

### What does a first conversation look like?

Here is a simple example:

```
You: What files are in this project and what does it do?

Codex: [reads the files and explains the project in plain language]

You: Add a comment at the top of the main file explaining what it does

Codex: [reads the file, adds a clear comment, shows you the change]

You: Looks good, accept it
```

That is it. You described what you wanted, Codex did it, you approved it.

---

## Common Questions

### "What if Codex makes a mistake?"

It will, sometimes. That is why you always review changes before accepting them. If something looks wrong, you can:
- Tell Codex to try again: "That is not right, try a different approach"
- Undo the change: Codex can reverse what it just did
- Start over: Type `/clear` to start a fresh conversation

Mistakes are normal and easy to fix. The important thing is to look at the changes before accepting them.

### "Can Codex access my private files?"

Codex only accesses files in the folder where you started it (and subfolders). It does not go browsing through your computer. With the "workspace-write" sandbox mode, it can only change files in your project folder.

Your files are sent to OpenAI's servers for processing (the AI runs in the cloud, not on your computer), but they are not stored permanently or used to train the AI (on Enterprise plans — check your specific subscription terms).

### "Will Codex delete my files?"

Not if you are careful:
- Use "workspace-write" sandbox mode (the recommended default)
- Review changes before accepting them
- If you are worried, start with "read-only" mode — Codex can look but cannot touch
- Your version control system (like Git) provides another safety net

### "What if I do not understand what Codex did?"

Ask it to explain. For example:
- "Explain what you just changed and why"
- "Walk me through this code like I am a beginner"
- "What does this line do?"

Codex is patient and will explain things as many times as you need, in whatever level of detail you want.

### "Can I use Codex for non-coding tasks?"

Codex is designed for software development, but it can help with related tasks:
- Writing documentation and README files
- Creating configuration files
- Analyzing data in CSV or JSON files
- Setting up project structures
- Writing scripts to automate repetitive tasks

For general-purpose tasks (writing emails, brainstorming ideas, answering questions), ChatGPT is the better tool.

### "What languages and technologies does Codex support?"

Codex works with virtually every programming language and technology:
- Python, JavaScript, TypeScript, Java, C#, Go, Rust, Ruby, PHP, and many more
- Web frameworks (React, Vue, Angular, Next.js)
- Mobile development (React Native, Flutter, Swift, Kotlin)
- Backend frameworks (Express, Django, Rails, Spring)
- Databases (PostgreSQL, MySQL, MongoDB, SQLite)
- DevOps tools (Docker, Kubernetes, GitHub Actions)

If it exists in software development, Codex probably knows about it.

### "How is this different from GitHub Copilot?"

| | Codex | GitHub Copilot |
|---|---|---|
| **Scope** | Entire tasks (multi-file, multi-step) | Individual code suggestions |
| **Interaction** | Conversational — you describe what you want | Inline — it suggests as you type |
| **Autonomy** | Can independently read, plan, and execute | Suggests one line or block at a time |
| **Environment** | Terminal, desktop app, or web | Inside your code editor |

Codex takes a bigger, more independent role. Copilot is like having someone whispering suggestions as you type. Codex is like handing off the entire task.

---

## Glossary of Terms You Will See

| Term | What It Means |
|---|---|
| **Agent** | An AI that can take actions, not just answer questions |
| **CLI** | Command Line Interface — the text-based terminal where developers type commands |
| **Context** | The AI's working memory — everything it currently knows about your conversation and project |
| **Diff** | A display showing exactly what changed in a file (added lines and removed lines) |
| **Model** | The AI brain that powers Codex (GPT-5.4 is the current one) |
| **MCP** | Model Context Protocol — a way to give Codex extra abilities (like plugins) |
| **Prompt** | What you type to tell Codex what to do |
| **Sandbox** | A safety boundary that limits what Codex can do |
| **Session** | One conversation with Codex, from start to finish |
| **Token** | A small piece of text that the AI processes. Think of it as a unit of "thinking" |
| **AGENTS.md** | A file you create to tell Codex about your project |
| **Terminal** | The text-based interface where you type commands |

---

## The 5 Golden Rules (for Everyone)

These five simple rules will make your experience with Codex dramatically better:

1. **Always review changes before accepting** — Look at what Codex did before you say "yes." This catches mistakes early.

2. **Keep your context clean** — Think of context like a desk. If it gets cluttered, Codex gets confused. Use `/compact` to clean up or `/clear` to start fresh.

3. **Be specific about what you want** — "Fix the login bug" is okay. "Fix the login bug in auth.js — the form should redirect to /dashboard after successful login" is much better.

4. **Plan before big tasks** — For anything complex, use `/plan` to see Codex's approach before it starts changing things.

5. **Create AGENTS.md for every project** — This file tells Codex about your project. It is like giving a new employee an orientation packet.

---

## Next Steps

Ready to get started? Here are your options:

1. **Interactive onboarding**: Copy the [onboarding prompt](../tools/onboarding-prompt.md) into Codex for a personalized guided tour
2. **Check your setup**: Use the [audit prompt](../tools/audit-prompt.md) to verify your installation is good
3. **Print the cheat sheet**: Keep the [cheat sheet](../guide/cheatsheet.md) by your desk for quick reference
4. **Read the full guide**: The [Ultimate Guide](../guide/ultimate-guide.md) has everything in detail
5. **Join the community**: The [OpenAI Community Forum](https://community.openai.com) is full of helpful people

The most important thing: **just start using it**. You will learn more from 30 minutes of hands-on use than from hours of reading. And remember — you can always ask Codex itself for help.
