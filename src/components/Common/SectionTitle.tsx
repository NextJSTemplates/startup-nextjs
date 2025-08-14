import { cn } from "@/lib/utils";
type SectionTitleProps = {
  title: string;
  className?: string
}
const SectionTitle = ({
  title,
  className
}: SectionTitleProps) => {
  return (
    <h1 className={cn("text-3xl mb-12 font-medium", className)}>{title}</h1>
  );
};

export default SectionTitle;
