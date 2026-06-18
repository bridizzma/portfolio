import { motion } from "framer-motion";
import { Activity, Cpu, Radar, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  "Security Operations": Activity,
  DFIR: Radar,
  "Detection Engineering": Terminal,
  Automation: Cpu,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="05"
        eyebrow="Skills"
        title="Categorized expertise, not a scorecard."
        lead="No progress bars — proficiency is shown through the work above. These are the areas I operate in."
      />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-4 sm:grid-cols-2"
      >
        {skillGroups.map((group) => {
          const Icon = icons[group.title] ?? Activity;
          return (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-border-strong"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/30">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-subtle">
                    {group.caption}
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-ink-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
