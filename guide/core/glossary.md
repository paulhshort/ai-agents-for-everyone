# Glossary

Every term you might run into while using Codex, explained in plain language.

---

## A

**Agent**
A digital assistant that does not just answer questions but actually takes actions on your behalf. Think of a chatbot as someone who gives you directions; an agent is someone who drives you there. Codex is an agent because it can read your files, make changes, run commands, and more.

**Agentic Loop**
The repeating cycle Codex follows internally: receive your request, think about it, take an action (like reading a file), look at the result, and decide what to do next. It keeps looping until the task is done. Imagine a chef who reads the recipe, chops an onion, checks the recipe again, heats the pan, checks again, and so on until the meal is ready.

**AGENTS.md**
A special instructions file you put in your project folder. It tells Codex things like "this project uses Python" or "never delete files in the /data folder." It is like leaving a note for a house-sitter explaining how everything works. You can generate a starter one by typing `/init`.

**API (Application Programming Interface)**
A way for two programs to talk to each other. When Codex sends your request to OpenAI's servers and gets a response back, it is using an API. You do not need to understand the technical details. Just know it is the behind-the-scenes communication channel.

**API Key**
A secret password that identifies you to OpenAI's servers. Codex needs one to work. If you are using Codex through your ChatGPT Plus or Pro subscription, this is handled automatically. Think of it like the key card that gets you into a hotel room.

**Approval Policy**
A setting that controls when Codex asks for your permission before taking actions. There are three levels:
- *Untrusted*: Codex asks before doing almost anything (safest).
- *On-request*: Codex asks only for actions it is not sure about (balanced).
- *Never*: Codex acts without asking (fastest, but you trust it completely).

---

## C

**CLI (Command-Line Interface)**
A text-based way to interact with your computer by typing commands instead of clicking buttons. Codex CLI is the version you use by typing `codex` into a terminal window. Think of it as texting your computer instead of tapping on icons.

**Cloud (Codex Cloud)**
A feature that lets Codex run tasks on OpenAI's servers instead of your own computer. Useful for long-running tasks because you can close your laptop and come back later. You start a cloud task with `codex cloud "your task"` and pull the results back with `codex apply`.

**Compact**
The `/compact` command that compresses your conversation history to free up space. Think of it like squeezing air out of a vacuum storage bag so you can fit more clothes in your suitcase. The important information stays, but it takes up less room.

**Config (Configuration)**
Settings that control how Codex behaves. These live in files called `config.toml`. Your personal settings go in `~/.codex/config.toml`, and project-specific settings go in `.codex/config.toml` inside your project folder. Think of it as your personal preferences versus workplace rules.

**Context Window**
The total amount of information Codex can hold in its "mind" at once during a conversation. Everything you say, every file it reads, and every response it gives takes up space in this window. When it fills up, Codex starts forgetting earlier parts of the conversation. The `/compact` command helps manage this.

---

## D

**Diff**
A side-by-side comparison showing what changed in a file. Lines that were removed are usually shown in red, and lines that were added are shown in green. Codex shows you diffs before applying changes so you can review them. Think of it like the "track changes" feature in a word processor.

---

## E

**Environment Variable**
A setting stored in your computer's system rather than in a file. For example, `CODEX_API_KEY` stores your API key as an environment variable. Think of it as information your computer knows but does not write down in a visible document.

**ExecPolicy**
A set of rules (written in a language called Starlark) that an administrator can create to control exactly what Codex is and is not allowed to do. It is like a detailed rulebook for a new employee that says things like "you may edit spreadsheets but you may not delete databases."

---

## G

**GPT (Generative Pre-trained Transformer)**
The AI technology that powers Codex. GPT models have been trained on vast amounts of text and code so they can understand and generate human-like responses. The number after GPT (like 5.4) indicates the version.

**Guardian**
A safety feature where a second AI reviews what the main Codex agent wants to do before it happens. Think of it as a supervisor double-checking a new employee's work before it goes out.

---

## H

**Hook**
A script that runs automatically when certain events happen in Codex (like when a session starts or before a tool is used). Think of it as setting up an automatic trigger: "every time the front door opens, turn on the hallway light." Hooks are currently an experimental feature.

---

## K

**Keyring**
A secure storage system built into your operating system for passwords and secrets. Codex can use your system's keyring to store credentials safely rather than putting them in plain text files.

