export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status: "Earned" | "In Progress";
  focus: string;
};

export const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2024",
    status: "Earned",
    focus: "Core security principles and operations",
  },
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC²",
    year: "2024",
    status: "Earned",
    focus: "Security foundations and best practice",
  },
  {
    name: "Blue Team Level 1 (BTL1)",
    issuer: "Security Blue Team",
    year: "2025",
    status: "In Progress",
    focus: "Hands-on SOC, DFIR, and threat intel",
  },
  {
    name: "Certified Incident Handler",
    issuer: "Practical / Vendor",
    year: "2025",
    status: "In Progress",
    focus: "Incident response lifecycle",
  },
  {
    name: "Splunk Core Certified User",
    issuer: "Splunk",
    year: "2024",
    status: "Earned",
    focus: "Search, dashboards, and data models",
  },
  {
    name: "TryHackMe SOC Level 1",
    issuer: "TryHackMe",
    year: "2023",
    status: "Earned",
    focus: "Applied blue-team fundamentals",
  },
];
