import React from "react";
import Image from "next/image";
import { WhyUsData } from "@/types";

type WhyUsProps = {
  title: string;
  description: string;
  data: WhyUsData[];
};
const WhyUs = ({ title, description, data }: WhyUsProps) => {

  return (
    <section className="relative z-10 pt-20">
      <div
        className="container mx-auto max-w-7xl rounded-lg px-6"
      >
          <div
            className="flex flex-col space-y-2"
          >
            <h3 className="mx-auto max-w-xl text-center text-3xl leading-snug font-semibold capitalize">
              {title}
            </h3>
            <p className="text-center capitalize max-w-md mx-auto text-sm">{description}</p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.map((feat, index) => (
                <div
                  key={index}
                  className="border-border relative mx-auto flex flex-col overflow-hidden rounded-lg border p-4 bg-gradient-to-b from-neutral-100 via-neutral-100 to-background"
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
                  <p className="mt-4 text-lg font-semibold">{feat.value}</p>
                  <p className="nax-w-xs relative z-20 mt-4 text-sm">
                    {feat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default WhyUs;
