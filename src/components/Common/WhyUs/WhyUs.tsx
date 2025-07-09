"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WhyUsData } from "@/types";

type WhyUsProps = {
  title: string;
  description: string;
  data: WhyUsData[];
};
const WhyUs = ({ title, description, data }: WhyUsProps) => {
  const flipVariant = {
    hidden: { rotateY: 100, opacity: 0 },
    visible: (i: number) => ({
      rotateY: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative z-10 pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-7xl rounded-lg px-6"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-2"
          >
            <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-bold capitalize">
              {title}
            </h3>
            <p className="text-center capitalize max-w-md mx-auto text-sm">{description}</p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.map((feat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border-border relative mx-auto flex flex-col overflow-hidden rounded-lg border p-6 bg-gradient-to-b from-neutral-100 via-neutral-100 to-background"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="relative h-80 w-full">
                      <Image
                        src={feat.icon}
                        alt={feat.label}
                        layout="fill"
                        objectFit="cover"
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-lg font-bold">{feat.value}</p>
                  <p className="nax-w-xs relative z-20 mt-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
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

export default WhyUs;
