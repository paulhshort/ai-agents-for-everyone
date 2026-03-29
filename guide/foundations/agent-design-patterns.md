# Agent Design Patterns

## Patterns: Reusable Solutions to Common Problems

In school, you learn formulas for math problems. In cooking,
you learn techniques like sauteing and braising. In working
with AI agents, you learn **patterns** -- named approaches
that work in specific situations.

This chapter gives you eight patterns. Each one has a name
you can remember, a real-world analogy, and practical examples
using everyday knowledge work (not coding).

Think of these as tools in your toolbox. You don't use a
hammer for every job. You pick the right tool for the task.

---

## Pattern 1: The Agent Loop

**One sentence:** Think, Act, Observe, Decide, Repeat --
the fundamental cycle every agent follows.

### The Analogy: A Chef in the Kitchen

A chef doesn't just throw ingredients in a pot and hope for
the best. They follow a loop:

1. **Read** the recipe (Think)
2. **Chop** the onions (Act)
3. **Check** -- are they the right size? (Observe)
4. **Decide** -- keep chopping or move to the next step? (Decide)
5. **Repeat** until the dish is done

An AI agent works the same way. It reads your request, takes
an action, checks the result, decides what to do next, and
keeps going until the task is complete.

### When to Use It

Every agent uses this pattern automatically -- it's the
foundation of how agents work. Understanding it helps you
understand why agents sometimes take multiple steps to
complete a task, and why that's actually a good thing.

### Practical Example

```
You:  "Proofread my essay and fix any grammar errors."

Agent (loop in action):
  THINK:   "I need to read the essay first."
  ACT:     Opens and reads the essay file.
  OBSERVE: "I see 3 grammar issues and 1 unclear sentence."
  DECIDE:  "I'll fix them one at a time."
  ACT:     Fixes the first grammar error.
  OBSERVE: "That fix looks correct."
  ACT:     Fixes the second grammar error.
  OBSERVE: "Wait -- this sentence might be intentionally
            informal. I should flag it rather than change it."
  ACT:     Fixes the third error, flags the informal sentence.
  DECIDE:  "All issues addressed. Time to report back."
  REPORT:  "I fixed 3 grammar errors and flagged 1 sentence
            that might be intentional. Here's what I changed..."
```

---

## Pattern 2: The Tool Use Pattern

**One sentence:** Agents extend their abilities by using tools,
the same way apps give your phone new abilities.

### The Analogy: Apps on Your Phone

Your phone out of the box can make calls and send texts.
But install Instagram, Google Maps, and Spotify, and suddenly
it can do photography, navigation, and music streaming.

Each app gives the phone a new ability. Tools work the same way
for agents. A web search tool lets the agent find current
information. A file reader lets it open your documents. A
calculator lets it crunch numbers.

### When to Use It

When your task requires the agent to interact with the real
world -- reading files, searching the web, doing calculations,
or connecting to other services.

### Practical Example

```
You:  "Find out when my library books are due and add
       the dates to my calendar."

Agent uses tools:
  TOOL 1 (Web browser):  Logs into the library website,
          finds your checked-out books and due dates.
  TOOL 2 (Calendar app): Creates reminder events for
          each due date, set 2 days before.
  REPORT: "You have 3 books due. I added reminders to
           your calendar for 2 days before each due date."
```

The agent couldn't do any of this without tools. The tools
are what turn "smart advice" into "actual action."

---

## Pattern 3: The Planning Pattern

**One sentence:** The agent plans before acting --
blueprints before building.

### The Analogy: Architect Before Builder

You wouldn't build a house by just grabbing lumber and
nailing boards together. An architect draws blueprints first.
They plan the layout, check that it meets code requirements,
and get approval before construction starts.

The Planning Pattern works the same way:
**Plan, Validate the plan, then Execute.**

### When to Use It

When the task is complex and has multiple steps. When getting
it wrong would waste a lot of time. When you want to review
the approach before the agent commits to it.

### Practical Example

```
You:  "Help me plan and write a 20-minute presentation
       on renewable energy for my environmental science class."

Agent PLANS first:
  "Here's my proposed plan:

   1. Structure: 5 sections (intro, solar, wind, challenges,
      conclusion) -- about 4 minutes each
   2. Key data points to include for each section
   3. Slide count: 12-15 slides
   4. Visual aids: 2 charts comparing energy sources
   5. Speaker notes with timing cues

   Does this plan look good before I start building it?"

You:  "Looks good, but add a section on hydropower."

Agent VALIDATES:
  "Updated plan: 6 sections, about 3.5 minutes each.
   I'll adjust the slide count to 15-18. Ready to execute?"

You:  "Go for it."

Agent EXECUTES the plan step by step.
```

Notice: by planning first, you caught the missing section
BEFORE the agent did a bunch of work. That's the value.

---

## Pattern 4: The Memory Pattern

