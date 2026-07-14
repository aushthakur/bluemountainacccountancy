"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="book" className="py-24 bg-primary text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Ready to Stop Overpaying Tax?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Book your free 30-minute consultation with a qualified UK accountant. We'll review your situation and show you exactly how much you could save — with zero obligation.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'No obligation — completely free',
                'Speak directly with a qualified accountant',
                'Available in-person (MK) or online UK-wide',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-5 h-5  bg-accent text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+443301753861"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4  hover:bg-white/10 transition-colors"
              >
                <Phone size={16} /> 0330 175 3861
              </a>
            </div>
          </motion.div>

          {/* Right contact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white  p-8 text-text-main"
          >
            <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>
            <form className="space-y-4" id="contact">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-border-light  px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-border-light  px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-border-light  px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@company.co.uk"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-border-light  px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="07700 900000"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">Business Type</label>
                <select className="w-full border border-border-light  px-4 py-2.5 text-sm text-text-secondary focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select your business type</option>
                  <option>Sole Trader</option>
                  <option>Limited Company</option>
                  <option>Partnership</option>
                  <option>Landlord / Buy-to-Let</option>
                  <option>IT Contractor</option>
                  <option>Startup</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">How Can We Help?</label>
                <textarea
                  rows={3}
                  className="w-full border border-border-light  px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your accounting needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3  hover:bg-secondary transition-colors"
              >
                Send Message — We'll Reply in 24hrs
              </button>
            </form>
            <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
              <a href="mailto:info@bluemountain.co.uk" className="flex items-center gap-1.5 hover:text-primary">
                <Mail size={12} /> info@bluemountain.co.uk
              </a>
              <a href="tel:+443301753861" className="flex items-center gap-1.5 hover:text-primary">
                <Phone size={12} /> 0330 175 3861
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
