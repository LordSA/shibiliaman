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
    handle: 'Shibili Aman' 
  },
  { 
    label: 'WhatsApp', 
    href: 'https://wa.me/919037619447', 
    icon: MessageSquare, 
    handle: '+91 90376 19447' 
  },
  { 
    label: 'Twitter', 
    href: 'https://x.com/shibiliii_aman', 
    icon: Twitter, 
    handle: 'Shibili Aman' 
  },
  { 
    label: 'Mail', 
    href: 'mailto:shibiliamantk@gmail.com', 
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
