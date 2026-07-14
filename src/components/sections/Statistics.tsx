"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { end: 20, suffix: '+', label: 'Years of Expertise', sub: 'Serving UK businesses since 2004' },
  { end: 5000, suffix: '+', label: 'Happy Clients', sub: 'Across sole traders, LTDs & SMEs' },
  { end: 98, suffix: '%', label: 'Client Retention Rate', sub: 'Clients who stay year after year' },
  { end: 4.9, suffix: '★', label: 'Google Rating', sub: 'Verified reviews on Google My Business', isDecimal: true },
];

export function Statistics() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted by Thousands of UK Businesses
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Our numbers speak for themselves — two decades of outstanding client service.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center border border-white/15  p-8 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-5xl font-bold text-white mb-2 font-mono">
                {stat.isDecimal ? (
                  <span>{stat.end}{stat.suffix}</span>
                ) : (
                  <Counter end={stat.end} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-white/60 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
