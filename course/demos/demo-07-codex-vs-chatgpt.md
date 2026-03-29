# Demo 07: Side by Side

> **Concept:** Agents DO things. Chatbots TALK about doing things.
> **Time:** 10 minutes
> **Difficulty:** Beginner
> **Wow Factor:** ★★★★★
> **Day:** 2, After Break

---

## What Students Will See

The exact same question asked to both ChatGPT (in a browser) and Codex CLI.
ChatGPT gives instructions. Codex gives answers by actually doing the work.
The contrast is immediate and unforgettable.

---

## Preparation

Create a folder with a mix of files of varying sizes:

```bash
mkdir -p ~/codex-demos/side-by-side
cd ~/codex-demos/side-by-side

# Create files of different sizes
echo "Short note." > tiny.txt
python3 -c "print('x' * 5000)" > medium.txt
python3 -c "print('data line\n' * 500)" > large-data.txt
echo "<html><body><h1>Hello</h1><p>This is a sample page with some content about AI and machine learning and neural networks and deep learning and natural language processing.</p></body></html>" > page.html
echo "name,score\nAlice,95\nBob,87\nCarla,92\nDave,78\nEva,99" > grades.csv
```

Also have ChatGPT open in a browser tab, ready to go.

---

## Live Demo Script

### Step 1 -- Set Up the Split Screen (1 min)

Arrange your screen so students can see both:
- **Left side:** A browser with ChatGPT open
- **Right side:** A terminal in the demo folder

**SAY:**
> "Same question. Two different tools. Let's see what happens."

### Step 2 -- Round 1: Count Files and Total Size (3 min)

**In ChatGPT (type or paste):**

```
Count how many files are in my folder and tell me the total size of all files.
```

**EXPECTED ChatGPT RESPONSE:** Something like:
> "I can't access your file system. However, you can use the following
> commands to count files and check sizes:
> - `ls | wc -l` to count files
> - `du -sh .` to get total size
> Here's how to do it..."

**SAY:** "ChatGPT told us HOW we could do it. Helpful, but we still have to
do the work ourselves."

**In Codex (same folder):**

```bash
codex --sandbox read-only
```

Type the same prompt:

```
Count how many files are in this folder and tell me the total size of all files.
```

**EXPECTED Codex RESPONSE:** Codex runs `ls` and `du` (or similar) on its
own, then reports back:
> "There are 5 files in this folder. The total size is approximately 12 KB.
> Here's the breakdown: tiny.txt (12 bytes), medium.txt (5 KB)..."

**SAY:**
> "Codex didn't tell us how to count files. It COUNTED THEM. It gave us the
> actual answer: 5 files, 12 KB. No copy-pasting commands. No doing it
> ourselves."

### Step 3 -- Round 2: Find the Largest File (3 min)

**In ChatGPT:**

```
Find the largest file in my folder and tell me what's in it.
```

**EXPECTED ChatGPT RESPONSE:** Instructions about using `ls -lS` or
`du --max-depth=1`, plus "I can't read your files."

**In Codex (same session):**

```
Find the largest file in this folder and tell me what's in it.
```

**EXPECTED Codex RESPONSE:** Codex checks file sizes, identifies
`large-data.txt` as the biggest, reads it, and summarizes:
> "The largest file is large-data.txt at about 5.5 KB. It contains 500
> repeated lines of 'data line'."

**SAY:**
> "Again -- ChatGPT told us HOW to find the file. Codex FOUND IT and READ IT
> and told us what's inside. One talks about doing things. The other does
> them."

### Step 4 -- Round 3: Analyze the Grades (2 min)

**In ChatGPT:**

```
Look at grades.csv and tell me who got the highest score.
```

**EXPECTED:** ChatGPT says "I can't access files, but if you paste the
contents I can help" or gives generic CSV-reading instructions.

**In Codex:**

```
Look at grades.csv and tell me who got the highest score and what the class
average is.
```

**EXPECTED:** "Eva has the highest score at 99. The class average is 90.2."

**SAY:**
> "Eva got a 99. Class average is 90.2. Codex didn't ask me to paste the data.
> It didn't tell me to open Excel. It just... answered."

### Step 5 -- The Punchline (1 min)

**SAY:**
> "Let me be clear: ChatGPT is an incredible tool. It's amazing for
> brainstorming, writing, learning, explaining things. But it lives in a
> browser window. It can't see your files. It can't run commands. It can't
> DO things on your computer."

Write on the board:

```
ChatGPT  =  Brilliant advisor who gives great instructions
Codex    =  Capable assistant who does the actual work
```

**SAY:**
> "You need both. Sometimes you want advice. Sometimes you want action. The
> skill is knowing which tool to reach for."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| ChatGPT actually does a good job answering without file access | Focus on the key difference: "Notice it gave a GENERIC answer. It doesn't know YOUR files. Codex gave an answer about YOUR SPECIFIC files." |
| Codex gives a wrong count or wrong file size | "AI agents can make mistakes too. But notice it's making mistakes while TRYING to do the work, not just telling you how to do it yourself." |
| Internet is down and ChatGPT won't load | Describe what ChatGPT would say based on your experience. Students know ChatGPT well enough to nod along. |

---

## Key Takeaway to Repeat

**"One TALKS about doing things. The other DOES them."**

---

*Next up: Demo 08 -- Adding Superpowers*
