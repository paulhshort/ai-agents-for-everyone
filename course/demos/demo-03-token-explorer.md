# Demo 03: Token Explorer

> **Concept:** Tokens are the currency of AI -- every word costs something
> **Time:** 10 minutes
> **Difficulty:** Beginner
> **Wow Factor:** ★★★☆☆
> **Day:** 1, After Break

---

## What Students Will See

How AI breaks text into tokens, why context windows matter, and that
interacting with an AI has a measurable cost. Students will discover that some
words cost more tokens than others.

---

## Preparation

No special files needed. Just launch Codex in any mode:

```bash
mkdir -p ~/codex-demos/tokens
cd ~/codex-demos/tokens
codex --sandbox read-only
```

---

## Live Demo Script

### Step 1 -- What Is a Token? (2 min)

**SAY:**
> "Before we keep going, I need to teach you one word: TOKEN. Everything you
> send to an AI -- every word, every character -- gets broken into pieces
> called tokens. Think of tokens like coins in an arcade. Every time you play,
> you spend coins. Every time you send a prompt, you spend tokens."

**SAY:**
> "A rough rule of thumb: 1 token is about 3/4 of a word. So 100 words is
> roughly 130-140 tokens."

### Step 2 -- Start Small (2 min)

Type a very short prompt:

```
Hi
```

After Codex responds, type:

```
/status
```

**SAY:**
> "See that? Even just saying 'Hi' used some tokens. The prompt, plus the
> system instructions Codex always sends, plus the response. Let's see what
> happens when we say more."

### Step 3 -- Say More, Spend More (2 min)

Now type a longer prompt:

```
Write me a detailed paragraph about the history of computers, starting from
Charles Babbage's Analytical Engine in the 1800s all the way to modern
smartphones. Include at least five key milestones.
```

After the response, type:

```
/status
```

**SAY:**
> "Look how the token count jumped. A bigger question costs more. A bigger
> answer costs more. And here's the important part -- the AI remembers
> everything we've said so far. So EVERY new message also re-sends the entire
> conversation history. The cost keeps growing."

### Step 4 -- The Context Window (2 min)

**SAY:**
> "There's a limit to how many tokens the AI can handle at once. It's called
> the CONTEXT WINDOW. Think of it like the AI's short-term memory. GPT-5.4
> has a huge context window, but it's still finite."

**SAY:**
> "This is why the /compact command exists. Watch."

```
/compact
```

**SAY:**
> "Compact squeezes the conversation down so it uses fewer tokens. It's like
> summarizing your notes instead of keeping every page."

### Step 5 -- The Fun Challenge (2 min)

**SAY:**
> "Here's a brain teaser for you: Can you think of a SHORT piece of text that
> uses a LOT of tokens?"

Let students guess for 30 seconds.

**REVEAL:**
> "Unusual words, technical jargon, and words from other languages get split
> into MORE tokens. For example, the word 'the' is one token. But a word like
> 'otorhinolaryngology' might be five or six tokens because the AI has to
> break it into smaller pieces it recognizes."

Try it:

```
What does otorhinolaryngology mean?
```

```
/status
```

Then:

```
What does "the" mean?
```

```
/status
```

**SAY:**
> "See the difference? Some words are cheap, some are expensive. Emojis,
> special characters, code -- they all tokenize differently."

---

## Key Concepts to Write on the Board

```
TOKEN     =  A piece of text (~3/4 of a word)
CONTEXT   =  Everything the AI is holding in memory right now
WINDOW    =  The maximum context size (the memory limit)
/status   =  Check your token usage
/compact  =  Compress the conversation to save tokens
```

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| /status doesn't show token counts clearly | Explain the concept verbally: "Even if we can't see the exact number, every message adds to the running total" |
| Students ask "How much does it cost in money?" | Great question. Explain that companies charge per token -- typically fractions of a cent per token, but it adds up at scale. |

---

## Key Takeaway to Repeat

**"Every word costs something. Be clear, be specific, don't waste tokens."**

This sets up Demo 04 perfectly -- specificity matters in prompts partly because
vague prompts waste tokens on bad results you'll have to redo.

---

*Next up: Demo 04 -- Prompt Showdown*
