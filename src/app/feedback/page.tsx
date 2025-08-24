import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | Assistant Video Editor Jobs",
  description: "Share your feedback, suggestions, and help us improve our video editing job platform.",
};

const Feedback = () => {
  return (
    <>
      <Breadcrumb
        pageName="Feedback"
        description="Help us improve by sharing your thoughts and suggestions"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-500/5 to-primary/10 dark:from-primary/10 dark:via-blue-500/10 dark:to-primary/20 py-20 lg:py-28">
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -z-10 opacity-30">
          <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute left-0 bottom-0 -z-10 opacity-30">
          <div className="w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary/80 mb-6">
                💬 Feedback & Support
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              We Value Your{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Feedback
              </span>
            </h1>
            
            <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark md:text-xl lg:text-2xl">
              Your feedback helps us improve our platform and provide better services for the video editing community. 
              Together, we can build something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:feedback@assistantvideoeditorjobs.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Feedback
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white/50 px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-lg transition-all dark:bg-gray-800/50 dark:border-primary/30 dark:text-primary/80 dark:hover:bg-primary dark:hover:text-white"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Categories Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary/80 mb-6">
                📋 Categories
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
                What Would You Like to{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Share?
                </span>
              </h2>
              <p className="text-lg text-body-color dark:text-body-color-dark md:text-xl">
                Choose the category that best fits your feedback or suggestion
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Platform Experience */}
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Platform Experience</h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  Website navigation, usability, mobile responsiveness, and performance
                </p>
                <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                  <li>• Navigation and usability</li>
                  <li>• Mobile responsiveness</li>
                  <li>• Loading speed</li>
                </ul>
              </div>

              {/* Content & Features */}
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.33 1.33 2.414 2.414 2.414 2.414a2 2 0 01-2.414 2.414l-5-5A2 2 0 018 20.172V21H7V4z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Content & Features</h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  Job listings, guides, tools, and new feature suggestions
                </p>
                <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                  <li>• Job listings quality</li>
                  <li>• Educational resources</li>
                  <li>• New feature ideas</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">Technical Issues</h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  Bugs, broken links, form problems, and compatibility issues
                </p>
                <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                  <li>• Bug reports</li>
                  <li>• Broken links</li>
                  <li>• Browser issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary/80 mb-6">
                📤 Submit
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
                How to{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Submit Feedback
                </span>
              </h2>
              <p className="text-lg text-body-color dark:text-body-color-dark md:text-xl">
                Multiple ways to share your thoughts and suggestions
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Email */}
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Email Us</h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  Send detailed feedback to our dedicated team
                </p>
                <a
                  href="mailto:feedback@assistantvideoeditorjobs.com"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  feedback@assistantvideoeditorjobs.com
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Social Media */}
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4v2h6V4M9 4h6" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Social Media</h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  Connect with us on various social platforms
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-body-color dark:text-body-color-dark">• Twitter: @assistantvideoeditor</p>
                  <p className="text-body-color dark:text-body-color-dark">• LinkedIn: Assistant Video Editor</p>
                  <p className="text-body-color dark:text-body-color-dark">• YouTube: @assistantvideoeditor</p>
                </div>
              </div>

              {/* Community Forum */}
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Community Forum</h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  Join discussions and share feedback with other users
                </p>
                <a
                  href="/community"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Join Community
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Recognition Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary/80 mb-6">
                🔄 Process
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
                What Happens{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Next?
                </span>
              </h2>
              <p className="text-lg text-body-color dark:text-body-color-dark md:text-xl">
                Our feedback process and how we recognize your contributions
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Process Steps */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Our Process</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Review", desc: "We review all feedback within 24-48 hours" },
                    { step: "2", title: "Analysis", desc: "We analyze patterns and prioritize improvements" },
                    { step: "3", title: "Implementation", desc: "We implement changes based on user needs" },
                    { step: "4", title: "Communication", desc: "We keep you updated on progress" },
                    { step: "5", title: "Follow-up", desc: "We may ask for additional details" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white">{item.title}</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recognition */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Recognition</h3>
                <div className="space-y-4">
                  {[
                    "Feature your suggestions in our updates",
                    "Give you early access to new features",
                    "Include you in our beta testing program",
                    "Recognize your contribution in our community",
                    "Special mention in our monthly newsletter"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                      <p className="text-sm text-body-color dark:text-body-color-dark">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/10 dark:from-primary/10 dark:via-blue-500/10 dark:to-primary/20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary/80 mb-6">
                🚀 Get Started
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Share Your Feedback?
              </span>
            </h2>
            
            <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark md:text-xl">
              Your input helps us create a better platform for everyone in the video editing community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:feedback@assistantvideoeditorjobs.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Feedback Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white/50 px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-lg transition-all dark:bg-gray-800/50 dark:border-primary/30 dark:text-primary/80 dark:hover:bg-primary dark:hover:text-white"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
