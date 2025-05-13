import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-[url('/images/hero/background.webp')] bg-cover bg-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/90 to-white/30"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-2/3">
            <div className="max-w-[800px] text-start text-white">
              <h5 className="mb-6 text-sm font-bold tracking-widest text-white uppercase">
                Empower. Innovate. Transform
              </h5>
              <h1 className="mb-6 text-4xl leading-tight font-extrabold sm:text-5xl">
                Certified Software Development Agency Offering Premium Solutions
                At Competitive Prices
              </h1>
              <p className="mb-8 text-base max-w-[600px]">
                Aligning your vision with top-rated software solutions driven by
                innovating AI, AR/VR, and Cloud technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="flex hover:bg-opacity-90 rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
                >
                  LET’S TALK
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex rounded-full border border-white px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
                >
                  CONTACT US FOR SOLUTIONS
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex rounded-full border border-white px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
                >
                  OUR SERVICES
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full mt-12 md:mt-0 md:w-1/3 lg:w-1/2">
            <div className="absolute top-0 right-0 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur p-2">
                  <img src="/images/hero/background.webp" alt="Product Designer" className="rounded-lg" />
                  <p className="mt-2 text-white text-center text-sm font-medium">Product Designer</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur p-2">
                  <img src="/images/hero/background.webp" alt="Product Manager" className="rounded-lg" />
                  <p className="mt-2 text-white text-center text-sm font-medium">Product Manager</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur p-2">
                  <img src="/images/hero/background.webp" alt="Software Developer" className="rounded-lg" />
                  <p className="mt-2 text-white text-center text-sm font-medium">Software Developer</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur p-2">
                  <img src="/images/hero/background.webp" alt="Software Tester" className="rounded-lg" />
                  <p className="mt-2 text-white text-center text-sm font-medium">Software Tester</p>
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
