# Prompt Writing Cheat Sheet

## The Formula: WHAT-WHERE-HOW-VERIFY

Every good prompt answers four questions:

| Part | Question | Example |
|------|----------|---------|
| **WHAT** | What should the AI do? | "Create a quiz" |
| **WHERE** | Where should it work? (files, folders) | "in a file called quiz.html" |
| **HOW** | Any constraints, style, or format? | "10 questions, multiple choice, about biology" |
| **VERIFY** | How will you know it worked? | "it should open in a browser and track score" |

---

## 10 Example Prompts

### Schoolwork

**1. Study Guide**
```
Create a markdown file called study-guide.md that covers the key concepts
of the American Civil War. Include 5 main topics with 2-3 bullet points
each, a timeline of major events, and 10 practice questions with answers
at the bottom.
```

**2. Essay Outliner**
```
I need to write a 5-paragraph essay about climate change for my English
class. Don't write the essay for me. Instead, create an outline in
outline.md with a thesis statement, 3 body paragraph topics with
supporting points I should research, and a conclusion summary. Include
suggested sources I could look up.
```

**3. Math Concept Explainer**
```
Explain the Pythagorean theorem in simple terms. Include 3 real-world
examples of when you'd use it, and create an HTML file called
pythagorean.html with an interactive calculator where I can enter
two sides of a right triangle and it calculates the third.
```

### Creative Projects

**4. Interactive Story**
```
Create an HTML file called adventure.html that's a choose-your-own-adventure
story set in a haunted house. Include at least 3 decision points with 2
choices each, leading to 4 different endings. Use JavaScript to handle
the branching. Dark theme with spooky fonts.
```

**5. Song Lyric Analyzer**
```
I'm going to paste song lyrics below. Analyze them and create a file called
analysis.md that identifies the theme, key metaphors, rhyme scheme, mood,
and how the song structure builds emotional impact. Be specific and cite
lines from the lyrics.
```

### File Management

**6. Folder Organizer**
```
Look at all files in my Downloads folder. Create subfolders called Images,
Documents, Videos, Audio, Code, and Other. Move each file to the correct
subfolder based on its extension. Create a log called moved-files.txt
listing every file and where it was moved. Don't move any folders, only
individual files.
```

**7. File Renamer**
```
Look at all the image files in this folder. They have messy names like
IMG_20240315_001.jpg. Rename them using the pattern "photo-001.jpg",
"photo-002.jpg", etc., in alphabetical order of their current names.
Show me the rename plan before executing it.
```

### Learning and Exploration

**8. Code Explainer**
```
Read the file app.js and explain what it does in plain English. Go
function by function. For each function, tell me: what it's called,
what it takes as input, what it does, and what it returns. Use
analogies a high school student would understand.
```

**9. Comparison Report**
```
Create a file called comparison.md that compares Python and JavaScript.
Include a table with categories: ease of learning, what it's used for,
job market demand, community size, and your recommendation for a
beginner. Keep it factual and balanced.
```

**10. Data Analyzer**
```
Read the CSV file data.csv in this folder. Tell me how many rows and
columns it has, what each column represents, and identify any
interesting patterns or outliers. Then create a summary report called
data-report.md with your findings, including any statistics like
averages, min/max values, and trends.
```

---

## Common Mistakes (and How to Fix Them)

| Mistake | Why It's Bad | Better Version |
|---------|-------------|----------------|
| "Make a website" | Too vague -- what kind? about what? | "Create an HTML portfolio page with my name, bio, and 3 project links" |
| "Fix it" | Fix what? where? how? | "The button on line 23 of index.html doesn't respond to clicks. Add a JavaScript click handler that shows an alert." |
| "Make it better" | Better how? | "Improve the CSS: add more spacing between sections, use a sans-serif font, and make the color scheme blue and white." |
| "Do everything" | Overwhelming scope | Break it into steps: first do X, then Y, then Z |
| "Write my essay about..." | You learn nothing | "Create an outline for my essay about... with key points I should research" |
| Pasting passwords or keys | Security risk | Never paste secrets. Use placeholder text instead. |

---

## Power Tips

- **Start with /plan** -- Ask Codex to plan before it acts. Review the plan, then execute.
- **Reference files with @** -- Type `@filename.js` to point Codex at a specific file.
- **Iterate, don't restart** -- If the output is 80% right, ask Codex to fix the 20%.
- **Use /compact when context fills up** -- Frees memory by summarizing the conversation.
- **One task at a time** -- Multi-part prompts are fine, but don't ask for 10 things at once.

---

*From the AI Agents and OpenAI Codex course. Use the formula. Be specific. Iterate.*
