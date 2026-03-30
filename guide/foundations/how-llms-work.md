# How Large Language Models Work

## The World's Best Text Predictor

Imagine someone who has read **every book, every website, every article ever written.**

They don't *understand* any of it the way you do.
They can't feel the sadness in a novel or laugh at a joke.
But they have gotten *incredibly* good at one thing:

**Predicting what word comes next.**

That's what a Large Language Model (LLM) is.

An LLM is an AI that has been trained on enormous amounts of text so that,
given any input, it can predict what text should come next -- and it's
shockingly good at it.

---

## What "Large" Means

The "Large" in Large Language Model refers to two things:

1. **The training data** -- hundreds of billions of words from books,
   websites, articles, code, and more.
2. **The model itself** -- billions of mathematical parameters
   (think of them as dials) that were tuned during training.

To put it in perspective:

```
If you read 1 book per week for 80 years,
you'd read about 4,160 books.

An LLM was trained on the equivalent of
MILLIONS of books.
```

---

## Next Word Prediction: The Core Idea

Everything an LLM does comes down to one trick:

**Given the words so far, what word is most likely to come next?**

Here's an example. If you see:

> "The sun rises in the ___"

You'd probably say "east." So would the AI. It has seen that pattern
thousands of times in its training data.

But LLMs don't just predict one word. They predict the next word,
then use that word to predict the *next* next word, and so on.

```
INPUT:    "Tell me a joke about"
   |
   v
PREDICT:  "cats"
   |
   v
PREDICT:  "."
   |
   v
PREDICT:  "Why"
   |
   v
PREDICT:  "did"
   |
   v
PREDICT:  "the"
   |
   v
(... and so on, one word at a time)
```

That's why AI generates text word by word (you can sometimes see it
typing in real time). It's literally making it up as it goes, one
prediction at a time.

---

## What Are Tokens?

The AI doesn't actually work with whole words.
It works with small chunks of text called **tokens**.

> A **token** is roughly a word or part of a word.
> Short common words are usually one token.
> Longer or unusual words get split into pieces.

### Example Breakdown

Let's take the sentence: **"The cat sat on the mat"**

```
 The  |  cat  |  sat  |  on  |  the  |  mat
  1      2       3      4      5       6
                                          = 6 tokens
```

Pretty close to one token per word. But it's not always that clean:

```
"unfortunately"  -->  "un" + "fortunate" + "ly"  =  3 tokens
"ChatGPT"        -->  "Chat" + "G" + "PT"        =  3 tokens
"hello"          -->  "hello"                     =  1 token
```

### Why Does This Matter?

Because **everything the AI reads and writes costs tokens.**

- The question you type? Counted in tokens.
- The answer it gives? Counted in tokens.
- The maximum it can handle at once? Measured in tokens.

Think of tokens as the AI's "currency" -- every interaction spends some.

---

## The Context Window: The AI's Whiteboard

Here's one of the most important concepts to understand:

> **The context window is the total amount of text the AI can "see"
> at one time.**

### The Whiteboard Analogy

Imagine the AI has a whiteboard. Everything in your conversation --
every question you ask, every answer it gives -- gets written on
this whiteboard.

The AI can only look at this one whiteboard to understand what's
going on. It has **no other memory.**

```
+--------------------------------------------------+
|               THE AI'S WHITEBOARD                 |
|                (Context Window)                   |
|                                                   |
|  You: "Hey, help me with my history essay"        |
|  AI:  "Sure! What's the topic?"                   |
|  You: "The causes of World War I"                 |
|  AI:  "Great, here are the main causes..."        |
|  You: "Can you go deeper on alliances?"           |
|  AI:  "The alliance system in Europe..."          |
|  You: "Now help me with the conclusion"           |
|  AI:  "Here's a strong conclusion..."             |
|                                                   |
|  [  ~~~~~~~~ more conversation ~~~~~~~~  ]        |
|                                                   |
|  ... eventually the whiteboard fills up ...       |
+--------------------------------------------------+
```

**When the whiteboard fills up, the AI starts losing track of
what was written at the top.** It's like the oldest messages
get erased to make room for new ones.

This is why, in a really long conversation, the AI might "forget"
something you told it earlier.

### How Big Is the Whiteboard?

Different models have different context window sizes:

```
MODEL                    CONTEXT WINDOW       REAL-WORLD EQUIVALENT
----------------------------------------------------------------------
Older models (GPT-3)     ~4,000 tokens        ~6 pages of text
GPT-5.4                  ~200,000 tokens      ~a 400-page novel
Claude Opus 4.6          ~1,000,000 tokens    ~5 full novels
```

A 200,000-token context window means you could paste an entire
Harry Potter book into the chat and still have room to ask
questions about it.

---

## Temperature: The Creativity Dial

When the AI predicts the next word, there are usually
**several possible words** it could pick.

For the sentence "I love eating ___":

