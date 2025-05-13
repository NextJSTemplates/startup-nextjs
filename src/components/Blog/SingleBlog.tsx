import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { image, tag, title, publishDate } = blog;

  return (
    <div className="bg-white dark:bg-dark pt-6 shadow-lg rounded-xl text-start">
      <div className="text-sm font-extrabold text-black dark:text-white mb-4 px-6 uppercase">
        {tag}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 font-extrabold mb-6 px-6">{publishDate}</div>

      <h3 className="text-xl sm:text-2xl font-extrabold text-black dark:text-white mb-6 leading-snug px-6 max-w-sm">
        <Link href="/blog-details">
          {title}
        </Link>
      </h3>

      <div className="relative w-full aspect-square overflow-hidden rounded-t-full h-70">
        <Image
          src={image}
          alt="Telemedicine App"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SingleBlog;
