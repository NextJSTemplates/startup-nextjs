"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";
import { useLanguage } from "@/components/Header";
import Section from "@/components/Section";
import { getMediumPosts } from "@/lib/medium";
import { useEffect, useState } from "react";
import Image from "next/image";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getMediumPosts();
      setPosts(data.slice(0, 3));
    };

    fetchPosts();
  }, []);

  const { t } = useLanguage();

  return (
    <Section id="blogs">
      <SectionTitle title={t("latestBlogs")} />

      <p className="max-w-xl mb-12 text-sm">{t("blogDescription")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group relative rounded-lg transition duration-300 hover:scale[1.1] shadow-sm overflow-clip"
          >
            <div className="overflow-hidden relative h-48 w-full">
              <Image
                className="transform object-cover transition-all duration-300 group-hover:scale-125"
                src={post.thumbnail || "https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png"}
                alt={post.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="mt-6 flex justify-between">
                <p className="text-sm font-normal text-muted-foreground">
                  {new Date(post.pubDate).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              <p className="text-md mt-4 font-medium">{post.title}</p>
              <div className="mt-2">
                {post.categories.map((item_, index) => {
                  return (
                    <a key={index}
                      className="text-sm text-primary"
                      href={`https://medium.com/tag/${item_}`}
                      target="_blank">#{item_}{" "}</a>
                  )
                })}
              </div>
              <p className="mt-6 text-xs text-end">~{post.author}</p>
              <Link href={post.link} target="_blank" title={post.title}>
                <span className="absolute inset-0" aria-hidden="true"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-md flex justify-center items-center text-center mt-12">
        <Link
          href="https://blog.classyendeavors.com/"
          target="_blank"
          className="rounded-none bg-transparent border-b-2 border-primary hover:bg-transparent shadow-none hover:scale-[1.1] transition duration-200 cursor-pointer text-primary flex w-fit"
        >
          {t("viewMore")}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
};

export default Blog;