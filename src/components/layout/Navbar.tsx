import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { cn } from "@/lib/cn";

const ids = navItems.map((n) => n.id);

export function Navbar() {
  const active = useScrollSpy(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "border-b border-border/70 bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — home`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-border-strong bg-surface font-mono text-sm font-medium text-ink transition-colors group-hover:border-ink-faint">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
              {profile.shortName}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    active === item.id
                      ? "text-ink"
                      : "text-ink-subtle hover:text-ink"
                  )}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-accent"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.links.resume}
              className="hidden h-9 items-center rounded-lg border border-border-strong bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface-2 sm:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border-strong bg-surface text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-lg tracking-tight transition-colors",
                      active === item.id
                        ? "bg-surface text-ink"
                        : "text-ink-muted hover:bg-surface hover:text-ink"
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
