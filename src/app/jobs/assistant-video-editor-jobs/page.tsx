import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistant Video Editor Jobs - Full-Time Positions",
  description: "Browse full-time assistant video editor positions at top companies and studios. Find your next career opportunity in video editing.",
  keywords: [...siteConfig.keywords, "full-time jobs", "video editing positions"],
};

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Assistant Video Editor",
    company: "Netflix Studios",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$45,000 - $65,000",
    posted: "2 days ago",
    description: "We're looking for a talented Assistant Video Editor to join our post-production team...",
  },
  {
    id: 2,
    title: "Junior Video Editor",
    company: "Disney+",
    location: "Burbank, CA",
    type: "Full-time",
    salary: "$40,000 - $60,000",
    posted: "1 week ago",
    description: "Join our creative team as a Junior Video Editor working on exciting content...",
  },
  {
    id: 3,
    title: "Assistant Editor",
    company: "HBO Max",
    location: "New York, NY",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    posted: "3 days ago",
    description: "HBO Max is seeking an Assistant Editor for our original content division...",
  },
];

export default function AssistantVideoEditorJobsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Assistant Video Editor{" "}
              <span className="text-primary">Jobs</span>
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Find full-time assistant video editor positions at top companies and studios. 
              Start your career in the exciting world of video editing.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Available Positions
            </h2>
            <div className="flex items-center space-x-4">
              <select className="rounded-sm border border-gray-300 px-4 py-2 text-sm dark:border-gray-600 dark:bg-dark">
                <option>Sort by: Latest</option>
                <option>Sort by: Salary</option>
                <option>Sort by: Location</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {mockJobs.map((job) => (
              <div
                key={job.id}
                className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-lg text-body-color dark:text-body-color-dark">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-center space-x-6 text-sm text-body-color dark:text-body-color-dark">
                    <div className="flex items-center">
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.posted}
                    </div>
                  </div>
                  
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    {job.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/jobs/assistant-video-editor-jobs/${job.id}`}
                      className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                    >
                      View Details
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
                    <button className="rounded-sm border border-primary px-6 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white">
                      Quick Apply
                    </button>
                  </div>
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
                Can't Find the Right Position?
              </h2>
              <p className="mb-8 text-base text-white/80 lg:text-lg">
                Browse other job categories or set up job alerts to be notified when new positions become available.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-base font-medium text-primary hover:bg-gray-100"
                >
                  Browse All Jobs
                </Link>
                <Link
                  href="/jobs/remote-assistant-video-editor"
                  className="inline-flex items-center justify-center rounded-sm border border-white px-8 py-3 text-center text-base font-medium text-white hover:bg-white hover:text-primary"
                >
                  Remote Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
