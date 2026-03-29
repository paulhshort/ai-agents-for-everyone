# Demo 02: The Agent Creates

> **Concept:** Chatbots talk. Agents DO. First time students see AI write to disk.
> **Time:** 12 minutes
> **Difficulty:** Beginner
> **Wow Factor:** ★★★★★
> **Day:** 1, Morning

---

## What Students Will See

An AI agent creates real files on the computer -- a text file and a full HTML
webpage -- that persist after Codex exits. Students will open the HTML file in
a browser and see a real, styled page that did not exist 30 seconds ago.

---

## Preparation (Do This Before Class)

Create an empty demo folder:

```bash
mkdir -p ~/codex-demos/agent-creates
cd ~/codex-demos/agent-creates
ls    # confirm it is EMPTY -- this matters for the effect
```

Have a file manager window and a web browser ready but minimized.

---

## Live Demo Script

### Step 1 -- Show the Empty Folder (1 min)

```bash
cd ~/codex-demos/agent-creates
ls
```

**SAY:**
> "Look -- this folder is completely empty. Nothing in it. Zero files. Remember
> that, because in about sixty seconds it won't be empty anymore."

### Step 2 -- Launch Codex in Write Mode (1 min)

```bash
codex --sandbox workspace-write
```

**SAY:**
> "Last time we used read-only mode. This time I'm using workspace-write. That
> means Codex can create and modify files -- but only inside this project
> folder. It can't touch anything else on my computer."

### Step 3 -- Create the Welcome File (2 min)

Type this prompt:

```
Create a file called welcome.txt with a personalized welcome message for a
class of high school students learning about AI. Make it fun and encouraging.
```

**Wait for Codex to work.** You will see it create the file.

When it finishes:

```bash
ls
```

**SAY:**
> "There it is. welcome.txt. That file did NOT exist a minute ago."

Now show the contents:

```bash
cat welcome.txt
```

**PAUSE. Let students read the message on screen.**

**SAY:**
> "The AI just created a REAL FILE on my computer. Not in a chat window. Not
> in a text box on a website. A real, actual file sitting on my hard drive
> right now. I could email this to you. I could print it. It's real."

### Step 4 -- The Big One: Create an HTML Page (3 min)

Type this prompt:

```
Now create an HTML page called class-page.html with a cool, modern design that
lists 5 fun facts about AI. Use bright colors and make it look impressive.
Include a title that says "AI Fun Facts" and style it nicely with CSS.
```

**Wait for Codex to create the file.**

```bash
ls
```

**SAY:** "Now we have two files. Let's do something wild."

### Step 5 -- Open It in a Browser (2 min)

Open class-page.html in a web browser. On most systems:

```bash
open class-page.html        # macOS
# or: start class-page.html # Windows
# or: xdg-open class-page.html # Linux
```

**A fully styled webpage appears in the browser.**

**THIS IS THE WOW MOMENT.**

**PAUSE. Do NOT talk for 3-4 seconds. Let the class react.**

**SAY:**
> "Thirty seconds ago, this webpage did not exist. There was no file. I didn't
> write any code. I didn't open a code editor. I typed one sentence in plain
> English, and the AI created a complete, styled, working webpage."

### Step 6 -- The Key Distinction (2 min)

**SAY:**
> "This is the difference between a CHATBOT and an AGENT."

Write on the board or show a slide:

```
CHATBOT:  You ask a question  -->  It gives you text
AGENT:    You describe a goal  -->  It DOES the work
```

**SAY:**
> "If I asked ChatGPT to 'create an HTML page with fun facts about AI,' it
> would show me the code in the chat window. I'd have to copy it, open a text
> editor, paste it in, save it, name the file... that's like five extra steps.
> Codex just DID it. One prompt. Done."

**ASK THE CLASS:**
> "What else could you ask an agent to create? What files would be useful to
> you?"

Take 3-4 answers. Students might say: homework templates, study guides,
birthday invitations, game ideas, etc.

---

## Bonus: If You Have Extra Time (2 min)

Ask Codex to modify the file it just created:

```
Add a footer to class-page.html that says "Created by AI in under 60 seconds"
and include today's date.
```

Refresh the browser. The footer appears.

**SAY:**
> "It didn't just create the file -- it went BACK into the file and edited it.
> Like a co-worker who can follow up on their own work."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| Browser doesn't open from terminal | Manually open the file manager, navigate to the folder, double-click the HTML file |
| HTML looks plain or broken | "Even AI doesn't get it perfect every time! Let's ask it to fix it." Then prompt: "The page looks a bit plain -- add more CSS styling and make it more colorful." |
| Codex asks for confirmation | Click approve/yes. Explain: "It's asking permission before writing. This is a safety feature." |

---

## Key Takeaway to Repeat

**"Chatbots TALK. Agents DO."**

This is the single most important idea of Day 1. Come back to it all day long.

---

*Next up: Demo 03 -- Token Explorer*
