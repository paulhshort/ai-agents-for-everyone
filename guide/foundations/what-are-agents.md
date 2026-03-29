# What Are Agents?

## The Moment Everything Changes

Everything you've used AI for so far is like **texting a really smart friend.**

You ask a question. They text back an answer. That's it.

```
You:     "What's the capital of France?"
AI:      "Paris."
You:     "Thanks."
         (conversation over)
```

You ask. It answers. You ask again. It answers again.
The AI never *does* anything. It just talks.

**An agent is completely different.**

---

## From Answering to Doing

An agent is like hiring an assistant who can actually **use your computer.**

Instead of just answering questions, an agent can:

- Open files and read them
- Write and edit code
- Run programs and check the results
- Search the web for information
- Create new files and organize folders
- Connect to other apps and services
- Fix its own mistakes and try again

Here's the difference:

```
CHATBOT (what you're used to):
  You:   "How do I organize my project files?"
  AI:    "Here's a suggestion: create folders called
          'docs', 'src', and 'tests', then move..."
  You:   (has to go do it manually)


AGENT (the new thing):
  You:   "Organize my project files."
  Agent: "On it. Let me look at what you have..."
         (reads your file system)
         "I see 47 files in the root directory.
          I'll create folders and sort them."
         (creates folders)
         (moves files)
         (checks the result)
         "Done. I created 4 folders and organized
          all 47 files. Here's what I did..."
```

See the difference? The chatbot *tells you what to do.*
The agent **actually does it.**

---

## The Lightbulb Moment

Let this sink in for a second:

> **A chatbot is an encyclopedia you can talk to.**
> **An agent is a coworker who gets things done.**

This is the biggest shift in how we use AI.
It's the difference between *reading a recipe* and
*having a chef cook the meal for you.*

---

## How Does an Agent Actually Work?

### The Agentic Loop

An agent doesn't just fire off a single answer.
It works in a **loop** -- thinking, acting, observing, and adjusting.

Let's use an analogy every student knows: **doing homework.**

Here's how *you* do a homework assignment:

```
1. READ the assignment prompt
2. THINK about how to approach it
3. WRITE a paragraph
4. RE-READ what you wrote
5. NOTICE a mistake or something that could be better
6. FIX it
7. CONTINUE writing
8. RE-READ the whole thing
9. MAKE final adjustments
10. DONE -- turn it in
```

You don't just sit down and perfectly write an essay start to finish
in one shot. You work through a loop of writing, checking, and improving.

**Agents work the exact same way.**

```
THE AGENTIC LOOP

    +------------------+
    |  Receive a task  |
    +------------------+
            |
            v
    +------------------+
    |  THINK:          |
    |  What do I need  |
    |  to do first?    |
    +------------------+
            |
            v
    +------------------+
    |  ACT:            |
    |  Use a tool to   |
    |  do something    |
    |  (read a file,   |
    |   run code, etc) |
    +------------------+
            |
            v
    +------------------+
    |  OBSERVE:        |
    |  What happened?  |
    |  Did it work?    |
    +------------------+
            |
            v
    +------------------+
    |  DECIDE:         |
    |  Am I done? Or   |  ----> If not done, loop back to THINK
    |  do I need to    |
    |  do more?        |
    +------------------+
            |
            v  (when done)
    +------------------+
    |  Report results  |
    |  to the user     |
    +------------------+
```

This loop is what makes agents powerful. They don't just
give you one answer and stop. They keep working until the
job is done.

---

## What Tools Do Agents Have?

An agent is only as useful as the tools it can access.
Think of tools as the agent's **hands** -- without them,
it can think but it can't *do*.

Here are common tools agents can use:

### File System Access
- Read files on your computer
- Create new files
- Edit existing files
- Move and organize files

### Terminal / Command Line
- Run programs
- Install software
- Execute scripts
- Check system information

### Web Search
- Look up current information
- Find documentation
- Research topics that are newer than the AI's training data

### Code Execution
- Write code and run it immediately
- Test whether code works
- Debug errors by reading the error messages

### External App Connections (MCP)
- Connect to databases
- Interact with APIs
- Use specialized services
- More on this in a moment

```
ANALOGY: TOOLS ARE LIKE APPS ON YOUR PHONE

Your phone is powerful, but it only becomes useful when
you install apps.

  Phone without apps  =  AI without tools (can think, can't do)
  Phone with apps     =  Agent with tools (can think AND do)

The more tools an agent has, the more it can accomplish.
```

---

## Levels of Autonomy: How Much Freedom Does the Agent Get?

This is important. Agents can have different levels of access
to your system. Think of it like **lending your phone to someone:**

### Level 1: Read-Only ("Just look, don't touch")

```
  "Here's my phone, you can look at my photos
   but don't send any messages or delete anything."
```

The agent can:
- Read files
- Look at code
- Analyze data

The agent CANNOT:
- Change anything
- Create files
- Run commands

**This is the safest mode.** Good for when you want the agent to
analyze something without any risk of it changing your stuff.

