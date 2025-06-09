"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
type BannerProps = {
  title: string;
  description: string;
  buttonText: string;
}
const Banner = ({title, description, buttonText} : BannerProps) => {
  return (
    <section className="relative py-16 md:pt-20 lg:pt-20">
      <div className="px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="relative z-10 container mx-auto max-w-6xl rounded-lg p-16 md:p-24 bg-neutral-100 overflow-hidden"
        >
          <div
            className={cn(
              "absolute inset-0 z-0 pointer-events-none",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
          />
          <div className="from-neutral-100 pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-b rounded-lg" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center justify-center space-y-6 text-black"
          >
            <h3 className="mx-auto max-w-2xl text-center text-3xl leading-snug font-bold capitalize">
              {title}
            </h3>
            <p className="text-center text-neutral-600 max-w-xl mx-auto">
              {description}
            </p>
            <Button className="rounded-full border border-white/80 bg-black px-8 py-6">
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
