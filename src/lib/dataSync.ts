import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  limit,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from './firebase';
import { bannerSlides } from '../components/HeroCarousel';
import { teamMembers } from '../data/team';
import { organizationData } from '../data/organizationData';
import { activitiesData } from '../data/activitiesData';

// ─── Promise Timeout Helper ──────────────────────────────────────────────────
export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = 8000,
  errorMsg: string = 'Koneksi Firestore/Storage melebihi batas waktu (timeout).'
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(errorMsg)), timeoutMs)
    ),
  ]);
}

// ─── Universal Safe Date Parser & Formatters ─────────────────────────────────
const ID_MONTHS: Record<string, string> = {
  januari: 'January',
  februari: 'February',
  maret: 'March',
  april: 'April',
  mei: 'May',
  juni: 'June',
  juli: 'July',
  agustus: 'August',
  september: 'September',
  oktober: 'October',
  november: 'November',
  desember: 'December',
};

export function parseSafeDate(val: any): Date {
  if (!val) return new Date();

  // 1. Already a Date object
  if (val instanceof Date) {
    return isNaN(val.getTime()) ? new Date() : val;
  }

  // 2. Firestore Timestamp
  if (typeof val?.toDate === 'function') {
    try {
      const d = val.toDate();
      if (d instanceof Date && !isNaN(d.getTime())) return d;
    } catch {}
  }

  // 3. Numeric timestamp
  if (typeof val === 'number') {
    const d = val < 1e11 ? new Date(val * 1000) : new Date(val);
    if (!isNaN(d.getTime())) return d;
  }

  // 4. String format
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (!trimmed) return new Date();

    // Standard ISO parse
    const direct = new Date(trimmed);
    if (!isNaN(direct.getTime())) return direct;

    // Convert Indonesian month names (e.g., "18 Agustus 2026")
    let converted = trimmed.toLowerCase();
    for (const [idM, enM] of Object.entries(ID_MONTHS)) {
      if (converted.includes(idM)) {
        converted = converted.replace(idM, enM);
        const parsed = new Date(converted);
        if (!isNaN(parsed.getTime())) return parsed;
      }
    }

    // Match DD/MM/YYYY or DD-MM-YYYY
    const parts = trimmed.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (parts) {
      const d = new Date(parseInt(parts[3], 10), parseInt(parts[2], 10) - 1, parseInt(parts[1], 10));
      if (!isNaN(d.getTime())) return d;
    }
  }

  return new Date();
}

export function formatDisplayDate(val: any, format: 'short' | 'long' = 'short'): string {
  const d = parseSafeDate(val);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: format === 'long' ? 'long' : 'short',
    year: 'numeric',
  });
}

export function formatInputDate(val: any): string {
  const d = parseSafeDate(val);
  return d.toISOString().split('T')[0];
}

// ─── Local Storage Keys ──────────────────────────────────────────────────────
const STORAGE_KEYS = {
  banners: 'kc_cache_banners',
  staff: 'kc_cache_staff',
  org_structure: 'kc_cache_org_structure',
  activities: 'kc_cache_activities',
};

const DELETED_KEYS = {
  banners: 'kc_deleted_banners',
  staff: 'kc_deleted_staff',
  org_structure: 'kc_deleted_org',
  activities: 'kc_deleted_activities',
};

// ─── Tracking Deleted Items ──────────────────────────────────────────────────
export function getDeletedIds(collectionName: string): string[] {
  try {
    const key = (DELETED_KEYS as any)[collectionName];
    if (key) {
      const stored = localStorage.getItem(key);
      if (stored) return JSON.parse(stored);
    }
  } catch {}
  return [];
}

export function trackDeletedId(collectionName: string, id: string) {
  try {
    const key = (DELETED_KEYS as any)[collectionName];
    if (key && id) {
      const existing = getDeletedIds(collectionName);
      if (!existing.includes(id)) {
        existing.push(id);
        localStorage.setItem(key, JSON.stringify(existing));
      }
    }
  } catch {}
}

export function clearDeletedId(collectionName: string, id: string) {
  try {
    const key = (DELETED_KEYS as any)[collectionName];
    if (key && id) {
      const existing = getDeletedIds(collectionName).filter((i) => i !== id);
      localStorage.setItem(key, JSON.stringify(existing));
    }
  } catch {}
}

// ─── Broadcast Event for Cross-Component Sync ─────────────────────────────────
export function notifyDataChanged(collectionName: string) {
  try {
    window.dispatchEvent(
      new CustomEvent('kc_data_sync', {
        detail: { collection: collectionName, timestamp: Date.now() },
      })
    );
  } catch {
    // Non-browser env guard
  }
}

