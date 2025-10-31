"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const ServicesPage = () => {
  const { messages } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
      {/* Decorative background shapes (subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl opacity-30 dark:opacity-10" />
        <div className="absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-teal-200/10 blur-2xl opacity-25 dark:opacity-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 leading-tight">
              {messages.servicesPage.breadcrumb.title}
            </h1>
            <p className="text-lg text-body-color dark:text-gray-300">
              {messages.servicesPage.breadcrumb.description}
            </p>
          </header>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
