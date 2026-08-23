'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke Atas Halaman"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 border-2 border-white/90 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in zoom-in-75 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#0052CC]/30"
      title="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
