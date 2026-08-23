import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { supportedLanguages, Language } from '../data/translations';

interface LanguageSelectorProps {
  variant?: 'topbar' | 'navbar' | 'mobile';
}

export default function LanguageSelector({ variant = 'topbar' }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const activeLang = supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className="w-full pt-2 pb-1 border-t border-slate-200/20">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#0052CC]" />
          <span>{t.topbar.langTitle || 'Pilih Bahasa / Language'}</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {supportedLanguages.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0052CC] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // TopBar / Navbar Floating Dropdown
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Pilih Bahasa / Language Selector"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
          variant === 'topbar'
            ? 'bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-xs'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
        }`}
        title="Change Language (ID / EN / ZH)"
      >
        <Globe className={`w-3.5 h-3.5 ${variant === 'topbar' ? 'text-blue-200' : 'text-[#0052CC]'}`} />
        <span className="text-xs">{activeLang.flag}</span>
        <span className="tracking-wide uppercase font-extrabold">{activeLang.shortLabel}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 rounded-2xl bg-white shadow-xl border border-slate-200/90 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            {t.topbar.langTitle || 'Pilih Bahasa'}
          </div>
          {supportedLanguages.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 text-[#0052CC] font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#0052CC]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
