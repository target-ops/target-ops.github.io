// Type definitions for Target-Ops content

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  background?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  weight?: number;
}

export interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  icon: string;
  weight?: number;
  tags?: string[];
  image?: string;
  background?: string;
}

export interface OSSProject {
  id: string;
  name: string;
  title: string;
  description: string;
  github: string;
  externalUrl: string;
  tags: string[];
  icon: any; // LucideIcon type
  features: string[];
  weight?: number;
  background?: string;
  featured?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  description?: string;
  date: string;
  author?: string;
  featured: string;
  tags?: string[];
  content?: string;
}

