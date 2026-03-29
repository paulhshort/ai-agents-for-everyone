# Lab 01: Mystery Folder Detective

> **Day:** 1
> **Time:** 60 minutes
> **Difficulty:** Beginner
> **What you need:** Codex CLI installed, the mystery project folder

---

## Your Mission

You've been handed a mystery project folder. You have no idea what it is, what
it does, or who made it. Your job: use Codex as your AI detective partner to
investigate every file, write a detective report, find the hidden bug, fix it,
and discover the secret Easter egg.

---

## Setup

Your instructor will give you the mystery folder. It should be at:

```
~/mystery-project/
```

If you don't have it, ask your instructor to run the setup script.

Confirm you have the files:

```bash
cd ~/mystery-project
ls
```

You should see files like: `index.html`, `style.css`, `app.js`, `data.json`,
`README.md`, `config.yaml`, `images/`, and a few others.

**DO NOT open any files in a text editor yet.** Let Codex do the detective work.

---

## Task 1: Explore the Scene (15 minutes)

### Step 1 -- Launch Codex in read-only mode

```bash
cd ~/mystery-project
codex --sandbox read-only
```

### Step 2 -- Investigate

Use these prompts (or come up with your own!):

```
What files are in this project? List all of them including any inside folders.
```

```
Read every file and give me a one-sentence summary of what each file does.
```

```
Based on all the files, what is this project? What does it do? Who might
have built it?
```

### Step 3 -- Go deeper

Try these follow-up questions:

```
What technology stack does this project use? (What languages, frameworks,
or libraries?)
```

```
Is there anything unusual or suspicious about any of the files?
```

```
How are the files connected? Which file loads or references which other file?
```

**Checkpoint:** You should now have a good idea of what this project is.

---

## Task 2: Write Your Detective Report (15 minutes)

Now write your findings. Stay in Codex (switch to workspace-write mode):

```bash
codex --sandbox workspace-write
```

Ask Codex to help you write the report:

```
Create a file called detective-report.md with a report about this mystery
project. Include:
- Project name and purpose
- List of all files and what each one does
- The technology stack (languages and tools used)
- How the files connect to each other
- Your assessment: is this project well-built or does it have problems?

Write it in a style like a detective case file.
```

Open your report and review it. Does it match what you found? Edit it if
anything is wrong.

**Checkpoint:** You have a detective-report.md file with your analysis.

---

## Task 3: Find the Bug (15 minutes)

There is a deliberate bug hidden in one of the project files. Something is
broken, and you need to find it.

### Hints (use only if stuck):

**Hint 1 (mild):**
```
Check all the files for any errors, typos, or broken references. Something
in this project doesn't work correctly.
```

**Hint 2 (medium):**
```
Look at how the files reference each other. Is there a filename mismatch
or a broken link somewhere?
```

**Hint 3 (strong):**
```
Look at the CSS file referenced in index.html. Compare the filename in the
HTML to the actual CSS file on disk. Do they match?
```

**The Bug:** The `index.html` file links to `styles.css` (with an "s"), but
the actual file is named `style.css` (without the "s"). This means the webpage
loads without any styling.

When you find it, ask Codex:

```
I found a bug! The HTML file references "styles.css" but the actual file is
called "style.css". Fix this by updating the reference in index.html.
```

**Checkpoint:** The bug is fixed. If you open index.html in a browser, it
should now load with proper styling.

---

## Task 4: Fix It! (15 minutes)

Now that you've found the bug, let's make it work properly.

```
Open index.html in a browser and tell me if there are any other issues you
can spot.
```

Try running the project:

```bash
open index.html   # or start index.html on Windows
```

Does it look right now? If there are more issues, use Codex to identify and
fix them.

**Challenge prompt:**

```
Review the entire project for code quality. Are there any other issues,
missing features, or improvements you'd recommend? List them in order of
priority.
```

**Checkpoint:** The project works correctly in a browser.

---

## Bonus: Find the Easter Egg

There's a secret message hidden somewhere in the project files. It's in a
code comment that won't affect how the project runs, but it's there for you
to find.

**Hint:**
```
Search all files for any hidden comments, secret messages, or unusual text
that seems like it was left there on purpose.
```

**The Easter Egg:** In `app.js`, there's a comment that says:
`// EASTER EGG: If you found this, tell your instructor the secret word is "PINEAPPLE"`

If you find it, go tell your instructor the secret word!

---

## When You're Done

1. Make sure your `detective-report.md` is complete.
2. Make sure the bug is fixed.
3. Raise your hand and share one thing that surprised you about using Codex
   as an investigation tool.

---

## Reflection Questions

Think about these (you don't have to write answers, but your instructor might
ask):

1. What was easier about using Codex versus opening each file yourself?
2. Did Codex ever get something wrong? How did you know?
3. What would happen if you tried this same investigation with ChatGPT instead
   of Codex? What would be different?
4. How did switching from read-only to workspace-write feel? Did you trust the
   AI to make changes?

---

## Mystery Project File Structure

For reference, here is what should be in your mystery folder:

```
mystery-project/
  index.html          The main webpage (has the bug)
  style.css           Stylesheet (note: HTML references "styles.css" -- the bug)
  app.js              JavaScript logic (contains the Easter egg)
  data.json           Sample data for the project
  README.md           Project documentation
  config.yaml         Configuration file
  images/
    logo.png          A placeholder image reference
  notes.txt           Developer notes
```

---

*Great detective work! In Lab 02, you'll build something of your own.*
