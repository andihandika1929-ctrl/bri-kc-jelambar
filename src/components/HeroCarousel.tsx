'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export interface BannerSlide {
  id: number;
  altText: string;
  imageSrc: string;
  targetLink: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    altText: 'Kemitraan Resmi BRI & FC Barcelona',
    imageSrc: '/banners/banner1.png',
    targetLink: '#tim-bisnis',
  },
  {
    id: 2,
    altText: 'Sewa Lapangan Olahraga via Lifestyle BRImo',
    imageSrc: '/banners/banner2.png',
    targetLink: '#layanan',
  },
  {
    id: 3,
    altText: 'Dirgahayu Republik Indonesia ke-81 Bersama Bank BRI',
    imageSrc: '/banners/banner3.png',
    targetLink: '#tim-bisnis',
  },
  {
    id: 4,
    altText: 'Buka Tabungan & Registrasi BRImo Serba Cepat',
    imageSrc: '/banners/banner4.png',
    targetLink: '#tim-bisnis',
  },
];

const wantOptions = [
  {
    id: 'kur',
    label: 'Pengajuan Kredit Usaha Rakyat (KUR Mikro & Super Mikro)',
    target: '#tim-bisnis',
  },
  {
    id: 'kmk',
    label: 'Kredit Modal Kerja (KMK) & Investasi Usaha / Pabrik',
    target: '#tim-bisnis',
  },
  {
    id: 'kpr',
    label: 'Pengajuan KPR BRI & Pinjaman Konsumer (Briguna)',
    target: '#tim-bisnis',
  },
  {
    id: 'edc',
    label: 'Pemasangan Mesin EDC Android & Soundbox QRIS Merchant',
    target: '#tim-bisnis',
  },
  {
    id: 'giro',
    label: 'Pembukaan Rekening Giro Bisnis, Deposito & Payroll',
    target: '#tim-bisnis',
  },
  {
    id: 'unit',
    label: 'Informasi 8 Kantor Unit Supervisi KC Jelambar',
    target: '#unit-supervisi',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedWant, setSelectedWant] = useState(wantOptions[0].id);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideCount = bannerSlides.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide helper
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  const handlePrev = () => {
    prevSlide();
    resetTimer();
  };

  // Reset timer on user interaction
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  }, [isPaused, nextSlide]);

  // Main auto-slide effect (5 seconds)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle "LET US HELP YOU" action
  const handleHelpAction = () => {
    const selectedItem = wantOptions.find((opt) => opt.id === selectedWant) || wantOptions[0];
    
    // Smooth scroll to target section
    const targetElement = document.querySelector(selectedItem.target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-visible bg-transparent">
      {/* 1. Full-Bleed Clean Hero Banner Carousel (Zero black borders) */}
      <div
        className="relative w-full overflow-hidden bg-transparent"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Hero Carousel Banner Resmi BRI"
      >
        {/* Soft Vignette Overlay: Top (for transparent navbar readability) & Bottom (soft gradient blend) */}
        <div className="absolute top-0 inset-x-0 h-32 md:h-44 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-24 md:h-36 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none z-10" />

        {/* Aspect Ratio Container for Full-Bleed Responsive Hero */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[24/9] lg:aspect-[28/10] min-h-[360px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] max-h-[700px] bg-transparent">
          {bannerSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <a
                key={slide.id}
                href={slide.targetLink}
                className={`absolute inset-0 block w-full h-full transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                }`}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                title={slide.altText}
              >
                {/* 100% Full-bleed Image without black sidebars */}
                <img
                  src={slide.imageSrc}
                  alt={slide.altText}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </a>
            );
          })}

          {/* Navigation Arrows (Prev / Next) */}
          <button
            onClick={handlePrev}
            aria-label="Slide Banner Sebelumnya"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-bri-blue/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Slide Banner Selanjutnya"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-bri-blue/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slide Indicator Dots (Floating inside banner at bottom-center) */}
          <div className="absolute bottom-6 sm:bottom-12 lg:bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
            {bannerSlides.map((_, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Buka slide banner ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-7 sm:w-8 bg-white shadow-md shadow-black/40'
                      : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Signature Floating "I WANT" Bar (z-20 with Soft Blue Luxury Shadow) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 lg:-mt-12 z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] border border-white/80 p-3 sm:p-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            {/* "I WANT" Brand Label */}
            <div className="flex items-center gap-2 pl-3 sm:pl-4 flex-shrink-0">
              <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight whitespace-nowrap">
                I WANT
              </span>
              <span className="text-slate-400 text-xs font-semibold hidden lg:inline">
                | SAYA INGIN
              </span>
            </div>

            {/* Dropdown Selector (Pill Shape) */}
            <div className="flex-1 relative">
              <select
                value={selectedWant}
                onChange={(e) => setSelectedWant(e.target.value)}
                className="w-full appearance-none bg-slate-100/90 hover:bg-slate-200/70 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl md:rounded-full pl-5 pr-10 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#00529C] focus:border-[#00529C] transition-all cursor-pointer"
              >
                {wantOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* "LET US HELP YOU" Action Button (Official BRI Blue Pill Shape) */}
            <div className="flex-shrink-0">
              <button
                onClick={handleHelpAction}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl md:rounded-full bg-[#00529C] hover:bg-[#003d75] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-900/20 transition-all hover:gap-3 active:scale-95 cursor-pointer"
              >
                <span>LET US HELP YOU</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
