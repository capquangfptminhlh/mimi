import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';

const DEFAULT_GALLERY = [
  { img: 'vn-bath-dog.jpg', alt: 'Tắm vệ sinh chó 10 bước sấy tay 100% tại Lumi Pet 27 Võ Trường Toản', cap: '🛁 Tắm chó vệ sinh 10 bước & sấy tay 100% từ 140.000đ' },
  { img: 'vn-spa-cat.jpg', alt: 'Tắm mèo khu riêng sấy tay không dùng lồng sấy tại Lumi Pet', cap: '🐱 Tắm mèo khu riêng yên tĩnh, sấy tay 100% từ 160.000đ' },
  { img: 'vn-grooming-corgi.jpg', alt: 'Cắt tỉa lông tạo kiểu Corgi Poodle Phốc sóc tại Lumi Pet', cap: '✂️ Cắt tỉa lông tạo kiểu Poodle, Corgi, Phốc sóc từ 290k' },
  { img: 'vn-hotel-cabins.jpg', alt: 'Phòng khách sạn thú cưng riêng tư máy lạnh 24/24 tại Lumi Pet', cap: '🏨 Gửi chó mèo Pet Hotel 24/7 phòng riêng từ 100k/ngày' },
];

function buildGallery(items) {
  return `    <section class="panel span-12 lumi-photo-gallery">
      <h2>Hình ảnh thực tế dịch vụ Tắm chó, Tắm mèo, Cắt tỉa &amp; Pet Hotel tại Lumi Pet</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:12px;">
${items
  .map(
    (it) =>
      `        <figure style="margin:0;border-radius:16px;overflow:hidden;border:1px solid #ffead7;background:#fffaf3;">
          <img src="../images/${it.img}" alt="${it.alt}" loading="lazy" style="width:100%;height:190px;object-fit:cover;display:block;">
          <figcaption style="padding:10px 12px;font-size:12.5px;font-weight:700;color:#475569;">${it.cap}</figcaption>
        </figure>`
  )
  .join('\n')}
      </div>
    </section>`;
}

const LANDMARK_LINKS =
  '<p class="muted" style="margin-top:12px;"><strong>Tra cứu theo Địa danh &amp; Tuyến đường sát tiệm:</strong> ' +
  '<a href="../tam-cho-meo-gan-cho-ba-chieu/">Gần Chợ Bà Chiểu – Lăng Ông (300m)</a> · ' +
  '<a href="../tam-cho-meo-gan-phan-xich-long-mieu-noi/">Gần Phan Xích Long – Miếu Nổi (4–6 phút)</a> · ' +
  '<a href="../tam-cho-meo-gan-vinhomes-hang-xanh/">Gần Vinhomes – Hàng Xanh (6–9 phút)</a> · ' +
  '<a href="../spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/">Full 100+ tuyến đường gần Lumi Pet</a></p>';

