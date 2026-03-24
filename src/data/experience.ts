export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    slug: "tinkerhub-cev",
    company: "TinkerHub CEV",
    role: "Core Member / Web Explorer",
    period: "2024 - Present",
    description: "Actively contributing to the tech community at College of Engineering Vadakara. Working on various open-source initiatives and organizing technical workshops.",
    tags: ["Community", "Open Source", "Leadership"],
    achievements: [
      "Mentored junior developers in web development basics.",
      "Contributed to ThinKForge, a community funding platform.",
      "Organized workshops on modern web technologies."
    ]
  },
  {
    slug: "freelance-developer",
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description: "Developing custom solutions for clients, ranging from Telegram automation bots to full-scale web applications.",
    tags: ["Python", "React", "Node.js", "Automation"],
    achievements: [
      "Built and deployed high-performance Telegram bots with millions of users.",
      "Developed e-commerce platforms like Sensaflora Online.",
      "Implemented security-focused voter validation systems."
    ]
  }
];
