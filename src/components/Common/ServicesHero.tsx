"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


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

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  keywords?: string[];
  services?: {
    label: string;
    icon: React.ReactNode;
  }[];
  section?: React.ReactElement
};

export const Hero = ({
  title,
  subtitle,
  backgroundImage,
  keywords,
  services,
  section
}: HeroProps) => {

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden py-16 md:py-24 lg:py-32"
    >
      <Image
        src={backgroundImage}
        alt="Tech Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0"
      />
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
              </motion.div>
            </motion.div>
          </div>
          {section}
        </div>
      </div>
    </section>
  );
};
