export type TeamSegment = 'Funding' | 'Lending' | 'Merchant' | 'Mikro';

export type FilterCategory = 'all' | 'lending' | 'funding' | 'merchant';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  segment: TeamSegment;
  phone: string; // WhatsApp formatted (e.g. 6281288991122)
  displayPhone: string; // Formatted for UI (e.g. +62 812-8899-1122)
  email: string;
  avatar: string;
  unitOffice: string;
  experienceYears?: number;
  status: 'Tersedia' | 'Sedang Melayani' | 'Siap Konsultasi';
  specializations: string[];
  bio?: string;
}

export interface FilterTabOption {
  id: FilterCategory;
  label: string;
  shortLabel: string;
  description: string;
  badgeCount?: number;
  iconName: 'LayoutGrid' | 'BadgePercent' | 'PiggyBank' | 'Store';
}

export const filterTabs: FilterTabOption[] = [
  {
    id: 'all',
    label: 'Semua Layanan & Tim',
    shortLabel: 'Semua',
    description: 'Seluruh Relationship Manager & Petugas Bisnis BRI KC Jakarta Jelambar',
    iconName: 'LayoutGrid',
  },
  {
    id: 'lending',
    label: 'Kredit & Pinjaman',
    shortLabel: 'Kredit & Pinjaman',
    description: 'Pinjaman Modal Kerja, Investasi, KPR, Briguna, dan Pembiayaan Usaha',
    iconName: 'BadgePercent',
  },
  {
    id: 'funding',
    label: 'Simpanan & Dana',
    shortLabel: 'Simpanan & Dana',
    description: 'Giro Bisnis, Deposito, Payroll Institusi, dan Pengelolaan Likuiditas',
    iconName: 'PiggyBank',
  },
  {
    id: 'merchant',
    label: 'Solusi Merchant & QRIS',
    shortLabel: 'Solusi Merchant',
    description: 'Pengajuan Mesin EDC, QRIS Dinamis/Statis, dan Integrasi Transaksi Kasir',
    iconName: 'Store',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'rm-funding-01',
    name: 'Budi Santoso, S.E.',
    role: 'RM Dana & Funding Komersial',
    segment: 'Funding',
    phone: '6281289012345',
    displayPhone: '+62 812-8901-2345',
    email: 'budi.santoso_jelambar@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'KC Jakarta Jelambar (Kantor Cabang Induk)',
    experienceYears: 8,
    status: 'Siap Konsultasi',
    bio: 'Fokus melayani pengelolaan likuiditas korporasi, pembukaan Giro Valas/Rupiah, serta kemitraan Payroll perusahaan.',
    specializations: [
      'Giro Bisnis & Korporasi',
      'Payroll BRI Institusi',
      'Deposito On Call & Berjangka',
      'BritAma Bisnis',
      'Cash Management System (CMS)'
    ]
  },
  {
    id: 'rm-lending-01',
    name: 'Dimas Prasetyo, M.M.',
    role: 'RM Kredit Komersial & Menengah (SME)',
    segment: 'Lending',
    phone: '6281312345678',
    displayPhone: '+62 813-1234-5678',
    email: 'dimas.prasetyo_jelambar@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'KC Jakarta Jelambar - Lantai 2 Unit Komersial',
    experienceYears: 10,
    status: 'Tersedia',
    bio: 'Menangani fasilitas pembiayaan modal kerja, ekspansi pabrik/gudang wilayah Jelambar, serta fasilitas Bank Garansi tender.',
    specializations: [
      'Kredit Modal Kerja (KMK)',
      'Kredit Investasi Usaha',
      'Bank Garansi & Kontra Garansi',
      'Letter of Credit (L/C)',
      'Supply Chain Financing'
    ]
  },
  {
    id: 'rm-merchant-01',
    name: 'Jessica Clarissa, S.Kom.',
    role: 'Merchant Solution Specialist & Acquisition',
    segment: 'Merchant',
    phone: '6285718904321',
    displayPhone: '+62 857-1890-4321',
    email: 'jessica.clarissa@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'KC Jakarta Jelambar - Unit Bisnis Digital',
    experienceYears: 5,
    status: 'Siap Konsultasi',
    bio: 'Membantu ratusan toko, restoran, dan tenant di Jelambar & sekitarnya memiliki mesin EDC Android BRI dan QRIS terintegrasi.',
    specializations: [
      'Pemasangan Mesin EDC Android BRI',
      'QRIS Dinamis API & Statis',
      'Aplikasi BRI Merchant',
      'Integrasi POS & Kasir Toko',
      'Settlement H+0 Dana Merchant'
    ]
  },
  {
    id: 'rm-lending-02',
    name: 'Siti Rahmawati, S.E.',
    role: 'RM Kredit Konsumer (KPR & Briguna)',
    segment: 'Lending',
    phone: '6281987654321',
    displayPhone: '+62 819-8765-4321',
    email: 'siti.rahmawati_jelambar@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 7,
    status: 'Tersedia',
    bio: 'Siap memberikan simulasi dan pendampingan pengajuan KPR BRI (Rumah Baru/Secondary/Take Over) dan pinjaman karya ASN/Karyawan.',
    specializations: [
      'KPR BRI (Bunga Khusus)',
      'Take Over & Top Up KPR',
      'Briguna Karya & Purna',
      'Kredit Kendaraan Bermotor (KKB)',
      'Kartu Kredit BRI Platinum & World'
    ]
  },
  {
    id: 'rm-mikro-01',
    name: 'Ahmad Fauzi (Mantri Utama)',
    role: 'Mantri / RM Kredit Mikro & Usaha Rakyat',
    segment: 'Mikro',
    phone: '6285211223344',
    displayPhone: '+62 852-1122-3344',
    email: 'ahmad.fauzi_unit@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'Supervisi BRI Unit Dutamas (KC Jelambar)',
    experienceYears: 6,
    status: 'Tersedia',
    bio: 'Pendampingan langsung bagi pelaku UMKM di pasar dan sentra niaga Dutamas / Jelambar untuk pengajuan KUR subsidi & Kupedes.',
    specializations: [
      'Kredit Usaha Rakyat (KUR) BRI',
      'Kupedes BRI Modal Kerja',
      'Kredit Kece (Plafon Cepat)',
      'Pendaftaran AgenBRILink Resmi',
      'Asuransi Mikro AM-KKM'
    ]
  },
  {
    id: 'rm-funding-02',
    name: 'Nathalia Putri, S.Ak.',
    role: 'RM Funding & Retail Relationship',
    segment: 'Funding',
    phone: '6281299887766',
    displayPhone: '+62 812-9988-7766',
    email: 'nathalia.putri@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 4,
    status: 'Siap Konsultasi',
    bio: 'Melayani pembukaan rekening tabungan bisnis, optimalisasi simpanan korporasi jangka pendek, dan program loyalty BritAma.',
    specializations: [
      'BritAma Valas & Multi-Currency',
      'Tabungan Simpedes Usaha',
      'Deposito Valas Bunga Kompetitif',
      'Aktivasi BRImo Super App Bisnis',
      'Auto-Debit Tagihan Korporasi'
    ]
  },
  {
    id: 'rm-merchant-02',
    name: 'Reza Pratama, S.T.',
    role: 'RM Merchant & Digital Solution',
    segment: 'Merchant',
    phone: '6287811229988',
    displayPhone: '+62 878-1122-9988',
    email: 'reza.pratama_merchant@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'Supervisi BRI Unit Angke & Grogol',
    experienceYears: 5,
    status: 'Tersedia',
    bio: 'Spesialis implementasi pembayaran digital bagi pelaku kuliner, retail modern, dan klinik kesehatan di wilayah Jelambar & Angke.',
    specializations: [
      'Mesin EDC Mini & Android',
      'QRIS Dinamis Terintegrasi',
      'BRI Soundbox Notifikasi QRIS',
      'Pendaftaran Merchant Aggregator',
      'Layanan Maintenance EDC Cepat'
    ]
  },
  {
    id: 'rm-mikro-02',
    name: 'Hendra Gunawan (Mantri Senior)',
    role: 'Mantri / Penasehat Keuangan Mikro',
    segment: 'Mikro',
    phone: '6281388776655',
    displayPhone: '+62 813-8877-6655',
    email: 'hendra.gunawan_unit@bri.co.id',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    unitOffice: 'Supervisi BRI Unit Wijaya Kusuma & Pejagalan',
    experienceYears: 9,
    status: 'Tersedia',
    bio: 'Menjangkau para pengusaha warung, bengkel, konveksi, dan pedagang keliling dengan solusi permodalan terjangkau tanpa ribet.',
    specializations: [
      'KUR Mikro Bunga 6%',
      'Kupedes Agunan Fleksibel',
      'Tabungan Simpedes Si-Kotak',
      'Pinjaman Musiman / Berkala',
      'Pendampingan Inkubasi Usaha'
    ]
  }
];

/**
 * Generate a direct WhatsApp consultation link with pre-filled greeting and service inquiry text
 */
export function generateWhatsAppLink(
  phone: string,
  rmName: string,
  roleTitle: string,
  preferredService?: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const serviceText = preferredService 
    ? ` mengenai layanan *${preferredService}*` 
    : ` mengenai produk & layanan perbankan (*${roleTitle}*)`;
    
  const message = `Halo Bapak/Ibu *${rmName}* (RM BRI KC Jakarta Jelambar),\n\nSaya tertarik untuk konsultasi${serviceText}. Mohon informasi terkait persyaratan, simulasi, serta proses pengajuannya.\n\nTerima kasih.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick consultation topics for fast interactive selection
 */
export const quickConsultationTopics = [
  'Semua Topik',
  'Kredit Usaha Rakyat (KUR)',
  'Kredit Modal Kerja (KMK)',
  'KPR BRI',
  'Mesin EDC Android',
  'QRIS Bisnis & Soundbox',
  'Giro & Payroll Perusahaan',
  'Deposito & Tabungan BritAma',
  'AgenBRILink'
];
