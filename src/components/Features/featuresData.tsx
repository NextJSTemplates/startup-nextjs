import { Feature } from "@/types/feature";
import { FaUser, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";
const featuresData: Feature[] = [
  {
    id: "understand",
    icon: <FaUser className="text-primary text-4xl" />,
  },
  {
    id: "explore",
    icon: <FaLightbulb className="text-primary text-4xl" />,
  },
  {
    id: "implement",
    icon: <FaCogs className="text-primary text-4xl" />,
  },
  {
    id: "prepare",
    icon: <FaChartLine className="text-primary text-4xl" />,
  },
];
export default featuresData;
