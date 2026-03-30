# Context Engineering

## The Skill That Changes Everything

You've probably heard about "prompt engineering" -- the art of
asking AI good questions. That's useful, but it's only part of
the picture.

**Context engineering** is the bigger skill. It's the art of giving
your AI the right information at the right time.

Here's the difference:

```
PROMPT ENGINEERING:
  "Write me a good essay about climate change."

CONTEXT ENGINEERING:
  "Here is my assignment rubric, here are 3 sources my
   professor recommended, here is my thesis statement,
   here is the tone my professor prefers, and here is
   my draft outline. Now help me write this essay."
```

The first one is a shot in the dark.
The second one sets the AI up for success.

---

## The Movie Production Analogy

This is the best way to understand the difference:

> **A static prompt is like giving an actor a single line of dialogue.**
> **Context engineering is providing the entire production environment --
> the script, the set, the costumes, the director's notes, and the
> other actors.**

Think about it. If you hand an actor a slip of paper that says
"I can't believe you did that!" -- they have no idea how to
deliver the line. Are they angry? Heartbroken? Joking? They
don't know the scene, the character, or the story.

But if you give them:

- The full script (so they know the story)
- Their character description (so they know who they are)
- The set design (so they know where they are)
- The director's notes (so they know the mood)
- The other actors' lines (so they know the conversation)

Now that single line of dialogue comes alive. The actor knows
exactly how to deliver it because they have the **full context.**

AI agents work the same way. The more relevant context you
provide, the better the result.

---

## Why Context Matters More Than Clever Tricks

Here's something most people don't realize:

> **Most AI failures aren't reasoning failures. They're context
> failures. The AI had the wrong information, or was missing
> key details.**

When an AI gives you a bad answer, your first instinct is
probably "the AI is dumb." But most of the time, the real
problem is that the AI didn't have the information it needed.

```
EXAMPLE:

  You:  "Write a thank-you email to my professor."

  AI:   (writes a generic, bland email)

  You:  "That's terrible. It doesn't sound like me at all."
```

But what if you tried this instead?

```
  You:  "Write a thank-you email to my chemistry professor,
         Dr. Kim. She helped me understand redox reactions
         during office hours last Tuesday. I'm a sophomore
         and I tend to write in a warm but not overly formal
         tone. She's very approachable."

  AI:   (writes a specific, personal, well-toned email)
```

Same AI. Same "intelligence." Totally different result.
The difference was **context**, not a magic prompt trick.

---

## The 6 Components of Context

When you're working with an AI agent, context comes in
six flavors. Think of these as six ingredients in a recipe --
you don't always need all of them, but knowing what's available
helps you cook better.

### 1. Instructions -- "What To Do"

These are your directions. What should the agent do?
What's the goal? What are the rules?

```
EXAMPLE INSTRUCTIONS:
  "You are helping me organize my research notes.
   Group them by theme. Use simple language.
   Don't delete anything -- just reorganize."
```

Good instructions are clear, specific, and include boundaries
(what NOT to do is just as important as what to do).

### 2. Knowledge -- "What To Know"

This is the background information the agent needs.
Facts, documents, data, reference material.

```
EXAMPLE KNOWLEDGE:
  "Here are my 15 research notes from the semester.
   Here is the assignment rubric.
   Here is the grading criteria my professor uses."
```

Without knowledge, the agent is guessing. With it,
the agent is informed.

### 3. Tools -- "What It Can Use"

Tools are the abilities the agent has access to.
Can it search the web? Read files? Create charts?

```
EXAMPLE TOOLS:
  - File reader (can open your documents)
  - Web search (can look up current information)
  - Calculator (can do math on your data)
```

An agent without tools is like a person without hands --
smart, but unable to interact with the world.

### 4. Memory -- "What It Remembers"

Memory is what persists between conversations.
Does the agent remember your preferences from last time?
Does it know what you worked on yesterday?

```
EXAMPLE MEMORY:
  - "Last session, the user preferred bullet points over paragraphs."
  - "The user's project is about renewable energy in Southeast Asia."
  - "The user is writing for a college application."
```

Memory is what turns a stranger into a colleague who
knows your work.

