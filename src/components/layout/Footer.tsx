import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

import Link from 'next/link';

const serviceLinks = [
  { name: 'Accounting Services', href: '/services/accounting-services' },
  { name: 'Bookkeeping Services', href: '/services/bookkeeping-services' },
  { name: 'Payroll Services', href: '/services/payroll-services' },
  { name: 'VAT Returns', href: '/services/vat-returns' },
  { name: 'Self Assessment', href: '/services/self-assessment' },
  { name: 'Corporate Tax Planning', href: '/services/corporate-tax-planning' },
  { name: 'Limited Company Formations', href: '/services/limited-company-formations' },
  { name: 'Company Secretarial', href: '/services/company-secretarial' },
  { name: 'Property Accountants', href: '/services/property-accountants' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Pricing Packages', href: '/pricing' },
  { name: 'Blog & Guides', href: '/blog' },
  { name: 'Switch Accountant', href: '/switch' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Privacy Notice', href: '/legal/privacy' },
  { name: 'Terms & Conditions', href: '/legal/terms' },
];

export function Footer() {
  return (
    <footer className="bg-[#05213d] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14 pb-14 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="relative w-72 lg:w-96 h-20 lg:h-28 mb-6">
              <Image 
                src="/logo.png" 
                alt="Blue Mountain Accountants Logo" 
                fill 
                className="object-contain object-left brightness-0 invert opacity-90" 
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              ACCA-qualified chartered certified accountants helping UK sole traders, limited companies and SMEs with tax, accounting and compliance since 2004.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+442082056353" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone size={13} /> 0208 205 6353
              </a>
              <a href="tel:+447966639487" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone size={13} /> 0796 6639 487
              </a>
              <a href="mailto:info@bluemountain.co.uk" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail size={13} /> info@bluemountain.co.uk
              </a>
              <div className="flex items-start gap-2 text-white/70 text-xs">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>Unit C Common Road, Studham Place, Dunstable, England, LU6 2FU</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-widest">Accounting Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-white/5  border border-white/10">
              <p className="text-xs text-white/60 mb-1 font-medium">Registered with</p>
              <p className="text-sm font-bold text-white">ACCA</p>
              <p className="text-[10px] text-white/40 mt-1">Association of Chartered Certified Accountants</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Blue Mountain Accountants LTD. All rights reserved. Registered in England &amp; Wales. Company No. 17187187</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/legal/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
