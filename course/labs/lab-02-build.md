# Lab 02: Build Something Cool

> **Day:** 2
> **Time:** 60 minutes
> **Difficulty:** Beginner to Intermediate (you choose your track)
> **What you need:** Codex CLI installed, an empty project folder

---

## Your Mission

Today you BUILD. Choose one of three tracks below based on what sounds fun
to you. Every track uses Codex in workspace-write mode and practices the
WHAT-WHERE-HOW-VERIFY prompt formula from Demo 04.

---

## Setup (All Tracks)

Create a fresh project folder:

```bash
mkdir -p ~/my-build-project
cd ~/my-build-project
codex --sandbox workspace-write
```

Now pick your track and get building!

---

---

## Track A: "My Personal Page" (Easiest -- recommended if this is your first time building anything)

### Goal
Use Codex to create a personal bio webpage that looks great and is uniquely
yours.

### Requirements
Your page MUST include:
- [ ] Your name (or a made-up name) as the main heading
- [ ] A fun fact about yourself
- [ ] At least one hobby or interest
- [ ] A "Powered by AI" badge or footer
- [ ] Colors that you chose (not the default black and white)

### Step-by-Step

**Step 1 (5 min) -- Plan your page**

Before prompting Codex, answer these questions on paper or in your head:
- What name do you want to display?
- What's your fun fact?
- What hobby do you want to feature?
- What colors do you like? (Pick a background color and a text color)

**Step 2 (10 min) -- Write your prompt using WHAT-WHERE-HOW-VERIFY**

Here's a template. Fill in the blanks:

```
Create an HTML file called my-page.html with a personal bio page.

WHAT: A personal bio page with my name "______" as the heading.

WHERE: A single file called my-page.html.

HOW:
- Background color: ______
- Text color: ______
- Include a fun fact section that says: "______"
- Include a hobbies section that mentions: ______
- Add a footer that says "Powered by AI" with a small robot emoji
- Use a clean, modern design with good spacing and readable fonts

VERIFY: The page should have my name, one fun fact, one hobby, a footer,
and my chosen colors.
```

**Step 3 (5 min) -- Run it and review**

After Codex creates the file:

```bash
open my-page.html   # or start my-page.html on Windows
```

Does it match what you asked for? Check each requirement.

**Step 4 (10 min) -- Iterate and improve**

Things to try:
```
Add a profile picture section with a placeholder image (a colored circle
with my initials in it, done in CSS).
```

```
Add a "My Favorite Things" section with a bulleted list of 5 items.
```

```
Make the page responsive so it looks good on mobile screens too.
```

**Checkpoint:** Your page has all 5 requirements and you've made at least one
improvement.

### Extension: Dark Mode Toggle (if you finish early)

```
Add a button that toggles between light mode and dark mode. In dark mode,
the background should be dark gray and the text should be light. In light
mode, keep the current design. Use JavaScript to handle the toggle. The
button should say "Dark Mode" or "Light Mode" depending on the current state.
```

---

---

## Track B: "File Organizer" (Medium -- good if you liked Demo 06)

### Goal
Take a messy folder of 20+ randomly named files and use Codex to analyze,
rename, and organize them into a clean structure.

### Setup -- Create the Mess

Run these commands to create your messy folder:

```bash
mkdir -p ~/my-build-project/messy-files
cd ~/my-build-project/messy-files

echo "Essay about climate change effects on oceans" > thing1.txt
echo "def add(a,b): return a+b" > untitled.py
echo "<html><body>My Portfolio</body></html>" > file.html
echo "Grocery list: milk, eggs, bread, cheese, apples" > aaaa.txt
echo "Meeting notes: discuss Q3 budget and hiring plan" > doc2.txt
echo "function hello() { console.log('hi'); }" > x.js
echo "# How to Make Pasta\n\nBoil water. Add pasta." > random.md
echo "Name,Age,City\nAlice,17,Boston\nBob,16,Miami" > data_final_v3.csv
echo "Dear diary, today was amazing because..." > stuff.txt
echo "SELECT * FROM users WHERE age > 18;" > query.txt
echo "print('fizzbuzz')" > homework_maybe.py
echo "background-color: #ff6600; font-size: 16px;" > styles_old.css
echo "TODO: finish science project by Friday" > important.txt
echo "The mitochondria is the powerhouse of the cell" > bio_notes.txt
echo "let score = 0; function updateScore() {}" > game.js
echo "Recipe: chocolate cake with buttercream frosting" > yummy.txt
echo "2024-01-15: server crashed at 3am, restarted" > log.txt
echo "Haiku about rain:\nDrops fall from gray sky\nPuddles form on" > poem.txt
echo "Pi = 3.14159265358979323846..." > math.txt
echo "album: Dark Side of the Moon, artist: Pink Floyd" > misc.txt
echo "Dear Grandma, thank you for the sweater..." > letter_draft.txt
```

