import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-sm bg-primary px-8 py-12 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Ready to Start Your Assistant Video Editor Career?
            </h2>
            <p className="mb-8 text-base text-white/80 lg:text-lg">
              Join thousands of video editors who have found their dream jobs through our platform.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-center text-base font-medium text-primary hover:bg-gray-100"
              >
                Browse Jobs
              </Link>
              <Link
                href="/guides/how-to-become"
                className="inline-flex items-center justify-center rounded-sm border border-white px-8 py-3 text-center text-base font-medium text-white hover:bg-white hover:text-primary"
              >
                Career Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
