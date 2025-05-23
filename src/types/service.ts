import { LucideIcon } from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export type Service = {
  icon: LucideIcon,
  title: string,
  items: Item[]
}

type Item = {
  icon: string;
  desc: string;
}