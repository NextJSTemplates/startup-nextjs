import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("relative z-10 pt-20 max-w-7xl mx-auto px-6", className)} id={id}>
      {children}
    </section>
  );
}

export default Section