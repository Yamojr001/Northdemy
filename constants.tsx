
import React from 'react';
import { 
  GraduationCap, 
  Rocket, 
  ShieldCheck, 
  Code, 
  TrendingUp, 
  Users,
  Building2,
  Globe,
  Award
} from 'lucide-react';
import { Service, TeamMember, BlogPost, Testimonial } from './types';


export const COMPANY_DETAILS = {
  name: "NorthDemy Limited",
  address: "No 14 Nana Plaza Opposite Sabon Gidan Galadiman Dutse, Jigawa, Nigeria",
  phone: "08099072748",
  email: "info@northdemy.com",
  socials: {
    linkedin: "https://www.linkedin.com/groups/15073006",
    twitter: "https://x.com/NorthDemy",
    facebook: "https://www.facebook.com/share/17Uz9YbQAZ/",
    instagram: "https://www.instagram.com/north_demy?igsh=cDMyZG9yc2wzNmJo"
  }
};

export const SERVICES: Service[] = [
  {
    id: "training",
    title: "Tech Training",
    description: "World-class programs in software development, data science, AI, and emerging technologies.",
    icon: "GraduationCap",
    link: "/services/training"
  },
  {
    id: "incubation",
    title: "Startup Incubation",
    description: "End-to-end support for early-stage startups from ideation to funding readiness.",
    icon: "Rocket",
    link: "/services/incubation"
  },
  {
    id: "digital-safety",
    title: "Digital Safety",
    description: "Comprehensive cybersecurity training and digital protection solutions.",
    icon: "ShieldCheck",
    link: "/services/digital-safety"
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description: "Strategic technology advisory for enterprises and government agencies.",
    icon: "Code",
    link: "/services/consulting"
  },
  {
    id: "funding",
    title: "Funding Access",
    description: "Connect with investors and access funding opportunities for your venture.",
    icon: "TrendingUp",
    link: "/services/funding"
  },
  {
    id: "corporate",
    title: "Corporate Training",
    description: "Custom training solutions for organizations to upskill their workforce.",
    icon: "Users",
    link: "/services/corporate"
  }
];

export const PROGRAMS = [
  {
    id: "swe",
    title: "Software Engineering",
    duration: "6 Months",
    level: "Intermediate",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ds",
    title: "Data Science & AI",
    duration: "4 Months",
    level: "Advanced",
    category: "Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cyber",
    title: "Cyber Security",
    duration: "3 Months",
    level: "Intermediate",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  }
];

export const PARTNERS = [
  { name: "ONDI", category: "Technical", description: "Providing critical technical framework and infrastructure support for digital growth." },
  { name: "NITDA", category: "Training & Facilitation", description: "Strategic partnership in national IT development and capacity building initiatives." },
  { name: "DEEPTECH", category: "Training & Facilitation", description: "Deep technology research and facilitation partner for advanced technical programs." },
  { name: "IHATCH", category: "Technical", description: "Supporting innovation through technical mentorship and resource accessibility." },
  { name: "World Bank", category: "Funding", description: "International funding partner enabling large-scale digital transformation projects." },
  { name: "Right-click IT SOLUTION", category: "Technical", description: "Strategic IT services and infrastructure implementation partner." },
  { name: "Defense Hub", category: "Technical", description: "Focused on cybersecurity defense mechanisms and technical safety standards." },
  { name: "AUA Technologies", category: "Technical", description: "Hardware and system integration technical partners." },
  { name: "Farashi", category: "Technical", description: "Technical implementation and digital platform support partner." },
];

