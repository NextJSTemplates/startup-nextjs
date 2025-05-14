const SectionTitle = ({
  title,
  width = "30%",
  className = "",
}: {
  title: string;
  width?: string;
  className?: string;
}) => {
  const calculateWidthClass = (width: string) => {
    switch (width) {
      case "30%":
        return "w-[80%] sm:w-[66%] md:w-[30%]";
      case "50%":
        return "w-[80%] sm:w-[50%";
      case "80%":
        return "w-[94%]  sm:w-[88%] md:w-[86%] lg:w-[80%]";
      case "100%":
        return "w-full";
      default:
        return `w-[${width}]`;
    }
  };

  return (
    <div
      className={`mb-12 rounded-se-[70px] bg-black px-8 py-6 text-start md:text-center text-white shadow-md ${calculateWidthClass(width)} ${className}`}
    >
      <h2 className="text-[14px] leading-tight font-bold sm:text-xl md:text-2xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
