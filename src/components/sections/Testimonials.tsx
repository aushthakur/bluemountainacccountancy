"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Oliver Thompson',
    role: 'Director – BuildRight Construction Ltd',
    location: 'Milton Keynes',
    rating: 5,
    text: 'Switched to Blue Mountain two years ago and have not looked back. They handle our CIS, payroll and VAT returns seamlessly. Their proactive tax planning saved us over £8,000 last year alone.',
    service: 'Construction & CIS',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Freelance IT Consultant',
    location: 'Northampton',
    rating: 5,
    text: 'As an IT contractor navigating IR35, I needed an accountant who really understood the legislation. Blue Mountain gave me clear, confident advice and sorted my Self Assessment quickly.',
    service: 'IT Contractor / IR35',
  },
  {
    name: 'Richard Davies',
    role: 'Buy-to-Let Landlord',
    location: 'Bedford',
    rating: 5,
    text: 'They restructured my property portfolio, advised me on Section 24, and helped me set up a limited company for future purchases. Brilliant service — well worth every penny.',
    service: 'Property & Buy-to-Let',
  },
  {
    name: 'Eleanor Hughes',
    role: 'Founder – TechStart UK Ltd',
    location: 'Luton',
    rating: 5,
    text: 'From company formation to R&D tax credits — Blue Mountain handled everything as we scaled. They feel less like accountants and more like business partners who genuinely care.',
    service: 'Tech Startup',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Client Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-text-secondary text-base">
            Rated 4.9★ on Google — see why 5,000+ UK businesses trust Blue Mountain Accountants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-section-bg border border-border-light  p-7 relative"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-primary/10 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-accent fill-accent" />
                ))}
              </div>

              <p className="text-text-main text-sm leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-primary text-sm">{r.name}</div>
                  <div className="text-xs text-text-secondary">{r.role}</div>
                  <div className="text-xs text-text-secondary">{r.location}</div>
                </div>
                <span className="text-[10px] font-semibold text-primary bg-primary/8 px-2.5 py-1  border border-primary/15">
                  {r.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Blue+Mountain+Accountants+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold border border-primary/20 px-6 py-2.5  hover:bg-section-bg transition-colors"
          >
            View All Google Reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
