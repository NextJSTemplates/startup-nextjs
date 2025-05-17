"use client";
import { motion, MotionConfig } from "framer-motion";

const SectionTitle = ({
  title,
  width = "30%",
  className = "",
}: {
  title: string;
  width?: string;
  className?: string;
}) => {
  const calculateWidthClass = (width: string) => {
    switch (width) {
      case "30%":
        return "w-[80%] sm:w-[66%] md:w-[30%]";
      case "50%":
        return "w-[80%] sm:w-[50%]";
      case "70%":
        return "w-[87%]  sm:w-[82%] md:w-[76%] lg:w-[70%]";
      case "80%":
        return "w-[94%]  sm:w-[88%] md:w-[86%] lg:w-[80%]";
      case "100%":
        return "w-full";
      default:
        return `w-[${width}]`;
    }
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        whileInView={{
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
        }}
        viewport={{ once: true }}
        className={`mb-12 rounded-se-[70px] bg-black px-8 py-6 text-start text-white shadow-md md:text-center ${calculateWidthClass(
          width
        )} ${className}`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="text-[14px] leading-tight font-bold sm:text-xl md:text-2xl"
        >
          {title}
        </motion.h2>
      </motion.div>
    </MotionConfig>
  );
};

export default SectionTitle;