const LANDMARKS = [
  {
    slug: 'tam-cho-meo-gan-cho-ba-chieu',
    shortName: 'Gần Chợ Bà Chiểu – BV Gia Định',
    eyebrow: 'Cách Chợ Bà Chiểu 300m · 1–2 phút · 27 Võ Trường Toản',
    title: 'Tắm Chó, Tắm Mèo & Hotel Gần Chợ Bà Chiểu | Lumi Pet',
    description:
      'Tắm chó từ 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & gửi chó mèo 24/7 ngay gần Chợ Bà Chiểu, Lăng Ông, BV Gia Định tại Lumi Pet 27 Võ Trường Toản.',
    h1: 'Tắm chó, Tắm mèo, Cắt tỉa & Gửi thú cưng gần Chợ Bà Chiểu (Chỉ 300m)',
    heroImg: 'vn-bath-dog.jpg',
    heroAlt: 'Tắm chó, tắm mèo sấy tay 100% gần Chợ Bà Chiểu và Lăng Ông tại Lumi Pet 27 Võ Trường Toản',
    heroCap: '📍 Cách Chợ Bà Chiểu, Lăng Ông và Bệnh viện Nhân dân Gia Định chỉ 300m — Lumi Pet 27 Võ Trường Toản, Phường Gia Định',
    distance: '300m (1–2 phút)',
    keywordCombos: [
      'Tắm chó gần Chợ Bà Chiểu', 'Tắm mèo gần Chợ Bà Chiểu', 'Cắt tỉa lông chó gần Chợ Bà Chiểu', 'Gửi chó mèo gần Chợ Bà Chiểu',
      'Spa thú cưng gần Lăng Ông Bà Chiểu', 'Tắm chó gần Bệnh viện Nhân dân Gia Định', 'Tắm mèo gần Bệnh viện Ung Bướu',
      'Spa chó mèo gần Đại học Mỹ Thuật TP.HCM', 'Tắm chó đường Võ Trường Toản', 'Tắm mèo đường Phan Đăng Lưu',
      'Tắm chó đường Lê Văn Duyệt (Đinh Tiên Hoàng cũ)', 'Tắm chó đường Bạch Đằng', 'Spa thú cưng đường Bùi Hữu Nghĩa',
      'Tắm chó mèo đường Vũ Tùng', 'Tắm chó đường Trịnh Hoài Đức', 'Tắm mèo đường Diên Hồng', 'Spa thú cưng đường Yên Đổ',
      'Tắm chó đường Phó Đức Chính', 'Cắt tỉa chó gần Cầu Bông', 'Khách sạn thú cưng gần Chợ Bà Chiểu',
    ],
    routes: [
      '<strong>Từ Chợ Bà Chiểu / Lăng Ông (1–2 phút):</strong> Rẽ từ Bạch Đằng hoặc Phan Đăng Lưu sang đường Võ Trường Toản (cạnh Trường ĐH Mỹ Thuật TP.HCM), số nhà 27 nằm ngay mặt tiền.',
      '<strong>Từ Bệnh viện Nhân dân Gia Định / Nơ Trang Long (2 phút):</strong> Qua ngã tư Phan Đăng Lưu – Nơ Trang Long, rẽ ngay vào khu Võ Trường Toản số 27.',
      '<strong>Từ Bùi Hữu Nghĩa / Vũ Tùng / Lê Văn Duyệt (2–3 phút):</strong> Chạy lên hướng Chợ Bà Chiểu → rẽ phải Võ Trường Toản số 27, rất tiện đi bộ hoặc đi xe máy đưa bé.',
    ],
    areaServed: ['Chợ Bà Chiểu, Phường Gia Định, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh', 'Quận Bình Thạnh, TP. Hồ Chí Minh'],
    faqs: [
      ['Tắm chó gần Chợ Bà Chiểu ở đâu uy tín và giá bao nhiêu?', 'Lumi Pet tại 27 Võ Trường Toản (chỉ cách Chợ Bà Chiểu 300m) chuyên tắm vệ sinh chó 10 bước từ 140.000đ (<3kg) đến 550.000đ (20–25kg), đã gồm cắt mài móng, vệ sinh tai, cạo đệm chân, vắt tuyến hôi và sấy tay 100%.'],
      ['Tắm mèo gần Chợ Bà Chiểu có bị nhốt lồng sấy nhiệt không?', 'Tuyệt đối KHÔNG. Lumi Pet có khu tắm riêng tách biệt chó và cam kết 100% thợ sấy tay bằng máy ion giảm ồn. Giá tắm vệ sinh mèo 160.000đ (<3kg), 220.000đ (3–6kg), 270.000đ (6–10kg).'],
      ['Gửi chó mèo khách sạn gần Chợ Bà Chiểu có trực ban đêm không?', 'Có. Pet Hotel 24/7 tại 27 Võ Trường Toản có phòng riêng máy lạnh 24/24, nhân viên trực chăm sóc 24/7 và quay video Zalo mỗi ngày. Giá ngày thường từ 100.000đ – 250.000đ/ngày.'],
    ],
  },
  {
    slug: 'tam-cho-meo-gan-phan-xich-long-mieu-noi',
    shortName: 'Gần Phan Xích Long – Miếu Nổi',
    eyebrow: 'Cách Phan Xích Long & Cư xá Miếu Nổi 4–6 phút · 27 Võ Trường Toản',
    title: 'Tắm Chó Mèo & Cắt Tỉa Gần Phan Xích Long, Miếu Nổi | Lumi',
    description:
      'Tắm chó từ 140k, tắm mèo sấy tay 160k, cắt tỉa Poodle/Corgi 290k & gửi chó mèo 24/7 gần Phan Xích Long, khu đường Hoa, Miếu Nổi tại Lumi Pet.',
    h1: 'Tắm chó, Tắm mèo, Cắt tỉa & Khách sạn thú cưng gần Phan Xích Long – Cư xá Miếu Nổi',
    heroImg: 'vn-grooming-corgi.jpg',
    heroAlt: 'Cắt tỉa lông chó Poodle Corgi và tắm mèo gần Phan Xích Long Miếu Nổi tại Lumi Pet',
    heroCap: '✂️ Chỉ 4–6 phút từ Phan Xích Long, khu đường Hoa & Cư xá Miếu Nổi qua Cầu Hoàng Hoa Thám hoặc Phan Đăng Lưu tới Lumi Pet',
    distance: '1–1,8km (4–6 phút)',
    keywordCombos: [
      'Tắm chó gần Phan Xích Long', 'Tắm mèo gần Phan Xích Long', 'Cắt tỉa lông chó gần Phan Xích Long', 'Gửi chó mèo gần Phan Xích Long',
      'Tắm chó gần Cư xá Miếu Nổi', 'Tắm mèo gần Cư xá Miếu Nổi', 'Spa thú cưng khu đường Hoa Phú Nhuận',
      'Tắm chó đường Vũ Huy Tấn', 'Tắm mèo đường Trường Sa Bình Thạnh', 'Tắm chó đường Hoàng Hoa Thám',
      'Cắt tỉa lông chó đường Phan Đăng Lưu', 'Spa thú cưng đường Hoa Lan', 'Tắm chó mèo đường Hoa Phượng',
      'Tắm mèo đường Hoa Sứ', 'Tắm chó đường Hoa Đào', 'Khách sạn thú cưng gần Cầu Hoàng Hoa Thám',
      'Spa chó mèo gần Chung cư Miếu Nổi', 'Tắm chó gần Bệnh viện Hoàn Mỹ Phan Xích Long',
    ],
    routes: [
      '<strong>Từ Cư xá Miếu Nổi / Vũ Huy Tấn (3–4 phút):</strong> Chạy thẳng Vũ Huy Tấn → rẽ trái Lê Văn Duyệt → rẽ phải Phan Đăng Lưu / Võ Trường Toản số 27.',
      '<strong>Từ Phan Xích Long / Khu đường Hoa (4–5 phút):</strong> Ra Phan Đăng Lưu hướng Chợ Bà Chiểu → rẽ phải Võ Trường Toản số 27 (chỉ hơn 1km thẳng tắp).',
      '<strong>Từ Trường Sa / Cầu Hoàng Hoa Thám (4–5 phút):</strong> Chạy Hoàng Hoa Thám → rẽ phải Phan Đăng Lưu → vào Võ Trường Toản số 27.',
    ],
    areaServed: ['Phan Xích Long, Phú Nhuận, TP. Hồ Chí Minh', 'Cư xá Miếu Nổi, Phường Gia Định, TP. Hồ Chí Minh', 'Phường Cầu Kiệu, TP. Hồ Chí Minh'],
    faqs: [
      ['Từ Phan Xích Long / Miếu Nổi đi tắm chó mèo tại Lumi Pet mất bao lâu?', 'Chỉ mất 4–6 phút (1–1,8km) qua trục Phan Đăng Lưu hoặc Vũ Huy Tấn, rất tiện đưa bé đi tắm định kỳ hằng tuần hoặc gửi tối sau giờ làm (mở tới 21:00).'],
      ['Cắt tỉa lông Poodle, Corgi, Phốc sóc gần Phan Xích Long giá bao nhiêu?', 'Combo tắm + cắt tỉa 2026 tại Lumi Pet từ 290.000đ (<3kg), 360.000đ (3–6kg), 430.000đ (6–9kg) đến 850.000đ (20–25kg), tỉa kéo tỉ mỉ chuẩn phom.'],
      ['Cư dân chung cư Miếu Nổi gửi mèo đi du lịch có phòng riêng yên tĩnh không?', 'Có. Khu lưu trú có phòng kính riêng máy lạnh 24/24, khử khuẩn sạch sẽ, giá ngày thường 100.000đ – 250.000đ/ngày và gửi video Zalo hằng ngày.'],
    ],
  },
  {
    slug: 'tam-cho-meo-gan-vinhomes-hang-xanh',
    shortName: 'Gần Vinhomes Central Park – Hàng Xanh',
    eyebrow: 'Cách Vinhomes Central Park, Landmark 81 & Hàng Xanh 6–9 phút',
    title: 'Tắm Chó Mèo & Hotel Gần Vinhomes, Hàng Xanh | Lumi Pet',
    description:
      'Tắm chó từ 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & Pet Hotel 24/7 gần Vinhomes Central Park, Landmark 81, Saigon Pearl, Hàng Xanh tại Lumi Pet.',
    h1: 'Tắm chó, Tắm mèo, Cắt tỉa & Khách sạn thú cưng gần Vinhomes Central Park – Hàng Xanh',
    heroImg: 'vn-hotel-cabins.jpg',
    heroAlt: 'Khách sạn thú cưng phòng riêng và Spa tắm cắt tỉa gần Vinhomes Central Park Hàng Xanh tại Lumi Pet',
    heroCap: '🏙️ Chỉ 6–9 phút từ Vinhomes Central Park, Landmark 81, Saigon Pearl, City Garden & Ngã tư Hàng Xanh sang Lumi Pet 27 Võ Trường Toản',
    distance: '2,2–3,5km (6–9 phút)',
    keywordCombos: [
      'Tắm chó gần Vinhomes Central Park', 'Tắm mèo gần Vinhomes Central Park', 'Cắt tỉa lông chó gần Vinhomes Central Park', 'Gửi chó mèo gần Vinhomes Central Park',
      'Spa thú cưng gần Landmark 81', 'Khách sạn thú cưng gần Landmark 81', 'Tắm chó gần Ngã tư Hàng Xanh', 'Tắm mèo gần Ngã tư Hàng Xanh',
      'Spa chó mèo gần Saigon Pearl', 'Tắm chó mèo gần City Garden', 'Tắm chó gần The Manor Bình Thạnh', 'Spa thú cưng gần Sunwah Pearl',
      'Tắm chó đường Nguyễn Hữu Cảnh', 'Tắm mèo đường Điện Biên Phủ', 'Tắm chó đường Xô Viết Nghệ Tĩnh', 'Cắt tỉa chó đường Ngô Tất Tố',
      'Tắm chó mèo đường Nguyễn Gia Trí (D2)', 'Spa thú cưng đường Ung Văn Khiêm', 'Tắm chó đường Phạm Viết Chánh', 'Gửi chó mèo gần Bến xe Miền Đông cũ',
    ],
    routes: [
      '<strong>Từ Vinhomes Central Park / Landmark 81 / Saigon Pearl (7–9 phút):</strong> Chạy Nguyễn Hữu Cảnh → rẽ Điện Biên Phủ → vòng qua Xô Viết Nghệ Tĩnh / Bạch Đằng hướng Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Từ City Garden / Ngô Tất Tố / Phạm Viết Chánh (5–7 phút):</strong> Ra Điện Biên Phủ → rẽ Lê Văn Duyệt hướng Cầu Bông / Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Từ Ngã tư Hàng Xanh / D2 Nguyễn Gia Trí / Ung Văn Khiêm (5–7 phút):</strong> Chạy thẳng Bạch Đằng hướng Chợ Bà Chiểu → rẽ Võ Trường Toản số 27.',
    ],
    areaServed: ['Vinhomes Central Park, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh', 'Ngã tư Hàng Xanh, TP. Hồ Chí Minh', 'Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh'],
    faqs: [
      ['Từ Vinhomes Central Park / Landmark 81 sang Lumi Pet 27 Võ Trường Toản bao xa?', 'Chỉ khoảng 2,5 – 3,5km (7–9 phút đi xe máy hoặc ô tô). Mặt tiền 27 Võ Trường Toản thuận tiện dừng ô tô/taxi đón trả bé.'],
      ['Vì sao nhiều cư dân Vinhomes & Hàng Xanh chọn gửi Pet Hotel tại Lumi Pet?', 'Vì phòng riêng máy lạnh 24/24 sạch sẽ, có nhân viên trực chăm sóc 24/7, quay video tương tác Zalo hằng ngày với giá ngày thường minh bạch chỉ từ 100.000đ – 250.000đ/ngày (giảm đến 8% dài ngày).'],
      ['Tắm chó lớn (Golden, Husky, Samoyed, Corgi) gần Hàng Xanh giá bao nhiêu?', 'Bảng giá 2026 chia 8 mốc tới 25kg: 12–15kg là 370k, 15–18kg là 430k, 18–20kg là 480k, 20–25kg là 550k — sấy tay 100% khô kiệt tận chân lông kép.'],
    ],
  },
];

