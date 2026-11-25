import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');
const LEGACY_ORIGIN = 'https://capquangfptminhlh.github.io/mimi';
const PRODUCTION_ORIGIN = 'https://lumipet.vn';
const RELEASE = (process.env.GITHUB_SHA || process.env.VITE_RELEASE_SHA || 'local').slice(0, 12);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else if (entry.isFile() && entry.name === 'index.html') files.push(absolute);
  }
  return files;
}

function prefixFor(relativeFile) {
  const dir = path.posix.dirname(relativeFile.replaceAll(path.sep, '/'));
  if (dir === '.') return './';
  const depth = dir.split('/').filter(Boolean).length;
  return '../'.repeat(depth);
}

function currentKey(relativeFile) {
  const normalized = relativeFile.replaceAll(path.sep, '/').toLowerCase();
  if (normalized.includes('spa-thu-cung-') || normalized.includes('spa-cho-meo-don-noel-tet-binh-thanh') || normalized.includes('tam-cho-phuong-gia-dinh') || normalized.includes('tam-meo-phuong-gia-dinh') || normalized.includes('cat-tia-long-cho-phuong-gia-dinh')) return 'spa';
  if (normalized.includes('khach-san-thu-cung-binh-thanh') || normalized.includes('khach-san-thu-cung-phuong-gia-dinh') || normalized.includes('khach-san-thu-cung-tet-binh-thanh')) return 'hotel';
  if (normalized.includes('bang-gia-spa-thu-cung')) return 'price';
  if (normalized.includes('gioi-thieu')) return 'about';
  if (normalized.includes('lien-he')) return 'contact';
  if (normalized.includes('bai-viet')) return 'blog';
  return '';
}

const assetHref = (prefix, file) => `${prefix}${file}?v=${RELEASE}`;

const iconPhone = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z"/></svg>';
const iconMessage = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>';
const iconCalendar = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/></svg>';

