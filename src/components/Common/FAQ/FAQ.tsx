"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SectionTitle from '../SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FaqData } from '@/types';
import Banner from '../Banner';

export default function FAQ({ faqs }: { faqs: FaqData[] }) {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionTitle title="Let's Answer Your Questions" className="text-center mb-4" />
          <p className="text-center dark:text-muted-foreground mb-6 max-w-xl mx-auto">
            If you have any questions or need assistance, feel free to reach out to us.
          </p>

          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-border/20 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-base cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        <Banner title="Lead the Market with AI Today!" description="AI isn’t the future, it’s the now. Let’s create intelligent solutions that put your business ahead of the curve." buttonText="Talk to Our Experts" />
      </div>
    </Section>
  );
}
