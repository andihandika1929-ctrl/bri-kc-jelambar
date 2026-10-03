'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { uploadImageToCloudinary } from '../lib/uploadImage';
import {
  withTimeout,
  getLocalBanners,
  getLocalStaff,
  getLocalOrg,
  getLocalActivities,
  mergeStaffWithLocal,
  mergeOrgWithLocal,
  saveLocalData,
  autoSeedFirestore,
  formatDisplayDate,
  formatInputDate,
  parseSafeDate,
  trackDeletedId,
  clearDeletedId,
} from '../lib/dataSync';
import {
  Plus,
  Trash2,
  Pencil,
  X,
  Upload,
  Loader2,
  ShieldAlert,
  Eye,
  EyeOff,
  CheckCircle2,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  AlertTriangle,
  ArrowLeft,
  Users,
  Network,
  Newspaper,
  Image as ImageLucide,
  Search,
  Phone,
  Database,
  ExternalLink,
  RefreshCw,
  Info,
} from 'lucide-react';

interface AdminPageProps {
  onNavigateHome: () => void;
}

// â”€â”€â”€ Toast Notification System â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
interface ToastInfo {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
}

function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: ToastInfo[];
  onRemove: (id: number) => void;
}) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-xl border text-xs leading-relaxed transition-all transform animate-in slide-in-from-top-4 duration-300 ${
            t.type === 'success'
              ? 'bg-[#071A36] text-white border-emerald-500/40 shadow-blue-950/20'
              : t.type === 'warning'
              ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-amber-900/10'
              : t.type === 'error'
              ? 'bg-red-50 text-red-900 border-red-300 shadow-red-900/10'
              : 'bg-blue-50 text-blue-900 border-blue-200'
          }`}
        >
          {t.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
          {t.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
          {t.type === 'error' && <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />}
          {t.type === 'info' && <Info className="w-5 h-5 text-[#0052CC] shrink-0 mt-0.5" />}

          <div className="flex-1 font-medium">{t.message}</div>

          <button
            onClick={() => onRemove(t.id)}
            className="p-1 rounded-lg hover:bg-black/10 text-current opacity-70 hover:opacity-100 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

// â”€â”€â”€ PIN Guard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function PinGuard({
  onUnlock,
  onNavigateHome,
}: {
  onUnlock: () => void;
  onNavigateHome: () => void;
}) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const expectedPin = (import.meta.env.VITE_ADMIN_PIN || '290799').toString().trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === expectedPin) {
      sessionStorage.setItem('kc_admin_unlocked', '1');
      onUnlock();
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071A36] via-[#002D62] to-[#0052CC] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
            <ShieldAlert className="w-7 h-7 text-[#0052CC]" />
          </div>
          <h1 className="text-xl font-extrabold text-slate-900">Portal Admin &amp; CMS</h1>
          <p className="text-xs text-slate-500">
            BRI KC Jakarta Jelambar â€” Area Terbatas
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Masukkan PIN Admin
            </label>
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-mono tracking-widest focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? 'border-red-400 bg-red-50 ring-2 ring-red-200 animate-pulse'
                    : 'border-slate-200 focus:ring-[#0052CC] focus:border-[#0052CC]'
                }`}
                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢"
                maxLength={10}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> PIN tidak valid. Coba lagi.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold py-3 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Masuk ke Dashboard
          </button>
        </form>

        <div className="pt-2 text-center space-y-3">
          <p className="text-[10px] text-slate-400">
            Akses hanya untuk petugas IT &amp; Admin Cabang yang berwenang.
          </p>
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0052CC] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Portal Publik
          </button>
        </div>
      </div>
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TAB 1: HERO BANNER MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
interface BannerItem {
  id: string;
  altText: string;
  imageSrc: string;
  targetLink: string;
  active: boolean;
  order?: number;
  imageStoragePath?: string;
}