Now go back to the project root:

```bash
cd ~/my-build-project
codex --sandbox workspace-write
```

### Step-by-Step

**Step 1 (10 min) -- Analyze the mess**

Use WHAT-WHERE-HOW-VERIFY:

```
WHAT: Look at every file in the messy-files/ folder and tell me what each
      one contains.
WHERE: The messy-files/ directory in this project.
HOW: Read each file, categorize it by type (code, writing, data, notes, etc.),
     and suggest a better filename.
VERIFY: Give me a table showing: current name, category, suggested new name.
```

Review the table. Does Codex's categorization make sense?

**Step 2 (15 min) -- Plan the organization**

```
Based on your analysis, propose a folder structure to organize these files.
Create categories like code/, writing/, data/, notes/, etc. Show me the
full plan with every file mapped to its new location and name. Don't execute
yet -- just show the plan.
```

Review the plan. Would you change anything? Tell Codex:

```
That looks good, but [your changes here]. Now execute the plan -- create the
folders and move all the files.
```

**Step 3 (10 min) -- Verify the result**

```bash
ls -R messy-files/
```

Did everything get organized? Are the names sensible?

**Step 4 (10 min) -- Create an index**

```
Create a file called messy-files/INDEX.md that lists every file in the
organized structure with a one-line description. Format it as a markdown
table with columns: Folder, Filename, Description.
```

**Checkpoint:** Your messy folder is now organized with meaningful names and
an INDEX.md file.

### Extension: Undo Plan (if you finish early)

```
Create a bash script called messy-files/undo-organize.sh that would reverse
all the changes and put the files back where they started with their original
names. Add comments explaining each step.
```

---

---

## Track C: "Quiz Master" (Harder -- great if you want a challenge)

### Goal
Use Codex to create a quiz on any topic you love, store the questions in a
structured data file, and then build an interactive HTML quiz page.

### Step-by-Step

**Step 1 (5 min) -- Pick your topic**

Choose something you know well and care about. Examples:
- Your favorite video game
- A sport you play
- A TV show or movie
- A school subject you're good at
- Animals, space, music, history -- anything!

Write down your topic: _______________

**Step 2 (10 min) -- Create the quiz data**

```
Create a YAML file called quiz-data.yaml with a quiz about [YOUR TOPIC].
Include:
- A quiz title
- At least 5 multiple-choice questions
- Each question should have 4 options labeled A, B, C, D
- Mark which option is correct
- Include a brief explanation for each correct answer

Make the questions range from easy to hard.
```

Review the YAML file. Are the questions accurate? Fix anything wrong:

```
Question 3 is incorrect -- the answer should be B, not C. Also, add one
more question about [specific subtopic]. Update quiz-data.yaml.
```

**Step 3 (15 min) -- Build the quiz page**

```
Read quiz-data.yaml and create an interactive HTML page called quiz.html
that displays the quiz. Requirements:
- Show one question at a time with a "Next" button
- Display the four options as clickable buttons
- When the user selects an answer, highlight it green if correct or red
  if wrong, and show the explanation
- Keep a running score at the top
- At the end, show the final score with a message:
  - 5/5: "Perfect! You're a genius!"
  - 3-4/5: "Great job! Almost there!"
  - 0-2/5: "Keep learning! You'll get it next time!"
- Use a clean design with good colors
```

**Step 4 (10 min) -- Test and refine**

Open quiz.html in a browser and take your own quiz!

```bash
open quiz.html   # or start quiz.html on Windows
```

Does it work? Fix any issues:

```
The quiz has a problem: [describe the issue]. Fix it in quiz.html.
```

**Step 5 (5 min) -- Polish**

```
Add a start screen to quiz.html that shows the quiz title, the topic, the
number of questions, and a "Start Quiz" button. The questions should only
appear after clicking Start.
```

**Checkpoint:** You have a working interactive quiz with at least 5 questions,
scoring, and a start screen.

### Extension: Add a Timer (if you finish early)

```
Add a 15-second countdown timer for each question. If time runs out, the
question is marked wrong and it moves to the next one automatically. Show
the timer as a progress bar that shrinks.
```

---

---

## When You're Done (All Tracks)

1. Open your final result in a browser (if it's HTML) or review the files.
2. Show it to your neighbor and explain what you built and how you prompted.
3. Be ready to share one thing you learned during the wrap-up discussion.

---

## Reflection Questions

1. How many prompts did it take to get the result you wanted?
2. What was the hardest part: knowing what to ask, or getting Codex to
   understand what you meant?
3. Did you use the WHAT-WHERE-HOW-VERIFY formula? Did it help?
4. What would you do differently next time?

---

*Tomorrow in Lab 03, you'll build something even bigger -- with a partner!*
