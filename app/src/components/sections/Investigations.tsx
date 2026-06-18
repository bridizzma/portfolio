import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, FileSearch } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { investigations, type Investigation } from "@/data/investigations";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

function CaseDetail({ c }: { c: Investigation }) {
  return (
    <div className="space-y-7">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80">
          {c.category}
        </span>
        <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">
          {c.title}
        </h3>
      </div>

      <Field label="Objective">
        <p className="text-pretty leading-relaxed text-ink-muted">{c.objective}</p>
      </Field>

      <Field label="Methodology">
        <ol className="space-y-2.5">
          {c.methodology.map((m, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
              <span className="mt-px font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ol>
      </Field>

      <Field label="Findings">
        <p className="text-pretty leading-relaxed text-ink-muted">{c.findings}</p>
      </Field>

      <Field label="Outcome">
        <p className="text-pretty leading-relaxed text-ink-muted">{c.outcome}</p>
      </Field>

      <div className="flex flex-wrap items-center gap-2 border-t border-border pt-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
          ATT&CK
        </span>
        {c.techniques.map((t) => (
          <span
            key={t}
            className="rounded-md border border-accent/20 bg-accent-faint px-2 py-0.5 font-mono text-[11px] text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-[120px_1fr] sm:gap-6">
      <p className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

export function Investigations() {
  const [activeId, setActiveId] = useState(investigations[0].id);
  const active = investigations.find((c) => c.id === activeId) ?? null;

  return (
    <Section id="investigations">
      <SectionHeading
        index="04"
        eyebrow="Investigations"
        title="Case files — the work nobody sees on a résumé."
        lead="Selected investigations written up as case files: objective, methodology, findings, and outcome. This is where the practice lives."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-6">
        {/* Case index */}
        <div className="space-y-2" role="tablist" aria-label="Investigation case files">
          {investigations.map((c) => {
            const isActive = c.id === activeId;
            return (
              <div key={c.id}>
                <button
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${c.id}`}
                  onClick={() => setActiveId(isActive ? "" : c.id)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-xl border bg-surface px-4 py-4 text-left transition-colors",
                    isActive
                      ? "border-border-strong"
                      : "border-border hover:border-border-strong"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-colors",
                      isActive
                        ? "border-accent/30 bg-accent-faint text-accent"
                        : "border-border text-ink-subtle"
                    )}
                  >
                    <FileSearch size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] tracking-wide text-ink-faint">
                      {c.caseId}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink">
                      {c.category}
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      "shrink-0 text-ink-faint transition-transform lg:hidden",
                      isActive && "rotate-180"
                    )}
                  />
                </button>

                {/* Mobile inline disclosure */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`panel-${c.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="mt-2 rounded-xl border border-border bg-surface p-6">
                        <CaseDetail c={c} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop detail pane */}
        <div className="hidden lg:block">
          <div className="hairline-top sticky top-24 rounded-2xl border border-border bg-surface p-8">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <CaseDetail c={active} />
                </motion.div>
              ) : (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center font-mono text-sm text-ink-faint"
                >
                  Select a case file to review →
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
