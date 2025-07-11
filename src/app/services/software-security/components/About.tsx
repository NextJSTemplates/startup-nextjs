import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold max-w-sm mb-2">
            Business-Focused Software Security Solutions
          </h1>
          <p className="text-sm max-w-md">
            In today&apos;s fast-moving digital landscape, securing your business
            software from data breaches and threats is essential. Our software
            security services offer customized, advanced solutions to protect
            your digital infrastructure and ensure long-term safety.
          </p>
        </div>
          <Image
            src="/images/services/softwaresec/Cybersecurity Solutions.svg"
            alt="About Image"
            className="w-90 rounded-lg"
            width={100}
            height={100}
          />
      </div>
    </section>
  );
};

export default About;
