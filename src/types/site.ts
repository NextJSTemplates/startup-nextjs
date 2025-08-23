export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  keywords: string[];
}

export interface NavigationItem {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: NavigationItem[];
}

export interface JobCategory {
  id: string;
  title: string;
  description: string;
  path: string;
  count?: number;
}

export interface GuideCategory {
  id: string;
  title: string;
  description: string;
  path: string;
  readTime?: string;
}

export interface ToolCategory {
  id: string;
  title: string;
  description: string;
  path: string;
  isFree?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  path: string;
  publishDate: string;
  author: string;
  readTime?: string;
  tags?: string[];
}
