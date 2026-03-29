# The Ultimate OpenAI Codex Guide

### Your Friendly, Complete Guide to Working with an AI Agent

> Last updated: 2026-03-28

---

## Table of Contents

1. [Welcome to Codex](#1-welcome-to-codex)
2. [Understanding AI Agents](#2-understanding-ai-agents)
3. [Getting Started](#3-getting-started)
4. [Your First Agent Experience](#4-your-first-agent-experience)
5. [Talking to Your Agent](#5-talking-to-your-agent)
6. [Commands and Controls](#6-commands-and-controls)
7. [Understanding Context](#7-understanding-context)
8. [Customizing Codex](#8-customizing-codex)
9. [Safety and Permissions](#9-safety-and-permissions)
10. [Practical Workflows](#10-practical-workflows)
11. [Extending with Tools (MCP)](#11-extending-with-tools-mcp)
12. [Advanced Agent Features](#12-advanced-agent-features)
13. [Working with Others](#13-working-with-others)
14. [Troubleshooting](#14-troubleshooting)
15. [The Bigger Picture](#15-the-bigger-picture)

---

# 1. Welcome to Codex

## Why This Matters to You

You already know AI can answer questions. You've probably used ChatGPT to write an email, summarize a document, or get a recipe. That's great, and that's real value.

But here is the thing: that is only a fraction of what AI can do for you.

What if AI could actually *do things* on your computer? Not just talk about doing them. Not just give you instructions to follow. What if it could organize your files, analyze your spreadsheets, rewrite your documents, search through hundreds of pages of notes, and automate the repetitive tasks that eat up hours of your week?

That is exactly what OpenAI Codex does. And that is why you are reading this guide.

## What Is Codex, Exactly?

OpenAI Codex is an **AI agent** that runs on your computer. Let's break that down into plain language.

You know how ChatGPT is like having a conversation with a very knowledgeable person? You ask a question, it gives an answer, you ask another question, it gives another answer. It's a back-and-forth chat.

Codex is different. Codex is more like hiring a capable assistant who sits down at your computer and actually does work for you. You tell it what you want accomplished, and it figures out the steps, carries them out, and shows you the results. It can read your files, create new ones, run commands, search for information, and chain together multiple actions to get things done.

Here's a simple comparison:

| | ChatGPT (Chat) | Codex (Agent) |
|---|---|---|
| **You say** | "How do I organize these files?" | "Organize these files by date" |
| **It does** | Gives you instructions | Actually organizes the files |
| **You then** | Follow the instructions yourself | Review what it did |
| **Feels like** | Asking a librarian | Having an assistant |

That shift from "telling you how" to "doing it for you" is the core of what makes Codex special.

## Where Does Codex Live?

Codex is available in several forms, so you can use it in whatever way feels most comfortable:

**Codex CLI (Command Line Interface)**
This is Codex in your terminal, that text-based window where you type commands. If you've never used a terminal before, don't worry, we will walk you through it. The CLI is open source, meaning anyone can inspect how it works. It's built using a programming language called Rust, which makes it fast and reliable.

**Codex Desktop App**
A standalone application for macOS that gives you a visual window to work with Codex. If you prefer clicking over typing commands, this is a great option.

**Codex Web/Cloud**
Available right in your web browser at chatgpt.com/codex. This version runs your tasks on OpenAI's computers in the cloud, so you don't have to install anything. It's the easiest way to start, but it works a bit differently from the local versions because the agent is working on a remote machine, not your own.

**Codex IDE Extensions**
For people who use code editors like VS Code, Cursor, Windsurf, or JetBrains products, Codex integrates right into those tools. Even if you're not a programmer, some of these editors are great general-purpose text tools.

## What Can Codex Actually Do?

Let's get concrete. Here are real things Codex can do for you:

- **Organize files**: "Move all the photos from 2024 into folders organized by month"
- **Analyze data**: "Look at this spreadsheet and tell me which months had the highest sales, then create a summary"
- **Write and edit**: "Rewrite this report to be more concise and professional"
- **Research**: "Go through all the files in this folder and find every mention of 'quarterly budget'"
- **Automate tasks**: "Every file that ends in .txt, rename it to include today's date"
- **Learn**: "Explain what each file in this project does, as if I were a complete beginner"
- **Create**: "Generate a simple website that displays my resume"
- **Convert**: "Turn this CSV file into a nicely formatted table"

And this is just scratching the surface. Because Codex is an *agent*, not a chatbot, the range of things it can do is limited mainly by what your computer can do.

## How Much Does It Cost?

Codex is included with your ChatGPT subscription. If you have a ChatGPT Plus, Pro, Business, Team, Edu, or Enterprise plan, you already have access to Codex.

You can also use an API key if you want more control or are a power user, but that's not necessary for most people. Some organizations use Codex through Microsoft Azure, which is another option for enterprise setups.

The key point: if you're already paying for ChatGPT, you can start using Codex right now at no extra cost.

## What You'll Learn in This Guide

This guide is written for people who are not programmers, not developers, and not "tech people." You don't need to know how to code. You don't need to understand how AI works under the hood. You just need to be curious and willing to try something new.

By the end of this guide, you will:

- Understand what AI agents are and why they matter
- Have Codex installed and running on your computer
- Know how to communicate effectively with your agent
- Be able to use Codex for real, practical tasks in your daily life and work
- Understand how to keep things safe and secure
- Know where to go to learn more

Let's get started.

---

# 2. Understanding AI Agents

## Why This Matters to You

Before we install anything or type a single command, let's talk about the big idea here. Understanding what an "AI agent" actually means will completely change how you think about AI, and it will make you much better at using Codex.

Most people's experience with AI looks like this: you open ChatGPT, you type a question, you get an answer, you close the tab. That's like using a smartphone only to make phone calls. Technically correct, but you're missing 95% of what it can do.

The shift from "AI that talks" to "AI that acts" is one of the biggest changes happening in technology right now. By understanding it, you're getting ahead of the curve.

## The Restaurant Analogy

Let's start with a story.

Imagine you walk into a restaurant. You sit down, and a very knowledgeable food critic sits across from you. You can ask them anything about food:

- "What's a good Italian dish?" and they'll give you a detailed answer.
- "How do I make carbonara?" and they'll walk you through the recipe step by step.
- "What wine pairs well with fish?" and they'll give you expert recommendations.

This food critic is incredibly helpful. But notice what they *don't* do: they don't walk into the kitchen and cook your dinner. They don't go to the wine cellar and bring you a bottle. They don't set the table. They *talk about food*, but they don't *make food*.

**That food critic is a chatbot.** That's what ChatGPT does in a normal conversation. It gives you information, instructions, and answers. Incredibly valuable, but you still have to do the work yourself.

Now imagine something different. You walk into the same restaurant, but this time you have a personal chef and assistant. You say, "I'd like a nice Italian dinner with wine pairings." And this person:

1. Goes to the kitchen
2. Checks what ingredients are available
3. Decides to make carbonara (because the pancetta looks great today)
4. Cooks the meal
5. Selects a wine
6. Sets the table
7. Serves you dinner
8. Comes back and says, "Here's what I made and why"

**That personal chef is an agent.** That's what Codex does. You tell it what you want, and it figures out the steps and does the work.

## What Makes an Agent Different from a Chatbot

Let's be really clear about the differences:

### Chatbots React, Agents Act

A chatbot waits for your question and gives a response. Each exchange is basically independent. It's a ping-pong game: you send, it returns, you send, it returns.

An agent takes your request and enters what's called an **agentic loop**. Think of this like a work cycle:

1. **Understand**: The agent figures out what you want
2. **Plan**: It decides what steps to take
3. **Act**: It takes the first step (maybe reading a file, running a command)
4. **Observe**: It looks at what happened
5. **Decide**: Based on the result, it decides what to do next
6. **Repeat**: It goes back to step 3, continuing until the job is done
7. **Report**: It tells you what it accomplished

This is fundamentally different from a conversation. The agent is *working*, not just *responding*.

### Chatbots Talk, Agents Use Tools

When you ask a chatbot "What files are in my Documents folder?", it has to guess or ask you to check. It can't actually look.

When you ask an agent the same question, it can actually run a command to list your files, read them, and tell you exactly what's there. It has **tools**: the ability to interact with your computer, your files, your programs.

Think of it this way: a chatbot is a brain without hands. An agent is a brain *with* hands.

### Chatbots Are Stateless, Agents Have Memory

In a typical chat, each message exists somewhat in isolation. The AI remembers the conversation so far, but it doesn't have a persistent understanding of your project, your files, or your preferences beyond what you've told it in the current conversation.

An agent like Codex builds up context as it works. It reads your files, understands your project structure, remembers what it's already done in the session, and uses all of that knowledge to make better decisions. It's like the difference between asking a stranger for directions versus asking your neighborhood mail carrier, the mail carrier knows the area because they work in it every day.

## The Agentic Paradigm

You might hear people talk about the "agentic paradigm" or "agentic AI." This sounds fancy, but it's a simple idea:

**Instead of AI being a tool you operate, AI becomes a worker you supervise.**

Think about how you use a calculator. You type in numbers, press buttons, and read the result. You are the operator. The calculator is a tool. It does nothing without your constant input.

Now think about how a manager works with their team. The manager says, "We need this report done by Friday. It should cover Q1 sales across all regions." The team member goes away, does the research, writes the report, maybe asks a few clarifying questions along the way, and delivers the finished product.

The agentic paradigm shifts AI from the calculator model to the team member model. You become the person who defines what success looks like, and the agent figures out how to get there.

### Why This Matters More Than You Think

This isn't just a nice convenience. It fundamentally changes who can benefit from powerful computing.

Before AI agents, if you wanted to accomplish complex tasks on a computer, you generally needed to know how computers work, how to write code, how to use specific software. The barrier to entry was technical skill.

With AI agents, the barrier shifts to something much more accessible: the ability to clearly describe what you want. And that's a skill everyone already has to some degree. You describe what you want at restaurants, when talking to colleagues, when hiring someone for a job.

The "agentic paradigm" is really about making computers work the way humans naturally communicate: through intentions and goals, not through specific technical instructions.

## Levels of Autonomy

Not all agents work the same way. There's a spectrum of how much independence you give them, and Codex lets you choose where on that spectrum you want to be:

**Full Supervision (Like Training a New Employee)**
At this level, the agent asks you before doing almost anything. "I'd like to read this file. Is that okay?" "I want to create a new folder. May I?" This is the safest setting and a great way to start. You learn what the agent does by watching it ask for permission.

**Moderate Autonomy (Like Working with a Trusted Colleague)**
At this level, the agent handles routine tasks on its own but checks with you for anything significant. It might read files and analyze them without asking, but it'll ask before making changes. This is the default for Codex and works well for most people.

**High Autonomy (Like Delegating to an Expert)**
At this level, the agent does most things without asking. You give it a task, it goes and does it, and it reports back when done. This is faster but requires more trust. Codex offers this through a mode called "full auto."

There's no wrong answer here. The right level depends on your comfort, the task, and how much you trust the agent with your files. We'll cover this in detail in the Safety and Permissions section.

## Common Misconceptions About Agents

Let's clear up some things people often get wrong:

**"AI agents are just fancier chatbots"**
No. The difference is structural, not cosmetic. A chatbot generates text. An agent generates text AND executes actions. It's the difference between someone describing how to paint a house and someone actually painting it.

**"I need to be a programmer to use an AI agent"**
Absolutely not. While Codex can write code (and is great at it), that's just one of its many capabilities. You can use it to organize files, write documents, analyze data, and countless other tasks without knowing a single line of code.

**"AI agents are dangerous and will mess up my computer"**
Codex has built-in safety features that prevent it from doing anything you don't approve. By default, it works in a restricted environment where it can only make changes within your project folder. It's like giving someone access to one room in your house, not the whole building.

**"An AI agent replaces human work"**
Think of it differently: an AI agent amplifies human work. It handles the tedious, repetitive, time-consuming parts so you can focus on the creative, strategic, and meaningful parts. It's a power tool, not a replacement.

**"I need a powerful computer to run an AI agent"**
The heavy AI processing happens on OpenAI's servers, not on your computer. Your machine just needs to run the Codex program itself, which is lightweight. If your computer can run a web browser, it can run Codex.

## A Quick Mental Model

Here's a simple way to think about your relationship with Codex:

**You are the architect. Codex is the builder.**

An architect doesn't lay bricks. They design the building, make decisions about what it should look like and how it should function, and review the builder's work. The builder does the physical construction, following the architect's vision while using their own expertise to handle the details.

When you use Codex:
- **You** decide what needs to be done (the goal)
- **You** provide important context (background information, preferences)
- **Codex** figures out the steps and executes them
- **Codex** reports back on what it did
- **You** review the work and provide feedback

This is a collaboration. And like any good collaboration, it gets better over time as you learn to communicate with each other.

---

# 3. Getting Started

## Why This Matters to You

This is where things get real. We're going to get Codex installed on your computer, sign in, and make sure everything works. Don't worry if any of this feels unfamiliar. We'll go step by step, and every single step will be explained.

Think of this section like setting up a new appliance. You take it out of the box, plug it in, turn it on, and test it. We're doing the same thing with Codex.

## Choosing Your Path

There are a few different ways to use Codex. Here's which one is right for you:

**I want the easiest possible start (no installation needed):**
Use Codex Web/Cloud. Go to chatgpt.com/codex in your browser and start using it. Skip ahead to the section called "Using Codex Web/Cloud" below.

**I want Codex on my Mac:**
You have two great options: the Desktop App or the CLI. We'll cover both.

**I want Codex on my Windows or Linux computer:**
Use the CLI. We'll walk you through it.

**I want Codex in my code editor:**
Install the extension for your editor (VS Code, Cursor, Windsurf, or JetBrains). We'll cover this briefly, but most of this guide focuses on the CLI and Desktop App since they're more general-purpose.

## Before You Begin: What You Need

Here's what you need before we start:

1. **A ChatGPT account with a paid plan** (Plus, Pro, Business, Team, Edu, or Enterprise). If you have a free ChatGPT account, you'll need to upgrade first. Go to chatgpt.com and look for the upgrade option.

2. **An internet connection.** Codex needs to communicate with OpenAI's servers to work.

3. **About 10 minutes.** That's all the setup takes.

That's it. No special software knowledge required.

## Using Codex Web/Cloud (The Easiest Way)

If you just want to start using Codex right now with zero installation, this is your path.

### Step 1: Open Your Browser

Open any web browser (Chrome, Firefox, Safari, Edge, whatever you prefer).

### Step 2: Go to Codex

Navigate to: **chatgpt.com/codex**

### Step 3: Sign In

Sign in with your ChatGPT account. Use the same email and password you use for ChatGPT.

### Step 4: Start Using It

You'll see an interface where you can type tasks. Try typing something simple like:

```
Create a text file that says "Hello from Codex!" and save it as hello.txt
```

Codex Cloud will spin up a small virtual computer in the cloud, execute your request, and show you the results. You can then download the files it created.

### How Codex Cloud Works

When you use Codex in the browser, it creates a temporary computer environment in the cloud. Think of it like a virtual desk where Codex can do its work. It:

- Creates files and folders in this virtual environment
- Runs commands and scripts
- Shows you the results
- Lets you download anything it created

The advantage is simplicity: nothing to install, nothing to configure. The trade-off is that it's working on a remote machine, not directly on your computer, so it can't organize your local files or interact with software on your machine.

For tasks that involve creating things from scratch (documents, websites, scripts, analysis reports), Codex Cloud works beautifully. For tasks that involve working with your existing files, you'll want the CLI or Desktop App.

## Installing Codex CLI

The CLI (Command Line Interface) is the most flexible way to use Codex. It runs in your terminal, that text-based window on your computer. If you've never used a terminal, don't worry, it's just a different way of talking to your computer. Instead of clicking buttons, you type commands. Think of it like texting your computer instead of pointing at things on screen.

### What Is a Terminal?

Before we install Codex, let's make sure you know how to open a terminal:

**On Mac:**
- Open Finder
- Go to Applications > Utilities
- Click on "Terminal"
- A window with text will appear. That's your terminal.
- Alternatively, press Cmd + Space, type "Terminal," and press Enter.

**On Windows:**
- Press the Windows key
- Type "PowerShell" or "Terminal"
- Click on "Windows Terminal" or "Windows PowerShell"
- A window with text will appear. That's your terminal.
- For the best experience, you can install "Windows Subsystem for Linux" (WSL), which gives you a Linux terminal inside Windows. This is optional but recommended for Codex.

**On Linux:**
- You likely already know how to find your terminal. It's usually in your applications menu, or you can press Ctrl + Alt + T.

### Installing with npm (Works on All Platforms)

npm is a package manager, think of it as an app store for command-line tools. To use it, you first need Node.js installed on your computer.

**Step 1: Check if you have Node.js**

Open your terminal and type:

```bash
node --version
```

If you see a version number (like `v20.11.0`), you're good. Skip to Step 3.

If you see an error like "command not found," you need to install Node.js first.

**Step 2: Install Node.js (if needed)**

Go to **nodejs.org** in your browser. Download the "LTS" version (LTS stands for Long Term Support, which just means it's the stable, recommended version). Run the installer and follow the prompts. Accept all the defaults.

After installation, close your terminal and open a new one. Type `node --version` again to confirm it worked.

**Step 3: Install Codex**

In your terminal, type:

```bash
npm install -g @openai/codex
```

Let's break this down:
- `npm` is the package manager you're using
- `install` means you want to install something
- `-g` means install it "globally," so you can use it from anywhere
- `@openai/codex` is the name of the Codex package

Press Enter and wait. You'll see some text scrolling by as it downloads and installs. This usually takes less than a minute.

**Step 4: Verify the installation**

Type:

```bash
codex --version
```

If you see a version number, congratulations! Codex is installed.

### Installing on Mac with Homebrew

If you're on a Mac and you have Homebrew installed (it's a popular Mac package manager), you can install the Codex Desktop App with:

```bash
brew install --cask codex
```

This installs the desktop application. You can then launch it from your Applications folder or by typing `codex app` in your terminal.

If you don't have Homebrew and want to try this method, visit **brew.sh** and follow the installation instructions there first.

### Installing from GitHub Releases

If you prefer to download a file directly, you can go to the Codex GitHub releases page and download the right file for your operating system. This is a more manual process:

1. Go to the Codex GitHub repository's releases page
2. Download the binary for your operating system (macOS, Windows, or Linux)
3. Move it to a directory in your system's PATH
4. Make it executable (on Mac/Linux: `chmod +x codex`)

This method is more hands-on and usually chosen by people who are comfortable with manual software installation.

## Signing In (Authentication)

Now that Codex is installed, you need to sign in so it can connect to OpenAI's AI models.

### Method 1: Browser Sign-In (Easiest)

Open your terminal and type:

```bash
codex
```

Just that one word. When Codex starts for the first time, it will prompt you to sign in. Select **"Sign in with ChatGPT"** and it will open your web browser. Sign in with your ChatGPT credentials (the same ones you use at chatgpt.com), and you'll be redirected back to your terminal, now authenticated.

This is the recommended method for most people. It's the same way you sign into many apps, using your browser to verify who you are (this process is called OAuth, but you don't need to remember that).

### Method 2: API Key Sign-In

If you have an OpenAI API key (this is a special code that gives you direct access to OpenAI's models), you can use it:

```bash
codex login --with-api-key
```

It will ask you to paste your API key. This method is for power users who want to use their API account instead of their ChatGPT subscription. API keys are billed separately on a pay-per-use basis, which can be more expensive for heavy use.

### Method 3: Environment Variable

You can also set your API key as an environment variable. An environment variable is like a sticky note that your computer keeps available for any program that asks for it.

On Mac/Linux:
```bash
export CODEX_API_KEY=your-api-key-here
```

On Windows:
```bash
set CODEX_API_KEY=your-api-key-here
```

This method is common in automated setups and on shared systems.

For most people, **Method 1 (browser sign-in) is the way to go.** It's simple, secure, and uses your existing ChatGPT subscription.

## Your First Launch

Let's fire up Codex and make sure everything works. Open your terminal and type:

```bash
codex
```

You should see something like a welcome message and a prompt where you can type. This is the Codex interactive session. It's waiting for you to tell it what to do.

Try typing:

```
What can you help me with?
```

Codex will respond with an overview of its capabilities. If you see a thoughtful response, everything is working.

To exit Codex, you can type `/clear` and then close the terminal, or simply close the terminal window.

## Choosing Your AI Model

Codex can use different AI models, think of these like different "brains" with different strengths:

- **GPT-5.4**: This is the default and flagship model. It's the most capable and handles complex tasks best. For most people, this is the right choice.
- **GPT-5.4-mini**: A faster, more efficient version. Great for simpler tasks where speed matters more than depth.
- **GPT-5.3-codex**: Specialized for coding tasks. If you're doing software development, this is optimized for that.

You don't need to choose right now. Codex uses GPT-5.4 by default, which is the best all-around option. You can switch models later using the `/model` command.

## Quick Start Summary

Here's the shortest possible path from zero to running:

1. Go to chatgpt.com/codex in your browser, **or**
2. Install: `npm install -g @openai/codex`
3. Run: `codex`
4. Sign in when prompted
5. Type what you want done

That's it. You're ready.

---

# 4. Your First Agent Experience

## Why This Matters to You

You've got Codex installed and running. Now let's actually use it. This section walks you through a real session so you can see exactly what happens, step by step. Think of this as your first driving lesson, we're going to go slow, explain everything, and build your confidence.

## Starting a Session

Open your terminal and type:

```bash
codex
```

You'll see the Codex interface appear. There's a prompt, usually at the bottom of the screen, waiting for your input. This is where you'll type your requests.

Let's start with something simple. Type:

```
List all the files in the current directory and tell me what each one does
```

Now watch what happens.

## The Agentic Loop in Action

When you press Enter, Codex doesn't just answer like a chatbot would. It enters its work cycle, the agentic loop. Here's what you'll see:

### Step 1: Understanding

Codex reads your request and figures out what you're asking. In this case: look at files in the current folder and describe them.

### Step 2: Planning

Codex decides what tools it needs. To list files, it needs to run a command on your computer. You might see it say something like:

```
I'll list the files in the current directory first.
```

### Step 3: Executing

Codex runs the command. You might see something like:

```
Running: ls -la
```

This is a command that lists files. Codex is actually running this on your computer, not pretending or guessing. It's doing real work.

### Step 4: Observing

Codex sees the results, the list of files. Now it knows what's in your folder.

### Step 5: Deciding What's Next

Based on the file list, Codex might decide it needs more information. Maybe it reads a few files to understand them. You might see:

```
Reading: README.md
Reading: notes.txt
```

### Step 6: Continuing the Loop

It keeps working, reading files, analyzing them, building up its understanding, until it has enough information to answer your question.

### Step 7: Reporting

Finally, Codex presents its findings. It might say something like:

```
Here's what I found in the current directory:

- README.md: A project description explaining the purpose of this folder
- notes.txt: Personal notes from a meeting on March 15th
- budget.csv: A spreadsheet with monthly expense data
- photos/: A folder containing 47 image files
```

Notice what happened here. You asked one question, and Codex performed multiple actions, listing files, reading them, analyzing their contents, all on its own. That's the agentic loop at work.

## Approval and Trust

During the process above, you might have noticed Codex asking for your permission before doing certain things. For example:

```
Codex wants to run: ls -la
Allow? (y/n)
```

This is Codex being safe. It's asking you before it takes action on your computer. You can:
- Type **y** (yes) to approve the action
- Type **n** (no) to reject it
- Type **a** (always) to approve this type of action for the rest of the session

Think of this like a security guard at a building entrance. When someone new arrives, the guard checks with you: "There's someone here to see you, should I let them in?" Over time, you might tell the guard, "John comes every day, just let him through," which is like telling Codex to always approve certain actions.

As you get more comfortable, you can adjust how much Codex asks for permission. We cover this in detail in the Safety and Permissions section.

## A More Interesting Example

Let's try something more substantial. Say you have a folder full of text files and you want a summary. Type:

```
Read all the .txt files in this folder and create a summary document called summary.md that lists the key points from each file
```

Watch what Codex does:

1. **Lists the files** to find all `.txt` files
2. **Reads each file** one by one
3. **Analyzes the content** of each file, extracting key points
4. **Creates a new file** called `summary.md`
5. **Writes the summary** with organized sections for each file
6. **Reports back** telling you it's done and what the summary contains

This single request triggered potentially dozens of individual actions. That's the power of an agent: you describe the outcome, and it handles the process.

## Understanding What You See on Screen

When Codex is working, you'll see different types of information on screen:

**Codex's thoughts and plans** appear as regular text. This is Codex explaining what it's thinking and what it plans to do next. It might say things like "Let me check the file structure first" or "I'll read the configuration file to understand the setup."

**Commands being executed** usually appear highlighted or in a different format. These are the actual actions Codex is taking on your computer. Things like:

```
Running: cat document.txt
```

**Results from commands** show the output of those actions. If Codex reads a file, you'll see the file's contents. If it lists a directory, you'll see the list of files.

**Questions for you** appear when Codex needs your input. This could be asking for permission, asking for clarification, or asking you to choose between options.

**Final summaries** come at the end of a task, where Codex explains what it accomplished.

## When Things Don't Go as Expected

Sometimes Codex will try something that doesn't work. This is normal and actually one of its strengths. Unlike a chatbot that would just apologize, Codex adapts:

**Example: File not found**
Codex tries to read a file that doesn't exist. Instead of giving up, it:
1. Notices the error
2. Lists the directory to see what files are actually there
3. Finds the right file (maybe with a slightly different name)
4. Reads the correct file
5. Continues with the task

This is exactly what a human assistant would do. You don't need to babysit every step. Codex handles bumps in the road on its own.

**Example: Wrong approach**
Codex tries one method to accomplish your task and it doesn't produce good results. It:
1. Notices the output isn't what was expected
2. Reconsiders its approach
3. Tries a different method
4. Gets better results
5. Continues with the task

This adaptability is what makes agents so much more useful than static tools.

## Your Turn: Practice Tasks

Here are some simple tasks to try. Each one will help you get comfortable with the agentic workflow:

**Task 1: File Explorer**
```
What directory am I currently in? What files are here?
```

**Task 2: Simple Creation**
```
Create a file called my-ideas.txt with a numbered list of 5 fun weekend activity ideas
```

**Task 3: Analysis**
```
Look at the files in this folder and tell me how much disk space they use in total
```

**Task 4: Organization**
```
Find all files that were modified today and list them with their sizes
```

**Task 5: Research**
```
Search all text files in this folder for the word "important" and show me the lines where it appears
```

Try each one. Watch how Codex works through the problem. Notice the loop of planning, acting, observing, and deciding. The more you watch it work, the better you'll understand how to give it effective instructions.

## Session Management

A few practical things about working in Codex sessions:

**Starting fresh**: If your conversation gets messy or you want to start a new task, type `/clear`. This wipes the conversation and gives you a clean slate.

**Reviewing changes**: If Codex has made changes to your files, type `/diff` to see exactly what was changed. This shows you a before-and-after view of every modification.

**Checking status**: Type `/status` to see information about your current session, including how much of your available context you've used (more on context later).

**Exiting**: Close the terminal window or press Ctrl+C to stop Codex.

---

# 5. Talking to Your Agent

## Why This Matters to You

The quality of your results depends almost entirely on how well you communicate with Codex. This isn't about learning a programming language or memorizing special commands. It's about clearly expressing what you want, the same skill you use when explaining a task to a colleague.

But there are techniques that make a big difference. Just like knowing how to write a clear email makes you more effective at work, knowing how to write a clear prompt makes you more effective with Codex.

## The WHAT + WHERE + HOW + VERIFY Formula

Think of every request to Codex as having four parts. You don't always need all four, but including them when relevant dramatically improves your results.

### WHAT: What Do You Want Done?

Be specific about the outcome. Not "clean up my files" but "organize the files in the Downloads folder by file type."

**Vague (less effective):**
```
Fix my document
```

**Specific (more effective):**
```
Check my document report.docx for spelling errors, grammar mistakes, and inconsistent formatting. Fix what you find.
```

### WHERE: Where Should Codex Look or Work?

Tell Codex exactly where to find the things it needs and where to put the results.

**Without location (Codex has to guess):**
```
Summarize the meeting notes
```

**With location (Codex knows exactly where to go):**
```
Summarize the meeting notes in ~/Documents/meetings/march-2026/
```

### HOW: How Should It Do the Work?

If you have preferences about the approach, method, format, or style, say so.

**Without preference (Codex decides everything):**
```
Create a summary of these files
```

**With preference (you guide the result):**
```
Create a summary of these files as a bullet-point list, sorted by date, with no more than 3 bullets per file. Save it as summary.md.
```

### VERIFY: How Should Codex Check Its Work?

Tell Codex how to verify that the result is correct. This is optional but very helpful for important tasks.

**Without verification:**
```
Rename all the photos with today's date
```

**With verification:**
```
Rename all the photos with today's date, then list them so I can confirm the names look right
```

## Examples: From Weak to Strong

Let's look at some real examples and improve them:

### Example 1: Organizing Files

**Weak:**
```
Organize my files
```

**Strong:**
```
In the ~/Downloads folder, organize all files into subfolders by type: put images (jpg, png, gif) into an "Images" folder, documents (pdf, docx, txt) into a "Documents" folder, and everything else into an "Other" folder. Show me the result when done.
```

**Why it's better:** The strong version specifies exactly which folder to work in, how to categorize files, what the subfolder names should be, and asks for a confirmation listing at the end.

### Example 2: Analyzing Data

**Weak:**
```
Look at my spreadsheet
```

**Strong:**
```
Open the file sales-data.csv in the current directory. Tell me: (1) which month had the highest total sales, (2) which product sold the most units overall, and (3) whether there's a trend upward or downward over the year. Present your findings in a clear summary.
```

**Why it's better:** The strong version names the specific file, asks three specific questions, and requests a clear presentation format.

### Example 3: Writing Content

**Weak:**
```
Write an email
```

**Strong:**
```
Write a professional but friendly email to my team announcing that the office will be closed on Friday, April 3rd for a company event. Mention that they should submit any urgent requests by Thursday. Keep it under 150 words.
```

**Why it's better:** The strong version provides the purpose, audience, key details to include, tone, and length constraint.

### Example 4: Research Task

**Weak:**
```
Find information about the project
```

**Strong:**
```
Go through all files in ~/Projects/website-redesign/ and create a status report. For each file, note what it does, when it was last modified, and whether it looks complete or has TODO comments. Save the report as status-report.md in the same folder.
```

**Why it's better:** The strong version specifies where to look, what to report on, and where to save the result.

## Common Mistakes and How to Avoid Them

### Mistake 1: Being Too Vague

**Problem:** "Make this better."
**Why it fails:** Better how? Codex doesn't know your standards, preferences, or what "better" means to you.
**Fix:** "Improve the clarity of this document by simplifying complex sentences, fixing grammar errors, and adding headings to break up long sections."

### Mistake 2: Giving Too Many Tasks at Once

**Problem:** "Organize my files, then rewrite my report, then check my email folder for anything about the budget, then create a chart of the sales data, then..."
**Why it fails:** Codex can handle complex tasks, but an overwhelming list increases the chance that later items get less attention or something gets confused.
**Fix:** Give one or two related tasks at a time. When those are done, give the next batch.

### Mistake 3: Not Providing Context

**Problem:** "Update the numbers in the report."
**Why it fails:** Which report? Which numbers? Update them how? From what source?
**Fix:** "In the file quarterly-report.docx, update the revenue figures in the Q1 section. Use the numbers from the latest data in revenue-march.csv."

### Mistake 4: Assuming Codex Knows Your Setup

**Problem:** "Put it in the usual place."
**Why it fails:** Codex doesn't know your habits, your folder structure, or your conventions unless you tell it.
**Fix:** "Save the output to ~/Documents/reports/2026/ with the filename march-summary.md."

### Mistake 5: Not Saying What Format You Want

**Problem:** "Give me a list of the files."
**Why it fails:** You might want a simple list, a table, a numbered list, a list with file sizes, or something else entirely.
**Fix:** "Give me a numbered list of all files, including their size and last-modified date, sorted from newest to oldest."

## The Art of Follow-Up

One of the great things about working with Codex is that you can refine your request through conversation. If the first result isn't quite right, don't start over. Build on what Codex already did:

**Good follow-ups:**
```
That's good, but can you also include the file sizes?
```

```
The summary looks great. Now make it more concise — aim for half the length.
```

```
I like the organization, but move the "Other" folder to "Miscellaneous" instead.
```

**Less helpful follow-ups:**
```
No, that's wrong. (Wrong how? Be specific.)
```

```
Try again. (Try what again? What should be different?)
```

Think of it like giving feedback to a human colleague. "This report is wrong" is less helpful than "The revenue numbers in section 3 don't match the source data."

## Using the At-Sign (@) for File References

When you want Codex to work with a specific file, you can use the `@` symbol followed by the filename. This triggers a fuzzy file search, which means Codex will look for files matching what you type and let you pick the right one.

For example:
```
Look at @budget and tell me the total expenses
```

As you type after the `@`, Codex will search for files with "budget" in the name and let you select the right one. This saves you from having to remember exact file paths.

## Using the Exclamation Mark (!) for Shell Commands

If you ever need to run a quick command on your computer without going through Codex's agentic process, prefix it with `!`:

```
!ls -la
```

This runs the command directly in your terminal and shows the output. It's a shortcut for when you want a quick piece of information without Codex interpreting it as a full task.

## Prompt Templates for Common Tasks

Here are ready-to-use templates you can copy and customize:

### File Organization
```
Look at all the files in [FOLDER PATH]. Organize them into subfolders based on [CRITERIA: type/date/topic]. Show me the new structure when done.
```

### Document Summary
```
Read all [FILE TYPE] files in [FOLDER PATH]. Create a summary document that captures the key points from each file. Save it as [FILENAME] in [LOCATION].
```

### Data Analysis
```
Open [FILE NAME]. Answer these questions:
1. [SPECIFIC QUESTION]
2. [SPECIFIC QUESTION]
3. [SPECIFIC QUESTION]
Present the answers in a clear, easy-to-read format.
```

### Content Creation
```
Write a [TYPE: email/report/letter/proposal] about [TOPIC]. The audience is [WHO]. The tone should be [TONE: formal/casual/friendly]. Include [SPECIFIC DETAILS]. Keep it to about [LENGTH] words.
```

### Search and Find
```
Search through all files in [FOLDER PATH] for mentions of [SEARCH TERM]. List every file where it appears, with the surrounding context. Save the results to [FILENAME].
```

### Comparison
```
Compare [FILE 1] and [FILE 2]. Tell me what's different between them, what's the same, and which one is more [RECENT/COMPLETE/RELEVANT].
```

### Cleanup
```
In [FOLDER PATH], find all files that are [CRITERIA: empty/duplicates/older than X days/larger than X MB]. List them and ask me before deleting anything.
```

## Tone and Personality

Codex responds to the tone of your requests. If you're casual, it tends to be casual back. If you're precise and formal, it tends to match.

You can also directly tell Codex what style to use:

```
Explain this in simple language, as if I were in high school.
```

```
Be concise. Just give me the facts, no commentary.
```

```
Walk me through this step by step, explaining each part.
```

The agent is flexible. Don't hesitate to tell it how you prefer to receive information.

---

# 6. Commands and Controls

## Why This Matters to You

Think of Codex commands like the controls on a car dashboard. You can drive without knowing every button and dial, but understanding them gives you much more control over your experience. This section covers all the commands, keyboard shortcuts, and startup options. Don't try to memorize them. Read through once to know they exist, and come back to this section as a reference when you need them.

## Slash Commands

Slash commands are special instructions you type during a Codex session. They start with `/` and control the session itself rather than giving the agent a task.

### /clear — Start Fresh

```
/clear
```

**What it does:** Wipes the entire conversation and gives you a blank slate. All the context from your current session is erased.

**When to use it:** When you're starting a completely new task that has nothing to do with what you were previously working on. When the conversation has gotten long and confusing. When Codex seems confused about what you're asking.

**Analogy:** Like flipping to a fresh page in a notebook.

### /compact — Summarize and Save Space

```
/compact
```

**What it does:** Tells Codex to summarize the conversation so far into a condensed version. This frees up space for new content while keeping the essential information.

**When to use it:** When you've been working for a while and the session is getting sluggish. When Codex mentions it's running low on context space. When you want to keep working on the same task but the conversation is very long.

**Analogy:** Like writing the key takeaways from a long meeting on a sticky note, then closing the detailed meeting transcript. You keep the important stuff, but free up your mental bandwidth.

### /diff — Show What Changed

```
/diff
```

**What it does:** Shows you exactly what files Codex has changed during the session. It displays the before-and-after view of every modification, with additions shown (often in green) and deletions shown (often in red).

**When to use it:** After Codex modifies your files, to review exactly what was changed before you accept the results. Whenever you want to audit what the agent has done.

**Analogy:** Like using "Track Changes" in Microsoft Word. You can see every edit that was made.

### /model — Switch AI Models

```
/model
```

**What it does:** Lets you change which AI model Codex is using. You can switch to a different model mid-session.

**When to use it:** When you want to switch to a faster model (GPT-5.4-mini) for simple tasks or the specialized coding model (GPT-5.3-codex) for development work.

**Example:**
```
/model gpt-5.4-mini
```

**Analogy:** Like switching between driving modes in a car: eco mode for city driving, sport mode for the highway.

### /plan — Switch to Plan Mode

```
/plan
```

**What it does:** Puts Codex into planning-only mode. In this mode, Codex will explain what it *would* do without actually doing it. It creates a detailed plan of action.

**When to use it:** When you want to understand the approach before committing. When you're dealing with sensitive files and want to review the plan before any changes are made. When you're learning and want to see how Codex thinks.

**Analogy:** Like asking a contractor for a detailed quote and plan before they start renovating your kitchen. You get to see the entire plan on paper before any hammers start swinging.

### /status — Check Session Info

```
/status
```

**What it does:** Shows you information about your current session: which model you're using, how much context space you've consumed, and other session details including token usage.

**When to use it:** When you want to know how much of your session capacity you've used. When you want to confirm which model is active. When you're curious about the current state of things.

**Analogy:** Like checking the fuel gauge and dashboard display in your car. Quick status check.

### /review — Ask Codex to Review Changes

```
/review
```

**What it does:** Asks Codex to look at the changes it has made and provide its own assessment. It will check for errors, suggest improvements, and flag anything that might be concerning.

**When to use it:** After Codex has made significant changes. When you want a "second opinion" on the work. Before you finalize and accept changes.

**Analogy:** Like asking a colleague to proofread your work before you submit it.

### /init — Generate Project Instructions

```
/init
```

**What it does:** Creates an AGENTS.md file in your project directory. This file contains instructions that tell Codex about your project: how it's organized, what conventions to follow, and any special rules. Think of it as a briefing document for your AI assistant.

**When to use it:** When you start working on a new project and want Codex to understand the project's conventions. When you want consistent behavior across sessions.

**Analogy:** Like writing an onboarding document for a new employee. "Here's how we do things around here."

### /permissions — Set What Codex Can Do

```
/permissions
```

**What it does:** Opens the permissions settings where you can control what Codex is allowed to do. You can specify which tools it can use, which files it can access, and what level of autonomy it has.

**When to use it:** When you want to adjust the safety settings. When you want to give Codex more freedom or restrict it further.

**Analogy:** Like setting parental controls or app permissions on a phone. You decide what the agent can access.

### /mcp — List Connected Tools

```
/mcp
```

**What it does:** Shows all the MCP (Model Context Protocol) tools that are currently available to Codex. These are external tools and integrations that extend what Codex can do.

**When to use it:** When you want to see what extra capabilities are available. When you've added a new tool and want to confirm it's connected.

**Analogy:** Like checking which apps are installed on your phone.

## Keyboard Shortcuts

These keyboard combinations let you quickly control Codex without typing commands:

### Ctrl+C — Cancel

Press Ctrl and C at the same time to cancel whatever Codex is currently doing. If it's in the middle of running a command or generating a long response, this stops it immediately.

**When to use it:** When Codex is doing something you didn't intend. When a task is taking too long and you want to try a different approach. When you realize you gave the wrong instruction.

**Analogy:** Like pressing the stop button on a microwave. Whatever's happening, stop now.

### Ctrl+G — Open Editor

Press Ctrl and G to open a full text editor for writing your prompt. This is helpful when you want to write a longer, more detailed request than what's comfortable to type in a single line.

**When to use it:** When your prompt is complex or multi-paragraph. When you want to carefully compose your request before sending it.

**Analogy:** Like switching from texting to writing in a full email app. More space, more control.

### Esc Esc — Edit Previous Prompt

Press the Escape key twice quickly to bring back your previous prompt for editing. This lets you modify what you said before and re-send it.

**When to use it:** When you realize your last request had a typo or was missing something. When you want to refine your approach without retyping everything.

**Analogy:** Like the "edit message" feature in messaging apps.

### @ — Fuzzy File Search

Type the `@` symbol to trigger a file search. As you continue typing after the `@`, Codex searches for matching files and lets you select one. This is much faster than typing out full file paths.

**When to use it:** Whenever you want to reference a specific file in your prompt. When you can't remember the exact filename or path.

**Analogy:** Like the search bar in your email app. Type part of what you're looking for, and it finds it.

### ! — Run Shell Command

Type `!` at the start of your input to run a command directly in your terminal, bypassing Codex's agent processing.

**When to use it:** When you want a quick command result without Codex interpreting it as a task. When you need raw terminal output.

**Example:**
```
!pwd
```
This runs the `pwd` command (print working directory) and shows your current folder location.

## CLI Startup Flags

When you launch Codex from the terminal, you can add special options (called flags) that change how it behaves for that session. These go after the `codex` command:

### --model — Choose a Model

```bash
codex --model gpt-5.4-mini
```

Starts Codex with a specific model. Same as using `/model` during a session, but sets it from the start.

### --full-auto — Maximum Autonomy

```bash
codex --full-auto
```

Starts Codex in "full auto" mode. In this mode, Codex can read and write files in your project folder without asking for permission. It still can't access the network or run unrestricted commands. This is a good balance between convenience and safety.

**Think of it like:** Telling your assistant, "Go ahead and work in my office. You can use anything on my desk, but don't go into other rooms or use the phone."

### --sandbox — Set Safety Level

```bash
codex --sandbox read-only
```

Sets the sandbox mode, which controls what Codex can do on your system. Options are:

- `read-only`: Codex can only look at files, not change anything
- `workspace-write`: Codex can read and write files in your project folder and /tmp, but nothing else
- `danger-full-access`: No restrictions (not recommended for most users)

We cover these in detail in the Safety and Permissions section.

### --search — Enable Web Search

```bash
codex --search
```

Allows Codex to search the web for information as part of its work.

### -p — Use a Profile

```bash
codex -p writing
```

Loads a specific configuration profile. Profiles let you save different sets of preferences for different types of work. For example, you might have a "writing" profile with one set of preferences and an "organizing" profile with different settings.

### codex exec — Non-Interactive Mode

```bash
codex exec "list all PDF files in ~/Documents and count them"
```

Runs a single task without starting an interactive session. Codex executes the task and exits. This is useful for automation or quick one-off tasks.

**Think of it like:** Sending a text to your assistant asking them to do one quick thing, versus calling them into your office for a working session.

## Command Reference Table

Here's a quick-reference table of all commands:

| Command | What It Does | When to Use It |
|---|---|---|
| `/clear` | Erases conversation, fresh start | New task, confused session |
| `/compact` | Summarizes conversation to save space | Long session, running low on context |
| `/diff` | Shows all file changes made | Review before accepting changes |
| `/model` | Switch AI models | Need faster/specialized model |
| `/plan` | Plan without executing | Want to preview before acting |
| `/status` | Show session info and token usage | Check model, context usage |
| `/review` | Have Codex review its own changes | Quality check before finalizing |
| `/init` | Create AGENTS.md project file | Set up project instructions |
| `/permissions` | Manage safety settings | Adjust what Codex can do |
| `/mcp` | List connected tools | Check available integrations |
| `Ctrl+C` | Cancel current action | Stop something in progress |
| `Ctrl+G` | Open text editor for prompt | Write complex, long prompts |
| `Esc Esc` | Edit previous prompt | Fix typo or refine request |
| `@` | Fuzzy file search | Reference specific files |
| `!` | Run shell command directly | Quick command without agent processing |

---

# 7. Understanding Context

## Why This Matters to You

Imagine you're having a conversation with someone who can only remember the last 30 minutes of discussion. Everything before that fades away. If you want to refer to something from an hour ago, you'd need to remind them.

That's roughly how AI context works, and understanding it makes you a much more effective Codex user. Context is perhaps the most important concept to understand because it directly affects how well Codex performs for you.

## What Is Context?

In AI terms, "context" is everything the AI is currently holding in its memory during your session. This includes:

- **Your conversation:** Every message you've sent and every response Codex has given
- **Files it has read:** The contents of any files Codex has looked at
- **Command outputs:** The results of commands it has run
- **Its own plans and thoughts:** The reasoning it has done so far

All of this sits in what's called a **context window**. Think of the context window as a whiteboard in a meeting room. You can write a lot on it, but eventually, you run out of space. When you do, you either need to erase some things or summarize them to make room for more.

## The Context Window: Your AI's Working Memory

Every AI model has a maximum context window size, measured in "tokens." A token is roughly a word or part of a word. You don't need to count tokens yourself, Codex handles this automatically, but understanding the concept helps.

Here's the analogy: imagine your desk can hold a maximum of 100 documents. Every message you send, every file Codex reads, every result it gets, each one is like putting another document on the desk. Eventually, the desk gets full and you need to clear some space.

**GPT-5.4** (the default model) has a very large context window. Think of it as having a very big desk. But even big desks can fill up during long, complex sessions.

## Context Zones

Think of context like zones of relevance, from most important to least:

### Core Zone (Always Present)
This is the essential information that's always in context:
- Your system instructions and configuration
- AGENTS.md project files (if any)
- MCP tool definitions (if any)

Think of this as the permanent labels on your desk, always there, always visible.

### Active Zone (Current Work)
This is what you're actively working on:
- The recent conversation
- Files you've recently asked Codex to read
- Recent command outputs

Think of this as the documents you're currently working with, right in front of you.

### Fading Zone (Older Content)
As your session goes on, older parts of the conversation take up space but may be less relevant:
- Earlier messages
- Files read a while ago
- Old command outputs

Think of this as the stack of papers piling up on the corner of your desk. They're still there, but they're getting crowded out.

## When Context Becomes a Problem

You'll know context is becoming an issue when:

- **Codex starts forgetting things** you told it earlier in the session
- **Responses slow down** because there's so much information to process
- **Codex repeats work** it already did, because it's lost track
- **You get a warning** about approaching context limits

This usually happens during long sessions where you've:
- Read many large files
- Had a very long conversation
- Asked Codex to do many different tasks without clearing

## Managing Context: Your Toolkit

### /compact — Summarize to Save Space

The `/compact` command is your best friend for context management. When you use it:

1. Codex reads through the entire conversation
2. It identifies the key points, decisions, and important information
3. It creates a condensed summary
4. It replaces the full conversation with this summary

This frees up a huge amount of space while keeping the important stuff.

**When to use /compact:**
- When Codex starts feeling sluggish
- When you get a message about context limits
- When you've been working for a while and want to keep going
- Proactively, every 20-30 minutes of intensive work

**Analogy:** Like taking detailed meeting notes and then condensing them into a one-page executive summary. You keep the key decisions and action items, but you don't need the full transcript anymore.

### /clear — Complete Reset

The `/clear` command is more drastic. It wipes everything, all conversation, all context, all memory of the current session.

**When to use /clear:**
- When you're starting a completely different task
- When the conversation has gotten so muddled that summarizing won't help
- When you want a truly fresh start

**Analogy:** Like cleaning off your entire desk and starting with a blank surface.

### Being Selective About File Reading

One of the biggest context consumers is reading files. A single large file can take up a significant portion of your context window.

**Tips for managing file-related context:**
- Ask Codex to read only the parts of a file you need: "Read the first 50 lines of report.txt" instead of "Read report.txt"
- If you're working with many files, process them in batches rather than asking Codex to read all of them at once
- When a file is no longer relevant, use `/compact` to free up the space it was occupying

### Auto-Compaction

Codex has a built-in feature called auto-compaction. You can set a token limit, and when your context usage reaches that level, Codex automatically runs a compaction to free up space. This is configured in your settings file (we cover configuration later):

```toml
model_auto_compact_token_limit = 80000
```

This means "when context reaches 80,000 tokens, automatically compact." The right number depends on your model and preferences, but setting this is like having an automatic clean-up schedule. You don't have to think about it.

### Adjusting the Context Window

If you know your model's context window size and want to override Codex's default assumption, you can set it:

```toml
model_context_window = 200000
```

This tells Codex how much space it thinks it has to work with. Usually, you don't need to change this, but it can help if you're using a model with an unusually large or small context window.

## Practical Context Strategies

### Strategy 1: The Sprint

For short, focused tasks (under 15 minutes):
1. Start fresh with `/clear`
2. Give Codex your task
3. Let it work
4. Review results
5. Done

Context is rarely a problem for quick tasks.

### Strategy 2: The Marathon

For long, complex tasks (over 30 minutes):
1. Start fresh with `/clear`
2. Give Codex the first part of the task
3. After it completes, use `/compact`
4. Give the next part of the task
5. After it completes, use `/compact` again
6. Continue until done

This keeps your context clean throughout a long session.

### Strategy 3: The Deep Dive

For research-heavy tasks involving many files:
1. Start fresh with `/clear`
2. Ask Codex to read a batch of related files (3-5 at a time)
3. Ask your questions about those files
4. Use `/compact` to summarize findings
5. Move to the next batch of files
6. Repeat

This prevents file contents from overwhelming your context.

### Strategy 4: The Checkpoint

For ongoing projects you return to:
1. Before ending a session, ask Codex to create a summary document of what was done and what's left
2. Save that summary as a file (like `session-notes.md`)
3. Next time you start, ask Codex to read that summary file first
4. Continue from where you left off

This gives you persistent memory across sessions by storing important context in files.

## Context Is Your Most Valuable Resource

Think of context like attention. Just as you can only focus on so many things at once, Codex can only hold so much information at once. Your job as the "manager" of this AI agent is to make sure its attention is focused on the right things.

The best users of Codex are the ones who:
- Keep tasks focused and specific
- Clear and compact regularly
- Don't dump unnecessary information into the conversation
- Use files to store important information that doesn't need to live in context

This isn't a skill you need to master immediately. Just be aware that context exists, and use `/compact` and `/clear` when things feel slow or confused.

---

# 8. Customizing Codex

## Why This Matters to You

Out of the box, Codex works well for everyone. But just like you customize your phone with your preferred wallpaper, notification settings, and app layout, you can customize Codex to match how you work. This section shows you how to make Codex feel like *your* personal assistant rather than a generic one.

## Configuration Files: Your Preferences File

Codex uses configuration files written in TOML format. TOML is just a simple way to write settings that both humans and computers can understand. It looks like this:

```toml
# This is a comment (ignored by the computer)
model = "gpt-5.4"
approval_policy = "on-request"
```

Each line sets a preference: the name of the setting on the left, an equals sign, and the value on the right.

### Where Configuration Files Live

Codex looks for configuration files in two places:

**User-level configuration: `~/.codex/config.toml`**

The `~` symbol means your home directory (like `C:\Users\YourName` on Windows or `/Users/YourName` on Mac). This file contains your personal preferences that apply to all your projects. Think of it as your global settings.

**Project-level configuration: `.codex/config.toml`**

This file lives inside a specific project folder. Preferences here override your global settings, but only when you're working in that project. Think of it as project-specific rules.

For example, you might set your global model to GPT-5.4 (because it's the best for most tasks), but set a specific project to use GPT-5.4-mini (because that project just needs simple tasks done quickly).

### Creating Your First Configuration File

Let's create a basic configuration file. You can do this with Codex itself:

```
Create a file at ~/.codex/config.toml with these settings: use the gpt-5.4 model, set approval policy to on-request, and enable auto-compaction at 80000 tokens
```

Or you can create it manually. Here's what a good starter configuration looks like:

```toml
# My Codex Configuration

# Which AI model to use
model = "gpt-5.4"

# How Codex asks for permission (options: untrusted, on-request, never)
approval_policy = "on-request"

# Automatically compress the conversation when it gets long
model_auto_compact_token_limit = 80000

# Sandbox mode (options: read-only, workspace-write, danger-full-access)
sandbox = "workspace-write"
```

### Key Configuration Options

Here are the most useful settings you can customize:

**model** — Which AI brain to use
```toml
model = "gpt-5.4"           # Best all-around (default)
model = "gpt-5.4-mini"      # Faster for simple tasks
model = "gpt-5.3-codex"     # Specialized for coding
```

**approval_policy** — How much Codex asks for permission
```toml
approval_policy = "untrusted"    # Asks before almost everything
approval_policy = "on-request"   # Asks when it thinks it should (default)
approval_policy = "never"        # Never asks (use cautiously)
```

**sandbox** — What Codex can access on your computer
```toml
sandbox = "read-only"            # Can only look, not change
sandbox = "workspace-write"      # Can change files in project + /tmp
sandbox = "danger-full-access"   # No restrictions (not recommended)
```

**model_auto_compact_token_limit** — When to auto-summarize
```toml
model_auto_compact_token_limit = 80000  # Compact at 80K tokens
```

**model_context_window** — Override the context window size
```toml
model_context_window = 200000    # Tell Codex how much context is available
```

## AGENTS.md: Your Project's Instruction Manual

AGENTS.md is a special file that tells Codex about your project. It's like writing an onboarding document for a new team member: "Here's our project, here's how things are organized, here's what we care about."

### What Goes in AGENTS.md

An AGENTS.md file typically includes:

- **Project description**: What this project is about
- **File organization**: How files and folders are structured
- **Conventions**: Rules or preferences for this project
- **Important notes**: Anything Codex should always keep in mind
- **Do's and don'ts**: Things to always do or never do

### Example AGENTS.md

```markdown
# Project: Family Budget Tracker

## Overview
This folder contains our family budget spreadsheets and reports for 2026.

## File Organization
- `monthly/` — One CSV file per month with daily expenses
- `reports/` — Summary reports, one per quarter
- `receipts/` — Scanned receipts organized by month

## Conventions
- All amounts are in USD
- Date format is YYYY-MM-DD
- Category names use lowercase with hyphens (e.g., "dining-out", "car-insurance")

## Important Notes
- Never modify files in the `receipts/` folder — those are originals
- Always back up a file before making changes to it
- Reports should follow the template in `reports/template.md`
```

### Creating AGENTS.md

You can create one automatically by using the `/init` command in Codex. It will scan your project and generate a starting AGENTS.md that you can then customize.

Or you can ask Codex to create one for you:

```
Look at all the files in this project and create an AGENTS.md file that describes the project structure, conventions, and any rules you can infer from the existing files.
```

### Where AGENTS.md Files Live

Codex looks for AGENTS.md files in several places:

1. **Your Codex home directory** (`~/.codex/AGENTS.md`): Global instructions that apply to all projects
2. **Your project root**: Instructions specific to this project
3. **Subdirectories**: Instructions specific to parts of the project

When Codex finds multiple AGENTS.md files, it combines them. Global instructions provide the baseline, and project-specific instructions add or override.

## Profiles: Different Hats for Different Tasks

Profiles let you save different configurations for different types of work. Think of them like outfits: you wear one thing to work, another to the gym, and another to a dinner party. Same you, different setup.

To use a profile, start Codex with the `-p` flag:

```bash
codex -p writing
```

This loads the configuration from a profile called "writing" in your config file. You set up profiles in your `config.toml`:

```toml
# Default settings
model = "gpt-5.4"
sandbox = "workspace-write"

# When I start Codex with: codex -p writing
[profiles.writing]
model = "gpt-5.4"
approval_policy = "never"
# More permissive since writing doesn't affect system files

# When I start Codex with: codex -p research
[profiles.research]
model = "gpt-5.4-mini"
sandbox = "read-only"
# Read-only because I'm just analyzing, not changing files

# When I start Codex with: codex -p organizing
[profiles.organizing]
model = "gpt-5.4-mini"
sandbox = "workspace-write"
approval_policy = "on-request"
```

## Customization Tips

### Tip 1: Start Simple

Begin with just a model and approval policy in your config file. Add more settings as you learn what you need. Don't try to configure everything at once.

### Tip 2: Project-Level Config Is Powerful

If you have a folder of important documents that you never want accidentally modified, put a `.codex/config.toml` in that folder with `sandbox = "read-only"`. Now Codex can never change those files, even if your global settings are more permissive.

### Tip 3: Use AGENTS.md for Repeated Work

If you find yourself telling Codex the same thing every session ("always use bullet points," "never delete original files," "date format is MM/DD/YYYY"), put it in AGENTS.md. Then Codex will know automatically, every time.

### Tip 4: Profiles Save Time

If you switch between very different types of tasks, profiles are worth setting up. Two minutes of configuration saves you from typing the same setup instructions at the start of every session.

### Tip 5: Version Control Your Config

If you're working on a team project, put `.codex/config.toml` and `AGENTS.md` in your shared project files (like a Git repository). This way, everyone on the team gets the same Codex behavior for that project.

---

# 9. Safety and Permissions

## Why This Matters to You

Safety is the number one concern people have about AI agents, and rightfully so. You're giving an AI the ability to do things on your computer. That's powerful, which means it needs to be controlled.

The good news: Codex was designed with safety as a core principle. It has multiple layers of protection, and you're always in control. This section explains all the safety features in plain language so you can feel confident using Codex without worrying about it going rogue.

Think of it like this: when you give your car keys to a valet, you trust them to park your car, but you wouldn't give them your house keys too. Codex's safety system lets you decide exactly what "keys" you're handing over.

## Sandbox Modes: The Walls Around Codex

A "sandbox" is a controlled environment. Just like a child's sandbox at a playground has walls that keep the sand contained, Codex's sandbox keeps its actions contained.

Codex offers three sandbox modes:

### Read-Only Mode — "Look but Don't Touch"

```toml
sandbox = "read-only"
```

In this mode, Codex can:
- Read files and examine them
- Run commands that don't change anything
- Analyze, search, and report

Codex CANNOT:
- Create new files
- Modify existing files
- Delete anything
- Install software
- Access the network

**Best for:** Research, analysis, learning about your files, and any situation where you want to explore safely. Every proposed change must be approved by you.

**Analogy:** Like hiring a consultant to audit your office. They can look at everything, take notes, and give you recommendations, but they can't move anything, change anything, or take anything with them.

### Workspace-Write Mode — "Work Within Your Zone"

```toml
sandbox = "workspace-write"
```

In this mode, Codex can:
- Read files anywhere in your project
- Create new files within your project folder
- Modify files within your project folder
- Use the temporary directory (/tmp)

Codex CANNOT:
- Touch files outside your project folder
- Access the network
- Install system-wide software
- Modify system settings or files in your home directory outside the project

**Best for:** Most everyday work. This is the default sandbox mode when you use `--full-auto`.

**Analogy:** Like giving a contractor access to the room being renovated, but not the rest of the house. They can bring in materials, move things around, and do their work in that room, but they stay in their designated area.

### Full Access Mode — "No Restrictions"

```toml
sandbox = "danger-full-access"
```

In this mode, Codex can do essentially anything on your computer.

**Best for:** Advanced users who fully understand the risks and need Codex to perform system-wide tasks.

**Not recommended for:** Most users, especially beginners.

**Analogy:** Like giving someone the master key to your entire building. They can go anywhere and do anything. Only do this with someone you trust completely with specific, well-understood tasks.

## Approval Policies: How Much Codex Asks Permission

Independent of the sandbox mode, you can also control how often Codex asks for your approval before taking action.

### Untrusted — "Ask Me About Everything"

```toml
approval_policy = "untrusted"
```

Codex asks you before almost every action. Reading a file? It asks. Running a command? It asks. Creating a file? It asks.

**Best for:** Your first sessions with Codex. Learning how Codex works. Working with sensitive files.

**Experience:** You'll see lots of prompts like:
```
Codex wants to run: ls Documents/
Allow? (y/n/a)
```

**Analogy:** Like a new employee on their first day. They check with you before every step because they want to make sure they're doing the right thing.

### On-Request — "Use Your Judgment"

```toml
approval_policy = "on-request"
```

This is the default. Codex uses its own judgment about when to ask. For routine, safe operations (like listing files or reading documents), it just goes ahead. For more significant actions (like modifying files or running complex commands), it asks.

**Best for:** Most everyday use once you're comfortable with Codex.

**Experience:** Codex works smoothly for routine tasks but pauses to check with you for anything significant.

**Analogy:** Like a trusted team member who handles routine work independently but checks with you before making big decisions.

### Never — "Just Do It"

```toml
approval_policy = "never"
```

Codex never asks for permission. It just does whatever it determines is needed to complete your task.

**Best for:** Automation, batch tasks, and situations where you've fully scoped the task and want maximum speed.

**Use cautiously:** Make sure your sandbox is properly set before using this policy.

**Analogy:** Like delegating a task completely: "Handle this, I trust your judgment on the details."

## Shortcut Modes

Codex provides two shortcut flags that combine sandbox and approval settings:

### --full-auto

```bash
codex --full-auto
```

This is equivalent to:
- Sandbox: `workspace-write`
- Approval: `on-request`

It's a good balanced setting. Codex can work freely within your project folder, asks about anything unusual, but doesn't bother you for routine operations. Think of it as the "cruise control" of Codex, comfortable, efficient, and still safe.

### --yolo

```bash
codex --yolo
```

This bypasses essentially all safety checks. The name says it all: "You Only Live Once." This is the least cautious mode possible.

**Strongly discouraged for most users.** Only use this if you fully understand what Codex might do and you're working in an environment where mistakes have no real consequences (like a test environment).

## Understanding What Codex Can and Cannot Do

Let's be very clear about Codex's capabilities and limitations from a safety perspective:

### What Codex CAN Do (with appropriate permissions)

- Read, create, modify, and delete files
- Run commands in your terminal
- Search through files and folders
- Install packages and software (in less restricted modes)
- Make network requests (in less restricted modes)
- Execute scripts and programs

### What Codex CANNOT Do

- Access your files without you starting Codex and pointing it at them
- Run in the background when you haven't started it
- Access files or systems that your user account can't access
- Bypass your operating system's security
- Send your files to anyone (in sandbox modes that restrict network access)
- Remember things between sessions (unless you save them to a file)

### Built-In Protections

Even in the most permissive modes, Codex has some built-in protections:

1. **It operates under your user account.** It can only do what you can do on your computer. It can't gain administrator access if you don't have it.

2. **It explains what it's doing.** Codex shows you its actions in real-time. You can see every command it runs and every file it modifies.

3. **It's not persistent.** When you close Codex, it stops. It doesn't install background services or continue running.

4. **Changes are reviewable.** The `/diff` command shows you everything that was changed, so you can review before accepting.

## Safety Best Practices

### For Beginners

1. **Start with read-only mode.** Get comfortable with how Codex works before letting it make changes.

2. **Graduate to workspace-write.** Once you trust Codex's judgment, let it write within your project folder.

3. **Use /diff after every session.** Always review what Codex changed.

4. **Keep backups.** Before letting Codex work on important files, make a copy first. This is good practice regardless of AI.

### For Regular Users

1. **Use --full-auto for routine work.** It's a good balance of speed and safety.

2. **Set up project-level configs.** Put stricter settings on folders with important files.

3. **Use AGENTS.md to set rules.** Tell Codex to "never delete files without asking" or "always create a backup before modifying."

4. **Review periodically.** Even if you trust Codex, spot-check its work from time to time.

### For Sensitive Work

1. **Always use read-only mode** when working with financial records, personal information, or irreplaceable files.

2. **Work on copies.** Ask Codex to copy files to a working directory first, then work on the copies.

3. **Use /plan mode first.** Have Codex explain what it would do before it does it.

4. **Keep network access restricted.** If your files contain sensitive information, use sandbox modes that prevent network access.

## A Note on Privacy

When you use Codex, the content of your prompts and the files Codex reads are sent to OpenAI's servers for processing. This is how the AI generates responses, it needs to see the information to work with it.

OpenAI has privacy policies governing how this data is handled, but you should be aware that sensitive information in your files will be transmitted during processing.

**Practical implications:**
- Don't point Codex at files containing passwords, secret keys, or highly confidential information
- Be mindful when working with personal data that's subject to privacy regulations
- For enterprise use, consider OpenAI's enterprise plans which offer additional data protections

---

# 10. Practical Workflows

## Why This Matters to You

This is where things get practical. We've covered the concepts, the setup, the commands, and the safety features. Now let's see Codex in action for real tasks that real people do every day. None of these require any coding knowledge.

## Workflow 1: Organizing Files

### The Situation
You have a Downloads folder with hundreds of files accumulated over months. Photos, PDFs, spreadsheets, random documents. It's a mess, and finding anything takes forever.

### What to Tell Codex

```
Look at all the files in ~/Downloads and organize them. Here's what I want:

1. Create subfolders by file type:
   - "Images" for jpg, png, gif, svg, webp files
   - "Documents" for pdf, docx, doc, txt, rtf files
   - "Spreadsheets" for xlsx, xls, csv files
   - "Presentations" for pptx, ppt files
   - "Videos" for mp4, mov, avi files
   - "Music" for mp3, wav, flac files
   - "Archives" for zip, rar, 7z files
   - "Other" for everything else

2. Within each subfolder, organize by month (2026-01, 2026-02, etc.) based on when the file was created

3. Don't move any file that's less than 24 hours old (I might still need it in Downloads)

4. When done, give me a summary of how many files were moved to each folder

5. Before moving anything, show me the plan and wait for my approval
```

### What Happens

Codex will:
1. Scan your Downloads folder
2. Categorize every file
3. Show you a plan ("I'm going to move 47 images, 23 documents, 12 spreadsheets...")
4. Wait for your approval
5. Create the folder structure
6. Move the files
7. Give you a summary

### The Result

Your Downloads folder goes from chaos to organized in minutes, a task that would have taken you an hour or more to do manually.

## Workflow 2: Analyzing a Spreadsheet

### The Situation
You have a CSV file with sales data and you need to understand the trends, but you don't know how to use Excel formulas or data analysis tools.

### What to Tell Codex

```
Open the file sales-2025.csv and answer these questions:

1. What was the total revenue for each quarter?
2. Which product had the highest total sales?
3. Which month was the best and which was the worst?
4. Is there an upward or downward trend over the year?
5. Are there any unusual patterns or outliers?

Present your findings as a clear, easy-to-read report. Save the report as sales-analysis.md in the same folder.
```

### What Happens

Codex reads the CSV file, analyzes the numbers, calculates totals and averages, identifies trends and patterns, and writes a clear report. It might even create a simple text-based chart to visualize the data.

### Why This Matters

You just did data analysis that would normally require knowing spreadsheet formulas, pivot tables, or even dedicated analytics software. You described what you wanted in plain language, and Codex handled the technical parts.

## Workflow 3: Writing and Editing Documents

### The Situation
You have a first draft of an important email, report, or proposal, and it needs work. You want it to be clearer, more professional, and free of errors.

### What to Tell Codex

```
Read the file draft-proposal.docx. I need you to:

1. Fix all spelling and grammar errors
2. Make the language more professional and confident
3. Shorten any paragraphs that are more than 5 sentences
4. Add clear headings to break up sections
5. Make sure the conclusion strongly restates our key benefit
6. Keep the overall message and facts the same — just improve the writing

Save the improved version as proposal-final.docx. Also save a brief changelog showing what you changed and why.
```

### What Happens

Codex reads your draft, rewrites it according to your specifications, and saves two files: the improved version and a list of changes. You can review the changes, accept them, or ask for further revisions.

### Follow-Up Prompts

After reviewing, you might say:

```
The third paragraph is too formal now. Make it friendlier while keeping it professional.
```

```
Add a section about our timeline. We plan to deliver Phase 1 by June and Phase 2 by September.
```

```
Actually, let's create three versions: one for the CEO (very concise), one for the project team (detailed), and one for the client (persuasive).
```

## Workflow 4: Searching Through Files

### The Situation
You know you wrote something about a specific topic months ago, but you can't remember which file it's in. You have hundreds of documents scattered across multiple folders.

### What to Tell Codex

```
Search through all files in ~/Documents for any mention of "quarterly budget" or "Q1 budget" or "first quarter finances". For each match:

1. Tell me the file name and location
2. Show me the paragraph where it appears
3. Tell me when the file was last modified

Sort the results by date (newest first).
```

### What Happens

Codex searches recursively through all your documents, finds every mention, and presents the results in a clear, organized way. In seconds, it does what would take you hours of opening files and searching manually.

### Variations

```
Find all files in ~/Projects that haven't been modified in the last 6 months. These might be abandoned projects I can archive or delete.
```

```
Search all my text files for email addresses and phone numbers. Compile them into a contacts list.
```

```
Find all duplicate files in ~/Photos (files with the same name or same size). Show me the duplicates so I can decide which to keep.
```

## Workflow 5: Learning Something New

### The Situation
You want to understand something, maybe a folder of code someone shared with you, a new software tool, or a complex document, but it's all too technical.

### What to Tell Codex

```
I'm looking at the files in ~/Projects/company-website/. I have no programming experience. Can you:

1. Explain what this project is, in plain language
2. Describe what each file and folder does
3. Tell me how the pieces fit together
4. Explain how I would make simple changes (like updating text on a page)

Pretend I'm a complete beginner who has never seen code before.
```

### What Happens

Codex reads through the project, understands the structure, and explains everything in beginner-friendly terms. It's like having a patient tutor who can look at exactly what you're looking at and explain it in terms you understand.

### Other Learning Scenarios

```
Read this contract.pdf and explain every section in plain language. Flag anything that seems unusual or that I should pay special attention to.
```

```
I downloaded my bank statements as CSV files. Teach me what each column means and how to read them. Then show me my spending patterns.
```

```
Look at this Python script someone sent me. I don't know Python. Explain what it does step by step, as if I'm five years old.
```

## Workflow 6: Batch File Processing

### The Situation
You need to do the same thing to many files: rename them, convert them, add dates, or process them in some way.

### What to Tell Codex

```
In the folder ~/Photos/vacation-2026/:

1. Rename every photo to include the date it was taken, using the format "2026-03-15_original-name.jpg"
2. If two photos have the same date, add a number: "2026-03-15_01_original-name.jpg"
3. Create a subfolder called "edited" and don't touch any files in it
4. Show me the before-and-after names so I can verify
```

### What Happens

Codex reads the metadata from each photo (the hidden data that includes when it was taken), renames every file according to your rules, and shows you the results.

### Other Batch Processing Examples

```
Convert all .txt files in this folder to .md format (just change the extension). Show me the list of renamed files.
```

```
Add the prefix "ARCHIVE_" to every file in ~/old-projects/ that hasn't been modified in 2025 or earlier.
```

```
Take all the CSV files in ~/data/ and combine them into one big file called combined-data.csv, with headers only appearing once at the top.
```

## Workflow 7: Creating Reports and Summaries

### The Situation
You need to compile information from multiple sources into a single, clean report.

### What to Tell Codex

```
I need to create a weekly status report. Here's what to include:

1. Read all files modified this week in ~/Projects/website-redesign/
2. Summarize what changed in each file
3. Read the file todo.md and list which items were completed this week
4. Read the file issues.md and summarize any open problems

Format the report with:
- A header with this week's date range
- An "Accomplishments" section
- A "In Progress" section
- An "Issues" section
- A "Next Steps" section based on the remaining todo items

Save it as ~/Reports/weekly-report-2026-03-28.md
```

### What Happens

Codex gathers information from multiple files, analyzes what changed and when, and compiles everything into a structured report. What might take you 30 minutes of reviewing files and writing becomes a 2-minute request.

## Workflow 8: Research and Comparison

### The Situation
You need to compare options, analyze alternatives, or research a decision.

### What to Tell Codex

```
I have three vendor proposals in ~/Documents/vendor-proposals/:
- proposal-acme.pdf
- proposal-globex.pdf
- proposal-initech.pdf

Compare them across these dimensions:
1. Total cost
2. Timeline
3. What's included vs. what costs extra
4. Contract terms and conditions
5. References or case studies mentioned

Create a comparison table and give me your assessment of which offers the best value. Save the comparison as vendor-comparison.md.
```

### What Happens

Codex reads all three proposals, extracts the relevant information, creates a structured comparison, and provides an analysis. You get a clear, side-by-side view that makes your decision easier.

## Workflow 9: Automating Repetitive Tasks

### The Situation
There's something you do regularly, the same steps, the same process, every week or every month. It's boring but necessary.

### What to Tell Codex

```
I need to do this every Monday morning:

1. Look at the folder ~/inbox/ for any new files
2. Move PDFs to ~/Documents/filing/
3. Move images to ~/Photos/incoming/
4. Move everything else to ~/Documents/unsorted/
5. Check ~/Documents/filing/ for any PDFs that aren't named with the date format. Rename them to include today's date.
6. Create a log entry in ~/logs/inbox-processing.log with today's date and what was moved

Can you do this now, and also create a script I can run in the future to do it automatically?
```

### What Happens

Codex does the task now AND creates a reusable script. Next Monday, you can either ask Codex to do it again or run the script directly. Over time, you build a library of automated tasks that save you hours.

## Workflow 10: Personal Knowledge Management

### The Situation
You have notes scattered across many files, folders, and formats. You want to make sense of them.

### What to Tell Codex

```
I have notes from the past year in ~/Notes/. They're a mix of .txt, .md, and .docx files. I need you to:

1. Read all of them
2. Identify the main topics and themes across all notes
3. Create an index file that lists every note, its main topic, and its key points
4. Group related notes together (notes about the same project, topic, or event)
5. Flag any notes that have action items or TODOs that haven't been completed
6. Save the index as ~/Notes/master-index.md

Be thorough — there are probably 50+ files.
```

### What Happens

Codex reads through your entire collection of notes, analyzes them for themes and connections, and creates a master index. You go from a scattered collection to an organized knowledge base.

## Tips for All Workflows

1. **Start with a small test.** Before pointing Codex at your entire Documents folder, try it on a small subfolder first. Verify you like the approach before scaling up.

2. **Always ask for confirmation.** Include "show me the plan before you start" or "list the changes before making them" in your requests for important tasks.

3. **Work on copies when nervous.** "First, copy the folder to ~/backup/. Then work on the copy." This gives you a safety net.

4. **Save useful patterns.** When Codex does something you'll want done again, ask it to create a script or save the instructions.

5. **Combine workflows.** Once you're comfortable, chain tasks together: "Organize my downloads, then analyze the spreadsheets you find, then create a summary report."

---

# 11. Extending with Tools (MCP)

## Why This Matters to You

Out of the box, Codex can work with your files, run commands, and interact with your computer. But what if you want it to do more? What if you want Codex to check the weather, interact with a database, connect to a web service, or use a specialized tool?

That's where MCP comes in. MCP stands for **Model Context Protocol**, but you don't need to remember that. Think of MCP as an "app store" for your AI agent. Just like your phone can do more when you install apps, Codex can do more when you connect MCP tools.

## What MCP Does in Simple Terms

Imagine Codex is a very capable assistant sitting at a desk. By default, the desk has a computer and access to your files. MCP lets you add more tools to the desk:

- A phone (to call web services)
- A calculator (to do specialized math)
- A filing cabinet (to access databases)
- A fax machine (to connect with external systems)

Each MCP tool gives Codex a new capability it didn't have before. And the best part: Codex knows how to use these tools automatically. You don't need to learn them yourself. You just tell Codex what you want, and if an MCP tool can help, Codex uses it.

## How MCP Tools Work

When you add an MCP tool to Codex, three things happen:

1. **Codex learns about the tool.** It knows what the tool can do, what information it needs, and what it returns.

2. **Codex can use the tool during sessions.** When you give Codex a task that could benefit from the tool, it uses it automatically.

3. **You stay in control.** Depending on your approval settings, Codex may ask you before using new tools, especially the first time.

## Adding an MCP Tool

To add an MCP tool, you use the command:

```bash
codex mcp add <name> -- <command>
```

Let's break this down:
- `codex mcp add` tells Codex you want to add a new tool
- `<name>` is what you want to call the tool (pick something descriptive)
- `--` separates the name from the command
- `<command>` is the program that provides the tool

### Example: Adding a File System Browser

```bash
codex mcp add filesystem -- npx @modelcontextprotocol/server-filesystem ~/Documents
```

This adds a specialized file system tool that gives Codex extra capabilities for navigating and managing files in your Documents folder.

### Example: Adding a Web Fetcher

```bash
codex mcp add web-fetch -- npx @modelcontextprotocol/server-fetch
```

This gives Codex the ability to fetch web pages and retrieve information from the internet.

## Configuring MCP in Your Config File

You can also set up MCP tools in your configuration file (`~/.codex/config.toml`), which means they'll be available every time you start Codex.

```toml
[mcp_servers]

[mcp_servers.filesystem]
command = "npx"
args = ["@modelcontextprotocol/server-filesystem", "/Users/yourname/Documents"]

[mcp_servers.web-fetch]
command = "npx"
args = ["@modelcontextprotocol/server-fetch"]
```

Each section under `[mcp_servers]` defines a tool. The `command` is the program to run, and `args` are the options to pass to it.

## Checking Your Connected Tools

To see what MCP tools are currently available, use:

```
/mcp
```

This lists all connected tools with their names and what they can do.

## Real-World MCP Scenarios

### Scenario 1: Working with a Database

If you have a database (like SQLite, PostgreSQL, or MySQL), you can connect Codex to it through MCP. Then you can say:

```
How many customers signed up in the last 30 days? Break it down by region.
```

Codex uses the database tool to query your data and gives you the answer, no SQL knowledge required.

### Scenario 2: Web Research

With a web-fetching MCP tool, Codex can pull information from websites:

```
Go to the company website and get the latest press release. Summarize the key points.
```

### Scenario 3: Specialized File Processing

Some MCP tools handle specific file types particularly well. An image processing tool might let you say:

```
Resize all images in this folder to 800x600 pixels and compress them for web use.
```

## MCP Is Optional

MCP tools are entirely optional. Codex is fully functional without them. Think of MCP as a way to enhance Codex for your specific needs. If you never add an MCP tool, Codex still does everything described in the rest of this guide.

If you're just getting started, skip MCP for now and come back to it when you find yourself wishing Codex could do something it currently can't. That's the right time to explore MCP tools.

## Finding MCP Tools

The MCP ecosystem is growing rapidly. You can find tools by:

- Searching the npm registry for "@modelcontextprotocol" packages
- Checking the MCP community repositories on GitHub
- Asking Codex itself: "What MCP tools are available for [what I want to do]?"

MCP is an open standard, which means anyone can create tools for it. This makes the ecosystem diverse and growing.

---

# 12. Advanced Agent Features

## Why This Matters to You

Once you're comfortable with basic Codex usage, there are powerful features that can dramatically increase what you can accomplish. Think of this section as the "power user" chapter. You don't need any of this to be productive with Codex, but when you're ready for more, this is where to look.

## Plan Mode: Look Before You Leap

### What It Is

Plan mode tells Codex to explain what it would do, step by step, without actually doing it. It creates a detailed plan of action that you can review, modify, or approve.

### How to Use It

Switch to plan mode during a session:

```
/plan
```

Or include it in your startup:

```bash
codex --full-auto
```

Then when you're in the session:

```
/plan
```

Now when you give Codex a task, it will lay out its plan instead of executing it. You can review the plan, ask questions, suggest changes, and then tell Codex to execute when you're satisfied.

### When to Use Plan Mode

**Complex tasks:** When the task involves many files or many steps, seeing the plan first helps you catch problems before they happen.

**Sensitive files:** When you're working with important documents and want to understand exactly what will change.

**Learning:** When you want to understand how Codex approaches problems. Watching its planning process is educational.

**Team review:** When you need to show your plan to someone else before executing.

### Example

You ask:
```
I want to reorganize the entire project folder structure. Can you plan this out?
```

Codex might respond with:
```
Here's my plan for reorganizing the project:

Step 1: Scan the current folder structure (23 files, 5 folders)
Step 2: Create new folders: "docs", "data", "archive"
Step 3: Move all .md and .txt files to "docs/" (8 files)
Step 4: Move all .csv and .xlsx files to "data/" (6 files)
Step 5: Move all files older than 2025 to "archive/" (4 files)
Step 6: Update any references in remaining files
Step 7: Create an INDEX.md listing the new structure

Shall I proceed?
```

You can then say "Go ahead" to execute, or "Actually, keep the archive files where they are" to modify the plan.

## Multi-Agent: A Team of AI Workers

### What It Is

Multi-agent mode allows Codex to spawn additional AI "workers" to handle parts of a complex task simultaneously. Think of it like a manager who can delegate tasks to team members.

### How It Works

Instead of one Codex doing everything sequentially (one thing at a time), multi-agent mode allows parallel work:

- **Main agent** receives your task and breaks it down
- **Worker agents** handle individual pieces simultaneously
- **Main agent** collects the results and presents them to you

### Setting It Up

In your configuration file:

```toml
[features]
multi_agent = true

[agents]
max_threads = 4    # How many workers can run at once
max_depth = 3      # How many levels of delegation are allowed
```

**max_threads = 4** means up to 4 AI workers can be active simultaneously. Think of it like having 4 people on your team.

**max_depth = 3** means a worker can delegate to sub-workers up to 3 levels deep. Think of it like a manager who assigns to team leads, who assign to team members.

### When to Use It

Multi-agent is most useful for tasks that can be split into independent pieces:

```
Read all 20 files in the reports/ folder and create a summary of each one. Then compile the summaries into a master report.
```

With multi-agent, several files can be read and summarized simultaneously, making the task much faster.

### When NOT to Use It

Multi-agent doesn't help when tasks must happen in order. If step 2 depends on the result of step 1, they can't be parallelized. Use multi-agent for breadth (many similar things), not for depth (one thing with many steps).

## Hooks: Automatic Triggers

### What It Is

Hooks are automated scripts that run when certain events happen in Codex. Think of them like automatic reactions: "When X happens, do Y."

### How They Work

You configure hooks in a file called `.codex/hooks.json` in your project. Each hook specifies:

1. **When** to trigger (the event)
2. **What** to do (the action)

### Available Events

- **SessionStart** — When you start a Codex session
- **PreToolUse** — Before Codex uses a tool (like running a command)
- **PostToolUse** — After Codex uses a tool
- **UserPromptSubmit** — When you submit a prompt
- **Stop** — When the session ends

### Example Hook Configuration

```json
{
  "hooks": [
    {
      "event": "SessionStart",
      "command": "echo 'Session started at $(date)' >> ~/.codex/session-log.txt"
    },
    {
      "event": "Stop",
      "command": "echo 'Session ended at $(date)' >> ~/.codex/session-log.txt"
    }
  ]
}
```

This simple example logs when sessions start and end.

### Practical Uses

**Auto-backup before changes:**
```json
{
  "event": "PreToolUse",
  "command": "cp -r ./project ./project-backup-$(date +%s)"
}
```
This creates a backup before every tool use. Safety first.

**Session logging:**
Keep a record of every session for your own reference or for auditing.

**Custom notifications:**
Trigger a notification when a session completes a long task.

### Note on Hooks

Hooks are an experimental feature. They're powerful but require some technical knowledge to set up properly. If you're new to Codex, you can skip hooks entirely and come back to them later. They're purely optional.

## Skills: Packaged Expertise

### What It Is

Skills are structured packages that give Codex specialized knowledge and capabilities for specific types of tasks. Think of them like training modules: "Here's how to handle project management tasks" or "Here's how to process invoices."

### How They Work

Skills live in a `.agents/skills/` directory in your project. Each skill is a folder containing:

- **SKILL.md** — A description file that tells Codex what the skill does and how to use it
- **Scripts** — Any automation scripts the skill uses
- **References** — Example files or templates
- **Assets** — Any other resources the skill needs

### Example Skill Structure

```
.agents/
  skills/
    invoice-processing/
      SKILL.md
      scripts/
        parse-invoice.sh
      references/
        sample-invoice.csv
      assets/
        category-list.txt
```

The SKILL.md might say:

```markdown
# Invoice Processing Skill

## Purpose
Process incoming invoices by extracting key fields (vendor, amount, date, category) and adding them to the master tracking spreadsheet.

## Steps
1. Read the invoice file
2. Extract: vendor name, invoice number, amount, date, payment terms
3. Categorize using the categories in assets/category-list.txt
4. Append a row to the tracking spreadsheet
5. Move the processed invoice to the "processed" folder

## Rules
- Always verify the amount before recording
- Flag any invoice over $10,000 for manual review
- Use the date format YYYY-MM-DD
```

When you ask Codex to process an invoice, it references this skill and follows the specified workflow consistently.

### Why Skills Matter

Skills ensure consistency. Without a skill, Codex might handle the same type of task differently each time, using slightly different approaches or formats. With a skill, you define exactly how certain tasks should be handled, and Codex follows those guidelines every time.

## Codex Cloud: Remote AI Workers

### What It Is

Codex Cloud lets you run tasks on OpenAI's servers instead of your own computer. Think of it like sending a task to a remote office where workers handle it and send back the results.

### How to Use It

From your terminal:

```bash
codex cloud "Read all the files in this project and create a comprehensive test plan"
```

This sends the task to OpenAI's cloud, where it runs in a container (a small, isolated computer environment). The task runs independently of your local computer, so you can close your terminal and the work continues.

### Managing Cloud Tasks

**See your running tasks:**
```bash
codex cloud list
```

This shows all your active and completed cloud tasks with their status.

**Get results from a completed task:**
```bash
codex apply <task_id>
```

Replace `<task_id>` with the ID of the completed task. This pulls the results down to your local computer.

### When to Use Codex Cloud

**Long-running tasks:** When a task might take a while and you don't want to keep your terminal open.

**Heavy processing:** When the task requires significant computation and you don't want to slow down your local machine.

**Background work:** When you want to fire off a task and come back to it later.

**Parallel work:** When you want to run multiple tasks simultaneously without them interfering with each other.

### How It Differs from Local Codex

| | Local Codex | Codex Cloud |
|---|---|---|
| **Runs on** | Your computer | OpenAI's servers |
| **Access to your files** | Direct | Files must be uploaded/synced |
| **Requires terminal open** | Yes | No |
| **Best for** | Interactive work | Background/long tasks |
| **Results** | Immediate | Retrieved when ready |

## The codex exec Command: One-Shot Tasks

For tasks that don't need an interactive session, `codex exec` runs a single task and returns the result:

```bash
codex exec "count the number of words in every .txt file in the current directory"
```

This is perfect for quick, one-off tasks. No session to start, no session to end. Just ask and get the answer.

### Practical Uses for codex exec

```bash
codex exec "what is the largest file in ~/Documents?"
```

```bash
codex exec "are there any files modified today in ~/Projects?"
```

```bash
codex exec "summarize the file ~/notes/meeting-today.md in three bullet points"
```

Think of `codex exec` as sending a quick text message versus having a phone call. Sometimes you just need a quick answer, not a full conversation.

---

# 13. Working with Others

## Why This Matters to You

If you work on a team, collaborate with colleagues, or share projects with others, Codex has features that help everyone work together smoothly. Even if you work alone, understanding these features will help you keep your setup organized as your use of Codex grows.

## Sharing Project Configuration

The most important thing for team collaboration is shared project configuration. When you put a `.codex/config.toml` and `AGENTS.md` in your project folder, everyone who uses Codex on that project gets the same settings and instructions.

### Why This Matters

Imagine you've carefully set up Codex to handle your project files in a specific way: using certain naming conventions, never touching certain folders, always formatting output a certain way. Without shared configuration, a colleague using Codex on the same project might get completely different behavior.

With shared configuration:
- Everyone gets the same safety settings
- Everyone's Codex follows the same conventions
- The AI agent has consistent instructions regardless of who's using it
- New team members get onboarded to project conventions automatically

### How to Set It Up

1. Create a `.codex/` folder in your project root
2. Add your `config.toml` with project-specific settings
3. Create an `AGENTS.md` with project instructions
4. Share these files with your team (through whatever file-sharing or version control system you use)

### Example Team Configuration

Here's a `.codex/config.toml` for a team project:

```toml
# Team Project Configuration

# Everyone uses the same model for consistency
model = "gpt-5.4"

# Safety first — ask before modifying files
sandbox = "workspace-write"
approval_policy = "on-request"

# Auto-compact to keep sessions efficient
model_auto_compact_token_limit = 80000
```

And a team `AGENTS.md`:

```markdown
# Project: Q2 Marketing Campaign

## Team
- Marketing: Sarah, Tom
- Design: Alex
- Content: Jamie

## Conventions
- All file names use lowercase-with-hyphens
- Dates use YYYY-MM-DD format
- Draft files go in drafts/, final files go in final/
- Never delete files — move to archive/ instead

## File Structure
- assets/ — Images, logos, brand files (DO NOT MODIFY)
- content/ — Blog posts, emails, social media copy
- data/ — Analytics and reports
- drafts/ — Work in progress
- final/ — Approved, ready-to-publish content
- archive/ — Old versions and retired content

## Rules
- Always create a copy before editing an existing file
- Name copies with the date: "original-name_2026-03-28.ext"
- Never modify anything in assets/ — those are the approved brand files
- When creating content, follow the template in templates/content-template.md
```

## Enterprise Features

For organizations using Codex at scale, there are additional features worth knowing about:

### OpenAI Business, Team, and Enterprise Plans

These plans include:
- **Shared billing:** One account for the whole organization
- **Admin controls:** Administrators can set policies for all users
- **Data privacy options:** Additional protections for sensitive business data
- **Usage monitoring:** Track how the team uses Codex

### Azure Integration

For organizations that use Microsoft Azure, Codex can be configured to use Azure OpenAI Service. This means:
- Data stays within your Azure subscription
- You get Azure's enterprise security and compliance features
- IT departments can manage access through existing Azure policies

Setting this up requires coordination with your IT team, but for users, the experience is the same. You just connect to a different endpoint.

## Best Practices for Team Use

### 1. Agree on Conventions First

Before your team starts using Codex, spend 15 minutes agreeing on:
- File naming conventions
- Folder structure
- What Codex should and shouldn't be allowed to do
- How to handle version control of Codex-modified files

Put these agreements in AGENTS.md.

### 2. Use Project-Level Config

Keep team settings in the project folder, not in individual user configurations. This ensures consistency.

### 3. Share Useful Prompts

When someone figures out a great way to ask Codex for something, share it with the team. Build a shared document of "prompt templates" that anyone can copy and customize.

### 4. Review AI-Generated Changes

Especially when starting out, establish a practice of reviewing Codex's changes before they're finalized. The `/diff` command makes this easy.

### 5. Start Conservative

Begin with stricter safety settings for team projects:
- `sandbox = "workspace-write"` (not full access)
- `approval_policy = "on-request"` (not never)

Loosen settings only after the team is comfortable and has good review practices in place.

## Individual Users: Staying Organized

Even if you don't work on a team, these practices help you stay organized:

### Separate Work and Personal Config

Use different project-level configurations for different types of work. Your personal finance folder might have strict read-only settings, while your creative writing folder might be more permissive.

### Keep a Prompt Journal

Create a file where you save prompts that worked well. Over time, you'll build a personal library of effective approaches.

### Organize Your AGENTS.md Files

As you create more projects, each with its own AGENTS.md, keep them consistent in structure. A standard template makes it easier to set up new projects.

### Back Up Your Configuration

Keep a copy of your `~/.codex/config.toml` somewhere safe. If you ever need to set up Codex on a new computer, you'll have your preferences ready.

---

# 14. Troubleshooting

## Why This Matters to You

Things don't always go perfectly, and that's okay. This section covers the most common problems people run into with Codex and how to fix them. Don't read this top-to-bottom. Use it as a reference when something goes wrong, find the problem that matches yours, and follow the solution.

## Installation Problems

### "Command not found: codex"

**What's happening:** Your computer doesn't know where to find the Codex program.

**Likely cause:** Either Codex didn't install correctly, or your system PATH (the list of places your computer looks for programs) doesn't include where Codex was installed.

**Solutions:**

1. **Try reinstalling:**
   ```bash
   npm install -g @openai/codex
   ```

2. **Check if Node.js is installed:**
   ```bash
   node --version
   ```
   If this also says "command not found," you need to install Node.js first. Go to nodejs.org and download the LTS version.

3. **Check your PATH:**
   ```bash
   npm config get prefix
   ```
   This shows where npm installs global packages. The `bin` subdirectory of that path needs to be in your system PATH.

4. **Try running with npx:**
   ```bash
   npx @openai/codex
   ```
   This runs Codex without requiring a global installation.

### "Permission denied" during installation

**What's happening:** Your user account doesn't have permission to install global packages.

**Solutions:**

1. **On Mac/Linux, try with sudo:**
   ```bash
   sudo npm install -g @openai/codex
   ```
   You'll be asked for your computer password.

2. **Better long-term fix:** Change npm's default directory to one you own:
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   ```
   Then add `~/.npm-global/bin` to your PATH.

3. **Use a Node version manager** like nvm, which handles permissions automatically.

### "npm: command not found"

**What's happening:** Node.js (which includes npm) isn't installed on your computer.

**Solution:** Go to **nodejs.org**, download the LTS version for your operating system, and run the installer. After installation, close and reopen your terminal, then try `npm install -g @openai/codex` again.

## Authentication Problems

### "Not authenticated" or "Invalid token"

**What's happening:** Codex can't verify your identity with OpenAI's servers.

**Solutions:**

1. **Try signing in again:**
   ```bash
   codex
   ```
   Select "Sign in with ChatGPT" when prompted.

2. **Clear your stored credentials and re-authenticate:**
   Check if there's a stored token in `~/.codex/` and try signing in fresh.

3. **Check your internet connection.** Authentication requires a connection to OpenAI's servers.

4. **If using an API key, verify it's correct:**
   ```bash
   codex login --with-api-key
   ```
   Paste your key carefully. Make sure there are no extra spaces.

### "Subscription required" or "Plan not supported"

**What's happening:** Your ChatGPT account doesn't have a paid plan, or your plan doesn't include Codex.

**Solution:** Check your subscription at chatgpt.com. Codex requires a Plus, Pro, Business, Team, Edu, or Enterprise plan. Upgrade if needed.

## Session Problems

### Codex Is Slow to Respond

**What's happening:** The AI is taking a long time to generate responses.

**Possible causes and solutions:**

1. **Context is full.** Run `/compact` to free up space. A bloated context makes everything slower.

2. **Large files.** If you recently asked Codex to read large files, the context is heavy. Use `/compact` or `/clear`.

3. **Complex task.** Some tasks genuinely take time. This is normal for multi-step operations.

4. **Server load.** OpenAI's servers occasionally experience high traffic. Try again in a few minutes.

5. **Switch to a faster model:**
   ```
   /model gpt-5.4-mini
   ```

### Codex Seems Confused or Gives Wrong Answers

**What's happening:** Codex lost track of what you're asking or is working with outdated information from earlier in the conversation.

**Solutions:**

1. **Use /compact** to clean up the context. Sometimes old information interferes with new tasks.

2. **Use /clear** and start fresh. Sometimes a clean slate is the fastest fix.

3. **Be more specific.** Rephrase your request with more detail. Instead of "fix it," say "fix the date formatting in the third column of budget.csv."

4. **Check AGENTS.md.** If you have an AGENTS.md file, make sure it doesn't contain conflicting instructions.

### "Context limit exceeded" or Similar Warnings

**What's happening:** The conversation has grown too long for the AI to handle.

**Solutions:**

1. **Run /compact immediately.** This summarizes the conversation and frees space.

2. **If /compact isn't enough, use /clear** and start a fresh session. Before clearing, ask Codex to summarize the current state so you can paste the summary into the new session.

3. **Adjust auto-compaction:** Add to your config:
   ```toml
   model_auto_compact_token_limit = 60000
   ```
   This makes compaction happen earlier, before you hit the limit.

### Codex Made Changes I Didn't Want

**What's happening:** Codex modified files in a way you didn't intend.

**Solutions:**

1. **Use /diff to see exactly what changed.** Understand the full scope of changes.

2. **If using Git (version control):**
   ```bash
   git checkout -- path/to/file
   ```
   This reverts a file to its last committed state.

3. **If you have a backup:** Restore from your backup.

4. **Going forward, use stricter settings:**
   - Switch to `approval_policy = "untrusted"` so Codex asks before every change
   - Use `sandbox = "read-only"` when you just want analysis
   - Use `/plan` mode to review plans before execution

5. **Add rules to AGENTS.md:**
   ```markdown
   ## Rules
   - Always ask before modifying any existing file
   - Create a backup copy before editing any file
   ```

## Connection Problems

### "Network error" or "Unable to connect"

**What's happening:** Codex can't reach OpenAI's servers.

**Solutions:**

1. **Check your internet connection.** Try opening a website in your browser to verify.

2. **Check if OpenAI is having issues.** Visit status.openai.com for current service status.

3. **VPN or firewall.** If you're on a corporate network, VPN, or behind a firewall, it might block Codex's connection. Try disconnecting from VPN, or ask your IT department to allow connections to OpenAI's servers.

4. **Proxy settings.** If your network requires a proxy, you may need to configure it for Codex.

### Codex Works But Can't Access the Internet (In Session)

**What's happening:** Codex is running but can't make web requests during a session.

**Explanation:** This is usually by design. In `read-only` and `workspace-write` sandbox modes, network access is restricted for security. If you need Codex to access the web, you either need to use a less restrictive sandbox mode (which comes with trade-offs) or add web access through MCP tools.

## File Problems

### "File not found" Even Though the File Exists

**What's happening:** Codex is looking in the wrong location.

**Solutions:**

1. **Use the full path:**
   ```
   Read /Users/yourname/Documents/report.txt
   ```
   Instead of:
   ```
   Read report.txt
   ```

2. **Check the current directory:**
   ```
   !pwd
   ```
   This shows where Codex thinks it is. The file might be somewhere else.

3. **Use @ to search for the file:**
   ```
   Read @report
   ```
   The fuzzy search will help find the file wherever it is.

### Codex Can't Read a File Format

**What's happening:** Codex is trying to read a file type it doesn't handle well (like a binary file, a proprietary format, or a very large file).

**Solutions:**

1. **Convert to a supported format.** Convert Word docs to text, Excel files to CSV, etc.

2. **Ask Codex to try a different approach:**
   ```
   Try to extract the text content from this file, even if the formatting is lost
   ```

3. **For very large files, read portions:**
   ```
   Read just the first 100 lines of this file
   ```

## Performance Problems

### High CPU or Memory Usage

**What's happening:** Codex or its associated processes are using a lot of your computer's resources.

**Solutions:**

1. **Close and restart Codex.** Sometimes a clean start resolves resource issues.

2. **Reduce multi-agent threads:**
   ```toml
   [agents]
   max_threads = 2
   ```

3. **Use a lighter model:**
   ```
   /model gpt-5.4-mini
   ```

4. **Keep context clean.** Large contexts consume more processing. Use `/compact` regularly.

## Getting More Help

If your problem isn't covered here:

1. **Ask Codex itself:**
   ```
   I'm having a problem with [describe problem]. How do I fix it?
   ```
   Codex is often quite good at diagnosing issues with itself.

2. **Check the OpenAI documentation.** The official docs at platform.openai.com have detailed technical information.

3. **Community forums.** The OpenAI community forums and subreddits are active places where users help each other.

4. **GitHub Issues.** Since Codex CLI is open source, you can check (and report) issues on the GitHub repository.

5. **OpenAI Support.** For account and billing issues, contact OpenAI support directly through your account settings.

---

# 15. The Bigger Picture

## Why This Matters to You

You've learned how to use Codex. Now let's zoom out and look at the bigger picture. Understanding where AI agents fit in the broader landscape of technology will help you make better decisions about which tools to use and how to keep learning.

## The AI Ecosystem: More Than One Tool

Codex is one AI agent among a growing ecosystem. Here's a map of the landscape:

### AI Chatbots (Conversational AI)
These are the tools you probably started with:
- **ChatGPT** (OpenAI) — The most well-known conversational AI
- **Claude** (Anthropic) — Known for being thoughtful and safe
- **Gemini** (Google) — Integrated with Google services
- **Copilot** (Microsoft) — Integrated with Microsoft products

These are great for conversations, questions, and generating content through chat. They're the starting point for most people's AI journey.

### AI Agents (Agentic AI)
These are the next evolution, tools that can act, not just talk:
- **OpenAI Codex** (what you've learned in this guide) — Agent that works on your computer
- **Claude Code** (Anthropic) — Agent focused on coding and development tasks
- **Devin** (Cognition) — Autonomous software engineering agent
- **Various others** emerging rapidly across the industry

### AI Creative Tools
Specialized AI for creating specific types of content:
- **DALL-E, Midjourney, Stable Diffusion** — Image generation
- **Suno, Udio** — Music generation
- **Runway, Pika** — Video generation

### AI Productivity Tools
AI integrated into tools you already use:
- **Microsoft Copilot** — AI in Word, Excel, PowerPoint, Outlook
- **Google Duet AI** — AI in Google Workspace
- **Notion AI** — AI in the Notion note-taking app
- **Grammarly** — AI writing assistant

## Where AI Agents Are Heading

The field is moving fast. Here's what's coming:

### More Autonomy

AI agents are getting better at working independently on longer, more complex tasks. Today, you might need to guide Codex through a multi-step process. Tomorrow, you might say "handle my inbox" and come back to find everything sorted, responded to, and organized.

### Better Integration

Agents will work more seamlessly with the software you already use. Instead of switching to a terminal to use Codex, agents will be built into your email client, your file manager, your browser, and your productivity tools.

### Specialization

We'll see more agents specialized for specific domains: legal research, medical documentation, financial analysis, creative writing, education. Each will have deep expertise in its area.

### Collaboration Between Agents

Multiple agents will work together, handing tasks off to each other. Your email agent might identify a data analysis task and hand it to your analysis agent, which then passes the results to your report-writing agent.

### Personal Memory and Learning

Future agents will remember your preferences, learn from past sessions, and get better at working with you over time. They'll know your communication style, your file organization preferences, and your typical workflows without being told.

## How to Keep Learning

### Practice Regularly

The best way to get better with Codex is to use it regularly. Start with small tasks and gradually take on bigger ones. Keep a note of what works well and what doesn't.

### Explore the Community

Join communities where people share their experiences with AI agents:
- OpenAI Community Forums
- Reddit communities (r/OpenAI, r/ChatGPT, r/artificial)
- Discord servers focused on AI tools
- LinkedIn groups about AI productivity

### Stay Current

AI is changing fast. Good ways to stay updated:
- Follow OpenAI's blog for product announcements
- Subscribe to AI newsletters (there are many good free ones)
- Watch for updates to Codex itself (check for new versions periodically)

### Experiment Fearlessly (but Safely)

Use the safety features we covered. With `read-only` mode and regular backups, you can experiment without risk. Try new approaches, push the boundaries, and see what Codex can do. Some of the most productive workflows are discovered through experimentation.

### Teach Others

One of the best ways to solidify your understanding is to help someone else get started. Share this guide, walk a colleague through their first session, or write about your experience. Teaching forces you to understand things more deeply.

## A Different Way to Think About Computers

Let's end with a thought about what all this means.

For decades, using a computer effectively meant learning its language. You learned where to click, which menus to navigate, which keyboard shortcuts to use, and perhaps even how to write code. The computer was a powerful tool, but you had to learn its rules.

AI agents flip this around. Instead of you learning the computer's language, the computer learns yours. You describe what you want in plain language, and the AI figures out how to make it happen.

This is a genuinely new relationship between people and technology. It's not about replacing what you do. It's about making what you do easier, faster, and more powerful. The thinking, the creativity, the decision-making, those are still yours. The tedious execution, the repetitive steps, the technical complexity, those are what the agent handles.

## Final Thoughts

You started this guide with a question: what is Codex, and why should you care? Hopefully, the answer is now clear.

Codex is more than software. It's a new way of working with your computer. It's the shift from doing everything yourself to having a capable, tireless assistant who can handle the execution while you focus on the thinking.

You don't need to be a programmer. You don't need to understand how AI works under the hood. You just need to clearly express what you want and learn to work with an agent that can make it happen.

Welcome to the age of AI agents. You're now equipped to make the most of it.

---

## Quick Reference Card

### Installation
```bash
npm install -g @openai/codex        # Install CLI
brew install --cask codex            # Install Desktop App (Mac)
```

### Authentication
```bash
codex                                # Sign in with ChatGPT (browser)
codex login --with-api-key           # Sign in with API key
```

### Starting Codex
```bash
codex                                # Interactive session
codex --full-auto                    # Auto mode (workspace-write + on-request)
codex --model gpt-5.4-mini           # Use a specific model
codex -p profilename                 # Use a configuration profile
codex exec "your task here"          # One-shot, non-interactive
codex cloud "your task here"         # Run in the cloud
```

### Slash Commands
| Command | Purpose |
|---|---|
| `/clear` | Fresh start, erase conversation |
| `/compact` | Summarize conversation to save space |
| `/diff` | Show all file changes |
| `/model` | Switch AI model |
| `/plan` | Preview mode (plan without executing) |
| `/status` | Session info and token usage |
| `/review` | Have Codex review its changes |
| `/init` | Generate AGENTS.md |
| `/permissions` | Manage safety settings |
| `/mcp` | List connected tools |

### Keyboard Shortcuts
| Keys | Action |
|---|---|
| `Ctrl+C` | Cancel current action |
| `Ctrl+G` | Open full text editor for prompt |
| `Esc Esc` | Edit previous prompt |
| `@` | Fuzzy file search |
| `!` | Run shell command directly |

### Sandbox Modes
| Mode | Can Read | Can Write | Network | Best For |
|---|---|---|---|---|
| `read-only` | Yes | No (needs approval) | No | Research, analysis |
| `workspace-write` | Yes | Project folder + /tmp | No | Most daily work |
| `danger-full-access` | Yes | Anywhere | Yes | Advanced/trusted tasks |

### Approval Policies
| Policy | Behavior |
|---|---|
| `untrusted` | Asks before almost everything |
| `on-request` | Asks when significant (default) |
| `never` | Never asks |

### Configuration File Locations
| File | Purpose |
|---|---|
| `~/.codex/config.toml` | Your personal global settings |
| `.codex/config.toml` | Project-specific settings |
| `~/.codex/AGENTS.md` | Global project instructions |
| `AGENTS.md` | Project-specific instructions |
| `.codex/hooks.json` | Automation hooks |

---

*This guide is a community resource. It aims to be the most complete, approachable guide to OpenAI Codex for everyone, not just developers. If it helped you, share it with someone who's curious about AI.*
