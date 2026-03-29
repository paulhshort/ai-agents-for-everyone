"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm",
        secondary:
          "border-transparent bg-[var(--secondary)] text-[var(--secondary-foreground)]",
        destructive:
          "border-transparent bg-[var(--destructive)] text-white shadow-sm",
        outline:
          "border-[var(--border)] text-[var(--foreground)]",
        purple:
          "border-transparent bg-[oklch(0.55_0.25_290/0.15)] text-[oklch(0.75_0.2_290)] border-[oklch(0.55_0.25_290/0.3)]",
        blue:
          "border-transparent bg-[oklch(0.6_0.2_250/0.15)] text-[oklch(0.75_0.15_250)] border-[oklch(0.6_0.2_250/0.3)]",
        cyan:
          "border-transparent bg-[oklch(0.7_0.15_200/0.15)] text-[oklch(0.8_0.1_200)] border-[oklch(0.7_0.15_200/0.3)]",
        green:
          "border-transparent bg-[oklch(0.65_0.2_155/0.15)] text-[oklch(0.75_0.15_155)] border-[oklch(0.65_0.2_155/0.3)]",
        amber:
          "border-transparent bg-[oklch(0.75_0.15_80/0.15)] text-[oklch(0.8_0.12_80)] border-[oklch(0.75_0.15_80/0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
