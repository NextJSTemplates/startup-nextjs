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
  content?: string[];
  quote?: string;
  title_en?: string;
  paragraph_en?: string;
  content_en?: string[];
};
