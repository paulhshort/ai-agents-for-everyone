"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Maximize,
  Minimize,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontSizeControl } from "@/components/classroom/font-size-control";
import { ThemeToggle } from "@/components/classroom/theme-toggle";
import { useFullscreen } from "@/hooks/use-fullscreen";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Day 1", href: "/day/1" },
  { label: "Day 2", href: "/day/2" },
  { label: "Day 3", href: "/day/3" },
  { label: "Workbench", href: "/workbench" },
  { label: "Demos", href: "/demos" },
  { label: "Quiz", href: "/quiz" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide navbar in fullscreen presentation mode
  if (isFullscreen) return null;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-lg shadow-[oklch(0_0_0/0.1)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo / title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]">
            <Sparkles className="h-4 w-4 text-[var(--primary-foreground)]" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">
            Codex
            <span className="gradient-text ml-1">Course</span>
          </span>
        </Link>

        {/* Center navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-lg bg-[var(--accent)]"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.5,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex">
            <FontSizeControl />
          </div>

          <div className="mx-1 hidden h-6 w-px bg-[var(--border)] sm:block" />

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="h-9 w-9"
          >
            {isFullscreen ? (
              <Minimize className="h-4 w-4" />
            ) : (
              <Maximize className="h-4 w-4" />
            )}
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
