"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <section className="relative z-10 py-16 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-6xl px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-bold">
            Our Design and Development Tools
          </h3>
          <p className="text-center">
            We leverage the latest tools to create exceptional user experiences.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "Figma", icon: "/images/services/uiux/figma.svg" },
              { label: "Adobe XD", icon: "/images/services/uiux/adobexd.svg" },
              { label: "Zeplin", icon: "/images/services/uiux/zeplin.svg" },
              { label: "InVision", icon: "/images/services/uiux/invision.svg" },
              { label: "Adobe Photoshop", icon: "/images/services/uiux/photoshop.svg" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={tool.icon} alt={tool.label} className="w-100" width={100} height={100} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tools;
