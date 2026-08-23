import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import TopOperationalBar from './components/TopOperationalBar';
import HeroCarousel from './components/HeroCarousel';
import QuickActionBar from './components/QuickActionBar';
import TeamDirectory from './components/TeamDirectory';
import LoanCalculator from './components/LoanCalculator';
import PanduanFAQSection from './components/PanduanFAQSection';
import PanduanFAQModal from './components/PanduanFAQModal';
import LanguageSelector from './components/LanguageSelector';
import ScrollToTop from './components/ScrollToTop';
import ActivitiesPage from './pages/ActivitiesPage';
import OrganizationPage from './pages/OrganizationPage';
import { branchUnits, getUnitAreaTag, getUnitSpecializationLabel } from './data/units';
import { teamMembers } from './data/team';
import {
  Building2,
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  CreditCard,
  PiggyBank,
  Store,
  Crown,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  MessageCircle,
  Sparkles,
  Award,
  Users,
  CheckCircle2,
  Mail,
  RotateCcw,
  Calculator,
  FileText,
  Smartphone,
  Zap,
  ArrowRight,
  Globe,
  Newspaper,
  Network
} from 'lucide-react';

export type PageRoute = 'home' | 'activities' | 'org';

function MainApp() {
  const { t, language } = useLanguage();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [faqModalCategory, setFaqModalCategory] = useState('all');

  // URL / Hash routing sync
  useEffect(() => {
    const parseRouteFromLocation = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash.includes('aktivitas') || hash.includes('berita') || path.includes('aktivitas') || path.includes('berita')) {
        setCurrentRoute('activities');
      } else if (hash.includes('struktur') || path.includes('struktur')) {
        setCurrentRoute('org');
      } else {
        setCurrentRoute('home');
      }
    };

    parseRouteFromLocation();
    window.addEventListener('hashchange', parseRouteFromLocation);
    window.addEventListener('popstate', parseRouteFromLocation);

    return () => {
      window.removeEventListener('hashchange', parseRouteFromLocation);
      window.removeEventListener('popstate', parseRouteFromLocation);
    };
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === 'activities') {
      window.history.pushState(null, '', '#aktivitas');
    } else if (route === 'org') {
      window.history.pushState(null, '', '#struktur');
    } else {
      window.history.pushState(null, '', '#beranda');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openFAQModal = (category: string = 'all') => {
    setFaqModalCategory(category);
    setFaqModalOpen(true);
  };

  // If in Activities page route
  if (currentRoute === 'activities') {
    return (
      <ActivitiesPage
        onNavigateHome={() => navigateTo('home')}
        onNavigateOrg={() => navigateTo('org')}
      />
    );
  }

  // If in Organization page route
  if (currentRoute === 'org') {
    return (
      <OrganizationPage
        onNavigateHome={() => navigateTo('home')}
        onNavigateActivities={() => navigateTo('activities')}
      />
    );
  }

  // Main Home Page
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative p-0 m-0">
      {/* 1. Real-time Branch Operational Status Bar & 2. Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300 pointer-events-auto border-none m-0 p-0 ${
          isScrolled
            ? 'bg-white text-slate-800 shadow-md border-b border-slate-200'
            : 'bg-transparent border-transparent shadow-none'
        }`}
      >
        {/* Real-time Top Operational Bar (Border-none, Zero Gap, with Language Selector) */}
        <TopOperationalBar />

        {/* Main Dynamic Navbar Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-none shadow-none m-0">
          <div className="flex items-center justify-between h-16 sm:h-20 border-none shadow-none m-0 gap-4">
            {/* BRI KC Jelambar Logo & Identity */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 min-w-0">
              <img
                src="/logo/bri.png"
                alt="Logo Resmi Bank BRI"
                className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 flex-shrink-0 ${
                  isScrolled ? '' : 'brightness-0 invert drop-shadow-sm'
                }`}
              />
              <div
                className={`h-6 sm:h-7 w-px hidden sm:block transition-colors duration-300 flex-shrink-0 ${
                  isScrolled ? 'bg-slate-200' : 'bg-white/30'
                }`}
              />
              <div className="flex flex-col flex-shrink-0 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span
                    className={`text-sm sm:text-base md:text-lg font-black tracking-tight leading-none transition-colors duration-300 whitespace-nowrap ${
                      isScrolled ? 'text-[#0052CC]' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
                    }`}
                  >
                    KC Jakarta Jelambar
                  </span>
                  <span
                    className={`hidden xs:inline-flex px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      isScrolled
                        ? 'bg-blue-50 text-[#0052CC] border border-blue-200'
                        : 'bg-white/20 text-white border border-white/30 backdrop-blur-xs'
                    }`}
                  >
                    {t.nav.branchBadge}
                  </span>
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-semibold mt-0.5 sm:mt-1 transition-colors duration-300 whitespace-nowrap ${
                    isScrolled ? 'text-slate-500' : 'text-slate-100/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
                  }`}
                >
                  {t.nav.brandSub}
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links & Action Buttons Group */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              {/* Desktop Navigation Links */}
              <nav className="flex items-center gap-3 xl:gap-4 text-xs xl:text-sm font-semibold whitespace-nowrap flex-shrink-0 border-none shadow-none m-0">
                <a
                  href="#beranda"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.home}
                </a>

                {/* Direct Link to Activities Page */}
                <button
                  onClick={() => navigateTo('activities')}
                  className={`transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.activities}
                </button>

                {/* Direct Link to Organization Structure Page */}
                <button
                  onClick={() => navigateTo('org')}
                  className={`transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.org}
                </button>

                <a
                  href="#layanan"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.services}
                </a>
                <a
                  href="#tim-bisnis"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.team}
                </a>
                <a
                  href="#simulasi"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.calculator}
                </a>
                <a
                  href="#unit-supervisi"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.units}
                </a>
                <a
                  href="#panduan"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.faq}
                </a>
                <a
                  href="#lokasi"
                  className={`transition-colors duration-300 whitespace-nowrap ${
                    isScrolled
                      ? 'text-slate-800 hover:text-[#0052CC]'
                      : 'text-white hover:text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-medium'
                  }`}
                >
                  {t.nav.contact}
                </a>
              </nav>

              {/* Distinct Spacer & Header CTA Buttons */}
              <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200/50 flex-shrink-0">
                <button
                  onClick={() => openFAQModal('digital')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                    isScrolled
                      ? 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-[#0052CC] hover:text-[#0052CC]'
                      : 'border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-xs'
                  }`}
                  title="Panduan Aktivasi BRImo & Platform Baru Qita"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>{t.nav.qitaBtn}</span>
                </button>

                <a
                  href="#tim-bisnis"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-xs font-extrabold shadow-md shadow-blue-600/20 transition-all active:scale-95 hover:scale-105 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.nav.consultBtn}</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors duration-300 focus:outline-none ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/20 backdrop-blur-xs'
                }`}
                aria-label={t.nav.menuAria}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden px-4 pt-3 pb-6 space-y-2 transition-all duration-300 shadow-2xl border-b max-h-[80vh] overflow-y-auto ${
              isScrolled
                ? 'bg-white/98 text-slate-800 border-slate-200'
                : 'bg-slate-950/95 backdrop-blur-xl border-white/15 text-white'
            }`}
          >
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.home}
            </a>

            {/* Mobile Link to Activities */}
            <button
              onClick={() => navigateTo('activities')}
              className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                isScrolled ? 'hover:bg-blue-50 text-[#0052CC]' : 'hover:bg-white/10 text-blue-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-[#0052CC]" />
                <span>{t.nav.activities}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            {/* Mobile Link to Organization */}
            <button
              onClick={() => navigateTo('org')}
              className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                isScrolled ? 'hover:bg-blue-50 text-[#0052CC]' : 'hover:bg-white/10 text-blue-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#0052CC]" />
                <span>{t.nav.org}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.services}
            </a>
            <a
              href="#tim-bisnis"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.team} ({teamMembers.length} {t.team.officersText})
            </a>
            <a
              href="#simulasi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.calculator}
            </a>
            <a
              href="#unit-supervisi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.units} (8 Unit)
            </a>
            <a
              href="#panduan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.faq}
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              {t.nav.contact}
            </a>

            {/* Mobile Language Selector Integration */}
            <div className="pt-2">
              <LanguageSelector variant="mobile" />
            </div>

            <div className="pt-3 border-t border-slate-200/40 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openFAQModal('digital');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-[#0052CC]/30 bg-blue-50 text-[#0052CC]"
              >
                <Smartphone className="w-4 h-4" />
                <span>{t.welcome.btnFaq}</span>
              </button>

              <a
                href="tel:02156981105"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  isScrolled
                    ? 'border-slate-200 text-slate-700 bg-slate-50'
                    : 'border-white/20 text-white bg-white/5'
                }`}
              >
                <Phone className="w-4 h-4 text-[#0052CC]" />
                <span>{t.location.hours} • (021) 56981105</span>
              </a>

              <a
                href="#tim-bisnis"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.nav.consultBtn}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section (Official BRI Full-Width Hero Carousel & Floating 'I WANT' Bar - Zero Gaps / Seamless) */}
      <section id="beranda" className="relative w-full max-w-full overflow-hidden p-0 m-0 border-none shadow-none">
        <HeroCarousel />
      </section>

      {/* 3.05 Official BRI Quick Action Sub-Banner Bar (Line Art Blue Iconography) */}
      <QuickActionBar
        onOpenDigitalModal={() => openFAQModal('digital')}
        onNavigateOrg={() => navigateTo('org')}
      />

      {/* 3.1 Welcome & Branch Profile Section (KC Jakarta Jelambar) */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-14 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Building2 className="w-4 h-4 text-[#0052CC]" />
              <span>{t.welcome.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {t.welcome.headingStart}{' '}
              <span className="text-[#0052CC]">
                {t.welcome.headingHighlight}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8">
              {t.welcome.desc}
            </p>

            {/* Primary Action Buttons (Clean 2-Button Focus) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <a
                href="#tim-bisnis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#0052CC]" />
                <span>{t.welcome.btnTeam}</span>
              </a>
              <button
                onClick={() => openFAQModal('all')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#0052CC] hover:text-[#0052CC] text-slate-800 font-bold text-sm shadow-xs transition-all text-center cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0052CC]" />
                <span>{t.welcome.btnFaq}</span>
              </button>
            </div>

            {/* Statistics Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left w-full">
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#0052CC]">{teamMembers.length} {t.team.officersText}</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">{t.welcome.statStaffSub}</div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">{t.welcome.statSpeed}</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">{t.welcome.statSpeedSub}</div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#0052CC]">8 Unit</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">{t.welcome.statUnitsSub}</div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#0052CC]">{t.welcome.statSegments}</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">{t.welcome.statSegmentsSub}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Layanan Bisnis & Digital (Core Banking Services Highlights + Spotlight Qita) */}
      <section id="layanan" className="py-14 sm:py-16 bg-white border-b border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0052CC] mb-2">
              {t.services.tagline}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.services.title}
            </h3>
          </div>

          {/* Featured Spotlight Card: Edukasi Platform Digital Baru Qita & BRImo */}
          <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-white border border-blue-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0052CC]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0052CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
                  <Smartphone className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>{t.services.spotlightBadge}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {t.services.spotlightTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {t.services.spotlightDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
                <button
                  onClick={() => openFAQModal('digital')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer whitespace-nowrap"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.services.btnSpotlightGuide}</span>
                </button>
                <a
                  href="#tim-bisnis"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 text-[#0052CC] text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap"
                >
                  <Users className="w-4 h-4" />
                  <span>{t.services.btnSpotlightChat}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {/* Service 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0052CC]/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0052CC] flex items-center justify-center mb-4">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{t.services.card1Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t.services.card1Desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-[#0052CC] hover:text-[#1D4ED8] flex items-center gap-1">
                  {t.services.card1Cta} <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('giro')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-[#0052CC] underline cursor-pointer"
                >
                  {t.services.card1Req}
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0052CC]/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0052CC] flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{t.services.card2Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t.services.card2Desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-[#0052CC] hover:text-[#1D4ED8] flex items-center gap-1">
                  {t.services.card2Cta} <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('sme')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-[#0052CC] underline cursor-pointer"
                >
                  {t.services.card2Req}
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <Store className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{t.services.card3Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t.services.card3Desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                  {t.services.card3Cta} <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('merchant')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-emerald-700 underline cursor-pointer"
                >
                  {t.services.card3Req}
                </button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{t.services.card4Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t.services.card4Desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1">
                  {t.services.card4Cta} <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('crr')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-teal-800 underline cursor-pointer"
                >
                  {t.services.card4Req}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tim RM & Universal Banker (Direktori 13 Petugas Resmi) */}
      <TeamDirectory />

      {/* 6. Kalkulator Simulasi Pinjaman (Loan Calculator) */}
      <LoanCalculator />

      {/* 7. Jaringan Supervisi 8 Kantor Unit */}
      <section id="unit-supervisi" className="py-14 sm:py-16 bg-white border-t border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
              <Building2 className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>{t.units.badge}</span>
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0052CC] mb-2">
              {t.units.tagline}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.units.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              {t.units.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {branchUnits.map((unit) => (
              <div
                key={unit.id}
                className="group bg-slate-50 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-[#0052CC]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0052CC] flex items-center justify-center font-bold text-xs group-hover:bg-[#0052CC] group-hover:text-white transition-colors flex-shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0052CC] border border-blue-200 truncate">
                      {unit.shortName}
                    </span>
                  </div>

                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/link"
                    title={`Buka peta lokasi Google Maps ${unit.name}`}
                  >
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 group-hover/link:text-[#0052CC] transition-colors flex items-center gap-1">
                      <span className="break-words">{unit.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 text-[#0052CC] flex-shrink-0" />
                    </h4>
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-500 mb-3 group-hover/link:text-[#0052CC] transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed break-words group-hover/link:underline">{unit.address}</span>
                    </div>
                  </a>

                  <div className="text-[11px] text-slate-600 space-y-1 pt-2 border-t border-slate-200/70">
                    {unit.specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${spec.dotColor || 'bg-[#0052CC]'}`} />
                        <span className="truncate">{getUnitSpecializationLabel(spec, language)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium truncate pr-2">{getUnitAreaTag(unit, language)}</span>
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0052CC] font-bold hover:underline flex items-center gap-1 flex-shrink-0"
                  >
                    <span>{t.units.openMaps}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Panduan Dokumen & FAQ Layanan (Posisi Baru Tepat Sebelum Lokasi Utama) */}
      <PanduanFAQSection onOpenModal={openFAQModal} />

      {/* 9. Lokasi & Alamat Kantor Cabang Utama (dengan nomor (021) 56981105) */}
      <section id="lokasi" className="py-12 sm:py-14 bg-[#F8FAFC] border-t border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.location.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {t.location.branchName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                <strong>{t.location.addressLabel}</strong> {t.location.addressFull}
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <span>{t.location.hours}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <a href="tel:02156981105" className="text-[#0052CC] hover:underline font-semibold">{t.location.phone}</a>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="text-[#0052CC] hover:underline font-semibold break-all">{t.location.email}</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalan+Makaliwe+Raya+No+35C+Wijaya+Kusuma+Grogol+Jakarta+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-95 text-center whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>{t.location.btnMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href="mailto:kcjelambarbri@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-slate-300 hover:border-[#0052CC] hover:bg-blue-50/50 text-slate-700 hover:text-[#0052CC] text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-[#0052CC]" />
                <span>{t.location.btnEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Modern Corporate Blue Footer (Official Bank BRI Guidelines: #003B99) */}
      <footer className="bg-[#003B99] text-white text-xs pt-14 sm:pt-16 pb-12 border-none shadow-none w-full max-w-full m-0">
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
                  <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
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
                    onClick={() => navigateTo('activities')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.activities}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('org')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.org}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('digital')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.welcome.btnFaq}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('sme')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.services.card2Title}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('konsumer')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.calc.tabKpr} & {t.calc.tabBriguna}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('giro')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.services.card1Title}</span>
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
                <li className="flex items-center gap-2 text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span>Sabrina Chatbot Resmi BRI</span>
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

      {/* Panduan Persyaratan Berkas & FAQ Modal */}
      <PanduanFAQModal
        isOpen={faqModalOpen}
        onClose={() => setFaqModalOpen(false)}
        initialCategory={faqModalCategory}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
