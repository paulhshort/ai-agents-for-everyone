"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Plus,
  Send,
  User,
  Bot,
  Trash2,
  Settings2,
  Hash,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { countTokens } from "@/lib/tokenizer";
import { ContextMeter } from "@/components/workbench/context-meter";
import { ModelSelector } from "@/components/workbench/model-selector";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  tokens: number;
}

const MODEL_CONTEXT_SIZES: Record<string, number> = {
  "gpt-5.4": 200000,
  "gpt-5.4-mini": 128000,
  "gpt-5.3-codex": 192000,
};

// Pre-loaded sample conversation at ~60% of gpt-5.4-mini capacity
const INITIAL_MESSAGES: Message[] = [
  {
    id: "sys-1",
    role: "system",
    content:
      "You are a helpful coding assistant. You help users write clean, well-documented code. You always explain your reasoning step by step.",
    tokens: 0,
  },
  {
    id: "usr-1",
    role: "user",
    content:
      "I need help building a React component that shows a list of users. Each user card should display their name, email, and avatar. Can you create a UserList component?",
    tokens: 0,
  },
  {
    id: "ast-1",
    role: "assistant",
    content:
      "I'll create a UserList component for you. Let me break it down:\n\n1. A UserList wrapper that maps over an array of users\n2. A UserCard component for each individual user\n3. Props for the user data including name, email, and avatar URL\n\nHere's the component with TypeScript types:\n\n```tsx\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  avatarUrl: string;\n}\n\nfunction UserList({ users }: { users: User[] }) {\n  return (\n    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n      {users.map(user => (\n        <UserCard key={user.id} user={user} />\n      ))}\n    </div>\n  );\n}\n```\n\nWant me to add sorting, filtering, or any other features?",
    tokens: 0,
  },
  {
    id: "usr-2",
    role: "user",
    content:
      "That looks great! Can you add a search bar that filters users by name in real time? Also add a loading skeleton while the data is being fetched.",
    tokens: 0,
  },
  {
    id: "ast-2",
    role: "assistant",
    content:
      "I'll add both features. Here's the updated approach:\n\n1. **Search bar** - A controlled input that filters the user array by name using `useMemo`\n2. **Loading skeleton** - Placeholder cards that animate while data loads\n\nThe search will be case-insensitive and update instantly as you type. The skeleton uses CSS animations for a smooth loading effect.\n\n```tsx\nfunction UserList({ users, isLoading }: { users: User[]; isLoading: boolean }) {\n  const [search, setSearch] = useState('');\n  \n  const filtered = useMemo(() => \n    users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())),\n    [users, search]\n  );\n\n  if (isLoading) return <UserListSkeleton />;\n\n  return (\n    <div>\n      <SearchInput value={search} onChange={setSearch} />\n      <div className=\"grid gap-4\">\n        {filtered.map(user => <UserCard key={user.id} user={user} />)}\n      </div>\n    </div>\n  );\n}\n```\n\nThe skeleton component renders 4 placeholder cards with a pulsing animation.",
    tokens: 0,
  },
  {
    id: "usr-3",
    role: "user",
    content:
      "Perfect. Now let me ask about a completely different topic. Can you explain how database indexing works? I want to understand B-trees and hash indexes.",
    tokens: 0,
  },
  {
    id: "ast-3",
    role: "assistant",
    content:
      "Great question! Let me explain database indexing with simple analogies:\n\n**Think of a database index like a book's index.** Without it, you'd read every page to find a topic. With it, you jump straight there.\n\n**B-Tree Indexes** (most common):\n- Like a library's Dewey Decimal system\n- Data is sorted in a balanced tree structure\n- Great for range queries (\"find all users aged 20-30\")\n- Each node can have multiple children, keeping the tree shallow\n- O(log n) lookups\n\n**Hash Indexes:**\n- Like a dictionary where you look up a word directly\n- Uses a hash function to compute the exact location\n- Perfect for exact matches (\"find user with ID = 42\")\n- O(1) lookups — constant time!\n- NOT good for range queries\n\n**When to use which:**\n- B-Tree: Most general-purpose queries, ORDER BY, WHERE with ranges\n- Hash: Exact lookups only, like primary key searches\n\nWant me to show you how to create indexes in SQL?",
    tokens: 0,
  },
  {
    id: "usr-4",
    role: "user",
    content:
      "Yes, show me some SQL examples. Also, how do I know if my queries are actually using the indexes I create?",
    tokens: 0,
  },
  {
    id: "ast-4",
    role: "assistant",
    content:
      "Here are practical SQL examples and how to verify index usage:\n\n**Creating indexes:**\n```sql\n-- Standard B-Tree index\nCREATE INDEX idx_users_email ON users(email);\n\n-- Composite index (multiple columns)\nCREATE INDEX idx_users_name_age ON users(last_name, age);\n\n-- Unique index (also enforces uniqueness)\nCREATE UNIQUE INDEX idx_users_username ON users(username);\n```\n\n**Checking if indexes are used - EXPLAIN:**\n```sql\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';\n```\n\nThe output tells you:\n- `Seq Scan` = Full table scan (no index used)\n- `Index Scan` = Using the index\n- `Index Only Scan` = Even better, data comes entirely from the index\n\n**Common gotchas:**\n1. Indexes on small tables might be ignored (full scan is faster)\n2. Functions on indexed columns break the index: `WHERE LOWER(email) = ...`\n3. Too many indexes slow down INSERT/UPDATE operations\n\nA good rule of thumb: index columns you frequently filter or join on.",
    tokens: 0,
  },
];

