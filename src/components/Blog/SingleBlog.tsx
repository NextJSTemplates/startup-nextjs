"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { paragraph, tag, title, publishDate } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="overflow-clip rounded-xl bg-[url('/images/hero/background.svg')] bg-cover bg-center border backdrop-blur-sm pt-6 text-start shadow-xl"
    >
      <div className="h-80 flex flex-col items-center justify-center">
        <div className="mb-2 px-6 text-sm font-extrabold text-white uppercase">
          {tag}
        </div>
        <div className="mb-8 px-6 text-xs font-extrabold text-white">
          {publishDate}
        </div>

        <h3 className="mb-8 h-20 max-h-90 max-w-sm px-6 text-center text-2xl leading-snug font-extrabold text-white">
          <Link href="/blog-details">{title}</Link>
        </h3>
      </div>

      <div className="relative flex h-45 w-full flex-col gap-4 bg-black p-4">
        <div className="flex gap-2">
          <Image
            src="/images/testimonials/auth-01.png"
            alt="Author"
            width={36}
            height={36}
            className="h-8 w-8 rounded-full"
          />
          <h1 className="pt-2 text-sm text-[12px] text-white/70">Manu Arora</h1>
        </div>
        <h1 className="text-sm font-bold text-white">{title}</h1>
        <p className="text-[12px] text-white/70">{paragraph}</p>
      </div>
    </motion.div>
  );
};

export default SingleBlog;