function buildLandmarkHtml(l) {
  const url = `${ORIGIN}/${l.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: l.title,
        serviceType: `Tắm chó, tắm mèo sấy tay 100%, cắt tỉa lông grooming và khách sạn thú cưng 24/7 ${l.shortName}`,
        provider: { '@id': `${ORIGIN}/#business` },
        areaServed: l.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
        offers: { '@type': 'AggregateOffer', lowPrice: '100000', highPrice: '850000', priceCurrency: 'VND', offerCount: '35' },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Tuyến đường & Địa danh gần Lumi Pet', item: `${ORIGIN}/spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/` },
          { '@type': 'ListItem', position: 3, name: l.shortName },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${l.title.replaceAll('&', '&amp;')}</title>
  <meta name="description" content="${l.description.replaceAll('&', '&amp;')}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${l.title.replaceAll('&', '&amp;')}" />
  <meta property="og:description" content="${l.description.replaceAll('&', '&amp;')}" />
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/images/${l.heroImg}">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/">Địa danh &amp; Tuyến đường</a> / ${l.shortName}</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">${l.eyebrow}</div>
      <h1>${l.h1.replaceAll('&', '&amp;')}</h1>
      <p class="lead">Ba mẹ đang tìm địa chỉ <strong>tắm chó, tắm mèo, cắt tỉa lông (grooming) hoặc gửi thú cưng ${l.shortName}</strong>? <strong>Lumi Pet – 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh)</strong> chỉ cách <strong>${l.distance}</strong>, phục vụ 08:00 – 21:00 mỗi ngày (Pet Hotel trực 24/7), sấy tay 100% không lồng sấy nhiệt.</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> Tại Lumi Pet (27 Võ Trường Toản, cách ${l.shortName} ${l.distance}), bảng giá niêm yết 2026: <strong>tắm vệ sinh chó từ 140.000đ</strong> (8 mốc tới 25kg), <strong>tắm vệ sinh mèo từ 160.000đ</strong> (khu riêng, sấy tay 100%), <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>khách sạn chó mèo 24/7 từ 100.000đ/ngày</strong>.
      </div>
      <div class="hero-actions">
        <a class="btn btn-green" href="../dat-lich/">Đặt lịch Spa ngay</a>
        <a class="btn btn-primary" href="../dat-phong/">Book phòng Hotel 24/7</a>
        <a class="btn btn-secondary" href="tel:0989979675">Gọi 0989 979 675</a>
      </div>
    </div>
    <aside class="hero-side">
      <div class="eyebrow">Khoảng cách cực gần</div>
      <strong>${l.distance}</strong>
      <ul class="mini-list">
        <li>🐶 Tắm chó: 140.000đ – 550.000đ</li>
        <li>🐱 Tắm mèo sấy tay: 160.000đ – 270.000đ</li>
        <li>✂️ Cắt tỉa chó: 290.000đ – 850.000đ</li>
        <li>🏨 Gửi chó mèo 24/7: 100k–250k/ngày</li>
        <li>📍 27 Võ Trường Toản, Phường Gia Định</li>
      </ul>
    </aside>
  </section>

  <figure class="lumi-vn-showcase" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);">
    <img src="../images/${l.heroImg}" alt="${l.heroAlt}" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">${l.heroCap}</figcaption>
  </figure>

  <div class="grid">
    <section class="panel span-6">
      <h2>Nhu cầu chăm sóc thú cưng ${l.shortName} &amp; tuyến đường lân cận</h2>
      <p>Khách hàng quanh khu vực này thường ghé Lumi Pet cho các nhu cầu phổ biến sau:</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 14px;">
