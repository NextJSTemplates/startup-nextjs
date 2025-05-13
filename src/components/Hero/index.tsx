import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[url('/images/hero/background.svg')] relative z-10 overflow-hidden bg-cover bg-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0">
          <div className="w-full md:w-2/3">
            <div className="max-w-[800px] text-start text-white">
              <h5 className="mb-6 text-sm tracking-widest text-white uppercase">
                Empower. Innovate. Transform
              </h5>
              <h1 className="mb-6 sm:text-lg md:text-xl leading-tight font-extrabold lg:text-4xl">
                Certified Software Development Agency Offering Premium Solutions
                At Competitive Prices
              </h1>
              <p className="mb-8 text-[14px] sm:text-base max-w-sm md:max-w-md lg:max-w-xl w-full">
                Aligning your vision with top-rated software solutions driven by
                innovating AI, AR/VR, and Cloud technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="hover:bg-opacity-90 rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
                >
                  LET’S TALK
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-white px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
                >
                  CONTACT US FOR SOLUTIONS
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-white px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
                >
                  OUR SERVICES →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-12 w-full md:mt-0 md:w-1/3">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex translate-y-4 flex-col items-center space-y-6">
                <div className="-translate-x-4 overflow-hidden rounded-xl border border-white bg-transparent p-4">
                  <div className="px-2">
                    <img
                      src="/images/hero/banner-image-1.svg fill.svg"
                      alt="Product Designer"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="rounded-b-lg bg-black p-3 text-center text-sm font-medium text-white">
                    Product Designer
                  </p>
                </div>
                <div className="-translate-x-8 overflow-hidden rounded-xl border border-white bg-transparent p-2">
                  <div className="px-2">
                    <img
                      src="/images/hero/banner-image-3.svg.svg"
                      alt="Product Designer"
                      className="rounded-lg"
                    />
                  </div>{" "}
                  <p className="rounded-b-lg bg-black p-3 text-center text-sm font-medium text-white">
                    Product Manager
                  </p>
                </div>
              </div>
              <div className="flex -translate-y-4 flex-col items-center space-y-6">
                <div className="-translate-x-2 overflow-hidden rounded-xl border border-white bg-transparent p-2">
                  <div className="px-2">
                    <img
                      src="/images/hero/banner-image-2.svg fill.svg"
                      alt="Product Designer"
                      className="rounded-lg"
                    />
                  </div>{" "}
                  <p className="rounded-b-lg bg-black p-3 text-center text-sm font-medium text-white">
                    Software Developer
                  </p>
                </div>
                <div className="-translate-x-6 overflow-hidden rounded-xl border border-white bg-transparent p-2">
                  <div className="px-2">
                    <img
                      src="/images/hero/banner-image-4.svg fill.svg"
                      alt="Product Designer"
                      className="rounded-lg"
                    />
                  </div>{" "}
                  <p className="rounded-b-lg bg-black p-3 text-center text-sm font-medium text-white">
                    Software Tester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
