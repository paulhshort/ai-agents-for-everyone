# Exploration Workflow: Understanding Something New

This workflow helps you use Codex to make sense of something unfamiliar, whether it is a folder full of files someone sent you, a project you just inherited, or a topic you want to learn about. No technical background needed.

---

## When to Use This Workflow

- You received a collection of files and have no idea what is in them
- You are taking over a project from someone else
- You want to understand how something is organized before making changes
- You are curious about what a folder or project contains

---

## Before You Start

1. **Open your terminal** (the text-based interface on your computer).
2. **Navigate to the folder** you want to explore, or know its path.
3. **Start Codex in read-only mode** so you can explore safely without changing anything:

```
codex --sandbox read-only
```

Using read-only mode means Codex can look at everything but cannot accidentally modify or delete anything. It is like browsing a library without being able to check out or move the books.

---

## Step 1: Get the Big Picture

Start by asking Codex for an overview. Do not dive into details yet.

**What to say:**

> "Look at the files and folders in this project and give me a high-level summary. What is this project about? How is it organized?"

Codex will scan through the files and give you a plain-language overview: what the project does, how the folders are structured, and what the main pieces are.

**Analogy:** This is like asking a tour guide for an overview of a city before you start visiting specific neighborhoods.

---

## Step 2: Understand the Structure

Now ask about the organization in more detail.

**What to say:**

> "List all the main folders and explain what each one contains. Which files are the most important?"

This gives you a mental map of where things live. Codex will highlight the key files and explain the purpose of each major folder.

**Follow-up questions you might ask:**
- "Which files are the largest?"
- "Are there any files that seem out of place or unusual?"
- "What types of files are in this project? (documents, images, data, etc.)"

---

## Step 3: Dive Into Specific Areas

Once you have the big picture, explore the parts that interest you most.

**What to say:**

> "Tell me more about the [specific folder or file]. What does it do? What is inside it?"

For example:
- "What is in the /reports folder? Summarize each file."
- "Open the file called 'summary.txt' and tell me what it says."
- "Are there any configuration files? What do they control?"

---

## Step 4: Ask Questions in Plain Language

You do not need to use technical terms. Just ask naturally.

**Good questions to try:**

> "If I wanted to find where [specific thing] is mentioned, where would I look?"

> "Is there anything in here that looks like it has not been updated in a long time?"

> "What would someone need to know if they were working with this project for the first time?"

> "Are there any instructions or documentation files included?"

> "Can you find any contact information or author names in these files?"

---

## Step 5: Create a Summary for Yourself

Once you understand the project, ask Codex to create a summary you can keep.

**What to say:**

> "Create a summary of everything we have learned about this project. Include the folder structure, the purpose of each main section, and any important details. Format it so I can easily refer back to it."

You can save this summary for future reference. It is like having a cheat sheet for a project you might come back to later.

---

## Tips for Effective Exploration

### Go Broad, Then Narrow
Start with the big picture, then zoom into the areas that matter most. Do not try to understand every file at once.

### Use /compact When Exploring Large Projects
If you are exploring a project with many files, your context can fill up. Use `/compact` periodically to free up space, especially before diving into a new area.

### Start a New Session for Different Areas
If a project has several distinct sections, consider using a fresh session for each one. This gives Codex maximum context for each area.

### Ask "Why" Questions
Do not just ask what things are. Ask why they are organized that way, what purpose they serve, and how they relate to each other.

### Keep Notes Outside of Codex
If you discover important information, write it down separately (in a text file, a notebook, wherever works for you). Codex sessions are saved, but having your own notes is always helpful.

---

## Example: Exploring a Project You Just Received

Here is a realistic example of how an exploration session might go:

**You:** "I just received this folder from a colleague. Can you look through it and tell me what is in here?"

**Codex:** "This folder contains a project for tracking monthly sales data. There are three main folders: /data (containing CSV files with sales numbers for each month), /reports (containing formatted PDF reports), and /scripts (containing files that process the data). The most recently modified files are in the /data folder..."

**You:** "What is in the /data folder specifically?"

**Codex:** "The /data folder contains 12 CSV files, one for each month of 2025. Each file has columns for date, product name, quantity sold, and revenue..."

**You:** "Is there any documentation about how the scripts work?"

**Codex:** "There is a file called README.md in the /scripts folder that explains how to run the data processing. It says..."

**You:** "Create a summary of everything we have discussed so I can reference it later."

And just like that, you have gone from "what is all this?" to a clear understanding of the project.
