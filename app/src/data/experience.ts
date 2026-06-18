export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "SOC Analyst",
    org: "CryptoGen Nepal",
    period: "2024 — Present",
    location: "Kathmandu",
    summary:
      "Front-line detection and response across a multi-tenant managed SOC, owning alert quality and the automation that keeps triage fast.",
    achievements: [
      "Authored and tuned SIEM correlation rules that cut false-positive volume on noisy alert classes by roughly 40%.",
      "Built FortiSOAR playbooks to auto-enrich alerts with threat intel and asset context before they reach an analyst.",
      "Investigated endpoint and network incidents end to end — scoping, containment, and written post-incident reporting.",
    ],
    stack: ["FortiSIEM", "FortiSOAR", "Wazuh", "MITRE ATT&CK", "Threat Intel"],
  },
  {
    role: "SOC Analyst Intern",
    org: "CryptoGen Nepal",
    period: "2024",
    location: "Kathmandu",
    summary:
      "Built the operational foundations of the role — sensor deployment, log onboarding, and disciplined alert triage.",
    achievements: [
      "Deployed and validated endpoint agents and log forwarders across test fleets, confirming parsing and field mapping.",
      "Triaged daily alert queues and escalated true positives with concise, reproducible evidence trails.",
      "Documented recurring investigation steps into repeatable runbooks for the wider team.",
    ],
    stack: ["Log Onboarding", "Alert Triage", "Sysmon", "Windows Event Logs"],
  },
  {
    role: "Independent Security Practitioner",
    org: "Home Lab & Self-Directed Research",
    period: "2022 — Present",
    summary:
      "A continuously rebuilt lab where I prototype detections, reproduce attacker techniques, and write up what I find.",
    achievements: [
      "Stood up a Wazuh + Sysmon detection lab to safely emulate ATT&CK techniques and validate rule coverage.",
      "Reproduced persistence, credential-access, and phishing chains, then engineered detections against them.",
      "Published investigation writeups and Sigma rules to share methodology and reasoning, not just results.",
    ],
    stack: ["Wazuh", "Sysmon", "Sigma", "Python", "PowerShell"],
  },
];
