import type { JSX } from "react";
import { LucideIcon } from "lucide-react";

export type Industry ={
  label: string;
  description?: string;
  icon: string;
}
export type ServiceIndustry = {
  quote: string;
  quoteKey: string;
  name: string;
  nameKey: string;
  designation: string;
  src: string;
  services: string[];
  servicesKeys: string[];
}
export type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  tag: string;
  publishDate: string;
};

export type Brand = {
  id: number;
  image: string;
};
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};
export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
export type Review = {
  name: string;
  description: string;
  body: string;
  img: string;
}

export type Service = {
  icon: LucideIcon,
  title: string,
  items: Item[]
}

type Item = {
  icon: LucideIcon
  desc: string;
}

export type Statistics ={
  value: string;
  icon: LucideIcon;
  label: string;
  labelKey: string;

}

export type TeamMember  = {
  name: string,
  image: string
}

export type Testimonial = {
    rating: number;
    text: string;
    author: string;
    position: string;
};

export type WhyUsData = {
    value: string;
    label: string;
    icon: string;
}

export type Processes = {
  title: string;
  icon: LucideIcon;
  desc: string;
}

export type ServicesFeatures = {
  image?: string;
  title: string;
  description: string;
}

export type CaseStudy = {
  title: string;
  image: string;
  categories: string[];
}

export type BlogPost = {
  title: string;
  date: string;
  image: string;
  href: string;
  description: string;
}

export type FaqData = {
  question: string;
  answer: string;
}