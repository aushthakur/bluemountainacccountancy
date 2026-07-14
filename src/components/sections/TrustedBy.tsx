"use client";

import React from 'react';

const logos = [
  "Global Corp", "Alpha Industries", "Tech Solutions", "Omega Group", "Horizon Ventures"
];

export function TrustedBy() {
  return (
    <section className="py-12 border-b border-border-light bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-text-secondary uppercase tracking-widest mb-8">
          Trusted by leading enterprises worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale">
          {logos.map((logo, index) => (
            <div key={index} className="text-2xl font-serif font-bold text-text-main flex items-center">
              {/* Using text as placeholder for logos */}
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
