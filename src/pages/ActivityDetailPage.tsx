import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import {
  ArrowLeft,
  Calendar,
  Check,
  Link2,
  Loader2,
  Newspaper,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import { db } from '../lib/firebase';
import { getLocalActivities, formatDisplayDate } from '../lib/dataSync';
import TopOperationalBar from '../components/TopOperationalBar';
import ScrollToTop from '../components/ScrollToTop';

interface ActivityDetailPageProps {
  articleId: string;
  onNavigateHome: () => void;
  onBackToList: () => void;
}

interface DetailArticle {
  id: string;
  title: string;
  category: string;
  publishDate: any;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author?: string;
}

const CATEGORY_STYLES: Record<string, string> = {
  'Kegiatan Cabang': 'bg-blue-50 text-[#0052CC] border-blue-200',
  CSR: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Pengumuman: 'bg-amber-50 text-amber-700 border-amber-200',
  'Edukasi Nasabah': 'bg-purple-50 text-purple-700 border-purple-200',
  default: 'bg-slate-100 text-slate-700 border-slate-200',
};

function findLocal(id: string): DetailArticle | null {
  try {
    const list = getLocalActivities() as unknown as DetailArticle[];
    return (Array.isArray(list) ? list : []).find((a) => a.id === id) || null;
  } catch {
    return null;
  }
}

export default function ActivityDetailPage({
  articleId,
  onNavigateHome,
  onBackToList,
}: ActivityDetailPageProps) {
  // Local cache / static data first (instant render, safe fallback)
  const [article, setArticle] = useState<DetailArticle | null>(() => findLocal(articleId));
  const [loading, setLoading] = useState<boolean>(() => !findLocal(articleId));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const local = findLocal(articleId);
    setArticle(local);
    setLoading(!local);

    let unsub: (() => void) | undefined;
    try {
      unsub = onSnapshot(
        doc(db, 'activities', articleId),
        (snap) => {
          if (snap.exists()) {
            const d = snap.data() as any;
            setArticle({
              id: snap.id,
              title: d.title || '',
              category: d.category || 'Kegiatan Cabang',
              publishDate: d.publishDate || d.createdAt,
              excerpt: d.excerpt || '',
              content: d.content || '',
              imageUrl: d.imageUrl || '',
              author: d.author || 'Tim Humas BRI KC Jelambar',
            });
          }
          setLoading(false);
        },
        () => setLoading(false)
      );
    } catch {
      setLoading(false);
    }
    return () => unsub?.();
  }, [articleId]);

  const handleCopy = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (article?.title) document.title = `${article.title} - BRI KC Jakarta Jelambar`;
  }, [article?.title]);

  const badgeStyle = (article && CATEGORY_STYLES[article.category]) || CATEGORY_STYLES.default;
  const paragraphs = (article?.content || '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] w-full overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <TopOperationalBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Ke beranda"
          >
            <img src="/logo/bri.png" alt="Logo BRI" className="h-8 w-auto object-contain" />
            <span className="text-sm font-extrabold text-slate-900">KC Jakarta Jelambar</span>
          </button>
          <button
            onClick={onBackToList}
            className="text-xs font-bold text-[#0052CC] hover:underline cursor-pointer"
          >
            Warta &amp; Berita
          </button>
        </div>
      </header>

      <main className="flex-1 pt-28 sm:pt-36 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={onBackToList}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0052CC] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Aktivitas
            </button>
            {article && (
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Link2 className="w-3.5 h-3.5" />
                )}
                {copied ? 'Link Tersalin!' : 'Salin Link'}
              </button>
            )}
          </div>

          {loading ? (
            <div className="py-24 text-center">
              <Loader2 className="w-8 h-8 animate-spin text-[#0052CC] mx-auto" />
            </div>
          ) : !article ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-base font-bold text-slate-800">Artikel tidak ditemukan</p>
              <p className="text-xs text-slate-500">
                Artikel mungkin sudah dihapus atau tautan tidak valid.
              </p>
              <button
                onClick={onBackToList}
                className="text-xs font-bold text-[#0052CC] hover:underline cursor-pointer"
              >
                Kembali ke Daftar Aktivitas
              </button>
            </div>
          ) : (
            <article className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
              {article.imageUrl && (
                <div className="aspect-[16/9] bg-slate-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 sm:p-10 space-y-6">
                <div className="space-y-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${badgeStyle}`}
                  >
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {article.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 pb-4 border-b border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#F37021]" />
                      {formatDisplayDate(article.publishDate, 'long')}
                    </span>
                    {article.author && (
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0052CC]" />
                        {article.author}
                      </span>
                    )}
                  </div>
                </div>

                {article.excerpt && (
                  <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed border-l-4 border-[#F37021] pl-4 bg-orange-50/40 py-2 rounded-r-xl">
                    {article.excerpt}
                  </p>
                )}

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed sm:leading-8">
                  {paragraphs.length > 0 ? (
                    paragraphs.map((p, i) => (
                      <p key={i} className="whitespace-pre-line">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p>{article.excerpt || 'Konten belum tersedia.'}</p>
                  )}
                </div>
              </div>
            </article>
          )}
        </div>
      </main>

      <footer className="bg-[#003B99] text-blue-100 text-xs py-6 text-center">
        © {new Date().getFullYear()} Bank BRI KC Jakarta Jelambar
      </footer>
      <ScrollToTop />
    </div>
  );
}