### Level 2: Limited Write Access ("You can text, but ask me first")

```
  "You can use my phone, but check with me
   before you send any texts or post anything."
```

The agent can:
- Read files
- Create and edit files in specific folders
- Run safe commands

The agent CANNOT:
- Access files outside the allowed area
- Run commands that affect the whole system
- Make changes without your approval

**This is the balanced mode.** The agent can do useful work, but
it asks for permission before doing anything risky.

### Level 3: Full Access ("Here's my unlock code, handle it")

```
  "I trust you. Here's my phone, do what you
   need to do. Just tell me when you're done."
```

The agent can:
- Read, write, and delete files
- Run any command
- Make system changes
- Act without asking permission

**This is the most powerful mode**, but also the riskiest.
Only use it when you trust the setup and understand what the
agent might do.

---

## How Agents Connect to Other Apps: MCP

You might hear the term **MCP** -- it stands for
**Model Context Protocol.**

Don't let the name scare you. Here's what it means:

> **MCP is like a USB port for AI.**

Think about USB ports on your computer. Before USB, every device
(printer, mouse, camera, keyboard) needed its own special cable.
USB gave us **one standard port** that works with everything.

MCP does the same thing for AI agents. It's a standard way for
an AI agent to connect to **any app or service.**

```
WITHOUT MCP:                     WITH MCP:

  Agent --[custom]-- Slack       Agent --[MCP]-- Slack
  Agent --[custom]-- GitHub      Agent --[MCP]-- GitHub
  Agent --[custom]-- Database    Agent --[MCP]-- Database
  Agent --[custom]-- Calendar    Agent --[MCP]-- Calendar

  (every connection is             (one standard that
   different and hard               works with everything)
   to build)
```

### Real Example

Say you want an AI agent to:
1. Check your GitHub for open issues
2. Read the issue details
3. Write code to fix the issue
4. Submit the fix

Without MCP, someone would have to build a custom connection
to GitHub for that specific agent.

With MCP, the agent uses a standard GitHub connector that
anyone can build and share. Plug and play.

**You don't need to understand the technical details of MCP right now.**
Just know that it's the technology that lets agents talk to
other software -- and it's making agents way more useful.

---

## What Agents Can Do That Chatbots Cannot

Here's a side-by-side comparison:

| Task | Chatbot | Agent |
|------|---------|-------|
| "Explain what this code does" | Reads your pasted code and explains it | Finds the file itself, reads it, explains it |
| "Fix the bug in my program" | Suggests what to change | Actually edits the file, runs the code, checks if the fix worked |
| "Set up a new project" | Gives you instructions | Creates the folders, writes the config files, installs dependencies |
| "Research a topic" | Gives you info from training data | Searches the web for current information, reads multiple sources |
| "Update my website" | Tells you what HTML to change | Opens the file, makes the change, tests it in a browser |
| "Summarize these 10 documents" | You paste them one by one | Reads all 10 files from your computer automatically |

---

## The Paradigm Shift

This is a fundamental change in what AI *is* to you:

```
OLD MENTAL MODEL:

  You  ----question---->  AI
  You  <----answer------  AI

  AI = Oracle (it knows things)


NEW MENTAL MODEL:

  You  ----task-------->  Agent
                          Agent reads files
                          Agent writes code
                          Agent runs tests
                          Agent fixes errors
                          Agent tries again
  You  <----result------  Agent

  AI = Collaborator (it does things)
```

This is like the difference between:

- **Googling "how to change a tire"** (you get information, you do the work)
- **Calling roadside assistance** (someone else comes and does it)

Both are useful. But they're fundamentally different experiences.

---

## Real Scenario: Agent in Action

Let's walk through a realistic example of what an agent can do.

**Your task:** "I have a CSV file of my grades. Create a chart showing
my grade trends over the semester."

### What a Chatbot Would Do:

```
"Sure! Here's some Python code you can use:

  import matplotlib.pyplot as plt
  import pandas as pd
  ...

Copy this code, save it as chart.py, install pandas
and matplotlib, then run it in your terminal."
```

You'd then have to do all of that yourself.

### What an Agent Would Do:

```
Step 1: "Let me find your CSV file..."
        (searches your files)

Step 2: "Found it: grades.csv. Let me read the data..."
        (reads the file, sees columns and rows)

Step 3: "I see 6 subjects with monthly grades. I'll create
         a line chart for each subject."
        (writes a Python script)

Step 4: "Running the script now..."
        (executes the code)

Step 5: "There was an error -- the date column had a
         different format than expected. Let me fix that."
        (edits the script, runs it again)

Step 6: "Done! I saved the chart as 'grade_trends.png'
         in your project folder. Here's what it shows:
         Your math grades improved steadily, but history
         dipped in October..."
```

Notice what happened: the agent *hit an error* and **fixed it itself.**
It didn't just give up and say "there was an error." It adapted.
That's the agentic loop in action.

---

## "But Isn't This Scary?"

