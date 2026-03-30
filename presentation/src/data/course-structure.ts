// Course structure — complete hierarchy for all 3 days
// This is the single source of truth for the course layout.

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  timeRange: string;
  duration: number; // minutes
  type: 'lecture' | 'activity' | 'lab' | 'demo' | 'break' | 'recap';
  slideFile?: string;
  description: string;
}

export interface CourseDay {
  day: number;
  title: string;
  subtitle: string;
  duration: string;
  modules: CourseModule[];
}

export const courseDays: CourseDay[] = [
  {
    day: 1,
    title: 'What Is AI, Really?',
    subtitle: 'From myths to machines — understand what AI actually does and meet your first AI agent.',
    duration: '9:00 AM – 3:00 PM',
    modules: [
      {
        id: 'd1-m1',
        moduleNumber: 1,
        title: 'Welcome & Icebreaker',
        timeRange: '9:00 – 9:30',
        duration: 30,
        type: 'activity',
        slideFile: 'opening',
        description:
          'Meet your classmates, set expectations, and answer the big question: what do you think AI is?',
      },
      {
        id: 'd1-m2',
        moduleNumber: 2,
        title: 'How AI Actually Works',
        timeRange: '9:30 – 10:30',
        duration: 60,
        type: 'lecture',
        slideFile: 'how-ai-thinks',
        description:
          'Tokens, context windows, temperature, and hallucinations — the real mechanics behind the magic.',
      },
      {
        id: 'd1-break-1',
        moduleNumber: 3,
        title: 'Morning Break',
        timeRange: '10:30 – 10:45',
        duration: 15,
        type: 'break',
        description: 'Stretch, grab a snack, and let the concepts sink in.',
      },
      {
        id: 'd1-m3',
        moduleNumber: 4,
        title: 'From Chatbot to Agent',
        timeRange: '10:45 – 12:00',
        duration: 75,
        type: 'lecture',
        slideFile: 'the-big-idea',
        description:
          'The paradigm shift: AI that DOES things, not just talks about them. Meet the agentic loop.',
      },
      {
        id: 'd1-lunch',
        moduleNumber: 5,
        title: 'Lunch Break',
        timeRange: '12:00 – 12:45',
        duration: 45,
        type: 'break',
        description: 'Refuel and recharge. Discuss what you have learned so far!',
      },
      {
        id: 'd1-m4',
        moduleNumber: 6,
        title: 'Your First Codex Session',
        timeRange: '12:45 – 1:30',
        duration: 45,
        type: 'demo',
        description:
          'Live demonstration: watch Codex read files, write code, and solve real problems in real time.',
      },
      {
        id: 'd1-m5',
        moduleNumber: 7,
        title: 'Lab 1 — Mystery Folder Detective',
        timeRange: '1:30 – 2:30',
        duration: 60,
        type: 'lab',
        description:
          'Your first hands-on mission: use Codex to explore a mystery folder and figure out what the project does.',
      },
      {
        id: 'd1-break-2',
        moduleNumber: 8,
        title: 'Afternoon Break',
        timeRange: '2:30 – 2:45',
        duration: 15,
        type: 'break',
        description: 'Quick stretch before the recap.',
      },
      {
        id: 'd1-m6',
        moduleNumber: 9,
        title: 'Day 1 Recap',
        timeRange: '2:45 – 3:00',
        duration: 15,
        type: 'recap',
        slideFile: 'day-1-recap',
        description:
          'Review the 5 Golden Rules, share your favorite moment, and preview tomorrow.',
      },
    ],
  },
  {
    day: 2,
    title: 'Becoming a Power User',
    subtitle: 'Level up your skills — master prompts, understand safety, and build your first real project.',
    duration: '9:00 AM – 3:00 PM',
    modules: [
      {
        id: 'd2-m1',
        moduleNumber: 1,
        title: 'Day 1 Recap Game',
        timeRange: '9:00 – 9:15',
        duration: 15,
        type: 'activity',
        description:
          'Quick-fire quiz game to warm up your brain and review yesterday\'s key concepts.',
      },
      {
        id: 'd2-m2',
        moduleNumber: 2,
        title: 'Talking to Your Agent',
        timeRange: '9:15 – 10:15',
        duration: 60,
        type: 'lecture',
        slideFile: 'prompt-engineering',
        description:
          'The WHAT-WHERE-HOW-VERIFY formula for writing prompts that actually work.',
      },
      {
        id: 'd2-break-1',
        moduleNumber: 3,
        title: 'Morning Break',
        timeRange: '10:15 – 10:30',
        duration: 15,
        type: 'break',
        description: 'Quick break to recharge.',
      },
      {
        id: 'd2-m3',
        moduleNumber: 4,
        title: 'Context Engineering',
        timeRange: '10:30 – 11:00',
        duration: 30,
        type: 'lecture',
        slideFile: 'context-engineering',
        description:
          'The real skill behind great AI results — how to give AI the right information so it does great work every time.',
      },
      {
        id: 'd2-m4',
        moduleNumber: 5,
        title: 'Agent Design Patterns',
        timeRange: '11:00 – 11:30',
        duration: 30,
        type: 'lecture',
        slideFile: 'agent-patterns',
        description:
          'The 8 patterns every AI user should know — from the agent loop to human-in-the-loop safety.',
      },
      {
        id: 'd2-m5',
        moduleNumber: 6,
        title: 'Safety & Permissions',
        timeRange: '11:30 – 12:15',
        duration: 45,
        type: 'lecture',
        slideFile: 'safety-matters',
        description:
          'Sandbox modes, what to never share, academic honesty, and the Review Rule.',
      },
      {
        id: 'd2-lunch',
        moduleNumber: 7,
        title: 'Lunch Break',
        timeRange: '12:15 – 1:00',
        duration: 45,
        type: 'break',
        description: 'Refuel and brainstorm project ideas with classmates.',
      },
      {
        id: 'd2-m6',
        moduleNumber: 8,
        title: 'Lab 2 — Build Something Cool',
        timeRange: '1:00 – 2:00',
        duration: 60,
        type: 'lab',
        description:
          'Guided lab: use Codex to build a small project from scratch — a calculator, a quiz, or a mini-game.',
      },
      {
        id: 'd2-break-2',
        moduleNumber: 9,
        title: 'Afternoon Break',
        timeRange: '2:00 – 2:15',
        duration: 15,
        type: 'break',
        description: 'Short break before the final stretch.',
      },
      {
        id: 'd2-m7',
        moduleNumber: 10,
        title: 'The AI Ecosystem',
        timeRange: '2:15 – 2:45',
        duration: 45,
        type: 'lecture',
        description:
          'Beyond Codex: ChatGPT, Claude, Gemini, Copilot — how they differ and when to use each.',
      },
      {
        id: 'd2-m8',
        moduleNumber: 11,
        title: 'Day 2 Recap',
        timeRange: '2:45 – 3:00',
        duration: 15,
        type: 'recap',
        slideFile: 'day-2-recap',
        description:
          'Skills unlocked, final project brainstorm, and a preview of tomorrow\'s build day.',
      },
    ],
  },
  {
    day: 3,
    title: 'Your AI Future',
    subtitle: 'Build your final project, present your work, and earn your certificate.',
    duration: '9:00 AM – 12:00 PM',
    modules: [
      {
        id: 'd3-m1',
        moduleNumber: 1,
        title: 'Final Project Briefing',
        timeRange: '9:00 – 9:15',
        duration: 15,
        type: 'lecture',
        description:
          'Requirements, tips, and inspiration for your final project. Pick your idea and get started!',
      },
      {
        id: 'd3-m2',
        moduleNumber: 2,
        title: 'Lab 3 — Final Project',
        timeRange: '9:15 – 11:00',
        duration: 105,
        type: 'lab',
        description:
          'The big build: create something real with Codex. Instructors circulate to help and mentor.',
      },
      {
        id: 'd3-m3',
        moduleNumber: 3,
        title: 'Presentations',
        timeRange: '11:00 – 11:30',
        duration: 30,
        type: 'activity',
        description:
          'Show off your creation! Each team gets 2–3 minutes to demo their project to the class.',
      },
      {
        id: 'd3-m4',
        moduleNumber: 4,
        title: 'Closing Ceremony',
        timeRange: '11:30 – 12:00',
        duration: 30,
        type: 'recap',
        slideFile: 'closing',
        description:
          'Celebrate your achievements, receive your certificate, and learn how to keep growing.',
      },
    ],
  },
];

/** Helper: get a specific day */
export function getCourseDay(dayNumber: number): CourseDay | undefined {
  return courseDays.find((d) => d.day === dayNumber);
}

/** Helper: get a specific module */
export function getCourseModule(moduleId: string): { day: CourseDay; module: CourseModule } | undefined {
  for (const day of courseDays) {
    const mod = day.modules.find((m) => m.id === moduleId);
    if (mod) return { day, module: mod };
  }
  return undefined;
}

/** Helper: get a module by day number and module number */
export function getModuleByDayAndNumber(
  dayNumber: number,
  moduleNumber: number
): { day: CourseDay; module: CourseModule } | undefined {
  const day = courseDays.find((d) => d.day === dayNumber);
  if (!day) return undefined;
  const mod = day.modules.find((m) => m.moduleNumber === moduleNumber);
  if (!mod) return undefined;
  return { day, module: mod };
}

/** Helper: total module count (excluding breaks) */
export function getTeachingModuleCount(day: CourseDay): number {
  return day.modules.filter((m) => m.type !== 'break').length;
}
