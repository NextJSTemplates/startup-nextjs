"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import blogData from "./blogData";
const BlogDetailsClient = ({ id }: { id: number }) => {
  const { locale } = useLanguage();
  
  const formatText = (text: string) => {
    // Convertit **texte** en <strong>texte</strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convertit *texte* en <em>texte</em> pour l'italique
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return formatted;
  };

  const blog = blogData.find((b) => b.id === id);
  
  if (!blog) return null;

  const title = locale === "en" && (blog as any).title_en ? (blog as any).title_en : blog.title;
  const paragraphs = locale === "en" && (blog as any).content_en ? (blog as any).content_en : blog.content;
  const paragraph = locale === "en" && (blog as any).paragraph_en ? (blog as any).paragraph_en : blog.paragraph;
  const quote = (blog as any).quote;
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl text-center">{title}</h1>
      
      {quote && (
        <div className="mb-8 text-center">
          <p className="text-xl text-primary dark:text-primary italic font-medium">
            {quote}
          </p>
        </div>
      )}
      
      {Array.isArray(paragraphs) ? (
        paragraphs.map((para: string, idx: number) => (
          <p 
            key={idx} 
            className="mb-6 text-lg leading-relaxed text-body-color dark:text-gray-300 sm:text-xl text-justify"
            dangerouslySetInnerHTML={{
              __html: formatText(para)
            }}
          />
        ))
      ) : (
        <p className="mb-12 text-lg leading-relaxed text-body-color dark:text-gray-300 sm:text-xl text-justify">
          <strong>{title}</strong> {paragraph}
        </p>
      )}
      <div className="mb-16 relative w-full overflow-hidden rounded-2xl shadow-xl">
        <div className="relative aspect-video w-full">
          <Image src={blog.image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#48937E]/50 mix-blend-multiply" />
        </div>
      </div>
      {blog.id === 3 && (
        <div className="mt-20">
          {}
        </div>
      )}
    </>
  );
};
export default BlogDetailsClient;
