export interface BranchUnit {
  id: string;
  name: string;
  shortName: string;
  address: string;
  mapsUrl: string;
  areaTag: string;
  specializations: {
    label: string;
    dotColor?: string;
  }[];
}

export const branchUnits: BranchUnit[] = [
  {
    id: 'unit-angke',
    name: 'BRI Unit Angke',
    shortName: 'Unit Angke',
    address: 'Jl. Jemb. Besi II No.44 5, RT.5/RW.3, Jemb. Besi, Kec. Tambora, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11320',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Angke+Jl+Jemb+Besi+II+No+44+Tambora+Jakarta+Barat',
    areaTag: 'Sentra Kuliner & Retail',
    specializations: [
      { label: 'Mesin EDC Android & Soundbox', dotColor: 'bg-emerald-500' },
      { label: 'Kupedes Cepat & Modal Kerja', dotColor: 'bg-[#00529C]' },
      { label: 'Layanan Kasir & CRM Teller', dotColor: 'bg-[#00529C]' },
    ]
  },
  {
    id: 'unit-dutamas',
    name: 'BRI Unit Dutamas',
    shortName: 'Unit Dutamas',
    address: 'Blok A3 Jalan Kusuma No.37 2 12, RT.2/RW.12, Jelambar Baru, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Dutamas+Blok+A3+Jalan+Kusuma+No+37+Jakarta+Barat',
    areaTag: 'Kawasan Komersial Ruko',
    specializations: [
      { label: 'Pinjaman Usaha Ritel & Ruko', dotColor: 'bg-[#00529C]' },
      { label: 'Simpanan Giro & Deposito', dotColor: 'bg-[#00529C]' },
      { label: 'Konsultasi Mantri Finansial', dotColor: 'bg-blue-700' },
    ]
  },
  {
    id: 'unit-grogol',
    name: 'BRI Unit Grogol',
    shortName: 'Unit Grogol',
    address: 'Jl. Muwardi II No.43 14, RT.14/RW.3, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Grogol+Jl+Muwardi+II+No+43+Jakarta+Barat',
    areaTag: 'Kawasan Pendidikan & Niaga',
    specializations: [
      { label: 'KUR Mikro & Kupedes', dotColor: 'bg-[#00529C]' },
      { label: 'Simpedes & BritAma Bisnis', dotColor: 'bg-[#00529C]' },
      { label: 'ATM / CRM Setor Tarik 24 Jam', dotColor: 'bg-emerald-500' },
    ]
  },
  {
    id: 'unit-kapuk-raya',
    name: 'BRI Unit Kapuk Raya',
    shortName: 'Unit Kapuk Raya',
    address: 'Jl. Kapuk Raya No. 4A, RT.03 / RW.02 Kapuk 7, RT.7/RW.2, Kapuk, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11720',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Kapuk+Raya+No+4A+Cengkareng+Jakarta+Barat',
    areaTag: 'Kawasan Pergudangan',
    specializations: [
      { label: 'Pembiayaan Industri Kecil', dotColor: 'bg-[#00529C]' },
      { label: 'Tabungan Payroll Pegawai', dotColor: 'bg-[#00529C]' },
      { label: 'KUR Super Mikro Ringan', dotColor: 'bg-blue-600' },
    ]
  },
  {
    id: 'unit-keamanan',
    name: 'BRI Unit Keamanan',
    shortName: 'Unit Keamanan',
    address: 'Jl. Keamanan No.46 2, RT.3/RW.1, Keagungan, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11130',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Keamanan+Jl+Keamanan+No+46+Taman+Sari+Jakarta+Barat',
    areaTag: 'Klaster Usaha Mikro',
    specializations: [
      { label: 'KUR Mikro Klaster Pedagang', dotColor: 'bg-[#00529C]' },
      { label: 'Asuransi Mikro AM-KKM', dotColor: 'bg-emerald-500' },
      { label: 'Aktivasi Digital BRImo Bisnis', dotColor: 'bg-[#00529C]' },
    ]
  },
  {
    id: 'unit-pejagalan',
    name: 'BRI Unit Pejagalan',
    shortName: 'Unit Pejagalan',
    address: 'Jl. Pejagalan Raya No.13 1, RT.1/RW.5, Pekojan, Kec. Tambora, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11240',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Pejagalan+Jl+Pejagalan+Raya+No+13+Jakarta+Barat',
    areaTag: 'Sentra Pasar & Niaga',
    specializations: [
      { label: 'KUR Mikro Sektor Perdagangan', dotColor: 'bg-[#00529C]' },
      { label: 'QRIS Dinamis & Mesin EDC', dotColor: 'bg-emerald-500' },
      { label: 'Pendaftaran AgenBRILink', dotColor: 'bg-[#00529C]' },
    ]
  },
  {
    id: 'unit-pinangsia-timur',
    name: 'BRI Unit Pinangsia Timur',
    shortName: 'Unit Pinangsia Timur',
    address: 'Jl. Buni No.45A, RT.8/RW.3, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 10720',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Pinangsia+Timur+Jl+Buni+No+45A+Taman+Sari+Jakarta+Barat',
    areaTag: 'Sentra Perdagangan Grosir',
    specializations: [
      { label: 'Solusi Transaksi Grosir & B2B', dotColor: 'bg-emerald-500' },
      { label: 'EDC Merchant & QRIS Bisnis', dotColor: 'bg-[#00529C]' },
      { label: 'Giro Dagang & Perusahaan', dotColor: 'bg-[#00529C]' },
    ]
  },
  {
    id: 'unit-wijaya-kusuma',
    name: 'BRI Unit Wijaya Kusuma',
    shortName: 'Unit Wijaya Kusuma',
    address: 'Jl. Jelambar Baru Raya No.29 A, RT.4/RW.7, Jelambar, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BRI+Unit+Wijaya+Kusuma+Jl+Jelambar+Baru+Raya+No+29+A+Jakarta+Barat',
    areaTag: 'Sentra Pemukiman & UMKM',
    specializations: [
      { label: 'Perbankan Komunitas UMKM', dotColor: 'bg-[#00529C]' },
      { label: 'Pinjaman Musiman & Kupedes', dotColor: 'bg-[#00529C]' },
      { label: 'Layanan Kasir & Pembayaran', dotColor: 'bg-emerald-500' },
    ]
  }
];
