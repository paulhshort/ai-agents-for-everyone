# Reasoning Models: AI That Thinks Before It Speaks

## A Quick History of Getting Smarter

AI language models have been evolving fast.
Each generation has gotten significantly better at handling complex tasks.

```
THE EVOLUTION OF LANGUAGE MODELS

GPT-3 (2020)     "Hey, I can write paragraphs that sound human!"
     |
     v
GPT-4 (2023)     "Now I can pass the bar exam and write real code."
     |
     v
GPT-5 (2025)     "I can reason through multi-step problems
                   and think before I answer."
     |
     v
GPT-5.4 (2026)   "I can tackle expert-level tasks with deep
                   reasoning, planning, and tool use."
```

Think of it like smartphones:

- **GPT-3** was like the first iPhone -- mind-blowing for its time, but limited.
- **GPT-4** was like a modern smartphone -- genuinely useful for real work.
- **GPT-5** is like having a phone that actually *pauses to think* before giving you directions, instead of just blurting out the first route it finds.
- **GPT-5.4** is the latest and most capable -- like a phone with a brilliant assistant that plans ahead, uses tools on its own, and rarely makes mistakes.

The same evolution happened with Anthropic's models. Today's
**Claude Opus 4.6** and **Claude Sonnet 4.6** are reasoning-capable
agents, just like GPT-5.4.

The big leap isn't just "better at predicting the next word."
It's that newer models can **reason** -- break problems into steps
and work through them logically.

---

## What Does "Reasoning" Mean for AI?

When we say an AI model can "reason," we mean it can do something
called **chain-of-thought thinking.**

### Without Reasoning (Old-School AI)

```
You:  "If I have 3 boxes, and each box has 4 bags,
       and each bag has 2 marbles, how many marbles total?"

AI:   "24 marbles."   (just pattern-matches to an answer)
```

Maybe it gets it right, maybe not. It just jumped to a final answer.

### With Reasoning (Modern AI)

```
You:  "If I have 3 boxes, and each box has 4 bags,
       and each bag has 2 marbles, how many marbles total?"

AI:   (thinking...)
      "Let me work through this step by step.
       - 3 boxes, each with 4 bags = 3 x 4 = 12 bags
       - 12 bags, each with 2 marbles = 12 x 2 = 24 marbles
       The answer is 24 marbles."
```

Same answer, but the AI **showed its work.** More importantly,
the process of thinking step by step makes it more likely to get
complex problems right.

### Why Thinking Step by Step Helps

It's the same reason your math teacher says "show your work."

When you try to solve a hard problem in your head all at once,
you're more likely to make mistakes. But when you write out each
step, you catch errors along the way.

Reasoning models do the same thing -- they break the problem down
before answering.

---

## Fast Models vs. Deep-Thinking Models

Not every question needs deep thinking. Modern AI systems offer
**different models for different jobs.**

### Fast-Response Models (like GPT-5.4-mini)

- Answers quickly
- Uses less computing power (cheaper)
- Great for simple tasks
- Doesn't "think hard" about the answer

**Best for:**
- "What's the capital of France?"
- "Translate this sentence to Spanish."
- "Write a quick email saying I'll be late."
- Autocomplete, simple summaries, casual chat

### Deep-Thinking Models (like GPT-5.4)

- Takes longer to respond
- Uses more computing power
- Works through problems step by step
- Much better at complex reasoning

**Best for:**
- "Debug this code and explain why it's broken."
- "Analyze the themes in this novel and compare them."
- "Plan a multi-step project with dependencies."
- "Solve this physics problem with multiple variables."

```
ANALOGY: TEXTING A FRIEND

Fast model = Your friend who instantly replies
             "idk probably yes lol"
             Quick, but not always thoughtful.

Deep model = Your friend who reads your message,
             thinks for a minute, then sends a
             well-organized paragraph.
             Slower, but actually helpful.
```

---

## Reasoning Effort: How Hard Should the AI Think?

Some AI systems let you control how much effort the model puts
into thinking. This is called **reasoning effort**.

Think of it like this:

