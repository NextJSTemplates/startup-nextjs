import Link from "next/link";

interface JobCategoryCardProps {
  title: string;
  count: string;
  description: string;
  path: string;
  icon: string;
}

const JobCategoryCard = ({ title, count, description, path, icon }: JobCategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-4xl">{icon}</span>
          {count && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {count} jobs
            </span>
          )}
        </div>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
          {description}
        </p>
        <Link
          href={path}
          className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
        >
          Browse Jobs
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
  );
};

const JobPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
            Find Your Next Assistant Video Editor Job
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Browse hundreds of opportunities across different categories
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <JobCategoryCard 
            title="Entry Level Jobs"
            count="45+"
            description="Perfect for beginners starting their career"
            path="/jobs/entry-level-assistant-video-editor"
            icon="🎯"
          />
          <JobCategoryCard 
            title="Remote Positions"
            count="67+"
            description="Work from anywhere in the world"
            path="/jobs/remote-assistant-video-editor"
            icon="🌍"
          />
          <JobCategoryCard 
            title="Freelance Opportunities"
            count="89+"
            description="Flexible work arrangements"
            path="/jobs/freelance-assistant-video-editor"
            icon="💼"
          />
        </div>
        
        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
          >
            View All Jobs
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobPreview;