function renderHomepagePrerender(prefix) {
  const canonicalHeader = headerMarkup(prefix, 'home');
  return `<div class="lumi-prerender-content">${canonicalHeader}<main class="shell lumi-home-prerender">
<section class="hero"><div class="hero-copy"><div class="eyebrow">Thương hiệu Spa & Hotel uy tín Bình Thạnh</div>
<h1>Lumi Pet Phường Gia Định (Bình Thạnh) | Tắm Chó Mèo, Cắt Tỉa &amp; Hotel 24/7</h1>
<p class="lead">Cơ sở Spa &amp; Khách sạn thú cưng uy tín tại 27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM. Chuyên tắm chó, tắm mèo sấy tay 100%, cắt tỉa lông grooming và gửi chó mèo khách sạn phòng riêng máy lạnh 24/24.</p>
<div class="answer"><strong>Tắm chó, tắm mèo Phường Gia Định (Bình Thạnh) giá bao nhiêu?</strong><br>Tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định: tắm vệ sinh chó từ 140.000đ (8 mốc tới 25kg); tắm vệ sinh mèo từ 160.000đ (sấy tay 100%); tắm + cạo chó từ 200.000đ, mèo từ 250.000đ; cắt tỉa lông chó từ 290.000đ; gửi chó mèo Hotel 24/7 từ 100.000đ/ngày.</div>
<p style="margin-top:12px;font-size:13px;"><strong>Dịch vụ tại Phường Gia Định:</strong> <a href="${prefix}tam-cho-phuong-gia-dinh/">Tắm chó Phường Gia Định</a> · <a href="${prefix}tam-meo-phuong-gia-dinh/">Tắm mèo Phường Gia Định</a> · <a href="${prefix}cat-tia-long-cho-phuong-gia-dinh/">Cắt tỉa lông chó Phường Gia Định</a> · <a href="${prefix}khach-san-thu-cung-phuong-gia-dinh/">Khách sạn thú cưng Phường Gia Định</a></p>
<p style="margin-top:6px;font-size:13px;"><strong>Phục vụ nhanh các phường &amp; quận lân cận:</strong> <a href="${prefix}spa-thu-cung-phuong-binh-thanh/">Phường Bình Thạnh</a> · <a href="${prefix}spa-thu-cung-phuong-binh-loi-trung/">Phường Bình Lợi Trung</a> · <a href="${prefix}spa-thu-cung-phuong-thanh-my-tay/">Phường Thạnh Mỹ Tây</a> · <a href="${prefix}spa-thu-cung-phuong-cau-kieu-phu-nhuan/">Phường Cầu Kiệu (Phú Nhuận)</a> · <a href="${prefix}spa-thu-cung-phuong-tan-dinh-quan-1/">Phường Tân Định (Quận 1)</a></p>
<p style="margin-top:6px;font-size:13px;"><strong>Mùa lễ Noel 2026 &amp; Tết 2027:</strong> <a href="${prefix}khach-san-thu-cung-tet-binh-thanh/">Khách sạn thú cưng &amp; Gửi chó mèo Tết 2027</a> · <a href="${prefix}spa-cho-meo-don-noel-tet-binh-thanh/">Tắm &amp; Cắt tỉa chó mèo đón Noel, Tết</a></p>
</div><aside class="hero-side"><div class="eyebrow">Đặt lịch & Báo giá online</div><strong>Chọn cân nặng → xem ngay</strong>
<p><a class="btn btn-green" href="${prefix}dat-lich/">Đặt lịch Spa trực tuyến</a></p>
<p><a class="btn btn-secondary" href="${prefix}dat-phong/">Book phòng Hotel 24/7</a></p>
<p><a class="btn btn-secondary" href="${prefix}bang-gia-spa-thu-cung/">Xem toàn bộ bảng giá</a></p>
</aside></section>

<div class="grid">
<section class="panel span-12">
<h2>Các dịch vụ chăm sóc thú cưng chính tại Lumi Pet</h2>
<div class="feature-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-top:12px;">
<div style="background:#f8fafc;padding:16px;border-radius:16px;border:1px solid #e2e8f0;">
<h3>🛁 1. Spa & Tắm Vệ Sinh 10 Bước</h3>
<p>Quy trình 10 bước chuẩn an toàn: kiểm tra lông da, nhổ lông tai khử mùi, cắt & mài bo tròn móng, cạo lông bàn chân và hậu môn, vắt tuyến hôi phòng viêm, tắm xả 2 lần thảo dược hữu cơ, sấy tay 100% không dùng lồng sấy nhiệt, xịt serum dưỡng lông mềm mượt.</p>
<p><strong>Giá tham khảo:</strong> Chó từ 140.000đ | Mèo từ 160.000đ theo cân nặng.</p>
<p><a href="${prefix}spa-thu-cung-binh-thanh/">Chi tiết dịch vụ Spa →</a></p>
</div>
<div style="background:#f8fafc;padding:16px;border-radius:16px;border:1px solid #e2e8f0;">
<h3>✂️ 2. Grooming Cắt Tỉa & Cạo Lông</h3>
<p>Cắt tỉa tạo kiểu nghệ thuật theo giống (Poodle phom gấu teddy, Corgi, Pomeranian, Phốc sóc...) và combo tắm cạo sạch sẽ mát mẻ cho mùa nóng hoặc hỗ trợ điều trị da liễu.</p>
<p><strong>Giá tham khảo:</strong> Tắm + cạo từ 200.000đ | Cắt tỉa tạo kiểu từ 290.000đ.</p>
<p><a href="${prefix}grooming-cho-meo-binh-thanh/">Chi tiết dịch vụ Grooming →</a></p>
</div>
<div style="background:#f8fafc;padding:16px;border-radius:16px;border:1px solid #e2e8f0;">
<h3>🏨 3. Khách Sạn Thú Cưng (Pet Hotel 24/7)</h3>
<p>Phòng kính riêng tư sạch sẽ khử trùng tia cực tím, điều hòa 24/24 mát mẻ, thực đơn tươi 3 bữa/ngày, sân chơi vận động và quay video tương tác gửi Zalo mỗi ngày.</p>
<p><strong>Giá tham khảo:</strong> Từ 100.000đ/ngày. Giảm 5% khi gửi trên 5 ngày, giảm 8% trên 10 ngày.</p>
<p><a href="${prefix}khach-san-thu-cung-binh-thanh/">Chi tiết dịch vụ Khách sạn →</a></p>
</div>
</div>
</section>

<section class="panel span-12" style="background:#fff;border:2px solid #fed7aa;border-radius:20px;padding:20px;">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
<span style="font-size:18px;">💡</span>
<h3 style="margin:0;font-size:14px;font-weight:900;text-transform:uppercase;color:#1e293b;">Các gói phụ phí thường gặp trên thị trường (~190.000đ) — Lumi Pet Đã Bao Gồm 0đ Trọn Gói:</h3>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;font-size:12.5px;">
<div style="background:#f8fafc;padding:10px 14px;border-radius:12px;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;"><span>✂️ Cắt & dũa mài tròn móng</span><strong style="color:#059669;background:#ecfdf5;padding:2px 8px;border-radius:6px;">Trọn gói 0đ</strong></div>
<div style="background:#f8fafc;padding:10px 14px;border-radius:12px;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;"><span>👂 Nhổ lông tai & khử mùi</span><strong style="color:#059669;background:#ecfdf5;padding:2px 8px;border-radius:6px;">Trọn gói 0đ</strong></div>
<div style="background:#f8fafc;padding:10px 14px;border-radius:12px;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;"><span>🐾 Cạo lông đệm chân & bụng</span><strong style="color:#059669;background:#ecfdf5;padding:2px 8px;border-radius:6px;">Trọn gói 0đ</strong></div>
<div style="background:#f8fafc;padding:10px 14px;border-radius:12px;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;"><span>💧 Vắt tuyến hôi phòng viêm</span><strong style="color:#059669;background:#ecfdf5;padding:2px 8px;border-radius:6px;">Trọn gói 0đ</strong></div>
<div style="background:#f8fafc;padding:10px 14px;border-radius:12px;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;grid-column:1 / -1;"><span>🌬️ Thợ sấy tay 100% (Không dùng lồng sấy nhiệt hấp nóng bé)</span><strong style="color:#ea580c;background:#fff7ed;padding:2px 8px;border-radius:6px;">Tiêu chuẩn vàng Lumi Pet</strong></div>
</div>
</section>

<section class="panel span-12">
<h2>Câu hỏi thường gặp về Lumi Pet Spa & Hotel</h2>
<details><summary>Lumi Pet ở đâu và giờ hoạt động thế nào?</summary><p>Lumi Pet toạ lạc tại 27 Võ Trường Toản, Phường 2, Quận Bình Thạnh, TP. Hồ Chí Minh. Giờ mở cửa dịch vụ Spa & Shop: 07:00 – 21:00 hàng ngày (kể cả thứ Bảy, Chủ nhật). Dịch vụ Khách sạn thú cưng có nhân viên trực và bảo vệ trông nom 24/7.</p></details>
<details><summary>Đi tắm Spa cho chó mèo có cần đặt lịch trước không?</summary><p>Bạn nên đặt lịch trước qua website hoặc Zalo 0989 979 675 để được giữ chỗ khung giờ đẹp và không phải chờ đợi. Đặt trước qua Web còn được ưu tiên xếp thợ làm ngay.</p></details>
<details><summary>Lumi Pet có dùng lồng sấy nhiệt không?</summary><p>Tuyệt đối KHÔNG. Lumi Pet cam kết 100% thợ sấy tay bằng máy sấy chuyên dụng ion ấm, vừa sấy vừa chải tơi lông và quan sát biểu cảm của bé, đảm bảo an toàn và tránh gây sốc nhiệt cho thú cưng.</p></details>
<details><summary>Khách sạn thú cưng có camera và gửi video không?</summary><p>Có. Lumi Pet quay video tương tác gửi trực tiếp qua Zalo mỗi ngày để ba mẹ yên tâm theo dõi tình hình ăn uống và nghỉ ngơi của bé.</p></details>
</section>
</div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA & HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 07:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="${prefix}dat-lich/">Đặt lịch Spa trực tuyến →</a></div></div></footer></div>`;
}

