"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const items = [
  {
    heading: 'Who We Are',
    title: 'ACCA-Qualified Chartered Certified Accountants with 20+ Years of Experience',
    body: 'Blue Mountain Accountants is an award-winning, ACCA-qualified firm serving sole traders, limited companies, landlords and SMEs across Milton Keynes, Northamptonshire, Bedfordshire, Hertfordshire and the whole of the UK online.',
    points: [
      'Specialists in Making Tax Digital (MTD) compliance',
      'Authorised Xero, QuickBooks & FreeAgent partners',
      'Transparent fixed-fee pricing — no hidden charges',
      'Dedicated accountant assigned to every client',
    ],
    imgSide: 'right',
    bg: 'bg-white',
    imgSrc: '/why_us_meeting.png',
  },
  {
    heading: 'Why Blue Mountain',
    title: 'Proactive Tax Planning That Saves You Money Year After Year',
    body: 'We don\'t just file your accounts — we look ahead. Our proactive approach to tax planning ensures you claim every allowance available, from capital allowances and R&D tax credits to pension contributions and directors\' remuneration strategies.',
    points: [
      'Corporation Tax & Self Assessment specialists',
      'Buy-to-let & property portfolio accountants',
      'IR35 & contractor compliance experts',
      'International accounting & cross-border tax',
    ],
    imgSide: 'left',
    bg: 'bg-section-bg',
    imgSrc: '/why_us_planning.png',
  },
];

export function WhyUs() {
  return (
    <>
      {items.map((item, idx) => (
        <section key={idx} id={idx === 0 ? 'about' : undefined} className={`py-24 ${item.bg}`}>
          <div className={`max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center`}>

            {/* Text — swap order based on image side */}
            <motion.div
              initial={{ opacity: 0, x: item.imgSide === 'right' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={item.imgSide === 'left' ? 'order-2 lg:order-1' : ''}
            >
              <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
                {item.heading}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">{item.title}</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-7">{item.body}</p>
              <ul className="space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-text-main text-sm">
                    <CheckCircle2 size={17} className="text-primary mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="#services" className="border border-primary text-primary text-sm font-semibold px-6 py-3  hover:bg-section-bg transition-colors">
                  Our Services
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: item.imgSide === 'right' ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`relative h-[280px] sm:h-[360px] lg:h-[440px] overflow-hidden shadow-xl ${item.imgSide === 'left' ? 'order-1 lg:order-2' : ''}`}
            >
              <Image 
                src={item.imgSrc} 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex flex-col items-center justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30  p-6 text-white text-center max-w-xs shadow-2xl">
                  <div className="text-4xl font-bold mb-1">
                    {idx === 0 ? '£6,500+' : '98%'}
                  </div>
                  <div className="text-sm text-white/90 font-medium">
                    {idx === 0 ? 'Avg. annual tax saving per client' : 'Client retention year-on-year'}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      ))}
    </>
  );
}
