'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TopOperationalBar from '../components/TopOperationalBar';
import LanguageSelector from '../components/LanguageSelector';
import ScrollToTop from '../components/ScrollToTop';
import {
  Newspaper,
  ArrowLeft,
  Sparkles,
  Building2,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

interface ActivitiesPageProps {
  onNavigateHome: () => void;
  onNavigateOrg: () => void;
}

export default function ActivitiesPage({ onNavigateHome, onNavigateOrg }: ActivitiesPageProps) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative">
      {/* 1. Global Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full z-[999] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top Operational Bar */}
        <TopOperationalBar />

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo & Back to Home */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                title="Kembali ke Halaman Beranda"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{t.activities.backToHome}</span>
              </button>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2.5 flex-shrink-0">
                <img
                  src="/logo/bri.png"
                  alt="Logo Bank BRI"
                  className="h-8 w-auto object-contain flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-sm sm:text-base font-black text-[#0052CC] whitespace-nowrap">
                    KC Jakarta Jelambar
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold truncate hidden sm:block">
                    {t.nav.brandSub}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs xl:text-sm font-semibold">
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.home}
              </button>
              <span className="px-3 py-2 rounded-xl bg-blue-50 text-[#0052CC] font-bold border border-blue-200/60">
                {t.nav.activities}
              </span>
              <button
                onClick={onNavigateOrg}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.org}
              </button>
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.services}
              </button>
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.team}
              </button>
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.units}
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 space-y-2 bg-white border-b border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {t.nav.home}
            </button>
            <div className="px-3.5 py-2.5 rounded-xl text-sm font-bold bg-blue-50 text-[#0052CC]">
              {t.nav.activities}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateOrg();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {t.nav.org}
            </button>
            <div className="pt-2">
              <LanguageSelector variant="mobile" />
            </div>
          </div>
        )}
      </header>

      {/* 2. Main Centered Under Construction Card (Mobile-First UI) */}
      <main className="flex-1 flex items-center justify-center pt-32 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg md:max-w-xl mx-auto my-auto bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-10 text-center flex flex-col items-center">
          {/* Status Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-[#0052CC] flex items-center justify-center mb-5 border border-blue-200/60 shadow-2xs">
            <Newspaper className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          {/* Badge */}
          <span className="px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-blue-100/70 text-[#0052CC] border border-blue-200 mb-4 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>{t.activities.maintenanceBadge}</span>
          </span>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-3">
            {t.activities.maintenanceTitle}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
            {t.activities.maintenanceDesc}
          </p>

          {/* Action Button */}
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.activities.backToHome}</span>
          </button>
        </div>
      </main>

      {/* 3. Modern Corporate Blue Footer (#003B99) */}
      <footer className="bg-[#003B99] text-white text-xs pt-14 sm:pt-16 pb-12 border-none shadow-none w-full max-w-full m-0 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12 w-full">
            {/* Col 1: Logo & Branch Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo/bri.png"
                  alt="Logo Resmi Bank BRI"
                  className="h-9 w-auto object-contain brightness-0 invert flex-shrink-0"
                />
                <div className="h-6 w-px bg-white/30 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-white leading-tight truncate">
                    KC Jakarta Jelambar
                  </div>
                  <div className="text-[10px] text-blue-200 font-semibold truncate">
                    {t.nav.brandSub}
                  </div>
                </div>
              </div>

              <p className="text-blue-100 text-xs leading-relaxed break-words">
                {t.footer.desc}
              </p>

              <div className="space-y-2.5 text-xs text-blue-100 pt-2">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span className="break-words">{t.location.addressFull}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="tel:02156981105" className="text-blue-100 hover:text-white font-semibold transition-colors">
                    {t.location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="text-blue-100 hover:text-white font-semibold transition-colors break-all">
                    {t.location.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Pilar Layanan Bisnis & Panduan */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {t.footer.col1Title}
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={onNavigateHome}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.home}</span>
                  </button>
                </li>
                <li>
                  <span className="text-white font-bold flex items-center gap-1.5 text-left">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.activities}</span>
                  </span>
                </li>
                <li>
                  <button
                    onClick={onNavigateOrg}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.org}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateHome}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.services.card2Title}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateHome}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.calc.tabKpr}</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Layanan Digital Terhubung */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {t.footer.col2Title}
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span className="font-semibold text-white">Platform Generasi Baru Qita</span>
                </li>
                <li className="flex items-center gap-2 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span>BRImo Super App Bisnis</span>
                </li>
                <li className="flex items-center gap-2 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span>Aplikasi BRI Merchant</span>
                </li>
                <li className="flex items-center gap-2 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span>Cash Management System (CMS)</span>
                </li>
                <li className="flex items-center gap-2 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span>Jaringan Kemitraan AgenBRILink</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Card Kontak Hotline 24 Jam */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {t.footer.col3Title}
              </h5>
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 shadow-sm space-y-4 w-full">
                <div>
                  <div className="text-[11px] text-blue-200 font-bold uppercase tracking-wider mb-1">
                    {t.footer.hotline24}
                  </div>
                  <a
                    href="tel:1500017"
                    className="text-xl sm:text-2xl font-black text-white hover:text-blue-200 transition-colors flex items-center gap-2 tracking-tight"
                  >
                    <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span>1500017</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/15">
                  <div className="text-[11px] text-blue-200 font-bold uppercase tracking-wider mb-1">
                    {t.footer.sabrinaWA}
                  </div>
                  <a
                    href="https://wa.me/628121214017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-300 text-[#003B99] flex-shrink-0" />
                    <span>0812-12-14017</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-blue-200/80">
                  {t.footer.hotlineDesc}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar / Hak Cipta, Developer Signature & Legalitas */}
          <div className="pt-6 sm:pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200 text-center md:text-left w-full">
            <p className="leading-relaxed">
              {t.footer.copyright}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-[11px] shadow-xs flex-shrink-0 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span>{t.footer.legal}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
