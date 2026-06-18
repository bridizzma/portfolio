import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50";

const sizes = "h-11 px-5";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bg hover:bg-white shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]",
  secondary:
    "border border-border-strong bg-surface text-ink hover:border-ink-faint hover:bg-surface-2",
  ghost: "text-ink-muted hover:text-ink",
};

export function ButtonLink({
  variant = "secondary",
  className,
  children,
  ...props
}: {
  variant?: Variant;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, sizes, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
