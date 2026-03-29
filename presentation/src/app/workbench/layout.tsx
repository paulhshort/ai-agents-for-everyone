"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Home,
  Hash,
  Layers,
  GitCompareArrows,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Overview",
    href: "/workbench",
    icon: Home,
    exact: true,
  },
  {
    label: "Token Visualizer",
    href: "/workbench/tokens",
    icon: Hash,
  },
  {
    label: "Context Simulator",
    href: "/workbench/context",
    icon: Layers,
  },
  {
    label: "Prompt Lab",
    href: "/workbench/prompt-lab",
    icon: GitCompareArrows,
  },
];

export default function WorkbenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 64 }}
        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        className="relative flex flex-col border-r border-[var(--border)] bg-[oklch(0.1_0.02_280/0.5)] overflow-hidden flex-shrink-0"
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--border)]">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-blue)] shadow-lg shadow-[oklch(0.55_0.25_290/0.3)]">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-sm font-bold text-[var(--foreground)] whitespace-nowrap">
                AI Workbench
              </h1>
              <p className="text-[10px] text-[var(--muted-foreground)] whitespace-nowrap">
                Interactive Learning Tools
              </p>
            </motion.div>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-2 py-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="workbench-nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.25 290 / 0.15), oklch(0.6 0.2 250 / 0.1))",
                      border: "1px solid oklch(0.55 0.25 290 / 0.3)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <item.icon className="w-4.5 h-4.5 relative z-10 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="relative z-10 whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Back to presentation */}
        <div className="px-2 py-3 border-t border-[var(--border)]">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && <span className="whitespace-nowrap">Back to Presentation</span>}
          </Link>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="absolute top-4 right-0 translate-x-1/2 z-20 w-6 h-6 rounded-full border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer shadow-sm"
        >
          <motion.div
            animate={{ rotate: sidebarOpen ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="w-3 h-3" />
          </motion.div>
        </button>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-6">{children}</div>
      </main>
    </div>
  );
}