// Calculate real token counts
function initMessages(): Message[] {
  return INITIAL_MESSAGES.map((msg) => ({
    ...msg,
    tokens: countTokens(msg.content),
  }));
}

const ZONE_EXPLANATIONS = [
  {
    range: "0 - 50%",
    zone: "Safe Zone",
    color: "oklch(0.65 0.2 155)",
    description:
      "The AI remembers everything in the conversation perfectly. No information loss. Ideal for detailed, multi-step tasks.",
  },
  {
    range: "50 - 70%",
    zone: "Caution Zone",
    color: "oklch(0.78 0.17 95)",
    description:
      "Still working fine, but getting fuller. Consider whether all the conversation history is still relevant.",
  },
  {
    range: "70 - 85%",
    zone: "Warning Zone",
    color: "oklch(0.7 0.18 55)",
    description:
      "Context is getting tight. The AI may start to lose track of earlier details. Good time to /compact.",
  },
  {
    range: "85 - 100%",
    zone: "Critical Zone",
    color: "oklch(0.63 0.24 25)",
    description:
      "At risk of hitting the limit! The AI will be forced to drop earlier messages. /compact immediately!",
  },
];

export default function ContextSimulatorPage() {
  const [messages, setMessages] = React.useState<Message[]>(() =>
    initMessages()
  );
  const [model, setModel] = React.useState("gpt-5.4-mini");
  const [newMessage, setNewMessage] = React.useState("");
  const [showExplanation, setShowExplanation] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const totalContext = MODEL_CONTEXT_SIZES[model] || 128000;
  const usedTokens = messages.reduce((sum, m) => sum + m.tokens, 0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = () => {
    if (!newMessage.trim()) return;
    const tokens = countTokens(newMessage);
    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: newMessage,
      tokens,
    };

    // Simulate a brief assistant response
    const responses = [
      "I understand your request. Let me work on that for you. Based on what you've described, I'll create a solution that addresses each of your requirements systematically.",
      "Great question! Let me break this down step by step so it's clear. The key concepts here involve understanding how the different pieces connect together.",
      "I'll help you with that. Here's my approach: first I'll analyze the requirements, then I'll implement a solution, and finally I'll explain how everything works.",
      "Absolutely! This is a common pattern. Let me show you the best practices and explain why they work. The main idea is to keep things simple and maintainable.",
      "That's an interesting challenge. Let me think through the options and give you a solution that balances performance with readability.",
    ];

    const responseText =
      responses[Math.floor(Math.random() * responses.length)];
    const assistantMsg: Message = {
      id: `ast-${Date.now()}`,
      role: "assistant",
      content: responseText,
      tokens: countTokens(responseText),
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setNewMessage("");
  };

  const handleCompact = () => {
    // Keep only last 3 message pairs + system message
    const systemMsgs = messages.filter((m) => m.role === "system");
    const nonSystemMsgs = messages.filter((m) => m.role !== "system");
    const kept = nonSystemMsgs.slice(-6);

    const summaryMsg: Message = {
      id: `compact-${Date.now()}`,
      role: "system",
      content:
        "[Conversation compacted: Earlier messages summarized to free up context space. Key topics discussed: React components, database indexing, SQL queries.]",
      tokens: countTokens(
        "Conversation compacted: Earlier messages summarized to free up context space. Key topics discussed: React components, database indexing, SQL queries."
      ),
    };

    setMessages([...systemMsgs, summaryMsg, ...kept]);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[oklch(0.65_0.2_155/0.15)]">
            <Layers className="w-5 h-5 text-[oklch(0.75_0.15_155)]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              Context Window Simulator
            </h1>
            <p className="text-sm text-[var(--muted-foreground)]">
              Watch the AI&apos;s memory fill up
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Conversation thread */}
        <div className="lg:col-span-2 space-y-4">
          {/* Message list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
          >
            {/* Thread header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[oklch(0.1_0.02_280/0.5)]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
                <Settings2 className="w-4 h-4" />
                Conversation Thread
              </div>
              <Badge variant="secondary" className="font-mono text-xs">
                {messages.length} messages
              </Badge>
            </div>

            {/* Messages */}
            <div className="max-h-[500px] overflow-y-auto p-3 space-y-2">
              <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "group relative flex gap-3 rounded-lg p-3 transition-colors",
                      msg.role === "user"
                        ? "bg-[oklch(0.6_0.2_250/0.05)]"
                        : msg.role === "assistant"
                        ? "bg-[oklch(0.65_0.2_155/0.05)]"
                        : "bg-[oklch(0.5_0.05_280/0.1)]"
                    )}
                  >
                    {/* Avatar */}
                    <div
                      className={cn(
                        "flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg",
                        msg.role === "user"
                          ? "bg-[oklch(0.6_0.2_250/0.2)]"
                          : msg.role === "assistant"
                          ? "bg-[oklch(0.65_0.2_155/0.2)]"
                          : "bg-[oklch(0.5_0.05_280/0.2)]"
                      )}
                    >
                      {msg.role === "user" ? (
                        <User className="w-3.5 h-3.5 text-[oklch(0.7_0.15_250)]" />
                      ) : msg.role === "assistant" ? (
                        <Bot className="w-3.5 h-3.5 text-[oklch(0.75_0.15_155)]" />
                      ) : (
                        <Settings2 className="w-3.5 h-3.5 text-[oklch(0.6_0.05_280)]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold capitalize text-[var(--foreground)]">
                          {msg.role}
                        </span>
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0 h-4 font-mono"
                        >
                          <Hash className="w-2.5 h-2.5 mr-0.5" />
                          {msg.tokens}
                        </Badge>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] whitespace-pre-wrap line-clamp-4">
                        {msg.content}
                      </p>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => removeMessage(msg.id)}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 flex items-center justify-center rounded text-[var(--muted-foreground)] hover:text-[oklch(0.63_0.24_25)] hover:bg-[oklch(0.63_0.24_25/0.1)] cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Add message input */}
            <div className="flex items-center gap-2 p-3 border-t border-[var(--border)]">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    addMessage();
                  }
                }}
                placeholder="Type a message to add to the conversation..."
                className="flex-1 bg-[var(--secondary)] rounded-lg px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              />
              <Button
                onClick={addMessage}
                size="sm"
                disabled={!newMessage.trim()}
                className="gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Add
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right: Context Meter + Controls */}
        <div className="space-y-4">
          {/* Context Meter */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
          >
            <ContextMeter
              used={usedTokens}
              total={totalContext}
              onCompact={handleCompact}
            />
          </motion.div>

          {/* Model Selector */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
          >
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
              Model (changes context size)
            </h3>
            <ModelSelector selected={model} onChange={setModel} />
            <div className="mt-3 text-xs text-[var(--muted-foreground)] text-center">
              Context: {(totalContext / 1000).toFixed(0)}K tokens
            </div>
          </motion.div>

          {/* Zone Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
          >
            <button
              onClick={() => setShowExplanation((prev) => !prev)}
              className="flex items-center justify-between w-full px-4 py-3 text-left cursor-pointer hover:bg-[var(--accent)] transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
                <Info className="w-4 h-4" />
                Context Zones Explained
              </div>
              <motion.div
                animate={{ rotate: showExplanation ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-4 h-4 text-[var(--muted-foreground)]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-3">
                    {ZONE_EXPLANATIONS.map((zone) => (
                      <div
                        key={zone.zone}
                        className="flex gap-3 rounded-lg p-2.5 border border-[var(--border)]"
                      >
                        <div
                          className="w-1 rounded-full flex-shrink-0"
                          style={{ background: zone.color }}
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className="text-xs font-bold"
                              style={{ color: zone.color }}
                            >
                              {zone.zone}
                            </span>
                            <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                              {zone.range}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                            {zone.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="space-y-2"
          >
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => {
                const bigMessage =
                  "Let me provide a comprehensive analysis of modern software architecture patterns. Microservices architecture breaks an application into small, independent services that communicate via APIs. Each service owns its data and business logic. Benefits include independent deployment, technology diversity, and team autonomy. However, it introduces complexity in service discovery, distributed transactions, and monitoring. The API gateway pattern provides a single entry point. Service mesh handles inter-service communication. Event-driven architecture enables loose coupling through message queues. CQRS separates read and write operations for optimization. Saga pattern manages distributed transactions across services. Circuit breaker prevents cascade failures. Sidecar pattern adds functionality without modifying services.";
                const tokens = countTokens(bigMessage);
                setMessages((prev) => [
                  ...prev,
                  {
                    id: `usr-big-${Date.now()}`,
                    role: "user",
                    content: "Explain modern software architecture patterns in detail.",
                    tokens: countTokens("Explain modern software architecture patterns in detail."),
                  },
                  {
                    id: `ast-big-${Date.now()}`,
                    role: "assistant",
                    content: bigMessage,
                    tokens,
                  },
                ]);
              }}
            >
              <Plus className="w-4 h-4" />
              Add Long Response
            </Button>
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => setMessages(initMessages())}
            >
              Reset Conversation
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
