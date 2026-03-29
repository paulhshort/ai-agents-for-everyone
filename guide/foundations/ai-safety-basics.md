# AI Safety Basics

## Why This Matters

Let's be clear up front: this section isn't about scaring you.
It's about **being smart.**

AI is a powerful tool. Like any powerful tool, it works best when
you know how to use it safely. You don't need a lecture about the
dangers of cars before you learn to drive -- you just need to know
the rules of the road.

These are the rules of the road for AI.

---

## The Sandbox: Your Safety Net

### What Is a Sandbox?

In video games, there's often a **practice area** -- a place where
you can try things out without consequences. You can crash the car,
fall off the cliff, or blow something up, and nothing in the real
game gets affected. You just respawn and try again.

A **sandbox** in AI works the same way.

> **A sandbox is a contained environment where an AI agent can
> work without affecting your real files, real system, or real data.**

```
WITHOUT A SANDBOX:

  Agent runs a command  -->  Affects your REAL computer
  Agent deletes a file  -->  Your REAL file is gone
  Agent installs stuff  -->  Your REAL system changes


WITH A SANDBOX:

  Agent runs a command  -->  Only affects the sandbox copy
  Agent deletes a file  -->  Only the sandbox copy is gone
  Agent installs stuff  -->  Only the sandbox changes

  Your real computer? Untouched.
```

### When Do You Need a Sandbox?

- When you're experimenting with something new
- When you're not sure what the agent will do
- When you're letting an AI run code for the first time
- When the stakes are high (important files, real data)

Most coding AI tools run in sandboxes by default.
This means you can let the AI try things without worrying
about it breaking your computer.

---

## Approval Modes: Parental Controls for Your AI

Remember how some apps have parental controls?
An 8-year-old's tablet might require a parent's password before
downloading a new app or making a purchase.

AI agents have something similar: **approval modes.**

### How Approval Modes Work

```
SUGGEST MODE (most restrictive):
  Agent: "I think we should delete the old log files."
  You:   "Sure, go ahead." or "No, leave them."
  --> The agent can only suggest. You do everything.


APPROVE MODE (balanced):
  Agent: "I want to edit main.py to fix the bug.
          Here's the change I'll make: [shows diff]
          Approve? [Yes / No]"
  You:   "Yes."
  --> The agent can act, but asks before anything important.


AUTO MODE (most permissive):
  Agent: (reads files, edits code, runs tests, fixes errors)
  Agent: "Done! Here's what I did and why."
  --> The agent handles everything and reports back.
```

### Which Mode Should You Use?

| Situation | Recommended Mode |
|-----------|-----------------|
| First time using an AI agent | Approve mode |
| Working on important files | Approve mode |
| Learning how agents work | Suggest mode |
| Routine task you've done before | Auto mode |
| You're not sure what will happen | Approve mode |

**When in doubt, use Approve mode.** You can always loosen the
restrictions as you get more comfortable.

---

## What to NEVER Share with AI

This is critical. Read it twice.

### The Never List

**Never give AI any of the following:**