---

## L

**LLM (Large Language Model)**
The general category of AI that includes GPT. These are very large AI systems trained on enormous amounts of text that can understand and generate human language. Codex uses LLMs to understand what you want and figure out how to do it.

---

## M

**MCP (Model Context Protocol)**
A standard way to connect Codex to outside tools and services, like databases, websites, or other software. Think of it as a universal adapter that lets Codex plug into different things. MCP servers are configured in your `config.toml` file under the `[mcp_servers]` section.

**MCP Server**
A small program that implements MCP to give Codex a specific new ability. For example, an MCP server might let Codex search the web, query a database, or interact with a project management tool.

**Model**
The specific AI brain Codex uses to think and respond. Different models have different strengths:
- *GPT-5.4*: The default, best all-around quality.
- *GPT-5.4-mini*: Faster and lighter, good for simple tasks.
- *GPT-5.3-codex*: Specially tuned for working with code.
- *GPT-5.3-codex-spark*: Near-instant coding responses (ChatGPT Pro only).

---

## O

**OAuth**
A standard way to log into services securely without sharing your actual password. When Codex connects to a third-party service using OAuth, you approve the connection through that service directly, and Codex gets a temporary pass instead of your real password.

**OpenTelemetry**
A system for collecting data about how software runs (performance, errors, usage). Enterprises use this to monitor how Codex is being used across their organization.

---

## P

**Profile**
A saved set of preferences. Codex uses configuration profiles so you can have different settings for different situations (for example, one profile for personal projects and another for work).

**Prompt**
What you type to tell Codex what you want. A good prompt is clear and specific. Think of it as giving instructions to a very capable but very literal assistant. The more precise you are, the better the results.

---

## S

**Sandbox**
A protective bubble that limits what Codex can do on your computer. Even if something goes wrong, the sandbox prevents damage from spreading. There are three modes:
- *Read-only*: Codex can look at files but not change anything.
- *Workspace-write*: Codex can change files only in your project folder.
- *Danger-full-access*: Codex can do anything, including installing software and accessing the internet.

Different operating systems implement the sandbox differently:
- macOS uses a technology called Seatbelt.
- Linux uses tools called Bubblewrap and seccomp.
- Windows uses WSL (Windows Subsystem for Linux) or a native sandbox.

**Session**
One continuous conversation with Codex, from start to finish. Sessions are saved locally so you can resume them later with `codex resume`. Think of it as a meeting. When the meeting ends, you have notes you can refer back to.

**Skill**
A structured package of instructions and tools that teaches Codex how to do a specific type of task. Skills live in the `.agents/skills/` folder and have a `SKILL.md` file. Think of it as a recipe card that Codex can follow for a particular job.

**Slash Command**
Commands you type during a Codex session that start with a forward slash, like `/compact`, `/help`, or `/clear`. They control Codex's behavior rather than being part of your conversation. Think of them as special instructions to the tool itself, not requests for the AI.

**Starlark**
A simple programming language used to write ExecPolicy rules. You do not need to learn it yourself; administrators use it to define what Codex can and cannot do in an organization.

---

## T

**Token**
The basic unit that AI models use to process text. One token is roughly four characters or about three-quarters of a word. The phrase "I love pizza" is about four tokens. Context windows are measured in tokens, so understanding this helps you know why conversations eventually run out of space.

**TOML**
The file format used for Codex configuration files (like `config.toml`). It is a simple text format that is easy for both humans and computers to read. You do not need to be a programmer to edit a TOML file. It looks like this:
```toml
model = "gpt-5.4"
sandbox = "workspace-write"
```

**Tool**
Any capability that Codex can use to get things done. Reading files, writing files, searching for text, running commands in the terminal, and browsing the web are all tools. When Codex decides it needs to read a file to answer your question, it is "using a tool."

**TUI (Text User Interface)**
The visual interface you see when you run Codex in your terminal. It has colors, panels, and formatting to make the text-based experience easier to use. Think of it as a nicer-looking version of plain text, but still in a terminal window rather than a graphical app.

---

## W

**WSL (Windows Subsystem for Linux)**
A feature built into Windows that lets you run Linux software on a Windows computer. Codex uses WSL on Windows to create its sandbox environment. If you are on Windows, having WSL2 installed gives you the best Codex experience.
