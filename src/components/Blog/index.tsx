"use client";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useState } from "react";

const Blog = () => {
  const [filter, setFilter] = useState("All");

  // Filter the blog data based on the selected filter
  const filteredBlogs = blogData.filter(
    (blog) => filter === "All" || blog.tags.includes(filter),
  );

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Projects"
          paragraph="Here are our projects that we have created for our clients."
          center
        />

        {/* Filter Navigation */}
        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              className={`px-4 py-2 ${filter === "All" ? "font-bold text-blue-600" : ""}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 ${filter === "Testing" ? "font-bold text-blue-600" : ""}`}
              onClick={() => setFilter("Testing")}
            >
              Testing
            </button>
            <button
              className={`px-4 py-2 ${filter === "Done" ? "font-bold text-blue-600" : ""}`}
              onClick={() => setFilter("Done")}
            >
              Done
            </button>
          </nav>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
