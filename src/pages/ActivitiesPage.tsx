'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TopOperationalBar from '../components/TopOperationalBar';
import LanguageSelector from '../components/LanguageSelector';
import ScrollToTop from '../components/ScrollToTop';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { activitiesData, ActivityArticle } from '../data/activitiesData';
import {
  Newspaper,
  ArrowLeft,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Calendar,
  Tag,
  Clock,
  Search,
  BookOpen,
  ArrowRight,
  Loader2,
} from 'lucide-react';

interface ActivitiesPageProps {
  onNavigateHome: () => void;
  onNavigateOrg: () => void;
  onOpenArticle: (id: string) => void;
}

export interface UnifiedArticle {
  id: string;
  title: string;
  category: string;
  publishDate: any;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author?: string;
  tags?: string[];
}

const CATEGORY_STYLES: Record<string, string> = {
  'Kegiatan Cabang': 'bg-blue-50 text-[#0052CC] border-blue-200',
  'CSR':             'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Pengumuman':      'bg-amber-50 text-amber-700 border-amber-200',
  'Edukasi Nasabah': 'bg-purple-50 text-purple-700 border-purple-200',
  'csr':             'bg-emerald-50 text-emerald-700 border-emerald-200',
  'operasional':     'bg-blue-50 text-[#0052CC] border-blue-200',
  'literasi':        'bg-purple-50 text-purple-700 border-purple-200',
  'event':           'bg-amber-50 text-amber-700 border-amber-200',
  'default':         'bg-slate-100 text-slate-700 border-slate-200',
};

import { getLocalActivities, formatDisplayDate, getDeletedIds } from '../lib/dataSync';

function formatArticleDate(val: any): string {
  return formatDisplayDate(val, 'long');
}

