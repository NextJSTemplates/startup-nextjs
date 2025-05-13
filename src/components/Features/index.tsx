"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  useEffect(() => {
    const newLines = leftRefs.current.map((left, index) => {
      const right = rightRefs.current[index];
      if (!left || !right) return { x1: 0, y1: 0, x2: 0, y2: 0 };

      const leftBox = left.getBoundingClientRect();
      const rightBox = right.getBoundingClientRect();

      return {
        x1: leftBox.right,
        y1: leftBox.top + leftBox.height / 2 + window.scrollY,
        x2: rightBox.left,
        y2: rightBox.top + rightBox.height / 2 + window.scrollY,
      };
    });
    setLines(newLines);
  }, []);
  const leftCards = [
    {
      title: "DevOps",
      text: "Get access to custom software for your unique needs including frontend and backend technology.",
    },
    {
      title: "Back-End",
      text: "Develop user-friendly mobile experiences for cross-platform mobile applications. We deliver server-oriented applications that cater to changing market needs and robust user convenience.",
    },
    {
      title: "Infrastructure",
      text: "Solutions that help organizations scale their resources as per changing demands. We enable our clients to control and offer the best and safest pathways in the cloud journey.",
    },
  ];
  const rightCards = [
    {
      title: "Front-End",
      text: "Create top-rated UI solutions that offer personalized user experience with quality generated content.",
    },
    {
      title: "Databases",
      text: "Through Machine Learning Algorithms and ML/AI, we help businesses to leverage AI technologies to drive automation and improve customer experiences.",
    },
    {
      title: "Integrations",
      text: "Immersive solutions behind the physical and virtual world offering customized experiences across industries like healthcare, finance, and others.",
    },
  ];
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="mb-12 w-[90%] rounded-se-[70px] bg-black py-6 text-center text-white shadow-md sm:w-[60%]">
          <h2 className="text-2xl font-bold">
            Amazing technologies we use, helpful for your business
          </h2>
        </div>
        <svg
          className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {lines.map((line, idx) => (
            <line
              key={idx}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#000000"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          ))}
        </svg>
        <div className="relative z-10 container mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex translate-y-12 flex-col gap-10">
            {leftCards.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) leftRefs.current[idx] = el;
                }}
                className="rounded-md bg-white dark:bg-dark p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="flex -translate-y-12 flex-col gap-10">
            {rightCards.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) rightRefs.current[idx] = el;
                }}
                className="rounded-md bg-white dark:bg-dark p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
