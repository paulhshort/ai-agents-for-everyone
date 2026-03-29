"use client";

import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseProgressProps {
  day?: number;
  module?: number;
  slide?: number;
  totalSlides?: number;
  moduleTitle?: string;
}

export function CourseProgress({
  day,
  module,
  slide,
  totalSlides,
  moduleTitle,
}: CourseProgressProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {day != null && (
        <>
          <Badge variant="purple" className="text-xs">
            Day {day}
          </Badge>
          <ChevronRight className="h-3 w-3 text-[var(--muted-foreground)]" />
        </>
      )}

      {module != null && (
        <>
          <Badge variant="blue" className="text-xs">
            Module {module}
          </Badge>
          {moduleTitle && (
            <span className="hidden text-xs text-[var(--muted-foreground)] sm:inline">
              {moduleTitle}
            </span>
          )}
          <ChevronRight className="h-3 w-3 text-[var(--muted-foreground)]" />
        </>
      )}

      {slide != null && totalSlides != null && (
        <Badge variant="cyan" className="text-xs tabular-nums">
          Slide {slide + 1} / {totalSlides}
        </Badge>
      )}
    </div>
  );
}
