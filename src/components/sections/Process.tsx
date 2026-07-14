"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Book a Free Consultation',
    desc: 'Speak with a qualified accountant who understands your business. No obligation — just expert advice tailored to your situation.',
  },
  {
    num: '02',
    title: 'We Review Your Financials',
    desc: 'We assess your current tax position, compliance status, and identify immediate opportunities to reduce your liabilities.',
  },
  {
    num: '03',
    title: 'Custom Fixed-Fee Proposal',
    desc: 'You receive a clear, jargon-free proposal with a fixed monthly fee — no surprises, no hourly billing.',
  },
  {
    num: '04',
    title: 'Onboarding & Cloud Setup',
    desc: 'We set you up on Xero, QuickBooks or FreeAgent and migrate your records. You\'re live and compliant from day one.',
  },
  {
    num: '05',
    title: 'Ongoing Support & Tax Planning',
    desc: 'Your dedicated accountant handles filings, deadlines and proactive planning year-round. We grow as your business grows.',
  },
];

export function Process() {
  return (
    <section className="py-24 bg-section-bg">
      <div className="max-w-[900px] mx-auto px-6">

        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Switching to Blue Mountain is Simple
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            Join thousands of UK businesses who switched accountant and never looked back.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-border-light hidden md:block" />

          <div className="space-y-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 md:gap-8 items-start"
              >
                {/* Circle */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                  {step.num}
                </div>

                {/* Content */}
                <div className="bg-white border border-border-light  p-6 flex-1 shadow-sm">
                  <h3 className="font-semibold text-primary text-lg mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4  hover:bg-secondary transition-colors"
          >
            Start Your Journey Today &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
