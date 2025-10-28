import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import blogData from "@/components/Blog/blogData";
import BlogDetailsClient from "@/components/Blog/BlogDetailsClient";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return { title: "Service | Détails" };
  }

  return {
    title: `${blog.title} | Détails`,
    description: Array.isArray((blog as any).content) ? (blog as any).content[0] : blog.paragraph,
  };
}

const BlogDetailsDynamicPage = async ({ params }: Props) => {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className="pt-[150px] pb-[120px] bg-gray-light dark:bg-bg-color-dark">
        <div className="container max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold">Article introuvable</h1>
          <p>Le contenu demandé est introuvable.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[150px] pb-[120px] bg-gray-light dark:bg-bg-color-dark">
      <div className="container max-w-6xl">
        {/* Client-rendered localized content */}
        <BlogDetailsClient id={id} />

        {/* Show testimonials only for Pro Pulse (id === 3) - still render client component */}
        {blog.id === 3 && (
          <div className="mt-20">
            <Testimonials />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetailsDynamicPage;
