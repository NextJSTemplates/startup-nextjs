import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-28"
    >
      <div className="mb-12 w-[30%] rounded-se-[70px] bg-black py-6 text-white text-center shadow-md">
          <h2 className="text-2xl font-bold">Our Insights</h2>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
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
