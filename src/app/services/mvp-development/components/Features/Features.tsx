"use client";
import React from "react";
import { motion } from "framer-motion";
import { features } from "./featureData";
import { cn } from "@/lib/utils";

const Features = () => {

  return (
    <section className="relative z-10 pt-20 lg:pt-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-7xl rounded-2xl text-black px-6"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="mx-auto max-w-3xl text-center text-3xl leading-snug font-semibold">
                Why choose us as your AI Development Company
              </h1>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {features.map((feat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={cn("relative flex flex-col overflow-hidden rounded-lg p-8", index%2 !== 0 ? "bg-gradient-to-b from-neutral-100 via-neutral-100 to-transparent border border-border" : "border border-border rounded-lg")}
                >
                  <p className="mt-4 text-lg font-semibold">{feat.value}</p>
                  <p className="relative z-20 mt-4 text-sm font-normal">
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
