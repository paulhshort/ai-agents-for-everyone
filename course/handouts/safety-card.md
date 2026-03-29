# AI Safety Pocket Guide

**Keep this card. Reference it every time you use an AI agent.**

---

## Never Share These With AI

- Passwords or login credentials
- API keys, tokens, or secrets
- Social Security numbers or government IDs
- Credit card or bank account numbers
- Private photos or personal documents
- Home address or phone number
- Other people's private information

**If you accidentally paste something sensitive:** close the session immediately. The data may have been sent to the API. Change any exposed passwords or rotate any exposed keys.

---

## Sandbox Modes at a Glance

| Mode | What It Can Do | When to Use It |
|------|---------------|----------------|
| **read-only** | Look at files only | Exploring, learning, asking questions |
| **workspace-write** | Edit files in your project folder | Building projects, creating files |
| **danger-full-access** | Anything on your computer | Almost never. Expert use only. |

**Default to workspace-write.** Only use danger-full-access if you fully understand what you're asking the AI to do and are prepared for any outcome.

---

## The Review Rule

**Always read what the AI plans to do before approving it.**

Before you hit "approve," ask yourself:

1. Do I understand what it's about to do?
2. Is it only touching files I expect?
3. Could this delete or overwrite something important?
4. Am I comfortable with this action?

If the answer to any of these is "no," reject it and ask Codex to explain its plan.

---

## Approval Modes

| Mode | Behavior |
|------|----------|
| `untrusted` | Asks before every action (safest) |
| `on-request` | Asks before potentially risky actions |
| `never` | Acts without asking (you review after) |
| `--full-auto` | Fully automatic (no approval prompts) |
| `--yolo` | Full auto with network access (risky) |

**For learning and everyday use:** stick with `untrusted` or `on-request`.

---

## Academic Honesty Guidelines

**Using AI well (the tool approach):**
- "Explain this concept to me so I understand it"
- "Help me outline my essay -- I'll write the actual paragraphs"
- "Check my code for bugs and explain what's wrong"
- "Generate practice problems for me to solve"
- "Teach me how this works step by step"

**Using AI poorly (the shortcut approach):**
- "Write my essay for me"
- "Solve this homework problem and give me the answer"
- "Rewrite my friend's project so it looks different"
- "Generate code for my assignment that I can't explain"

**The test:** If someone asked you to explain what the AI produced, could you? If yes, you used it as a tool. If no, it did your work for you.

**When in doubt:** Ask your teacher. Every school has different policies. Knowing the rules is your responsibility.

---

## Quick Safety Checklist

Before every Codex session, ask yourself:

- [ ] Am I in the right sandbox mode for this task?
- [ ] Is there anything sensitive in this folder I wouldn't want an AI to read?
- [ ] Do I understand what I'm about to ask it to do?
- [ ] Will I review every action before approving?

---

*From the AI Agents and OpenAI Codex course. Stay safe. Stay smart. Stay in control.*
