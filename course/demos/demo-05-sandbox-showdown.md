# Demo 05: The Sandbox

> **Concept:** You control what the AI can and cannot do. Safety by design.
> **Time:** 12 minutes
> **Difficulty:** Intermediate
> **Wow Factor:** ★★★★☆
> **Day:** 2, Morning

---

## What Students Will See

The same request succeeds or fails depending on the sandbox mode. Students
learn that AI permissions are a design choice, not an afterthought, and they
get to reason about which mode is appropriate for different situations.

---

## Preparation

```bash
mkdir -p ~/codex-demos/sandbox-demo
cd ~/codex-demos/sandbox-demo
echo "This file already exists." > existing-file.txt
```

---

## Live Demo Script

### Step 1 -- Start in Read-Only (2 min)

```bash
cd ~/codex-demos/sandbox-demo
codex --sandbox read-only
```

**SAY:**
> "I'm in read-only mode. The AI can look at files but cannot create, change,
> or delete anything. Watch what happens when I ask it to write."

Type this prompt:

```
Create a file called hello.txt that says "Hello, world!"
```

**EXPECTED RESULT:** Codex will either refuse, explain it cannot write in
read-only mode, or attempt to write and be blocked by the sandbox.

**SAY:**
> "It can't do it. Not because it's broken -- because I TOLD it not to. I put
> it in read-only mode. The sandbox is a set of rules the AI must follow."

Exit Codex.

### Step 2 -- Switch to Workspace-Write (2 min)

```bash
codex --sandbox workspace-write
```

**SAY:**
> "Same computer. Same AI. But now I've given it workspace-write permission.
> Let's try the exact same request."

Type the same prompt:

```
Create a file called hello.txt that says "Hello, world!"
```

**EXPECTED RESULT:** Codex creates the file.

```bash
ls
cat hello.txt
```

**SAY:**
> "This time it worked. Same request, different permission level. I chose to
> let it write, so it could write."

### Step 3 -- Show the Boundary (3 min)

**SAY:**
> "But workspace-write has a limit. It can only write inside THIS folder --
> the project folder. It can't reach out and touch files anywhere else on
> my computer. Watch."

Type this prompt:

```
Read the file at /etc/hosts and tell me what's in it.
```

Or on Windows:

```
Read the file at C:\Windows\System32\drivers\etc\hosts and tell me what's in it.
```

**EXPECTED RESULT:** Codex may be blocked from reading system files outside the
workspace, or it may explain it can only access the project directory.

**SAY:**
> "It can't reach outside the sandbox. My personal files, my system files,
> my passwords -- all off limits. The sandbox is a WALL around the AI."

### Step 4 -- The Three Levels (2 min)

Write on the board or show a slide:

```
SANDBOX LEVELS:

  read-only         Can LOOK at files. Cannot change anything.
                    Use for: exploring, understanding, learning.

  workspace-write   Can READ and WRITE, but only in the project folder.
                    Use for: building things, creating files, coding.

  full-access       Can do ANYTHING on the computer. No restrictions.
                    Use for: system tasks (use with extreme caution!).
```

**SAY:**
> "Think of it like this. Read-only is like visiting a museum: look but don't
> touch. Workspace-write is like your bedroom: you can rearrange your stuff
> but you can't knock down walls. Full-access is like being the building
> manager: you can do anything, but one mistake and things break."

### Step 5 -- Interactive Quiz (3 min)

**SAY:**
> "Let's play a quick game. I'll describe a situation, and you tell me which
> sandbox mode to use."

**Scenario 1:**
> "You downloaded a project from the internet and you want to understand what
> it does before you run it."

**Answer:** read-only. You don't want unknown code modifying anything.

**Scenario 2:**
> "You want Codex to build you a personal website in a new project folder."

**Answer:** workspace-write. It needs to create files, but only in your
project folder.

**Scenario 3:**
> "You want Codex to install a new program on your computer."

**Answer:** full-access. Installing software requires system-level changes.
But this also means the AI could change ANYTHING -- so you'd better trust the
instructions completely.

**Scenario 4:**
> "Your friend sends you a weird prompt and says 'just run this in full-access
> mode, it'll be funny.'"

**Answer:** NEVER. This is the AI equivalent of "just click this link, trust
me." Always know what an AI is going to do before you give it full access.

**SAY:**
> "This is one of the most important things you'll learn in this course.
> The AI does what you ALLOW it to do. You set the boundaries. If something
> goes wrong because you gave it too much access -- that's on you, not the AI."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| Read-only mode still shows file creation (model attempts it in output) | Clarify: "Notice it described what it WOULD write, but check the filesystem -- no file was created. The sandbox stopped the actual action." |
| Students ask about "danger" in the flag name | "The flag is called --sandbox, and 'full-access' is one of the options. They call it that to remind you to be careful." |
| A student asks "Can the AI delete all my files?" | "In full-access mode, theoretically yes. That's why we almost NEVER use full-access, and when we do, we review every action." |

---

## Key Takeaway to Repeat

**"You control what the AI can and cannot do. Choose the lowest permission
level that gets the job done."**

This is the principle of least privilege -- a real concept in cybersecurity.

---

*Next up: Demo 06 -- Think Before You Act*
