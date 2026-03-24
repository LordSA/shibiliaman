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
    image: "/projects/thinkforge.webp",
    link: "https://github.com/LordSA/ThinKForge",
    fullDescription: "Developed ThinKForge, a compact and intuitive crowdfunding web platform that enables creators and project owners to raise funds, share their ideas, and connect with supporters. Built with a focus on simplicity, transparency, and seamless user experience, the platform supports project listings, contribution flows, and campaign tracking in a lightweight web environment.Worked on both frontend and backend components to create a responsive UI and reliable payment logic, reinforcing my full-stack development capabilities and understanding of web-based financial interactions.This project highlights my passion for building tools that empower creators and democratize access to funding opportunities."
  },
  {
    slug: "oneman-onevote",
    title: "Oneman-Onevote",
    description: "A secure voter validation system that uses IDs to prevent duplicate entries and ensure integrity.",
    category: "Security / TypeScript",
    image: "/projects/omov.webp",
    link: "https://github.com/LordSA/Oneman-onevote"
  },
  {
    slug: "fluffy",
    title: "Fluffy",
    description:"testing",
    category: "Discord / Automation",
    image: "/projects/fluffy.webp",
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
    image: "/projects/r1947.webp",
    link:"github.com/LordSA",
    github:"github.com/LordSA",
    fullDescription: "Developed a game prototype for Global Game Jam 2026 using the Unity game engine. Contributed to gameplay development, scene setup, and asset integration while collaborating with a team in a fast-paced 48-hour game development environment."
  },
  {
    slug:"sudo-clean",
    title: "Sudo Clean",
    description: "a declutter tool using python",
    category: "Python / Declutter",
    image: "/projects/sudo.webp",
    link:"https://github.com/LordSA/sudo-clean",
    github:"github.com/LordSA/sudo-clean",
    fullDescription: "Built Sudo Clean, an intelligent desktop automation tool designed to simplify file management through natural language commands. The system allows users to organize, clean, and manage files using simple human-friendly instructions, transforming them into structured file system actions. Developed with a strong focus on usability and safety, the tool supports smart sorting, automated cleanup, and context-aware organization while maintaining transparent operations.This project reflects my interest in building practical AI-driven solutions that improve everyday productivity and digital workflows."
  },
  {
    slug:"whatsatcev",
    title: "Whats@CEV",
    description: "an ai based web",
    category: "AI / Management",
    image: "/projects/wcev.webp",
    link: "https://github.com/LordSA/event-manager",
    github: "github.com/LordSA/event-manager",
    live: "https://whatsatcev.shibili.tech",
    fullDescription: "An AI-powered web platform designed to provide real-time information about events happening at CEV and streamline event management processes. The system aims to centralize event updates, announcements, schedules, and coordination tools into a single accessible interface.It enhances communication between organizers and participants while simplifying event planning, tracking, and engagement through intelligent automation and structured data management."
  },
  {
    slug: "sensaflora",
    title: "Sensaflora Online",
    description:"an e-commerce web",
    category: "E-commerce / Jwellery",
    image: "",
    link: "https://sensaflora.shibili.tech"
  },
  {
    slug: "qr-g",
    title: "Qr Generator",
    description: "A Free Qr generating website",
    category: "Qr / Open Source",
    image: "/projects/qr.webp",
    link: "https://qr.shibili.tech",
    github: "github.com/LordSA/qr-generator",
    live: "https://qr.shibili.tech",
    fullDescription: "Developed a simple and user-friendly QR Code Generator using a clean web interface and a Python backend. The application allows users to instantly generate QR codes for text, links, and other inputs in a fast and accessible way.Focused on minimal design, smooth user experience, and efficient backend processing. Implemented QR generation logic in Python and connected it with a lightweight frontend to ensure seamless interaction."
  },
  {
    slug: "easygrip",
    title : "EasyGrip | Stride",
    description : "A simple and affordable PenGrip designed for individuals with disabilities or limited hand mobility.",
    category: "3D Printing / PenGrip",
    image: "/projects/easyg.webp",
    link: "https://www.linkedin.com/in/shibili-aman-tk/details/projects/",
    fullDescription: "A simple and affordable PenGrip designed for individuals with disabilities or limited hand mobility.It provides a comfortable, secure grip to make writing easier and more accessible.Perfect for anyone struggling to hold a pen due to physical challenges."
  },
  {
    slug: "gyroaid",
    title: "GyroAid | Stride",
    description: "a gyroscopic spoon and plate for neuro divergent who can't eat using normal way",
    category: "Gyro / 3D Printing",
    image: "",
    link: "https://www.linkedin.com/in/shibili-aman-tk/details/projects/"
  },
  {
    slug: "traveltribe",
    title: "TravelTribe",
    description: "a gamified travel app designed to make trip planning fun, intuitive, and engaging.",
    category: "Socail / Travel",
    image: "/projects/travelt.webp",
    link: "",
    fullDescription: "Worked on TravelTribe, a gamified travel app designed to make trip planning fun, intuitive, and engaging. The platform blends social discovery with interactive features to help users explore destinations, track experiences, and connect with other travelers in a playful way.Led the development of core application features using a React frontend and Python backend, focusing on user experience, intuitive design, and scalable architecture. Although the project is temporarily paused, it showcases my ability to build user-centric mobile/web experiences and innovate within the travel tech space."
  }
];
