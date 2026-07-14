"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Calculator, BookOpen, Briefcase, FileText, TrendingUp, UserCheck, Building, ClipboardList } from 'lucide-react';

const services = [
  { 
    name: 'Accounting Services', 
    href: '#services', 
    desc: 'Comprehensive end-to-end accounting for businesses.',
    icon: <Calculator className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Bookkeeping', 
    href: '#bookkeeping',
    desc: 'Accurate and timely recording of financial transactions.',
    icon: <BookOpen className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Payroll', 
    href: '#payroll',
    desc: 'Hassle-free payroll management and compliance.',
    icon: <Briefcase className="w-5 h-5 text-primary" />
  },
  { 
    name: 'VAT Returns', 
    href: '#vat',
    desc: 'Expert VAT preparation and HMRC submission.',
    icon: <FileText className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Corporate Tax Planning', 
    href: '#tax',
    desc: 'Strategic tax planning for optimal efficiency.',
    icon: <TrendingUp className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Self Assessment', 
    href: '#selfassessment',
    desc: 'Personal tax returns completed on time.',
    icon: <UserCheck className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Limited Company Formations', 
    href: '#formations',
    desc: 'Quick and easy setup for your new company.',
    icon: <Building className="w-5 h-5 text-primary" />
  },
  { 
    name: 'Company Secretarial', 
    href: '#secretarial',
    desc: 'Administrative support and legal compliance.',
    icon: <ClipboardList className="w-5 h-5 text-primary" />
  },
];

const areas = [
  'Accountants Milton Keynes',
  'Accountants Northampton',
  'Accountants Bedford',
  'Accountants Luton',
  'Accountants Kettering',
  'Accountants Corby',
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled 
    ? "bg-white border-b border-border-light shadow-sm text-text-main" 
    : "bg-transparent text-white";

  const logoColor = isScrolled ? "text-primary" : "text-white";
  const logoSubColor = isScrolled ? "text-text-secondary" : "text-white/80";
  const linkColor = isScrolled ? "text-text-main hover:text-primary" : "text-white hover:text-white/80";
  const phoneColor = isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-white/80";
  
  // Keep dropdowns matching light theme regardless of scroll position
  const dropdownClass = "absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl border border-border-light p-6 w-[min(800px,95vw)] z-50 mt-2 text-text-main";

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-80 h-16 flex items-center">
              <Image 
                src={isScrolled ? "/blue-logo-transparent.png" : "/white-logo-transparent.png"}
                alt="Blue Mountain Accountants Logo"
                fill
                className="object-contain object-left transition-opacity duration-300"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2 flex-1 justify-center">

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
                        <a key={s.name} href={s.href} className="flex items-start gap-4 group/item hover:bg-section-bg p-3  transition-colors">
                          <div className="bg-section-bg group-hover/item:bg-white p-2  transition-colors border border-border-light">
                            {s.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-text-main group-hover/item:text-primary transition-colors mb-1">{s.name}</h4>
                            <p className="text-xs text-text-secondary leading-relaxed">{s.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                Areas We Serve <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {areasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-xl border border-border-light  py-2 w-64 z-50 mt-2 text-text-main"
                    onMouseEnter={() => setAreasOpen(true)}
                    onMouseLeave={() => setAreasOpen(false)}
                  >
                    {areas.map((area) => (
                      <a key={area} href="#" className="block px-4 py-2.5 text-sm text-text-main hover:bg-section-bg hover:text-primary transition-colors">
                        {area}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#pricing" className={`text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>Pricing Packages</a>
            <a href="#guides" className={`text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>Guides &amp; Blog</a>
            <a href="#about" className={`text-sm font-medium transition-colors px-3 py-2 ${linkColor}`}>About Us</a>
          </nav>

          {/* Right side contact (removed CTA) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end hidden xl:flex">
              <span className={`text-[10px] uppercase tracking-widest font-semibold transition-colors ${logoSubColor}`}>Award-Winning UK</span>
              <a href="tel:+443301753861" className={`text-sm font-bold flex items-center gap-1.5 transition-colors ${phoneColor}`}>
                <Phone size={14} /> 0330 175 3861
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-text-main' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border-light shadow-lg overflow-hidden flex flex-col text-text-main"
            >
              <div className="px-6 pb-6 pt-2 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-80px)]">
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-4 mb-2">Services</p>
                {services.map((s) => (
                  <a key={s.name} href={s.href} className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50 flex items-center gap-3">
                    <span className="bg-section-bg p-1.5 ">{s.icon}</span>
                    {s.name}
                  </a>
                ))}
                
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-4 mb-2">Areas</p>
                {areas.map((area) => (
                  <a key={area} href="#" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50">
                    {area}
                  </a>
                ))}
                
                <a href="#pricing" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50 mt-2">Pricing Packages</a>
                <a href="#about" className="text-sm text-text-main hover:text-primary py-2 border-b border-border-light/50">About Us</a>
                
                <div className="mt-6 flex flex-col gap-3">
                  <a href="tel:+443301753861" className="flex items-center justify-center gap-2 text-primary font-bold bg-section-bg py-3 ">
                    <Phone size={16} /> 0330 175 3861
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
