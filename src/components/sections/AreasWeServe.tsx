"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = [
  { name: 'Accountants Milton Keynes', href: '#mk' },
  { name: 'Accountants Northampton', href: '#northampton' },
  { name: 'Accountants Bedford', href: '#bedford' },
  { name: 'Accountants Luton', href: '#luton' },
  { name: 'Accountants Kettering', href: '#kettering' },
  { name: 'Accountants Corby', href: '#corby' },
  { name: 'Chartered Accountants Wellingborough', href: '#wellingborough' },
  { name: 'Chartered Accountants Rushden', href: '#rushden' },
  { name: 'Accountants Hertfordshire', href: '#hertfordshire' },
  { name: 'Accountants Buckinghamshire', href: '#bucks' },
  { name: 'Chartered Accountants Luton', href: '#luton' },
  { name: 'Chartered Accountants Aylesbury', href: '#aylesbury' },
];

export function AreasWeServe() {
  return (
    <section id="areas" className="py-20 bg-primary/5 border-t border-border-light">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Coverage
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Serving Businesses Across the Midlands &amp; Online UK-Wide
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-xs">
            Based in Milton Keynes with clients across the whole of the UK via our secure online platform.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {areas.map((area, idx) => (
            <motion.a
              key={area.name}
              href={area.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-white border border-border-light  px-3 py-2.5 hover:text-primary hover:border-primary/20 transition-colors"
            >
              <MapPin size={11} className="text-primary flex-shrink-0" />
              <span className="truncate">{area.name.replace(/^(Accountants|Chartered Accountants)\s+/i, '')}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
