#!/usr/bin/env node

/**
 * Codex Ultimate Guide — MCP Server
 *
 * Provides tools for querying The Ultimate OpenAI Codex Guide
 * without cloning the repository.
 *
 * Tools:
 * - search_guide: Search for topics in the guide
 * - read_section: Read a specific section by key
 * - get_cheatsheet: Get the printable cheat sheet
 * - get_commands: List all commands/shortcuts
 * - get_golden_rules: Get the 5 golden rules
 * - troubleshoot: Look up a troubleshooting topic
 * - get_glossary_term: Look up a term definition
 *
 * Install in Codex:
 *   codex mcp add codex-guide -- npx -y codex-ultimate-guide-mcp
 *
 * Install in Claude Code:
 *   claude mcp add codex-guide -- npx -y codex-ultimate-guide-mcp
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

async function main(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);

  // Handle clean shutdown
  process.on("SIGINT", async () => {
    await server.close();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    await server.close();
    process.exit(0);
  });
}

main().catch((error) => {
  console.error("Failed to start MCP server:", error);
  process.exit(1);
});
