"use client";

import React from 'react';
import { faqData } from './faqData';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SectionTitle from '../SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <Section>
      <SectionTitle title="Let's Answer Your Questions" className="text-center mb-4" />
      <p className="text-center dark:text-muted-foreground mb-6 max-w-xl mx-auto">
        If you have any questions or need assistance, feel free to reach out to us.
      </p>

      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
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
    </Section>
  );
}
