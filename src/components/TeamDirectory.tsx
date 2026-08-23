'use client';

import React, { useState, useMemo } from 'react';
import {
  teamMembers,
  filterTabs,
  generateWhatsAppLink,
  quickConsultationTopics,
  getInitials,
  TeamMember,
  FilterCategory,
  TeamSegment
} from '../data/team';
import {
  Search,
  MessageCircle,
  Copy,
  Check,
  Phone,
  Mail,
  Building2,
  Briefcase,
  Layers,
  Award,
  Sparkles,
  ExternalLink,
  SlidersHorizontal,
  X,
  UserCheck,
  Clock,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  PiggyBank,
  BadgePercent,
  Store,
  RotateCcw,
  LayoutGrid
} from 'lucide-react';

export default function TeamDirectory() {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('Semua Topik');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedRMForModal, setSelectedRMForModal] = useState<TeamMember | null>(null);
  const [customInquiryService, setCustomInquiryService] = useState<string>('');

  // Icon mapping for filter tabs
  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'BadgePercent':
        return <BadgePercent className="w-4 h-4" />;
      case 'PiggyBank':
        return <PiggyBank className="w-4 h-4" />;
      case 'RotateCcw':
        return <RotateCcw className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  // Filter logic
  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      // 1. Tab filtering
      let matchesTab = true;
      if (activeTab === 'lending') {
        matchesTab = member.segment === 'Lending' || member.segment === 'Mikro';
      } else if (activeTab === 'funding') {
        matchesTab = member.segment === 'Funding';
      } else if (activeTab === 'restrukturisasi') {
        matchesTab = member.segment === 'Collection' || member.segment === 'CRR';
      }

      // 2. Search query filtering
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.unitOffice.toLowerCase().includes(query) ||
        member.specializations.some((spec) => spec.toLowerCase().includes(query));

      // 3. Topic filter
      let matchesTopic = true;
      if (selectedTopic !== 'Semua Topik') {
        const topicNorm = selectedTopic.toLowerCase();
        matchesTopic = member.specializations.some((spec) =>
          spec.toLowerCase().includes(topicNorm) ||
          (topicNorm.includes('kur') && spec.toLowerCase().includes('kur')) ||
          (topicNorm.includes('giro') && (spec.toLowerCase().includes('giro') || spec.toLowerCase().includes('payroll'))) ||
          (topicNorm.includes('kmk') && spec.toLowerCase().includes('kmk')) ||
          (topicNorm.includes('sme') && spec.toLowerCase().includes('sme')) ||
          (topicNorm.includes('kupedes') && spec.toLowerCase().includes('kupedes')) ||
          (topicNorm.includes('restrukturisasi') && (spec.toLowerCase().includes('restrukturisasi') || spec.toLowerCase().includes('recovery'))) ||
          (topicNorm.includes('angsuran') && (spec.toLowerCase().includes('angsuran') || spec.toLowerCase().includes('portofolio')))
        );
      }

      return matchesTab && matchesSearch && matchesTopic;
    });
  }, [activeTab, searchQuery, selectedTopic]);

  // Tab counts
  const tabCounts = useMemo(() => {
    return {
      all: teamMembers.length,
      lending: teamMembers.filter((m) => m.segment === 'Lending' || m.segment === 'Mikro').length,
      funding: teamMembers.filter((m) => m.segment === 'Funding').length,
      restrukturisasi: teamMembers.filter((m) => m.segment === 'Collection' || m.segment === 'CRR').length,
    };
  }, []);

  // Handle copy phone number with feedback
  const handleCopyPhone = (member: TeamMember) => {
    navigator.clipboard.writeText(member.displayPhone || member.phone);
    setCopiedId(member.id);
    setToastMessage(`Nomor kontak ${member.name} (${member.displayPhone}) berhasil disalin!`);

    setTimeout(() => {
      setCopiedId(null);
    }, 2500);

    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Segment styling helper
  const getSegmentBadge = (segment: TeamSegment) => {
    switch (segment) {
      case 'Funding':
        return {
          bg: 'bg-blue-50 text-[#0052CC] border-blue-200',
          dot: 'bg-[#0052CC]',
          label: 'Simpanan & Dana',
        };
      case 'Lending':
        return {
          bg: 'bg-blue-50 text-[#0052CC] border-blue-200',
          dot: 'bg-[#0052CC]',
          label: 'Kredit & Pinjaman',
        };
      case 'Mikro':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          dot: 'bg-indigo-600',
          label: 'Kredit Mikro & KUR',
        };
      case 'Collection':
        return {
          bg: 'bg-sky-50 text-sky-800 border-sky-200',
          dot: 'bg-sky-600',
          label: 'Collection & Portofolio',
        };
      case 'CRR':
        return {
          bg: 'bg-teal-50 text-teal-800 border-teal-200',
          dot: 'bg-teal-700',
          label: 'Restrukturisasi & CRR',
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          dot: 'bg-slate-500',
          label: segment,
        };
    }
  };

  return (
    <section id="tim-bisnis" className="relative py-14 sm:py-16 md:py-20 bg-slate-50 overflow-hidden w-full max-w-full">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0052CC_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs md:text-sm font-bold tracking-wide uppercase mb-4 border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-[#0052CC]" />
            <span>Koneksi Langsung Petugas Resmi BRI</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Struktur Tim Bisnis &{' '}
            <span className="text-[#0052CC]">
              Relationship Manager
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Terhubung langsung dengan <strong>{teamMembers.length} Relationship Manager resmi BRI KC Jakarta Jelambar</strong>. 
            Konsultasikan kebutuhan kredit usaha, simpanan giro/deposito, pembiayaan mikro KUR, restrukturisasi komersial, hingga penanganan portofolio via WhatsApp.
          </p>

          {/* Quick Statistics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 w-full text-left sm:text-center">
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-[#0052CC]">{teamMembers.length} RM</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Petugas Resmi KC Jelambar</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-[#0052CC]">4 Segmen</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Kredit, Dana, CRR & Mikro</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">Respon Cepat</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Konsultasi WhatsApp</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-[#0052CC]">8 Unit</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Jaringan Supervisi Cabang</div>
            </div>
          </div>
        </div>

        {/* Interactive Controls: Tabs & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm mb-8 sm:mb-10 w-full">
          {/* Main Segment Tabs with smooth scroll on mobile */}
          <div className="flex overflow-x-auto scrollbar-none sm:flex-wrap items-center gap-2 border-b border-slate-100 pb-4 mb-4 sm:mb-5 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const count = tabCounts[tab.id as keyof typeof tabCounts] ?? 0;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedTopic('Semua Topik');
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={isActive ? 'text-white' : 'text-[#0052CC]'}>
                    {getTabIcon(tab.iconName)}
                  </span>
                  <span>{tab.shortLabel}</span>
                  <span
                    className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Topic Chip Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 w-full">
            {/* Search Input */}
            <div className="relative flex-1 min-w-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama RM, layanan (KUR, KMK, SME, Giro, Deposito, Restrukturisasi)..."
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC]/30 focus:border-[#0052CC] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Bersihkan pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Topic Filter Dropdown / Pills with smooth horizontal scrolling */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap flex items-center gap-1 flex-shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                Topik:
              </span>
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
                {quickConsultationTopics.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors flex-shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0052CC] text-white font-bold shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Filter Indicators & Results Count */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-3.5 pt-3 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500">
            <div>
              Menampilkan <span className="font-bold text-slate-800">{filteredMembers.length}</span> dari {teamMembers.length} RM
              {searchQuery && (
                <span className="ml-1.5 font-medium text-[#0052CC]">
                  &ldquo;{searchQuery}&rdquo;
                </span>
              )}
              {selectedTopic !== 'Semua Topik' && (
                <span className="ml-1.5 inline-flex items-center gap-1 text-[#0052CC] font-semibold">
                  • Topik: {selectedTopic}
                </span>
              )}
            </div>

            {(searchQuery || selectedTopic !== 'Semua Topik' || activeTab !== 'all') && (
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                  setSelectedTopic('Semua Topik');
                }}
                className="text-[#0052CC] hover:text-[#1D4ED8] font-semibold hover:underline flex items-center gap-1 whitespace-nowrap cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Team Cards Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {filteredMembers.map((member) => {
              const badge = getSegmentBadge(member.segment);
              const isCopied = copiedId === member.id;
              const waUrl = generateWhatsAppLink(
                member.phone,
                member.name,
                member.role,
                selectedTopic !== 'Semua Topik' ? selectedTopic : undefined,
                member.customWhatsAppText
              );

              return (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0052CC]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative w-full"
                >
                  {/* Top Color Accent Line */}
                  <div
                    className={`h-1.5 w-full ${
                      member.segment === 'Funding'
                        ? 'bg-[#0052CC]'
                        : member.segment === 'Lending'
                        ? 'bg-[#2563EB]'
                        : member.segment === 'Mikro'
                        ? 'bg-indigo-500'
                        : member.segment === 'CRR'
                        ? 'bg-teal-600'
                        : 'bg-sky-600'
                    }`}
                  />

                  <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                    {/* Header: Initial Avatar (AVA UI), Name, Role & Status */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-3.5">
                      {/* Round Initial Avatar (AVA UI) */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-100 text-[#0052CC] font-extrabold text-base sm:text-lg md:text-xl flex items-center justify-center border-2 border-blue-200 shadow-xs group-hover:scale-105 transition-transform duration-300 select-none"
                          title={member.name}
                        >
                          {getInitials(member.name, member.initials)}
                        </div>
                        <span
                          className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"
                          title="Status: Online & Siap Melayani"
                        />
                      </div>

                      {/* Name & Role */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border ${badge.bg}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                            {badge.label}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0052CC] transition-colors truncate" title={member.name}>
                          {member.name}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5 line-clamp-1">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Office / Supervised Area */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 mb-3 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{member.unitOffice}</span>
                    </div>

                    {/* Bio or Profile highlight */}
                    {member.bio && (
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {member.bio}
                      </p>
                    )}

                    {/* Key Services & Specializations */}
                    <div className="mt-auto pt-2">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-[#0052CC]" />
                        Layanan Kunci
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specializations.map((spec, index) => {
                          const isTopicMatch =
                            selectedTopic !== 'Semua Topik' &&
                            spec.toLowerCase().includes(selectedTopic.toLowerCase());

                          return (
                            <span
                              key={index}
                              onClick={() => setSelectedTopic(spec)}
                              className={`text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isTopicMatch
                                  ? 'bg-[#0052CC] text-white font-bold shadow-xs'
                                  : 'bg-slate-100 text-slate-700 hover:bg-[#0052CC]/10 hover:text-[#0052CC]'
                              }`}
                              title={`Klik untuk filter: ${spec}`}
                            >
                              {spec}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar (WhatsApp CTA & Copy Phone) */}
                  <div className="p-3.5 sm:p-4 md:p-5 bg-slate-50/90 border-t border-slate-100 flex flex-col gap-2 w-full">
                    {/* Primary Button: Chat via WhatsApp */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-200 active:scale-[0.98] text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Chat via WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
                    </a>

                    {/* Secondary Actions: Salin Nomor & Custom Inquire */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
                      <button
                        onClick={() => handleCopyPhone(member)}
                        className={`flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                        title="Salin nomor WhatsApp ke clipboard"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">Nomor Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span className="truncate">Salin ({member.displayPhone})</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedRMForModal(member)}
                        className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-[#0052CC] hover:bg-[#0052CC]/5 hover:border-[#0052CC]/30 transition-colors flex-shrink-0 text-center cursor-pointer"
                        title="Pilih topik spesifik sebelum membuka WhatsApp"
                      >
                        Kustomisasi
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 text-center max-w-lg mx-auto shadow-sm w-full">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
              <Search className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Tidak Ada Relationship Manager yang Cocok
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Coba gunakan kata kunci pencarian lain atau pilih tab &ldquo;Semua Layanan&rdquo;.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                  setSelectedTopic('Semua Topik');
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0052CC] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#1D4ED8] transition-colors shadow-sm cursor-pointer"
              >
                Reset Semua Filter
              </button>
              <a
                href="https://wa.me/6281340902924?text=Halo%20Customer%20Service%20BRI%20KC%20Jakarta%20Jelambar,%20saya%20memerlukan%20informasi%20layanan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                Hubungi CS Cabang
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Floating Toast Notification when copying */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 left-6 sm:left-auto sm:bottom-6 sm:right-20 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-5 duration-200 max-w-sm">
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Custom Inquiry Modal for selecting tailored topic before sending WA */}
      {selectedRMForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedRMForModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 pr-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0052CC] font-black text-base flex items-center justify-center border border-blue-200 flex-shrink-0 select-none">
                {getInitials(selectedRMForModal.name, selectedRMForModal.initials)}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-slate-900 text-base truncate">{selectedRMForModal.name}</h4>
                <p className="text-xs text-slate-500 truncate">{selectedRMForModal.role}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Pilih Topik Konsultasi Spesifik:
              </label>
              <div className="grid grid-cols-1 gap-1.5 max-h-44 overflow-y-auto pr-1">
                {selectedRMForModal.specializations.map((spec, i) => (
                  <button
                    key={i}
                    onClick={() => setCustomInquiryService(spec)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between cursor-pointer ${
                      customInquiryService === spec
                        ? 'bg-[#0052CC]/10 border-[#0052CC] text-[#0052CC] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate">{spec}</span>
                    {customInquiryService === spec && <Check className="w-3.5 h-3.5 text-[#0052CC] flex-shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Pratinjau Pesan WhatsApp:
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                {customInquiryService
                  ? `“Halo Bapak/Ibu ${selectedRMForModal.name}, saya ingin berkonsultasi mengenai layanan ${customInquiryService}...”`
                  : `“${selectedRMForModal.customWhatsAppText || `Halo Bapak/Ibu ${selectedRMForModal.name}, saya tertarik untuk konsultasi...`}”`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setSelectedRMForModal(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Batal
              </button>
              <a
                href={generateWhatsAppLink(
                  selectedRMForModal.phone,
                  selectedRMForModal.name,
                  selectedRMForModal.role,
                  customInquiryService || undefined,
                  selectedRMForModal.customWhatsAppText
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedRMForModal(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Buka WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
