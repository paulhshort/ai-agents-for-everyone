# Lab 03: Your AI Masterpiece

> **Day:** 3
> **Time:** 105 minutes (1 hour 45 minutes)
> **Difficulty:** Intermediate
> **What you need:** Codex CLI, a partner, creativity

---

## Your Mission

This is it -- the big one. You and a partner will plan, build, and present a
project that showcases what you've learned about AI agents. You have almost two
hours and the full power of Codex at your fingertips.

---

## Schedule

| Time | Phase | What You're Doing |
|------|-------|-------------------|
| 0:00 - 0:15 | Planning | Choose a project, fill out the planning template, get instructor approval |
| 0:15 - 1:20 | Building | Build your project with Codex |
| 1:20 - 1:30 | Polish | Clean up, prepare your demo |
| 1:30 - 1:45 | Presentations | 2-3 minute demos to the class |

---

## Step 1: Find a Partner (2 min)

Pair up with someone. Ideally, partner with someone whose strengths complement
yours -- if you're creative, find someone detail-oriented, and vice versa.

One person drives (types), the other navigates (decides what to prompt).
Switch halfway through.

---

## Step 2: Choose Your Project (10 min)

Pick ONE from the list below, or pitch your own (Option 7). Read the
description and decide together.

### Option 1: Study Guide Generator
**Difficulty:** Medium | **Best for:** Students who want something useful

Build a tool where you enter a topic and Codex creates a complete study guide
with key concepts, definitions, practice questions, and a summary.

**What you'll build:**
- A study guide markdown file on a topic you choose
- Organized sections: Overview, Key Terms, Detailed Notes, Practice Questions
- Bonus: Create an HTML version with collapsible sections

**Suggested starting prompt:**
```
Create a comprehensive study guide about [YOUR TOPIC] as a markdown file
called study-guide.md. Include these sections: Overview (2-3 paragraphs),
Key Terms (at least 10 with definitions), Detailed Notes (organized by
subtopic), Practice Questions (5 multiple choice, 3 short answer), and
a Quick Reference Summary at the end.
```

---

### Option 2: Personal Dashboard Webpage
**Difficulty:** Medium-Hard | **Best for:** Students who like design

Build a personal dashboard webpage that shows useful information in a clean
layout.

**What you'll build:**
- An HTML/CSS/JS dashboard with multiple "widgets"
- Must include at least 4 of: clock, to-do list, motivational quote, countdown
  to an event, quick links, notes section, weather placeholder, fun fact
- A color scheme that matches your personality

**Suggested starting prompt:**
```
Create a personal dashboard webpage called dashboard.html. It should have a
grid layout with these widgets: a live digital clock, a to-do list where I
can add and remove items, a section showing a random motivational quote (have
at least 10 quotes that rotate), and a countdown timer to [YOUR EVENT/DATE].
Use a [YOUR COLOR] color scheme with a modern card-based design.
```

---

### Option 3: Data Story
**Difficulty:** Hard | **Best for:** Students who like numbers and discovery

Find or create a dataset, then use Codex to analyze it and produce a visual
report.

**What you'll build:**
- A CSV file with interesting data (Codex can help you create one)
- An analysis report in markdown
- Bonus: An HTML page with charts (using Chart.js or simple CSS bar charts)

**Suggested starting prompt:**
```
Create a CSV file called class-survey.csv with fake survey data from 30
students. Columns: Name, Age, Favorite_Subject, Hours_of_Sleep,
Hours_on_Phone, Favorite_Music_Genre, Has_Pet. Generate realistic varied
data.
```

Then:
```
Analyze class-survey.csv and create a report called analysis.md. Include:
the most popular subject, average sleep hours, correlation between phone
use and sleep, most popular music genre, percentage of pet owners, and
any other interesting patterns you find.
```

---

### Option 4: Creative Writing Collaborator
**Difficulty:** Medium | **Best for:** Students who love stories

Outline a short story and work with Codex chapter by chapter to write it.

**What you'll build:**
- A story outline in markdown
- At least 3 short chapters (each 200-400 words)
- A title page and table of contents
- Bonus: An HTML "book" with styled pages

**Suggested starting prompt:**
```
I want to write a short story about [YOUR IDEA]. First, create an outline
called outline.md with: a one-paragraph premise, 3-5 chapter summaries,
a list of main characters with brief descriptions, and the setting.
```

Then work chapter by chapter:
```
Write Chapter 1 based on the outline. Save it as chapter-01.md. The tone
should be [funny/mysterious/adventurous/etc]. Keep it around 300 words.
Make the ending of the chapter a cliffhanger.
```

---

### Option 5: "Fix My Life" Automation
**Difficulty:** Medium-Hard | **Best for:** Students who like practical solutions

Identify a tedious task you do regularly and automate part of it with Codex.

**Ideas:**
- A homework tracker that generates a weekly schedule
- A birthday reminder system (CSV of birthdays, generates reminders)
- A file naming system that renames messy downloads
- A daily journal template generator
- A practice schedule for sports or music

