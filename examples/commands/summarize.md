# /summarize -- Summarize a File or Document

> **What is this?** This is a custom command that reads a file and gives you
> a clear, concise summary of what is in it. Works with any text file --
> code, documents, notes, logs, configuration files, anything.
>
> **How to set it up:** Save this file as `.codex/commands/summarize.md`
> in your project folder. Then type `/summarize filename` in Codex.
>
> **Example usage:**
> - `/summarize README.md` -- "Give me the short version of this document"
> - `/summarize src/` -- "Summarize all the files in this folder"
> - `/summarize meeting-notes.txt` -- "What were the key points?"

---

Read the specified file (or files) and provide a clear, concise summary.

## How to Summarize

1. Read the file or files the user specified.
2. Identify the type of content (code, documentation, notes, data, config, etc.).
3. Create a summary appropriate to the content type.

### For documents and text files:
- Main topic or purpose (one sentence)
- Key points (bullet list, 3-7 points)
- Important details or action items
- Length of original (word count or page count)

### For code files:
- What the code does (one sentence)
- Main functions or components
- Dependencies (what it relies on)
- Anything notable or unusual

### For folders (multiple files):
- How many files and what types
- Overall purpose of the folder
- Brief description of each file
- How the files relate to each other

## Rules

- Keep summaries short. The whole point is to save the user time.
- Put the most important information first.
- Use bullet points, not long paragraphs.
- If the file is very short (under 20 lines), just say what it does rather
  than providing a formal summary.
- If the file is empty or unreadable, say so clearly.
- Do not editorialize. Summarize what is there, do not judge whether
  it is good or bad (unless asked).

## Output Format

```
## Summary: [filename]

**Type:** [document / code / config / data / notes]
**Length:** [word count, line count, or file count]

### What It Is
[One-sentence description]

### Key Points
- [Point 1]
- [Point 2]
- [Point 3]

### Notable Details
- [Anything important that did not fit in the key points]
```
