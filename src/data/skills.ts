export type SkillGroup = {
  title: string;
  caption: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Security Operations",
    caption: "Watching the right signals and acting on them quickly.",
    skills: ["SIEM", "Alert Triage", "Log Analysis", "MITRE ATT&CK"],
  },
  {
    title: "DFIR",
    caption: "Reconstructing what happened from the evidence left behind.",
    skills: [
      "Event Logs",
      "Registry Analysis",
      "Memory Analysis",
      "Prefetch Analysis",
    ],
  },
  {
    title: "Detection Engineering",
    caption: "Turning attacker behavior into durable, testable detections.",
    skills: ["Sigma", "Detection Rules", "Threat Hunting", "Rule Tuning"],
  },
  {
    title: "Automation",
    caption: "Removing the repetitive work so analysis gets the attention.",
    skills: ["Python", "PowerShell", "SOAR", "API Integration"],
  },
];
