import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Hotel,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  X,
} from 'lucide-react';

const navItems = [
  ['Spa', './spa-thu-cung-binh-thanh/'],
  ['Hotel', './khach-san-thu-cung-binh-thanh/'],
  ['Bảng giá', './bang-gia-spa-thu-cung/'],
  ['Giới thiệu', './gioi-thieu/'],
  ['Liên hệ', './lien-he/'],
] as const;

const spaSteps = [
  'Kiểm tra tình trạng lông da',
  'Chải lông',
  'Cạo lông bàn chân',
  'Cạo lông bụng và vùng hậu',
  'Vệ sinh tai, mắt, mũi miệng',
  'Cắt mài móng',
  'Vắt tuyến hôi',
  'Tắm xả chuyên sâu 2 lần',
  'Sấy chải tạo độ phồng',
  'Serum dưỡng lông chắc khỏe',
];

const dogPrices = [
  ['Dưới 3kg', '120.000đ', '180.000đ', '260.000đ'],
  ['3–6kg', '170.000đ', '240.000đ', '320.000đ'],
  ['6–9kg', '220.000đ', '300.000đ', '380.000đ'],
  ['9–12kg', '270.000đ', '360.000đ', '450.000đ'],
  ['12–18kg', '350.000đ', '460.000đ', '550.000đ'],
];

