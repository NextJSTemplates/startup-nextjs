"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      key={index}
      ref={refSetter}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { type: "spring", stiffness: 150, damping: 12 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-lg cursor-pointer bg-gradient-to-b  from-neutral-100 via-neutral-100 to-neutral-50 p-8 border border-border"
    >

      <div className="flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 mb-2"
        >
          <Image
            src={card.icon}
            alt={`${card.icon} icon`}
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <h3 className="text-lg font-semibold">{card.title}</h3>
        </motion.div>
        <ExternalLink className="size-5" />
      </div>

      <p className="mt-2 text-sm">{card.text}</p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-4 overflow-hidden"
          >
            <div className="space-y-2 rounded-lg border-t pt-4">
              {card.stack.map((stack, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-lg px-2 py-1 text-xs"
                >
                  <Image
                    src={stack.icon}
                    alt="Stack Logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <h3 className="text-sm">{stack.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SingleFeature;
