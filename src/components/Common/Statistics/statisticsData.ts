import { Statistics } from "@/types";
import { ChartBar, Cloud, Cpu, Blocks } from "lucide-react";

export const statistics: Statistics[] = [
  {
    value: "100+",
    label: "Happy Clients Served Across Diverse Industries",
    icon: ChartBar,
  },
  {
    value: "20+",
    label: "Countries with Successful Project Deployments",
    icon: Cloud,
  },
  {
    value: "10+",
    label: "Custom AI & IoT Solutions Tailored to Business Needs",
    icon: Cpu,
  },
  {
    value: "10+",
    label: "Blockchain Projects Including DApps and Integrations",
    icon: Blocks,
  },
  {
    value: "5+",
    label: "SaaS Platforms Developed for Scalable Growth",
    icon: ChartBar,
  },
  {
    value: "15+",
    label: "Cross-Platform Mobile Apps Built With Flutter & React Native",
    icon: Cloud,
  },
];