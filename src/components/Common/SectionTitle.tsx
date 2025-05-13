const SectionTitle = ({
  title,
  width = "w-[30%]",
  className
}: {
  title: string;
  width?: string;
  className?: string
}) => {
  return (
      <div
        className={`mb-12 rounded-se-[70px] bg-black py-6 text-center text-white shadow-md ${width} ${className}`}
      >
        <h2 className="text-[14px] font-bold leading-tight! sm:text-xl md:text-2xl">
          {title}
        </h2>
      </div>
  );
};

export default SectionTitle;
