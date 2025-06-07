"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="relative z-10 py-16 md:pt-20 lg:pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-6xl rounded-2xl p-8 md:p-12 bg-gradient-to-br from-black via-black to-neutral-500"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6 text-white"
        >
          <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-bold">
            Why Work with Us?
          </h3>
          <p className="text-center">
            Searching for a dependable UI/UX Design team? You've found your
            solution!
          </p>
          <Button className="border border-white/80 px-8 py-6 rounded-full">Contact Us</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
