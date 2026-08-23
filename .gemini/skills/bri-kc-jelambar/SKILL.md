---
name: bri-kc-jelambar
description: Comprehensive guide and development rules for BRI KC Jakarta Jelambar web portal, including Modern BRI Color Palette (#0052CC), 10 Relationship Managers data format, 8 supervising units (A-Z), loan calculator formulas, and document checklist standards.
---

# BRI KC Jakarta Jelambar - Portal Developer Skill Guide

Panduan resmi untuk arsitektur, standar UI/UX, palet warna modern, struktur data, dan aturan implementasi kode pada portal web **PT Bank Rakyat Indonesia (Persero) Tbk — Kantor Cabang Jakarta Jelambar**.

---

## 1. Identitas & Informasi Cabang Resmi

| Parameter | Nilai Resmi |
| :--- | :--- |
| **Nama Unit Kerja** | BRI Kantor Cabang Jakarta Jelambar |
| **Regional Office** | Regional Office Jakarta 3 |
| **Jumlah Supervisi** | 8 Kantor Unit Kerja (Jakarta Barat) |
| **Alamat Lengkap** | Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, RT.2/RW.5, Grogol, Kec. Grogol Petamburan, Kota Jakarta Barat, DKI Jakarta 11450 |
| **Telepon Kantor** | `(021) 56981105` (`tel:02156981105`) |
| **Email Resmi** | `kcjelambarbri@gmail.com` (`mailto:kcjelambarbri@gmail.com`) |
| **Jam Operasional** | Senin – Jumat pukul 08.00 – 15.00 WIB |
| **Hotline 24 Jam** | Contact BRI `1500017` & Sabrina WhatsApp `0812-12-14017` |

---

## 2. Modern BRI Color Palette System

Gunakan sistem warna korporat modern berikut di seluruh komponen Tailwind / CSS:

- **Primary Brand Blue (`#0052CC`)**: Warna utama BRI untuk Header, Brand Title, Tombol CTA Utama, Slider Thumb/Track, Active Tab Border.
- **Secondary Blue (`#2563EB`)**: Warna aksen sekunder untuk highlight ikon dan status interaktif.
- **Button Hover Blue (`#1D4ED8`)**: State hover tombol utama (`hover:bg-[#1D4ED8]`).
- **Corporate Footer Blue (`#003B99`)**: Background solid footer korporat dengan teks putih dan muted `#DBEAFE`.
- **Soft Blue Tint (`#EFF6FF` / `#DBEAFE`)**: Background kartu estimasi kalkulator, badge segmen RM, dan Avatar AVA UI (`bg-blue-100 text-[#0052CC] border-blue-200`).
- **Pure Clean White (`#FFFFFF`)**: Background kartu utama dengan border `border-slate-200/90` dan shadow halus (`shadow-sm`).
- **Clean Slate Body (`#F8FAFC`)**: Background default body seluruh halaman.
- **Accent Promo Orange (`#F37021`)**: Badge bunga promo & DP kendaraan.
- **Emerald Green (`#059669` / `#10B981`)**: Tombol WhatsApp & indikator buka operasional live.

> [!WARNING]
> Jangan pernah menggunakan warna biru gelap usang/navy kusam (`#00529C`, `#003366`, `#003d75`, `#002D62`, `#0f172a`).

---

## 3. Struktur Komponen Landing Page (`src/App.tsx`)

Urutan 10 bagian wajib:
1. `<TopOperationalBar />` - Bar status buka/tutup live WIB (Senin-Jumat 08.00-15.00), jam digital WIB, Call BRI `1500017`, dan Sabrina WA.
2. `<header>` - Sticky Navbar dengan Logo BRI, links navigasi, tombol Panduan Berkas, dan tombol Konsultasi RM.
3. `<HeroCarousel />` - Full-width carousel 4 banner resmi + floating *"I WANT"* selector bar.
4. `Welcome & Profile Branch` - Pengenalan KC Jelambar, quick action buttons, dan statistik strip 4 kolom.
5. `#layanan` - 4 pilar portofolio layanan unggulan (Simpanan, Kredit SME, Solusi Merchant, Restrukturisasi).
6. `<TeamDirectory />` (`#tim-bisnis`) - Direktori 10 Relationship Manager resmi dengan Avatar AVA UI dan direct WhatsApp.
7. `<LoanCalculator />` (`#simulasi`) - Kalkulator kredit interaktif 3 Tab (KPR, KKB Kendaraan, BRIguna) berdesain bersih.
8. `#unit-supervisi` - Jaringan 8 Kantor Unit Supervisi terurut alfabetis A - Z dengan deep-link Google Maps.
9. `<PanduanFAQSection />` (`#panduan`) - Panduan checklist dokumen & FAQ dengan modal pencarian interaktif.
10. `#lokasi` - Informasi alamat lengkap, jam kerja, email resmi, dan nomor `(021) 56981105`.
11. `<footer>` - Footer biru modern `#003B99` dengan legalitas OJK & LPS.

---

## 4. Format Data Petugas Cabang & RM (`src/data/team.ts`)

Total 13 Petugas Resmi (10 Relationship Manager & 3 Universal Banker):
1. **Sri Mulyani** — Universal Banker (`SM`, `0812-3456-7890`)
2. **Erina Rebecca Sinaga** — Universal Banker (`ES`, `0812-3456-7891`)
3. **Nabilah Putri Asry Adisti** — Universal Banker (`NA`, `0812-3456-7892`)
4. **Ahmad Firdaus** — RM Dana & Funding (`AF`, `0813-4090-2924`)
5. **Syafira Febrianty** — RM Dana & Funding (`SF`, `0877-7745-0533`)
6. **Dani Faisal** — RM Dana & Funding (`DF`, `0858-6718-3671`)
7. **Utama Farid** — RM Kredit Komersial & SME (`UF`, `0813-3078-5880`)
8. **Fahmi Sidik** — RM SME (`FS`, `0877-6271-545`)
9. **Adam Werna Kusuma** — RM Kredit Mikro & KUR (`AW`, `0812-9452-0098`)
10. **Rezki Fitra Ridhoni** — RM Kredit Mikro & KUR (`RF`, `0822-8338-2914`)
11. **Afriyadie Ramadhan** — RM Kredit Mikro & KUR (`AR`, `0812-8454-6809`)
12. **Sutan Pardamean Hasibuan** — RM Collection (`ST`, `0877-7393-3322`)
13. **Yasin Nugraha** — RM CRR (`YN`, `0821-7777-3888`)

**Aturan UI Kartu Petugas**:
- Foto: Avatar Inisial Bulat (`bg-blue-100 text-[#0052CC]` atau `bg-sky-100 text-sky-800` untuk UB `border-2 border-sky-200`).
- Direct WhatsApp Link: `https://wa.me/62...` dengan parameter `text` otomatis berisi pesan sopan dan terstruktur.
- Tombol Salin Kontak: Salin nomor ke clipboard dengan floating toast notification feedback.
- Digital Banking: Edukasi ekosistem BRImo & platform generasi baru QITA didampingi langsung oleh Universal Banker (UB).

---

## 5. Format Data 8 Unit Supervisi (`src/data/units.ts`)

Wajib diurutkan secara alfabetis (A - Z):
1. **BRI Unit Angke** (`Jl. Jemb. Besi II No.44, Tambora`)
2. **BRI Unit Dutamas** (`Blok A3 Jalan Kusuma No.37, Jelambar Baru`)
3. **BRI Unit Grogol** (`Jl. Muwardi II No.43, Grogol`)
4. **BRI Unit Kapuk Raya** (`Jl. Kapuk Raya No. 4A, Cengkareng`)
5. **BRI Unit Keamanan** (`Jl. Keamanan No.46, Taman Sari`)
6. **BRI Unit Pejagalan** (`Jl. Pejagalan Raya No.13, Tambora`)
7. **BRI Unit Pinangsia Timur** (`Jl. Buni No.45A, Taman Sari`)
8. **BRI Unit Wijaya Kusuma** (`Jl. Jelambar Baru Raya No.29 A, Jelambar`)

---

## 6. Formula Simulasi Kredit (`src/components/LoanCalculator.tsx`)

- **KPR BRI & BRIguna (Anuitas Efektif)**:
  $$M = P \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
  di mana $r = \frac{\text{Suku Bunga}}{100 \times 12}$ dan $n = \text{Tenor (Tahun)} \times 12$.
- **Kredit Kendaraan KKB (Bunga Flat)**:
  $$\text{Pokok Hutang } P = \text{OTR} - \text{DP (Rp)}$$
  $$\text{Total Bunga} = P \times \frac{\text{Rate Flat}}{100} \times \text{Tenor (Tahun)}$$
  $$M = \frac{P + \text{Total Bunga}}{n}$$

---

## 7. Standar Teknis & Responsivitas

- **Anti Horizontal Overflow**: Root wrapper wajib menggunakan `overflow-x-hidden w-full max-w-full`.
- **Zero Gap Header**: Tidak boleh ada jarak atau divider putih antara TopBar, Navbar, dan Hero Carousel (`p-0 m-0 border-none shadow-none`).
- **Multi-Language Switcher (i18n)**: Mendukung 3 bahasa (🇮🇩 ID: Bahasa Indonesia, 🇬🇧 EN: English, 🇨🇳 ZH: 中文) melalui `LanguageProvider` dan `useLanguage()` hook dengan persistensi `localStorage`.
- **Rute Terpisah & Navigasi**: Halaman Beranda (`/` / `#beranda`), Aktivitas & Berita (`/aktivitas` / `#aktivitas` - Status Pembaruan Sistem Informasi / Under Construction Card), dan Struktur Organisasi & Jobdesk (`/struktur` / `#struktur`).
- **Nomenklatur Baku Struktur Organisasi Cabang**:
  * Pimpinan Kantor Cabang: Adi Sujarwanto (Pemimpin Cabang / Branch Office Head - Solo Header)
  * Manajer Operasional & Bisnis: Jaka Farisa (MOL), Dwiyanto Ario Putro (SBM), Denis Sepriyanto (MBM), Eugenia Javanica (RMFT)
  * Supervisi Operasional & Administrasi Kredit: Aprita Dinasari (AMOL), Syamsul Hidayatullah (SOL), Rafika Widya Sari (SPV ADK)
  * Tim Relationship Manager (RM): SME & Commercial (Utama Farid, Fahmi Sidik), Funding & Transaction (Ahmad Firdaus, Dani Faisal, Syafira Febrianty), Mikro (Afriyadie, Adam Werna, Rezki Fitra), CRR & Lelang (Yasin Nugraha, Sutan Pardamean, Ayang Pradila)
  * Layanan Nasabah & Penunjang Operasional: Klaster A (Banking Hall: Sri Mulyani, Erina, Nabilah, Ryan CS, Indrastuti Teller, Choirul DJS), Klaster B (ADK Murni: Bela, Marto, Nindita), Klaster C (Admin Mikro & Agen: Chairunnisah, Cici Fatmimah), Klaster D (Penunjang Operasional & IT: Vera Amelia HR, Ragil, Andi Handika - Portal Lead & System Developer, Harlianto, Atin Prihatin - Support Operasional, Rakhmad Dwi Yunianto - Support Administrasi)
- **Format Kartu Struktur Organisasi**: Tanpa alamat email, seluruh nama & jabatan tampil utuh tanpa pemotongan (`break-words`, tanpa `truncate` / `line-clamp`), header profil memiliki `min-h-[72px]`, tugas pokok & fungsi terbuka permanen, tinggi kartu seragam (`h-full flex flex-col justify-between`), serta badge spesial "Portal Lead & System Developer" untuk Andi Handika.
- **Fixed Navigation & Text Contrast**: Seluruh header/navbar menggunakan `fixed top-0 left-0 right-0 w-full z-[999] transition-all` dengan transisi mulus: saat transparan di atas banner memiliki `drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] text-white font-medium` didukung top gradient overlay pada carousel (`bg-gradient-to-b from-black/60 via-black/20 to-transparent`), dan saat di-scroll berubah solid menjadi `bg-white text-slate-800 shadow-md border-b border-slate-200`. Halaman terpisah memiliki safe top padding `pt-32 sm:pt-36 md:pt-40`.
- **Modal FAQ & Panduan Dokumen**: Menggunakan container backdrop `z-[1000]` dengan body scroll lock (`document.body.style.overflow = 'hidden'`), sticky modal header dengan tombol close bulat kontras, serta full-width close button di mobile.
- **Filter Tabs & Quick Pills**: Menggunakan `flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4 mt-6 mb-4` dengan tombol `px-4 py-2 text-xs md:text-sm font-semibold rounded-full whitespace-nowrap` agar tidak terpotong.
- **Footer Credit Signature**: "© 2026 PT Bank Rakyat Indonesia (Persero) Tbk — KC Jakarta Jelambar. Inovasi Digital & Portal Resmi diarahkan & dikembangkan oleh Andi Handika (Unit IT & Pelaporan)."
- **Verifikasi Build**: Setiap perubahan kode wajib lulus uji `npm run build` dengan status 0 error.
