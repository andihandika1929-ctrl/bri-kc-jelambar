import { Language } from './translations';

export type OrgLevel = 1 | 2 | 3 | 4 | 5;

export interface LocalizedText {
  id: string;
  en: string;
  zh: string;
}

export interface OrgPerson {
  id: string;
  name: string;
  role: string;
  roleI18n?: LocalizedText;
  level: OrgLevel;
  departmentKey: 'leadership' | 'managers' | 'supervisors' | 'rm' | 'frontline_support';
  departmentName: string;
  departmentNameI18n?: LocalizedText;
  groupCategory?: 'sme' | 'crr' | 'funding' | 'mikro' | 'banking_hall' | 'adk_murni' | 'admin_mikro_agen' | 'backoffice_it';
  groupCategoryLabel?: LocalizedText;
  initials: string;
  phone?: string;
  specialBadge?: string;
  specialBadgeI18n?: LocalizedText;
  jobdesk: string[];
  jobdeskI18n?: {
    id: string[];
    en: string[];
    zh: string[];
  };
  kpis?: string[];
  kpisI18n?: {
    id: string[];
    en: string[];
    zh: string[];
  };
}

export interface LevelHeaderMeta {
  level: OrgLevel;
  title: string;
  titleI18n: LocalizedText;
  subtitle: string;
  subtitleI18n: LocalizedText;
  badge: string;
  badgeColor: string;
}

export const organizationLevelsMeta: LevelHeaderMeta[] = [
  {
    level: 1,
    title: 'Pimpinan Kantor Cabang',
    titleI18n: {
      id: 'Pimpinan Kantor Cabang',
      en: 'Branch Office Leadership',
      zh: '支行管理层'
    },
    subtitle: 'Penanggung jawab operasional, pencapaian bisnis, dan kepatuhan tata kelola perbankan di BRI KC Jakarta Jelambar.',
    subtitleI18n: {
      id: 'Penanggung jawab operasional, pencapaian bisnis, dan kepatuhan tata kelola perbankan di BRI KC Jakarta Jelambar.',
      en: 'Responsible for banking operations, business achievement, and corporate governance compliance at BRI KC Jakarta Jelambar.',
      zh: '负责 BRI 雅加达 Jelambar 支行的各项日常营运、业务经营指标达成及银行公司治理合规。'
    },
    badge: 'PIMPINAN KANTOR CABANG',
    badgeColor: 'bg-[#0052CC] text-white border-[#0052CC]'
  },
  {
    level: 2,
    title: 'Manajer Operasional & Bisnis',
    titleI18n: {
      id: 'Manajer Operasional & Bisnis',
      en: 'Operations & Business Managers',
      zh: '运营与业务主管经理'
    },
    subtitle: 'Pemimpin strategis pilar operasional, bisnis komersial kecil, mikro supervisi unit, dan dana transaksi.',
    subtitleI18n: {
      id: 'Pemimpin strategis pilar operasional, bisnis komersial kecil, mikro supervisi unit, dan dana transaksi.',
      en: 'Strategic leaders overseeing operations, small commercial lending, micro finance, and transaction funding.',
      zh: '主导营运服务、小企业商业信贷、普惠微贷及资金交易四大业务支柱。'
    },
    badge: 'MANAJER OPERASIONAL & BISNIS',
    badgeColor: 'bg-blue-50 text-[#0052CC] border-blue-200'
  },
  {
    level: 3,
    title: 'Supervisi Operasional & Administrasi Kredit',
    titleI18n: {
      id: 'Supervisi Operasional & Administrasi Kredit',
      en: 'Operations & Credit Supervisors',
      zh: '运营与信贷主管'
    },
    subtitle: 'Pengawas langsung kelancaran operasional layanan nasabah, administrasi, dan kepatuhan kredit cabang.',
    subtitleI18n: {
      id: 'Pengawas langsung kelancaran operasional layanan nasabah, administrasi, dan kepatuhan kredit cabang.',
      en: 'Direct supervisors ensuring service quality, operational smoothness, and credit administration compliance.',
      zh: '直接督导大堂柜面服务、后台运营及信贷档案合规流转。'
    },
    badge: 'SUPERVISI OPERASIONAL & ADMINISTRASI KREDIT',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    level: 4,
    title: 'Tim Relationship Manager (RM)',
    titleI18n: {
      id: 'Tim Relationship Manager (RM)',
      en: 'Relationship Management Team',
      zh: '客户经理团队'
    },
    subtitle: 'Tenaga profesional pemasaran dan penasihat finansial untuk segmen SME, Dana/Funding, Mikro, dan CRR Lelang.',
    subtitleI18n: {
      id: 'Tenaga profesional pemasaran dan penasihat finansial untuk segmen SME, Dana/Funding, Mikro, dan CRR Lelang.',
      en: 'Specialized financial advisors and relationship officers across SME Lending, Funding, Micro, and CRR & Legal Asset Recovery.',
      zh: '负责 SME 中小企业授信、大额资金管理、普惠微贷及商业贷款重组与法务清算。'
    },
    badge: 'TIM RELATIONSHIP MANAGER (RM)',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200'
  },
  {
    level: 5,
    title: 'Layanan Nasabah & Penunjang Operasional',
    titleI18n: {
      id: 'Layanan Nasabah & Penunjang Operasional',
      en: 'Customer Services & Branch Support',
      zh: '客户服务与运营支持团队'
    },
    subtitle: 'Kekuatan operasional di Banking Hall, administrasi kredit, penunjang bisnis mikro & keagenan, serta IT backoffice.',
    subtitleI18n: {
      id: 'Kekuatan operasional di Banking Hall, administrasi kredit, penunjang bisnis mikro & keagenan, serta IT backoffice.',
      en: 'Operational backbone spanning the Banking Hall, Credit Admin, Micro & Agency Support, and IT Backoffice.',
      zh: '营业大厅柜面、信贷审查、微贷与代理人支持、及 IT 后台综合运营保障。'
    },
    badge: 'LAYANAN NASABAH & PENUNJANG OPERASIONAL',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300'
  }
];

