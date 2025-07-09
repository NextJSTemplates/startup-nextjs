import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 p-6 md:flex-row md:gap-12">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-bold">
            Business-Focused Software Security Solutions
          </h1>
          <p className="text-sm">
            In today’s fast-moving digital landscape, securing your business
            software from data breaches and threats is essential. Our software
            security services offer customized, advanced solutions to protect
            your digital infrastructure and ensure long-term safety.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/services/softwaresec/Cybersecurity Solutions.svg"
            alt="About Image"
            className="w-110 rounded-lg"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
