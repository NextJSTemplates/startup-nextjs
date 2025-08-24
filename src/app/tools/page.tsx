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
      {/* 1. Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Essential{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Video Editing Tools
              </span>{" "}
              & Resources
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              From free editing software to professional tools, resume templates, and project management 
              solutions - everything you need to succeed as an assistant video editor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#tools-grid"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Tools
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides/skills"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn Skills
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* 2. Tools Grid Section */}
      <section id="tools-grid" className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>🛠️</span>
              <span>Tools & Resources</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Tools & Resources
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Curated tools to help you excel in your video editing career
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {toolCategories.map((tool, index) => (
              <div
                key={tool.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${
                        tool.isFree 
                          ? 'from-green-400 to-green-500' 
                          : 'from-blue-400 to-blue-500'
                      } flex items-center justify-center text-xl text-white shadow-lg`}>
                        {tool.isFree ? '🆓' : '💎'}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                      tool.isFree 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {tool.isFree ? 'Free' : 'Paid'}
                    </span>
                  </div>
                  <p className="mb-8 text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {tool.description}
                  </p>
                  <Link
                    href={tool.path}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Tools
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

      {/* 3. Free vs Paid Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>⚖️</span>
              <span>Tool Comparison</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Free vs Premium Tools
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Choose the right tools for your budget and career stage
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-xl bg-white dark:bg-dark p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 flex items-center">
                <div className="mr-4 w-14 h-14 rounded-xl bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Free Tools</h3>
              </div>
              <p className="mb-6 text-base text-green-700 dark:text-green-300 leading-relaxed">
                Perfect for beginners and those on a budget. High-quality free alternatives to expensive software.
              </p>
              <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Professional-grade editing software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Resume templates and resources
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Learning materials and tutorials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Community support and forums
                </li>
              </ul>
            </div>

            <div className="group rounded-xl bg-white dark:bg-dark p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 flex items-center">
                <div className="mr-4 w-14 h-14 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Premium Tools</h3>
              </div>
              <p className="mb-6 text-base text-blue-700 dark:text-blue-300 leading-relaxed">
                Industry-standard software and advanced tools for professional video editors.
              </p>
              <ul className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Industry-leading editing software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Advanced project management tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Professional plugins and effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Priority support and updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

             {/* 4. CTA Section */}
       <section className="relative py-20 lg:py-24 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10">
         <div className="container text-center">
           <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
             <span>🚀</span>
             <span>Get Started</span>
           </div>
           <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
             Ready to Upgrade Your Toolkit?
           </h2>
           <p className="mb-10 text-base text-gray-700 dark:text-gray-300 lg:text-lg max-w-3xl mx-auto leading-relaxed">
             Start with our free tools and gradually invest in premium software as your career grows.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link
               href="/tools/free-editing-software"
               className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
             >
               Start with Free Tools
               <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
             </Link>
             <Link
               href="/guides"
               className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
             >
               Learn Guides
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
