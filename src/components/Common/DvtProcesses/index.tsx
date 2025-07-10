'use client';

import { JSX, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import Image from 'next/image';

const projects = [
  {
    title: 'Assessment & Planning',
    description:
      'We begin by thoroughly assessing your current IT infrastructure, business goals, and technical requirements. This phase includes stakeholder interviews, workload analysis, and identifying opportunities for cloud adoption. The outcome is a detailed roadmap tailored to your organization’s needs, ensuring a smooth transition to the cloud.',
    src: '/images/services/cloud/Cyber security concept in digital art.svg',
  },
  {
    title: 'Architecture Design',
    description:
      'Our cloud architects design a scalable, secure, and cost-effective cloud architecture. This involves selecting the right cloud services, defining network topology, security controls, and compliance measures. We ensure the architecture aligns with best practices and supports future growth and innovation.',
    src: '/images/services/cloud/faster-time to-market.svg',
  },
  {
    title: 'Migration & Implementation',
    description:
      'We execute the migration plan by moving applications, data, and workloads to the cloud with minimal disruption. Our team leverages automated tools and proven methodologies to ensure data integrity, application compatibility, and business continuity throughout the migration process.',
    src: '/images/services/cloud/Cyber security concept in digital art.svg',
  },
  {
    title: 'Optimization & Integration',
    description:
      'After migration, we optimize cloud resources for performance, reliability, and cost-efficiency. This includes integrating cloud services with your existing systems, automating workflows, and implementing monitoring solutions to proactively manage your cloud environment.',
    src: '/images/services/cloud/faster-time to-market.svg',
  },
  {
    title: 'Ongoing Support & Innovation',
    description:
      'We provide continuous support, monitoring, and maintenance to ensure your cloud environment remains secure and efficient. Our experts help you leverage new cloud features, implement updates, and drive ongoing innovation to keep your business ahead in a rapidly evolving digital landscape.',
    src: '/images/services/cloud/Server cloud data storage concept cloudscape digital online service for global network web database backup computer infrastructure.svg',
  },
];

export default function Index(): JSX.Element {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={containerRef}>
      <section className="relative max-w-7xl mx-auto px-6 pt-20">
        <h1 className="mb-8 text-center text-3xl font-semibold">
          Cloud Development Process
        </h1>
        {projects.map((project, i) => {
          const scale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              url={project.src} key={i}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={scale}
              {...project} />
          );
        })}
      </section>
    </main>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center sticky top-0 w-full py-12"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-full max-w-7xl mx-auto rounded-lg p-8 flex flex-col origin-top bg-gradient-to-b from-neutral-100 via-neutral-100 to-background border border-border"
      >

        <div className="flex flex-wrap md:flex-nowrap mt-5 gap-10">
          <div className="w-full md:w-[40%]">
            <h1 className="text-4xl md:text-5xl font-bold text-muted-foreground/20 mb-4">0{i+1}</h1>
            <h2 className="text-2xl text-start font-semibold mb-4">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>

          <div className="w-full md:w-[60%] aspect-video relative rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={url} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