### 5. State -- "What's Happening Right Now"

State is the current situation. What files are open?
What step are we on? What just happened?

```
EXAMPLE STATE:
  - "We're on step 3 of 5 in the outline."
  - "The user just uploaded a new data file."
  - "The previous attempt had an error in row 47."
```

State keeps the agent oriented. Without it, every
response starts from scratch.

### 6. Queries -- "What You're Asking"

This is your actual question or request right now.
It's the most obvious piece, but it works best when
the other five components are already in place.

```
EXAMPLE QUERY:
  "Based on the notes I gave you, the rubric, and our
   outline so far, write the introduction paragraph."
```

Notice how much stronger that query is when instructions,
knowledge, tools, memory, and state are already set up.

---

## The Context Window: Your AI's Whiteboard

Here's a concept you need to understand: the **context window.**

Imagine you're working at a whiteboard. The whiteboard has
a fixed size -- let's say it's 6 feet wide. Everything you
and the AI discuss has to fit on that whiteboard. Your
instructions, the documents you share, the conversation
history, the AI's responses -- all of it goes on the board.

```
+--------------------------------------------------+
|                                                  |
|  YOUR CONTEXT WINDOW (the whiteboard)            |
|                                                  |
|  [Instructions]  [Knowledge docs]                |
|  [Conversation history so far]                   |
|  [AI's previous responses]                       |
|  [Current question]                              |
|                                                  |
|  ~~~~~~~~~~~~ getting full ~~~~~~~~~~~~          |
|                                                  |
+--------------------------------------------------+
```

When the whiteboard fills up, something has to be erased
to make room for new information. The AI starts "forgetting"
the oldest parts of the conversation.

### What This Means for You

- **Long conversations lose early context.** If you told the AI
  something important 2 hours ago, it might have been pushed
  off the whiteboard.

- **Huge documents eat up space.** Pasting an entire 50-page
  report leaves little room for discussion.

- **Be strategic.** Give the AI what it needs, but don't flood
  it with everything you have.

### Practical Tips

| Situation | What to Do |
|-----------|------------|
| Conversation getting long | Use `/compact` to summarize and free up space |
| AI "forgetting" early instructions | Repeat the key instructions in your next message |
| Starting a new topic | Start a fresh conversation instead of continuing an old one |
| Large document | Share the relevant sections, not the whole thing |
| Multiple tasks | Handle them one at a time rather than all at once |

---

## The Official Codex Prompt Framework

Codex has an official framework for writing great prompts. It
breaks every request into four parts. Here it is:

| Part | What It Means | Example |
|------|--------------|---------|
| **Goal** | What you are building or changing | "Create a summary of this week's meeting notes" |
| **Context** | Relevant files, folders, and docs | "The notes are in `/meetings/march/`. Use `@meetings/march` to point Codex at them." |
| **Constraints** | Standards, rules, safety requirements | "Use bullet points, keep it under 300 words, follow our team template" |
| **Done-when criteria** | How you will know it is complete | "The summary covers all 4 meetings, includes action items, and is saved as `weekly-summary.md`" |

### Using @mention to Point at Specific Files

One powerful Codex feature is the `@mention` syntax. Instead
of describing where files are, you point directly at them:

```
"Summarize the notes in @meetings/march/monday.md and
 @meetings/march/wednesday.md. Follow the format in
 @templates/summary-template.md."
```

The `@` symbol tells Codex exactly which files to read. No
ambiguity, no guessing.

### How This Maps to Our WHAT-WHERE-HOW-VERIFY Formula

If you have been following this guide, you already know the
**WHAT-WHERE-HOW-VERIFY** formula for writing clear prompts.
The official Codex framework maps directly to it:

```
Our Formula          Codex Framework       What It Covers
-----------          ---------------       ---------------
WHAT            ≈    Goal                  What are you trying to accomplish?
WHERE           ≈    Context               Which files, folders, and docs matter?
HOW             ≈    Constraints           What rules and standards apply?
VERIFY          ≈    Done-when criteria    How do you know it worked?
```

They are the same idea with different labels. The Codex
framework uses slightly different words, but the structure is
identical:

