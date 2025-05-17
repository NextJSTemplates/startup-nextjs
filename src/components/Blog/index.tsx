"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-20 lg:py-24">
      <SectionTitle title="Latest Blogs" />

      <motion.div
        className="container mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
