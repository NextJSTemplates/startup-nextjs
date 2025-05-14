"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type StackItem = {
  title: string;
  icon: string;
};

type FeatureProps = {
  card: {
    title: string;
    text: string;
    icon: string;
    stack: StackItem[];
  };
  index: number;
  refSetter: (el: HTMLDivElement | null) => void;
};

const SingleFeature = ({ card, index, refSetter }: FeatureProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={index}
      ref={refSetter}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-md bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image
            src={card.icon}
            alt={`${card.title} icon`}
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
        </div>
        <ExternalLink className="h-5 w-5" />
      </div>

      <p className="text-sm text-gray-700 ">{card.text}</p>

      {hovered && (
        <div className="absolute mt-4 w-full rounded-md border-t border-gray-100 bg-white p-4 shadow-lg">
          <div>
            {card.stack.map((stack, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-md px-2 py-1 text-xs"
              >
                <Image
                  src={stack.icon}
                  alt={`${stack.title} logo`}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <h3 className="text-sm">{stack.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFeature;
