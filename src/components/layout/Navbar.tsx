"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X, ChevronDown, Phone, Calculator, BookOpen, Briefcase, FileText, TrendingUp, UserCheck, Building, ClipboardList } from 'lucide-react';

import Link from 'next/link';
import { useConsultationModal } from '@/lib/ConsultationModalContext';

const services = [
  { 
    name: 'Accounting Services', 
    href: '/services/accounting-services', 
    desc: 'Comprehensive end-to-end accounting for businesses.',
    icon: <Calculator className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Bookkeeping', 
    href: '/services/bookkeeping-services',
    desc: 'Accurate and timely recording of financial transactions.',
    icon: <BookOpen className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Payroll', 
    href: '/services/payroll-services',
    desc: 'Hassle-free payroll management and compliance.',
    icon: <Briefcase className="w-5 h-5 text-primary" />
  },
  { 
    name: 'VAT Returns', 
    href: '/services/vat-returns',
    desc: 'Expert VAT preparation and HMRC submission.',
    icon: <FileText className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Corporate Tax Planning', 
    href: '/services/corporate-tax-planning',
    desc: 'Strategic tax planning for optimal efficiency.',
    icon: <TrendingUp className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Self Assessment', 
    href: '/services/self-assessment',
    desc: 'Personal tax returns completed on time.',
    icon: <UserCheck className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Limited Company Formations', 
    href: '/services/limited-company-formations',
    desc: 'Quick and easy setup for your new company.',
    icon: <Building className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Company Secretarial', 
    href: '/services/company-secretarial',
    desc: 'Administrative support and legal compliance.',
    icon: <ClipboardList className="w-5 h-5 text-primary" />
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerClass = "top-4 lg:top-8 w-full px-4 lg:px-8 max-w-[1600px] left-1/2 -translate-x-1/2";
  const navInnerClass = "bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[3rem] text-text-main";

  const logoColor = "text-primary";
  const logoSubColor = "text-text-secondary";
  const linkColor = "text-text-main hover:text-primary transition-colors font-medium";
  const phoneColor = "text-primary hover:text-accent transition-colors font-semibold";
  
  // Keep dropdowns matching light theme regardless of scroll position
  const dropdownClass = "absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl border border-border-light p-6 w-[min(800px,95vw)] z-50 mt-2 text-text-main";

  return (
    <>
      <motion.header
        className={`fixed z-50 transition-all duration-500 ease-in-out ${navContainerClass}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`mx-auto flex items-center justify-between gap-6 px-8 h-20 lg:h-24 w-full transition-all duration-500 ${navInnerClass}`}>

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative flex items-center transition-all duration-500 w-56 sm:w-72 lg:w-80 h-14 lg:h-16">
              <Image 
                src="/logo.png"
                alt="Blue Mountain Accountants Logo"
                fill
                className={`object-contain object-left transition-all duration-300`}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2 flex-1 justify-center">

            <Link href="/" className={`flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>
              <Home size={16} /> Home
            </Link>

            {/* Services Mega Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Accounting Services <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={dropdownClass}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {services.map((s) => (
                        <Link key={s.name} href={s.href} className="flex items-start gap-4 p-3 hover:bg-section-bg transition-colors rounded-xl">
                        <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-border-light">{s.icon}</div>
                        <div>
                          <div className="text-sm font-bold mb-0.5 text-primary">{s.name}</div>
                          <div className="text-xs text-text-secondary leading-relaxed">{s.desc}</div>
                        </div>
                      </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className={`text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>Pricing Packages</Link>
            <Link href="/blog" className={`text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>Guides &amp; Blog</Link>
            <Link href="/about" className={`text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>About Us</Link>
          </nav>

          {/* Right side contact */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end hidden xl:flex">
              <span className={`text-[10px] uppercase tracking-widest font-semibold transition-colors ${logoSubColor}`}>Award-Winning UK</span>
              <a href="tel:+442082056353" className={`text-sm font-bold flex items-center gap-1.5 transition-colors ${phoneColor}`}>
                <Phone size={14} /> 0208 205 6353
              </a>
            </div>
            <button onClick={openModal} className="bg-primary text-white hover:bg-primary/90 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md">
              Get a call back
            </button>
          </div>

          {/* Mobile Actions (CTA + Toggle) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
            <button onClick={openModal} className="bg-primary text-white hover:bg-primary/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-md whitespace-nowrap">
              Get a call back
            </button>
            <button className="p-1 sm:p-2 transition-colors text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[2rem] mt-2 mx-4 sm:mx-8 overflow-hidden flex flex-col text-text-main"
            >
              <div className="px-6 pb-6 pt-4 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-140px)]">
                <Link href="/" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50 flex items-center gap-2 mt-2">
                  <Home size={16} /> Home
                </Link>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-4 mb-2">Services</p>
                {services.map((s) => (
                  <Link key={s.name} href={s.href} className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50 flex items-center gap-3">
                    <span className="bg-section-bg p-1.5 ">{s.icon}</span>
                    {s.name}
                  </Link>
                ))}
                
                <Link href="/pricing" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50 mt-2">Pricing Packages</Link>
                <Link href="/blog" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50">Guides &amp; Blog</Link>
                <Link href="/about" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50">About Us</Link>
                <Link href="/switch" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50">Switch Accountant</Link>
                
                <div className="mt-6 flex flex-col gap-3">
                  <button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="flex items-center justify-center gap-2 text-white font-bold bg-primary rounded-xl py-3 shadow-md">
                    Get a call back
                  </button>
                  <a href="tel:+442082056353" className="flex items-center justify-center gap-2 text-primary font-bold bg-section-bg rounded-xl py-3 ">
                    <Phone size={16} /> 0208 205 6353
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
