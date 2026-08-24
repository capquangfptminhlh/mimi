/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import LumiPetLogo from './LumiPetLogo';

interface FooterProps {
  setActiveTab: (tabId: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentPath = window.location.pathname;
  const projectIndex = currentPath.indexOf('/mimi/');
  const base = projectIndex >= 0 ? currentPath.slice(0, projectIndex + 6) : '/';
  const route = (path: string) => `${base}${path}`.replace(/\/+/g, '/');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    if (window.location.pathname !== base) {
      window.location.href = base;
      return;
    }
    setActiveTab('home');
    scrollToTop();
  };

  return (
    <footer className="relative overflow-hidden border-t border-orange-100 bg-[#fffaf3] text-slate-600">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-teal-50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-7">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 pb-10 border-b border-orange-100">
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={goHome}
              className="bg-transparent border-0 p-0 cursor-pointer"
              aria-label="Về trang chủ Lumi Pet"
            >
              <LumiPetLogo size="md" />
            </button>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Lumi Pet Shop – Spa & Hotel 24/7 tại Bình Thạnh. Dịch vụ Spa, grooming và lưu trú chó mèo với bảng giá theo cân nặng và lịch hẹn trực tuyến rõ ràng.
            </p>

            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <a
                href="tel:0989979675"
                className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 font-bold text-slate-700 shadow-sm hover:border-orange-200 hover:text-orange-500 transition-all"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-50 text-orange-500"><Phone className="w-4 h-4" /></span>
                0989 979 675
              </a>
              <a
                href="mailto:petlumi063@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 font-bold text-slate-700 shadow-sm hover:border-orange-200 hover:text-orange-500 transition-all"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-teal-600"><Mail className="w-4 h-4" /></span>
                petlumi063@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-900">Dịch vụ</h3>
            <nav className="mt-4 grid gap-2 text-sm font-bold" aria-label="Dịch vụ Lumi Pet">
              <a className="rounded-xl px-3 py-2 hover:bg-white hover:text-orange-500 transition-colors" href={route('spa-thu-cung-binh-thanh/')}>Spa thú cưng</a>
              <a className="rounded-xl px-3 py-2 hover:bg-white hover:text-orange-500 transition-colors" href={route('khach-san-thu-cung-binh-thanh/')}>Hotel thú cưng</a>
              <a className="rounded-xl px-3 py-2 hover:bg-white hover:text-orange-500 transition-colors" href={route('bang-gia-spa-thu-cung/')}>Bảng giá</a>
              <a className="rounded-xl px-3 py-2 hover:bg-white hover:text-orange-500 transition-colors" href={route('dat-lich/')}>Đặt lịch Spa</a>
              <a className="rounded-xl px-3 py-2 hover:bg-white hover:text-orange-500 transition-colors" href={route('dat-phong/')}>Đặt phòng Hotel</a>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-900">Lumi Pet Bình Thạnh</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
                <MapPin className="mt-0.5 w-4.5 h-4.5 flex-shrink-0 text-orange-500" />
                <span><strong className="text-slate-900">27 Võ Trường Toản</strong><br />Bình Thạnh, TP.HCM</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-sm">
                <Clock3 className="mt-0.5 w-4.5 h-4.5 flex-shrink-0 text-teal-600" />
                <span><strong className="text-slate-900">07:00 – 21:00</strong><br />Phục vụ tất cả các ngày</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Lumi Pet. Spa & Hotel thú cưng Bình Thạnh.</p>
          <div className="flex items-center gap-3">
            <a href={route('lien-he/')} className="font-bold hover:text-orange-500 transition-colors">Liên hệ</a>
            <a href={route('gioi-thieu/')} className="font-bold hover:text-orange-500 transition-colors">Giới thiệu</a>
            <button
              onClick={scrollToTop}
              className="grid h-10 w-10 place-items-center rounded-xl border border-orange-100 bg-white text-slate-600 shadow-sm hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-500 transition-all"
              aria-label="Lên đầu trang"
              title="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
