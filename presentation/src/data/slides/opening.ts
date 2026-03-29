import type { Slide } from '@/data/types';

export const openingSlides: Slide[] = [
  {
    id: 'opening-1',
    type: 'title',
    title: 'AI Agents: The Next Level',
    subtitle: 'What if AI could DO things, not just TALK about things?',
    animation: 'zoom-in',
    notes: 'Welcome everyone! Build excitement. This subtitle is the core thesis of the entire course.',
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
      title: 'In One Word...',
      instructions: 'In ONE word, what do you think AI is? Write it on a sticky note and hold it up. No wrong answers!',
      duration: 3,
      type: 'class',
    },
    animation: 'fade-in',
    notes: 'Great for gauging the room. Common answers: robot, smart, scary, cool, future. Use these to start a conversation.',
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
