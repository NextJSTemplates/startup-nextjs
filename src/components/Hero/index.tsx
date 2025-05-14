import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Product Designer",
    image: "/images/hero/member1.svg",
  },
  {
    name: "Product Manager",
    image: "/images/hero/member3.svg",
  },
  {
    name: "Software Developer",
    image: "/images/hero/member2.svg",
  },
  {
    name: "Software Tester",
    image: "/images/hero/member4.svg",
  },
];

const teamOne = teamMembers.slice(0, teamMembers.length / 2);
const teamTwo = teamMembers.slice(teamMembers.length / 2);

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[url('/images/hero/background.svg')] bg-cover bg-center pt-[120px] pb-8 md:pt-[160px] md:pb-[16px] xl:pt-[210px] xl:pb-[90px] 2xl:pt-[180px] 2xl:pb-[80px]"
      >
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            <div className="w-full lg:col-span-2">
              <div className="max-w-[900px] text-start text-white">
                <h5 className="mb-6 text-sm tracking-widest text-white uppercase">
                  Empower. Innovate. Transform
                </h5>
                <h1 className="text-md mb-6 max-w-2xl leading-tight font-extrabold sm:text-lg md:text-xl lg:text-4xl">
                  Certified Software Development Agency Offering Premium
                  Solutions At Competitive Prices
                </h1>
                <p className="mb-8 w-full max-w-sm text-[14px] sm:text-base md:max-w-md lg:max-w-xl">
                  Aligning your vision with top-rated software solutions driven
                  by innovating AI, AR/VR, and Cloud technologies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="hover:bg-opacity-90 flex gap-2 rounded-full border border-white px-6 py-3 text-sm font-bold text-white"
                  >
                    LET’S TALK
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 rounded-full border border-white px-6 py-3 text-[13.5px] font-bold text-white hover:bg-white hover:text-black md:text-[14px]"
                  >
                    CONTACT US FOR SOLUTIONS
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 rounded-full border border-white px-4 py-3 text-[13.5px] font-bold text-white hover:bg-white hover:text-black md:text-[14px]"
                  >
                    OUR SERVICES
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative mt-12 w-full md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex -translate-y-6 flex-col items-center space-y-6">
                  {teamOne.map((member, index) => (
                    <div
                      key={index}
                      className={`transform ${
                        index % 2 === 0
                          ? "translate-x-1 sm:translate-x-2 md:translate-x-4"
                          : "-translate-x-1 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-6"
                      } overflow-hidden rounded-xl border border-white bg-transparent p-4 shadow-2xl backdrop-blur-[4px]`}
                    >
                      <div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="rounded-lg"
                        />
                      </div>
                      <p className="-translate-y-4 rounded-b-lg bg-black p-3 text-center text-[13px] font-medium text-white md:text-[10px] lg:text-[13px]">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex translate-y-6 flex-col items-center space-y-6">
                  {teamTwo.map((member, index) => (
                    <div
                      key={index}
                      className={`transform ${
                        index % 2 === 0
                          ? "translate-x-1 sm:translate-x-3 md:translate-x-6 lg:translate-x-6"
                          : "-translate-x-1 sm:-translate-x-2 md:-translate-x-2 lg:-translate-x-3"
                      } overflow-hidden rounded-xl border border-white bg-transparent p-4 shadow-2xl backdrop-blur-[4px]`}
                    >
                      <div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="rounded-lg"
                        />
                      </div>
                      <p className="-translate-y-4 rounded-b-lg bg-black p-3 text-center text-[13px] font-medium text-white md:text-[10px] lg:text-[13px]">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-6 flex w-full justify-center lg:px-4 lg:justify-end">
        <div className="z-10 flex items-center gap-2 rounded-xs bg-white px-6 py-4 text-[13px] font-bold text-black shadow-xl">
          <p>AR/VR</p> -
          <p>Mobile Apps</p> -
          <p>Artificial Intelligence</p> -
          <p>Software Engineering</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
