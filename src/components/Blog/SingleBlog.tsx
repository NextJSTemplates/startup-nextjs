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
      className="group bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative flex h-full flex-col overflow-hidden"
    >
      <div className="relative block aspect-video w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#48937E]/70 mix-blend-multiply" />
        {tags && tags.length > 0 && (
          <span className="bg-primary absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-semibold text-white capitalize">
            {tags[0]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="mb-4 text-xl font-bold text-black group-hover:text-primary dark:text-white lg:text-2xl leading-tight">
          {title}
        </h3>

        {quote && <p className="mb-4 italic text-primary font-medium">{quote}</p>}

        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-gray-300 line-clamp-3 flex-grow">
          {paragraph}
        </p>

        <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-200">
          <span>Découvrir</span>
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlog;
