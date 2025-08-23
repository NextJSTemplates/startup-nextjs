import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { jobCategories } from "@/data/site-content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistant Video Editor Jobs - Find Your Next Opportunity",
  description: "Browse assistant video editor jobs, freelance opportunities, remote positions, and entry-level roles. Start your video editing career today.",
  keywords: [...siteConfig.keywords, "job search", "career opportunities"],
};

export default function JobsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Find Your Next{" "}
              <span className="text-primary">Assistant Video Editor</span> Job
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Discover hundreds of assistant video editor opportunities across different categories. 
              Whether you're looking for full-time positions, freelance work, or remote opportunities, 
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Browse Job Categories
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Choose the type of opportunity that best fits your career goals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobCategories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      {category.title}
                    </h3>
                    {category.count && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {category.count} jobs
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    {category.description}
                  </p>
                  <Link
                    href={category.path}
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                  >
                    Browse Jobs
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

      {/* CTA Section */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm bg-primary px-8 py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Ready to Start Your Video Editing Career?
              </h2>
              <p className="mb-8 text-base text-white/80 lg:text-lg">
                Join thousands of video editors who have found their dream jobs through our platform.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/jobs/assistant-video-editor-jobs"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-base font-medium text-primary hover:bg-gray-100"
                >
                  Browse All Jobs
                </Link>
                <Link
                  href="/guides/how-to-become"
                  className="inline-flex items-center justify-center rounded-sm border border-white px-8 py-3 text-center text-base font-medium text-white hover:bg-white hover:text-primary"
                >
                  Career Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
