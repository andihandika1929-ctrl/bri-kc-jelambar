export type TeamSegment = 'Funding' | 'Lending' | 'Mikro' | 'Collection' | 'CRR' | 'UB';

export type FilterCategory = 'all' | 'lending' | 'funding' | 'restrukturisasi' | 'ub';

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
  iconName: 'LayoutGrid' | 'BadgePercent' | 'PiggyBank' | 'RotateCcw' | 'Smartphone';
}

export const filterTabs: FilterTabOption[] = [
  {
    id: 'all',
    label: 'Semua Layanan & Tim',
    shortLabel: 'Semua Petugas',
    description: 'Seluruh 13 Petugas Resmi (10 Relationship Manager & 3 Universal Banker) BRI KC Jakarta Jelambar',
    iconName: 'LayoutGrid',
  },
  {
    id: 'ub',
    label: 'Universal Banker (UB)',
    shortLabel: 'Universal Banker (UB)',
    description: 'Layanan Frontliner Transaksi, Pembukaan Rekening, Aktivasi BRImo & Platform Baru Qita',
    iconName: 'Smartphone',
  },
  {
    id: 'lending',
    label: 'Kredit & Pinjaman',
    shortLabel: 'Kredit & Pinjaman',
    description: 'Kredit Komersial & SME, Kredit Mikro, dan KUR Usaha Rakyat',
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
  // --- 1. UNIVERSAL BANKER (UB) / FRONTLINER ---
  {
    id: 'ub-frontliner-01',
    name: 'Sri Mulyani',
    role: 'Universal Banker (UB)',
    segment: 'UB',
    initials: 'SM',
    phone: '6281234567890',
    displayPhone: '0812-3456-7890',
    email: 'sri.mulyani_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar (Banking Hall)',
    experienceYears: 5,
    status: 'Siap Konsultasi',
    bio: 'Melayani transaksi perbankan terpadu, pembukaan rekening baru, aktivasi BRImo, serta pendampingan migrasi fitur digital platform generasi baru Qita.',
    specializations: [
      'Layanan Transaksi & Rekening',
      'Aktivasi BRImo & Qita',
      'Layanan Setor Tarik Tunai',
      'Customer Care Perbankan',
      'Penggantian Kartu Debit'
    ],
    customWhatsAppText: 'Halo Ibu Sri Mulyani (Universal Banker BRI KC Jakarta Jelambar), saya ingin berkonsultasi mengenai layanan transaksi / pembukaan rekening / aktivasi platform digital Qita & BRImo.'
  },
  {
    id: 'ub-frontliner-02',
    name: 'Erina Rebecca Sinaga',
    role: 'Universal Banker (UB)',
    segment: 'UB',
    initials: 'ES',
    phone: '6281234567891',
    displayPhone: '0812-3456-7891',
    email: 'erina.rebecca_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar (Banking Hall)',
    experienceYears: 4,
    status: 'Siap Konsultasi',
    bio: 'Frontliner spesialis layanan nasabah, pendaftaran fitur perbankan digital generasi baru Qita, administrasi giro, dan solusi transaksi harian.',
    specializations: [
      'Registrasi Fitur Digital Qita',
      'Layanan Giro & Tabungan',
      'Aktivasi e-Banking & Notifikasi',
      'Konsultasi Produk Frontliner',
      'Bilyet Giro & Cek'
    ],
    customWhatsAppText: 'Halo Ibu Erina Rebecca Sinaga (Universal Banker BRI KC Jakarta Jelambar), saya ingin berkonsultasi mengenai panduan registrasi Qita / layanan perbankan di KC Jelambar.'
  },
  {
    id: 'ub-frontliner-03',
    name: 'Nabilah Putri Asry Adisti',
    role: 'Universal Banker (UB)',
    segment: 'UB',
    initials: 'NA',
    phone: '6281234567892',
    displayPhone: '0812-3456-7892',
    email: 'nabilah.putri_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar (Banking Hall)',
    experienceYears: 4,
    status: 'Siap Konsultasi',
    bio: 'Siap mendampingi nasabah untuk migrasi ekosistem digital Qita, pembukaan rekening valas/rupiah, dan kelancaran transaksi perbankan langsung di kantor cabang.',
    specializations: [
      'Pendampingan Migrasi Qita',
      'Aktivasi BRImo Bisnis',
      'Layanan Kliring & LLG',
      'Solusi Transaksi Banking Hall',
      'Customer Service Terpadu'
    ],
    customWhatsAppText: 'Halo Ibu Nabilah Putri (Universal Banker BRI KC Jakarta Jelambar), saya ingin berkonsultasi mengenai pendampingan digital banking Qita & layanan perbankan cabang.'
  },

  // --- 2. RELATIONSHIP MANAGER (RM) DANA & FUNDING ---
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
      'Layanan Rekening Khusus'
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
    bio: 'Spesialis produk tabungan rencana, penempatan deposito korporasi, dan edukasi fasilitas internet banking bisnis.',
    specializations: [
      'BritAma Rencana & Bisnis',
      'Cash Management System (CMS)',
      'Simpanan Giro Rupiah',
      'Payroll Management',
      'Kemitraan Komunitas'
    ]
  },

  // --- 3. RELATIONSHIP MANAGER (RM) KREDIT KOMERSIAL & SME ---
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
    experienceYears: 8,
    status: 'Siap Konsultasi',
    bio: 'Berpengalaman menangani fasilitas Kredit Modal Kerja (KMK), Kredit Investasi ekspansi pabrik/ruko, dan Bank Garansi proyek konstruksi.',
    specializations: [
      'Kredit Modal Kerja (KMK)',
      'Kredit Investasi Komersial',
      'Bank Garansi & SKBDN',
      'Kredit Konstruksi & Proyek',
      'Pinjaman Sindikasi SME'
    ]
  },
  {
    id: 'rm-lending-02',
    name: 'Fahmi Sidik',
    role: 'RM SME (Small & Medium Enterprise)',
    segment: 'Lending',
    initials: 'FS',
    phone: '628776271545',
    displayPhone: '0877-6271-545',
    email: 'fahmi.sidik_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 6,
    status: 'Siap Konsultasi',
    bio: 'Melayani pembiayaan segmen SME & usaha komersial menengah, fasilitas modal kerja revolving, serta kredit investasi modern.',
    specializations: [
      'Kredit SME & Komersial',
      'Modal Kerja Usaha Menengah',
      'Kredit Investasi Aset & Ruko',
      'Bank Garansi Tender',
      'Fasilitas Valas SME'
    ],
    customWhatsAppText: 'Halo Pak Fahmi Sidik, saya ingin berkonsultasi terkait fasilitas kredit SME & Modal Kerja di BRI KC Jakarta Jelambar.'
  },

  // --- 4. RELATIONSHIP MANAGER (RM) KREDIT MIKRO & KUR ---
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
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Siap membantu percepatan pengajuan KUR Mikro dan Kupedes BRI dengan bunga subsidi pemerintah untuk pedagang dan wirausaha.',
    specializations: [
      'KUR Mikro (s.d Rp 100 Juta)',
      'KUR Kecil (s.d Rp 500 Juta)',
      'Kupedes BRI Fleksibel',
      'Pembiayaan UMKM Naik Kelas',
      'Solusi QRIS Merchant'
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
    status: 'Siap Konsultasi',
    bio: 'Melayani pengajuan modal kerja mikro, konsultasi syarat berkas KUR, dan pendampingan digitalisasi usaha pasar rakyat.',
    specializations: [
      'KUR Mikro & Super Mikro',
      'Kupedes Musiman / Bulanan',
      'Kredit Usaha Klaster Pasar',
      'Pendampingan AgenBRILink',
      'EDC Merchant Mikro'
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
    status: 'Siap Konsultasi',
    bio: 'Fokus melayani pembiayaan sektor perdagangan, jasa, dan industri rumahan di wilayah supervisi KC Jakarta Jelambar.',
    specializations: [
      'KUR Mikro & Kupedes',
      'Modal Usaha Retail & Grosir',
      'Pinjaman Renovasi Tempat Usaha',
      'Asuransi Mikro BRI',
      'Aktivasi Tabungan Simpedes'
    ]
  },

  // --- 5. RELATIONSHIP MANAGER (RM) COLLECTION & CRR ---
  {
    id: 'rm-collection-01',
    name: 'Sutan Pardamean Hasibuan',
    role: 'RM Collection',
    segment: 'Collection',
    initials: 'ST',
    phone: '6287773933322',
    displayPhone: '0877-7393-3322',
    email: 'sutan.hasibuan_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Fokus menangani pengelolaan portofolio pinjaman, konsultasi kelancaran angsuran, serta penyelesaian kewajiban pembiayaan debitur.',
    specializations: [
      'Penanganan Portofolio Kredit',
      'Konsultasi Kelancaran Angsuran',
      'Penyelesaian Kewajiban Nasabah',
      'Manajemen Risiko Pembiayaan',
      'Solusi Pembayaran Fleksibel'
    ],
    customWhatsAppText: 'Halo Pak Sutan, saya ingin berkonsultasi terkait penanganan portofolio dan fasilitas layanan BRI KC Jakarta Jelambar.'
  },
  {
    id: 'rm-crr-01',
    name: 'Yasin Nugraha',
    role: 'RM CRR (Commercial Restructuring & Recovery)',
    segment: 'CRR',
    initials: 'YN',
    phone: '6282177773888',
    displayPhone: '0821-7777-3888',
    email: 'yasin.nugraha_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    experienceYears: 9,
    status: 'Siap Konsultasi',
    bio: 'Spesialis restrukturisasi kredit komersial, penyelamatan aset pembiayaan, perpanjangan tenor, dan skema penyehatan usaha debitur.',
    specializations: [
      'Restrukturisasi Kredit Komersial',
      'Penjadwalan Ulang (Rescheduling)',
      'Relaksasi Tenor & Angsuran',
      'Penyelamatan Aset Pembiayaan',
      'Commercial Loan Recovery'
    ],
    customWhatsAppText: 'Halo Pak Yasin Nugraha, saya ingin berkonsultasi terkait layanan restrukturisasi kredit komersial di BRI KC Jakarta Jelambar.'
  }
];

/**
 * Extract 2-letter uppercase initials from full name or use custom provided initials
 */
export function getInitials(name: string, explicitInitials?: string): string {
  if (explicitInitials) return explicitInitials;
  if (!name) return 'UB';
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
    
  const message = `Halo Bapak/Ibu *${rmName}* (${roleTitle} BRI KC Jakarta Jelambar),\n\nSaya tertarik untuk konsultasi${serviceText}. Mohon informasi terkait persyaratan, simulasi, serta proses pengajuannya.\n\nTerima kasih.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick consultation topics for fast interactive selection
 */
export const quickConsultationTopics = [
  'Semua Topik',
  'Aktivasi Digital Qita & BRImo',
  'Pembukaan Rekening Online',
  'Kredit Usaha Rakyat (KUR)',
  'Kredit Modal Kerja (KMK)',
  'Kredit Usaha Menengah (SME)',
  'Restrukturisasi Kredit Komersial',
  'Giro & Payroll Perusahaan',
  'Deposito & Tabungan Bisnis',
  'Customer Care & Ganti Kartu',
  'Kupedes BRI',
  'Cash Management System (CMS)'
];
