import React, { useState, useEffect } from 'react';
import TeamDirectory from './components/TeamDirectory';
import HeroCarousel from './components/HeroCarousel';
import { branchUnits } from './data/units';
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
  Mail
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1 & 2. Dynamic Sticky Navbar on Scroll (Official bri.co.id Style) */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
            : 'bg-transparent border-transparent shadow-none'
        }`}
      >
        {/* Main Dynamic Navbar Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* BRI KC Jelambar Logo & Identity */}
            <div className="flex items-center gap-3">
              <img
                src="/logo/bri.png"
                alt="Logo Resmi Bank BRI"
                className={`h-9 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0 invert drop-shadow-sm'
                }`}
              />
              <div
                className={`h-7 w-px hidden sm:block transition-colors duration-300 ${
                  isScrolled ? 'bg-slate-200' : 'bg-white/30'
                }`}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-base sm:text-lg font-black tracking-tight leading-none transition-colors duration-300 whitespace-nowrap ${
                      isScrolled ? 'text-[#00529C]' : 'text-white drop-shadow-md'
                    }`}
                  >
                    KC Jakarta Jelambar
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all duration-300 whitespace-nowrap ${
                      isScrolled
                        ? 'bg-blue-50 text-[#00529C] border border-blue-200'
                        : 'bg-white/20 text-white border border-white/30 backdrop-blur-xs'
                    }`}
                  >
                    KANTOR CABANG
                  </span>
                </div>
                <span
                  className={`text-[11px] font-semibold mt-1 transition-colors duration-300 whitespace-nowrap ${
                    isScrolled ? 'text-slate-500' : 'text-slate-100/90 drop-shadow-xs'
                  }`}
                >
                  Regional Office Jakarta 3
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium whitespace-nowrap flex-shrink-0">
              <a
                href="#beranda"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#00529C]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Beranda
              </a>
              <a
                href="#layanan"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#00529C]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Layanan
              </a>
              <a
                href="#tim-bisnis"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#00529C]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Tim RM
              </a>
              <a
                href="#unit-supervisi"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#00529C]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Unit Kerja
              </a>
              <a
                href="#lokasi"
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'text-slate-700 hover:text-[#00529C]'
                    : 'text-white hover:text-blue-200 drop-shadow-md'
                }`}
              >
                Kontak
              </a>
            </nav>

            {/* Header Right Action Button (Official BRI Blue Pill Shape) */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <a
                href="#tim-bisnis"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00529C] hover:bg-[#003d75] text-white text-sm font-extrabold shadow-md shadow-blue-900/20 transition-all active:scale-95 hover:scale-105 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi RM</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors duration-300 ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/20 backdrop-blur-xs'
                }`}
                aria-label="Buka Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden px-4 pt-3 pb-6 space-y-2 transition-all duration-300 shadow-2xl ${
              isScrolled
                ? 'bg-white/98 text-slate-800 border-b border-slate-200'
                : 'bg-slate-950/95 backdrop-blur-xl border-b border-white/15 text-white'
            }`}
          >
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Beranda
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Layanan
            </a>
            <a
              href="#tim-bisnis"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Tim RM
            </a>
            <a
              href="#unit-supervisi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Unit Kerja
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                isScrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-slate-100'
              }`}
            >
              Kontak
            </a>
            <div className="pt-2">
              <a
                href="#tim-bisnis"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#00529C] hover:bg-[#003d75] text-white text-sm font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Hubungi Relationship Manager</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Official BRI Style Full-Width Hero Carousel & Floating 'I WANT' Bar */}
      <section id="beranda" className="relative w-full">
        <HeroCarousel />
      </section>

      {/* 3.1 Welcome & Branch Profile Section (KC Jakarta Jelambar) */}
      <section className="pt-12 sm:pt-16 pb-14 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00529C] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Building2 className="w-4 h-4 text-[#00529C]" />
              <span>Portal Profil Resmi Kantor Cabang</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Melayani Setulus Hati, Menggerakkan Ekonomi{' '}
              <span className="text-[#00529C]">
                Jakarta Barat
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Selamat datang di portal informasi <strong>BRI Kantor Cabang Jakarta Jelambar</strong>. 
              Kami hadir memberikan solusi perbankan terintegrasi mulai dari Kredit Usaha (KUR & Komersial), 
              pengelolaan kas & giro korporasi, pemasangan mesin EDC/QRIS merchant, hingga pembiayaan mikro 
              yang siap melayani kebutuhan personal dan bisnis Anda.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <a
                href="#tim-bisnis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00529C] hover:bg-[#003d75] text-white font-bold text-sm shadow-md shadow-blue-900/20 transition-all hover:scale-[1.02]"
              >
                <Users className="w-4 h-4 text-white" />
                <span>Lihat Struktur Tim & Chat RM</span>
              </a>
              <a
                href="#unit-supervisi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
              >
                <Building2 className="w-4 h-4 text-[#00529C]" />
                <span>Jaringan 8 Unit Kerja Supervisi</span>
              </a>
            </div>

            {/* Statistics Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-2xl font-extrabold text-[#00529C]">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Petugas Resmi Terverifikasi</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-2xl font-extrabold text-emerald-600">&lt; 15 Mnt</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Respon Cepat WhatsApp</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-2xl font-extrabold text-[#00529C]">8 Unit</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Jaringan Supervisi KC Jelambar</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="text-2xl font-extrabold text-[#00529C]">3 Segmen</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Kredit, Simpanan & Mikro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Banking Services Highlights */}
      <section id="layanan" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#00529C] mb-2">
              PORTOFOLIO LAYANAN UNGGULAN
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Solusi Finansial Komprehensif untuk Semua Segmen
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00529C]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#00529C] flex items-center justify-center mb-4">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Simpanan & Cash Management</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Giro Rupiah & Valas, Payroll BRI, Deposito Berjangka dengan bunga kompetitif, dan Cash Management System (CMS).
              </p>
              <a href="#tim-bisnis" className="text-xs font-bold text-[#00529C] hover:text-[#003d75] flex items-center gap-1">
                Konsultasi RM Dana <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00529C]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#00529C] flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Kredit Komersial & SME</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Kredit Modal Kerja (KMK), Kredit Investasi pengembangan pabrik/ruko, serta fasilitas Bank Garansi tender.
              </p>
              <a href="#tim-bisnis" className="text-xs font-bold text-[#00529C] hover:text-[#003d75] flex items-center gap-1">
                Konsultasi RM Kredit <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Store className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Solusi Merchant & EDC</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Pengadaan mesin EDC Android modern, QRIS Statis/Dinamis kasir, BRI Soundbox, dan settlement dana cepat.
              </p>
              <a href="#tim-bisnis" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                Konsultasi Merchant Specialist <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Digital Banking & Kanal Transaksi</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Kemudahan transaksi perbankan super app BRImo, portal internet banking bisnis, dan jaringan AgenBRILink.
              </p>
              <a href="#tim-bisnis" className="text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1">
                Jelajahi Solusi Digital <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Directory Component */}
      <TeamDirectory />

      {/* 6. Branch Network & Supervising Units (8 Official Units) */}
      <section id="unit-supervisi" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00529C] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
              <Building2 className="w-3.5 h-3.5 text-[#00529C]" />
              <span>Regional Office Jakarta 3 • Supervisi 8 Kantor Unit</span>
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#00529C] mb-2">
              JARINGAN KANTOR & SUPERVISI
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              8 Unit Kerja di Bawah Supervisi BRI KC Jakarta Jelambar
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Jangkauan pelayanan perbankan mikro, retail, simpanan, dan merchant yang tersebar strategis di seluruh wilayah Jelambar, Grogol, Angke, Pejagalan, Kapuk, dan sekitarnya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {branchUnits.map((unit) => (
              <div
                key={unit.id}
                className="group bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#00529C]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#00529C] flex items-center justify-center font-bold text-xs group-hover:bg-[#00529C] group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
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
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 group-hover/link:text-[#00529C] transition-colors flex items-center gap-1">
                      <span>{unit.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 text-[#00529C]" />
                    </h4>
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-500 mb-3 group-hover/link:text-[#00529C] transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#00529C] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed group-hover/link:underline">{unit.address}</span>
                    </div>
                  </a>

                  <div className="text-[11px] text-slate-600 space-y-1 pt-2 border-t border-slate-200/70">
                    {unit.specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${spec.dotColor || 'bg-[#00529C]'}`} />
                        <span>{spec.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">{unit.areaTag}</span>
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00529C] font-bold hover:underline flex items-center gap-1"
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

      {/* 6.1 Interactive Location & Google Maps Card */}
      <section id="lokasi" className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#00529C] text-xs font-bold uppercase tracking-wider border border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>Alamat & Lokasi Kantor Cabang</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Kantor Cabang BRI Jakarta Jelambar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Alamat Lengkap:</strong> Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, RT.2/RW.5, Grogol, Kec. Grogol Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#00529C]" />
                  <span>Senin - Jumat: 08.00 - 15.00 WIB</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-4 h-4 text-[#00529C]" />
                  <a href="tel:02156981105" className="text-[#00529C] hover:underline font-semibold">(021) 56981105</a>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-4 h-4 text-[#00529C]" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="text-[#00529C] hover:underline font-semibold">kcjelambarbri@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalan+Makaliwe+Raya+No+35C+Wijaya+Kusuma+Grogol+Jakarta+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00529C] hover:bg-[#003d75] text-white text-sm font-extrabold shadow-lg shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href="mailto:kcjelambarbri@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 hover:border-[#00529C] hover:bg-blue-50/50 text-slate-700 hover:text-[#00529C] text-sm font-bold transition-all text-center"
              >
                <Mail className="w-4 h-4 text-[#00529C]" />
                <span>Kirim Email Resmi</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Modern Corporate Light Footer (Official Bank BRI Style) */}
      <footer className="bg-slate-50 text-slate-600 text-xs pt-16 pb-12 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Logo & Branch Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo/bri.png"
                  alt="Logo Resmi Bank BRI"
                  className="h-9 w-auto object-contain"
                />
                <div className="h-6 w-px bg-slate-300" />
                <div>
                  <div className="text-sm font-extrabold text-[#00529C] leading-tight">
                    KC Jakarta Jelambar
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    Regional Office Jakarta 3
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                Kantor Cabang pengelola supervisi 8 Kantor Unit di Jakarta Barat, menghadirkan layanan perbankan terpadu bagi nasabah personal, UMKM, dan korporasi.
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 pt-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00529C] flex-shrink-0 mt-0.5" />
                  <span>Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, Grogol, Jakarta Barat 11450</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00529C] flex-shrink-0" />
                  <a href="tel:02156981105" className="text-slate-600 hover:text-[#00529C] font-semibold transition-colors">
                    (021) 56981105
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00529C] flex-shrink-0" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="text-slate-600 hover:text-[#00529C] font-semibold transition-colors">
                    kcjelambarbri@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Pilar Layanan Bisnis */}
            <div>
              <h5 className="text-[#00529C] font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00529C]" />
                Pilar Layanan Bisnis
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#tim-bisnis" className="text-slate-600 hover:text-[#00529C] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    Kredit Modal Kerja & Investasi
                  </a>
                </li>
                <li>
                  <a href="#tim-bisnis" className="text-slate-600 hover:text-[#00529C] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    Kredit Usaha Rakyat (KUR) Mikro
                  </a>
                </li>
                <li>
                  <a href="#tim-bisnis" className="text-slate-600 hover:text-[#00529C] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    KPR BRI & Pinjaman Konsumer
                  </a>
                </li>
                <li>
                  <a href="#tim-bisnis" className="text-slate-600 hover:text-[#00529C] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    Giro Valas/Rupiah & Payroll
                  </a>
                </li>
                <li>
                  <a href="#tim-bisnis" className="text-slate-600 hover:text-[#00529C] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    Mesin EDC Android & QRIS Merchant
                  </a>
                </li>
                <li>
                  <a href="#tim-bisnis" className="text-slate-600 hover:text-[#00529C] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    Digital Banking & Super App BRImo
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Layanan Digital Terhubung */}
            <div>
              <h5 className="text-[#00529C] font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00529C]" />
                Layanan Digital Terhubung
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00529C]" />
                  <span>BRImo Super App Bisnis</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00529C]" />
                  <span>Aplikasi BRI Merchant</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00529C]" />
                  <span>Cash Management System (CMS)</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00529C]" />
                  <span>Jaringan Kemitraan AgenBRILink</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00529C]" />
                  <span>Sabrina Chatbot Resmi BRI</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Card Kontak Hotline 24 Jam */}
            <div>
              <h5 className="text-[#00529C] font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00529C]" />
                Layanan Kontak 24 Jam
              </h5>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div>
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                    Contact BRI Hotline 24 Jam
                  </div>
                  <a
                    href="tel:1500017"
                    className="text-2xl font-black text-[#00529C] hover:text-[#003d75] transition-colors flex items-center gap-2 tracking-tight"
                  >
                    <Phone className="w-5 h-5 text-[#00529C]" />
                    <span>1500017</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                    Sabrina WhatsApp Resmi
                  </div>
                  <a
                    href="https://wa.me/628121214017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                    <span>0812-12-14017</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-slate-400">
                  Respon cepat & informasi resmi nasabah Bank BRI.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar / Hak Cipta & Legalitas */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} PT Bank Rakyat Indonesia (Persero) Tbk — Kantor Cabang Jakarta Jelambar. Seluruh hak cipta dilindungi undang-undang.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-[11px] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#00529C]" />
              <span>Berizin & Diawasi OJK serta Peserta Penjaminan LPS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
