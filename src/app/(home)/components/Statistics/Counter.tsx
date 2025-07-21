"use client"

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: string;
  duration?: number;
}

const Counter = ({ target, duration = 2000 }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 

  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let start = 0;
    const end = parseFloat(target.replace(/[^0-9.]/g, ""));
    const stepTime = Math.max(Math.floor(duration / end), 20);

    setCount(0);

    intervalRef.current = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(intervalRef.current!);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(intervalRef.current!);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {target.includes("$") && "$"}
      {Math.floor(count)}
      {target.includes("%") && "%"}
    </span>
  );
};

export default Counter;