- **WHAT = Goal** -- Both answer: "What should the AI do?"
- **WHERE = Context** -- Both answer: "What information does
  the AI need?" (Codex adds the `@mention` shortcut for
  pointing at specific files.)
- **HOW = Constraints** -- Both answer: "What rules should
  the AI follow?"
- **VERIFY = Done-when** -- Both answer: "How will I know
  the result is correct?"

### Putting It All Together

Here is a complete prompt using the Codex framework:

```
Goal: Compile a weekly progress report for my research project.

Context: The relevant notes are in @research/week-12/. My
previous report is at @reports/week-11-summary.md. Use the
same format.

Constraints: Keep it under 500 words. Use the three-section
structure (Completed, In Progress, Next Steps). Do not include
any raw data -- only summaries and takeaways.

Done-when: The report covers all notes from week 12, follows
the same format as week 11, is saved as
@reports/week-12-summary.md, and includes at least one
action item in the Next Steps section.
```

Notice how each part eliminates a different type of confusion:
- Goal eliminates "what should I do?"
- Context eliminates "where should I look?"
- Constraints eliminates "how should I do it?"
- Done-when eliminates "how do I know I am finished?"

When all four are clear, the AI rarely goes off track.

---

## Prompt Engineering vs. Context Engineering

These terms get mixed up a lot. Here's the difference:

```
PROMPT ENGINEERING:
  Crafting a single, well-worded question or instruction.
  It's about the MESSAGE.

  "You are an expert editor. Review this paragraph for
   clarity, grammar, and tone. Be specific in your feedback."


CONTEXT ENGINEERING:
  Designing the entire information environment around the AI.
  It's about the SYSTEM.

  - Setting up an AGENTS.md file with project details
  - Giving the AI access to your research folder
  - Configuring memory so it remembers your preferences
  - Choosing which tools the agent can use
  - Structuring your conversation for the task at hand
```

Think of it this way:

> **Prompt engineering is writing a good text message.**
> **Context engineering is setting up the entire workspace
> so the AI can do great work.**

Both matter. But context engineering is the bigger skill,
because it shapes everything the AI does -- not just one
response at a time.

---

## Practical Context Engineering

Let's get specific. Here's how you actually do this.

### Writing Good AGENTS.md Files

An AGENTS.md file (or CLAUDE.md for Claude Code) is like
leaving a detailed note for your AI assistant. It lives in
your project folder, and the agent reads it at the start of
every session.

A good AGENTS.md includes:

```markdown
# Project: My History Research Paper

## What This Project Is
A 15-page research paper on the causes of World War I
for Professor Martinez's European History 202 class.

## My Writing Style
- I write in a formal academic tone
- I prefer active voice
- I use Chicago citation style
- I avoid contractions in formal papers

## Current Status
- Outline: DONE
- Introduction: DONE
- Chapters 1-2: IN PROGRESS
- Chapters 3-4: NOT STARTED
- Conclusion: NOT STARTED

## Key Sources
- Clark, Christopher. "The Sleepwalkers" (2012)
- MacMillan, Margaret. "The War That Ended Peace" (2013)
- Tuchman, Barbara. "The Guns of August" (1962)

## Important Rules
- Always cite sources using Chicago style
- Don't write more than 400 words per section
- Flag any claims that need additional sources
```

This gives the AI everything it needs before you even
type your first message.

### Structuring Your Prompts with Context

When you're having a conversation, layer your context:

```
WEAK (no context):
  "Help me with my paper."

BETTER (some context):
  "Help me with the second chapter of my history paper
   about World War I."

BEST (full context):
  "I'm working on chapter 2 of my history paper about
   the alliance system that led to WWI. I've already
   written the introduction arguing that the war wasn't
   inevitable. This chapter should show how defensive
   alliances created a domino effect. My professor wants
   primary source citations. I'm stuck on the transition
   from the Franco-Prussian War to the Triple Alliance."
```

### When to /compact

The `/compact` command tells the agent to summarize the
conversation so far and free up whiteboard space. Use it when:

- The conversation has been going on for a long time
- The AI starts repeating itself or forgetting instructions
- You're switching to a different aspect of the same project
- You notice the AI's responses getting less focused

