import { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon,
  title: string,
  items: Item[]
}

type Item = {
  icon: LucideIcon
  desc: string;
}