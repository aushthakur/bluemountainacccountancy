"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Construction & CIS', desc: 'CIS contractors & subcontractors' },
  { name: 'Property & Buy-to-Let', desc: 'Landlords & property investors' },
  { name: 'IT Contractors', desc: 'IR35 & off-payroll working' },
  { name: 'Healthcare', desc: 'GPs, dentists & locums' },
  { name: 'Retail & E-Commerce', desc: 'Amazon, Etsy & online sellers' },
  { name: 'Restaurants & Hospitality', desc: 'Restaurants, cafés & hotels' },
  { name: 'Professional Services', desc: 'Solicitors, consultants & agencies' },
  { name: 'Technology & SaaS', desc: 'Startups & tech companies' },
  { name: 'Real Estate Agents', desc: 'Estate agents & lettings' },
  { name: 'Sole Traders & Freelancers', desc: 'Self-employed individuals' },
  { name: 'Limited Companies', desc: 'Directors & shareholders' },
  { name: 'SMEs & Startups', desc: 'Growth-stage businesses' },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Industries We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-xl leading-tight">
              Sector-Specific Accounting Expertise
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-sm">
            We understand your industry's unique tax laws, HMRC rules and financial challenges — so you don't have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, idx) => (
            <motion.a
              key={ind.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group border border-border-light  p-5 hover:border-primary/30 hover:bg-section-bg transition-all duration-300"
            >
              <h3 className="font-semibold text-text-main text-sm mb-1 group-hover:text-primary transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-text-secondary mb-4">{ind.desc}</p>
              <div className="flex items-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                Learn more <ArrowRight size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
