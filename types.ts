
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export type TeamCategory = 'leadership' | 'board' | 'training' | 'incubation';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  category: TeamCategory;
  socials?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}