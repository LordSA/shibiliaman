import { Github, Linkedin, Twitter, Mail, MessageSquare, Send } from '@lucide/astro';

export interface SocialLink {
  label: string;
  href: string;
  icon: any;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  { 
    label: 'GitHub', 
    href: 'https://github.com/LordSA', 
    icon: Github, 
    handle: '@LordSA' 
  },
  { 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/shibili-aman-tk', 
    icon: Linkedin, 
    handle: 'Shibili Aman TK' 
  },
  { 
    label: 'Twitter', 
    href: 'https://x.com/shibiliii_aman', 
    icon: Twitter, 
    handle: 'Shibili Aman' 
  },
  { 
    label: 'Mail', 
    href: 'mailto:shibiiliamantk@gmail.com', 
    icon: Mail, 
    handle: 'shibiliamantk@gmail.com' 
  },
  {
    label: 'Telegram',
    href: 'https://t.me/shibili_offline',
    icon: Send,
    handle: 'Shibili [Offline]'
  }
];
