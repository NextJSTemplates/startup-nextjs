import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How a school management system can simplify daily work",
    paragraph: "A look at how connected records, communication, and workflows can help schools organize information more clearly.",
    image: "/images/blog/blog-01.jpg",
    author: { name: "Yacob Tech Editorial", image: "/images/blog/author-03.png", designation: "Technology insights" },
    tags: ["education", "systems"],
    publishDate: "Coming soon",
  },
  {
    id: 2,
    title: "A practical checklist for small-business websites",
    paragraph: "Explore the essentials of a useful business website, from mobile-friendly pages to clear service information and contact paths.",
    image: "/images/blog/blog-02.jpg",
    author: { name: "Yacob Tech Editorial", image: "/images/blog/author-02.png", designation: "Technology insights" },
    tags: ["web", "business"],
    publishDate: "Coming soon",
  },
  {
    id: 3,
    title: "Where AI automation can help everyday work",
    paragraph: "Learn how to identify repetitive tasks and evaluate whether a simple automation or AI-assisted workflow is appropriate.",
    image: "/images/blog/blog-03.jpg",
    author: { name: "Yacob Tech Editorial", image: "/images/blog/author-03.png", designation: "Technology insights" },
    tags: ["AI", "automation"],
    publishDate: "Coming soon",
  },
];
export default blogData;
