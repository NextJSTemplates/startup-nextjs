"use client";
import React from "react";
import { statistics } from "./statisticsData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Counter from "./Counter";
import { useLanguage } from "@/components/Header";

const Statistics = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 pt-20">
      <div className=" bg-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col space-y-12 text-background">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-end aspect-video rounded-lg bg-white/12 backdrop-blur-sm p-6 transition relative"
              >
                <h1 className="text-4xl md:text-5xl font-semibold mb-2">
                  <Counter target={stat.value} />
                </h1>
                <p className="text-background/70">{t(stat.labelKey) || stat.label}</p>
              </div>
            ))}
            <div
              className="relative flex justify-end items-end text-end pb-4 pe-4 aspect-video"
            >
              <Link href="/about-us" className="flex gap-2 text-xl text-primary hover:scale-[1.1] transition duration-200 border-b border-b-primary p-4">
                {t("aboutUs")}
                <span>
                  <ArrowRight className="size-5 mt-1" />
                </span>
              </Link>
            </div>
          </div>
          <p className="max-w-3xl mb-6 text-background/70">
            {t("statisticsDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;