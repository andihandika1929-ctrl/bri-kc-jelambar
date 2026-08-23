'use client';

import React, { useState, useMemo } from 'react';
import {
  Home,
  Car,
  Briefcase,
  Calculator,
  Percent,
  Calendar,
  DollarSign,
  TrendingUp,
  Building2,
  Search,
  Navigation,
  LineChart,
  FileText,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Info,
  RotateCcw,
  CheckCircle2,
  Check
} from 'lucide-react';

type CalculatorTab = 'kpr' | 'kendaraan' | 'briguna';

export default function LoanCalculator() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('kpr');

  // 1. KPR States
  const [kprPlafond, setKprPlafond] = useState<number>(500000000); // 500 Juta
  const [kprTenor, setKprTenor] = useState<number>(15); // 15 Tahun
  const [kprRate, setKprRate] = useState<number>(6.75); // 6.75%

  // 2. Kendaraan (KKB) States
  const [vehicleType, setVehicleType] = useState<'baru' | 'bekas'>('baru');
  const [vehicleOtr, setVehicleOtr] = useState<number>(300000000); // 300 Juta
  const [vehicleDpPercent, setVehicleDpPercent] = useState<number>(20); // 20%
  const [vehicleTenor, setVehicleTenor] = useState<number>(4); // 4 Tahun
  const [vehicleRate, setVehicleRate] = useState<number>(5.25); // 5.25% flat p.a.

  // 3. BRIguna States
  const [brigunaPlafond, setBrigunaPlafond] = useState<number>(100000000); // 100 Juta
  const [brigunaTenor, setBrigunaTenor] = useState<number>(5); // 5 Tahun
  const [brigunaRate, setBrigunaRate] = useState<number>(8.5); // 8.5%

  // Currency Formatter Helper
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Calculation Engine
  const calculationResult = useMemo(() => {
    if (activeTab === 'kpr') {
      const p = kprPlafond;
      const n = kprTenor * 12; // months
      const r = kprRate / 100 / 12; // monthly rate

      if (r === 0 || n === 0) return { monthly: 0, totalInterest: 0, totalPayment: p, principal: p, tenorMonths: n };

      // Annuity installment formula: P * (r * (1+r)^n) / ((1+r)^n - 1)
      const monthly = Math.round((p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1));
      const totalPayment = monthly * n;
      const totalInterest = totalPayment - p;

      return {
        principal: p,
        tenorMonths: n,
        monthly,
        totalInterest,
        totalPayment,
        rate: kprRate,
      };
    } else if (activeTab === 'kendaraan') {
      const otr = vehicleOtr;
      const dpAmount = Math.round(otr * (vehicleDpPercent / 100));
      const principal = otr - dpAmount; // Pokok Hutang
      const n = vehicleTenor * 12; // months
      const rateFlat = vehicleRate / 100; // annual flat rate

      // Flat rate formula: (Principal / n) + (Principal * rate * years / n)
      const totalInterest = Math.round(principal * rateFlat * vehicleTenor);
      const totalPayment = principal + totalInterest;
      const monthly = Math.round(totalPayment / n);

      return {
        principal,
        dpAmount,
        otr,
        tenorMonths: n,
        monthly,
        totalInterest,
        totalPayment,
        rate: vehicleRate,
      };
    } else {
      // BRIguna
      const p = brigunaPlafond;
      const n = brigunaTenor * 12;
      const r = brigunaRate / 100 / 12;

      if (r === 0 || n === 0) return { monthly: 0, totalInterest: 0, totalPayment: p, principal: p, tenorMonths: n };

      const monthly = Math.round((p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1));
      const totalPayment = monthly * n;
      const totalInterest = totalPayment - p;

      return {
        principal: p,
        tenorMonths: n,
        monthly,
        totalInterest,
        totalPayment,
        rate: brigunaRate,
      };
    }
  }, [
    activeTab,
    kprPlafond,
    kprTenor,
    kprRate,
    vehicleOtr,
    vehicleDpPercent,
    vehicleTenor,
    vehicleRate,
    brigunaPlafond,
    brigunaTenor,
    brigunaRate,
  ]);

  // Generate WhatsApp consultation link from calculation result
  const generateWhatsAppConsultLink = () => {
    let programName = 'KPR BRI';
    let details = '';

    if (activeTab === 'kpr') {
      programName = 'KPR BRI (Kredit Pemilikan Rumah)';
      details = `Plafond: ${formatRupiah(kprPlafond)}\nTenor: ${kprTenor} Tahun (${kprTenor * 12} Bulan)\nEstimasi Suku Bunga: ${kprRate}% eff. p.a\nEstimasi Angsuran: ${formatRupiah(calculationResult.monthly)} / bulan`;
    } else if (activeTab === 'kendaraan') {
      programName = `KKB BRI (${vehicleType === 'baru' ? 'Mobil Baru' : 'Mobil Bekas'})`;
      details = `Harga OTR: ${formatRupiah(vehicleOtr)}\nUang Muka DP: ${vehicleDpPercent}% (${formatRupiah(calculationResult.dpAmount || 0)})\nPokok Pembiayaan: ${formatRupiah(calculationResult.principal)}\nTenor: ${vehicleTenor} Tahun\nEstimasi Angsuran: ${formatRupiah(calculationResult.monthly)} / bulan`;
    } else {
      programName = 'Kredit Konsumtif BRIguna';
      details = `Plafond: ${formatRupiah(brigunaPlafond)}\nTenor: ${brigunaTenor} Tahun (${brigunaTenor * 12} Bulan)\nEstimasi Suku Bunga: ${brigunaRate}% eff. p.a\nEstimasi Angsuran: ${formatRupiah(calculationResult.monthly)} / bulan`;
    }

    const message = `Halo Tim Relationship Manager Kredit BRI KC Jakarta Jelambar,\n\nSaya telah melakukan simulasi di website untuk produk *${programName}* dengan rincian sebagai berikut:\n\n${details}\n\nMohon informasi terkait syarat dokumen, program suku bunga promo yang berlaku, serta proses pengajuan resmi di KC Jelambar.\n\nTerima kasih.`;

    // Direct to Fahmi Sidik / Utama Farid RM
    return `https://wa.me/628776271545?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="simulasi" className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Calculator className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Kalkulator Finansial Resmi BRI</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Simulasi Angsuran Kredit & Pinjaman
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hitung estimasi cicilan bulanan untuk <strong>KPR BRI, Kredit Kendaraan Bermotor (KKB),</strong> dan <strong>Kredit Tanpa Agunan BRIguna</strong> secara transparan dan akurat.
          </p>
        </div>

        {/* Calculator Main Container (Clean White Card) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* 3 Tab Navigation Header (Modern Brand Blue & Clean White) */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('kpr')}
              className={`py-4 px-2 sm:px-6 flex items-center justify-center gap-2 font-bold transition-all relative ${
                activeTab === 'kpr'
                  ? 'bg-white text-[#0052CC] border-b-2 border-[#0052CC] shadow-xs'
                  : 'text-slate-600 hover:text-[#0052CC] hover:bg-slate-100/80'
              }`}
            >
              <Home className="w-4 h-4 text-[#0052CC] flex-shrink-0 hidden xs:inline" />
              <span className="truncate">CICILAN KPR</span>
            </button>

            <button
              onClick={() => setActiveTab('kendaraan')}
              className={`py-4 px-2 sm:px-6 flex items-center justify-center gap-2 font-bold transition-all relative ${
                activeTab === 'kendaraan'
                  ? 'bg-white text-[#0052CC] border-b-2 border-[#0052CC] shadow-xs'
                  : 'text-slate-600 hover:text-[#0052CC] hover:bg-slate-100/80'
              }`}
            >
              <Car className="w-4 h-4 text-[#0052CC] flex-shrink-0 hidden xs:inline" />
              <span className="truncate">CICILAN KENDARAAN</span>
            </button>

            <button
              onClick={() => setActiveTab('briguna')}
              className={`py-4 px-2 sm:px-6 flex items-center justify-center gap-2 font-bold transition-all relative ${
                activeTab === 'briguna'
                  ? 'bg-white text-[#0052CC] border-b-2 border-[#0052CC] shadow-xs'
                  : 'text-slate-600 hover:text-[#0052CC] hover:bg-slate-100/80'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#0052CC] flex-shrink-0 hidden xs:inline" />
              <span className="truncate">CICILAN BRIGUNA</span>
            </button>
          </div>

          {/* 2-Column Responsive Content Grid */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Clean Visual Product Illustration (White/Transparent Background) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                {/* Visual Representation Card (Clean Light Aesthetic) */}
                <div className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-6 sm:p-7 space-y-5">
                  {/* Dynamic Product Visuals */}
                  {activeTab === 'kpr' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100/80 text-[#0052CC] flex items-center justify-center border border-blue-200 shadow-xs">
                          <Building2 className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-[#F37021] border border-orange-200 text-xs font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F37021]" />
                          Bunga Mulai 4.75%
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">KPR BRI Prioritas & Reguler</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Pembiayaan hunian idaman, ruko komersial, apartemen baru/bekas, atau renovasi dengan tenor s.d 20 tahun.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-3 border-t border-slate-200/80 text-xs text-slate-700">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>Kerjasama dengan ratusan developer rekanan nasional</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F37021] flex items-center justify-center flex-shrink-0">
                            <Percent className="w-3 h-3" />
                          </div>
                          <span>Fasilitas Uang Muka (DP) mulai dari 0%</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center flex-shrink-0">
                            <Search className="w-3 h-3" />
                          </div>
                          <span>Fasilitas Take Over & Top Up KPR suku bunga kompetitif</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'kendaraan' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center border border-emerald-200 shadow-xs">
                          <Car className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-[#F37021] border border-orange-200 text-xs font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F37021]" />
                          Bunga Flat Mulai 5.25%
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">KKB BRI (Kredit Kendaraan)</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Kemudahan memiliki mobil baru, mobil bekas berkualitas, dan motor premium dengan proses kilat.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-3 border-t border-slate-200/80 text-xs text-slate-700">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>Bunga flat bersaing dengan tenor fleksibel s.d 6 tahun</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F37021] flex items-center justify-center flex-shrink-0">
                            <Navigation className="w-3 h-3" />
                          </div>
                          <span>Bebas biaya provisi untuk tipe kendaraan pilihan</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="w-3 h-3" />
                          </div>
                          <span>Termasuk perlindungan Asuransi All-Risk & TLO</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'briguna' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center border border-indigo-200 shadow-xs">
                          <Briefcase className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-[#F37021] border border-orange-200 text-xs font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F37021]" />
                          Tanpa Agunan Fisik
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Kredit BRIguna Karya & Umum</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Pinjaman payroll khusus pegawai aktif, ASN/TNI/Polri, BUMN, dan karyawan swasta rekanan BRI.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-3 border-t border-slate-200/80 text-xs text-slate-700">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>Plafond pinjaman tinggi hingga Rp 500 Juta</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F37021] flex items-center justify-center flex-shrink-0">
                            <LineChart className="w-3 h-3" />
                          </div>
                          <span>Tenor panjang hingga 15 tahun (atau masa pensiun)</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Proses pencairan instan langsung ke rekening BRI</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* S&K Muted Disclaimer Box */}
                <div className="pt-2 text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-500">Syarat & Ketentuan:</strong> Perincian kredit di atas hanya merupakan simulasi/estimasi biaya dan belum termasuk biaya administrasi, provisi, asuransi, serta dapat berubah sewaktu-waktu sesuai ketentuan Bank BRI.
                  </p>
                </div>
              </div>

              {/* Right Column: Form Inputs & Clean Soft Blue Estimation Box */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-slate-50/70 p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-5">
                  {/* TAB 1: KPR FORM */}
                  {activeTab === 'kpr' && (
                    <div className="space-y-5">
                      {/* Plafond */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Jumlah Pinjaman / Plafond:
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {formatRupiah(kprPlafond)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={50000000}
                          max={5000000000}
                          step={25000000}
                          value={kprPlafond}
                          onChange={(e) => setKprPlafond(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>Rp 50 Juta</span>
                          <span>Rp 2,5 Miliar</span>
                          <span>Rp 5 Miliar</span>
                        </div>
                      </div>

                      {/* Tenor */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Jangka Waktu (Tenor):
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {kprTenor} Tahun ({kprTenor * 12} Bulan)
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={25}
                          step={1}
                          value={kprTenor}
                          onChange={(e) => setKprTenor(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>1 Tahun</span>
                          <span>12 Tahun</span>
                          <span>25 Tahun</span>
                        </div>
                      </div>

                      {/* Interest Rate */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Suku Bunga Efektif (% p.a):
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              step="0.05"
                              min="1"
                              max="20"
                              value={kprRate}
                              onChange={(e) => setKprRate(Number(e.target.value))}
                              className="w-full px-3.5 py-2 text-sm font-bold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:outline-none"
                            />
                            <span className="absolute right-3.5 top-2 text-xs font-bold text-slate-400">%</span>
                          </div>
                        </div>
                        <div className="flex items-end pb-1">
                          <span className="text-[11px] text-slate-500 italic">
                            *Suku bunga promo berlaku fix 1-3 tahun pertama
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: KENDARAAN (KKB) FORM */}
                  {activeTab === 'kendaraan' && (
                    <div className="space-y-5">
                      {/* Vehicle Status Dropdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Kondisi Kendaraan:
                          </label>
                          <select
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value as 'baru' | 'bekas')}
                            className="w-full px-3.5 py-2 text-sm font-semibold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:outline-none"
                          >
                            <option value="baru">Mobil Baru (New Car)</option>
                            <option value="bekas">Mobil Bekas (Used Car)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Suku Bunga (% Flat p.a):
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              step="0.1"
                              min="2"
                              max="15"
                              value={vehicleRate}
                              onChange={(e) => setVehicleRate(Number(e.target.value))}
                              className="w-full px-3.5 py-2 text-sm font-bold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:outline-none"
                            />
                            <span className="absolute right-3.5 top-2 text-xs font-bold text-slate-400">%</span>
                          </div>
                        </div>
                      </div>

                      {/* Harga OTR */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Harga Kendaraan (OTR):
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {formatRupiah(vehicleOtr)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={50000000}
                          max={1500000000}
                          step={10000000}
                          value={vehicleOtr}
                          onChange={(e) => setVehicleOtr(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>Rp 50 Juta</span>
                          <span>Rp 750 Juta</span>
                          <span>Rp 1,5 Miliar</span>
                        </div>
                      </div>

                      {/* DP Slider */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Uang Muka DP ({vehicleDpPercent}%):
                          </label>
                          <span className="text-sm font-bold text-[#F37021]">
                            {formatRupiah(Math.round(vehicleOtr * (vehicleDpPercent / 100)))}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={70}
                          step={5}
                          value={vehicleDpPercent}
                          onChange={(e) => setVehicleDpPercent(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F37021]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>10% (Min)</span>
                          <span>30% (Standard)</span>
                          <span>70%</span>
                        </div>
                      </div>

                      {/* Tenor */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Jangka Waktu (Tenor):
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {vehicleTenor} Tahun ({vehicleTenor * 12} Bulan)
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={6}
                          step={1}
                          value={vehicleTenor}
                          onChange={(e) => setVehicleTenor(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>1 Tahun</span>
                          <span>3 Tahun</span>
                          <span>6 Tahun (Max)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: BRIGUNA FORM */}
                  {activeTab === 'briguna' && (
                    <div className="space-y-5">
                      {/* Plafond */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Plafond Pinjaman BRIguna:
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {formatRupiah(brigunaPlafond)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={10000000}
                          max={500000000}
                          step={5000000}
                          value={brigunaPlafond}
                          onChange={(e) => setBrigunaPlafond(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>Rp 10 Juta</span>
                          <span>Rp 250 Juta</span>
                          <span>Rp 500 Juta</span>
                        </div>
                      </div>

                      {/* Tenor */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Jangka Waktu (Tenor):
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {brigunaTenor} Tahun ({brigunaTenor * 12} Bulan)
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={15}
                          step={1}
                          value={brigunaTenor}
                          onChange={(e) => setBrigunaTenor(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>1 Tahun</span>
                          <span>5 Tahun</span>
                          <span>15 Tahun (Max)</span>
                        </div>
                      </div>

                      {/* Suku Bunga */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Suku Bunga Efektif (% p.a):
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              step="0.25"
                              min="5"
                              max="20"
                              value={brigunaRate}
                              onChange={(e) => setBrigunaRate(Number(e.target.value))}
                              className="w-full px-3.5 py-2 text-sm font-bold bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:outline-none"
                            />
                            <span className="absolute right-3.5 top-2 text-xs font-bold text-slate-400">%</span>
                          </div>
                        </div>
                        <div className="flex items-end pb-1">
                          <span className="text-[11px] text-slate-500 italic">
                            *Dipotong langsung otomatis dari Payroll rekening BRI
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculation Output Box (Clean Soft Blue Card with Modern Brand Blue & Emerald CTA) */}
                <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0052CC] flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-[#0052CC]" />
                      Estimasi Angsuran Bulanan:
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#0052CC]">
                      Simulasi Resmi
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#0052CC]">
                    {formatRupiah(calculationResult.monthly)}{' '}
                    <span className="text-sm sm:text-base font-semibold text-slate-500">/ bulan</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-blue-200/70 text-xs">
                    <div>
                      <div className="text-slate-500 text-[10px] font-medium">Pokok Pembiayaan</div>
                      <div className="font-bold text-slate-800">{formatRupiah(calculationResult.principal)}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-medium">Estimasi Bunga Total</div>
                      <div className="font-bold text-slate-800">{formatRupiah(calculationResult.totalInterest)}</div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-slate-500 text-[10px] font-medium">Total Pembayaran</div>
                      <div className="font-bold text-slate-800">{formatRupiah(calculationResult.totalPayment)}</div>
                    </div>
                  </div>

                  {/* CTA Button: Elegant Emerald WhatsApp Button */}
                  <div className="pt-2">
                    <a
                      href={generateWhatsAppConsultLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md hover:shadow-emerald-600/20 transition-all active:scale-95 text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Konsultasikan Hasil Simulasi via WhatsApp RM</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
