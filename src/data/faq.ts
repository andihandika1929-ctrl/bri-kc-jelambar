export interface FAQItem {
  id: string;
  category: 'sme' | 'konsumer' | 'giro' | 'merchant' | 'crr';
  categoryLabel: string;
  question: string;
  summary: string;
  documents: {
    title: string;
    items: string[];
  }[];
  processSteps?: string[];
  notes?: string;
  rmContact: {
    name: string;
    role: string;
    phone: string;
    whatsappText: string;
  };
}

export const faqCategories = [
  { id: 'all', label: 'Semua Panduan' },
  { id: 'sme', label: 'Kredit Modal Kerja & SME' },
  { id: 'konsumer', label: 'KPR & BRIguna' },
  { id: 'giro', label: 'Giro Badan Usaha' },
  { id: 'merchant', label: 'EDC & QRIS' },
  { id: 'crr', label: 'Restrukturisasi CRR' },
] as const;

export const faqList: FAQItem[] = [
  {
    id: 'faq-sme-01',
    category: 'sme',
    categoryLabel: 'Kredit Modal Kerja & Investasi SME',
    question: 'Apa saja syarat pengajuan Kredit Modal Kerja (KMK) & Kredit Investasi SME di BRI KC Jelambar?',
    summary: 'Pembiayaan modal kerja operasional atau ekspansi aset usaha komersial (PT/CV/Perorangan) dengan plafond mulai dari ratusan juta hingga miliaran rupiah.',
    documents: [
      {
        title: '1. Dokumen Identitas Pemilik & Pengurus Usaha',
        items: [
          'Fotokopi KTP Pemohon & Pasangan (untuk Perorangan) atau KTP seluruh Direksi & Komisaris (untuk PT/CV)',
          'Fotokopi Kartu Keluarga (KK) & Surat Nikah/Cerai',
          'Fotokopi NPWP Pribadi & NPWP Badan Usaha'
        ]
      },
      {
        title: '2. Dokumen Legalitas & Perizinan Usaha',
        items: [
          'Nomor Induk Berusaha (NIB) berbasis OSS / Izin Usaha Mikro Kecil (IUMK)',
          'Akta Pendirian Perusahaan & Akta Perubahan Terakhir beserta SK Kemenkumham (khusus PT/CV)',
          'Surat Keterangan Domisili Usaha / Surat Izin Tempat Usaha (SITU/SIUP/TDP)'
        ]
      },
      {
        title: '3. Dokumen Keuangan & Finansial',
        items: [
          'Rekening Koran 6 (enam) bulan terakhir dari bank operasional utama',
          'Laporan Keuangan Internal (Neraca & Laba Rugi) minimal 2 tahun terakhir',
          'Data Invoice, Purchase Order (PO), atau Kontrak Kerja yang sedang berjalan (untuk KMK Proyek)'
        ]
      },
      {
        title: '4. Dokumen Agunan / Jaminan Tambahan',
        items: [
          'Fotokopi Sertifikat Hak Milik (SHM) / Sertifikat Hak Guna Bangunan (SHGB)',
          'Izin Mendirikan Bangunan (IMB) / Persetujuan Bangunan Gedung (PBG)',
          'Surat Pemberitahuan Pajak Terutang (SPPT) & Bukti Lunas PBB tahun terakhir'
        ]
      }
    ],
    processSteps: [
      'Konsultasi awal bersama RM SME / Kredit Komersial KC Jelambar.',
      'Penyerahan berkas fisik atau dokumen digital melalui tim sales resmi.',
      'Kunjungan survei lokasi usaha & taksasi appraisal agunan (OTS).',
      'Analisis kelayakan kredit & persetujuan pemutus kredit BRI.',
      'Penandatanganan Akad Kredit notariil & pencairan dana ke rekening Giro/Pinjaman.'
    ],
    notes: 'Proses pengajuan rata-rata 3 - 7 hari kerja setelah seluruh dokumen persyaratan dinyatakan lengkap.',
    rmContact: {
      name: 'Fahmi Sidik',
      role: 'RM SME (Small and Medium Enterprise)',
      phone: '628776271545',
      whatsappText: 'Halo Pak Fahmi Sidik, saya ingin konsultasi terkait persyaratan pengajuan Kredit SME / Modal Kerja di BRI KC Jakarta Jelambar.'
    }
  },
  {
    id: 'faq-konsumer-01',
    category: 'konsumer',
    categoryLabel: 'KPR BRI & BRIguna',
    question: 'Bagaimana persyaratan dokumen untuk pengajuan KPR BRI dan Pinjaman BRIguna?',
    summary: 'Fasilitas KPR untuk pembelian rumah/apartemen/renovasi, serta pinjaman payroll BRIguna tanpa agunan fisik.',
    documents: [
      {
        title: 'A. Persyaratan KPR BRI (Kredit Pemilikan Rumah)',
        items: [
          'Fotokopi KTP Pemohon & Pasangan, Kartu Keluarga (KK), dan Buku Nikah',
          'NPWP Pribadi pemohon',
          'Slip Gaji 3 bulan terakhir / Surat Keterangan Penghasilan dari perusahaan',
          'Rekening Koran / Tabungan 3-6 bulan terakhir',
          'Surat Pemesanan Rumah (SPR) dari developer rekanan BRI (untuk rumah baru)',
          'Fotokopi Sertifikat (SHM/SHGB), IMB/PBG, dan PBB (untuk rumah secondary/bekas)'
        ]
      },
      {
        title: 'B. Persyaratan Kredit BRIguna (Khusus Payroll BRI)',
        items: [
          'Asli Surat Keputusan (SK) Pengangkatan Pegawai Pertama & SK Terakhir',
          'Buku Tabungan / Rekening Payroll Bank BRI aktif',
          'Fotokopi KTP Pemohon & Pasangan, KK, dan NPWP',
          'Slip Gaji resmi / Rincian Penghasilan yang dilegalisir',
          'Surat Rekomendasi & Kuasa Potong Gaji Otomatis dari Bendahara/Atasan'
        ]
      }
    ],
    processSteps: [
      'Simulasi angsuran di web & pemilihan skema suku bunga promo.',
      'Pengumpulan berkas persyaratan ke RM Kredit KC Jelambar.',
      'Verifikasi data SLIK OJK & appraisal kelayakan agunan.',
      'Persetujuan kredit & penandatanganan akad KPR/BRIguna.'
    ],
    notes: 'Khusus KPR developer rekanan resmi BRI, nikmati fasilitas DP mulai 0% dan bebas biaya appraisal internal.',
    rmContact: {
      name: 'Utama Farid',
      role: 'RM Kredit Komersial & Pinjaman',
      phone: '6281330785880',
      whatsappText: 'Halo Pak Utama Farid, saya ingin berkonsultasi mengenai syarat pengajuan KPR BRI / BRIguna di KC Jakarta Jelambar.'
    }
  },
  {
    id: 'faq-giro-01',
    category: 'giro',
    categoryLabel: 'Giro Badan Usaha & Korporasi',
    question: 'Apa saja dokumen yang dibutuhkan untuk pembukaan Rekening Giro Perusahaan (PT/CV/Yayasan)?',
    summary: 'Rekening giro bisnis untuk kelancaran transaksi cek, bilyet giro, valas multi-currency, serta integrasi CMS korporasi.',
    documents: [
      {
        title: '1. Dokumen Legalitas Perusahaan (Wajib Legalisir)',
        items: [
          'Akta Pendirian Perusahaan & seluruh Akta Perubahan Anggaran Dasar terakhir',
          'SK Pengesahan dari Kemenkumham RI atas Akta Pendirian & Perubahan',
          'Nomor Induk Berusaha (NIB) berbasis OSS / Izin Usaha / Izin Operasional',
          'Nomor Pokok Wajib Pajak (NPWP) atas nama Badan Usaha'
        ]
      },
      {
        title: '2. Identitas Pengurus & Pejabat Penandatangan',
        items: [
          'KTP Elektronik seluruh anggota Direksi & Komisaris (atau Pengurus Yayasan/Koperasi)',
          'NPWP Pribadi Direktur Utama / Pengurus yang berwenang bertransaksi',
          'Surat Kuasa Penunjukan Pengelola Rekening & Spesimen Tanda Tangan (jika didelegasikan)'
        ]
      },
      {
        title: '3. Persyaratan Finansial',
        items: [
          'Setoran awal pembukaan Giro Rupiah/Valas sesuai ketentuan KC Jelambar',
          'Surat Pernyataan Keaslian Dokumen bermaterai Rp 10.000'
        ]
      }
    ],
    processSteps: [
      'Penyerahan salinan berkas legalitas perusahaan ke RM Dana & Funding.',
      'Pemeriksaan kepatuhan KYC (Know Your Customer) dan verifikasi data AHU Kemenkumham.',
      'Penandatanganan formulir pembukaan rekening Giro & form aktivasi CMS Internet Banking.',
      'Penerbitan nomor rekening Giro resmi dan buku Cek/Bilyet Giro.'
    ],
    notes: 'Dapatkan fasilitas Cash Management System (CMS) BRI gratis untuk kemudahan transfer massal payroll & pembayaran vendor.',
    rmContact: {
      name: 'Ahmad Firdaus',
      role: 'RM Dana & Funding',
      phone: '6281340902924',
      whatsappText: 'Halo Pak Ahmad Firdaus, saya ingin meminta panduan pembukaan rekening Giro Badan Usaha di BRI KC Jakarta Jelambar.'
    }
  },
  {
    id: 'faq-merchant-01',
    category: 'merchant',
    categoryLabel: 'Mesin EDC & QRIS Merchant BRI',
    question: 'Bagaimana cara dan syarat mengajukan Mesin EDC Android & Soundbox QRIS untuk toko/usaha?',
    summary: 'Fasilitas penerimaan pembayaran non-tunai lengkap (Kartu Debit/Kredit, QRIS BRImo/Gopay/OVO/ShopeePay) dengan settlement cepat.',
    documents: [
      {
        title: '1. Dokumen Identitas & Rekening Penampung',
        items: [
          'KTP Elektronik Pemilik Usaha / Penanggung Jawab',
          'Buku Tabungan BRI (BritAma / Simpedes / Giro) atas nama pemilik atau badan usaha',
          'Nomor WhatsApp & Email aktif untuk pendaftaran aplikasi BRI Merchant'
        ]
      },
      {
        title: '2. Legalitas & Bukti Keberadaan Usaha',
        items: [
          'Nomor Induk Berusaha (NIB) atau Surat Keterangan Usaha (SKU) dari Kelurahan',
          'Foto Tempat Usaha Fisik Tampak Luar (terlihat spanduk / plang nama usaha)',
          'Foto Tempat Usaha Tampak Dalam (terlihat etalase produk / meja kasir)',
          'NPWP Pribadi / Badan Usaha (opsional untuk UMKM mikro)'
        ]
      }
    ],
    processSteps: [
      'Pengisian form online pendaftaran merchant via RM Merchant KC Jelambar.',
      'Verifikasi foto lokasi usaha dan dokumen KYC oleh tim BRI.',
      'Proses persetujuan Merchant ID (MID) & Terminal ID (TID).',
      'Pengiriman & instalasi mesin EDC Android / Soundbox QRIS langsung ke lokasi toko.',
      'Pelatihan singkat penggunaan mesin EDC dan settlement dana harian.'
    ],
    notes: 'Mesin EDC Android BRI telah mendukung jaringan 4G + Wi-Fi dan pencetakan struk transaksi instan.',
    rmContact: {
      name: 'Syafira Febrianty',
      role: 'RM Dana & Solusi Transaksi',
      phone: '6287777450533',
      whatsappText: 'Halo Ibu Syafira, saya ingin mengajukan pemasangan Mesin EDC Android & QRIS Soundbox untuk toko/usaha saya di wilayah Jelambar.'
    }
  },
  {
    id: 'faq-crr-01',
    category: 'crr',
    categoryLabel: 'Restrukturisasi & Penyelamatan Kredit (CRR)',
    question: 'Bagaimana prosedur mengajukan permohonan Restrukturisasi Kredit Komersial atau penataan kewajiban angsuran?',
    summary: 'Solusi penyehatan kewajiban pembiayaan bagi debitur yang mengalami kendala penurunan arus kas usaha.',
    documents: [
      {
        title: '1. Dokumen Permohonan Resmi',
        items: [
          'Surat Permohonan Restrukturisasi Kredit tertulis yang ditandatangani debitur',
          'Penjelasan kronologi kendala usaha / arus kas yang dihadapi saat ini',
          'Proyeksi arus kas (Cash Flow Projection) dan rencana perbaikan bisnis ke depan'
        ]
      },
      {
        title: '2. Dokumen Finansial Terbaru',
        items: [
          'Rekening Koran operasional 3-6 bulan terakhir',
          'Laporan Keuangan internal terbaru (penjualan, piutang, dan stok)',
          'Data konfirmasi status agunan yang saat ini dijaminkan di BRI'
        ]
      }
    ],
    processSteps: [
      'Konsultasi tatap muka atau daring bersama Tim RM CRR / Collection KC Jelambar.',
      'Analisis mendalam mengenai kapasitas pembayaran (Repayment Capacity) debitur.',
      'Perumusan skema restrukturisasi yang tepat:',
      '  • Rescheduling (Perpanjangan jangka waktu pinjaman)',
      '  • Reconditioning (Penyesuaian suku bunga / keringanan bunga)',
      '  • Restructuring (Konversi atau penataan ulang struktur fasilitas)',
      '  • Grace Period (Masa tenggang pembayaran pokok)',
      'Persetujuan Komite Restrukturisasi Kredit dan penandatanganan Addendum Akad Kredit.'
    ],
    notes: 'Konsultasi restrukturisasi bersifat rahasia dan bertujuan menjaga kelangsungan usaha nasabah serta status kolektibilitas di OJK.',
    rmContact: {
      name: 'Yasin Nugraha',
      role: 'RM CRR (Commercial Restructuring & Recovery)',
      phone: '6282177773888',
      whatsappText: 'Halo Pak Yasin Nugraha, saya ingin berkonsultasi mengenai prosedur pengajuan restrukturisasi kredit usaha di BRI KC Jakarta Jelambar.'
    }
  }
];
