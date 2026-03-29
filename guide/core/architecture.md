# How Codex Works

Understanding what happens behind the scenes helps you use Codex more effectively. You do not need to be technical to follow along. We will use everyday analogies throughout.

---

## The Big Picture

Codex is not a simple chatbot. It is an **AI agent**, which means it can actually do things on your computer, not just talk about them. When you ask Codex a question or give it a task, it goes through a structured thinking process, takes actions, checks the results, and keeps going until the job is done.

Think of Codex like a skilled assistant sitting at your computer. You tell them what you need, they look through your files, make changes, test things out, and report back. The "assistant" happens to be an AI, but the workflow is similar.

Codex is written in the Rust programming language (known for being fast and reliable) and communicates with OpenAI's servers using something called the Responses API.

---

## The Agentic Loop: How Codex Thinks and Acts

At the heart of Codex is a repeating cycle called the **agentic loop**. Every time you ask Codex to do something, it follows this pattern:

```
    +-----------------------+
    |   You give Codex a    |
    |   request or question |
    +-----------+-----------+
                |
                v
    +-----------------------+
    |   Codex gathers       |
    |   context: your       |
    |   message, files,     |
    |   project instructions|
    +-----------+-----------+
                |
                v
    +-----------------------+
    |   The AI model thinks |
    |   about what to do    |
    |   (GPT-5.4 or other)  |
    +-----------+-----------+
                |
                v
    +-----------------------+
    |   Codex decides: does |
    |   it need to take an  |
    |   action?             |
    +-----+----------+------+
          |          |
        Yes          No
          |          |
          v          v
    +-----------+  +-----------+
    | Use a tool|  | Give you  |
    | (read a   |  | the final |
    | file, run |  | answer    |
    | a command,|  +-----------+
    | etc.)     |
    +-----+-----+
          |
          v
    +-----------------------+
    |   Look at the result  |
    |   of the action       |
    +-----------+-----------+
                |
                v
      (Loop back to "think
       about what to do next")
```

**In plain language:** Codex reads your request, thinks about it, takes an action if needed, looks at the result, thinks again, takes another action if needed, and keeps going until it has a complete answer or has finished the task. Then it shows you the result.

**Real-world analogy:** Imagine you ask a librarian to find all books about gardening published after 2020. The librarian does not just guess. They go to the catalog, search for gardening books, check the publication dates, pull the right ones off the shelf, and bring them to you. If the first shelf does not have what they need, they check another one. That is the agentic loop.

---

## The Tool System: How Codex Takes Action

Codex has a set of **tools** it can use, much like a handyman has a toolbox. Each tool lets Codex do something specific:

| Tool | What It Does | Analogy |
|---|---|---|
| **File Reader** | Opens and reads the contents of files | Opening a document to read it |
| **File Writer** | Creates new files or changes existing ones | Editing a document and saving it |
| **Search** | Looks through your files for specific text or patterns | Using the "Find" feature in a word processor |
| **Terminal / Shell** | Runs commands on your computer (like installing software or running scripts) | Typing instructions into your computer directly |
| **Web Browser** | Fetches information from the internet (when allowed) | Looking something up online |
| **MCP Tools** | Connects to external services (databases, APIs, etc.) | Calling a specialist for help |

When Codex decides it needs to use a tool, it runs the tool inside a **sandbox** (a protective bubble) so it cannot accidentally damage your system. More on that below.

---

## How the Sandbox Protects You

The sandbox is one of the most important parts of Codex's design. It is a set of restrictions that control what Codex can and cannot do on your computer.

**Why it matters:** When you let an AI assistant make changes to your files or run commands, you want to make sure it cannot accidentally (or intentionally) do something harmful, like deleting important files or sending your private data somewhere.

**How it works:** Before Codex runs any tool, the action happens inside a restricted environment. Depending on your sandbox mode:

