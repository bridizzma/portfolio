import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] tracking-tight text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
