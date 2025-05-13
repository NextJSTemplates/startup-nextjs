"use client";

import { useEffect, useRef, useState } from "react";

const Features = () => {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);
  const [lines, setLines] = useState<
    { type: "bent" | "vertical"; d?: string; x1?: number; y1?: number; x2?: number; y2?: number }[]
  >([]);

  useEffect(() => {
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

      const startX = leftBox.right;
      const startY = leftBox.top + leftBox.height / 2 + window.scrollY;

      const endX = rightBox.left;
      const endY = rightBox.top + rightBox.height / 2 + window.scrollY;

      // Bent line path using cubic Bezier curve
      const midX = (startX + endX) / 2;

      const path = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

      newLines.push({ type: "bent", d: path });

      // Add vertical lines for left
      if (index > 0 && leftRefs.current[index - 1]) {
        const prev = leftRefs.current[index - 1].getBoundingClientRect();
        newLines.push({
          type: "vertical",
          x1: leftBox.left + leftBox.width / 2,
          y1: prev.bottom + window.scrollY,
          x2: leftBox.left + leftBox.width / 2,
          y2: leftBox.top + window.scrollY,
        });
      }

      // Add vertical lines for right
      if (index > 0 && rightRefs.current[index - 1]) {
        const prev = rightRefs.current[index - 1].getBoundingClientRect();
        newLines.push({
          type: "vertical",
          x1: rightBox.left + rightBox.width / 2,
          y1: prev.bottom + window.scrollY,
          x2: rightBox.left + rightBox.width / 2,
          y2: rightBox.top + window.scrollY,
        });
      }
    });

    setLines(newLines as { type: "bent" | "vertical"; d?: string; x1?: number; y1?: number; x2?: number; y2?: number }[]);
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
          {lines.map((line, idx) =>
            line.type === "bent" ? (
              <path
                key={idx}
                d={line.d}
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
            ) : (
              <line
                key={idx}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#999"
                strokeWidth="1.5"
              />
            ),
          )}
        </svg>

        <div className="relative z-10 container mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex translate-y-12 flex-col gap-10">
            {leftCards.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) leftRefs.current[idx] = el;
                }}
                className="dark:bg-dark rounded-md bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl"
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
                className="dark:bg-dark rounded-md bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl"
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
