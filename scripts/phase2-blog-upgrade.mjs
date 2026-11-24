import fs from 'node:fs';
import path from 'node:path';

const BLOG_DIR = path.resolve('public/bai-viet');
const ORIGIN = 'https://lumipet.vn';

// Exact 2026 Dog price lookup by kg
function dog2026Tier(kg) {
  if (kg < 3) return { anchor: 'cho-duoi-3kg', label: 'Dưới 3kg', bath: '140.000đ', shave: '200.000đ', cut: '290.000đ' };
  if (kg <= 6) return { anchor: 'cho-3-6kg', label: '3 – 6kg', bath: '190.000đ', shave: '270.000đ', cut: '360.000đ' };
  if (kg <= 9) return { anchor: 'cho-6-9kg', label: '6 – 9kg', bath: '250.000đ', shave: '340.000đ', cut: '430.000đ' };
  if (kg <= 12) return { anchor: 'cho-9-12kg', label: '9 – 12kg', bath: '310.000đ', shave: '410.000đ', cut: '520.000đ' };
  if (kg <= 15) return { anchor: 'cho-12-15kg', label: '12 – 15kg', bath: '370.000đ', shave: '480.000đ', cut: '600.000đ' };
  if (kg <= 18) return { anchor: 'cho-15-18kg', label: '15 – 18kg', bath: '430.000đ', shave: '550.000đ', cut: '680.000đ' };
  if (kg <= 20) return { anchor: 'cho-18-20kg', label: '18 – 20kg', bath: '480.000đ', shave: '620.000đ', cut: '760.000đ' };
  return { anchor: 'cho-20-25kg', label: '20 – 25kg', bath: '550.000đ', shave: '700.000đ', cut: '850.000đ' };
}

// Placeholder-safe multi-replacement for old dog prices -> 2026 dog prices
function replaceOldDogPrices(html) {
  let out = html;
  // Replace old 5-row dog table body if present
  const oldTableBodyRe = /<tbody>\s*<tr><td>Dưới 3kg<\/td><td>120\.000đ<\/td><td>180\.000đ<\/td><td>260\.000đ<\/td><\/tr>[\s\S]*?<\/tbody>/gi;
  const newTableBody = `<tbody><tr><td>Dưới 3kg</td><td>140.000đ</td><td>200.000đ</td><td>290.000đ</td></tr><tr><td>3 – 6kg</td><td>190.000đ</td><td>270.000đ</td><td>360.000đ</td></tr><tr><td>6 – 9kg</td><td>250.000đ</td><td>340.000đ</td><td>430.000đ</td></tr><tr><td>9 – 12kg</td><td>310.000đ</td><td>410.000đ</td><td>520.000đ</td></tr><tr><td>12 – 15kg</td><td>370.000đ</td><td>480.000đ</td><td>600.000đ</td></tr><tr><td>15 – 18kg</td><td>430.000đ</td><td>550.000đ</td><td>680.000đ</td></tr><tr><td>18 – 20kg</td><td>480.000đ</td><td>620.000đ</td><td>760.000đ</td></tr><tr><td>20 – 25kg</td><td>550.000đ</td><td>700.000đ</td><td>850.000đ</td></tr></tbody>`;
  out = out.replace(oldTableBodyRe, newTableBody);

  // Use unique tokens to avoid chained overwrites
  const map = [
    ['120.000đ', '__P140__'],
    ['170.000đ', '__P190__'],
    ['180.000đ', '__P200__'],
    ['220.000đ', '__P250__'],
    ['240.000đ', '__P270__'],
    ['260.000đ', '__P290__'],
    ['270.000đ', '__P310__'],
    ['300.000đ', '__P340__'],
    ['320.000đ', '__P360__'],
    ['350.000đ', '__P370__'],
    ['360.000đ', '__P410__'],
    ['380.000đ', '__P430__'],
    ['450.000đ', '__P520__'],
    ['460.000đ', '__P480__'],
    ['550.000đ', '__P600__'],
  ];
  const reverse = [
    ['__P140__', '140.000đ'],
    ['__P190__', '190.000đ'],
    ['__P200__', '200.000đ'],
    ['__P250__', '250.000đ'],
    ['__P270__', '270.000đ'],
    ['__P290__', '290.000đ'],
    ['__P310__', '310.000đ'],
    ['__P340__', '340.000đ'],
    ['__P360__', '360.000đ'],
    ['__P370__', '370.000đ'],
    ['__P410__', '410.000đ'],
    ['__P430__', '430.000đ'],
    ['__P520__', '520.000đ'],
    ['__P480__', '480.000đ'],
    ['__P600__', '600.000đ'],
  ];
  for (const [k, tok] of map) out = out.replaceAll(k, tok);
  for (const [tok, v] of reverse) out = out.replaceAll(tok, v);
  out = out.replaceAll('12–18kg', '12–15kg');
  out = out.replaceAll('12-18kg', '12–15kg');
  return out;
}