${l.keywordCombos
  .map((k) => `        <span style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:5px 10px;border-radius:999px;font-size:12.5px;font-weight:700;">🐾 ${k}</span>`)
  .join('\n')}
      </div>
      ${LANDMARK_LINKS}
    </section>

    <section class="panel span-6">
      <h2>Hướng dẫn đường đi nhanh nhất sang 27 Võ Trường Toản</h2>
      <ul>
${l.routes.map((r) => `        <li>${r}</li>`).join('\n')}
      </ul>
      <div class="notice"><strong>Mở cửa 08:00 – 21:00 mỗi ngày:</strong> Tiện ghé gửi bé tắm buổi sáng trước giờ đi làm hoặc ca tối sau giờ tan ca (không phụ thu ca tối). Đặt trước qua Zalo <strong>0989 979 675</strong> để bé được làm ngay không phải chờ.</div>
      <p style="margin-top:12px;"><a class="btn btn-secondary" href="https://www.google.com/maps/place/?q=place_id:ChIJQQ1vLgApdTERzUEEgAktmsg" target="_blank" rel="noopener noreferrer">📍 Mở Google Maps chỉ đường</a></p>
    </section>

    <section class="panel span-7">
      <h2>Bảng giá Tắm chó &amp; Cắt tỉa 2026 (8 mốc tới 25kg)</h2>
      <table class="price-table">
        <thead><tr><th>Cân nặng cún</th><th>Tắm vệ sinh</th><th>Tắm + cạo</th><th>Tắm + cắt tỉa</th></tr></thead>
        <tbody>
          <tr><td>Dưới 3kg</td><td><strong>140.000đ</strong></td><td>200.000đ</td><td>290.000đ</td></tr>
          <tr><td>3 – 6kg</td><td><strong>190.000đ</strong></td><td>270.000đ</td><td>360.000đ</td></tr>
          <tr><td>6 – 9kg</td><td><strong>250.000đ</strong></td><td>340.000đ</td><td>430.000đ</td></tr>
          <tr><td>9 – 12kg</td><td><strong>310.000đ</strong></td><td>410.000đ</td><td>520.000đ</td></tr>
          <tr><td>12 – 15kg</td><td><strong>370.000đ</strong></td><td>480.000đ</td><td>600.000đ</td></tr>
          <tr><td>15 – 18kg</td><td><strong>430.000đ</strong></td><td>550.000đ</td><td>680.000đ</td></tr>
          <tr><td>18 – 20kg</td><td><strong>480.000đ</strong></td><td>620.000đ</td><td>760.000đ</td></tr>
          <tr><td>20 – 25kg</td><td><strong>550.000đ</strong></td><td>700.000đ</td><td>850.000đ</td></tr>
        </tbody>
      </table>
      <p class="muted">Đã bao gồm cắt mài móng, vệ sinh tai, cạo đệm chân/bụng/hậu môn, vắt tuyến hôi và sấy tay 100%.</p>
    </section>

    <section class="panel span-5">
      <h2>Bảng giá Tắm Mèo &amp; Khách sạn 24/7</h2>
      <table class="price-table">
        <thead><tr><th>Mèo (Cân nặng)</th><th>Tắm vệ sinh</th><th>Tắm + cạo</th></tr></thead>
        <tbody>
          <tr><td>Dưới 3kg</td><td><strong>160.000đ</strong></td><td>250.000đ</td></tr>
          <tr><td>3 – 6kg</td><td><strong>220.000đ</strong></td><td>320.000đ</td></tr>
          <tr><td>6 – 10kg</td><td><strong>270.000đ</strong></td><td>380.000đ</td></tr>
        </tbody>
      </table>
      <h3 style="margin-top:16px;">Khách sạn thú cưng (Pet Hotel 24/7)</h3>
      <ul>
        <li>&lt;3kg: <strong>100k</strong> · 3–6kg: <strong>120k</strong> · 6–9kg: <strong>160k</strong> · 9–12kg: <strong>200k</strong> · 12–15kg: <strong>250k/ngày</strong></li>
        <li><strong>Ưu đãi dài ngày (ngày thường):</strong> Trên 5 ngày giảm 5% · Trên 10 ngày giảm 8%</li>
        <li>Phòng riêng máy lạnh 24/24, trực trông giữ 24/7, quay video Zalo mỗi ngày.</li>
      </ul>
    </section>

