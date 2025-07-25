import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Processes } from "@/types";

type HowWeWorkProps = {
  title: string;
  imageSrc: string;
  processes: Processes[]
}

const HowWeWork = ({ title, imageSrc, processes }: HowWeWorkProps) => {
  return (
    <section className="relative pt-20">
      <div className="relative px-4">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Coffee vending background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl py-24 px-6">
          <h1 className="text-white mb-8 text-center text-3xl font-semibold">
            {title}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                (
                  <Card
                    key={index}
                    className="border-none bg-gray-900/40 backdrop-blur-md"
                  >
                    <CardContent className="p- flex flex-col gap-2 text-white">
                      <Icon className="mb-2 size-6" />
                      <h1 className="mb-1 text-lg font-semibold">{process.title}</h1>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {process.desc}
                      </p>
                    </CardContent>
                  </Card>
                )
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
