"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import blogData from "./blogData";

const BlogDetailsClient = ({ id }: { id: number }) => {
  const { locale } = useLanguage();
  const blog = blogData.find((b) => b.id === id);
  if (!blog) return null;

  const title = locale === "en" && (blog as any).title_en ? (blog as any).title_en : blog.title;
  const paragraphs = locale === "en" && (blog as any).content_en ? (blog as any).content_en : blog.content;
  const paragraph = locale === "en" && (blog as any).paragraph_en ? (blog as any).paragraph_en : blog.paragraph;

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">{title}</h1>

      {Array.isArray(paragraphs) ? (
        paragraphs.map((para: string, idx: number) => (
          <p key={idx} className="mb-6 text-lg leading-relaxed text-body-color dark:text-gray-300 sm:text-xl text-justify">
            {para}
          </p>
        ))
      ) : (
        <p className="mb-12 text-lg leading-relaxed text-body-color dark:text-gray-300 sm:text-xl text-justify">
          <strong>{title}</strong> {paragraph}
        </p>
      )}

      <div className="mb-16 relative w-full overflow-hidden rounded-2xl shadow-xl">
        <div className="relative aspect-video w-full">
          <img src={blog.image} alt={title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-[#48937E]/50 mix-blend-multiply" />
        </div>
      </div>

      {blog.id === 3 && (
        <div className="mt-20">
          {/* Testimonials component is client-only; keep in page */}
        </div>
      )}
    </>
  );
};

export default BlogDetailsClient;
