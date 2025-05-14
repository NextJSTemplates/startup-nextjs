const SectionTitle = ({
  title,
  width = "30%",
  className = ""
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
      case "70%":
        return "w-[86%]  sm:w-5/6 md:w-[70%]";
      case "100%":
        return "w-full";
      default:
        return `w-[${width}]`;
    }
  };

  return (
    <div
      className={`mb-12 rounded-se-[70px] bg-black py-6 text-center text-white shadow-md ${calculateWidthClass(width)} ${className}`}
    >
      <h2 className="text-[14px] font-bold leading-tight sm:text-xl md:text-2xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