```
REASONING EFFORT LEVELS

LOW    -->  "Quick, what's the first thing that comes to mind?"
            Like answering a trivia question at a party.

MEDIUM -->  "Think about it for a moment."
            Like answering a question in class.

HIGH   -->  "Really think this through carefully."
            Like working through an exam problem.
```

### When to Use Each Level

| Reasoning Effort | When to Use It | Example |
|-------------------|----------------|---------|
| Low | Simple facts, quick tasks | "What year did WWII end?" |
| Medium | Most everyday tasks | "Summarize this article for me." |
| High | Complex analysis, tricky problems | "Compare these two arguments and find the logical flaws." |

You don't need to overthink this setting. The general rule is:

> **Simple question? Low effort is fine.**
> **Important or complex task? Crank up the reasoning.**

---

## Real Examples You Can Relate To

### Example 1: Simple Question

> **"What's 2 + 2?"**

You don't need the AI to think deeply about this.
A fast model with low reasoning effort will instantly say "4."
Using a deep-thinking model here would be like hiring a
mathematician to count your change.

### Example 2: Medium Complexity

> **"Write a 5-paragraph essay on climate change."**

A medium model with medium reasoning effort works perfectly.
It needs to organize ideas and structure an argument, but it's
a well-known topic with clear patterns to follow.

### Example 3: Needs Deep Reasoning

> **"Explain why the French Revolution happened, considering
> economic, social, and political factors, and compare it to
> the American Revolution."**

Now you want the deep-thinking model with high reasoning effort.
This requires:
- Understanding multiple historical events
- Comparing and contrasting
- Organizing complex arguments
- Drawing connections between different factors

A fast model might give you a surface-level answer.
A reasoning model will break it down systematically.

### Example 4: Debugging Code

> **"My program is supposed to sort a list, but it keeps crashing
> on the third element. Here's the code..."**

This is where reasoning models shine. The AI needs to:
1. Read and understand the code
2. Trace through the logic step by step
3. Identify where something goes wrong
4. Explain the fix

Without reasoning, the AI might just guess at common errors.
With reasoning, it walks through the code like a debugging partner.

---

## What's Happening Behind the Scenes

When a reasoning model gets a hard question, something special
happens before you see the response:

```
+----------------------------+
|  You ask a hard question   |
+----------------------------+
            |
            v
+----------------------------+
|  The model generates       |
|  INTERNAL "thinking" text  |
|  (you may or may not see   |
|  this part)                |
|                            |
|  "Okay, let me break this  |
|   down. First I need to    |
|   consider X. Then Y       |
|   follows from X. But      |
|   wait, what about Z?      |
|   Let me reconsider..."    |
+----------------------------+
            |
            v
+----------------------------+
|  After reasoning through   |
|  the problem internally,   |
|  it gives you its final    |
|  answer                    |
+----------------------------+
```

Some AI interfaces show you the "thinking" process.
Others hide it and just show the final answer.
Either way, the reasoning happens before the response.

---

## The Trade-offs

Nothing is free. Here are the trade-offs with reasoning models:

| | Fast Model | Reasoning Model |
|---|---|---|
| **Speed** | Instant | Takes a few extra seconds |
| **Cost** | Cheaper | More expensive |
| **Simple tasks** | Perfect | Overkill |
| **Complex tasks** | Hit or miss | Much more reliable |
| **Explaining its work** | Often skips steps | Shows its reasoning |

The sweet spot: **use fast models for quick stuff,
reasoning models for anything that actually matters.**

It's like using a calculator vs. asking a tutor.
The calculator is faster, but the tutor can explain *why*.

---

## Key Takeaways

1. AI models have gotten dramatically better at reasoning over each generation.
2. **Chain-of-thought** = the AI thinks step by step instead of jumping to an answer.
3. **Fast models** are for simple tasks. **Deep-thinking models** are for complex ones.
4. **Reasoning effort** lets you control how hard the AI thinks -- match it to the difficulty of the task.
5. Reasoning takes more time and resources, but produces much better answers for hard problems.
6. When in doubt, start with a fast model. If the answer isn't good enough, switch to a reasoning model.

---

*Next up: [What Are Agents?](what-are-agents.md) -- the moment AI goes from "answering questions" to "doing things."*
