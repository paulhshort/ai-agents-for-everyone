# Sandbox Modes: A Deep Dive

The sandbox is Codex's safety system. It controls what Codex can and cannot do on your computer. Understanding the sandbox modes helps you choose the right level of protection for each task.

---

## What Is a Sandbox?

Think of a sandbox like a playpen for a toddler. Inside the playpen, the child can play freely and safely. Outside the playpen is the rest of the house, where there are things that could be dangerous or that you do not want touched.

Codex's sandbox works the same way. It creates a boundary around what Codex can access. Depending on which mode you choose, that boundary can be very tight (Codex can only look at things) or very loose (Codex can do almost anything).

---

## The Three Sandbox Modes

### 1. Read-Only Mode (Safest)

```toml
sandbox = "read-only"
```

**What Codex can do:**
- Read and view your files
- Search through your project
- Analyze and explain what it finds

**What Codex cannot do:**
- Create, edit, or delete any files
- Run commands that change things
- Access the internet
- Install software

**Best for:**
- Exploring a new project or folder
- Getting explanations about files
- Learning about what is in your project
- Reviewing things without any risk

**Analogy:** Like visiting a museum. You can look at everything, read the descriptions, take it all in, but you cannot touch or move anything.

---

### 2. Workspace-Write Mode (Balanced -- the Default)

```toml
sandbox = "workspace-write"
```

**What Codex can do:**
- Everything in read-only mode, plus:
- Create new files in your project folder
- Edit existing files in your project folder
- Run commands that only affect your project folder

**What Codex cannot do:**
- Change files outside your project folder
- Access the internet (network is disabled by default)
- Install system-wide software
- Modify system settings

**Best for:**
- Most everyday tasks
- Editing documents and files
- Reorganizing files in your project
- Tasks where you want changes but within a safe boundary

**Analogy:** Like having a contractor who can remodel one specific room in your house, but cannot touch any other room, and cannot order supplies online.

---

### 3. Danger-Full-Access Mode (Most Powerful, Least Protected)

```toml
sandbox = "danger-full-access"
```

**What Codex can do:**
- Everything in workspace-write mode, plus:
- Access the internet
- Read and write files anywhere on your computer
- Install software
- Run any command

**What Codex cannot do:**
- Very little is restricted in this mode

**Best for:**
- Tasks that require downloading files from the internet
- Installing packages or dependencies
- Running tests that need network access
- Tasks that need to access files in multiple locations

**Analogy:** Like giving your contractor the master key to the entire building plus a company credit card. Powerful, but you need to trust them.

**Warning:** Only use danger-full-access mode when the task genuinely requires it, and consider pairing it with a strict approval policy (`approval_policy = "untrusted"`) so Codex asks before every action.

---

## Side-by-Side Comparison

| Capability | Read-Only | Workspace-Write | Danger-Full-Access |
|---|---|---|---|
| Read files in your project | Yes | Yes | Yes |
| Read files outside your project | Limited | Limited | Yes |
| Write files in your project | No | Yes | Yes |
| Write files outside your project | No | No | Yes |
| Run commands | View-only | Project-scoped | Any |
| Internet access | No | No | Yes |
| Install software | No | No | Yes |
| Risk level | Very low | Low | Higher |

---

## How the Sandbox Works on Different Operating Systems

Each operating system has its own technology for creating the sandbox. You do not need to configure this yourself; Codex handles it automatically. But knowing what is happening behind the scenes can be helpful.

### macOS: Seatbelt

On Mac computers, Codex uses Apple's built-in **Seatbelt** technology (also known as the App Sandbox). This is the same system that Apple uses to restrict what apps can do on your phone and computer.

**What it does:**
- Creates a profile that defines exactly what Codex can access
- Prevents access to files and resources outside the allowed scope
- Enforced at the operating system level (Codex cannot bypass it)

### Linux: Bubblewrap, seccomp, and Landlock

On Linux, Codex uses a combination of security tools:

- **Bubblewrap:** Creates an isolated filesystem view so Codex can only see the files it is allowed to see. Think of it as putting blinders on, so Codex does not even know other files exist.
- **seccomp:** Restricts which system-level operations Codex can perform. It is like a filter that blocks dangerous actions at the deepest level of the operating system.
- **Landlock:** An additional layer that restricts file and network access. Think of it as a second lock on the door.

Together, these three tools create a very strong security boundary.

### Windows: WSL or Native Sandbox

On Windows, Codex uses one of two approaches:

- **WSL (Windows Subsystem for Linux):** If you have WSL2 installed, Codex runs inside the Linux environment, which provides the same Bubblewrap/seccomp protections as native Linux. This is the recommended approach on Windows.
- **Native sandbox:** If WSL2 is not available, Codex uses Windows' own sandboxing features. This works but is less mature than the Linux-based approach.

**Recommendation for Windows users:** Install WSL2 for the best and most reliable sandbox experience.

---

## Protected Paths: What Is Always Safe

Regardless of which sandbox mode you choose, Codex always protects certain critical files and folders:

| Protected Path | Why It Is Protected |
|---|---|
| **`.git/`** | This is your project's version history. Protecting it means Codex cannot rewrite or erase your history of changes. |
| **`.agents/`** | This folder contains your skills and agent configurations. Protecting it prevents accidental modification of your Codex setup. |
| **`.codex/`** | This is Codex's own configuration folder. Protecting it prevents Codex from changing its own rules. |

Think of these as the "safety deposit boxes" that no one can open, not even Codex with full access.

---

## Network Access: A Closer Look

Network access (the ability to connect to the internet) deserves special attention because it is one of the biggest security considerations.

**Why network is disabled by default (in workspace-write mode):**
- Prevents Codex from accidentally downloading harmful software
- Prevents data from being sent to unknown servers
- Ensures Codex works only with what is already on your computer
- Reduces the risk of supply-chain attacks (where a compromised internet resource causes problems)

**When you need network access:**
- Installing software packages
- Downloading files or resources
- Connecting to external APIs or services
- Running tests that call web services

**How to enable it:**
Switch to `danger-full-access` sandbox mode. There is no way to enable network access in workspace-write mode; this is intentional.

---

## Choosing the Right Mode: A Decision Guide

Use this simple guide to pick the right sandbox mode for your task:

```
Are you just looking at files or asking questions?
  --> Use read-only

Are you making changes to files in your project?
  Does the task need internet access?
    No  --> Use workspace-write (the default)
    Yes --> Use danger-full-access (with approval_policy = "untrusted")

Are you doing something that affects your whole system?
  (installing software, changing system settings)
  --> Use danger-full-access (with approval_policy = "untrusted")
```

**General rule:** Start with the most restrictive mode that lets you accomplish your task. You can always switch to a less restrictive mode if needed. Going the other direction (starting wide open and trying to lock down later) is much harder.

---

## Changing Sandbox Modes

### For a Single Session

Add the flag when starting Codex:

```
codex --sandbox read-only
codex --sandbox workspace-write
codex --sandbox danger-full-access
```

### As a Default (Personal Setting)

Edit your personal config file at `~/.codex/config.toml`:

```toml
sandbox = "workspace-write"
```

### For a Specific Project

Create or edit `.codex/config.toml` in your project folder:

```toml
sandbox = "read-only"
```

Project settings override personal settings, so you can have a safe default but allow more access for specific projects that need it.
