import { motion, useReducedMotion } from "framer-motion";

const WIDTH = 1200;
const HEIGHT = 560;

const shieldOuterPath = `M 600 120
  C 530 120 490 170 490 242
  L 490 302
  L 560 428
  L 600 488
  L 640 428
  L 710 302
  L 710 242
  C 710 170 670 120 600 120
  Z`;

const shieldPlatePath = `M 600 146
  C 560 146 526 174 526 220
  L 526 264
  L 584 398
  L 600 424
  L 616 398
  L 674 264
  L 674 220
  C 674 174 640 146 600 146
  Z`;

const shieldCorePath = `M 600 210
  L 640 242
  L 640 292
  L 600 332
  L 560 292
  L 560 242
  Z`;

const circuitPaths = [
  "M 520 240 H 580",
  "M 620 240 H 680",
  "M 560 276 L 560 310",
  "M 640 276 L 640 310",
  "M 540 360 L 560 360",
  "M 640 360 L 660 360",
  "M 590 220 L 610 220",
  "M 590 320 L 610 320",
];

export function TelemetryBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="bg" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#101318" />
            <stop offset="48%" stopColor="#06090d" />
            <stop offset="100%" stopColor="#030405" />
          </radialGradient>

          <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#161b22" />
            <stop offset="32%" stopColor="#1c232d" />
            <stop offset="68%" stopColor="#0f151c" />
            <stop offset="100%" stopColor="#141b23" />
          </linearGradient>

          <linearGradient id="metal-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124, 182, 255, 0.18)" />
            <stop offset="45%" stopColor="rgba(95, 156, 230, 0.06)" />
            <stop offset="100%" stopColor="rgba(124, 182, 255, 0.12)" />
          </linearGradient>

          <linearGradient id="accent-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#57c4ff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#2e9de2" stopOpacity="0.04" />
          </linearGradient>

          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#44c8ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0b1631" stopOpacity="0" />
          </radialGradient>

          <pattern id="mesh" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M 0 16 L 16 0" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>

          <filter id="softglow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width={WIDTH} height={HEIGHT} fill="url(#bg)" />
        <rect width={WIDTH} height={HEIGHT} fill="url(#mesh)" opacity="0.08" />

        <g opacity="0.18" stroke="#69c1ff" strokeWidth="1" strokeLinecap="round">
          <line x1="160" y1="88" x2="280" y2="88" />
          <line x1="920" y1="102" x2="1040" y2="102" />
          <line x1="102" y1="420" x2="220" y2="420" />
          <line x1="980" y1="432" x2="1100" y2="432" />
        </g>

        <circle cx="600" cy="255" r="172" fill="url(#core-glow)" />
        <circle cx="600" cy="255" r="236" fill="url(#accent-glow)" />

        <motion.g
          initial={reduce ? undefined : { opacity: 0.95 }}
          animate={reduce ? undefined : { opacity: [0.95, 1, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={shieldOuterPath} fill="url(#metal)" stroke="url(#metal-edge)" strokeWidth="2" />
          <path d={shieldPlatePath} fill="rgba(255,255,255,0.02)" />
          <path d={shieldCorePath} fill="rgba(58, 141, 212, 0.08)" stroke="#2c6b9a" strokeWidth="1" />

          <g stroke="#57c4ff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.28">
            {circuitPaths.map((d, index) => (
              <path key={index} d={d} />
            ))}
          </g>

          <g stroke="#7bcfff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.18">
            <line x1="540" y1="330" x2="560" y2="330" />
            <line x1="640" y1="330" x2="660" y2="330" />
            <line x1="580" y1="250" x2="620" y2="250" />
          </g>

          <path
            d="M 560 190 L 640 190 L 650 240 L 640 260 L 600 260 L 560 240 Z"
            fill="rgba(255,255,255,0.04)"
          />
        </motion.g>

        <path
          d="M 600 120 C 760 150 770 280 620 462 L 600 488 L 580 462 C 430 280 440 150 600 120 Z"
          fill="none"
          stroke="#1a2d44"
          strokeWidth="2"
          opacity="0.3"
        />

        <path
          d="M 600 220 C 670 230 680 290 620 370 L 600 388 L 580 370 C 520 290 530 230 600 220 Z"
          fill="none"
          stroke="#1f3551"
          strokeWidth="1.5"
          opacity="0.25"
        />

        <rect x="300" y="180" width="600" height="200" fill="none" stroke="#3e5d7c" strokeWidth="1" opacity="0.08" rx="18" />
      </svg>
    </div>
  );
}
