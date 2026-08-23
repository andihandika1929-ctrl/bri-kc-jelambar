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
import { useLanguage } from '../context/LanguageContext';

type CalculatorTab = 'kpr' | 'kendaraan' | 'briguna';

export default function LoanCalculator() {
  const { t } = useLanguage();
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
      // BRIguna (Annuity)
      const p = brigunaPlafond;
      const n = brigunaTenor * 12; // months
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

  // WhatsApp Inquiry URL Builder
  const getWhatsAppInquiryUrl = () => {
    const phoneNumber = '6281330785880'; // RM Kredit Utama Farid
    let msg = '';

    if (activeTab === 'kpr') {
      msg = `Halo Pak Utama Farid (RM Kredit BRI KC Jakarta Jelambar),\n\nSaya ingin berkonsultasi mengenai pengajuan *KPR BRI* dengan rincian estimasi:\n- Plafond Pinjaman: ${formatRupiah(kprPlafond)}\n- Tenor: ${kprTenor} Tahun\n- Suku Bunga: ${kprRate}% p.a.\n- Estimasi Angsuran: ${formatRupiah(calculationResult.monthly)}/bulan.\n\nMohon informasi persyaratan dan proses pengajuannya. Terima kasih.`;
    } else if (activeTab === 'kendaraan') {
      msg = `Halo Pak Utama Farid (RM Kredit BRI KC Jakarta Jelambar),\n\nSaya tertarik dengan *Kredit Kendaraan Bermotor (KKB BRI)*:\n- Jenis Kendaraan: ${vehicleType === 'baru' ? 'Mobil Baru' : 'Mobil Bekas'}\n- Harga OTR: ${formatRupiah(vehicleOtr)}\n- Uang Muka (DP): ${vehicleDpPercent}%\n- Tenor: ${vehicleTenor} Tahun\n- Estimasi Angsuran: ${formatRupiah(calculationResult.monthly)}/bulan.\n\nMohon dibantu proses pengajuan dan rekomendasinya. Terima kasih.`;
    } else {
      msg = `Halo Pak Utama Farid (RM Kredit BRI KC Jakarta Jelambar),\n\nSaya ingin menanyakan pinjaman *Kredit BRIguna (Payroll BRI)*:\n- Plafond: ${formatRupiah(brigunaPlafond)}\n- Tenor: ${brigunaTenor} Tahun\n- Estimasi Angsuran: ${formatRupiah(calculationResult.monthly)}/bulan.\n\nMohon informasi persyaratan SK dan dokumen yang dibutuhkan. Terima kasih.`;
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="simulasi" className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden w-full max-w-full">
      {/* Background Subtle Acent Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Calculator className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>{t.calc.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.calc.titleStart}{' '}
            <span className="text-[#0052CC]">
              {t.calc.titleHighlight}
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.calc.desc}
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden w-full">
          {/* Navigation Tabs (3 Tabs) */}
          <div className="grid grid-cols-3 border-b border-slate-200/90 bg-slate-50/70 p-1.5 sm:p-2.5 gap-1 sm:gap-2">
            {/* TAB 1: KPR */}
            <button
              onClick={() => setActiveTab('kpr')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'kpr'
                  ? 'bg-white text-[#0052CC] shadow-sm border border-slate-200/80 scale-[1.01]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Home className={`w-4 h-4 ${activeTab === 'kpr' ? 'text-[#0052CC]' : 'text-slate-400'}`} />
              <span className="truncate">{t.calc.tabKpr}</span>
            </button>

            {/* TAB 2: KENDARAAN */}
            <button
              onClick={() => setActiveTab('kendaraan')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'kendaraan'
                  ? 'bg-white text-[#0052CC] shadow-sm border border-slate-200/80 scale-[1.01]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Car className={`w-4 h-4 ${activeTab === 'kendaraan' ? 'text-[#0052CC]' : 'text-slate-400'}`} />
              <span className="truncate">{t.calc.tabKkb}</span>
            </button>

            {/* TAB 3: BRIGUNA */}
            <button
              onClick={() => setActiveTab('briguna')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'briguna'
                  ? 'bg-white text-[#0052CC] shadow-sm border border-slate-200/80 scale-[1.01]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === 'briguna' ? 'text-[#0052CC]' : 'text-slate-400'}`} />
              <span className="truncate">{t.calc.tabBriguna}</span>
            </button>
          </div>

          {/* Calculator Body (Clean 2-Column Layout) */}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Clean Visual Illustration & S&K Disclaimer */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-gradient-to-br from-blue-50/80 via-white to-slate-50 p-6 sm:p-7 rounded-2xl border border-blue-100 flex flex-col justify-between">
                  {/* TAB 1 VISUAL: KPR */}
                  {activeTab === 'kpr' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0052CC] flex items-center justify-center shadow-xs">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-[#F37021] text-xs font-bold border border-amber-200">
                          Bunga Spesial 6.75%
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                          {t.calc.tabKpr}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                          Miliki hunian idaman keluarga dengan skema suku bunga bersaing, uang muka ringan, dan jangka waktu fleksibel hingga 25 tahun.
                        </p>
                      </div>

                      <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Plafond pembiayaan hingga Rp 5 Miliar</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Bebas penalti pelunasan sebagian</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Kerjasama dengan ratusan developer terpercaya</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2 VISUAL: KENDARAAN (KKB) */}
                  {activeTab === 'kendaraan' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                          <Car className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                          DP Mulai 10%
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                          {t.calc.tabKkb}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                          Wujudkan kepemilikan mobil baru atau bekas berkualitas untuk mobilitas keluarga dan armada operasional usaha Anda.
                        </p>
                      </div>

                      <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Suku bunga flat kompetitif mulai 5.25% p.a.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Proses persetujuan cepat & rekanan dealer resmi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Termasuk asuransi kendaraan komprehensif</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3 VISUAL: BRIGUNA */}
                  {activeTab === 'briguna' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs">
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                          Khusus Payroll BRI
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                          {t.calc.tabBriguna}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                          Solusi pinjaman tanpa agunan kebendaan bagi ASN, TNI/Polri, BUMN, dan karyawan swasta dengan sistem payroll di Bank BRI.
                        </p>
                      </div>

                      <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Tanpa agunan fisik sertifikat/BPKB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Tenor panjang hingga 15 tahun (BRIguna Karya)</span>
                        </div>
                        <div className="flex items-center gap-2">
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
                  <p>{t.calc.snk}</p>
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
                            {t.calc.loanAmount}:
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
                            {t.calc.tenure}:
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {kprTenor} {t.calc.years} ({kprTenor * 12} Bulan)
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
                          <span>1 {t.calc.years}</span>
                          <span>12 {t.calc.years}</span>
                          <span>25 {t.calc.years}</span>
                        </div>
                      </div>

                      {/* Interest Rate */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            {t.calc.interestRate}:
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
                            {t.calc.interestRateFlat}:
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
                            {t.calc.carPrice}:
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
                            {t.calc.dpPercentage} ({vehicleDpPercent}%):
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
                            {t.calc.tenure}:
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {vehicleTenor} {t.calc.years} ({vehicleTenor * 12} Bulan)
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
                          <span>1 {t.calc.years}</span>
                          <span>3 {t.calc.years}</span>
                          <span>6 {t.calc.years}</span>
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
                            {t.calc.loanAmount}:
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
                            {t.calc.tenure}:
                          </label>
                          <span className="text-sm font-extrabold text-[#0052CC]">
                            {brigunaTenor} {t.calc.years} ({brigunaTenor * 12} Bulan)
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
                          <span>1 {t.calc.years}</span>
                          <span>5 {t.calc.years}</span>
                          <span>15 {t.calc.years}</span>
                        </div>
                      </div>

                      {/* Suku Bunga */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            {t.calc.interestRate}:
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
                      </div>
                    </div>
                  )}
                </div>

                {/* Soft Blue Estimation Result Card */}
                <div className="bg-blue-50/80 p-6 sm:p-7 rounded-2xl border border-blue-200/80 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200/60 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      {t.calc.estTitle}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#0052CC] border border-blue-200">
                      <Sparkles className="w-3 h-3 text-[#0052CC]" />
                      Estimasi Akurat
                    </span>
                  </div>

                  {/* Monthly Amount Display */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0052CC] tracking-tight">
                      {formatRupiah(calculationResult.monthly)}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      {t.calc.perMonth}
                    </span>
                  </div>

                  {/* Key Metrics Breakdown */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600 border-t border-blue-200/60">
                    <div>
                      <span className="text-[11px] text-slate-400 block">{t.calc.principalLoan}</span>
                      <span className="font-bold text-slate-800">{formatRupiah(calculationResult.principal)}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">{t.calc.interestRateSummary}</span>
                      <span className="font-bold text-slate-800">
                        {activeTab === 'kendaraan' ? `${vehicleRate}% Flat p.a.` : `${activeTab === 'kpr' ? kprRate : brigunaRate}% p.a.`}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">{t.calc.tenureSummary}</span>
                      <span className="font-bold text-slate-800">
                        {activeTab === 'kpr' ? `${kprTenor} ${t.calc.years}` : activeTab === 'kendaraan' ? `${vehicleTenor} ${t.calc.years}` : `${brigunaTenor} ${t.calc.years}`}
                      </span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Consultation CTA Button */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-95 text-center cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{t.calc.btnConsult}</span>
                      <ChevronRight className="w-4 h-4" />
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
