# Demo 06: Think Before You Act

> **Concept:** Plan mode -- review the blueprint before building
> **Time:** 12 minutes
> **Difficulty:** Intermediate
> **Wow Factor:** ★★★★☆
> **Day:** 2, Morning

---

## What Students Will See

Codex analyzes a messy folder, proposes a reorganization plan, and waits for
human approval before executing. Students learn that responsible AI use means
reviewing the plan before letting the agent act.

---

## Preparation

Create a deliberately messy folder with randomly named files:

```bash
mkdir -p ~/codex-demos/plan-mode
cd ~/codex-demos/plan-mode

# Create a chaotic mix of files
echo "My book report on To Kill a Mockingbird" > bookreport_final_v2_FINAL.txt
echo "<html><body><h1>My Page</h1></body></html>" > untitled.html
echo "x,y\n1,2\n3,4\n5,6" > data123.csv
echo "Shopping: milk, eggs, bread" > misc_notes.txt
echo "print('hello world')" > test.py
echo "function greet() { return 'hi'; }" > stuff.js
echo "Meeting at 3pm tomorrow" > asdfghjkl.txt
echo "# My Recipe\n\n## Pancakes\n\nMix flour and eggs." > doc.md
echo "TODO: finish homework, clean room, call grandma" > important!!!.txt
echo "Random thoughts about space..." > new_document_3.txt
```

---

## Live Demo Script

### Step 1 -- Show the Mess (1 min)

```bash
cd ~/codex-demos/plan-mode
ls
```

**SAY:**
> "Look at this folder. Files named 'asdfghjkl.txt' and 'stuff.js' and
> 'untitled.html.' This is what real folders look like after a month of
> saving things without organizing. We've all been here."

### Step 2 -- Launch Codex (1 min)

```bash
codex --sandbox workspace-write
```

**SAY:**
> "I want Codex to clean this up. But before I let it start moving and
> renaming files, I want to see the PLAN first. Like reviewing blueprints
> before building a house."

### Step 3 -- Ask for a Plan (3 min)

Type this prompt:

```
Look at all the files in this folder. They're a mess. I want you to
reorganize them into a clean folder structure with meaningful names. But
DON'T do it yet -- just tell me your plan first. What folders would you
create? What would you rename each file to? Show me the before and after.
```

**EXPECTED RESPONSE:** Codex will read every file, analyze the content, and
propose something like:

```
Proposed structure:
  /school/
    book-report-to-kill-a-mockingbird.txt    (was: bookreport_final_v2_FINAL.txt)
  /code/
    hello-world.py                           (was: test.py)
    greeting.js                              (was: stuff.js)
  /web/
    personal-page.html                       (was: untitled.html)
  /notes/
    shopping-list.txt                        (was: misc_notes.txt)
    meeting-reminder.txt                     (was: asdfghjkl.txt)
    space-thoughts.txt                       (was: new_document_3.txt)
    todo-list.txt                            (was: important!!!.txt)
  /recipes/
    pancakes.md                              (was: doc.md)
  /data/
    coordinates.csv                          (was: data123.csv)
```

### Step 4 -- Review Together (3 min)

**SAY:**
> "Look at this plan. It read every file, figured out what each one is about,
> and proposed a folder structure. Let's review it together."

Walk through 2-3 files:
- "It knew 'asdfghjkl.txt' was actually a meeting reminder because it READ
  the content, not just the filename."
- "It put the Python and JavaScript files into a code folder."
- "It even renamed 'bookreport_final_v2_FINAL.txt' to something sensible."

**ASK THE CLASS:**
> "Does this plan look good? Would you change anything?"

Take 1-2 suggestions. Maybe a student says "I'd keep school stuff and notes
together" or "I'd call the folder 'recipes' something else." Great -- this is
the whole point.

### Step 5 -- Incorporate Feedback and Execute (2 min)

Type a follow-up prompt that includes student feedback. For example:

```
That looks good, but let's merge the /notes/ and /school/ folders into one
folder called /personal/. Go ahead and execute the plan now.
```

Watch Codex create folders and move files.

After it finishes:

```bash
ls
ls -R    # show the full tree
```

**SAY:**
> "From chaos to organized in under a minute. But the important part is that
> we REVIEWED THE PLAN FIRST. We caught things we wanted to change. We made
> a decision as humans, then let the agent execute."

### Step 6 -- The Teaching Moment (2 min)

**SAY:**
> "This is how professionals use AI agents. They don't just say 'go' and hope
> for the best. They ask for a plan, review it, adjust it, and THEN execute."

Write on the board:

```
THE PLAN-REVIEW-EXECUTE CYCLE:
  1. Ask for a plan
  2. Review the plan
  3. Suggest changes
  4. Execute
  5. Verify the result
```

**SAY:**
> "You can also use the /plan command as a shortcut to get Codex thinking
> about an approach before it acts. For any big task -- always plan first."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| Codex jumps straight to executing without showing a plan | Say "Stop" or Ctrl+C, then re-prompt: "I said DON'T do it yet. Just show me the plan." This is itself a teaching moment about being explicit. |
| The proposed plan is unusual or confusing | Even better! This makes the review step more meaningful. "See? This is why we review. The AI's plan isn't always what we'd expect." |
| File moves fail | Some files may have special characters. Explain: "Even the AI can hit roadblocks. Let's ask it to handle that edge case." |

---

## Key Takeaway to Repeat

**"For big tasks, always look at the plan first. Review the blueprints before
building."**

---

*Next up: Demo 07 -- Side by Side*
