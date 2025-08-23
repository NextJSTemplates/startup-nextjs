import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/site-content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistant Video Editor Blog - Industry Insights & Career Tips",
  description: "Stay updated with the latest trends, tips, and insights for assistant video editors. Expert advice on career growth, tools, and industry developments.",
  keywords: [...siteConfig.keywords, "blog", "insights", "tips", "industry trends"],
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Assistant Video Editor{" "}
              <span className="text-primary">Blog</span>
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Expert insights, career tips, and industry trends to help you succeed as an assistant video editor. 
              Stay ahead of the curve with our latest articles and guides.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Latest Articles
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Stay informed with our latest insights and tips
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
              <div className="p-8 lg:p-12">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Featured
                    </span>
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      {blogPosts[0].publishDate}
                    </span>
                  </div>
                  <span className="text-sm text-body-color dark:text-body-color-dark">
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
                  {blogPosts[0].title}
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-body-color-dark lg:text-lg">
                  {blogPosts[0].description}
                </p>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm text-body-color dark:text-body-color-dark">
                    By {blogPosts[0].author}
                  </span>
                  <div className="flex space-x-2">
                    {blogPosts[0].tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={blogPosts[0].path}
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                >
                  Read Full Article
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Other Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      {post.publishDate}
                    </span>
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    {post.description}
                  </p>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      By {post.author}
                    </span>
                    <div className="flex space-x-2">
                      {post.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={post.path}
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                  >
                    Read More
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm bg-primary px-8 py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Stay Updated with Our Newsletter
              </h2>
              <p className="mb-8 text-base text-white/80 lg:text-lg">
                Get the latest assistant video editor insights, job opportunities, and career tips delivered to your inbox.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-sm px-6 py-3 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-base font-medium text-primary hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
