import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TelemetryBackground } from "@/components/visuals/TelemetryBackground";
import { profile } from "@/data/profile";
import { ease, fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <TelemetryBackground />
      <div className="accent-glow pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative">
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-2 gap-y-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-ink-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for SOC / DFIR roles
            </span>
            <span className="font-mono text-xs text-ink-faint">
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-ink-muted"
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="inline-flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-ink-faint" aria-hidden />
                )}
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-pretty font-serif text-xl leading-relaxed text-ink-muted sm:text-2xl"
          >
            {profile.statement}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-medium text-bg transition-colors hover:bg-white"
            >
              View Projects
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface-2"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.links.resume}
              className="inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* quiet signal row */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
        >
          {profile.signals.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-mono text-2xl font-medium tracking-tight text-ink">
                {s.value}
              </dd>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-subtle">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint transition-colors hover:text-ink-muted md:inline-flex"
      >
        Scroll
        <ArrowUpRight size={13} className="rotate-45" />
      </motion.a>
    </section>
  );
}
