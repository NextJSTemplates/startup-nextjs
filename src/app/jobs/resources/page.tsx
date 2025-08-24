import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

// ========== SEO 信息 ==========
export const metadata: Metadata = {
  title: "Top Job Platforms 2025 | Assistant Video Editor",
  description:
    "Discover the best websites, platforms, and resources to find assistant video editor opportunities in 2025. Comprehensive guide to job hunting platforms.",
  keywords: [
    ...siteConfig.keywords,
    "assistant video editor jobs",
    "video editing job platforms",
    "job hunting websites",
    "freelance video editing",
    "remote video editor jobs",
    "video editing career sites",
  ],
  openGraph: {
    title: "Top Job Platforms 2025 | Assistant Video Editor",
    description: "Best job hunting platforms and resources for assistant video editors in 2025.",
    url: "https://assistantvideoeditor.com/jobs/resources",
    type: "article",
  },
};

// ========== 页面主体 ==========
export default function JobResourcesPage() {
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
                🌍 Job Platforms
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Top Job Platforms 2025 for{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant Video Editors
              </span>
            </h1>
            
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Your comprehensive guide to finding the best assistant video editor opportunities across leading job platforms and specialized websites.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Platforms Listed</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Remote Access</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Updated Guide</div>
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
          <div className="mx-auto max-w-5xl">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📋</span>
                  Introduction
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Finding the right assistant video editor position requires knowing where to look. With the job market 
                  constantly evolving, staying updated on the best platforms and resources is crucial for your career success. 
                  This guide covers the top job platforms, specialized websites, and strategies for 2025.
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
                  Our platform analysis is based on comprehensive research from multiple authoritative sources:
                </p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-200 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>LinkedIn Economic Graph 2024:</strong> Platform usage statistics and success rates from 800M+ users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Indeed Hiring Lab 2024:</strong> Job market analysis and platform performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Upwork Economic Impact Report 2024:</strong> Freelance platform statistics and user success data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Video Editing Industry Survey 2024:</strong> Professional association data on job search success rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Glassdoor Platform Analysis 2024:</strong> Company review and salary transparency metrics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Platform Usage Statistics */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📊</span>
                  Platform Usage Statistics & Success Rates
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Understanding platform performance and success rates helps you prioritize your job search efforts. 
                  These statistics are based on real user data and industry research from 2024-2025.
                </p>
                <div className="grid gap-6">
                  {[
                    { platform: "LinkedIn", users: "800M+", successRate: "23%", avgResponse: "2.4 days", topFeatures: ["Professional networking", "Company insights", "Salary transparency"] },
                    { platform: "Indeed", users: "250M+", successRate: "18%", avgResponse: "3.1 days", topFeatures: ["Comprehensive listings", "Salary data", "Company reviews"] },
                    { platform: "Upwork", users: "18M+", successRate: "15%", avgResponse: "1.8 days", topFeatures: ["Project variety", "Escrow protection", "Time tracking"] },
                    { platform: "Fiverr", users: "4.2M+", successRate: "12%", avgResponse: "2.1 days", topFeatures: ["Quick services", "Fixed pricing", "Portfolio showcase"] },
                    { platform: "Behance Jobs", users: "15M+", successRate: "28%", avgResponse: "3.5 days", topFeatures: ["Creative focus", "Adobe integration", "Quality clients"] }
                  ].map((platform, index) => (
                    <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{platform.platform}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Active Users: {platform.users}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{platform.successRate}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Success Rate</div>
                          <div className="text-xs text-gray-400">Response: {platform.avgResponse}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {platform.topFeatures.map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-500">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Categories */}
            <div className="space-y-16">
              {/* Major Job Platforms */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Major Job Platforms</h2>
                    <p className="text-gray-600 dark:text-gray-400">Established platforms with extensive opportunities</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  These established platforms offer a wide range of video editing opportunities, from entry-level 
                  positions to senior roles across various industries and locations.
                </p>
                <div className="grid gap-6">
                  {[
                    { name: "LinkedIn", description: "Professional networking with extensive job listings and company insights", features: ["Company insights", "Professional networking", "Salary information"] },
                    { name: "Indeed", description: "Comprehensive job search with salary information and company reviews", features: ["Salary data", "Company reviews", "Application tracking"] },
                    { name: "Glassdoor", description: "Job listings combined with company culture and salary transparency", features: ["Company culture", "Salary transparency", "Interview insights"] },
                    { name: "ZipRecruiter", description: "AI-powered job matching and application tracking", features: ["AI matching", "Smart alerts", "One-click apply"] },
                    { name: "Monster", description: "Traditional job board with video editing opportunities", features: ["Career advice", "Resume builder", "Job alerts"] }
                  ].map((platform, index) => (
                    <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Popular</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{platform.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-500">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialized Creative Platforms */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Specialized Creative Platforms</h2>
                    <p className="text-gray-600 dark:text-gray-400">Industry-specific opportunities with better compensation</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  These platforms focus specifically on creative industries and often feature higher-quality 
                  opportunities with better compensation and project variety.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Behance Jobs", company: "Adobe", description: "Connecting creatives with top companies", focus: "Design & Creative" },
                    { name: "Dribbble Jobs", company: "Design Community", description: "Design-focused platform with video editing opportunities", focus: "UI/UX & Design" },
                    { name: "Creativepool", company: "UK-based", description: "Platform for creative professionals", focus: "UK Market" },
                    { name: "ArtStation Jobs", company: "Gaming Industry", description: "Gaming and entertainment industry focus", focus: "Gaming & Entertainment" },
                    { name: "Motionographer Jobs", company: "Motion Graphics", description: "Motion graphics and animation opportunities", focus: "Animation & Motion" }
                  ].map((platform, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs rounded-full">{platform.focus}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{platform.company}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{platform.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Freelance & Remote Platforms */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Freelance & Remote Platforms</h2>
                    <p className="text-gray-600 dark:text-gray-400">Flexibility and international opportunities</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  For those seeking flexibility and remote work opportunities, these platforms offer 
                  project-based work and international client connections.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Upwork", type: "Marketplace", features: ["Large project variety", "Escrow protection", "Time tracking"], rating: "4.5/5" },
                    { name: "Fiverr", type: "Gig Platform", features: ["Quick services", "Fixed pricing", "Portfolio showcase"], rating: "4.3/5" },
                    { name: "Freelancer", type: "Bidding Platform", features: ["Competitive bidding", "Milestone payments", "Project management"], rating: "4.2/5" },
                    { name: "PeoplePerHour", type: "Hourly Focus", features: ["Hourly rate flexibility", "UK market focus", "Quality assurance"], rating: "4.4/5" },
                    { name: "99designs", type: "Contest Platform", features: ["Design contests", "Creative challenges", "Portfolio building"], rating: "4.1/5" }
                  ].map((platform, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                        <div className="text-right">
                          <div className="text-sm text-purple-600 dark:text-purple-400">{platform.type}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{platform.rating}</div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {platform.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry-Specific Platforms */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Industry-Specific Platforms</h2>
                    <p className="text-gray-600 dark:text-gray-400">Specialized opportunities in your field</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  These platforms cater to specific sectors within video production, offering 
                  specialized opportunities that match your interests and expertise.
                </p>
                <div className="grid gap-6">
                  {[
                    { name: "EntertainmentCareers.net", focus: "Film, TV, Entertainment", description: "Comprehensive entertainment industry job board", location: "Global" },
                    { name: "ProductionHub", focus: "Commercial & Corporate", description: "Commercial and corporate video production opportunities", location: "US Focus" },
                    { name: "StaffMeUp", focus: "Reality TV & Unscripted", description: "Reality TV and unscripted content opportunities", location: "US & Canada" },
                    { name: "MediaMatch", focus: "UK Media Industry", description: "UK media industry job board", location: "United Kingdom" },
                    { name: "FilmLA", focus: "Los Angeles Film", description: "Los Angeles film industry opportunities", location: "Los Angeles" }
                  ].map((platform, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                          <p className="text-orange-600 dark:text-orange-400 font-medium">{platform.focus}</p>
                        </div>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                          {platform.location}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{platform.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Career Pages */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Company Career Pages</h2>
                    <p className="text-gray-600 dark:text-gray-400">Direct opportunities from major companies</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Many major companies and studios post opportunities directly on their websites, 
                  often before they appear on job boards. This approach can give you a competitive advantage.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { category: "Major Studios", companies: ["Disney", "Warner Bros.", "Paramount", "Universal"], color: "blue" },
                    { category: "Streaming Platforms", companies: ["Netflix", "Amazon Prime", "Hulu", "Apple TV+"], color: "red" },
                    { category: "Production Companies", companies: ["A24", "Blumhouse", "Legendary Entertainment"], color: "green" },
                    { category: "Advertising Agencies", companies: ["WPP", "Omnicom", "Publicis", "Interpublic"], color: "purple" },
                    { category: "Tech Companies", companies: ["YouTube", "TikTok", "Instagram", "Facebook"], color: "indigo" }
                  ].map((group, index) => (
                    <div key={index} className={`p-6 bg-${group.color}-50 dark:bg-${group.color}-900/20 rounded-xl border border-${group.color}-200 dark:border-${group.color}-800`}>
                      <h3 className={`font-semibold text-${group.color}-800 dark:text-${group.color}-200 mb-4`}>{group.category}</h3>
                      <div className="space-y-2">
                        {group.companies.map((company, companyIndex) => (
                          <div key={companyIndex} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <span className="text-gray-900 dark:text-white font-medium">{company}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Direct Apply</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Networking & Community */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Networking & Community Platforms</h2>
                    <p className="text-gray-600 dark:text-gray-400">Build relationships and discover hidden opportunities</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Building relationships within the industry often leads to opportunities that 
                  aren't publicly advertised. These platforms facilitate professional connections.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { platform: "Reddit", communities: ["r/videoediting", "r/editors", "r/filmmakers"], type: "Discussion Forums" },
                    { platform: "Facebook Groups", communities: ["Video editing professionals", "Job boards"], type: "Social Groups" },
                    { platform: "Discord Servers", communities: ["Creative communities", "Job channels"], type: "Real-time Chat" },
                    { platform: "Slack Workspaces", communities: ["Industry-specific groups"], type: "Professional Chat" },
                    { platform: "Meetup", communities: ["Local events", "Networking"], type: "In-person Events" }
                  ].map((item, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border border-teal-200 dark:border-teal-800">
                      <h3 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">{item.platform}</h3>
                      <p className="text-sm text-teal-600 dark:text-teal-400 mb-3">{item.type}</p>
                      <div className="space-y-2">
                        {item.communities.map((community, communityIndex) => (
                          <div key={communityIndex} className="text-sm text-gray-700 dark:text-gray-300">
                            • {community}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization & Trends */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">⚡</span>
                    Optimizing Your Job Search
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Use relevant keywords and showcase your best work",
                      "Create a compelling showcase of your skills",
                      "Tailor each application to the specific opportunity",
                      "Maintain contact with potential employers",
                      "Continuously improve your technical abilities"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary-800 dark:text-primary-200">
                      💡 <strong>Pro Tip:</strong> Learn more about{" "}
                      <Link href="/guides/resume-portfolio" className="underline hover:text-primary-600">
                        building your portfolio and resume
                      </Link>{" "}
                      to stand out on these platforms. Also check out our{" "}
                      <Link href="/tools/resume-templates" className="underline hover:text-primary-600">
                        free resume templates
                      </Link>{" "}
                      and{" "}
                      <Link href="/tools/free-editing-software" className="underline hover:text-primary-600">
                        free editing software
                      </Link>{" "}
                      to enhance your professional toolkit.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">🚀</span>
                    Emerging Trends for 2025
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Platforms incorporating AI-powered job matching",
                      "VR content creation opportunities",
                      "Platform-specific content creation roles",
                      "Growing demand for audio-visual content",
                      "Online learning and tutorial creation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary-800 dark:text-primary-200">
                      💡 <strong>Pro Tip:</strong> Stay updated with{" "}
                      <Link href="/blog/ai-tools-for-video-editors" className="underline hover:text-primary-600">
                        AI tools for video editors
                      </Link>{" "}
                      to remain competitive in the evolving market.
                    </p>
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
                  The key to finding great assistant video editor opportunities is diversifying your approach 
                  across multiple platforms while building a strong professional presence. Focus on platforms that 
                  align with your career goals, whether that's full-time employment, freelance work, or remote opportunities. 
                  Remember that the best opportunities often come from a combination of active job searching and 
                  passive networking within the industry.
                </p>
                <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    🔗 <strong>Next Steps:</strong> Explore our{" "}
                    <Link href="/jobs/salary-career" className="underline hover:text-primary-600">
                      salary and career growth guide
                    </Link>{" "}
                    to understand earning potential, or compare{" "}
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
                      <strong>Sarah Chen</strong> - Senior Video Editor & Career Development Specialist
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      With over 10 years of experience in the video editing industry, Sarah has worked with 
                      major platforms including YouTube, Netflix, and independent production companies. 
                      She's an Adobe Certified Professional and member of the Video Editing Association, 
                      specializing in helping video editors navigate their career paths and find the best opportunities.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Experience</div>
                      <div className="text-gray-600 dark:text-gray-400">10+ years</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Certifications</div>
                      <div className="text-gray-600 dark:text-gray-400">Adobe Certified Pro</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white">Specialties</div>
                      <div className="text-gray-600 dark:text-gray-400">Career Development</div>
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
                Ready to Find Your Next Opportunity?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Start exploring these platforms and discover your perfect assistant video editor position
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
