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
              Our AI Development Process
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
              {features.map((feat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex flex-col overflow-hidden rounded-xl p-6 shadow-sm max-w-xs mx-auto"
                >
                  <div className="flex justify-between items-center gap-2">
                    <div className="rounded-md p-3">
                      <Image src={feat.icon} alt={feat.label} width={24} height={24} className="h-10 w-10" />
                    </div>

                    <p className="text-5xl font-bold text-muted-foreground/20">{index+1}</p>
                  </div>
                  <p className="text-lg mt-4 font-bold">{feat.value}</p>
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
