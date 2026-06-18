import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { writing } from "@/data/writing";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Writing() {
  return (
    <Section id="writing">
      <SectionHeading
        index="07"
        eyebrow="Blogs & Research"
        title="Thinking out loud, in writing."
        lead="Articles, detection writeups, lab notes, and research — the documentation habit, made public."
      />

      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface"
      >
        {writing.map((w) => (
          <motion.li key={w.title} variants={fadeUp}>
            <a
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-3 p-6 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-8 sm:p-7"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent/80">
                  {w.kind}
                </span>
                <span className="font-mono text-xs text-ink-faint">
                  {w.date} · {w.readingTime}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-pretty text-lg font-medium leading-snug tracking-tight text-ink">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-muted">
                  {w.blurb}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="hidden shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink sm:block"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
