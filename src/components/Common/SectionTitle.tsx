const SectionTitle = ({
  title,
  width = "30%",
}: {
  title: string;
  width?: string;
}) => {
  return (
    <>
      <div
        className={`mb-12 rounded-se[70px] bg-black py-6 text-center text-white shadow-md w-${width}`}
      >
        <h2 className="text-lg font-bold leading-tight! sm:text-xl md:text-2xl">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
