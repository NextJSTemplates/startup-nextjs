import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogWithQuote extends Blog {
  quote?: string;
}

const SingleBlog = ({ blog }: { blog: BlogWithQuote }) => {
  const { title, image, paragraph, quote, tags } = blog;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300 flex flex-col h-full">
      <div className="relative block aspect-37/22 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#48937E]/70 mix-blend-multiply" />
        {tags && tags.length > 0 && (
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            {tags[0]}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href="#"
            className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
          >
            {title}
          </Link>
        </h3>

        {quote && (
          <p className="italic text-[#48937E] mb-4">{quote}</p>
        )}

        <p className="text-body-color text-base font-medium dark:text-gray-300 mb-0">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