${buildGallery(DEFAULT_GALLERY)}

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp</h2>
      <div class="faq">
${l.faqs.map(([q, a], idx) => `        <details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('\n')}
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="../dat-lich/">Đặt lịch Spa →</a></div></div></footer>
</body>
</html>
`;
}

// 1. Write 3 Landmark Money Pages
for (const l of LANDMARKS) {
  const dir = path.join(PUBLIC_DIR, l.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildLandmarkHtml(l), 'utf8');
  console.log(`Generated landmark page: /${l.slug}/ (T:${l.title.length}c, D:${l.description.length}c)`);
}

// 2. Enrich the 4 Gia Dinh service pages with Service x Landmark & Street chips
const SERVICE_COMBO_BLOCKS = [
  {
    slug: 'tam-cho-phuong-gia-dinh',
    heading: 'Tắm chó gần Chợ Bà Chiểu, Cầu Bông, Phan Xích Long &amp; 25+ tuyến đường lân cận',
    intro: 'Ngoài cư dân Phường Gia Định, khách hàng quanh các địa danh và tuyến đường sát 27 Võ Trường Toản đều ghé Lumi Pet tắm chó chỉ trong 1–8 phút:',
    chips: [
      'Tắm chó gần Chợ Bà Chiểu (300m)', 'Tắm chó gần Lăng Ông Bà Chiểu', 'Tắm chó gần Bệnh viện Gia Định',
      'Tắm chó gần ĐH Mỹ Thuật TP.HCM', 'Tắm chó gần Cầu Bông', 'Tắm chó gần Phan Xích Long',
      'Tắm chó gần Cư xá Miếu Nổi', 'Tắm chó gần Ngã tư Hàng Xanh', 'Tắm chó gần Vinhomes Central Park',
      'Tắm chó đường Võ Trường Toản', 'Tắm chó đường Phan Đăng Lưu', 'Tắm chó đường Lê Văn Duyệt',
      'Tắm chó đường Bạch Đằng', 'Tắm chó đường Bùi Hữu Nghĩa', 'Tắm chó đường Vũ Tùng',
      'Tắm chó đường Vũ Huy Tấn', 'Tắm chó đường Hoàng Hoa Thám', 'Tắm chó đường Nguyễn Văn Đậu',
      'Tắm chó đường Lê Quang Định', 'Tắm chó đường Nơ Trang Long', 'Tắm chó đường Đinh Bộ Lĩnh',
      'Tắm chó đường Xô Viết Nghệ Tĩnh', 'Tắm chó đường Điện Biên Phủ', 'Tắm chó đường Chu Văn An',
      'Tắm chó đường Nguyễn Xí', 'Tắm chó đường Nguyễn Hữu Cảnh',
    ],
  },
  {
    slug: 'tam-meo-phuong-gia-dinh',
    heading: 'Tắm mèo gần Chợ Bà Chiểu, Cầu Bông, Phan Xích Long &amp; 25+ tuyến đường lân cận',
    intro: 'Mèo được tắm trong khu vực yên tĩnh tách biệt chó và sấy tay 100%, phục vụ siêu nhanh cho các địa danh &amp; tuyến đường sát 27 Võ Trường Toản:',
    chips: [
      'Tắm mèo gần Chợ Bà Chiểu (300m)', 'Tắm mèo gần Lăng Ông Bà Chiểu', 'Tắm mèo gần Bệnh viện Gia Định',
      'Tắm mèo gần Cầu Bông', 'Tắm mèo gần Phan Xích Long', 'Tắm mèo gần Cư xá Miếu Nổi',
      'Tắm mèo gần Ngã tư Hàng Xanh', 'Tắm mèo gần Vinhomes Central Park', 'Tắm mèo gần Landmark 81',
      'Tắm mèo gần Chợ Tân Định', 'Tắm mèo đường Võ Trường Toản', 'Tắm mèo đường Phan Đăng Lưu',
      'Tắm mèo đường Lê Văn Duyệt', 'Tắm mèo đường Bạch Đằng', 'Tắm mèo đường Bùi Hữu Nghĩa',
      'Tắm mèo đường Vũ Huy Tấn', 'Tắm mèo đường Trường Sa', 'Tắm mèo đường Hoàng Hoa Thám',
      'Tắm mèo đường Lê Quang Định', 'Tắm mèo đường Nơ Trang Long', 'Tắm mèo đường Đinh Bộ Lĩnh',
      'Tắm mèo đường Điện Biên Phủ', 'Tắm mèo đường Nguyễn Hữu Cảnh', 'Tắm mèo gần Thảo Điền',
    ],
  },
  {
    slug: 'cat-tia-long-cho-phuong-gia-dinh',
    heading: 'Cắt tỉa lông chó (Grooming) gần Chợ Bà Chiểu, Phan Xích Long, Cầu Bông &amp; 25+ đường',
    intro: 'Nhận cắt tỉa tạo kiểu Poodle Teddy, Corgi mông đào, Phốc sóc Boo, Bichon, Shih Tzu cho khách quanh các địa danh &amp; tuyến đường lân cận:',
    chips: [
      'Cắt tỉa lông chó gần Chợ Bà Chiểu', 'Cắt tỉa lông chó gần Bệnh viện Gia Định', 'Cắt tỉa lông chó gần Cầu Bông',
      'Cắt tỉa lông chó gần Phan Xích Long', 'Cắt tỉa lông chó gần Cư xá Miếu Nổi', 'Cắt tỉa lông chó gần Hàng Xanh',
      'Cắt tỉa lông chó gần Vinhomes Central Park', 'Cắt tỉa lông chó gần Landmark 81', 'Cắt tỉa lông chó gần Thảo Điền',
      'Grooming chó đường Võ Trường Toản', 'Grooming chó đường Phan Đăng Lưu', 'Cắt tỉa chó đường Lê Văn Duyệt',
      'Cắt tỉa chó đường Bạch Đằng', 'Cắt tỉa chó đường Bùi Hữu Nghĩa', 'Cắt tỉa chó đường Lê Quang Định',
      'Cắt tỉa chó đường Nơ Trang Long', 'Cắt tỉa chó đường Đinh Bộ Lĩnh', 'Cắt tỉa chó đường Nguyễn Văn Đậu',
      'Cắt tỉa chó đường Xô Viết Nghệ Tĩnh', 'Cắt tỉa chó đường Nguyễn Hữu Cảnh', 'Cắt tỉa chó đường Hai Bà Trưng',
    ],
  },
  {
    slug: 'khach-san-thu-cung-phuong-gia-dinh',
    heading: 'Gửi chó mèo &amp; Khách sạn thú cưng gần Chợ Bà Chiểu, Cầu Bông, Phan Xích Long, Vinhomes',
    intro: 'Phòng riêng máy lạnh 24/24, trực trông giữ 24/7 và quay video Zalo mỗi ngày — vị trí trung tâm đón trả siêu tiện cho các khu vực &amp; tuyến đường:',
    chips: [
      'Gửi chó mèo gần Chợ Bà Chiểu', 'Khách sạn thú cưng gần Lăng Ông', 'Gửi chó mèo gần Bệnh viện Gia Định',
      'Khách sạn thú cưng gần Cầu Bông', 'Gửi chó mèo gần Phan Xích Long', 'Khách sạn thú cưng gần Miếu Nổi',
      'Gửi chó mèo gần Ngã tư Hàng Xanh', 'Khách sạn thú cưng gần Vinhomes Central Park', 'Gửi mèo gần Landmark 81',
      'Gửi chó mèo gần Saigon Pearl', 'Gửi chó mèo gần City Garden', 'Khách sạn thú cưng gần Chợ Tân Định',
      'Gửi chó mèo gần Emart Gò Vấp', 'Khách sạn thú cưng gần Thảo Điền', 'Gửi chó mèo đường Võ Trường Toản',
      'Gửi chó mèo đường Phan Đăng Lưu', 'Gửi chó mèo đường Bạch Đằng', 'Gửi chó mèo đường Lê Văn Duyệt',
      'Gửi chó mèo đường Lê Quang Định', 'Gửi chó mèo đường Đinh Bộ Lĩnh', 'Gửi chó mèo đường Điện Biên Phủ',
    ],
  },
];

for (const b of SERVICE_COMBO_BLOCKS) {
  const filePath = path.join(PUBLIC_DIR, b.slug, 'index.html');
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  const sectionHtml = `    <section class="panel span-12 lumi-landmark-combos">
      <h2>${b.heading}</h2>
      <p>${b.intro}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 12px;">
${b.chips
  .map((c) => `        <span style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:5px 10px;border-radius:999px;font-size:12.5px;font-weight:700;">📍 ${c}</span>`)
  .join('\n')}
      </div>
      ${LANDMARK_LINKS}
    </section>`;

  if (html.includes('lumi-landmark-combos')) {
    html = html.replace(/    <section class="panel span-12 lumi-landmark-combos">[\s\S]*?<\/section>/, sectionHtml);
  } else {
    html = html.replace(
      /(\s*<section class="panel span-12 lumi-photo-gallery">)/,
      `\n${sectionHtml}\n$1`
    );
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Enriched service x landmark combos: /${b.slug}/`);
}

