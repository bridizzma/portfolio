import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { projects, type Project } from "@/data/projects";
import { fadeUp, viewportOnce } from "@/lib/motion";

const fields: Array<{ key: keyof Project; label: string }> = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "outcome", label: "Outcome" },
];

function CaseStudy({ project, n }: { project: Project; n: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className="hairline-top group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
    >
      <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[300px_1fr] lg:gap-12">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ink-faint">
              {String(n).padStart(2, "0")}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80">
              {project.kicker}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-xs text-ink-faint">{project.year}</p>

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              View repository
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </header>

        <div>
          <dl className="space-y-6">
            {fields.map((f) => (
              <div
                key={f.key}
                className="grid gap-1.5 sm:grid-cols-[120px_1fr] sm:gap-6"
              >
                <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
                  {f.label}
                </dt>
                <dd className="text-pretty leading-relaxed text-ink-muted">
                  {project[f.key] as string}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
            <span className="mr-1 pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
              Tools
            </span>
            {project.tools.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        eyebrow="Featured Projects"
        title="Engineering work, presented as case studies."
        lead="Each project is framed the way real security work is — the problem, the approach, the tooling, and what it actually changed."
      />

      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 space-y-6"
      >
        {projects.map((p, i) => (
          <CaseStudy key={p.id} project={p} n={i + 1} />
        ))}
      </motion.div>
    </Section>
  );
}
