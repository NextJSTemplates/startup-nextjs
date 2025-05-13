"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const SectionTitle = ({
  title,
  width = "w-full",
}: {
  title: string;
  width?: string;
}) => {
  return (
    <div className="flex w-full justify-center">
      <h2 className={`text-center text-3xl font-bold md:text-4xl ${width}`}>
        {title}
      </h2>
    </div>
  );
};

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
      const newLines: {
        type: "curved" | "vertical";
        x1: number;
        y1: number;
        x2: number;
        y2: number;
      }[] = [];

      if (!svgRef.current) return;
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
      icon: "/images/features/code.svg",
      stack: [
        { title: "Ansible", icon: "/images/features/devops/ansible.svg" },
        { title: "Chef", icon: "/images/features/devops/chef.svg" },
        { title: "Docker", icon: "/images/features/devops/ansible.svg" },
        { title: "Gitlab", icon: "/images/features/devops/gitlab.svg" },
      ],
    },
    {
      title: "Back-End",
      text: "Develop user-friendly experiences with server-oriented applications that cater to changing market needs and robust user convenience.",
      icon: "/images/features/android.svg",
      stack: [
        { title: "Rails", icon: "/images/features/bcend/rails.svg" },
        { title: "Ruby", icon: "/images/features/bcend/ruby.svg" },
        { title: "Strapi", icon: "/images/features/bcend/strapi.svg" },
        { title: "Gitlab", icon: "/images/features/bcend/gitlab.svg" },
      ],
    },
    {
      title: "Infrastructure",
      text: "Solutions that help organizations scale their resources as per changing demands. We enable the best pathways in the cloud journey.",
      icon: "/images/features/cloud.svg",
      stack: [
        { title: "AWS", icon: "/images/features/infrastructure/aws.svg" },
        {
          title: "Digital Ocean",
          icon: "/images/features/infrastructure/docean.svg",
        },
        { title: "Heroku", icon: "/images/features/infrastructure/heroku.svg" },
      ],
    },
  ];

  const rightCards = [
    {
      title: "Front-End",
      text: "Create top-rated UI solutions that offer personalized user experience with quality generated content.",
      icon: "/images/features/searchstar.svg",
      stack: [
        { title: "CSS 3", icon: "/images/features/frtend/css.svg" },
        { title: "HTML 5", icon: "/images/features/frtend/html.svg" },
        { title: "JS", icon: "/images/features/frtend/js.svg" },
        { title: "React", icon: "/images/features/frtend/react.svg" },
        { title: "Redux", icon: "/images/features/frtend/redux.svg" },
        { title: "Vue", icon: "/images/features/frtend/vue.svg" },
      ],
    },
    {
      title: "Databases",
      text: "Through Machine Learning Algorithms and AI, we help businesses leverage technologies to drive automation and improve experiences.",
      icon: "/images/features/chip.svg",
            stack: [
        { title: "Postgres", icon: "/images/features/dtbase/postgres.svg" },

      ],

    },
    {
      title: "Integrations",
      text: "Immersive solutions behind the physical and virtual world offering customized experiences across various industries.",
      icon: "/images/features/vr.svg",
            stack: [
        { title: "Rails", icon: "/images/features/bcend/rails.svg" },
        { title: "Ruby", icon: "/images/features/bcend/ruby.svg" },
        { title: "Strapi", icon: "/images/features/bcend/strapi.svg" },
        { title: "Gitlab", icon: "/images/features/bcend/gitlab.svg" },
      ],
    },
  ];

  return (
    <section id="features" className="relative py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Amazing technologies, helpful for your business"
          width="w-[70%]"
        />

        <svg
          ref={svgRef}
          className="pointer-events-none absolute top-0 left-0 h-full w-full"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" />
              <stop offset="100%" />
            </linearGradient>
          </defs>

          {lines.map((line, idx) => {
            if (line.type === "curved") {
              // Calculate control points for S-curve
              const midX = (line.x1 + line.x2) / 2;
              const controlPoint1X = line.x1 + (midX - line.x1) * 4;
              const controlPoint1Y = line.y1 + 10;
              const controlPoint2X = line.x2 - (line.x2 - midX) * 4;
              const controlPoint2Y = line.y2 - 10;

              // SVG path for S-curve
              const path = `M ${line.x1} ${line.y1} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${line.x2} ${line.y2}`;

              return (
                <path
                  key={`curve-${idx}`}
                  d={path}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              );
            } else {
              // Dashed vertical
              return (
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
              );
            }
          })}
        </svg>

        <div className="relative z-30 mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-12 lg:translate-y-12">
            {leftCards.map((card, idx) => (
              <div
                key={`left-${idx}`}
                ref={(el) => {
                  leftRefs.current[idx] = el;
                }}
                className="rounded-md p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Image
                      src={card.icon}
                      alt="Card Logo"
                      width={10}
                      height={10}
                      className="h-6 w-6"
                    />
                    <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                  </div>
                  <ExternalLink className="h-5 w-5" />
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 lg:-translate-y-12">
            {rightCards.map((card, idx) => (
              <div
                key={`right-${idx}`}
                ref={(el) => {
                  rightRefs.current[idx] = el;
                }}
                className="rounded-md bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:text-white"
              >
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Image
                      src={card.icon}
                      alt="Card Logo"
                      width={10}
                      height={10}
                      className="h-6 w-6"
                    />
                    <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                  </div>
                  <ExternalLink className="h-5 w-5" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