- **Passwords** -- to anything. Ever. Not even "just to test something."
- **Social Security numbers or government IDs**
- **Credit card numbers or bank information**
- **Private photos** -- especially of yourself or others
- **Someone else's personal information** without their consent
- **Medical records or health information**
- **Private addresses or phone numbers**
- **School login credentials**
- **API keys, secret tokens, or access codes** (if you're coding)

### Why?

When you type something into an AI, that text gets sent to a
server somewhere. Depending on the service:

- It might be stored temporarily or permanently
- It might be reviewed by employees for quality purposes
- It might (in some cases) be used to train future models

Even if the company promises privacy, you should treat anything
you type into an AI as **potentially public.**

> **The rule is simple: don't tell AI anything you wouldn't
> write on a whiteboard in a public classroom.**

---

## Critical Thinking: AI Can Be Wrong

This is maybe the most important safety skill:

> **Never assume AI is correct just because it sounds confident.**

### The Confidence Problem

AI always sounds sure of itself. It doesn't say "umm" or
"I'm not confident about this." It states things as facts,
even when those things are completely made up.

```
WHAT AI MIGHT SAY:
  "The Treaty of Westphalia was signed in 1648 by
   representatives of 14 European nations, establishing
   the principle of national sovereignty."

IS IT TRUE?
  Some of it is. Some of it might not be.
  The AI sounds equally confident about all of it.
  You can't tell which parts are accurate just by
  how it's written.
```

### The Verify Rule

For anything that actually matters, **verify it.**

- Writing a paper? Check the AI's claims against reliable sources.
- Using AI-generated code? Test it. Read it. Understand it.
- Getting medical, legal, or financial information? Talk to a real professional.
- AI gave you a statistic? Look up the actual source.

Think of AI like Wikipedia: often helpful, sometimes wrong,
and your teacher won't accept it as your only source.

---

## Ethical Use: Don't Be That Person

AI gives you a lot of power. With that comes responsibility.

### In School

**Don't use AI to cheat.** This sounds obvious, but the line
can get blurry. Here's a guide:

| Using AI to... | Okay? |
|----------------|-------|
| Explain a concept you don't understand | Yes |
| Check your work after you've done it | Yes |
| Brainstorm ideas before you start writing | Yes |
| Generate an entire essay and submit it as yours | No |
| Have AI do your homework while you do something else | No |
| Paraphrase AI's answer slightly and call it your own | No |
| Use AI during a test without permission | No |

The key question: **"Am I learning, or am I cheating?"**

If you're using AI to *understand* the material better, great.
If you're using AI to *avoid* learning the material, that's cheating --
and you're only cheating yourself, because you won't actually learn anything.

### With Other People

- **Don't impersonate** -- Don't use AI to pretend to be someone
  else in texts, emails, or social media.
- **Don't deceive** -- If you used AI to help create something,
  be honest about it when honesty is expected.
- **Don't harass** -- Don't use AI to generate harmful content
  about real people.
- **Don't spread misinformation** -- If AI gives you something
  that turns out to be false, don't share it without checking.

---

## Privacy: What Happens to Your Data

When you use an AI service, your data goes on a journey:

```
You type a message
        |
        v
Your message travels over the internet
        |
        v
It arrives at the AI company's servers
        |
        v
The AI processes it and generates a response
        |
        v
The response travels back to you
```

### What Gets Stored?

This varies by service, but generally:

- **Your conversation** may be stored on the company's servers
- **Some services** let you opt out of data storage
- **Some services** use conversations to improve their models
- **Enterprise/school versions** often have stronger privacy protections

### What You Can Do

- Read the privacy policy (at least skim it)
- Use the privacy settings available to you
- Delete your conversation history when you can
- Don't share anything sensitive (see the "Never List" above)
- If your school provides an AI tool, use that one -- it
  probably has better privacy protections than the free version

---

## Trust But Verify: The Golden Rule

There's an old saying: "Trust but verify."
It's the perfect approach for AI.

### What This Looks Like in Practice

**Trust:** Use AI. It's genuinely useful. Let it help you brainstorm,
write drafts, explain concepts, debug code, and organize your thoughts.

**Verify:** Before relying on anything it produced:

1. **Read it carefully.** Does it actually make sense?
2. **Check the facts.** Are the dates, names, and numbers correct?
3. **Test the code.** Does it actually run? Does it do what it's supposed to?
4. **Get a second opinion.** Ask a teacher, check a textbook, look it up.
5. **Use your own judgment.** You're smarter than you think. If something
   feels off, it probably is.

```
ANALOGY: AI AS A FIRST DRAFT

Think of everything AI gives you as a FIRST DRAFT.

  First drafts are useful  -->  They give you something to work with
  First drafts need editing -->  They're never perfect
  First drafts are yours    -->  You're responsible for the final version
  to improve

Never submit a first draft without reviewing it.
Never submit AI output without reviewing it.
Same principle.
```

---

## Quick Safety Checklist

Before you use AI for something important, run through this:

- [ ] Am I sharing any sensitive personal information? (If yes, remove it.)
- [ ] Will I verify the important facts in the output? (If no, plan to.)
- [ ] Am I using this ethically? (Am I learning, or am I cheating?)
- [ ] Do I understand what the AI did? (If not, ask it to explain.)
- [ ] Am I okay with this text being stored on a server? (If not, rephrase.)
- [ ] Would I be comfortable if my teacher saw this conversation? (If not, reconsider.)

---

## The Bottom Line

AI safety isn't about being afraid of AI.
It's about being **smart** about how you use it.

The same way you learned not to click suspicious links,
not to share your password, and not to believe everything
on the internet -- now you're learning how to use AI well.

> **Use AI to learn more, work smarter, and build things.**
> **Don't use it to cheat, deceive, or avoid thinking.**
> **Always verify. Always stay in control. Always use your brain.**

The AI is a tool. You are the person using it.
The responsibility is yours -- and so is the opportunity.

---

*These foundations cover everything you need to know to start
using AI tools effectively and responsibly. Now go build something.*
