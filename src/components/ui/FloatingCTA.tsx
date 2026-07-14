"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useConsultationModal } from '@/lib/ConsultationModalContext';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={openModal}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] bg-accent text-white py-4 px-3 shadow-2xl flex flex-col items-center gap-4 hover:bg-primary transition-colors border border-accent/20 border-l-0 group"
          aria-label="Book Free Consultation"
        >
          <Calendar size={22} className="group-hover:scale-110 transition-transform" />
          <span
            className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Book Free Consultation
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
