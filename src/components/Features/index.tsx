"use client";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { leftCards, rightCards } from "./featuresData";

const Features = () => {
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<
    {
      type: "curved" | "vertical";
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }[]
  >([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateLines = () => {
      if (window.innerWidth < 768 || !svgRef.current) {
        setLines([]);
        return;
      }

      const newLines: typeof lines = [];
      const svgRect = svgRef.current.getBoundingClientRect();
      const svgTop = svgRect.top + window.scrollY;
      const svgLeft = svgRect.left;

      leftRefs.current.forEach((left, index) => {
        const right = rightRefs.current[index];
        if (!left || !right) return;

        const leftBox = left.getBoundingClientRect();
        const rightBox = right.getBoundingClientRect();

        const startX = leftBox.right - svgLeft;
        const startY =
          leftBox.top + leftBox.height / 2 - svgTop + window.scrollY;

        const endX = rightBox.left - svgLeft;
        const endY =
          rightBox.top + rightBox.height / 2 - svgTop + window.scrollY;

        newLines.push({
          type: "curved",
          x1: startX,
          y1: startY,
          x2: endX,
          y2: endY,
        });

        if (index > 0 && leftRefs.current[index - 1]) {
          const prev = leftRefs.current[index - 1]!.getBoundingClientRect();
          newLines.push({
            type: "vertical",
            x1: leftBox.left + leftBox.width / 2 - svgLeft,
            y1: prev.bottom - svgTop + window.scrollY,
            x2: leftBox.left + leftBox.width / 2 - svgLeft,
            y2: leftBox.top - svgTop + window.scrollY,
          });
        }

        if (index > 0 && rightRefs.current[index - 1]) {
          const prev = rightRefs.current[index - 1]!.getBoundingClientRect();
          newLines.push({
            type: "vertical",
            x1: rightBox.left + rightBox.width / 2 - svgLeft,
            y1: prev.bottom - svgTop + window.scrollY,
            x2: rightBox.left + rightBox.width / 2 - svgLeft,
            y2: rightBox.top - svgTop + window.scrollY,
          });
        }
      });

      setLines(newLines);
    };

    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines);

    const observers: ResizeObserver[] = [];

    const observeElements = (refs: (HTMLDivElement | null)[]) => {
      refs.forEach((el) => {
        if (el) {
          const observer = new ResizeObserver(() => {
            updateLines();
          });
          observer.observe(el);
          observers.push(observer);
        }
      });
    };

    observeElements(leftRefs.current);
    observeElements(rightRefs.current);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="features" className="relative z-10 py-16 md:pt-20 lg:pt-24">
      <SectionTitle
        title="Amazing technologies, helpful for your business"
        width="70%"
      />
      <div className="container mx-auto px-4">
        <svg
          ref={svgRef}
          className="pointer-events-none absolute top-0 left-0 hidden h-full w-full md:block"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" />
              <stop offset="100%" />
            </linearGradient>
          </defs>

          {lines
            .filter((line) => line.type === "vertical")
            .map((line, idx) => (
              <line
                key={`vert-${idx}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
                strokeDasharray="6,4"
              />
            ))}
        </svg>

        <div className="relative z-30 mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-12 md:translate-y-6">
            {leftCards.map((card, index) => (
              <SingleFeature
                key={`left-${index}`}
                card={card}
                index={index}
                refSetter={(el) => (leftRefs.current[index] = el)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-12 md:-translate-y-12">
            {rightCards.map((card, index) => (
              <SingleFeature
                key={`right-${index}`}
                card={card}
                index={index}
                refSetter={(el) => (rightRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
