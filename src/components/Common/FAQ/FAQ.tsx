"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SectionTitle from '../SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FaqData } from '@/types';
import Banner from '../Banner';

type FAQProps = {
  bannerTitle?: string;
  bannerDesc?:  string;
  bannerCTA?: string;
  faqs: FaqData[]
}
export default function FAQ({bannerTitle, bannerDesc, bannerCTA, faqs} : FAQProps) {
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
        <Banner title={bannerTitle || "Let's Design Something That Works"} description={bannerDesc || "Kickstart Your Next Project With a Free Custom Design — Share Your Idea and Let Our Expert Team Bring It to Life, Absolutely Free!"} buttonText={bannerCTA || "Contact Us"} />
      </div>
    </Section>
  );
}
