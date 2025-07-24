import { Statistics } from "@/types";
import { ChartBar, Cloud, Cpu, Blocks } from "lucide-react";

export const statistics: Statistics[] = [
  {
    value: "100+",
    label: "Happy Clients Served Across Diverse Industries",
    labelKey: "happyClientsLabel",
    icon: ChartBar,
  },
  {
    value: "20+",
    label: "Countries with Successful Project Deployments",
    labelKey: "countriesLabel",
    icon: Cloud,
  },
  {
    value: "10+",
    label: "Custom AI & IoT Solutions Tailored to Business Needs",
    labelKey: "aiIotSolutionsLabel",
    icon: Cpu,
  },
  {
    value: "10+",
    label: "Blockchain Projects Including DApps and Integrations",
    labelKey: "blockchainProjectsLabel",
    icon: Blocks,
  },
  {
    value: "15+",
    label: "Cross-Platform Mobile Apps Built With Flutter & React Native",
    labelKey: "crossPlatformAppsLabel",
    icon: Cloud,
  },
];