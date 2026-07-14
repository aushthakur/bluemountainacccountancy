"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
}

export function PageHero({ title, subtitle, category }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category && (
            <div className="inline-block px-3 py-1 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-6">
              {category}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
