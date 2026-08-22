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
          (topicNorm.includes('kupedes') && spec.toLowerCase().includes('kupedes'))
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
          bg: 'bg-blue-50 text-[#00529C] border-blue-200',
          dot: 'bg-[#00529C]',
          label: 'Simpanan & Dana',
        };
      case 'Lending':
        return {
          bg: 'bg-blue-50 text-blue-800 border-blue-200',
          dot: 'bg-blue-700',
          label: 'Kredit & Pinjaman',
        };
      case 'Mikro':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          dot: 'bg-indigo-600',
          label: 'Kredit Mikro & KUR',
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
    <section id="tim-bisnis" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00529C_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#00529C] text-xs md:text-sm font-bold tracking-wide uppercase mb-4 border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-[#00529C]" />
            <span>Koneksi Langsung Petugas Resmi BRI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Struktur Tim Bisnis &{' '}
            <span className="text-[#00529C]">
              Relationship Manager
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Terhubung langsung dengan <strong>7 Relationship Manager resmi BRI KC Jakarta Jelambar</strong>. 
            Konsultasikan kebutuhan kredit usaha, simpanan giro/deposito, serta pembiayaan mikro KUR dengan respon cepat via WhatsApp.
          </p>

          {/* Quick Statistics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-2xl font-bold text-[#00529C]">{teamMembers.length} RM</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Petugas Resmi KC Jelambar</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-2xl font-bold text-[#00529C]">3 Segmen</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Kredit, Simpanan & Mikro</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-2xl font-bold text-emerald-600">Respon Cepat</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Konsultasi WhatsApp</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-2xl font-bold text-[#003d75]">8 Unit</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Jaringan Supervisi Cabang</div>
            </div>
          </div>
        </div>

        {/* Interactive Controls: Tabs & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm mb-10">
          {/* Main Segment Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2 border-b border-slate-100 pb-5 mb-5">
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
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#00529C] text-white shadow-md shadow-blue-900/20 scale-[1.02]'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={isActive ? 'text-white' : 'text-[#00529C]'}>
                    {getTabIcon(tab.iconName)}
                  </span>
                  <span>{tab.shortLabel}</span>
                  <span
                    className={`ml-1 text-xs px-2 py-0.5 rounded-full font-bold ${
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
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama RM, layanan (KUR, KMK, Giro, Deposito, Payroll)..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00529C]/30 focus:border-[#00529C] transition-all"
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

            {/* Quick Topic Filter Dropdown / Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                Topik Cepat:
              </span>
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
                {quickConsultationTopics.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                        isSelected
                          ? 'bg-[#00529C] text-white font-bold shadow-xs'
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
          <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
            <div>
              Menampilkan <span className="font-bold text-slate-800">{filteredMembers.length}</span> dari {teamMembers.length} Relationship Manager
              {searchQuery && (
                <span className="ml-2 font-medium text-[#00529C]">
                  hasil pencarian &ldquo;{searchQuery}&rdquo;
                </span>
              )}
              {selectedTopic !== 'Semua Topik' && (
                <span className="ml-2 inline-flex items-center gap-1 text-[#00529C] font-semibold">
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
                className="text-[#00529C] hover:text-[#003d75] font-semibold hover:underline flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                Reset Semua Filter
              </button>
            )}
          </div>
        </div>

        {/* Team Cards Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => {
              const badge = getSegmentBadge(member.segment);
              const isCopied = copiedId === member.id;
              const waUrl = generateWhatsAppLink(
                member.phone,
                member.name,
                member.role,
                selectedTopic !== 'Semua Topik' ? selectedTopic : undefined
              );

              return (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00529C]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Top Color Accent Line */}
                  <div
                    className={`h-1.5 w-full ${
                      member.segment === 'Funding'
                        ? 'bg-[#00529C]'
                        : member.segment === 'Lending'
                        ? 'bg-blue-600'
                        : 'bg-indigo-500'
                    }`}
                  />

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    {/* Header: Initial Avatar (AVA UI), Name, Role & Status */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Round Initial Avatar (AVA UI) */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100 text-[#00529C] font-extrabold text-lg sm:text-xl flex items-center justify-center border-2 border-blue-200 shadow-sm group-hover:scale-105 transition-transform duration-300 select-none"
                          title={member.name}
                        >
                          {getInitials(member.name)}
                        </div>
                        <span
                          className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"
                          title="Status: Online & Siap Melayani"
                        />
                      </div>

                      {/* Name & Role */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badge.bg}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                            {badge.label}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#00529C] transition-colors truncate" title={member.name}>
                          {member.name}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5 line-clamp-1">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Office / Supervised Area */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
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
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-[#00529C]" />
                        Layanan & Portofolio Kunci
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
                              className={`text-[11px] px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                                isTopicMatch
                                  ? 'bg-[#00529C] text-white font-bold shadow-xs'
                                  : 'bg-slate-100 text-slate-700 hover:bg-[#00529C]/10 hover:text-[#00529C]'
                              }`}
                              title={`Klik untuk filter spesialisasi: ${spec}`}
                            >
                              {spec}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar (WhatsApp CTA & Copy Phone) */}
                  <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-2">
                    {/* Primary Button: Chat via WhatsApp */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-200 active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Chat via WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
                    </a>

                    {/* Secondary Actions: Salin Nomor & Custom Inquire */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyPhone(member)}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                          isCopied
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                        title="Salin nomor WhatsApp ke clipboard"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Nomor Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Salin Kontak ({member.displayPhone})</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedRMForModal(member)}
                        className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-[#00529C] hover:bg-[#00529C]/5 hover:border-[#00529C]/30 transition-colors"
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
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Tidak Ada Relationship Manager yang Cocok
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Coba gunakan kata kunci pencarian lain, pilih tab &ldquo;Semua Layanan&rdquo;, 
              atau hubungi Call Center KC Jelambar secara langsung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                  setSelectedTopic('Semua Topik');
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#00529C] text-white rounded-xl text-sm font-semibold hover:bg-[#003d75] transition-colors shadow-sm"
              >
                Reset Semua Filter
              </button>
              <a
                href="https://wa.me/6281340902924?text=Halo%20Customer%20Service%20BRI%20KC%20Jakarta%20Jelambar,%20saya%20memerlukan%20informasi%20layanan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                Hubungi CS Utama KC Jelambar
              </a>
            </div>
          </div>
        )}

        {/* Branch Official Help & Consultation Notice */}
        <div className="mt-14 bg-gradient-to-r from-[#003d75] via-[#00529C] to-[#003d75] text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                Layanan Tatap Muka & Helpdesk Kantor Cabang
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ingin Bertemu Langsung di Kantor Cabang Jakarta Jelambar?
              </h4>
              <p className="text-slate-200 text-sm leading-relaxed">
                Kunjungi kami di <strong>Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, Grogol, Jakarta Barat 11450</strong>. 
                Jam operasional: Senin – Jumat (08.00 – 15.00 WIB). Layanan konsultasi kredit komersial, 
                SME, pembukaan rekening institusi, dan mesin EDC dapat dijadwalkan terlebih dahulu dengan RM terkait.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalan+Makaliwe+Raya+No+35C+Wijaya+Kusuma+Grogol+Jakarta+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#00529C] font-bold text-sm shadow-md transition-all duration-200 text-center"
              >
                <Building2 className="w-4 h-4 text-[#00529C]" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
              <a
                href="tel:1500017"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call BRI 1500017</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification when copying */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Custom Inquiry Modal for selecting tailored topic before sending WA */}
      {selectedRMForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedRMForModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#00529C] font-black text-base flex items-center justify-center border border-blue-200 flex-shrink-0 select-none">
                {getInitials(selectedRMForModal.name)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{selectedRMForModal.name}</h4>
                <p className="text-xs text-slate-500">{selectedRMForModal.role}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Pilih Topik Konsultasi Spesifik:
              </label>
              <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {selectedRMForModal.specializations.map((spec, i) => (
                  <button
                    key={i}
                    onClick={() => setCustomInquiryService(spec)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between ${
                      customInquiryService === spec
                        ? 'bg-[#00529C]/10 border-[#00529C] text-[#00529C] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{spec}</span>
                    {customInquiryService === spec && <Check className="w-3.5 h-3.5 text-[#00529C]" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Pratinjau Pesan WhatsApp:
              </div>
              <p className="text-xs text-slate-700 italic">
                &ldquo;Halo Bapak/Ibu {selectedRMForModal.name}, saya ingin konsultasi mengenai layanan {customInquiryService || 'perbankan'}...&rdquo;
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSelectedRMForModal(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <a
                href={generateWhatsAppLink(
                  selectedRMForModal.phone,
                  selectedRMForModal.name,
                  selectedRMForModal.role,
                  customInquiryService || undefined
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedRMForModal(null)}
                className="flex-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
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