function headerMarkup(prefix, activeKey) {
  const nav = [
    ['Spa', 'spa-thu-cung-binh-thanh/', 'spa'],
    ['Hotel', 'khach-san-thu-cung-binh-thanh/', 'hotel'],
    ['Bảng giá', 'bang-gia-spa-thu-cung/', 'price'],
    ['Giới thiệu', 'gioi-thieu/', 'about'],
    ['Liên hệ', 'lien-he/', 'contact'],
    ['Kiến thức', 'bai-viet/', 'blog'],
  ].map(([label, href, key]) => `<a href="${prefix}${href}"${activeKey === key ? ' aria-current="page"' : ''}${key === 'blog' ? ' data-lumi-blog-link="true"' : ''}>${label}</a>`).join('');

  return `<header class="lumi-top lumi-unified-header" data-lumi-unified-header="true" data-lumi-release="${RELEASE}"><div class="lumi-top-inner"><a class="lumi-brand" href="${prefix}" aria-label="Lumi Pet - Trang chủ"><img class="lumi-brand-mark" src="${assetHref(prefix, 'lumi-brand-mark.svg')}" alt="" aria-hidden="true"><span class="lumi-brand-copy"><strong>Lumi Pet</strong><small>Spa & Hotel 24/7</small></span></a><nav class="main-nav" aria-label="Điều hướng chính">${nav}</nav><div class="lumi-header-actions"><a class="lumi-header-action lumi-header-call lumi-desktop-action" href="tel:0989979675">${iconPhone}<span>Gọi ngay</span></a><a class="lumi-header-action lumi-header-zalo lumi-desktop-action" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">${iconMessage}<span>Zalo</span></a><a class="lumi-header-action lumi-header-book" href="${prefix}dat-lich/">${iconCalendar}<span>Đặt lịch</span></a><button type="button" class="lumi-mobile-toggle" aria-label="Mở menu" aria-expanded="false">☰</button></div></div><nav class="lumi-mobile-nav" aria-label="Điều hướng mobile">${nav}<div class="lumi-mobile-actions"><a class="call" href="tel:0989979675">Gọi</a><a class="zalo" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Zalo</a><a class="book" href="${prefix}dat-lich/">Đặt lịch</a></div></nav></header>`;
}

