"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Features = () => {
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);
  const [lines, setLines] = useState<
    {
      type: "bent" | "vertical";
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }[]
  >([]);

  useEffect(() => {
    const updateLines = () => {
      const newLines: {
        type: "bent" | "vertical";
        x1: number;
        y1: number;
        x2: number;
        y2: number;
      }[] = [];

      leftRefs.current.forEach((left, index) => {
        const right = rightRefs.current[index];
        if (!left || !right) return;

        const leftBox = left.getBoundingClientRect();
        const rightBox = right.getBoundingClientRect();
        const scrollY = window.scrollY;

        const startX = leftBox.right;
        const startY = leftBox.top + leftBox.height / 2 + scrollY;

        const endX = rightBox.left;
        const endY = rightBox.top + rightBox.height / 2 + scrollY;

        newLines.push({
          type: "bent",
          x1: startX,
          y1: startY,
          x2: endX,
          y2: endY,
        });

        if (index > 0 && leftRefs.current[index - 1]) {
          const prev = leftRefs.current[index - 1].getBoundingClientRect();
          newLines.push({
            type: "vertical",
            x1: leftBox.left + leftBox.width / 2,
            y1: prev.bottom + scrollY,
            x2: leftBox.left + leftBox.width / 2,
            y2: leftBox.top + scrollY,
          });
        }

        if (index > 0 && rightRefs.current[index - 1]) {
          const prev = rightRefs.current[index - 1].getBoundingClientRect();
          newLines.push({
            type: "vertical",
            x1: rightBox.left + rightBox.width / 2,
            y1: prev.bottom + scrollY,
            x2: rightBox.left + rightBox.width / 2,
            y2: rightBox.top + scrollY,
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
    <section id="features" className="relative py-16 md:py-20 lg:py-28">
      <div className="fixed top-0 left-0 z-10 w-screen h-screen pointer-events-none">
        {lines.map((line, idx) => {
          if (line.type === "bent") {
            const dx = line.x2 - line.x1;
            const dy = line.y2 - line.y1;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

            return (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  left: `${line.x1}px`,
                  top: `${line.y1}px`,
                  width: `${length}px`,
                  height: "3px",
                  background: "linear-gradient(to right, #9b87f5, #0EA5E9)",
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "0 0",
                  opacity: 0.7,
                  borderRadius: "2px",
                }}
              />
            );
          } else {
            const height = line.y2 - line.y1;
            return (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  left: `${line.x1}px`,
                  top: `${line.y1}px`,
                  width: "2.5px",
                  height: `${height}px`,
                  backgroundColor: "#8B5CF6",
                  opacity: 0.8,
                  borderRadius: "1px",
                }}
              />
            );
          }
        })}
      </div>

      <SectionTitle 
      title="Amazing technologies, helpful for your business"
      width="w-[90%]"
      />

      {/* Cards */}
      <div className="container relative z-30 mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex lg:translate-y-12 flex-col gap-10">
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

        <div className="flex lg:-translate-y-12 flex-col gap-10">
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
  );
};

export default Features;
