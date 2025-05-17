"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { industriesData } from "./industriesData";
import { motion, AnimatePresence } from "framer-motion";

const Industries = () => {
  const [industry, setIndustry] = useState("E-Commerce");
  const current = industriesData[industry];

  const flipVariant = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: (i: number) => ({
      rotateY: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
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
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                item === industry
                  ? "bg-black text-white"
                  : "border-black text-black"
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
            className="grid grid-cols-1 items-center gap-6 px-8 pt-12 md:grid-cols-2"
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
                className="mt-8 rounded-full border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white hover:scale-[1.05] duration-200"
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
              <Image
                src={current.image}
                alt={`${industry} Image`}
                width={400}
                height={500}
                className="rounded-lg object-cover shadow-lg h-70 hover:scale-[1.03] transition duration-300"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* More Than 5 Years Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-br from-black via-black to-neutral-500 px-8 py-12 text-white"
      >
        <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="max-w-md text-3xl leading-snug font-bold">
              More Than 5 Years In The Game And We&apos;re Just Getting Started.
            </h3>
            <p className="max-w-md text-sm text-gray-300">
              We are on a mission to build a brand with the goal of providing
              quality IT development. Our team takes every project like it’s our
              first and works on it like specialists. With 5+ years of
              experience, we have served clients in every type of industry and
              have rich knowledge in the field.
            </p>
            <div className="grid grid-cols-2 gap-6 font-bold">
              {[
                ["40+", "Websites Designed"],
                ["100+", "Apps Approved"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  custom={index}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg bg-white p-4 text-start text-black shadow transition hover:scale-105"
                >
                  <p className="text-xl font-extrabold md:text-2xl">{value}</p>
                  <p className="mt-1 text-sm">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Flip-in animated stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              ["5+", "Years of Experience"],
              ["50+", "Developers"],
              ["100+", "Happy Clients"],
              ["20+", "Countries"],
              ["10+", "AI & IoT Solutions"],
              ["10+", "Blockchain"],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                custom={index}
                variants={flipVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-lg bg-white p-4 text-start font-bold text-black shadow transition hover:scale-105"
              >
                <p className="text-xl font-extrabold md:text-2xl">{value}</p>
                <p className="mt-1 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Industries;
