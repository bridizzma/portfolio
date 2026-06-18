import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3 text-sm text-ink-subtle">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface font-mono text-[11px] text-ink-muted">
            {profile.initials}
          </span>
          <span>
            {profile.name} · {profile.location}
          </span>
        </div>

        <p className="font-mono text-xs text-ink-faint">
          Built with React, TypeScript & Tailwind
        </p>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm text-ink-subtle transition-colors hover:text-ink"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </Container>
    </footer>
  );
}
