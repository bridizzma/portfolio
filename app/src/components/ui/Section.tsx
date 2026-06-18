import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  topBorder = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  /** hairline divider at the top of the section band */
  topBorder?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-24 sm:py-32",
        topBorder && "border-t border-border/70",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("max-w-2xl", className)}
    >
      <div className="flex items-center gap-3 text-ink-subtle">
        {index && (
          <span className="font-mono text-xs tracking-widest text-accent/80">
            {index}
          </span>
        )}
        <span className="h-px w-6 bg-border-strong" aria-hidden />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
          {lead}
        </p>
      )}
    </motion.header>
  );
}