export default function ActivitiesPage({ onNavigateHome, onNavigateOrg, onOpenArticle }: ActivitiesPageProps) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [articles, setArticles] = useState<UnifiedArticle[]>(() => {
    const initial = getLocalActivities() as unknown as UnifiedArticle[];
    return Array.isArray(initial) ? initial : [];
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Auto Scroll-to-Top on Page Mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const fallbackToStatic = () => {
    const local = getLocalActivities() as unknown as UnifiedArticle[];
    if (Array.isArray(local)) {
      setArticles(local);
      return;
    }
    const deletedIds = getDeletedIds('activities');
    const staticMapped: UnifiedArticle[] = activitiesData
      .filter((item) => !deletedIds.includes(item.id))
      .map((item) => ({
        id: item.id,
        title: item.title,
        category: item.categoryLabel || item.category,
        publishDate: item.date,
        excerpt: item.excerpt,
        content: Array.isArray(item.content) ? item.content.join('\n\n') : String(item.content || ''),
        imageUrl: item.image,
        author: item.author,
        tags: item.tags,
      }));
    setArticles(staticMapped);
  };

  // Listen to Firestore `activities` with graceful fallback and sync listener
  useEffect(() => {
    fallbackToStatic();

    const handleSync = (e: any) => {
      if (!e.detail || e.detail.collection === 'activities') {
        fallbackToStatic();
      }
    };
    window.addEventListener('kc_data_sync', handleSync);

    try {
      const q = query(collection(db, 'activities'), orderBy('publishDate', 'desc'));
      const unsub = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const fetched: UnifiedArticle[] = snapshot.docs.map((doc) => {
              const data = doc.data();
              return {
                id: doc.id,
                title: data.title || '',
                category: data.category || 'Kegiatan Cabang',
                publishDate: data.publishDate || data.createdAt,
                excerpt: data.excerpt || '',
                content: data.content || '',
                imageUrl: data.imageUrl || '',
                author: data.author || 'Tim Humas BRI KC Jelambar',
                tags: data.tags || [],
              };
            });
            setArticles(fetched);
          } else {
            fallbackToStatic();
          }
          setLoading(false);
        },
        (error) => {
          console.warn('Firestore activities fetch error, using static fallback:', error);
          fallbackToStatic();
          setLoading(false);
        }
      );
      return () => {
        unsub();
        window.removeEventListener('kc_data_sync', handleSync);
      };
    } catch (err) {
      fallbackToStatic();
      setLoading(false);
      return () => window.removeEventListener('kc_data_sync', handleSync);
    }
  }, []);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return ['Semua', ...Array.from(set)];
  }, [articles]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCat =
        selectedCategory === 'Semua' ||
        art.category?.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title?.toLowerCase().includes(q) ||
        art.excerpt?.toLowerCase().includes(q) ||
        art.content?.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative">
      {/* 1. Global Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full z-[999] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <TopOperationalBar />

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo & Back to Home */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                title="Kembali ke Halaman Beranda"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{t.activities.backToHome}</span>
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
              <span className="px-3 py-2 rounded-xl bg-blue-50 text-[#0052CC] font-bold border border-blue-200/60">
                {t.nav.activities}
              </span>
              <button
                onClick={onNavigateOrg}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.org}
              </button>
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-[#0052CC] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {t.nav.services}
              </button>
            </nav>

            {/* Language Selector Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSelector variant="desktop" />
            </div>

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
            <div className="px-3.5 py-2.5 rounded-xl text-sm font-bold bg-blue-50 text-[#0052CC]">
              {t.nav.activities}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateOrg();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {t.nav.org}
            </button>
            <div className="pt-2">
              <LanguageSelector variant="mobile" />
            </div>
          </div>
        )}
      </header>

      {/* 2. Main Content */}
      <main className="flex-1 pt-32 sm:pt-36 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider border border-blue-200">
            <BookOpen className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Dokumentasi &amp; Warta Cabang</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Aktivitas, Berita &amp; Program Cabang
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dokumentasi inisiatif sosial (TJSL), edukasi literasi finansial, pengumuman operasional,
            dan ragam kegiatan terkini di lingkungan kerja BRI Kantor Cabang Jakarta Jelambar.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul berita, topik, atau kata kunci..."
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Count */}
            <div className="text-xs font-semibold text-slate-500 whitespace-nowrap self-center">
              Menampilkan <span className="text-[#0052CC] font-bold">{filteredArticles.length}</span> artikel
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0052CC] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="py-24 text-center space-y-3">
            <Loader2 className="w-8 h-8 animate-spin text-[#0052CC] mx-auto" />
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Memuat warta &amp; berita terkini…</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-slate-200/80 p-8">
            <Newspaper className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-sm sm:text-base font-bold text-slate-800">
              Tidak ada artikel yang cocok dengan pencarian Anda
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Silakan ganti kata kunci atau pilih kategori lain untuk melihat artikel lainnya.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:underline cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => {
              const badgeStyle = CATEGORY_STYLES[article.category] || CATEGORY_STYLES['default'];
              return (
                <article
                  key={article.id}
                  onClick={() => onOpenArticle(article.id)}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {article.imageUrl ? (
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 text-blue-300">
                        <Newspaper className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shadow-xs backdrop-blur-xs ${badgeStyle}`}
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Calendar className="w-3 h-3 text-[#F37021]" />
                        <span>{formatArticleDate(article.publishDate)}</span>
                        {article.author && (
                          <>
                            <span>•</span>
                            <span className="truncate">{article.author}</span>
                          </>
                        )}
                      </div>

                      <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0052CC] transition-colors">
                        {article.title}
                      </h2>

                      {article.excerpt && (
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0052CC] group-hover:gap-2 transition-all">
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* 4. Modern Corporate Blue Footer (#003B99) */}
      <footer className="bg-[#003B99] text-white text-xs pt-14 sm:pt-16 pb-12 border-none shadow-none w-full max-w-full m-0 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12 w-full">
            {/* Col 1 */}
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
            </div>

            {/* Col 2 */}
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
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                    <span>{t.nav.services}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateOrg}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                    <span>{t.nav.org}</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {t.footer.col2Title}
              </h5>
              <div className="space-y-2 text-xs text-blue-100">
                <p>Senin – Jumat: 08.00 – 15.00 WIB</p>
                <p>Layanan CRM &amp; ATM: 24 Jam Nonstop</p>
              </div>
            </div>

            {/* Col 4 */}
            <div>
              <h5 className="text-white font-bold text-base tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Hubungi Kami
              </h5>
              <div className="space-y-2.5 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="tel:02156981105" className="hover:text-white font-semibold">
                    (021) 5698-1105
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="mailto:kcjelambarbri@gmail.com" className="hover:text-white font-semibold break-all">
                    kcjelambarbri@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200">
            <p>{t.footer.copyright}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 font-medium text-[11px] shadow-xs backdrop-blur-xs flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse flex-shrink-0" />
              <span>{t.footer.legal}</span>
            </div>
          </div>
          <div className="pt-3 text-center text-[10px] text-blue-300/70 italic leading-relaxed">
            {t.footer.disclaimer}
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
