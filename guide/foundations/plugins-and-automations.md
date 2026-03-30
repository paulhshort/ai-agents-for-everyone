# Plugins and Automations

## Giving Your AI New Abilities and Putting It on Autopilot

Up until now, everything we have covered involves YOU starting a
conversation with your AI agent and working alongside it in real
time. That is powerful, but it is only half the picture.

What if your AI could learn entirely new skills -- like connecting
to your calendar, organizing your research library, or formatting
documents in your company's style?

What if your AI could do work on a schedule -- while you sleep,
while you are in class, while you are living your life?

That is what **plugins** and **automations** unlock. Together,
they turn your AI from a helpful assistant into a customizable,
self-running team member.

---

## Part 1: Plugins

### What Are Plugins?

Think of your smartphone. Out of the box, it can make calls and
send texts. But the real power comes from installing apps --
suddenly your phone can navigate, translate languages, edit photos,
track your fitness, and a thousand other things.

**Plugins work the same way for your AI agent.**

> A plugin is an installable bundle that gives your AI agent new
> skills, app integrations, and tool connections.

Like installing an app on your phone to give it new abilities,
installing a plugin on Codex gives it capabilities it did not
have before.

### What Comes Inside a Plugin?

A plugin is just a folder containing a few things:

| Component | What It Does | Everyday Analogy |
|-----------|-------------|-----------------|
| **Manifest** (`plugin.json`) | Describes the plugin -- its name, what it does, what it contains | The label on the app in the app store |
| **Skills** | Step-by-step instructions the AI follows | Recipe cards for the new abilities |
| **App integrations** | Connections to other software (Slack, Google Docs, etc.) | Linking your music app to your speakers |
| **Tool configurations** | Settings for external services the AI can use (MCP servers) | Plugging in a new accessory to your phone |

Not every plugin has all of these. Some plugins just add a
single skill. Others add a whole suite of connected capabilities.

### Where Do Plugins Live?

Plugins can be installed in two places:

**Personal plugins** (available in all your projects):
```
~/.agents/plugins/
```
These are like apps installed on YOUR phone -- they follow you
everywhere.

**Project plugins** (available only in a specific project):
```
your-project/.agents/plugins/
```
These are like apps installed on a shared work tablet -- they
are specific to that project.

### How to Create a Plugin

You do not need to be a programmer to create a plugin. Codex
has a built-in helper called `@plugin-creator` that walks you
through the process step by step. It is like having a personal
app developer who asks you what you want and builds it for you.

Here is how it works:

1. Open Codex
2. Type: `@plugin-creator help me create a new plugin`
3. The plugin creator asks you what you want your plugin to do
4. It scaffolds (builds the skeleton of) the plugin for you
5. You customize and refine it through conversation

That is it. No coding required.

### Why Plugins Matter

The real magic of plugins is **sharing**. When someone builds
a useful plugin, anyone can install it. This means:

- An expert in your field creates a plugin for organizing
  research papers -- you install it and benefit from their
  expertise
- Your team lead creates a plugin with your company's
  formatting standards -- everyone on the team installs it
  and documents look consistent
- A community member builds a plugin that connects to your
  favorite note-taking app -- you install it and your AI can
  now read and organize your notes

Plugins turn individual cleverness into community capability.

### Plugin Examples for Knowledge Workers

Here are some real-world examples of what plugins could do
for people who work with information, documents, and ideas:

**Meeting Summarizer Plugin**
- Reads your meeting notes or transcripts
- Pulls out action items, decisions, and key discussion points
- Formats summaries in your preferred style
- Saves summaries to your project folder

**Research Organizer Plugin**
- Scans a folder of articles, papers, and notes
- Tags them by topic, date, and relevance
- Creates a searchable index
- Highlights connections between different sources

**Document Formatter Plugin**
- Applies your organization's style guide to any document
- Fixes heading levels, font consistency, citation format
- Ensures brand guidelines are followed
- Produces a clean, professional final version

**Client Communication Plugin**
- Drafts status update emails in your team's template
- Adjusts tone based on the audience (executive vs. peer)
- Pulls in relevant project metrics
- Includes standard disclaimers and sign-offs

---

## Part 2: Automations

### What Are Automations?

Here is another familiar concept:

> **Automations are scheduled background tasks that your AI
> runs without you watching.**

Think of your phone alarm. You set it once -- "wake me up at
7:00 AM every weekday" -- and it just works. You do not have to
remember to set it each night. It runs on autopilot.

