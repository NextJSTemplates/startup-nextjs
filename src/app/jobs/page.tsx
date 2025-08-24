import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { jobCategories } from "@/data/site-content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistant Video Editor Jobs - Find Your Next Opportunity",
  description:
    "Browse assistant video editor jobs, freelance opportunities, remote positions, and entry-level roles. Start your video editing career today.",
  keywords: [
    ...siteConfig.keywords,
    "assistant video editor jobs",
    "remote video editing jobs",
    "freelance assistant editor",
    "career opportunities",
  ],
  openGraph: {
    title: "Assistant Video Editor Jobs - Start Your Career",
    description:
      "Explore freelance, remote, and entry-level assistant video editor opportunities. Find the right path to grow your editing career.",
    url: "https://yourdomain.com/jobs",
    type: "website",
  },
};

export default function JobsPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Find Your Next{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant Video Editor
              </span>{" "}
              Job
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Discover assistant video editor opportunities across freelance,
              remote, and entry-level roles. Start your path in the editing
              industry today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#job-categories"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse Jobs
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Career Guide
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* 2. Job Insights & Resources Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>💡</span>
              <span>Insights & Resources</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Job Insights & Resources
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Deep dive into salary insights, job hunting strategies, and career path guidance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Salary & Career Growth",
                description: "Learn about earning potential across different countries and experience levels",
                icon: "💰",
                path: "/jobs/salary-career",
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Top Job Platforms 2025",
                description: "Discover the best websites and platforms to find assistant video editor opportunities",
                icon: "🌍",
                path: "/jobs/resources",
                color: "from-blue-400 to-purple-500",
              },
              {
                title: "Freelance vs Full-time",
                description: "Compare career paths and choose the right direction for your goals",
                icon: "🎬",
                path: "/jobs/freelance-vs-fulltime",
                color: "from-green-400 to-teal-500",
              },
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.path}
                className="group block overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Categories Section */}
      <section id="job-categories" className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>🎯</span>
              <span>Job Categories</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Browse Job Categories
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Choose the type of opportunity that best fits your career goals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobCategories.map((category, index) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                      🎬
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mb-8 text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {category.description}
                  </p>
                  <Link
                    href={category.path}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore {category.title}
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
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

      {/* 4. Platforms Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container max-w-6xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>🔍</span>
              <span>Job Platforms</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Where to Find Jobs
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Discover the best platforms to find your next assistant video editor opportunity
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/jobs/search/?keywords=assistant%20video%20editor",
                desc: "Global platform with thousands of job postings, including remote opportunities.",
                icon: "💼",
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "Upwork",
                url: "https://www.upwork.com/nx/find-work/browse/?q=assistant%20video%20editor",
                desc: "Freelance marketplace where clients hire video editors for projects worldwide.",
                icon: "🌐",
                color: "from-green-500 to-green-600",
              },
              {
                name: "Fiverr",
                url: "https://www.fiverr.com/search/gigs?query=video%20editing",
                desc: "Freelance services marketplace, ideal for building your portfolio.",
                icon: "🎨",
                color: "from-purple-500 to-purple-600",
              },
              {
                name: "Indeed",
                url: "https://www.indeed.com/q-assistant-video-editor-jobs.html",
                desc: "General job site with listings from film studios to agencies.",
                icon: "📋",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                name: "ProductionHUB",
                url: "https://www.productionhub.com/jobs",
                desc: "Industry-focused platform for creative professionals.",
                icon: "🎬",
                color: "from-red-500 to-red-600",
              },
              {
                name: "RemoteOK",
                url: "https://remoteok.com/remote-video-editing-jobs",
                desc: "Dedicated remote jobs platform for global opportunities.",
                icon: "🏠",
                color: "from-orange-500 to-orange-600",
              },
            ].map((platform) => (
              <div
                key={platform.name}
                className="group rounded-xl bg-white dark:bg-dark p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center text-xl text-white shadow-lg`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {platform.name}
                  </h3>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {platform.desc}
                </p>
                <Link
                  href={platform.url}
                  target="_blank"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Visit {platform.name}
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Career Guide Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <span>🚀</span>
            <span>Get Started</span>
          </div>
                      <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Not Sure Where to Start?
            </h2>
                      <p className="mb-10 text-base text-gray-700 dark:text-gray-300 lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Learn how to build a career as an assistant video editor, develop
            essential skills, and find your first opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/guides/how-to-become"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Read the Career Guide
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Explore Tools
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
      </section>
    </>
  );
}
