"use client";

import { Button } from "../ui/moving-border";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

type TeamMember = {
  name: string;
  image: string;
};

type HeroProps = {
  title: string;
  subtitle: string;
  keywords?: string[];
  services?: {
    label: string;
    icon: React.ReactNode;
  }[];
  ctaButtons: {
    label: string;
    icon: React.ReactNode;
    href?: string;
  }[];
  teamMembers: TeamMember[];
};

export const Hero = ({
  title,
  subtitle,
  keywords,
  services,
  ctaButtons,
  teamMembers,
}: HeroProps) => {
  const mid =
    teamMembers && teamMembers.length > 0
      ? Math.floor(teamMembers.length / 2)
      : 0;
  const teamOne = teamMembers.slice(0, mid);
  const teamTwo = teamMembers.slice(mid);

  return (
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
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="md:max-w-8xl relative z-10 container mx-auto lg:max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mx-auto max-w-[900px] text-black dark:text-white"
            >
              {keywords && keywords.length > 0 && (
                <motion.div
                  variants={staggerWords}
                  initial="hidden"
                  whileInView="visible"
                  className="mb-6 flex gap-3 text-[13.5px] font-bold tracking-widest uppercase"
                >
                  {keywords.map((word, idx) => (
                    <motion.span key={idx} variants={wordFadeUp}>
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8 w-full max-w-sm text-[13px] text-black sm:text-[15px] md:max-w-md lg:max-w-xl dark:text-white"
              >
                {subtitle}
              </motion.p>
              <div className="mb-8">
                {services?.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="mb-2 flex flex-col items-start justify-start gap-2 text-sm md:flex-row"
                    >
                      {item.icon}
                      <p className="mt-1 font-medium">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
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
                {ctaButtons.map((btn, idx) => (
                  <motion.div
                    key={idx}
                    variants={wordFadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      borderRadius="1.75rem"
                      className="gap-2 border-neutral-300 bg-white px-4 font-semibold text-black dark:border-slate-800 dark:bg-black dark:text-white"
                    >
                      {btn.label} {btn.icon}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {teamMembers && teamMembers.length > 0 && (
            <div className="relative mt-6 w-full md:mt-0">
              <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-12 lg:gap-8">
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
                          className={`transform ${bounceClass} ${xTranslate} from-bg-neutral-100 h-60 w-full overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-b via-white to-neutral-100 p-4 shadow-lg backdrop-blur-[2px] md:w-45 lg:w-60`}
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
                              className="h-45 w-full rounded-lg object-cover shadow-lg sm:w-90 md:w-80"
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
          )}
        </div>
      </div>
    </section>
  );
};
