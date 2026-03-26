export interface Position {
  role: string;
  period: string;
  description: string;
  achievements?: string[];
  tags: string[];
}

export interface Experience {
  slug: string;
  company: string;
  positions: Position[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    slug: "ieee-link",
    company: "IEEE LINK",
    positions: [
      {
        role: "Design Lead",
        period: "2026 - Present",
        description: "As the Design Lead at IEEE LINK, I oversee the visual direction and creative output of the community, ensuring consistency across all design touchpoints. I lead and mentor design teams to craft impactful visuals for events, campaigns, and digital platforms, aligning creativity with strategic communication to enhance engagement and brand identity.",
        tags: ["Community", "IEEE", "Leadership"]
      }
    ]
  },
  {
    slug: "tinkerhub-cev",
    company: "TinkerHub CEV",
    positions: [
      {
        role: "Outreach Lead",
        period: "2025 - Present",
        description: "As the Outreach Lead at TinkerHub CEV, I drive the chapter’s public presence by blending strategy, storytelling, and design. I lead cross-functional media and design teams to craft cohesive branding and impactful communication across platforms.My role focuses on identifying passionate student innovators and amplifying their work through well-planned outreach campaigns. By translating technical projects into engaging narratives, I ensure that ideas don’t just stay within labs—but reach, resonate with, and inspire a broader audience.",
        tags: ["Community", "Open Source", "Leadership"],
        achievements: [
          "Scaled TinkerHub CEV’s visibility through strategic outreach and storytelling",
          "Executed impactful campaigns that amplified student innovations",
          "Built and led a cohesive media & design team for consistent branding.",
          "Organized workshops on modern web technologies."
        ]
      }
    ]
  },
  {
    slug: "tinkerhub-cev",
    company: "TinkerHub CEV",
    positions: [
      {
        role: "Outreach Lead",
        period: "2025 - Present",
        description: "As the Outreach Lead at TinkerHub CEV, I drive the chapter’s public presence by blending strategy, storytelling, and design. I lead cross-functional media and design teams to craft cohesive branding and impactful communication across platforms.My role focuses on identifying passionate student innovators and amplifying their work through well-planned outreach campaigns. By translating technical projects into engaging narratives, I ensure that ideas don’t just stay within labs—but reach, resonate with, and inspire a broader audience.",
        tags: ["Community", "Open Source", "Leadership"],
        achievements: [
          "Scaled TinkerHub CEV’s visibility through strategic outreach and storytelling",
          "Executed impactful campaigns that amplified student innovations",
          "Built and led a cohesive media & design team for consistent branding.",
          "Organized workshops on modern web technologies."
        ]
      }
    ]
  },
  {
    slug: "freelance-developer",
    company: "Freelance",
    positions: [
      {
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
    ]
  }
];
