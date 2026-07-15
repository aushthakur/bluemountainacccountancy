"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useConsultationModal } from '@/lib/ConsultationModalContext';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '5,000+', label: 'Happy Clients' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '98%', label: 'Client Retention' },
];

export function Hero() {
  const { openModal } = useConsultationModal();
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full"
        >
          {/* Local Green Mountain video */}
          <source src="/230882.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-5 tracking-tight text-shadow-sm">
            Expert Accounting &amp; Tax Services for UK Businesses
          </h1>

          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
            Online chartered accountants for sole traders, limited companies, landlords and SMEs. Helping UK businesses with tax returns, bookkeeping, payroll, VAT, and Making Tax Digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-bold px-7 py-3.5  hover:bg-neutral-100 transition-all text-sm shadow-lg hover:shadow-xl"
            >
              Book Free Consultation <ArrowRight size={16} />
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5  hover:bg-white/20 transition-all text-sm"
            >
              View Pricing Packages
            </a>
          </div>

          {/* Trust badges */}
          <ul className="space-y-3">
            {[
              'ICAEW Qualified Chartered Accountants',
              'Fixed-fee monthly packages — no surprises',
              'Xero, QuickBooks & FreeAgent Partners',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative hidden lg:flex flex-col gap-5"
        >
          {/* Main card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-white/70 text-sm font-semibold mb-1 uppercase tracking-wider">Annual Tax Saving (avg.)</p>
            <h3 className="text-5xl font-bold mb-4">£6,500+</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Our clients save an average of £6,500 per year in tax through proactive planning, allowances optimisation, and HMRC compliance.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/70 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Trusted logos */}
          <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-6 shadow-2xl">
            <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-widest mb-5 text-center">Trusted Software Partners</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-items-center opacity-90">
              {[
                { name: 'Xero', src: '/xero-logo.png' },
                { name: 'QuickBooks', src: '/Quickbooks-Logo.png' },
                { name: 'FreeAgent', src: '/freeagent-logo.png' },
                { name: 'Sage', src: '/sage-accounting.png' }
              ].map((logo) => (
                <div key={logo.name} className="relative w-36 h-14 hover:scale-110 transition-transform duration-300">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
