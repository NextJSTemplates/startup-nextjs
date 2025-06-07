"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { features } from "./featureData";

const Features = () => {
  const flipVariant = {
    hidden: { rotateY: 100, opacity: 0 },
    visible: (i: number) => ({
      rotateY: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative z-10 py-16 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-6xl rounded-2xl px-8 text-black"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-bold">
              Why Work with Us?
            </h3>
            <p className="text-center">Searching for a dependable UI/UX Design team? You&apos;ve found your solution!</p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((feat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative mx-auto flex flex-col overflow-hidden rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                      <Image
                        src={feat.icon}
                        alt={feat.label}
                        width={100}
                        height={100}
                        className="w-120 rounded-xl"
                      />
                  </div>
                  <p className="mt-4 text-lg font-bold">{feat.value}</p>
                  <p className="relative z-20 mt-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                    {feat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
