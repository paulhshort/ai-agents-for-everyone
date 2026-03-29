# Day 1: "What Is AI, Really?" -- From Chat to Agent

**Duration:** 9:00 AM - 3:00 PM (6 hours with breaks)
**Goal:** Students go from "AI is that thing in ChatGPT" to understanding agents and having Codex running on their own machines.

---

## 9:00 - 9:30 | Welcome, Icebreaker, and The Big Question (30 min)

### Setup (before students arrive)
- Terminal open with Codex ready (but not yet shown)
- Projector showing a simple title slide or the course README
- Sticky notes and markers on every desk
- Handouts face-down (distribute later)

### Welcome (5 min)
**Say:** "Welcome to the AI Agents course. Over the next two and a half days, you're going to go from using AI casually -- the way most people do -- to actually understanding how it works and using it to build real things. By the end of this course, you'll know more about AI agents than most adults."

Introduce yourself briefly. Keep it human -- mention something relatable.

### Icebreaker: "One Word" (10 min)
**Say:** "I want everyone to grab a sticky note and write ONE WORD that you think describes AI. Don't overthink it. First thing that comes to mind."

Give them 30 seconds. Then go around the room and have each person say their word and stick it on the board/wall.

**Expected responses:** "smart," "robots," "scary," "helpful," "Skynet," "chatbot," "future," "cheating"

**Instructor note:** Group the sticky notes loosely into categories as they go up. This becomes a reference point you'll come back to throughout the course. Don't correct anyone yet.

### Quick Poll (5 min)
**Ask by show of hands:**
- "Who has used ChatGPT?" (most hands)
- "Who has used it more than once?" (fewer)
- "Who has used Copilot, Gemini, or Claude?" (a few)
- "Who has used an AI tool that actually DID something -- not just chatted?" (very few or none)

**Transition:** "So most of you have TALKED to AI. Today we're going to meet AI that DOES things."

### The Big Question (10 min)
**Say:** "Here's the question I want you to sit with all day: What if AI could DO things instead of just TALK about things? What if you could say 'organize my files' and it actually organized them? Or 'build me a website' and it actually built one? That's what we're going to explore."

**Pause.** Let it land. This is the hook for the entire course.

---

## 9:30 - 10:30 | Module 1: How AI Actually Works (60 min)

### What Is AI? (15 min)
**Display:** `guide/foundations/what-is-ai.md`

Walk through the key concepts. Keep it conversational.

**Talking points:**
- AI is pattern recognition at massive scale
- It's not "thinking" the way you think. It's prediction.
- "When you text your friend and your phone suggests the next word -- that's the same basic idea, just way smaller."

**Say:** "Your phone's autocomplete is a tiny AI. GPT-5.4 is that same idea trained on basically the entire internet. Same trick, astronomically bigger scale."

### How LLMs Work (20 min)
**Display:** `guide/foundations/how-llms-work.md`

This is the most conceptually dense part of the day. Go slow.

**Key concepts to land:**
1. **Tokens** -- "AI doesn't read words the way you do. It breaks everything into pieces called tokens. The word 'hamburger' might be two tokens: 'ham' and 'burger'."
2. **Prediction** -- "Given all the tokens so far, what token probably comes next? That's literally all it does. Over and over, billions of times."
3. **Context window** -- "The AI can only 'see' a certain amount of text at once. Think of it like a whiteboard -- once it's full, old stuff falls off."
4. **Training vs. using** -- "Training is when the AI learns from data. Using it is when you ask it questions. These are completely different phases."

### LIVE DEMO: Token Counting (10 min)
Open a browser and go to a tokenizer tool (platform.openai.com/tokenizer or similar).

Type: "Hello, how are you today?"
**Say:** "Watch -- that sentence you'd think is 6 words. But the AI sees it as [show token count] tokens. Some words are one token, some get split up."

Type: "supercalifragilisticexpialidocious"
**Say:** "Look at how many tokens THAT is. The AI has to chew through this word in pieces."

