'use client';

import React, { useState, useMemo } from 'react';
import { faqList, faqCategories, FAQItem } from '../data/faq';
import {
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  X,
  MessageCircle,
  Building2,
  CheckCircle2,
  Copy,
  Check,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Layers,
  Sparkles,
  Printer
} from 'lucide-react';

interface PanduanFAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function PanduanFAQModal({
  isOpen,
  onClose,
  initialCategory = 'all',
}: PanduanFAQModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string>(faqList[0].id);
  const [copiedGroup, setCopiedGroup] = useState<string | null>(null);

  // Filtered FAQ list
  const filteredFAQs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.documents.some((doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.items.some((it) => it.toLowerCase().includes(query))
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Copy checklist handler
  const handleCopyChecklist = (item: FAQItem) => {
    const text = `*PANDUAN PERSYARATAN BERKAS BRI KC JAKARTA JELAMBAR*\n\n` +
      `*Layanan:* ${item.categoryLabel}\n` +
      `*Pertanyaan:* ${item.question}\n\n` +
      item.documents.map((doc) => `${doc.title}:\n` + doc.items.map((it) => `• ${it}`).join('\n')).join('\n\n') +
      `\n\n*Konsultasi Petugas:* ${item.rmContact.name} (${item.rmContact.role})\nWhatsApp: https://wa.me/${item.rmContact.phone}`;

    navigator.clipboard.writeText(text);
    setCopiedGroup(item.id);
    setTimeout(() => setCopiedGroup(null), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Header (Modern Brand Blue) */}
        <div className="bg-[#0052CC] text-white p-5 sm:p-6 flex items-center justify-between border-b border-blue-400/20 relative flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-8">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 flex-shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight truncate">
                  Panduan Persyaratan Berkas & FAQ
                </h3>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                  Resmi KC Jelambar
                </span>
              </div>
              <p className="text-xs text-blue-100 mt-0.5 truncate">
                Rincian checklist dokumen persyaratan perbankan & kredit sebelum ke kantor cabang
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Tutup Modal Panduan"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Controls (Search + Category Tabs) */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 space-y-3 flex-shrink-0">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari persyaratan (KTP, NPWP, NIB, Giro, KPR, Rekening Koran, EDC, Restrukturisasi)..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {faqCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0052CC] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion FAQ Content List (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 max-h-[calc(92vh-220px)]">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => {
              const isExpanded = expandedId === item.id;
              const isCopied = copiedGroup === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-[#0052CC]/50 shadow-md ring-1 ring-[#0052CC]/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0052CC] text-[10px] sm:text-[11px] font-bold border border-blue-200">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.question}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {item.summary}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 transition-transform duration-200">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#0052CC]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Accordion Body */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-5 pt-2 border-t border-slate-100 space-y-5 animate-in fade-in duration-200">
                      {/* Document Groups List */}
                      <div className="space-y-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#0052CC]" />
                          Daftar Checklist Berkas Wajib:
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {item.documents.map((docGroup, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 space-y-2.5"
                            >
                              <h5 className="text-xs font-bold text-[#0052CC]">
                                {docGroup.title}
                              </h5>
                              <ul className="space-y-1.5 text-xs text-slate-700">
                                {docGroup.items.map((docItem, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{docItem}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process Steps (If present) */}
                      {item.processSteps && (
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-2">
                          <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider">
                            Tahapan Proses Pengajuan:
                          </div>
                          <ol className="space-y-1.5 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
                            {item.processSteps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Notes / Tips */}
                      {item.notes && (
                        <div className="text-xs text-slate-500 bg-amber-50/60 p-3 rounded-lg border border-amber-200/70 italic leading-relaxed">
                          💡 <strong>Catatan:</strong> {item.notes}
                        </div>
                      )}

                      {/* Action Bar (Copy Checklist & Direct WhatsApp RM) */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                        {/* Copy checklist button */}
                        <button
                          onClick={() => handleCopyChecklist(item)}
                          className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Checklist Disalin ke Clipboard!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span>Salin Checklist Berkas</span>
                            </>
                          )}
                        </button>

                        {/* WhatsApp CTA directly to the specialized RM */}
                        <a
                          href={`https://wa.me/${item.rmContact.phone}?text=${encodeURIComponent(item.rmContact.whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Konsultasi Syarat ke {item.rmContact.name} ({item.rmContact.role})</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-800">Tidak ada panduan yang cocok</h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Coba gunakan kata kunci pencarian lain atau pilih kategori &ldquo;Semua Panduan&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-[#0052CC] text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
            <span>Dokumen asli dibawa saat verifikasi tatap muka di Kantor Cabang.</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            Tutup Panduan
          </button>
        </div>

      </div>
    </div>
  );
}
