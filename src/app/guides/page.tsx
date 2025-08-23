import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { guideCategories } from "@/data/site-content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistant Video Editor Guides - Learn Everything You Need to Know",
  description: "Comprehensive guides on becoming an assistant video editor, essential skills, resume tips, and interview preparation. Start your career journey today.",
  keywords: [...siteConfig.keywords, "career guide", "skills", "resume", "interview"],
};

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Your Complete Guide to Becoming an{" "}
              <span className="text-primary">Assistant Video Editor</span>
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              From understanding the role to landing your first job, our comprehensive guides 
              will help you navigate every step of your assistant video editor career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Career Development Guides
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Everything you need to know to succeed as an assistant video editor
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideCategories.map((guide, index) => (
              <div
                key={guide.id}
                className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    {guide.readTime && (
                      <span className="text-sm text-body-color dark:text-body-color-dark">
                        {guide.readTime}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {guide.title}
                  </h3>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    {guide.description}
                  </p>
                  <Link
                    href={guide.path}
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                  >
                    Read Guide
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

      {/* Featured Guide */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-primary to-primary/80 px-8 py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Start Your Journey Today
              </h2>
              <p className="mb-8 text-base text-white/80 lg:text-lg">
                Begin with our comprehensive guide on how to become an assistant video editor 
                and build the foundation for your successful career.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/guides/how-to-become"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-base font-medium text-primary hover:bg-gray-100"
                >
                  Read Complete Guide
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center rounded-sm border border-white px-8 py-3 text-center text-base font-medium text-white hover:bg-white hover:text-primary"
                >
                  Browse Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