Type an emoji: "I love pizza"
**Say:** "Even emojis are tokens. Everything gets converted to these chunks."

### Activity: "Guess the Tokens" Game (15 min)
Put sentences on the projector one at a time. Students guess how many tokens each one is. Closest guess wins a point.

**Sentences to use:**
1. "The cat sat on the mat." (easy -- roughly 1 token per word)
2. "Pneumonoultramicroscopicsilicovolcanoconiosis" (long word, many tokens)
3. "lol brb ttyl" (internet slang -- interesting tokenization)
4. "SELECT * FROM users WHERE id = 42;" (code -- show that code is tokens too)
5. A sentence in another language (shows tokenization varies by language)

**Instructor note:** The exact numbers don't matter. The point is building intuition about how AI "sees" text differently than humans do.

---

## 10:30 - 10:45 | Break (15 min)

**Say:** "Take 15. Stretch, grab water, check your phone. When we come back, things are going to get interesting."

---

## 10:45 - 12:00 | Module 2: From Chatbot to Agent (75 min)

### What Are AI Agents? (20 min)
**Display:** `guide/foundations/what-are-agents.md`

**Talking points:**
- A chatbot answers questions. An agent takes actions.
- "ChatGPT is like calling a really smart friend on the phone. An agent is like hiring that friend to come over and actually help you move."
- Agents can: read files, write files, run commands, search the web, connect to tools
- The key difference: agents have a LOOP. They think, act, observe the result, think again.

**Say:** "A chatbot is a conversation. An agent is a coworker. It doesn't just tell you what to do -- it does it, checks if it worked, and adjusts."

### The Moment: First Live Agent Demo (25 min)
This is the most important demo of the entire course. Practice it beforehand.

**Say:** "Alright, let me show you something."

Switch to your terminal. Make sure the font is large enough for the back row.

**Step 1:** Navigate to a pre-prepared folder with a few files (a Python script, a text file, a CSV, maybe an image).

**Step 2:** Launch Codex:
```
codex
```

**Step 3:** Type this prompt:
```
Look at all the files in this folder and tell me what this project is about.
```

Let Codex read the files. Let the class watch it work. Narrate what's happening:
**Say:** "Watch -- it's reading each file. It's not guessing. It's actually LOOKING at the contents. See how it's examining the CSV? Now it's reading the Python script..."

**Step 4:** After it responds, type:
```
Create a file called PROJECT-SUMMARY.md that explains what this project does, lists all the files, and describes each one.
```

**Say:** "Now watch this part carefully."

When Codex creates the file and asks for approval, PAUSE.

**Say:** "See that? It's asking me for PERMISSION before it creates the file. It planned what it wants to do and is showing me. This is important -- it doesn't just do whatever it wants."

Approve it. Then open the file and show the class.

**Say:** "It didn't just TELL us about the files. It CREATED a new file. On my actual computer. That file exists now. This is the difference between a chatbot and an agent."

**Expected student reactions:**
- "Wait, it actually made a file?"
- "Can it delete files too?" (Yes -- address this in the safety module on Day 2)
- "Can it do my homework?" (Perfect segue to academic honesty discussion later)

### Reasoning Models (15 min)
**Display:** `guide/foundations/reasoning-models.md`

**Talking points:**
- Not all models are the same. Some are faster, some think deeper.
- GPT-5.4 is the default -- it's powerful and balanced
- GPT-5.4-mini is faster but less thorough
- GPT-5.3-codex is a specialized code model
- "Think of it like asking a quick question to a friend versus asking a professor to really think about it."

### LIVE DEMO: Model Comparison (15 min)
**Say:** "Let me show you the difference in real time."

In Codex, switch to the mini model:
```
/model gpt-5.4-mini
```

Ask: "Explain how a car engine works in a way a 10-year-old would understand."

Show the response. Then switch back:
```
/model gpt-5.4
```

