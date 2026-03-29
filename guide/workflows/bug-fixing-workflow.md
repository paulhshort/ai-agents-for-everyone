# Fixing Problems Workflow

Something is not working right, and you need help figuring out why and fixing it. This workflow walks you through how to describe a problem to Codex, get a diagnosis, and review the fix. You do not need to be technical to follow these steps.

---

## When to Use This Workflow

- A file is not displaying correctly
- Something that used to work has stopped working
- You are getting an error message and do not know what it means
- A process is producing the wrong results
- Something looks different from what you expected

---

## Step 1: Describe the Problem Clearly

The most important step is giving Codex a clear description of what is wrong. The better you describe the problem, the faster Codex can help.

**Use this simple template:**

> "Here is my problem:
> - **What I expected to happen:** [describe the correct behavior]
> - **What is actually happening:** [describe what went wrong]
> - **When it started:** [when did you first notice it?]
> - **Any error messages:** [copy and paste any error text you see]
> - **What I have already tried:** [anything you have done to fix it]"

### Example

> "Here is my problem:
> - **What I expected:** The monthly report should show sales totals for each region.
> - **What is actually happening:** The report shows all zeros for the East region, even though I know there were sales.
> - **When it started:** After I updated the data file last Tuesday.
> - **Error messages:** None, it just shows wrong numbers.
> - **What I have tried:** I checked the data file and the East region data looks correct there."

**Analogy:** Think of it like describing symptoms to a doctor. "I don't feel well" is not very helpful. "I have had a headache for three days, it is worse in the morning, and Tylenol does not help" gives the doctor much more to work with.

---

## Step 2: Point Codex to the Right Place

Tell Codex where the problem is happening. If you know which file or folder is involved, share that information.

**What to say:**

> "The problem seems to be in [file name or folder]. Can you look at it and figure out what is going wrong?"

If you do not know where the problem is, that is fine too:

> "I am not sure which file is causing this. Can you search through the project and find where [the thing that is broken] is handled?"

Codex will search through your files, find the relevant parts, and start investigating.

---

## Step 3: Let Codex Diagnose

Once Codex has the context it needs, ask for a diagnosis.

**What to say:**

> "What do you think is causing this problem? Explain it in simple terms."

Codex will analyze the relevant files, look for issues, and explain what it found. It might say something like:

> "I found the issue. In the data processing file, there is a filter that is accidentally excluding all entries where the region name starts with 'East' because it is looking for 'east' (lowercase) and your data uses 'East' (uppercase). The comparison is case-sensitive, so the East region data gets filtered out."

**Key point:** Ask Codex to explain in simple terms. You have every right to understand what is wrong before agreeing to a fix.

---

## Step 4: Review the Proposed Fix

Before Codex changes anything, ask it to explain what it wants to do.

**What to say:**

> "What changes do you recommend to fix this? Explain what each change does before you make it."

Codex will describe its proposed fix. For example:

> "I recommend changing the comparison on line 42 from an exact match to a case-insensitive match. This way, 'East', 'east', and 'EAST' will all be treated the same. The change is one line in the data processing file."

### What to Look For When Reviewing

- **Does the fix make sense?** Can you follow the logic, even if you do not understand every detail?
- **Is it a small, targeted change?** Fixes that change one or two things are usually safer than fixes that rewrite large sections.
- **Could it break something else?** Ask Codex: "Could this fix cause any other problems?"

---

## Step 5: Apply and Verify the Fix

Once you are comfortable with the proposed fix, let Codex apply it.

**What to say:**

> "That makes sense. Go ahead and make that change."

Codex will show you a **diff** (a before-and-after comparison of the changes). Review this carefully:
- Lines in red (or marked with a minus) are being removed
- Lines in green (or marked with a plus) are being added

After accepting the change:

> "Now can you verify that the fix works? Check that the East region data shows up correctly."

Codex will test or verify the change and report back.

---

## Step 6: Check for Related Problems

A good fix does not just solve the immediate problem. It also checks for similar issues elsewhere.

**What to say:**

> "Are there any other places in the project where the same kind of problem might exist? For example, are there other comparisons that might have the same case-sensitivity issue?"

Codex will search for similar patterns and let you know if there are other spots that need attention.

---

## Tips for Fixing Problems

### Include Error Messages Word for Word
If you see an error message, copy and paste the exact text. Do not paraphrase it. Error messages contain specific technical information that helps Codex pinpoint the problem.

### Share What Changed Recently
Problems often appear after something changed. If you recently updated a file, installed something new, or made a configuration change, tell Codex. This is often the key clue.

### Do Not Skip the Review Step
It can be tempting to just let Codex fix things without reviewing. Resist that temptation. Reviewing ensures the fix is correct and helps you learn what went wrong so you can avoid similar problems in the future.

### Use Version Control as a Safety Net
If your project uses Git (a system for tracking changes), you can always undo changes that do not work out. If you are not sure about a fix, knowing you can undo it makes the process less stressful.

### Start a Fresh Session for Each Problem
If you are dealing with multiple unrelated problems, start a new Codex session for each one. This gives Codex full context for each problem and prevents confusion between issues.

---

## Example: A Complete Problem-Fixing Session

**You:** "The chart in my report is showing December data twice and November data is missing. The report file is in /reports/annual-summary.xlsx and the data is in /data/monthly-sales.csv."

**Codex:** "Let me look at both files... I found the issue. In the data file, the November entry is labeled '11' but the report is looking for 'Nov'. December is labeled '12' and 'Dec', so it appears twice. The months are referenced inconsistently."

**You:** "What do you recommend to fix it?"

**Codex:** "I recommend standardizing all month references in the data file to use numeric format (1-12), and updating the report to read numeric months. This would fix the current issue and prevent similar problems in the future. The changes affect 2 lines in the data file and 1 line in the report template."

**You:** "That sounds good. Show me the changes before applying them."

**Codex:** [shows the diff with the specific lines being changed]

**You:** "Looks right. Go ahead."

**Codex:** "Done. I have verified that all 12 months now appear correctly in the report, each exactly once."

**You:** "Are there any other files that might have the same month formatting issue?"

**Codex:** "I checked the rest of the project. The quarterly reports in /reports/quarterly/ use the same month format. I recommend updating those too. Would you like me to show you the changes?"
