"use client"

import { motion } from "framer-motion";
import BrandsScrollable from "./BrandsScrollable";

const Brands = () => {
  return (
    <section className="relative z-10 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="container"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="mb-16 text-center text-2xl font-bold text-black sm:text-3xl"
        >
          With help from the biggest companies
        </motion.h2>
        <BrandsScrollable />
      </motion.div>
    </section>
  );
};

export default Brands;
