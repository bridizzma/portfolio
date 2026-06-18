import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where the work has been put into practice."
        lead="A short, honest track record across operations, internship foundations, and self-directed research."
      />

      <motion.ol
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 space-y-4"
      >
        {experience.map((item) => (
          <motion.li key={`${item.org}-${item.role}`} variants={fadeUp}>
            <article className="group relative grid gap-6 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:grid-cols-[200px_1fr] sm:p-8">
              <div className="flex flex-col gap-1 sm:border-r sm:border-border sm:pr-6">
                <span className="font-mono text-xs text-accent">{item.period}</span>
                {item.location && (
                  <span className="font-mono text-xs text-ink-faint">
                    {item.location}
                  </span>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-xl font-medium tracking-tight text-ink">
                    {item.role}
                  </h3>
                  <span className="text-ink-faint" aria-hidden>
                    ·
                  </span>
                  <span className="text-lg text-ink-muted">{item.org}</span>
                </div>

                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted">
                  {item.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {item.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                        aria-hidden
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
