# Demo 08: Adding Superpowers

> **Concept:** MCP -- extending an AI agent with new abilities
> **Time:** 12 minutes
> **Difficulty:** Intermediate
> **Wow Factor:** ★★★★★
> **Day:** 2, After Break

---

## What Students Will See

Codex starts with its default abilities (reading files, running commands), then
gains a brand new capability -- web search -- right before their eyes. Like
installing an app on a phone that lets it do something it couldn't before.

---

## Preparation

Make sure you have Node.js installed (required for npx). Test that the MCP
server you plan to use is available by running the install command once before
class.

```bash
mkdir -p ~/codex-demos/mcp-demo
cd ~/codex-demos/mcp-demo
```

**NOTE:** MCP server availability changes over time. Before class, verify which
MCP server packages are available. The demo uses a web-search example, but you
can substitute any working MCP server. Check the Codex documentation or the
MCP registry at mcp.so for current options.

Potential MCP servers to demo (verify availability before class):
- Web search / web fetch
- File system tools
- Database connectors
- API integrations

---

## Live Demo Script

### Step 1 -- Show What Codex Can Do By Default (2 min)

```bash
cd ~/codex-demos/mcp-demo
codex --sandbox read-only
```

**SAY:**
> "Right now, Codex can read files on my computer and run terminal commands.
> That's powerful. But what if I told you we could give it MORE abilities?
> Like adding apps to your phone?"

Type a prompt that requires something Codex can't do natively:

```
What is the latest news about artificial intelligence from today?
```

**EXPECTED:** Codex will explain it doesn't have real-time internet access, or
it will give outdated information from its training data.

**SAY:**
> "See? It can't search the internet. It doesn't have that ability... YET."

Exit Codex.

### Step 2 -- Add the Superpower (3 min)

**SAY:**
> "MCP stands for Model Context Protocol. It's a way to plug new tools into
> an AI agent. Watch this."

Run the MCP add command:

```bash
codex mcp add web-search -- npx -y @anthropic/web-search-mcp
```

**NOTE:** Replace the above with whatever MCP server package is currently
available. If the exact package above is unavailable, use an alternative such
as:

```bash
codex mcp add web-fetch -- npx -y @anthropic/web-fetch-mcp
```

**SAY:**
> "I just gave Codex a new ability. It's like installing an app. Before, it
> couldn't search the web. Now it can."

### Step 3 -- Use the New Power (3 min)

```bash
codex --sandbox read-only
```

**SAY:**
> "Let's try that same question again."

```
What is the latest news about artificial intelligence? Search the web and
summarize the top 3 stories you find.
```

**EXPECTED:** Codex uses the MCP web search tool, retrieves current results,
and summarizes recent AI news stories.

**THIS IS THE WOW MOMENT.**

**PAUSE. Let students react.**

**SAY:**
> "A minute ago, it couldn't do this. We plugged in a new tool, and now it
> can search the internet. The AI itself didn't change. We just gave it
> access to a new ability."

### Step 4 -- Explain the Concept (2 min)

Write on the board:

```
MCP = Model Context Protocol

Think of it like apps on your phone:
  Phone alone       = calls and texts
  Phone + Maps app  = navigation
  Phone + Camera    = photos
  Phone + Spotify   = music

Codex alone         = files and commands
Codex + web search  = internet access
Codex + database    = data queries
Codex + API tools   = connect to anything
```

**SAY:**
> "Your phone by itself can make calls. But you make it more powerful by
> installing apps. MCP does the same thing for AI agents. Each MCP server
> is like an app that gives the agent a new skill."

### Step 5 -- Show the Roster (2 min)

**SAY:**
> "You can see all the tools Codex currently has access to."

In the Codex session, mention:

```
What MCP tools do you have available right now?
```

Codex will list its tools, including the newly added web search.

**SAY:**
> "There are hundreds of MCP servers being built by developers all over the
> world. Search tools, database tools, tools for GitHub, tools for Slack,
> tools for Google Drive. The ecosystem is growing every day. This is the
> future of how AI agents will work -- pluggable abilities."

### Step 6 -- Why This Matters (1 min)

**SAY:**
> "Here's why this is important for your future. Right now, companies are
> building MCP servers for everything -- banking, healthcare, education,
> gaming. The AI agents of the future won't just read files. They'll book
> flights, manage schedules, analyze medical data, control robots. And it's
> all built on this same idea: plug in a new tool, get a new ability."

---

## If Things Go Wrong

| Problem | Recovery |
|---------|----------|
| MCP server package not found or install fails | Have a backup: "The specific package isn't available right now, but let me show you the concept." Show the `codex mcp add` syntax and explain what WOULD happen. |
| Web search returns no results or errors | "Even superpowers have off days. The point is the ARCHITECTURE -- the ability to plug in new tools. Let's try a different query." |
| Students ask "Can I make my OWN MCP server?" | "Yes! If you learn to code, you can build MCP servers that give AI agents any ability you can imagine. That's a future career right there." |
| The MCP tool works but the results aren't impressive | Ask a more specific, exciting query: "Search for the biggest AI breakthrough announced this week" |

---

## Key Takeaway to Repeat

**"MCP is like adding apps to your phone -- each one gives the AI a new
ability."**

---

*Next up: Demo 09 -- The 30-Second Project*
