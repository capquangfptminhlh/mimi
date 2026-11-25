import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';
const TODAY = '2026-11-25';

// === 1. MONEY PAGE: KHÁCH SẠN THÚ CƯNG TẾT 2027 BÌNH THẠNH & PHƯỜNG GIA ĐỊNH ===
const tetHotelHtml = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Khách Sạn Thú Cưng Tết 2027 Bình Thạnh &amp; Gia Định | Lumi</title>
  <meta name="description" content="Đặt phòng khách sạn thú cưng &amp; gửi chó mèo Tết 2027 tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh). Phòng riêng máy lạnh 24/24, trực 24/7." />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${ORIGIN}/khach-san-thu-cung-tet-binh-thanh/">
  <meta property="og:title" content="Khách Sạn Thú Cưng Tết 2027 Bình Thạnh &amp; Gia Định | Lumi Pet" />
  <meta property="og:description" content="Gửi chó mèo dịp Tết Nguyên Đán 2027 &amp; Tết Dương lịch tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh). Phòng riêng sạch sẽ, trực chăm sóc 24/7." />
  <meta property="og:type" content="website">
  <meta property="og:url" content="${ORIGIN}/khach-san-thu-cung-tet-binh-thanh/">
  <meta property="og:image" content="${ORIGIN}/images/vn-hotel-cabins.jpg">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${ORIGIN}/khach-san-thu-cung-tet-binh-thanh/#service`,
        name: 'Khách sạn thú cưng & Gửi chó mèo Tết 2027 Bình Thạnh - Lumi Pet',
        serviceType: 'Lưu trú khách sạn chó mèo dịp Noel, Tết Dương lịch & Tết Nguyên Đán 24/7',
        provider: { '@id': `${ORIGIN}/#business` },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Phường Gia Định, TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Bình Thạnh, TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Bình Lợi Trung, TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Tân Định (Quận 1), TP. Hồ Chí Minh' },
        ],
        offers: { '@type': 'AggregateOffer', lowPrice: '100000', highPrice: '250000', priceCurrency: 'VND', offerCount: '5' },
        url: `${ORIGIN}/khach-san-thu-cung-tet-binh-thanh/`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Khách sạn thú cưng Bình Thạnh', item: `${ORIGIN}/khach-san-thu-cung-binh-thanh/` },
          { '@type': 'ListItem', position: 3, name: 'Khách sạn thú cưng Tết 2027' },
        ],
      },
    ],
  })}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../khach-san-thu-cung-binh-thanh/">Pet Hotel 24/7</a> / Khách sạn thú cưng Tết 2027</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">Mùa Cao Điểm Noel · Tết Tây · Tết Nguyên Đán 2027</div>
      <h1>Khách sạn thú cưng &amp; Gửi chó mèo Tết 2027 tại Bình Thạnh, Phường Gia Định</h1>
      <p class="lead">Ba mẹ chuẩn bị về quê ăn Tết, đi du lịch dịp Giáng Sinh – Tết Dương lịch hay Tết Nguyên Đán 2027? <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong> nhận đặt giữ phòng riêng sớm cho chó và mèo với nhân viên trực chăm sóc <strong>xuyên Tết 24/7</strong>, máy lạnh 24/24 và quay video tương tác gửi Zalo mỗi ngày.</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> Để <strong>gửi chó mèo dịp Tết tại Bình Thạnh / Phường Gia Định</strong> an toàn và còn phòng riêng đẹp, ba mẹ nên đặt giữ phòng trước <strong>2–4 tuần</strong> qua Zalo <strong>0989 979 675</strong> hoặc trang <a href="../dat-phong/">Book phòng</a>. Giá ngày thường từ <strong>100.000đ – 250.000đ/ngày</strong> theo cân nặng; mức phụ thu nhân sự trực Lễ/Tết được tiệm báo minh bạch trọn gói trước khi bạn chốt phòng.
      </div>
      <div class="hero-actions">
        <a class="btn btn-primary" href="../dat-phong/">Giữ phòng Hotel Tết ngay</a>
        <a class="btn btn-green" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Hỏi phòng trống Tết qua Zalo</a>
        <a class="btn btn-secondary" href="tel:0989979675">Gọi 0989 979 675</a>
      </div>
    </div>
    <aside class="hero-side">
      <div class="eyebrow">Lưu trú xuyên Tết 24/7</div>
      <strong>Đặt sớm giữ phòng</strong>
      <ul class="mini-list">
        <li>🏠 Không gian riêng từng bé, khu mèo tách biệt</li>
        <li>❄️ Máy lạnh mát mẻ &amp; khử khuẩn hằng ngày</li>
        <li>📹 Quay video tương tác gửi Zalo mỗi ngày</li>
        <li>📍 27 Võ Trường Toản, Phường Gia Định</li>
      </ul>
    </aside>
  </section>

  <figure class="lumi-vn-showcase" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);">
    <img src="../images/vn-hotel-cabins.jpg" alt="Phòng kính lưu trú sạch sẽ cho chó mèo dịp Tết tại Lumi Pet 27 Võ Trường Toản Phường Gia Định" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">🏨 Phòng kính riêng sạch sẽ, khô thoáng, có nhân viên trực chăm sóc xuyên Lễ/Tết 24/7 tại Lumi Pet Bình Thạnh</figcaption>
  </figure>

  <div class="grid">
    <section class="panel span-6">
      <h2>Bảng giá Hotel tham khảo (Ngày thường) &amp; Lưu ý giá Lễ Tết</h2>
      <table class="price-table">
        <thead><tr><th>Trọng lượng thú cưng</th><th>Giá ngày thường / ngày</th></tr></thead>
        <tbody>
          <tr><td>Dưới 3kg</td><td><strong>100.000đ</strong></td></tr>
          <tr><td>3 – 6kg</td><td><strong>120.000đ</strong></td></tr>
          <tr><td>6 – 9kg</td><td><strong>160.000đ</strong></td></tr>
          <tr><td>9 – 12kg</td><td><strong>200.000đ</strong></td></tr>
          <tr><td>12 – 15kg</td><td><strong>250.000đ</strong></td></tr>
        </tbody>
      </table>
      <div class="notice"><strong>Minh bạch giá Lễ / Tết:</strong> Ngày thường giảm 5% khi gửi trên 5 ngày và giảm 8% trên 10 ngày. Riêng các ngày cao điểm <strong>Tết Nguyên Đán &amp; Lễ lớn</strong> có thể áp dụng mức phụ thu nhân sự trực Tết riêng — Lumi Pet luôn báo rõ tổng chi phí trọn kỳ trước khi bạn xác nhận đặt phòng, không phát sinh bất ngờ. Bé trên 15kg vui lòng liên hệ shop bố trí phòng rộng.</div>
    </section>

    <section class="panel span-6">
      <h2>4 mốc chuẩn bị quan trọng trước khi gửi bé dịp Tết</h2>
      <ol>
        <li><strong>Trước 3–4 tuần:</strong> Nhắn ngày check-in, check-out và cân nặng bé qua Zalo <strong>0989 979 675</strong> để chọn phòng đẹp và ghé tham quan tiệm nếu muốn.</li>
        <li><strong>Trước ít nhất 14 ngày:</strong> Kiểm tra sổ tiêm ngừa (bắt buộc tiêm đủ vắc-xin cơ bản) và tẩy giun/nhỏ gáy ve rận để miễn dịch của bé ổn định trước khi vào khu lưu trú.</li>
        <li><strong>Trước 3–5 ngày:</strong> Chuẩn bị sẵn thức ăn hạt/pate quen bụng của bé (nếu bé nhạy cảm tiêu hóa) và 1 chiếc khăn nhỏ có mùi chủ để giảm stress xa nhà.</li>
        <li><strong>Ngày đón bé sau Tết:</strong> Nhiều ba mẹ đặt kèm gói <a href="../spa-cho-meo-don-noel-tet-binh-thanh/">tắm vệ sinh đón Tết</a> (chó từ 140k, mèo từ 160k) để đón bé sạch thơm về nhà ngay.</li>
      </ol>
    </section>

    <section class="panel span-12">
      <h2>Điều kiện nhận phòng an toàn mùa cao điểm</h2>
      <p>Để đảm bảo 100% các bé gửi dịp Tết đều khỏe mạnh khi trở về cùng gia đình, Lumi Pet áp dụng nghiêm ngặt quy chuẩn tiếp nhận:</p>
      <ul>
        <li><strong>Tiêm ngừa đầy đủ:</strong> Shop có quyền từ chối bé chưa tiêm phòng cơ bản.</li>
        <li><strong>Không nhận bé đang mắc bệnh truyền nhiễm hoặc sốt/tiêu chảy cấp:</strong> Lumi Pet là cơ sở Spa &amp; Khách sạn thú cưng, không phải bệnh viện thú y điều trị bệnh nội trú.</li>
        <li><strong>Khai báo bệnh nền &amp; tính cách:</strong> Báo trước nếu bé có bệnh nền, đang uống thuốc bổ hoặc dữ/nhát người lạ để tiệm đánh giá khả năng chăm sóc an toàn.</li>
      </ul>
      <p class="muted">Phục vụ nhanh khách ở gần 4–10 phút: <a href="../khach-san-thu-cung-phuong-gia-dinh/">Phường Gia Định</a> · <a href="../spa-thu-cung-phuong-binh-thanh/">Phường Bình Thạnh</a> · <a href="../spa-thu-cung-phuong-binh-loi-trung/">Phường Bình Lợi Trung</a> · <a href="../spa-thu-cung-phuong-thanh-my-tay/">Phường Thạnh Mỹ Tây</a> · <a href="../spa-thu-cung-phuong-cau-kieu-phu-nhuan/">Phường Cầu Kiệu (Phú Nhuận)</a> · <a href="../spa-thu-cung-phuong-tan-dinh-quan-1/">Phường Tân Định (Quận 1)</a>.</p>
    </section>

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp về gửi chó mèo dịp Tết tại Bình Thạnh</h2>
      <div class="faq">
        <details open><summary>Gửi chó mèo dịp Tết Nguyên Đán 2027 tại Lumi Pet cần đặt phòng trước bao lâu?</summary><p>Bạn nên đặt phòng sớm trước 2–4 tuần (ngay từ tháng 12 – đầu tháng 1) vì số lượng phòng riêng có hạn và thường kín rất nhanh vào cao điểm 27 Tết đến mùng 5 Tết.</p></details>
        <details><summary>Trong các ngày mùng 1, mùng 2, mùng 3 Tết có nhân viên chăm sóc bé không?</summary><p>Có. Khu vực Pet Hotel tại 27 Võ Trường Toản luôn có nhân viên trực chăm sóc 24/7 xuyên suốt kỳ nghỉ Tết, cho ăn đúng bữa, dọn vệ sinh hằng ngày và gửi video cập nhật qua Zalo mỗi ngày.</p></details>
        <details><summary>Giá gửi chó mèo ngày Tết có khác ngày thường không?</summary><p>Các ngày cao điểm Tết có thể có biểu phí trực Tết riêng tùy ngày nhận/trả. Nhân viên Lumi Pet sẽ báo rõ tổng chi phí trọn kỳ ngay khi bạn nhắn ngày gửi qua Zalo 0989 979 675.</p></details>
        <details><summary>Mèo gửi dịp Tết có được ở khu riêng tách biệt chó không?</summary><p>Có. Mỗi bé có không gian phòng riêng, khu lưu trú mèo tách biệt yên tĩnh để tránh căng thẳng vì tiếng chó sủa.</p></details>
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (P.2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: 24/7</div><div><a href="../dat-phong/">Book phòng Tết ngay →</a></div></div></footer>
<script src="../lumi-ui.js" defer></script>
</body>
</html>
`;

// === 2. MONEY PAGE: SPA TẮM & CẮT TỈA CHÓ MÈO ĐÓN NOEL & TẾT 2027 ===
const noelTetSpaHtml = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Tắm &amp; Cắt Tỉa Chó Mèo Đón Noel, Tết Bình Thạnh | Lumi Pet</title>
  <meta name="description" content="Đặt lịch tắm chó từ 140k, tắm mèo sấy tay 160k, cắt tỉa Poodle/Corgi đón Noel &amp; Tết 2027 tại Lumi Pet 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh)." />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${ORIGIN}/spa-cho-meo-don-noel-tet-binh-thanh/">
  <meta property="og:title" content="Tắm &amp; Cắt Tỉa Chó Mèo Đón Noel, Tết Bình Thạnh | Lumi Pet" />
  <meta property="og:description" content="Làm đẹp cho chó mèo đón Giáng Sinh 2026 &amp; Tết 2027 tại Lumi Pet Phường Gia Định, Bình Thạnh. Tắm chó 140k, tắm mèo 160k, cắt tỉa tạo kiểu 290k." />
  <meta property="og:type" content="website">
  <meta property="og:url" content="${ORIGIN}/spa-cho-meo-don-noel-tet-binh-thanh/">
  <meta property="og:image" content="${ORIGIN}/images/vn-hero-spa.jpg">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${ORIGIN}/spa-cho-meo-don-noel-tet-binh-thanh/#service`,
        name: 'Tắm & Cắt tỉa lông chó mèo đón Noel, Tết 2027 Bình Thạnh - Lumi Pet',
        serviceType: 'Spa tắm vệ sinh và cắt tỉa tạo kiểu chó mèo mùa Noel & Tết',
        provider: { '@id': `${ORIGIN}/#business` },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Phường Gia Định, TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Bình Thạnh, TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Cầu Kiệu (Phú Nhuận), TP. Hồ Chí Minh' },
          { '@type': 'AdministrativeArea', name: 'Phường Tân Định (Quận 1), TP. Hồ Chí Minh' },
        ],
        offers: { '@type': 'AggregateOffer', lowPrice: '140000', highPrice: '850000', priceCurrency: 'VND', offerCount: '24' },
        url: `${ORIGIN}/spa-cho-meo-don-noel-tet-binh-thanh/`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Spa thú cưng Bình Thạnh', item: `${ORIGIN}/spa-thu-cung-binh-thanh/` },
          { '@type': 'ListItem', position: 3, name: 'Spa đón Noel & Tết 2027' },
        ],
      },
    ],
  })}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../spa-thu-cung-binh-thanh/">Spa Bình Thạnh</a> / Tắm &amp; Cắt tỉa đón Noel, Tết</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">Làm đẹp cho Boss · Noel 2026 &amp; Tết 2027</div>
      <h1>Tắm &amp; Cắt tỉa lông chó mèo đón Noel, Tết 2027 tại Bình Thạnh (Phường Gia Định)</h1>
      <p class="lead">Mùa Giáng Sinh và cận Tết là lúc tiệm Spa thú cưng đông khách nhất trong năm. Đặt lịch sớm tại <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong> giúp boss được chăm sóc tỉ mỉ, lên form Poodle/Corgi/Phốc sóc xinh rạng rỡ đi chụp hình Noel &amp; du xuân mà không phải chờ đợi lâu.</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> Biểu phí 2026 chuẩn tại Lumi Pet Phường Gia Định: <strong>tắm vệ sinh chó từ 140.000đ</strong> (8 mốc tới 25kg), <strong>tắm vệ sinh mèo sấy tay 100% từ 160.000đ</strong>, <strong>combo tắm + cạo chó từ 200.000đ / mèo từ 250.000đ</strong> và <strong>cắt tỉa tạo kiểu chó từ 290.000đ</strong>. Dịp cao điểm 25–29 Tết nên đặt trước 7–14 ngày để giữ khung giờ đẹp.
      </div>
      <div class="hero-actions">
        <a class="btn btn-green" href="../dat-lich/">Đặt lịch Spa Noel / Tết</a>
        <a class="btn btn-primary" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Nhắn Zalo chốt giờ đẹp</a>
        <a class="btn btn-secondary" href="tel:0989979675">Gọi 0989 979 675</a>
      </div>
    </div>
    <aside class="hero-side">
      <div class="eyebrow">Mốc đẹp nên đặt lịch</div>
      <strong>Từ 140k – 290k</strong>
      <ul class="mini-list">
        <li>🎄 Đón Noel: Đặt từ 18–23/12</li>
        <li>🎆 Tết Dương lịch: Đặt từ 27–30/12</li>
        <li>🧧 Đón Tết Nguyên Đán: Tỉa trước 5–7 ngày</li>
        <li>🕒 Mở cửa 08:00 – 21:00 mỗi ngày</li>
      </ul>
    </aside>
  </section>

  <figure class="lumi-vn-showcase" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);">
    <img src="../images/vn-hero-spa.jpg" alt="Cắt tỉa lông chó Poodle xinh rạng rỡ đón Noel và Tết 2027 tại Lumi Pet Bình Thạnh" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">🎄 Sấy tay nhẹ nhàng, cắt tỉa tỉ mỉ giúp boss lên hình Noel &amp; du xuân Tết 2027 rạng rỡ tại 27 Võ Trường Toản</figcaption>
  </figure>

  <div class="grid">
    <section class="panel span-7">
      <h2>Bảng giá Spa &amp; Cắt tỉa Chó 2026 (Áp dụng ngày thường)</h2>
      <table class="price-table">
        <thead><tr><th>Cân nặng cún</th><th>Tắm vệ sinh</th><th>Combo Tắm cạo</th><th>Combo Tắm cắt tỉa</th></tr></thead>
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
      <p class="muted">Đã gồm cắt mài móng, vệ sinh tai, cạo lông đệm chân/bụng/hậu môn, vắt tuyến hôi và sấy tay 100%. Giá các ngày cận Tết (nếu có phụ thu cao điểm) sẽ được tiệm thông báo rõ trước khi xác nhận lịch.</p>
    </section>

    <section class="panel span-5">
      <h2>Bảng giá Tắm &amp; Cạo lông Mèo đón Noel, Tết</h2>
      <table class="price-table">
        <thead><tr><th>Cân nặng mèo</th><th>Tắm vệ sinh</th><th>Tắm + cạo</th></tr></thead>
        <tbody>
          <tr><td>Dưới 3kg</td><td><strong>160.000đ</strong></td><td>250.000đ</td></tr>
          <tr><td>3 – 6kg</td><td><strong>220.000đ</strong></td><td>320.000đ</td></tr>
          <tr><td>6 – 10kg</td><td><strong>270.000đ</strong></td><td>380.000đ</td></tr>
        </tbody>
      </table>

      <h3 style="margin-top:16px;">Mẹo để bé đẹp nhất đúng đêm Noel &amp; Mùng 1 Tết</h3>
      <ul>
        <li><strong>Cắt tỉa tạo kiểu:</strong> Nên làm trước Noel hoặc Tết khoảng <strong>5–7 ngày</strong> để đường kéo rủ tự nhiên, lông bông đều nhất khi chụp ảnh và tránh đông kẹt sát ngày.</li>
        <li><strong>Tắm vệ sinh giữ thơm:</strong> Đặt lịch trước <strong>1–3 ngày</strong> để bé sạch bóng, thơm lâu suốt kỳ nghỉ lễ.</li>
        <li><strong>Đi làm bận ban ngày?</strong> Lumi Pet mở tới <strong>21:00 mỗi tối</strong>, bạn có thể đặt khung 18:00–19:30 sau giờ tan làm.</li>
      </ul>
    </section>

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp về Spa đón Noel &amp; Tết tại Lumi Pet</h2>
      <div class="faq">
        <details open><summary>Nên đặt lịch cắt tỉa lông chó đón Tết trước bao nhiêu ngày?</summary><p>Khung 24–29 Tết thường kín lịch sớm nhất năm. Ba mẹ nên đặt trước 7–14 ngày qua website hoặc Zalo 0989 979 675 để chọn được khung giờ trống và tránh phải chờ đợi lâu.</p></details>
        <details><summary>Đặt lịch tắm cho chó mèo đi chơi Noel có bị tăng giá không?</summary><p>Dịp Noel ngày thường Lumi Pet áp dụng đúng bảng giá niêm yết 2026 (chó từ 140k, mèo từ 160k, cắt tỉa từ 290k). Mọi phụ thu mùa cao điểm Tết (nếu áp dụng) luôn được thông báo công khai trước khi chốt lịch.</p></details>
        <details><summary>Tiệm có nhận cắt tỉa Poodle, Corgi, Phốc sóc cận Tết không?</summary><p>Có. Groomer Lumi Pet nhận tỉa form Teddy Bear (Poodle), mông đào (Corgi), bo tròn (Phốc sóc/Bichon) và tắm xả lông chó lớn Golden/Husky/Samoyed lên tới 25kg+.</p></details>
        <details><summary>Nếu đi chơi Tết cần gửi khách sạn thì Lumi Pet có nhận luôn không?</summary><p>Có. Xem chi tiết và giữ phòng sớm tại trang <a href="../khach-san-thu-cung-tet-binh-thanh/">Khách sạn thú cưng Tết 2027 Bình Thạnh</a>.</p></details>
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (P.2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: 24/7</div><div><a href="../dat-lich/">Đặt lịch Spa Noel / Tết →</a></div></div></footer>
<script src="../lumi-ui.js" defer></script>
</body>
</html>
`;

// === 3 & 4. TWO SEASONAL AEO ARTICLES ===
const articles = [
  {
    slug: 'dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh',
    category: 'AEO · Mùa Tết 2027',
    title: 'Đặt Lịch Tắm & Cắt Tỉa Chó Mèo Cận Tết: Nên Đặt Khi Nào?',
    desc: 'Kinh nghiệm đặt lịch tắm chó, tắm mèo và cắt tỉa lông đón Noel & Tết 2027 tại Bình Thạnh: mốc đặt trước 7–14 ngày, bảng giá & lưu ý tránh bé chờ lâu.',
    h1: 'Đặt lịch tắm & cắt tỉa chó mèo cận Tết tại Bình Thạnh: Mốc giờ vàng để bé đẹp không phải chờ',
    dek: 'Cứ từ 22 tháng Chạp trở đi, hầu hết các tiệm Spa thú cưng ở Bình Thạnh đều quá tải lịch cắt tỉa. Dưới đây là 4 mốc thời gian chuẩn giúp boss lên form đẹp nhất đúng mùng 1 Tết mà không bị làm vội hay chờ đợi lâu.',
    img: '../../images/vn-hero-spa.jpg',
    imgAlt: 'Cắt tỉa lông chó mèo cận Tết gọn đẹp tại Lumi Pet Phường Gia Định Bình Thạnh',
    quickAnswer: 'Để <strong>cắt tỉa lông chó đón Tết</strong> đẹp tự nhiên nhất đúng mùng 1, ba mẹ nên đặt lịch cắt tỉa vào khoảng <strong>20–25 tháng Chạp</strong> (trước Tết 5–10 ngày) và đặt giữ suất từ sớm trước <strong>7–14 ngày</strong> tại <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong>. Nếu chỉ tắm vệ sinh giữ thơm thì đặt khoảng 26–28 Tết.',
    toc: [
      ['#moc-dat-lich', '1. Nên cắt tỉa & tắm trước Tết bao nhiêu ngày?'],
      ['#ly-do-tranh-sat-ngay', '2. 3 lý do không nên để tới 29 Tết mới đi cắt tỉa'],
      ['#bang-gia-tham-khao', '3. Bảng giá Spa 2026 & lưu ý cao điểm Tết'],
      ['#faq-can-tet', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="moc-dat-lich">1. Lịch vàng làm đẹp cho chó mèo đón Tết 2027</h2>
        <ul>
          <li><strong>Gói Combo Tắm + Cắt tỉa tạo kiểu (Poodle, Corgi, Phốc sóc, Bichon, Shih Tzu):</strong> Lý tưởng nhất là làm vào <strong>20 – 25 tháng Chạp</strong>. Sau 3–5 ngày, lớp lông vừa rủ tự nhiên, mềm mượt nhất đúng dịp giao thừa và mùng 1, đồng thời Groomer có đủ thời gian tỉa kỹ không bị gấp rút.</li>
          <li><strong>Gói Tắm vệ sinh 10 bước (chó lông ngắn, chó lớn Golden/Husky &amp; mèo):</strong> Nên hẹn vào <strong>26 – 28 tháng Chạp</strong> để bé sạch thơm kéo dài xuyên suốt mùng 1 – mùng 4 Tết.</li>
          <li><strong>Thời điểm chốt lịch với tiệm:</strong> Nên nhắn Zalo <strong>0989 979 675</strong> hoặc đặt qua <a href="../../dat-lich/">form Đặt lịch Online</a> trước ít nhất <strong>7–14 ngày</strong>.</li>
        </ul>

        <h2 id="ly-do-tranh-sat-ngay">2. 3 lý do không nên đợi sát 29 Tết mới mang bé đi Spa</h2>
        <ol>
          <li><strong>Kín suất Groomer giỏi:</strong> Các khung giờ đẹp buổi sáng và chiều tối 27–29 Tết thường hết chỗ sớm nhất.</li>
          <li><strong>Bé dễ căng thẳng khi tiệm quá đông:</strong> Đặc biệt với mèo hoặc chó nhút nhát, đi vào ngày 22–25 Tết không gian sẽ thoáng và yên tĩnh hơn rất nhiều.</li>
          <li><strong>Kịp xử lý nếu lông bé bị rối bết:</strong> Nếu bé có nút rối lâu ngày, đi sớm giúp thợ đủ thời gian chải gỡ cẩn thận thay vì phải cạo ngắn vì thiếu thời gian.</li>
        </ol>

        <h2 id="bang-gia-tham-khao">3. Bảng giá Spa 2026 chuẩn &amp; quy định dịp cao điểm</h2>
        <p>Bảng giá ngày thường niêm yết công khai tại <a href="../../spa-cho-meo-don-noel-tet-binh-thanh/">trang Spa đón Noel &amp; Tết Lumi Pet</a>: tắm chó từ <strong>140.000đ – 550.000đ</strong> (8 mốc tới 25kg), tắm mèo sấy tay 100% từ <strong>160.000đ – 270.000đ</strong>, cắt tỉa chó từ <strong>290.000đ – 850.000đ</strong>. Dịp cận Tết (nếu có áp dụng phụ thu nhân sự cao điểm) tiệm luôn thông báo rõ ràng trước khi xác nhận lịch hẹn.</p>`,
    faqs: [
      ['28 – 29 Tết Lumi Pet Bình Thạnh có còn nhận tắm chó mèo không?', 'Lịch làm việc chính xác từng ngày cận Tết sẽ được thông báo trước trên website và Zalo 0989 979 675. Ba mẹ nên đặt trước sớm 7–14 ngày để chắc chắn có suất.'],
      ['Cắt tỉa lông cho Poodle trước Tết 1 tuần có bị dài nhanh quá không?', 'Không. Sau 5–7 ngày là lúc lông Poodle vào nếp bồng tự nhiên và đẹp nhất, giữ dáng gọn gàng suốt hơn 3 tuần sau Tết.'],
      ['Tắm chó mèo cận Tết có bị nhốt lồng sấy nhiệt để làm cho nhanh không?', 'Không. Lumi Pet giữ nguyên tiêu chuẩn thợ sấy tay 100% nhẹ nhàng để bảo vệ an toàn cho bé; vì vậy tiệm giới hạn số lượng nhận mỗi khung giờ và khuyến khích đặt lịch trước.'],
      ['Có thể đặt lịch tắm cho bé vào buổi tối sau giờ tan làm cuối năm không?', 'Có. Lumi Pet mở cửa 08:00 – 21:00 mỗi ngày, nhận ca tắm tối sau giờ hành chính (nên gửi bé trước 19:30).'],
    ],
  },
  {
    slug: 'gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh',
    category: 'AEO · Noel & Tết Tây',
    title: 'Gửi Chó Mèo Dịp Noel & Tết Dương Lịch Bình Thạnh | Lumi',
    desc: 'Đi chơi Noel & nghỉ lễ Tết Dương lịch cần gửi chó mèo tại Phường Gia Định, Bình Thạnh? Xem bảng giá phòng riêng máy lạnh 24/24 và cách giữ phòng sớm.',
    h1: 'Gửi chó mèo dịp Noel (Giáng Sinh) & Tết Dương lịch tại Bình Thạnh: Bảng giá & Cách đặt phòng',
    dek: 'Dịp Noel 24–25/12 và kỳ nghỉ Tết Dương lịch 01/01 là đợt cao điểm du lịch ngắn ngày 2–4 đêm đầu tiên trong mùa lễ cuối năm. Đặt phòng sớm giúp bé có không gian riêng thoải mái và ba mẹ yên tâm vi vu.',
    img: '../../images/vn-hotel-cat-vip.jpg',
    imgAlt: 'Phòng khách sạn riêng ấm cúng sạch sẽ cho chó mèo dịp Noel và Tết Dương lịch tại Lumi Pet',
    quickAnswer: 'Dịp <strong>Noel &amp; Tết Dương lịch</strong>, <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong> nhận gửi chó mèo 24/7 với phòng riêng sạch sẽ, máy lạnh 24/24 và quay video tương tác mỗi ngày qua Zalo. Giá tham khảo ngày thường từ <strong>100.000đ – 250.000đ/ngày</strong> theo cân nặng (trên 5 ngày giảm 5%, trên 10 ngày giảm 8%). Nên book phòng trước 5–10 ngày.',
    toc: [
      ['#gia-noel-tet-tay', '1. Bảng giá gửi chó mèo theo cân nặng'],
      ['#check-in-noel', '2. Nên đặt phòng Noel & Tết Dương lịch trước bao lâu?'],
      ['#chuan-bi-do', '3. 4 món cần mang theo khi gửi bé 2–4 ngày'],
      ['#faq-noel-hotel', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="gia-noel-tet-tay">1. Bảng giá lưu trú Pet Hotel 24/7 theo cân nặng</h2>
        <table>
          <thead><tr><th>Trọng lượng bé</th><th>Giá ngày thường / ngày</th><th>Bao gồm trong gói</th></tr></thead>
          <tbody>
            <tr><td>Dưới 3kg</td><td><strong>100.000đ</strong></td><td rowspan="5">• Không gian phòng/chuồng riêng sạch sẽ<br>• Máy lạnh mát mẻ 24/24<br>• Bữa ăn theo menu (hoặc thức ăn chủ gửi)<br>• Quay video tương tác gửi Zalo mỗi ngày<br>• Nhân viên trực chăm sóc 24/7</td></tr>
            <tr><td>3 – 6kg</td><td><strong>120.000đ</strong></td></tr>
            <tr><td>6 – 9kg</td><td><strong>160.000đ</strong></td></tr>
            <tr><td>9 – 12kg</td><td><strong>200.000đ</strong></td></tr>
            <tr><td>12 – 15kg</td><td><strong>250.000đ</strong></td></tr>
          </tbody>
        </table>
        <p>Bé trên 15kg vui lòng nhắn Zalo <strong>0989 979 675</strong> để tiệm kiểm tra phòng lớn và báo giá. Ngày lễ cao điểm (nếu có phụ thu lễ) được xác nhận rõ trước khi chốt phòng. Xem thêm trang <a href="../../khach-san-thu-cung-tet-binh-thanh/">Khách sạn thú cưng Tết 2027 Bình Thạnh</a>.</p>

        <h2 id="check-in-noel">2. Thời điểm đẹp để giữ phòng dịp Giáng Sinh &amp; Tết Tây</h2>
        <ul>
          <li><strong>Dịp Noel (24–25/12):</strong> Đặt trước <strong>5–7 ngày</strong> để chọn phòng đẹp và kết hợp tắm vệ sinh đón Giáng Sinh nếu cần.</li>
          <li><strong>Dịp Tết Dương lịch (31/12 – 03/01):</strong> Kỳ nghỉ 3–4 ngày rất đông khách đi Đà Lạt, Vũng Tàu, Phú Quốc → nên chốt phòng trước <strong>7–14 ngày</strong> trên trang <a href="../../dat-phong/">Book phòng Online</a>.</li>
        </ul>

        <h2 id="chuan-bi-do">3. 4 món cần chuẩn bị khi gửi bé đi chơi lễ 2–4 ngày</h2>
        <ol>
          <li><strong>Sổ tiêm phòng (hoặc ảnh chụp mũi tiêm):</strong> Đảm bảo bé đã tiêm ngừa đầy đủ để an toàn khi lưu trú.</li>
          <li><strong>Thức ăn quen bụng chia sẵn bữa:</strong> Đặc biệt hữu ích cho mèo và chó bụng nhạy cảm để tránh lạ đồ ăn.</li>
          <li><strong>1 chiếc khăn/áo có mùi nhà:</strong> Giúp bé ngủ ngon ngay từ đêm đầu tiên.</li>
          <li><strong>Lịch sinh hoạt ngắn gọn:</strong> Ghi chú giờ ăn, thói quen đi vệ sinh và tính cách của bé cho nhân viên Lumi Pet.</li>
        </ol>`,
    faqs: [
      ['Đêm 24/12 Noel và ngày 1/1 Tết Dương lịch Lumi Pet có mở cửa nhận trả bé không?', 'Có. Quầy tiếp nhận mở cửa 08:00 – 21:00 tất cả các ngày và khu Hotel có nhân viên trực trông giữ bé 24/7. Bạn chỉ cần đặt lịch trước để tiệm sắp xếp chu đáo nhất.'],
      ['Đi chơi 1–2 đêm dịp Noel gửi mèo tại Lumi Pet có ổn không?', 'Rất ổn. Mèo được ở khu phòng riêng tách biệt khu chó, yên tĩnh, máy lạnh 24/24 và nhân viên quay video cập nhật hằng ngày qua Zalo.'],
      ['Nếu gửi bé 6 ngày xuyên dịp Tết Dương lịch có được giảm 5% không?', 'Chính sách ngày thường giảm 5% cho kỳ trên 5 ngày và 8% trên 10 ngày. Với các ngày trùng Lễ, nhân viên sẽ báo rõ mức giá áp dụng và tổng chi phí trọn kỳ trước khi bạn đặt phòng.'],
      ['Khách ở Phú Nhuận hoặc Quận 1 qua gửi bé có tiện không?', 'Rất tiện — từ Phan Xích Long (Phường Cầu Kiệu) hoặc Cầu Bông (Phường Tân Định Q1) chạy sang 27 Võ Trường Toản, Phường Gia Định chỉ mất 4–6 phút.'],
    ],
  },
];

// Write the 2 seasonal money pages
fs.mkdirSync(path.join(PUBLIC_DIR, 'khach-san-thu-cung-tet-binh-thanh'), { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'khach-san-thu-cung-tet-binh-thanh', 'index.html'), tetHotelHtml, 'utf8');
console.log('[CREATED] /khach-san-thu-cung-tet-binh-thanh/');

fs.mkdirSync(path.join(PUBLIC_DIR, 'spa-cho-meo-don-noel-tet-binh-thanh'), { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'spa-cho-meo-don-noel-tet-binh-thanh', 'index.html'), noelTetSpaHtml, 'utf8');
console.log('[CREATED] /spa-cho-meo-don-noel-tet-binh-thanh/');

// Write the 2 seasonal AEO articles
for (const a of articles) {
  if (a.title.length > 62) throw new Error(`Title > 62 (${a.title.length}): ${a.slug}`);
  if (a.desc.length < 130 || a.desc.length > 160) throw new Error(`Desc out of range (${a.desc.length}): ${a.slug}`);
  const url = `${ORIGIN}/bai-viet/${a.slug}/`;
  const escTitle = a.title.replaceAll('&', '&amp;');
  const escDesc = a.desc.replaceAll('&', '&amp;');
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.h1,
        description: a.desc,
        datePublished: TODAY,
        dateModified: TODAY,
        author: { '@id': `${ORIGIN}/gioi-thieu/#lead-groomer` },
        publisher: { '@id': `${ORIGIN}/#business` },
        mainEntityOfPage: url,
        image: `${ORIGIN}/${a.img.replace('../../', '')}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Kiến thức', item: `${ORIGIN}/bai-viet/` },
          { '@type': 'ListItem', position: 3, name: a.title },
        ],
      },
    ],
  };
  const faqHtml = a.faqs.map(([q, ans], idx) => `<details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${ans}</p></details>`).join('\n          ');
  const tocHtml = a.toc.map(([href, label]) => `<a href="${href}">${label}</a>`).join('\n        ');
  const html = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escTitle}</title>
  <meta name="description" content="${escDesc}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${escTitle}" />
  <meta property="og:description" content="${escDesc}" />
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/${a.img.replace('../../', '')}">
  <link rel="stylesheet" href="../../lumi-seo.css">
  <link rel="stylesheet" href="../../lumi-blog.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="blog-shell">
  <div class="breadcrumb"><a href="../../">Lumi Pet</a> / <a href="../">Kiến thức</a> / ${escTitle}</div>
  <article>
    <header class="article-hero">
      <span class="article-category">${a.category}</span>
      <h1>${a.h1}</h1>
      <p class="article-dek">${a.dek}</p>
      <div class="article-meta"><span>Cập nhật: 25/11/2026</span><span>6 phút đọc</span><span>Kiểm duyệt: Đội ngũ Lumi Pet Bình Thạnh</span></div>
      <figure class="article-visual"><img src="${a.img}" alt="${a.imgAlt}" loading="lazy"><figcaption>${a.imgAlt}</figcaption></figure>
    </header>
    <div class="article-layout">
      <div class="article-prose">
        <p><strong>Câu trả lời ngắn:</strong> ${a.quickAnswer}</p>
        ${a.body}
        <h2 id="${a.toc[a.toc.length - 1][0].slice(1)}">${a.toc[a.toc.length - 1][1]}</h2>
        <div class="faq">
          ${faqHtml}
        </div>
        <section class="blog-cta">
          <h2>Đặt lịch &amp; Giữ phòng sớm mùa Noel – Tết 2027</h2>
          <p>Chốt lịch sớm giúp bé có khung giờ đẹp và phòng riêng thoáng mát tại 27 Võ Trường Toản, Phường Gia Định.</p>
          <div class="blog-cta-actions">
            <a class="btn" href="../../dat-lich/">Đặt lịch Spa</a>
            <a class="btn btn-secondary" href="../../dat-phong/">Book phòng Hotel</a>
            <a class="btn btn-secondary" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Nhắn Zalo 0989 979 675</a>
          </div>
        </section>
      </div>
      <aside class="article-toc">
        <strong>Trong bài này</strong>
        ${tocHtml}
      </aside>
    </div>
  </article>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (P.2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: 24/7</div><div><a href="../">Kiến thức →</a></div></div></footer>
<script src="../../lumi-ui.js" defer></script>
</body>
</html>
`;
  const dir = path.join(PUBLIC_DIR, 'bai-viet', a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`[CREATED] /bai-viet/${a.slug}/ | Title(${a.title.length}c) | Desc(${a.desc.length}c)`);
}