Or think of a recurring calendar reminder. Every Monday at 9 AM,
it pops up: "Submit weekly report." But what if, instead of
just REMINDING you, the AI actually DID the work?

**That is what automations are.**

You tell Codex: "Every Monday at 8 AM, scan my project notes
and compile a status report." And it does. Every Monday. Without
you lifting a finger.

### How Automations Work

Setting up an automation is straightforward. You need three
things:

1. **A project** -- Which folder or workspace should the AI
   work in?
2. **A prompt** -- What should the AI do? (This is just a
   regular instruction, like you would type in a conversation.)
3. **A schedule** -- When should it run? (Daily, weekly,
   specific days and times.)

That is it. Three ingredients, one automated workflow.

### Where to Set Up Automations

Automations are configured in the **Codex desktop app**. The
app provides a simple interface where you can:

- Browse your projects
- Write or paste your automation prompt
- Choose a schedule (daily, weekly, custom)
- Enable or disable automations with a toggle

Think of it like setting up a recurring event in your calendar
app -- pick the task, pick the time, and let it run.

### Where Automations Run

When your automation triggers, Codex needs a place to do its
work. There are two options:

**Git worktree (recommended for safety)**
The AI creates an isolated copy of your project and works in
that copy. This is like making a photocopy of a document before
marking it up -- your original stays untouched until you review
the changes.

**Local execution**
The AI works directly in your project folder. Faster, but
changes happen in place. This is like editing the original
document directly -- convenient, but you should back up first.

For most knowledge work, the git worktree option is safer
because you can review the AI's work before accepting it.

### Use Cases for Knowledge Workers

Here are practical examples of automations that can save you
hours every week:

**Weekly Status Report Generation**
- Schedule: Every Friday at 4 PM
- What it does: Scans your project folder for recent changes,
  meeting notes, and completed tasks. Compiles a clean status
  report summarizing what happened this week, what is in
  progress, and what is planned for next week.
- Time saved: 30-45 minutes every Friday

**Daily File Organization Scan**
- Schedule: Every morning at 7 AM
- What it does: Checks your downloads folder, desktop, and
  inbox folder for new files. Moves them to the right project
  folders based on their content. Renames files with consistent
  naming conventions.
- Time saved: 10-15 minutes every day

**Automated Document Consistency Checks**
- Schedule: Every Monday at 9 AM
- What it does: Reviews all documents in your project for
  formatting consistency -- heading styles, citation formats,
  naming conventions, template adherence. Produces a report
  of anything that needs fixing.
- Time saved: 1-2 hours of manual review

**Release Notes Compilation**
- Schedule: End of each sprint or milestone
- What it does: Scans commit messages, change logs, and
  project notes. Writes clear, audience-friendly release notes
  that explain what changed and why it matters.
- Time saved: 1 hour per release

**Research Topic Monitoring**
- Schedule: Every weekday at 8 AM
- What it does: Scans designated folders for new articles,
  papers, or notes you have saved. Summarizes new additions,
  flags items related to your current research questions, and
  updates your research index.
- Time saved: 20-30 minutes daily

### The Golden Rule: Skill First, Automate Second

Here is the most important best practice for automations:

> **Develop your automation as a skill first. Test it manually.
> Then automate it.**

Think of it like learning to drive. You would not set your car
to drive itself on day one. First, you drive manually and get
comfortable. Then, once you trust the process, you might use
cruise control.

The same logic applies here:

1. **Create the skill** -- Write a SKILL.md file that describes
   what you want done step by step
2. **Test it manually** -- Run the skill yourself a few times.
   Does it produce good results? Does it handle edge cases?
3. **Refine it** -- Adjust the instructions until the output
   is consistently what you want
4. **Automate it** -- Once you trust the skill, schedule it
   as an automation

This approach saves you from automating a bad process. If the
skill does not work well when you run it manually, it will not
work well on a schedule either.

### Safety and Guardrails

A natural concern: "If AI is doing things while I am not
watching, how do I know it is safe?"

Good news: **automations run with the same sandbox and approval
rules as your interactive sessions.**

This means:

- If your project is set to "read only" sandbox mode, the
  automation can read files but cannot change them
- If an action requires approval, the automation pauses and
  waits for you (you will get a notification)
- All changes are logged, so you can review what happened
- Using a git worktree means changes are isolated until you
  review and accept them

The AI does not get special powers just because it is running
on a schedule. The same safety rules apply.

---

## Part 3: Skills Revisited

