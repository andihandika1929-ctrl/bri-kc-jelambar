import { Language } from './translations';

export type TeamSegment = 'Funding' | 'Lending' | 'Mikro' | 'Collection' | 'CRR' | 'UB';

export type FilterCategory = 'all' | 'lending' | 'funding' | 'restrukturisasi' | 'ub';

export interface LocalizedText {
  id: string;
  en: string;
  zh: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleI18n?: LocalizedText;
  segment: TeamSegment;
  initials?: string;
  photoUrl?: string;
  phone: string; // WhatsApp formatted (e.g. 6281340902924)
  displayPhone: string; // Formatted for UI (e.g. 0813-4090-2924)
  email: string;
  unitOffice: string;
  unitOfficeI18n?: LocalizedText;
  experienceYears?: number;
  status: 'Tersedia' | 'Siap Konsultasi';
  specializations: string[];
  specializationsI18n?: {
    id: string[];
    en: string[];
    zh: string[];
  };
  bio?: string;
  bioI18n?: LocalizedText;
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
    roleI18n: {
      id: 'Universal Banker (UB)',
      en: 'Universal Banker (UB)',
      zh: '全能银行家 (UB)'
    },
    segment: 'UB',
    initials: 'SM',
    phone: '6281234567890',
    displayPhone: '0812-3456-7890',
    email: 'sri.mulyani_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar (Banking Hall)',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar (Banking Hall)',
      en: 'KC Jakarta Jelambar (Banking Hall)',
      zh: '雅加达 Jelambar 支行（营业大厅）'
    },
    experienceYears: 5,
    status: 'Siap Konsultasi',
    bio: 'Melayani transaksi perbankan terpadu, pembukaan rekening baru, aktivasi BRImo, serta pendampingan migrasi fitur digital platform generasi baru Qita.',
    bioI18n: {
      id: 'Melayani transaksi perbankan terpadu, pembukaan rekening baru, aktivasi BRImo, serta pendampingan migrasi fitur digital platform generasi baru Qita.',
      en: 'Providing integrated banking transactions, new account opening, BRImo activation, and guidance for Qita digital platform migration.',
      zh: '提供综合银行业务办理、新账户开立、BRImo激活以及Qita新一代数字平台迁移指导服务。'
    },
    specializations: [
      'Layanan Transaksi & Rekening',
      'Aktivasi BRImo & Qita',
      'Layanan Setor Tarik Tunai',
      'Customer Care Perbankan',
      'Penggantian Kartu Debit'
    ],
    specializationsI18n: {
      id: [
        'Layanan Transaksi & Rekening',
        'Aktivasi BRImo & Qita',
        'Layanan Setor Tarik Tunai',
        'Customer Care Perbankan',
        'Penggantian Kartu Debit'
      ],
      en: [
        'Account & Transaction Services',
        'BRImo & Qita Digital Activation',
        'Cash Deposit & Withdrawal',
        'Banking Customer Care',
        'Debit Card Replacement'
      ],
      zh: [
        '账户管理与柜面交易',
        'BRImo与Qita平台激活',
        '现金存取与结算',
        '客户关怀与咨询',
        '借记卡补换与PIN重置'
      ]
    },
    customWhatsAppText: 'Halo Ibu Sri Mulyani (Universal Banker BRI KC Jakarta Jelambar), saya ingin berkonsultasi mengenai layanan transaksi / pembukaan rekening / aktivasi platform digital Qita & BRImo.'
  },
  {
    id: 'ub-frontliner-02',
    name: 'Erina Rebecca Sinaga',
    role: 'Universal Banker (UB)',
    roleI18n: {
      id: 'Universal Banker (UB)',
      en: 'Universal Banker (UB)',
      zh: '全能银行家 (UB)'
    },
    segment: 'UB',
    initials: 'ES',
    phone: '6281234567891',
    displayPhone: '0812-3456-7891',
    email: 'erina.rebecca_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar (Banking Hall)',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar (Banking Hall)',
      en: 'KC Jakarta Jelambar (Banking Hall)',
      zh: '雅加达 Jelambar 支行（营业大厅）'
    },
    experienceYears: 4,
    status: 'Siap Konsultasi',
    bio: 'Frontliner spesialis layanan nasabah, pendaftaran fitur perbankan digital generasi baru Qita, administrasi giro, dan solusi transaksi harian.',
    bioI18n: {
      id: 'Frontliner spesialis layanan nasabah, pendaftaran fitur perbankan digital generasi baru Qita, administrasi giro, dan solusi transaksi harian.',
      en: 'Frontline customer specialist for new account onboarding, Qita digital platform feature registration, checking account administration, and daily financial services.',
      zh: '大堂前台业务专家，专精于客户接待、Qita新一代数字化平台注册、活期支票账户管理及日常金融交易。'
    },
    specializations: [
      'Registrasi Fitur Digital Qita',
      'Layanan Giro & Tabungan',
      'Aktivasi e-Banking & Notifikasi',
      'Konsultasi Produk Frontliner',
      'Bilyet Giro & Cek'
    ],
    specializationsI18n: {
      id: [
        'Registrasi Fitur Digital Qita',
        'Layanan Giro & Tabungan',
        'Aktivasi e-Banking & Notifikasi',
        'Konsultasi Produk Frontliner',
        'Bilyet Giro & Cek'
      ],
      en: [
        'Qita Digital Feature Registration',
        'Checking & Savings Services',
        'e-Banking & Alert Activation',
        'Frontline Product Advisory',
        'Bilyet Giro & Check Clearing'
      ],
      zh: [
        'Qita平台功能注册',
        '活期与储蓄账户服务',
        '电子银行及动账通知',
        '大堂产品综合咨询',
        '支票与划拨票据结算'
      ]
    },
    customWhatsAppText: 'Halo Ibu Erina Rebecca Sinaga (Universal Banker BRI KC Jakarta Jelambar), saya ingin berkonsultasi mengenai panduan registrasi Qita / layanan perbankan di KC Jelambar.'
  },
  {
    id: 'ub-frontliner-03',
    name: 'Nabilah Putri Asry Adisti',
    role: 'Universal Banker (UB)',
    roleI18n: {
      id: 'Universal Banker (UB)',
      en: 'Universal Banker (UB)',
      zh: '全能银行家 (UB)'
    },
    segment: 'UB',
    initials: 'NA',
    phone: '6281234567892',
    displayPhone: '0812-3456-7892',
    email: 'nabilah.putri_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar (Banking Hall)',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar (Banking Hall)',
      en: 'KC Jakarta Jelambar (Banking Hall)',
      zh: '雅加达 Jelambar 支行（营业大厅）'
    },
    experienceYears: 4,
    status: 'Siap Konsultasi',
    bio: 'Siap mendampingi nasabah untuk migrasi ekosistem digital Qita, pembukaan rekening valas/rupiah, dan kelancaran transaksi perbankan langsung di kantor cabang.',
    bioI18n: {
      id: 'Siap mendampingi nasabah untuk migrasi ekosistem digital Qita, pembukaan rekening valas/rupiah, dan kelancaran transaksi perbankan langsung di kantor cabang.',
      en: 'Assisting clients with Qita digital ecosystem migration, foreign currency/IDR account opening, and fast branch banking transactions.',
      zh: '协助客户平稳迁移至Qita数字金融生态，办理多币种外汇及印尼盾开户，保障网点现场高效交易。'
    },
    specializations: [
      'Pendampingan Migrasi Qita',
      'Aktivasi BRImo Bisnis',
      'Layanan Kliring & LLG',
      'Solusi Transaksi Banking Hall',
      'Customer Service Terpadu'
    ],
    specializationsI18n: {
      id: [
        'Pendampingan Migrasi Qita',
        'Aktivasi BRImo Bisnis',
        'Layanan Kliring & LLG',
        'Solusi Transaksi Banking Hall',
        'Customer Service Terpadu'
      ],
      en: [
        'Qita Digital Migration Guidance',
        'BRImo Business Activation',
        'Clearing & LLG Wire Transfers',
        'Banking Hall Transaction Solutions',
        'Integrated Customer Service'
      ],
      zh: [
        'Qita数字化迁移指引',
        'BRImo企业版开通',
        '票据清算与跨行转账',
        '大堂交易全套方案',
        '一站式综合客服'
      ]
    },
    customWhatsAppText: 'Halo Ibu Nabilah Putri (Universal Banker BRI KC Jakarta Jelambar), saya ingin berkonsultasi mengenai pendampingan digital banking Qita & layanan perbankan cabang.'
  },

  // --- 2. RELATIONSHIP MANAGER (RM) DANA & FUNDING ---
  {
    id: 'rm-funding-01',
    name: 'Ahmad Firdaus',
    role: 'RM Dana & Funding',
    roleI18n: {
      id: 'RM Dana & Funding',
      en: 'Funding Relationship Manager',
      zh: '资金与存款客户经理'
    },
    segment: 'Funding',
    initials: 'AF',
    phone: '6281340902924',
    displayPhone: '0813-4090-2924',
    email: 'ahmad.firdaus_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Fokus melayani pengelolaan likuiditas korporasi, pembukaan Giro Valas/Rupiah, serta kemitraan Payroll institusi.',
    bioI18n: {
      id: 'Fokus melayani pengelolaan likuiditas korporasi, pembukaan Giro Valas/Rupiah, serta kemitraan Payroll institusi.',
      en: 'Specializing in corporate liquidity management, IDR & foreign currency checking accounts, and institutional payroll partnerships.',
      zh: '专注服务企业流动资金管理、印尼盾及多币种外汇活期开户，以及企事业单位批量代发工资合作。'
    },
    specializations: [
      'Giro Bisnis & Valas',
      'Payroll BRI Institusi',
      'Deposito Berjangka',
      'BritAma Bisnis',
      'Cash Management System (CMS)'
    ],
    specializationsI18n: {
      id: [
        'Giro Bisnis & Valas',
        'Payroll BRI Institusi',
        'Deposito Berjangka',
        'BritAma Bisnis',
        'Cash Management System (CMS)'
      ],
      en: [
        'Business & FX Checking Accounts',
        'Corporate Payroll Partnerships',
        'Fixed Time Deposits',
        'BritAma Business Savings',
        'Cash Management System (CMS)'
      ],
      zh: [
        '企业活期与外汇账户',
        '企业员工代发工资',
        '大额定期存单',
        'BritAma 商务储蓄',
        '现金管理系统 (CMS)'
      ]
    }
  },
  {
    id: 'rm-funding-02',
    name: 'Syafira Febrianty',
    role: 'RM Dana & Funding',
    roleI18n: {
      id: 'RM Dana & Funding',
      en: 'Funding Relationship Manager',
      zh: '资金与存款客户经理'
    },
    segment: 'Funding',
    initials: 'SF',
    phone: '6287777450533',
    displayPhone: '0877-7745-0533',
    email: 'syafira.febrianty_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 6,
    status: 'Siap Konsultasi',
    bio: 'Melayani pembukaan rekening tabungan bisnis, optimalisasi simpanan korporasi, dan solusi transaksi digital institusi.',
    bioI18n: {
      id: 'Melayani pembukaan rekening tabungan bisnis, optimalisasi simpanan korporasi, dan solusi transaksi digital institusi.',
      en: 'Providing business savings accounts, corporate deposit optimization, and institutional digital payment integrations.',
      zh: '提供企业商务储蓄开户、企业存款收益优化及机构数字化交易解决方案。'
    },
    specializations: [
      'BritAma Valas & Multi-Currency',
      'Simpanan Giro Korporasi',
      'Deposito Bunga Khusus',
      'Aplikasi BRImo Bisnis',
      'Layanan Rekening Khusus'
    ],
    specializationsI18n: {
      id: [
        'BritAma Valas & Multi-Currency',
        'Simpanan Giro Korporasi',
        'Deposito Bunga Khusus',
        'Aplikasi BRImo Bisnis',
        'Layanan Rekening Khusus'
      ],
      en: [
        'BritAma FX Multi-Currency',
        'Corporate Checking Accounts',
        'Special Rate Time Deposits',
        'BRImo Business App',
        'Dedicated Escrow Accounts'
      ],
      zh: [
        'BritAma多币种外汇账户',
        '企业活期结算账户',
        '专享高息定期存款',
        'BRImo企业移动端',
        '定制化资金监管账户'
      ]
    }
  },
  {
    id: 'rm-funding-03',
    name: 'Dani Faisal',
    role: 'RM Dana & Funding',
    roleI18n: {
      id: 'RM Dana & Funding',
      en: 'Funding Relationship Manager',
      zh: '资金与存款客户经理'
    },
    segment: 'Funding',
    initials: 'DF',
    phone: '6285867183671',
    displayPhone: '0858-6718-3671',
    email: 'dani.faisal_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 5,
    status: 'Siap Konsultasi',
    bio: 'Spesialis produk tabungan rencana, penempatan deposito korporasi, dan edukasi fasilitas internet banking bisnis.',
    bioI18n: {
      id: 'Spesialis produk tabungan rencana, penempatan deposito korporasi, dan edukasi fasilitas internet banking bisnis.',
      en: 'Specialist in scheduled goal savings, institutional time deposit placements, and corporate internet banking onboarding.',
      zh: '专精于定投储蓄计划、企业大额定期存单及企业网银系统培训上线。'
    },
    specializations: [
      'BritAma Rencana & Bisnis',
      'Cash Management System (CMS)',
      'Simpanan Giro Rupiah',
      'Payroll Management',
      'Kemitraan Komunitas'
    ],
    specializationsI18n: {
      id: [
        'BritAma Rencana & Bisnis',
        'Cash Management System (CMS)',
        'Simpanan Giro Rupiah',
        'Payroll Management',
        'Kemitraan Komunitas'
      ],
      en: [
        'BritAma Goal Savings & Business',
        'Cash Management System (CMS)',
        'IDR Checking Accounts',
        'Payroll Management',
        'Community Banking Partnerships'
      ],
      zh: [
        'BritAma计划储蓄与商务',
        '现金管理系统 (CMS)',
        '印尼盾活期账户',
        '薪资代发统筹管理',
        '商会社区金融合作'
      ]
    }
  },

  // --- 3. RELATIONSHIP MANAGER (RM) KREDIT KOMERSIAL & SME ---
  {
    id: 'rm-lending-01',
    name: 'Utama Farid',
    role: 'RM Kredit Komersial & SME',
    roleI18n: {
      id: 'RM Kredit Komersial & SME',
      en: 'Commercial & SME Lending RM',
      zh: '商业与中小企业信贷客户经理'
    },
    segment: 'Lending',
    initials: 'UF',
    phone: '6281330785880',
    displayPhone: '0813-3078-5880',
    email: 'utama.farid_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 8,
    status: 'Siap Konsultasi',
    bio: 'Berpengalaman menangani fasilitas Kredit Modal Kerja (KMK), Kredit Investasi ekspansi pabrik/ruko, dan Bank Garansi proyek konstruksi.',
    bioI18n: {
      id: 'Berpengalaman menangani fasilitas Kredit Modal Kerja (KMK), Kredit Investasi ekspansi pabrik/ruko, dan Bank Garansi proyek konstruksi.',
      en: 'Experienced in structuring Working Capital Loans (KMK), Commercial Investment Loans for factories/shophouses, and Construction Project Bank Guarantees.',
      zh: '拥有丰富经验，专精于营运资金贷款（KMK）、厂房与商铺商业投资贷款，以及工程建设项目银行保函。'
    },
    specializations: [
      'Kredit Modal Kerja (KMK)',
      'Kredit Investasi Komersial',
      'Bank Garansi & SKBDN',
      'Kredit Konstruksi & Proyek',
      'Pinjaman Sindikasi SME'
    ],
    specializationsI18n: {
      id: [
        'Kredit Modal Kerja (KMK)',
        'Kredit Investasi Komersial',
        'Bank Garansi & SKBDN',
        'Kredit Konstruksi & Proyek',
        'Pinjaman Sindikasi SME'
      ],
      en: [
        'Working Capital Loans (KMK)',
        'Commercial Investment Loans',
        'Bank Guarantees & LC/SKBDN',
        'Construction & Project Loans',
        'SME Syndicated Financing'
      ],
      zh: [
        '营运资金贷款 (KMK)',
        '商业投资贷款',
        '银行保函与国内信用证',
        '建筑工程与项目信贷',
        '中小企业银团贷款'
      ]
    }
  },
  {
    id: 'rm-lending-02',
    name: 'Fahmi Sidik',
    role: 'RM SME (Small & Medium Enterprise)',
    roleI18n: {
      id: 'RM SME (Small & Medium Enterprise)',
      en: 'SME Relationship Manager',
      zh: 'SME 中小企业信贷客户经理'
    },
    segment: 'Lending',
    initials: 'FS',
    phone: '628776271545',
    displayPhone: '0877-6271-545',
    email: 'fahmi.sidik_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 6,
    status: 'Siap Konsultasi',
    bio: 'Melayani pembiayaan segmen SME & usaha komersial menengah, fasilitas modal kerja revolving, serta kredit investasi modern.',
    bioI18n: {
      id: 'Melayani pembiayaan segmen SME & usaha komersial menengah, fasilitas modal kerja revolving, serta kredit investasi modern.',
      en: 'Serving medium-sized SME commercial enterprises with revolving working capital facilities and modern investment loans.',
      zh: '为中型企业提供循环营运资金授信、设备更新及商业投资信贷解决方案。'
    },
    specializations: [
      'Kredit SME & Komersial',
      'Modal Kerja Usaha Menengah',
      'Kredit Investasi Aset & Ruko',
      'Bank Garansi Tender',
      'Fasilitas Valas SME'
    ],
    specializationsI18n: {
      id: [
        'Kredit SME & Komersial',
        'Modal Kerja Usaha Menengah',
        'Kredit Investasi Aset & Ruko',
        'Bank Garansi Tender',
        'Fasilitas Valas SME'
      ],
      en: [
        'SME & Commercial Loans',
        'Revolving Working Capital',
        'Asset & Shophouse Investment',
        'Tender Bank Guarantees',
        'SME FX Trade Facilities'
      ],
      zh: [
        'SME 中小企业贷款',
        '中型企业循环周转金',
        '商用房产与资产投资',
        '投标与履约保函',
        '中小企业外汇授信'
      ]
    },
    customWhatsAppText: 'Halo Pak Fahmi Sidik, saya ingin berkonsultasi terkait fasilitas kredit SME & Modal Kerja di BRI KC Jakarta Jelambar.'
  },

  // --- 4. RELATIONSHIP MANAGER (RM) KREDIT MIKRO & KUR ---
  {
    id: 'rm-mikro-01',
    name: 'Adam Werna Kusuma',
    role: 'RM Kredit Mikro & KUR',
    roleI18n: {
      id: 'RM Kredit Mikro & KUR',
      en: 'Micro Banking & KUR RM',
      zh: '微型金融与 KUR 客户经理'
    },
    segment: 'Mikro',
    initials: 'AW',
    phone: '6281294520098',
    displayPhone: '0812-9452-0098',
    email: 'adam.werna_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Siap membantu percepatan pengajuan KUR Mikro dan Kupedes BRI dengan bunga subsidi pemerintah untuk pedagang dan wirausaha.',
    bioI18n: {
      id: 'Siap membantu percepatan pengajuan KUR Mikro dan Kupedes BRI dengan bunga subsidi pemerintah untuk pedagang dan wirausaha.',
      en: 'Expediting government-subsidized KUR Micro Loans and Kupedes financing for local merchants and growing entrepreneurs.',
      zh: '协助商户与创业者快速申请政府贴息人民普惠贷款（KUR）及灵活的 Kupedes 商业贷款。'
    },
    specializations: [
      'KUR Mikro (s.d Rp 100 Juta)',
      'KUR Kecil (s.d Rp 500 Juta)',
      'Kupedes BRI Fleksibel',
      'Pembiayaan UMKM Naik Kelas',
      'Solusi QRIS Merchant'
    ],
    specializationsI18n: {
      id: [
        'KUR Mikro (s.d Rp 100 Juta)',
        'KUR Kecil (s.d Rp 500 Juta)',
        'Kupedes BRI Fleksibel',
        'Pembiayaan UMKM Naik Kelas',
        'Solusi QRIS Merchant'
      ],
      en: [
        'KUR Micro (Up to IDR 100M)',
        'KUR Small (Up to IDR 500M)',
        'Flexible Kupedes Loans',
        'MSME Upgrade Financing',
        'QRIS Merchant Solutions'
      ],
      zh: [
        'KUR 微型贷款（最高1亿印尼盾）',
        'KUR 小型贷款（最高5亿印尼盾）',
        'Kupedes 灵活微贷',
        '中小微企业成长融资',
        'QRIS 商家收款方案'
      ]
    }
  },
  {
    id: 'rm-mikro-02',
    name: 'Rezki Fitra Ridhoni',
    role: 'RM Kredit Mikro & KUR',
    roleI18n: {
      id: 'RM Kredit Mikro & KUR',
      en: 'Micro Banking & KUR RM',
      zh: '微型金融与 KUR 客户经理'
    },
    segment: 'Mikro',
    initials: 'RF',
    phone: '6282283382914',
    displayPhone: '0822-8338-2914',
    email: 'rezki.fitra_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 5,
    status: 'Siap Konsultasi',
    bio: 'Melayani pengajuan modal kerja mikro, konsultasi syarat berkas KUR, dan pendampingan digitalisasi usaha pasar rakyat.',
    bioI18n: {
      id: 'Melayani pengajuan modal kerja mikro, konsultasi syarat berkas KUR, dan pendampingan digitalisasi usaha pasar rakyat.',
      en: 'Facilitating micro working capital, KUR document requirement advisory, and business digitization for traditional market traders.',
      zh: '提供微型周转金申请、KUR材料准备咨询及传统商圈商户数字化收款转型指导。'
    },
    specializations: [
      'KUR Mikro & Super Mikro',
      'Kupedes Musiman / Bulanan',
      'Kredit Usaha Klaster Pasar',
      'Pendampingan AgenBRILink',
      'EDC Merchant Mikro'
    ],
    specializationsI18n: {
      id: [
        'KUR Mikro & Super Mikro',
        'Kupedes Musiman / Bulanan',
        'Kredit Usaha Klaster Pasar',
        'Pendampingan AgenBRILink',
        'EDC Merchant Mikro'
      ],
      en: [
        'KUR Micro & Ultra Micro',
        'Seasonal / Monthly Kupedes',
        'Market Cluster Financing',
        'AgenBRILink Mentoring',
        'Micro Merchant EDC'
      ],
      zh: [
        'KUR 微型与超级微贷',
        'Kupedes 季节/月结还款',
        '传统商贸市场集群信贷',
        'AgenBRILink 代理辅导',
        '微型商户 POS 终端'
      ]
    }
  },
  {
    id: 'rm-mikro-03',
    name: 'Afriyadie Ramadhan',
    role: 'RM Kredit Mikro & KUR',
    roleI18n: {
      id: 'RM Kredit Mikro & KUR',
      en: 'Micro Banking & KUR RM',
      zh: '微型金融与 KUR 客户经理'
    },
    segment: 'Mikro',
    initials: 'AR',
    phone: '6281284546809',
    displayPhone: '0812-8454-6809',
    email: 'afriyadie.ramadhan_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 6,
    status: 'Siap Konsultasi',
    bio: 'Fokus melayani pembiayaan sektor perdagangan, jasa, dan industri rumahan di wilayah supervisi KC Jakarta Jelambar.',
    bioI18n: {
      id: 'Fokus melayani pembiayaan sektor perdagangan, jasa, dan industri rumahan di wilayah supervisi KC Jakarta Jelambar.',
      en: 'Focusing on retail trade, services, and home manufacturing MSME financing throughout the supervised areas of KC Jelambar.',
      zh: '重点支持 Jelambar 支行辖区内的批发零售、居民服务及家庭工商业微型融资。'
    },
    specializations: [
      'KUR Mikro & Kupedes',
      'Modal Usaha Retail & Grosir',
      'Pinjaman Renovasi Tempat Usaha',
      'Asuransi Mikro BRI',
      'Aktivasi Tabungan Simpedes'
    ],
    specializationsI18n: {
      id: [
        'KUR Mikro & Kupedes',
        'Modal Usaha Retail & Grosir',
        'Pinjaman Renovasi Tempat Usaha',
        'Asuransi Mikro BRI',
        'Aktivasi Tabungan Simpedes'
      ],
      en: [
        'KUR Micro & Kupedes',
        'Retail & Wholesale Working Capital',
        'Commercial Premises Renovation',
        'BRI Micro Insurance',
        'Simpedes Savings Onboarding'
      ],
      zh: [
        'KUR 微贷与 Kupedes',
        '批发零售营运资金',
        '商铺装修与扩建贷款',
        'BRI 普惠微型保险',
        'Simpedes 储蓄开户'
      ]
    }
  },

  // --- 5. RELATIONSHIP MANAGER (RM) COLLECTION & CRR ---
  {
    id: 'rm-collection-01',
    name: 'Sutan Pardamean Hasibuan',
    role: 'RM Collection',
    roleI18n: {
      id: 'RM Collection',
      en: 'Loan Portfolio & Collection RM',
      zh: '信贷资产管理与催收专员'
    },
    segment: 'Collection',
    initials: 'ST',
    phone: '6287773933322',
    displayPhone: '0877-7393-3322',
    email: 'sutan.hasibuan_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 7,
    status: 'Siap Konsultasi',
    bio: 'Fokus menangani pengelolaan portofolio pinjaman, konsultasi kelancaran angsuran, serta penyelesaian kewajiban pembiayaan debitur.',
    bioI18n: {
      id: 'Fokus menangani pengelolaan portofolio pinjaman, konsultasi kelancaran angsuran, serta penyelesaian kewajiban pembiayaan debitur.',
      en: 'Handling loan portfolio performance, installment payment optimization, and debt settlement advisory for commercial debtors.',
      zh: '负责信贷资产组合管理、还款能力评估咨询及借款人债务清偿纾困方案。'
    },
    specializations: [
      'Penanganan Portofolio Kredit',
      'Konsultasi Kelancaran Angsuran',
      'Penyelesaian Kewajiban Nasabah',
      'Manajemen Risiko Pembiayaan',
      'Solusi Pembayaran Fleksibel'
    ],
    specializationsI18n: {
      id: [
        'Penanganan Portofolio Kredit',
        'Konsultasi Kelancaran Angsuran',
        'Penyelesaian Kewajiban Nasabah',
        'Manajemen Risiko Pembiayaan',
        'Solusi Pembayaran Fleksibel'
      ],
      en: [
        'Loan Portfolio Management',
        'Installment Optimization Advisory',
        'Debtor Settlement Solutions',
        'Credit Risk Management',
        'Flexible Repayment Schemes'
      ],
      zh: [
        '信贷资产组合管理',
        '分期还款优化咨询',
        '债务清偿纾困协商',
        '信贷风险控制管理',
        '灵活定制还款方案'
      ]
    },
    customWhatsAppText: 'Halo Pak Sutan, saya ingin berkonsultasi terkait penanganan portofolio dan fasilitas layanan BRI KC Jakarta Jelambar.'
  },
  {
    id: 'rm-crr-01',
    name: 'Yasin Nugraha',
    role: 'RM CRR (Commercial Restructuring & Recovery)',
    roleI18n: {
      id: 'RM CRR (Commercial Restructuring & Recovery)',
      en: 'Commercial Restructuring & Recovery (CRR) RM',
      zh: '商业信贷重组与资产保全专员 (CRR)'
    },
    segment: 'CRR',
    initials: 'YN',
    phone: '6282177773888',
    displayPhone: '0821-7777-3888',
    email: 'yasin.nugraha_jelambar@bri.co.id',
    unitOffice: 'KC Jakarta Jelambar',
    unitOfficeI18n: {
      id: 'KC Jakarta Jelambar',
      en: 'KC Jakarta Jelambar',
      zh: '雅加达 Jelambar 支行'
    },
    experienceYears: 9,
    status: 'Siap Konsultasi',
    bio: 'Spesialis restrukturisasi kredit komersial, penyelamatan aset pembiayaan, perpanjangan tenor, dan skema penyehatan usaha debitur.',
    bioI18n: {
      id: 'Spesialis restrukturisasi kredit komersial, penyelamatan aset pembiayaan, perpanjangan tenor, dan skema penyehatan usaha debitur.',
      en: 'Specialist in commercial credit restructuring, asset preservation, tenure extension (rescheduling), and business rehabilitation programs.',
      zh: '商业贷款重组与资产保全专家，提供贷款展期、利息调整、资产盘活及企业经营纾困辅导。'
    },
    specializations: [
      'Restrukturisasi Kredit Komersial',
      'Penjadwalan Ulang (Rescheduling)',
      'Relaksasi Tenor & Angsuran',
      'Penyelamatan Aset Pembiayaan',
      'Commercial Loan Recovery'
    ],
    specializationsI18n: {
      id: [
        'Restrukturisasi Kredit Komersial',
        'Penjadwalan Ulang (Rescheduling)',
        'Relaksasi Tenor & Angsuran',
        'Penyelamatan Aset Pembiayaan',
        'Commercial Loan Recovery'
      ],
      en: [
        'Commercial Debt Restructuring',
        'Loan Rescheduling',
        'Tenor & Interest Relief',
        'Collateral Asset Recovery',
        'Commercial Debt Rehabilitation'
      ],
      zh: [
        '商业信贷债务重组',
        '还款计划展期 (Rescheduling)',
        '期限与利息减负调整',
        '抵押资产保全盘活',
        '商业不良债权处置'
      ]
    },
    customWhatsAppText: 'Halo Pak Yasin Nugraha, saya ingin berkonsultasi terkait layanan restrukturisasi kredit komersial di BRI KC Jakarta Jelambar.'
  }
];

export function getMemberBio(member: TeamMember, lang: Language): string {
  if (member.bioI18n && member.bioI18n[lang]) {
    return member.bioI18n[lang];
  }
  return member.bio || '';
}

export function getMemberRole(member: TeamMember, lang: Language): string {
  if (member.roleI18n && member.roleI18n[lang]) {
    return member.roleI18n[lang];
  }
  return member.role;
}

export function getMemberOffice(member: TeamMember, lang: Language): string {
  if (member.unitOfficeI18n && member.unitOfficeI18n[lang]) {
    return member.unitOfficeI18n[lang];
  }
  return member.unitOffice;
}

export function getMemberSpecializations(member: TeamMember, lang: Language): string[] {
  if (member.specializationsI18n && member.specializationsI18n[lang]) {
    return member.specializationsI18n[lang];
  }
  return member.specializations;
}

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
