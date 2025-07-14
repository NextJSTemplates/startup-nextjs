"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Innovation = {
  id: number;
  title: string;
  description: string;
  logo: string;
};

const innovations: Innovation[] = [
  {
    id: 1,
    title: 'CONVOON',
    description: '',
    logo: '/images/brands/lyber.svg',
  },
  {
    id: 2,
    title: 'CloudSuite',
    description: '',
    logo: '/images/brands/oktopi.svg',
  },
  {
    id: 3,
    title: 'CODE VISTA',
    description:
      'An innovative dialogue interface that provides question-answering capabilities for code repositories.',
    logo: '/images/brands/taxi.svg',
  },
  {
    id: 4,
    title: 'happyhr.ai',
    description: '',
    logo: '/images/brands/way.svg',
  },
  {
    id: 5,
    title: 'MAIA',
    description: '',
    logo: '/images/brands/way.svg',
  },
];

const InnovationsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % innovations.length);
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-semibold mb-4">Our Innovations</h1>
      <p className="text-center max-w-xl mb-6 text-sm">
        Discover our innovation – our IPs and Accelerators to create extra
        value for our clients across different verticals, and to further enhance
        the efficiency of our own operations.
      </p>
      <div className="relative w-64 h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={innovations[current].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6"
          >
            <img
              src={innovations[current].logo}
              alt={innovations[current].title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              {innovations[current].title}
            </h3>
            <p className="text-center text-sm">
              {innovations[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InnovationsCarousel