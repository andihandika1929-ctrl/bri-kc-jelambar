'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Phone, MapPin, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';

// National Holidays List (Format MM-DD for recurring or YYYY-MM-DD for dynamic)
const INDONESIAN_HOLIDAYS: string[] = [
  '01-01', // Tahun Baru Masehi
  '05-01', // Hari Buruh
  '06-01', // Hari Lahir Pancasila
  '08-17', // Hari Kemerdekaan RI
  '12-25', // Hari Raya Natal
  // Dynamic holidays
  '2026-01-29', // Tahun Baru Imlek 2577
  '2026-02-15', // Isra Mi'raj
  '2026-03-20', // Hari Suci Nyepi
  '2026-03-21', // Idul Fitri 1447 H
  '2026-03-22', // Idul Fitri 1447 H
  '2026-04-03', // Wafat Isa Almasih
  '2026-05-14', // Kenaikan Isa Almasih
  '2026-05-31', // Hari Raya Waisak
  '2026-06-07', // Idul Adha 1447 H
  '2026-06-27', // Tahun Baru Islam 1448 H
  '2026-09-04', // Maulid Nabi Muhammad SAW
];

export default function TopOperationalBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoliday, setIsHoliday] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const checkBranchStatus = () => {
      // Get current date & time in Jakarta Timezone (WIB: UTC+7)
      const now = new Date();
      const jakartaDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
      const dayOfWeek = jakartaDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = jakartaDate.getHours();

      // Check Holiday
      const monthStr = String(jakartaDate.getMonth() + 1).padStart(2, '0');
      const dayStr = String(jakartaDate.getDate()).padStart(2, '0');
      const yearStr = String(jakartaDate.getFullYear());
      const mmdd = `${monthStr}-${dayStr}`;
      const yyyymmdd = `${yearStr}-${monthStr}-${dayStr}`;

      const holidayToday = INDONESIAN_HOLIDAYS.includes(mmdd) || INDONESIAN_HOLIDAYS.includes(yyyymmdd);
      setIsHoliday(holidayToday);

      // Business hours: Monday to Friday (1-5), 08:00 - 15:00 WIB
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
      const isWorkHours = hour >= 8 && hour < 15;

      const branchOpen = isWeekday && isWorkHours && !holidayToday;
      setIsOpen(branchOpen);

      // Format time string for display
      const formattedTime = jakartaDate.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      });
      const formattedDate = jakartaDate.toLocaleDateString('id-ID', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
      setTimeString(`${formattedDate}, ${formattedTime} WIB`);
    };

    checkBranchStatus();
    const interval = setInterval(checkBranchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0052CC] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-blue-400/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        {/* Real-time Status Indicator */}
        <div className="flex items-center gap-2 truncate">
          {isOpen ? (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="font-bold text-emerald-200">
                Layanan Kantor Cabang Buka
              </span>
              <span className="hidden md:inline text-blue-100">
                (Operasional Tatap Muka Aktif 08.00 - 15.00 WIB)
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-blue-100">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-300"></span>
              <span className="font-bold text-amber-200">
                Layanan Kantor Cabang Tutup
              </span>
              <span className="hidden md:inline text-blue-100">
                {isHoliday
                  ? '— Hari Libur Nasional • Buka kembali hari kerja 08.00 WIB'
                  : '— Buka kembali hari kerja pukul 08.00 WIB'}
              </span>
              <span className="hidden lg:inline text-blue-200">
                • Layanan Digital BRImo & ATM 24 Jam Aktif
              </span>
            </div>
          )}
        </div>

        {/* Live Clock & Quick Hotline */}
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-blue-100">
          <div className="flex items-center gap-1 hidden xs:flex">
            <Clock className="w-3.5 h-3.5 text-blue-200" />
            <span className="font-medium text-white">{timeString || 'WIB'}</span>
          </div>
          <span className="hidden xs:inline text-blue-300/40">|</span>
          <a
            href="tel:1500017"
            className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
            title="Call Center BRI 24 Jam"
          >
            <Phone className="w-3 h-3 text-blue-200" />
            <span>Call BRI: 1500017</span>
          </a>
          <span className="text-blue-300/40">|</span>
          <a
            href="https://wa.me/628121214017"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-200 transition-colors flex items-center gap-1 font-bold text-emerald-300"
            title="Chat WhatsApp Sabrina BRI"
          >
            <MessageCircle className="w-3 h-3 fill-emerald-300 text-[#0052CC]" />
            <span>Sabrina WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
