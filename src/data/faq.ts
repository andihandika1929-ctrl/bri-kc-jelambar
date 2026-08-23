import { Language } from './translations';

export interface LocalizedText {
  id: string;
  en: string;
  zh: string;
}

export interface FAQDocumentItem {
  title: string;
  titleI18n?: LocalizedText;
  items: string[];
  itemsI18n?: {
    id: string[];
    en: string[];
    zh: string[];
  };
}

export interface FAQItem {
  id: string;
  category: 'sme' | 'konsumer' | 'giro' | 'merchant' | 'crr' | 'digital';
  categoryLabel: string;
  categoryLabelI18n?: LocalizedText;
  question: string;
  questionI18n?: LocalizedText;
  summary: string;
  summaryI18n?: LocalizedText;
  documents: FAQDocumentItem[];
  processSteps?: string[];
  processStepsI18n?: {
    id: string[];
    en: string[];
    zh: string[];
  };
  notes?: string;
  notesI18n?: LocalizedText;
  rmContact: {
    name: string;
    role: string;
    phone: string;
    whatsappText: string;
  };
}

export interface FAQCategoryOption {
  id: string;
  label: string;
  labelI18n?: LocalizedText;
}

export const faqCategories: FAQCategoryOption[] = [
  {
    id: 'all',
    label: 'Semua Panduan',
    labelI18n: {
      id: 'Semua Panduan',
      en: 'All Guides',
      zh: '全部业务指南'
    }
  },
  {
    id: 'digital',
    label: 'Digital Banking (Qita & BRImo)',
    labelI18n: {
      id: 'Digital Banking (Qita & BRImo)',
      en: 'Digital Banking (Qita & BRImo)',
      zh: '数字银行 (Qita 与 BRImo)'
    }
  },
  {
    id: 'sme',
    label: 'Kredit Modal Kerja & SME',
    labelI18n: {
      id: 'Kredit Modal Kerja & SME',
      en: 'Working Capital & SME Loans',
      zh: '营运资金与中小企业信贷'
    }
  },
  {
    id: 'konsumer',
    label: 'KPR & BRIguna',
    labelI18n: {
      id: 'KPR & BRIguna',
      en: 'Mortgage (KPR) & BRIguna',
      zh: '住房按揭与BRIguna信用贷款'
    }
  },
  {
    id: 'giro',
    label: 'Giro Badan Usaha',
    labelI18n: {
      id: 'Giro Badan Usaha',
      en: 'Corporate Current Account',
      zh: '企业活期支票账户'
    }
  },
  {
    id: 'merchant',
    label: 'EDC & QRIS',
    labelI18n: {
      id: 'EDC & QRIS',
      en: 'Merchant EDC & QRIS',
      zh: '商户智能POS与QRIS'
    }
  },
  {
    id: 'crr',
    label: 'Restrukturisasi CRR',
    labelI18n: {
      id: 'Restrukturisasi CRR',
      en: 'Commercial Restructuring (CRR)',
      zh: '商业贷款重组与资产保全'
    }
  },
];

