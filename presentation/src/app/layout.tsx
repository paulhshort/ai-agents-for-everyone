import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { FontSizeProvider } from "@/providers/font-size-provider";
import { PresentationProvider } from "@/providers/presentation-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agents: The Next Level | Interactive Course",
  description:
    "An interactive presentation platform teaching the agentic AI paradigm through OpenAI Codex. Built for classrooms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <FontSizeProvider>
            <PresentationProvider>{children}</PresentationProvider>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
