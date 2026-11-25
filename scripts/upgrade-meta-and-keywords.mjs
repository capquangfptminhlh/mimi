import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');

const updates = [
  {
    file: 'index.html',
    title: 'Lumi Pet | Tắm Chó Mèo, Cắt Tỉa & Hotel Phường Gia Định',
    desc: 'Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh): tắm chó từ 140k, tắm mèo từ 160k, cắt tỉa từ 290k, gửi chó mèo Hotel 24/7 từ 100k. Đặt lịch ngay.',
  },
  {
    file: 'public/spa-thu-cung-binh-thanh/index.html',
    title: 'Spa Thú Cưng, Tắm Chó Mèo Phường Gia Định Bình Thạnh',
    desc: 'Tắm chó từ 140k, tắm mèo từ 160k tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh). Sạch sẽ, cắt móng, vệ sinh tai, sấy tay không gây stress.',
  },
  {
    file: 'public/grooming-cho-meo-binh-thanh/index.html',
    title: 'Cắt Tỉa & Cạo Lông Chó Mèo Phường Gia Định Bình Thạnh',
    desc: 'Grooming cắt tỉa lông chó từ 290k, tắm cạo chó từ 200k, cạo lông mèo từ 250k tại Lumi Pet Phường Gia Định, Bình Thạnh. Tạo kiểu Poodle, Corgi, Phốc sóc.',
  },
  {
    file: 'public/khach-san-thu-cung-binh-thanh/index.html',
    title: 'Khách Sạn Thú Cưng, Gửi Chó Mèo Phường Gia Định Bình Thạnh',
    desc: 'Gửi chó mèo 24/7 tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh) từ 100k/ngày. Phòng riêng máy lạnh 24/24, quay video mỗi ngày, giảm đến 8%.',
  },
  {
    file: 'public/bang-gia-spa-thu-cung/index.html',
    title: 'Bảng Giá Tắm Chó Mèo & Hotel 2026 | Lumi Pet Gia Định',
    desc: 'Bảng giá 2026 tại Lumi Pet Phường Gia Định (Bình Thạnh): tắm chó 140k–550k, cạo 200k–700k, cắt tỉa 290k–850k; tắm mèo 160k–270k; Hotel 100k–250k/ngày.',
  },
  {
    file: 'public/dat-lich/index.html',
    title: 'Đặt Lịch Tắm Chó Mèo Phường Gia Định Bình Thạnh | Lumi',
    desc: 'Đặt lịch tắm chó, tắm mèo và cắt tỉa lông online tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh). Tự tính giá 2026, không phải chờ lâu.',
  },
  {
    file: 'public/dat-phong/index.html',
    title: 'Book Phòng Khách Sạn Chó Mèo Phường Gia Định | Lumi Pet',
    desc: 'Đặt phòng gửi chó mèo 24/7 tại Lumi Pet Phường Gia Định (Bình Thạnh). Tự tính giá theo cân nặng từ 100k/ngày, tự động giảm 5% (>5 ngày), 8% (>10 ngày).',
  },
  {
    file: 'public/gioi-thieu/index.html',
    title: 'Giới Thiệu Lumi Pet Phường Gia Định Bình Thạnh (Fact Sheet)',
    desc: 'Hồ sơ chính thức Lumi Pet 27 Võ Trường Toản, Phường Gia Định (P.2 Bình Thạnh cũ): Spa tắm chó mèo 08:00–21:00, Hotel 24/7, đội ngũ Groomer & ranh giới.',
  },
  {
    file: 'public/lien-he/index.html',
    title: 'Liên Hệ & Chỉ Đường Lumi Pet 27 Võ Trường Toản Gia Định',
    desc: 'Địa chỉ Lumi Pet: 27 Võ Trường Toản, Phường Gia Định (P.2 Bình Thạnh cũ), gần Chợ Bà Chiểu & Cầu Bông. Hotline/Zalo 0989 979 675. Spa 08:00–21:00.',
  },
  {
    file: 'public/bai-viet/index.html',
    title: 'Kiến Thức Tắm Chó Mèo, Grooming & Hotel | Lumi Pet',
    desc: 'Cẩm nang tắm chó, tắm mèo, cắt tỉa lông và gửi khách sạn thú cưng từ đội ngũ Groomer Lumi Pet Phường Gia Định, Bình Thạnh. Trả lời thẳng, dễ áp dụng.',
  },
];

for (const u of updates) {
  if (u.title.length > 62) throw new Error(`Title too long (${u.title.length}): ${u.file}`);
  if (u.desc.length < 130 || u.desc.length > 160) throw new Error(`Desc length out of range (${u.desc.length}): ${u.file}`);

  const fullPath = path.join(ROOT, u.file);
  let html = fs.readFileSync(fullPath, 'utf8');
  const escTitle = u.title.replaceAll('&', '&amp;');
  const escDesc = u.desc.replaceAll('&', '&amp;');

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escTitle}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escDesc}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escTitle}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escDesc}" />`);

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`[OK] ${u.file} | Title: ${u.title.length}c | Desc: ${u.desc.length}c`);
}
