"use client";

import Image from "next/image";
import { useId, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { industriesData } from "./industriesData";
import { motion, AnimatePresence } from "framer-motion";
import { Grid } from "./Grid";
import { ChartBar } from "lucide-react";

const Industries = () => {
  const [industry, setIndustry] = useState("E-Commerce");
  const current = industriesData[industry];

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
      <SectionTitle title="Industries We Serve" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div className="mt-6 flex flex-wrap gap-4 px-8">
          {Object.keys(industriesData).map((item) => (
            <button
              key={item}
              onClick={() => setIndustry(item)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition hover:scale-[1.05] ${
                item === industry
                  ? "bg-neutral-200 text-black/90"
                  : "border-neutral-200 text-black/90 hover:bg-neutral-200"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={industry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 items-center gap-6 px-8 pt-12 md:grid-cols-2 lg:gap-0"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 text-xl font-bold"
              >
                {industry}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm leading-relaxed text-black"
              >
                {current.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-8 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition duration-200 hover:scale-[1.05] hover:bg-neutral-200"
              >
                Get A Free Quote
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <div className="rounded-lg bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 p-[6px]">
                <Image
                  src={current.image}
                  alt={`${industry} Image`}
                  width={400}
                  height={500}
                  className="h-90 rounded-lg object-cover shadow-xl transition duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto mt-20 max-w-7xl rounded-2xl bg-gradient-to-b from-neutral-100 via-white to-neutral-100 px-8 py-16 text-black"
      >
        <div className="container mx-auto flex max-w-6xl flex-col gap-4">
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "100+",
                  "/images/features/vr.svg",
                  "Happy Clients Served Across Diverse Industries",
                ],
                [
                  "20+",
                  "/images/features/cloud.svg",
                  "Countries with Successful Project Deployments",
                ],
                [
                  "10+",
                  "/images/features/chip.svg",
                  "Custom AI & IoT Solutions Tailored to Business Needs",
                ],
                [
                  "10+",
                  "/images/features/android.svg",
                  "Blockchain Projects Including DApps and Integrations",
                ],
                [
                  "10+",
                  "/images/features/chip.svg",
                  "Custom AI & IoT Solutions Tailored to Business Needs",
                ],
                [
                  "10+",
                  "/images/features/android.svg",
                  "Blockchain Projects Including DApps and Integrations",
                ],
              ].map(([value, image, label], index) => (
                  <motion.div
                    key={label}
                    custom={index}
                    variants={flipVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative flex flex-col overflow-hidden rounded-sm bg-gradient-to-b from-neutral-100 via-neutral-100 to-white p-8 shadow-sm dark:from-neutral-900 dark:to-neutral-950"
                  >
                    <Grid size={20} />
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-black p-3">
                        <ChartBar className="h-5 w-5 text-white" />
                      </div>

                      <p className="text-2xl font-bold">{value}</p>
                    </div>
                    <p className="relative z-20 mt-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                      {label}
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

export default Industries;
