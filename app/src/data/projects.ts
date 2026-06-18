export type Project = {
  id: string;
  name: string;
  kicker: string;
  year: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "dfir-framework",
    name: "DFIR Framework",
    kicker: "Investigation tooling",
    year: "2025",
    challenge:
      "Live-response evidence collection was manual and inconsistent — every investigation started from a blank page and risked missing volatile artifacts.",
    approach:
      "Designed a modular collection framework that orchestrates acquisition of event logs, registry hives, prefetch, and memory into a single, hashed, timestamped evidence package with a structured manifest.",
    outcome:
      "Reduced first-hour triage collection from a manual checklist to a single repeatable run, with chain-of-custody metadata preserved for every artifact.",
    tools: ["Python", "PowerShell", "Velociraptor", "YARA"],
    repo: "https://github.com/bridizzma/dfir-framework",
  },
  {
    id: "wazuh-lab",
    name: "Wazuh Home Lab",
    kicker: "Detection engineering lab",
    year: "2024",
    challenge:
      "Detections written without a safe place to test them are guesses. I needed a controlled range to emulate techniques and prove coverage.",
    approach:
      "Built a segmented lab with Windows and Linux endpoints, Sysmon with a tuned config, and Wazuh as the SIEM. Mapped every custom rule to a MITRE ATT&CK technique and validated it against emulated activity.",
    outcome:
      "A reproducible range where new detections are tested against real telemetry before they ever reach production tuning.",
    tools: ["Wazuh", "Sysmon", "MITRE ATT&CK", "Atomic Red Team"],
    repo: "https://github.com/bridizzma/wazuh-lab",
  },
  {
    id: "ioc-extractor",
    name: "IOC Extraction Tool",
    kicker: "Security automation",
    year: "2024",
    challenge:
      "Analysts copy indicators out of reports and emails by hand — slow, error-prone, and hard to feed into tooling at scale.",
    approach:
      "Wrote a Python utility that parses unstructured text and documents, defangs and normalizes indicators, deduplicates them, and exports clean STIX-friendly output ready for ingestion.",
    outcome:
      "Turned a tedious copy-paste task into a one-command pipeline that produces consistent, machine-readable indicator sets.",
    tools: ["Python", "Regex", "STIX", "MISP"],
    repo: "https://github.com/bridizzma/ioc-extractor",
  },
  {
    id: "ad-monitoring",
    name: "Active Directory Monitoring",
    kicker: "Identity detection",
    year: "2025",
    challenge:
      "Active Directory is the highest-value target in most environments, yet identity attacks hide inside ordinary authentication noise.",
    approach:
      "Built a monitoring view focused on the signals that matter — Kerberoasting, suspicious group changes, DCSync patterns, and anomalous logon behavior — backed by detections mapped to ATT&CK.",
    outcome:
      "A focused identity-threat surface that highlights the handful of events worth an analyst's attention instead of raw log volume.",
    tools: ["Windows Event Logs", "Sigma", "PowerShell", "BloodHound"],
    repo: "https://github.com/bridizzma/ad-monitoring",
  },
  {
    id: "ir-handbook",
    name: "Incident Response Handbook",
    kicker: "Process & documentation",
    year: "2024",
    challenge:
      "Under pressure, teams improvise. Without agreed steps, incidents take longer and evidence gets lost.",
    approach:
      "Authored a practical IR handbook covering preparation, detection, containment, eradication, and recovery — with concrete runbooks for the incident types we actually see.",
    outcome:
      "A shared reference that turns ad-hoc response into a calm, repeatable process with clear ownership at each phase.",
    tools: ["NIST 800-61", "Runbooks", "Markdown", "Tabletop Exercises"],
    repo: "https://github.com/bridizzma/ir-handbook",
  },
];
