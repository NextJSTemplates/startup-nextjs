
"use client";

import { useEffect, useRef, useState } from "react";

const Features = () => {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);
  const [lines, setLines] = useState<
    {
      type: "bent" | "vertical";
      d?: string;
      x1?: number;
      y1?: number;
      x2?: number;
      y2?: number;
    }[]
  >([]);

  useEffect(() => {
    const updateLines = () => {
      const newLines: {
        type: "bent" | "vertical";
        d?: string;
        x1?: number;
        y1?: number;
        x2?: number;
        y2?: number;
      }[] = [];

      leftRefs.current.forEach((left, index) => {
        const right = rightRefs.current[index];
        if (!left || !right) return;

        const leftBox = left.getBoundingClientRect();
        const rightBox = right.getBoundingClientRect();

        const offsetY = window.scrollY;

        const startX = leftBox.right;
        const startY = leftBox.top + leftBox.height / 2 + offsetY;

        const endX = rightBox.left;
        const endY = rightBox.top + rightBox.height / 2 + offsetY;

        const midX = (startX + endX) / 2;
        const path = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
        newLines.push({ type: "bent", d: path });

        if (index > 0 && leftRefs.current[index - 1]) {
          const prev = leftRefs.current[index - 1].getBoundingClientRect();
          newLines.push({
            type: "vertical",
            x1: leftBox.left + leftBox.width / 2,
            y1: prev.bottom + offsetY,
            x2: leftBox.left + leftBox.width / 2,
            y2: leftBox.top + offsetY,
          });
        }

        if (index > 0 && rightRefs.current[index - 1]) {
          const prev = rightRefs.current[index - 1].getBoundingClientRect();
          newLines.push({
            type: "vertical",
            x1: rightBox.left + rightBox.width / 2,
            y1: prev.bottom + offsetY,
            x2: rightBox.left + rightBox.width / 2,
            y2: rightBox.top + offsetY,
          });
        }
      });

      setLines(newLines);
    };

    updateLines();

    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
    };
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
          className="pointer-events-none absolute top-0 left-0 z-30 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bentLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
          {lines.map((line, idx) =>
            line.type === "bent" ? (
              <path
                key={idx}
                d={line.d}
                fill="none"
                stroke="url(#bentLineGradient)"
                strokeWidth="3"
                strokeDasharray="10 5"
                strokeLinecap="round"
                className="animate-pulse"
                opacity="0.7"
              />
            ) : (
              <line
                key={idx}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#8B5CF6"
                strokeWidth="2.5"
                strokeDasharray="5 3"
                opacity="0.8"
              />
            ),
          )}
        </svg>

        <div className="container relative z-30 mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex translate-y-12 flex-col gap-10">
            {leftCards.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) leftRefs.current[idx] = el;
                }}
                className="rounded-md p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:text-white"
              >
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{card.text}</p>
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
                className="rounded-md p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:text-white"
              >
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;