```
  pizza     35% likely
  ice       20% likely
  chocolate 15% likely
  food      10% likely
  sushi      8% likely
  rocks      0.1% likely
```

The **temperature** setting controls how the AI picks from these options.

### Low Temperature (0.0 - 0.3): "Play it safe"

The AI almost always picks the most likely word.
Responses are predictable, consistent, and factual.

> Good for: math homework, coding, factual questions,
> anything where you want the "right" answer.

### Medium Temperature (0.4 - 0.7): "Be balanced"

The AI sometimes picks less obvious words.
Responses are natural and varied.

> Good for: essays, emails, general conversation.

### High Temperature (0.8 - 1.0+): "Get creative"

The AI is more willing to pick surprising words.
Responses are creative, unexpected -- and sometimes weird.

> Good for: brainstorming, creative writing, poetry,
> coming up with unusual ideas.

```
TEMPERATURE ANALOGY:

Imagine you're choosing what to eat for lunch.

  Low temperature  = "I'll have what I always have" (chicken nuggets)
  Mid temperature  = "Let me try something a little different" (tacos)
  High temperature = "Random menu item, surprise me!" (squid ink pasta??)
```

At very high temperatures, the AI might pick "rocks" in that
"I love eating ___" example. That's when things get weird.

---

## Why AI "Hallucinates" (Makes Stuff Up)

You may have heard that AI sometimes states completely wrong things
with total confidence. This is called **hallucination**, and here's
why it happens:

Remember: the AI is predicting **what sounds right**, not
**looking up what IS right.**

```
HOW YOU ANSWER A QUESTION:
  "Who wrote Hamlet?"
  --> You remember learning it in English class
  --> You recall the fact: Shakespeare
  --> You say "Shakespeare"

HOW AN AI ANSWERS A QUESTION:
  "Who wrote Hamlet?"
  --> It predicts what word is most likely to follow
      "Hamlet was written by..."
  --> Based on patterns, "Shakespeare" is the most likely next word
  --> It outputs "Shakespeare"
```

In this case, the AI gets it right -- but only because
"Shakespeare" showed up near "Hamlet" tons of times in its training data.

**But what if you ask something less common?**

> "Who was the mayor of Springfield, Ohio in 1952?"

The AI doesn't know. It has no database to look this up.
But it will still *predict what sounds like a reasonable answer* --
and confidently give you a name that might be **completely made up.**

### The Confident Liar Problem

The tricky part: **the AI sounds just as confident when it's wrong
as when it's right.** It doesn't say "I'm not sure" unless it's
been specifically trained to. It just predicts the most likely-sounding
answer and serves it up like a fact.

This is why you should **always verify important claims** from an AI.

---

## How It All Fits Together

Here's the full picture of what happens when you send a message to an LLM:

```
+--------------------+
| You type a message |
+--------------------+
         |
         v
+------------------------------+
| Your message gets converted  |
| into tokens                  |
| "Help me write a poem" -->   |
| [Help] [me] [write] [a]     |
| [poem]                       |
+------------------------------+
         |
         v
+------------------------------+
| The AI looks at the FULL     |
| context window (your message |
| + all previous conversation) |
+------------------------------+
         |
         v
+------------------------------+
| Using patterns learned from  |
| training, it predicts the    |
| most likely next token       |
+------------------------------+
         |
         v
+------------------------------+
| It generates one token at a  |
| time, feeding each new token |
| back in to predict the next  |
+------------------------------+
         |
         v
+------------------------------+
| The temperature setting      |
| controls how "creative" vs   |
| "predictable" the choices    |
| are                          |
+------------------------------+
         |
         v
+--------------------+
| You see the output |
| streaming in       |
+--------------------+
```

---

## Common Questions

**"Does the AI remember me between conversations?"**

No. Each new conversation starts with a blank whiteboard.
The AI doesn't remember yesterday's chat unless you or the
application provide that context.

**"Is the AI searching the internet when I ask it things?"**

Not by default. Standard LLMs only know what was in their
training data. Some newer systems can search the web, but the
base LLM itself is just doing pattern prediction.

**"Can I make the AI smarter by explaining things to it?"**

Not permanently. You can give it information *within* a conversation
(it goes on the whiteboard), but next conversation, the whiteboard
is clean again. You're not "teaching" the model.

**"Why does it sometimes give different answers to the same question?"**

Because of temperature. Unless the temperature is set to exactly 0,
there's some randomness in which word gets picked. So the same
question can produce slightly different answers each time.

---

## Key Takeaways

1. An LLM predicts the next word, one word at a time. That's the whole trick.
2. It works in **tokens** (roughly: words or pieces of words).
3. The **context window** is how much text it can see at once -- like a whiteboard that can fill up.
4. **Temperature** controls creativity vs. predictability.
5. **Hallucination** happens because the AI predicts what *sounds right*, not what *is right*.
6. The AI has no memory between conversations and no access to external information unless given tools.

---

*Next up: [Reasoning Models](reasoning-models.md) -- how AI learned to "think step by step."*
