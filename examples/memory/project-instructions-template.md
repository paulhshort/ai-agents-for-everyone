# AGENTS.md Template

> **What is AGENTS.md?**
> AGENTS.md is the instructions file for your AI agent. When you put this
> file in your project folder, Codex reads it at the start of every session
> to understand your project and how you want it to behave.
>
> Think of it as a briefing document -- like handing a new team member a
> "Welcome to the Project" guide on their first day.
>
> **How to use this template:**
> 1. Copy this file into the root of your project folder
> 2. Rename it to AGENTS.md
> 3. Fill in each section with your project's details
> 4. Delete the example text and instructions (the parts in parentheses)
>
> **Tips:**
> - You do not need to fill in every section. Start with the basics and
>   add more as you learn what works.
> - Be specific. "Write clean code" is vague. "Use camelCase for variable
>   names and add a comment above every function" is specific.
> - Update this file as your project evolves.

---

# Project Instructions

## Project Overview

(Write 2-3 sentences about what this project is. Pretend you are explaining
it to someone who has never seen it before.)

Example:
This is a recipe sharing website where people can post their recipes, search
for recipes by ingredient, and save their favorites. It is built with Python
and uses a PostgreSQL database to store everything.

## What This Project Does

(List the main features or capabilities. Keep it simple.)

- (Feature 1 -- Example: Users can create accounts and log in)
- (Feature 2 -- Example: Users can post recipes with photos)
- (Feature 3 -- Example: Users can search recipes by ingredient or name)
- (Feature 4 -- Example: Users can save favorite recipes to their profile)

## Important Files and Folders

(Tell the agent where things are. It cannot read your mind -- it needs to
know where to find things.)

- Entry point: (Example: src/app.py -- this is where the application starts)
- Configuration: (Example: config/settings.py -- database and app settings)
- Database models: (Example: src/models/ -- how data is structured)
- API routes: (Example: src/routes/ -- the URLs the app responds to)
- Tests: (Example: tests/ -- all the automated tests)
- Static files: (Example: public/ -- images, CSS, JavaScript for the website)

## Technology Stack

(What tools and technologies does this project use? The agent needs to know
so it uses the right approach.)

- Language: (Example: Python 3.12)
- Framework: (Example: Flask 3.0)
- Database: (Example: PostgreSQL 16)
- Testing: (Example: pytest with pytest-flask)
- Package manager: (Example: pip with requirements.txt)

## Rules for the Agent

### Things to Always Do

(These are the "always" rules. The agent will follow these every time.)

- Always run the tests after making changes: (Example: pytest tests/)
- Always follow the existing code style -- look at nearby code for examples
- Always add helpful comments when the code is not obvious
- Always check that the application still starts after making changes
- (Add your own rules here)

### Things to Never Do

(These are the "never" rules. The agent will avoid these.)

- Never modify the .env file or any file containing passwords or secrets
- Never delete database migration files
- Never add new dependencies without asking first
- Never change the public API (URLs that users depend on) without asking
- Never skip or disable tests
- (Add your own rules here)

## How to Test

(Tell the agent how to run tests and what to expect.)

- Run all tests: (Example: pytest tests/)
- Run a specific test file: (Example: pytest tests/test_recipes.py)
- Expected result: All tests should pass with 0 failures
- If tests fail after a change, undo the change and try a different approach

## Common Tasks

(Optional: Give the agent shortcuts for things you ask for often.)

### Adding a new API endpoint
1. Create the route in src/routes/
2. Add the database model if needed in src/models/
3. Write tests in tests/
4. Update the API documentation in docs/api.md

### Fixing a bug
1. Write a test that reproduces the bug first
2. Fix the bug
3. Verify the test passes
4. Check that no other tests broke

## Notes and Context

(Optional: Anything else the agent should know. Things that are not obvious
from the code alone.)

- (Example: We are migrating from Flask to FastAPI, so new endpoints should
  use FastAPI style when possible)
- (Example: The search feature uses Elasticsearch, which must be running
  locally for search tests to pass)
- (Example: The project follows semantic versioning -- update VERSION file
  for any user-facing changes)