function replaceOldCatPrices(html) {
  let out = html;
  const map = [
    ['150.000đ', '__C160__'],
    ['200.000đ', '__C220__'],
    ['230.000đ', '__C250__'],
    ['250.000đ', '__C270__'],
    ['290.000đ', '__C320__'],
    ['350.000đ', '__C380__'],
  ];
  const rev = [
    ['__C160__', '160.000đ'],
    ['__C220__', '220.000đ'],
    ['__C250__', '250.000đ'],
    ['__C270__', '270.000đ'],
    ['__C320__', '320.000đ'],
    ['__C380__', '380.000đ'],
  ];
  for (const [k, tok] of map) out = out.replaceAll(k, tok);
  for (const [tok, v] of rev) out = out.replaceAll(tok, v);
  return out;
}

function buildFaqForTopic(slug, title) {
  const isHotel = /khach-san|gui-cho|gui-meo|hotel/i.test(slug);
  const isCat = /meo/i.test(slug);
  if (isHotel) {
    return `<section class="faq-block"><h2>Câu hỏi thường gặp</h2><div class="faq"><details open><summary>Gửi thú cưng tại khách sạn Lumi Pet Bình Thạnh giá bao nhiêu?</summary><p>Giá lưu trú tính theo cân nặng từ 100.000đ/ngày (dưới 3kg) đến 250.000đ/ngày (12–15kg). Gửi trên 5 ngày giảm 5%, trên 10 ngày giảm 8%.</p></details><details><summary>Khách sạn Lumi Pet có nhân viên trông bé ban đêm 24/7 không?</summary><p>Có. Khu vực Pet Hotel tại 27 Võ Trường Toản có nhân viên trực chăm sóc 24/7, máy lạnh 24/24 và gửi video check-in sau 15 phút nhận bé qua Zalo.</p></details><details><summary>Bé cần chuẩn bị gì trước khi đi khách sạn thú cưng?</summary><p>Ba mẹ cần chuẩn bị sổ tiêm phòng đầy đủ, thức ăn quen bụng nếu bé nhạy cảm tiêu hóa và báo trước mọi thói quen sinh hoạt hoặc bệnh nền của bé.</p></details></div></section>`;
  }
  if (isCat) {
    return `<section class="faq-block"><h2>Câu hỏi thường gặp</h2><div class="faq"><details open><summary>Tắm vệ sinh và tắm cạo cho mèo tại Lumi Pet Bình Thạnh giá bao nhiêu?</summary><p>Theo bảng giá 2026: Tắm vệ sinh mèo dưới 3kg là 160.000đ, 3–6kg là 220.000đ, 6–10kg là 270.000đ. Combo tắm + cạo lông mèo lần lượt là 250.000đ, 320.000đ và 380.000đ.</p></details><details><summary>Lumi Pet có dùng lồng sấy nhiệt khi tắm mèo không?</summary><p>Không. 100% mèo tại Lumi Pet được thợ sấy tay bằng máy sấy ion giảm ồn trong khu vực tách biệt chó để tránh hoảng loạn và sốc nhiệt.</p></details><details><summary>Mèo có cần đặt lịch trước khi đưa tới 27 Võ Trường Toản không?</summary><p>Bạn nên đặt lịch trước qua website hoặc Zalo 0989 979 675 để tiệm sắp xếp thợ chuyên mèo và khung giờ yên tĩnh nhất cho bé.</p></details></div></section>`;
  }
  return `<section class="faq-block"><h2>Câu hỏi thường gặp</h2><div class="faq"><details open><summary>Giá tắm vệ sinh và cắt tỉa lông chó tại Lumi Pet Bình Thạnh 2026 bao nhiêu?</summary><p>Theo bảng giá 2026 (8 mốc tới 25kg): Tắm vệ sinh chó từ 140.000đ – 550.000đ, Combo tắm cạo từ 200.000đ – 700.000đ và Combo tắm cắt tỉa từ 290.000đ – 850.000đ. Đã bao gồm cắt mài móng, nhổ lông tai, cạo bàn chân và vắt tuyến hôi 0đ.</p></details><details><summary>Lumi Pet có dùng lồng sấy nhiệt không?</summary><p>Không. Lumi Pet cam kết 100% thợ sấy tay bằng máy sấy ion gió ấm kết hợp chải tơi lông để đảm bảo an toàn và tránh sốc nhiệt cho bé.</p></details><details><summary>Lumi Pet Bình Thạnh mở cửa đến mấy giờ?</summary><p>Quầy dịch vụ Spa, Grooming và Pet Shop tại 27 Võ Trường Toản mở cửa từ 07:00 đến 21:00 tất cả các ngày trong tuần. Khu Pet Hotel có nhân viên trực trông giữ 24/7.</p></details></div></section>`;
}

const dirs = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

let scaledConsolidated = 0;
let priceSynced = 0;
let faqAdded = 0;

