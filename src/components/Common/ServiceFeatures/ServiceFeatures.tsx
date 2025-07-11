"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServicesFeatures } from "@/types";

type ServiceFeaturesProps = {
  title: string;
  serviceFeatures: ServicesFeatures[]
}
const ServiceFeatures = ({title, serviceFeatures}: ServiceFeaturesProps) => {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-7xl px-6 rounded-2xl text-black"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex flex-col justify-center items-center">
            <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-semibold capitalize">
              {title}
            </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
              {serviceFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex flex-col overflow-hidden rounded-lg p-8 bg-gradient-to-b from-neutral-100 to-neutral-50 border border-border"
                >
                  <div className="flex justify-between items-center gap-2">
                    <div className="rounded-md p-3">
                      <Image src={feat.icon} alt={feat.label} width={24} height={24} className="h-9 w-9" />
                    </div>
                    <p className="text-4xl font-bold text-muted-foreground/20">0{index+1}</p>
                  </div>
                  <p className="text-lg mt-4 font-semibold">{feat.value}</p>
                  <p className="relative z-20 mt-2 text-sm font-normal text-neutral-600 dark:text-neutral-400">
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

export default ServiceFeatures;
