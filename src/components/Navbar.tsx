/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CalendarDays, Menu, Phone, X } from 'lucide-react';
import LumiPetLogo from './LumiPetLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onTriggerBooking: () => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;
  const projectIndex = currentPath.indexOf('/mimi/');
  const base = projectIndex >= 0 ? currentPath.slice(0, projectIndex + 6) : '/';
  const route = (path: string) => `${base}${path}`.replace(/\/+/g, '/');

  const navItems = [
    { id: 'home', label: 'Trang chủ', href: base },
    { id: 'spa', label: 'Spa', href: route('spa-thu-cung-binh-thanh/') },
    { id: 'hotel', label: 'Hotel', href: route('khach-san-thu-cung-binh-thanh/') },
    { id: 'pricing', label: 'Bảng giá', href: route('bang-gia-spa-thu-cung/') },
    { id: 'contact', label: 'Liên hệ', href: route('lien-he/') },
  ];

  const goHome = () => {
    if (window.location.pathname !== base) {
      window.location.href = base;
      return;
    }
    setActiveTab('home');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-orange-100/90 bg-white/95 shadow-[0_3px_18px_rgba(70,45,24,0.035)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[78px] items-center justify-between gap-4">
          <button
            type="button"
            className="flex items-center cursor-pointer group bg-transparent border-0 p-0"
            onClick={goHome}
            aria-label="Về trang chủ Lumi Pet"
          >
            <LumiPetLogo size="md" className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Điều hướng chính">
            {navItems.map((item) => {
              const isActive = item.id === 'home' && activeTab === 'home';
              return item.id === 'home' ? (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={goHome}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-extrabold transition-all ${isActive ? 'bg-orange-50 text-orange-500' : 'text-slate-600 hover:bg-orange-50/70 hover:text-orange-500'}`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  href={item.href}
                  className="rounded-xl px-3.5 py-2.5 text-sm font-extrabold text-slate-600 transition-all hover:bg-orange-50/70 hover:text-orange-500"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:0989979675"
              className="flex items-center gap-2 rounded-xl border border-orange-100 bg-white px-3.5 py-2.5 text-sm font-extrabold text-slate-700 shadow-sm transition-all hover:border-orange-200 hover:text-orange-500"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>0989 979 675</span>
            </a>
            <a
              id="navbar-booking-btn"
              href={route('dat-lich/')}
              className="flex items-center gap-2 rounded-full bg-teal-550 px-5 py-2.5 text-sm font-extrabold text-white shadow-md shadow-teal-100 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-lg"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Đặt lịch ngay</span>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="navbar-booking-mobile-btn"
              href={route('dat-lich/')}
              className="hidden sm:flex items-center gap-1.5 rounded-xl bg-teal-550 px-4 py-2.5 text-xs font-extrabold text-white shadow-sm"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              Đặt lịch
            </a>
            <button
              id="navbar-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-orange-100 bg-white text-slate-700 shadow-sm transition-colors hover:bg-orange-50 hover:text-orange-500"
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-orange-100 bg-white"
          >
            <div className="px-4 py-4 space-y-1.5">
              {navItems.map((item) => item.id === 'home' ? (
                <button
                  key={item.id}
                  id={`mobile-nav-tab-${item.id}`}
                  onClick={goHome}
                  className="block w-full rounded-xl px-4 py-3 text-left text-base font-extrabold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  id={`mobile-nav-tab-${item.id}`}
                  href={item.href}
                  className="block w-full rounded-xl px-4 py-3 text-left text-base font-extrabold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 mt-3 border-t border-orange-100 grid gap-3">
                <a
                  href="tel:0989979675"
                  className="flex items-center justify-center gap-2 rounded-xl border border-orange-100 bg-orange-50/60 px-4 py-3 text-sm font-extrabold text-slate-700"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  0989 979 675
                </a>
                <a
                  id="mobile-nav-booking-btn"
                  href={route('dat-lich/')}
                  className="flex items-center justify-center gap-2 rounded-xl bg-teal-550 px-4 py-3 text-sm font-extrabold text-white shadow-md"
                >
                  <CalendarDays className="w-4 h-4" />
                  Đặt lịch Spa
                </a>
                <a
                  href={route('dat-phong/')}
                  className="flex items-center justify-center rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm font-extrabold text-orange-600"
                >
                  Đặt phòng Hotel
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
