# /codexguide:search-docs — Search the Guide for a Topic

Search the entire guide repository for content related to a topic or keyword.

**Usage**: /codexguide:search-docs [query]

## Search Strategy

1. **Reference index**: Search machine-readable/reference.yaml for matching keys and values. Check all sections: deep_dive, commands, shortcuts, cli, fix, dont, decide, rules.

2. **Main guide**: Search guide/ultimate-guide.md for the query term. Show matching lines with 2 lines of context above and below.

3. **Sub-documents**: Search all files in guide/**/*.md for matches.

4. **Examples**: Search examples/**/*.md for relevant templates and examples.

5. **Tools**: Search tools/*.md for matches in the onboarding, audit, and context prompts.

6. **Docs**: Search docs/*.md for matches in the audience-specific documents.

## Output Format

Present results organized by relevance:

```
=== Search Results for "[query]" ===

--- Reference Index (reference.yaml) ---
[Section] key: value
[Section] key: value

--- Main Guide (ultimate-guide.md) ---
Line X: ...matching content...
Line Y: ...matching content...

--- Sub-documents ---
guide/security/sandbox-modes.md, Line X: ...matching content...
guide/core/glossary.md, Line X: ...matching content...

--- Examples ---
examples/agents/code-reviewer.md, Line X: ...matching content...

--- Tools ---
tools/onboarding-prompt.md, Line X: ...matching content...

--- Docs ---
docs/for-beginners.md, Line X: ...matching content...

Total: X matches across Y files
```

If no results are found, suggest related terms the user might try.
