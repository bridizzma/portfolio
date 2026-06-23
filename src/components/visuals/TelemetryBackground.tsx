import { motion, useReducedMotion } from "framer-motion";

const WIDTH = 1200;
const HEIGHT = 560;

const shieldOuterPath = `M 600 110
  C 525 110 500 170 500 250
  L 500 330
  C 530 410 600 488 600 488
  C 600 488 670 410 700 330
  L 700 250
  C 700 170 675 110 600 110
  Z`;

const shieldInnerPath = `M 600 150
  C 564 150 536 182 536 226
  L 536 270
  L 592 388
  L 600 402
  L 608 388
  L 664 270
  L 664 226
  C 664 182 636 150 600 150
  Z`;

const shieldBandPath = `M 560 198
  L 640 198
  C 648 198 656 206 656 214
  L 656 238
  L 600 274
  L 544 238
  L 544 214
  C 544 206 552 198 560 198
  Z`;

const shieldPlatePaths = [
  `M 495 252 L 525 266 L 525 300 L 505 308 L 495 308 Z`,
  `M 705 252 L 675 266 L 675 300 L 695 308 L 705 308 Z`,
  `M 560 262 L 640 262 L 660 300 L 640 312 L 560 312 L 540 300 Z`,
];

const topologyLines = [
  "M 96 128 H 220",
  "M 104 176 H 192",
  "M 1104 132 H 980",
  "M 1110 460 H 980",
  "M 200 96 V 184",
  "M 990 96 V 208",
  "M 310 460 V 382",
  "M 890 442 V 362",
];

const telemetryNodes = [
  { x1: 200, y1: 140, x2: 260, y2: 140 },
  { x1: 930, y1: 120, x2: 990, y2: 120 },
  { x1: 420, y1: 420, x2: 470, y2: 420 },
  { x1: 780, y1: 432, x2: 840, y2: 432 },
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
            <stop offset="0%" stopColor="#090b0f" />
            <stop offset="42%" stopColor="#07090d" />
            <stop offset="100%" stopColor="#020305" />
          </radialGradient>

          <linearGradient id="panel-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121921" />
            <stop offset="35%" stopColor="#171f28" />
            <stop offset="75%" stopColor="#0b1118" />
            <stop offset="100%" stopColor="#10171f" />
          </linearGradient>

          <linearGradient id="panel-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(84, 163, 255, 0.18)" />
            <stop offset="40%" stopColor="rgba(70, 130, 204, 0.08)" />
            <stop offset="100%" stopColor="rgba(86, 187, 255, 0.12)" />
          </linearGradient>

          <linearGradient id="glow-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4faaff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#1a2e4c" stopOpacity="0.0" />
          </linearGradient>

          <pattern id="wide-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>

          <filter id="softglow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feBlend in="SourceGraphic" in2="blur" mode="screen" />
          </filter>
        </defs>

        <rect width={WIDTH} height={HEIGHT} fill="url(#bg)" />
        <rect width={WIDTH} height={HEIGHT} fill="url(#wide-grid)" opacity="0.06" />

        <g opacity="0.16" stroke="#5ea7ff" strokeWidth="1" strokeLinecap="round">
          {topologyLines.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        <g opacity="0.12" stroke="#84b9ff" strokeWidth="0.8" strokeLinecap="round">
          {telemetryNodes.map((node, index) => (
            <path key={index} d={`M ${node.x1} ${node.y1} H ${node.x2}`} />
          ))}
        </g>

        <circle cx="600" cy="270" r="216" fill="rgba(41, 60, 88, 0.08)" />
        <circle cx="600" cy="270" r="250" fill="url(#glow-ring)" />

        <motion.g
          initial={reduce ? undefined : { opacity: 0.96, scale: 0.996 }}
          animate={reduce ? undefined : { opacity: [0.96, 1, 0.96], scale: [0.996, 1, 0.996] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={shieldOuterPath} fill="url(#panel-metal)" stroke="url(#panel-edge)" strokeWidth="2" />
          <path d={shieldInnerPath} fill="rgba(255,255,255,0.02)" />
          <path d={shieldBandPath} fill="rgba(64, 138, 215, 0.07)" stroke="#2c6c9c" strokeWidth="1" />

          {shieldPlatePaths.map((d, index) => (
            <path key={index} d={d} fill="rgba(255,255,255,0.03)" />
          ))}

          <g stroke="#5fb8ff" strokeWidth="1" strokeLinecap="round" opacity="0.22">
            <path d="M 520 260 H 580" />
            <path d="M 620 260 H 680" />
            <path d="M 560 294 V 318" />
            <path d="M 640 294 V 318" />
            <path d="M 540 370 H 560" />
            <path d="M 640 370 H 660" />
            <path d="M 590 220 H 610" />
            <path d="M 590 322 H 610" />
          </g>

          <path
            d="M 560 194 L 640 194 L 650 236 L 640 254 L 600 254 L 560 236 Z"
            fill="rgba(255,255,255,0.045)"
          />
        </motion.g>

        <path
          d="M 600 118 C 760 148 772 290 620 460 L 600 488 L 580 460 C 428 290 440 148 600 118 Z"
          fill="none"
          stroke="#102339"
          strokeWidth="2"
          opacity="0.28"
        />

        <path
          d="M 600 220 C 670 234 680 292 620 368 L 600 386 L 580 368 C 520 292 530 234 600 220 Z"
          fill="none"
          stroke="#122d52"
          strokeWidth="1.4"
          opacity="0.24"
        />

        <rect x="280" y="168" width="640" height="216" fill="none" stroke="#2c4f71" strokeWidth="1" opacity="0.08" rx="22" />
      </svg>
    </div>
  );
}
