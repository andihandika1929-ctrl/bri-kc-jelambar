# Implementation Tasks Checklist

## Phase 1: Core Foundation & Upload Helper
- [x] Task 1.1: Buat helper `src/lib/uploadImage.ts` untuk upload gambar langsung ke Cloudinary via unsigned preset.
- [x] Task 1.2: Pastikan export `db` di `src/lib/firebase.ts` terhubung normal ke Firestore dan fix import `setDoc`, `deleteDoc`, `addDoc`.

## Phase 2: Hero Banners Integration
- [x] Task 2.1: Buat real-time binding (`onSnapshot` / `getDocs`) pada komponen Hero Banner publik agar membaca koleksi `banners`.
- [x] Task 2.2 (carousel auto-slide, dot/arrow, link aksi, responsif; CRUD admin tetap diverifikasi terpisah): Sempurnakan CRUD banner di `src/pages/AdminPage.tsx` (tambah banner baru + upload via helper, toggle status aktif/nonaktif, hapus permanen).

## Phase 3: Direktori Petugas & RM
- [x] Task 3.1: Hubungkan komponen direktori staf publik ke koleksi `staff`.
- [x] Task 3.2: Buat modal Add/Edit staf di admin, lengkap dengan upload avatar dan filter klaster.

## Phase 4: Struktur Organisasi & Accordion Jobdesk
- [x] Task 4.1: Tentukan file aktif (`OrganizationPage.tsx` vs `StrukturOrganisasi.tsx`), hubungkan ke koleksi `org_structure`.
- [x] Task 4.2: Implementasikan accordion/drawer di kartu pimpinan untuk membaca array `jobdesk` & `kpi`.
- [x] Task 4.3: Perbaiki form tambah/edit pejabat di admin agar modal tertutup otomatis dan data tersimpan ke Firestore.

## Phase 5: Warta & Berita Cabang
- [x] Task 5.1: Sambungkan `src/pages/ActivitiesPage.tsx` ke koleksi `activities` (fix parsing tanggal 'Invalid Date').
- [x] Task 5.2: Perbaiki form artikel baru di admin (upload thumbnail, cegah duplicate submit, hapus data lama secara permanen dari database).