function cacheBustFixedAssets(html) {
  return html.replace(
    /((?:href|src)="[^"]*(?:lumi-ui\.js|lumi-blog\.js|lumi-booking\.js|lumi-seo\.css|lumi-shell\.css|lumi-brand-mark\.svg|favicon\.svg))(?:\?[^"\s>]*)?"/g,
    `$1?v=${RELEASE}"`,
  );
}

function normalizeHead(html, prefix) {
  let next = html.replaceAll(LEGACY_ORIGIN, PRODUCTION_ORIGIN);
  next = next.replaceAll(
    '"areaServed":{"@type":"AdministrativeArea","name":"Bình Thạnh, TP. Hồ Chí Minh"}',
    '"areaServed":[{"@type":"AdministrativeArea","name":"Phường Gia Định, TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Bình Thạnh, TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Bình Lợi Trung, TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Phú Nhuận, TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Đức Nhuận, TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Tân Định (Quận 1), TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường Sài Gòn (Quận 1), TP. Hồ Chí Minh"},{"@type":"AdministrativeArea","name":"Phường An Khánh (Thảo Điền, Quận 2), TP. Hồ Chí Minh"}]'
  );
  next = cacheBustFixedAssets(next);

  const releaseMeta = `<meta name="lumi-release" content="${RELEASE}"><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">`;
  if (!next.includes('name="lumi-release"')) next = next.replace('</head>', `${releaseMeta}</head>`);

  const favicon = `<link rel="icon" type="image/svg+xml" href="${assetHref(prefix, 'favicon.svg')}"><link rel="shortcut icon" href="${assetHref(prefix, 'favicon.svg')}">`;
  if (!next.includes('rel="icon"')) next = next.replace('</head>', `<meta name="theme-color" content="#f97316">${favicon}</head>`);
  else if (!next.includes('name="theme-color"')) next = next.replace('</head>', '<meta name="theme-color" content="#f97316"></head>');

  if (!next.includes('property="og:image"')) {
    next = next.replace('</head>', `<meta property="og:image" content="${PRODUCTION_ORIGIN}/images/bang-gia-spa-grooming-lumi-pet.jpg"></head>`);
  }

  // Phase 1 Local SEO: inject unified LocalBusiness entity graph on every static page that doesn't define it yet
  if (!next.includes('"@type":["LocalBusiness","PetStore"]') && !next.includes('"@type": ["LocalBusiness", "PetStore"]')) {
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'PetStore'],
      '@id': `${PRODUCTION_ORIGIN}/#business`,
      name: 'Lumi Pet Shop – Spa & Hotel 24/7 Thú Cưng Bình Thạnh',
      alternateName: 'Lumi Pet Bình Thạnh',
      description: 'Cơ sở Spa tắm vệ sinh, Grooming cắt tỉa & cạo lông và Khách sạn thú cưng (Pet Hotel) tại 27 Võ Trường Toản, Bình Thạnh, TP.HCM. Spa mở cửa 07:00–21:00 mỗi ngày; Hotel trông giữ bé 24/7. Không phải phòng khám thú y.',
      url: `${PRODUCTION_ORIGIN}/`,
      telephone: '+84989979675',
      priceRange: '100.000₫ – 850.000₫',
      image: `${PRODUCTION_ORIGIN}/images/bang-gia-spa-grooming-lumi-pet.jpg`,
      logo: `${PRODUCTION_ORIGIN}/lumi-brand-mark.svg`,
      hasMap: 'https://www.google.com/maps/place/?q=place_id:ChIJQQ1vLgApdTERzUEEgAktmsg',
      geo: { '@type': 'GeoCoordinates', latitude: 10.79972, longitude: 106.69751 },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ)',
        addressLocality: 'Phường Gia Định, Bình Thạnh',
        addressRegion: 'TP. Hồ Chí Minh',
        postalCode: '700000',
        addressCountry: 'VN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '21:00',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Phường Gia Định, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận Bình Thạnh, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận Phú Nhuận, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận Gò Vấp, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận 1, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Phường An Khánh (Thảo Điền, TP. Thủ Đức), TP. Hồ Chí Minh' },
      ],
      sameAs: [
        'https://www.facebook.com/lumipet.spa',
        'https://www.instagram.com/lumipet.spa/',
        'https://zalo.me/0989979675',
        'https://www.google.com/maps/place/?q=place_id:ChIJQQ1vLgApdTERzUEEgAktmsg',
      ],
      makesOffer: [
        { '@type': 'Offer', name: 'Tắm vệ sinh chó', priceSpecification: { '@type': 'PriceSpecification', minPrice: 140000, maxPrice: 550000, priceCurrency: 'VND' } },
        { '@type': 'Offer', name: 'Tắm vệ sinh mèo', priceSpecification: { '@type': 'PriceSpecification', minPrice: 160000, maxPrice: 270000, priceCurrency: 'VND' } },
        { '@type': 'Offer', name: 'Combo tắm + cạo lông chó mèo', priceSpecification: { '@type': 'PriceSpecification', minPrice: 200000, maxPrice: 700000, priceCurrency: 'VND' } },
        { '@type': 'Offer', name: 'Combo tắm + cắt tỉa chó', priceSpecification: { '@type': 'PriceSpecification', minPrice: 290000, maxPrice: 850000, priceCurrency: 'VND' } },
        { '@type': 'Offer', name: 'Khách sạn thú cưng 24/7', priceSpecification: { '@type': 'PriceSpecification', minPrice: 100000, maxPrice: 250000, priceCurrency: 'VND' } },
      ],
    };
    next = next.replace('</head>', `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script></head>`);
  }

  const googleAdsTag = `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17749467170"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17749467170');</script>`;
  if (!next.includes('AW-17749467170')) next = next.replace('</head>', `${googleAdsTag}</head>`);

  if (!next.includes('lumi-ui.js')) {
    const uiScript = `<script src="${assetHref(prefix, 'lumi-ui.js')}" defer></script>`;
    if (!next.includes('</body>')) throw new Error('Static shell cannot inject lumi-ui.js because </body> is missing.');
    next = next.replace('</body>', `${uiScript}</body>`);
  }

  return cacheBustFixedAssets(next);
}