function BannerManager({
  onShowToast,
}: {
  onShowToast: (msg: string, type: ToastInfo['type']) => void;
}) {
  // Always initialize with local cache so table is NEVER empty!
  const [banners, setBanners] = useState<BannerItem[]>(() => getLocalBanners());
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<BannerItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const initialForm: BannerItem = {
    id: '',
    altText: '',
    imageSrc: '',
    targetLink: '#tim-bisnis',
    active: true,
  };
  const [form, setForm] = useState<BannerItem>(initialForm);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Firestore real-time listener
  useEffect(() => {
    try {
      const q = query(collection(db, 'banners'));
      const unsub = onSnapshot(
        q,
        (snap) => {
          if (!snap.empty) {
            const fetched = snap.docs.map((d) => ({
              id: d.id,
              ...(d.data() as any),
            }));
            setBanners(fetched);
            saveLocalData('banners', fetched);
          }
          setLoading(false);
        },
        () => setLoading(false)
      );
      return unsub;
    } catch {
      setLoading(false);
    }
  }, []);

  const openNew = () => {
    setEditing(null);
    setForm({
      id: '',
      altText: '',
      imageSrc: '',
      targetLink: '#tim-bisnis',
      active: true,
    });
    setUploadProgress(0);
    setIsModalOpen(true);
  };

  const openEdit = (b: BannerItem) => {
    setEditing(b);
    setForm(b);
    setUploadProgress(0);
    setIsModalOpen(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadProgress(10);

    try {
      const url = await uploadImageToCloudinary(file);
      setForm((prev) => ({
        ...prev,
        imageSrc: url,
        imageStoragePath: '',
      }));
      setUploadProgress(100);
      onShowToast('Foto banner berhasil diunggah ke Cloudinary.', 'success');
    } catch (err: any) {
      onShowToast('Gagal memproses gambar: ' + (err.message || 'Error'), 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.altText.trim() || !form.imageSrc.trim()) {
      alert('Mohon isi teks deskripsi banner dan gambar banner.');
      return;
    }

    const isEdit = Boolean(editing && editing.id);
    const targetDocRef = isEdit
      ? doc(db, 'banners', editing!.id)
      : doc(collection(db, 'banners'));
    const targetId = targetDocRef.id;

    const payload: BannerItem = {
      ...form,
      id: targetId,
      active: Boolean(form.active),
    };

    // 1. Optimistic Local State Update immediately
    let updatedList: BannerItem[];
    if (isEdit) {
      updatedList = banners.map((b) => (b.id === targetId ? payload : b));
    } else {
      updatedList = [payload, ...banners];
    }
    setBanners(updatedList);
    saveLocalData('banners', updatedList);
    clearDeletedId('banners', targetId);

    // 2. Immediately close modal & reset form
    setIsModalOpen(false);
    setForm(initialForm);
    setEditing(null);
    if (fileInputRef.current) fileInputRef.current.value = '';

    // 3. Show clear success toast notification
    onShowToast(
      isEdit ? 'Banner berhasil diperbarui!' : 'Banner baru berhasil ditambahkan!',
      'success'
    );

    // 4. Save directly to 'banners' Firestore collection
    (async () => {
      try {
        await withTimeout(
          setDoc(
            targetDocRef,
            {
              altText: payload.altText,
              imageSrc: payload.imageSrc,
              targetLink: payload.targetLink,
              active: payload.active,
              imageStoragePath: payload.imageStoragePath || '',
              updatedAt: serverTimestamp(),
              ...(isEdit ? {} : { createdAt: serverTimestamp() }),
            },
            { merge: true }
          ),
          8000
        );
      } catch (err: any) {
        console.warn('Firestore write warning:', err);
        onShowToast(
          'Catatan: Banner disimpan di browser lokal (Sinkronisasi cloud Firestore tertunda: ' +
            (err.message || 'offline') +
            ')',
          'warning'
        );
      }
    })();
  };

  const toggleActive = (b: BannerItem) => {
    const nextActive = !b.active;
    const updated = banners.map((item) =>
      item.id === b.id ? { ...item, active: nextActive } : item
    );
    setBanners(updated);
    saveLocalData('banners', updated);
    onShowToast(`Banner kini ${nextActive ? 'Aktif' : 'Nonaktif'}.`, 'info');

    // Sync Firestore in background
    if (b.id && !b.id.startsWith('banner_')) {
      withTimeout(
        updateDoc(doc(db, 'banners', b.id), { active: nextActive }),
        6000
      ).catch(() => {});
    }
  };

  const handleDelete = async (b: BannerItem) => {
    if (!window.confirm(`Yakin hapus banner "${b.altText}"?`)) return;

    try {
      if (b.imageStoragePath) {
        await deleteObject(ref(storage, b.imageStoragePath)).catch(() => {});
      }
      await withTimeout(deleteDoc(doc(db, 'banners', b.id)), 8000);
    } catch (err: any) {
      console.warn('Gagal menghapus dari Firestore:', err);
    }

    const updated = banners.filter((item) => item.id !== b.id);
    setBanners(updated);
    saveLocalData('banners', updated);
    trackDeletedId('banners', b.id);
    onShowToast(`Banner "${b.altText}" berhasil dihapus.`, 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Hero Carousel Banner</h2>
          <p className="text-xs text-slate-500">
            Kelola gambar banner beranda, tautan klik, dan visibilitas tayang.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={openNew}
            className="px-4 py-2 rounded-xl bg-[#0052CC] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" /> Tambah Banner
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400 space-y-2">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#0052CC]" />
          <p className="text-xs">Memuat bannerâ€¦</p>
        </div>
      ) : banners.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
          <ImageLucide className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-700">Belum ada banner</p>
          <p className="text-xs text-slate-400">
            Klik tombol "Tambah Banner" di atas untuk menambahkan slide baru.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {banners.map((b) => (
            <div
              key={b.id}
              className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col ${
                b.active ? 'border-slate-200 shadow-xs' : 'border-slate-200 opacity-60 bg-slate-50'
              }`}
            >
              <div className="relative aspect-[21/9] bg-slate-900 overflow-hidden">
                <img
                  src={b.imageSrc}
                  alt={b.altText}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if broken image
                    (e.target as HTMLImageElement).src = '/banners/banner1.png';
                  }}
                />
                <span
                  className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    b.active ? 'bg-emerald-500 text-white' : 'bg-slate-600 text-slate-200'
                  }`}
                >
                  {b.active ? 'Aktif' : 'Nonaktif'}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{b.altText}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 truncate">
                    Tautan: {b.targetLink}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => toggleActive(b)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#0052CC] cursor-pointer"
                  >
                    {b.active ? 'Nonaktifkan' : 'Aktifkan'}
                  </button>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => openEdit(b)}
                      className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC] hover:bg-blue-100 transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(b)}
                      className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                      title="Hapus"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {editing ? 'Edit Banner' : 'Tambah Banner Baru'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Judul / Teks Alternatif *
                </label>
                <input
                  type="text"
                  value={form.altText}
                  onChange={(e) => setForm({ ...form, altText: e.target.value })}
                  placeholder="Contoh: Promo KUR Mikro Bunga Rendah"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Tautan Target / Hash
                </label>
                <input
                  type="text"
                  value={form.targetLink}
                  onChange={(e) => setForm({ ...form, targetLink: e.target.value })}
                  placeholder="#tim-bisnis atau URL eksternal"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Gambar Banner *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={form.imageSrc}
                    onChange={(e) => setForm({ ...form, imageSrc: e.target.value })}
                    placeholder="URL gambar (https://... atau /banners/banner1.png)"
                    className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 cursor-pointer disabled:opacity-50"
                  >
                    {uploading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Upload className="w-3.5 h-3.5" />
                    )}
                    Upload
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {uploading && (
                  <div className="space-y-1">
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#0052CC] h-1.5 transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 text-right">
                      {uploadProgress}% sedang diunggahâ€¦
                    </p>
                  </div>
                )}

                {form.imageSrc && (
                  <div className="mt-2 rounded-xl overflow-hidden aspect-[21/9] bg-slate-100 border border-slate-200">
                    <img
                      src={form.imageSrc}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="bannerActive"
                  checked={form.active}
                  onChange={(e) => setForm({ ...form, active: e.target.checked })}
                  className="rounded text-[#0052CC] focus:ring-[#0052CC] cursor-pointer"
                />
                <label
                  htmlFor="bannerActive"
                  className="text-xs font-medium text-slate-700 cursor-pointer"
                >
                  Aktifkan banner ini dalam carousel
                </label>
              </div>

              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  Simpan Banner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TAB 2: DIREKTORI PETUGAS & RM (STAFF)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
interface StaffItem {
  id: string;
  name: string;
  role: string;
  segment: 'Funding' | 'Lending' | 'Mikro' | 'Collection' | 'CRR' | 'UB';
  phone: string;
  displayPhone: string;
  email: string;
  unitOffice: string;
  status: 'Tersedia' | 'Siap Konsultasi';
  specializations: string[];
  bio?: string;
  photoUrl?: string;
  photoStoragePath?: string;
}

function StaffManager({
  onShowToast,
}: {
  onShowToast: (msg: string, type: ToastInfo['type']) => void;
}) {
  // Always initialize with local cache so table is NEVER empty!
  const [staff, setStaff] = useState<StaffItem[]>(() => getLocalStaff());
  const [loading, setLoading] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [editing, setEditing] = useState<StaffItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [segmentFilter, setSegmentFilter] = useState('all');

  const initialForm: StaffItem = {
    id: '',
    name: '',
    role: 'Relationship Manager (RM)',
    segment: 'Lending',
    phone: '6281234567890',
    displayPhone: '0812-3456-7890',
    email: 'petugas@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    status: 'Tersedia',
    specializations: ['Kredit Komersial'],
    bio: '',
  };
  const [form, setForm] = useState<StaffItem>(initialForm);

  // Firestore real-time listener
  useEffect(() => {
    try {
      const q = query(collection(db, 'staff'));
      const unsub = onSnapshot(
        q,
        (snap) => {
          const fetched = snap.docs.map((d) => ({
            id: d.id,
            ...(d.data() as any),
          }));
          const merged = mergeStaffWithLocal(fetched) as unknown as StaffItem[];
          setStaff(merged);
          if (!snap.empty) saveLocalData('staff', merged);
          setLoading(false);
        },
        () => setLoading(false)
      );
      return unsub;
    } catch {
      setLoading(false);
    }
  }, []);

  const openNew = () => {
    setEditing(null);
    setForm(initialForm);
    setIsModalOpen(true);
  };

  const openEdit = (s: StaffItem) => {
    setEditing(s);
    setForm(s);
    setIsModalOpen(true);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setUploadingPhoto(true);
    try {
      const url = await uploadImageToCloudinary(file);
      setForm((prev) => ({ ...prev, photoUrl: url, photoStoragePath: '' }));
      onShowToast('Foto petugas berhasil diunggah ke Cloudinary.', 'success');
    } catch (err: any) {
      onShowToast('Gagal mengunggah foto: ' + (err.message || 'Error'), 'error');
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim()) {
      alert('Nama dan Jabatan wajib diisi.');
      return;
    }

    const isEdit = Boolean(editing && editing.id);
    const targetDocRef = isEdit
      ? doc(db, 'staff', editing!.id)
      : doc(collection(db, 'staff'));
    const targetId = targetDocRef.id;

    const payload: StaffItem = {
      ...form,
      id: targetId,
      phone: form.phone.replace(/[^0-9]/g, ''),
      displayPhone: form.displayPhone || form.phone,
    };

    // 1. Optimistic Local State Update immediately
    let updatedList: StaffItem[];
    if (isEdit) {
      updatedList = staff.map((s) => (s.id === targetId ? payload : s));
    } else {
      updatedList = [payload, ...staff];
    }
    setStaff(updatedList);
    saveLocalData('staff', updatedList);
    clearDeletedId('staff', targetId);

    // 2. Immediately close modal & reset form
    setIsModalOpen(false);
    setForm(initialForm);
    setEditing(null);

    // 3. Show clear success toast notification
    onShowToast(
      isEdit ? `Profil "${payload.name}" berhasil diperbarui!` : `Petugas baru "${payload.name}" berhasil ditambahkan!`,
      'success'
    );

    // 4. Background Firestore write with timeout (never hangs UI)
    (async () => {
      try {
        await withTimeout(
          setDoc(
            targetDocRef,
            {
              name: payload.name,
              role: payload.role,
              segment: payload.segment,
              phone: payload.phone,
              displayPhone: payload.displayPhone,
              email: payload.email,
              unitOffice: payload.unitOffice,
              status: payload.status,
              specializations: payload.specializations || [],
              bio: payload.bio || '',
              photoUrl: payload.photoUrl || '',
              updatedAt: serverTimestamp(),
              ...(isEdit ? {} : { createdAt: serverTimestamp() }),
            },
            { merge: true }
          ),
          8000
        );
      } catch (err: any) {
        console.warn('Firestore write warning:', err);
        onShowToast(
          'Catatan: Petugas disimpan di browser lokal (Sinkronisasi cloud Firestore tertunda: ' +
            (err.message || 'offline') +
            ')',
          'warning'
        );
      }
    })();
  };

  const handleDelete = async (s: StaffItem) => {
    if (!window.confirm(`Yakin hapus petugas "${s.name}"?`)) return;

    try {
      if (s.photoStoragePath) {
        await deleteObject(ref(storage, s.photoStoragePath)).catch(() => {});
      }
      await withTimeout(deleteDoc(doc(db, 'staff', s.id)), 8000);
    } catch (err: any) {
      console.warn('Gagal menghapus dari Firestore:', err);
    }

    const updated = staff.filter((item) => item.id !== s.id);
    setStaff(updated);
    saveLocalData('staff', updated);
    trackDeletedId('staff', s.id);
    onShowToast(`Petugas "${s.name}" berhasil dihapus.`, 'success');
  };

  const filtered = staff.filter((s) => {
    const matchesSegment = segmentFilter === 'all' || s.segment === segmentFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      s.name?.toLowerCase().includes(q) ||
      s.role?.toLowerCase().includes(q) ||
      s.unitOffice?.toLowerCase().includes(q);
    return matchesSegment && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Direktori Petugas &amp; Relationship Manager (RM)
          </h2>
          <p className="text-xs text-slate-500">
            Kelola profil RM Bisnis, Funding, Mikro, UB, dan kontak WhatsApp.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={openNew}
            className="px-4 py-2 rounded-xl bg-[#0052CC] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" /> Tambah Petugas
          </button>
        </div>
      </div>

      {/* Filter and search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama atau jabatan petugas..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
          />
        </div>
        <select
          value={segmentFilter}
          onChange={(e) => setSegmentFilter(e.target.value)}
          className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
        >
          <option value="all">Semua Segmen</option>
          <option value="Lending">Lending (SME &amp; Komersial)</option>
          <option value="Funding">Funding &amp; Transaksi</option>
          <option value="Mikro">Mikro (KUR &amp; Kupedes)</option>
          <option value="Collection">Collection &amp; CRR</option>
          <option value="UB">Universal Banker (UB)</option>
        </select>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400 space-y-2">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#0052CC]" />
          <p className="text-xs">Memuat data petugasâ€¦</p>
        </div>
      ) : staff.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
          <Users className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-700">Belum ada data petugas</p>
          <p className="text-xs text-slate-400">
            Klik "Tambah Petugas" untuk membuat profil RM baru.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">Nama Petugas</th>
                  <th className="px-4 py-3">Jabatan &amp; Segmen</th>
                  <th className="px-4 py-3">WhatsApp / Telepon</th>
                  <th className="px-4 py-3">Unit Kerja</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                      {s.name}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-semibold text-[#0052CC] block">{s.role}</span>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                        {s.segment}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <a
                        href={`https://wa.me/${s.phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-emerald-600" />
                        {s.displayPhone || s.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3.5 text-slate-500">{s.unitOffice}</td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openEdit(s)}
                          className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC] hover:bg-blue-100 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(s)}
                          className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {editing ? 'Edit Profil Petugas' : 'Tambah Petugas Baru'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Contoh: Andi Handika, S.E."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Jabatan *
                  </label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="Contoh: RM Komersial & SME"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Segmen Bisnis *
                  </label>
                  <select
                    value={form.segment}
                    onChange={(e) =>
                      setForm({ ...form, segment: e.target.value as any })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  >
                    <option value="Lending">Lending (SME/Komersial)</option>
                    <option value="Funding">Funding &amp; Transaksi</option>
                    <option value="Mikro">Mikro (KUR/Kupedes)</option>
                    <option value="Collection">Collection</option>
                    <option value="CRR">CRR (Restrukturisasi)</option>
                    <option value="UB">Universal Banker (UB)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    WhatsApp (Format 62...)
                  </label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="6281234567890"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Tampilan Nomor
                  </label>
                  <input
                    type="text"
                    value={form.displayPhone}
                    onChange={(e) =>
                      setForm({ ...form, displayPhone: e.target.value })
                    }
                    placeholder="0812-3456-7890"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="petugas@bri.co.id"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Unit Kerja
                  </label>
                  <input
                    type="text"
                    value={form.unitOffice}
                    onChange={(e) => setForm({ ...form, unitOffice: e.target.value })}
                    placeholder="KC Jakarta Jelambar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Foto Petugas
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                    {form.photoUrl ? (
                      <img src={form.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-slate-300" />
                    )}
                  </div>
                  <label className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer flex items-center gap-1.5">
                    {uploadingPhoto ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Upload className="w-3.5 h-3.5" />
                    )}
                    {uploadingPhoto ? 'Mengunggahâ€¦' : 'Pilih Foto'}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={uploadingPhoto}
                      onChange={handlePhotoUpload}
                    />
                  </label>
                  {form.photoUrl && (
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, photoUrl: '', photoStoragePath: '' })}
                      className="text-xs text-red-600 font-semibold hover:underline cursor-pointer"
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Spesialisasi Produk (Pisahkan koma)
                </label>
                <input
                  type="text"
                  value={form.specializations?.join(', ')}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      specializations: e.target.value
                        .split(',')
                        .map((s) => s.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="Kredit Investasi, KMK, Valas"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Simpan Petugas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TAB 3: STRUKTUR ORGANISASI
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
interface OrgItem {
  id: string;
  name: string;
  role: string;
  level: number;
  departmentName: string;
  departmentKey: 'leadership' | 'managers' | 'supervisors' | 'rm' | 'frontline_support';
  specialBadge?: string;
  phone?: string;
  jobdesk: string[];
  kpis?: string[];
}

function OrgManager({
  onShowToast,
}: {
  onShowToast: (msg: string, type: ToastInfo['type']) => void;
}) {
  // Always initialize with local cache so table is NEVER empty!
  const [org, setOrg] = useState<OrgItem[]>(() => getLocalOrg());
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<OrgItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const initialForm: OrgItem = {
    id: '',
    name: '',
    role: '',
    level: 2,
    departmentName: 'Manajer Operasional & Bisnis',
    departmentKey: 'managers',
    specialBadge: '',
    phone: '',
    jobdesk: [],
    kpis: [],
  };
  const [form, setForm] = useState<OrgItem>(initialForm);
  const [jobdeskText, setJobdeskText] = useState('');
  const [kpisText, setKpisText] = useState('');

  // Firestore real-time listener
  useEffect(() => {
    try {
      const q = query(collection(db, 'org_structure'));
      const unsub = onSnapshot(
        q,
        (snap) => {
          const fetched = snap.docs.map((d) => ({
            id: d.id,
            ...(d.data() as any),
          }));
          const merged = mergeOrgWithLocal(fetched) as unknown as OrgItem[];
          setOrg(merged);
          if (!snap.empty) saveLocalData('org_structure', merged);
          setLoading(false);
        },
        () => setLoading(false)
      );
      return unsub;
    } catch {
      setLoading(false);
    }
  }, []);

  const openNew = () => {
    setEditing(null);
    setForm(initialForm);
    setJobdeskText('');
    setKpisText('');
    setIsModalOpen(true);
  };

  const openEdit = (o: OrgItem) => {
    setEditing(o);
    setForm(o);
    setJobdeskText(o.jobdesk?.join('\n') || '');
    setKpisText(o.kpis?.join(', ') || '');
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim()) {
      alert('Nama dan Jabatan wajib diisi.');
      return;
    }

    const jobdeskParsed = jobdeskText
      .split('\n')
      .map((s) => s.trim().replace(/^[-*â€¢]\s*/, ''))
      .filter(Boolean);

    const kpisParsed = kpisText
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const isEdit = Boolean(editing && editing.id);
    const targetDocRef = isEdit
      ? doc(db, 'org_structure', editing!.id)
      : doc(collection(db, 'org_structure'));
    const targetId = targetDocRef.id;

    const payload: OrgItem = {
      ...form,
      id: targetId,
      level: Number(form.level),
      jobdesk: jobdeskParsed,
      kpis: kpisParsed,
    };

    // 1. Optimistic Local State Update immediately
    let updatedList: OrgItem[];
    if (isEdit) {
      updatedList = org.map((o) => (o.id === targetId ? payload : o));
    } else {
      updatedList = [payload, ...org];
    }
    updatedList.sort((a, b) => a.level - b.level);
    setOrg(updatedList);
    saveLocalData('org_structure', updatedList);
    clearDeletedId('org_structure', targetId);

    // 2. Immediately close modal & reset form
    setIsModalOpen(false);
    setForm(initialForm);
    setJobdeskText('');
    setKpisText('');
    setEditing(null);

    // 3. Show clear success toast notification
    onShowToast(
      isEdit
        ? `Data pejabat "${payload.name}" berhasil diperbarui!`
        : `Pejabat baru "${payload.name}" berhasil ditambahkan!`,
      'success'
    );

    // 4. Background Firestore write with timeout (never hangs UI)
    (async () => {
      try {
        await withTimeout(
          setDoc(
            targetDocRef,
            {
              name: payload.name,
              role: payload.role,
              level: payload.level,
              departmentName: payload.departmentName,
              departmentKey: payload.departmentKey,
              specialBadge: payload.specialBadge || '',
              phone: payload.phone || '',
              jobdesk: payload.jobdesk,
              kpis: payload.kpis || [],
              // Field sesuai skema PRD
              position: payload.role,
              division: payload.departmentName,
              badge: payload.specialBadge || '',
              kpi: payload.kpis || [],
              order: payload.level,
              levelCode: `L${payload.level}`,
              updatedAt: serverTimestamp(),
              ...(isEdit ? {} : { createdAt: serverTimestamp() }),
            },
            { merge: true }
          ),
          8000
        );
      } catch (err: any) {
        console.warn('Firestore write warning:', err);
        onShowToast(
          'Catatan: Pejabat disimpan di browser lokal (Sinkronisasi cloud Firestore tertunda: ' +
            (err.message || 'offline') +
            ')',
          'warning'
        );
      }
    })();
  };

  const handleDelete = async (o: OrgItem) => {
    if (!window.confirm(`Yakin hapus "${o.name}" dari struktur organisasi?`)) return;

    try {
      await withTimeout(deleteDoc(doc(db, 'org_structure', o.id)), 8000);
    } catch (err: any) {
      console.warn('Gagal menghapus dari Firestore:', err);
    }

    const updated = org.filter((item) => item.id !== o.id);
    setOrg(updated);
    saveLocalData('org_structure', updated);
    trackDeletedId('org_structure', o.id);
    onShowToast(`"${o.name}" berhasil dihapus dari struktur.`, 'success');
  };

  const filtered = org.filter((o) => {
    const matchesLevel = levelFilter === 'all' || String(o.level) === levelFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      o.name?.toLowerCase().includes(q) ||
      o.role?.toLowerCase().includes(q) ||
      o.departmentName?.toLowerCase().includes(q);
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Bagan Struktur Organisasi</h2>
          <p className="text-xs text-slate-500">
            Kelola jajaran pimpinan, manajer, supervisor, dan rincian tugas pokok (jobdesk).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={openNew}
            className="px-4 py-2 rounded-xl bg-[#0052CC] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" /> Tambah Pejabat
          </button>
        </div>
      </div>

      {/* Filter and search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama pejabat atau jabatan..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
          />
        </div>
        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
        >
          <option value="all">Semua Level Hierarki</option>
          <option value="1">Level 1: Pimpinan Cabang</option>
          <option value="2">Level 2: Manajer Bidang</option>
          <option value="3">Level 3: Supervisor</option>
          <option value="4">Level 4: Relationship Manager (RM)</option>
          <option value="5">Level 5: Layanan &amp; Penunjang</option>
        </select>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400 space-y-2">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#0052CC]" />
          <p className="text-xs">Memuat struktur organisasiâ€¦</p>
        </div>
      ) : org.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
          <Network className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-700">Belum ada struktur organisasi</p>
          <p className="text-xs text-slate-400">
            Klik "Tambah Pejabat" untuk menambahkan bagan pimpinan.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Nama Pejabat</th>
                  <th className="px-4 py-3">Jabatan &amp; Divisi</th>
                  <th className="px-4 py-3">Tugas Pokok (Jobdesk)</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((o) => (
                  <tr key={o.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-[#0052CC]">
                        Lvl {o.level}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                      {o.name}
                      {o.specialBadge && (
                        <span className="block text-[10px] font-medium text-amber-600">
                          {o.specialBadge}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-semibold text-slate-900 block">{o.role}</span>
                      <span className="text-slate-400 text-[11px]">{o.departmentName}</span>
                    </td>
                    <td className="px-4 py-3.5 max-w-xs truncate text-slate-500">
                      {o.jobdesk?.length || 0} butir tugas pokok
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openEdit(o)}
                          className="p-1.5 rounded-lg bg-blue-50 text-[#0052CC] hover:bg-blue-100 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(o)}
                          className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                {editing ? 'Edit Profil Pejabat' : 'Tambah Pejabat Baru'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Nama Lengkap Pejabat *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Contoh: Budi Santoso, S.E., M.M."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Jabatan Resmi *
                </label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="Contoh: Pemimpin Cabang (Branch Manager)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Level Hierarki *
                  </label>
                  <select
                    value={form.level}
                    onChange={(e) =>
                      setForm({ ...form, level: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  >
                    <option value={1}>Level 1: Pimpinan Cabang</option>
                    <option value={2}>Level 2: Manajer Bidang</option>
                    <option value={3}>Level 3: Supervisor</option>
                    <option value={4}>Level 4: Relationship Manager</option>
                    <option value={5}>Level 5: Layanan &amp; Penunjang</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Kategori Divisi
                  </label>
                  <select
                    value={form.departmentKey}
                    onChange={(e) =>
                      setForm({ ...form, departmentKey: e.target.value as any })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  >
                    <option value="leadership">Pimpinan Cabang</option>
                    <option value="managers">Manajer Operasional &amp; Bisnis</option>
                    <option value="supervisors">Supervisor Bidang</option>
                    <option value="rm">Relationship Manager</option>
                    <option value="frontline_support">Layanan Frontline &amp; Operasional</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Nama Divisi / Bagian
                  </label>
                  <input
                    type="text"
                    value={form.departmentName}
                    onChange={(e) =>
                      setForm({ ...form, departmentName: e.target.value })
                    }
                    placeholder="Contoh: Pimpinan Kantor Cabang"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Badge Khusus (Opsional)
                  </label>
                  <input
                    type="text"
                    value={form.specialBadge}
                    onChange={(e) =>
                      setForm({ ...form, specialBadge: e.target.value })
                    }
                    placeholder="Contoh: Pemimpin Cabang"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Kontak WhatsApp (Opsional)
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="6281234567890"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Tugas Pokok &amp; Fungsi (Jobdesk) â€” Pisahkan dengan Baris Baru
                </label>
                <textarea
                  rows={4}
                  value={jobdeskText}
                  onChange={(e) => setJobdeskText(e.target.value)}
                  placeholder="â€¢ Memimpin operasional kantor cabang&#10;â€¢ Menetapkan strategi pencapaian target bisnis"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0052CC] font-mono leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Indikator Kinerja Utama (KPI) â€” Pisahkan dengan koma
                </label>
                <input
                  type="text"
                  value={kpisText}
                  onChange={(e) => setKpisText(e.target.value)}
                  placeholder="Target Penyaluran Kredit, NPL < 1.5%, Service Excellence"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Simpan Pejabat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// TAB 4: KELOLA AKTIVITAS & BERITA (NEWS / CSR / EVENTS)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
interface ArticleItem {
  id: string;
  title: string;
  category: string;
  publishDate: any;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageStoragePath?: string;
  author?: string;
}

const ARTICLE_CATEGORIES = ['Kegiatan Cabang', 'CSR', 'Pengumuman', 'Edukasi Nasabah'];

function ActivitiesManager({
  onShowToast,
}: {
  onShowToast: (msg: string, type: ToastInfo['type']) => void;
}) {
  // Always initialize with local cache so table is NEVER empty!
  const [articles, setArticles] = useState<ArticleItem[]>(() => getLocalActivities());
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'list' | 'new' | 'edit'>('list');
  const [editing, setEditing] = useState<ArticleItem | null>(null);

  const initialForm: ArticleItem = {
    id: '',
    title: '',
    category: ARTICLE_CATEGORIES[0],
    publishDate: new Date().toISOString().split('T')[0],
    excerpt: '',
    content: '',
    imageUrl: '',
    author: 'Tim Humas BRI KC Jelambar',
  };
  const [form, setForm] = useState<ArticleItem>(initialForm);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Firestore real-time listener
  useEffect(() => {
    try {
      const q = query(collection(db, 'activities'), orderBy('publishDate', 'desc'));
      const unsub = onSnapshot(
        q,
        (snap) => {
          if (!snap.empty) {
            const fetched = snap.docs.map((d) => ({
              id: d.id,
              ...(d.data() as any),
            }));
            setArticles(fetched);
            saveLocalData('activities', fetched);
          }
          setLoading(false);
        },
        () => setLoading(false)
      );
      return unsub;
    } catch {
      setLoading(false);
    }
  }, []);

  const [deletingId, setDeletingId] = useState<string | null>(null);

  const openNew = () => {
    setEditing(null);
    setForm(initialForm);
    setUploadProgress(0);
    setView('new');
  };

  const openEdit = (art: ArticleItem) => {
    setEditing(art);
    setForm({
      ...art,
      publishDate: formatInputDate(art.publishDate),
    });
    setUploadProgress(0);
    setView('edit');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadProgress(30);

    try {
      const url = await uploadImageToCloudinary(file);
      setUploadProgress(100);
      setForm((prev) => ({ ...prev, imageUrl: url, imageStoragePath: '' }));
      onShowToast('Foto artikel berhasil diunggah ke Cloudinary.', 'success');
    } catch (err: any) {
      setUploadProgress(0);
      onShowToast('Gagal mengunggah gambar: ' + (err.message || 'Error'), 'error');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving || uploading) return;
    if (!form.title.trim()) {
      onShowToast('Judul artikel wajib diisi.', 'error');
      return;
    }

    const isEdit = Boolean(editing && editing.id);
    const targetDocRef = isEdit
      ? doc(db, 'activities', editing!.id)
      : doc(collection(db, 'activities'));
    const targetId = targetDocRef.id;

    const payload: ArticleItem = {
      ...form,
      id: targetId,
      publishDate: formatInputDate(form.publishDate),
    };

    setSaving(true);
    try {
      await withTimeout(
        setDoc(
          targetDocRef,
          {
            title: payload.title,
            category: payload.category,
            publishDate: parseSafeDate(payload.publishDate),
            excerpt: payload.excerpt || '',
            content: payload.content || '',
            imageUrl: payload.imageUrl || '',
            author: payload.author || '',
            updatedAt: serverTimestamp(),
            ...(isEdit ? {} : { createdAt: serverTimestamp() }),
          },
          { merge: true }
        ),
        10000
      );

      // Sinkronkan cache lokal hanya setelah Firestore sukses
      const updatedList = isEdit
        ? articles.map((a) => (a.id === targetId ? payload : a))
        : [payload, ...articles.filter((a) => a.id !== targetId)];
      setArticles(updatedList);
      saveLocalData('activities', updatedList);
      clearDeletedId('activities', targetId);

      setView('list');
      setForm(initialForm);
      setEditing(null);
      onShowToast(
        isEdit
          ? `Artikel "${payload.title}" berhasil diperbarui!`
          : `Artikel "${payload.title}" berhasil diterbitkan!`,
        'success'
      );
    } catch (err: any) {
      console.error('Firestore write error:', err);
      onShowToast('Gagal menyimpan artikel ke Firestore: ' + (err.message || 'error'), 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (art: ArticleItem) => {
    if (!art.id || deletingId) return;
    if (!window.confirm(`Yakin ingin menghapus artikel "${art.title}"?`)) return;

    setDeletingId(art.id);
    try {
      await withTimeout(deleteDoc(doc(db, 'activities', art.id)), 10000);

      const updated = articles.filter((item) => item.id !== art.id);
      setArticles(updated);
      saveLocalData('activities', updated);
      trackDeletedId('activities', art.id);

      onShowToast(`Artikel "${art.title}" berhasil dihapus permanen.`, 'success');
    } catch (err: any) {
      console.error('Firestore delete error:', err);
      onShowToast(`Gagal menghapus artikel dari Firestore: ${err.message || 'error'}`, 'error');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Manajemen Warta, CSR &amp; Aktivitas</h2>
          <p className="text-xs text-slate-500">
            Artikel yang diterbitkan di sini langsung tampil secara real-time di halaman Aktivitas publik.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {view === 'list' ? (
            <button
              onClick={openNew}
              className="px-4 py-2 rounded-xl bg-[#0052CC] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-4 h-4" /> Tulis Artikel Baru
            </button>
          ) : (
            <button
              onClick={() => {
                setView('list');
                setEditing(null);
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar
            </button>
          )}
        </div>
      </div>

      {view !== 'list' ? (
        /* Form Tulis / Edit */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <form onSubmit={handleSave} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Judul Artikel *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Contoh: Penyaluran Bantuan CSR TJSL Peduli Lingkungan"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Kategori *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                >
                  {ARTICLE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Tanggal Publikasi
                </label>
                <input
                  type="date"
                  value={form.publishDate}
                  onChange={(e) => setForm({ ...form, publishDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Penulis / Humas
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder="Tim Humas BRI KC Jelambar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Ringkasan / Excerpt
              </label>
              <textarea
                rows={2}
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                placeholder="Rangkuman singkat yang menarik untuk tampilan kartu preview berita..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Konten Lengkap Berita
              </label>
              <textarea
                rows={8}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Tuliskan berita lengkap di sini (mendukung paragraf)..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC] leading-relaxed"
              />
            </div>

            {/* Foto Artikel */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Foto Dokumentasi / Thumbnail
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  placeholder="URL gambar (https://... atau /activities/news.jpg)"
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 cursor-pointer disabled:opacity-50"
                >
                  {uploading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Upload className="w-3.5 h-3.5" />
                  )}
                  Upload Foto
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {uploading && (
                <div className="space-y-1">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#0052CC] h-1.5 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 text-right">
                    {uploadProgress}% sedang diunggahâ€¦
                  </p>
                </div>
              )}

              {form.imageUrl && (
                <div className="relative mt-2 rounded-xl overflow-hidden aspect-[16/9] max-h-56 bg-slate-100 border border-slate-200">
                  <img
                    src={form.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, imageUrl: '' })}
                    className="absolute top-2 right-2 p-1 rounded-full bg-white/90 text-slate-600 hover:text-red-600 shadow cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setView('list');
                  setEditing(null);
                }}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={uploading || saving}
                className="flex-1 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{saving ? 'Menyimpan...' : 'Terbitkan Artikel'}</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* List View */
        <div>
          {loading ? (
            <div className="py-20 text-center text-slate-400 space-y-2">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#0052CC]" />
              <p className="text-xs">Memuat warta artikelâ€¦</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
              <Newspaper className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-bold text-slate-700">Belum ada artikel warta</p>
              <p className="text-xs text-slate-400">
                Klik tombol "Tulis Artikel Baru" di atas untuk membuat artikel baru.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="p-4 sm:p-5 flex items-start gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="w-20 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                    {art.imageUrl ? (
                      <img
                        src={art.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/activities/activity1.jpg';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#0052CC]">
                      {art.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-1">
                      {art.title}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {formatDisplayDate(art.publishDate)}
                    </p>
                    {art.excerpt && (
                      <p className="text-xs text-slate-500 line-clamp-1">{art.excerpt}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => openEdit(art)}
                      className="p-2 rounded-lg bg-blue-50 text-[#0052CC] hover:bg-blue-100 transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(art)}
                      disabled={deletingId === art.id}
                      className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer disabled:opacity-50"
                      title="Hapus"
                    >
                      {deletingId === art.id ? (
                        <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// MAIN DASHBOARD SHELL WITH TAB SWITCHER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
type AdminTab = 'banners' | 'staff' | 'org' | 'activities';

function Dashboard({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [activeTab, setActiveTab] = useState<AdminTab>('banners');
  const [toasts, setToasts] = useState<ToastInfo[]>([]);
  const [syncing, setSyncing] = useState(false);
  const [firestoreStatus, setFirestoreStatus] = useState<
    'checking' | 'active' | 'offline_mode'
  >('checking');

  const showToast = (message: string, type: ToastInfo['type'] = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auto-seed and check Firestore connectivity on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await autoSeedFirestore(false);
        if (mounted) {
          if (res.success) {
            setFirestoreStatus('active');
          } else {
            setFirestoreStatus('offline_mode');
          }
        }
      } catch {
        if (mounted) setFirestoreStatus('offline_mode');
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleManualSync = async () => {
    setSyncing(true);
    try {
      const res = await autoSeedFirestore(true);
      if (res.success) {
        showToast('Sinkronisasi ke Cloud Firestore berhasil!', 'success');
        setFirestoreStatus('active');
      } else {
        showToast(
          'Catatan: ' +
            res.message +
            '. Seluruh data tetap tersimpan & aktif di browser lokal.',
          'warning'
        );
        setFirestoreStatus('offline_mode');
      }
    } catch (err: any) {
      showToast('Gagal sinkronisasi: ' + err.message, 'error');
    } finally {
      setSyncing(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('kc_admin_unlocked');
    onNavigateHome();
  };

  const tabs = [
    { id: 'banners' as AdminTab, label: 'Hero Banners', icon: ImageLucide },
    { id: 'staff' as AdminTab, label: 'Direktori Petugas & RM', icon: Users },
    { id: 'org' as AdminTab, label: 'Struktur Organisasi', icon: Network },
    { id: 'activities' as AdminTab, label: 'Kelola Warta & Berita', icon: Newspaper },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      {/* Top Header */}
      <header className="bg-[#071A36] text-white px-4 sm:px-6 py-4 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#F37021] rounded-xl flex items-center justify-center shadow-xs">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-extrabold tracking-tight">
                  Admin &amp; CMS Panel
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#0052CC] text-white uppercase tracking-wider">
                  Headless CMS
                </span>
              </div>
              <p className="text-[10px] text-blue-200">
                PT Bank Rakyat Indonesia (Persero) Tbk â€” KC Jakarta Jelambar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleManualSync}
              disabled={syncing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
              title="Sinkronkan data default ke Cloud Firestore"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
              <span className="hidden md:inline">
                {syncing ? 'Menyinkronkanâ€¦' : 'Sinkronkan Data'}
              </span>
            </button>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Portal Publik</span>
            </button>

            <div className="h-4 w-px bg-white/20 hidden sm:block" />

            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Cloud Connectivity Status Alert Banner */}
      {firestoreStatus === 'offline_mode' && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs text-amber-900">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Mode Sinkronisasi Lokal Aktif:</strong> Data portal ditampilkan &amp;
                tersimpan secara instan di browser. Untuk mengaktifkan sinkronisasi Cloud Firestore
                lintas perangkat, aktifkan Firestore API dan perbarui aturan di Firebase Console.
              </span>
            </div>
            <a
              href="https://console.firebase.google.com/project/kc-jakarta-jelambar-b10d7/firestore"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0052CC] hover:underline shrink-0"
            >
              <span>Buka Firebase Console</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0052CC] text-white shadow-sm shadow-blue-600/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'banners' && <BannerManager onShowToast={showToast} />}
        {activeTab === 'staff' && <StaffManager onShowToast={showToast} />}
        {activeTab === 'org' && <OrgManager onShowToast={showToast} />}
        {activeTab === 'activities' && <ActivitiesManager onShowToast={showToast} />}
      </div>
    </div>
  );
}

// â”€â”€â”€ Route Entry Point â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function AdminPage({ onNavigateHome }: AdminPageProps) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('kc_admin_unlocked') === '1'
  );

  if (!unlocked) {
    return (
      <PinGuard
        onUnlock={() => setUnlocked(true)}
        onNavigateHome={onNavigateHome}
      />
    );
  }
  return <Dashboard onNavigateHome={onNavigateHome} />;
}
