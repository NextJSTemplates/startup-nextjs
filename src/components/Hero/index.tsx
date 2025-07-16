"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import { teamMembers } from "./heroData";
import { motion } from "framer-motion";
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
        className="relative z-10 overflow-hidden pt-[160px] pb-24 md:pt-[160px] md:pb-[32px] lg:h-screen xl:pt-[160px] xl:pb-[60px] 2xl:pt-[180px] 2xl:pb-[80px] bg-foreground text-background"
      >
        <div className="md:max-w-8xl relative z-10 container mx-auto lg:max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mx-auto max-w-[900px]"
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
                  className="mb-6 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl"
                >
                  <span className="flex items-center gap-2">
                    We Build{" "}
                    <FlipWords
                      words={words}
                      className="font-bold"
                    />{" "}
                  </span>
                  Software
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-8 w-full max-w-sm md:max-w-md lg:max-w-xl"
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
                        className="border-neutral-300 bg-white px-4 text-[12px] font-bold text-black dark:border-slate-800 dark:bg-black dark:text-white"
                      >
                        {btn.label} {btn.icon}
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
