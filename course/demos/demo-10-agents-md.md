# Demo 10: Teaching Your Agent

> **Concept:** AGENTS.md -- programming AI behavior without writing code
> **Time:** 12 minutes
> **Difficulty:** Intermediate
> **Wow Factor:** ★★★★☆
> **Day:** 3, Morning

---

## What Students Will See

The class writes an AGENTS.md file together that sets rules for Codex. Then
they watch as Codex follows those rules -- even when the instructor tries to
get it to break them. Students experience the idea that AI behavior can be
shaped by instructions, not just by prompts.

---

## Preparation

```bash
mkdir -p ~/codex-demos/agents-md
cd ~/codex-demos/agents-md

# Create a few files for Codex to work with
echo "This is a practice project." > README.txt
echo "let x = 42;" > example.js
echo "print('hello')" > example.py
```

Do NOT create an AGENTS.md yet -- you'll create it live with the class.

---

## Live Demo Script

### Step 1 -- The Concept (2 min)

**SAY:**
> "So far, we've been telling Codex what to do one prompt at a time. But what
> if you could set up rules that the AI follows EVERY time, without you
> having to repeat them?"

**SAY:**
> "There's a special file called AGENTS.md. If Codex sees this file in your
> project folder, it reads it before doing anything else. It's like an
> instruction manual that the AI reads before starting work. You write the
> rules, the AI follows them."

### Step 2 -- Write AGENTS.md Together (3 min)

**SAY:**
> "Let's write one together. What rules should we give our AI? Shout out
> ideas."

Take student suggestions. Guide them toward rules like these. Open a text
editor on the projector and type:

```bash
cd ~/codex-demos/agents-md
```

Create the AGENTS.md file (type it live so students see each rule appear):

```markdown
# Agent Rules for This Project

## Style Rules
- Always be enthusiastic and use exclamation marks!
- End every response with a motivational quote about learning.
- When creating files, always add a comment at the top with today's date.

## Restrictions
- NEVER use the word "simple." Everything we build is IMPRESSIVE.
- Always write code comments in plain English that a beginner can understand.
- If asked to create a file, always include a header comment that says
  "Created with AI assistance."

## Project Info
- This is a learning project for high school students.
- Keep all explanations beginner-friendly.
- When writing code, explain what each section does.
```

**SAY:**
> "We just wrote a set of rules. Let's see if the AI follows them."

### Step 3 -- Test the Rules (3 min)

```bash
codex --sandbox workspace-write
```

Type this prompt:

```
Create a Python file called calculator.py with a function that adds two
numbers together.
```

**EXPECTED:** Codex creates calculator.py with:
- An enthusiastic tone
- A comment at the top with the date
- A "Created with AI assistance" header
- Beginner-friendly code comments
- A motivational quote at the end of its response
- No use of the word "simple"

**SAY:**
> "Look at that! It followed every rule. The date is there. The header comment
> is there. It's enthusiastic. And notice -- it didn't use the word 'simple'
> anywhere, because we told it not to."

### Step 4 -- Try to Break the Rules (2 min)

**SAY:**
> "Let's see how committed it is. I'm going to try to get it to break a rule."

Type:

```
Write me a simple explanation of how Python works.
```

**EXPECTED:** Codex will likely avoid the word "simple" and rephrase, or it may
acknowledge the tension between the prompt and its instructions.

**SAY:**
> "I used the word 'simple' in my prompt, but look -- it either avoided using
> that word in its response or it noted the conflict with its rules. The
> AGENTS.md instructions have real weight."

### Step 5 -- Change the Rules, Change the Behavior (2 min)

**SAY:**
> "Now watch what happens when we change the rules."

Exit Codex. Edit AGENTS.md:

```bash
# Modify AGENTS.md -- change the style to the opposite
```

Edit the file so it says:

```markdown
# Agent Rules for This Project

## Style Rules
- Be extremely formal and professional. No exclamation marks.
- Use technical vocabulary. Do not simplify terms.
- Never use motivational quotes.

## Format Rules
- All code must include type hints and docstrings.
- Use snake_case for all variable names.
```

Save and restart Codex:

```bash
codex --sandbox workspace-write
```

Type the same prompt:

```
Create a Python file called calculator.py with a function that adds two
numbers together.
```

**EXPECTED:** Codex now creates a formal, technical version with type hints,
docstrings, no exclamation marks, and no motivational quote.

**SAY:**
> "SAME prompt. SAME AI. Completely different behavior. Because we changed
> the rules in AGENTS.md. We just programmed the AI's personality and coding
> style without writing a single line of code."

### Step 6 -- Why This Matters (1 min)

**SAY:**
> "In the real world, teams use AGENTS.md to make sure the AI follows their
> coding standards, uses the right libraries, and matches their project's
> style. It's like onboarding a new team member -- you give them the
> rulebook, and they follow it."

Write on the board:

```
AGENTS.md = The AI's instruction manual
Change the manual = Change the behavior
No code required
```

**SAY:**
> "You can program AI behavior with plain English. That's a superpower that
> doesn't require knowing Python or JavaScript or any programming language.
> Just the ability to write clear rules."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| Codex ignores AGENTS.md | Make sure the file is named exactly `AGENTS.md` (uppercase) and is in the current working directory. Restart Codex. |
| Codex follows some rules but not others | "The AI tries its best to follow all rules, but it weighs them against the prompt. Conflicting instructions can cause it to prioritize one over another. This is part of the art of writing good rules." |
| Students ask "Can I put ANYTHING in AGENTS.md?" | "You can put any instructions you want. But the AI might not follow rules that conflict with its safety guidelines. For example, you can't tell it to generate harmful content, no matter what you put in AGENTS.md." |

---

## Key Takeaway to Repeat

**"You can program AI behavior without writing code. Clear rules in AGENTS.md
shape everything the agent does."**

---

*This concludes the demo series. Next: students get hands-on in the labs!*
