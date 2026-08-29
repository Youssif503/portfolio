export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceUrl: string;
}

export interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}
