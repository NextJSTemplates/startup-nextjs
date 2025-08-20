"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
type BannerProps = {
  title: string;
  description: string;
  buttonText: string;
}
const Banner = ({ title, description }: BannerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="relative z-10 container rounded-lg p-8 border border-primary/50 shadow-xs shadow-primary/50 overflow-hidden flex flex-col space-y-4 justify-between md:h-[400px] lg:h-[450px]"
    >
      <h1 className="mx-auto max-w-2xl text-3xl leading-snug font-medium capitalize">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-4 text-sm">
        {description}
      </p>
      <CustomButton title="Contact Us" link="mailto:info@classyendeavors.com" />
    </motion.div>
  );
};

export default Banner;
