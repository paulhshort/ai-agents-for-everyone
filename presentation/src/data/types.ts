export type SlideType =
  | "title"
  | "content"
  | "comparison"
  | "diagram"
  | "code"
  | "activity"
  | "quiz"
  | "demo"
  | "discussion"
  | "threejs";

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string;
  bullets?: string[];
  codeBlock?: { lang: string; code: string };
  comparison?: {
    left: {
      title: string;
      content: string;
      variant: "negative" | "positive" | "neutral";
    };
    right: {
      title: string;
      content: string;
      variant: "negative" | "positive" | "neutral";
    };
  };
  visualization?:
    | "neural-network"
    | "token-flow"
    | "context-window"
    | "agentic-loop";
  quizQuestion?: {
    question: string;
    options: { key: string; text: string }[];
    answer: string;
    explanation: string;
  };
  activityConfig?: {
    title: string;
    instructions: string;
    duration: number;
    type: "individual" | "group" | "class";
  };
  terminalScript?: {
    type: "input" | "output" | "comment";
    text: string;
    delay?: number;
  }[];
  notes?: string;
  animation?:
    | "fade-in"
    | "slide-left"
    | "slide-right"
    | "slide-up"
    | "zoom-in"
    | "typewriter"
    | "reveal-steps"
    | "none";
}