// 3. Add a Service x Landmark matrix section to /spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/
const masterPath = path.join(PUBLIC_DIR, 'spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan', 'index.html');
let masterHtml = fs.readFileSync(masterPath, 'utf8').replace(/\r\n/g, '\n');
const matrixBlock = `    <section class="panel span-12 lumi-landmark-matrix">
      <h2>Tra cứu nhanh theo từng Dịch vụ × Địa danh gần 27 Võ Trường Toản</h2>
      <table class="price-table">
        <thead><tr><th>Địa danh / Khu vực nổi bật</th><th>Khoảng cách</th><th>Tắm chó · Tắm mèo · Cắt tỉa · Hotel</th></tr></thead>
        <tbody>
          <tr><td><strong>Chợ Bà Chiểu · Lăng Ông · BV Gia Định · ĐH Mỹ Thuật</strong></td><td>300m (1–2 phút)</td><td><a href="../tam-cho-meo-gan-cho-ba-chieu/">Tắm chó, tắm mèo, cắt tỉa &amp; gửi thú cưng gần Chợ Bà Chiểu →</a></td></tr>
          <tr><td><strong>Phan Xích Long · Khu đường Hoa · Cư xá Miếu Nổi</strong></td><td>1–1,8km (4–6 phút)</td><td><a href="../tam-cho-meo-gan-phan-xich-long-mieu-noi/">Tắm chó, tắm mèo, cắt tỉa &amp; Hotel gần Phan Xích Long – Miếu Nổi →</a></td></tr>
          <tr><td><strong>Vinhomes Central Park · Landmark 81 · Hàng Xanh · Saigon Pearl</strong></td><td>2,2–3,5km (6–9 phút)</td><td><a href="../tam-cho-meo-gan-vinhomes-hang-xanh/">Tắm chó, tắm mèo, cắt tỉa &amp; Hotel gần Vinhomes – Hàng Xanh →</a></td></tr>
          <tr><td><strong>Cầu Bông · Chợ Tân Định · Đa Kao · Đinh Tiên Hoàng (Q.1)</strong></td><td>1,5–2,5km (5–8 phút)</td><td><a href="../spa-thu-cung-quan-1/">Tắm chó mèo, Spa &amp; Hotel gần Quận 1 – Cầu Bông →</a></td></tr>
          <tr><td><strong>Lê Quang Định · Phạm Văn Đồng · CityLand · Emart (Gò Vấp)</strong></td><td>2,5–4,5km (8–12 phút)</td><td><a href="../spa-thu-cung-quan-go-vap/">Tắm chó mèo, Spa &amp; Hotel gần Quận Gò Vấp →</a></td></tr>
          <tr><td><strong>Thảo Điền · Masteri · Estella · Sala Thủ Thiêm (Q.2 cũ)</strong></td><td>4,5–6km (10–15 phút)</td><td><a href="../spa-thu-cung-quan-2-thao-dien/">Tắm chó mèo, Spa &amp; Hotel gần Quận 2 – Thảo Điền →</a></td></tr>
        </tbody>
      </table>
    </section>`;

if (masterHtml.includes('lumi-landmark-matrix')) {
  masterHtml = masterHtml.replace(/    <section class="panel span-12 lumi-landmark-matrix">[\s\S]*?<\/section>/, matrixBlock);
} else {
  masterHtml = masterHtml.replace(
    /(\s*<section class="panel span-12">\s*<h2>Truy cập nhanh theo Quận cũ)/,
    `\n${matrixBlock}\n$1`
  );
}
fs.writeFileSync(masterPath, masterHtml, 'utf8');
console.log('Added Service x Landmark matrix to /spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/');
