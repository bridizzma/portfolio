import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Channel = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: profile.email, href: profile.links.email, icon: Mail },
  {
    label: "GitHub",
    value: "github.com/bridizzma",
    href: profile.links.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "in/bridizzma",
    href: profile.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.links.resume,
    icon: Download,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-3 text-ink-subtle">
            <span className="font-mono text-xs tracking-widest text-accent/80">
              08
            </span>
            <span className="h-px w-6 bg-border-strong" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
              Contact
            </span>
          </div>
          <h2 className="mt-5 text-balance text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
            Let's talk detection, response, or a role.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-ink-muted">
            Open to SOC, DFIR, and detection-engineering opportunities — remote or
            based in {profile.location}. The fastest way to reach me is email.
          </p>
          <a
            href={profile.links.email}
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-medium text-bg transition-colors hover:bg-white"
          >
            <Mail size={16} /> {profile.email}
          </a>
        </motion.div>

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-px self-start overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
        >
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <motion.li key={c.label} variants={fadeUp}>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="group flex h-full items-center justify-between gap-4 bg-surface p-6 transition-colors hover:bg-surface-2"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-2 text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">
                        {c.label}
                      </span>
                      <span className="block font-mono text-xs text-ink-subtle">
                        {c.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </a>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