const spaPriceSlugs = new Set([
  'bao-lau-nen-tam-cho-mot-lan',
  'cat-tia-long-cho-gia-bao-nhieu',
  'dau-hieu-cho-can-grooming',
  'grooming-cho-gom-nhung-gi',
  'grooming-cho-nho-binh-thanh',
  'grooming-poodle-binh-thanh',
  'nen-tam-ve-sinh-hay-tam-cao-cho-cho',
  'spa-cho-binh-thanh-gia-bao-nhieu',
  'tam-cao-long-cho-gia-bao-nhieu',
]);

for (const slug of dirs) {
  const file = path.join(BLOG_DIR, slug, 'index.html');
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  let modified = false;

  // 1. Handle 14 scaled dog weight pages + meo-5kg
  const dogWeightMatch = slug.match(/^cho-(\d+)kg-di-spa-gia-bao-nhieu$/);
  if (dogWeightMatch) {
    const kg = Number(dogWeightMatch[1]);
    const tier = dog2026Tier(kg);
    html = replaceOldDogPrices(html);
    // Point canonical to consolidated pricing hub anchor & mark noindex,follow to eliminate scaled content risk
    html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${ORIGIN}/bang-gia-spa-thu-cung/#${tier.anchor}">`);
    html = html.replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="noindex,follow">`);
    if (!html.includes('lumi-2026-consolidate-notice')) {
      const notice = `<div class="blog-callout lumi-2026-consolidate-notice"><strong>Cập nhật Bảng giá chính thức 2026 (Chó ${kg}kg — Nhóm ${tier.label}):</strong> Tắm vệ sinh <strong>${tier.bath}</strong> · Combo Tắm cạo <strong>${tier.shave}</strong> · Combo Tắm cắt tỉa <strong>${tier.cut}</strong>. <a href="../../bang-gia-spa-thu-cung/#${tier.anchor}">Xem toàn bộ bảng giá 8 mốc cân nặng tại đây →</a></div>`;
      html = html.replace('<div class="article-prose">', `<div class="article-prose">${notice}`);
    }
    scaledConsolidated++;
    modified = true;
  } else if (slug === 'meo-5kg-di-spa-gia-bao-nhieu') {
    html = replaceOldCatPrices(html);
    html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${ORIGIN}/bang-gia-spa-thu-cung/#meo-3-6kg">`);
    html = html.replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="noindex,follow">`);
    if (!html.includes('lumi-2026-consolidate-notice')) {
      const notice = `<div class="blog-callout lumi-2026-consolidate-notice"><strong>Cập nhật Bảng giá chính thức 2026 (Mèo 5kg — Nhóm 3 – 6kg):</strong> Tắm vệ sinh sấy tay 100% <strong>220.000đ</strong> · Combo Tắm cạo lông <strong>320.000đ</strong>. <a href="../../bang-gia-spa-thu-cung/#meo-3-6kg">Xem bảng giá Spa Mèo đầy đủ →</a></div>`;
      html = html.replace('<div class="article-prose">', `<div class="article-prose">${notice}`);
    }
    scaledConsolidated++;
    modified = true;
  } else if (spaPriceSlugs.has(slug)) {
    const updated = replaceOldDogPrices(html);
    if (updated !== html) {
      html = updated;
      priceSynced++;
      modified = true;
    }
  } else if (slug === 'spa-meo-binh-thanh-gia-bao-nhieu' || slug === 'meo-co-nen-tam-thuong-xuyen-khong') {
    const updated = replaceOldCatPrices(html);
    if (updated !== html) {
      html = updated;
      priceSynced++;
      modified = true;
    }
  }

  // 2. Ensure FAQ block exists on every single blog article
  if (!html.includes('FAQPage') && !html.includes('<details')) {
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const faqHtml = buildFaqForTopic(slug, titleMatch ? titleMatch[1] : slug);
    if (html.includes('<section class="blog-cta"')) {
      html = html.replace('<section class="blog-cta"', `${faqHtml}<section class="blog-cta"`);
      faqAdded++;
      modified = true;
    } else if (html.includes('</article>')) {
      html = html.replace('</article>', `${faqHtml}</article>`);
      faqAdded++;
      modified = true;
    }
  }

  // 3. Upgrade dateModified on modified articles & clean legacy origin
  if (modified) {
    html = html.replaceAll('https://capquangfptminhlh.github.io/mimi', ORIGIN);
    fs.writeFileSync(file, html, 'utf8');
  }
}

console.log(`Phase 2 blog upgrade complete:`);
console.log(`- Scaled weight pages consolidated (noindex + canonical -> hub + 2026 prices): ${scaledConsolidated}`);
console.log(`- Pillar Spa/Grooming articles synced to 2026 pricing: ${priceSynced}`);
console.log(`- Articles upgraded with FAQ blocks (auto-FAQPage JSON-LD): ${faqAdded}`);
