'use client';

import React from 'react';
import { Gavel, HandCoins, Landmark, Smartphone, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface QuickActionBarProps {
  onOpenDigitalModal: () => void;
  onNavigateOrg: () => void;
}

export default function QuickActionBar({ onOpenDigitalModal, onNavigateOrg }: QuickActionBarProps) {
  const { t } = useLanguage();

  const handleSmoothScroll = (targetSelector: string) => {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickActions = [
    {
      id: 'lelang',
      type: 'external',
      url: 'https://infolelang.bri.co.id/uker/Q/418',
      title: t.quickAction?.lelangTitle || 'INFO LELANG',
      icon: Gavel,
      alt: 'Info Lelang Agunan BRI KC Jelambar',
    },
    {
      id: 'pinjaman',
      type: 'scroll',
      target: '#tim-bisnis',
      title: t.quickAction?.pinjamanTitle || 'PENGAJUAN PINJAMAN',
      icon: HandCoins,
      alt: 'Pengajuan Fasilitas Kredit BRI',
    },
    {
      id: 'simpanan',
      type: 'scroll',
      target: '#layanan',
      title: t.quickAction?.simpananTitle || 'SIMPANAN & GIRO',
      icon: Landmark,
      alt: 'Layanan Simpanan, Giro & Deposito',
    },
    {
      id: 'digital',
      type: 'modal',
      action: onOpenDigitalModal,
      title: t.quickAction?.digitalTitle || 'PENDAFTARAN BRIMO & QITA',
      icon: Smartphone,
      alt: 'Aktivasi Digital Banking BRImo & Platform Baru Qita',
    },
    {
      id: 'struktur',
      type: 'navigate',
      action: onNavigateOrg,
      title: t.quickAction?.strukturTitle || 'STRUKTUR TIM & PIC',
      icon: Network,
      alt: 'Bagan Struktur Tim & PIC Kantor Cabang',
    },
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200/80 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        {/* Horizontal Action Row with Line Art Blue Iconography */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center md:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-14">
          {quickActions.map((item) => {
            const IconComponent = item.icon;

            const content = (
              <div className="flex flex-col items-center justify-start text-center cursor-pointer group p-2 w-full md:w-36 lg:w-44 select-none">
                {/* Transparent Line Art Icon Wrapper (No solid/heavy box background) */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-110">
                  <IconComponent
                    className="w-10 h-10 sm:w-11 sm:h-11 text-[#0052CC] stroke-[1.5] transition-colors duration-200 group-hover:text-[#1D4ED8]"
                    aria-hidden="true"
                  />
                </div>

                {/* Clean Uppercase Label */}
                <span className="text-xs md:text-sm font-bold tracking-tight text-slate-800 group-hover:text-[#0052CC] transition-colors duration-200 text-center mt-3 uppercase leading-snug">
                  {item.title}
                </span>
              </div>
            );

            if (item.type === 'external') {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center focus:outline-none focus:ring-2 focus:ring-[#0052CC]/20 rounded-xl"
                  title={item.alt}
                >
                  {content}
                </a>
              );
            }

            if (item.type === 'scroll') {
              return (
                <button
                  key={item.id}
                  onClick={() => handleSmoothScroll(item.target!)}
                  className="flex justify-center focus:outline-none focus:ring-2 focus:ring-[#0052CC]/20 rounded-xl bg-transparent border-none p-0 cursor-pointer text-left"
                  title={item.alt}
                >
                  {content}
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={item.action}
                className="flex justify-center focus:outline-none focus:ring-2 focus:ring-[#0052CC]/20 rounded-xl bg-transparent border-none p-0 cursor-pointer text-left"
                title={item.alt}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
