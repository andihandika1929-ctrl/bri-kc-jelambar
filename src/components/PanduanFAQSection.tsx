'use client';

import React, { useState } from 'react';
import { faqList, FAQItem } from '../data/faq';
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
  const [expandedId, setExpandedId] = useState<string>(faqList[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (item: FAQItem) => {
    const text = `*PANDUAN PERSYARATAN BERKAS BRI KC JAKARTA JELAMBAR*\n\n` +
      `*Layanan:* ${item.categoryLabel}\n` +
      `*Pertanyaan:* ${item.question}\n\n` +
      item.documents.map((doc) => `${doc.title}:\n` + doc.items.map((it) => `• ${it}`).join('\n')).join('\n\n') +
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
            <span>Pusat Informasi & Persyaratan Berkas</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Panduan Dokumen & FAQ Layanan
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Ketahui kelengkapan dokumen resmi yang diperlukan untuk pengajuan kredit usaha, KPR, pembukaan giro badan usaha, mesin EDC merchant, hingga restrukturisasi kredit di <strong>BRI KC Jakarta Jelambar</strong>.
          </p>
        </div>

        {/* FAQ Accordion Cards List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          {faqList.map((item) => {
            const isExpanded = expandedId === item.id;
            const isCopied = copiedId === item.id;

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
                        {item.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </h3>
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

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200/80 space-y-5 animate-in fade-in duration-200">
                    {/* Document Breakdown Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {item.documents.map((docGroup, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2.5"
                        >
                          <h4 className="text-xs font-bold text-[#0052CC]">
                            {docGroup.title}
                          </h4>
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

                    {/* Process Steps */}
                    {item.processSteps && (
                      <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 space-y-2">
                        <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider">
                          Tahapan & Prosedur Pengajuan:
                        </div>
                        <ol className="space-y-1.5 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
                          {item.processSteps.map((step, sIdx) => (
                            <li key={sIdx}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-200">
                      <button
                        onClick={() => handleCopy(item)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Checklist Disalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Salin Checklist Berkas</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/${item.rmContact.phone}?text=${encodeURIComponent(item.rmContact.whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors text-center"
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
          })}
        </div>

        {/* Global CTA to Open Searchable Modal */}
        <div className="text-center">
          <button
            onClick={() => onOpenModal('all')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Buka Modal Pencarian & Panduan Lengkap</span>
          </button>
        </div>
      </div>
    </section>
  );
}
