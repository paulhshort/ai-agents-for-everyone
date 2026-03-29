# ============================================
#        PROMPT ENGINEERING — SLIDES
# ============================================

---

<br><br>

# PROMPT ENGINEERING

<br>

## The difference between "meh" results and "WOW" results

## is how you ASK.

<br><br>

---

<br>

# THE FORMULA: WHAT - WHERE - HOW - VERIFY

<br>

```
    ┌──────────────────────────────────────────────────────────┐
    │                                                          │
    │        W H A T                                           │
    │        What do you want the AI to do?                    │
    │        "Write a Python function that..."                 │
    │                                                          │
    │              │                                           │
    │              ▼                                           │
    │                                                          │
    │        W H E R E                                         │
    │        What files, context, or scope?                    │
    │        "In the file src/utils.py..."                     │
    │                                                          │
    │              │                                           │
    │              ▼                                           │
    │                                                          │
    │        H O W                                             │
    │        Style, format, constraints?                       │
    │        "Use clear variable names, add comments..."       │
    │                                                          │
    │              │                                           │
    │              ▼                                           │
    │                                                          │
    │        V E R I F Y                                       │
    │        How will you check the result?                    │
    │        "Include tests that prove it works..."            │
    │                                                          │
    └──────────────────────────────────────────────────────────┘
```

<br>

---

<br>

# BAD PROMPT vs. GOOD PROMPT

<br>

```
  ┌─────────────────────────────┐  ┌─────────────────────────────────┐
  │                             │  │                                 │
  │  BAD PROMPT                 │  │  GOOD PROMPT                    │
  │                             │  │                                 │
  │  "Fix my code"              │  │  "Fix the TypeError on line 23  │
  │                             │  │   of app.py. The variable       │
  │                             │  │   'count' is a string but       │
  │                             │  │   should be an integer."        │
  │                             │  │                                 │
  └─────────────────────────────┘  └─────────────────────────────────┘

  ┌─────────────────────────────┐  ┌─────────────────────────────────┐
  │                             │  │                                 │
  │  BAD PROMPT                 │  │  GOOD PROMPT                    │
  │                             │  │                                 │
  │  "Write me an essay"        │  │  "Write a 500-word essay on     │
  │                             │  │   climate change for a 10th     │
  │                             │  │   grade science class. Use 3    │
  │                             │  │   sources and a formal tone."   │
  │                             │  │                                 │
  └─────────────────────────────┘  └─────────────────────────────────┘

  ┌─────────────────────────────┐  ┌─────────────────────────────────┐
  │                             │  │                                 │
  │  BAD PROMPT                 │  │  GOOD PROMPT                    │
  │                             │  │                                 │
  │  "Make a game"              │  │  "Create a number guessing      │
  │                             │  │   game in Python where the      │
  │                             │  │   computer picks 1-100 and      │
  │                             │  │   gives hot/cold hints. Add     │
  │                             │  │   a score tracker."             │
  │                             │  │                                 │
  └─────────────────────────────┘  └─────────────────────────────────┘
```

<br>

---

<br>

# THE PROMPT MAKEOVER

<br>

### Watch a bad prompt transform, step by step:

<br>

```
    STEP 0 (original):
    ┌──────────────────────────────────────┐
    │  "Help me with my project"           │
    └──────────────────────────────────────┘
                    │
                    ▼  + WHAT
    ┌──────────────────────────────────────┐
    │  "Help me build a to-do list app"    │
    └──────────────────────────────────────┘
                    │
                    ▼  + WHERE
    ┌──────────────────────────────────────────────┐
    │  "Help me build a to-do list app             │
    │   using Python and a simple text file"       │
    └──────────────────────────────────────────────┘
                    │
                    ▼  + HOW
    ┌──────────────────────────────────────────────────────┐
    │  "Help me build a to-do list app using Python        │
    │   and a simple text file. It should have add,        │
    │   delete, and list commands. Keep it under           │
    │   100 lines with comments."                          │
    └──────────────────────────────────────────────────────┘
                    │
                    ▼  + VERIFY
    ┌──────────────────────────────────────────────────────────┐
    │  "Help me build a to-do list app using Python and a      │
    │   simple text file. It should have add, delete, and      │
    │   list commands. Keep it under 100 lines with comments.  │
    │   Test it by adding 3 items, deleting 1, and listing     │
    │   the result."                                           │
    └──────────────────────────────────────────────────────────┘
```

<br>

### From 5 words to a complete spec. THAT gets results.

<br>

---

<br>

# COMMON MISTAKES

<br>

```
    ┌───────────────────────────────────────────────────────────┐
    │                                                           │
    │  MISTAKE                    FIX                          │
    │  ────────────────────────   ────────────────────────     │
    │                                                           │
    │  Too vague                  Be specific about what       │
    │  "Make it better"           you want changed             │
    │                                                           │
    │  Too much at once           Break into smaller tasks     │
    │  "Build my entire app"      one step at a time           │
    │                                                           │
    │  No context                 Tell AI what it's working    │
    │  "Fix the bug"              with: language, file, error  │
    │                                                           │
    │  No format specified        Say: list, table, code,      │
    │  "Tell me about X"          paragraph, bullet points     │
    │                                                           │
    │  Forgetting to verify       Always ask AI to explain     │
    │  (just trusting output)     or test its own work         │
    │                                                           │
    └───────────────────────────────────────────────────────────┘
```

<br>

---

<br>

# PROMPT TEMPLATES YOU CAN USE

<br>

```
  ┌──────────────────────────────────────────────────────────────┐
  │  CODING TASK:                                                │
  │  "Write a [language] function that [does X].                 │
  │   It should handle [edge cases]. Include comments            │
  │   and 3 test cases."                                         │
  └──────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────┐
  │  LEARNING:                                                   │
  │  "Explain [concept] to me like I'm a [grade level]           │
  │   student. Use an analogy. Then quiz me with                 │
  │   3 questions."                                              │
  └──────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────┐
  │  DEBUGGING:                                                  │
  │  "This [language] code gives [error]. The expected           │
  │   behavior is [X] but it does [Y]. Here's the code:         │
  │   [paste code]. Find and fix the bug."                       │
  └──────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────┐
  │  CREATIVE:                                                   │
  │  "Write a [format] about [topic] in the style of            │
  │   [reference]. It should be [length] and include             │
  │   [specific elements]."                                      │
  └──────────────────────────────────────────────────────────────┘
```

<br>

### Save these. Use them. Make them yours.

<br>
