# Contributing to The Ultimate OpenAI Codex Guide

Thank you for your interest in contributing! This guide is for everyone — and that means contributions from everyone are welcome, whether you are a developer, a writer, a teacher, a translator, or someone who just found a typo.

## Ways to Contribute

### For Everyone (No Coding Required)

- **Fix typos and grammar** — Found a spelling mistake? Fix it! Every improvement helps.
- **Improve explanations** — If something was confusing to you, it is probably confusing to others. Suggest a clearer way to explain it.
- **Add analogies** — Good analogies make technical concepts click. If you thought of a great way to explain something, share it.
- **Report confusing content** — Open an issue saying "I did not understand this part" — that is valuable feedback.
- **Translate** — Help make the guide accessible in more languages.
- **Share your experience** — What tripped you up when learning Codex? Help us prevent that for the next person.

### For Writers and Educators

- **Review for accessibility** — Does the language work for someone with no technical background?
- **Suggest better structure** — Would a different order make more sense?
- **Add practical examples** — Real-world scenarios that show when and why to use a feature.
- **Improve the onboarding flow** — Make the guided tour even more welcoming.

### For Developers

- **Verify commands and examples** — Run the commands in the guide and confirm they work correctly.
- **Improve the MCP server** — Add features, fix bugs, improve error handling.
- **Add quiz questions** — Follow the template in `quiz/templates/question-template.yaml`.
- **Update reference.yaml** — When the guide changes, update line number pointers.
- **Fix scripts** — Improve the maintenance and validation scripts.
- **Test on different platforms** — Does everything work on Mac, Windows, and Linux?

## How to Contribute

### Reporting Issues

Use GitHub Issues for:
- Bugs (something is wrong or broken)
- Content suggestions (something is missing or could be better)
- Confusion reports (something does not make sense)

When reporting an issue:
- Include your Codex version (`codex --version`) if relevant
- Describe what you expected vs. what happened
- Be specific about which file or section you are referring to

### Making Changes

1. **Fork** the repository (click the Fork button on GitHub)
2. **Create a branch** for your changes (`git checkout -b my-improvement`)
3. **Make your changes** — follow the style guide below
4. **Test your changes**:
   - If you changed reference.yaml, run `bash scripts/validate-onboarding.sh`
   - If you changed quiz questions, run `bash scripts/compile-questions.sh`
   - If you changed the guide, check that reference.yaml line numbers are still accurate
5. **Submit a Pull Request** — describe what you changed and why

### Style Guide

- **Write for a smart 14-year-old** — Clear, simple language. No unexplained jargon.
- **Explain technical terms** the first time they appear.
- **Use analogies** to make abstract concepts tangible.
- **Be specific** — "Run this command" is better than "update your settings."
- **Be honest** — Do not oversell Codex. Mention limitations alongside capabilities.
- **Never condescend** — Assume the reader is intelligent but unfamiliar with the topic.
- **Use active voice** — "Codex reads the file" not "The file is read by Codex."
- **Include code blocks** for all commands and examples.
- **Use tables** for structured comparisons.
- **Test commands** before including them.

### Key Files to Keep in Sync

If you change the guide, make sure these stay consistent:
- `machine-readable/reference.yaml` — Update line numbers if sections moved
- `VERSION` — Only change this for version bumps (use `scripts/sync-version.sh`)
- `mcp-server/package.json` — Version should match VERSION

## Code of Conduct

We are building a resource for everyone, including people who are brand new to technology. Please:

- Be welcoming and patient
- Be respectful of different experience levels
- Give constructive feedback
- Focus on what is best for the community
- Show empathy toward other contributors

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the full code of conduct.

## Questions?

Open an issue with the label "question" — we are happy to help you get started with contributing.
