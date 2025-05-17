import { ArrowRight, ExternalLink } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import { teamMembers } from "./heroData";
import { motion } from "framer-motion";

const teamOne = teamMembers.slice(0, teamMembers.length / 2);
const teamTwo = teamMembers.slice(teamMembers.length / 2);
const words = ["Scalable", "Secure", "Intelligent"];

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-8 md:pt-[160px] md:pb-[16px] xl:pt-[210px] xl:pb-[90px] 2xl:pt-[180px] 2xl:pb-[80px]"
      >
        <div className="relative z-10 container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            <div className="w-full lg:col-span-2">
              <div
                className="text-dark mx-auto max-w-[900px]"
              >
                <h5 className="text-dark mb-6 text-[13.5px] font-bold tracking-widest uppercase">
                  Empower. Innovate. Transform
                </h5>
                <h1 className="text-md mb-6 max-w-2xl leading-tight font-extrabold sm:text-lg md:text-xl lg:text-4xl">
                  We Build <FlipWords words={words} />
                  Software
                </h1>
                <p className="mb-8 w-full max-w-sm text-[13px] sm:text-[14px] md:max-w-md lg:max-w-xl">
                  Certified software experts blending precision and creativity
                  to deliver powerful, affordable solutions tailored to your
                  business.. End-to-end development, seamless integration, and
                  ongoing support — all at unmatched value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    borderRadius="1.75rem"
                    className="border-neutral-200 bg-white px-4 text-[13px] font-bold text-black hover:scale-[1.05] dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  >
                    LET&apos;S TALK
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                  <Button
                    borderRadius="1.75rem"
                    className="border-neutral-200 bg-white px-4 font-bold text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  >
                    CONTACT US FOR SOLUTIONS
                    <ExternalLink className="ml-1.5 h-4 w-4" />
                  </Button>
                  <Button
                    borderRadius="1.75rem"
                    className="border-neutral-200 bg-white px-4 font-bold text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  >
                    OUR SERVICES
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative mt-6 w-full md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex -translate-y-6 flex-col items-center space-y-6">
                  {teamOne.map((member, index) => {
                    const bounceClass =
                      index % 3 === 0
                        ? "bounce-slow"
                        : index % 3 === 1
                          ? "bounce-medium"
                          : "bounce-fast";
                    return (
                      <div
                        key={index}
                        className={`transform ${bounceClass} ${
                          index % 2 === 0
                            ? "translate-x-1 sm:translate-x-2 md:translate-x-4"
                            : "-translate-x-1 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-6"
                        } overflow-hidden rounded-xl border border-white bg-transparent p-3 shadow-2xl backdrop-blur-[4px]`}
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
                    );
                  })}
                </div>

                <div className="flex translate-y-6 flex-col items-center space-y-6">
                  {teamTwo.map((member, index) => {
                    const bounceClass =
                      index % 3 === 0
                        ? "bounce-fast"
                        : index % 3 === 1
                          ? "bounce-slow"
                          : "bounce-medium";
                    return (
                      <div
                        key={index}
                        className={`transform ${bounceClass} ${
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center rounded-md lg:justify-end">
        <div className="z-10 flex items-center gap-2 rounded-xs bg-white px-6 py-4 text-[13px] font-bold text-black shadow-xl">
          <p>AR/VR</p> -<p>Mobile Apps</p> -<p>Artificial Intelligence</p> -
          <p>Software Engineering</p>
        </div>
      </div>
    </>
  );
};

