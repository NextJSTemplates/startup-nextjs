import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white bg-[url('/images/hero/background.webp')] bg-cover bg-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/90 to-white/50"></div>

        <div className="relative z-10 container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[800px] text-start">
                <h5 className="mb-4 text-lg leading-tight font-bold text-white sm:text-xl sm:leading-tight md:leading-tight dark:text-white">
                  Empower. Innovate. Transform
                </h5>
                <h1 className="mb-5 text-3xl leading-tight font-bold text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                  Certified Software Development Agency Offering Premium
                  Solutions at Competitive Prices
                </h1>
                <p className="sm:text-md mb-8 text-base leading-relaxed! text-white dark:text-white">
                  Aligning your vision with top-rated software solutions driven
                  by innovating AI, AR/VR, and Cloud technologies.
                </p>
                <div className="flex flex-col items-start justify-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-full border border-white px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/10 dark:border-white dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
