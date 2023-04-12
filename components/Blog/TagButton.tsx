const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="mr-3 mb-3 inline-flex items-center justify-center rounded-md bg-primary bg-opacity-10 py-2 px-4 text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
    >
      {text}
    </a>
  );
};

export default TagButton;
