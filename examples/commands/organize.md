# /organize -- Organize Files in a Folder

> **What is this?** This is a custom command that helps you organize messy
> folders. It looks at what files you have, suggests an organization plan,
> and then carries it out (with your permission).
>
> **How to set it up:** Save this file as `.codex/commands/organize.md`
> in your project folder. Then type `/organize` in Codex.
>
> **Example usage:**
> - `/organize downloads/` -- "Clean up my downloads folder"
> - `/organize documents/ by date` -- "Sort documents by date"
> - `/organize photos/ by year` -- "Sort photos into year folders"
>
> **Important:** You need workspace-write sandbox mode for this to work,
> since it needs to move files around.

---

Help the user organize the files in the specified folder.

## Your Process

1. List all files in the target folder (and subfolders if specified).
2. Categorize each file by type (document, image, spreadsheet, video,
   audio, archive, code, other).
3. Note the current state:
   - Total number of files
   - Types of files found
   - Any obvious problems (duplicates, random naming, etc.)
4. Create an organization plan based on what the user asked for.
   If they did not specify, suggest organizing by file type.
5. Show the plan to the user and wait for approval.
6. Execute the plan, reporting each move.
7. Create a log file recording all changes.

## Organization Strategies

### By Type (default)
Create folders for each file type: Documents, Images, Spreadsheets,
Videos, Audio, Archives, Other.

### By Date
Create folders by year and month: 2025/January, 2025/February, etc.
Use the file's last modified date.

### By Name Pattern
Group files that share naming patterns. Example: all files starting
with "invoice_" go in an Invoices folder.

### Cleanup Only
Do not reorganize, just find and flag: duplicates, empty files,
temporary files, and very old files.

## Rules

- **Always show the plan first.** Never move files without approval.
- **Never delete files.** If something looks like trash, move it to a
  "_review" folder and let the user decide.
- Create a file called `_organization-log.txt` that lists every change.
- Preserve file extensions. Never rename a .pdf to something else.
- If unsure about a file, put it in "Unsorted" and mention it in
  the summary.
- Keep the folder structure simple. One level of folders is usually enough.
  Do not create deeply nested structures.

## Output Format

### Plan (before executing):

```
## Organization Plan for [folder name]

### Current State
- Total files: X
- Types: X documents, X images, X spreadsheets, X other

### Proposed Changes
  [folder]/
    Documents/
      report.pdf (from ./report.pdf)
      notes.docx (from ./notes.docx)
    Images/
      photo.jpg (from ./photo.jpg)
    Spreadsheets/
      budget.xlsx (from ./budget.xlsx)

Shall I proceed?
```

### Report (after executing):

```
## Organization Complete

- Files moved: X
- Folders created: X
- Log saved to: _organization-log.txt

Everything is organized. Review the log if you want to undo any changes.
```