**One sentence:** The agent remembers things across sessions,
like leaving notes for yourself for tomorrow.

### The Analogy: Notes on Your Desk

Imagine you're working on a big project over several weeks.
Each night, you leave sticky notes on your desk:

- "Draft 2 is in the blue folder"
- "Professor wants more sources for chapter 3"
- "The statistics in section 4 need updating"

When you sit down the next morning, those notes get you
back up to speed instantly. You don't have to re-figure-out
where you left off.

The Memory Pattern works the same way. Agents use files like
AGENTS.md (or CLAUDE.md) to store important information that
persists between sessions.

### When to Use It

When you're working on something over multiple sessions.
When the agent needs to remember your preferences, your
project status, or decisions you've already made.

### Practical Example

```
SESSION 1 (Monday):
  You:  "I'm starting a research paper on ocean acidification."
  Agent works with you on the outline and thesis.
  Agent updates AGENTS.md:
    "Project: Ocean acidification research paper
     Thesis: Human CO2 emissions are the primary driver
     Outline: 5 chapters, approved by user
     Style: APA, formal academic tone
     Status: Outline complete, Chapter 1 in progress"

SESSION 2 (Wednesday):
  You:  "Let's keep working on my paper."
  Agent reads AGENTS.md automatically.
  Agent: "Welcome back! Last time we finished the outline
          and started Chapter 1. You were working on the
          section about pH measurement methods. Want to
          pick up where we left off?"
```

Without memory, Session 2 would start from scratch. With
memory, the agent is already up to speed.

---

## Pattern 5: The Multi-Agent Pattern

**One sentence:** Multiple agents work together, each with
their own specialty, like a team of experts.

### The Analogy: A Team Project Done Right

Think about the best group project you've ever been part of.
Not the kind where one person does everything -- the kind where:

- One person is the **researcher** (finds all the sources)
- One person is the **writer** (crafts the actual text)
- One person is the **editor** (catches mistakes and improves flow)
- One person is the **designer** (makes the slides look great)

Each person focuses on what they're best at, and the final
product is better than any one person could do alone.

The Multi-Agent Pattern works exactly like this. Instead of
one agent trying to do everything, multiple specialized agents
each handle their part of the task.

### When to Use It

When a task has clearly distinct parts that benefit from
different approaches. When the work can be divided among
specialists.

### Practical Example

```
You:  "Create a complete newsletter for our student club."

AGENT 1 (Researcher):
  Gathers recent club events, upcoming dates, and
  member announcements.

AGENT 2 (Writer):
  Takes the research and writes engaging newsletter
  sections with headlines and body text.

AGENT 3 (Editor):
  Reviews the draft for tone, grammar, and consistency.
  Ensures it matches the club's voice.

RESULT: A polished newsletter that reads like it was
        produced by a real editorial team.
```

---

## Pattern 6: The Metacognition Pattern

**One sentence:** The agent evaluates its own work before
calling it done -- like proofreading your essay before
you submit it.

### The Analogy: Proofreading Your Own Essay

You know that feeling when you finish writing a paper and
think "done!" -- but then you re-read it and catch three
typos, a confusing paragraph, and a missing citation?

That re-reading step is metacognition -- thinking about
your own thinking. Checking your own work.

Agents can do this too. After completing a task, the agent
reviews its output, asks "Is this actually good?", and
improves it before showing you.

### When to Use It

When quality matters more than speed. When you want the
agent to catch its own mistakes. When the output is going
to be seen by others (professors, colleagues, audiences).

### Practical Example

```
You:  "Write a summary of this 30-page report."

Agent writes first draft of summary.

Agent SELF-EVALUATES:
  "Let me check my own work:
   - Did I capture all the key findings? Checking...
     I missed finding #4 about regional differences.
   - Is the summary the right length? It's 450 words,
     which seems reasonable for a 30-page report.
   - Did I introduce any information not in the report?
     Checking... No, everything is sourced.
   - Is the language clear for a non-expert? Checking...
     I used 'methodology' -- I should say 'approach'
     for a general audience.

   Revising before I show you..."

Agent presents improved version.
```

The result is better because the agent didn't just produce
output -- it *evaluated* its output.

---

## Pattern 7: The Human-in-the-Loop Pattern

**One sentence:** The agent pauses and asks for your approval
at key decision points, keeping you in control.

### The Analogy: A Contractor Showing You Tile Samples

When you hire a contractor to remodel your bathroom, you
don't just say "make it nice" and disappear for a month.
A good contractor shows you tile samples, asks about color
preferences, and gets your sign-off on the layout before
tiling. They check in at key moments.

The Human-in-the-Loop Pattern works the same way. The agent
does work, but pauses at important decision points to
check with you.

### When to Use It

When decisions have consequences that are hard to reverse.
When your personal preferences matter. When you want to
stay involved without doing all the work yourself.

