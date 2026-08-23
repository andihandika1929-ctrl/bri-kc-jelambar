'use client';

import React, { useState, useMemo } from 'react';
import {
  organizationData,
  OrgPerson,
  getPersonRole,
  getPersonDept,
  getPersonJobdesk,
  getPersonKPIs,
  getPersonSpecialBadge
} from '../data/organizationData';
import { useLanguage } from '../context/LanguageContext';
import TopOperationalBar from '../components/TopOperationalBar';
import LanguageSelector from '../components/LanguageSelector';
import ScrollToTop from '../components/ScrollToTop';
import {
  Network,
  Users,
  ShieldCheck,
  Building2,
  Briefcase,
  Layers,
  CheckCircle2,
  Search,
  ArrowLeft,
  MessageCircle,
  X,
  UserCheck,
  Laptop,
  Coins,
  ShieldAlert,
  FileSpreadsheet,
  Headphones,
  Menu,
  Phone,
  Mail,
  ChevronRight,
  Target,
  Store,
  Sparkles,
  Code
} from 'lucide-react';

interface OrganizationPageProps {
  onNavigateHome: () => void;
  onNavigateActivities: () => void;
}

export default function OrganizationPage({ onNavigateHome, onNavigateActivities }: OrganizationPageProps) {
  const { t, language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Filtered persons
  const filteredPersons = useMemo(() => {
    return organizationData.filter((person) => {
      const matchesLevel = selectedLevel === 'all' || person.level === selectedLevel;

      const query = searchQuery.toLowerCase().trim();
      const role = getPersonRole(person, language).toLowerCase();
      const deptName = getPersonDept(person, language).toLowerCase();
      const jobdesk = getPersonJobdesk(person, language).join(' ').toLowerCase();

      const matchesSearch =
        !query ||
        person.name.toLowerCase().includes(query) ||
        role.includes(query) ||
        deptName.includes(query) ||
        jobdesk.includes(query);

      return matchesLevel && matchesSearch;
    });
  }, [selectedLevel, searchQuery, language]);

  // Level 1: Pimpinan Kantor Cabang
  const level1Pincab = useMemo(() => filteredPersons.find((p) => p.id === 'l1-pincab'), [filteredPersons]);

  // Level 2: Manajer Operasional & Bisnis (4)
  const level2Managers = useMemo(() => filteredPersons.filter((p) => p.level === 2), [filteredPersons]);

  // Level 3: Supervisi Operasional & Administrasi Kredit (3)
  const level3Supervisors = useMemo(() => filteredPersons.filter((p) => p.level === 3), [filteredPersons]);

  // Level 4: Tim Relationship Manager (RM)
  const level4Sme = useMemo(() => filteredPersons.filter((p) => p.level === 4 && p.groupCategory === 'sme'), [filteredPersons]);
  const level4Funding = useMemo(() => filteredPersons.filter((p) => p.level === 4 && p.groupCategory === 'funding'), [filteredPersons]);
  const level4Mikro = useMemo(() => filteredPersons.filter((p) => p.level === 4 && p.groupCategory === 'mikro'), [filteredPersons]);
  const level4Crr = useMemo(() => filteredPersons.filter((p) => p.level === 4 && p.groupCategory === 'crr'), [filteredPersons]);

  // Level 5: Layanan Nasabah & Penunjang Operasional (4 Klaster)
  const level5BankingHall = useMemo(() => filteredPersons.filter((p) => p.level === 5 && p.groupCategory === 'banking_hall'), [filteredPersons]);
  const level5AdkMurni = useMemo(() => filteredPersons.filter((p) => p.level === 5 && p.groupCategory === 'adk_murni'), [filteredPersons]);
  const level5MikroAgen = useMemo(() => filteredPersons.filter((p) => p.level === 5 && p.groupCategory === 'admin_mikro_agen'), [filteredPersons]);
  const level5BackofficeIt = useMemo(() => filteredPersons.filter((p) => p.level === 5 && p.groupCategory === 'backoffice_it'), [filteredPersons]);

  // Render Person Card Helper (Equal Height, Clean UI, Permanently Open Jobdesk, No Email)
  const renderPersonCard = (person: OrgPerson) => {
    const roleDisplay = getPersonRole(person, language);
    const deptDisplay = getPersonDept(person, language);
    const jobdeskItems = getPersonJobdesk(person, language);
    const kpiItems = getPersonKPIs(person, language);
    const specialBadge = getPersonSpecialBadge(person, language);

    return (
      <div
        key={person.id}
        className={`h-full flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
          person.specialBadge
            ? 'border-[#0052CC]/70 shadow-md ring-2 ring-[#0052CC]/20 bg-gradient-to-b from-blue-50/30 to-white'
            : person.level === 1
            ? 'border-[#0052CC]/60 shadow-lg ring-1 ring-[#0052CC]/20'
            : person.level === 2
            ? 'border-blue-200/90 shadow-md hover:border-[#0052CC]/50 hover:shadow-lg'
            : person.level === 3
            ? 'border-indigo-100 shadow-sm hover:border-indigo-300 hover:shadow-md'
            : person.level === 4
            ? 'border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-sm'
            : 'border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm'
        }`}
      >
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          {/* Card Top: Avatar & Identity */}
          <div>
            <div className="flex items-start gap-3.5 mb-2.5">
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 shadow-xs ${
                  person.specialBadge
                    ? 'bg-gradient-to-tr from-[#0052CC] to-indigo-600 text-white ring-2 ring-blue-300'
                    : person.level === 1
                    ? 'bg-[#0052CC] text-white ring-2 ring-blue-200'
                    : person.level === 2
                    ? 'bg-blue-100 text-[#0052CC] border border-blue-200'
                    : person.level === 3
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                    : person.level === 4
                    ? 'bg-sky-100 text-sky-800 border border-sky-200'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {person.initials}
              </div>

              <div className="min-w-0 flex-1 min-h-[72px] flex flex-col justify-center">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base leading-snug break-words">
                    {person.name}
                  </h4>
                </div>

                {/* Special Developer / Specialist Badge */}
                {specialBadge && (
                  <div className="mt-1 mb-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0052CC] border border-blue-200 text-[10px] font-extrabold tracking-tight shadow-2xs">
                      <Sparkles className="w-2.5 h-2.5 text-[#0052CC]" />
                      <span>{specialBadge}</span>
                    </span>
                  </div>
                )}

                <p className="text-xs md:text-sm font-semibold text-[#0052CC] leading-tight mt-0.5 break-words">
                  {roleDisplay}
                </p>
                <div className="text-[11px] md:text-xs text-slate-500 leading-normal mt-0.5 break-words">
                  {deptDisplay}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Contact (if available) */}
            {person.phone && (
              <div className="pt-1 pb-2">
                <a
                  href={`https://wa.me/${person.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[11px] font-bold border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3 h-3 fill-emerald-600 text-emerald-50" />
                  <span>Konsultasi WhatsApp</span>
                </a>
              </div>
            )}

            {/* Permanently Open Jobdesk Points */}
            <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Tugas Pokok & Fungsi:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {jobdeskItems.map((desk, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-600">{desk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Optional KPIs / Core Competencies */}
          {kpiItems.length > 0 && (
            <div className="pt-2.5 border-t border-slate-100 mt-auto">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Indikator Kinerja Utama (KPI):
              </div>
              <div className="flex flex-wrap gap-1.5">
                {kpiItems.map((kpi, kIdx) => (
                  <span
                    key={kIdx}
                    className="px-2 py-0.5 rounded-md bg-blue-50 text-[#0052CC] border border-blue-200 text-[10px] font-semibold"
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative">
      {/* 1. Global Fixed Header (TopBar + Navbar) */}
      <header className="fixed top-0 left-0 right-0 w-full z-[999] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top Operational Bar */}
        <TopOperationalBar />

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo & Identity */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                title="Kembali ke Halaman Beranda"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{t.org.backToHome}</span>
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
              <button
                onClick={onNavigateActivities}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.activities}
              </button>
              <span className="px-3 py-2 rounded-xl bg-blue-50 text-[#0052CC] font-bold border border-blue-200/60">
                {t.nav.org}
              </span>
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateActivities();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {t.nav.activities}
            </button>
            <div className="px-3.5 py-2.5 rounded-xl text-sm font-bold bg-blue-50 text-[#0052CC]">
              {t.nav.org}
            </div>
            <div className="pt-2">
              <LanguageSelector variant="mobile" />
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Header Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 bg-gradient-to-b from-blue-50/70 via-white to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Network className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>{t.org.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.org.titleStart}{' '}
            <span className="text-[#0052CC]">
              {t.org.titleHighlight}
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Bagan tata kelola dan struktur kepemimpinan resmi PT Bank Rakyat Indonesia (Persero) Tbk Kantor Cabang Jakarta Jelambar terstruktur hierarkis dari Pimpinan Kantor Cabang, Manajer Operasional & Bisnis, Supervisi Operasional, Tim Relationship Manager (RM), hingga Layanan Nasabah & Penunjang Operasional.
          </p>

          {/* Search & Branch Nomenclature Filter Controls */}
          <div className="max-w-3xl mx-auto mt-8 sm:mt-10 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pejabat (Adi Sujarwanto, Jaka Farisa, Andi Handika, Fahmi Sidik, Sri Mulyani...) atau jabatan..."
                className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-2xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Nomenclature Quick Pills Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4 mt-6 mb-4">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === 'all'
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Semua Struktur Tim
              </button>
              <button
                onClick={() => setSelectedLevel(1)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === 1
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Pimpinan Cabang
              </button>
              <button
                onClick={() => setSelectedLevel(2)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === 2
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Manajer Bidang
              </button>
              <button
                onClick={() => setSelectedLevel(3)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === 3
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Supervisor
              </button>
              <button
                onClick={() => setSelectedLevel(4)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === 4
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Relationship Manager (RM)
              </button>
              <button
                onClick={() => setSelectedLevel(5)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === 5
                    ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Layanan & Penunjang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Hierarchy Content Section */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ========================================================================= */}
          {/* 1. PIMPINAN KANTOR CABANG (Solo Header Card) */}
          {/* ========================================================================= */}
          {(selectedLevel === 'all' || selectedLevel === 1) && level1Pincab && (
            <section className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0052CC] text-white text-[11px] font-extrabold uppercase tracking-wider mb-2 shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-blue-200" />
                  <span>PIMPINAN KANTOR CABANG</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Pemimpin Kantor Cabang
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Penanggung jawab operasional, pencapaian bisnis, dan kepatuhan tata kelola perbankan di BRI KC Jakarta Jelambar.
                </p>
              </div>

              {/* Hierarchy Tree Card Level 1 (Solo Card) */}
              <div className="max-w-3xl mx-auto">
                {renderPersonCard(level1Pincab)}
              </div>

              {/* Connector Line */}
              <div className="flex justify-center items-center">
                <div className="w-px h-8 bg-gradient-to-b from-[#0052CC] to-blue-300" />
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 2. MANAJER OPERASIONAL & BISNIS (4 Manajer) */}
          {/* ========================================================================= */}
          {(selectedLevel === 'all' || selectedLevel === 2) && level2Managers.length > 0 && (
            <section className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0052CC] text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-blue-200">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>MANAJER OPERASIONAL & BISNIS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Kepala Departemen & Manajer Bidang
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Empat pilar kepemimpinan manajerial operasional & layanan (MOL), bisnis komersial & SME (SBM), bisnis mikro supervisi unit (MBM), dan dana transaksi (RMFT).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
                {level2Managers.map((manager) => renderPersonCard(manager))}
              </div>

              {/* Connector Line */}
              <div className="flex justify-center items-center">
                <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-indigo-300" />
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 3. SUPERVISI OPERASIONAL & ADMINISTRASI KREDIT (3 Pejabat) */}
          {/* ========================================================================= */}
          {(selectedLevel === 'all' || selectedLevel === 3) && level3Supervisors.length > 0 && (
            <section className="space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-indigo-200">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SUPERVISI OPERASIONAL & ADMINISTRASI KREDIT</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Pengawas Operasional & Administrasi Kredit
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Pengawas langsung mutu layanan prima di Banking Hall, dual otorisasi transaksi kas, serta review legalitas notariil kredit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch">
                {level3Supervisors.map((spv) => renderPersonCard(spv))}
              </div>

              {/* Connector Line */}
              <div className="flex justify-center items-center">
                <div className="w-px h-8 bg-gradient-to-b from-indigo-300 to-sky-300" />
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 4. TIM RELATIONSHIP MANAGER (RM) */}
          {/* ========================================================================= */}
          {(selectedLevel === 'all' || selectedLevel === 4) && (level4Sme.length > 0 || level4Funding.length > 0 || level4Mikro.length > 0 || level4Crr.length > 0) && (
            <section className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-sky-200">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>TIM RELATIONSHIP MANAGER (RM)</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Tim Relationship Manager Profesional
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tenaga pemasar dan konsultan finansial terverifikasi untuk segmen SME & Commercial, Funding & Transaction, Mikro, dan CRR Collection Lelang.
                </p>
              </div>

              <div className="space-y-8">
                {/* 4.1 SME & Commercial */}
                {level4Sme.length > 0 && (
                  <div className="bg-slate-50/70 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#0052CC]" />
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        SME & Commercial (Komersial & Investasi)
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                      {level4Sme.map((rm) => renderPersonCard(rm))}
                    </div>
                  </div>
                )}

                {/* 4.2 Funding & Transaction */}
                {level4Funding.length > 0 && (
                  <div className="bg-slate-50/70 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-blue-700" />
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Funding & Transaction (RMFT Business & Individu)
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                      {level4Funding.map((rm) => renderPersonCard(rm))}
                    </div>
                  </div>
                )}

                {/* 4.3 Mikro */}
                {level4Mikro.length > 0 && (
                  <div className="bg-slate-50/70 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-emerald-700" />
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Mikro (Kredit Usaha Rakyat & Kupedes)
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                      {level4Mikro.map((rm) => renderPersonCard(rm))}
                    </div>
                  </div>
                )}

                {/* 4.4 CRR, Collection & Lelang */}
                {level4Crr.length > 0 && (
                  <div className="bg-slate-50/70 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-teal-700" />
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                          CRR, Collection & Lelang (Restrukturisasi, Collection & Eksekusi Jaminan)
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                        CRR, Collection & Lelang KPKNL
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                      {level4Crr.map((rm) => renderPersonCard(rm))}
                    </div>
                  </div>
                )}
              </div>

              {/* Connector Line */}
              <div className="flex justify-center items-center">
                <div className="w-px h-8 bg-gradient-to-b from-sky-300 to-slate-400" />
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 5. LAYANAN NASABAH & PENUNJANG OPERASIONAL (4 KLASTER) */}
          {/* ========================================================================= */}
          {(selectedLevel === 'all' || selectedLevel === 5) && (level5BankingHall.length > 0 || level5AdkMurni.length > 0 || level5MikroAgen.length > 0 || level5BackofficeIt.length > 0) && (
            <section className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-slate-300">
                  <Users className="w-3.5 h-3.5" />
                  <span>LAYANAN NASABAH & PENUNJANG OPERASIONAL</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frontliner, Administrasi Kredit, Keagenan & Backoffice
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Empat klaster operasional pendukung: Frontliner Banking Hall, Administrasi Kredit Murni, Penunjang Bisnis Mikro & Keagenan, serta Penunjang Operasional & IT.
                </p>
              </div>

              <div className="space-y-8">
                {/* 5.A Klaster Frontliner & Layanan Nasabah (Banking Hall) */}
                {level5BankingHall.length > 0 && (
                  <div className="bg-white p-5 sm:p-7 rounded-3xl border border-blue-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Headphones className="w-4 h-4 text-[#0052CC]" />
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          A. Klaster Frontliner & Layanan Nasabah (Banking Hall - 6 Staf)
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0052CC] border border-blue-200">
                        UB, CS, Teller & DJS
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                      {level5BankingHall.map((person) => renderPersonCard(person))}
                    </div>
                  </div>
                )}

                {/* 5.B Klaster Administrasi Kredit (ADK Murni - 3 Staf) */}
                {level5AdkMurni.length > 0 && (
                  <div className="bg-white p-5 sm:p-7 rounded-3xl border border-indigo-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-indigo-700" />
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          B. Klaster Administrasi Kredit (ADK Murni - 3 Staf)
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        Credit Administration (ADK)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                      {level5AdkMurni.map((person) => renderPersonCard(person))}
                    </div>
                  </div>
                )}

                {/* 5.C Klaster Penunjang Bisnis Mikro & Keagenan (2 Staf) */}
                {level5MikroAgen.length > 0 && (
                  <div className="bg-white p-5 sm:p-7 rounded-3xl border border-amber-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Store className="w-4 h-4 text-amber-600" />
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          C. Klaster Penunjang Bisnis Mikro & Keagenan (2 Staf)
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Admin Mikro & Admin Agen BRILink
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                      {level5MikroAgen.map((person) => renderPersonCard(person))}
                    </div>
                  </div>
                )}

                {/* 5.D Klaster Penunjang Operasional, IT & Backoffice (6 Staf) */}
                {level5BackofficeIt.length > 0 && (
                  <div className="bg-white p-5 sm:p-7 rounded-3xl border border-emerald-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-emerald-700" />
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          D. Klaster Penunjang Operasional, IT & Backoffice (6 Staf)
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Sekretariat/HR, IT, Pelaporan & Backoffice
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                      {level5BackofficeIt.map((person) => renderPersonCard(person))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Empty State */}
          {filteredPersons.length === 0 && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-md mx-auto shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                Pejabat Tidak Ditemukan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                Coba cari dengan kata kunci nama atau posisi lainnya.
              </p>
              <button
                onClick={() => {
                  setSelectedLevel('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 5. Modern Corporate Blue Footer (Official Bank BRI Guidelines: #003B99) */}
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
                  <button
                    onClick={onNavigateActivities}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.activities}</span>
                  </button>
                </li>
                <li>
                  <span className="text-white font-bold flex items-center gap-1.5 text-left">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span>{t.nav.org}</span>
                  </span>
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
