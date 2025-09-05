import { Blog } from "@/types/blog";

const blogData: (Blog & { quote?: string })[] = [
  {
    id: 1,
    title: "Business IT Advisory",
    quote: "« Faites de la technologie un levier stratégique »",
    paragraph:
      "Dans un monde où succès rime avec agilité et innovation, UnLeash Lab vous aide à aligner votre stratégie technologique sur vos objectifs métier. Grâce à notre accompagnement personnalisé, optimisez vos investissements IT, simplifiez vos décisions stratégiques et accélérez votre transformation numérique.",
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
      "Parce que peu d’entreprises comprennent réellement le rôle stratégique du Business Analyst, les méthodes classiques de recrutement peinent à détecter les meilleurs talents. Grâce à notre expertise unique, identifiez, évaluez et intégrez efficacement les profils capables de faire la différence dans votre organisation.",
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
    title: "BA Care",
    quote: "« Un accompagnement dédié aux Business Analysts »",
    paragraph:
      "Le métier de Business Analyst est exigeant : pression constante, complexité relationnelle, stress psychologique… Ce rôle, pourtant clé, est souvent mal compris, laissant les Business Analysts isolés face à ces défis. C’est pourquoi nous avons créé BA Care, un accompagnement confidentiel et personnalisé pour relever les défis quotidiens de votre métier. Retrouvez confiance, sérénité et plaisir dans votre métier !",
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
