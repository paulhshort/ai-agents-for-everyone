/**
 * Client-side BPE-approximation tokenizer for teaching purposes.
 * Not exact — designed to give students an intuitive understanding
 * of how text gets broken into tokens.
 */

export interface Token {
  text: string;
  id: number;
  type: "word" | "subword" | "punctuation" | "space" | "number";
}

/** oklch color strings mapped to each token type */
export const TOKEN_COLORS: Record<Token["type"], string> = {
  word: "oklch(0.6 0.2 250)",        // blue
  subword: "oklch(0.7 0.15 200)",    // cyan
  punctuation: "oklch(0.75 0.15 80)", // amber
  space: "oklch(0.5 0 0)",           // gray
  number: "oklch(0.65 0.2 155)",     // green
};

/** Tailwind-friendly bg classes for each token type */
export const TOKEN_BG_CLASSES: Record<Token["type"], string> = {
  word: "bg-[oklch(0.6_0.2_250/0.2)] border-[oklch(0.6_0.2_250/0.5)] text-[oklch(0.8_0.12_250)]",
  subword: "bg-[oklch(0.7_0.15_200/0.2)] border-[oklch(0.7_0.15_200/0.5)] text-[oklch(0.85_0.1_200)]",
  punctuation: "bg-[oklch(0.75_0.15_80/0.2)] border-[oklch(0.75_0.15_80/0.5)] text-[oklch(0.85_0.1_80)]",
  space: "bg-[oklch(0.5_0_0/0.1)] border-[oklch(0.5_0_0/0.3)] text-[oklch(0.6_0_0)]",
  number: "bg-[oklch(0.65_0.2_155/0.2)] border-[oklch(0.65_0.2_155/0.5)] text-[oklch(0.8_0.12_155)]",
};

/** Simple hash to generate a stable pseudo-ID for a token string */
function tokenHash(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash) % 100000;
}

function classifyToken(text: string): Token["type"] {
  if (/^\s+$/.test(text)) return "space";
  if (/^\d+$/.test(text)) return "number";
  if (/^[^\w\s]+$/.test(text)) return "punctuation";
  return "word";
}

/**
 * Split text into approximate BPE-like tokens.
 *
 * Strategy:
 * 1. Split on whitespace boundaries (preserving spaces as tokens)
 * 2. Separate punctuation from words
 * 3. Split long words (>6 chars) into subword chunks
 */
export function approximateTokenize(text: string): Token[] {
  if (!text) return [];

  const tokens: Token[] = [];

  // Split preserving whitespace as separate segments
  const segments = text.split(/(\s+)/);

  for (const segment of segments) {
    if (!segment) continue;

    // Whitespace tokens
    if (/^\s+$/.test(segment)) {
      tokens.push({
        text: segment,
        id: tokenHash(segment),
        type: "space",
      });
      continue;
    }

    // Split segment into words and punctuation
    const parts = segment.match(/[a-zA-Z']+|\d+|[^\w\s]/g);
    if (!parts) continue;

    for (const part of parts) {
      const type = classifyToken(part);

      if (type === "word" && part.length > 6) {
        // Split long words into subwords (BPE-style)
        const subwords = splitIntoSubwords(part);
        for (let i = 0; i < subwords.length; i++) {
          tokens.push({
            text: subwords[i],
            id: tokenHash(subwords[i]),
            type: i === 0 ? "word" : "subword",
          });
        }
      } else {
        tokens.push({
          text: part,
          id: tokenHash(part),
          type,
        });
      }
    }
  }

  return tokens;
}

/** Split a long word into BPE-like subword pieces */
function splitIntoSubwords(word: string): string[] {
  const pieces: string[] = [];
  let remaining = word;

  // Common prefixes
  const prefixes = ["un", "re", "pre", "dis", "mis", "over", "under", "out"];
  for (const prefix of prefixes) {
    if (remaining.toLowerCase().startsWith(prefix) && remaining.length > prefix.length + 2) {
      pieces.push(remaining.slice(0, prefix.length));
      remaining = remaining.slice(prefix.length);
      break;
    }
  }

  // Common suffixes
  const suffixes = ["tion", "sion", "ment", "ness", "able", "ible", "ful", "less", "ous", "ive", "ing", "ed", "er", "est", "ly", "al", "ity"];
  let suffix = "";
  for (const suf of suffixes) {
    if (remaining.toLowerCase().endsWith(suf) && remaining.length > suf.length + 1) {
      suffix = remaining.slice(remaining.length - suf.length);
      remaining = remaining.slice(0, remaining.length - suf.length);
      break;
    }
  }

  // Split remaining into chunks of 3-4 chars
  while (remaining.length > 5) {
    const chunkSize = Math.min(4, Math.ceil(remaining.length / 2));
    pieces.push(remaining.slice(0, chunkSize));
    remaining = remaining.slice(chunkSize);
  }
  if (remaining.length > 0) {
    pieces.push(remaining);
  }

  if (suffix) {
    pieces.push(suffix);
  }

  return pieces;
}

/** Count approximate tokens in a text string */
export function countTokens(text: string): number {
  return approximateTokenize(text).filter((t) => t.type !== "space").length;
}

/** Rough cost per million tokens for supported models */
const MODEL_PRICING: Record<string, { input: number; output: number }> = {
  "gpt-5.4": { input: 5.0, output: 15.0 },
  "gpt-5.4-mini": { input: 0.5, output: 1.5 },
  "gpt-5.3-codex": { input: 3.0, output: 12.0 },
};

/**
 * Estimate cost based on token count and model.
 * Returns formatted dollar strings.
 */
export function estimateCost(
  tokenCount: number,
  model: string
): { input: string; output: string } {
  const pricing = MODEL_PRICING[model] ?? MODEL_PRICING["gpt-5.4"];

  const inputCost = (tokenCount / 1_000_000) * pricing.input;
  const outputCost = (tokenCount / 1_000_000) * pricing.output;

  const fmt = (n: number) => {
    if (n < 0.0001) return "<$0.0001";
    if (n < 0.01) return `$${n.toFixed(4)}`;
    return `$${n.toFixed(4)}`;
  };

  return {
    input: fmt(inputCost),
    output: fmt(outputCost),
  };
}
