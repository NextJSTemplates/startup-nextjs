"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import { teamMembers } from "./heroData";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const teamOne = teamMembers.slice(0, teamMembers.length / 2);
const teamTwo = teamMembers.slice(teamMembers.length / 2);
const words = ["Scalable", "Secure", "Intelligent"];

const staggerWords = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const wordFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[160px] pb-24 md:pt-[160px] md:pb-[32px] lg:h-screen xl:pt-[160px] xl:pb-[60px] 2xl:pt-[180px] 2xl:pb-[80px]"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="md:max-w-8xl relative z-10 container mx-auto lg:max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="w-full ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mx-auto max-w-[900px] text-black dark:text-white"
              >
                <motion.div
                  variants={staggerWords}
                  initial="hidden"
                  whileInView="visible"
                  className="mb-6 flex gap-3 text-[13.5px] font-bold tracking-widest uppercase"
                >
                  {["Empower.", "Innovate.", "Transform"].map((word, idx) => (
                    <motion.span key={idx} variants={wordFadeUp}>
                      {word}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-6 max-w-2xl leading-tight font-extrabold text-3xl md:text-4xl lg:text-5xl"
                >
                  We Build{" "}
                  <FlipWords
                    words={words}
                    className="inline-block font-bold text-black dark:text-white"
                  />{" "}
                  Software
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-8 w-full max-w-sm text-[13px] sm:text-[15px] md:max-w-md lg:max-w-xl text-black dark:text-white"
                >
                  Certified software experts blending precision and creativity
                  to deliver powerful, affordable solutions tailored to your
                  business. End-to-end development, seamless integration, and
                  ongoing support — all at unmatched value.
                </motion.p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.6,
                      },
                    },
                  }}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    {
                      label: "LET'S TALK",
                      icon: <ExternalLink className="ml-1.5 h-3.5 w-3.5" />,
                    },
                    {
                      label: "CONTACT US FOR SOLUTIONS",
                      icon: <ExternalLink className="ml-1.5 h-4 w-4" />,
                    },
                    {
                      label: "OUR SERVICES",
                      icon: <ArrowRight className="ml-1.5 h-4 w-4" />,
                    },
                  ].map((btn, idx) => (
                    <motion.div
                      key={idx}
                      variants={wordFadeUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        borderRadius="1.75rem"
                        className="border-neutral-400 bg-white dark:bg-black px-4 text-[12px] font-bold text-black dark:text-white dark:border-slate-800"
                      >
                        {btn.label} {btn.icon}
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="relative mt-6 w-full md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-12 lg:gap-8 px-4">
                {[teamOne, teamTwo].map((team, colIndex) => (
                  <div
                    key={colIndex}
                    className={`flex flex-col items-center space-y-6 ${
                      colIndex === 0 ? "-translate-y-6" : "translate-y-6"
                    }`}
                  >
                    {team.map((member, index) => {
                      const bounceClass =
                        index % 3 === 0
                          ? "bounce-slow"
                          : index % 3 === 1
                            ? "bounce-medium"
                            : "bounce-fast";

                      const xTranslate =
                        index % 2 === 0
                          ? "translate-x-2 sm:translate-x-3 md:translate-x-4"
                          : "-translate-x-2 sm:-translate-x-3 md:-translate-x-4";

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 * index,
                            ease: "easeOut",
                          }}
                          className={`transform ${bounceClass} ${xTranslate} h-60 w-full md:w-45 lg:w-60 overflow-hidden rounded-xl border border-neutral-250 bg-transparent p-4 shadow-lg backdrop-blur-[2px]`}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-center"
                          >
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={200}
                              height={50}
                              className="h-45 w-full md:w-80 sm:w-90 rounded-lg object-cover shadow-lg"
                            />
                          </motion.div>
                          <p className="-translate-y-2 rounded-b-lg bg-black p-2 text-center text-[12px] font-medium text-white md:text-[10px] lg:text-[12px]">
                            {member.name}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech strip bottom animation */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex w-full justify-center rounded-md lg:justify-end"
      >
        <div className="bg-black ps-2 z-20 -translate-y-6">
          <div className="z-10 flex translate-y-2 items-center gap-2 rounded-xs bg-white px-6 py-4 text-[13px] font-bold text-black shadow-xl">
            <p>AR/VR</p> -<p>Mobile Apps</p> -<p>Artificial Intelligence</p> -
            <p>Software Engineering</p>
          </div>
        </div>
      </motion.div> */}
    </>
  );
};
