"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Mail, User, Building2, ChevronDown, Loader2 } from 'lucide-react';
import { useConsultationModal } from '@/lib/ConsultationModalContext';

const services = [
  'Accounting Services',
  'Bookkeeping',
  'Payroll',
  'VAT Returns',
  'Corporate Tax Planning',
  'Self Assessment',
  'Limited Company Formations',
  'Company Secretarial',
  'Property Accounting',
  'Business Advisory',
  'Other',
];

type FormState = 'idle' | 'submitting' | 'success';

export function ConsultationModal() {
  const { isOpen, closeModal } = useConsultationModal();
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    await new Promise(res => setTimeout(res, 1800));
    setFormState('success');
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setFormState('idle');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
              
              {/* Header */}
              <div className="bg-primary px-8 py-7 relative flex-shrink-0">
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={22} />
                </button>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Free, No-Obligation</p>
                <h2 className="text-2xl font-bold text-white">Book Your Free Consultation</h2>
                <p className="text-white/70 text-sm mt-2">
                  Speak to a qualified chartered accountant within 24 hours.
                </p>
              </div>

              {/* Body */}
              <div className="px-8 py-8">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={36} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      Your consultation request has been received. One of our chartered accountants will be in touch within <strong>1 business day</strong>.
                    </p>
                    <div className="bg-section-bg border border-border-light p-5 text-sm text-text-secondary mb-6">
                      <p className="font-semibold text-text-main mb-1">Can't wait? Call us now:</p>
                      <a href="tel:+443301753861" className="text-primary font-bold text-lg flex items-center justify-center gap-2">
                        <Phone size={18} /> 0330 175 3861
                      </a>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-sm text-text-secondary hover:text-primary transition-colors underline underline-offset-2"
                    >
                      Close this window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name & Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-text-main uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full pl-9 pr-4 py-3 border border-border-light text-sm text-text-main placeholder:text-text-secondary/60 focus:outline-none focus:border-primary transition-colors bg-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-main uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="My Company Ltd"
                            className="w-full pl-9 pr-4 py-3 border border-border-light text-sm text-text-main placeholder:text-text-secondary/60 focus:outline-none focus:border-primary transition-colors bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-text-main uppercase tracking-wider mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.co.uk"
                            className="w-full pl-9 pr-4 py-3 border border-border-light text-sm text-text-main placeholder:text-text-secondary/60 focus:outline-none focus:border-primary transition-colors bg-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-main uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="07700 900 000"
                            className="w-full pl-9 pr-4 py-3 border border-border-light text-sm text-text-main placeholder:text-text-secondary/60 focus:outline-none focus:border-primary transition-colors bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-bold text-text-main uppercase tracking-wider mb-2">
                        Service of Interest <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                        <select
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="w-full appearance-none pr-9 pl-4 py-3 border border-border-light text-sm text-text-main focus:outline-none focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select a service…</option>
                          {services.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-text-main uppercase tracking-wider mb-2">
                        Tell Us About Your Business
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Brief description of your business, current accountant situation, and what you need help with…"
                        className="w-full px-4 py-3 border border-border-light text-sm text-text-main placeholder:text-text-secondary/60 focus:outline-none focus:border-primary transition-colors resize-none bg-white"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-primary text-white font-bold py-4 text-sm uppercase tracking-wider hover:bg-secondary transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        'Request Free Consultation'
                      )}
                    </button>

                    <p className="text-[11px] text-text-secondary text-center leading-relaxed">
                      By submitting this form, you agree to our{' '}
                      <a href="/legal/privacy" className="underline hover:text-primary transition-colors" onClick={handleClose}>Privacy Policy</a>.
                      We will never share your data with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
