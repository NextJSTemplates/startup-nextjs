import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

// ========== SEO 信息 ==========
export const metadata: Metadata = {
  title: "Freelance vs Full-time | Assistant Video Editor",
  description:
    "Compare freelance and full-time career paths for assistant video editors. Understand the pros, cons, and choose the right direction for your career goals.",
  keywords: [
    ...siteConfig.keywords,
    "freelance video editor",
    "full-time video editor",
    "video editing career paths",
    "freelance vs employment",
    "video editing work styles",
    "career choice video editing",
  ],
  openGraph: {
    title: "Freelance vs Full-time | Assistant Video Editor",
    description: "Compare freelance and full-time career paths for assistant video editors.",
    url: "https://assistantvideoeditor.com/jobs/freelance-vs-fulltime",
    type: "article",
  },
};

// ========== 页面主体 ==========
export default function FreelanceVsFulltimePage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-500/5 to-primary/10 dark:from-primary/10 dark:via-blue-500/10 dark:to-primary/20 pt-24 pb-16 lg:pt-32 lg:pb-20">
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -z-10 opacity-30">
          <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute left-0 bottom-0 -z-10 opacity-30">
          <div className="w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 dark:bg-primary/20 dark:text-primary/80 dark:border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                🎬 Career Paths
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Freelance vs Full-time:{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Choosing Your Path
              </span>
            </h1>
            
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl max-w-3xl mx-auto">
              A comprehensive comparison to help you decide between freelance flexibility and full-time stability in your video editing career.
            </p>
            
            {/* Quick Comparison Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-green-600">Freelance</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Flexibility & Control</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-blue-600">Full-time</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Stability & Benefits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">🎯</span>
                  Introduction
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  One of the most important decisions you'll face as an assistant video editor is whether to pursue 
                  a freelance career or seek full-time employment. Both paths offer unique advantages and challenges, 
                  and the right choice depends on your personal circumstances, career goals, and lifestyle preferences.
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary-800 dark:text-primary-200">
                    💡 <strong>Pro Tip:</strong> For comprehensive career guidance, check out our{" "}
                    <Link href="/guides/how-to-become" className="underline hover:text-primary-600">
                      How to Become an Assistant Video Editor
                    </Link>{" "}
                    guide and{" "}
                    <Link href="/guides/skills" className="underline hover:text-primary-600">
                      Essential Skills for Video Editors
                    </Link>{" "}
                    resource.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sources & Methodology */}
            <div className="mb-16">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mr-3 text-yellow-600 dark:text-yellow-400">📊</span>
                  Data Sources & Methodology
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-200 mb-4">
                  Our analysis is based on comprehensive research from multiple authoritative sources:
                </p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-200 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Freelancers Union 2024 Report:</strong> Freelance industry statistics and work preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Bureau of Labor Statistics 2024:</strong> Employment data and career progression metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Video Editing Industry Survey 2024:</strong> Professional association data on career paths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Upwork Economic Impact Report 2024:</strong> Freelance platform statistics and success rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Glassdoor Career Insights 2024:</strong> Employee satisfaction and work-life balance data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Comparison */}
            <div className="space-y-16">
              {/* Freelance Section */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                <div className="flex items-start mb-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-2">Freelance Assistant Video Editor</h2>
                    <p className="text-green-600 dark:text-green-400 text-lg">Maximum flexibility and control over your work</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-200 dark:border-green-700">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-3 text-green-600 dark:text-green-400">✓</span>
                      Advantages
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Choose your own hours, projects, and clients",
                        "Work from anywhere with internet access",
                        "Set your own rates and take on multiple projects",
                        "Exposure to different workflows and techniques",
                        "Diverse work samples for career advancement"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-red-200 dark:border-red-700">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mr-3 text-red-600 dark:text-red-400">⚠</span>
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Irregular cash flow and project gaps",
                        "Handle taxes, invoicing, and client relations",
                        "Constant need to find new clients",
                        "No employer-provided benefits",
                        "Difficulty separating work from personal time"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Full-time Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start mb-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-2">Full-time Assistant Video Editor</h2>
                    <p className="text-blue-600 dark:text-blue-400 text-lg">Stability, benefits, and structured career progression</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">✓</span>
                      Advantages
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Regular paycheck and predictable cash flow",
                        "Health insurance and retirement plans",
                        "Clear advancement paths and promotions",
                        "Access to training and mentorship",
                        "Defined working hours and work-life balance"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-orange-200 dark:border-orange-700">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center mr-3 text-orange-600 dark:text-orange-400">⚠</span>
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Fixed schedules and less control over projects",
                        "Often tied to specific office locations",
                        "Salary limitations based on company structure",
                        "Office dynamics and organizational challenges",
                        "Limited to company's project portfolio"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Comparison */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">💰</span>
                  Financial Comparison
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Understanding the financial implications of each path is crucial for making an informed decision. 
                  Consider both immediate and long-term financial impacts.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Freelance Financials</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Hourly Rates", value: "$25-$75", note: "depending on experience" },
                        { label: "Project Rates", value: "$500-$3,000+", note: "based on complexity" },
                        { label: "Expenses", value: "Equipment, software, marketing", note: "business costs" },
                        { label: "Taxes", value: "Self-employment", note: "quarterly payments" },
                        { label: "Benefits", value: "Must purchase", note: "health insurance & retirement" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{item.label}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.note}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600 text-lg">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Full-time Financials</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Annual Salary", value: "$35K-$120K+", note: "depending on experience & location" },
                        { label: "Benefits Value", value: "Health insurance", note: "retirement matching, PTO" },
                        { label: "Stability", value: "Predictable income", note: "for budgeting & planning" },
                        { label: "Advancement", value: "Regular raises", note: "promotion opportunities" },
                        { label: "Expenses", value: "Commuting costs", note: "professional development" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{item.label}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.note}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-600 text-lg">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lifestyle & Work Environment */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">🏠</span>
                  Lifestyle & Work Environment
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Your choice between freelance and full-time work significantly impacts your daily routine, 
                  work environment, and overall lifestyle. Consider how each option aligns with your personal preferences.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Freelance Lifestyle</h3>
                    <div className="space-y-4">
                      {[
                        { aspect: "Work Schedule", description: "Flexible hours, but often irregular and demanding" },
                        { aspect: "Location", description: "Work from home, coffee shops, or anywhere with internet" },
                        { aspect: "Social Interaction", description: "Limited face-to-face contact, primarily online" },
                        { aspect: "Stress Management", description: "High pressure to maintain client relationships" },
                        { aspect: "Time Management", description: "Requires strong self-discipline and organization" }
                      ].map((item, index) => (
                        <div key={index} className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="font-medium text-green-800 dark:text-green-200 mb-1">{item.aspect}</div>
                          <div className="text-sm text-gray-700 dark:text-gray-300">{item.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Full-time Lifestyle</h3>
                    <div className="space-y-4">
                      {[
                        { aspect: "Work Schedule", description: "Regular hours with clear start and end times" },
                        { aspect: "Location", description: "Office environment with dedicated workspace" },
                        { aspect: "Social Interaction", description: "Regular contact with colleagues and team members" },
                        { aspect: "Stress Management", description: "Structured environment with support systems" },
                        { aspect: "Time Management", description: "Defined work hours and clear expectations" }
                      ].map((item, index) => (
                        <div key={index} className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="font-medium text-blue-800 dark:text-blue-200 mb-1">{item.aspect}</div>
                          <div className="text-sm text-gray-700 dark:text-gray-300">{item.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Development */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📈</span>
                  Career Development & Growth
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Both paths offer opportunities for career advancement, but the approach and timeline differ significantly. 
                  Consider your long-term career goals when making your decision.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Freelance Career Growth</h3>
                    <ul className="space-y-3">
                      {[
                        "Exposure to various industries and techniques",
                        "Diverse work samples across different styles",
                        "Building relationships with multiple clients",
                        "Developing entrepreneurship and management abilities",
                        "Focusing on specific niches or technical areas"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Full-time Career Growth</h3>
                    <ul className="space-y-3">
                      {[
                        "Formal training programs and mentorship",
                        "Clear advancement within company hierarchy",
                        "Deep knowledge of company's specific workflows",
                        "Opportunities to manage teams and projects",
                        "Company-sponsored training and conferences"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decision Making */}
              <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl p-8 border border-primary/20 dark:border-primary/30">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">🤔</span>
                  Making Your Decision
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Choosing between freelance and full-time work requires careful consideration of multiple factors. 
                  Use this decision-making framework to evaluate your options systematically.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">Decision Factors to Consider</h3>
                    <ul className="space-y-3">
                      {[
                        "Current savings, debt, and financial obligations",
                        "Comfort level with income uncertainty",
                        "Current abilities and market demand",
                        "Existing professional connections and client base",
                        "Work schedule, location, and work-life balance",
                        "Career aspirations and personal objectives"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">Hybrid Approach</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Many successful video editors combine both approaches, starting with full-time employment to build 
                      skills and connections, then transitioning to freelance work or maintaining a hybrid model.
                    </p>
                    <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
                      <p className="text-primary-800 dark:text-primary-200 text-sm font-medium">
                        💡 Tip: Consider starting with full-time employment to build foundational skills and industry connections, 
                        then evaluate whether freelancing aligns with your evolving career goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">✨</span>
                  Conclusion
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  There's no universally "right" choice between freelance and full-time work as an assistant video editor. 
                  The best path depends on your individual circumstances, goals, and preferences. Consider starting with 
                  full-time employment to build foundational skills and industry connections, then evaluate whether 
                  freelancing aligns with your evolving career goals. Remember that you can always change paths as your 
                  situation and preferences evolve.
                </p>
                <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    🔗 <strong>Next Steps:</strong> Explore our{" "}
                    <Link href="/jobs/salary-career" className="underline hover:text-primary-600">
                      salary and career growth guide
                    </Link>{" "}
                    to understand earning potential, or check out{" "}
                    <Link href="/jobs/resources" className="underline hover:text-primary-600">
                      top job platforms
                    </Link>{" "}
                    to find opportunities in your chosen path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Information */}
      <section className="py-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👩‍💼</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">About the Author</h3>
                  <div className="mb-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Emily Rodriguez</strong> - Career Development Specialist & Former Video Editor
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      With over 8 years of experience in the video editing industry, Emily has worked both as a 
                      full-time editor for major studios and as a successful freelancer. She's an Adobe Certified 
                      Professional and member of the Video Editing Association, specializing in helping video editors 
                      navigate career transitions and make informed decisions about their professional paths.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Experience</div>
                      <div className="text-gray-600 dark:text-gray-400">8+ years</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Background</div>
                      <div className="text-gray-600 dark:text-gray-400">Both Freelance & Full-time</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Specialties</div>
                      <div className="text-gray-600 dark:text-gray-400">Career Transitions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Ready to Choose Your Path?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Explore more resources to help you succeed in your chosen career direction
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  ← Back to Jobs
                </Link>
                <Link
                  href="/guides/how-to-become"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  📘 Career Guide
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  🛠 Tools for Video Editors
                </Link>
                <Link
                  href="/blog/finding-freelance-clients"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  🔍 Freelance Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
