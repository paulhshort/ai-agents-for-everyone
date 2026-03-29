/**
 * Slide navigation utilities for the presentation app.
 * Generates URL paths for navigating between slides.
 */

/**
 * Build a slide URL from day, module, and slide numbers.
 * URL pattern: /day/{day}/module/{module}/slide/{slide}
 */
export function getSlideUrl(day: number, module: number, slide: number): string {
  return `/day/${day}/module/${module}/slide/${slide}`;
}

/**
 * Get the URL for the next slide.
 * Returns null if we're on the last slide of the current module.
 * (Cross-module navigation should be handled at a higher level.)
 */
export function getNextSlideUrl(
  currentDay: number,
  currentModule: number,
  currentSlide: number,
  totalSlides: number
): string | null {
  if (currentSlide < totalSlides) {
    return getSlideUrl(currentDay, currentModule, currentSlide + 1);
  }
  return null;
}

/**
 * Get the URL for the previous slide.
 * Returns null if we're on the first slide of the current module.
 */
export function getPrevSlideUrl(
  currentDay: number,
  currentModule: number,
  currentSlide: number
): string | null {
  if (currentSlide > 1) {
    return getSlideUrl(currentDay, currentModule, currentSlide - 1);
  }
  return null;
}
