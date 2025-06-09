"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChartBar } from "lucide-react";
import { statistics } from "./statisticsData";

const Statistics = () => {
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
        className="container mx-auto max-w-6xl rounded-lg bg-gradient-to-b from-neutral-100 via-white to-neutral-100 px-8 py-12 text-black"
      >
        <div className="flex flex-col gap-4 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-bold">
              More Than 5 Years In The Game And We&apos;re Just Getting Started.
            </h3>
            <p className="mx-auto max-w-xl text-center text-sm text-black">
              We are on a mission to build a brand with the goal of providing
              quality IT development. Our team takes every project like it’s our
              first and works on it like specialists.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-neutral-100 via-neutral-100 to-white p-8 shadow-sm dark:from-neutral-900 dark:to-neutral-950 max-w-xs mx-auto"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-black p-3">
                      <ChartBar className="h-5 w-5 text-white" />
                    </div>

                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <p className="relative z-20 mt-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                    {stat.label}
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

export default Statistics;