You have already learned about skills in earlier sections. But
plugins and automations add new dimensions to how skills work,
so let us revisit them with fresh eyes.

### Personal Skills

Earlier, we talked about project-level skills -- instructions
that live inside a specific project folder. But skills can also
be **personal**, meaning they follow you across every project.

Personal skills live at:
```
~/.agents/skills/
```
(The `~` means your home folder -- your personal space on
the computer.)

Each personal skill is a folder with a `SKILL.md` file inside:
```
~/.agents/skills/
  writing-coach/
    SKILL.md
  data-analyzer/
    SKILL.md
  meeting-notes/
    SKILL.md
```

These are YOUR skills -- your personal playbook that works
everywhere. Project skills stay with the project. Personal
skills stay with YOU.

### The Progressive Disclosure Pattern

Skills follow a clever three-stage pattern called
**progressive disclosure**. This is like how a good textbook
works -- chapter title, then summary, then full content:

**Stage 1: Discovery**
When Codex first starts up, it sees a list of your available
skills -- just the names and short descriptions. This is like
scanning the table of contents of a book. Codex knows what
skills exist but has not read the details yet.

**Stage 2: Activation**
When you mention a skill (or the task calls for one), Codex
reads the full SKILL.md file. This is like opening to the right
chapter. Now Codex understands the detailed instructions.

**Stage 3: Execution**
Codex follows the instructions in the skill to complete the
task. This is like reading and applying the chapter content.

Why does this pattern matter? Because it keeps things efficient.
Codex does not load every skill into memory at once -- that would
be like trying to read every book in the library simultaneously.
Instead, it loads only what it needs, when it needs it.

### Creating Your Own Skills

Creating a skill is surprisingly simple. You just write a
SKILL.md file -- a plain text document with instructions for
the AI.

Here is an example of a personal "Weekly Summary" skill:

```markdown
---
name: Weekly Summary
description: Creates a summary of the week's work from project notes
---

# Weekly Summary

## What to do
1. Look at all files modified in the past 7 days
2. Read any meeting notes from this week
3. Identify completed tasks, in-progress work, and blockers
4. Write a summary organized by these three categories
5. Keep the summary under 500 words
6. Use bullet points, not paragraphs
7. Include dates for all items

## Formatting rules
- Start with a one-sentence overview of the week
- Use "Completed," "In Progress," and "Blocked" as headings
- End with "Next Week" section listing upcoming priorities
```

That is a complete skill. Save it as
`~/.agents/skills/weekly-summary/SKILL.md` and it is available
in every project you work on.

### The Skills-to-Plugins-to-Automations Pipeline

Here is how everything connects:

```
SKILL                   PLUGIN                 AUTOMATION
(one ability)    →    (bundled abilities)   →  (scheduled ability)

Write a SKILL.md        Bundle skills,          Set a schedule
that teaches the        integrations, and       and let the AI
AI one task.            tools into a plugin     run the skill
                        anyone can install.     automatically.

Example:                Example:                Example:
"Summarize my           "Meeting Toolkit"       "Every Friday at
meeting notes"          plugin with             4 PM, run the
                        summarizer +            meeting summary
                        action tracker +        skill on this
                        follow-up drafter       week's notes"
```

The progression is natural:
1. You discover a task you do repeatedly
2. You teach the AI to do it (skill)
3. You bundle it for others (plugin)
4. You schedule it to run automatically (automation)

Each step builds on the last.

---

## Key Takeaways

1. **Plugins are installable bundles** that give your AI new
   capabilities -- like apps for your phone. Anyone can create
   and share them.

2. **Automations are scheduled tasks** that run without you
   watching -- like a recurring calendar event where the AI
   actually does the work instead of just reminding you.

3. **The golden rule of automation**: build it as a skill first,
   test it manually, then automate. Never automate a process
   you have not validated.

4. **Personal skills** live in `~/.agents/skills/` and follow
   you across every project. They are your personal AI playbook.

5. **The progression is natural**: Skill (one ability) leads to
   Plugin (bundled abilities) leads to Automation (scheduled
   ability). Each step builds on the last.

6. **Safety is maintained**: Automations run with the same
   sandbox and approval rules as interactive sessions. The AI
   does not get extra permissions just because it is on autopilot.

7. **Community sharing** is the superpower of plugins. Someone
   builds something useful, packages it as a plugin, and everyone
   benefits.

---

*Next up: Continue exploring the guide to learn how to put
these concepts into practice with real projects.*