export const faqList: FAQItem[] = [
  {
    id: 'faq-digital-01',
    category: 'digital',
    categoryLabel: 'Digital Banking (BRImo & Platform Baru Qita)',
    categoryLabelI18n: {
      id: 'Digital Banking (BRImo & Platform Baru Qita)',
      en: 'Digital Banking (BRImo & The New Qita Platform)',
      zh: '综合数字银行 (BRImo 与新一代 Qita 平台)'
    },
    question: 'Bagaimana panduan registrasi ekosistem digital BRImo serta alur migrasi platform generasi baru Qita?',
    questionI18n: {
      id: 'Bagaimana panduan registrasi ekosistem digital BRImo serta alur migrasi platform generasi baru Qita?',
      en: 'How to register for the BRImo digital ecosystem and migrate to the new-generation Qita platform?',
      zh: '如何注册BRImo数字银行生态系统及迁移至新一代Qita平台？'
    },
    summary: 'Edukasi layanan digital banking terpadu BRImo dan platform generasi baru Qita untuk kemudahan transaksi harian, transfer, pembayaran, dan pembukaan rekening online.',
    summaryI18n: {
      id: 'Edukasi layanan digital banking terpadu BRImo dan platform generasi baru Qita untuk kemudahan transaksi harian, transfer, pembayaran, dan pembukaan rekening online.',
      en: 'Integrated guide for the BRImo ecosystem and the next-generation Qita platform for seamless daily transactions, transfers, payments, and online onboarding.',
      zh: 'BRImo移动金融生态与新一代Qita数字平台综合服务指引，涵盖日常转账结算、生活缴费及在线自主开户。'
    },
    documents: [
      {
        title: '1. Persyaratan Registrasi & Aktivasi Akun Digital',
        titleI18n: {
          id: '1. Persyaratan Registrasi & Aktivasi Akun Digital',
          en: '1. Requirements for Registration & Digital Account Activation',
          zh: '1. 电子账户注册与激活必备条件'
        },
        items: [
          'KTP Elektronik (e-KTP) asli yang masih berlaku dan terverifikasi data kependudukan',
          'Nomor handphone aktif yang memiliki pulsa reguler untuk verifikasi SMS OTP',
          'Alamat email pribadi aktif untuk penerimaan bukti transaksi elektronik',
          'Nomor rekening tabungan / kartu debit BRI yang masih aktif'
        ],
        itemsI18n: {
          id: [
            'KTP Elektronik (e-KTP) asli yang masih berlaku dan terverifikasi data kependudukan',
            'Nomor handphone aktif yang memiliki pulsa reguler untuk verifikasi SMS OTP',
            'Alamat email pribadi aktif untuk penerimaan bukti transaksi elektronik',
            'Nomor rekening tabungan / kartu debit BRI yang masih aktif'
          ],
          en: [
            'Original valid e-KTP ID card verified with national civil registry database',
            'Active mobile phone number with sufficient credit balance for SMS OTP verification',
            'Active personal email address for electronic e-receipts and statements',
            'Active BRI savings account number and linked debit card'
          ],
          zh: [
            '本人真实有效且通过国家人口数据库核验的印尼身份证（e-KTP）原件',
            '状态正常且余额充足可接收短信验证码（SMS OTP）的手机号码',
            '用于接收电子交易回执和对账单的有效个人电子邮箱',
            '处于正常激活状态的 BRI 储蓄账户及关联借记卡'
          ]
        }
      },
      {
        title: '2. Fitur & Keunggulan Platform Generasi Baru Qita',
        titleI18n: {
          id: '2. Fitur & Keunggulan Platform Generasi Baru Qita',
          en: '2. Key Features & Advantages of the Next-Generation Qita Platform',
          zh: '2. Qita 新一代数字化平台核心优势与功能'
        },
        items: [
          'Akses transaksi multi-channel terpadu perbankan personal & usaha',
          'Autentikasi keamanan biometrik modern & perlindungan proteksi ganda',
          'Monitoring mutasi rekening real-time dan kemudahan transaksi QRIS',
          'Pendampingan migrasi fitur digital langsung bersama tim Universal Banker (UB)'
        ],
        itemsI18n: {
          id: [
            'Akses transaksi multi-channel terpadu perbankan personal & usaha',
            'Autentikasi keamanan biometrik modern & perlindungan proteksi ganda',
            'Monitoring mutasi rekening real-time dan kemudahan transaksi QRIS',
            'Pendampingan migrasi fitur digital langsung bersama tim Universal Banker (UB)'
          ],
          en: [
            'Seamless multi-channel transactional access for personal and business banking',
            'Modern biometric authentication and dual-layer security protection',
            'Real-time account statement monitoring and instant QRIS merchant payments',
            'Direct digital migration assistance guided by the Universal Banker (UB) team'
          ],
          zh: [
            '个人与企业多渠道一体化金融交易访问',
            '现代生物识别认证与多重安全防护机制',
            '账户交易明细实时监控与极速 QRIS 二维码收付款',
            '由全能银行家（UB）团队提供现场专属数字化迁移指导'
          ]
        }
      }
    ],
    processSteps: [
      'Download aplikasi BRImo resmi dari Google Play Store atau Apple App Store.',
      'Pilih menu "Belum Punya Akun" untuk pembukaan baru, atau "Punya Akun" untuk login.',
      'Lakukan perekaman biometrik wajah (Face Recognition) di tempat dengan pencahayaan cukup.',
      'Masukkan 6 digit kode OTP yang dikirimkan via SMS ke nomor HP terdaftar.',
      'Buat Username, Password kombinasi huruf & angka, serta 6 Digit PIN Transaksi.',
      'Untuk panduan aktivasi, registrasi akun, maupun pendampingan migrasi fitur digital Qita, silakan konsultasikan langsung dengan tim Universal Banker (UB) kami di Banking Hall KC Jakarta Jelambar.'
    ],
    processStepsI18n: {
      id: [
        'Download aplikasi BRImo resmi dari Google Play Store atau Apple App Store.',
        'Pilih menu "Belum Punya Akun" untuk pembukaan baru, atau "Punya Akun" untuk login.',
        'Lakukan perekaman biometrik wajah (Face Recognition) di tempat dengan pencahayaan cukup.',
        'Masukkan 6 digit kode OTP yang dikirimkan via SMS ke nomor HP terdaftar.',
        'Buat Username, Password kombinasi huruf & angka, serta 6 Digit PIN Transaksi.',
        'Untuk panduan aktivasi, registrasi akun, maupun pendampingan migrasi fitur digital Qita, silakan konsultasikan langsung dengan tim Universal Banker (UB) kami di Banking Hall KC Jakarta Jelambar.'
      ],
      en: [
        'Download the official BRImo app from the Google Play Store or Apple App Store.',
        'Select "Sign Up / Don’t Have Account" for new onboarding, or "Login" for existing users.',
        'Complete biometric facial recognition verification in a well-lit environment.',
        'Enter the 6-digit SMS OTP code sent to your registered mobile phone number.',
        'Create a Username, alphanumeric Password, and 6-digit Transaction PIN.',
        'For Qita activation, account onboarding, or digital feature migration, please consult our Universal Banker (UB) team at the Banking Hall of KC Jakarta Jelambar.'
      ],
      zh: [
        '通过 Google Play 或 Apple App Store 下载官方正版 BRImo 应用程序。',
        '新用户选择“开立新账户”，已有账户用户直接点击“登录”。',
        '在光线充足的环境下完成面部生物识别（Face Recognition）身份认证。',
        '输入发送至注册手机号码的 6 位短信验证码（SMS OTP）。',
        '设置包含字母与数字组合的用户名、安全密码及 6 位数字交易 PIN 码。',
        '如需 Qita 平台激活、账户开立或数字化迁移指导，欢迎亲临 Jelambar 支行营业大厅咨询全能银行家（UB）团队。'
      ]
    },
    notes: 'Pastikan tidak pernah membagikan User ID, Password, PIN, atau Kode OTP kepada pihak manapun termasuk yang mengatasnamakan petugas Bank BRI.',
    notesI18n: {
      id: 'Pastikan tidak pernah membagikan User ID, Password, PIN, atau Kode OTP kepada pihak manapun termasuk yang mengatasnamakan petugas Bank BRI.',
      en: 'Never share your User ID, Password, Transaction PIN, or OTP codes with anyone, including individuals claiming to be Bank BRI officers.',
      zh: '请注意：切勿向任何人透露您的用户名、密码、交易 PIN 码或短信验证码（OTP），包括自称 Bank BRI 官方工作人员的人员。'
    },
    rmContact: {
      name: 'Sri Mulyani',
      role: 'Universal Banker (UB)',
      phone: '6281234567890',
      whatsappText: 'Halo Ibu Sri Mulyani, saya ingin meminta panduan aktivasi aplikasi BRImo dan registrasi platform digital baru Qita di BRI KC Jakarta Jelambar.'
    }
  },
  {
    id: 'faq-sme-01',
    category: 'sme',
    categoryLabel: 'Kredit Modal Kerja & Investasi SME',
    categoryLabelI18n: {
      id: 'Kredit Modal Kerja & Investasi SME',
      en: 'Working Capital & SME Investment Loans',
      zh: '营运资金与中小企业投资信贷'
    },
    question: 'Apa saja syarat pengajuan Kredit Modal Kerja (KMK) & Kredit Investasi SME di BRI KC Jelambar?',
    questionI18n: {
      id: 'Apa saja syarat pengajuan Kredit Modal Kerja (KMK) & Kredit Investasi SME di BRI KC Jelambar?',
      en: 'What are the document requirements for Working Capital (KMK) & SME Investment Loans at BRI KC Jelambar?',
      zh: '在 BRI Jelambar 支行申请营运资金贷款（KMK）及 SME 商业投资信贷需要哪些材料？'
    },
    summary: 'Pembiayaan modal kerja operasional atau ekspansi aset usaha komersial (PT/CV/Perorangan) dengan plafond mulai dari ratusan juta hingga miliaran rupiah.',
    summaryI18n: {
      id: 'Pembiayaan modal kerja operasional atau ekspansi aset usaha komersial (PT/CV/Perorangan) dengan plafond mulai dari ratusan juta hingga miliaran rupiah.',
      en: 'Operational working capital or commercial asset expansion financing for PT/CV/Sole Proprietors with credit lines from hundreds of millions up to billions of rupiah.',
      zh: '面向公司（PT/CV）及个体工商户的流动资金周转与厂房/商铺扩建投资信贷，授信额度从数亿至数百亿印尼盾。'
    },
    documents: [
      {
        title: '1. Dokumen Identitas Pemilik & Pengurus Usaha',
        titleI18n: {
          id: '1. Dokumen Identitas Pemilik & Pengurus Usaha',
          en: '1. Identity Documents of Business Owners & Management',
          zh: '1. 借款主体及企业管理层身份证明材料'
        },
        items: [
          'Fotokopi KTP Pemohon & Pasangan (untuk Perorangan) atau KTP seluruh Direksi & Komisaris (untuk PT/CV)',
          'Fotokopi Kartu Keluarga (KK) & Surat Nikah/Cerai',
          'Fotokopi NPWP Pribadi & NPWP Badan Usaha'
        ],
        itemsI18n: {
          id: [
            'Fotokopi KTP Pemohon & Pasangan (untuk Perorangan) atau KTP seluruh Direksi & Komisaris (untuk PT/CV)',
            'Fotokopi Kartu Keluarga (KK) & Surat Nikah/Cerai',
            'Fotokopi NPWP Pribadi & NPWP Badan Usaha'
          ],
          en: [
            'Copy of Applicant & Spouse KTP (Individuals) or KTP of all Directors & Commissioners (PT/CV)',
            'Copy of Family Card (KK) & Marriage/Divorce Certificate',
            'Copy of Personal Tax ID (NPWP) & Corporate Tax ID (NPWP Badan)'
          ],
          zh: [
            '借款人及配偶身份证复印件（个人）或全体董事及监事身份证复印件（公司）',
            '家庭户口簿（KK）及结婚证/离婚证明复印件',
            '个人税卡（NPWP）及企业法人税卡复印件'
          ]
        }
      },
      {
        title: '2. Dokumen Legalitas & Perizinan Usaha',
        titleI18n: {
          id: '2. Dokumen Legalitas & Perizinan Usaha',
          en: '2. Business Legality & Operating Licenses',
          zh: '2. 企业法律登记与行政许可文件'
        },
        items: [
          'Nomor Induk Berusaha (NIB) berbasis OSS / Izin Usaha Mikro Kecil (IUMK)',
          'Akta Pendirian Perusahaan & Akta Perubahan Terakhir beserta SK Kemenkumham (khusus PT/CV)',
          'Surat Keterangan Domisili Usaha / Surat Izin Tempat Usaha (SITU/SIUP/TDP)'
        ],
        itemsI18n: {
          id: [
            'Nomor Induk Berusaha (NIB) berbasis OSS / Izin Usaha Mikro Kecil (IUMK)',
            'Akta Pendirian Perusahaan & Akta Perubahan Terakhir beserta SK Kemenkumham (khusus PT/CV)',
            'Surat Keterangan Domisili Usaha / Surat Izin Tempat Usaha (SITU/SIUP/TDP)'
          ],
          en: [
            'OSS-based Business Identification Number (NIB) / Micro Small Business License (IUMK)',
            'Articles of Incorporation, latest amendments, and Ministry of Law and Human Rights approvals (PT/CV)',
            'Business Domicile Certificate / Business Premises Permit (SITU/SIUP/TDP)'
          ],
          zh: [
            '在线单一提交系统（OSS）企业唯一识别码（NIB）/ 小微企业营业执照',
            '公司设立章程、最新变更公证书及印尼司法部批文（PT/CV）',
            '企业经营场所证明 / 营业执照（SITU/SIUP/TDP）'
          ]
        }
      },
      {
        title: '3. Dokumen Keuangan & Finansial',
        titleI18n: {
          id: '3. Dokumen Keuangan & Finansial',
          en: '3. Financial Statements & Banking Records',
          zh: '3. 企业财务报表与银行流水明细'
        },
        items: [
          'Rekening Koran 6 (enam) bulan terakhir dari bank operasional utama',
          'Laporan Keuangan Internal (Neraca & Laba Rugi) minimal 2 tahun terakhir',
          'Daftar Supplier / Buyer (Rekap Penjualan & Pembelian)',
          'Surat Perjanjian Kerja / SPK Kontrak Project (jika pengajuan berbasis project)'
        ],
        itemsI18n: {
          id: [
            'Rekening Koran 6 (enam) bulan terakhir dari bank operasional utama',
            'Laporan Keuangan Internal (Neraca & Laba Rugi) minimal 2 tahun terakhir',
            'Daftar Supplier / Buyer (Rekap Penjualan & Pembelian)',
            'Surat Perjanjian Kerja / SPK Kontrak Project (jika pengajuan berbasis project)'
          ],
          en: [
            'Bank Account Statements for the last 6 (six) months from primary operational banks',
            'Internal Financial Statements (Balance Sheet & Profit/Loss) for at least the last 2 years',
            'List of Suppliers / Buyers (Sales & Purchase Summary Ledger)',
            'Work Contracts / Purchase Orders (SPK) for project-based financing applications'
          ],
          zh: [
            '主营业务结算银行近 6 个月银行对账流水明细',
            '近 2 年企业内部财务报表（资产负债表与损益表）',
            '主要供应商与客户名单（采购与销售汇总明细）',
            '工程承包合同或采购订单协议（若申请特定项目融资）'
          ]
        }
      },
      {
        title: '4. Dokumen Agunan & Jaminan',
        titleI18n: {
          id: '4. Dokumen Agunan & Jaminan',
          en: '4. Collateral & Security Documents',
          zh: '4. 抵押担保物权属凭证'
        },
        items: [
          'Sertifikat Hak Milik (SHM) / Hak Guna Bangunan (SHGB) asli yang masih berlaku',
          'Izin Mendirikan Bangunan (IMB / PBG)',
          'Surat Pemberitahuan Pajak Terutang (SPPT PBB) beserta Bukti Lunas PBB tahun terakhir'
        ],
        itemsI18n: {
          id: [
            'Sertifikat Hak Milik (SHM) / Hak Guna Bangunan (SHGB) asli yang masih berlaku',
            'Izin Mendirikan Bangunan (IMB / PBG)',
            'Surat Pemberitahuan Pajak Terutang (SPPT PBB) beserta Bukti Lunas PBB tahun terakhir'
          ],
          en: [
            'Original Freehold (SHM) or Building Rights (SHGB) Title Certificates',
            'Building Construction Approval Permit (IMB / PBG)',
            'Latest Land & Building Tax Notice (SPPT PBB) and Paid Tax Receipt'
          ],
          zh: [
            '处于有效状态的永久所有权地契（SHM）或建筑使用权证（SHGB）原件',
            '房屋建筑物施工许可证（IMB / PBG）',
            '最新年度房产地税纳税通知单（SPPT PBB）及完税凭证'
          ]
        }
      }
    ],
    notes: 'Untuk konsultasi perhitungan plafon, rasio DSCR, serta estimasi suku bunga SME, hubungi RM Kredit Komersial kami.',
    notesI18n: {
      id: 'Untuk konsultasi perhitungan plafon, rasio DSCR, serta estimasi suku bunga SME, hubungi RM Kredit Komersial kami.',
      en: 'For debt service coverage (DSCR) assessments and personalized interest rates, contact our Commercial Lending RM.',
      zh: '有关贷款额度测算、偿债备付率（DSCR）分析及中小企业优惠利率，请咨询商业信贷客户经理。'
    },
    rmContact: {
      name: 'Utama Farid',
      role: 'RM Kredit Komersial & SME',
      phone: '6281330785880',
      whatsappText: 'Halo Pak Utama Farid, saya ingin berkonsultasi mengenai syarat pengajuan fasilitas Kredit Modal Kerja / SME di BRI KC Jakarta Jelambar.'
    }
  },
  {
    id: 'faq-konsumer-01',
    category: 'konsumer',
    categoryLabel: 'KPR BRI & Kredit BRIguna',
    categoryLabelI18n: {
      id: 'KPR BRI & Kredit BRIguna',
      en: 'BRI Mortgages (KPR) & BRIguna Loans',
      zh: 'BRI 房贷（KPR）与 BRIguna 个人贷款'
    },
    question: 'Bagaimana persyaratan dokumen untuk pengajuan KPR BRI dan Pinjaman BRIguna?',
    questionI18n: {
      id: 'Bagaimana persyaratan dokumen untuk pengajuan KPR BRI dan Pinjaman BRIguna?',
      en: 'What are the required documents for BRI Mortgages (KPR) and BRIguna Personal Loans?',
      zh: '申请 BRI 房屋按揭贷款（KPR）及 BRIguna 个人消费贷款需要哪些文件？'
    },
    summary: 'Solusi kepemilikan rumah impian baru/bekas (KPR) dan pinjaman konsumer tanpa agunan fisik bagi karyawan payroll BRI (BRIguna).',
    summaryI18n: {
      id: 'Solusi kepemilikan rumah impian baru/bekas (KPR) dan pinjaman konsumer tanpa agunan fisik bagi karyawan payroll BRI (BRIguna).',
      en: 'Financing solutions for new/used homes (KPR) and non-collateralized personal loans for BRI payroll employees (BRIguna).',
      zh: '新房与二手房购置房贷（KPR）及面向 BRI 薪资代发企业员工的免实物抵押个人消费信用贷款（BRIguna）。'
    },
    documents: [
      {
        title: '1. Dokumen Identitas Pemohon KPR / BRIguna',
        titleI18n: {
          id: '1. Dokumen Identitas Pemohon KPR / BRIguna',
          en: '1. Applicant Identity Documents (KPR & BRIguna)',
          zh: '1. 借款申请人身份证明文件'
        },
        items: [
          'Fotokopi KTP Pemohon dan KTP Pasangan (suami/istri)',
          'Fotokopi Kartu Keluarga (KK) & Surat Nikah/Cerai/Kematian',
          'Fotokopi NPWP Pribadi pemohon'
        ],
        itemsI18n: {
          id: [
            'Fotokopi KTP Pemohon dan KTP Pasangan (suami/istri)',
            'Fotokopi Kartu Keluarga (KK) & Surat Nikah/Cerai/Kematian',
            'Fotokopi NPWP Pribadi pemohon'
          ],
          en: [
            'Copy of Applicant and Spouse KTP ID cards',
            'Copy of Family Card (KK) & Marriage/Divorce/Death Certificate',
            'Copy of Applicant Personal Tax ID (NPWP)'
          ],
          zh: [
            '申请人及配偶身份证复印件',
            '家庭户口簿（KK）及结婚证/离婚证/证明文件复印件',
            '申请人个人税卡（NPWP）复印件'
          ]
        }
      },
      {
        title: '2. Dokumen Penghasilan (Karyawan / Wiraswasta)',
        titleI18n: {
          id: '2. Dokumen Penghasilan (Karyawan / Wiraswasta)',
          en: '2. Proof of Income (Employees & Entrepreneurs)',
          zh: '2. 收入与资信证明材料（受薪雇员/自雇人士）'
        },
        items: [
          'Slip Gaji Asli 3 bulan terakhir / Surat Keterangan Penghasilan dari perusahaan',
          'Surat Keterangan Kerja Asli (minimal status karyawan tetap 1-2 tahun)',
          'Rekening Koran / Buku Tabungan Payroll 3-6 bulan terakhir',
          'SK Pengangkatan Pertama & SK Terakhir (Khusus ASN/TNI/Polri/BUMN untuk BRIguna)'
        ],
        itemsI18n: {
          id: [
            'Slip Gaji Asli 3 bulan terakhir / Surat Keterangan Penghasilan dari perusahaan',
            'Surat Keterangan Kerja Asli (minimal status karyawan tetap 1-2 tahun)',
            'Rekening Koran / Buku Tabungan Payroll 3-6 bulan terakhir',
            'SK Pengangkatan Pertama & SK Terakhir (Khusus ASN/TNI/Polri/BUMN untuk BRIguna)'
          ],
          en: [
            'Original Salary Slips for the last 3 months / Employer Income Statement',
            'Original Employment Certificate (minimum 1-2 years permanent status)',
            'Payroll Bank Account Statements for the last 3 to 6 months',
            'Initial & Latest Civil Service Appointment Decree (for Civil Servants/Military/State-Owned Enterprises applying for BRIguna)'
          ],
          zh: [
            '近 3 个月工资单原件 / 雇主出具的收入证明信',
            '工作在职证明原件（要求正式员工入职满 1-2 年）',
            '近 3-6 个月代发工资银行账户流水明细',
            '公务员/军警/国企员工初次及最新任职任命书（申请 BRIguna 专享）'
          ]
        }
      },
      {
        title: '3. Dokumen Agunan Properti (Khusus KPR)',
        titleI18n: {
          id: '3. Dokumen Agunan Properti (Khusus KPR)',
          en: '3. Property Collateral Documents (KPR Only)',
          zh: '3. 购房抵押物权属文件（仅限 KPR 房贷）'
        },
        items: [
          'Fotokopi Sertifikat Properti (SHM/SHGB/Strata Title)',
          'Fotokopi IMB / Persetujuan Bangunan Gedung (PBG) & Cetak Denah Bangunan',
          'Fotokopi SPPT PBB & Bukti Pembayaran PBB tahun terakhir',
          'Surat Penegasan Pemesanan Rumah (SPPR) dari Developer rekanan BRI atau Surat Kesepakatan Jual Beli (untuk rumah secondary)'
        ],
        itemsI18n: {
          id: [
            'Fotokopi Sertifikat Properti (SHM/SHGB/Strata Title)',
            'Fotokopi IMB / Persetujuan Bangunan Gedung (PBG) & Cetak Denah Bangunan',
            'Fotokopi SPPT PBB & Bukti Pembayaran PBB tahun terakhir',
            'Surat Penegasan Pemesanan Rumah (SPPR) dari Developer rekanan BRI atau Surat Kesepakatan Jual Beli (untuk rumah secondary)'
          ],
          en: [
            'Copy of Property Title Certificate (SHM / SHGB / Strata Title)',
            'Copy of Building Construction Permit (IMB/PBG) & Architectural Floor Plan',
            'Copy of Land & Building Tax Notice (SPPT PBB) and Paid Tax Receipt',
            'Developer Booking Confirmation (SPPR) from BRI Partner Developers or Agreement of Purchase and Sale for secondary market properties'
          ],
          zh: [
            '房屋权属证书复印件（SHM/SHGB/分层地契）',
            '建筑施工许可证（IMB/PBG）及房屋户型测绘图纸',
            '最新年度房产地税通知书（SPPT PBB）及完税证明',
            'BRI 合作开发商认购确认书（SPPR）或二手房买卖意向协议'
          ]
        }
      }
    ],
    notes: 'KPR BRI memberikan promo bunga fixed berjenjang mulai 6.75% dengan tenor hingga 25 tahun.',
    notesI18n: {
      id: 'KPR BRI memberikan promo bunga fixed berjenjang mulai 6.75% dengan tenor hingga 25 tahun.',
      en: 'BRI Mortgages provide special stepped fixed interest rates starting from 6.75% with tenures up to 25 years.',
      zh: 'BRI 房贷提供年化 6.75% 起的分段固定优惠利率，还款期限长达 25 年。'
    },
    rmContact: {
      name: 'Utama Farid',
      role: 'RM Kredit Komersial & Konsumer',
      phone: '6281330785880',
      whatsappText: 'Halo Pak Utama Farid, saya ingin berkonsultasi mengenai simulasi dan persyaratan pengajuan KPR BRI / Kredit BRIguna.'
    }
  },
  {
    id: 'faq-giro-01',
    category: 'giro',
    categoryLabel: 'Giro Bisnis & Pembukaan Rekening PT/CV',
    categoryLabelI18n: {
      id: 'Giro Bisnis & Pembukaan Rekening PT/CV',
      en: 'Corporate Current Account (PT/CV)',
      zh: '企业活期支票账户（PT/CV 开户）'
    },
    question: 'Apa saja dokumen yang dibutuhkan untuk pembukaan Rekening Giro Badan Usaha (PT / CV / Yayasan)?',
    questionI18n: {
      id: 'Apa saja dokumen yang dibutuhkan untuk pembukaan Rekening Giro Badan Usaha (PT / CV / Yayasan)?',
      en: 'What documents are required to open a Corporate Current Account (Giro) for PT / CV / Foundations?',
      zh: '以公司主体（PT / CV / 基金会）在 Bank BRI 开立企业活期支票账户需要准备哪些材料？'
    },
    summary: 'Panduan pembukaan rekening Giro Rupiah & Valas untuk kelancaran transaksi bisnis, fasilitas cek/bilyet giro, dan integrasi Cash Management System (CMS).',
    summaryI18n: {
      id: 'Panduan pembukaan rekening Giro Rupiah & Valas untuk kelancaran transaksi bisnis, fasilitas cek/bilyet giro, dan integrasi Cash Management System (CMS).',
      en: 'Corporate checking account onboarding guide for IDR & foreign currency operations, check/giro clearing, and Cash Management System (CMS) access.',
      zh: '印尼盾及多币种外汇企业活期开户指南，支持支票/划拨票据结算及企业现金管理系统（CMS）无缝接入。'
    },
    documents: [
      {
        title: '1. Dokumen Legalitas Perusahaan (Wajib Asli & Fotokopi)',
        titleI18n: {
          id: '1. Dokumen Legalitas Perusahaan (Wajib Asli & Fotokopi)',
          en: '1. Corporate Legal Documents (Original & Copies Required)',
          zh: '1. 企业法定资质证照（需查验原件并留存复印件）'
        },
        items: [
          'Akta Pendirian Perusahaan dan seluruh Akta Perubahan Anggaran Dasar Terakhir',
          'Surat Keputusan (SK) Pengesahan dari Kemenkumham RI',
          'Nomor Induk Berusaha (NIB) berbasis OSS',
          'Nomor Pokok Wajib Pajak (NPWP) Badan Usaha'
        ],
        itemsI18n: {
          id: [
            'Akta Pendirian Perusahaan dan seluruh Akta Perubahan Anggaran Dasar Terakhir',
            'Surat Keputusan (SK) Pengesahan dari Kemenkumham RI',
            'Nomor Induk Berusaha (NIB) berbasis OSS',
            'Nomor Pokok Wajib Pajak (NPWP) Badan Usaha'
          ],
          en: [
            'Deed of Company Incorporation and all latest Articles of Association amendments',
            'Approval Decrees (SK) from the Ministry of Law and Human Rights RI',
            'OSS-based Business Identification Number (NIB)',
            'Corporate Tax ID (NPWP Badan)'
          ],
          zh: [
            '公司设立章程公证书及历次最新公司章程变更公证书',
            '印尼司法与人权部（Kemenkumham）核准批复公文（SK）',
            '国家在线单一提交系统（OSS）企业唯一识别码（NIB）',
            '企业法人税卡（NPWP Badan）'
          ]
        }
      },
      {
        title: '2. Dokumen Identitas Pengurus & Kuasa Rekening',
        titleI18n: {
          id: '2. Dokumen Identitas Pengurus & Kuasa Rekening',
          en: '2. Identification of Management & Account Signatories',
          zh: '2. 企业董事、监事及被授权签字人身份证明'
        },
        items: [
          'e-KTP seluruh Direksi dan Komisaris yang tercantum dalam akta',
          'NPWP Pribadi Direktur Utama / Penandatangan Cek',
          'Surat Kuasa Penunjukan Pengelolaan Rekening bermaterai (jika dikuasakan)',
          'Pas Foto terbaru Pengurus / Spesimen tanda tangan rekening'
        ],
        itemsI18n: {
          id: [
            'e-KTP seluruh Direksi dan Komisaris yang tercantum dalam akta',
            'NPWP Pribadi Direktur Utama / Penandatangan Cek',
            'Surat Kuasa Penunjukan Pengelolaan Rekening bermaterai (jika dikuasakan)',
            'Pas Foto terbaru Pengurus / Spesimen tanda tangan rekening'
          ],
          en: [
            'Valid e-KTP of all Directors and Commissioners stated in company deeds',
            'Personal Tax ID (NPWP) of the President Director / Authorized Signatory',
            'Notarized/Stamped Power of Attorney for Account Management (if delegated)',
            'Recent photos of authorized management & specimen signature card'
          ],
          zh: [
            '公司章程中载明的全体董事和监事印尼身份证（e-KTP）/ 护照与工作居留签',
            '总经理/支票主签字人个人税卡（NPWP）',
            '贴有印花税票的账户管理法定授权委托书（若适用）',
            '授权管理人员近期证件照及开户预留印鉴签字卡'
          ]
        }
      },
      {
        title: '3. Setoran Awal Pembukaan Rekening Giro',
        titleI18n: {
          id: '3. Setoran Awal Pembukaan Rekening Giro',
          en: '3. Initial Deposit for Account Opening',
          zh: '3. 账户开立初始预存资金'
        },
        items: [
          'Setoran awal Giro Rupiah Badan Usaha: Rp 1.000.000,- (Satu Juta Rupiah)',
          'Setoran awal Giro Valas (USD/EUR/SGD/CNY/JPY) sesuai ketentuan kurs minimum per mata uang'
        ],
        itemsI18n: {
          id: [
            'Setoran awal Giro Rupiah Badan Usaha: Rp 1.000.000,- (Satu Juta Rupiah)',
            'Setoran awal Giro Valas (USD/EUR/SGD/CNY/JPY) sesuai ketentuan kurs minimum per mata uang'
          ],
          en: [
            'Corporate IDR Checking Account Initial Deposit: IDR 1,000,000',
            'Foreign Currency Checking Account (USD/EUR/SGD/CNY/JPY) according to currency minimums'
          ],
          zh: [
            '企业印尼盾活期支票账户初始开户起存金额：1,000,000 印尼盾',
            '多币种外汇活期账户（美元 USD/欧元 EUR/新币 SGD/人民币 CNY/日元 JPY）按币种起存标准执行'
          ]
        }
      }
    ],
    notes: 'Pembukaan Giro langsung terkoneksi dengan fitur Cash Management System (CMS) BRI untuk kemudahan transfer massal (mass payment payroll) dan monitoring multi-rekening.',
    notesI18n: {
      id: 'Pembukaan Giro langsung terkoneksi dengan fitur Cash Management System (CMS) BRI untuk kemudahan transfer massal (mass payment payroll) dan monitoring multi-rekening.',
      en: 'Corporate checking accounts integrate directly with BRI Cash Management System (CMS) for mass payments, automated payroll, and multi-account liquidity management.',
      zh: '开立企业活期账户即可同步开通 Bank BRI 现金管理系统（CMS），支持批量代发工资、跨行批量划款及多子母账户资金归集监控。'
    },
    rmContact: {
      name: 'Ahmad Firdaus',
      role: 'RM Dana & Funding',
      phone: '6281340902924',
      whatsappText: 'Halo Pak Ahmad Firdaus, saya ingin berkonsultasi mengenai pembukaan Rekening Giro Badan Usaha PT/CV dan fasilitas CMS di BRI KC Jakarta Jelambar.'
    }
  },
  {
    id: 'faq-merchant-01',
    category: 'merchant',
    categoryLabel: 'EDC Android Merchant & Soundbox QRIS',
    categoryLabelI18n: {
      id: 'EDC Android Merchant & Soundbox QRIS',
      en: 'Merchant Android EDC & QRIS Soundbox',
      zh: '商户智能安卓 POS 终端与语音播报音箱'
    },
    question: 'Bagaimana cara mengajukan mesin EDC Android BRI dan Soundbox QRIS untuk kasir toko/usaha?',
    questionI18n: {
      id: 'Bagaimana cara mengajukan mesin EDC Android BRI dan Soundbox QRIS untuk kasir toko/usaha?',
      en: 'How to apply for a BRI Android EDC machine and QRIS Soundbox for store checkout?',
      zh: '如何为门店收银台申领 Bank BRI 智能安卓 POS 机与二维码语音播报音箱？'
    },
    summary: 'Fasilitas penerimaan pembayaran cashless kartu debit/kredit (Visa, Mastercard, JCB) dan QRIS dinamis cepat dengan notifikasi suara instan anti-fraud.',
    summaryI18n: {
      id: 'Fasilitas penerimaan pembayaran cashless kartu debit/kredit (Visa, Mastercard, JCB) dan QRIS dinamis cepat dengan notifikasi suara instan anti-fraud.',
      en: 'Cashless payment acceptance for debit/credit cards (Visa, Mastercard, JCB) and dynamic QRIS with instant voice alerts for anti-fraud security.',
      zh: '支持全卡种银行借记卡/信用卡（Visa、Mastercard、JCB）无现金刷卡及动态 QRIS 收款，具备实时语音语音防逃单播报功能。'
    },
    documents: [
      {
        title: '1. Dokumen Persyaratan Merchant (Perorangan / Toko Retail)',
        titleI18n: {
          id: '1. Dokumen Persyaratan Merchant (Perorangan / Toko Retail)',
          en: '1. Individual / Retail Merchant Requirements',
          zh: '1. 个人商户 / 零售实体门店申领材料'
        },
        items: [
          'Fotokopi e-KTP Pemilik Usaha / Merchant',
          'Fotokopi NPWP Pemilik Usaha',
          'Nomor rekening tabungan BRI (BritAma / Simpedes) untuk penampungan settlement dana',
          'Foto tempat usaha tampak depan (terlihat plang nama toko) dan foto aktivitas kasir',
          'Surat Keterangan Usaha (SKU) dari Kelurahan atau NIB OSS'
        ],
        itemsI18n: {
          id: [
            'Fotokopi e-KTP Pemilik Usaha / Merchant',
            'Fotokopi NPWP Pemilik Usaha',
            'Nomor rekening tabungan BRI (BritAma / Simpedes) untuk penampungan settlement dana',
            'Foto tempat usaha tampak depan (terlihat plang nama toko) dan foto aktivitas kasir',
            'Surat Keterangan Usaha (SKU) dari Kelurahan atau NIB OSS'
          ],
          en: [
            'Copy of Business Owner e-KTP ID card',
            'Copy of Business Owner Tax ID (NPWP)',
            'Active BRI savings account (BritAma/Simpedes) for daily settlement payouts',
            'Photos of the storefront showing business signage and cashier checkout counter',
            'Business Certificate (SKU) from local sub-district office or OSS NIB'
          ],
          zh: [
            '商户经营者印尼身份证（e-KTP）复印件',
            '商户经营者税卡（NPWP）复印件',
            '用于每日资金自动清算入账的 BRI 储蓄账户（BritAma/Simpedes）',
            '实体店铺门头清晰招牌照片及收银收单场景实景照片',
            '当地街道办出具的经营证明（SKU）或 OSS NIB 执照'
          ]
        }
      },
      {
        title: '2. Dokumen Persyaratan Merchant (Badan Usaha PT / CV)',
        titleI18n: {
          id: '2. Dokumen Persyaratan Merchant (Badan Usaha PT / CV)',
          en: '2. Corporate Merchant Requirements (PT / CV)',
          zh: '2. 企业法人商户申领材料（PT / CV）'
        },
        items: [
          'Fotokopi e-KTP & NPWP Direktur Utama',
          'Akta Pendirian & Perubahan Terakhir serta SK Menkumham',
          'Nomor Induk Berusaha (NIB) berbasis OSS',
          'Rekening Koran Giro BRI Badan Usaha',
          'Formulir Aplikasi Merchant Resmi Bank BRI (disediakan oleh Petugas)'
        ],
        itemsI18n: {
          id: [
            'Fotokopi e-KTP & NPWP Direktur Utama',
            'Akta Pendirian & Perubahan Terakhir serta SK Menkumham',
            'Nomor Induk Berusaha (NIB) berbasis OSS',
            'Rekening Koran Giro BRI Badan Usaha',
            'Formulir Aplikasi Merchant Resmi Bank BRI (disediakan oleh Petugas)'
          ],
          en: [
            'Copy of President Director e-KTP & Tax ID (NPWP)',
            'Articles of Incorporation & latest amendments with Ministry of Law approval',
            'OSS-based Business Identification Number (NIB)',
            'BRI Corporate Current Account statement',
            'Official BRI Merchant Application Form (provided by RM)'
          ],
          zh: [
            '公司法人代表身份证（e-KTP）及税卡（NPWP）复印件',
            '公司章程公证书、最新变更章程及印尼司法部批复',
            '在线单一提交系统（OSS）企业识别码（NIB）',
            'BRI 企业活期结算账户流水对账单',
            'Bank BRI 官方特约商户申请表（由客户经理协助提供）'
          ]
        }
      }
    ],
    notes: 'Mesin EDC Android BRI dilengkapi koneksi SIM Card 4G cepat + Wi-Fi gratis, printer struk termal terintegrasi, dan settlement dana cepat H+1 hari kalender.',
    notesI18n: {
      id: 'Mesin EDC Android BRI dilengkapi koneksi SIM Card 4G cepat + Wi-Fi gratis, printer struk termal terintegrasi, dan settlement dana cepat H+1 hari kalender.',
      en: 'BRI Android EDC terminals feature built-in 4G SIM + Wi-Fi connectivity, thermal receipt printer, and T+1 fast daily settlement.',
      zh: 'Bank BRI 智能安卓 POS 机内置 4G 高速 SIM 卡与 Wi-Fi 双模连接，集成热敏小票打印机，次日（T+1）极速自动结算到账。'
    },
    rmContact: {
      name: 'Adam Werna Kusuma',
      role: 'RM Merchant & Mikro',
      phone: '6281294520098',
      whatsappText: 'Halo Pak Adam, saya ingin mengajukan pemasangan Mesin EDC Android dan Soundbox QRIS BRI untuk tempat usaha saya.'
    }
  },
  {
    id: 'faq-crr-01',
    category: 'crr',
    categoryLabel: 'Restrukturisasi & Penyelamatan Kredit (CRR)',
    categoryLabelI18n: {
      id: 'Restrukturisasi & Penyelamatan Kredit (CRR)',
      en: 'Loan Restructuring & Debt Recovery (CRR)',
      zh: '商业贷款重组与纾困保全 (CRR)'
    },
    question: 'Bagaimana prosedur dan opsi keringanan Restrukturisasi Kredit Komersial / Usaha di BRI KC Jelambar?',
    questionI18n: {
      id: 'Bagaimana prosedur dan opsi keringanan Restrukturisasi Kredit Komersial / Usaha di BRI KC Jelambar?',
      en: 'What are the procedures and relief options for Commercial Credit Restructuring at BRI KC Jelambar?',
      zh: '在 BRI Jelambar 支行申请商业信贷债务重组与纾困减负的流程和方案有哪些？'
    },
    summary: 'Program penataan kembali kewajiban pinjaman bagi debitur yang mengalami penurunan omzet atau kendala arus kas melalui skema restrukturisasi resmi Bank BRI.',
    summaryI18n: {
      id: 'Program penataan kembali kewajiban pinjaman bagi debitur yang mengalami penurunan omzet atau kendala arus kas melalui skema restrukturisasi resmi Bank BRI.',
      en: 'Structured debt rehabilitation programs for debtors facing temporary business disruptions or cash flow challenges through formal BRI mechanisms.',
      zh: '为因市场波动导致经营收入下滑或现金流受阻的借款企业，提供官方合规的商业信贷展期与债务优化重组方案。'
    },
    documents: [
      {
        title: '1. Opsi Skema Keringanan Restrukturisasi',
        titleI18n: {
          id: '1. Opsi Skema Keringanan Restrukturisasi',
          en: '1. Available Restructuring Relief Options',
          zh: '1. 债务重组与纾困调整方案选择'
        },
        items: [
          'Rescheduling (Perpanjangan Jangka Waktu Tenor Kredit untuk menurunkan nominal angsuran per bulan)',
          'Reconditioning (Penyesuaian suku bunga pinjaman atau grace period pembayaran pokok pinjaman)',
          'Restructuring (Penataan ulang struktur fasilitas kredit, konversi tunggakan bunga, atau penambahan modal kerja penyehatan usaha)',
          'Penyelesaian damai dan penebusan agunan secara bertahap'
        ],
        itemsI18n: {
          id: [
            'Rescheduling (Perpanjangan Jangka Waktu Tenor Kredit untuk menurunkan nominal angsuran per bulan)',
            'Reconditioning (Penyesuaian suku bunga pinjaman atau grace period pembayaran pokok pinjaman)',
            'Restructuring (Penataan ulang struktur fasilitas kredit, konversi tunggakan bunga, atau penambahan modal kerja penyehatan usaha)',
            'Penyelesaian damai dan penebusan agunan secara bertahap'
          ],
          en: [
            'Rescheduling (Extension of loan tenure to reduce monthly installment burden)',
            'Reconditioning (Interest rate concessions or principal grace period deferrals)',
            'Restructuring (Refinancing debt facilities, interest capitalization, or rehabilitation working capital)',
            'Consensual settlement and structured collateral redemption agreements'
          ],
          zh: [
            '展期还款（Rescheduling）：延长贷款还款期限，直接降低每月月供金额',
            '条件重订（Reconditioning）：阶段性调降贷款利率或给予还本宽限期（Grace Period）',
            '结构重组（Restructuring）：重新优化信贷结构、利息资本化或注入纾困营运资金',
            '友好协商：分阶段逐步清偿债务并解封质押担保物'
          ]
        }
      },
      {
        title: '2. Dokumen Pengajuan Permohonan Restrukturisasi',
        titleI18n: {
          id: '2. Dokumen Pengajuan Permohonan Restrukturisasi',
          en: '2. Required Application Documents for Restructuring',
          zh: '2. 申请贷款重组必备书面材料'
        },
        items: [
          'Surat Permohonan Resmi Restrukturisasi bermaterai yang ditandatangani debitur',
          'Laporan kondisi keuangan usaha terkini & rekap arus kas (cash flow)',
          'Rencana proyeksi pemulihan usaha (Business Plan Action Recovery)',
          'Fotokopi Perjanjian Kredit awal dan dokumen agunan yang masih dikuasai bank'
        ],
        itemsI18n: {
          id: [
            'Surat Permohonan Resmi Restrukturisasi bermaterai yang ditandatangani debitur',
            'Laporan kondisi keuangan usaha terkini & rekap arus kas (cash flow)',
            'Rencana proyeksi pemulihan usaha (Business Plan Action Recovery)',
            'Fotokopi Perjanjian Kredit awal dan dokumen agunan yang masih dikuasai bank'
          ],
          en: [
            'Formal Restructuring Application Letter stamped and signed by debtor',
            'Latest business financial statements and updated cash flow ledger',
            'Business Recovery Action Plan and forward-looking financial forecast',
            'Copy of original Credit Agreement and bank collateral custody receipts'
          ],
          zh: [
            '借款人亲笔签署并加贴印花税票的正式贷款重组书面申请函',
            '企业最新经营财务状况说明与现金流量明细表',
            '企业经营自救与业务复苏行动计划书（Business Plan Action Recovery）',
            '原借款合同复印件及由银行保管的抵押权属凭证复印件'
          ]
        }
      }
    ],
    notes: 'Seluruh proses restrukturisasi melalui tahapan analisis kelayakan usaha komprehensif bersama RM CRR untuk mencapai solusi win-win yang berkelanjutan.',
    notesI18n: {
      id: 'Seluruh proses restrukturisasi melalui tahapan analisis kelayakan usaha komprehensif bersama RM CRR untuk mencapai solusi win-win yang berkelanjutan.',
      en: 'All restructuring processes undergo detailed financial viability assessments with our CRR team to achieve sustainable win-win solutions.',
      zh: '所有重组流程均由 CRR 专业团队进行全面商业可行性评估，确保达成可持续的双赢纾困方案。'
    },
    rmContact: {
      name: 'Yasin Nugraha',
      role: 'RM CRR (Restructuring & Recovery)',
      phone: '6282177773888',
      whatsappText: 'Halo Pak Yasin Nugraha, saya ingin berkonsultasi mengenai prosedur restrukturisasi kredit usaha di BRI KC Jakarta Jelambar.'
    }
  }
];

