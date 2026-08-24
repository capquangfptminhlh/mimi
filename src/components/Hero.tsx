/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Check, Clock3, Hotel, MapPin, Phone, Scissors, Sparkles } from 'lucide-react';
import LumiPetLogo from './LumiPetLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-[#fffaf2] to-white py-12 md:py-20">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange-100/70 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-teal-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm text-orange-600 text-xs font-black uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4" />
              Lumi Pet · Spa & Hotel thú cưng Bình Thạnh
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] font-display"
            >
              Chăm sóc chó mèo
              <span className="block text-orange-500 mt-2">rõ giá, dễ đặt lịch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              Spa, grooming và lưu trú chó mèo tại 27 Võ Trường Toản, Bình Thạnh. Giá hiển thị theo đúng cân nặng; các khoản phụ thu nếu có sẽ được shop xác nhận trước khi làm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <button
                id="hero-book-spa-btn"
                onClick={() => onNavigate('booking')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5"
              >
                <CalendarDays className="w-4 h-4" />
                Đặt lịch Spa
              </button>
              <button
                id="hero-book-hotel-btn"
                onClick={() => onNavigate('hotel')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white border border-orange-200 hover:border-orange-300 text-slate-800 font-black shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Hotel className="w-4 h-4 text-orange-500" />
                Book phòng Hotel
              </button>
            </motion.div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/90 rounded-2xl border border-orange-100 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
                  <Clock3 className="w-4 h-4 text-orange-500" /> 07:00 – 21:00
                </div>
                <p className="mt-1 text-xs text-slate-500">Phục vụ tất cả các ngày</p>
              </div>
              <div className="bg-white/90 rounded-2xl border border-orange-100 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
                  <Phone className="w-4 h-4 text-orange-500" /> 0989 979 675
                </div>
                <p className="mt-1 text-xs text-slate-500">Hotline Lumi Pet</p>
              </div>
              <div className="bg-white/90 rounded-2xl border border-orange-100 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
                  <MapPin className="w-4 h-4 text-orange-500" /> Bình Thạnh
                </div>
                <p className="mt-1 text-xs text-slate-500">27 Võ Trường Toản, TP.HCM</p>
              </div>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[36px] bg-white border border-orange-100 shadow-xl overflow-hidden">
              <div className="p-7 bg-gradient-to-br from-orange-500 to-orange-400 text-white relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-white/10" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md">
                    <LumiPetLogo iconOnly size="custom" customWidth={42} customHeight={42} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] font-bold text-orange-100">Bảng giá nhanh</div>
                    <div className="text-2xl font-black">Lumi Pet</div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 font-black text-slate-900">
                    <Scissors className="w-4 h-4 text-teal-600" /> Spa chó
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-slate-50 p-2.5"><span className="block text-[10px] text-slate-500">Tắm</span><strong className="text-sm">từ 120k</strong></div>
                    <div className="rounded-xl bg-slate-50 p-2.5"><span className="block text-[10px] text-slate-500">Tắm + cạo</span><strong className="text-sm">từ 180k</strong></div>
                    <div className="rounded-xl bg-slate-50 p-2.5"><span className="block text-[10px] text-slate-500">Cắt tỉa</span><strong className="text-sm">từ 260k</strong></div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 font-black text-slate-900">
                    <Hotel className="w-4 h-4 text-orange-500" /> Hotel chó mèo
                  </div>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div><span className="text-xs text-slate-500 block">Theo cân nặng</span><strong className="text-2xl text-orange-500">từ 100k</strong><span className="text-xs text-slate-500"> / ngày</span></div>
                    <div className="text-right text-xs text-slate-500">Trên 5 ngày: -5%<br />Trên 10 ngày: -8%</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800"><Check className="w-4 h-4" /> Phòng/chuồng riêng mỗi bé</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800"><Check className="w-4 h-4" /> Máy lạnh 24/24</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800"><Check className="w-4 h-4" /> Video tương tác hằng ngày</div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
