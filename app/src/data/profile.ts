export const profile = {
  name: "Bridizzma Mishra Paudel",
  shortName: "Bridizzma",
  initials: "BP",
  roles: ["Cybersecurity Analyst", "SOC Analyst", "DFIR Enthusiast"],
  location: "Kathmandu, Nepal",
  email: "bridizzma@gmail.com",
  statement:
    "Building detection, investigation, and response capabilities through practical security engineering.",
  links: {
    github: "https://github.com/bridizzma",
    linkedin: "https://linkedin.com/in/bridizzma",
    resume: "/Bridizzma-Mishra-Paudel-Resume.pdf",
    email: "mailto:bridizzma@gmail.com",
  },
  /** small honest signal numbers used sparingly in the hero plate */
  signals: [
    { value: "SOC", label: "Operations" },
    { value: "DFIR", label: "Investigations" },
    { value: "35+", label: "Detections shipped" },
    { value: "6", label: "Certifications" },
  ],
} as const;