export const ALL_TEAM: TeamMember[] = [
  // Leadership
  {
    id: "1",
    name: "Said Ismail Aliyu",
    role: "Project Director & Director Engagement",
    image: "https://prep-ai.xyz/ogasaid/oga.png",
    category: "leadership",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: "2",
    name: "Veronica idakpo",
    role: "Project Manager",
    image: "https://prep-ai.xyz/ogasaid/vero.jpeg",
    category: "leadership",
    socials: { linkedin: "#" }
  },
  // Board
  {
    id: "b1",
    name: "Haj. Na'ima Ilu",
    role: "Board Chairperson",
    image: "https://prep-ai.xyz/ogasaid/mrsnaima.png",
    category: "board",
    bio: "Visionary leader with extensive experience in corporate governance and strategic development.",
    socials: { linkedin: "#" }
  },
  {
    id: "b2",
    name: "Dr. Saifullahi.",
    role: "Vice Chairperson",
    image: "https://prep-ai.xyz/ogasaid/vp.jpeg",
    category: "board",
    bio: "Renowned academic and strategist focusing on institutional excellence and sustainable growth."
  },
  {
    id: "b3",
    name: "Dr. Murtala Kazaure.",
    role: "Public Sector / Government Affairs Trustee",
    image: "https://prep-ai.xyz/ogasaid/murtala.jpeg",
    category: "board",
    bio: "Expert in public policy and government relations, bridging the gap between innovation and regulation."
  },
  // Training
  {
    id: "3",
    name: "Mohan Singh Dhakary",
    role: "Solution Architect / Systems Architect",
    image: "https://prep-ai.xyz/ogasaid/moh.jpg",
    category: "training",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: "6",
    name: "Aliyu Auwal",
    role: "Training & Capacity Building Lead",
    image: "https://prep-ai.xyz/ogasaid/aliyu.jpeg",
    category: "training"
  },
  // Incubation
  {
    id: "4",
    name: "Yazeed Ahmed",
    role: "Cybersecurity & Data Specialist",
    image: "https://prep-ai.xyz/ogasaid/yaz.jpeg",
    category: "incubation"
  },
  {
    id: "7",
    name: "Anam Sharma",
    role: "Network / Infrastructure Engineer",
    image: "https://prep-ai.xyz/ogasaid/yazeed.png",
    category: "incubation"
  },
  {
    id: "5",
    name: "Muhammad Musa Audii",
    role: "Operations & Support Lead",
    image: "https://prep-ai.xyz/ogasaid/musa.jpeg",
    category: "incubation"
  }
];

// Exporting BOARD separately for Board.tsx
export const BOARD: TeamMember[] = ALL_TEAM.filter(m => m.category === 'board');

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post1",
    title: "The Future of Cybersecurity in West Africa",
    excerpt: "Exploring the growing landscape of digital threats and how NorthDemy is preparing the next generation of defenders.",
    content: "Full content here...",
    author: "Digital Safety Team",
    date: "May 15, 2024",
    category: "Safety",
    image: "https://picsum.photos/seed/blog1/800/600"
  },
  {
    id: "post2",
    title: "How to Scale Your Tech Startup from Idea to MVP",
    excerpt: "Insights from our incubation hub on the critical steps every founder needs to take early on.",
    content: "Full content here...",
    author: "Startup Hub",
    date: "April 28, 2024",
    category: "Incubation",
    image: "https://picsum.photos/seed/blog2/800/600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "NorthDemy's incubation program was transformative for our startup. Their mentorship and investor network helped us secure our seed funding within 6 months.",
    author: "Adaobi Nwankwo",
    role: "CEO, TechServe Nigeria",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: "t2",
    quote: "The cybersecurity training at NorthDemy is world-class. I moved from a basic understanding to being industry-certified in just 3 months.",
    author: "Ibrahim Lawal",
    role: "Security Analyst, FinCorp",
    image: "https://picsum.photos/seed/user2/100/100"
  }
];

export const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    children: SERVICES.map(s => ({ name: s.title, path: s.link }))
  },
  { name: 'Programs', path: '/programs' },
  { name: 'Incubation Hub', path: '/incubation' },
  { name: 'Our Team', path: '/team' },
  { name: 'Partners', path: '/partners' },
  // { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];