Ask the same question. Show how the response differs -- typically more nuanced, better structured, possibly with an analogy.

**Say:** "See the difference? The mini model is fast and gets the job done. The full model takes more time but gives you a richer answer. You pick the right tool for the job."

**If running behind:** Cut the model comparison demo short. Just mention the models exist and move on. Students will experiment on their own.

---

## 12:00 - 12:45 | Lunch (45 min)

**Say:** "Lunch time. After lunch, you're going to install Codex on your own machines. Eat well -- you're going to need the energy."

**Instructor during lunch:** Test the classroom WiFi speed. If it's slow, prepare to stagger installations. Check that your backup USB drives with the npm package are accessible.

---

## 12:45 - 1:30 | Module 3: Your First Codex Session (45 min)

### Installation (20 min)

**Distribute the Student Quickstart handout now.** (`handouts/student-quickstart.md`)

**Say:** "Alright, open your terminals. Windows users, open PowerShell or Git Bash. Mac users, open Terminal. Let's do this together."

**Step 1: Install Codex**
```
npm install -g @openai/codex
```

**Say:** "This is downloading Codex from the internet and installing it on your machine. It might take a minute."

Walk around. Check screens. Common issues:

**Troubleshooting: npm not found**
- Student doesn't have Node.js installed
- Solution: Download from nodejs.org (have USB drives with installers as backup)
- If school network blocks downloads, use mobile hotspot or pre-downloaded installer

**Troubleshooting: Permission denied**
- On Mac/Linux: May need `sudo npm install -g @openai/codex`
- On Windows: Run terminal as Administrator
- Alternative for Mac: `brew install --cask codex`

**Troubleshooting: Network timeout**
- School firewall may block npm registry
- Solution: Try mobile hotspot, or install from local .tgz file on USB

**Budget 5 extra minutes here.** Installation always takes longer than you think with 20+ students on the same WiFi.

**Step 2: Authenticate**
```
codex
```

**Say:** "When it opens, it'll ask you to sign in. Click 'Sign in with ChatGPT' if you have an account, or use an API key if you have one. Most of you will use the ChatGPT sign-in."

**Troubleshooting: Auth popup blocked**
- Try a different browser
- Copy the URL manually if the popup doesn't work
- Some school networks block OAuth redirects -- use API key as fallback

**Troubleshooting: "No API key" error**
- Ensure they completed the sign-in flow
- Check if the browser redirected properly
- Have a few spare API keys for students who can't auth (use restricted keys with spending limits)

### First Prompts (25 min)

**Say:** "Everyone who has Codex running, raise your hand." Count. If less than 75%, keep troubleshooting. If 75%+, proceed and help the rest catch up.

**First prompt -- everyone types together:**
```
Explain what files are in this folder
```

**Say:** "Your folder might not have much in it. That's fine. The point is -- look -- Codex is actually READING your filesystem. It's looking at real files on your real computer."

Walk around. Celebrate out loud: "Jordan's Codex found 47 files! Maya's is reading a homework folder!"

**Second prompt:**
```
Create a file called hello.txt that says "Hello! My name is [their actual name] and I just used an AI agent for the first time!"
```

**Say:** "When it asks for approval, read what it's planning to do, then approve it."

After they approve:
**Say:** "Now open your file explorer and go find that file. Open it. Read it."

**This is the wow moment.** They will see a file that didn't exist 30 seconds ago, created by an AI, on their actual computer.

**Expected reactions:**
- Excitement: "IT ACTUALLY MADE A FILE!"
- Concern: "Wait, can it read all my files?" (Good question -- address briefly, more in Day 2)
- Trying to push limits: "Can it open Chrome?" "Can it send an email?" (Channel this energy)

**Say:** "You just gave an instruction to an AI, and it carried out that instruction in the real world. Not in a chat window. On your actual machine. That's what an agent is."

---

## 1:30 - 2:30 | Lab 1: "Explore and Report" (60 min)

