"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";
import Image from "next/image";

const Industries = () => {
  const flipVariant = {
    hidden: { rotateY: 100, opacity: 0 },
    visible: (i: number) => ({
      rotateY: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mx-auto max-w-6xl rounded-lg bg-gradient-to-br from-black via-black to-neutral-500 px-10 py-14"
      >
        <div className="flex flex-col gap-4 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-bold text-white">
              Industries we&apos;ve enhanced with AI
            </h3>
            <p className="mx-auto max-w-xl text-center text-sm text-white">
              No matter the industry. We build AI to drive growth!
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex flex-col overflow-hidden rounded-lg p-8 shadow-sm max-w-xs mx-auto bg-white gap-4"
                >
                    <div className="">
                      <Image src={industry.icon} alt={industry.label} width={24} height={24} className="h-9 w-9" />
                    </div>
                    <p className="text-xl font-bold">{industry.label}</p>

                  <p className="relative z-20 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Industries;
