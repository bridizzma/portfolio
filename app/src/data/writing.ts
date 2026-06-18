export type WritingItem = {
  title: string;
  kind: "Medium Article" | "Detection Writeup" | "Lab Documentation" | "Research Note";
  blurb: string;
  date: string;
  readingTime: string;
  href: string;
};

export const writing: WritingItem[] = [
  {
    title: "Detecting Kerberoasting Without Drowning in Noise",
    kind: "Detection Writeup",
    blurb:
      "How service-ticket request patterns become a high-signal detection, and the tuning that keeps it quiet.",
    date: "Apr 2025",
    readingTime: "8 min",
    href: "https://medium.com/@bridizzma",
  },
  {
    title: "Building a Wazuh Detection Lab from Scratch",
    kind: "Lab Documentation",
    blurb:
      "End-to-end notes on standing up a segmented range with Sysmon and ATT&CK-mapped rules.",
    date: "Dec 2024",
    readingTime: "12 min",
    href: "https://medium.com/@bridizzma",
  },
  {
    title: "Reading the Registry Like a Timeline",
    kind: "Research Note",
    blurb:
      "ShimCache, AmCache, and UserAssist — what each one really proves, and where analysts overreach.",
    date: "Oct 2024",
    readingTime: "9 min",
    href: "https://medium.com/@bridizzma",
  },
  {
    title: "A Practical Approach to Beacon Hunting",
    kind: "Medium Article",
    blurb:
      "Turning a hypothesis about periodic callbacks into a repeatable hunt over proxy telemetry.",
    date: "Aug 2024",
    readingTime: "7 min",
    href: "https://medium.com/@bridizzma",
  },
];
