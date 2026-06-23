import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * Subtle security-telemetry backdrop for the hero: a quiet field of timeline
 * gridlines with a few metric traces and sparse "event" markers. Drawn once,
 * very low contrast — meant to be felt, not watched.
 */

const WIDTH = 1200;
const HEIGHT = 560;

/** Deterministic pseudo-random so the trace is stable across renders. */
function seeded(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function buildTrace(seed: number, baseline: number, amp: number, points = 48) {
  const rnd = seeded(seed);
  const step = WIDTH / (points - 1);
  let y = baseline;
  const coords: Array<[number, number]> = [];
  for (let i = 0; i < points; i++) {
    y += (rnd() - 0.5) * amp;
    y = Math.max(baseline - amp * 1.6, Math.min(baseline + amp * 1.6, y));
    coords.push([i * step, y]);
  }
  return coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

export function TelemetryBackground() {
  const reduce = useReducedMotion();

  const traces = useMemo(
    () => [
      { d: buildTrace(7, 150, 34), opacity: 0.5, width: 1.2 },
      { d: buildTrace(23, 300, 52), opacity: 0.32, width: 1 },
      { d: buildTrace(91, 440, 26), opacity: 0.22, width: 1 },
    ],
    []
  );

  const events = useMemo(
    () => [
      { x: 250, y: 150 },
      { x: 560, y: 296 },
      { x: 820, y: 132 },
      { x: 1010, y: 318 },
    ],
    []
  );

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
          <linearGradient id="trace-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="35%" stopColor="var(--color-accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="vignette" cx="50%" cy="42%" r="78%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="70%" stopColor="#f8fafc" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.28" />
          </radialGradient>
        </defs>

        {/* timeline gridlines */}
        <g stroke="#0f172a" strokeOpacity="0.08">
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              x2={WIDTH}
              y1={(HEIGHT / 7) * (i + 0.5)}
              y2={(HEIGHT / 7) * (i + 0.5)}
            />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line
              key={`v-${i}`}
              y1="0"
              y2={HEIGHT}
              x1={(WIDTH / 13) * (i + 0.5)}
              x2={(WIDTH / 13) * (i + 0.5)}
            />
          ))}
        </g>

        {/* metric traces */}
        {traces.map((t, i) => (
          <motion.polyline
            key={i}
            points={t.d}
            fill="none"
            stroke="url(#trace-fade)"
            strokeWidth={t.width}
            strokeOpacity={t.opacity}
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduce ? undefined : { pathLength: 1, opacity: t.opacity }}
            transition={{ duration: 2.2, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* sparse event markers, gently pulsing */}
        {events.map((e, i) => (
          <g key={`e-${i}`}>
            <circle cx={e.x} cy={e.y} r="2.5" fill="var(--color-accent)" />
            {!reduce && (
              <motion.circle
                cx={e.x}
                cy={e.y}
                r="2.5"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 6, opacity: 0 }}
                transition={{
                  duration: 3.4,
                  delay: 1 + i * 0.7,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeOut",
                }}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            )}
          </g>
        ))}

        <rect width={WIDTH} height={HEIGHT} fill="url(#vignette)" />
      </svg>
    </div>
  );
}
