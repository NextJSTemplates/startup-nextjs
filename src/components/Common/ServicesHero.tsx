"use client";

import { Button } from "../ui/moving-border";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
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
  backgroundImage: string;
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
  backgroundImage,
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
      <Image
        src={backgroundImage}
        alt="Tech Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0"
      />
      {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      /> */}
      {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" /> */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div className="md:max-w-8xl relative z-10 container mx-auto lg:max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mx-auto max-w-[900px] text-white"
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
                className="mb-8 w-full max-w-sm text-[13px] sm:text-[15px] md:max-w-md lg:max-w-xl"
              >
                {subtitle}
              </motion.p>
              <div className="mb-8">
                {services?.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="mb-2 flex items-start justify-start gap-2 text-sm"
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
        </div>
      </div>
    </section>
  );
};
