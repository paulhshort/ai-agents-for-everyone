import type { Slide } from '@/data/types';

export const openingSlides: Slide[] = [
  {
    id: 'opening-1',
    type: 'title',
    title: 'AI Agents: The Next Level',
    subtitle: 'What if your computer could actually DO things for you?',
    animation: 'zoom-in',
    notes: 'Welcome everyone! Build excitement. This subtitle is the core thesis of the entire course.',
  },
  {
    id: 'opening-1b',
    type: 'comparison',
    title: 'The AI You Know vs. The AI That Exists',
    comparison: {
      left: {
        title: 'What You Think AI Is',
        content: '• Answering questions\n• Writing essays for you\n• Chatting back and forth\n• A fancy search engine\n• Something you type AT',
        variant: 'neutral',
      },
      right: {
        title: 'What AI Can Actually Be',
        content: '• Organizing your messy files into folders\n• Fixing the formatting in your spreadsheet\n• Researching a topic and writing a summary report\n• Managing your schedule and to-do list\n• Something that WORKS FOR you',
        variant: 'positive',
      },
    },
    animation: 'fade-in',
    notes: 'This is the HOOK. Let students absorb both sides. The right column should feel like a surprise. Ask: "How many of you knew AI could do the stuff on the right?"',
  },
  {
    id: 'opening-2',
    type: 'content',
    title: 'Your 3-Day Journey',
    bullets: [
      'Day 1: What Is AI, Really? — Understand the mechanics, meet your first agent',
      'Day 2: Becoming a Power User — Master prompts, safety, and build your first project',
      'Day 3: Your AI Future — Build a real project and present it to the class',
    ],
    animation: 'reveal-steps',
    notes: 'Give a quick overview so students know what to expect. Emphasize the hands-on nature.',
  },
  {
    id: 'opening-3',
    type: 'content',
    title: 'By the End of This Course, You Will...',
    bullets: [
      'Understand how AI actually works — tokens, context windows, and why it sometimes makes things up',
      'Know the difference between a chatbot and an AI agent (and why it matters)',
      'Write effective prompts using the WHAT-WHERE-HOW-VERIFY formula',
      'Use Codex to organize files, review writing, research topics, and automate tasks — safely and responsibly',
      'Be in the top 1% of people who truly understand AI agents',
    ],
    animation: 'reveal-steps',
    notes: 'These are the concrete learning outcomes. Pause on each one to build anticipation.',
  },
  {
    id: 'opening-4',
    type: 'activity',
    title: 'Icebreaker',
    activityConfig: {
      title: 'The Coolest Thing',
      instructions: 'Think about this: What is the COOLEST thing you have ever seen a computer do by itself? Maybe autocomplete guessed your whole sentence. Maybe your phone organized your photos automatically. Maybe a game character surprised you with something smart. Write it on a sticky note and hold it up!',
      duration: 3,
      type: 'class',
    },
    animation: 'fade-in',
    notes: 'Way more engaging than "define AI." Students love sharing cool moments. Use their answers to bridge into the course: "What if I told you AI can do things WAY cooler than that?"',
  },
  {
    id: 'opening-5',
    type: 'discussion',
    title: 'Let\'s Talk About AI',
    subtitle: 'What\'s the smartest thing you\'ve ever seen AI do?',
    content: 'Think about any time you have used or seen someone use AI — ChatGPT, Siri, Google, auto-complete, recommendation engines, image generators. What impressed you the most?',
    animation: 'fade-in',
    notes: 'Let 3-4 students share. Validate all answers. This builds rapport and establishes baseline knowledge.',
  },
  {
    id: 'opening-6',
    type: 'title',
    title: 'Let\'s find out what AI REALLY is...',
    subtitle: 'Spoiler: it\'s both less magical and MORE powerful than you think.',
    animation: 'slide-up',
    notes: 'Transition slide to Module 2. Build intrigue. Pause for effect before moving on.',
  },
];
