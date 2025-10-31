import { Blog } from "@/types/blog";
const blogData: (Blog & { quote?: string })[] = [
  {
    id: 1,
    title: "Business IT Advisory",
    title_en: "Business IT Advisory",
    quote: "« Faites de la technologie un levier stratégique »",
    paragraph:
      "Dans un monde où réussite rime avec agilité et innovation, Unleash Lab aligne votre stratégie technologique sur vos objectifs métier. Grâce à un accompagnement sur‑mesure, optimisez vos investissements IT, clarifiez vos décisions stratégiques et accélérez votre transformation numérique.",
    paragraph_en:
      "In a world where success demands agility and innovation, Unleash Lab aligns your technology strategy with your business objectives. With tailored support, optimize your IT investments, clarify strategic decisions and accelerate your digital transformation.",
    content: [
      "La technologie ne doit plus être un centre de coût, mais un levier de création de valeur. Nous commençons par un diagnostic pragmatique des priorités métier et des systèmes existants pour identifier les leviers d'impact rapide.",
      "Puis nous co-construisons une feuille de route opérationnelle : priorisation des chantiers, arbitrages budgétaires et recommandations d'architecture adaptées à vos contraintes. L'objectif : transformer les choix technologiques en résultats mesurables.",
      "Enfin, nous accompagnons la mise en œuvre avec gouvernance, pilotage et transfert de compétences pour garantir que vos investissements IT délivrent agilité, résilience et avantage concurrentiel durable."
    ],
    content_en: [
      "Technology should no longer be a cost center but a lever for value creation. We start with a pragmatic diagnosis of business priorities and existing systems to identify quick-impact levers.",
      "Then we co-create an operational roadmap: prioritizing initiatives, budget trade-offs and architecture recommendations tailored to your constraints. The goal: turn technology choices into measurable results.",
      "Finally, we support implementation with governance, delivery oversight and skills transfer to ensure your IT investments deliver agility, resilience and sustainable competitive advantage."
    ],
    image: "/images/blog/ImageService1.jpg",
    author: {
      name: "Unleash Lab",
      image: "/images/blog/ImageService1.png",
      designation: "",
    },
    tags: ["Business", "IT"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Recrutement de Business Analysts",
    title_en: "Business Analyst Recruitment",
    quote: "« Recrutez efficacement les meilleurs Business Analysts »",
    paragraph:
      "Parce que peu d'entreprises comprennent réellement le rôle stratégique du Business Analyst, les méthodes classiques de recrutement peinent à détecter les meilleurs talents. Grâce à notre expertise unique, identifiez, évaluez et intégrez efficacement les profils capables de faire la différence.",
    paragraph_en:
      "Many companies still misunderstand the strategic role of the Business Analyst, and traditional hiring methods struggle to identify top talent. With our unique expertise, identify, evaluate and onboard profiles that truly make a difference.",
    content: [
      "Identifier un excellent Business Analyst demande plus qu'une grille de compétences : il faut mesurer sa capacité à traduire des enjeux métiers complexes en solutions concrètes. Nous commençons par définir avec vous le rôle attendu, les livrables et les critères de succès propres à votre organisation.",
      "Ensuite, notre approche combine évaluations pratiques, études de cas sur-mesure et entretiens comportementaux pour révéler la finesse analytique, la clarté de communication et la capacité d'influence des candidats. Nous évaluons également l'adéquation culturelle pour garantir des intégrations pérennes.",
      "Enfin, nous accompagnons l'intégration opérationnelle : onboarding structuré, premières missions cadrées et points de suivi réguliers pour mesurer la performance et accélérer la montée en compétence. Résultat : des recrutements plus pertinents, une productivité plus rapide et un impact business tangible.",
    ],
    content_en: [
      "Identifying a great Business Analyst requires more than a checklist: you must assess their ability to translate complex business issues into concrete solutions. We start by defining the expected role, deliverables and success criteria tailored to your organization.",
      "Our approach combines practical assessments, custom case studies and behavioural interviews to reveal analytical depth, clarity of communication and influencing skills. We also evaluate cultural fit to ensure sustainable hires.",
      "Finally, we support operational onboarding: structured onboarding, initial mission framing and regular checkpoints to measure performance and accelerate ramp-up. The result: more relevant hires, faster productivity and measurable business impact."
    ],
    image: "/images/blog/ImageService2.jpg",
    author: {
      name: "Unleash Lab",
      image: "/images/services/icon-recrutement.png",
      designation: "",
    },
    tags: ["RH", "Business Analyst"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Pro Pulse",
    title_en: "Pro Pulse",
    quote: "« Un accompagnement dédié aux Business Analysts »",
    paragraph:
      "Un service unique de coaching et de mentorat pensé pour redonner confiance, équilibre et performance aux Business Analysts.",
    paragraph_en:
      "A unique coaching and mentoring service designed to restore confidence, balance and performance to Business Analysts.",
    content: [
      "Pro Pulse propose des sessions courtes, ciblées et actionnables : 60 minutes pour travailler sur une problématique métier précise, une difficulté relationnelle, ou une question de pratique professionnelle.",
      "Chaque session est préparée : vous partagez votre contexte en amont, nous ciblons les leviers, et nous repartons avec un plan d’actions concret. Nos coachs et mentors sont des professionnels expérimentés qui combinent expertise BA et posture pédagogique.",
      "Les bénéfices constatés : meilleures priorisations, réduction du stress lié aux décisions, montée en compétence accélérée et capacité à produire des livrables à forte valeur ajoutée. Réservez à la demande et bénéficiez d’un suivi adapté si vous optez pour un accompagnement sur plusieurs sessions.",
    ],
    content_en: [
      "Pro Pulse offers short, focused and actionable sessions: 60 minutes to work on a specific business problem, a relational difficulty, or a professional practice question.",
      "Each session is prepared: you share your context in advance, we target levers, and we leave with a concrete action plan. Our coaches and mentors are experienced professionals who combine BA expertise with a pedagogical approach.",
      "Observed benefits: better prioritization, reduced decision-related stress, accelerated skill development and the ability to deliver high-value outputs. Book on demand and opt for continued support across multiple sessions if desired."
    ],
    image: "/images/blog/ImageService3.jpg",
    author: {
      name: "Unleash Lab",
      image: "/images/services/icon-care.png",
      designation: "",
    },
    tags: ["Support", "Care"],
    publishDate: "2025",
  },
];
export default blogData;
