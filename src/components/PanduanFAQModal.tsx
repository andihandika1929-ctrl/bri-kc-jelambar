'use client';

import React, { useState, useMemo } from 'react';
import {
  faqList,
  faqCategories,
  FAQItem,
  getFaqQuestion,
  getFaqSummary,
  getFaqCategoryLabel,
  getFaqCategoryOptionLabel,
  getFaqDocumentTitle,
  getFaqDocumentItems,
  getFaqProcessSteps,
  getFaqNotes
} from '../data/faq';
import { useLanguage } from '../context/LanguageContext';
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
  const { t, language } = useLanguage();
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
      const questionText = getFaqQuestion(item, language).toLowerCase();
      const summaryText = getFaqSummary(item, language).toLowerCase();
      const categoryText = getFaqCategoryLabel(item, language).toLowerCase();

      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        questionText.includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        summaryText.includes(query) ||
        categoryText.includes(query) ||
        item.documents.some((doc) => {
          const docTitle = getFaqDocumentTitle(doc, language).toLowerCase();
          const docItems = getFaqDocumentItems(doc, language);
          return (
            doc.title.toLowerCase().includes(query) ||
            docTitle.includes(query) ||
            doc.items.some((it) => it.toLowerCase().includes(query)) ||
            docItems.some((it) => it.toLowerCase().includes(query))
          );
        });

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Copy checklist handler
  const handleCopyChecklist = (item: FAQItem) => {
    const categoryName = getFaqCategoryLabel(item, language);
    const questionText = getFaqQuestion(item, language);

    const docsText = item.documents.map((doc) => {
      const docTitle = getFaqDocumentTitle(doc, language);
      const docItems = getFaqDocumentItems(doc, language);
      return `${docTitle}:\n` + docItems.map((it) => `• ${it}`).join('\n');
    }).join('\n\n');

    const text = `*PANDUAN PERSYARATAN BERKAS BRI KC JAKARTA JELAMBAR*\n\n` +
      `*Layanan:* ${categoryName}\n` +
      `*Pertanyaan:* ${questionText}\n\n` +
      docsText +
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
                  {t.faq.modalTitle}
                </h3>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                  Resmi KC Jelambar
                </span>
              </div>
              <p className="text-xs text-blue-100 mt-0.5 truncate">
                {t.faq.modalSub}
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
              placeholder={t.faq.searchPlaceholder}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] transition-all"
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

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {faqCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const catLabel = getFaqCategoryOptionLabel(cat, language);
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
                  {catLabel}
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
              const questionDisplay = getFaqQuestion(item, language);
              const summaryDisplay = getFaqSummary(item, language);
              const categoryDisplay = getFaqCategoryLabel(item, language);
              const processSteps = getFaqProcessSteps(item, language);
              const notesDisplay = getFaqNotes(item, language);

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
                          {categoryDisplay}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {questionDisplay}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {summaryDisplay}
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
                          <span>Daftar Checklist Berkas Wajib:</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {item.documents.map((docGroup, idx) => {
                            const docTitle = getFaqDocumentTitle(docGroup, language);
                            const docItems = getFaqDocumentItems(docGroup, language);

                            return (
                              <div
                                key={idx}
                                className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 space-y-2.5"
                              >
                                <h5 className="text-xs font-bold text-[#0052CC]">
                                  {docTitle}
                                </h5>
                                <ul className="space-y-1.5 text-xs text-slate-700">
                                  {docItems.map((docItem, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                      <span className="leading-relaxed">{docItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Process Steps (If present) */}
                      {processSteps.length > 0 && (
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-2">
                          <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider">
                            Tahapan Proses Pengajuan:
                          </div>
                          <ol className="space-y-1.5 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
                            {processSteps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Notes / Tips */}
                      {notesDisplay && (
                        <div className="text-xs text-slate-500 bg-amber-50/60 p-3 rounded-lg border border-amber-200/70 italic leading-relaxed">
                          💡 <strong>Catatan:</strong> {notesDisplay}
                        </div>
                      )}

                      {/* Action Bar Inside Modal */}
                      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <button
                          onClick={() => handleCopyChecklist(item)}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer bg-white border-slate-300 hover:bg-slate-50 text-slate-700"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-700">Checklist Berhasil Disalin!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-slate-400" />
                              <span>{t.faq.btnCopyChecklist}</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`https://wa.me/${item.rmContact.phone}?text=${encodeURIComponent(item.rmContact.whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>{t.faq.btnContactOfficer} ({item.rmContact.name})</span>
                          <ExternalLink className="w-3 h-3 opacity-80" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            /* Empty Search */
            <div className="text-center py-12">
              <p className="text-sm font-semibold text-slate-600">
                Tidak ada dokumen persyaratan yang cocok dengan pencarian Anda.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs text-[#0052CC] font-bold hover:underline cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0052CC]" />
            <span>Dokumen diverifikasi resmi oleh Tim Bisnis BRI KC Jakarta Jelambar</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
