import Link from "next/link";

interface GuideCardProps {
  title: string;
  description: string;
  path: string;
  readTime: string;
}

const GuideCard = ({ title, description, path, readTime }: GuideCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {readTime}
          </span>
        </div>
        <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
          {description}
        </p>
        <Link
          href={path}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
        >
          Read More
          <svg
            className="ml-1 h-4 w-4"
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

const GuidesPreview = () => {
  return (
    <section className="py-10 md:py-14 lg:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white lg:text-4xl">
            Master Your Assistant Video Editor Skills
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Expert guides to help you succeed in your career
          </p>
        </div>
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <GuideCard 
            title="What Does an Assistant Video Editor Do?"
            description="Learn about daily responsibilities and tasks"
            path="/guides/what-does-an-assistant-video-editor-do"
            readTime="5 min read"
          />
          <GuideCard 
            title="How to Become an Assistant Video Editor"
            description="Step-by-step career path guide"
            path="/guides/how-to-become"
            readTime="8 min read"
          />
          <GuideCard 
            title="Essential Skills"
            description="Master the required competencies"
            path="/guides/skills"
            readTime="6 min read"
          />
          <GuideCard 
            title="Resume & Portfolio Tips"
            description="Stand out from the competition"
            path="/guides/resume-portfolio"
            readTime="7 min read"
          />
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center rounded-sm border border-primary px-8 py-3 text-center text-base font-medium text-primary hover:bg-primary hover:text-white"
          >
            Explore All Guides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuidesPreview;