Fair question. Giving an AI the ability to *do things* on your
computer sounds risky. Here's why it's actually manageable:

### Sandboxing

Agents can run in a **sandbox** -- a contained environment where
they can't affect your real files or system. It's like a practice
area in a video game. The agent can try things, make mistakes,
and nothing in the real world gets affected.

### Approval Prompts

Most agent systems ask you before doing anything significant.

```
  Agent: "I'd like to delete the old backup folder.
          It contains 12 files totaling 200MB.
          Approve? [Yes / No]"
```

You stay in control. The agent can propose actions, but you
decide whether they happen.

### Activity Logs

Everything an agent does is logged. You can review every file
it read, every command it ran, every change it made. Full
transparency.

### Undo

Many agent systems support undoing changes. If the agent
does something you don't like, you can roll it back.

---

## Think of It This Way

```
  Chatbot  =  A really smart friend you text
  Agent    =  A really smart intern who sits at your computer

  The friend gives you advice.
  The intern does the work.

  Both are useful.
  They're just useful in different ways.
```

---

## Agent Design Patterns

As you work with agents, you'll notice certain approaches keep
coming up. We've given these **names** so you can recognize and
talk about them. Think of them as plays in a playbook.

Here are the 8 core patterns (each gets a full chapter in
[Agent Design Patterns](agent-design-patterns.md)):

1. **The Agent Loop** -- Think, Act, Observe, Decide, Repeat. The fundamental cycle every agent follows.

2. **The Tool Use Pattern** -- Agents extend their abilities by using tools, like apps give your phone new powers.

3. **The Planning Pattern** -- The agent plans before acting. Blueprints before building.

4. **The Memory Pattern** -- The agent remembers things across sessions, like leaving notes for yourself for tomorrow.

5. **The Multi-Agent Pattern** -- Multiple specialized agents working together, like a team where each person has a role.

6. **The Metacognition Pattern** -- The agent evaluates its own work before calling it done, like proofreading your own essay.

7. **The Human-in-the-Loop Pattern** -- The agent pauses for your approval at key decision points, like a contractor showing you tile samples.

8. **The Context Engineering Pattern** -- Systematically giving the agent the right information, like providing the full movie production setup instead of a single line of dialogue.

You've already seen several of these in action in this chapter.
The agentic loop? That's Pattern 1. The tools section? Pattern 2.
The approval prompts? Pattern 7. Now you have names for them.

---

## Beyond Codex: The Universal Agent

This guide uses OpenAI Codex as its primary example, but Codex
is just **one** implementation of the agent paradigm. Several
other tools follow the exact same principles:

- **Claude Code** (by Anthropic) -- Another terminal-based AI agent,
  using Claude models instead of GPT. Uses CLAUDE.md instead of
  AGENTS.md. Same concept, different provider.
  (See: [Claude Code Intro](claude-code-intro.md))

- **Cursor** -- An AI-powered editor with built-in agent capabilities.

- **GitHub Copilot** -- AI assistance integrated into code editors.

- **Gemini CLI** -- Google's command-line AI agent.

All of them use the same core ideas: the agentic loop, tool use,
context management, and safety controls.

Why does this matter? Because **the skills you're learning in this
guide are not Codex-specific.** Context engineering, design patterns,
safety awareness, clear communication -- these transfer to any agent
tool you'll ever use.

```
WHAT CHANGES BETWEEN TOOLS:
  - Command names
  - AI model under the hood
  - Configuration file names
  - Specific features and pricing

WHAT STAYS THE SAME:
  - The agentic loop
  - How context engineering works
  - Safety principles
  - Design patterns
  - How you communicate with the agent
  - How you evaluate the agent's work
```

The tools will change. New ones will appear. Some will disappear.
But the paradigm -- AI agents that think, act, observe, and
decide -- is here to stay. **Learn the paradigm, and every new
tool becomes easy to pick up.**

---

## Key Takeaways

1. **Chatbots answer questions. Agents complete tasks.** That's the core difference.

2. **The agentic loop** (think, act, observe, decide) lets agents work through
   multi-step problems and fix their own mistakes.

3. **Tools** (file access, terminal, web search, MCP) give agents the ability
   to interact with the real world.

4. **Autonomy levels** (read-only, limited write, full access) let you control
   how much freedom the agent has.

5. **MCP** is the standard that lets agents connect to external apps and
   services -- like USB for AI.

6. **You're always in control.** Sandboxing, approval prompts, and activity
   logs keep things safe.

7. This is the shift from **AI as oracle** to **AI as collaborator.**
   We're not just asking AI what it knows anymore -- we're asking it
   to *do work.*

8. **Eight design patterns** give you a vocabulary for how agents work --
   from the Agent Loop to the Human-in-the-Loop pattern.

9. **The agent paradigm is universal.** Codex, Claude Code, Cursor, Copilot --
   different tools, same fundamental skills.

---

*Next up: [AI Safety Basics](ai-safety-basics.md) -- how to use all of this responsibly.*
