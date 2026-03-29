# /codexguide:sync — Sync Reference Index with Guide Content

Resync the reference.yaml navigation index with the current state of the guide:

1. **Read the guide**: Open guide/ultimate-guide.md and identify all section headers (## and ### headings).

2. **Map sections**: For each heading, record its line number.

3. **Compare with reference.yaml**: Read machine-readable/reference.yaml and compare the deep_dive entries with the actual line numbers found in the guide.

4. **Report mismatches**: Show a table of any entries where the reference.yaml line number does not match the actual line number:

```
| Key                | reference.yaml | actual | difference |
|--------------------|---------------|--------|------------|
| quick_start        | 30            | 32     | +2         |
| installation       | 45            | 48     | +3         |
```

5. **Find new sections**: Report any guide sections that exist in the guide but are not in reference.yaml.

6. **Find orphaned entries**: Report any reference.yaml entries that no longer match a section in the guide.

7. **Check external files**: For deep_dive entries that point to file paths (like "guide/workflows/bug-fixing-workflow.md"), verify those files exist.

8. **Update reference.yaml**: After showing the report, ask if I want to update reference.yaml with the corrected line numbers. If yes, make the updates.

9. **Validate onboarding**: After updating, run `bash scripts/validate-onboarding.sh` to make sure the onboarding matrix is still valid.

Important: Only update line numbers for entries that point to the main guide file (numeric values). Do not change entries that point to external files (string paths).
