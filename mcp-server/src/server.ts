/**
 * Codex Ultimate Guide — MCP Server Setup and Tool Registration
 *
 * This module creates the MCP server instance and registers all tools.
 * Tools provide structured access to the guide's reference data.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { parse as parseYaml } from "yaml";

// ---------- Types ----------

interface ReferenceData {
  version: string;
  updated: string;
  guide_file: string;
  product: string;
  model: string;
  model_variants: Record<string, string>;
  deep_dive: Record<string, string | number>;
  decide: Record<string, string>;
  prompt_formula: Record<string, unknown>;
  workflow: Record<string, unknown>;
  commands: Record<string, string>;
  shortcuts: Record<string, string>;
  cli: Record<string, string>;
  context: Record<string, unknown>;
  memory: Record<string, unknown>;
  folder_structure: Record<string, unknown>;
  permissions: Record<string, unknown>;
  mcp: Record<string, unknown>;
  architecture: Record<string, unknown>;
  cost: Record<string, unknown>;
  tools: Record<string, unknown>;
  dont: string[];
  fix: Record<string, string>;
  debug: Record<string, unknown>;
  rules: Record<string, unknown>;
  agent_template: Record<string, unknown>;
  hook_events: Record<string, unknown>;
  ecosystem: Record<string, unknown>;
  onboarding_matrix: Record<string, unknown>;
  [key: string]: unknown;
}

// ---------- Data Loading ----------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadReference(): ReferenceData {
  // Try multiple locations for reference.yaml
  const candidates = [
    join(__dirname, "..", "..", "machine-readable", "reference.yaml"),
    join(__dirname, "..", "content", "reference.yaml"),
    join(__dirname, "content", "reference.yaml"),
  ];

  for (const candidate of candidates) {
    try {
      const raw = readFileSync(candidate, "utf-8");
      return parseYaml(raw) as ReferenceData;
    } catch {
      // Try next candidate
    }
  }

  throw new Error(
    "Could not find reference.yaml. Looked in: " + candidates.join(", ")
  );
}

// ---------- Content Fetching ----------

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/paulhshort/ai-agents-for-everyone/main";

const contentCache = new Map<string, string>();

async function fetchContent(path: string): Promise<string> {
  if (contentCache.has(path)) {
    return contentCache.get(path)!;
  }

  const url = `${GITHUB_RAW_BASE}/${path}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const text = await response.text();
    contentCache.set(path, text);
    return text;
  } catch (error) {
    throw new Error(
      `Could not fetch ${path} from GitHub: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

async function fetchGuideSection(
  ref: ReferenceData,
  key: string
): Promise<string> {
  const location = ref.deep_dive[key];
  if (location === undefined) {
    throw new Error(`Topic "${key}" not found in the guide index.`);
  }

  // If the location is a file path (string), fetch that file
  if (typeof location === "string") {
    return fetchContent(location);
  }

  // If it is a line number, fetch the main guide and extract a section
  const guideContent = await fetchContent(ref.guide_file);
  const lines = guideContent.split("\n");
  const startLine = location as number;

  // Find the next section heading to determine where this section ends
  let endLine = lines.length;
  for (let i = startLine; i < lines.length; i++) {
    if (i > startLine && /^#{1,3}\s/.test(lines[i])) {
      endLine = i;
      break;
    }
  }

  // Extract up to 100 lines of content for the section
  const sectionLines = lines.slice(
    Math.max(0, startLine - 1),
    Math.min(endLine, startLine + 99)
  );
  return sectionLines.join("\n");
}

// ---------- Search Helpers ----------

function searchReference(
  ref: ReferenceData,
  query: string
): Array<{ key: string; section: string; match: string }> {
  const q = query.toLowerCase();
  const results: Array<{ key: string; section: string; match: string }> = [];

  // Search deep_dive keys
  for (const key of Object.keys(ref.deep_dive)) {
    if (key.toLowerCase().includes(q)) {
      results.push({
        key,
        section: "deep_dive",
        match: `Topic: ${key} (location: ${ref.deep_dive[key]})`,
      });
    }
  }

  // Search commands
  for (const [cmd, desc] of Object.entries(ref.commands)) {
    if (
      cmd.toLowerCase().includes(q) ||
      (desc as string).toLowerCase().includes(q)
    ) {
      results.push({
        key: cmd,
        section: "commands",
        match: `${cmd}: ${desc}`,
      });
    }
  }

  // Search shortcuts
  for (const [shortcut, desc] of Object.entries(ref.shortcuts)) {
    if (
      shortcut.toLowerCase().includes(q) ||
      (desc as string).toLowerCase().includes(q)
    ) {
      results.push({
        key: shortcut,
        section: "shortcuts",
        match: `${shortcut}: ${desc}`,
      });
    }
  }

  // Search CLI flags
  for (const [flag, desc] of Object.entries(ref.cli)) {
    if (
      flag.toLowerCase().includes(q) ||
      (desc as string).toLowerCase().includes(q)
    ) {
      results.push({
        key: flag,
        section: "cli",
        match: `${flag}: ${desc}`,
      });
    }
  }

  // Search troubleshooting fixes
  for (const [issue, solution] of Object.entries(ref.fix)) {
    if (
      issue.toLowerCase().includes(q) ||
      (solution as string).toLowerCase().includes(q)
    ) {
      results.push({
        key: issue,
        section: "fix",
        match: `${issue}: ${solution}`,
      });
    }
  }

  // Search anti-patterns
  for (const item of ref.dont) {
    if (item.toLowerCase().includes(q)) {
      results.push({
        key: "dont",
        section: "dont",
        match: item,
      });
    }
  }

  // Search decision tree
  for (const [situation, advice] of Object.entries(ref.decide)) {
    if (
      situation.toLowerCase().includes(q) ||
      (advice as string).toLowerCase().includes(q)
    ) {
      results.push({
        key: situation,
        section: "decide",
        match: `${situation}: ${advice}`,
      });
    }
  }

  return results;
}

// ---------- Server Creation ----------

export function createServer(): McpServer {
  const ref = loadReference();

  const server = new McpServer({
    name: "ai-agents-for-everyone",
    version: ref.version,
  });

  // ---------- Tool: search_guide ----------
  server.tool(
    "search_guide",
    "Search the Codex Ultimate Guide for topics matching a query. Returns matching topics from commands, shortcuts, troubleshooting, and more.",
    {
      query: z
        .string()
        .describe(
          "The search term — a keyword, command name, or topic to look up"
        ),
    },
    async ({ query }) => {
      const results = searchReference(ref, query);

      if (results.length === 0) {
        return {
          content: [
            {
              type: "text" as const,
              text: `No results found for "${query}". Try a broader search term, or use get_commands to see all available commands.`,
            },
          ],
        };
      }

      const formatted = results
        .slice(0, 20)
        .map((r) => `[${r.section}] ${r.match}`)
        .join("\n\n");

      return {
        content: [
          {
            type: "text" as const,
            text: `Found ${results.length} result(s) for "${query}":\n\n${formatted}`,
          },
        ],
      };
    }
  );

  // ---------- Tool: read_section ----------
  server.tool(
    "read_section",
    "Read a specific section of the Codex guide by its key name. Use search_guide first to find the right key.",
    {
      key: z
        .string()
        .describe(
          "The section key from reference.yaml deep_dive (e.g., 'golden_rules', 'installation', 'commands')"
        ),
    },
    async ({ key }) => {
      try {
        const content = await fetchGuideSection(ref, key);
        return {
          content: [
            {
              type: "text" as const,
              text: content,
            },
          ],
        };
      } catch (error) {
        const available = Object.keys(ref.deep_dive).join(", ");
        return {
          content: [
            {
              type: "text" as const,
              text: `Error: ${error instanceof Error ? error.message : String(error)}\n\nAvailable section keys: ${available}`,
            },
          ],
        };
      }
    }
  );

  // ---------- Tool: get_cheatsheet ----------
  server.tool(
    "get_cheatsheet",
    "Get the complete Codex cheat sheet — a quick reference for commands, shortcuts, and workflows.",
    {},
    async () => {
      try {
        const content = await fetchContent("guide/cheatsheet.md");
        return {
          content: [
            {
              type: "text" as const,
              text: content,
            },
          ],
        };
      } catch {
        // Fall back to building a cheatsheet from reference data
        const sections: string[] = [];

        sections.push("# Codex Quick Reference Cheat Sheet\n");

        sections.push("## Golden Rules");
        const rulesData = ref.rules as Record<
          string,
          Record<string, string> | string
        >;
        for (const [num, val] of Object.entries(rulesData)) {
          if (typeof val === "object" && val.rule) {
            sections.push(`${num}. ${val.rule}`);
          }
        }

        sections.push("\n## Commands");
        for (const [cmd, desc] of Object.entries(ref.commands)) {
          sections.push(`- \`${cmd}\` — ${desc}`);
        }

        sections.push("\n## Keyboard Shortcuts");
        for (const [key, desc] of Object.entries(ref.shortcuts)) {
          sections.push(`- \`${key}\` — ${desc}`);
        }

        sections.push("\n## CLI Flags");
        for (const [flag, desc] of Object.entries(ref.cli)) {
          sections.push(`- \`${flag}\` — ${desc}`);
        }

        sections.push("\n## Prompt Formula: WHAT + WHERE + HOW + VERIFY");

        sections.push("\n## Standard Workflow");
        const workflowSteps = (ref.workflow as Record<string, unknown>)
          .steps as Record<string, string>;
        if (workflowSteps) {
          for (const [num, step] of Object.entries(workflowSteps)) {
            sections.push(`${num}. ${step}`);
          }
        }

        return {
          content: [
            {
              type: "text" as const,
              text: sections.join("\n"),
            },
          ],
        };
      }
    }
  );

  // ---------- Tool: get_commands ----------
  server.tool(
    "get_commands",
    "Get a complete list of all Codex slash commands, keyboard shortcuts, and CLI flags.",
    {},
    async () => {
      const sections: string[] = [];

      sections.push("# All Codex Commands, Shortcuts & CLI Flags\n");

      sections.push("## Slash Commands");
      sections.push(
        "Type these inside a Codex session (like chat commands):\n"
      );
      for (const [cmd, desc] of Object.entries(ref.commands)) {
        sections.push(`- \`${cmd}\` — ${desc}`);
      }

      sections.push("\n## Keyboard Shortcuts");
      sections.push("Press these key combinations while using Codex:\n");
      for (const [key, desc] of Object.entries(ref.shortcuts)) {
        sections.push(`- \`${key}\` — ${desc}`);
      }

      sections.push("\n## CLI Flags");
      sections.push(
        "Add these when starting Codex from the terminal (e.g., `codex --model gpt-5.4-mini`):\n"
      );
      for (const [flag, desc] of Object.entries(ref.cli)) {
        sections.push(`- \`${flag}\` — ${desc}`);
      }

      return {
        content: [
          {
            type: "text" as const,
            text: sections.join("\n"),
          },
        ],
      };
    }
  );

  // ---------- Tool: get_golden_rules ----------
  server.tool(
    "get_golden_rules",
    "Get the 5 golden rules for using Codex effectively. These are the most important things to remember.",
    {},
    async () => {
      const rulesData = ref.rules as Record<string, unknown>;
      const sections: string[] = [];

      sections.push("# The 5 Golden Rules of Codex\n");

      if (typeof rulesData.description === "string") {
        sections.push(rulesData.description + "\n");
      }

      for (let i = 1; i <= 5; i++) {
        const rule = rulesData[i] as
          | { rule: string; why: string }
          | undefined;
        if (rule) {
          sections.push(`## Rule ${i}: ${rule.rule}`);
          sections.push(`*Why:* ${rule.why}\n`);
        }
      }

      return {
        content: [
          {
            type: "text" as const,
            text: sections.join("\n"),
          },
        ],
      };
    }
  );

  // ---------- Tool: troubleshoot ----------
  server.tool(
    "troubleshoot",
    "Look up troubleshooting advice for a specific symptom or problem with Codex.",
    {
      symptom: z
        .string()
        .describe(
          "Describe the problem — e.g., 'slow responses', 'permission denied', 'mcp not connecting'"
        ),
    },
    async ({ symptom }) => {
      const q = symptom.toLowerCase();
      const sections: string[] = [];

      sections.push(`# Troubleshooting: "${symptom}"\n`);

      // Search quick fixes
      const matchingFixes: string[] = [];
      for (const [issue, solution] of Object.entries(ref.fix)) {
        if (
          issue.toLowerCase().includes(q) ||
          (solution as string).toLowerCase().includes(q)
        ) {
          matchingFixes.push(`**${issue.replace(/_/g, " ")}**: ${solution}`);
        }
      }

      // Search context symptoms
      const contextData = ref.context as Record<string, unknown>;
      const symptoms = (contextData.symptoms as Record<string, string>) || {};
      const matchingSymptoms: string[] = [];
      for (const [sym, fix] of Object.entries(symptoms)) {
        if (
          sym.toLowerCase().includes(q) ||
          fix.toLowerCase().includes(q)
        ) {
          matchingSymptoms.push(`**${sym.replace(/_/g, " ")}**: ${fix}`);
        }
      }

      // Search anti-patterns for related advice
      const relatedDonts: string[] = [];
      for (const item of ref.dont) {
        if (item.toLowerCase().includes(q)) {
          relatedDonts.push(`- ${item}`);
        }
      }

      if (
        matchingFixes.length === 0 &&
        matchingSymptoms.length === 0 &&
        relatedDonts.length === 0
      ) {
        // Provide general troubleshooting advice
        sections.push("No exact match found. Here are general tips:\n");
        sections.push("1. Run `/status` to check your session state");
        sections.push("2. Try `/clear` to start with a fresh context");
        sections.push(
          "3. Make sure Codex is up to date: `npm update -g @openai/codex`"
        );
        sections.push("4. Check your internet connection");
        sections.push(
          "5. Visit the OpenAI Community Forum for help: https://community.openai.com\n"
        );
        sections.push("## All Known Quick Fixes\n");
        for (const [issue, solution] of Object.entries(ref.fix)) {
          sections.push(`- **${issue.replace(/_/g, " ")}**: ${solution}`);
        }
      } else {
        if (matchingFixes.length > 0) {
          sections.push("## Quick Fixes\n");
          sections.push(matchingFixes.join("\n"));
        }
        if (matchingSymptoms.length > 0) {
          sections.push("\n## Context-Related Symptoms\n");
          sections.push(matchingSymptoms.join("\n"));
        }
        if (relatedDonts.length > 0) {
          sections.push("\n## Related Things to Avoid\n");
          sections.push(relatedDonts.join("\n"));
        }
      }

      // Always add debug tips
      const debugData = ref.debug as Record<string, unknown>;
      const techniques =
        (debugData.techniques as Record<string, string>) || {};
      sections.push("\n## Debug Techniques\n");
      for (const [name, desc] of Object.entries(techniques)) {
        sections.push(`- **${name.replace(/_/g, " ")}**: ${desc}`);
      }

      return {
        content: [
          {
            type: "text" as const,
            text: sections.join("\n"),
          },
        ],
      };
    }
  );

  // ---------- Tool: get_glossary_term ----------
  server.tool(
    "get_glossary_term",
    "Look up the definition of a term related to Codex, AI agents, or coding. Fetches from the guide glossary.",
    {
      term: z
        .string()
        .describe(
          "The term to look up — e.g., 'context window', 'MCP', 'sandbox', 'agent'"
        ),
    },
    async ({ term }) => {
      try {
        const glossary = await fetchContent("guide/core/glossary.md");
        const termLower = term.toLowerCase();
        const lines = glossary.split("\n");
        const matchedSections: string[] = [];
        let capturing = false;
        let currentSection: string[] = [];

        for (const line of lines) {
          if (/^#{1,4}\s/.test(line)) {
            // If we were capturing and the heading matched, save it
            if (capturing && currentSection.length > 0) {
              matchedSections.push(currentSection.join("\n"));
            }
            currentSection = [line];
            capturing = line.toLowerCase().includes(termLower);
          } else if (capturing) {
            currentSection.push(line);
          }
        }

        // Capture the last section if it matched
        if (capturing && currentSection.length > 0) {
          matchedSections.push(currentSection.join("\n"));
        }

        if (matchedSections.length > 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: `# Glossary: "${term}"\n\n${matchedSections.join("\n\n---\n\n")}`,
              },
            ],
          };
        }

        // If no exact heading match, search for the term anywhere in the glossary
        const contextLines: string[] = [];
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].toLowerCase().includes(termLower)) {
            const start = Math.max(0, i - 2);
            const end = Math.min(lines.length, i + 5);
            contextLines.push(
              `...\n${lines.slice(start, end).join("\n")}\n...`
            );
          }
        }

        if (contextLines.length > 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: `# Glossary: "${term}"\n\nThe term was mentioned in these parts of the glossary:\n\n${contextLines.slice(0, 5).join("\n\n")}`,
              },
            ],
          };
        }

        // Provide a helpful response for terms not in the glossary
        const builtInTerms: Record<string, string> = {
          agent:
            "An AI agent is software that can take actions on its own — reading files, writing code, running commands — not just answering questions. Codex is an AI agent.",
          "context window":
            "The amount of information (text, code, conversation) the AI can hold in its working memory at once. When it fills up, you need to use /compact or start fresh.",
          mcp: "Model Context Protocol — a standard way to connect AI tools to external data sources and services, like plugins for your AI.",
          sandbox:
            "A safety boundary that limits what Codex can do. Read-only means it can only look. Workspace-write means it can change project files. Danger-full-access means no limits.",
          token:
            "The basic unit of text that AI models process. Roughly, 1 token is about 3/4 of a word. Managing tokens efficiently helps Codex work better.",
          hook: "Custom code that runs automatically when specific events happen in Codex — like a trigger that fires when Codex edits a file.",
          "agents.md":
            "A file you put in your project root that tells Codex about your project — what it does, how to build it, and any rules to follow.",
          diff: "A comparison showing exactly what changed in a file — lines added (green) and lines removed (red). Always review diffs before accepting changes.",
        };

        const termKey = termLower.replace(/[^a-z.]/g, "");
        const match = builtInTerms[termKey] || builtInTerms[termLower];

        if (match) {
          return {
            content: [
              {
                type: "text" as const,
                text: `# ${term}\n\n${match}`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text" as const,
              text: `The term "${term}" was not found in the glossary. Try searching the guide with search_guide for related topics.`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Could not fetch glossary: ${error instanceof Error ? error.message : String(error)}. Try search_guide instead.`,
            },
          ],
        };
      }
    }
  );

  return server;
}
