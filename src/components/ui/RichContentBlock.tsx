"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface ContentSection {
  title: string;
  content: string[];
  list?: string[];
}

interface RichContentBlockProps {
  sections: ContentSection[];
  sidebarContent?: React.ReactNode;
}

export function RichContentBlock({ sections, sidebarContent }: RichContentBlockProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">{section.title}</h2>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {section.list && (
                <ul className="mt-8 space-y-4">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-text-main font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            {sidebarContent || (
              <div className="bg-section-bg p-8 border border-border-light">
                <h3 className="text-xl font-bold text-primary mb-4">Need Expert Advice?</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Speak to our qualified chartered accountants today and find out exactly how much tax we could save you.
                </p>
                <a 
                  href="/#book" 
                  className="block w-full text-center bg-primary text-white font-semibold py-4 hover:bg-secondary transition-colors"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="tel:+443301753861" 
                  className="block w-full text-center border border-primary text-primary font-semibold py-4 hover:bg-white transition-colors mt-3"
                >
                  Call 0330 175 3861
                </a>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
