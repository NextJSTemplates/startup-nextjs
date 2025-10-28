import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BlogWithQuote extends Blog {
  quote?: string;
}

const SingleBlog = ({ blog }: { blog: BlogWithQuote }) => {
  const { messages, locale } = useLanguage();
  const title = locale === "en" && (blog as any).title_en ? (blog as any).title_en : blog.title;
  const paragraph = locale === "en" && (blog as any).paragraph_en ? (blog as any).paragraph_en : blog.paragraph;
  const { image, quote, tags } = blog;

  return (
    <Link
      href={`/blog-details/${(blog as any).id}`}
      className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative flex h-full flex-col overflow-hidden rounded-xs bg-white duration-300"
    >
      <div className="relative block aspect-37/22 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#48937E]/70 mix-blend-multiply" />
        {tags && tags.length > 0 && (
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            {tags[0]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="mb-4 text-xl font-bold text-black group-hover:text-primary dark:text-white sm:text-2xl">
          {title}
        </h3>

        {quote && <p className="mb-4 italic text-[#48937E]">{quote}</p>}

        <p className="mb-4 text-base font-medium text-body-color dark:text-gray-300 line-clamp-3">
          {paragraph}
        </p>

        <span className="mt-auto text-primary font-semibold">
          Lire la suite →
        </span>
      </div>
    </Link>
  );
};

export default SingleBlog;
