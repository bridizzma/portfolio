import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const paragraphs = [
  "I came to security from the defender's side of the keyboard and never left it. What pulled me in wasn't the idea of breaking things — it was the puzzle of reconstruction: reading the traces an action leaves behind and proving, with evidence, what actually happened.",
  "Day to day I work in a managed SOC: triaging alerts, tuning detections so analysts trust them, and automating the repetitive enrichment that slows investigations down. The work I care about most sits between detection engineering and DFIR — turning attacker behavior into durable rules, then validating them against telemetry I can reproduce in a lab.",
  "I treat every investigation as something worth writing down. Methodology beats one-off wins, so I document how I reached a conclusion, not just the conclusion. It keeps me honest and it makes the next investigation faster.",
];

const principles = [
  {
    k: "Evidence over assumption",
    v: "Every conclusion traces back to an artifact I can point to.",
  },
  {
    k: "Detections that get trusted",
    v: "A rule that cries wolf is worse than no rule. Tuning is the work.",
  },
  {
    k: "Automate the toil",
    v: "Free the analyst's attention for the judgment a script can't make.",
  },
  {
    k: "Document the method",
    v: "Repeatable process compounds; a lucky catch does not.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="A defender who reconstructs, documents, and automates."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6"
        >
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-pretty text-lg leading-relaxed text-ink-muted"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-px overflow-hidden rounded-xl border border-border bg-border"
        >
          {principles.map((p) => (
            <motion.li key={p.k} variants={fadeUp} className="bg-surface p-5">
              <p className="text-sm font-medium tracking-tight text-ink">{p.k}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-subtle">{p.v}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
