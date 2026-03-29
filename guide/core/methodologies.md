# Working Methods

These are proven approaches for getting the best results from Codex. Think of them as recipes: follow the steps and you will consistently get better outcomes than just winging it.

---

## Plan-Validate-Execute (PVE)

**What it is:** A three-step approach for any task that is not trivially simple. Instead of asking Codex to just "do the thing," you first ask it to explain what it plans to do, then you review and approve the plan, and only then does it carry out the work.

**Real-world analogy:** You would not tell a contractor "remodel my kitchen" and walk away. You would ask for blueprints first, review them, suggest changes, and then give the green light to start building.

### The Three Steps

**Step 1: Plan**
Ask Codex to outline its approach without making any changes.

> "I want to reorganize all the files in my project into a cleaner folder structure. Before you change anything, tell me what you would do and why."

Codex will respond with a proposed plan: which files it would move, what new folders it would create, and the reasoning behind each decision.

**Step 2: Validate**
Read through the plan carefully. Ask questions. Push back on anything you disagree with.

> "I like the idea of separating images from documents, but I want to keep the 'archive' folder where it is. Can you adjust the plan?"

Go back and forth until the plan looks right to you.

**Step 3: Execute**
Give Codex the go-ahead to implement the agreed plan.

> "That plan looks good. Go ahead and make those changes."

Codex will carry out the plan and show you what it changed. Review the changes before accepting them.

### When to Use PVE

- Any task that affects multiple files
- Reorganizing or restructuring things
- Tasks where mistakes would be hard to undo
- Anything you have not done before and want to understand first

### When You Can Skip It

- Simple, one-file changes
- Questions where you just need information
- Tasks you have done many times and trust Codex to handle

---

## WHAT-WHERE-HOW-VERIFY Prompt Formula

**What it is:** A structured way to write your requests so Codex understands exactly what you need. Instead of a vague ask, you break your request into four clear parts.

**Real-world analogy:** Imagine giving directions to a delivery driver. "Deliver the package" is vague. "Deliver the blue box (WHAT) to 123 Main Street, Apartment 4B (WHERE), use the side entrance and ring twice (HOW), and text me a photo of the delivered package (VERIFY)" is much better.

### The Formula

| Part | What You Specify | Example |
|---|---|---|
| **WHAT** | The action you want taken | "Rename all the image files" |
| **WHERE** | The specific location | "in the /photos/vacation folder" |
| **HOW** | Any rules, constraints, or approach | "use the format YYYY-MM-DD-description" |
| **VERIFY** | How to confirm it worked | "list all renamed files so I can check them" |

### Examples

**Simple request:**
> "Rename all the files (WHAT) in the /reports folder (WHERE) so they start with the current date (HOW), and show me the before-and-after list so I can verify (VERIFY)."

**More complex request:**
> "Create a summary document (WHAT) for each subfolder in /projects (WHERE). Each summary should list the files in that folder with a one-line description of each (HOW). Save each summary as README.md in its folder and show me the list of created files (VERIFY)."

### Tips

- You do not need to literally label each section. Just make sure all four parts are present in your request.
- The VERIFY part is especially important. It gives Codex a way to check its own work.
- More specific requests mean fewer rounds of back-and-forth.

---

## Fresh Context Pattern

**What it is:** Starting a brand new Codex session for each separate task, rather than continuing in the same conversation.

**Real-world analogy:** Imagine your desk. If you finish a project but leave all the papers spread out and then start a new project on the same cluttered desk, things get confusing. Clearing the desk before starting something new helps you focus.

### Why It Works

1. **Maximum space:** Every new session gives Codex its full context window to work with. No space is wasted on information from previous tasks.
2. **No confusion:** Codex will not accidentally mix up information from a previous task with your current one.
3. **Better accuracy:** The AI performs best when it has clean, relevant context rather than a jumble of old and new information.

### How to Do It

When you finish one task and want to start something different:

1. If you might want to come back to the current session later, just close it. It is saved automatically and you can resume with `codex resume`.
2. Start a new session by typing `codex`.
3. Give Codex the context it needs for the new task from scratch.

### When to Use a Fresh Start

- Switching between unrelated tasks
- When your context is getting full (orange or red zone)
- When Codex seems confused or gives inconsistent answers
- After completing a major milestone

### When to Stay in the Same Session

- Follow-up questions about the same task
- Iterating on something you just asked Codex to do
- When the context from earlier in the conversation is still relevant

---

## Dual Instance Pattern

**What it is:** Using two separate Codex sessions at the same time for the same project, where one session plans and the other session executes.

**Real-world analogy:** Think of an architect and a builder. The architect designs the house and draws up plans. Then the builder takes those plans and constructs the house. They are two different people with two different jobs, but they work on the same project.

### How It Works

**Session 1 -- The Planner:**
- Ask Codex to analyze your project, think through the approach, and create a detailed plan.
- Iterate on the plan until it is solid.
- Copy the final plan.

**Session 2 -- The Implementer:**
- Start a fresh session (full context window available).
- Paste the plan from Session 1.
- Ask Codex to execute the plan step by step.

### Why This Is Powerful

- The Planner session can think deeply without worrying about using up context on actual changes.
- The Implementer session starts fresh and can focus entirely on executing the plan.
- If the implementation runs into problems, you can go back to the Planner session to revise the plan, then start a new Implementer session.

### When to Use It

- Large, complex tasks that involve many files
- Tasks where planning and execution are both substantial
- When you want to preserve the planning conversation separately from the implementation
- Projects where you might need to re-execute the plan multiple times (for example, on different parts of a project)

### Practical Example

**In Session 1 (Planner):**
> "I have a folder full of 500 photos with random names. I want to organize them by the date they were taken, with folders for each month. Analyze the situation and give me a detailed plan for how to do this, including handling photos where the date cannot be determined."

**Copy the plan, then in Session 2 (Implementer):**
> "Here is a plan for organizing photos. Please execute it step by step, showing me the results after each step:
> [paste the plan from Session 1]"

---

## Combining the Methods

These methods work well together:

1. Use the **Fresh Context Pattern** to start clean.
2. Use the **WHAT-WHERE-HOW-VERIFY** formula to write clear requests.
3. For complex tasks, use **Plan-Validate-Execute** to make sure Codex has the right approach.
4. For very large tasks, use the **Dual Instance Pattern** to separate planning from execution.

The more you practice these patterns, the more natural they become, and the better your results will be.
