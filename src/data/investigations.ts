export type Investigation = {
  id: string;
  caseId: string;
  title: string;
  category: string;
  objective: string;
  methodology: string[];
  findings: string;
  outcome: string;
  techniques: string[];
};

export const investigations: Investigation[] = [
  {
    id: "malware-analysis",
    caseId: "CASE-0xA1",
    title: "Loader Behavior in a Malicious Document",
    category: "Malware Analysis",
    objective:
      "Determine what a suspicious macro-enabled document does on open and whether it establishes a foothold.",
    methodology: [
      "Static triage of the document structure and embedded macro streams.",
      "Detonation in an isolated VM with process, network, and file monitoring.",
      "Mapped observed behavior to ATT&CK and extracted host and network indicators.",
    ],
    findings:
      "The macro spawned a living-off-the-land script that pulled a second-stage payload and attempted a scheduled-task persistence. Network beacon resolved to a low-reputation host.",
    outcome:
      "Produced a complete IOC set and a Sigma rule for the parent-child process chain that detected the technique in the lab SIEM.",
    techniques: ["T1566.001", "T1059", "T1053.005"],
  },
  {
    id: "registry-forensics",
    caseId: "CASE-0xB4",
    title: "Reconstructing Activity from Registry Hives",
    category: "Registry Forensics",
    objective:
      "Establish what executed and what was connected on a host where logs had been cleared.",
    methodology: [
      "Parsed SYSTEM, SOFTWARE, and NTUSER hives offline.",
      "Correlated UserAssist, ShimCache, and AmCache for execution evidence.",
      "Reviewed mounted-device and USBSTOR keys for removable-media history.",
    ],
    findings:
      "Execution artifacts placed an unknown binary on the host well before the reported incident, and a removable device was attached within the same window.",
    outcome:
      "Rebuilt a defensible execution timeline from registry alone, filling the gap left by cleared event logs.",
    techniques: ["T1112", "T1070.001", "T1012"],
  },
  {
    id: "threat-hunting",
    caseId: "CASE-0xC7",
    title: "Hunting Beacon-Like Outbound Traffic",
    category: "Threat Hunting",
    objective:
      "Proactively find command-and-control activity not flagged by existing alerts.",
    methodology: [
      "Formed a hypothesis around regular-interval outbound connections.",
      "Aggregated proxy and firewall telemetry to surface periodic, low-volume beacons.",
      "Profiled JA3 and user-agent rarity to separate noise from candidates.",
    ],
    findings:
      "A small set of hosts showed jittered, fixed-interval callbacks to a newly registered domain — consistent with a C2 beacon rather than normal software telephony.",
    outcome:
      "Confirmed candidates were escalated and the pattern became a scheduled hunt and a new detection.",
    techniques: ["T1071.001", "T1571", "T1573"],
  },
  {
    id: "persistence-analysis",
    caseId: "CASE-0xD2",
    title: "Enumerating Persistence on a Compromised Host",
    category: "Persistence Analysis",
    objective:
      "Find every mechanism an attacker used to survive reboot so remediation is complete, not partial.",
    methodology: [
      "Enumerated Run keys, services, scheduled tasks, and WMI event subscriptions.",
      "Diffed autoruns against a known-good baseline of the same image.",
      "Validated each finding against execution and creation timestamps.",
    ],
    findings:
      "Two independent persistence mechanisms were present — a scheduled task and a WMI event subscription — suggesting deliberate redundancy by the actor.",
    outcome:
      "Delivered a remediation list covering all footholds, preventing the silent re-entry that single-fix cleanups invite.",
    techniques: ["T1547.001", "T1053.005", "T1546.003"],
  },
  {
    id: "phishing-investigation",
    caseId: "CASE-0xE9",
    title: "Tracing a Credential-Harvesting Campaign",
    category: "Phishing Investigation",
    objective:
      "Scope a reported phishing email — who received it, who interacted, and what was at risk.",
    methodology: [
      "Analyzed headers and authentication results to confirm spoofing and origin.",
      "Detonated the link in a sandbox to capture the harvesting page and infrastructure.",
      "Queried mail and proxy logs to identify the full recipient and click set.",
    ],
    findings:
      "The campaign impersonated a trusted brand and harvested credentials via a cloned login page; a subset of users had submitted credentials.",
    outcome:
      "Drove targeted password resets and an MFA review for affected users, and blocked the infrastructure across controls.",
    techniques: ["T1566.002", "T1598", "T1056.003"],
  },
];
