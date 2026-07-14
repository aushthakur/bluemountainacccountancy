"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    cat: 'Tax Planning',
    title: 'MTD ITSA 2026: A Practical Checklist for Sole Traders and Landlords Over £50,000',
    date: 'July 2026',
    readTime: '6 min read',
    excerpt: 'From April 2026 Making Tax Digital for Income Tax Self Assessment becomes mandatory for self-employed and landlords with income over £50k. Here\'s what you must do now.',
  },
  {
    cat: 'Limited Companies',
    title: 'When Should a Sole Trader Convert to a Limited Company? Key Financial Thresholds for 2026-27',
    date: 'June 2026',
    readTime: '8 min read',
    excerpt: 'If your profits exceed £30,000 you could save thousands by incorporating. We break down the real numbers behind this critical decision.',
  },
  {
    cat: 'Payroll',
    title: 'HMRC Payrolling Benefits in Kind: Mandatory Changes from April 2026 Explained',
    date: 'June 2026',
    readTime: '5 min read',
    excerpt: 'From April 2026 employers must payroll benefits in kind rather than reporting via P11D. Here\'s what UK employers need to do before the deadline.',
  },
  {
    cat: 'Property Tax',
    title: 'How to Avoid Capital Gains Tax on Buy-to-Let Property in the UK',
    date: 'May 2026',
    readTime: '7 min read',
    excerpt: 'Selling a rental property? CGT rates for landlords can be significant. Discover the legitimate strategies to reduce or defer your tax liability.',
  },
];

export function Insights() {
  return (
    <section id="guides" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Insights &amp; Guides
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Tax News &amp; Guides</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>

        {/* Featured + 3 cards */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Featured post (large) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group lg:col-span-2 bg-section-bg border border-border-light  overflow-hidden flex flex-col"
          >
            <div className="relative h-64 flex items-center justify-center">
              <Image 
                src="/insights_tax_documents.png" 
                alt="Tax Documents and Financial Charts" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="relative z-10 text-center px-8 max-w-lg">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1  shadow-md">{posts[0].cat}</span>
                <p className="text-white font-bold text-2xl mt-4 leading-snug drop-shadow-md">{posts[0].title}</p>
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>{posts[0].date} · {posts[0].readTime}</span>
                <span className="text-primary font-semibold group-hover:underline">Read more →</span>
              </div>
            </div>
          </motion.a>

          {/* Secondary posts column */}
          <div className="flex flex-col gap-5">
            {posts.slice(1).map((post, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 1) * 0.1 }}
                className="group bg-section-bg border border-border-light  p-5 flex flex-col hover:border-primary/20 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">{post.cat}</span>
                <h3 className="font-semibold text-text-main text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-[11px] text-text-secondary mt-auto pt-2">
                  {post.date} · {post.readTime}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