const hotelPrices = [
  ['Dưới 3kg', '100.000đ/ngày'],
  ['3–6kg', '120.000đ/ngày'],
  ['6–9kg', '160.000đ/ngày'],
  ['9–12kg', '200.000đ/ngày'],
  ['12–15kg', '250.000đ/ngày'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="./" className="flex min-w-0 items-center gap-3" aria-label="Lumi Pet - Trang chủ">
            <img src="./lumi-brand-mark.svg" alt="" aria-hidden="true" className="h-11 w-11 shrink-0 rounded-2xl shadow-lg shadow-orange-200 transition hover:rotate-6 hover:scale-105" />
            <span className="min-w-0 leading-tight">
              <strong className="block truncate text-xl font-extrabold tracking-tight text-slate-900">Lumi Pet</strong>
              <small className="block truncate text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-500">Spa & Hotel 24/7</small>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {navItems.map(([label, href]) => (
              <a key={href} className="rounded-xl px-4 py-2 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600" href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href="tel:0989979675" className="hidden rounded-xl border border-orange-100 px-3 py-2 text-sm font-extrabold text-slate-700 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600 md:inline-flex md:items-center md:gap-2">
              <Phone className="h-4 w-4 text-orange-500" />
              Gọi ngay
            </a>
            <a href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer" className="hidden rounded-xl bg-[#0068ff] px-3 py-2 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#005be0] md:inline-flex md:items-center md:gap-2">
              <MessageCircle className="h-4 w-4" />
              Zalo
            </a>
            <a href="./dat-lich/" className="hidden items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-teal-100 transition hover:-translate-y-0.5 hover:bg-teal-700 sm:inline-flex">
              <CalendarDays className="h-4 w-4" />
              Đặt lịch
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-white text-slate-700 shadow-sm transition hover:scale-105 hover:border-orange-300 hover:bg-orange-50 lg:hidden"
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(value => !value)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-orange-100 bg-white px-4 pb-5 pt-3 shadow-xl lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Điều hướng mobile">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} className="rounded-xl px-4 py-3 text-base font-extrabold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600">
                  {label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-3 gap-2 border-t border-orange-100 pt-3">
                <a href="tel:0989979675" className="inline-flex items-center justify-center gap-1 rounded-xl border border-orange-200 bg-white px-2 py-3 text-xs font-extrabold text-orange-600">
                  <Phone className="h-4 w-4" /> Gọi
                </a>
                <a href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#0068ff] px-2 py-3 text-xs font-extrabold text-white">
                  <MessageCircle className="h-4 w-4" /> Zalo
                </a>
                <a href="./dat-lich/" className="inline-flex items-center justify-center gap-1 rounded-xl bg-teal-600 px-2 py-3 text-xs font-extrabold text-white">
                  <CalendarDays className="h-4 w-4" /> Đặt lịch
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-orange-50 bg-gradient-to-br from-orange-50 via-white to-teal-50/70">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Lumi Pet Bình Thạnh
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Spa & khách sạn chó mèo <span className="text-orange-500">rõ giá, dễ đặt lịch</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
                Lumi Pet phục vụ tại 27 Võ Trường Toản, Bình Thạnh, TP.HCM. Xem giá theo cân nặng, chọn lịch Spa hoặc ngày lưu trú Hotel và gửi yêu cầu trực tuyến để shop xác nhận.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="./dat-lich/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-orange-600">
                  <Scissors className="h-5 w-5" />
                  Đặt lịch Spa
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="./dat-phong/" className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-teal-100 bg-white px-7 py-4 text-base font-extrabold text-teal-700 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50">
                  <Hotel className="h-5 w-5" />
                  Book phòng Hotel
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a href="tel:0989979675" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-emerald-700 shadow-sm ring-1 ring-emerald-100 transition hover:-translate-y-0.5"><Phone className="h-4 w-4" /> Gọi 0989 979 675</a>
                <a href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0068ff] px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" /> Nhắn Zalo</a>
              </div>

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <Clock3 className="mb-2 h-5 w-5 text-orange-500" />
                  <strong className="block text-sm text-slate-900">07:00 – 21:00</strong>
                  <span className="text-xs font-semibold text-slate-500">Tất cả các ngày</span>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <Scissors className="mb-2 h-5 w-5 text-orange-500" />
                  <strong className="block text-sm text-slate-900">Spa từ 120.000đ</strong>
                  <span className="text-xs font-semibold text-slate-500">Theo cân nặng</span>
                </div>
                <div className="rounded-2xl border border-teal-100 bg-white/90 p-4 shadow-sm">
                  <Hotel className="mb-2 h-5 w-5 text-teal-600" />
                  <strong className="block text-sm text-slate-900">Hotel từ 100.000đ</strong>
                  <span className="text-xs font-semibold text-slate-500">Mỗi ngày lưu trú</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-4 shadow-2xl shadow-orange-100/80 sm:rounded-[36px] sm:p-5">
                <div className="group relative overflow-hidden rounded-[26px] bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&auto=format&fit=crop&q=86" alt="Ảnh minh hoạ thú cưng" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72" fetchPriority="high" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/75 px-3 py-1.5 text-[11px] font-extrabold text-white backdrop-blur-md">Ảnh minh hoạ</span>
                </div>
                <div className="relative p-2 pt-6 sm:p-3 sm:pt-7">
                  <h2 className="text-2xl font-black text-slate-950">Thông tin cửa hàng</h2>
                  <div className="mt-5 space-y-3">
                    <div className="flex gap-3 rounded-2xl bg-orange-50/70 p-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                      <div><strong className="block text-sm text-slate-900">27 Võ Trường Toản</strong><span className="text-sm font-medium text-slate-600">Bình Thạnh, TP.HCM</span></div>
                    </div>
                    <a href="tel:0989979675" className="flex gap-3 rounded-2xl bg-teal-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-teal-100">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                      <div><strong className="block text-sm text-slate-900">0989 979 675</strong><span className="text-sm font-medium text-slate-600">Hotline liên hệ</span></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Dịch vụ chính</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Spa và Hotel, chọn đúng nhu cầu trong vài giây</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <a href="./spa-thu-cung-binh-thanh/" className="group overflow-hidden rounded-[28px] border border-orange-100 bg-orange-50/40 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100 sm:rounded-[32px]">
              <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1400&auto=format&fit=crop&q=86" alt="Spa và grooming thú cưng" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64" loading="lazy" /></div>
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white"><Scissors className="h-5 w-5" /></span><span className="text-xs font-black uppercase tracking-[0.14em] text-orange-500">Spa & Grooming</span></div>
                <h3 className="mt-5 text-3xl font-black text-slate-950">Tắm, cạo và cắt tỉa theo cân nặng</h3>
                <p className="mt-3 font-medium leading-7 text-slate-600">Chó tắm vệ sinh từ 120.000đ, mèo từ 150.000đ. Giá grooming tách rõ giữa tắm + cạo và tắm + cắt tỉa.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-orange-600">Xem dịch vụ Spa <ArrowRight className="h-4 w-4" /></span>
              </div>
            </a>

            <a href="./khach-san-thu-cung-binh-thanh/" className="group overflow-hidden rounded-[28px] border border-teal-100 bg-teal-50/40 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100 sm:rounded-[32px]">
              <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=1400&auto=format&fit=crop&q=86" alt="Khách sạn lưu trú thú cưng" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64" loading="lazy" /></div>
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-white"><Hotel className="h-5 w-5" /></span><span className="text-xs font-black uppercase tracking-[0.14em] text-teal-700">Pet Hotel</span></div>
                <h3 className="mt-5 text-3xl font-black text-slate-950">Lưu trú chó mèo từ 100.000đ/ngày</h3>
                <p className="mt-3 font-medium leading-7 text-slate-600">Phòng theo cân nặng, máy lạnh 24/24, bữa ăn theo menu, tương tác và video mỗi ngày. Lưu trú dài ngày có ưu đãi.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-teal-700">Xem Pet Hotel <ArrowRight className="h-4 w-4" /></span>
              </div>
            </a>
          </div>
        </section>

        <section className="border-y border-orange-100 bg-orange-50/55">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Bảng giá chó</span>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Biết giá trước khi gửi yêu cầu</h2>
                <p className="mt-3 font-medium leading-7 text-slate-600">Giá cơ bản theo cân nặng. Phụ thu dạng khoảng chỉ được xác nhận sau khi nhân viên xem tình trạng thực tế của bé.</p>
              </div>
              <a href="./bang-gia-spa-thu-cung/" className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-600">Bảng giá đầy đủ <ArrowRight className="h-4 w-4" /></a>
            </div>

            <div className="mt-9 overflow-x-auto rounded-[28px] border border-orange-100 bg-white shadow-sm">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-orange-50 text-xs font-black uppercase tracking-wide text-orange-800">
                  <tr><th className="px-6 py-4">Cân nặng</th><th className="px-6 py-4">Tắm vệ sinh</th><th className="px-6 py-4">Tắm + cạo</th><th className="px-6 py-4">Tắm + cắt tỉa</th></tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {dogPrices.map(row => (
                    <tr key={row[0]} className="transition hover:bg-orange-50/50">
                      {row.map((cell, index) => <td key={cell} className={`px-6 py-4 text-sm ${index === 0 ? 'font-extrabold text-slate-900' : 'font-bold text-slate-600'}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-900">
              Bảng giá có dòng 12–18kg nhưng phần lưu ý gốc đồng thời ghi “trên 15kg liên hệ shop báo giá”. Với bé trên 15kg, nên xác nhận trực tiếp với Lumi Pet trước khi làm dịch vụ.
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Combo chăm sóc</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">10 bước Spa được trình bày rõ</h2>
            <p className="mt-4 font-medium leading-7 text-slate-600">Từ kiểm tra lông da tới tắm xả, sấy chải và serum dưỡng lông. Khách có thể biết trước những bước chính của combo.</p>
            <a href="./spa-thu-cung-binh-thanh/" className="mt-6 inline-flex items-center gap-2 font-extrabold text-orange-600">Chi tiết Spa <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {spaSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xs font-black text-orange-700">{index + 1}</span>
                <span className="pt-1 text-sm font-extrabold text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-teal-300">Khách sạn thú cưng</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Giá lưu trú tính được trước khi gửi</h2>
              <p className="mt-4 font-medium leading-7 text-slate-300">Trên 5 ngày giảm 5%, trên 10 ngày giảm 8%. Bé trên 15kg liên hệ shop để báo giá.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="./dat-phong/" className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-5 py-3 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-teal-400"><CalendarDays className="h-5 w-5" /> Tính giá & book phòng</a>
                <a href="tel:0989979675" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-extrabold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"><Phone className="h-5 w-5" /> Gọi shop</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[28px] border border-slate-800">
                {hotelPrices.map(([weight, price]) => (
                  <div key={weight} className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-5 py-4 last:border-b-0">
                    <span className="font-bold text-slate-300">{weight}</span><strong className="text-teal-300">{price}</strong>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['Không gian riêng mỗi bé', 'Máy lạnh mát mẻ 24/24', 'Bữa ăn theo menu', 'Quay video tương tác mỗi ngày'].map(item => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4 text-sm font-bold text-slate-200"><Check className="h-5 w-5 text-teal-300" />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-orange-100 bg-gradient-to-r from-orange-50 to-teal-50 p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Lumi Pet Bình Thạnh</span>
                <h2 className="mt-3 text-3xl font-black text-slate-950">Chọn dịch vụ, xem giá và gửi yêu cầu trong vài bước</h2>
                <p className="mt-3 max-w-3xl font-medium leading-7 text-slate-600">Yêu cầu đặt lịch/đặt phòng được ghi nhận ở trạng thái chờ xác nhận. Shop sẽ liên hệ lại với khách trước khi chốt dịch vụ.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
                <a href="./dat-lich/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-extrabold text-white shadow-lg shadow-orange-100 transition hover:-translate-y-0.5 hover:bg-orange-600"><Scissors className="h-5 w-5" /> Đặt lịch Spa</a>
                <a href="./dat-phong/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-6 py-4 font-extrabold text-white shadow-lg shadow-teal-100 transition hover:-translate-y-0.5 hover:bg-teal-700"><Hotel className="h-5 w-5" /> Book phòng Hotel</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <div><strong className="text-xl font-black text-slate-950">Lumi Pet Shop</strong><p className="mt-2 text-sm font-semibold leading-6 text-slate-500">Spa & Hotel 24/7<br />27 Võ Trường Toản, Bình Thạnh, TP.HCM</p></div>
          <div><strong className="text-sm font-black uppercase tracking-wider text-slate-900">Liên hệ</strong><div className="mt-3 grid gap-2 text-sm font-bold text-slate-600"><a href="tel:0989979675" className="hover:text-orange-600">0989 979 675</a><span>07:00 – 21:00 · Tất cả các ngày</span><a href="https://www.instagram.com/lumipet.spa/" className="inline-flex items-center gap-2 hover:text-orange-600"><Instagram className="h-4 w-4" /> @lumipet.spa</a></div></div>
          <div><strong className="text-sm font-black uppercase tracking-wider text-slate-900">Truy cập nhanh</strong><div className="mt-3 grid gap-2 text-sm font-bold text-slate-600"><a href="./bang-gia-spa-thu-cung/" className="hover:text-orange-600">Bảng giá Spa</a><a href="./dat-lich/" className="hover:text-orange-600">Đặt lịch Spa</a><a href="./dat-phong/" className="hover:text-orange-600">Đặt phòng Hotel</a><a href="./lien-he/" className="hover:text-orange-600">Liên hệ Lumi Pet</a></div></div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-orange-100 bg-white/95 p-2 shadow-[0_-8px_24px_rgba(15,23,42,.08)] backdrop-blur-lg sm:hidden">
        <a href="./dat-lich/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-3 text-sm font-extrabold text-white"><Scissors className="h-4 w-4" /> Spa</a>
        <a href="./dat-phong/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-3 py-3 text-sm font-extrabold text-white"><Hotel className="h-4 w-4" /> Hotel</a>
      </div>
    </div>
  );
}

export default App;
