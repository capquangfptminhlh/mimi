/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Check, Hotel, Phone } from 'lucide-react';

interface HotelSectionProps {
  onBookRoom: (roomName: string, roomId: string) => void;
}

const hotelTiers = [
  ['Dưới 3kg', '100.000đ'],
  ['3 – 6kg', '120.000đ'],
  ['6 – 9kg', '160.000đ'],
  ['9 – 12kg', '200.000đ'],
  ['12 – 15kg', '250.000đ'],
];

export default function HotelSection({ onBookRoom: _onBookRoom }: HotelSectionProps) {
  const currentPath = window.location.pathname;
  const projectIndex = currentPath.indexOf('/mimi/');
  const base = projectIndex >= 0 ? currentPath.slice(0, projectIndex + 6) : '/';
  const bookingUrl = `${base}dat-phong/`.replace(/\/+/g, '/');

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5 rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-teal-50/50 p-7 md:p-9 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-orange-600 shadow-sm">
              <Hotel className="w-4 h-4" />
              Hotel thú cưng
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight text-slate-900 font-display">
              Lưu trú rõ giá theo cân nặng
            </h2>
            <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
              Lumi Pet nhận lưu trú chó mèo tại Bình Thạnh. Mỗi bé có khu vực riêng, máy lạnh 24/24, bữa ăn theo menu và video tương tác hằng ngày.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                'Phòng/chuồng riêng từng bé',
                'Vệ sinh khu lưu trú',
                'Máy lạnh 24/24',
                'Video tương tác hằng ngày',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal-50 text-teal-600"><Check className="w-4 h-4" /></span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                id="hotel-section-book-btn"
                href={bookingUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-100 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <CalendarDays className="w-4 h-4" />
                Đặt phòng Hotel
              </a>
              <a
                href="tel:0989979675"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-3.5 text-sm font-black text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-500"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                0989 979 675
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-7 rounded-[32px] border border-orange-100 bg-white p-6 md:p-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.14em] text-orange-500">Bảng giá Hotel</div>
                <h3 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">Giá lưu trú / ngày</h3>
              </div>
              <div className="rounded-2xl bg-teal-50 px-4 py-3 text-xs font-bold leading-5 text-teal-800">
                Trên 5 ngày: giảm 5%<br />Trên 10 ngày: giảm 8%
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-orange-100">
              <div className="grid grid-cols-2 bg-orange-50 px-4 py-3 text-xs font-black uppercase tracking-wider text-orange-800">
                <span>Cân nặng</span>
                <span className="text-right">Giá / ngày</span>
              </div>
              {hotelTiers.map(([weight, price]) => (
                <div key={weight} className="grid grid-cols-2 border-t border-orange-50 px-4 py-3.5 text-sm text-slate-600 first:border-t-0">
                  <span className="font-bold text-slate-700">{weight}</span>
                  <strong className="text-right text-slate-900">{price}</strong>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-orange-100 bg-[#fffaf3] p-4 text-sm leading-6 text-slate-600">
              Bé trên 15kg cần Lumi Pet báo giá trực tiếp. Shop có thể từ chối nhận lưu trú nếu bé chưa tiêm phòng, có bệnh nền hoặc khó hợp tác; vui lòng báo trước tình trạng sức khỏe của bé.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