### Setup (5 min)
**Display:** `course/labs/lab-01-explore.md`

Distribute the mystery folder. This should be a zip file containing a mix of:
- A few text files with different content (a recipe, a poem, some data)
- A CSV file with some interesting data
- A Python or JavaScript file that does something simple
- A README that's intentionally vague
- Maybe a hidden file or two for advanced students to discover

**Say:** "I'm giving each of you a mystery folder. You have no idea what's in it. Your job: use Codex to explore the folder, figure out what the 'project' is about, and have Codex create a summary report."

### The Task (45 min)
Students should:
1. Unzip the mystery folder
2. Navigate to it in their terminal
3. Launch Codex
4. Ask Codex to explore and explain what's in the folder
5. Ask Codex to create a summary file

**Circulate actively.** This is where students will get stuck, and that's good.

**Common student questions during the lab:**
- "It's not doing anything" -- Check that they approved the file read operations
- "It gave me an error" -- Read the error message together. Most are permission-related.
- "It's saying weird stuff" -- Their prompt might be too vague. Help them be more specific.
- "I'm done, what now?" -- Stretch goals:
  - Ask Codex to find any bugs in the code files
  - Ask Codex to improve the README
  - Ask Codex to create a table of contents

### Sharing (10 min)
Ask 2-3 volunteers to share their screens and show what Codex found and created.

**Say:** "Notice how everyone got slightly different summaries even though you had the same files? That's because you asked in different ways. Tomorrow we're going to learn how to ask BETTER -- how to prompt like a pro."

---

## 2:30 - 2:45 | Break (15 min)

---

## 2:45 - 3:00 | Day 1 Wrap-Up (15 min)

### Quick Quiz (8 min)
Five quick questions, hands-up style:

1. "What does AI predict?" (The next token)
2. "What's the difference between a chatbot and an agent?" (An agent takes actions)
3. "What are the three model options in Codex?" (GPT-5.4, GPT-5.4-mini, GPT-5.3-codex)
4. "True or false: Codex can create files on your computer without asking permission." (False -- it asks first, in most modes)
5. "What is a token?" (A chunk of text that the AI processes)

### Preview Day 2 (3 min)
**Say:** "Tomorrow we're going to level up. You'll learn how to write prompts that get exactly what you want. We'll talk about safety -- because with great power comes great responsibility. And you'll BUILD something. A website, an organizer, a quiz -- your choice."

### Optional Homework (2 min)
**Say:** "If you want to play with Codex at home tonight -- and I hope you do -- try three different prompts and write down what happened. Bring your notes tomorrow. Things to try: ask it to explain something from another class, ask it to create a short story, ask it to organize something."

### Goodbye (2 min)
**Say:** "You walked in this morning thinking AI was [reference the sticky notes from the icebreaker]. Now you've seen it read files, create files, and explain code. Tomorrow, we go further. Great job today."

---

## Instructor Notes for Day 1

### Timing Flexibility
- If installation takes too long, shorten Module 1 (skip the token guessing game)
- If students are bored during theory, jump to the agent demo early
- Lab 1 can be shortened to 30 min if needed -- the core is steps 1-5
- The quiz can be cut entirely if time is tight; it's reinforcement, not assessment

### What Usually Goes Wrong
1. **WiFi buckles under 25 simultaneous npm installs.** Stagger by rows.
2. **One student's laptop doesn't support Node.js 22.** Pair them with a neighbor.
3. **The live demo fails.** This is fine. Say "This is actually great -- let's debug it together." Model problem-solving.
4. **Students race ahead and start doing wild things with Codex.** This is a feature, not a bug. Just make sure they aren't in `danger-full-access` mode.
5. **A student asks "Can it hack things?"** Be direct: "The tool could be misused, just like any powerful tool. That's why we're spending time on safety tomorrow."

### Key Takeaway for Day 1
Students should leave thinking: "AI agents are real, they work on my computer, and I can control them." If they feel that, Day 1 was a success.
