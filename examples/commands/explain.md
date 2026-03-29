# /explain -- Explain Something in Plain Language

> **What is this?** This is a custom command you can add to Codex.
> When you type `/explain` followed by a file name or topic, Codex will
> read it and explain it to you in simple, clear language.
>
> **How to set it up:** Save this file as `.codex/commands/explain.md` in
> your project folder. Then you can use it by typing `/explain` in Codex.
>
> **Example usage:**
> - `/explain src/auth.js` -- "Explain the authentication code"
> - `/explain package.json` -- "Explain what this configuration file does"
> - `/explain the folder structure` -- "Explain how this project is organized"

---

Look at what the user wants explained and break it down into simple language.

## How to Explain

1. **What it is** -- Start with a one-sentence summary. What is this thing
   and why does it exist?

2. **What it does** -- Walk through the main parts. What are the key pieces
   and how do they work together?

3. **Why it matters** -- Why should someone care about this? What would
   happen if it was missing or broken?

4. **How it connects** -- What other parts of the project depend on this?
   What does this depend on?

5. **Watch out for** -- Any tricky parts, common mistakes, or things that
   are not obvious at first glance.

## Rules

- Use plain language. Avoid jargon, or define it when you must use it.
- Use analogies to everyday things when they help.
- Keep it concise. Use bullet points instead of long paragraphs.
- If explaining code, include the relevant code snippets with simple
  comments explaining each part.
- Tailor the explanation to the audience. If the user seems technical,
  you can go deeper. If they seem new to this, keep it simple.
- It is okay to say "This part is complex, but the key thing to know is..."
