import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type AiModel = {
  id: string;
  name: string;
  provider?: string;
  family?: string;
  version?: string;
  description?: string;
  contextWindowTokens?: number;
  inputPricePer1KTokensUSD?: number;
  outputPricePer1KTokensUSD?: number;
  supports?: {
    vision?: boolean;
    functionCalling?: boolean;
    toolUse?: boolean;
    streaming?: boolean;
    jsonMode?: boolean;
    audioIn?: boolean;
    audioOut?: boolean;
  };
  tags?: string[];
  meta?: Record<string, unknown>;
};

type Props = {
  models: AiModel[];
  className?: string;
};

export const AiModelsList: React.FC<Props> = ({ models, className = "" }) => {
  const [selected, setSelected] = useState<AiModel | null>(null);

  const sorted = useMemo(() => {
    return [...models].sort((a, b) => {
      return (a.provider || "").localeCompare(b.provider || "");
    });
  }, [models]);

  const formatPrice = (n?: number) =>
    typeof n === "number" ? `$${n.toFixed(4)} / 1K tok` : "—";

  const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium text-ink-subtle ring-1 ring-inset ring-border">
      {children}
    </span>
  );

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((m) => (
          <motion.li
            key={m.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer rounded-lg border border-border bg-surface text-ink shadow-sm p-4 hover:shadow-md transition"
            onClick={() => setSelected(m)}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-ink">{m.name}</span>
              {m.version && <Badge>v{m.version}</Badge>}
            </div>
            <p className="mt-2 text-sm text-ink-muted line-clamp-3">
              {m.description || "No description available"}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink-subtle">
              {m.supports?.streaming && <Badge>Streaming</Badge>}
              {m.supports?.vision && <Badge>Vision</Badge>}
              {m.supports?.functionCalling && <Badge>Functions</Badge>}
              {(m.tags || []).map((t) => (
                <Badge key={t}>#{t}</Badge>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-xl border border-border bg-surface p-6 shadow-lg text-ink"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 rounded-md bg-surface-2 px-2 py-1 text-sm hover:bg-elevated text-ink-subtle hover:text-ink transition"
                onClick={() => setSelected(null)}
              >
                <X size={16} />
              </button>

              <h3 className="text-xl font-semibold mb-2 text-ink">{selected.name}</h3>
              <p className="text-sm text-ink-muted mb-4">
                {selected.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-md border border-border bg-surface-2 p-3">
                  <div className="text-xs text-ink-subtle">Provider</div>
                  <div className="text-ink">{selected.provider || "—"}</div>
                </div>
                <div className="rounded-md border border-border bg-surface-2 p-3">
                  <div className="text-xs text-ink-subtle">Family</div>
                  <div className="text-ink">{selected.family || "—"}</div>
                </div>
                <div className="rounded-md border border-border bg-surface-2 p-3">
                  <div className="text-xs text-ink-subtle">Input</div>
                  <div className="text-ink">{formatPrice(selected.inputPricePer1KTokensUSD)}</div>
                </div>
                <div className="rounded-md border border-border bg-surface-2 p-3">
                  <div className="text-xs text-ink-subtle">Output</div>
                  <div className="text-ink">{formatPrice(selected.outputPricePer1KTokensUSD)}</div>
                </div>
              </div>

              {selected.contextWindowTokens && (
                <div className="mt-4 rounded-md border border-border bg-surface-2 p-3">
                  <div className="text-xs text-ink-subtle">Context Window</div>
                  <div className="text-ink">{selected.contextWindowTokens.toLocaleString()} tokens</div>
                </div>
              )}

              {selected.meta && (
                <div className="mt-4 text-sm">
                  <h4 className="font-medium mb-1 text-ink">Additional Metadata</h4>
                  <div className="space-y-1">
                    {Object.entries(selected.meta).map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-ink-muted">
                        <span className="w-32 text-ink-subtle">{k}:</span>
                        <span>{typeof v === "object" ? JSON.stringify(v) : String(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