### Practical Example

```
You:  "Reorganize all my class notes into folders by subject."

Agent: "I've looked at your 85 note files. Here's my plan:

  📁 Biology (23 files)
  📁 History (18 files)
  📁 Statistics (15 files)
  📁 English (20 files)
  📁 Unsure (9 files -- I couldn't determine the subject)

  Before I move anything, can you:
  1. Confirm these categories look right?
  2. Tell me where the 9 'unsure' files should go?
  3. Should I rename files to include the date?"

You:  "Looks good. The 'unsure' files are all from my
       elective -- call that folder 'Philosophy'. And
       yes, add dates to filenames."

Agent: "Got it. Moving files now..."
       (reorganizes everything)
       "Done! Want to review the result before I
        delete the old structure?"
```

Notice: the agent paused at two key moments -- before
reorganizing and before deleting. This prevents mistakes
while still saving you the manual work.

---

## Pattern 8: The Context Engineering Pattern

**One sentence:** Systematically providing the right information
so the agent can do its best work -- setting up the entire
production, not just one line of dialogue.

### The Analogy: The Movie Production (Again)

We covered this in the [Context Engineering](context-engineering.md)
chapter, but it's important enough to be a formal pattern.

A single line of dialogue vs. the full production environment.
One gives you confused improv. The other gives you an
Oscar-worthy performance.

### When to Use It

Always. Every interaction benefits from better context. But
especially when:

- Starting a new project
- Working on something complex
- The AI keeps getting things wrong
- You need consistent results over multiple sessions

### Practical Example

```
BEFORE (no context engineering):
  You:  "Edit my essay."
  AI:   Makes random changes that don't match your style.

AFTER (context engineering applied):
  AGENTS.md is set up with:
    - Your writing style preferences
    - The assignment rubric
    - Your professor's pet peeves
    - The current draft status

  You:  "Edit the introduction for clarity and flow."
  AI:   Makes targeted improvements that match your voice
        and meet the rubric requirements.
```

---

## Combining Patterns

The real power comes from combining patterns. Here's an
example that uses four patterns together:

```
TASK: "Help me prepare for my job interview at a marketing firm."

CONTEXT ENGINEERING PATTERN:
  AGENTS.md includes your resume, the job description,
  the company's recent campaigns, and your past
  interview experiences.

PLANNING PATTERN:
  Agent creates a prep plan:
  1. Analyze the job description for key skills
  2. Match your experience to each requirement
  3. Prepare answers for common marketing questions
  4. Create a list of smart questions to ask them

HUMAN-IN-THE-LOOP PATTERN:
  Agent: "Here are draft answers for 5 likely questions.
          Review them and tell me which feel authentic
          and which feel off."

METACOGNITION PATTERN:
  Agent reviews its own suggested answers:
  "Actually, my answer to 'Why marketing?' sounds generic.
   Let me revise it to include your specific experience
   with the campus social media campaign."
```

Four patterns, working together, producing a result much
better than any single approach.

---

## Quick Reference Card

| Pattern | One-Liner | Analogy | Use When... |
|---------|-----------|---------|-------------|
| Agent Loop | Think-Act-Observe-Decide-Repeat | Chef following a recipe | Always (it's automatic) |
| Tool Use | Extend abilities with tools | Apps on your phone | Task requires real-world interaction |
| Planning | Plan before acting | Architect before builder | Complex, multi-step tasks |
| Memory | Remember across sessions | Sticky notes on your desk | Multi-session projects |
| Multi-Agent | Specialists work together | Expert team project | Tasks with distinct parts |
| Metacognition | Self-evaluate before finishing | Proofreading your essay | Quality matters |
| Human-in-the-Loop | Pause for approval | Contractor showing tile samples | Decisions are hard to reverse |
| Context Engineering | Provide the right information | Movie production setup | Always (especially for complex tasks) |

---

## Key Takeaways

1. **Patterns are reusable solutions.** Learn them once, use them
   everywhere -- with any AI agent, any tool, any task.

2. **The Agent Loop is the foundation.** Every agent follows the
   Think-Act-Observe-Decide cycle. Understanding it helps you
   understand agent behavior.

3. **Planning saves time.** Having the agent plan before acting
   catches problems early, when they're cheap to fix.

4. **Memory makes agents smarter over time.** AGENTS.md and session
   history turn a stranger into a knowledgeable collaborator.

5. **Human-in-the-Loop keeps you in control.** You're the director,
   not the audience. Stay involved at key moments.

6. **Metacognition improves quality.** An agent that checks its own
   work produces better results than one that just outputs.

7. **Patterns combine.** The most effective workflows use multiple
   patterns together. The more you practice, the more naturally
   you'll combine them.

---

*Next up: [Claude Code Intro](claude-code-intro.md) -- another powerful AI agent tool and why learning multiple tools makes you more versatile.*