**Suggested starting prompt:**
```
I want to automate [YOUR TEDIOUS TASK]. Here's what I currently do manually:
[DESCRIBE THE STEPS]. Create a solution that makes this easier. It could be
a script, a template, an HTML tool, or a set of organized files.
```

---

### Option 6: Teach-Back Lesson
**Difficulty:** Medium | **Best for:** Students who like explaining things

Create a mini-lesson about one AI concept and present it to the class.

**What you'll build:**
- A lesson plan in markdown
- Visual aids as an HTML presentation or document
- An interactive element (quiz, activity, or demo)

**Pick ONE concept:**
- What are tokens and why do they matter?
- How does prompt engineering work?
- What's the difference between a chatbot and an agent?
- What is a sandbox and why is AI safety important?
- How does MCP extend an AI agent?

**Suggested starting prompt:**
```
Create teaching materials about [CONCEPT] for high school students. Include:
a lesson plan (5-minute talk outline), an HTML slide deck with 5-7 slides
explaining the concept with examples and analogies, and a 3-question quiz
to check understanding. Make it engaging and visual.
```

---

### Option 7: Open Choice
**Difficulty:** Varies | **Best for:** Students with a specific idea

Have an idea that doesn't fit the options above? Pitch it to your instructor!

**Requirements for approval:**
- It must use Codex CLI
- It must produce at least 3 files
- You must be able to demo it in 2-3 minutes
- It should be something you're genuinely excited about

---

## Step 3: Fill Out the Project Plan (5 min)

Before you start building, fill out this plan together. Write it on paper or
create a file called `plan.md`:

```markdown
# Project Plan

## Team
- Partner 1: _______________
- Partner 2: _______________

## Project Choice
- Option #: ___
- Project title: _______________

## What We're Building
(1-2 sentences describing the final product)

## Files We'll Create
1. _______________
2. _______________
3. _______________
4. (more if needed)

## Prompts We'll Start With
(Write your first 2-3 prompts here BEFORE typing them into Codex)

1. _______________
2. _______________
3. _______________

## How We'll Know It's Done
(What does success look like? List 3-5 checkboxes)

- [ ] _______________
- [ ] _______________
- [ ] _______________
```

**Show your plan to the instructor before starting.** This takes 30 seconds
and makes sure you're on a good path.

---

## Step 4: Build! (65 min)

```bash
mkdir -p ~/masterpiece
cd ~/masterpiece
codex --sandbox workspace-write
```

**Tips for a great build session:**

- **Start with the hardest part.** Get the core working first, then polish.
- **Switch driver/navigator every 20 minutes.** Both partners should prompt.
- **Save your best prompts.** You might want to share them in your
  presentation.
- **If stuck for more than 5 minutes,** ask your instructor. Don't burn time.
- **Test as you go.** Open files, check results, iterate.
- **Use /plan for complex steps.** Review before executing.

**Halfway check (around 0:45):** Switch roles. The person who was typing
should now be deciding what to do, and vice versa.

---

## Step 5: Polish (10 min)

In the last 10 minutes:

1. **Test everything one final time.** Open all files, click all buttons.
2. **Create a README.md** for your project:
   ```
   Create a README.md for this project that explains what it is, who built
   it, and how to use it. Keep it short -- under 10 lines.
   ```
3. **Decide who presents what.** Both partners should speak during the demo.
4. **Practice your 2-minute explanation once.** Time it.

---

## Step 6: Present (2-3 min per team)

### Presentation Format

Each team gets 2-3 minutes. Here's the structure:

1. **What we built** (15 seconds)
   - "We built a [project name] that [what it does]."

2. **Live demo** (60-90 seconds)
   - Show it working. Open the files, click the buttons, show the output.

3. **Best prompt** (30 seconds)
   - Share the single best prompt you wrote -- the one that produced the most
     impressive result.

4. **What we learned** (30 seconds)
   - One thing that surprised you or that you'll remember.

### Audience Role
While other teams present, be a great audience:
- Watch the demo
- Think of one thing you like about their project
- Optional: snap or clap after each demo (keep the energy up!)

---

## Evaluation

There is no grade. Instead, your instructor is looking for:

| What Matters | Questions They're Asking |
|-------------|------------------------|
| **Engagement** | Did both partners contribute? Did you spend the time building? |
| **Creativity** | Did you make it your own? Did you try something interesting? |
| **Prompting skill** | Did your prompts show the WHAT-WHERE-HOW-VERIFY structure? |
| **Iteration** | Did you improve your project after the first result? |
| **Reflection** | Can you explain what worked, what didn't, and what you learned? |

Perfection is NOT the goal. Learning is. A broken project with a great story
about what you tried is worth more than a perfect project you copied from
someone else.

---

## After Presentations

Your instructor will wrap up the course. But before that -- take a second to
appreciate what you just did. Three days ago, most of you had never used an AI
agent. Now you've investigated a mystery project, built something from scratch,
and presented a working project you made with AI as your partner.

That's not nothing. That's the future.

---

*Congratulations on completing the course!*
