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
  PawPrint,
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
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
              <PawPrint className="h-6 w-6" />
            </span>
            <span className="min-w-0 leading-tight">
              <strong className="block truncate text-xl font-extrabold tracking-tight text-slate-900">Lumi Pet</strong>
              <small className="block truncate text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-500">Spa & Hotel 24/7</small>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {navItems.map(([label, href]) => (
              <a key={href} className="rounded-xl px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-orange-50 hover:text-orange-600" href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href="tel:0989979675" className="hidden rounded-xl border border-orange-100 px-3 py-2 text-sm font-extrabold text-slate-700 transition hover:border-orange-300 hover:text-orange-600 md:inline-flex md:items-center md:gap-2">
              <Phone className="h-4 w-4 text-orange-500" />
              0989 979 675
            </a>
            <a href="./dat-lich/" className="hidden items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-teal-100 transition hover:-translate-y-0.5 hover:bg-teal-700 sm:inline-flex">
              <CalendarDays className="h-4 w-4" />
              Đặt lịch
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-white text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 lg:hidden"
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
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-orange-100 pt-3">
                <a href="tel:0989979675" className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-3 py-3 text-sm font-extrabold text-orange-600">
                  <Phone className="h-4 w-4" /> Gọi shop
                </a>
                <a href="./dat-lich/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-3 py-3 text-sm font-extrabold text-white">
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
              <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-6 shadow-2xl shadow-orange-100/80 sm:rounded-[36px] sm:p-8">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-orange-100/70" />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
                    <PawPrint className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 text-2xl font-black text-slate-950">Thông tin cửa hàng</h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex gap-3 rounded-2xl bg-orange-50/70 p-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                      <div><strong className="block text-sm text-slate-900">27 Võ Trường Toản</strong><span className="text-sm font-medium text-slate-600">Bình Thạnh, TP.HCM</span></div>
                    </div>
                    <a href="tel:0989979675" className="flex gap-3 rounded-2xl bg-teal-50/80 p-4 transition hover:bg-teal-100">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                      <div><strong className="block text-sm text-slate-900">0989 979 675</strong><span className="text-sm font-medium text-slate-600">Hotline liên hệ</span></div>
                    </a>
                    <div className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                      <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                      <div><strong className="block text-sm text-slate-900">Mở cửa 07:00 – 21:00</strong><span className="text-sm font-medium text-slate-600">Hotel có máy lạnh 24/24</span></div>
                    </div>
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
            <a href="./spa-thu-cung-binh-thanh/" className="group rounded-[28px] border border-orange-100 bg-orange-50/40 p-7 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100 sm:rounded-[32px] sm:p-9">
              <div className="flex items-start justify-between gap-5"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white"><Scissors className="h-7 w-7" /></span><ArrowRight className="h-6 w-6 text-orange-400 transition group-hover:translate-x-1" /></div>
              <h3 className="mt-7 text-2xl font-black text-slate-950">Spa & Grooming</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">Tắm vệ sinh, tắm + cạo, tắm + cắt tỉa cho chó; tắm vệ sinh và tắm + cạo cho mèo.</p>
              <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold text-orange-600 shadow-sm">Từ 120.000đ</div>
            </a>
            <a href="./khach-san-thu-cung-binh-thanh/" className="group rounded-[28px] border border-teal-100 bg-teal-50/50 p-7 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100 sm:rounded-[32px] sm:p-9">
              <div className="flex items-start justify-between gap-5"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white"><Hotel className="h-7 w-7" /></span><ArrowRight className="h-6 w-6 text-teal-500 transition group-hover:translate-x-1" /></div>
              <h3 className="mt-7 text-2xl font-black text-slate-950">Khách sạn thú cưng</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">Khu lưu trú riêng, vệ sinh sạch sẽ, máy lạnh 24/24, bữa ăn theo menu và video tương tác mỗi ngày.</p>
              <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold text-teal-700 shadow-sm">Từ 100.000đ/ngày</div>
            </a>
          </div>
        </section>

        <section className="border-y border-orange-100 bg-[#fffaf3]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Bảng giá chó</span>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Giá Spa theo cân nặng</h2>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">Giá dịch vụ cơ bản; phụ thu nếu có sẽ được shop xác nhận trước khi làm.</p>
              </div>
              <a href="./bang-gia-spa-thu-cung/" className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-600">Xem bảng giá đầy đủ <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-8 overflow-x-auto rounded-[24px] border border-orange-100 bg-white shadow-sm">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead className="bg-orange-50 text-slate-900"><tr><th className="p-4">Cân nặng</th><th className="p-4">Tắm vệ sinh</th><th className="p-4">Tắm + cạo</th><th className="p-4">Tắm + cắt tỉa</th></tr></thead>
                <tbody>{dogPrices.map(row => <tr key={row[0]} className="border-t border-orange-100">{row.map((cell, index) => <td key={`${row[0]}-${index}`} className={`p-4 ${index === 0 ? 'font-extrabold text-slate-900' : 'font-bold text-slate-600'}`}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-teal-600">Quy trình Spa</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Combo chăm sóc 10 bước</h2>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-600">Quy trình hiển thị theo bảng dịch vụ Lumi Pet, giúp khách biết trước các bước chăm sóc cơ bản.</p>
            <a href="./dat-lich/" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-teal-100">Đặt lịch Spa <ArrowRight className="h-4 w-4" /></a>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {spaSteps.map((step, index) => <li key={step} className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xs font-black text-orange-600">{index + 1}</span><span className="pt-1 text-sm font-bold text-slate-700">{step}</span></li>)}
          </ol>
        </section>

        <section className="border-y border-teal-100 bg-teal-50/50">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-teal-600">Pet Hotel</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Giá lưu trú theo cân nặng</h2>
              <div className="mt-6 grid gap-3">
                {hotelPrices.map(([weight, price]) => <div key={weight} className="flex items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-white p-4"><strong className="text-sm text-slate-900">{weight}</strong><span className="text-sm font-black text-teal-700">{price}</span></div>)}
              </div>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-white p-7 shadow-sm sm:rounded-[32px] sm:p-9 lg:col-span-7">
              <h3 className="text-2xl font-black text-slate-950">Lưu trú dài ngày</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-orange-50 p-5"><strong className="block text-2xl font-black text-orange-600">5%</strong><span className="mt-1 block text-sm font-bold text-slate-600">Giảm khi ở trên 5 ngày</span></div>
                <div className="rounded-2xl bg-teal-50 p-5"><strong className="block text-2xl font-black text-teal-700">8%</strong><span className="mt-1 block text-sm font-bold text-slate-600">Giảm khi ở trên 10 ngày</span></div>
              </div>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-2">
                {['Khu lưu trú riêng', 'Vệ sinh sạch sẽ', 'Máy lạnh 24/24', 'Bữa ăn theo menu', 'Video tương tác mỗi ngày', 'Trên 15kg liên hệ báo giá'].map(item => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />{item}</li>)}
              </ul>
              <a href="./dat-phong/" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-100">Book phòng Hotel <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[30px] bg-slate-950 px-6 py-10 text-white sm:rounded-[36px] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div><span className="text-xs font-black uppercase tracking-[0.16em] text-orange-300">Lumi Pet Bình Thạnh</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Chọn dịch vụ, xem giá rồi gửi lịch ngay</h2><p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-300">Shop sẽ nhận thông tin booking và liên hệ lại để xác nhận.</p></div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0"><a href="./dat-lich/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white">Đặt lịch Spa</a><a href="./dat-phong/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-slate-900">Book Hotel</a></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-100 bg-[#fffaf3] pb-24 sm:pb-0">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white"><PawPrint className="h-5 w-5" /></span><div><strong className="block text-lg font-black text-slate-950">Lumi Pet</strong><span className="text-xs font-bold text-slate-500">Spa & Hotel 24/7</span></div></div><p className="mt-4 text-sm font-medium leading-6 text-slate-600">27 Võ Trường Toản, Bình Thạnh, TP.HCM</p></div>
          <div><strong className="text-sm font-black text-slate-950">Liên hệ</strong><div className="mt-4 space-y-2 text-sm font-bold text-slate-600"><a className="block hover:text-orange-600" href="tel:0989979675">0989 979 675</a><span className="block">07:00 – 21:00 mỗi ngày</span><a className="inline-flex items-center gap-2 hover:text-orange-600" href="https://www.instagram.com/lumipet.spa/" rel="noreferrer"><Instagram className="h-4 w-4" /> @lumipet.spa</a></div></div>
          <div><strong className="text-sm font-black text-slate-950">Dịch vụ</strong><div className="mt-4 grid gap-2 text-sm font-bold text-slate-600"><a href="./spa-thu-cung-binh-thanh/" className="hover:text-orange-600">Spa & Grooming</a><a href="./khach-san-thu-cung-binh-thanh/" className="hover:text-orange-600">Khách sạn thú cưng</a><a href="./bang-gia-spa-thu-cung/" className="hover:text-orange-600">Bảng giá</a></div></div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-orange-100 bg-white/95 p-2 shadow-2xl backdrop-blur-xl sm:hidden">
        <a href="./dat-lich/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-3 text-sm font-extrabold text-white"><Scissors className="h-4 w-4" /> Đặt Spa</a>
        <a href="./dat-phong/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-3 py-3 text-sm font-extrabold text-white"><Hotel className="h-4 w-4" /> Book Hotel</a>
      </div>
    </div>
  );
}

export default App;
