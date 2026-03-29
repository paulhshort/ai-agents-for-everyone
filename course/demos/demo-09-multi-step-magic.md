# Demo 09: The 30-Second Project

> **Concept:** Full-auto mode -- building a real, working app in under a minute
> **Time:** 10 minutes
> **Difficulty:** Intermediate
> **Wow Factor:** ★★★★★
> **Day:** 3, Morning

---

## What Students Will See

Codex in full-auto mode creates an entire working to-do list web application --
multiple files, HTML structure, CSS styling, JavaScript logic -- from a single
prompt. Students open it in a browser and use a working app that was built in
seconds.

---

## Preparation

```bash
mkdir -p ~/codex-demos/thirty-second-project
cd ~/codex-demos/thirty-second-project
# Confirm the folder is empty
ls
```

Have a web browser ready to open the result.

**IMPORTANT:** Do a dry run of this demo at least once. Full-auto mode runs
without asking for approval at each step, so make sure you're comfortable with
how it behaves. If anything unexpected happens during the dry run, use
`--sandbox workspace-write` instead (it still works, just asks for confirmations).

---

## Live Demo Script

### Step 1 -- Build Anticipation (1 min)

**SAY:**
> "Everything we've done so far, we've been guiding Codex step by step. Now
> I'm going to take the training wheels off. I'm going to give it ONE
> instruction, set it to full-auto, and watch it build an entire working
> application."

**SAY:**
> "I want everyone to watch the terminal. Don't blink."

### Step 2 -- Launch Full-Auto (1 min)

```bash
cd ~/codex-demos/thirty-second-project
codex --full-auto
```

**SAY:**
> "Full-auto means Codex will work on its own. It won't stop to ask me
> for permission at each step. It will just... build."

### Step 3 -- The One Prompt (1 min to type, 30-60 sec for Codex to build)

Type this prompt:

```
Create a simple to-do list web application with HTML, CSS, and JavaScript.
It should let you add items, check them off with a strikethrough effect,
and delete them with a red X button. Use a clean modern design with a
white card on a soft gray background, rounded corners, and subtle shadows.
Put everything in a single file called todo.html.
```

**NOW WATCH.** Codex will start creating the file, writing HTML, CSS, and
JavaScript. The terminal will scroll with the generated code.

**SAY (while it's working):**
> "Watch the terminal. It's writing HTML for the structure... CSS for the
> styling... JavaScript for the interactivity... all from one sentence."

### Step 4 -- The Reveal (2 min)

When Codex finishes:

```bash
ls
```

**SAY:** "One file. Let's open it."

```bash
open todo.html   # or start todo.html on Windows
```

**A fully styled to-do list application opens in the browser.**

**PAUSE. Let the reaction happen. Count to five.**

**Live-demo the app on the projector:**
1. Type "Learn about AI" and press Enter or click Add -- item appears
2. Type "Build something cool" and add it
3. Click on the first item -- it gets a strikethrough
4. Click the X on the second item -- it disappears

**SAY:**
> "That is a WORKING APPLICATION. I can add items. I can check them off. I
> can delete them. It has styled buttons, shadows, rounded corners. And it
> was built in... how long?"

Look at the class. Someone will say "thirty seconds" or "less than a minute."

**SAY:**
> "Less than a minute. From nothing to a working app. No coding. No
> tutorials. No copy-pasting from Stack Overflow. One sentence."

### Step 5 -- Look Under the Hood (2 min)

**SAY:**
> "But here's the thing -- the AI didn't do MAGIC. It wrote real code. Let's
> look at what it actually created."

Show the file briefly:

```bash
head -30 todo.html
```

**SAY:**
> "This is real HTML, real CSS, real JavaScript. The same code a developer
> would write. The AI knows programming languages because it learned from
> millions of examples. It's not magic -- it's pattern recognition at
> an incredible scale."

### Step 6 -- The Big Picture (2 min)

**SAY:**
> "Twenty years ago, building an app like this was a week-long project. Ten
> years ago, maybe a day with the right framework. Five years ago, a few
> hours with help from tutorials. Today... thirty seconds."

**SAY:**
> "This doesn't mean programmers are obsolete. Someone has to know what to
> BUILD. Someone has to check if it's GOOD. Someone has to MAINTAIN it.
> The AI is a power tool -- like a power drill versus a screwdriver. The
> carpenter still matters. They just work faster."

**ASK:**
> "What would YOU want to build in thirty seconds?"

Take 3-4 answers. Students will say things like games, social media,
homework trackers, music players. Affirm every answer.

---

## Optional Extension: Make It Better (2 min)

If you have time, show iteration:

```
Add a feature to the to-do app: when all items are checked off, show a
confetti animation and a message that says "All done! You're a champion!"
```

Refresh the browser and check off all items. Confetti explodes.

This shows that you can iterate and improve, not just create from scratch.

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| Full-auto creates multiple files instead of one | That's fine! Open index.html or whatever the main file is. Explain: "It decided to separate the code into multiple files -- that's actually good engineering practice." |
| The app doesn't work properly | "Even AI makes bugs! Let's debug it." Prompt: "The to-do app has a bug -- items don't get added when I click the button. Fix it." Show that iteration fixes things. |
| Full-auto does something unexpected | Ctrl+C to stop. Restart with `--sandbox workspace-write` for more control. "This is why full-auto is powerful but requires trust." |
| It takes longer than 60 seconds | "Okay, maybe it's a 90-second project. Still faster than I could do it manually!" |

---

## Key Takeaway to Repeat

**"This is why understanding AI agents matters for your future. The question
isn't whether AI will change how things are built. The question is whether
you'll be the one directing it."**

---

*Next up: Demo 10 -- Teaching Your Agent*