function ensureFaqSchema(html) {
  if (html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"')) return html;
  const regex = /<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>\s*<\/details>/gi;
  const items = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim();
    const a = match[2].replace(/<[^>]+>/g, '').trim();
    if (q && a) {
      items.push({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      });
    }
  }
  if (!items.length) return html;
  const schema = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items
  })}</script>`;
  return html.replace('</head>', `${schema}</head>`);
}

function ensureArticleCta(html, prefix, relative) {
  const normalized = relative.replaceAll(path.sep, '/');
  if (!/^bai-viet\/[^/]+\/index\.html$/.test(normalized)) return html;
  let next = html;
  if (!next.includes('lumi-eeat-reviewer') && next.includes('</article>')) {
    const reviewerBox = `<section class="lumi-eeat-reviewer" style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;font-size:13.5px;line-height:1.6;"><strong style="color:#0f172a;">Kiểm duyệt chuyên môn:</strong> Đội ngũ Lead Groomer &amp; Chăm sóc Lưu trú <strong>Lumi Pet Bình Thạnh</strong> (27 Võ Trường Toản, Phường Gia Định). Nội dung mang tính hướng dẫn chăm sóc Spa &amp; Hotel thực tế — <em>Lumi Pet không phải phòng khám thú y; các trường hợp bệnh lý cấp tính cần thăm khám bác sĩ thú y.</em> <a href="${prefix}gioi-thieu/#doi-ngu" style="color:#ea580c;font-weight:700;">Xem hồ sơ đội ngũ &amp; Fact Sheet →</a></section>`;
    next = next.replace('</article>', `${reviewerBox}</article>`);
  }
  if (!next.includes('blog-cta')) {
    if (!next.includes('</article>')) {
      throw new Error(`Static shell cannot inject article CTA because ${normalized} has no </article> tag.`);
    }
    const cta = `<section class="blog-cta" data-lumi-auto-cta="true"><h2>Cần tư vấn dịch vụ phù hợp cho thú cưng?</h2><p>Gửi cân nặng, tình trạng lông và nhu cầu chăm sóc để Lumi Pet tư vấn trước khi bạn chốt lịch.</p><div class="blog-cta-actions"><a class="btn" href="${prefix}dat-lich/">Đặt lịch</a><a class="btn btn-secondary" href="tel:0989979675">Gọi Lumi Pet</a><a class="btn btn-secondary" href="https://zalo.me/0989979675">Nhắn Zalo</a></div></section>`;
    next = next.replace('</article>', `${cta}</article>`);
  }
  return next;
}

