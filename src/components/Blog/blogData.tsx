import { Blog } from "@/types/blog";

const blogData: (Blog & { quote?: string })[] = [
  {
    id: 1,
    title: "Business IT Advisory",
    quote: "« Faites de la technologie un levier stratégique »",
    paragraph:
      "Alignez votre stratégie technologique sur vos objectifs métier et transformez vos investissements IT en leviers de croissance.",
    image: "/images/blog/ImageService1.jpg",
    author: {
      name: "UnLeashLab",
      image: "/images/blog/ImageService1.png",
      designation: "",
    },
    tags: ["Business", "IT"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Recrutement de Business Analysts",
    quote: "« Recrutez efficacement les meilleurs Business Analysts »",
    paragraph:
      "Découvrez une méthode innovante pour identifier, évaluer et intégrer les Business Analysts qui feront vraiment la différence.",
    image: "/images/blog/ImageService2.jpg",
    author: {
      name: "UnLeashLab",
      image: "/images/services/icon-recrutement.png",
      designation: "",
    },
    tags: ["RH", "Business Analyst"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Pro Pulse",
    quote: "« Un accompagnement dédié aux Business Analysts »",
    paragraph:
      "Un service unique de coaching et de mentorat pensé pour redonner confiance, équilibre et performance aux Business Analysts.",
    image: "/images/blog/ImageService3.jpg",
    author: {
      name: "UnLeashLab",
      image: "/images/services/icon-care.png",
      designation: "",
    },
    tags: ["Support", "Care"],
    publishDate: "2025",
  },
];

export default blogData;
