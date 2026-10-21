import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white text-stone-700 shadow-md border border-stone-200 hover:bg-stone-50 transition transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-stone-600" />
        </button>
      )}

      {/* Floating Call Button - Clean Soft Rose */}
      <a
        href={`tel:${STORE_INFO.phoneNumbers[0].raw}`}
        className="pointer-events-auto flex items-center gap-2 bg-rose-700 text-white p-3.5 rounded-full shadow-lg hover:bg-rose-800 transition transform hover:scale-105"
        title="Call Bridal Zone Patna"
        aria-label="Call Store"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Bridal Zone! I want to enquire about bridal outfits and rental options.")}`}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto relative flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition transform hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-semibold hidden sm:inline">Chat on WhatsApp</span>
      </a>

    </div>
  );
};

