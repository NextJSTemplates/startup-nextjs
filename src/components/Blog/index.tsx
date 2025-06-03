"use client";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";
import { Button } from "../ui/button";
import Image from "next/image";

const Blog = () => {
  return (
    <section id="blogs" className="py-16 md:py-20 lg:py-24">
      <SectionTitle title="Latest Blogs" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <p className="font-pj mt-5 text-sm font-normal text-black">
            Explore insightful articles and expert tips to help you grow and
            succeed. Stay updated with the latest trends and ideas from our blog
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-8 text-center sm:mt-16 sm:grid-cols-2 sm:text-left md:grid-cols-3 lg:gap-x-10">
          {blogData.map((post, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-gradient-to-b from-neutral-100 via-white to-neutral-100 py-10 px-6  shadow-sm"
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
              <div className="mt-8 mb-6 flex justify-between">
                <p className="font-pj text-sm font-normal text-gray-600">
                  {post.date}
                </p>
                <ExternalLink className="h-4 w-4 text-gray-600" />
              </div>
              <p className="font-pj text-md mt-4 font-bold text-black">
                {post.title}
              </p>
              <p className="mt-6 text-sm text-black">{post.description}</p>
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
      </div>
    </section>
  );
};

export default Blog;
