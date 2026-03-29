# Demo 01: First Contact

> **Concept:** AI reads and understands files -- this is NOT search
> **Time:** 10 minutes
> **Difficulty:** Beginner
> **Wow Factor:** ★★★★☆
> **Day:** 1, Morning

---

## What Students Will See

An AI agent opens files of completely different formats -- poetry, recipes,
spreadsheet data, structured JSON -- and summarizes each one accurately. This
is the moment they realize an AI agent is not Google search.

---

## Preparation (Do This Before Class)

Create a demo folder with a variety of files:

```bash
mkdir -p ~/codex-demos/first-contact
cd ~/codex-demos/first-contact
```

Create these files by hand or paste them in:

**poem.txt**
```
The Road Not Taken
by Robert Frost

Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;
```

**grandma-cookies.md**
```markdown
# Grandma's Famous Chocolate Chip Cookies

## Ingredients
- 2 1/4 cups flour
- 1 tsp baking soda
- 1 cup butter, softened
- 3/4 cup sugar
- 2 large eggs
- 2 cups chocolate chips

## Instructions
1. Preheat oven to 375 F
2. Mix flour and baking soda
3. Beat butter and sugar until creamy
4. Add eggs, then flour mixture
5. Stir in chocolate chips
6. Bake 9-11 minutes
```

**shopping-list.csv**
```csv
Item,Quantity,Store,Priority
Bananas,6,Grocery,High
Notebook,2,Office Supply,Medium
USB Cable,1,Electronics,Low
Dog Food,1 bag,Pet Store,High
Sunscreen,1,Pharmacy,Medium
```

**data.json**
```json
{
  "class": "Introduction to AI",
  "students": 24,
  "avg_grade": 88.5,
  "top_topics": ["machine learning", "neural networks", "prompt engineering"],
  "next_exam": "2026-04-15"
}
```

**notes.txt**
```
Meeting notes 3/25
- Budget approved for new lab computers
- Field trip to tech company confirmed for May
- Pizza party on Friday (voted: pepperoni wins)
- Remember: parent night is next Thursday
```

---

## Live Demo Script

### Step 1 -- Set the Stage (1 min)

**SAY TO CLASS:**
> "I have a folder on my computer with a bunch of random files. A poem, a
> cookie recipe, a shopping list, some data, and meeting notes. Let's see if
> an AI agent can figure out what all of them are."

Open your terminal. Make sure the font is large enough for the projector.

```bash
cd ~/codex-demos/first-contact
ls
```

**SAY:** "Here are our files. Let's fire up Codex."

### Step 2 -- Launch Codex in Read-Only Mode (1 min)

```bash
codex --sandbox read-only
```

**SAY:**
> "I'm using read-only mode. That means the AI can LOOK at my files but
> cannot change anything. Like a visitor at a museum -- look, don't touch."

### Step 3 -- The Big Prompt (1 min to type, 2-3 min for response)

Type this prompt (or paste from your notes):

```
Look at all the files in this folder and tell me what each one is about.
Give me a short summary of each file.
```

**Wait for Codex to respond.** It will:
1. List the files in the directory
2. Read each file one by one
3. Produce a summary for every file

### Step 4 -- The WOW Moment (2 min)

**EXPECTED OUTPUT (approximately):**

Codex will produce something like:
- **poem.txt** -- "The Road Not Taken" by Robert Frost, a poem about choosing
  between two paths in life.
- **grandma-cookies.md** -- A chocolate chip cookie recipe with ingredients and
  step-by-step baking instructions.
- **shopping-list.csv** -- A shopping list with 5 items across different stores,
  with priority levels.
- **data.json** -- Class information for an "Introduction to AI" course: 24
  students, average grade 88.5, next exam April 15.
- **notes.txt** -- Meeting notes about budget approval, a field trip, a pizza
  party, and parent night.

**PAUSE. Let the class react.**

**SAY:**
> "Look at what just happened. It didn't just read the file names. It opened
> every single file. It understood a POEM -- it even knew who wrote it. It
> understood a CSV spreadsheet. It parsed JSON data and told us when the next
> exam is. Five completely different file formats, and it understood ALL of
> them."

### Step 5 -- Drive the Point Home (2 min)

**SAY:**
> "This is NOT search. If you Google 'what's in my files,' Google has no idea.
> It can't see your files. Codex actually READ the files on my computer and
> UNDERSTOOD them. That's the difference."

**ASK THE CLASS:**
> "When might this be useful? When would you want an AI to read and understand
> a bunch of files for you?"

Take 2-3 student answers. Guide them toward: homework research, understanding
code someone else wrote, exploring a new project, analyzing data.

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| Codex only summarizes some files | Prompt again: "You missed poem.txt and data.json -- please read those too" |
| Response is too long to read on screen | Use `/compact` to get a shorter version |
| Students ask "Can it read images?" | Great question! Say: "Codex can read text files. For images, there are other AI tools -- we'll talk about multimodal AI later." |

---

## Key Takeaway to Repeat

**"This is NOT search. It READ the files and UNDERSTOOD them."**

Write this on the board. Students will reference it later.

---

*Next up: Demo 02 -- The Agent Creates*
