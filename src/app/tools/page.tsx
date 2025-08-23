import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { toolCategories } from "@/data/site-content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Editing Tools & Resources - Free & Paid Software",
  description: "Discover the best video editing software, resume templates, and project management tools for assistant video editors. Both free and paid options included.",
  keywords: [...siteConfig.keywords, "video editing software", "tools", "resources", "free software"],
};

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Essential{" "}
              <span className="text-primary">Video Editing Tools</span> & Resources
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              From free editing software to professional tools, resume templates, and project management 
              solutions - everything you need to succeed as an assistant video editor.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Tools & Resources
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Curated tools to help you excel in your video editing career
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {toolCategories.map((tool) => (
              <div
                key={tool.id}
                className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      {tool.title}
                    </h3>
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                      tool.isFree 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {tool.isFree ? 'Free' : 'Paid'}
                    </span>
                  </div>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    {tool.description}
                  </p>
                  <Link
                    href={tool.path}
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                  >
                    Explore Tools
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

      {/* Free vs Paid Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-sm bg-green-50 p-8 dark:bg-green-900/20">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Free Tools</h3>
              </div>
              <p className="mb-4 text-base text-green-700 dark:text-green-300">
                Perfect for beginners and those on a budget. High-quality free alternatives to expensive software.
              </p>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>• Professional-grade editing software</li>
                <li>• Resume templates and resources</li>
                <li>• Learning materials and tutorials</li>
                <li>• Community support and forums</li>
              </ul>
            </div>

            <div className="rounded-sm bg-blue-50 p-8 dark:bg-blue-900/20">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Premium Tools</h3>
              </div>
              <p className="mb-4 text-base text-blue-700 dark:text-blue-300">
                Industry-standard software and advanced tools for professional video editors.
              </p>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>• Industry-leading editing software</li>
                <li>• Advanced project management tools</li>
                <li>• Professional plugins and effects</li>
                <li>• Priority support and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm bg-primary px-8 py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Ready to Upgrade Your Toolkit?
              </h2>
              <p className="mb-8 text-base text-white/80 lg:text-lg">
                Start with our free tools and gradually invest in premium software as your career grows.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/tools/free-editing-software"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-base font-medium text-primary hover:bg-gray-100"
                >
                  Start with Free Tools
                </Link>
                <Link
                  href="/guides/skills"
                  className="inline-flex items-center justify-center rounded-sm border border-white px-8 py-3 text-center text-base font-medium text-white hover:bg-white hover:text-primary"
                >
                  Learn Required Skills
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
