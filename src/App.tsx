import React, { useState, useEffect } from 'react';
import TopOperationalBar from './components/TopOperationalBar';
import HeroCarousel from './components/HeroCarousel';
import TeamDirectory from './components/TeamDirectory';
import LoanCalculator from './components/LoanCalculator';
import PanduanFAQSection from './components/PanduanFAQSection';
import PanduanFAQModal from './components/PanduanFAQModal';
import ScrollToTop from './components/ScrollToTop';
import { branchUnits } from './data/units';
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
  FileText
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [faqModalCategory, setFaqModalCategory] = useState('all');

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

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative p-0 m-0">
      {/* 1. Real-time Branch Operational Status Bar & 2. Navbar Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto border-none shadow-none m-0 p-0 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs'
            : 'bg-transparent border-transparent shadow-none'
        }`}
      >
        {/* Real-time Top Operational Bar (Border-none, Zero Gap) */}
        <TopOperationalBar />

        {/* Main Dynamic Navbar Container (Zero Margins, Border-none) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-none shadow-none m-0">
          <div className="flex items-center justify-between h-16 sm:h-20 border-none shadow-none m-0">
            {/* BRI KC Jelambar Logo & Identity */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
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
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span
                    className={`text-sm sm:text-base md:text-lg font-black tracking-tight leading-none transition-colors duration-300 truncate ${
                      isScrolled ? 'text-[#0052CC]' : 'text-white drop-shadow-md'
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
                    KANTOR CABANG
                  </span>
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-semibold mt-0.5 sm:mt-1 transition-colors duration-300 truncate ${
                    isScrolled ? 'text-slate-500' : 'text-slate-100/90 drop-shadow-xs'
                  }`}
                >
                  Regional Office Jakarta 3
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium whitespace-nowrap flex-shrink-0 border-none shadow-none m-0">
              <a
                href="#beranda"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Beranda
              </a>
              <a
                href="#layanan"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Layanan
              </a>
              <a
                href="#tim-bisnis"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Tim RM
              </a>
              <a
                href="#simulasi"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Simulasi
              </a>
              <a
                href="#unit-supervisi"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Unit Kerja
              </a>
              <a
                href="#panduan"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Panduan & FAQ
              </a>
              <a
                href="#lokasi"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#0052CC]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Kontak
              </a>
            </nav>

            {/* Header Right Action Button (Modern BRI Blue Pill Shape) */}
            <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
              <button
                onClick={() => openFAQModal('all')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  isScrolled
                    ? 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-[#0052CC] hover:text-[#0052CC]'
                    : 'border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-xs'
                }`}
                title="Buka Panduan Berkas & Syarat"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Panduan Berkas</span>
              </button>

              <a
                href="#tim-bisnis"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-extrabold shadow-md shadow-blue-600/20 transition-all active:scale-95 hover:scale-105 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi RM</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors duration-300 focus:outline-none ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/20 backdrop-blur-xs'
                }`}
                aria-label="Buka Navigasi Mobile"
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
              Beranda
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Layanan Bisnis & Pinjaman
            </a>
            <a
              href="#tim-bisnis"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Direktori Tim Relationship Manager ({teamMembers.length} RM)
            </a>
            <a
              href="#simulasi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Simulasi Angsuran Kredit (KPR, KKB, BRIguna)
            </a>
            <a
              href="#unit-supervisi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Jaringan 8 Kantor Unit Supervisi
            </a>
            <a
              href="#panduan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Panduan Dokumen & FAQ Layanan
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Lokasi Kantor & Kontak Resmi
            </a>

            <div className="pt-3 border-t border-slate-200/40 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openFAQModal('all');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-[#0052CC]/30 bg-blue-50 text-[#0052CC]"
              >
                <FileText className="w-4 h-4" />
                <span>Buka Modal Panduan Persyaratan Berkas</span>
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
                <span>Telepon Cabang: (021) 56981105</span>
              </a>

              <a
                href="#tim-bisnis"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi Relationship Manager</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section (Official BRI Full-Width Hero Carousel & Floating 'I WANT' Bar - Zero Gaps / Seamless) */}
      <section id="beranda" className="relative w-full max-w-full overflow-hidden p-0 m-0 border-none shadow-none">
        <HeroCarousel />
      </section>

      {/* 3.1 Welcome & Branch Profile Section (KC Jakarta Jelambar) */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-14 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Building2 className="w-4 h-4 text-[#0052CC]" />
              <span>Portal Profil Resmi Kantor Cabang</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Melayani Setulus Hati, Menggerakkan Ekonomi{' '}
              <span className="text-[#0052CC]">
                Jakarta Barat
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8">
              Selamat datang di portal informasi <strong>BRI Kantor Cabang Jakarta Jelambar</strong>. 
              Kami hadir memberikan solusi perbankan terintegrasi mulai dari Kredit Usaha (KUR & Komersial), 
              pengelolaan kas & giro korporasi, pemasangan mesin EDC/QRIS merchant, hingga pembiayaan mikro 
              yang siap melayani kebutuhan personal dan bisnis Anda.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 w-full sm:w-auto">
              <a
                href="#tim-bisnis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] text-center"
              >
                <Users className="w-4 h-4 text-white" />
                <span>Lihat Struktur Tim & Chat RM</span>
              </a>
              <a
                href="#simulasi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all text-center"
              >
                <Calculator className="w-4 h-4 text-[#0052CC]" />
                <span>Simulasi Angsuran Kredit</span>
              </a>
              <button
                onClick={() => openFAQModal('all')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0052CC] font-bold text-sm border border-blue-200 transition-all text-center cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Panduan Berkas & FAQ</span>
              </button>
            </div>

            {/* Statistics Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left w-full">
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#0052CC]">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Petugas Resmi Terverifikasi</div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">&lt; 15 Mnt</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Respon Cepat WhatsApp</div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#0052CC]">8 Unit</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Jaringan Supervisi KC Jelambar</div>
              </div>
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#0052CC]">4 Segmen</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Kredit, Dana, CRR & Mikro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Layanan Bisnis & Digital (Core Banking Services Highlights) */}
      <section id="layanan" className="py-14 sm:py-16 bg-white border-b border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0052CC] mb-2">
              PORTOFOLIO LAYANAN UNGGULAN
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Solusi Finansial Komprehensif untuk Semua Segmen
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {/* Service 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0052CC]/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0052CC] flex items-center justify-center mb-4">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Simpanan & Cash Management</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Giro Rupiah & Valas, Payroll BRI, Deposito Berjangka dengan bunga kompetitif, dan Cash Management System (CMS).
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-[#0052CC] hover:text-[#1D4ED8] flex items-center gap-1">
                  Konsultasi RM Dana <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('giro')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-[#0052CC] underline cursor-pointer"
                >
                  Syarat Giro
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0052CC]/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0052CC] flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Kredit Komersial & SME</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Kredit Modal Kerja (KMK), Kredit Investasi pengembangan pabrik/ruko, serta fasilitas Bank Garansi tender.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-[#0052CC] hover:text-[#1D4ED8] flex items-center gap-1">
                  Konsultasi RM Kredit <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('sme')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-[#0052CC] underline cursor-pointer"
                >
                  Syarat SME
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <Store className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Solusi Merchant & EDC</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Pengadaan mesin EDC Android modern, QRIS Statis/Dinamis kasir, BRI Soundbox, dan settlement dana cepat.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                  Konsultasi Merchant <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('merchant')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-emerald-700 underline cursor-pointer"
                >
                  Syarat EDC
                </button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Restrukturisasi & Recovery</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Penataan skema kewajiban kredit komersial, keringanan angsuran usaha, dan konsultasi recovery pembiayaan.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href="#tim-bisnis" className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1">
                  Konsultasi RM CRR <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => openFAQModal('crr')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-teal-800 underline cursor-pointer"
                >
                  Prosedur CRR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tim RM (Direktori Relationship Manager) */}
      <TeamDirectory />

      {/* 6. Kalkulator Simulasi Pinjaman (Loan Calculator) */}
      <LoanCalculator />

      {/* 7. Jaringan Supervisi 8 Kantor Unit */}
      <section id="unit-supervisi" className="py-14 sm:py-16 bg-white border-t border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
              <Building2 className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>Regional Office Jakarta 3 • Supervisi 8 Kantor Unit</span>
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0052CC] mb-2">
              JARINGAN KANTOR & SUPERVISI
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              8 Unit Kerja di Bawah Supervisi BRI KC Jakarta Jelambar
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Jangkauan pelayanan perbankan mikro, retail, simpanan, dan merchant yang tersebar strategis di seluruh wilayah Jelambar, Grogol, Angke, Pejagalan, Kapuk, dan sekitarnya.
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
                        <span className="truncate">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium truncate pr-2">{unit.areaTag}</span>
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0052CC] font-bold hover:underline flex items-center gap-1 flex-shrink-0"
                  >
                    <span>Buka Maps</span>
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
                <span>Alamat & Lokasi Kantor Cabang</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Kantor Cabang BRI Jakarta Jelambar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                <strong>Alamat Lengkap:</strong> Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, RT.2/RW.5, Grogol, Kec. Grogol Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <span>Senin - Jumat: 08.00 - 15.00 WIB</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <a href="tel:02156981105" className="text-[#0052CC] hover:underline font-semibold">(021) 56981105</a>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="text-[#0052CC] hover:underline font-semibold break-all">kcjelambarbri@gmail.com</a>
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
                <span>Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href="mailto:kcjelambarbri@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-slate-300 hover:border-[#0052CC] hover:bg-blue-50/50 text-slate-700 hover:text-[#0052CC] text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-[#0052CC]" />
                <span>Kirim Email Resmi</span>
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
                    Regional Office Jakarta 3
                  </div>
                </div>
              </div>

              <p className="text-blue-100 text-xs leading-relaxed break-words">
                Kantor Cabang pengelola supervisi 8 Kantor Unit di Jakarta Barat, menghadirkan layanan perbankan terpadu bagi nasabah personal, UMKM, dan korporasi.
              </p>

              <div className="space-y-2.5 text-xs text-blue-100 pt-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span className="break-words">Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, Grogol, Jakarta Barat 11450</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="tel:02156981105" className="text-blue-100 hover:text-white font-semibold transition-colors">
                    (021) 56981105
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="text-blue-100 hover:text-white font-semibold transition-colors break-all">
                    kcjelambarbri@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Pilar Layanan Bisnis & Panduan */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Pilar Layanan & Dokumen
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => openFAQModal('sme')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>Syarat Kredit Modal Kerja & SME</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('konsumer')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>Syarat Pengajuan KPR & BRIguna</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('giro')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>Dokumen Giro Badan Usaha (PT/CV)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('merchant')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>Syarat Mesin EDC & QRIS Merchant</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openFAQModal('crr')}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>Prosedur Restrukturisasi Kredit</span>
                  </button>
                </li>
                <li>
                  <a href="#simulasi" className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>Simulasi Angsuran Pinjaman</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Layanan Digital Terhubung */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Layanan Digital Terhubung
              </h5>
              <ul className="space-y-2.5 text-sm">
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
                Layanan Kontak 24 Jam
              </h5>
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 shadow-sm space-y-4 w-full">
                <div>
                  <div className="text-[11px] text-blue-200 font-bold uppercase tracking-wider mb-1">
                    Contact BRI Hotline 24 Jam
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
                    Sabrina WhatsApp Resmi
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
                  Respon cepat & informasi resmi nasabah Bank BRI.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar / Hak Cipta & Legalitas */}
          <div className="pt-6 sm:pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200 text-center md:text-left w-full">
            <p>
              © {new Date().getFullYear()} PT Bank Rakyat Indonesia (Persero) Tbk — Kantor Cabang Jakarta Jelambar. Seluruh hak cipta dilindungi undang-undang.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-[11px] shadow-xs flex-shrink-0 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span>Berizin & Diawasi OJK serta Peserta Penjaminan LPS</span>
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
