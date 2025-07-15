import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-3xl md:text-4xl mb-6 font-medium", className)}>{title}</h1>
  );
};

export default SectionTitle;
