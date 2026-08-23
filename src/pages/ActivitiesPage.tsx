'use client';

import React, { useState, useMemo } from 'react';
import {
  activitiesData,
  ActivityArticle,
  ActivityCategory,
  getArticleTitle,
  getArticleDate,
  getArticleCategory,
  getArticleReadTime,
  getArticleAuthor,
  getArticleExcerpt,
  getArticleContent
} from '../data/activitiesData';
import { useLanguage } from '../context/LanguageContext';
import TopOperationalBar from '../components/TopOperationalBar';
import ScrollToTop from '../components/ScrollToTop';
import {
  Newspaper,
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  Search,
  Tag,
  Share2,
  Check,
  X,
  Sparkles,
  Building2,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface ActivitiesPageProps {
  onNavigateHome: () => void;
  onNavigateOrg: () => void;
}

export default function ActivitiesPage({ onNavigateHome, onNavigateOrg }: ActivitiesPageProps) {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticleModal, setActiveArticleModal] = useState<ActivityArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Category filter tabs
  const categories = useMemo(() => [
    { id: 'all' as ActivityCategory, label: t.activities.categoryAll },
    { id: 'csr' as ActivityCategory, label: t.activities.categoryCsr },
    { id: 'literasi' as ActivityCategory, label: t.activities.categoryLiteracy },
    { id: 'operasional' as ActivityCategory, label: t.activities.categoryOperational },
    { id: 'event' as ActivityCategory, label: t.activities.categoryEvent },
  ], [t]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return activitiesData.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const title = getArticleTitle(article, language).toLowerCase();
      const excerpt = getArticleExcerpt(article, language).toLowerCase();
      const author = getArticleAuthor(article, language).toLowerCase();
      const content = getArticleContent(article, language).join(' ').toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        excerpt.includes(query) ||
        author.includes(query) ||
        content.includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const handleShare = (article: ActivityArticle) => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative">
      {/* Global Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full z-[999] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top Operational Bar */}
        <TopOperationalBar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo & Back to Home */}
            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                title="Kembali ke Halaman Beranda"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{t.activities.backToHome}</span>
              </button>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2">
                <img
                  src="/logo/bri.png"
                  alt="Logo Bank BRI"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <span className="text-sm sm:text-base font-extrabold text-[#0052CC] whitespace-nowrap">
                  KC Jakarta Jelambar
                </span>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <nav className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold">
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.home}
              </button>
              <span className="px-3 py-2 rounded-xl bg-blue-50 text-[#0052CC] font-bold">
                {t.nav.activities}
              </span>
              <button
                onClick={onNavigateOrg}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.org}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Newspaper className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>{t.activities.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.activities.titleStart}{' '}
            <span className="text-[#0052CC]">
              {t.activities.titleHighlight}
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.activities.desc}
          </p>

          {/* Search & Category Filter Controls */}
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
                placeholder={t.activities.searchPlaceholder}
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

            {/* Category Pills Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4 mt-6 mb-4">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/20 scale-[1.02]'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Grid Section */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => {
                const titleDisplay = getArticleTitle(article, language);
                const dateDisplay = getArticleDate(article, language);
                const categoryDisplay = getArticleCategory(article, language);
                const readTimeDisplay = getArticleReadTime(article, language);
                const authorDisplay = getArticleAuthor(article, language);
                const excerptDisplay = getArticleExcerpt(article, language);

                return (
                  <article
                    key={article.id}
                    className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0052CC]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                  >
                    {/* Article Image Cover */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={article.image}
                        alt={titleDisplay}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-[#0052CC] text-white text-[11px] font-extrabold shadow-md tracking-wide">
                          {categoryDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Meta: Date & Read Time */}
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{dateDisplay}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{readTimeDisplay}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2
                          onClick={() => setActiveArticleModal(article)}
                          className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug line-clamp-2 mb-2.5 cursor-pointer"
                        >
                          {titleDisplay}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {excerptDisplay}
                        </p>
                      </div>

                      {/* Card Footer: Author & Read CTA */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate pr-2">
                          <User className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span className="truncate">{authorDisplay}</span>
                        </div>

                        <button
                          onClick={() => setActiveArticleModal(article)}
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0052CC] group-hover:text-[#1D4ED8] transition-colors flex-shrink-0 cursor-pointer"
                        >
                          <span>{t.activities.readArticle}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-md mx-auto shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                {t.activities.emptyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                {t.activities.emptyDesc}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
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

      {/* Article Detail Full Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200">
            {/* Modal Header Bar */}
            <div className="bg-[#0052CC] text-white p-4 sm:p-5 flex items-center justify-between border-b border-blue-400/20 relative flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0 pr-6">
                <BookOpen className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-100 truncate">
                  {getArticleCategory(activeArticleModal, language)} • BRI KC Jakarta Jelambar
                </span>
              </div>

              <button
                onClick={() => setActiveArticleModal(null)}
                className="text-white/80 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Tutup Artikel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Article Content */}
            <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6 max-h-[calc(92vh-140px)]">
              {/* Cover Image */}
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-sm">
                <img
                  src={activeArticleModal.image}
                  alt={getArticleTitle(activeArticleModal, language)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1 font-semibold text-[#0052CC]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{getArticleDate(activeArticleModal, language)}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{getArticleReadTime(activeArticleModal, language)}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{getArticleAuthor(activeArticleModal, language)}</span>
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  {getArticleTitle(activeArticleModal, language)}
                </h1>
              </div>

              {/* Lead Highlight Excerpt */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed italic">
                “{getArticleExcerpt(activeArticleModal, language)}”
              </div>

              {/* Paragraphs Body */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {getArticleContent(activeArticleModal, language).map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  Tags:
                </span>
                {activeArticleModal.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Action Strip */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 flex-shrink-0">
              <button
                onClick={() => handleShare(activeArticleModal)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Link Berita Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-slate-500" />
                    <span>{t.activities.shareArticle}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/628121214017?text=${encodeURIComponent(`Halo Sabrina Bank BRI, saya ingin menanyakan informasi terkait berita: "${getArticleTitle(activeArticleModal, language)}"`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Tanya Info via WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveArticleModal(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#003B99] text-white text-xs py-8 border-none mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="leading-relaxed">{t.footer.copyright}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="text-blue-200 hover:text-white transition-colors underline cursor-pointer"
            >
              {t.nav.home}
            </button>
            <span>•</span>
            <button
              onClick={onNavigateOrg}
              className="text-blue-200 hover:text-white transition-colors underline cursor-pointer"
            >
              {t.nav.org}
            </button>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