### When to Start Fresh

Sometimes it's better to start a brand new conversation:

- You're moving to a completely different task
- The current conversation has gotten confused
- You want to try a totally different approach
- The context window is full of irrelevant history

---

## Examples: Context Engineering for Knowledge Work

### Example 1: Writing a Research Paper

**Without context engineering:**
```
You:  "Write about the effects of social media on teenagers."
AI:   (produces a generic, surface-level essay)
```

**With context engineering:**
```
AGENTS.md:
  Project: Sociology 101 Term Paper
  Topic: Social media's impact on teen mental health
  Audience: College professor, expects academic rigor
  Style: APA format, formal tone
  Thesis: Social media has mixed effects -- connection
          and community vs. comparison and anxiety

Your prompt:
  "I need to write the section about negative effects.
   I have three sources:
   1. Twenge (2017) found increased depression rates
   2. Primack et al. (2017) linked usage to isolation
   3. My own survey of 30 classmates (data attached)

   Write a 300-word section that weaves these together
   and connects back to my thesis about mixed effects."
```

The AI now has everything it needs to write something
genuinely useful.

### Example 2: Organizing a Group Project

**Without context engineering:**
```
You:  "Help me organize my group project."
AI:   (gives generic project management advice)
```

**With context engineering:**
```
AGENTS.md:
  Project: Biology Lab Group Presentation
  Team: 4 members -- Alex (research), Jordan (slides),
        Sam (script), Me (editing + coordination)
  Deadline: March 15
  Topic: CRISPR gene editing applications
  Current status: Research done, slides 50% done,
                  script not started

Your prompt:
  "Sam hasn't started the script and the deadline is
   in 10 days. Create a realistic schedule that accounts
   for the remaining work. Sam tends to work best with
   clear outlines, so make the script task specific.
   Also draft a friendly but firm message I can send
   the group."
```

### Example 3: Analyzing Survey Data

**Without context engineering:**
```
You:  "Analyze this data."
AI:   (doesn't know what data, what questions, or what matters)
```

**With context engineering:**
```
AGENTS.md:
  Project: Student Satisfaction Survey Analysis
  Data: 200 responses, 15 questions, mix of Likert
        scale and open-ended
  Goal: Find the top 3 issues students care about
  Audience: Student government presentation
  Tone: Clear, visual, persuasive

Your prompt:
  "I've attached the survey CSV. Focus on questions 4-8
   (campus dining, housing, parking, mental health
   services, academic advising). Calculate the average
   satisfaction score for each, identify the lowest-rated
   area, and pull 3 representative quotes from the
   open-ended responses for each low area."
```

---

## The Context Engineering Checklist

Before you start working with an AI agent on something
important, run through this checklist:

```
[ ] INSTRUCTIONS: Did I tell the AI what to do AND what not to do?
[ ] KNOWLEDGE:    Did I provide the background info it needs?
[ ] TOOLS:        Does it have access to the files/resources it needs?
[ ] MEMORY:       Does it know relevant things from past sessions?
[ ] STATE:        Does it know where we are in the process?
[ ] QUERY:        Is my actual question clear and specific?
```

You won't always need all six. But knowing they exist
helps you figure out what's missing when things go wrong.

---

## Key Takeaways

1. **Context engineering is giving your AI the right information
   at the right time.** It's the difference between a lost actor
   and a prepared performer.

2. **Most AI failures are context failures**, not intelligence
   failures. The AI didn't have what it needed.

3. **Six components of context**: Instructions, Knowledge, Tools,
   Memory, State, and Queries. Each one makes the AI more effective.

4. **The context window is a whiteboard** with limited space.
   Be strategic about what goes on it.

5. **Context engineering is bigger than prompt engineering.**
   Prompts are one message. Context is the entire environment.

6. **AGENTS.md files are your most powerful tool.** They set up
   context before the conversation even begins.

7. **When in doubt, add more context.** A specific, well-informed
   AI almost always outperforms a generic one.

---

*Next up: [Agent Design Patterns](agent-design-patterns.md) -- named patterns you can use to get more out of any AI agent.*
