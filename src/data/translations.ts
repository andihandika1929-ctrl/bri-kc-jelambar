export type Language = 'id' | 'en' | 'zh';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}

export const supportedLanguages: LanguageOption[] = [
  { code: 'id', label: 'Bahasa Indonesia', shortLabel: 'ID', flag: '🇮🇩' },
  { code: 'en', label: 'English', shortLabel: 'EN', flag: '🇬🇧' },
  { code: 'zh', label: '中文 (Mandarin)', shortLabel: 'ZH', flag: '🇨🇳' },
];

export const translations = {
  id: {
    // Top Operational Bar
    topbar: {
      openTitle: 'Layanan Kantor Cabang Buka',
      openSub: '(Operasional Tatap Muka Aktif 08.00 - 15.00 WIB)',
      closedTitle: 'Layanan Kantor Cabang Tutup',
      closedHoliday: '— Hari Libur Nasional • Buka kembali hari kerja 08.00 WIB',
      closedRegular: '— Buka kembali hari kerja pukul 08.00 WIB',
      digital247: '• Layanan Digital BRImo & ATM 24 Jam Aktif',
      callCenter: 'Call BRI: 1500017',
      sabrinaWA: 'Sabrina WA',
      langTitle: 'Pilih Bahasa',
    },

    // Navbar & Header
    nav: {
      brandSub: 'Regional Office Jakarta 3',
      branchBadge: 'KANTOR CABANG',
      home: 'Beranda',
      activities: 'Aktivitas & Berita',
      org: 'Struktur Organisasi',
      services: 'Layanan',
      team: 'Tim Petugas & RM',
      calculator: 'Simulasi',
      units: 'Unit Kerja',
      faq: 'Panduan & FAQ',
      contact: 'Kontak',
      qitaBtn: 'Qita & BRImo',
      consultBtn: 'Hubungi Petugas',
      menuAria: 'Buka Navigasi Mobile',
    },

    // Hero & "I WANT" Bar
    hero: {
      iWant: 'I WANT',
      iWantSub: '| SAYA INGIN',
      letUsHelp: 'LET US HELP YOU',
      wantKur: 'Pengajuan Kredit Usaha Rakyat (KUR Mikro & Super Mikro)',
      wantKmk: 'Kredit Modal Kerja (KMK) & Investasi Usaha / Pabrik',
      wantSme: 'Kredit Usaha Menengah (SME) & Fasilitas Bank Garansi',
      wantUb: 'Layanan Transaksi, Pembukaan Rekening & Platform Baru Qita',
      wantCrr: 'Restrukturisasi Kredit Komersial & Pemulihan Kewajiban (CRR)',
      wantKpr: 'Simulasi & Pengajuan KPR BRI / Pinjaman Konsumer',
      wantEdc: 'Pemasangan Mesin EDC Android & Soundbox QRIS Merchant',
      wantGiro: 'Pembukaan Rekening Giro Bisnis, Deposito & Payroll',
      wantFaq: 'Panduan Checklist Dokumen Persyaratan & FAQ',
      wantUnits: 'Informasi 8 Kantor Unit Supervisi KC Jelambar',
    },

    // Quick Action Sub-Banner Bar (Official BRI Web Line Art Icons)
    quickAction: {
      lelangTitle: 'INFO LELANG',
      pinjamanTitle: 'PENGAJUAN PINJAMAN',
      simpananTitle: 'SIMPANAN & GIRO',
      digitalTitle: 'PENDAFTARAN BRIMO & QITA',
      strukturTitle: 'STRUKTUR TIM & PIC',
    },

    // Welcome & Profile Section
    welcome: {
      badge: 'Portal Profil Resmi Kantor Cabang',
      headingStart: 'Melayani Setulus Hati, Menggerakkan Ekonomi',
      headingHighlight: 'Jakarta Barat',
      desc: 'Selamat datang di portal informasi BRI Kantor Cabang Jakarta Jelambar. Kami hadir memberikan solusi perbankan terintegrasi mulai dari platform digital generasi baru Qita & BRImo, Kredit Usaha (KUR & SME), pengelolaan kas & giro korporasi, hingga layanan perbankan harian langsung bersama tim Universal Banker (UB).',
      btnTeam: 'Lihat Struktur Tim & Chat Petugas',
      btnSim: 'Simulasi Angsuran Kredit',
      btnFaq: 'Panduan Qita & FAQ',
      statStaff: '13 Petugas',
      statStaffSub: '10 RM & 3 Universal Banker',
      statSpeed: '< 15 Mnt',
      statSpeedSub: 'Respon Cepat WhatsApp',
      statUnits: '8 Unit',
      statUnitsSub: 'Jaringan Supervisi KC Jelambar',
      statSegments: '5 Segmen',
      statSegmentsSub: 'UB, Kredit, Dana, CRR & Mikro',
    },

    // Services Section
    services: {
      tagline: 'PORTOFOLIO LAYANAN UNGGULAN',
      title: 'Solusi Finansial Komprehensif untuk Semua Segmen',
      spotlightBadge: 'Platform Generasi Baru Digital Banking',
      spotlightTitle: 'Digital Banking Terpadu (BRImo & Platform Baru Qita)',
      spotlightDesc: 'Nikmati kemudahan transaksi perbankan harian melalui ekosistem digital BRImo serta transisi menuju platform generasi baru Qita. Untuk panduan aktivasi, registrasi akun, maupun pendampingan migrasi fitur digital, silakan konsultasikan langsung dengan tim Universal Banker (UB) kami di Banking Hall KC Jakarta Jelambar.',
      btnSpotlightGuide: 'Panduan & Syarat Qita',
      btnSpotlightChat: 'Chat Universal Banker',
      
      card1Title: 'Simpanan & Cash Management',
      card1Desc: 'Giro Rupiah & Valas, Payroll BRI, Deposito Berjangka dengan bunga kompetitif, dan Cash Management System (CMS).',
      card1Cta: 'Konsultasi RM Dana',
      card1Req: 'Syarat Giro',

      card2Title: 'Kredit Komersial & SME',
      card2Desc: 'Kredit Modal Kerja (KMK), Kredit Investasi pengembangan pabrik/ruko, serta fasilitas Bank Garansi tender.',
      card2Cta: 'Konsultasi RM Kredit',
      card2Req: 'Syarat SME',

      card3Title: 'Solusi Merchant & EDC',
      card3Desc: 'Pengadaan mesin EDC Android modern, QRIS Statis/Dinamis kasir, BRI Soundbox, dan settlement dana cepat.',
      card3Cta: 'Konsultasi Merchant',
      card3Req: 'Syarat EDC',

      card4Title: 'Restrukturisasi & Recovery',
      card4Desc: 'Penataan skema kewajiban kredit komersial, keringanan angsuran usaha, dan konsultasi recovery pembiayaan.',
      card4Cta: 'Konsultasi RM CRR',
      card4Req: 'Prosedur CRR',
    },

    // Team Directory Section
    team: {
      badge: 'Koneksi Langsung Petugas Resmi BRI',
      titleStart: 'Struktur Tim Bisnis &',
      titleHighlight: 'Relationship Manager',
      desc: 'Terhubung langsung dengan 13 Petugas Resmi (10 Relationship Manager & 3 Universal Banker) BRI KC Jakarta Jelambar. Konsultasikan kebutuhan kredit usaha, simpanan giro/deposito, aktivasi platform digital baru Qita & BRImo, hingga restrukturisasi komersial via WhatsApp.',
      statStaffCount: '13 Petugas',
      statStaffSub: '10 RM & 3 Universal Banker',
      statSegments: '5 Segmen',
      statSegmentsSub: 'UB, Kredit, Dana, CRR & Mikro',
      statFastResponse: 'Respon Cepat',
      statFastResponseSub: 'Konsultasi WhatsApp',
      statBranchNetwork: '8 Unit',
      statBranchNetworkSub: 'Jaringan Supervisi Cabang',
      
      tabAll: 'Semua Petugas',
      tabUb: 'Universal Banker (UB)',
      tabLending: 'Kredit & Pinjaman',
      tabFunding: 'Simpanan & Dana',
      tabRestructuring: 'Restrukturisasi & Collection',

      searchPlaceholder: 'Cari nama (Sri Mulyani, Utama Farid, Fahmi...), layanan (Qita, BRImo, KUR, KMK, Giro)...',
      topicLabel: 'Topik:',
      showingText: 'Menampilkan',
      ofText: 'dari',
      officersText: 'Petugas',
      resetFilter: 'Reset Filter',
      keyServices: 'Layanan Kunci',
      btnChatWA: 'Chat via WhatsApp',
      btnCopy: 'Salin',
      btnCopied: 'Nomor Tersalin!',
      btnCustomize: 'Kustomisasi',
      dutyStatus: 'Status: Aktif / Layanan On-Duty',
      emptyTitle: 'Tidak Ada Petugas yang Cocok',
      emptyDesc: 'Coba gunakan kata kunci pencarian lain atau pilih tab "Semua Petugas".',
      emptyBtnReset: 'Reset Semua Filter',
      emptyBtnUb: 'Hubungi Universal Banker',
    },

    // Loan Calculator Section
    calc: {
      badge: 'Kalkulator Simulasi Resmi BRI',
      titleStart: 'Simulasi Angsuran',
      titleHighlight: 'Pinjaman & Kredit',
      desc: 'Hitung estimasi angsuran bulanan pembiayaan KPR, Kredit Kendaraan (KKB), maupun Kredit Konsumer BRIguna sesuai kebutuhan Anda secara transparan dan akurat.',
      tabKpr: 'KPR BRI (Rumah)',
      tabKkb: 'Kredit Kendaraan (KKB)',
      tabBriguna: 'Kredit BRIguna',
      
      propPrice: 'Harga Properti / Rumah',
      carPrice: 'Harga OTR Kendaraan',
      loanAmount: 'Plafond Pinjaman',
      dpPercentage: 'Uang Muka (DP)',
      tenure: 'Jangka Waktu (Tenor)',
      years: 'Tahun',
      interestRate: 'Suku Bunga Efektif (p.a.)',
      interestRateFlat: 'Suku Bunga Flat (p.a.)',
      
      estTitle: 'Estimasi Angsuran Bulanan',
      perMonth: '/ bulan',
      principalLoan: 'Total Pokok Pembiayaan:',
      interestRateSummary: 'Suku Bunga:',
      tenureSummary: 'Jangka Waktu:',
      dpSummary: 'Uang Muka (DP):',
      snk: 'Syarat & Ketentuan Berlaku. Hasil simulasi merupakan estimasi indikatif. Nilai angsuran final mengacu pada persetujuan dan perjanjian kredit resmi PT Bank Rakyat Indonesia (Persero) Tbk.',
      btnConsult: 'Konsultasi Pengajuan Sekarang',
    },

    // Units Network Section
    units: {
      badge: 'Regional Office Jakarta 3 • Supervisi 8 Kantor Unit',
      tagline: 'JARINGAN KANTOR & SUPERVISI',
      title: '8 Unit Kerja di Bawah Supervisi BRI KC Jakarta Jelambar',
      desc: 'Jangkauan pelayanan perbankan mikro, retail, simpanan, dan merchant yang tersebar strategis di seluruh wilayah Jelambar, Grogol, Angke, Pejagalan, Kapuk, dan sekitarnya.',
      openMaps: 'Buka Maps',
    },

    // FAQ & Document Guide Section
    faq: {
      badge: 'Standar Prosedur Operasional BRI',
      tagline: 'PANDUAN PERSYARATAN BERKAS & FAQ',
      title: 'Kelengkapan Dokumen & Tata Cara Pengajuan Layanan',
      desc: 'Panduan checklist resmi dokumen persyaratan untuk pengajuan Kredit Modal Kerja (KMK), KPR BRI, pembukaan Giro Badan Usaha, mesin EDC Merchant, hingga platform digital Qita.',
      searchPlaceholder: 'Cari panduan (e.g. Qita, Syarat KPR, Giro PT, EDC, KMK)...',
      btnOpenFullModal: 'Buka Panduan Lengkap & Unduh Checklist Dokumen',
      modalTitle: 'Panduan Checklist Dokumen & FAQ Layanan',
      modalSub: 'Pilih kategori kebutuhan layanan untuk melihat daftar kelengkapan berkas resmi Bank BRI.',
      btnCopyChecklist: 'Salin Checklist Persyaratan',
      btnContactOfficer: 'Hubungi Petugas Terkait',
    },

    // Location & Contact Section
    location: {
      badge: 'Alamat & Lokasi Kantor Cabang',
      branchName: 'Kantor Cabang BRI Jakarta Jelambar',
      addressLabel: 'Alamat Lengkap:',
      addressFull: 'Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, RT.2/RW.5, Grogol, Kec. Grogol Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450.',
      hours: 'Senin - Jumat: 08.00 - 15.00 WIB',
      phone: '(021) 56981105',
      email: 'kcjelambarbri@gmail.com',
      btnMaps: 'Petunjuk Arah Google Maps',
      btnEmail: 'Kirim Email Resmi',
    },

    // Activities & News Page
    activities: {
      badge: 'Warta & Kegiatan Resmi Kantor Cabang',
      titleStart: 'Aktivitas &',
      titleHighlight: 'Berita Terkini',
      desc: 'Informasi kegiatan sosial TJSL BRI Peduli, literasi keuangan UMKM, sosialisasi inovasi digital banking Qita, dan liputan operasional BRI KC Jakarta Jelambar.',
      searchPlaceholder: 'Cari berita (CSR, QRIS, Qita, KUR, Literasi, Pasar)...',
      categoryAll: 'Semua Berita',
      categoryCsr: 'CSR BRI Peduli',
      categoryLiteracy: 'Literasi Finansial',
      categoryOperational: 'Operasional Cabang',
      categoryEvent: 'Event & Sosialisasi',
      readArticle: 'Baca Selengkapnya',
      backToHome: 'Kembali ke Beranda',
      shareArticle: 'Bagikan Berita',
      publishedOn: 'Diterbitkan:',
      authorLabel: 'Penulis:',
      readTime: 'Waktu Baca:',
      emptyTitle: 'Tidak Ada Berita yang Ditemukan',
      emptyDesc: 'Coba gunakan kata kunci pencarian lain atau pilih kategori "Semua Berita".',
      maintenanceBadge: 'PEMBARUAN SISTEM INFORMASI',
      maintenanceTitle: 'Kanal Aktivitas & Publikasi Cabang Sedang Disiapkan',
      maintenanceDesc: 'Kanal dokumentasi kegiatan, rilis informasi resmi, dan publikasi program BRI KC Jakarta Jelambar sedang dalam tahap penataan berkala untuk menyajikan informasi terkini yang akurat dan transparan.',
    },

    // Organization & Structure Page
    org: {
      badge: 'Tata Kelola & Struktur Kepemimpinan',
      titleStart: 'Struktur Organisasi &',
      titleHighlight: 'Uraian Tugas (Jobdesk)',
      desc: 'Bagan kepemimpinan, pembagian manajerial, dan rincian tugas pokok & fungsi (Jobdesk) seluruh jajaran manajemen operasional, bisnis, dan layanan di BRI KC Jakarta Jelambar.',
      backToHome: 'Kembali ke Beranda',
      treeTitle: 'Bagan Hierarki Manajerial',
      searchPlaceholder: 'Cari pejabat, jabatan, atau tupoksi jobdesk...',
      deptAll: 'Semua Bagian',
      deptLeadership: 'Pimpinan & Manajerial',
      deptOperations: 'Operasional & Layanan',
      deptBusiness: 'Bisnis & Pemasaran',
      jobdeskTitle: 'Rincian Tugas Pokok & Fungsi (Jobdesk)',
      competenciesTitle: 'Kompetensi & Indikator Kinerja Utama (KPI)',
      emptyTitle: 'Jabatan Tidak Ditemukan',
      emptyDesc: 'Coba cari dengan kata kunci nama posisi atau bagian lain.',
    },

    // Footer
    footer: {
      desc: 'Kantor Cabang pengelola supervisi 8 Kantor Unit di Jakarta Barat, menghadirkan layanan perbankan terpadu bagi nasabah personal, UMKM, dan korporasi.',
      col1Title: 'Pilar Layanan & Dokumen',
      col2Title: 'Layanan Digital Terhubung',
      col3Title: 'Layanan Kontak 24 Jam',
      hotline24: 'Contact BRI Hotline 24 Jam',
      sabrinaWA: 'Sabrina WhatsApp Resmi',
      hotlineDesc: 'Respon cepat & informasi resmi nasabah Bank BRI.',
      copyright: '© 2026 PT Bank Rakyat Indonesia (Persero) Tbk — KC Jakarta Jelambar. Inovasi Digital & Portal Resmi diarahkan & dikembangkan oleh Andi Handika (Unit IT & Pelaporan).',
      legal: 'Berizin & Diawasi OJK serta Peserta Penjaminan LPS',
    },
  },

  en: {
    // Top Operational Bar
    topbar: {
      openTitle: 'Branch Office is Open',
      openSub: '(Walk-in Customer Service Active 08:00 - 15:00 WIB)',
      closedTitle: 'Branch Office is Closed',
      closedHoliday: '— National Holiday • Reopening next business day at 08:00 WIB',
      closedRegular: '— Reopening next business day at 08:00 WIB',
      digital247: '• BRImo Digital Banking & ATMs Active 24/7',
      callCenter: 'Call BRI: 1500017',
      sabrinaWA: 'Sabrina WhatsApp',
      langTitle: 'Select Language',
    },

    // Navbar & Header
    nav: {
      brandSub: 'Regional Office Jakarta 3',
      branchBadge: 'BRANCH OFFICE',
      home: 'Home',
      activities: 'Activities & News',
      org: 'Organization Structure',
      services: 'Services',
      team: 'Our Team & RM',
      calculator: 'Calculator',
      units: 'Unit Offices',
      faq: 'Guides & FAQ',
      contact: 'Contact',
      qitaBtn: 'Qita & BRImo',
      consultBtn: 'Contact Staff',
      menuAria: 'Open Mobile Navigation',
    },

    // Hero & "I WANT" Bar
    hero: {
      iWant: 'I WANT',
      iWantSub: '| WHAT WOULD YOU LIKE TO DO?',
      letUsHelp: 'LET US HELP YOU',
      wantKur: 'People’s Business Credit Application (KUR Micro & Ultra Micro)',
      wantKmk: 'Working Capital Loan (KMK) & Factory / Business Investment',
      wantSme: 'Small & Medium Enterprise (SME) Loan & Bank Guarantees',
      wantUb: 'Transaction Services, Account Opening & New Qita Platform',
      wantCrr: 'Commercial Loan Restructuring & Obligation Recovery (CRR)',
      wantKpr: 'Home Ownership Loan (KPR Mortgage) & Consumer Credit Simulation',
      wantEdc: 'Android EDC Machine Installation & QRIS Soundbox Merchant',
      wantGiro: 'Corporate Current Account (Giro), Time Deposit & Payroll',
      wantFaq: 'Required Document Checklist & Comprehensive FAQ',
      wantUnits: 'Information on 8 Supervised Unit Offices of KC Jelambar',
    },

    // Quick Action Sub-Banner Bar (Official BRI Web Line Art Icons)
    quickAction: {
      lelangTitle: 'AUCTION INFO',
      pinjamanTitle: 'LOAN APPLICATION',
      simpananTitle: 'SAVINGS & GIRO',
      digitalTitle: 'BRIMO & QITA ACTIVATION',
      strukturTitle: 'TEAM STRUCTURE & PIC',
    },

    // Welcome & Profile Section
    welcome: {
      badge: 'Official Branch Office Profile Portal',
      headingStart: 'Serving from the Heart, Powering the Economy of',
      headingHighlight: 'West Jakarta',
      desc: 'Welcome to the official information portal of BRI Branch Office Jakarta Jelambar. We provide integrated banking solutions ranging from the next-generation digital platforms Qita & BRImo, Business Loans (KUR & SME), corporate cash & current account management, to daily banking services assisted by our Universal Banker (UB) team.',
      btnTeam: 'View Team Structure & Chat with Staff',
      btnSim: 'Loan Installment Calculator',
      btnFaq: 'Qita Guide & FAQ',
      statStaff: '13 Officers',
      statStaffSub: '10 RM & 3 Universal Bankers',
      statSpeed: '< 15 Mins',
      statSpeedSub: 'Fast WhatsApp Response',
      statUnits: '8 Units',
      statUnitsSub: 'Supervised Branch Network',
      statSegments: '5 Segments',
      statSegmentsSub: 'UB, Credit, Funding, CRR & Micro',
    },

    // Services Section
    services: {
      tagline: 'CORE BANKING SERVICES PORTFOLIO',
      title: 'Comprehensive Financial Solutions for All Segments',
      spotlightBadge: 'Next-Generation Digital Banking Platform',
      spotlightTitle: 'Integrated Digital Banking (BRImo & The New Qita Platform)',
      spotlightDesc: 'Enjoy seamless daily banking transactions through the BRImo digital ecosystem and our transition towards the next-generation Qita platform. For activation guides, account registration, or feature migration assistance, feel free to consult directly with our Universal Banker (UB) team at the Banking Hall of KC Jakarta Jelambar.',
      btnSpotlightGuide: 'Qita Guide & Requirements',
      btnSpotlightChat: 'Chat Universal Banker',
      
      card1Title: 'Savings & Cash Management',
      card1Desc: 'IDR & Foreign Currency Current Accounts (Giro), Corporate Payroll, Competitive Time Deposits, and Cash Management System (CMS).',
      card1Cta: 'Consult Funding RM',
      card1Req: 'Current Account Req.',

      card2Title: 'Commercial & SME Lending',
      card2Desc: 'Working Capital Loans (KMK), Investment Loans for factory/commercial asset expansion, and Project Bank Guarantees.',
      card2Cta: 'Consult Lending RM',
      card2Req: 'SME Loan Req.',

      card3Title: 'Merchant & EDC Solutions',
      card3Desc: 'Modern Android EDC terminals, Static/Dynamic QRIS for cashiers, BRI Soundbox, and fast daily settlement.',
      card3Cta: 'Consult Merchant RM',
      card3Req: 'EDC Terminal Req.',

      card4Title: 'Restructuring & Recovery',
      card4Desc: 'Commercial loan rescheduling, installment relief, business rehabilitation, and debt recovery advisory.',
      card4Cta: 'Consult CRR RM',
      card4Req: 'CRR Procedures',
    },

    // Team Directory Section
    team: {
      badge: 'Direct Contact with Verified BRI Officers',
      titleStart: 'Business Team Structure &',
      titleHighlight: 'Relationship Managers',
      desc: 'Connect directly with 13 Verified Official Officers (10 Relationship Managers & 3 Universal Bankers) at BRI KC Jakarta Jelambar. Consult your needs for business loans, giro deposits, digital activation for Qita & BRImo, or commercial restructuring via WhatsApp.',
      statStaffCount: '13 Officers',
      statStaffSub: '10 RM & 3 Universal Bankers',
      statSegments: '5 Segments',
      statSegmentsSub: 'UB, Lending, Funding, CRR & Micro',
      statFastResponse: 'Fast Response',
      statFastResponseSub: 'WhatsApp Consultation',
      statBranchNetwork: '8 Units',
      statBranchNetworkSub: 'Supervised Branch Network',
      
      tabAll: 'All Officers',
      tabUb: 'Universal Banker (UB)',
      tabLending: 'Credit & Loans',
      tabFunding: 'Deposits & Funding',
      tabRestructuring: 'Restructuring & Collection',

      searchPlaceholder: 'Search by name (Sri Mulyani, Utama Farid, Fahmi...), service (Qita, BRImo, KUR, KMK, Giro)...',
      topicLabel: 'Topic:',
      showingText: 'Showing',
      ofText: 'of',
      officersText: 'Officers',
      resetFilter: 'Reset Filter',
      keyServices: 'Key Services',
      btnChatWA: 'Chat via WhatsApp',
      btnCopy: 'Copy',
      btnCopied: 'Number Copied!',
      btnCustomize: 'Customize',
      dutyStatus: 'Status: Active / On-Duty Service',
      emptyTitle: 'No Matching Officers Found',
      emptyDesc: 'Please try searching with different keywords or select the "All Officers" tab.',
      emptyBtnReset: 'Reset All Filters',
      emptyBtnUb: 'Contact Universal Banker',
    },

    // Loan Calculator Section
    calc: {
      badge: 'Official BRI Simulation Calculator',
      titleStart: 'Loan Installment',
      titleHighlight: 'Simulation Calculator',
      desc: 'Calculate estimated monthly installments for Home Ownership Loans (Mortgage/KPR), Vehicle Loans (KKB), and BRIguna Personal Loans transparently and accurately.',
      tabKpr: 'BRI Mortgage (KPR)',
      tabKkb: 'Vehicle Loan (KKB)',
      tabBriguna: 'BRIguna Personal Loan',
      
      propPrice: 'Property / House Price',
      carPrice: 'Vehicle OTR Price',
      loanAmount: 'Loan Amount (Principal)',
      dpPercentage: 'Down Payment (DP)',
      tenure: 'Loan Tenure',
      years: 'Years',
      interestRate: 'Effective Interest Rate (p.a.)',
      interestRateFlat: 'Flat Interest Rate (p.a.)',
      
      estTitle: 'Estimated Monthly Installment',
      perMonth: '/ month',
      principalLoan: 'Total Loan Principal:',
      interestRateSummary: 'Interest Rate:',
      tenureSummary: 'Tenure:',
      dpSummary: 'Down Payment (DP):',
      snk: 'Terms & Conditions apply. Simulation results are indicative estimates. Final installment values are subject to formal loan approval and agreements by PT Bank Rakyat Indonesia (Persero) Tbk.',
      btnConsult: 'Apply & Consult with RM Now',
    },

    // Units Network Section
    units: {
      badge: 'Regional Office Jakarta 3 • Supervising 8 Unit Offices',
      tagline: 'OFFICE NETWORK & SUPERVISION',
      title: '8 Unit Offices Supervised by BRI KC Jakarta Jelambar',
      desc: 'Extensive coverage for micro-banking, retail, savings, and merchant acquisition strategically located across Jelambar, Grogol, Angke, Pejagalan, Kapuk, and surrounding areas.',
      openMaps: 'Open Maps',
    },

    // FAQ & Document Guide Section
    faq: {
      badge: 'Standard Operating Procedures BRI',
      tagline: 'DOCUMENT CHECKLIST & SERVICE FAQ',
      title: 'Required Documents & Application Procedures',
      desc: 'Official document requirements and checklists for Working Capital Loans (KMK), BRI Mortgages, Corporate Current Accounts (Giro), Merchant EDC terminals, and the new digital platform Qita.',
      searchPlaceholder: 'Search guide (e.g. Qita, Mortgage req, PT Giro, EDC, Working Capital)...',
      btnOpenFullModal: 'Open Complete Guide & Download Document Checklist',
      modalTitle: 'Required Document Checklist & Service FAQ',
      modalSub: 'Select a service category to view the complete list of required documents verified by Bank BRI.',
      btnCopyChecklist: 'Copy Requirement Checklist',
      btnContactOfficer: 'Contact Dedicated Officer',
    },

    // Location & Contact Section
    location: {
      badge: 'Branch Office Address & Location',
      branchName: 'BRI Branch Office Jakarta Jelambar',
      addressLabel: 'Full Address:',
      addressFull: 'Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, RT.2/RW.5, Grogol, Grogol Petamburan District, West Jakarta City, Special Capital Region of Jakarta 11450.',
      hours: 'Monday - Friday: 08:00 - 15:00 WIB',
      phone: '(021) 56981105',
      email: 'kcjelambarbri@gmail.com',
      btnMaps: 'Google Maps Directions',
      btnEmail: 'Send Official Email',
    },

    // Activities & News Page
    activities: {
      badge: 'Official Branch Activities & Dispatches',
      titleStart: 'Branch Activities &',
      titleHighlight: 'Latest News',
      desc: 'Coverage of BRI Peduli CSR community initiatives, MSME digital financial literacy programs, Qita digital banking migrations, and operational highlights at BRI KC Jakarta Jelambar.',
      searchPlaceholder: 'Search news (CSR, QRIS, Qita, KUR, Literacy, Market)...',
      categoryAll: 'All News',
      categoryCsr: 'CSR BRI Peduli',
      categoryLiteracy: 'Financial Literacy',
      categoryOperational: 'Branch Operations',
      categoryEvent: 'Events & Workshops',
      readArticle: 'Read Full Article',
      backToHome: 'Back to Home',
      shareArticle: 'Share News',
      publishedOn: 'Published:',
      authorLabel: 'Author:',
      readTime: 'Read Time:',
      emptyTitle: 'No News Found',
      emptyDesc: 'Please try searching with other keywords or select the "All News" category.',
      maintenanceBadge: 'SYSTEM UPDATE',
      maintenanceTitle: 'Branch Activities & Publications Channel Coming Soon',
      maintenanceDesc: 'The official activity documentation and publication channel of BRI KC Jakarta Jelambar is undergoing regular updates to present accurate and transparent information.',
    },

    // Organization & Structure Page
    org: {
      badge: 'Corporate Governance & Branch Leadership',
      titleStart: 'Organization Structure &',
      titleHighlight: 'Job Descriptions',
      desc: 'Managerial leadership chart, departmental structure, and key responsibilities (Jobdesk) across operational, business, and service divisions at BRI KC Jakarta Jelambar.',
      backToHome: 'Back to Home',
      treeTitle: 'Managerial Hierarchy Tree',
      searchPlaceholder: 'Search officer, position, or job responsibilities...',
      deptAll: 'All Divisions',
      deptLeadership: 'Leadership & Executive',
      deptOperations: 'Operations & Services',
      deptBusiness: 'Business & Commercial Lending',
      jobdeskTitle: 'Key Responsibilities & Duties (Jobdesk)',
      competenciesTitle: 'Key Competencies & Performance Indicators (KPI)',
      emptyTitle: 'Position Not Found',
      emptyDesc: 'Please search using other role titles or division names.',
    },

    // Footer
    footer: {
      desc: 'Supervising branch office overseeing 8 Unit Offices in West Jakarta, delivering integrated banking services for personal, SME, and corporate clients.',
      col1Title: 'Service Pillars & Documents',
      col2Title: 'Connected Digital Services',
      col3Title: '24-Hour Contact Services',
      hotline24: 'Contact BRI 24-Hour Hotline',
      sabrinaWA: 'Official Sabrina WhatsApp',
      hotlineDesc: 'Fast response and official customer support from Bank BRI.',
      copyright: '© 2026 PT Bank Rakyat Indonesia (Persero) Tbk — KC Jakarta Jelambar. Digital Innovation & Official Portal engineered & directed by Andi Handika (IT & Reporting Unit).',
      legal: 'Licensed and Supervised by OJK and Insured by LPS',
    },
  },

  zh: {
    // Top Operational Bar
    topbar: {
      openTitle: '营业部正常营业中',
      openSub: '(柜台及人工业务服务时间：周一至周五 08:00 - 15:00 WIB)',
      closedTitle: '营业部已暂停营业',
      closedHoliday: '— 国家法定节假日 • 下一工作日 08:00 恢复营业',
      closedRegular: '— 下一工作日 08:00 准时恢复营业',
      digital247: '• BRImo 手机银行与 ATM 全天候 24 小时运行',
      callCenter: '官方服务热线：1500017',
      sabrinaWA: 'Sabrina 官方微信/WA',
      langTitle: '切换语言',
    },

    // Navbar & Header
    nav: {
      brandSub: '第三雅加达区域管理总行',
      branchBadge: '一级支行',
      home: '首页',
      activities: '动态与新闻',
      org: '组织架构与职责',
      services: '银行服务',
      team: '专业团队',
      calculator: '贷款试算',
      units: '监管网点',
      faq: '文件指南与问答',
      contact: '联系我们',
      qitaBtn: 'Qita 与 BRImo',
      consultBtn: '联系客户经理',
      menuAria: '打开移动端导航',
    },

    // Hero & "I WANT" Bar
    hero: {
      iWant: 'I WANT',
      iWantSub: '| 我需要办理',
      letUsHelp: 'LET US HELP YOU',
      wantKur: '申请人民普惠贷款（KUR 微型与超级微型贷款）',
      wantKmk: '营运资金贷款（KMK）与工厂/企业商业投资贷款',
      wantSme: '中小型企业（SME）信贷与银行保函业务',
      wantUb: '柜面日常交易、企业开户与全新数字平台 Qita 服务',
      wantCrr: '商业贷款重组与债务展期挽救（CRR 资产保全）',
      wantKpr: '住房抵押贷款（KPR 按揭）与消费信贷试算',
      wantEdc: '智能安卓 POS 机申领与二维码 QRIS 商家收款音箱',
      wantGiro: '企业支票活期账户（Giro）、大额定期存单与代发薪资',
      wantFaq: '申请材料清单指南与业务常见问题解答',
      wantUnits: '查询 Jelambar 支行下辖 8 家直属监管营业所',
    },

    // Quick Action Sub-Banner Bar (Official BRI Web Line Art Icons)
    quickAction: {
      lelangTitle: '资产拍卖信息',
      pinjamanTitle: '信贷融资申请',
      simpananTitle: '储蓄与往来支票',
      digitalTitle: 'BRIMO 与 QITA 激活',
      strukturTitle: '支行团队与对接人',
    },

    // Welcome & Profile Section
    welcome: {
      badge: '印度尼西亚人民银行（BRI）官方一级支行门户',
      headingStart: '竭诚服务，赋能繁荣',
      headingHighlight: '西雅加达经济圈',
      desc: '欢迎访问 BRI 雅加达 Jelambar 支行（KC Jakarta Jelambar）官方门户。我们为您提供全方位金融解决方案：新一代数字化平台 Qita 与 BRImo、普惠与商业贷款（KUR & SME）、企业现金管理与活期账户、以及全能银行家（Universal Banker）柜面专业支持。',
      btnTeam: '查看团队架构并咨询客户经理',
      btnSim: '测算贷款每月还款额',
      btnFaq: 'Qita 指南与问答',
      statStaff: '13 位专员',
      statStaffSub: '10 位客户经理与 3 位全能银行家',
      statSpeed: '< 15 分钟',
      statSpeedSub: 'WhatsApp 极速响应',
      statUnits: '8 家网点',
      statUnitsSub: '辖区直属基层营业所',
      statSegments: '5 大板块',
      statSegmentsSub: '全能业务、信贷、存款、重组与微型金融',
    },

    // Services Section
    services: {
      tagline: '核心银行金融业务组合',
      title: '覆盖全客群的综合性金融解决方案',
      spotlightBadge: '新一代数字化银行核心平台',
      spotlightTitle: '综合数字化银行（BRImo 与全新平台 Qita）',
      spotlightDesc: '通过 BRImo 移动金融生态系统以及向新一代 Qita 平台的平稳升级，体验极致便捷的日常银行业务。如需账户开立、功能注册或数字化迁移指导，欢迎亲临 Jelambar 支行营业大厅咨询全能银行家（UB）团队。',
      btnSpotlightGuide: 'Qita 指南与条件',
      btnSpotlightChat: '咨询全能银行家',
      
      card1Title: '存款与现金管理',
      card1Desc: '印尼盾及多币种外汇活期（Giro）、企业批量代发工资、高收益定期存单与现金管理系统（CMS）。',
      card1Cta: '咨询存款客户经理',
      card1Req: '活期开户条件',

      card2Title: '商业信贷与 SME 贷款',
      card2Desc: '企业营运资金贷款（KMK）、工业厂房购置投资贷款以及工程投标银行保函。',
      card2Cta: '咨询信贷客户经理',
      card2Req: 'SME 申请条件',

      card3Title: '商户收单与智能 POS',
      card3Desc: '新一代智能安卓 POS 终端、静态/动态收银 QRIS、智能播报音箱与次日极速结算。',
      card3Cta: '咨询商户经理',
      card3Req: 'POS 申领条件',

      card4Title: '贷款重组与资产保全',
      card4Desc: '商业信贷债务展期（Rescheduling）、利息减免、企业纾困与不良资产挽救重组方案。',
      card4Cta: '咨询重组专员',
      card4Req: '重组申请流程',
    },

    // Team Directory Section
    team: {
      badge: '直连 BRI 官方认证银行专员',
      titleStart: '专业业务团队与',
      titleHighlight: '客户经理总览',
      desc: '直连 BRI 雅加达 Jelambar 支行 13 位官方认证人员（10 位客户经理与 3 位全能银行家）。随时通过 WhatsApp 咨询企业贷款、活期/定期存款、Qita 与 BRImo 数字平台激活或商业信贷重组方案。',
      statStaffCount: '13 位专员',
      statStaffSub: '10 位客户经理与 3 位全能银行家',
      statSegments: '5 大板块',
      statSegmentsSub: '全能业务、信贷、存款、重组与微型金融',
      statFastResponse: '快速响应',
      statFastResponseSub: 'WhatsApp 专属咨询',
      statBranchNetwork: '8 家网点',
      statBranchNetworkSub: '直属辖区监管网络',
      
      tabAll: '全部人员',
      tabUb: '全能银行家 (UB)',
      tabLending: '信贷与商业贷款',
      tabFunding: '存款与资金管理',
      tabRestructuring: '贷款重组与催收',

      searchPlaceholder: '搜索姓名（Sri Mulyani、Utama Farid、Fahmi...）、业务（Qita、BRImo、KUR、KMK、Giro）...',
      topicLabel: '业务专题：',
      showingText: '正在显示',
      ofText: '共',
      officersText: '位专员',
      resetFilter: '重置筛选',
      keyServices: '核心业务专长',
      btnChatWA: '通过 WhatsApp 咨询',
      btnCopy: '复制号码',
      btnCopied: '已成功复制！',
      btnCustomize: '定制咨询内容',
      dutyStatus: '状态：在岗服务中',
      emptyTitle: '未找到符合条件的专员',
      emptyDesc: '请尝试其他搜索关键词或点击“全部人员”标签。',
      emptyBtnReset: '重置所有筛选',
      emptyBtnUb: '联系全能银行家',
    },

    // Loan Calculator Section
    calc: {
      badge: 'BRI 官方标准贷款试算工具',
      titleStart: '贷款按揭与分期',
      titleHighlight: '在线模拟计算器',
      desc: '透明精准地测算住房抵押贷款（KPR）、汽车消费贷款（KKB）以及 BRIguna 信用贷款的每月还款额与利息支出。',
      tabKpr: 'BRI 房贷（KPR）',
      tabKkb: '汽车分期（KKB）',
      tabBriguna: 'BRIguna 信用贷款',
      
      propPrice: '房屋物业总价',
      carPrice: '汽车指导价格 (OTR)',
      loanAmount: '贷款申请总额',
      dpPercentage: '首付比例 (DP)',
      tenure: '还款期限',
      years: '年',
      interestRate: '实际年化利率 (p.a.)',
      interestRateFlat: '单利固定年利率 (p.a.)',
      
      estTitle: '预估每月还款总额',
      perMonth: '/ 月',
      principalLoan: '贷款本金总额：',
      interestRateSummary: '贷款利率：',
      tenureSummary: '贷款期限：',
      dpSummary: '首付款金额：',
      snk: '条款与细则适用。计算结果仅供参考测算，最终还款金额以 PT Bank Rakyat Indonesia (Persero) Tbk 审批签署的正式借款合同为准。',
      btnConsult: '立即提交申请并咨询客户经理',
    },

    // Units Network Section
    units: {
      badge: '第三雅加达区域管理总行 • 监管 8 家直属基层营业所',
      tagline: '网点网络与属地监管',
      title: 'BRI 雅加达 Jelambar 支行下辖 8 家营业所',
      desc: '服务网络覆盖 Jelambar、Grogol、Angke、Pejagalan、Kapuk 及周边商圈，提供微型金融、零售存款与商户收单服务。',
      openMaps: '打开地图导航',
    },

    // FAQ & Document Guide Section
    faq: {
      badge: 'BRI 标准作业程序 (SOP)',
      tagline: '申请材料清单与常见问题',
      title: '业务申请必备文件与标准流程指南',
      desc: '官方整理的营运资金贷款（KMK）、KPR 房贷、企业活期开户（PT/CV）、商户 POS 终端申领以及 Qita 数字化平台注册材料清单。',
      searchPlaceholder: '搜索指南（例如：Qita、房贷条件、企业开户、POS 机、营运资金）...',
      btnOpenFullModal: '查看完整指南并下载材料清单',
      modalTitle: '必备材料清单与业务指南',
      modalSub: '选择所需业务类别，查看 Bank BRI 官方认证的完整材料清单。',
      btnCopyChecklist: '复制申请材料清单',
      btnContactOfficer: '联系专属业务专员',
    },

    // Location & Contact Section
    location: {
      badge: '营业部地址与联络方式',
      branchName: 'BRI 雅加达 Jelambar 支行',
      addressLabel: '完整地址：',
      addressFull: 'Jalan Makaliwe Raya No. 35 C Wijaya Kusuma, RT.2/RW.5, Grogol, Grogol Petamburan, Kota Jakarta Barat, DKI Jakarta 11450.',
      hours: '周一至周五：08:00 - 15:00 WIB',
      phone: '(021) 56981105',
      email: 'kcjelambarbri@gmail.com',
      btnMaps: 'Google 地图路线导航',
      btnEmail: '发送官方电子邮件',
    },

    // Activities & News Page
    activities: {
      badge: '支行官方动态与企业社会责任',
      titleStart: '支行动态与',
      titleHighlight: '最新资讯',
      desc: '汇集 Bank BRI 雅加达 Jelambar 支行在企业社会责任（TJSL BRI Peduli）、小微金融数字化扫盲、新一代 Qita 平台辅导及支行日常重大业务动态。',
      searchPlaceholder: '搜索新闻动态（CSR、QRIS、Qita、KUR、普惠金融、传统商圈）...',
      categoryAll: '全部动态',
      categoryCsr: 'BRI Peduli 社区关怀',
      categoryLiteracy: '金融数字普惠',
      categoryOperational: '支行业务运营',
      categoryEvent: '重大活动与宣讲',
      readArticle: '阅读全文',
      backToHome: '返回主页',
      shareArticle: '分享本篇资讯',
      publishedOn: '发布日期：',
      authorLabel: '撰稿编辑：',
      readTime: '预计阅读：',
      emptyTitle: '未找到相关新闻动态',
      emptyDesc: '请尝试其他搜索关键词或选择“全部动态”分类。',
      maintenanceBadge: '系统更新',
      maintenanceTitle: '支行动态与官方发布专区正在筹备中',
      maintenanceDesc: 'BRI KC Jakarta Jelambar 的官方活动记录与发布专区正在进行定期系统维护与内容编排，以呈现最新且透明的信息。',
    },

    // Organization & Structure Page
    org: {
      badge: '法人治理与支行组织架构',
      titleStart: '组织架构与',
      titleHighlight: '岗位职责 (Jobdesk)',
      desc: '全面公开 BRI 雅加达 Jelambar 支行各管理层级、业务部门划分、以及管理人员与前线专员的法定主要职责与权限（Jobdesk）。',
      backToHome: '返回主页',
      treeTitle: '支行层级管理架构图',
      searchPlaceholder: '搜索管理人员姓名、岗位名称或职责关键词...',
      deptAll: '全部部门',
      deptLeadership: '支行行领导与高级管理层',
      deptOperations: '营运与柜面服务部',
      deptBusiness: '商业与普惠信贷业务部',
      jobdeskTitle: '主要岗位职责与工作任务 (Jobdesk)',
      competenciesTitle: '核心专业能力与关键绩效指标 (KPI)',
      emptyTitle: '未找到相关岗位',
      emptyDesc: '请尝试其他岗位名称或所属部门关键词。',
    },

    // Footer
    footer: {
      desc: '负责监管西雅加达 8 家基层营业所的一级支行，为个人、中小微企业及大型商业客户提供一站式综合金融服务。',
      col1Title: '核心业务与申请指南',
      col2Title: '数字化互联服务',
      col3Title: '24 小时客户服务',
      hotline24: 'BRI 24 小时客户服务热线',
      sabrinaWA: 'Sabrina 官方 WhatsApp',
      hotlineDesc: '官方权威客服，快速解答客户咨询。',
      copyright: '© 2026 PT Bank Rakyat Indonesia (Persero) Tbk — KC Jakarta Jelambar. 数字门户系统由 Andi Handika（IT与报告部门）主导开发。',
      legal: '经印尼金融服务管理局 (OJK) 批准并监管，参与印尼存款保险机构 (LPS) 承保',
    },
  },
} as const;
