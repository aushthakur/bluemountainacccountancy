"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[450px] bg-white border border-border-light shadow-2xl  p-6 z-[100] soft-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2 text-primary">
              <Cookie size={24} />
              <h3 className="font-bold text-lg">Cookie Preferences</h3>
            </div>
            <button 
              onClick={handleDecline}
              className="text-text-secondary hover:text-text-main transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-primary text-white font-semibold py-2.5  hover:bg-secondary transition-colors text-sm"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 border border-border-light text-text-main font-semibold py-2.5  hover:bg-section-bg transition-colors text-sm"
            >
              Reject Non-Essential
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
