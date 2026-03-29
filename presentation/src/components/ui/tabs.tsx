"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "relative inline-flex items-center gap-1 rounded-lg bg-[var(--muted)] p-1",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] ring-offset-[var(--background)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[var(--foreground)] cursor-pointer select-none",
      className
    )}
    {...props}
  >
    {children}
    <TabsIndicator />
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

function TabsIndicator() {
  return (
    <motion.span
      className="absolute inset-0 z-[-1] rounded-md bg-[var(--background)] shadow-sm"
      layoutId="tabs-indicator"
      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
      style={{ display: "none" }}
      data-state-active-style="display:block"
    />
  );
}

const TabsTriggerAnimated = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    layoutId?: string;
  }
>(({ className, children, layoutId = "tabs-indicator", ...props }, ref) => {
  const [isActive, setIsActive] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const observer = new MutationObserver(() => {
      setIsActive(el.getAttribute("data-state") === "active");
    });
    observer.observe(el, { attributes: true, attributeFilter: ["data-state"] });
    setIsActive(el.getAttribute("data-state") === "active");

    return () => observer.disconnect();
  }, []);

  return (
    <TabsPrimitive.Trigger
      ref={(node) => {
        triggerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] ring-offset-[var(--background)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[var(--foreground)] cursor-pointer select-none",
        className
      )}
      {...props}
    >
      {isActive && (
        <motion.span
          className="absolute inset-0 z-[-1] rounded-md bg-[var(--background)] shadow-sm"
          layoutId={layoutId}
          transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
        />
      )}
      <span className="relative z-[1]">{children}</span>
    </TabsPrimitive.Trigger>
  );
});
TabsTriggerAnimated.displayName = "TabsTriggerAnimated";

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-3 ring-offset-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 data-[state=inactive]:hidden",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsTriggerAnimated, TabsContent };
