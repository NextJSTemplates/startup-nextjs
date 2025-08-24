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
      {/* 1. Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Your Complete Guide to Becoming an{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant Video Editor
              </span>
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              From understanding the role to landing your first job, our comprehensive guides 
              will help you navigate every step of your assistant video editor career journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#guides-grid"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Guides
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* 2. Guides Grid Section */}
      <section id="guides-grid" className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>📚</span>
              <span>Career Development</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Career Development Guides
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Everything you need to know to succeed as an assistant video editor
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideCategories.map((guide, index) => (
              <div
                key={guide.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                    {guide.readTime && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded-full">
                        {guide.readTime}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mb-8 text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {guide.description}
                  </p>
                  <Link
                    href={guide.path}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read Guide
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

             {/* 3. Career Guide Section */}
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
               href="/jobs"
               className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
             >
               Browse Jobs
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
