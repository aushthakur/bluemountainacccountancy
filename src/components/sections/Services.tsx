"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FileText, BookOpen, Users, Globe, Building2, Landmark,
  ClipboardList, BarChart2, Shield, Calculator, Briefcase, TrendingUp, ArrowRight
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    image: '/services_accounting.png',
    services: [
      {
        icon: Calculator,
        title: 'Accounting Services',
        desc: 'Full management accounts, statutory filings and financial reporting.',
        href: '#accounting',
      },
      {
        icon: BookOpen,
        title: 'Bookkeeping Services',
        desc: 'Real-time cloud bookkeeping using Xero, QuickBooks or FreeAgent.',
        href: '#bookkeeping',
      },
      {
        icon: Users,
        title: 'Payroll Services',
        desc: 'Full-service RTI payroll, PAYE, and workplace pension processing.',
        href: '#payroll',
      },
      {
        icon: BarChart2,
        title: 'Property Accountants',
        desc: 'Specialist advice for landlords on rental income, CGT, and portfolios.',
        href: '#property',
      },
    ]
  },
  {
    id: 'tax',
    title: 'Tax & Compliance',
    image: '/services_tax.png',
    services: [
      {
        icon: Briefcase,
        title: 'Corporate Tax Planning',
        desc: 'Proactive corporation tax planning, R&D credits, and allowances.',
        href: '#tax',
      },
      {
        icon: FileText,
        title: 'Self Assessment',
        desc: 'Stress-free returns for directors, freelancers, and high earners.',
        href: '#selfassessment',
      },
      {
        icon: Globe,
        title: 'VAT Returns',
        desc: 'MTD-compliant VAT submissions and full HMRC registration support.',
        href: '#vat',
      },
      {
        icon: ClipboardList,
        title: 'Company Secretarial',
        desc: 'Confirmation statements, PSC register, and Companies House compliance.',
        href: '#secretarial',
      },
    ]
  },
  {
    id: 'advisory',
    title: 'Advisory & Specialist',
    image: '/why_us_planning.png',
    services: [
      {
        icon: TrendingUp,
        title: 'Business Advisory',
        desc: 'Cash flow forecasting, business planning, and strategic growth advice.',
        href: '#advisory',
      },
      {
        icon: Landmark,
        title: 'Personal Tax Planning',
        desc: 'Inheritance tax, estate planning, and dividend strategies.',
        href: '#personal-tax',
      },
      {
        icon: Building2,
        title: 'Company Formations',
        desc: 'Complete incorporation service including registered office.',
        href: '#formations',
      },
      {
        icon: Shield,
        title: 'Fee Protection',
        desc: 'Tax investigation insurance protecting you from HMRC enquiry fees.',
        href: '#fee-protection',
      },
    ]
  }
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const activeData = serviceCategories.find(c => c.id === activeCategory)!;

  return (
    <section id="services" className="py-24 bg-section-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1  border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Comprehensive Accounting &amp; Tax Services
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            From sole traders to limited companies, we provide affordable, fixed-fee accounting services trusted by 5,000+ UK businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 w-[85vw] sm:w-[300px] lg:w-auto snap-center text-left px-6 py-6  transition-all duration-300 relative overflow-hidden group ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white shadow-2xl scale-[1.02] z-10 border-none' 
                    : 'bg-white text-text-main hover:bg-white/80 hover:shadow-md border border-border-light'
                }`}
              >
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-2 ${activeCategory === category.id ? 'text-white' : 'text-primary'}`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm ${activeCategory === category.id ? 'text-white/80' : 'text-text-secondary'}`}>
                    Explore {category.services.length} core services
                  </p>
                </div>
                {activeCategory === category.id && (
                  <motion.div layoutId="activeTabIndicator" className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-white opacity-90" />
                  </motion.div>
                )}
                {/* Subtle highlight effect */}
                {activeCategory !== category.id && (
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Content Showcase */}
          <div className="lg:col-span-8 min-h-[750px] md:min-h-[600px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white -[2rem] overflow-hidden shadow-2xl border border-border-light flex flex-col h-full"
              >
                {/* Featured Image */}
                <div className="relative h-56 w-full shrink-0">
                  <Image 
                    src={activeData.image}
                    alt={activeData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white p-8 drop-shadow-md">{activeData.title}</h3>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="p-6 md:p-8 lg:p-10 grid sm:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-8 lg:gap-y-12 flex-1 bg-white">
                  {activeData.services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <div key={idx} className="group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12  bg-section-bg text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                            <Icon size={24} />
                          </div>
                          <h4 className="font-bold text-text-main text-lg">{service.title}</h4>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed pl-[64px]">
                          {service.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-section-bg p-6 text-center border-t border-border-light shrink-0">
                  <a href="#book" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider">
                    Discuss {activeData.title} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
