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
    id: "DFE",
    name: "EC-Council – Digital Forensics Essentials",
    provider: "EC-Council",
    family: "Essentials",
    iconClass: "c-google",
    iconText: "ECL",
    description:
      "Professional certification in digital forensics methodologies, evidence preservation, and forensic investigation techniques. Covers Windows and Linux forensic analysis, incident investigation, and chain-of-custody procedures.",
    context: "Professional Level",
    useCase: "Digital Forensics",
    caps: [
      { t: "Forensics", c: "hi" },
      { t: "Evidence Handling", c: "mid" },
      { t: "Investigation", c: "hi" },
      { t: "#DFIR", c: "lo" },
    ],
  },
  {
    id: "ec-council-EHE",
    name: "EC-Council – Ethical Hacking Essentials",
    provider: "EC-Council",
    family: "Essentials",
    iconClass: "c-mistral",
    iconText: "CEH",
    description:
      "Entry-level certification in ethical hacking and penetration testing. Covers reconnaissance, scanning, enumeration, vulnerability assessment, and exploitation techniques from a defensive perspective.",
    context: "Professional Level",
    useCase: "Ethical Hacking",
    caps: [
      { t: "Pen Testing", c: "hi" },
      { t: "Vulnerability Assessment", c: "hi" },
      { t: "#hacking", c: "lo" },
    ],
  },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="06"
        eyebrow="Certifications"
        title="Professional credentials to validate your expertise."
        lead="A curated selection of leading certification programs with detailed information on prerequisites, exam structure, and career applications."
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
