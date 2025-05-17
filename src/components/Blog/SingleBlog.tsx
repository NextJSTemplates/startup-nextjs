"use client"
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { image, tag, title, publishDate } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="pt-6 shadow-lg rounded-md text-start"
    >
      <div className="text-sm font-extrabold text-black mb-2 px-6 uppercase">
        {tag}
      </div>
      <div className="text-xs text-gray-500 font-extrabold mb-6 px-6">{publishDate}</div>

      <h3 className="text-lg font-extrabold text-black mb-8 leading-snug px-6 max-w-sm h-20 max-h-80">
        <Link href="/blog-details">{title}</Link>
      </h3>

      <div className="relative w-full aspect-square overflow-hidden rounded-t-full h-60">
        <Image
          src={image}
          alt="Blog image"
          fill
          className="object-cover rounded-b-md"
        />
      </div>
    </motion.div>
  );
};

export default SingleBlog;
