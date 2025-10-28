type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  // Optional full content split into paragraphs for blog details pages
  content?: string[];
  // Optional short quote or excerpt used by some posts
  quote?: string;
  // Optional English translations
  title_en?: string;
  paragraph_en?: string;
  content_en?: string[];
};
