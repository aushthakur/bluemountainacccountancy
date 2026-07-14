"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for Sole Traders',
    price: '£49',
    freq: '/month',
    popular: false,
    features: [
      { text: 'Self Assessment Tax Return', inc: true },
      { text: 'Bookkeeping (up to 50 transactions)', inc: true },
      { text: 'Quarterly VAT Returns', inc: true },
      { text: 'HMRC Registration Support', inc: true },
      { text: 'Payroll (up to 1 employee)', inc: false },
      { text: 'Limited Company Accounts', inc: false },
      { text: 'Corporation Tax Return', inc: false },
      { text: 'Dedicated Accountant', inc: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    subtitle: 'Best for Limited Companies',
    price: '£119',
    freq: '/month',
    popular: true,
    features: [
      { text: 'Annual Statutory Accounts', inc: true },
      { text: 'Corporation Tax Return (CT600)', inc: true },
      { text: 'Director\'s Self Assessment', inc: true },
      { text: 'Payroll (up to 5 employees)', inc: true },
      { text: 'VAT Returns (MTD compliant)', inc: true },
      { text: 'Cloud Accounting (Xero/QBO)', inc: true },
      { text: 'Dedicated Accountant', inc: true },
      { text: 'Quarterly Tax Planning Review', inc: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    subtitle: 'For Growing Businesses',
    price: '£249',
    freq: '/month',
    popular: false,
    features: [
      { text: 'Everything in Growth', inc: true },
      { text: 'Quarterly Tax Planning Review', inc: true },
      { text: 'R&D Tax Credits Advice', inc: true },
      { text: 'Payroll (unlimited employees)', inc: true },
      { text: 'Company Secretarial Services', inc: true },
      { text: 'Personal Tax Planning', inc: true },
      { text: 'Fee Protection Insurance', inc: true },
      { text: 'Virtual CFO Consultations', inc: true },
    ],
    cta: 'Contact Us',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-section-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Pricing Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Simple, Transparent Fixed-Fee Pricing
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            No hourly rates. No surprise bills. Pick the package that fits your business and switch anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-white  p-8 border ${plan.popular ? 'border-primary shadow-xl ring-2 ring-primary/20' : 'border-border-light shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 ">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-bold text-primary text-xl mb-1">{plan.name}</h3>
                <p className="text-xs text-text-secondary mb-4">{plan.subtitle}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-text-secondary text-sm pb-1">{plan.freq}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5 text-sm">
                    {f.inc
                      ? <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      : <X size={16} className="text-text-secondary/40 mt-0.5 flex-shrink-0" />}
                    <span className={f.inc ? 'text-text-main' : 'text-text-secondary/50'}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center font-semibold text-sm py-3  transition-colors ${plan.popular
                  ? 'bg-primary text-white hover:bg-secondary'
                  : 'border border-primary text-primary hover:bg-section-bg'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-text-secondary mt-8">
          All prices exclude VAT. Bespoke packages available for larger businesses — <a href="#contact" className="text-primary underline">contact us</a> for a tailored quote.
        </p>
      </div>
    </section>
  );
}
