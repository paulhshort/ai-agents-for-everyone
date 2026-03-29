# Demo 04: Prompt Showdown

> **Concept:** Vague prompts get vague results. Specificity wins every time.
> **Time:** 12 minutes
> **Difficulty:** Beginner
> **Wow Factor:** ★★★★☆
> **Day:** 1, After Break

---

## What Students Will See

The exact same task given to Codex twice -- once with a lazy, vague prompt and
once with a detailed, specific prompt. The results will be dramatically
different. Students vote on which is better, then learn a formula for writing
good prompts.

---

## Preparation

Create two separate folders so the results don't interfere with each other:

```bash
mkdir -p ~/codex-demos/prompt-showdown/bad-prompt
mkdir -p ~/codex-demos/prompt-showdown/good-prompt
```

Have a web browser ready to open HTML files side by side.

---

## Live Demo Script

### Step 1 -- Set Up the Challenge (1 min)

**SAY:**
> "We're going to run an experiment. I'm going to ask Codex to do the SAME
> task twice, but I'll ask in two very different ways. You tell me which
> result is better."

### Step 2 -- The Bad Prompt (3 min)

```bash
cd ~/codex-demos/prompt-showdown/bad-prompt
codex --sandbox workspace-write
```

Type this prompt:

```
make a website
```

Wait for Codex to create something. It will probably create a generic
index.html with minimal content and styling. Exit Codex (Ctrl+C or type
"thanks, that's all").

Open the result:

```bash
open index.html   # or start index.html on Windows
```

**SAY:**
> "Okay, we got... a website. It works. But it's pretty generic, right? It
> doesn't know what it's about, who it's for, or what we wanted."

**Leave the browser window open. Minimize it.**

### Step 3 -- The Good Prompt (3 min)

```bash
cd ~/codex-demos/prompt-showdown/good-prompt
codex --sandbox workspace-write
```

Type this prompt:

```
Create a simple HTML page called my-bio.html with my name "Alex" as the
heading, a paragraph about liking basketball and coding, and a blue color
scheme. The background should be light blue (#e6f2ff) and text should be dark
navy (#1a1a4e). Add a section with three of my favorite things as a bulleted
list. Make the page look clean and modern with good spacing.
```

Wait for Codex to create it. Open the result:

```bash
open my-bio.html   # or start my-bio.html on Windows
```

### Step 4 -- Side by Side (2 min)

Arrange both browser windows side by side on the projector.

**SAY:**
> "Same AI. Same tool. Same amount of time. Completely different results.
> Why?"

**PAUSE. Let students answer.** They'll say "because the second one was more
specific" or "you told it what you wanted."

**SAY:**
> "Exactly. The AI isn't a mind reader. It can only work with what you give
> it. Garbage in, garbage out. Specifics in, great results out."

### Step 5 -- The WHAT-WHERE-HOW-VERIFY Formula (3 min)

**SAY:**
> "Here's a formula you can use every time you write a prompt."

Write on the board or show a slide:

```
W - WHAT   do you want?     "Create an HTML bio page"
W - WHERE  should it go?    "Called my-bio.html"
H - HOW    should it look?  "Blue color scheme, light background, navy text"
V - VERIFY what success is  "Include my name, hobbies, a bulleted list"
```

**SAY:**
> "WHAT-WHERE-HOW-VERIFY. Let's break down our good prompt."

Walk through each part:
- **WHAT:** "Create a simple HTML page" -- clear task
- **WHERE:** "called my-bio.html" -- specific filename
- **HOW:** "blue color scheme, light blue background, dark navy text" -- exact
  colors, specific style
- **VERIFY:** "name as heading, paragraph about basketball and coding, three
  favorites as bullets" -- you can check each item

**SAY:**
> "Now look at the bad prompt: 'make a website.' Where's the WHAT? Vague.
> WHERE? Not specified. HOW? Not mentioned. VERIFY? Impossible -- what would
> you even check?"

### Step 6 -- Quick Class Exercise (Optional, 2 min)

If time permits:

**SAY:**
> "Give me a WHAT-WHERE-HOW-VERIFY prompt for this task: you want Codex to
> create a study schedule for finals week."

Take 1-2 student attempts. Help them improve each one live.

Example good answer:
> "Create a file called finals-schedule.md with a day-by-day study schedule
> for next week. I have exams in Math (Tuesday), English (Wednesday), and
> Biology (Friday). Each day should have 3 study blocks of 45 minutes with
> 15-minute breaks. Format it as a markdown table."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| The "bad" prompt actually produces something decent | This happens sometimes! Say: "GPT-5.4 is really good, so even a vague prompt gets something okay. But notice it had to GUESS at everything. With a specific prompt, you get exactly what you want the FIRST time -- no guessing, no redoing." |
| Both results look similar | Focus on the CONTENT, not the styling. The specific prompt has the right name, the right hobbies, the right colors. The vague one is generic. |
| Students say "I'd just keep asking until it's right" | "You COULD iterate, but that costs more tokens and more time. Getting it right the first time is the skill. Professionals call this 'prompt engineering.'" |

---

## Key Takeaway to Repeat

**"WHAT-WHERE-HOW-VERIFY. Specific prompts get specific results."**

Students will use this formula in every lab for the rest of the course.

---

*Next up: Demo 05 -- The Sandbox*
