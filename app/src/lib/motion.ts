import type { Variants, Transition } from "framer-motion";

/** Shared easing — calm, slightly weighted, never bouncy. */
export const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease } },
};

/** Parent container that staggers its children's reveals. */
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

/** Standard viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
