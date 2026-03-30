# Day 2: "Becoming an AI Power User" -- Prompting, Safety, and Real Projects

**Duration:** 9:00 AM - 3:00 PM (6 hours with breaks)
**Goal:** Students learn to prompt effectively, understand safety and permissions deeply, manage context, build a real project, and see the wider AI ecosystem.

---

## 9:00 - 9:15 | Day 1 Recap + Q&A (15 min)

### Warm-Up: "Two Truths and a Lie" (10 min)
Put three statements on the projector. Students vote on which is the lie.

**Round 1:**
- A) GPT-5.4 processes text as tokens, not words. (TRUE)
- B) An AI agent can take actions on your computer. (TRUE)
- C) Codex runs entirely on your computer with no internet connection. (LIE -- it calls the OpenAI API)

**Round 2:**
- A) GPT-5.4-mini gives faster but sometimes less detailed answers. (TRUE)
- B) The context window means the AI remembers everything you've ever said to it. (LIE -- it only remembers the current session, and even then it has a limit)
- C) Tokens can be parts of words, whole words, or even punctuation. (TRUE)

**Round 3:**
- A) Codex asks for your permission before creating files. (TRUE)
- B) AI predicts the next token based on all the tokens before it. (TRUE)
- C) AI understands the meaning of what it writes the same way humans do. (LIE -- it predicts patterns, it doesn't "understand" in the human sense)

### Q&A from Homework (5 min)
**Say:** "Who tried Codex at home last night? What happened?"

Let 2-3 students share. Celebrate creative attempts. If anyone hit errors, briefly troubleshoot or note them for a break.

---

## 9:15 - 10:15 | Module 4: Talking to Your Agent Effectively (60 min)

### The Problem with Vague Prompts (10 min)
**Say:** "Yesterday you all talked to Codex and it worked. But here's the thing -- there's a massive difference between a prompt that sort of works and a prompt that nails it. Let me show you."

### LIVE DEMO: Vague vs. Specific (15 min)

**Vague prompt:**
```
Make me a website
```

Show the result. It'll be generic, probably missing key details.

**Specific prompt:**
```
Create an HTML file called portfolio.html with a personal portfolio page. Use a dark theme
with a navy background and white text. Include sections for: an introduction with my name
"Alex" and a one-sentence bio, a list of 3 skills, and a contact section with a placeholder
email. Use modern CSS in a style tag. Make it look clean and professional.
```

Show the result. Night and day difference.

**Say:** "Same tool. Same AI. Completely different results. The only difference? How you asked."

### The WHAT-WHERE-HOW-VERIFY Formula (20 min)
**Display:** `guide/ultimate-guide.md` (Section 5 -- prompting)

Write on the whiteboard:

```
WHAT   -- What do you want it to do?
WHERE  -- Where should it do it? (which files, which folder)
HOW    -- How should it do it? (format, style, constraints)
VERIFY -- How will you know it worked?
```

**Walk through examples:**

**Bad prompt:** "Fix the bug"
**Good prompt:** "In the file calculator.js, there's a bug where dividing by zero crashes the program. Add a check before the division on line 15 that returns an error message instead of crashing. Test it by running the file with the input 10 / 0."

Break it down:
- WHAT: Fix the divide-by-zero bug
- WHERE: calculator.js, line 15
- HOW: Add a check, return error message
- VERIFY: Test with 10 / 0

**Another example for non-coders:**

**Bad prompt:** "Organize my files"
**Good prompt:** "Look at all the files in the Downloads folder. Create subfolders called Images, Documents, and Videos. Move each file into the appropriate subfolder based on its file extension. Create a log.txt file listing every file that was moved and where it went."

### Activity: "Prompt Improvement Workshop" (15 min)
**Distribute or display these bad prompts. Students rewrite them using the formula.**

1. "Make a quiz" -->
2. "Write a story" -->
3. "Help me study" -->
4. "Clean up this code" -->
5. "Make it look better" -->

Have students share their improved versions. Vote on the best rewrite for each.

**Instructor note:** There's no single right answer. The point is specificity. Celebrate any version that adds WHAT, WHERE, HOW, and VERIFY details.

**If running behind:** Cut prompts 4-5 and just do the first three.

---

## 10:15 - 10:30 | Break (15 min)

**Distribute the Prompt Cheatsheet handout** (`handouts/prompt-cheatsheet.md`) during the break so students can reference it for the rest of the day.

---

## 10:30 - 11:30 | Module 5: Safety, Permissions, and Being Smart (60 min)

### Why Safety Matters (10 min)
**Display:** `guide/foundations/ai-safety-basics.md`

**Say:** "Yesterday, Codex created a file on your computer. That's powerful. But what if it deleted a file? What if it read something private? What if it ran a command that broke something? This is why safety isn't boring -- it's the thing that lets you use powerful tools without wrecking things."

### Sandbox Modes -- Live Demo (20 min)
**Say:** "Codex has three safety levels. Think of them like locks on a door."

**Display the three modes on the whiteboard:**

```
read-only           -- Can look at files but cannot change anything
workspace-write     -- Can change files in the project folder only
danger-full-access  -- Can do anything (use with extreme caution)
```

**LIVE DEMO 1: read-only mode**

Launch Codex. Ask it to create a file:
```
Create a file called test.txt that says "hello"
```

**Say:** "Watch -- it CAN'T do it. It's blocked. This is read-only mode. It can look at your files, answer questions about them, but it cannot touch anything. This is the safest mode."

Show the error/refusal on screen.

**LIVE DEMO 2: workspace-write mode**

Switch to workspace-write. Run the same prompt. This time it works.

**Say:** "Now it can create files, but only in this folder. It can't go wandering around your whole computer. It's contained."

**LIVE DEMO 3: Mention danger-full-access**

**Say:** "There's a third mode called danger-full-access. The name literally has 'danger' in it. It can do ANYTHING on your computer. Install software, delete files, change settings. We're not going to use this in class, and you should almost never use it. It exists for advanced users who know exactly what they're doing."

### Approval Modes (10 min)

**Say:** "On top of the sandbox, there are approval settings that control when Codex asks you before acting."

Write on whiteboard:
```
untrusted    -- Asks before EVERYTHING (safest)
on-request   -- Asks before risky stuff
never        -- Never asks (you review after)
--full-auto  -- Does everything automatically
--yolo       -- Full auto with network access (DO NOT USE casually)
```

**Say:** "For this class, we're staying on 'on-request' or 'untrusted'. The point of approval is that YOU are always in control. The AI proposes, you decide."

**Distribute the Safety Card handout** (`handouts/safety-card.md`).

### Discussion: Academic Honesty (10 min)
**Say:** "Let's talk about the elephant in the room. Can AI do your homework? Yes. Should it? Let's discuss."

**Facilitate discussion. Key points to land:**
- Using AI to LEARN is good. "Explain this concept to me" = great.
- Using AI to THINK FOR YOU is a problem. "Write my essay" = you learned nothing.
- The analogy: "A calculator doesn't make you bad at math. But if you use a calculator on every problem and never learn the concepts, you'll fail the test that doesn't allow calculators."
- "The goal is to be the person who uses AI as a power tool, not the person who's replaced by it."
- School policies vary. Know your school's rules. When in doubt, ask your teacher.

**Say:** "Here's my rule: if you can explain what the AI did and why, you're using it as a tool. If you can't explain it, you just let it do your work."

### Activity: "Spot the Danger" (10 min)
Show scenarios on the projector. Students call out the safety issue.

1. "I gave Codex access to danger-full-access mode and asked it to clean up my desktop."
   - **Issue:** danger-full-access + broad command = it might delete things you need

2. "I asked Codex to read my .env file and tell me what API keys I have."
   - **Issue:** API keys are secrets. Now they're in the AI's context and could be logged.

3. "I copied my friend's project into my folder and asked Codex to rewrite it so it looks different."
   - **Issue:** This is plagiarism, regardless of whether AI rewrites it.

4. "I asked Codex to run `rm -rf /` to clean up old files."
   - **Issue:** This command deletes EVERYTHING. Codex should refuse, but never try this.

5. "I shared my Codex session output (with my home directory paths visible) on social media."
   - **Issue:** File paths can reveal your username and directory structure.

---

## 11:30 - 12:00 | Module 6: Context and Conversation Management (30 min)

### The Whiteboard Analogy (10 min)
**Actually use a physical whiteboard for this.** Start writing on it.

**Say:** "Everything you say to Codex goes onto its 'whiteboard.' Your prompts, its responses, file contents it reads -- all of it takes up space."

Keep writing. Fill the whiteboard.

**Say:** "What happens when the whiteboard is full?" (Students: "You run out of space")

**Say:** "Exactly. That's the context window. When it fills up, old information starts getting dropped. The AI literally forgets your early conversation."

Erase part of the whiteboard to demonstrate.

### LIVE DEMO: /status and /compact (10 min)

In Codex, after a few prompts, type:
```
/status
```

**Say:** "See that? It shows you how much of the context window you've used. Think of it like a battery meter for the AI's memory."

Then type:
```
/compact
```

**Say:** "This is like erasing the whiteboard but keeping the key notes. Codex summarizes the conversation so far and frees up space. The details are gone, but the important points remain."

Show the /status again to demonstrate the freed space.

### The Fresh Context Pattern (10 min)
**Say:** "Here's a pro tip. Sometimes, instead of trying to keep a long conversation going, it's better to start fresh. Close Codex, open it again, and give it a focused new prompt with all the context it needs."

Write on the whiteboard:
```
Long conversation = accumulated confusion
Fresh start + specific prompt = clean results
```

**Say:** "If Codex starts giving you weird answers or seems confused, it's probably because the context is cluttered. Start fresh."

**Mention the /clear command:** "If you want to clear the context without restarting, you can type /clear."

**If running behind:** Cut the Fresh Context Pattern section. Students will learn it naturally through practice.

---

## 12:00 - 12:45 | Lunch (45 min)

**Say:** "After lunch, you're building something. Think about what you want to make while you eat."

---

## 12:45 - 1:45 | Lab 2: "Build Something" (60 min)

### Setup (5 min)
**Display:** `course/labs/lab-02-build.md`

**Say:** "You have three options. Pick the one that sounds most interesting to you. If you have your own idea, run it by me and we'll make it work."

### Project Options

**Option A: Personal Bio Page**
Build a personal website page using HTML and CSS. Students tell Codex about themselves, their interests, and how they want it to look. Codex creates the HTML file. They open it in a browser and see their page.

**Good starting prompt for Option A:**
```
Create an HTML file called about-me.html. Make a personal bio page for a student named
[name]. Include: a header with my name, a section about my hobbies ([list hobbies]),
a favorite quote section, and a footer. Use a color scheme of [their choice]. Make it
responsive and modern-looking with CSS in a style tag.
```

**Option B: File Organizer**
Give students a messy folder (pre-prepared, with 20+ files of mixed types). They use Codex to analyze it and organize it into subfolders with a report.

**Good starting prompt for Option B:**
```
Look at all the files in this folder. Create subfolders based on file types (images,
documents, code, data). Move each file to the right subfolder. Then create a report
called organization-report.md that lists what was moved where.
```

**Option C: Topic Quiz Generator**
Students pick any topic they're interested in (a TV show, a sport, a school subject) and have Codex create an interactive quiz about it.

**Good starting prompt for Option C:**
```
Create an HTML file called quiz.html that's an interactive quiz about [topic]. Include
10 multiple-choice questions with 4 options each. Use JavaScript to track the score
and show results at the end. Make it look fun with colors and emoji. Include both easy
and hard questions.
```

### During the Lab (50 min)
**Circulate constantly.** This is the most valuable instruction time.

**Common issues:**
- Student's prompt is too vague --> Help them apply the WHAT-WHERE-HOW-VERIFY formula
- Codex produces something they don't like --> "Ask it to change it! That's the point."
- Student finishes early --> Stretch goals: add features, make it look better, combine options
- Student is stuck choosing --> "Just pick one. You can always switch. Action beats deliberation."

**Encourage iteration:**
**Say to the class at the 15-minute mark:** "Remember, this is a CONVERSATION. If the first result isn't perfect, tell Codex what to fix. 'Make the background darker.' 'Add another question.' 'The button doesn't work -- fix it.' Iterate!"

### Plan-Validate-Execute Pattern (introduce during lab, not as a separate lecture)
When helping individual students, teach the pattern:

1. **Plan:** "First, ask Codex what it's GOING to do before it does it."
   ```
   Before making any changes, tell me your plan for organizing these files.
   ```
2. **Validate:** Read the plan. Does it make sense? Anything you'd change?
3. **Execute:** "OK, go ahead with that plan."

**Say:** "This is how professionals use AI. Plan first, then execute. Never let the AI just charge ahead without reviewing the plan."

---

## 1:45 - 2:00 | Break (15 min)

---

## 2:00 - 2:45 | Module 7: The AI Ecosystem -- Beyond Codex (45 min)

### The Bigger Picture (15 min)
**Say:** "Codex is one tool in a growing world of AI tools. Let me show you the landscape."

**Brief tour (2-3 minutes each, just show and describe):**

- **Claude Code** -- "Like Codex but powered by a different AI company called Anthropic. Similar concept, different brain."
- **GitHub Copilot** -- "Built into code editors. It suggests code as you type, like autocomplete on steroids."
- **Cursor** -- "A code editor with AI built in from the ground up. You chat with it about your code."
- **v0 and Bolt** -- "You describe a website and they generate the whole thing. Like Option A from the lab but with a visual interface."

**Say:** "The tool you learn doesn't matter as much as the SKILL you learn. Prompting well, understanding agents, knowing about safety -- those skills transfer to every AI tool."

### MCP: Connecting AI to the World (15 min)
**Say:** "Here's where it gets really interesting. MCP -- Model Context Protocol -- lets Codex connect to other tools. Imagine your AI agent being able to search the web, check your calendar, or query a database."

**LIVE DEMO: Adding an MCP Server**
Show the `/mcp` command. If you have a demo MCP server set up (even a simple one), connect it and show Codex gaining a new ability.

```
/mcp
```

**Say:** "See? Codex just got new powers. Before, it could only work with files. Now it can [whatever the MCP server does]. This is like giving your AI agent new tools for its toolbelt."

**Instructor note:** If you don't have an MCP server ready, just explain the concept with a diagram on the whiteboard. Draw Codex in the center, with arrows pointing to: files, web, databases, APIs, calendars, etc.

### Discussion: The Future (15 min)
**Say:** "Let's talk about something real. AI is changing the world. What does that mean for you?"

**Discussion prompts:**
- "What jobs do you think AI will create that don't exist today?"
- "What skills will matter MORE because of AI?" (Creativity, judgment, communication, ethics)
- "What's something AI will never be good at?" (Let them debate this)
- "How do you feel about all this?" (Give space for honest reactions -- excitement, anxiety, curiosity are all valid)

**Land on this:** "The students who will thrive are the ones who learn to work WITH AI, not the ones who ignore it and not the ones who depend on it blindly. You're already ahead of most people because you're here learning this."

**If running behind:** Cut the MCP demo and the future discussion. Prioritize the ecosystem tour so students know other tools exist.

---

## 2:45 - 3:00 | Day 2 Wrap-Up (15 min)

### Share What You Built (8 min)
Ask 3-4 students to quickly show their Lab 2 project on the projector.

**Say after each one:** "What prompt did you use to get that? What did you iterate on?"

Celebrate every project. Applause. This builds confidence for Day 3 presentations.

### Preview Day 3 (3 min)
**Say:** "Tomorrow is the final day. It's a half day, and you're going to build something real -- something you choose. A portfolio, a study tool, an analyzer, a creative project. You'll present it to the class and we'll vote on the most creative and most useful projects."

### Overnight Assignment (4 min)
**Say:** "Tonight, think about what you want to build tomorrow. Here are some ideas:"

Display a list:
- A personal portfolio website
- A study guide generator for an upcoming test
- A data analyzer for something you care about (sports stats, music trends, etc.)
- An automation tool for a tedious task you do regularly
- A creative writing project (interactive story, poem generator, etc.)
- Something else entirely -- pitch it to me in the morning

**Say:** "Come in tomorrow with an idea and we'll make it happen. See you at 9."

---

## Instructor Notes for Day 2

### Timing Flexibility
- Module 4 (prompting) is critical -- don't cut it. Cut Module 7 (ecosystem) if needed.
- Lab 2 is the heart of the day. Protect this time. If running behind, cut Module 6 (context management) to 15 minutes and cover only /status and /compact.
- The academic honesty discussion can run long if students are engaged. Let it run -- this is important. Trim "Spot the Danger" to 2-3 scenarios instead of 5.

### Energy Management
- Day 2 morning is high energy -- ride it. Students are excited from Day 1.
- Post-lunch energy dip is real. Lab 2 is hands-on to combat this.
- The ecosystem tour near the end of the day is intentionally lower-stakes. If students are fading, make it conversational rather than demo-heavy.

### What Usually Goes Wrong
1. **Students compare projects and feel behind.** Emphasize that different is good, not better or worse.
2. **A student's project doesn't work.** Debug it together using Codex. "Ask Codex to find the bug" is itself a great prompt exercise.
3. **The safety discussion gets heated.** Stay neutral. Present facts. Let students form their own views.
4. **A student asks about using AI to cheat on specific assignments.** Be direct: "That's between you and your teacher. But I'll tell you this: if you can't do it without the AI, you haven't learned it."
5. **MCP demo fails.** Have a backup plan -- just explain it conceptually with the whiteboard diagram.
