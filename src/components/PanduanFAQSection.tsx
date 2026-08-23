'use client';

import React, { useState } from 'react';
import {
  faqList,
  FAQItem,
  getFaqQuestion,
  getFaqSummary,
  getFaqCategoryLabel,
  getFaqDocumentTitle,
  getFaqDocumentItems
} from '../data/faq';
import { useLanguage } from '../context/LanguageContext';
import {
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Copy,
  Check,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface PanduanFAQSectionProps {
  onOpenModal: (category?: string) => void;
}

export default function PanduanFAQSection({ onOpenModal }: PanduanFAQSectionProps) {
  const { t, language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>(faqList[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (item: FAQItem) => {
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
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="panduan" className="py-16 sm:py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <FileText className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.faq.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.faq.desc}
          </p>
        </div>

        {/* FAQ Accordion Cards List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          {faqList.map((item) => {
            const isExpanded = expandedId === item.id;
            const isCopied = copiedId === item.id;
            const questionDisplay = getFaqQuestion(item, language);
            const summaryDisplay = getFaqSummary(item, language);
            const categoryDisplay = getFaqCategoryLabel(item, language);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-50/70 border-[#0052CC]/40 shadow-md ring-1 ring-[#0052CC]/15'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0052CC] text-[11px] font-bold border border-blue-200">
                        {categoryDisplay}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {questionDisplay}
                    </h3>
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

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-200/60 space-y-4">
                    {/* Document Checklist Items */}
                    <div className="space-y-3 pt-2">
                      {item.documents.map((doc, idx) => {
                        const docTitle = getFaqDocumentTitle(doc, language);
                        const docItems = getFaqDocumentItems(doc, language);

                        return (
                          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                              {docTitle}
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                              {docItems.map((line, lIdx) => (
                                <li key={lIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Action Strip: Copy & WhatsApp Dedicated RM */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-200/60">
                      <button
                        onClick={() => handleCopy(item)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
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
          })}
        </div>

        {/* Big CTA to open full modal */}
        <div className="text-center">
          <button
            onClick={() => onOpenModal('all')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{t.faq.btnOpenFullModal}</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </button>
        </div>
      </div>
    </section>
  );
}
