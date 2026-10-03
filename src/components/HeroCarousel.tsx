import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface BannerSlide {
  id: number | string;
  altText: string;
  imageSrc: string;
  targetLink: string;
  active?: boolean;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    altText: 'Kemitraan Resmi BRI & FC Barcelona',
    imageSrc: '/banners/banner1.png',
    targetLink: '#tim-bisnis',
    active: true,
  },
  {
    id: 2,
    altText: 'Sewa Lapangan Olahraga via Lifestyle BRImo',
    imageSrc: '/banners/banner2.png',
    targetLink: '#layanan',
    active: true,
  },
  {
    id: 3,
    altText: 'Dirgahayu Republik Indonesia ke-81 Bersama Bank BRI',
    imageSrc: '/banners/banner3.png',
    targetLink: '#tim-bisnis',
    active: true,
  },
  {
    id: 4,
    altText: 'Buka Tabungan & Registrasi BRImo Serba Cepat',
    imageSrc: '/banners/banner4.png',
    targetLink: '#tim-bisnis',
    active: true,
  },
];

import { getLocalBanners } from '../lib/dataSync';

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [slides, setSlides] = useState<BannerSlide[]>(() => {
    const initial = getLocalBanners().filter((b: any) => b.active !== false && b.imageSrc);
    return initial.length > 0 ? initial : bannerSlides;
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedWant, setSelectedWant] = useState('kur');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideCount = slides.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Keep index valid when slides change (e.g. Firestore update)
  useEffect(() => {
    if (currentSlide >= slideCount) setCurrentSlide(0);
  }, [slideCount, currentSlide]);


  // Firestore real-time listener for banners with local fallback and sync listener
  useEffect(() => {
    const loadBanners = () => {
      const local = getLocalBanners().filter((b: any) => b.active !== false && b.imageSrc);
      if (local.length > 0) setSlides(local);
      else setSlides(bannerSlides);
    };

    const handleSync = (e: any) => {
      if (!e.detail || e.detail.collection === 'banners') {
        loadBanners();
      }
    };
    window.addEventListener('kc_data_sync', handleSync);

    try {
      const q = query(collection(db, 'banners'));
      const unsub = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const fetched = snapshot.docs
              .map((d) => {
                const data: any = d.data();
                const hash = data.targetHash
                  ? String(data.targetHash).startsWith('#') ? data.targetHash : `#${data.targetHash}`
                  : undefined;
                return {
                  id: d.id,
                  altText: data.title ?? data.altText ?? 'Banner BRI',
                  imageSrc: data.imageUrl ?? data.imageSrc ?? '',
                  targetLink: hash ?? data.targetLink ?? '#',
                  active: (data.isActive ?? data.active) !== false,
                  order: typeof data.order === 'number' ? data.order : 9999,
                };
              })
              .filter((b) => b.active && b.imageSrc)
              .sort((a, b) => a.order - b.order)
              .map(({ order, ...rest }) => rest as BannerSlide);
            if (fetched.length > 0) {
              setSlides(fetched);
            } else {
              loadBanners();
            }
          } else {
            loadBanners();
          }
        },
        () => loadBanners()
      );
      return () => {
        unsub();
        window.removeEventListener('kc_data_sync', handleSync);
      };
    } catch {
      return () => window.removeEventListener('kc_data_sync', handleSync);
    }
  }, []);

  const wantOptions = useMemo(() => [
    {
      id: 'kur',
      label: t.hero.wantKur,
      target: '#tim-bisnis',
    },
    {
      id: 'kmk',
      label: t.hero.wantKmk,
      target: '#tim-bisnis',
    },
    {
      id: 'sme',
      label: t.hero.wantSme,
      target: '#tim-bisnis',
    },
    {
      id: 'ub',
      label: t.hero.wantUb,
      target: '#tim-bisnis',
    },
    {
      id: 'crr',
      label: t.hero.wantCrr,
      target: '#tim-bisnis',
    },
    {
      id: 'kpr',
      label: t.hero.wantKpr,
      target: '#simulasi',
    },
    {
      id: 'edc',
      label: t.hero.wantEdc,
      target: '#tim-bisnis',
    },
    {
      id: 'giro',
      label: t.hero.wantGiro,
      target: '#tim-bisnis',
    },
    {
      id: 'panduan',
      label: t.hero.wantFaq,
      target: '#panduan',
    },
    {
      id: 'unit',
      label: t.hero.wantUnits,
      target: '#unit-supervisi',
    },
  ], [t]);

  // Auto slide helper
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

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

  // Main auto-slide effect (Pure Autoplay 5 seconds + Pause on Hover)
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
      nextSlide();
      resetTimer();
    } else if (distance < -50) {
      prevSlide();
      resetTimer();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle "LET US HELP YOU" action
  const handleHelpAction = () => {
    const selectedItem = wantOptions.find((opt) => opt.id === selectedWant) || wantOptions[0];
    const targetElement = document.querySelector(selectedItem.target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden bg-transparent p-0 m-0 border-none shadow-none">
      {/* 1. Full-Bleed Pure Clean Hero Banner Carousel (Zero Manual Controls / Edge-to-Edge Visual) */}
      <div
        className="relative w-full overflow-hidden bg-transparent p-0 m-0 border-none shadow-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Hero Carousel Banner Resmi BRI"
      >
        {/* Top-to-Bottom Gradient Overlay (Guarantees Crisp Navbar Text Contrast over any banner) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 md:h-36 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none z-10" />

        {/* Aspect Ratio Container (Edge-to-Edge Pure Banner Display) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[24/9] lg:aspect-[28/10] min-h-[300px] xs:min-h-[340px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[600px] max-h-[700px] bg-slate-900 p-0 m-0 border-none shadow-none">
          {slides.map((slide, index) => {
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
                <img
                  src={slide.imageSrc}
                  alt={slide.altText}
                  className="w-full h-full object-cover object-center select-none"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </a>
            );
          })}

          {slideCount > 1 && (
            <>
              <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-20 flex justify-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    type="button"
                    key={slide.id}
                    onClick={() => { setCurrentSlide(index); resetTimer(); }}
                    aria-label={`Ke banner ${index + 1}`}
                    aria-current={index === currentSlide}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      index === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* 2. Signature Floating "I WANT" Bar (Modern Blue Shadow) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 lg:-mt-10 z-20 w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full shadow-[0_15px_40px_rgba(0,_82,_204,_0.12)] border border-white/90 p-2.5 sm:p-3.5 md:p-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-3 md:gap-4">
            {/* "I WANT" Brand Label */}
            <div className="flex items-center gap-2 pl-2 sm:pl-3 md:pl-4 flex-shrink-0">
              <span className="text-sm sm:text-base md:text-lg font-black text-[#0052CC] tracking-tight whitespace-nowrap">
                {t.hero.iWant}
              </span>
              <span className="text-slate-400 text-xs font-semibold hidden md:inline">
                {t.hero.iWantSub}
              </span>
            </div>

            {/* Dropdown Selector (Pill Shape) */}
            <div className="flex-1 relative min-w-0">
              <select
                value={selectedWant}
                onChange={(e) => setSelectedWant(e.target.value)}
                className="w-full appearance-none bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl md:rounded-full pl-4 sm:pl-5 pr-9 py-2.5 sm:py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] transition-all cursor-pointer truncate"
              >
                {wantOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* "LET US HELP YOU" Action Button (Modern BRI Blue) */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <button
                onClick={handleHelpAction}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-xl md:rounded-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-blue-600/25 transition-all hover:gap-3 active:scale-95 cursor-pointer text-center whitespace-nowrap"
              >
                <span>{t.hero.letUsHelp}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
