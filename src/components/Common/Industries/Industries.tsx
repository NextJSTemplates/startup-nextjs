"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./data";
import Image from "next/image";

const Industries = () => {

  return (
    <section className="relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mx-auto max-w-7xl px-6 rounded-sm bg-gradient-to-br from-black via-black to-neutral-500 py-12"
        >
          <div className="flex flex-col gap-4 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-6"
            >
              <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-medium text-white">
                Industries we&apos;ve enhanced with our Software Development Services
              </h3>
              <p className="mx-auto max-w-xl text-center text-white mb-6">
                No matter the industry. We build AI to drive growth!
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative flex flex-col overflow-hidden rounded-sm p-8 shadow-sm bg-white gap-3"
                  >
                    <Image src={industry.icon} alt={industry.label} width={20} height={20} className="h-7 w-7" />
                    <p className="text-lg font-medium">{industry.label}</p>
                    <p className="relative z-20">
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
