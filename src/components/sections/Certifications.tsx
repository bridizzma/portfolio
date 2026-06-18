import { motion } from "framer-motion";
import { BadgeCheck, CircleDashed } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="06"
        eyebrow="Certifications"
        title="Credentials that back the practice."
        lead="A mix of earned certifications and ongoing study — listed honestly, including what's still in progress."
      />

      <motion.ul
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((c) => {
          const earned = c.status === "Earned";
          return (
            <motion.li
              key={c.name}
              variants={fadeUp}
              className="flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-lg border",
                    earned
                      ? "border-accent/25 bg-accent-faint text-accent"
                      : "border-border bg-surface-2 text-ink-subtle"
                  )}
                >
                  {earned ? <BadgeCheck size={18} /> : <CircleDashed size={18} />}
                </span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]",
                    earned
                      ? "border-border text-ink-subtle"
                      : "border-accent/20 text-accent/80"
                  )}
                >
                  {c.status}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-base font-medium tracking-tight text-ink">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-ink-subtle">
                  {c.issuer} · {c.year}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {c.focus}
                </p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
