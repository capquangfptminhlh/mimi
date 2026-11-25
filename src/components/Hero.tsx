/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Check, Clock3, Heart, Hotel, MapPin, Phone, Scissors, ShieldCheck, Sparkles } from 'lucide-react';
import LumiPetLogo from './LumiPetLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/90 via-[#fffaf2] to-white pt-6 pb-12 md:py-16">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange-100/70 blur-3xl pointer-events-none lumi-float-slow" />
      <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-teal-50 blur-3xl pointer-events-none lumi-float-delay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Copy & Mobile-first CTAs */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 border border-orange-200/80 shadow-sm text-orange-600 text-[11px] sm:text-xs font-black uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Lumi Pet · Spa &amp; Hotel 24/7 Bình Thạnh</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-[34px] sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.08] font-display"
            >
              Chăm sóc toàn diện
              <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-teal-600 bg-clip-text text-transparent mt-1.5">
                Boss xinh rạng rỡ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed font-medium"
            >
              Spa tắm vệ sinh, Grooming cắt tỉa và Khách sạn thú cưng tại <strong>27 Võ Trường Toản, Phường Gia Định (Bình Thạnh)</strong>. Bảng giá 2026 minh bạch theo cân nặng — yêu thương như gia đình, không gây stress cho boss.
            </motion.p>

            {/* 4 Real Core Pillars from Flyer */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2"
            >
              {[
                { icon: ShieldCheck, label: 'An toàn', sub: 'Sản phẩm cao cấp', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
                { icon: Heart, label: 'Tận tâm', sub: 'Như gia đình', color: 'text-rose-500 bg-rose-50 border-rose-100' },
                { icon: Sparkles, label: 'Vệ sinh', sub: 'Sạch sẽ khử khuẩn', color: 'text-teal-600 bg-teal-50 border-teal-100' },
                { icon: Check, label: 'Thư giãn', sub: 'Không stress', color: 'text-orange-600 bg-orange-50 border-orange-100' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border px-3 py-2.5 flex items-center gap-2 transition-transform hover:-translate-y-0.5 ${item.color}`}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-black text-slate-900 leading-tight">{item.label}</div>
                    <div className="text-[10px] text-slate-600 truncate">{item.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-book-spa-btn"
                onClick={() => onNavigate('booking')}
                className="lumi-btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-sm sm:text-base shadow-lg shadow-orange-200/80 cursor-pointer"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Đặt lịch Spa ngay</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-book-hotel-btn"
                onClick={() => onNavigate('hotel')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white border-2 border-orange-200 hover:border-orange-400 text-slate-800 font-black text-sm sm:text-base shadow-sm cursor-pointer"
              >
                <Hotel className="w-4 h-4 text-orange-500" />
                <span>Book phòng Hotel</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5"
            >
              <div className="bg-white/95 rounded-2xl border border-orange-100 p-3.5 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-slate-900 font-black text-xs sm:text-sm">
                  <Clock3 className="w-4 h-4 text-orange-500 shrink-0" /> 08:00 – 21:00
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">Spa mở tất cả các ngày</p>
              </div>
              <a href="tel:0989979675" className="bg-white/95 rounded-2xl border border-orange-100 p-3.5 shadow-xs hover:shadow-md hover:border-orange-300 transition-all block">
                <div className="flex items-center gap-2 text-slate-900 font-black text-xs sm:text-sm">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" /> 0989 979 675
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">Gọi / Zalo tư vấn nhanh</p>
              </a>
              <div className="bg-white/95 rounded-2xl border border-orange-100 p-3.5 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-slate-900 font-black text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" /> Bình Thạnh
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">27 Võ Trường Toản, P. Gia Định</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Showcase with New Vietnamese Photo + Quick Price Card */}
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* New Vietnamese Grooming Photo Card */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/images/vn-hero-spa.jpg"
                alt="Groomer Việt Nam tại Lumi Pet Bình Thạnh đang sấy chải nhẹ nhàng cho bé Poodle"
                className="w-full h-60 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md">
                <LumiPetLogo iconOnly size="custom" customWidth={22} customHeight={22} />
                <span className="text-[11px] font-black text-slate-800">Lumi Pet · Bình Thạnh</span>
              </div>
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-3 text-white">
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-orange-500/90 px-2.5 py-0.5 rounded-full mb-1">
                    Bảng giá 2026 mới nhất
                  </span>
                  <p className="text-sm sm:text-base font-black leading-snug">
                    Nơi boss được yêu thương như ở nhà
                  </p>
                </div>
              </div>
            </div>

            {/* Clean Quick Price Card */}
            <div className="rounded-[28px] bg-white border border-orange-100 shadow-lg p-5 sm:p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                    <Scissors className="w-4 h-4 text-teal-600" /> Spa &amp; Grooming Cún
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">Mèo từ 160k</span>
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-2 text-center">
                  <button
                    type="button"
                    onClick={() => onNavigate('pricing')}
                    className="rounded-2xl bg-orange-50/70 hover:bg-orange-100/70 border border-orange-100 p-2.5 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="block text-[10px] text-slate-500 font-bold">Tắm vệ sinh</span>
                    <strong className="text-sm sm:text-base font-black text-slate-900">từ 140k</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('pricing')}
                    className="rounded-2xl bg-orange-50/70 hover:bg-orange-100/70 border border-orange-100 p-2.5 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="block text-[10px] text-slate-500 font-bold">Tắm + cạo</span>
                    <strong className="text-sm sm:text-base font-black text-slate-900">từ 200k</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('pricing')}
                    className="rounded-2xl bg-orange-50/70 hover:bg-orange-100/70 border border-orange-100 p-2.5 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="block text-[10px] text-slate-500 font-bold">Cắt tỉa</span>
                    <strong className="text-sm sm:text-base font-black text-slate-900">từ 290k</strong>
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3.5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 font-black text-slate-900 text-sm">
                    <Hotel className="w-4 h-4 text-orange-500" /> Hotel chó mèo 24/7
                  </div>
                  <div className="mt-0.5">
                    <strong className="text-xl sm:text-2xl font-black text-orange-500">từ 100k</strong>
                    <span className="text-xs text-slate-500 font-bold"> / ngày</span>
                  </div>
                </div>
                <div className="text-right text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
                  <div>Trên 5 ngày: -5%</div>
                  <div>Trên 10 ngày: -8%</div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 px-3.5 py-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-bold text-slate-700">
                <span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> Phòng riêng mỗi bé</span>
                <span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> Máy lạnh 24/24</span>
                <span className="inline-flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> Video tương tác hằng ngày</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