export function getFaqQuestion(faq: FAQItem, lang: Language): string {
  if (faq.questionI18n && faq.questionI18n[lang]) {
    return faq.questionI18n[lang];
  }
  return faq.question;
}

export function getFaqSummary(faq: FAQItem, lang: Language): string {
  if (faq.summaryI18n && faq.summaryI18n[lang]) {
    return faq.summaryI18n[lang];
  }
  return faq.summary;
}

export function getFaqCategoryLabel(faq: FAQItem, lang: Language): string {
  if (faq.categoryLabelI18n && faq.categoryLabelI18n[lang]) {
    return faq.categoryLabelI18n[lang];
  }
  return faq.categoryLabel;
}

export function getFaqCategoryOptionLabel(cat: FAQCategoryOption, lang: Language): string {
  if (cat.labelI18n && cat.labelI18n[lang]) {
    return cat.labelI18n[lang];
  }
  return cat.label;
}

export function getFaqDocumentTitle(doc: FAQDocumentItem, lang: Language): string {
  if (doc.titleI18n && doc.titleI18n[lang]) {
    return doc.titleI18n[lang];
  }
  return doc.title;
}

export function getFaqDocumentItems(doc: FAQDocumentItem, lang: Language): string[] {
  if (doc.itemsI18n && doc.itemsI18n[lang]) {
    return doc.itemsI18n[lang];
  }
  return doc.items;
}

export function getFaqProcessSteps(faq: FAQItem, lang: Language): string[] {
  if (faq.processStepsI18n && faq.processStepsI18n[lang]) {
    return faq.processStepsI18n[lang];
  }
  return faq.processSteps || [];
}

export function getFaqNotes(faq: FAQItem, lang: Language): string {
  if (faq.notesI18n && faq.notesI18n[lang]) {
    return faq.notesI18n[lang];
  }
  return faq.notes || '';
}
