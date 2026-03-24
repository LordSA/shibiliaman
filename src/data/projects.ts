export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  github?: string;
  live?: string;
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    slug: "eren-yeager-adv",
    title: "Eren Yeager ADV",
    description: "A high-performance Telegram bot for advance group management and instant movie search.",
    category: "Python / Automation",
    image: "https://telegra.ph/file/7226c9d57dc698158bab2.jpg",
    link: "https://github.com/LordSA/Eren-Yeager-ADV",
    github: "github.com/LordSA/Eren-Yeager-ADV",
    live: "https://t.me/mwpro2_bot",
    fullDescription: "Contributed to the development of Eren-Yeager-ADV, a high-performance Telegram bot built for advanced group management and instant movie search/filtering. The bot leverages asynchronous Python and efficient database design to deliver fast, scalable features including auto-filtering, IMDB lookups, group admin tools, and typo-tolerant search — all optimized for large-scale group communities. Worked with modern async programming patterns and real-world bot architecture while implementing performance-oriented automation for social platforms."
  },
  {
    slug: "thinkforge",
    title: "ThinKForge",
    description: "A funding website platform built as a web application using core web technologies.",
    category: "Web / TinkerHub",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/LordSA/ThinKForge"
  },
  {
    slug: "oneman-onevote",
    title: "Oneman-Onevote",
    description: "A secure voter validation system that uses IDs to prevent duplicate entries and ensure integrity.",
    category: "Security / TypeScript",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/LordSA/Oneman-onevote"
  },
  {
    slug: "fluffy",
    title: "Fluffy",
    description:"testing",
    category: "Discord / Automation",
    image: "",
    link: "https://github.com/LordSA/Fluffy"
  },
  {
    slug: "lullaby-down-below",
    title: "Lullaby Down Below",
    description: "Java game",
    category: "Game / Java",
    image:"",
    link: "https://github.com/Muhsin-603/lullaby-down-below",
    github: "github.com/Muhsin-603/lullaby-down-below"
  },
  {
    slug: "reclamation",
    title: "Reclamation 1947",
    description: "unity game for game jam",
    category: "Game / Unity",
    image: "",
    link:"github.com/LordSA",
    github:"github.com/LordSA"
  },
  {
    slug:"sudo-clean",
    title: "Sudo Clean",
    description: "a declutter tool using python",
    category: "Python / Declutter",
    image: "",
    link:"https://github.com/LordSA/sudo-clean",
    github:"github.com/LordSA/sudo-clean"
  },
  {
    slug:"whatsatcev",
    title: "Whats@CEV",
    description: "an ai based web",
    category: "AI / Management",
    image: "",
    link: "https://github.com/LordSA/event-manager",
    github: "github.com/LordSA/event-manager",
    live: "https://whatsatcev.shibili.tech"
  }
];