// ─── Local Cache Getters ─────────────────────────────────────────────────────
export function getLocalBanners() {
  const deletedIds = getDeletedIds('banners');
  try {
    const cached = localStorage.getItem(STORAGE_KEYS.banners);
    if (cached !== null) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) {
        return parsed.filter((b) => !deletedIds.includes(String(b.id)));
      }
    }
  } catch {}
  return bannerSlides
    .filter((b) => !deletedIds.includes(String(b.id)))
    .map((b) => ({
      id: String(b.id),
      altText: b.altText,
      imageSrc: b.imageSrc,
      targetLink: b.targetLink,
      active: b.active !== false,
    }));
}

// ─── Normalizers & Merge (local file data is the complete baseline) ──────────
function stripEmpty(obj: any): any {
  const out: any = {};
  Object.keys(obj || {}).forEach((k) => {
    const v = obj[k];
    if (v !== undefined && v !== null) out[k] = v;
  });
  return out;
}

function makeInitials(name: string): string {
  const parts = String(name || '')
    .replace(/^(Bpk\.|Ibu\.|Dr\.|Drs\.|Ir\.|H\.|Hj\.)\s+/i, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return 'KC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function normalizeOrgPerson(p: any): any {
  const level = [1, 2, 3, 4, 5].includes(Number(p.level)) ? Number(p.level) : 5;
  const text = `${p.departmentName || ''} ${p.role || ''} ${p.groupCategory || ''}`.toLowerCase();

  let departmentKey = p.departmentKey;
  if (!['leadership', 'managers', 'supervisors', 'rm', 'frontline_support'].includes(departmentKey)) {
    departmentKey = ['leadership', 'managers', 'supervisors', 'rm', 'frontline_support'][level - 1];
  }

  let groupCategory = p.groupCategory;
  if (level === 4 && !['sme', 'crr', 'funding', 'mikro'].includes(groupCategory)) {
    if (/crr|collection|lelang|recovery/.test(text)) groupCategory = 'crr';
    else if (/funding|rmft|dana|giro/.test(text)) groupCategory = 'funding';
    else if (/mikro|kur|kupedes/.test(text)) groupCategory = 'mikro';
    else groupCategory = 'sme';
  } else if (
    level === 5 &&
    !['banking_hall', 'adk_murni', 'admin_mikro_agen', 'backoffice_it'].includes(groupCategory)
  ) {
    if (/adk|administrasi kredit/.test(text)) groupCategory = 'adk_murni';
    else if (/mikro|agen|brilink/.test(text)) groupCategory = 'admin_mikro_agen';
    else if (/backoffice|\bit\b|penunjang|sekretaris|arsip|pelaporan/.test(text)) groupCategory = 'backoffice_it';
    else groupCategory = 'banking_hall';
  }

  return {
    ...p,
    level,
    departmentKey,
    ...(groupCategory ? { groupCategory } : {}),
    initials: p.initials || makeInitials(p.name),
    jobdesk: Array.isArray(p.jobdesk) ? p.jobdesk : [],
    kpis: Array.isArray(p.kpis) ? p.kpis : Array.isArray(p.kpi) ? p.kpi : Array.isArray(p.kpis_) ? p.kpis_ : [],
  };
}

export function normalizeStaffMember(m: any): any {
  const text = `${m.segment || ''} ${m.role || ''}`.toLowerCase();
  let segment = m.segment;
  if (!['Funding', 'Lending', 'Mikro', 'Collection', 'CRR', 'UB'].includes(segment)) {
    if (/funding|rmft/.test(text)) segment = 'Funding';
    else if (/mikro/.test(text)) segment = 'Mikro';
    else if (/crr/.test(text)) segment = 'CRR';
    else if (/collection/.test(text)) segment = 'Collection';
    else if (/universal|ub|frontliner/.test(text)) segment = 'UB';
    else segment = 'Lending';
  }
  return {
    ...m,
    segment,
    phone: String(m.phone || ''),
    displayPhone: m.displayPhone || String(m.phone || ''),
    email: m.email || '',
    unitOffice: m.unitOffice || 'KC Jakarta Jelambar',
    status: m.status || 'Tersedia',
    specializations: Array.isArray(m.specializations) ? m.specializations : [],
  };
}

function mergeById(base: any[], remote: any[], deletedIds: string[], normalize: (x: any) => any): any[] {
  const remoteMap = new Map<string, any>();
  (remote || []).forEach((r) => r && r.id && remoteMap.set(String(r.id), r));
  const result: any[] = [];
  const seen = new Set<string>();
  base.forEach((b) => {
    const id = String(b.id);
    seen.add(id);
    if (deletedIds.includes(id)) return;
    result.push(normalize({ ...b, ...stripEmpty(remoteMap.get(id)) }));
  });
  remoteMap.forEach((r, id) => {
    if (seen.has(id) || deletedIds.includes(id)) return;
    result.push(normalize(r));
  });
  return result;
}

function readCache(key: string): any[] {
  try {
    const cached = localStorage.getItem(key);
    if (cached !== null) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

/** Gabungkan data Firestore (bisa kosong/parsial) dengan seluruh data lokal. Tidak pernah mengembalikan array kosong selama data lokal ada. */
export function mergeStaffWithLocal(remote: any[] = []) {
  const deleted = getDeletedIds('staff');
  const base = mergeById(teamMembers as any[], readCache(STORAGE_KEYS.staff), deleted, normalizeStaffMember);
  return mergeById(base, remote, deleted, normalizeStaffMember);
}

export function mergeOrgWithLocal(remote: any[] = []) {
  const deleted = getDeletedIds('org_structure');
  const base = mergeById(organizationData as any[], readCache(STORAGE_KEYS.org_structure), deleted, normalizeOrgPerson);
  const merged = mergeById(base, remote, deleted, normalizeOrgPerson);
  merged.sort((a, b) => a.level - b.level);
  return merged;
}

export function getLocalStaff() {
  return mergeStaffWithLocal([]);
}

export function getLocalOrg() {
  return mergeOrgWithLocal([]);
}

export function getLocalActivities() {
  const deletedIds = getDeletedIds('activities');
  try {
    const cached = localStorage.getItem(STORAGE_KEYS.activities);
    if (cached !== null) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) {
        return parsed.filter((a) => !deletedIds.includes(a.id));
      }
    }
  } catch {}
  return activitiesData
    .filter((a) => !deletedIds.includes(a.id))
    .map((a) => ({
      id: a.id,
      title: a.title,
      category: a.categoryLabel || a.category,
      publishDate: formatInputDate(a.date), // Always valid ISO date string YYYY-MM-DD
      excerpt: a.excerpt,
      content: Array.isArray(a.content) ? a.content.join('\n\n') : String(a.content || ''),
      imageUrl: a.image,
      author: a.author,
      tags: a.tags || [],
    }));
}

export function saveLocalData(collectionName: string, items: any[]) {
  try {
    const key = (STORAGE_KEYS as any)[collectionName];
    if (key) {
      localStorage.setItem(key, JSON.stringify(items));
      notifyDataChanged(collectionName);
    }
  } catch (err) {
    console.warn('Gagal menyimpan ke localStorage:', err);
  }
}

// ─── Image Upload with Progress & Timeout & Base64 Fallback ──────────────────
export async function uploadImageWithFallback(
  folder: string,
  file: File,
  onProgress?: (pct: number) => void
): Promise<{ url: string; storagePath?: string; fallbackUsed: boolean; error?: string }> {
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const path = `${folder}/${Date.now()}_${safeName}`;
  const storageRef = ref(storage, path);

  if (onProgress) onProgress(20);

  try {
    const uploadPromise = uploadBytes(storageRef, file);
    if (onProgress) onProgress(50);

    const snapshot = await withTimeout(
      uploadPromise,
      12000,
      'Unggah ke Firebase Storage melebihi batas waktu (12 detik).'
    );

    if (onProgress) onProgress(80);
    const url = await getDownloadURL(snapshot.ref);
    if (onProgress) onProgress(100);

    return { url, storagePath: path, fallbackUsed: false };
  } catch (err: any) {
    console.warn('Firebase Storage upload gagal atau offline, menggunakan fallback data URL:', err);

    const dataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
    });

    if (onProgress) onProgress(100);

    return {
      url: dataUrl,
      fallbackUsed: true,
      error: err?.message || 'Storage error',
    };
  }
}

