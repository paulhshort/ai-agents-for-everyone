// Quiz data — hardcoded questions organized by category.
// Format mirrors the YAML question bank for consistency.

export interface QuizQuestion {
  id: string;
  question: string;
  options: { key: string; text: string }[];
  answer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: QuizQuestion[];
}

export const quizCategories: QuizCategory[] = [
  {
    id: 'quick-start',
    name: 'Quick Start',
    description: 'Basics of getting started with AI and Codex',
    icon: 'Zap',
    questions: [
      {
        id: 'qs-1',
        question: 'What is the main difference between a chatbot and an AI agent?',
        options: [
          { key: 'A', text: 'Agents are faster than chatbots' },
          { key: 'B', text: 'Agents can take actions, not just answer questions' },
          { key: 'C', text: 'Chatbots are free, agents cost money' },
          { key: 'D', text: 'There is no difference' },
        ],
        answer: 'B',
        explanation: 'The key difference is that AI agents can take real actions — reading files, writing code, running commands — while chatbots only produce text responses.',
        difficulty: 'easy',
      },
      {
        id: 'qs-2',
        question: 'What command launches Codex in the terminal?',
        options: [
          { key: 'A', text: 'start-codex' },
          { key: 'B', text: 'codex' },
          { key: 'C', text: 'openai run' },
          { key: 'D', text: 'ai-agent start' },
        ],
        answer: 'B',
        explanation: 'Simply typing "codex" in your terminal starts the Codex CLI. It will automatically detect your project and start an interactive session.',
        difficulty: 'easy',
      },
      {
        id: 'qs-3',
        question: 'What is a "token" in AI?',
        options: [
          { key: 'A', text: 'A digital coin used to pay for AI services' },
          { key: 'B', text: 'A small chunk of text that AI processes' },
          { key: 'C', text: 'A security password' },
          { key: 'D', text: 'A type of neural network' },
        ],
        answer: 'B',
        explanation: 'Tokens are the small pieces that AI breaks text into before processing. Words, parts of words, or even single characters can be tokens.',
        difficulty: 'easy',
      },
      {
        id: 'qs-4',
        question: 'What does the "context window" represent?',
        options: [
          { key: 'A', text: 'The browser window where you use AI' },
          { key: 'B', text: 'The maximum amount of text AI can consider at once' },
          { key: 'C', text: 'A pop-up with extra information' },
          { key: 'D', text: 'The settings panel for AI preferences' },
        ],
        answer: 'B',
        explanation: 'The context window is like AI\'s whiteboard — it represents the total amount of text (your input + AI output + instructions) that AI can hold in memory at one time.',
        difficulty: 'easy',
      },
      {
        id: 'qs-5',
        question: 'What is an "AI hallucination"?',
        options: [
          { key: 'A', text: 'When AI crashes and shows error messages' },
          { key: 'B', text: 'When AI confidently generates incorrect or made-up information' },
          { key: 'C', text: 'When AI takes too long to respond' },
          { key: 'D', text: 'When AI refuses to answer a question' },
        ],
        answer: 'B',
        explanation: 'AI hallucination occurs when AI generates information that sounds confident and plausible but is actually incorrect or completely fabricated. This happens because AI always produces an answer based on patterns, even when it lacks real knowledge.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 'agents',
    name: 'AI Agents',
    description: 'Understanding the agentic paradigm',
    icon: 'Bot',
    questions: [
      {
        id: 'ag-1',
        question: 'What is the "agentic loop"?',
        options: [
          { key: 'A', text: 'A type of infinite loop bug in AI code' },
          { key: 'B', text: 'The cycle of Think → Plan → Act → Observe → Repeat' },
          { key: 'C', text: 'A circular conversation between two AIs' },
          { key: 'D', text: 'The login process for AI agents' },
        ],
        answer: 'B',
        explanation: 'The agentic loop is the core workflow of AI agents: they think about the goal, plan the next step, take action, observe the result, and repeat until the task is complete.',
        difficulty: 'easy',
      },
      {
        id: 'ag-2',
        question: 'Which of these can an AI agent do that a chatbot cannot?',
        options: [
          { key: 'A', text: 'Answer questions about history' },
          { key: 'B', text: 'Write and execute code in your project files' },
          { key: 'C', text: 'Generate text responses' },
          { key: 'D', text: 'Understand natural language' },
        ],
        answer: 'B',
        explanation: 'While both chatbots and agents can answer questions and generate text, only agents can actually interact with your file system — reading files, writing code, and executing commands.',
        difficulty: 'easy',
      },
      {
        id: 'ag-3',
        question: 'What does AGENTS.md do in a Codex project?',
        options: [
          { key: 'A', text: 'Lists all AI agents available for hire' },
          { key: 'B', text: 'Provides project-specific instructions and context to Codex' },
          { key: 'C', text: 'Stores conversation history' },
          { key: 'D', text: 'Configures the AI model to use' },
        ],
        answer: 'B',
        explanation: 'AGENTS.md is a file you place in your project root to give Codex persistent instructions, coding standards, and project context. Codex reads it automatically at the start of every session.',
        difficulty: 'medium',
      },
      {
        id: 'ag-4',
        question: 'Why is the agentic paradigm considered a major shift in AI?',
        options: [
          { key: 'A', text: 'It makes AI cheaper to use' },
          { key: 'B', text: 'It shifts AI from answering questions to accomplishing goals' },
          { key: 'C', text: 'It allows AI to feel emotions' },
          { key: 'D', text: 'It replaces all human jobs immediately' },
        ],
        answer: 'B',
        explanation: 'The agentic paradigm is transformative because it changes AI from a question-answer tool into an autonomous assistant that can plan, execute, and complete multi-step tasks on its own.',
        difficulty: 'medium',
      },
      {
        id: 'ag-5',
        question: 'What happens when a Codex agent encounters an error while executing a plan?',
        options: [
          { key: 'A', text: 'It crashes and stops immediately' },
          { key: 'B', text: 'It ignores the error and continues' },
          { key: 'C', text: 'It observes the error, adjusts its plan, and tries a different approach' },
          { key: 'D', text: 'It asks you to fix the error manually' },
        ],
        answer: 'C',
        explanation: 'This is the power of the agentic loop: when an agent encounters an error, it treats it as an observation, updates its plan, and tries a different approach — just like a skilled human would.',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'commands',
    name: 'Commands & Shortcuts',
    description: 'Mastering Codex CLI commands and keyboard shortcuts',
    icon: 'Terminal',
    questions: [
      {
        id: 'cmd-1',
        question: 'What does the /compact command do in Codex?',
        options: [
          { key: 'A', text: 'Makes the text smaller on screen' },
          { key: 'B', text: 'Summarizes the conversation to free up context window space' },
          { key: 'C', text: 'Compresses files to save disk space' },
          { key: 'D', text: 'Switches to a compact UI mode' },
        ],
        answer: 'B',
        explanation: '/compact summarizes the current conversation into a shorter form, freeing up valuable context window space so you can continue working on long tasks without AI forgetting important details.',
        difficulty: 'medium',
      },
      {
        id: 'cmd-2',
        question: 'What does the @ symbol do in a Codex prompt?',
        options: [
          { key: 'A', text: 'Tags another user in the conversation' },
          { key: 'B', text: 'References a specific file for Codex to read' },
          { key: 'C', text: 'Activates admin mode' },
          { key: 'D', text: 'Starts a new conversation thread' },
        ],
        answer: 'B',
        explanation: 'The @ symbol lets you reference specific files in your prompt, like @src/app.js. Codex will read that file and include it in its context for the current task.',
        difficulty: 'easy',
      },
      {
        id: 'cmd-3',
        question: 'What does /diff show you?',
        options: [
          { key: 'A', text: 'The difference in AI model versions' },
          { key: 'B', text: 'Exactly what Codex changed in your files' },
          { key: 'C', text: 'How much the AI service costs' },
          { key: 'D', text: 'The difficulty level of your prompt' },
        ],
        answer: 'B',
        explanation: '/diff shows you a side-by-side comparison of what Codex changed in your files, with additions in green and deletions in red. Essential for the Review Rule!',
        difficulty: 'easy',
      },
      {
        id: 'cmd-4',
        question: 'How do you safely cancel an operation in Codex?',
        options: [
          { key: 'A', text: 'Close the terminal window' },
          { key: 'B', text: 'Press Esc Esc (double escape)' },
          { key: 'C', text: 'Type "stop" and press Enter' },
          { key: 'D', text: 'Unplug your computer' },
        ],
        answer: 'B',
        explanation: 'Pressing Escape twice (Esc Esc) safely interrupts the current Codex operation. This stops the agent without losing your conversation history.',
        difficulty: 'medium',
      },
      {
        id: 'cmd-5',
        question: 'What flag do you use to start Codex in full-auto mode?',
        options: [
          { key: 'A', text: '--auto' },
          { key: 'B', text: '--no-ask' },
          { key: 'C', text: '--full-auto' },
          { key: 'D', text: '--yolo' },
        ],
        answer: 'C',
        explanation: 'The --full-auto flag tells Codex to execute its plan without asking for approval at each step. Note that --yolo is also a valid alias! Both should be used carefully.',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'context',
    name: 'Context Management',
    description: 'Managing AI context and memory effectively',
    icon: 'Brain',
    questions: [
      {
        id: 'ctx-1',
        question: 'What happens when the context window fills up?',
        options: [
          { key: 'A', text: 'AI gets smarter with more data' },
          { key: 'B', text: 'The oldest information is dropped and AI starts forgetting' },
          { key: 'C', text: 'AI automatically saves everything to a file' },
          { key: 'D', text: 'The conversation costs more money' },
        ],
        answer: 'B',
        explanation: 'When the context window fills up, the oldest content is dropped. This means AI can lose track of earlier instructions or context, which is why /compact is so useful.',
        difficulty: 'easy',
      },
      {
        id: 'ctx-2',
        question: 'What is the purpose of the AGENTS.md file?',
        options: [
          { key: 'A', text: 'To list team members working on the project' },
          { key: 'B', text: 'To give Codex persistent project instructions that survive across sessions' },
          { key: 'C', text: 'To track bugs and issues' },
          { key: 'D', text: 'To store API documentation' },
        ],
        answer: 'B',
        explanation: 'AGENTS.md provides Codex with project-specific context — coding standards, architecture decisions, tech stack details — that persists across sessions without using up the conversation context window.',
        difficulty: 'medium',
      },
      {
        id: 'ctx-3',
        question: 'Why might a very long conversation produce worse results?',
        options: [
          { key: 'A', text: 'The AI gets tired' },
          { key: 'B', text: 'Earlier context gets dropped, so AI loses important information' },
          { key: 'C', text: 'The internet connection slows down' },
          { key: 'D', text: 'The AI model degrades over time' },
        ],
        answer: 'B',
        explanation: 'As conversations get longer, they fill up the context window. The oldest messages get dropped, meaning AI may forget your initial instructions, project details, or earlier decisions.',
        difficulty: 'medium',
      },
      {
        id: 'ctx-4',
        question: 'Which strategy helps maintain quality in long AI sessions?',
        options: [
          { key: 'A', text: 'Never use more than 5 words per prompt' },
          { key: 'B', text: 'Use /compact to summarize, and repeat key instructions periodically' },
          { key: 'C', text: 'Restart your computer every 30 minutes' },
          { key: 'D', text: 'Only use AI for short tasks' },
        ],
        answer: 'B',
        explanation: 'The /compact command summarizes the conversation to free space, and repeating key instructions ensures AI keeps the most important context even as older messages get dropped.',
        difficulty: 'hard',
      },
      {
        id: 'ctx-5',
        question: 'How does temperature affect context management?',
        options: [
          { key: 'A', text: 'Higher temperature uses more context window space' },
          { key: 'B', text: 'Lower temperature makes responses shorter' },
          { key: 'C', text: 'Temperature has no effect on context management' },
          { key: 'D', text: 'Temperature affects creativity/randomness, not context size' },
        ],
        answer: 'D',
        explanation: 'Temperature controls how creative or random AI\'s responses are — it does not affect how much context window space is used. That is determined by the length of the conversation.',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'security',
    name: 'Security & Safety',
    description: 'Best practices for safe AI usage',
    icon: 'Shield',
    questions: [
      {
        id: 'sec-1',
        question: 'Which sandbox mode should you start with for an unfamiliar project?',
        options: [
          { key: 'A', text: 'Full Access — to explore everything' },
          { key: 'B', text: 'Workspace-Write — balanced approach' },
          { key: 'C', text: 'Read-Only — safest for exploration' },
          { key: 'D', text: 'No sandbox — for maximum speed' },
        ],
        answer: 'C',
        explanation: 'When exploring an unfamiliar project, always start in Read-Only mode. You only need to read and understand — there is no reason to give AI write or execute permissions until you trust the environment.',
        difficulty: 'easy',
      },
      {
        id: 'sec-2',
        question: 'Which of these should you NEVER share with an AI?',
        options: [
          { key: 'A', text: 'Your project\'s README file' },
          { key: 'B', text: 'Your API keys and passwords' },
          { key: 'C', text: 'A code snippet with a bug' },
          { key: 'D', text: 'An error message from your terminal' },
        ],
        answer: 'B',
        explanation: 'Never share passwords, API keys, secret tokens, or other credentials with AI. These give access to real services and accounts, and sharing them could lead to unauthorized access or charges.',
        difficulty: 'easy',
      },
      {
        id: 'sec-3',
        question: 'What is the Review Rule?',
        options: [
          { key: 'A', text: 'AI should review your code before you write it' },
          { key: 'B', text: 'You should always review and verify AI\'s output before accepting it' },
          { key: 'C', text: 'You need a senior developer to approve all AI usage' },
          { key: 'D', text: 'AI reviews itself to check for errors' },
        ],
        answer: 'B',
        explanation: 'The Review Rule is the single most important safety practice: ALWAYS check AI\'s work before accepting it. AI is confident even when wrong, so human review is essential.',
        difficulty: 'easy',
      },
      {
        id: 'sec-4',
        question: 'Using AI to generate an entire homework assignment and submitting it as your own is...',
        options: [
          { key: 'A', text: 'Smart studying' },
          { key: 'B', text: 'Academic dishonesty' },
          { key: 'C', text: 'Acceptable if you read it first' },
          { key: 'D', text: 'Fine because everyone does it' },
        ],
        answer: 'B',
        explanation: 'Submitting AI-generated work as your own is academic dishonesty. The test is simple: can you explain the work without AI? If not, you did not learn — you cheated. Use AI to learn and understand, not to bypass learning.',
        difficulty: 'medium',
      },
      {
        id: 'sec-5',
        question: 'What is the safest approach when AI suggests deleting files?',
        options: [
          { key: 'A', text: 'Trust AI and let it delete immediately' },
          { key: 'B', text: 'Review which files will be deleted and confirm they are safe to remove' },
          { key: 'C', text: 'Always refuse any deletion requests' },
          { key: 'D', text: 'Let AI decide — it knows best' },
        ],
        answer: 'B',
        explanation: 'Always review proposed deletions before confirming. Use /diff to see what will change. Some deletions are necessary (old test files), but you should verify each one rather than blindly trusting or blindly refusing.',
        difficulty: 'medium',
      },
    ],
  },
];

/** Get all questions across all categories */
export function getAllQuestions(): QuizQuestion[] {
  return quizCategories.flatMap((c) => c.questions);
}

/** Get a random mix of questions */
export function getRandomMix(count: number): QuizQuestion[] {
  const all = getAllQuestions();
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/** Get a category by ID */
export function getQuizCategory(id: string): QuizCategory | undefined {
  return quizCategories.find((c) => c.id === id);
}
