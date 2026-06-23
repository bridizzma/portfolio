import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AiModelsList } from "@/components/ui/ai-models-preview";
import { viewportOnce } from "@/lib/motion";

const aiModels = [
  {
    id: "fortinet-nse6",
    name: "Fortinet NSE 6 – FortiSIEM 7.2 Analyst",
    provider: "Fortinet",
    family: "Network Security Expert",
    description: "Advanced certification demonstrating expertise in FortiSIEM 7.2 platform operations, threat detection, and security event analysis. Specialized knowledge in enterprise SIEM deployment and incident response workflows.",
    context: "Expert Level",
    usecase : "SIEM Operations",
    outputPricePer1KTokensUSD: 0.015,
    supports: { SIEM: true, "Threat Detection": true, functionCalling: true },
  },
  {
    id: "fortinet-nse123",
    name: "Fortinet NSE 1, 2, 3 – Network Security Expert (Certified Associate)",
    provider: "Fortinet",
    family: "Network Security Expert",
    description: "Comprehensive foundational and intermediate certifications covering network security fundamentals, threat prevention, and security architecture. Demonstrates competency across Fortinet security ecosystem.",
    contextWindowTokens: 200000,
    inputPricePer1KTokensUSD: 0.015,
    outputPricePer1KTokensUSD: 0.075,
    supports: { streaming: true },
    tags: ["reasoning"],
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    family: "Gemini",
    description: "State-of-the-art multimodal reasoning and search.",
    contextWindowTokens: 1000000,
    inputPricePer1KTokensUSD: 0.01,
    outputPricePer1KTokensUSD: 0.03,
    supports: { vision: true, toolUse: true },
    tags: ["multimodal"],
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    provider: "Mistral",
    description: "Efficient and cost-effective model with open weights.",
    inputPricePer1KTokensUSD: 0.002,
    outputPricePer1KTokensUSD: 0.006,
    tags: ["open-weight", "fast"],
  },
  {
    id: "llama-3.1-70b",
    name: "LLaMA 3.1 70B",
    provider: "Meta",
    family: "LLaMA",
    description: "Open-weight with high accuracy across benchmarks.",
    contextWindowTokens: 128000,
    inputPricePer1KTokensUSD: 0.002,
    outputPricePer1KTokensUSD: 0.004,
    tags: ["open-weight"],
  },
  {
    id: "mixtral-8x7b",
    name: "Mixtral 8x7B",
    provider: "Mistral",
    description: "Sparse mixture of experts, balanced speed and quality.",
    tags: ["sparse", "efficient"],
  },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="06"
        eyebrow="AI Models Reference"
        title="Production-grade models at a glance."
        lead="A curated selection of leading AI models with pricing, capabilities, and context window information."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14"
      >
        <AiModelsList models={aiModels} />
      </motion.div>
    </Section>
  );
}
