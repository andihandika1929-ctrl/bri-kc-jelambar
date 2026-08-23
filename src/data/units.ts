import { Language } from './translations';

export interface LocalizedText {
  id: string;
  en: string;
  zh: string;
}

export interface UnitSpecialization {
  label: string;
  labelI18n?: LocalizedText;
  dotColor?: string;
}

export interface BranchUnit {
  id: string;
  name: string;
  shortName: string;
  address: string;
  mapsUrl: string;
  areaTag: string;
  areaTagI18n?: LocalizedText;
  specializations: UnitSpecialization[];
}

export const branchUnits: BranchUnit[] = [
  {
    id: 'unit-angke',
    name: 'BRI Unit Angke',
    shortName: 'Unit Angke',
    address: 'Jl. Jemb. Besi II No.44 5, RT.5/RW.3, Jemb. Besi, Kec. Tambora, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11320',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Angke+Jl+Jemb+Besi+II+No+44+Tambora+Jakarta+Barat',
    areaTag: 'Sentra Kuliner & Retail',
    areaTagI18n: {
      id: 'Sentra Kuliner & Retail',
      en: 'Culinary & Retail Center',
      zh: '餐饮与零售商业聚集区'
    },
    specializations: [
      {
        label: 'Mesin EDC Android & Soundbox',
        labelI18n: {
          id: 'Mesin EDC Android & Soundbox',
          en: 'Android EDC & Soundbox Terminal',
          zh: '智能POS机与语音播报音箱'
        },
        dotColor: 'bg-emerald-500'
      },
      {
        label: 'Kupedes Cepat & Modal Kerja',
        labelI18n: {
          id: 'Kupedes Cepat & Modal Kerja',
          en: 'Fast Kupedes & Working Capital',
          zh: 'Kupedes极速贷款与营运资金'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Layanan Kasir & CRM Teller',
        labelI18n: {
          id: 'Layanan Kasir & CRM Teller',
          en: 'Cashier & CRM Teller Services',
          zh: '柜面综合结算与CRM存取款'
        },
        dotColor: 'bg-[#0052CC]'
      },
    ]
  },
  {
    id: 'unit-dutamas',
    name: 'BRI Unit Dutamas',
    shortName: 'Unit Dutamas',
    address: 'Blok A3 Jalan Kusuma No.37 2 12, RT.2/RW.12, Jelambar Baru, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Dutamas+Blok+A3+Jalan+Kusuma+No+37+Jakarta+Barat',
    areaTag: 'Kawasan Komersial Ruko',
    areaTagI18n: {
      id: 'Kawasan Komersial Ruko',
      en: 'Commercial Shophouse Area',
      zh: '商用排屋与商业综合区'
    },
    specializations: [
      {
        label: 'Pinjaman Usaha Ritel & Ruko',
        labelI18n: {
          id: 'Pinjaman Usaha Ritel & Ruko',
          en: 'Retail & Shophouse Business Loan',
          zh: '商铺购置与零售商业贷款'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Simpanan Giro & Deposito',
        labelI18n: {
          id: 'Simpanan Giro & Deposito',
          en: 'Checking & Time Deposits',
          zh: '企业活期与定期存单'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Konsultasi Mantri Finansial',
        labelI18n: {
          id: 'Konsultasi Mantri Finansial',
          en: 'Micro Financial Officer Advisory',
          zh: '普惠金融客户经理专属咨询'
        },
        dotColor: 'bg-[#2563EB]'
      },
    ]
  },
  {
    id: 'unit-grogol',
    name: 'BRI Unit Grogol',
    shortName: 'Unit Grogol',
    address: 'Jl. Muwardi II No.43 14, RT.14/RW.3, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Grogol+Jl+Muwardi+II+No+43+Jakarta+Barat',
    areaTag: 'Kawasan Pendidikan & Niaga',
    areaTagI18n: {
      id: 'Kawasan Pendidikan & Niaga',
      en: 'Education & Commercial District',
      zh: '文教院校与商贸集聚区'
    },
    specializations: [
      {
        label: 'KUR Mikro & Kupedes',
        labelI18n: {
          id: 'KUR Mikro & Kupedes',
          en: 'KUR Micro & Kupedes Loans',
          zh: 'KUR微型普惠与Kupedes贷款'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Simpedes & BritAma Bisnis',
        labelI18n: {
          id: 'Simpedes & BritAma Bisnis',
          en: 'Simpedes & BritAma Business',
          zh: 'Simpedes与BritAma商务储蓄'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'ATM / CRM Setor Tarik 24 Jam',
        labelI18n: {
          id: 'ATM / CRM Setor Tarik 24 Jam',
          en: '24/7 ATM & CRM Cash Recycler',
          zh: '24小时自动存取款机 (CRM)'
        },
        dotColor: 'bg-emerald-500'
      },
    ]
  },
  {
    id: 'unit-kapuk-raya',
    name: 'BRI Unit Kapuk Raya',
    shortName: 'Unit Kapuk Raya',
    address: 'Jl. Kapuk Raya No. 4A, RT.03 / RW.02 Kapuk 7, RT.7/RW.2, Kapuk, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11720',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Kapuk+Raya+No+4A+Cengkareng+Jakarta+Barat',
    areaTag: 'Kawasan Pergudangan',
    areaTagI18n: {
      id: 'Kawasan Pergudangan',
      en: 'Industrial & Warehousing Zone',
      zh: '仓储物流与工业制造区'
    },
    specializations: [
      {
        label: 'Pembiayaan Industri Kecil',
        labelI18n: {
          id: 'Pembiayaan Industri Kecil',
          en: 'Small Industry Financing',
          zh: '小型工业与加工制造融资'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Tabungan Payroll Pegawai',
        labelI18n: {
          id: 'Tabungan Payroll Pegawai',
          en: 'Employee Payroll Savings',
          zh: '企业员工薪资代发账户'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'KUR Super Mikro Ringan',
        labelI18n: {
          id: 'KUR Super Mikro Ringan',
          en: 'Ultra-Micro Low-Interest KUR',
          zh: '超微型低息普惠贷款'
        },
        dotColor: 'bg-[#2563EB]'
      },
    ]
  },
  {
    id: 'unit-keamanan',
    name: 'BRI Unit Keamanan',
    shortName: 'Unit Keamanan',
    address: 'Jl. Keamanan No.46 2, RT.3/RW.1, Keagungan, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11130',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Keamanan+Jl+Keamanan+No+46+Taman+Sari+Jakarta+Barat',
    areaTag: 'Klaster Usaha Mikro',
    areaTagI18n: {
      id: 'Klaster Usaha Mikro',
      en: 'Micro Enterprise Cluster',
      zh: '微型小微商户产业集群'
    },
    specializations: [
      {
        label: 'KUR Mikro Klaster Pedagang',
        labelI18n: {
          id: 'KUR Mikro Klaster Pedagang',
          en: 'Trader Cluster Micro KUR',
          zh: '商户集群微型KUR贷款'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Asuransi Mikro AM-KKM',
        labelI18n: {
          id: 'Asuransi Mikro AM-KKM',
          en: 'Micro Insurance AM-KKM',
          zh: '普惠微型人身与财产保险'
        },
        dotColor: 'bg-emerald-500'
      },
      {
        label: 'Aktivasi Digital BRImo Bisnis',
        labelI18n: {
          id: 'Aktivasi Digital BRImo Bisnis',
          en: 'BRImo Business Digital Setup',
          zh: 'BRImo企业移动端开通'
        },
        dotColor: 'bg-[#0052CC]'
      },
    ]
  },
  {
    id: 'unit-pejagalan',
    name: 'BRI Unit Pejagalan',
    shortName: 'Unit Pejagalan',
    address: 'Jl. Pejagalan Raya No.13 1, RT.1/RW.5, Pekojan, Kec. Tambora, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11240',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Pejagalan+Jl+Pejagalan+Raya+No+13+Jakarta+Barat',
    areaTag: 'Sentra Pasar & Niaga',
    areaTagI18n: {
      id: 'Sentra Pasar & Niaga',
      en: 'Traditional Market & Trade Center',
      zh: '传统批发集贸市场商圈'
    },
    specializations: [
      {
        label: 'KUR Mikro Sektor Perdagangan',
        labelI18n: {
          id: 'KUR Mikro Sektor Perdagangan',
          en: 'Trade Sector Micro KUR',
          zh: '商贸流通业微型贷款'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'QRIS Dinamis & Mesin EDC',
        labelI18n: {
          id: 'QRIS Dinamis & Mesin EDC',
          en: 'Dynamic QRIS & POS Machine',
          zh: '动态收款QRIS与智能POS'
        },
        dotColor: 'bg-emerald-500'
      },
      {
        label: 'Pendaftaran AgenBRILink',
        labelI18n: {
          id: 'Pendaftaran AgenBRILink',
          en: 'AgenBRILink Agent Registration',
          zh: 'AgenBRILink助农代理网点申请'
        },
        dotColor: 'bg-[#0052CC]'
      },
    ]
  },
  {
    id: 'unit-pinangsia-timur',
    name: 'BRI Unit Pinangsia Timur',
    shortName: 'Unit Pinangsia Timur',
    address: 'Jl. Buni No.45A, RT.8/RW.3, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 10720',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Pinangsia+Timur+Jl+Buni+No+45A+Taman+Sari+Jakarta+Barat',
    areaTag: 'Sentra Perdagangan Grosir',
    areaTagI18n: {
      id: 'Sentra Perdagangan Grosir',
      en: 'Wholesale Commercial Hub',
      zh: '大型批发商贸集散中心'
    },
    specializations: [
      {
        label: 'Kredit Modal Kerja Pedagang',
        labelI18n: {
          id: 'Kredit Modal Kerja Pedagang',
          en: 'Merchant Working Capital Loan',
          zh: '商户日常周转资金贷款'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Layanan Giro Badan & Toko',
        labelI18n: {
          id: 'Layanan Giro Badan & Toko',
          en: 'Corporate & Store Checking Account',
          zh: '企业与商户活期支票账户'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Transfer Valas & Kliring Cepat',
        labelI18n: {
          id: 'Transfer Valas & Kliring Cepat',
          en: 'FX Wire Transfer & Fast Clearing',
          zh: '外汇跨境汇款与快速票据清算'
        },
        dotColor: 'bg-[#2563EB]'
      },
    ]
  },
  {
    id: 'unit-wijaya-kusuma',
    name: 'BRI Unit Wijaya Kusuma',
    shortName: 'Unit Wijaya Kusuma',
    address: 'Jl. Wijaya Kusuma I No.22, RT.2/RW.4, Wijaya Kusuma, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Wijaya+Kusuma+Jl+Wijaya+Kusuma+I+No+22+Grogol+Jakarta+Barat',
    areaTag: 'Kawasan Pemukiman & Jasa',
    areaTagI18n: {
      id: 'Kawasan Pemukiman & Jasa',
      en: 'Residential & Service Area',
      zh: '大型居民社区与现代生活服务圈'
    },
    specializations: [
      {
        label: 'Tabungan BritAma & Simpedes',
        labelI18n: {
          id: 'Tabungan BritAma & Simpedes',
          en: 'BritAma & Simpedes Savings',
          zh: 'BritAma与Simpedes综合储蓄'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Pinjaman Konsumer BRIguna',
        labelI18n: {
          id: 'Pinjaman Konsumer BRIguna',
          en: 'BRIguna Consumer Personal Loan',
          zh: 'BRIguna个人消费信用贷款'
        },
        dotColor: 'bg-[#0052CC]'
      },
      {
        label: 'Layanan Pembayaran e-Billing',
        labelI18n: {
          id: 'Layanan Pembayaran e-Billing',
          en: 'e-Billing & Utility Payments',
          zh: '各类电子账单代扣缴费服务'
        },
        dotColor: 'bg-emerald-500'
      },
    ]
  },
];

export function getUnitAreaTag(unit: BranchUnit, lang: Language): string {
  if (unit.areaTagI18n && unit.areaTagI18n[lang]) {
    return unit.areaTagI18n[lang];
  }
  return unit.areaTag;
}

export function getUnitSpecializationLabel(spec: UnitSpecialization, lang: Language): string {
  if (spec.labelI18n && spec.labelI18n[lang]) {
    return spec.labelI18n[lang];
  }
  return spec.label;
}
