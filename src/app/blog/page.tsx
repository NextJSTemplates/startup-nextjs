import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | UnLeashLab - Expert en Business Analysis",
  description:
    "Découvrez les services UnLeashLab : conseil en Business IT, recrutement de Business Analysts et accompagnement BA Care.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos Services"
        description="UnLeashLab vous accompagne avec des solutions sur mesure : conseil en Business IT, recrutement ciblé et soutien dédié aux Business Analysts."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