function requireBuiltMarker(html, relative, marker, label) {
  if (!html.includes(marker)) {
    throw new Error(`Static shell QA failed: ${relative} is missing ${label}: ${marker}`);
  }
}

const files = await walk(DIST);
let updated = 0;

for (const file of files) {
  const relative = path.relative(DIST, file);
  const normalizedRelative = relative.replaceAll(path.sep, '/');
  const prefix = prefixFor(relative);
  let html = normalizeHead(await readFile(file, 'utf8'), prefix);
  html = ensureFaqSchema(html);
  html = ensureArticleCta(html, prefix, relative);

  if (normalizedRelative !== 'index.html') {
    const shellCss = `<link rel="stylesheet" href="${assetHref(prefix, 'lumi-shell.css')}">`;
    if (!html.includes('lumi-shell.css')) html = html.replace('</head>', `${shellCss}</head>`);

    const canonicalHeader = headerMarkup(prefix, currentKey(relative));
    if (/<header\s+class="lumi-top(?:\s[^"]*)?"[\s\S]*?<\/header>/.test(html)) {
      html = html.replace(/<header\s+class="lumi-top(?:\s[^"]*)?"[\s\S]*?<\/header>/, canonicalHeader);
    } else if (!html.includes('data-lumi-unified-header="true"')) {
      if (!/<body(?:\s[^>]*)?>/i.test(html)) {
        throw new Error(`Static shell cannot inject header because ${normalizedRelative} has no <body> tag.`);
      }
      html = html.replace(/<body(?:\s[^>]*)?>/i, (bodyTag) => `${bodyTag}${canonicalHeader}`);
    }
  } else {
    // Prerender semantic HTML for Homepage inside <div id="root"> for AI Bots, Crawlers and SEO
    const shellCss = `<link rel="stylesheet" href="${assetHref(prefix, 'lumi-shell.css')}">`;
    if (!html.includes('lumi-shell.css')) html = html.replace('</head>', `${shellCss}</head>`);
    if (html.includes('<div id="root"></div>')) {
      html = html.replace('<div id="root"></div>', `<div id="root">${renderHomepagePrerender(prefix)}</div>`);
    }
  }

  html = cacheBustFixedAssets(html);
  await writeFile(file, html, 'utf8');
  updated += 1;
}

