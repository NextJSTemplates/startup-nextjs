"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";
import { Button } from "../ui/button";
import Image from "next/image";

const Blog = () => {
  return (
    <section id="blogs" className="relative z-10 pt-20 max-w-7xl mx-auto px-6">
      <SectionTitle title="Latest Blogs" />

      <p className="max-w-xl mb-12 text-sm">
        Explore insightful articles and expert tips to help you grow and
        succeed. Stay updated with the latest trends and ideas from our blog
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="group relative rounded-lg bg-neutral-50 p-4 border border-border/50"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="h-full w-full transform object-cover transition-all duration-300 group-hover:scale-125"
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
              />
            </div>
            <div className="mt-6 flex justify-between">
              <p className="text-sm font-normal text-muted-foreground">
                {post.date}
              </p>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-md mt-4 font-medium">
              {post.title}
            </p>
            <p className="mt-4 text-sm">{post.description}</p>
            <a href={post.href} title={post.title}>
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-md text-center mt-12">
        <Button className="rounded-none bg-transparent border-b-2 border-black text-black hover:bg-transparent shadow-none hover:scale-[1.1] transition duration-200 cursor-pointer">
          View More
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default Blog;
