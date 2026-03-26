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
        period: "Mar 2026 - Present",
        description: "As the Design Lead at IEEE LINK, I oversee the visual direction and creative output of the community, ensuring consistency across all design touchpoints. I lead and mentor design teams to craft impactful visuals for events, campaigns, and digital platforms, aligning creativity with strategic communication to enhance engagement and brand identity.",
        tags: ["Community", "IEEE", "Leadership"]
      }
    ]
  },
  {
    slug: "lucidpixl",
    company: "LucidPixl Designs",
    positions: [
      {
        role: "Co-Lead",
        period: "Oct 2025 - Present",
        description: "As the Co-Lead of LucidPixl Designs, I drive the creative vision and oversee the execution of design projects across branding, digital, and visual media. I collaborate with teams and clients to transform ideas into compelling visual experiences, ensuring high-quality output while fostering a culture of creativity, innovation, and design excellence.",
        tags: ["Design", "Visual Branding", "Creative Strategy"],
        // achievements: [
        //   "Delivered impactful design solutions for events, campaigns, and startup initiatives.",
        //   "Collaborated with cross-functional teams to maintain consistent and engaging branding.",
        // ]
      }
    ]
  },
  {
    slug: "tinkerhub-cev",
    company: "TinkerHub CEV",
    positions: [
      {
        role: "Outreach Lead",
        period: "Jul 2025 - Present",
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
    slug: "ql12",
    company: "Quasso Liberum XI",
    positions: [
      {
        role: "Designer",
        period: "Nov 2025 - Feb 2026",
        description: "As a Designer for Quasso Liberum XI, I created visually engaging assets that shaped the event’s identity and audience experience. I contributed to branding, promotional creatives, and digital content, ensuring consistency and impact across all touchpoints while supporting the event’s outreach and engagement goals.",
        tags: ["Techfest", "Visual Branding", "Design"],
        // achievements: [
        //   "Scaled TinkerHub CEV’s visibility through strategic outreach and storytelling",
        //   "Executed impactful campaigns that amplified student innovations",
        //   "Built and led a cohesive media & design team for consistent branding.",
        //   "Organized workshops on modern web technologies."
        // ]
      }
    ]
  },
  {
    slug: "iedccev",
    company: "IEDC CEV",
    positions: [
      {
        role: "Design Co-Lead",
        period: "Feb 2025 - Mar 2026",
        description: "As the Sub Lead of Design at IEDC CEV, I contribute to shaping the creative direction of the community by designing impactful visuals for events, campaigns, and startup initiatives. I collaborate closely with cross-functional teams to translate ideas into engaging designs, ensuring consistency in branding while supporting innovation-driven activities within the ecosystem.",
        tags: ["Teamwork", "Visual Branding", "Creative Strategy"],
        achievements: [
          "Delivered impactful design solutions for events, campaigns, and startup initiatives.",
          "Collaborated with cross-functional teams to maintain consistent and engaging branding.",
        ]
      }
    ]
  },
  {
    slug: "letsupgrade",
    company: "LetsUpgrade",
    positions: [
      {
        role: "Sudent Ambassador",
        period: "Feb 2025 - Nov 2025",
        description: "As a Student Ambassador at Let'sUpgrade, I promote learning initiatives and empower students to upskill through workshops, programs, and community engagement. I drive outreach activities, encourage participation, and act as a bridge between the platform and the student community, helping expand its reach and impact.",
        tags: ["Community Building", "Outreach", "Growth"],
        achievements: [
          "Increased student participation through targeted outreach and engagement initiatives.",
          "Successfully promoted learning programs and workshops to expand community reach.",
        ]
      }
    ]
  },
  {
    slug: "hctmm",
    company: "HCTMM Medtech Private Limited",
    positions: [
      {
        role: "UI/UX Design Intern",
        period: "Jun 2025 - Oct 2025",
        description: "As a UI/UX Designer for HCTMM, I focused on crafting intuitive and user-centered digital experiences by understanding user needs and translating them into functional, visually engaging interfaces. I worked on improving usability, optimizing user flows, and ensuring a seamless interaction experience through thoughtful design decisions and iterative prototyping.",
        tags: ["UI/UX Design", "User Research", "Prototyping"],
        achievements: [
          "Designed user-centered interfaces that improved usability and overall user experience.",
          "Contributed to wireframing, prototyping, and iterative design processes during the internship."
        ]
      }
    ]
  },
  {
    slug: "csicev",
    company: "CSI SB CEV",
    positions: [
      {
        role: "Design Lead",
        period: "May 2025 - Present",
        description: "As the Head Design Lead at CSI SB CEV, I lead the creative direction and oversee all design outputs of the chapter. I manage and mentor the design team to produce impactful visuals for events, campaigns, and communications, ensuring consistent branding while enhancing the overall engagement and identity of the community.",
        tags: ["Design Leadership", "Branding", "Creative Direction"],
        achievements: [
          "Led and scaled the design team to deliver high-quality creatives across multiple initiatives.",
          "Established consistent visual branding for events and communications.",
        ]
      }
    ]
  }
  // {
  //   slug: "freelance-developer",
  //   company: "Freelance",
  //   positions: [
  //     {
  //       role: "Full-Stack Developer",
  //       period: "2023 - Present",
  //       description: "Developing custom solutions for clients, ranging from Telegram automation bots to full-scale web applications.",
  //       tags: ["Python", "React", "Node.js", "Automation"],
  //       achievements: [
  //         "Built and deployed high-performance Telegram bots with millions of users.",
  //         "Developed e-commerce platforms like Sensaflora Online.",
  //         "Implemented security-focused voter validation systems."
  //       ]
  //     }
  //   ]
  // }
];
