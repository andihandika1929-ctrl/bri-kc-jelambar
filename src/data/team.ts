export type TeamSegment = 'Funding' | 'Lending' | 'Mikro' | 'Collection' | 'CRR';

export type FilterCategory = 'all' | 'lending' | 'funding' | 'restrukturisasi';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  segment: TeamSegment;
  initials?: string;
  phone: string; // WhatsApp formatted (e.g. 6281340902924)
  displayPhone: string; // Formatted for UI (e.g. 0813-4090-2924)
  email: string;
  unitOffice: string;
  experienceYears?: number;
  status: 'Tersedia' | 'Siap Konsultasi';
  specializations: string[];
  bio?: string;
  customWhatsAppText?: string;
}

export interface FilterTabOption {
  id: FilterCategory;
  label: string;
  shortLabel: string;
  description: string;
  iconName: 'LayoutGrid' | 'BadgePercent' | 'PiggyBank' | 'RotateCcw';
}

export const filterTabs: FilterTabOption[] = [
  {
    id: 'all',
    label: 'Semua Layanan & Tim',
    shortLabel: 'Semua',
    description: 'Seluruh 9 Relationship Manager Resmi BRI KC Jakarta Jelambar',
    iconName: 'LayoutGrid',
  },
  {
    id: 'lending',
    label: 'Kredit & Pinjaman',
    shortLabel: 'Kredit & Pinjaman',
    description: 'Kredit Komersial SME, Kredit Mikro, dan KUR Usaha Rakyat',
    iconName: 'BadgePercent',
  },
  {
    id: 'funding',
    label: 'Simpanan & Dana',
    shortLabel: 'Simpanan & Dana',
    description: 'Giro Bisnis, Deposito Berjangka, Payroll Institusi, dan CMS',
    iconName: 'PiggyBank',
  },
  {
    id: 'restrukturisasi',
    label: 'Restrukturisasi & Collection',
    shortLabel: 'Restrukturisasi & Collection',
    description: 'Commercial Restructuring & Recovery (CRR) serta Penanganan Portofolio Kredit',
    iconName: 'RotateCcw',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'rm-funding-01',
    name: 'Ahmad Firdaus',
    role: 'RM Dana & Funding',
    segment: 'Funding',
    initials: 'AF',
    phone: '6281340902924',
    displayPhone: '0813-4090-2924',
    email: 'ahmad.firdaus_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Fokus melayani pengelolaan likuiditas korporasi, pembukaan Giro Valas/Rupiah, serta kemitraan Payroll institusi.',
    specializations: [
      'Giro Bisnis & Valas',
      'Payroll BRI Institusi',
      'Deposito Berjangka',
      'BritAma Bisnis',
      'Cash Management System (CMS)'
    ]
  },
  {
    id: 'rm-funding-02',
    name: 'Syafira Febrianty',
    role: 'RM Dana & Funding',
    segment: 'Funding',
    initials: 'SF',
    phone: '6287777450533',
    displayPhone: '0877-7745-0533',
    email: 'syafira.febrianty_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 6,
    status: 'Siap Konsultasi',
    bio: 'Melayani pembukaan rekening tabungan bisnis, optimalisasi simpanan korporasi, dan solusi transaksi digital institusi.',
    specializations: [
      'BritAma Valas & Multi-Currency',
      'Simpanan Giro Korporasi',
      'Deposito Bunga Khusus',
      'Aplikasi BRImo Bisnis',
      'Cash Pooling & CMS'
    ]
  },
  {
    id: 'rm-funding-03',
    name: 'Dani Faisal',
    role: 'RM Dana & Funding',
    segment: 'Funding',
    initials: 'DF',
    phone: '6285867183671',
    displayPhone: '0858-6718-3671',
    email: 'dani.faisal_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 5,
    status: 'Siap Konsultasi',
    bio: 'Membantu nasabah institusi dan pelaku usaha dalam manajemen arus kas, payroll karyawan, dan penempatan dana likuid.',
    specializations: [
      'Giro Operasional Bisnis',
      'Tabungan Simpedes Usaha',
      'Deposito On Call',
      'Layanan CMS Perusahaan',
      'Kemitraan Payroll Karyawan'
    ]
  },
  {
    id: 'rm-lending-01',
    name: 'Utama Farid',
    role: 'RM Kredit Komersial & SME',
    segment: 'Lending',
    initials: 'UF',
    phone: '6281330785880',
    displayPhone: '0813-3078-5880',
    email: 'utama.farid_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 9,
    status: 'Tersedia',
    bio: 'Menangani fasilitas pembiayaan modal kerja komersial, ekspansi usaha wilayah Jakarta Barat, dan Bank Garansi proyek.',
    specializations: [
      'Kredit Modal Kerja (KMK)',
      'Kredit Investasi Usaha',
      'Bank Garansi & Kontra Garansi',
      'Kredit Usaha Menengah (SME)',
      'Supply Chain Financing'
    ]
  },
  {
    id: 'rm-mikro-01',
    name: 'Adam Werna Kusuma',
    role: 'RM Kredit Mikro & KUR',
    segment: 'Mikro',
    initials: 'AW',
    phone: '6281294520098',
    displayPhone: '0812-9452-0098',
    email: 'adam.werna_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 6,
    status: 'Tersedia',
    bio: 'Pendampingan pembiayaan usaha rakyat, KUR mikro bunga subsidi, dan pengembangan klaster UMKM di wilayah Jelambar.',
    specializations: [
      'Kredit Usaha Rakyat (KUR) BRI',
      'Kupedes Modal Kerja',
      'Pinjaman Mikro Cepat',
      'Pendaftaran AgenBRILink',
      'Asuransi Mikro AM-KKM'
    ]
  },
  {
    id: 'rm-mikro-02',
    name: 'Rezki Fitra Ridhoni',
    role: 'RM Kredit Mikro & KUR',
    segment: 'Mikro',
    initials: 'RF',
    phone: '6282283382914',
    displayPhone: '0822-8338-2914',
    email: 'rezki.fitra_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 5,
    status: 'Tersedia',
    bio: 'Spesialis permodalan usaha mikro, pedagang ritel, dan wirausaha dengan proses pengajuan mudah dan cepat.',
    specializations: [
      'KUR Mikro Sektor Perdagangan',
      'Kupedes Agunan Fleksibel',
      'Kredit Usaha Mikro',
      'Pemberdayaan UMKM',
      'QRIS Pedagang'
    ]
  },
  {
    id: 'rm-mikro-03',
    name: 'Afriyadie Ramadhan',
    role: 'RM Kredit Mikro & KUR',
    segment: 'Mikro',
    initials: 'AR',
    phone: '6281284546809',
    displayPhone: '0812-8454-6809',
    email: 'afriyadie.ramadhan_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 6,
    status: 'Tersedia',
    bio: 'Membantu para pelaku usaha mikro dan wirausaha mendapatkan akses modal usaha resmi dari Bank BRI secara transparan.',
    specializations: [
      'Kredit Usaha Rakyat (KUR)',
      'Kupedes BRI Usaha',
      'Pinjaman Musiman & Ritel',
      'Pendampingan Klaster Usaha',
      'Aktivasi BRImo'
    ]
  },
  {
    id: 'rm-collection-01',
    name: 'Sutan',
    role: 'RM Collection',
    segment: 'Collection',
    initials: 'ST',
    phone: '6287773933322',
    displayPhone: '0877-7393-3322',
    email: 'sutan_collection@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Pendampingan pengelolaan dan penanganan portofolio kewajiban nasabah, restrukturisasi angsuran, serta solusi penyelesaian kredit tepat guna.',
    customWhatsAppText: 'Halo Pak Sutan, saya ingin berkonsultasi terkait layanan BRI KC Jakarta Jelambar.',
    specializations: [
      'Pengelolaan Portofolio Pinjaman',
      'Konsultasi Penanganan Angsuran',
      'Keringanan Pembayaran Bunga',
      'Solusi Penyelesaian Kewajiban',
      'Monitoring Akun Kredit'
    ]
  },
  {
    id: 'rm-crr-01',
    name: 'Yasin Nugraha',
    role: 'RM CRR (Commercial Restructuring & Recovery)',
    segment: 'CRR',
    initials: 'YN',
    phone: '6282177773888',
    displayPhone: '0821-7777-3888',
    email: 'yasin.nugraha_crr@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 8,
    status: 'Siap Konsultasi',
    bio: 'Spesialis restrukturisasi kredit komersial, penyelamatan aset pembiayaan, negosiasi skema penyehatan usaha, dan recovery fasilitas kredit.',
    customWhatsAppText: 'Halo Pak Yasin Nugraha, saya ingin berkonsultasi terkait layanan restrukturisasi BRI KC Jakarta Jelambar.',
    specializations: [
      'Restrukturisasi Kredit Komersial',
      'Penyehatan Skema Pinjaman',
      'Relaksasi Tenor & Angsuran',
      'Penyelamatan Aset Pembiayaan',
      'Commercial Loan Recovery'
    ]
  }
];

/**
 * Extract 2-letter uppercase initials from full name or use custom provided initials
 */
export function getInitials(name: string, explicitInitials?: string): string {
  if (explicitInitials) return explicitInitials;
  if (!name) return 'RM';
  const clean = name.replace(/^(Bpk\.|Ibu\.|Dr\.|Drs\.|Ir\.|H\.|Hj\.)\s+/i, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/**
 * Generate a direct WhatsApp consultation link with pre-filled greeting and service inquiry text
 */
export function generateWhatsAppLink(
  phone: string,
  rmName: string,
  roleTitle: string,
  preferredService?: string,
  customText?: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  
  if (customText && !preferredService) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customText)}`;
  }

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
  'Restrukturisasi Kredit Komersial',
  'Giro & Payroll Perusahaan',
  'Deposito & Tabungan Bisnis',
  'Kupedes BRI',
  'Penanganan Angsuran Kredit',
  'Cash Management System (CMS)',
  'AgenBRILink'
];
