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
    role: 'Manajer Bisnis Kecil (MBK)',
    roleI18n: {
      id: 'Manajer Bisnis Kecil (MBK)',
      en: 'Small Business & SME Manager (MBK)',
      zh: '中小企业与商业信贷总监 (MBK)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Departemen Bisnis Komersial & SME',
    departmentNameI18n: {
      id: 'Departemen Bisnis Komersial & SME',
      en: 'Commercial & SME Business Dept',
      zh: '商业与中小企业信贷部'
    },
    initials: 'DA',
    jobdesk: [
      'Memimpin strategi penetrasi dan penyaluran Kredit Modal Kerja (KMK), Kredit Investasi, dan fasilitas Bank Garansi komersial.',
      'Memimpin tim RM Kredit Komersial dan RM SME dalam mencapai target portofolio pembiayaan usaha menengah di Jakarta Barat.',
      'Melakukan analisis kelayakan kredit (credit underwriting), review rasio keuangan, dan rekomendasi putusan kredit komersial.',
      'Menjaga kualitas portofolio kredit komersial agar senantiasa sehat dengan tingkat NPL terkendali.'
    ],
    jobdeskI18n: {
      id: [
        'Memimpin strategi penetrasi dan penyaluran Kredit Modal Kerja (KMK), Kredit Investasi, dan fasilitas Bank Garansi komersial.',
        'Memimpin tim RM Kredit Komersial dan RM SME dalam mencapai target portofolio pembiayaan usaha menengah di Jakarta Barat.',
        'Melakukan analisis kelayakan kredit (credit underwriting), review rasio keuangan, dan rekomendasi putusan kredit komersial.',
        'Menjaga kualitas portofolio kredit komersial agar senantiasa sehat dengan tingkat NPL terkendali.'
      ],
      en: [
        'Drive deployment of Working Capital Loans (KMK), Investment Loans, and Commercial Bank Guarantees.',
        'Lead Commercial and SME Lending RM teams in achieving portfolio growth across West Jakarta.',
        'Perform comprehensive credit underwriting, financial statement reviews, and credit committee recommendations.',
        'Safeguard commercial loan portfolio health and ensure stringent NPL asset controls.'
      ],
      zh: [
        '统领营运资金贷款（KMK）、商业投资信贷及工程银行保函的市场营销与投放。',
        '带领商业信贷与 SME 客户经理团队开拓西雅加达中型企业与商业客户。',
        '主持信贷尽职调查与财务报表审查，为支行审贷会提供专业决策建议。',
        '严密监控商业信贷资产质量，防范信贷违约风险。'
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
    role: 'Manajer Dana & Transaksi (MDT)',
    roleI18n: {
      id: 'Manajer Dana & Transaksi (MDT)',
      en: 'Funding & Transaction Banking Manager (MDT)',
      zh: '资金与交易银行部总监 (MDT)'
    },
    level: 2,
    departmentKey: 'managers',
    departmentName: 'Departemen Dana, Giro & Cash Management',
    departmentNameI18n: {
      id: 'Departemen Dana, Giro & Cash Management',
      en: 'Funding, Current Accounts & CMS Dept',
      zh: '资金存款、活期支票与现金管理部'
    },
    initials: 'EJ',
    jobdesk: [
      'Merumuskan strategi penghimpunan dana pihak ketiga (DPK), khususnya Giro Rupiah/Valas dan Deposito institusi korporat.',
      'Memimpin tim RM Dana dalam penetrasi layanan Cash Management System (CMS), Payroll perusahaan, dan solusi transaksi digital.',
      'Menjaga rasio likuiditas dana murah (CASA) cabang agar senantiasa optimal dan berbiaya efisien.',
      'Mengembangkan program retensi nasabah prioritas dan kemitraan simpanan dengan komunitas bisnis Jakarta Barat.'
    ],
    jobdeskI18n: {
      id: [
        'Merumuskan strategi penghimpunan dana pihak ketiga (DPK), khususnya Giro Rupiah/Valas dan Deposito institusi korporat.',
        'Memimpin tim RM Dana dalam penetrasi layanan Cash Management System (CMS), Payroll perusahaan, dan solusi transaksi digital.',
        'Menjaga rasio likuiditas dana murah (CASA) cabang agar senantiasa optimal dan berbiaya efisien.',
        'Mengembangkan program retensi nasabah prioritas dan kemitraan simpanan dengan komunitas bisnis Jakarta Barat.'
      ],
      en: [
        'Formulate Third-Party Fund (DPK) mobilization strategies, focusing on Corporate Checking Accounts and Time Deposits.',
        'Lead Funding RM teams in expanding Cash Management System (CMS), corporate payroll, and institutional digital payments.',
        'Optimize branch low-cost CASA deposit mix and manage efficient cost-of-funds metrics.',
        'Develop priority banking customer retention programs and business community deposit partnerships.'
      ],
      zh: [
        '制定全辖第三方存款组织策略，主抓企业印尼盾/多币种外汇活期及大额定期存单。',
        '带领资金客户经理推广现金管理系统（CMS）、批量代发工资及机构数字交易方案。',
        '优化支行低成本活期储蓄（CASA）资金结构，有效降低综合资金成本。',
        '策划高净值 VIP 客户维护方案，深化与西雅加达商业社区的深度资金合作。'
      ]
    }
  },

  // =========================================================================
  // 3. SUPERVISI OPERASIONAL & ADMINISTRASI KREDIT (3 Pejabat)
  // =========================================================================
  {
    id: 'l3-aprita',
    name: 'Aprita Dinasari',
    role: 'Asisten Manajer Operasional & Layanan (AMOL)',
    roleI18n: {
      id: 'Asisten Manajer Operasional & Layanan (AMOL)',
      en: 'Assistant Manager Operations & Service (AMOL)',
      zh: '营运与服务助理经理 (AMOL)'
    },
    level: 3,
    departmentKey: 'supervisors',
    departmentName: 'Manajemen Operasional & Layanan',
    departmentNameI18n: {
      id: 'Manajemen Operasional & Layanan',
      en: 'Operations & Service Management',
      zh: '营运与服务管理组'
    },
    initials: 'AD',
    jobdesk: [
      'Membantu Manager Operasional dalam mengoordinasikan mutu layanan frontline dan back-office harian.',
      'Melakukan review SLA layanan perbankan, efisiensi loket transaksi, dan audit kepatuhan kas harian.',
      'Memastikan ketersediaan logistik kartu debit, buku tabungan, bilyet giro, dan material promosi cabang.',
      'Mendampingi implementasi inovasi digital perbankan dan migrasi platform baru Qita di Banking Hall.'
    ],
    jobdeskI18n: {
      id: [
        'Membantu Manager Operasional dalam mengoordinasikan mutu layanan frontline dan back-office harian.',
        'Melakukan review SLA layanan perbankan, efisiensi loket transaksi, dan audit kepatuhan kas harian.',
        'Memastikan ketersediaan logistik kartu debit, buku tabungan, bilyet giro, dan material promosi cabang.',
        'Mendampingi implementasi inovasi digital perbankan dan migrasi platform baru Qita di Banking Hall.'
      ],
      en: [
        'Assist the Operations Manager in aligning frontline service excellence and daily back-office processing.',
        'Review banking service SLAs, transaction counter throughput, and daily cash compliance.',
        'Ensure administrative inventory for debit cards, passbooks, checkbooks, and promotional materials.',
        'Facilitate digital banking platform innovations and the Qita migration in the Banking Hall.'
      ],
      zh: [
        '协助营运总监把控前台服务质量与后台账务处理效率。',
        '监督柜面业务办理时效（SLA），落实每日现金收付与账实核对。',
        '保障借记卡、存折、支票票据及业务宣传物料的充足供应。',
        '推动大堂数字化创新应用落地及新一代 Qita 平台的平稳迁移。'
      ]
    }
  },
  {
    id: 'l3-syamsul',
    name: 'Syamsul Hidayatullah',
    role: 'Supervisor Operasional & Layanan (SPO)',
    roleI18n: {
      id: 'Supervisor Operasional & Layanan (SPO)',
      en: 'Operations & Service Supervisor (SPO)',
      zh: '营业大厅服务与柜面主管 (SPO)'
    },
    level: 3,
    departmentKey: 'supervisors',
    departmentName: 'Layanan Banking Hall & Teller',
    departmentNameI18n: {
      id: 'Layanan Banking Hall & Teller',
      en: 'Banking Hall & Counter Services',
      zh: '营业厅柜面与客户服务部'
    },
    initials: 'SH',
    jobdesk: [
      'Mensupervisi langsung operasional harian para Universal Banker (UB) dan Teller kasir di Banking Hall.',
      'Melakukan otorisasi ganda transaksi nominal besar, mutasi khusus, dan penerbitan produk perbankan.',
      'Menjaga ketertiban antrean dan kecepatan waktu tunggu nasabah di lantai layanan tatap muka.',
      'Melakukan verifikasi keabsahan tanda tangan spesimen dan prosedur Anti Money Laundering (APUPPT).'
    ],
    jobdeskI18n: {
      id: [
        'Mensupervisi langsung operasional harian para Universal Banker (UB) dan Teller kasir di Banking Hall.',
        'Melakukan otorisasi ganda transaksi nominal besar, mutasi khusus, dan penerbitan produk perbankan.',
        'Menjaga ketertiban antrean dan kecepatan waktu tunggu nasabah di lantai layanan tatap muka.',
        'Melakukan verifikasi keabsahan tanda tangan spesimen dan prosedur Anti Money Laundering (APUPPT).'
      ],
      en: [
        'Directly supervise daily transactional workflows executed by Universal Bankers (UB) and frontline Tellers.',
        'Execute dual authorizations for large-value transactions, special adjustments, and banking instruments.',
        'Manage queuing throughput and optimize customer wait times across the Banking Hall.',
        'Verify specimen signatures and uphold Anti-Money Laundering (AML/CFT) compliance guidelines.'
      ],
      zh: [
        '现场管理全能银行家（UB）及柜员日常存取款、转账开户等业务操作。',
        '对大额存取款、特殊账务调整及核心结算凭证执行双人复核授权。',
        '统筹大堂排队叫号流转，持续压缩客户等待与办理时长。',
        '严格执行印鉴核验及反洗钱（AML/APUPPT）风险审查。'
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
    role: 'Team Support (Backoffice)',
    roleI18n: {
      id: 'Team Support (Backoffice)',
      en: 'Team Support (Backoffice Processing)',
      zh: '后台综合运营支持专员 (Backoffice)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Divisi Pembukuan & Keuangan Intern',
    initials: 'AP',
    jobdesk: [
      'Pembukuan transaksi intern cabang, rekonsiliasi pos gl-account harian, dan verifikasi warkat backoffice.',
      'Penyusunan neraca dan laporan laba rugi cabang harian/bulanan serta rekonsiliasi pos keuangan.'
    ]
  },
  {
    id: 'l5-rakhmad',
    name: 'Rakhmad Dwi Yunianto',
    role: 'Team Support (Backoffice)',
    roleI18n: {
      id: 'Team Support (Backoffice)',
      en: 'Team Support (Backoffice Logistics)',
      zh: '后台后勤与保障专员 (Backoffice)'
    },
    level: 5,
    departmentKey: 'frontline_support',
    groupCategory: 'backoffice_it',
    groupCategoryLabel: {
      id: 'Klaster Penunjang Operasional, IT & Backoffice',
      en: 'Operational Support, IT & Backoffice Cluster',
      zh: '运营保障、IT与后台综合事务组'
    },
    departmentName: 'Divisi Umum & Rumah Tangga Cabang',
    initials: 'RD',
    jobdesk: [
      'Pengelolaan logistik operasional, pengadaan ATK/formulir perbankan, dan kelancaran sarana gedung kantor.',
      'Pengelolaan inventaris gedung kantor, sarana operasional armada dinas, dan fasilitas penunjang kerja cabang.'
    ]
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
