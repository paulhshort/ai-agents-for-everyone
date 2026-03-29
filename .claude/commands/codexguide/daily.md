# /codexguide:daily — Daily Maintenance Check

Run a quick daily check on the guide to catch any issues:

1. **Version check**: Read the VERSION file and compare it with the version in machine-readable/reference.yaml and mcp-server/package.json. Report if they are out of sync.

2. **Onboarding validation**: Run `bash scripts/validate-onboarding.sh` to verify that all topics referenced in the onboarding matrix exist in the deep_dive section of reference.yaml. Report any failures.

3. **Quiz statistics**: Run `bash scripts/compile-questions.sh` to check quiz question counts, look for duplicates, and report difficulty distribution.

4. **TODO scan**: Search all files in the project for TODO, FIXME, PLACEHOLDER, and COMING SOON markers. List each one with its file and line number.

5. **Link check**: Scan all markdown files for internal links (references to other files in the repo). Check that the linked files actually exist. Report any broken links.

6. **Accessibility review**: Pick one random section from reference.yaml deep_dive and read the corresponding content. Check if the language is accessible to a non-technical audience. Flag any jargon that is not explained.

7. **Summary report**: Present findings in this format:

```
=== Daily Check: [date] ===

Version Sync:    PASS / FAIL
Onboarding:      PASS / FAIL (details)
Quiz:            X questions, Y files, no duplicates / duplicates found
TODOs Found:     X items (list the important ones)
Broken Links:    PASS / X broken links found
Accessibility:   [section name] — PASS / suggestions

Priority Actions:
1. [Most important thing to fix]
2. [Second priority]
3. [Third priority]
```
