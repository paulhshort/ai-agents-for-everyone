import type { Slide } from '@/data/types';
import { openingSlides } from './opening';
import { howAiThinksSlides } from './how-ai-thinks';
import { theBigIdeaSlides } from './the-big-idea';
import { promptEngineeringSlides } from './prompt-engineering';
import { contextEngineeringSlides } from './context-engineering';
import { agentPatternsSlides } from './agent-patterns';
import { safetyMattersSlides } from './safety-matters';
import { day1RecapSlides } from './day-1-recap';
import { day2RecapSlides } from './day-2-recap';
import { closingSlides } from './closing';

/**
 * Maps slideFile keys (from course-structure.ts) to their slide arrays.
 * Used by the module page to load the correct deck.
 */
export const slideDecks: Record<string, Slide[]> = {
  'opening': openingSlides,
  'how-ai-thinks': howAiThinksSlides,
  'the-big-idea': theBigIdeaSlides,
  'prompt-engineering': promptEngineeringSlides,
  'context-engineering': contextEngineeringSlides,
  'agent-patterns': agentPatternsSlides,
  'safety-matters': safetyMattersSlides,
  'day-1-recap': day1RecapSlides,
  'day-2-recap': day2RecapSlides,
  'closing': closingSlides,
};

/** Get slide count for a given deck */
export function getSlideCount(slideFile: string): number {
  return slideDecks[slideFile]?.length ?? 0;
}

// Re-export individual decks for direct imports
export {
  openingSlides,
  howAiThinksSlides,
  theBigIdeaSlides,
  promptEngineeringSlides,
  contextEngineeringSlides,
  agentPatternsSlides,
  safetyMattersSlides,
  day1RecapSlides,
  day2RecapSlides,
  closingSlides,
};
