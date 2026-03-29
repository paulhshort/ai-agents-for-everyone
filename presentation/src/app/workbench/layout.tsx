"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Beaker,
  Home,
  Hash,
  Layers,
  GitCompareArrows,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Overview", href: "/workbench", icon: Home, exact: true },
  { label: "Token Visualizer", href: "/workbench/tokens", icon: Hash },
  { label: "Context Simulator", href: "/workbench/context", icon: Layers },
  { label: "Prompt Lab", href: "/workbench/prompt-lab", icon: GitCompareArrows },
];

export default function WorkbenchLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 flex flex-col border-r border-[var(--border)] bg-[var(--card)] flex-shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-[var(--border)]">
          <Beaker className="w-4 h-4 text-[var(--muted-foreground)]" />
          <span className="text-sm font-semibold">Workbench</span>
        </div>

        <nav className="flex-1 px-2 py-2 space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "text-[var(--foreground)] bg-[var(--muted)] font-medium"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                )}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-2 py-3 border-t border-[var(--border)]">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to course</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-8">{children}</div>
      </main>
    </div>
  );
}
