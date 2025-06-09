"use client";
import React from "react";
import Image from "next/image";
import { techStackData } from "./techStackData";

const TechStack = () => {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold">Technologies We Work With</h2>
          <p className="max-w-sm text-gray-600 text-sm">
            Classy Endeavors harnesses leading cloud and DevOps solutions to
            deliver reliable, efficient management of your cloud infrastructure.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {techStackData.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="h-16 shrink-0 font-semibold capitalize text-white py-2 ps-4 pe-12 rounded-md flex justify-center items-center"
                style={{
                  backgroundColor:
                    ["#2563eb", "#22c55e", "#f97316", "#06b6d4"][idx % 4],
                }}
              >
                {group.title}
              </div>

              <div className="grid grid-cols-3 gap-4 md:grid-cols-6 w-full">
                {(group.stack || group.stacks).map((icon: string, iconIdx: number) => (
                  <div
                    key={iconIdx}
                    className="flex items-center justify-center rounded-md border border-gray-200 p-3 bg-white"
                  >
                    <Image
                      src={icon}
                      alt={`${group.title}-${iconIdx}`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