export const organizationData: OrgPerson[] = [
  // =========================================================================
  // 1. PIMPINAN KANTOR CABANG
  // =========================================================================
  {
    id: 'l1-pincab',
    name: 'Adi Sujarwanto',
    role: 'Pemimpin Cabang (Branch Office Head)',
    roleI18n: {
      id: 'Pemimpin Cabang (Branch Office Head)',
      en: 'Branch Office Head (Pemimpin Cabang)',
      zh: '支行行长 (Branch Office Head)'
    },
    level: 1,
    departmentKey: 'leadership',
    departmentName: 'Pimpinan Kantor Cabang',
    departmentNameI18n: {
      id: 'Pimpinan Kantor Cabang',
      en: 'Branch Office Leadership',
      zh: '支行管理决策层'
    },
    initials: 'AS',
    jobdesk: [
      'Memimpin arah kebijakan strategis bisnis, pengawasan kepatuhan tata kelola perbankan, dan supervisi seluruh jaringan unit kerja KC Jakarta Jelambar.',
      'Menetapkan rencana kerja dan anggaran tahunan (RKAT) serta memastikan pencapaian target profitabilitas, funding, dan penyaluran kredit produktif.',
      'Menerapkan prinsip Good Corporate Governance (GCG), manajemen risiko menyeluruh, dan kepatuhan ketat terhadap regulasi OJK & Bank Indonesia.',
      'Membina hubungan kelembagaan strategis dengan pemerintah daerah, korporasi mitra, dan komunitas niaga di wilayah Jakarta Barat.'
    ],
    jobdeskI18n: {
      id: [
        'Memimpin arah kebijakan strategis bisnis, pengawasan kepatuhan tata kelola perbankan, dan supervisi seluruh jaringan unit kerja KC Jakarta Jelambar.',
        'Menetapkan rencana kerja dan anggaran tahunan (RKAT) serta memastikan pencapaian target profitabilitas, funding, dan penyaluran kredit produktif.',
        'Menerapkan prinsip Good Corporate Governance (GCG), manajemen risiko menyeluruh, dan kepatuhan ketat terhadap regulasi OJK & Bank Indonesia.',
        'Membina hubungan kelembagaan strategis dengan pemerintah daerah, korporasi mitra, dan komunitas niaga di wilayah Jakarta Barat.'
      ],
      en: [
        'Direct strategic business policies, banking governance compliance, and supervise the entire operational network of KC Jakarta Jelambar.',
        'Formulate annual operating budgets (RKAT) and drive target delivery in branch profitability, funding (CASA), and productive lending.',
        'Enforce Good Corporate Governance (GCG), enterprise risk mitigations, and strict adherence to Bank Indonesia & OJK regulations.',
        'Cultivate strategic institutional partnerships with local government bodies, corporate enterprises, and commerce chambers.'
      ],
      zh: [
        '全面统领经营战略方针、银行业务合规治理，并统筹监督 KC Jakarta Jelambar 下属全辖网点。',
        '制定支行年度经营预算（RKAT），全面保障净利润、低成本存款及生产性信贷投放目标达成。',
        '严密落实良好公司治理（GCG）原则与全面风险防控，确保符合印尼央行与金融服务管理局（OJK）监管要求。',
        '深化与西雅加达各级政府机关、大型企业战略客户及商会组织的政银企高层合作。'
      ]
    },
    kpis: [
      'Pencapaian Target Profit & Laba Bersih Cabang',
      'Pertumbuhan CASA (Current & Savings Account)',
      'Kualitas Portofolio Kredit (NPL Ratio < 2%)',
      'Audit Rating & Service Excellence Index'
    ],
    kpisI18n: {
      id: [
        'Pencapaian Target Profit & Laba Bersih Cabang',
        'Pertumbuhan CASA (Current & Savings Account)',
        'Kualitas Portofolio Kredit (NPL Ratio < 2%)',
        'Audit Rating & Service Excellence Index'
      ],
      en: [
        'Branch Net Profit & Operating Income Delivery',
        'Low-Cost Deposit (CASA) Expansion',
        'Credit Asset Health (NPL Ratio < 2%)',
        'Internal Audit Rating & Service Excellence Score'
      ],
      zh: [
        '全辖净利润与营业收入考核完成率',
        '低成本活期与储蓄（CASA）占比与增量',
        '信贷资产质量稳健性（不良率 NPL < 2%）',
        '总行内控合规审计与服务质量评级'
      ]
    }
  },

  // =========================================================================
  // 2. MANAJER OPERASIONAL & BISNIS (4 Manajer)
  // =========================================================================
  {
    id: 'l2-jaka',
    name: 'Jaka Farisa',
    role: 'Manajer Operasional & Layanan (MOL)',
    roleI18n: {
      id: 'Manajer Operasional & Layanan (MOL)',
      en: 'Operations & Service Quality Manager (MOL)',
      zh: '营运与服务质量总监 (MOL)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Departemen Operasional & Layanan',
    departmentNameI18n: {
      id: 'Departemen Operasional & Layanan',
      en: 'Operations & Customer Service Dept',
      zh: '营运支持与客户服务部'
    },
    initials: 'JF',
    jobdesk: [
      'Mengawasi seluruh kelancaran operasional harian kasir teller, back office, clearing kliring perbankan, dan IT infrastruktur ATM/CRM.',
      'Menjaga standar Service Excellence mutu pelayanan nasabah di Banking Hall dan memonitoring SOP tim Universal Banker (UB).',
      'Mengelola manajemen likuiditas kas cabang (cash vault) serta kepatuhan limit transaksi teller dan pengiriman uang.',
      'Menangani eskalasi keluhan nasabah (customer complaint resolution) dan menjamin kecepatan penyelesaian komplain layanan digital.'
    ],
    jobdeskI18n: {
      id: [
        'Mengawasi seluruh kelancaran operasional harian kasir teller, back office, clearing kliring perbankan, dan IT infrastruktur ATM/CRM.',
        'Menjaga standar Service Excellence mutu pelayanan nasabah di Banking Hall dan memonitoring SOP tim Universal Banker (UB).',
        'Mengelola manajemen likuiditas kas cabang (cash vault) serta kepatuhan limit transaksi teller dan pengiriman uang.',
        'Menangani eskalasi keluhan nasabah (customer complaint resolution) dan menjamin kecepatan penyelesaian komplain layanan digital.'
      ],
      en: [
        'Oversee daily operational workflows across tellers, back office processing, interbank clearing, and ATM/CRM fleet.',
        'Ensure frontline Service Excellence standards and monitor operational compliance of Universal Bankers.',
        'Manage vault cash liquidity, teller authorization limits, and secure armored cash transportation.',
        'Handle complex customer complaint escalations with prompt turnaround times for digital banking services.'
      ],
      zh: [
        '全面监督前台柜员、后台清算核算、票据交换及 ATM/CRM 设备的日常高效平稳运行。',
        '严格把控营业大厅卓越服务规范，监督全能银行家标准作业程序的合规落实。',
        '管理金库现金头寸、柜员授权限额及现金押运安全调配。',
        '负责处理客户重大业务咨询与投诉升级，确保数字化渠道问题快速解决。'
      ]
    }
  },
  {
    id: 'l2-dwiyanto',
    name: 'Dwiyanto Ario Putro',
    role: 'Small Business Manager (SBM)',
    roleI18n: {
      id: 'Small Business Manager (SBM)',
      en: 'Small Business Manager (SBM)',
      zh: '中小企业业务经理 (SBM)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Bisnis Komersial & SME',
    departmentNameI18n: {
      id: 'Bisnis Komersial & SME',
      en: 'Commercial & SME Business Division',
      zh: '商业贷款与中小企业业务部'
    },
    initials: 'DA',
    jobdesk: [
      'Memimpin strategi penetrasi dan penyaluran fasilitas pembiayaan Kredit Modal Kerja (KMK), Kredit Investasi, dan Bank Garansi komersial.',
      'Mengkoordinir tim RM SME dalam pencapaian target portofolio pembiayaan serta menjaga kualitas debitur agar senantiasa sehat.'
    ],
    jobdeskI18n: {
      id: [
        'Memimpin strategi penetrasi dan penyaluran fasilitas pembiayaan Kredit Modal Kerja (KMK), Kredit Investasi, dan Bank Garansi komersial.',
        'Mengkoordinir tim RM SME dalam pencapaian target portofolio pembiayaan serta menjaga kualitas debitur agar senantiasa sehat.'
      ],
      en: [
        'Leading penetration strategy and loan disbursement for Working Capital Loans (KMK), Investment Loans, and commercial Bank Guarantees.',
        'Coordinating SME RM team in achieving loan portfolio targets and maintaining healthy borrower asset quality.'
      ],
      zh: [
        '主导流动资金贷款 (KMK)、固定资产投资贷款及商业银行保函的授信审批与拓展策略。',
        '统筹协调中小企业客户经理团队达成信贷规模目标，并严控资产质量保持优良。'
      ]
    }
  },
  {
    id: 'l2-denis',
    name: 'Denis Sepriyanto',
    role: 'Manajer Bisnis Mikro (MBM)',
    roleI18n: {
      id: 'Manajer Bisnis Mikro (MBM)',
      en: 'Micro Business Manager (MBM)',
      zh: '普惠微型金融业务总监 (MBM)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Departemen Bisnis Mikro & Supervisi Unit',
    departmentNameI18n: {
      id: 'Departemen Bisnis Mikro & Supervisi Unit',
      en: 'Micro Business & Unit Supervision Dept',
      zh: '微型普惠金融与网点管理部'
    },
    initials: 'DS',
    jobdesk: [
      'Mengkoordinasikan dan mensupervisi operasional bisnis mikro di 8 Kantor Unit yang berada di bawah naungan KC Jakarta Jelambar.',
      'Mendorong percepatan penyaluran Kredit Usaha Rakyat (KUR Mikro & Super Mikro) dan Kupedes bagi pelaku UMKM pasar rakyat.',
      'Mengembangkan jaringan kemitraan AgenBRILink serta digitalisasi merchant QRIS di sentra-sentra perdagangan mikro.',
      'Melakukan monitoring kolektibilitas angsuran kredit mikro dan pembinaan mantri di seluruh unit supervisi.'
    ],
    jobdeskI18n: {
      id: [
        'Mengkoordinasikan dan mensupervisi operasional bisnis mikro di 8 Kantor Unit yang berada di bawah naungan KC Jakarta Jelambar.',
        'Mendorong percepatan penyaluran Kredit Usaha Rakyat (KUR Mikro & Super Mikro) dan Kupedes bagi pelaku UMKM pasar rakyat.',
        'Mengembangkan jaringan kemitraan AgenBRILink serta digitalisasi merchant QRIS di sentra-sentra perdagangan mikro.',
        'Melakukan monitoring kolektibilitas angsuran kredit mikro dan pembinaan mantri di seluruh unit supervisi.'
      ],
      en: [
        'Coordinate and supervise micro-banking business across all 8 supervised unit branches under KC Jakarta Jelambar.',
        'Accelerate distribution of subsidized KUR Micro Loans and Kupedes financing for grassroots traders.',
        'Expand the AgenBRILink agency network and QRIS merchant digitalization in local commercial markets.',
        'Monitor micro loan collectibility and mentor field loan officers across the unit branch network.'
      ],
      zh: [
        '统筹监管 Jelambar 支行下辖 8 家基层营业所的普惠微型金融业务运营。',
        '大力推动政府贴息人民普惠贷款（KUR）及 Kupedes 微贷投放。',
        '拓展 AgenBRILink 助农便民代理网点及传统集贸市场二维码商户数字化转型。',
        '严密监控微贷资产回收率，指导基层外勤信贷员做好普惠风控。'
      ]
    }
  },
  {
    id: 'l2-eugenia',
    name: 'Eugenia Javanica Ratna Puri',
    role: 'RM Funding & Transaction (RMFT)',
    roleI18n: {
      id: 'RM Funding & Transaction (RMFT)',
      en: 'RM Funding & Transaction (RMFT)',
      zh: '资金与交易客户经理 (RMFT)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Dana, Giro & Cash Management Korporasi',
    departmentNameI18n: {
      id: 'Dana, Giro & Cash Management Korporasi',
      en: 'Corporate Deposits, Current Accounts & Cash Management',
      zh: '企业存款、往来账户与现金管理部'
    },
    initials: 'EJ',
    jobdesk: [
      'Memimpin strategi penghimpunan Dana Pihak Ketiga (DPK), optimalisasi giro operasional bisnis, deposito valas/rupiah, dan kemitraan payroll.',
      'Mengembangkan ekosistem transaksi perbankan digital institusi, cash management system (CMS), serta penetrasi mesin EDC dan merchant QRIS.'
    ],
    jobdeskI18n: {
      id: [
        'Memimpin strategi penghimpunan Dana Pihak Ketiga (DPK), optimalisasi giro operasional bisnis, deposito valas/rupiah, dan kemitraan payroll.',
        'Mengembangkan ekosistem transaksi perbankan digital institusi, cash management system (CMS), serta penetrasi mesin EDC dan merchant QRIS.'
      ],
      en: [
        'Leading Third-Party Funds (DPK) accumulation strategy, optimizing business current accounts, FX/IDR deposits, and institutional payroll partnerships.',
        'Developing institutional digital banking ecosystems, Cash Management Systems (CMS), and expanding EDC Android & merchant QRIS penetration.'
      ],
      zh: [
        '主导第三方存款（DPK）吸储策略，优化企业日常往来账户、外币/本币定期存款以及代发薪资业务合作。',
        '拓展机构数字化银行生态圈、企业现金管理系统 (CMS) 以及智能 POS/EDC 和商户 QRIS 的商圈覆盖。'
      ]
    }
  },

  {
    id: 'l2-aprita',
    name: 'Aprita Dinasari',
    role: 'Asisten Manajer Operasional & Layanan (AMOL)',
    roleI18n: {
      id: 'Asisten Manajer Operasional & Layanan (AMOL)',
      en: 'Assistant Manager Operations & Service (AMOL)',
      zh: '营运与服务助理经理 (AMOL)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Manajemen Operasional & Layanan',
    departmentNameI18n: {
      id: 'Manajemen Operasional & Layanan',
      en: 'Operations & Service Management',
      zh: '营运与服务管理组'
    },
    initials: 'AD',
    jobdesk: [
      'Membantu Manajer Operasional & Layanan (MOL) dalam perencanaan, pengawasan, dan evaluasi operasional perbankan harian cabang.',
      'Supervisi kepatuhan operasional kas, koordinasi tindak lanjut audit intern, dan mitigasi risiko operasional cabang.',
      'Memastikan standar kualitas layanan (Service Quality) berjalan konsisten di seluruh unit kerja KC Jakarta Jelambar.'
    ],
    jobdeskI18n: {
      id: [
        'Membantu Manajer Operasional & Layanan (MOL) dalam perencanaan, pengawasan, dan evaluasi operasional perbankan harian cabang.',
        'Supervisi kepatuhan operasional kas, koordinasi tindak lanjut audit intern, dan mitigasi risiko operasional cabang.',
        'Memastikan standar kualitas layanan (Service Quality) berjalan konsisten di seluruh unit kerja KC Jakarta Jelambar.'
      ],
      en: [
        'Assisting the Operations & Service Quality Manager (MOL) in planning, supervising, and evaluating daily branch banking operations.',
        'Supervising cash operational compliance, coordinating internal audit follow-ups, and mitigating branch operational risks.',
        'Ensuring consistent execution of Service Quality standards across all operational units of KC Jakarta Jelambar.'
      ],
      zh: [
        '协助营运与服务质量总监（MOL）统筹规划、监督与评估支行日常银行业务运营。',
        '监督现金运营合规、协调落实内部审计整改并做好支行日常运营风险防范。',
        '确保卓越服务质量标准（Service Quality）在 KC Jakarta Jelambar 全辖网点稳健落实。'
      ]
    }
  },
  // =========================================================================
  // 3. SUPERVISI OPERASIONAL & ADMINISTRASI KREDIT (2 Supervisor)
  // =========================================================================
  {
    id: 'l3-syamsul',
    name: 'Syamsul Hidayatullah',
    role: 'Supervisor Operasional & Layanan (SOL)',
    roleI18n: {
      id: 'Supervisor Operasional & Layanan (SOL)',
      en: 'Operations & Service Supervisor (SOL)',
      zh: '运营与服务主管 (SOL)'
    },
    level: 3,
    departmentKey: 'supervisors',
    departmentName: 'Operasional & Layanan Banking Hall',
    departmentNameI18n: {
      id: 'Operasional & Layanan Banking Hall',
      en: 'Banking Hall Operations & Services',
      zh: '营业厅运营与服务部'
    },
    initials: 'SH',
    jobdesk: [
      'Memimpin dan mengawasi jalannya standar pelayanan Service Excellence frontliner (Customer Service, Teller, Universal Banker) di Banking Hall KC Jakarta Jelambar.',
      'Pelaksanaan otorisasi transaksi kas, validasi operasional harian, dan penanganan eskalasi kendala transaksi nasabah.'
    ],
    jobdeskI18n: {
      id: [
        'Memimpin dan mengawasi jalannya standar pelayanan Service Excellence frontliner (Customer Service, Teller, Universal Banker) di Banking Hall KC Jakarta Jelambar.',
        'Pelaksanaan otorisasi transaksi kas, validasi operasional harian, dan penanganan eskalasi kendala transaksi nasabah.'
      ],
      en: [
        'Leading and supervising Service Excellence frontline standards (Customer Service, Teller, Universal Banker) across Banking Hall KC Jakarta Jelambar.',
        'Executing cash transaction authorizations, daily operational validation, and managing customer service transaction escalations.'
      ],
      zh: [
        '领导并监督 KC Jakarta Jelambar 营业厅前台（客户服务、出纳柜员、全能银行家）的卓越服务标准落地执行。',
        '执行现金业务授权、日常运营合规核验以及客户疑难业务纠纷的升级处理。'
      ]
    }
  },
  {
    id: 'l3-rafika',
    name: 'Rafika Widya Sari',
    role: 'Supervisor Operasional Kredit (SPV ADK)',
    roleI18n: {
      id: 'Supervisor Operasional Kredit (SPV ADK)',
      en: 'Credit Operations Supervisor (SPV ADK)',
      zh: '信贷操作与放款审查主管 (SPV ADK)'
    },
    level: 3,
    departmentKey: 'supervisors',
    departmentName: 'Administrasi & Operasional Kredit',
    departmentNameI18n: {
      id: 'Administrasi & Operasional Kredit',
      en: 'Credit Administration & Operations',
      zh: '信贷后台运营与放款审查组'
    },
    initials: 'RW',
    jobdesk: [
      'Memverifikasi kelengkapan dokumen legalitas pinjaman sebelum proses pencairan kredit (disbursement).',
      'Mengawasi pengikatan agunan notariil (APHT/Fidusia/SKMHT) bersama rekanan Notaris resmi Bank BRI.',
      'Memastikan seluruh syarat penarikan kredit (precedent drawdown conditions) terpenuhi 100% tanpa cacat hukum.',
      'Mengelola penyimpanan berkas asli sertifikat agunan di ruang khasanah berkas berharga.'
    ],
    jobdeskI18n: {
      id: [
        'Memverifikasi kelengkapan dokumen legalitas pinjaman sebelum proses pencairan kredit (disbursement).',
        'Mengawasi pengikatan agunan notariil (APHT/Fidusia/SKMHT) bersama rekanan Notaris resmi Bank BRI.',
        'Memastikan seluruh syarat penarikan kredit (precedent drawdown conditions) terpenuhi 100% tanpa cacat hukum.',
        'Mengelola penyimpanan berkas asli sertifikat agunan di ruang khasanah berkas berharga.'
      ],
      en: [
        'Verify credit legal documentation completeness prior to formal loan disbursements.',
        'Supervise notarial collateral encumbrances (mortgage deed/hypothec/fiduciary) with accredited notaries.',
        'Ensure 100% satisfaction of all precedent drawdown conditions without legal defects.',
        'Manage safe custody and registration of original collateral title certificates in fireproof vaults.'
      ],
      zh: [
        '在信贷资金正式放款入账前，严格审查借款合同与法律担保手续的完备性。',
        '协同官方合作公证处落实不动产抵押权设立（APHT）及动产质押登记。',
        '确保所有提款先决条件完全成就，消除放款法律瑕疵。',
        '负责将产权证书等核心抵押权证归档至支行核心金库妥善保管。'
      ]
    }
  },

  // =========================================================================
  // 4. TIM RELATIONSHIP MANAGER (RM)
  // =========================================================================
  // --- 4.1 SME & COMMERCIAL ---
  {
    id: 'l4-utama',
    name: 'Utama Farid',
    role: 'RM SME',
    roleI18n: {
      id: 'RM SME',
      en: 'SME Relationship Manager',
      zh: 'SME 中小企业信贷客户经理'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'sme',
    groupCategoryLabel: {
      id: 'SME & Commercial',
      en: 'SME & Commercial Lending',
      zh: '中小企业与商业信贷'
    },
    departmentName: 'Divisi Bisnis Komersial & SME',
    initials: 'UF',
    phone: '6281330785880',
    jobdesk: [
      'Penanganan fasilitas Kredit Modal Kerja (KMK), Kredit Investasi pabrik/ruko, dan fasilitas Bank Garansi proyek.',
      'Melakukan on-the-spot (OTS) pemeriksaan kelayakan usaha dan taksasi nilai pasar agunan komersial.',
      'Penyusunan proposal kredit komersial dan pemantauan rasio keuangan debitur korporat.'
    ]
  },
  {
    id: 'l4-fahmi',
    name: 'Fahmi Sidik',
    role: 'RM SME Quality',
    roleI18n: {
      id: 'RM SME Quality',
      en: 'SME Quality Relationship Manager',
      zh: 'SME 优质中小企业信贷经理'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'sme',
    groupCategoryLabel: {
      id: 'SME & Commercial',
      en: 'SME & Commercial Lending',
      zh: '中小企业与商业信贷'
    },
    departmentName: 'Divisi Bisnis Komersial & SME',
    initials: 'FS',
    phone: '628776271545',
    jobdesk: [
      'Penyaluran pembiayaan segmen SME menengah berkualitas tinggi, modal kerja revolving, dan kredit investasi aset.',
      'Menyusun Nota Analisis Kredit (NAK) dan pemantauan kualitas kolektibilitas debitur usaha.',
      'Pengembangan kemitraan rantai pasok (supply chain financing) bagi pelaku bisnis di Jakarta Barat.'
    ]
  },

  // --- 4.2 FUNDING & TRANSACTION ---
  {
    id: 'l4-ahmad',
    name: 'Ahmad Firdaus',
    role: 'RMFT Business',
    roleI18n: {
      id: 'RMFT Business',
      en: 'Business Funding & Transaction RM (RMFT Business)',
      zh: '企业资金与交易客户经理 (RMFT Business)'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'funding',
    groupCategoryLabel: {
      id: 'Funding & Transaction',
      en: 'Funding & Transaction Banking',
      zh: '资金存款与交易银行'
    },
    departmentName: 'Divisi Dana & Transaksi Perbankan',
    initials: 'AF',
    phone: '6281340902924',
    jobdesk: [
      'Pengelolaan likuiditas korporasi, pembukaan Giro Bisnis Rupiah/Valas, Deposito institusi, dan integrasi Cash Management System (CMS).',
      'Penyelenggaraan program kemitraan Payroll institusi dan akuisisi dana murah (CASA).',
      'Konsultasi penempatan dana surplus badan usaha dengan instrumen simpanan berbunga kompetitif.'
    ]
  },
  {
    id: 'l4-dani',
    name: 'Dani Faisal',
    role: 'RMFT Individu Branch',
    roleI18n: {
      id: 'RMFT Individu Branch',
      en: 'Individual Funding RM (RMFT Individu Branch)',
      zh: '个人资金与交易客户经理 (RMFT Individu Branch)'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'funding',
    groupCategoryLabel: {
      id: 'Funding & Transaction',
      en: 'Funding & Transaction Banking',
      zh: '资金存款与交易银行'
    },
    departmentName: 'Divisi Dana & Transaksi Perbankan',
    initials: 'DF',
    phone: '6285867183671',
    jobdesk: [
      'Spesialisasi penempatan deposito berjangka bunga kompetitif dan tabungan bisnis BritAma.',
      'Edukasi fitur internet banking bisnis dan pengelolaan rekening khusus perorangan prioritas.',
      'Pendampingan integrasi rekening payroll bagi karyawan korporasi dan institusi pendidikan.'
    ]
  },
  {
    id: 'l4-syafira',
    name: 'Syafira Febrianty',
    role: 'RMFT Individu Branch',
    roleI18n: {
      id: 'RMFT Individu Branch',
      en: 'Individual Funding RM (RMFT Individu Branch)',
      zh: '个人资金与交易客户经理 (RMFT Individu Branch)'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'funding',
    groupCategoryLabel: {
      id: 'Funding & Transaction',
      en: 'Funding & Transaction Banking',
      zh: '资金存款与交易银行'
    },
    departmentName: 'Divisi Dana & Transaksi Perbankan',
    initials: 'SF',
    phone: '6287777450533',
    jobdesk: [
      'Pembukaan rekening tabungan bisnis valas, optimalisasi simpanan korporasi, dan solusi transaksi digital institusi.',
      'Pendampingan onboarding nasabah prioritas dan transaksi valuta asing multi-currency.',
      'Sosialisasi produk simpanan berjangka dan program apresiasi nasabah loyal Bank BRI.'
    ]
  },

  // --- 4.3 MIKRO ---
  {
    id: 'l4-afriyadie',
    name: 'Afriyadie Ramadhan',
    role: 'RM Mikro',
    roleI18n: {
      id: 'RM Mikro',
      en: 'Micro Banking RM',
      zh: '微型普惠金融客户经理'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'mikro',
    groupCategoryLabel: {
      id: 'Mikro (Kredit Usaha Rakyat & Kupedes)',
      en: 'Micro Banking (KUR & Kupedes)',
      zh: '微型普惠金融 (KUR & Kupedes)'
    },
    departmentName: 'Divisi Kredit Mikro & Retail',
    initials: 'AR',
    phone: '6281284546809',
    jobdesk: [
      'Penyaluran pembiayaan mikro sektor retail, jasa, dan industri rumahan di wilayah supervisi KC Jelambar.',
      'Konsultasi berkas persyaratan KUR dan fasilitas asuransi mikro perlindungan usaha.',
      'Monitoring pemanfaatan kredit agar tepat sasaran untuk perkuatan modal kerja produktif.'
    ]
  },
  {
    id: 'l4-adam',
    name: 'Adam Werna Kusuma',
    role: 'RM Mikro',
    roleI18n: {
      id: 'RM Mikro',
      en: 'Micro Banking RM',
      zh: '微型普惠金融客户经理'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'mikro',
    groupCategoryLabel: {
      id: 'Mikro (Kredit Usaha Rakyat & Kupedes)',
      en: 'Micro Banking (KUR & Kupedes)',
      zh: '微型普惠金融 (KUR & Kupedes)'
    },
    departmentName: 'Divisi Kredit Mikro & Retail',
    initials: 'AW',
    phone: '6281294520098',
    jobdesk: [
      'Penyaluran Kredit Usaha Rakyat (KUR Mikro & Kecil) bagi pedagang dan pengusaha UMKM di wilayah Jelambar.',
      'Sosialisasi fasilitas Kupedes dan pengadaan mesin EDC Android serta soundbox QRIS merchant.',
      'Pendampingan pembukuan keuangan dasar dan digitalisasi transaksi kasir pedagang binaan.'
    ]
  },
  {
    id: 'l4-rezki',
    name: 'Rezki Fitra Ridhoni',
    role: 'RM Mikro',
    roleI18n: {
      id: 'RM Mikro',
      en: 'Micro Banking RM',
      zh: '微型普惠金融客户经理'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'mikro',
    groupCategoryLabel: {
      id: 'Mikro (Kredit Usaha Rakyat & Kupedes)',
      en: 'Micro Banking (KUR & Kupedes)',
      zh: '微型普惠金融 (KUR & Kupedes)'
    },
    departmentName: 'Divisi Kredit Mikro & Retail',
    initials: 'RF',
    phone: '6282283382914',
    jobdesk: [
      'Fasilitasi permodalan kerja mikro klaster pasar tradisional dan pendampingan pembukaan rekening BritAma Bisnis.',
      'Pembinaan kemitraan AgenBRILink untuk memperluas inklusi keuangan di Jakarta Barat.',
      'Pemberdayaan klaster usaha binaan melalui program edukasi literasi keuangan Bank BRI.'
    ]
  },

  // --- 4.4 CRR, COLLECTION & LELANG ---
  {
    id: 'l4-yasin',
    name: 'Yasin Nugraha',
    role: 'RM CRR (Credit Restructuring & Recovery)',
    roleI18n: {
      id: 'RM CRR (Credit Restructuring & Recovery)',
      en: 'Credit Restructuring & Recovery (CRR) RM',
      zh: '商业信贷重组与资产保全专员 (CRR)'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'crr',
    groupCategoryLabel: {
      id: 'CRR, Collection & Lelang',
      en: 'CRR, Collection & Asset Auctions',
      zh: '信贷重组、清收与抵押拍卖'
    },
    departmentName: 'Divisi Restrukturisasi & Recovery',
    initials: 'YN',
    phone: '6282177773888',
    jobdesk: [
      'Penataan kembali kewajiban pinjaman komersial, perpanjangan tenor (rescheduling), dan skema relaksasi angsuran.',
      'Penyelamatan aset pembiayaan bermasalah dan penyusunan program penyehatan usaha debitur.',
      'Formulasi skema restrukturisasi bersyarat untuk pemulihan likuiditas arus kas nasabah.'
    ]
  },
  {
    id: 'l4-sutan',
    name: 'Sutan Pardamean Hasibuan',
    role: 'RM Collection',
    roleI18n: {
      id: 'RM Collection',
      en: 'Loan Portfolio & Collection RM',
      zh: '信贷资产管理与催收专员'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'crr',
    groupCategoryLabel: {
      id: 'CRR, Collection & Lelang',
      en: 'CRR, Collection & Asset Auctions',
      zh: '信贷重组、清收与抵押拍卖'
    },
    departmentName: 'Divisi Penanganan Portofolio Kredit',
    initials: 'ST',
    phone: '6287773933322',
    jobdesk: [
      'Pengelolaan dan pemantauan kelancaran angsuran portofolio kredit debitur di KC Jakarta Jelambar.',
      'Konsultasi restrukturisasi ringan dan penyelesaian kewajiban pembiayaan nasabah secara kekeluargaan.',
      'Pemantauan harian early warning system debitur untuk mencegah penurunan status kolektibilitas.'
    ]
  },
  {
    id: 'l4-ayang',
    name: 'Ayang Pradila',
    role: 'Collection & Legal Asset Recovery Assistant',
    roleI18n: {
      id: 'Collection & Legal Asset Recovery Assistant',
      en: 'Collection & Legal Asset Recovery Assistant',
      zh: '清收与不良资产法务清算助理'
    },
    level: 4,
    departmentKey: 'rm',
    groupCategory: 'crr',
    groupCategoryLabel: {
      id: 'CRR, Collection & Lelang',
      en: 'CRR, Collection & Asset Auctions',
      zh: '信贷重组、清收与抵押拍卖'
    },
    departmentName: 'Divisi Restrukturisasi, Recovery & Legal Asset',
    initials: 'AP',
    jobdesk: [
      'Penyiapan berkas yuridis lelang agunan ke KPKNL dan administrasi eksekusi jaminan kredit.',
      'Penyiapan administrasi dan kelengkapan dokumen yuridis berkas lelang eksekusi hak tanggungan/agunan kredit bermasalah.',
      'Koordinasi pemberkasan lelang dengan Kantor Pelayanan Kekayaan Negara dan Lelang (KPKNL) serta balai lelang rekanan.',
      'Asistensi administrasi restrukturisasi penyehatan kredit dan penatausahaan dokumen klaim/recovery aset komersial.'
    ],
    jobdeskI18n: {
      id: [
        'Penyiapan berkas yuridis lelang agunan ke KPKNL dan administrasi eksekusi jaminan kredit.',
        'Penyiapan administrasi dan kelengkapan dokumen yuridis berkas lelang eksekusi hak tanggungan/agunan kredit bermasalah.',
        'Koordinasi pemberkasan lelang dengan Kantor Pelayanan Kekayaan Negara dan Lelang (KPKNL) serta balai lelang rekanan.',
        'Asistensi administrasi restrukturisasi penyehatan kredit dan penatausahaan dokumen klaim/recovery aset komersial.'
      ],
      en: [
        'Preparing judicial collateral auction dossiers submitted to KPKNL and managing credit execution administration.',
        'Compiling administrative workflows and judicial documentation for non-performing loan mortgage auctions.',
        'Coordinating auction filings with the State Property and Auction Service Office (KPKNL) and accredited auction halls.',
        'Assisting loan restructuring rehabilitation procedures and commercial asset recovery claim records.'
      ],
      zh: [
        '准备向印尼国家资产与拍卖局（KPKNL）递交的抵押物司法拍卖法律要件及执行全案卷。',
        '起草不良贷款抵押权（Hak Tanggungan）司法强制执行文书与抵押物清算法律凭证。',
        '与 KPKNL 及指定合作拍卖行协调拍卖开拍公告与案卷审核。',
        '协助信贷重组救助方案的行政流转及商业不良资产受偿清收档案管理。'
      ]
    }
  },

  // =========================================================================
  // 5. LAYANAN NASABAH & PENUNJANG OPERASIONAL (4 KLASTER)
  // =========================================================================
  // --- KLASTER A: FRONTLINER & LAYANAN NASABAH (BANKING HALL) ---
  {
    id: 'l5-sri',
    name: 'Sri Mulyani',
    role: 'Universal Banker (UB)',
    roleI18n: {
      id: 'Universal Banker (UB)',
      en: 'Universal Banker (UB)',
      zh: '全能银行家 (UB)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'banking_hall',
    groupCategoryLabel: {
      id: 'Klaster Frontliner & Layanan Nasabah (Banking Hall)',
      en: 'Frontline & Banking Hall Customer Services',
      zh: '营业厅前台柜面与全能服务团队'
    },
    departmentName: 'Banking Hall Frontliner',
    initials: 'SM',
    phone: '6281234567890',
    jobdesk: [
      'Layanan one-stop transaksi kasir teller, pembukaan rekening baru, aktivasi super app BRImo, dan migrasi platform baru Qita.',
      'Pemberian konsultasi produk tabungan, kartu debit chip, dan pengelolaan administrasi rekening nasabah perorangan.'
    ]
  },
  {
    id: 'l5-erina',
    name: 'Erina Rebecca Sinaga',
    role: 'Universal Banker (UB)',
    roleI18n: {
      id: 'Universal Banker (UB)',
      en: 'Universal Banker (UB)',
      zh: '全能银行家 (UB)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'banking_hall',
    groupCategoryLabel: {
      id: 'Klaster Frontliner & Layanan Nasabah (Banking Hall)',
      en: 'Frontline & Banking Hall Customer Services',
      zh: '营业厅前台柜面与全能服务团队'
    },
    departmentName: 'Banking Hall Frontliner',
    initials: 'ES',
    phone: '6281234567891',
    jobdesk: [
      'Pelayanan administrasi giro badan usaha, penggantian kartu debit chip, aktivasi e-banking, dan registrasi fitur digital Qita.',
      'Penanganan setoran tunai nominal besar dan verifikasi keabsahan dokumen pembukaan rekening legal badan usaha.'
    ]
  },
  {
    id: 'l5-nabilah',
    name: 'Nabilah Putri Asry Adisti',
    role: 'Universal Banker (UB)',
    roleI18n: {
      id: 'Universal Banker (UB)',
      en: 'Universal Banker (UB)',
      zh: '全能银行家 (UB)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'banking_hall',
    groupCategoryLabel: {
      id: 'Klaster Frontliner & Layanan Nasabah (Banking Hall)',
      en: 'Frontline & Banking Hall Customer Services',
      zh: '营业厅前台柜面与全能服务团队'
    },
    departmentName: 'Banking Hall Frontliner',
    initials: 'NA',
    phone: '6281234567892',
    jobdesk: [
      'Pendampingan transaksi kliring LLG/RTGS, pembukaan rekening tabungan valas, dan edukasi digital banking di Banking Hall.',
      'Customer onboarding layanan internet banking bisnis dan asistensi transaksi non-tunai di area digital lounge.'
    ]
  },
  {
    id: 'l5-ryan',
    name: 'Muhammad Ryan Pratama',
    role: 'Customer Service (CS)',
    roleI18n: {
      id: 'Customer Service (CS)',
      en: 'Customer Service Officer (CS)',
      zh: '客户服务专员 (CS)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'banking_hall',
    groupCategoryLabel: {
      id: 'Klaster Frontliner & Layanan Nasabah (Banking Hall)',
      en: 'Frontline & Banking Hall Customer Services',
      zh: '营业厅前台柜面与全能服务团队'
    },
    departmentName: 'Banking Hall Customer Service',
    initials: 'MR',
    jobdesk: [
      'Pelayanan pembukaan rekening nasabah, penanganan kendala produk perbankan, dan pemeliharaan data nasabah.',
      'Verifikasi identitas nasabah (KYC), update data kepemilikan rekening, dan penerbitan surat referensi bank.'
    ],
    jobdeskI18n: {
      id: [
        'Pelayanan pembukaan rekening nasabah, penanganan kendala produk perbankan, dan pemeliharaan data nasabah.',
        'Verifikasi identitas nasabah (KYC), update data kepemilikan rekening, dan penerbitan surat referensi bank.'
      ],
      en: [
        'Customer account onboarding, handling banking product inquiries/disputes, and customer data maintenance.',
        'Customer KYC verification, profile records updating, and official bank reference letter issuance.'
      ],
      zh: [
        '为客户办理各类账户开立、处理产品使用疑难咨询并维护更新客户核心档案。',
        '严格落实客户身份尽职审查（KYC）、更新账户资料并开具银行资信证明。'
      ]
    }
  },
  {
    id: 'l5-indrastuti',
    name: 'Indrastuti Handayani',
    role: 'Teller',
    roleI18n: {
      id: 'Teller',
      en: 'Teller Cashier',
      zh: '柜面出纳员 (Teller)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'banking_hall',
    groupCategoryLabel: {
      id: 'Klaster Frontliner & Layanan Nasabah (Banking Hall)',
      en: 'Frontline & Banking Hall Customer Services',
      zh: '营业厅前台柜面与全能服务团队'
    },
    departmentName: 'Banking Hall Teller Counter',
    initials: 'IH',
    jobdesk: [
      'Pelayanan transaksi setoran tunai, penarikan kas, dan transaksi pembayaran langsung di loket banking hall.',
      'Pemeriksaan keaslian uang tunai rupiah/valas dan penyeimbangan posisi kas kasir harian.'
    ],
    jobdeskI18n: {
      id: [
        'Pelayanan transaksi setoran tunai, penarikan kas, dan transaksi pembayaran langsung di loket banking hall.',
        'Pemeriksaan keaslian uang tunai rupiah/valas dan penyeimbangan posisi kas kasir harian.'
      ],
      en: [
        'Processing cash deposit and withdrawal transactions, as well as OTC payment settlements in the banking hall.',
        'Authenticating IDR and foreign banknotes and balancing daily cash drawer totals.'
      ],
      zh: [
        '办理营业大厅窗口现金存取款、对公解款及各项代收代付现金结算。',
        '严格执行印尼盾及多币种外币真伪鉴别，确保柜员现金尾箱账实相符。'
      ]
    }
  },
  {
    id: 'l5-choirul',
    name: 'Choirul Abidin',
    role: 'Petugas Transaksi / DJS (Dana, Jasa & Transaksi)',
    roleI18n: {
      id: 'Petugas Transaksi / DJS (Dana, Jasa & Transaksi)',
      en: 'Transaction & DJS Officer (Funds, Services & Transactions)',
      zh: '结算交易与 DJS 专员 (资金、中间业务与清算)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'banking_hall',
    groupCategoryLabel: {
      id: 'Klaster Frontliner & Layanan Nasabah (Banking Hall)',
      en: 'Frontline & Banking Hall Customer Services',
      zh: '营业厅前台柜面与全能服务团队'
    },
    departmentName: 'Banking Hall Transaction Desk',
    initials: 'CA',
    jobdesk: [
      'Pemrosesan transaksi non-tunai, kliring warkat/LLG/RTGS, rekonsiliasi data transaksi institusi, dan administrasi surat berharga/DJS.',
      'Penyelesaian transaksi pindah buku massal (payroll) dan verifikasi settlement transfer dana perbankan.'
    ],
    jobdeskI18n: {
      id: [
        'Pemrosesan transaksi non-tunai, kliring warkat/LLG/RTGS, rekonsiliasi data transaksi institusi, dan administrasi surat berharga/DJS.',
        'Penyelesaian transaksi pindah buku massal (payroll) dan verifikasi settlement transfer dana perbankan.'
      ],
      en: [
        'Processing non-cash remittances, interbank clearing (LLG/RTGS/BI-FAST), institutional reconciliation, and DJS securities administration.',
        'Executing bulk payroll transfers and validating electronic banking settlement workflows.'
      ],
      zh: [
        '办理非现金大额汇划、同城票据交换/跨行清算（LLG/RTGS）、机构批量代发及 DJS 有价证券行政处理。',
        '核对企业批量工资代发表格，复核电子资金结算入账凭证。'
      ]
    }
  },

  // --- KLASTER B: ADMINISTRASI KREDIT (ADK MURNI - 3 STAF) ---
  {
    id: 'l5-bela',
    name: 'Bela Amelia Lestari',
    role: 'Staf Administrasi Kredit (ADK)',
    roleI18n: {
      id: 'Staf Administrasi Kredit (ADK)',
      en: 'Credit Administration Officer (ADK)',
      zh: '信贷行政审查专员 (ADK)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'adk_murni',
    groupCategoryLabel: {
      id: 'Klaster Administrasi Kredit (ADK Murni)',
      en: 'Credit Administration Cluster (ADK)',
      zh: '纯正信贷审查与行政档案组 (ADK)'
    },
    departmentName: 'Back Office Administrasi Kredit',
    initials: 'BA',
    jobdesk: [
      'Pemeriksaan kelengkapan dokumen legalitas kredit permohonan baru, registrasi berkas pengikatan agunan, dan input sistem loan.',
      'Verifikasi kepatuhan checklist persyaratan perbankan sebelum pengajuan ke komite pemutus kredit.'
    ]
  },
  {
    id: 'l5-marto',
    name: 'Marto Sujiro',
    role: 'Staf Administrasi Kredit (ADK)',
    roleI18n: {
      id: 'Staf Administrasi Kredit (ADK)',
      en: 'Credit Administration Officer (ADK)',
      zh: '信贷行政审查专员 (ADK)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'adk_murni',
    groupCategoryLabel: {
      id: 'Klaster Administrasi Kredit (ADK Murni)',
      en: 'Credit Administration Cluster (ADK)',
      zh: '纯正信贷审查与行政档案组 (ADK)'
    },
    departmentName: 'Back Office Administrasi Kredit',
    initials: 'MS',
    jobdesk: [
      'Verifikasi keabsahan sertifikat jaminan, administrasi covernote notaris, dan pengawasan pemenuhan syarat penarikan kredit.',
      'Penyusunan berkas akad notariil kredit modal kerja komersial dan investasi bersama rekanan notaris.'
    ]
  },
  {
    id: 'l5-nindita',
    name: 'Nindita Oviana',
    role: 'Staf Administrasi Kredit (ADK)',
    roleI18n: {
      id: 'Staf Administrasi Kredit (ADK)',
      en: 'Credit Administration Officer (ADK)',
      zh: '信贷行政审查专员 (ADK)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'adk_murni',
    groupCategoryLabel: {
      id: 'Klaster Administrasi Kredit (ADK Murni)',
      en: 'Credit Administration Cluster (ADK)',
      zh: '纯正信贷审查与行政档案组 (ADK)'
    },
    departmentName: 'Back Office Administrasi Kredit',
    initials: 'NO',
    jobdesk: [
      'Penyusunan laporan realisasi kredit komersial/SME, administrasi SPPK, dan pembukuan komisi asuransi pinjaman.',
      'Pengarsipan berkas korespondensi debitur dan monitoring jadwal jatuh tempo review fasilitas tahunan.'
    ]
  },

  // --- KLASTER C: PENUNJANG BISNIS MIKRO & KEAGENAN (2 STAF) ---
  {
    id: 'l5-chairunnisah',
    name: 'Chairunnisah Riyanti',
    role: 'Petugas Penunjang Bisnis Mikro (Admin Mikro)',
    roleI18n: {
      id: 'Petugas Penunjang Bisnis Mikro (Admin Mikro)',
      en: 'Micro Business Support Officer (Admin Mikro)',
      zh: '微型普惠业务支持专员 (Admin Mikro)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'admin_mikro_agen',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Bisnis Mikro & Keagenan',
      en: 'Micro Business & Agency Support Cluster',
      zh: '微贷业务支持与代理人管理组'
    },
    departmentName: 'Back Office Bisnis Mikro',
    initials: 'CR',
    jobdesk: [
      'Pengolahan data pipeline Mantri/RM Mikro, monitoring portofolio kredit mikro, dan rekapitulasi pelaporan manajer mikro.',
      'Rekapitulasi berkas KUR mikro 8 unit supervisi, monitoring kuota subsidi suku bunga, dan pelaporan SIKP Kementerian Keuangan.'
    ],
    jobdeskI18n: {
      id: [
        'Pengolahan data pipeline Mantri/RM Mikro, monitoring portofolio kredit mikro, dan rekapitulasi pelaporan manajer mikro.',
        'Rekapitulasi berkas KUR mikro 8 unit supervisi, monitoring kuota subsidi suku bunga, dan pelaporan SIKP Kementerian Keuangan.'
      ],
      en: [
        'Processing pipeline data for field loan officers, monitoring micro loan portfolios, and preparing micro managerial reports.',
        'Consolidating KUR files across 8 supervised units, monitoring interest subsidy quotas, and reporting to Ministry of Finance SIKP.'
      ],
      zh: [
        '处理外勤信贷员普惠信贷储备流水数据，监控微贷资产质量并编制微贷条线分析报表。',
        '汇总 8 家直属营业所 KUR 贴息贷款材料，监控贴息额度并向印尼财政部 SIKP 系统申报备案。'
      ]
    }
  },
  {
    id: 'l5-cici',
    name: 'Cici Fatmimah',
    role: 'Petugas Penunjang Bisnis Keagenan (Admin Agen BRILink)',
    roleI18n: {
      id: 'Petugas Penunjang Bisnis Keagenan (Admin Agen BRILink)',
      en: 'Agency Business Support Officer (BRILink Admin)',
      zh: '代理人业务支持专员 (Agen BRILink Admin)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'admin_mikro_agen',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Bisnis Mikro & Keagenan',
      en: 'Micro Business & Agency Support Cluster',
      zh: '微贷业务支持与代理人管理组'
    },
    departmentName: 'Divisi Keagenan & Digital Micro',
    initials: 'CF',
    jobdesk: [
      'Pengelolaan administrasi jaringan Agen BRILink cabang, monitoring transaksi harian agen, dan fasilitasi operasional keagenan.',
      'Pengadaan dan penggantian mesin EDC/QRIS keagenan serta edukasi fee-based income agen kemitraan.'
    ],
    jobdeskI18n: {
      id: [
        'Pengelolaan administrasi jaringan Agen BRILink cabang, monitoring transaksi harian agen, dan fasilitasi operasional keagenan.',
        'Pengadaan dan penggantian mesin EDC/QRIS keagenan serta edukasi fee-based income agen kemitraan.'
      ],
      en: [
        'Managing administrative files for branch Agen BRILink network, monitoring daily turnover, and supporting agency logistics.',
        'Supplying/replacing agent POS/QRIS terminals and conducting fee-based income mentorship for partner agents.'
      ],
      zh: [
        '负责全辖 Agen BRILink 普惠便民代理人网络档案管理、日常交易流水监测及业务运营支持。',
        '办理代理人智能终端/收款码配发与升级维护，指导代理人拓展中间业务创收。'
      ]
    }
  },

  // --- KLASTER D: PENUNJANG OPERASIONAL, IT & BACKOFFICE (6 STAF) ---
  {
    id: 'l5-vera',
    name: 'Vera Amelia Yuniar',
    role: 'Sekretaris & Penunjang SDM / HR-Support',
    roleI18n: {
      id: 'Sekretaris & Penunjang SDM / HR-Support',
      en: 'Executive Secretary & HR Support Officer',
      zh: '行长执行秘书兼人力资源支持 (HR-Support)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Sekretariat & HR Support',
    initials: 'VA',
    jobdesk: [
      'Administrasi kesekretariatan pimpinan, tata kelola korespondensi resmi, dan pengelolaan administrasi kepegawaian/SDM cabang.',
      'Pengarsipan dokumen rahasia pimpinan, notula rapat koordinasi, dan fasilitasi agenda audiensi stakeholder.'
    ],
    jobdeskI18n: {
      id: [
        'Administrasi kesekretariatan pimpinan, tata kelola korespondensi resmi, dan pengelolaan administrasi kepegawaian/SDM cabang.',
        'Pengarsipan dokumen rahasia pimpinan, notula rapat koordinasi, dan fasilitasi agenda audiensi stakeholder.'
      ],
      en: [
        'Managing executive secretarial workflows, official correspondence, and branch Human Resources personnel administration.',
        'Filing confidential management documentation, executive minutes, and facilitating stakeholder meeting logistics.'
      ],
      zh: [
        '统筹支行行长日常行政日程与公文流转，负责支行全员人事档案及人力资源综合行政。',
        '妥善保管机密公文，记录管理层会议纪要，协调重要政银企会见安排。'
      ]
    }
  },
  {
    id: 'l5-ragil',
    name: 'Ragil Supriyono',
    role: 'Petugas IT & E-Channel',
    roleI18n: {
      id: 'Petugas IT & E-Channel',
      en: 'IT & E-Channel Support Officer',
      zh: 'IT 系统与电子渠道运维专员'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Divisi Teknologi Informasi & E-Channel',
    initials: 'RS',
    jobdesk: [
      'Pemeliharaan infrastruktur jaringan data, server perbankan cabang, kestabilan koneksi mesin ATM/CRM, dan e-channel digital.',
      'Monitoring uptime perangkat keras jaringan dan mitigasi gangguan konektivitas di seluruh unit supervisi.'
    ]
  },
  {
    id: 'l5-andi',
    name: 'Andi Handika',
    role: 'Petugas Laporan, Arsip & IT',
    roleI18n: {
      id: 'Petugas Laporan, Arsip & IT',
      en: 'Reporting, Archival & IT Support Officer',
      zh: '报表核算、档案数字化与 IT 专员'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Divisi Pelaporan, Arsip & Digital Banking',
    initials: 'AH',
    specialBadge: 'Portal Lead & System Developer',
    specialBadgeI18n: {
      id: 'Portal Lead & System Developer',
      en: 'Portal Lead & System Developer',
      zh: '门户架构主管与系统开发者'
    },
    jobdesk: [
      'Pengelolaan rekonsiliasi data pelaporan cabang, kearsipan perbankan, serta pemeliharaan sistem & jaringan IT.',
      'Inisiator & perancang arsitektur portal digital inovasi layanan KC Jakarta Jelambar.'
    ],
    jobdeskI18n: {
      id: [
        'Pengelolaan rekonsiliasi data pelaporan cabang, kearsipan perbankan, serta pemeliharaan sistem & jaringan IT.',
        'Inisiator & perancang arsitektur portal digital inovasi layanan KC Jakarta Jelambar.'
      ],
      en: [
        'Managing branch reporting data reconciliation, banking archives, and IT infrastructure network maintenance.',
        'Initiator & lead architect engineering the KC Jakarta Jelambar digital innovation web portal.'
      ],
      zh: [
        '统筹支行综合数据报表核算、银行业务档案管理及 IT 系统网络运行维护。',
        'KC Jakarta Jelambar 数字化创新服务门户的发起人与系统核心架构设计师。'
      ]
    }
  },
  {
    id: 'l5-harlianto',
    name: 'Harlianto Ukajati',
    role: 'Petugas Penunjang Operasional & Pelaporan',
    roleI18n: {
      id: 'Petugas Penunjang Operasional & Pelaporan',
      en: 'Operational Support & Reporting Officer',
      zh: '运营保障与综合报表专员'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Divisi Penunjang Operasional & Pelaporan',
    initials: 'HU',
    jobdesk: [
      'Rekapitulasi data penunjang pelaporan administrasi dan operasional kantor cabang.',
      'Monitoring ketersediaan fasilitas pendukung kerja dan sarana operasional harian.',
      'Pengelolaan administrasi inventaris umum kantor untuk kelancaran layanan cabang.'
    ]
  },
  {
    id: 'l5-atin',
    name: 'Atin Prihatin',
    role: 'Team Support Operasional (Backoffice)',
    roleI18n: {
      id: 'Team Support Operasional (Backoffice)',
      en: 'Operations Support Staff (Backoffice)',
      zh: '后台运营支持专员'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Penunjang Operasional & Layanan Cabang',
    departmentNameI18n: {
      id: 'Penunjang Operasional & Layanan Cabang',
      en: 'Branch Operations & Service Support',
      zh: '支行运营与服务支持部'
    },
    initials: 'AP',
    jobdesk: [
      'Asistensi penatausahaan dan verifikasi kelengkapan berkas administrasi operasional kantor cabang.',
      'Mendukung rekonsiliasi data penunjang dokumen transaksi harian serta pengarsipan internal backoffice.',
      'Membantu kelancaran koordinasi administrasi antar-unit kerja penunjang layanan operasional.'
    ],
    jobdeskI18n: {
      id: [
        'Asistensi penatausahaan dan verifikasi kelengkapan berkas administrasi operasional kantor cabang.',
        'Mendukung rekonsiliasi data penunjang dokumen transaksi harian serta pengarsipan internal backoffice.',
        'Membantu kelancaran koordinasi administrasi antar-unit kerja penunjang layanan operasional.'
      ],
      en: [
        'Assisting daily operational documentation, administrative filing, and verification of branch transaction documents.',
        'Supporting daily transactional data reconciliation and internal backoffice filing management.',
        'Facilitating inter-unit administrative coordination to ensure smooth branch operational support.'
      ],
      zh: [
        '协助办理支行日常运营文件整理、后台行政事务支持及内部档案管理。',
        '支持每日交易辅助单据对账以及后台内部档案管理与合规维护。',
        '协助各支持部门间的日常行政协调，确保支行前后台运营高效顺畅。'
      ]
    },
    kpis: ['Tertib Arsip Operasional', 'Ketelitian Verifikasi', 'Dukungan Layanan'],
    kpisI18n: {
      id: ['Tertib Arsip Operasional', 'Ketelitian Verifikasi', 'Dukungan Layanan'],
      en: ['Operational Filing Order', 'Verification Accuracy', 'Service Support'],
      zh: ['运营档案规范', '单据核对准确率', '后台支持效率']
    }
  },
  {
    id: 'l5-rakhmad',
    name: 'Rakhmad Dwi Yunianto',
    role: 'Team Support Administrasi (Backoffice)',
    roleI18n: {
      id: 'Team Support Administrasi (Backoffice)',
      en: 'Administration Support Staff (Backoffice)',
      zh: '后台行政支持专员'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Penunjang Operasional & Layanan Cabang',
    departmentNameI18n: {
      id: 'Penunjang Operasional & Layanan Cabang',
      en: 'Branch Operations & Service Support',
      zh: '支行运营与服务支持部'
    },
    initials: 'RD',
    jobdesk: [
      'Asistensi pencatatan dan pengelolaan tertib administrasi dokumen operasional cabang.',
      'Membantu verifikasi data penunjang pelaporan internal serta penataan dokumen fisik operasional.',
      'Mendukung kelancaran pelaksanaan tugas-tugas administratif backoffice secara terpadu.'
    ],
    jobdeskI18n: {
      id: [
        'Asistensi pencatatan dan pengelolaan tertib administrasi dokumen operasional cabang.',
        'Membantu verifikasi data penunjang pelaporan internal serta penataan dokumen fisik operasional.',
        'Mendukung kelancaran pelaksanaan tugas-tugas administratif backoffice secara terpadu.'
      ],
      en: [
        'Assisting operational documentation, administrative filing, and internal office support.',
        'Supporting data verification for internal reports and physical operational file organization.',
        'Ensuring integrated execution of general backoffice administrative workflows.'
      ],
      zh: [
        '协助办理支行日常运营文件整理、后台行政事务支持及内部档案管理。',
        '协助核对内部管理报告辅助数据并做好纸质档案分类存放。',
        '全面支持后台日常综合行政事务的高效运转与协同执行。'
      ]
    },
    kpis: ['Administrasi Terpadu', 'Kelengkapan Dokumen', 'Disiplin Rekonsiliasi'],
    kpisI18n: {
      id: ['Administrasi Terpadu', 'Kelengkapan Dokumen', 'Disiplin Rekonsiliasi'],
      en: ['Integrated Administration', 'Document Completeness', 'Reconciliation Discipline'],
      zh: ['综合行政规范', '单据完整性', '对账执行力']
    }
  }
];

export function getPersonRole(person: OrgPerson, lang: Language): string {
  if (person.roleI18n && person.roleI18n[lang]) {
    return person.roleI18n[lang];
  }
  return person.role;
}

export function getPersonDept(person: OrgPerson, lang: Language): string {
  if (person.departmentNameI18n && person.departmentNameI18n[lang]) {
    return person.departmentNameI18n[lang];
  }
  return person.departmentName;
}

export function getPersonJobdesk(person: OrgPerson, lang: Language): string[] {
  if (person.jobdeskI18n && person.jobdeskI18n[lang]) {
    return person.jobdeskI18n[lang];
  }
  return person.jobdesk;
}

export function getPersonKPIs(person: OrgPerson, lang: Language): string[] {
  if (person.kpisI18n && person.kpisI18n[lang]) {
    return person.kpisI18n[lang];
  }
  return person.kpis || [];
}

export function getPersonSpecialBadge(person: OrgPerson, lang: Language): string | undefined {
  if (person.specialBadgeI18n && person.specialBadgeI18n[lang]) {
    return person.specialBadgeI18n[lang];
  }
  return person.specialBadge;
}