const coreStaticPages = [
  'spa-thu-cung-binh-thanh/index.html',
  'grooming-cho-meo-binh-thanh/index.html',
  'khach-san-thu-cung-binh-thanh/index.html',
  'bang-gia-spa-thu-cung/index.html',
  'dat-lich/index.html',
  'dat-phong/index.html',
  'gioi-thieu/index.html',
  'lien-he/index.html',
  'bai-viet/index.html',
];

for (const relative of coreStaticPages) {
  const file = path.join(DIST, relative);
  const html = await readFile(file, 'utf8');
  const markers = [
    ['data-lumi-unified-header="true"', 'unified header marker'],
    [`data-lumi-release="${RELEASE}"`, 'release marker'],
    [`lumi-brand-mark.svg?v=${RELEASE}`, 'cache-busted brand mark'],
    [`lumi-shell.css?v=${RELEASE}`, 'cache-busted shell stylesheet'],
    [`lumi-ui.js?v=${RELEASE}`, 'cache-busted UI script'],
    [`favicon.svg?v=${RELEASE}`, 'cache-busted favicon'],
    ['name="theme-color" content="#f97316"', 'theme color'],
    ['>Giới thiệu<', 'Giới thiệu navigation'],
    ['>Liên hệ<', 'Liên hệ navigation'],
    ['>Kiến thức<', 'Kiến thức navigation'],
    ['>Gọi ngay<', 'Gọi ngay action'],
    ['>Zalo<', 'Zalo action'],
    ['>Đặt lịch<', 'Đặt lịch action'],
  ];
  for (const [marker, label] of markers) requireBuiltMarker(html, relative, marker, label);
  if (html.includes('class="brand-mark"')) {
    throw new Error(`Static shell QA failed: ${relative} still contains legacy class=\"brand-mark\".`);
  }
}

for (const name of ['sitemap.xml', 'robots.txt']) {
  const file = path.join(DIST, name);
  let content = await readFile(file, 'utf8');
  content = content.replaceAll(LEGACY_ORIGIN, PRODUCTION_ORIGIN);
  await writeFile(file, content, 'utf8');
}

if (updated === 0) throw new Error('Unified static shell did not update any page.');
console.log(`Finalized Lumi Pet production shell for ${updated} page(s), release ${RELEASE}: unified header, cache-busted assets, favicon and lumipet.vn canonical origin.`);
