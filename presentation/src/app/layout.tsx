import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { FontSizeProvider } from "@/providers/font-size-provider";
import { PresentationProvider } from "@/providers/presentation-provider";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agents for Everyone | Interactive Course",
  description:
    "An interactive course teaching the agentic AI paradigm. Learn how AI agents can do things for you — not just answer questions.",
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
            <PresentationProvider>
              <Navbar />
              {children}
            </PresentationProvider>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
