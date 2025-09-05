import { Feature } from "@/types/feature";
import { FaUser, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaUser className="text-primary text-4xl" />,
    title: "Vous comprendre",
    paragraph:
      "Nous prenons le temps de découvrir qui vous êtes, de saisir vos problématiques telles que vous les vivez au quotidien, et de cerner précisément vos besoins, votre vision et votre ressenti.",
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-primary text-4xl" />,
    title: "Explorer le champ des possibles",
    paragraph:
      "Après avoir appréhendé votre réalité personnelle et professionnelle, nous explorons ensemble toutes les options et pistes possibles — « Rien n'est impossible, tout est permis ».",
  },
  {
    id: 3,
    icon: <FaCogs className="text-primary text-4xl" />,
    title: "Mise en œuvre concrète",
    paragraph:
      "Nous définissons et déployons ensemble les actions et solutions retenues. Nous vous accompagnons tout au long du processus pour vous aider à surmonter les éventuelles difficultés.",
  },
  {
    id: 4,
    icon: <FaChartLine className="text-primary text-4xl" />,
    title: "Préparer le changement",
    paragraph:
      "Nous anticipons l'avenir en préparant activement votre adaptation au changement. Nous vous dotons des outils nécessaires et renforçons votre confiance.",
  },
];

export default featuresData;
