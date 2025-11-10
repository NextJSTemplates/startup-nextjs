import { Blog } from "@/types/blog";
const blogData: (Blog & { quote?: string })[] = [
  {
    id: 1,
    title: "Business IT Advisory",
    title_en: "Business IT Advisory",
    quote: "« Faites de la technologie un levier stratégique »",
    paragraph:
      "Le succès ne vient pas des outils, mais de la manière dont vous les reliez à vos processus et votre stratégie. Découvrez notre approche pour optimiser vos investissements IT...",
    paragraph_en:
      "Success doesn't come from tools, but from how you connect them to your processes and strategy. At Unleash Lab, we help you transform your information system into a true engine of performance and clarity. Through tailored support, the goal is to optimize your IT investments, simplify your strategic decisions and sustainably accelerate your digital transformation.",
    content: [
      "Le succès ne vient pas des outils, mais de la manière dont vous les reliez à vos processus et votre stratégie. Chez Unleash Lab, nous vous aidons à transformer votre système d'information en un véritable moteur de performance et de clarté.",
      "Grâce à un accompagnement sur mesure, l'objectif est d'optimiser vos investissements IT, de simplifier vos décisions stratégiques et d'accélérer durablement votre transformation numérique.",
      "Notre approche pragmatique commence par comprendre vos enjeux métier réels pour ensuite aligner technologie et stratégie, garantissant ainsi un retour sur investissement mesurable et durable."
    ],
    content_en: [
      "Success doesn't come from tools, but from how you connect them to your processes and strategy. At Unleash Lab, we help you transform your information system into a true engine of performance and clarity.",
      "Through tailored support, the goal is to optimize your IT investments, simplify your strategic decisions and sustainably accelerate your digital transformation.",
      "Our pragmatic approach starts by understanding your real business challenges and then aligning technology with strategy, ensuring measurable and sustainable return on investment."
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
    quote: "« Recrutez les Business Analysts qui feront la différence »",
    paragraph:
      "Trop d'entreprises recrutent des profils techniques sans mesurer la dimension stratégique du rôle ni l'importance des softskills. Résultat : des projets qui avancent, sans atteindre leur plein potentiel. Découvrez comment identifier les profils qui feront vraiment la différence...",
    paragraph_en:
      "Too many companies hire technical profiles without measuring the strategic dimension of the role or the importance of soft skills. Result: projects that move forward, without reaching their full potential because, due to the lack of critical analysis, communication and influence, the Business Analyst loses their strategic impact. At Unleash Lab, we help you identify, evaluate and integrate Business Analysts who will make a difference in your organization.",
    content: [
      "Trop d'entreprises recrutent des profils techniques sans mesurer la dimension stratégique du rôle ni l'importance des softskills. Résultat : des projets qui avancent, sans atteindre leur plein potentiel car, en raison de l'absence d'analyse critique, de communication et d'influence, le Business Analyst perd son impact stratégique.",
      "Chez Unleash Lab, nous vous aidons à identifier, évaluer et intégrer les Business Analysts qui feront la différence dans votre organisation.",
      "Des profils qui comprennent autant le métier que la technique, mais qui ont surtout le bon mindset et les softskills en adéquation avec votre projet et/ou votre organisation."
    ],
    content_en: [
      "Too many companies hire technical profiles without measuring the strategic dimension of the role or the importance of soft skills. Result: projects that move forward, without reaching their full potential because, due to the lack of critical analysis, communication and influence, the Business Analyst loses their strategic impact.",
      "At Unleash Lab, we help you identify, evaluate and integrate Business Analysts who will make a difference in your organization.",
      "Profiles who understand both business and technology, but above all have the right mindset and soft skills that match your project and/or organization."
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
    quote: "« Un accompagnement pour clarifier, décider et agir face aux situations complexes »",
    paragraph:
      "Chaque métier est exigeant. Pression sur les résultats, complexité relationnelle, enjeux multiples. Parce que chacun, à un moment ou à un autre, peut se retrouver face à des situations complexes qui demandent clarté et sérénité...",
    paragraph_en:
      "Every profession is demanding. Pressure for results, relational complexity, multiple stakes... Because everyone, at some point, can face situations where it becomes difficult to see clearly, convince, decide, manage a relationship... That's why we created Pro Pulse: confidential, personalized and caring support, designed to bring clarity, help make the right decisions and regain confidence and serenity in action.",
    content: [
      "Chaque métier est exigeant. Pression sur les résultats, complexité relationnelle, enjeux multiples. Parce que chacun, à un moment ou à un autre, peut se retrouver face à des situations où il devient difficile d'y voir clair, convaincre, trancher, gérer une relation.",
      "C'est pour cela que nous avons créé Pro Pulse : un accompagnement confidentiel, personnalisé et bienveillant, conçu pour apporter de la clarté, aider à prendre les bonnes décisions et retrouver confiance et sérénité dans l'action.",
      "Pro Pulse, c'est l'espace où l'on prend enfin soin de ceux qui accompagnent le changement."
    ],
    content_en: [
      "Every profession is demanding. Pressure for results, relational complexity, multiple stakes... Because everyone, at some point, can face situations where it becomes difficult to see clearly, convince, decide, manage a relationship...",
      "That's why we created Pro Pulse: confidential, personalized and caring support, designed to bring clarity, help make the right decisions and regain confidence and serenity in action.",
      "Pro Pulse is the space where we finally take care of those who support change."
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
