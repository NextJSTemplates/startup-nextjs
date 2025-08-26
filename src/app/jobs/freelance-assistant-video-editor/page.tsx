import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Assistant Video Editor Opportunities",
  description: "Discover freelance opportunities and projects for assistant video editors. Find clients, build your portfolio, and grow your freelance career.",
  keywords: [...siteConfig.keywords, "freelance assistant video editor", "freelance video editing", "video editing projects", "remote video editing work"],
  openGraph: {
    title: "Freelance Assistant Video Editor Opportunities",
    description: "Find freelance projects and clients as an assistant video editor. Build your portfolio and grow your freelance career.",
    url: "https://assistantvideoeditor.com/jobs/freelance-assistant-video-editor",
    type: "website",
  },
};

export default function FreelanceAssistantVideoEditorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
              <span>🎬</span>
              <span>Freelance Opportunities</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Freelance{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant Video Editor
              </span>
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Discover freelance opportunities and projects for assistant video editors. Find clients, build your portfolio, 
              and grow your freelance career with flexible work arrangements and diverse project types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse All Jobs
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/tools/free-editing-software"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Free Tools
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* Freelance Opportunities Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-4xl">
                🎬
              </div>
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Freelance Assistant Video Editor Opportunities
              </h2>
              <p className="text-lg text-body-color dark:text-body-color-dark">
                Build your freelance career with diverse project types and flexible work arrangements
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark/50 rounded-xl p-8 mb-8">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                What You Can Expect as a Freelance Assistant Video Editor:
              </h3>
              <div className="grid gap-4 md:grid-cols-2 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Project Variety</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Work on diverse video editing projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Flexible Hours</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Choose when and how much you work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Portfolio Building</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Gain experience across different industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">4</div>
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Client Relationships</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Build long-term partnerships</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6">
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                Start Your Freelance Journey
              </h3>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                Explore our comprehensive guides and resources to help you succeed as a freelance assistant video editor
              </p>
              <Link
                href="/guides/how-to-become"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Resources for Freelance Success
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Everything you need to build and grow your freelance assistant video editor career
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Free Editing Software",
                description: "High-quality free alternatives to expensive software",
                path: "/tools/free-editing-software",
                icon: "🆓",
              },
              {
                title: "Resume Templates",
                description: "Professional templates for video editors",
                path: "/tools/resume-templates",
                icon: "📄",
              },
              {
                title: "Freelance Guide",
                description: "How to find clients and build your business",
                path: "/blog/finding-freelance-clients",
                icon: "💼",
              },
              {
                title: "Portfolio Tips",
                description: "Showcase your work effectively",
                path: "/guides/resume-portfolio",
                icon: "📁",
              },
              {
                title: "Skill Development",
                description: "Essential skills for video editors",
                path: "/guides/skills",
                icon: "🎯",
              },
              {
                title: "Job Platforms",
                description: "Find freelance opportunities",
                path: "/jobs/resources",
                icon: "🌍",
              },
            ].map((tool, index) => (
              <Link
                key={index}
                href={tool.path}
                className="group block overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-2xl text-white shadow-lg">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Explore Resource
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
    </>
  );
}
