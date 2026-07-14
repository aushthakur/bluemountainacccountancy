"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Features() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1000px] mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1  border border-border-light bg-white text-xs font-medium text-text-secondary mb-6">
          <span className="w-1.5 h-1.5  bg-accent"></span>
          Features
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight max-w-2xl mx-auto leading-[1.2]">
          Everything You Need to Control Spend
        </h2>
        <p className="text-text-secondary text-base max-w-2xl mx-auto">
          Keep your business account and all your finance needs safely organized under one roof. Manage money quickly, easily & efficiently. Whether you're alone or leading a team.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* Left Feature Card */}
        <div className="bg-section-bg/30 p-6 md:p-10 border border-border-light/50 relative overflow-hidden min-h-[280px] md:h-[400px]">
          <div className="space-y-4 relative z-10 w-full sm:w-2/3">
            <div className="bg-white p-4  flex items-center justify-between shadow-sm border border-border-light/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8  bg-green-100 text-green-600 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className="font-medium text-sm">Corporate Tax</span>
              </div>
              <span className="text-text-secondary text-sm font-medium">Optimized</span>
            </div>

            <div className="bg-white p-4  flex items-center justify-between shadow-sm border border-border-light/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8  bg-blue-100 text-blue-600 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <span className="font-medium text-sm">VAT & Payroll</span>
              </div>
              <span className="text-text-secondary text-sm font-medium">Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Feature Card */}
        <div className="bg-section-bg/30 relative overflow-hidden min-h-[280px] md:h-[400px] border border-border-light/50 group">
          <Image 
            src="/features_dashboard.png"
            alt="Modern financial dashboard"
            fill
            className="object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