- **Read-only mode:** Codex can look at your files but cannot change anything. Like letting someone browse a library but not check out or move any books.
- **Workspace-write mode:** Codex can change files only within your project folder. Everything else on your computer is off-limits. The internet is also blocked by default. Like giving someone access to one specific room in your house.
- **Full-access mode (danger):** Codex can do almost anything, including accessing the internet and modifying files anywhere. Like giving someone the master key. Use this only when you trust the task completely.

Each operating system implements the sandbox using its own security technology:

| Operating System | Sandbox Technology | What It Means |
|---|---|---|
| macOS | Seatbelt | Apple's built-in app restriction system |
| Linux | Bubblewrap + seccomp | Linux security tools that create isolated environments |
| Windows | WSL or native sandbox | Uses Windows Subsystem for Linux or Windows security features |

Certain critical files are always protected regardless of sandbox mode, including your `.git` folder (version history), `.agents` folder (skills), and `.codex` folder (configuration).

---

## Context: Codex's Working Memory

Codex has a **context window**, which is like its short-term memory. Everything in the conversation takes up space in this window:

- Your messages and questions
- Codex's responses
- Contents of files Codex has read
- Results of commands Codex has run
- Your project instructions (AGENTS.md)

When the context window fills up, Codex starts to lose track of earlier parts of the conversation. This is why the `/compact` command is so important. It compresses the conversation, keeping the key information but freeing up space. Think of it like summarizing a long meeting into bullet points so you can keep going without losing track.

**Tip:** Start a fresh session for each new task so Codex has maximum space to work with.

---

## Platform Differences: CLI vs App vs Web vs Cloud

Codex comes in several forms. Each has the same AI brain but different capabilities:

| Feature | CLI (Terminal) | Desktop App | Web (ChatGPT) | Cloud |
|---|---|---|---|---|
| Access your files directly | Yes | Yes | No | Yes (on OpenAI servers) |
| Run commands on your computer | Yes | Yes | No | Yes (in cloud container) |
| Sandbox protection | Yes | Yes | Built-in (limited access) | Yes (containerized) |
| MCP server support | Yes | Yes | Limited | Yes |
| Works offline | No (needs OpenAI servers) | No | No | No |
| Keep running after you close your computer | No | No | No | Yes |
| Best for | Power users, automation | Daily use with a visual interface | Quick questions, no setup needed | Long tasks, background work |

**CLI** is the terminal-based version. You type commands and get text responses. It is the most powerful and flexible version.

**Desktop App** is a more visual experience with the same capabilities as the CLI, wrapped in a nicer interface.

**Web** is Codex within ChatGPT. It does not have direct access to your computer's files but is great for general questions and lightweight tasks.

**Cloud** runs on OpenAI's servers. You send a task with `codex cloud "your task"`, close your laptop, and come back later to get the results with `codex apply`. It is like dropping off your dry cleaning and picking it up the next day.

---

## Sessions: Picking Up Where You Left Off

Every conversation with Codex is saved as a **session**. Sessions are stored on your computer, so your conversation history stays private. You can:

- **Resume a session:** Type `codex resume` to continue where you left off.
- **Start fresh:** Just type `codex` to begin a new conversation.

Think of sessions like saving your progress in a video game. You can come back later and pick up right where you stopped.

---

## How Codex Communicates with OpenAI

When you use Codex, here is what happens behind the scenes:

1. You type a request on your computer.
2. Codex packages up your request along with relevant context (conversation history, file contents, instructions).
3. This package is sent securely to OpenAI's servers.
4. The AI model processes your request and sends back a response.
5. If the response includes an action (like "read this file"), Codex performs that action locally on your computer, inside the sandbox.
6. The result of that action gets sent back to OpenAI for the next round of thinking.
7. This continues until the task is complete.

Your files themselves are not uploaded to OpenAI's servers permanently. Only the portions that Codex reads during the conversation are sent as part of the context. See the [Data Privacy](../security/data-privacy.md) section for more details.
