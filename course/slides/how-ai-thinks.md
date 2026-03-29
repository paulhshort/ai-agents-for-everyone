# ============================================
#           HOW AI THINKS — SLIDES
# ============================================

---

<br><br>

# HOW AI ACTUALLY WORKS

<br>

### (No magic. No sci-fi. Just math and patterns.)

<br><br>

---

<br>

# STEP 1: TRAINING

<br>

```
    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
    │ Books  │  │  Web   │  │  Code  │  │Science │
    │ novels │  │ pages  │  │  repos │  │papers  │
    │ poetry │  │ forums │  │  docs  │  │ data   │
    └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘
        │           │           │           │
        └───────────┴─────┬─────┴───────────┘
                          │
                          ▼
                ┌─────────────────┐
                │                 │
                │    TRAINING     │
                │    PROCESS      │
                │                 │
                │  (weeks on      │
                │   thousands     │
                │   of GPUs)      │
                │                 │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │                 │
                │   AI MODEL      │
                │                 │
                │  Learned:       │
                │  - grammar      │
                │  - facts        │
                │  - reasoning    │
                │  - patterns     │
                │  - code         │
                │                 │
                └─────────────────┘
```

<br>

### AI doesn't "know" things the way you do.
### It learned PATTERNS from billions of examples.

<br>

---

<br>

# STEP 2: NEXT-TOKEN PREDICTION

<br>

### AI works by predicting: what word comes next?

<br>

```
    "The  cat  sat  on  the  ___"

                                    ┌──────────┬───────────┐
                                    │  WORD    │  CHANCE   │
                                    ├──────────┼───────────┤
                                    │  mat     │   35%     │
                                    │  floor   │   20%     │
                                    │  chair   │   15%     │
                                    │  roof    │    8%     │
                                    │  table   │    7%     │
                                    │  dog     │    3%     │
                                    │  moon    │    1%     │
                                    │  ...     │   ...     │
                                    └──────────┴───────────┘
```

<br>

### It picks one. Then predicts the NEXT one.
### Then the NEXT. Then the NEXT.
### That's how it "writes."

<br>

---

<br>

# WHAT ARE TOKENS?

<br>

### AI doesn't read words — it reads TOKENS.

<br>

```
    Sentence:   "I love artificial intelligence!"

    Tokens:     [ I ] [ _love ] [ _artificial ] [ _intelli ] [ gence ] [ ! ]
                  1       2          3              4           5       6

                                    6 tokens
```

<br>

```
    Sentence:   "Unbelievable!"

    Tokens:     [ Un ] [ believ ] [ able ] [ ! ]
                  1       2         3       4

                              4 tokens

    (Long words = more tokens. AI "chews" them into pieces.)
```

<br>

### Why does this matter?
### **Tokens = cost.** More tokens = more money and time.

<br>

---

<br>

# THE CONTEXT WINDOW

<br>

### Imagine a whiteboard. It's BIG, but it has EDGES.

<br>

```
    ┌────────────────────────────────────────────────────┐
    │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
    │  ░░░░░░░░░░░░░ CONTEXT WINDOW ░░░░░░░░░░░░░░░░░░  │
    │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
    │                                                    │
    │  [Your instructions]                               │
    │  [System prompt]                                   │
    │  [The code you pasted]                             │
    │  [Your question]                                   │
    │  [AI's previous answer]                            │
    │  [Your follow-up]                                  │
    │  [More conversation...]                            │
    │  [Even more...]                                    │
    │  [...getting full...]                              │
    │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
    │  ░░░░░░ FULL! Old stuff falls off the top ░░░░░░  │
    │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
    └────────────────────────────────────────────────────┘

    GPT-5.4:       128,000 tokens  (~100 pages)
    Claude Opus:   200,000 tokens  (~150 pages)
    Codex:       1,000,000 tokens  (~750 pages!)
```

<br>

---

<br>

# THE AGENTIC LOOP

<br>

### This is how an AI AGENT works:

<br>

```
                    ┌──────────────┐
                    │   RECEIVE    │
                    │   the task   │
                    └──────┬───────┘
                           │
                           ▼
               ┌───────────────────────┐
               │                       │
               │        THINK          │
               │  Break it into steps  │
               │                       │
               └───────────┬───────────┘
                           │
                           ▼
               ┌───────────────────────┐
               │                       │
               │         ACT           │
               │  Run code, edit files │
               │  call tools           │
               │                       │
               └───────────┬───────────┘
                           │
                           ▼
               ┌───────────────────────┐
               │                       │
               │        CHECK          │
               │  Did it work?         │ ──── YES ──►  DONE!
               │  Any errors?          │
               │                       │
               └───────────┬───────────┘
                           │
                          NO
                           │
                           ▼
                    (go back to THINK)
```

<br>

### Agents LOOP until the job is done.
### Just like you debug your own code!

<br>

---

<br>

# TEMPERATURE: THE CREATIVITY DIAL

<br>

```
    PRECISE                                              CREATIVE
    (temp = 0)                                           (temp = 1)

    ◄─────────────────────────────────────────────────────────────►
    │         │         │         │         │         │         │
    0.0      0.2       0.4       0.6       0.8       1.0

    ┌──────────────────┐              ┌──────────────────┐
    │ Low Temperature  │              │ High Temperature │
    │                  │              │                  │
    │ - Math answers   │              │ - Creative writing│
    │ - Code           │              │ - Brainstorming  │
    │ - Facts          │              │ - Poetry         │
    │ - Consistent     │              │ - Surprising     │
    │ - Predictable    │              │ - Varied         │
    └──────────────────┘              └──────────────────┘
```

<br>

### Low temp = "give me the RIGHT answer"
### High temp = "give me an INTERESTING answer"

<br>

---

<br>

# PICKING THE RIGHT MODEL

<br>

```
  ┌──────────────────────────────────────────────────────────────┐
  │                                                              │
  │  MODEL              BEST FOR             SPEED    COST      │
  │  ──────────────     ──────────────────   ──────   ──────    │
  │                                                              │
  │  GPT-5.4-mini      Quick questions       FAST     CHEAP     │
  │  (small brain)     Simple tasks                              │
  │                    Brainstorming                              │
  │                                                              │
  │  GPT-5.4           Complex reasoning     MEDIUM   MEDIUM    │
  │  (big brain)       Long documents                            │
  │                    Nuanced writing                            │
  │                                                              │
  │  Codex             Coding tasks          VARIES   VARIES    │
  │  (agent brain)     Multi-file changes                        │
  │                    Build projects                             │
  │                    Works autonomously                         │
  │                                                              │
  │  Claude Opus       Deep analysis         SLOWER   HIGHER    │
  │  (deep brain)      Complex reasoning                         │
  │                    Careful work                               │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘
```

<br>

### Think of it like tools:
### Mini = calculator | Full = computer | Agent = robot assistant

<br>
