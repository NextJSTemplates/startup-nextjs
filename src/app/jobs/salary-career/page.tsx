import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

// ========== SEO 信息 ==========
export const metadata: Metadata = {
  title: "Salary & Career Growth | Assistant Video Editor",
  description:
    "Discover comprehensive salary insights, career progression paths, and earning potential for assistant video editors across different countries and experience levels.",
  keywords: [
    ...siteConfig.keywords,
    "assistant video editor salary",
    "video editing career growth",
    "video editor earnings",
    "freelance video editor rates",
    "video editing career path",
    "assistant editor salary guide",
  ],
  openGraph: {
    title: "Salary & Career Growth | Assistant Video Editor",
    description: "Comprehensive salary guide and career growth insights for assistant video editors worldwide.",
    url: "https://assistantvideoeditor.com/jobs/salary-career",
    type: "article",
  },
};

// ========== 页面主体 ==========
export default function SalaryCareerPage() {
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
                💰 Salary Guide
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Salary & Career Growth for{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant Video Editors
              </span>
            </h1>
            
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Your comprehensive guide to understanding earning potential and career advancement in the video editing industry.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">$35K-$120K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Annual Range</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">$25-$75</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hourly Rate</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">5+ Years</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Senior Level</div>
              </div>
            </div>

            {/* Last Updated Info */}
            <div className="mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 inline-block">
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                  <span className="text-sm">🔄</span>
                  <span className="text-sm font-medium">
                    Last updated: January 2025 | Next update: April 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📊</span>
                  Introduction
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Understanding salary expectations and career growth opportunities is crucial for any assistant video editor 
                  planning their professional journey. This guide provides comprehensive insights into earning potential across 
                  different countries, experience levels, and career paths, helping you make informed decisions about your future.
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
                  Our salary data is compiled from multiple authoritative sources to ensure accuracy and reliability:
                </p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-200 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Glassdoor Salary Reports 2024-2025:</strong> Industry-leading salary insights from verified employee submissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>LinkedIn Salary Insights:</strong> Real-time salary data from professional network analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Video Editing Industry Surveys:</strong> Annual surveys from professional associations and industry groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Government Labor Statistics:</strong> Official data from BLS, ONS, and international labor agencies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Industry Trends 2025 */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3 text-purple-600 dark:text-purple-400">📈</span>
                  2025 Industry Trends & Salary Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Emerging Technologies</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      AI-assisted editing tools are increasing demand for technical skills, with professionals proficient in AI tools earning 15-25% more.
                    </p>
                    <div className="text-xs text-purple-500 dark:text-purple-400">
                      <strong>Impact:</strong> +$8K-$15K salary premium for AI skills
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Remote Work Expansion</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      Remote work is expanding opportunities globally, with companies offering competitive rates regardless of location.
                    </p>
                    <div className="text-xs text-purple-500 dark:text-purple-400">
                      <strong>Impact:</strong> 20-30% increase in remote opportunities
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Content Demand Growth</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      Streaming platforms and social media are driving unprecedented demand for video content creators.
                    </p>
                    <div className="text-xs text-purple-500 dark:text-purple-400">
                      <strong>Impact:</strong> 25-35% salary growth in streaming sector
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Specialization Premium</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      Specialized skills in gaming, VR, and educational content command premium rates.
                    </p>
                    <div className="text-xs text-purple-500 dark:text-purple-400">
                      <strong>Impact:</strong> +$10K-$20K for specialized expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Tiers */}
            <div className="space-y-12 mb-16">
              {/* Entry Level */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Entry-Level Salaries</h2>
                    <p className="text-gray-600 dark:text-gray-400">0-2 years experience</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Starting salaries for assistant video editors vary significantly based on location and company size. 
                  In major markets, entry-level positions typically offer competitive compensation to attract fresh talent.
                </p>
                <div className="grid gap-4">
                  {[
                    { country: "United States", salary: "$35,000 - $55,000", currency: "annually", market: "Major cities: $45K-$65K" },
                    { country: "United Kingdom", salary: "£22,000 - £35,000", currency: "annually", market: "London: £28K-$45K" },
                    { country: "Canada", salary: "CAD 40,000 - CAD 60,000", currency: "annually", market: "Toronto/Vancouver: CAD 50K-$70K" },
                    { country: "Australia", salary: "AUD 45,000 - AUD 65,000", currency: "annually", market: "Sydney/Melbourne: AUD 55K-$75K" },
                    { country: "Remote/International", salary: "$25,000 - $45,000", currency: "annually", market: "Varies by client location" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">{item.country}</span>
                        <div className="text-right">
                          <div className="font-bold text-primary text-lg">{item.salary}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.currency}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-600 px-2 py-1 rounded">
                        {item.market}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mid Level */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Mid-Level Salaries</h2>
                    <p className="text-gray-600 dark:text-gray-400">3-5 years experience</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  As you gain experience and develop specialized skills, your earning potential increases substantially. 
                  Mid-level assistant editors often take on more complex projects and mentoring responsibilities.
                </p>
                <div className="grid gap-4">
                  {[
                    { country: "United States", salary: "$55,000 - $80,000", currency: "annually", market: "Major cities: $65K-$90K" },
                    { country: "United Kingdom", salary: "£35,000 - £50,000", currency: "annually", market: "London: £40K-$60K" },
                    { country: "Canada", salary: "CAD 60,000 - CAD 85,000", currency: "annually", market: "Toronto/Vancouver: CAD 70K-$95K" },
                    { country: "Australia", salary: "AUD 65,000 - AUD 90,000", currency: "annually", market: "Sydney/Melbourne: AUD 75K-$100K" },
                    { country: "Remote/International", salary: "$45,000 - $70,000", currency: "annually", market: "Varies by project complexity" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">{item.country}</span>
                        <div className="text-right">
                          <div className="font-bold text-primary text-lg">{item.salary}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.currency}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-600 px-2 py-1 rounded">
                        {item.market}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior Level */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Senior-Level Salaries</h2>
                    <p className="text-gray-600 dark:text-gray-400">5+ years experience</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Senior assistant video editors with extensive experience and specialized expertise can command 
                  premium salaries, especially in competitive markets and high-profile projects.
                </p>
                <div className="grid gap-4">
                  {[
                    { country: "United States", salary: "$80,000 - $120,000+", currency: "annually", market: "Major cities: $90K-$150K+" },
                    { country: "United Kingdom", salary: "£50,000 - £75,000+", currency: "annually", market: "London: £60K-$90K+" },
                    { country: "Canada", salary: "CAD 85,000 - CAD 120,000+", currency: "annually", market: "Toronto/Vancouver: CAD 95K-$140K+" },
                    { country: "Australia", salary: "AUD 90,000 - AUD 130,000+", currency: "annually", market: "Sydney/Melbourne: AUD 100K-$150K+" },
                    { country: "Remote/International", salary: "$70,000 - $100,000+", currency: "annually", market: "Varies by expertise level" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">{item.country}</span>
                        <div className="text-right">
                          <div className="font-bold text-primary text-lg">{item.salary}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.currency}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-600 px-2 py-1 rounded">
                        {item.market}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Freelance vs Full-time */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">⚖️</span>
                  Freelance vs. Full-time Compensation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Freelance assistant video editors often earn higher hourly rates but must consider additional costs 
                  like healthcare, taxes, and business expenses. Full-time positions provide stability and benefits.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">Freelance Benefits</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">Higher hourly rates ($25-$75)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">Project-based rates ($500-$3,000+)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">Work flexibility and remote options</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">Full-time Benefits</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">Health insurance coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">Paid time off and holidays</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">Retirement plans and 401(k)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Factors Affecting Salary */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">🎯</span>
                  Factors Affecting Salary
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Several key factors influence your earning potential as an assistant video editor. Understanding 
                  these variables helps you position yourself for better compensation.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { factor: "Geographic Location", description: "Major cities and production hubs pay premium rates", icon: "🌍", impact: "+15-30%" },
                    { factor: "Industry Sector", description: "Entertainment, advertising, and corporate sectors vary in pay", icon: "🎬", impact: "+20-40%" },
                    { factor: "Technical Skills", description: "Proficiency in advanced software increases value", icon: "💻", impact: "+10-25%" },
                    { factor: "Portfolio Quality", description: "Strong work samples justify higher rates", icon: "📁", impact: "+15-35%" },
                    { factor: "Network & Reputation", description: "Industry connections lead to better opportunities", icon: "🤝", impact: "+20-50%" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.factor}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                        <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                          Salary Impact: {item.impact}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Growth & Negotiation */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📈</span>
                    Career Growth Opportunities
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Master advanced editing techniques and software",
                      "Focus on specific genres or technical areas",
                      "Take on mentoring and project management roles",
                      "Build relationships with industry professionals",
                      "Stay updated with industry trends and technology"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary-800 dark:text-primary-200">
                      💡 <strong>Pro Tip:</strong> Consider specializing in emerging areas like VR content, 
                      AI-assisted editing, or educational video production for higher earning potential.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">💪</span>
                    Negotiation Strategies
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Research market rates for your experience level",
                      "Emphasize unique skills and achievements",
                      "Evaluate benefits, flexibility, and growth opportunities",
                      "Prepare responses to common questions",
                      "Choose optimal moments for salary discussions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary-800 dark:text-primary-200">
                      💡 <strong>Pro Tip:</strong> Always negotiate the total compensation package, not just salary. 
                      Benefits, remote work options, and professional development can add significant value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">🔗</span>
                  Related Resources
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Career Development</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/guides/how-to-become" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → How to Become an Assistant Video Editor
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides/skills" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Essential Skills for Video Editors
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides/resume-portfolio" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Building Your Portfolio & Resume
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Job Search</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/jobs/resources" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Top Job Platforms 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs/freelance-vs-fulltime" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Freelance vs Full-time Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/tools" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Free Tools & Resources
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/finding-freelance-clients" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Finding Freelance Clients Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides/what-does-an-assistant-video-editor-do" className="text-blue-600 dark:text-blue-400 hover:underline">
                          → Understanding the Role
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl p-8 border border-primary/20 dark:border-primary/30">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">✨</span>
                  Conclusion
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Understanding salary expectations and career growth opportunities empowers you to make informed 
                  decisions about your video editing career. Focus on developing valuable skills, building a strong 
                  portfolio, and positioning yourself strategically in the market. Remember that compensation is 
                  just one aspect of career satisfaction - consider growth opportunities, work-life balance, and 
                  alignment with your long-term goals.
                </p>
                <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    🔗 <strong>Next Steps:</strong> Explore our{" "}
                    <Link href="/jobs/resources" className="underline hover:text-primary-600">
                      top job platforms guide
                    </Link>{" "}
                    to find opportunities, or compare{" "}
                    <Link href="/jobs/freelance-vs-fulltime" className="underline hover:text-primary-600">
                      freelance vs full-time opportunities
                    </Link>{" "}
                    to make informed career decisions.
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
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">About the Author</h3>
                  <div className="mb-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Michael Rodriguez</strong> - Senior Video Editor & Career Consultant
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      With over 12 years of experience in the video editing industry, Michael has worked with 
                      major studios including Netflix, Warner Bros., and independent production companies. 
                      He's an Adobe Certified Professional and member of the Video Editing Association.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Experience</div>
                      <div className="text-gray-600 dark:text-gray-400">12+ years</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Certifications</div>
                      <div className="text-gray-600 dark:text-gray-400">Adobe Certified Pro</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Specialties</div>
                      <div className="text-gray-600 dark:text-gray-400">Career Guidance</div>
                    </div>
                  </div>
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
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">About the Author</h3>
                  <div className="mb-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Michael Rodriguez</strong> - Senior Video Editor & Career Consultant
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      With over 12 years of experience in the video editing industry, Michael has worked with 
                      major studios including Netflix, Warner Bros., and independent production companies. 
                      He's an Adobe Certified Professional and member of the Video Editing Association.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Experience</div>
                      <div className="text-gray-600 dark:text-gray-400">12+ years</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Certifications</div>
                      <div className="text-gray-600 dark:text-gray-400">Adobe Certified Pro</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Specialties</div>
                      <div className="text-gray-600 dark:text-gray-400">Career Guidance</div>
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
                Ready to Advance Your Career?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Explore more resources to help you succeed in the video editing industry
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
                  href="/guides/resume-portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  📁 Portfolio Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