// ─── Automatic Firestore Seeding Routine with Persistent Flags ───────────────
export async function autoSeedFirestore(force: boolean = false): Promise<{
  success: boolean;
  seededCount: number;
  message: string;
}> {
  let seededCount = 0;
  let hadErrors = false;
  const errors: string[] = [];

  // Check persistent metadata document in Firestore
  let metadata: Record<string, any> = {};
  if (!force) {
    try {
      const metaSnap = await withTimeout(getDoc(doc(db, '_metadata', 'system')), 4000);
      if (metaSnap.exists()) {
        metadata = metaSnap.data() || {};
      }
    } catch {
      // Offline or permission issue, check local storage flags
    }
  }

  // Helper to check if a collection was already seeded
  const wasSeeded = (colName: string): boolean => {
    if (force) return false;
    if (localStorage.getItem(`kc_seeded_${colName}`) === 'true') return true;
    if (metadata[`${colName}_seeded`] === true) {
      localStorage.setItem(`kc_seeded_${colName}`, 'true');
      return true;
    }
    return false;
  };

  // 1. Banners
  try {
    if (!wasSeeded('banners')) {
      const deletedBanners = getDeletedIds('banners');
      for (const b of bannerSlides) {
        if (deletedBanners.includes(String(b.id))) continue;
        try {
          await withTimeout(
            setDoc(doc(db, 'banners', String(b.id)), {
              altText: b.altText,
              imageSrc: b.imageSrc,
              targetLink: b.targetLink,
              active: b.active !== false,
              createdAt: serverTimestamp(),
              isDefault: true,
            }),
            5000
          );
          seededCount++;
        } catch (e: any) {
          errors.push(`Banner: ${e.message}`);
          hadErrors = true;
          break;
        }
      }
      localStorage.setItem('kc_seeded_banners', 'true');
      setDoc(doc(db, '_metadata', 'system'), { banners_seeded: true }, { merge: true }).catch(() => {});
    }
  } catch (e: any) {
    errors.push(`Banners: ${e.message}`);
  }

  // 2 & 3. Staff + Org Structure: sinkronkan SELURUH data lokal.
  // - dokumen yang belum ada di Firestore dibuat lengkap
  // - dokumen lama (seed parsial) dilengkapi field yang hilang tanpa menimpa hasil edit admin
  const syncFull = async (
    colName: 'staff' | 'org_structure',
    items: any[],
    normalize: (x: any) => any,
    label: string
  ) => {
    try {
      const deleted = getDeletedIds(colName);
      let existing = new Map<string, any>();
      try {
        const snap = await withTimeout(getDocs(collection(db, colName)), 6000);
        snap.docs.forEach((d) => existing.set(d.id, d.data()));
      } catch (e: any) {
        errors.push(`${label}: tidak dapat membaca Firestore (${e.message})`);
        hadErrors = true;
        return;
      }

      for (const raw of items) {
        if (deleted.includes(String(raw.id))) continue;
        const full = JSON.parse(JSON.stringify(normalize(raw)));
        const { id, ...fields } = full;
        const current = existing.get(String(id));
        try {
          if (!current) {
            await withTimeout(
              setDoc(doc(db, colName, String(id)), {
                ...fields,
                createdAt: serverTimestamp(),
                isDefault: true,
              }),
              5000
            );
            seededCount++;
          } else {
            const missing: Record<string, any> = {};
            Object.keys(fields).forEach((k) => {
              if (current[k] === undefined || current[k] === null) missing[k] = fields[k];
            });
            if (Object.keys(missing).length > 0) {
              await withTimeout(setDoc(doc(db, colName, String(id)), missing, { merge: true }), 5000);
              seededCount++;
            }
          }
        } catch (e: any) {
          errors.push(`${label}: ${e.message}`);
          hadErrors = true;
          break;
        }
      }
      localStorage.setItem(`kc_seeded_${colName}`, 'true');
      setDoc(doc(db, '_metadata', 'system'), { [`${colName}_seeded`]: true }, { merge: true }).catch(() => {});
    } catch (e: any) {
      errors.push(`${label}: ${e.message}`);
    }
  };

  await syncFull('staff', teamMembers as any[], normalizeStaffMember, 'Staff');
  await syncFull('org_structure', organizationData as any[], normalizeOrgPerson, 'Org');

  // 4. Activities / Warta
  try {
    if (!wasSeeded('activities')) {
      const deletedActs = getDeletedIds('activities');
      for (const a of activitiesData) {
        // Crucial: if user previously deleted this article, DO NOT re-seed it!
        if (deletedActs.includes(a.id)) continue;

        try {
          const parsedDate = parseSafeDate(a.date);
          await withTimeout(
            setDoc(doc(db, 'activities', a.id), {
              title: a.title,
              category: a.categoryLabel || a.category,
              publishDate: parsedDate,
              excerpt: a.excerpt,
              content: Array.isArray(a.content) ? a.content.join('\n\n') : String(a.content || ''),
              imageUrl: a.image,
              author: a.author,
              tags: a.tags || [],
              createdAt: serverTimestamp(),
              isDefault: true,
            }),
            5000
          );
          seededCount++;
        } catch (e: any) {
          errors.push(`Activities: ${e.message}`);
          hadErrors = true;
          break;
        }
      }
      localStorage.setItem('kc_seeded_activities', 'true');
      setDoc(doc(db, '_metadata', 'system'), { activities_seeded: true }, { merge: true }).catch(() => {});
    }
  } catch (e: any) {
    errors.push(`Activities: ${e.message}`);
  }

  return {
    success: !hadErrors,
    seededCount,
    message: hadErrors
      ? `Sinkronisasi parsial: ${errors.join(', ')}`
      : `Berhasil sinkronisasi ${seededCount} data ke Firestore.`,
  };
}
