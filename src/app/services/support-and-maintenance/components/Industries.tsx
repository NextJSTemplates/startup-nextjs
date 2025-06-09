"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const Industries = () => {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-6xl rounded-lg px-8 text-black"
      >
        <h3 className="mx-auto max-w-2xl text-center text-3xl leading-snug font-bold mb-4">
          Industries We Transform with Our IT Excellence
        </h3>
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            {
              label: "Healthcare",
              icon: "/images/services/cloud/Healthcare.svg",
            },
            { label: "Finance", icon: "/images/services/cloud/Finance.svg" },
            {
              label: "Education",
              icon: "/images/services/cloud/Education.svg",
            },
            { label: "F&B", icon: "/images/services/cloud/F&B.svg" },
            {
              label: "Networking",
              icon: "/images/services/cloud/Social Networking.svg",
            },
            { label: "Travel", icon: "/images/services/cloud/Travel.svg" },
            {
              label: "On-demand",
              icon: "/images/services/cloud/On-demand.svg",
            },
            {
              label: "Government",
              icon: "/images/services/cloud/Government.svg",
            },
            {
              label: "E-commerce",
              icon: "/images/services/cloud/E-commerce.svg",
            },
            {
              label: "Manufacturing",
              icon: "/images/services/cloud/Manufacturing.svg",
            },
            {
              label: "Technology",
              icon: "/images/services/cloud/Technology.svg",
            },
            {
              label: "Automotive",
              icon: "/images/services/cloud/Automotive.svg",
            },
          ].map(({ label, icon }) => (
            <Card key={label} className="rounded-lg text-center shadow-none">
              <CardContent className="flex flex-col items-center">
                <Image
                  src={icon}
                  alt={`${label} icon`}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <div className="text-sm font-medium text-gray-700">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="mx-auto max-w-xl text-center text-2xl leading-snug font-bold">
          ... and many more!
        </h3>
      </motion.div>
    </section>
  );
};

export default Industries;
