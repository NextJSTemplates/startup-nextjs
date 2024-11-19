import { Feature } from "@/types/feature";
import {
  Braces,
  Cloud,
  Cpu,
  PanelsTopLeft,
  TabletSmartphone,
  WandSparkles,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 2,
    icon: <WandSparkles size={50} />,
    title: "UI/UX Design",
    paragraph:
      "Design intuitive and user-friendly interfaces that enhance customer satisfaction and engagement.",
  },
  {
    id: 1,
    icon: <TabletSmartphone size={50} />,
    title: "Mobile Application Development",
    paragraph:
      "Build high-performance mobile applications for iOS and Android that deliver seamless user experiences and meet business goals.",
  },
  {
    id: 1,
    icon: <PanelsTopLeft size={50} />,
    title: "Web Application Development",
    paragraph:
      "Develop scalable and responsive web applications with cutting-edge technologies, ensuring fast and secure user experiences.",
  },
  {
    id: 1,
    icon: <Cpu size={50} />,
    title: "IoT and Hardware Design",
    paragraph:
      "Expertise in IoT devices, embedded systems, and custom hardware to bring your innovative ideas to life.",
  },
  {
    id: 1,
    icon: <Braces size={50} />,
    title: "Custom Software Development",
    paragraph:
      "Tailor-made software solutions for businesses of any scale, solving complex problems and driving growth.",
  },
  {
    id: 1,
    icon: <Cloud size={50} />,
    title: "Cloud Integration and Support",
    paragraph:
      "Seamlessly integrate cloud technologies to ensure your systems are efficient, scalable, and reliable.",
  },
];
export default featuresData;
