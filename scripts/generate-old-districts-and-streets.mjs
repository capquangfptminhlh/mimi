import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';

const DEFAULT_GALLERY = [
  { img: 'vn-bath-dog.jpg', alt: 'Tắm vệ sinh chó 10 bước sấy tay 100% tại Lumi Pet 27 Võ Trường Toản', cap: '🛁 Tắm vệ sinh 10 bước & sấy tay 100% không lồng sấy nhiệt' },
  { img: 'vn-spa-cat.jpg', alt: 'Tắm mèo khu riêng yên tĩnh giảm stress tại Lumi Pet', cap: '🐱 Tắm mèo khu riêng tách biệt chó, giá từ 160.000đ' },
  { img: 'vn-grooming-corgi.jpg', alt: 'Cắt tỉa lông tạo kiểu Corgi Poodle Phốc sóc tại Lumi Pet', cap: '✂️ Grooming cắt tỉa kéo chuẩn phom Poodle, Corgi từ 290k' },
  { img: 'vn-hotel-cabins.jpg', alt: 'Phòng khách sạn thú cưng riêng tư máy lạnh 24/24 tại Lumi Pet', cap: '🏨 Pet Hotel phòng riêng máy lạnh 24/24, gửi video Zalo mỗi ngày' },
];

function buildGallery(items) {
  return `    <section class="panel span-12 lumi-photo-gallery">
      <h2>Hình ảnh thực tế dịch vụ Spa, Grooming &amp; Pet Hotel tại Lumi Pet</h2>
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

const DISTRICT_HUB_LINKS =
  '<p class="muted" style="margin-top:12px;"><strong>Hệ thống khu vực theo Quận cũ &amp; Tuyến đường:</strong> ' +
  '<a href="../spa-thu-cung-binh-thanh/">Quận Bình Thạnh</a> · ' +
  '<a href="../spa-thu-cung-quan-phu-nhuan/">Quận Phú Nhuận</a> · ' +
  '<a href="../spa-thu-cung-quan-1/">Quận 1</a> · ' +
  '<a href="../spa-thu-cung-quan-go-vap/">Quận Gò Vấp</a> · ' +
  '<a href="../spa-thu-cung-quan-2-thao-dien/">Quận 2 (Thảo Điền)</a> · ' +
  '<a href="../spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/">Full 100+ tuyến đường gần Lumi Pet</a></p>';

const OLD_DISTRICTS = [
  {
    slug: 'spa-thu-cung-quan-phu-nhuan',
    shortName: 'Quận Phú Nhuận',
    eyebrow: 'Quận Phú Nhuận cũ · Đủ 3 phường mới & 25+ tuyến đường',
    title: 'Tắm Chó Mèo, Spa & Hotel Quận Phú Nhuận | Lumi Pet',
    description:
      'Spa thú cưng gần Quận Phú Nhuận (P. Cầu Kiệu, Đức Nhuận, Phú Nhuận & Phan Xích Long, Phan Đăng Lưu) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, mèo 160k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Quận Phú Nhuận (Full 3 phường & 25+ đường)',
    heroImg: 'vn-hero-spa.jpg',
    heroAlt: 'Spa tắm vệ sinh và cắt tỉa chó mèo phục vụ khách Quận Phú Nhuận tại Lumi Pet',
    heroCap: '✨ Khách từ Quận Phú Nhuận đi thẳng Phan Đăng Lưu chỉ 5–10 phút tới Lumi Pet 27 Võ Trường Toản — tắm sấy tay 100%',
    travelTime: '5–10 phút',
    wardsHtml:
      '<li><a href="../spa-thu-cung-phuong-cau-kieu-phu-nhuan/"><strong>Phường Cầu Kiệu</strong></a> (P.1, P.2, P.7 &amp; phần P.15 cũ — Phan Xích Long, khu Hoa, Trường Sa): <strong>4–6 phút</strong></li>' +
      '<li><a href="../spa-thu-cung-phuong-duc-nhuan-phu-nhuan/"><strong>Phường Đức Nhuận</strong></a> (P.4, P.5, P.9 cũ — Thích Quảng Đức, Nguyễn Kiệm, Đào Duy Anh): <strong>5–7 phút</strong></li>' +
      '<li><a href="../spa-thu-cung-phuong-phu-nhuan/"><strong>Phường Phú Nhuận</strong></a> (P.8, P.10, P.11, P.13 &amp; phần P.15 cũ — Nguyễn Văn Trỗi, Huỳnh Văn Bánh): <strong>8–10 phút</strong></li>',
    streetsList: [
      'Phan Đăng Lưu', 'Phan Xích Long', 'Thích Quảng Đức', 'Nguyễn Kiệm', 'Hoàng Văn Thụ', 'Nguyễn Văn Trỗi',
      'Huỳnh Văn Bánh', 'Trần Huy Liệu', 'Phan Đình Phùng', 'Cô Giang', 'Cô Bắc', 'Hoa Lan', 'Hoa Phượng',
      'Hoa Sứ', 'Hoa Đào', 'Hoa Hồng', 'Hoa Mai', 'Hoa Cau', 'Trường Sa', 'Hoàng Sa', 'Đặng Văn Ngữ',
      'Nguyễn Trọng Tuyển', 'Đào Duy Anh', 'Hồ Văn Huê', 'Phùng Văn Cung', 'Trương Quốc Dung', 'Cầm Bá Thước', 'Đoàn Thị Điểm',
    ],
    routes: [
      '<strong>Trục chính Phan Đăng Lưu (4–8 phút):</strong> Từ Ngã tư Phú Nhuận hoặc Phan Xích Long chạy thẳng Phan Đăng Lưu hướng Bệnh viện Gia Định → rẽ vào Võ Trường Toản số 27.',
      '<strong>Từ khu Hoa / Cư xá Phan Xích Long (4–5 phút):</strong> Qua Cầu Hoàng Hoa Thám hoặc rẽ Phan Đăng Lưu → Võ Trường Toản số 27.',
      '<strong>Từ Nguyễn Văn Trỗi / Huỳnh Văn Bánh (8–10 phút):</strong> Nối qua Phan Đình Phùng hoặc Nguyễn Trọng Tuyển → Phan Đăng Lưu → 27 Võ Trường Toản.',
    ],
    areaServed: ['Quận Phú Nhuận, TP. Hồ Chí Minh', 'Phường Cầu Kiệu, TP. Hồ Chí Minh', 'Phường Đức Nhuận, TP. Hồ Chí Minh', 'Phường Phú Nhuận, TP. Hồ Chí Minh'],
    faqs: [
      ['Từ Quận Phú Nhuận sang Lumi Pet 27 Võ Trường Toản bao xa?', 'Chỉ 1 – 3km (5–10 phút chạy xe thẳng trục Phan Đăng Lưu), gần như sát vách các tuyến đường Phan Xích Long, Thích Quảng Đức, Nguyễn Kiệm.'],
      ['Giá tắm chó, tắm mèo cho khách Quận Phú Nhuận năm 2026 bao nhiêu?', 'Tắm vệ sinh chó 140.000đ – 550.000đ (8 mốc tới 25kg), tắm vệ sinh mèo sấy tay 100% giá 160.000đ – 270.000đ, cắt tỉa chó từ 290.000đ, Pet Hotel 24/7 từ 100.000đ/ngày.'],
      ['Khách Quận Phú Nhuận đi làm về muộn có gửi tắm tối được không?', 'Được. Lumi Pet mở cửa 08:00 – 21:00 tất cả các ngày (không phụ thu ca tối), nhận ca tắm muộn tới 19:30 để sấy khô kỹ 100%.'],
    ],
  },
  {
    slug: 'spa-thu-cung-quan-1',
    shortName: 'Quận 1',
    eyebrow: 'Quận 1 cũ · Qua Cầu Bông & Cầu Thị Nghè chỉ 5–10 phút',
    title: 'Tắm Chó Mèo, Spa & Hotel Quận 1 (Gần Cầu Bông) | Lumi Pet',
    description:
      'Spa thú cưng gần Quận 1 (P. Tân Định, P. Sài Gòn, Đa Kao, Đinh Tiên Hoàng, Hai Bà Trưng) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, mèo 160k, Hotel 100k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Quận 1 (Full 24+ tuyến đường)',
    heroImg: 'vn-spa-cat.jpg',
    heroAlt: 'Spa tắm vệ sinh chó mèo và khách sạn thú cưng gần Quận 1 qua Cầu Bông tại Lumi Pet',
    heroCap: '🌉 Chỉ qua Cầu Bông hoặc Cầu Thị Nghè 5–10 phút từ Quận 1 tới Lumi Pet 27 Võ Trường Toản — bảng giá niêm yết rõ ràng',
    travelTime: '5–10 phút',
    wardsHtml:
      '<li><a href="../spa-thu-cung-phuong-tan-dinh-quan-1/"><strong>Phường Tân Định</strong></a> (Tân Định + phần Đa Kao cũ — Đinh Tiên Hoàng, Hai Bà Trưng, Trần Quang Khải): <strong>5–7 phút</strong></li>' +
      '<li><a href="../spa-thu-cung-phuong-sai-gon-quan-1/"><strong>Phường Sài Gòn</strong></a> (Bến Nghé + phần Đa Kao &amp; Nguyễn Thái Bình cũ — Nguyễn Thị Minh Khai, Lê Duẩn): <strong>7–10 phút</strong></li>',
    streetsList: [
      'Đinh Tiên Hoàng', 'Hai Bà Trưng', 'Võ Thị Sáu', 'Trần Quang Khải', 'Trần Khánh Dư', 'Nguyễn Thị Minh Khai',
      'Nguyễn Bỉnh Khiêm', 'Điện Biên Phủ', 'Phan Kế Bính', 'Mạc Đĩnh Chi', 'Lê Duẩn', 'Hoàng Sa',
      'Bà Lê Chân', 'Thạch Thị Thanh', 'Đặng Dung', 'Nguyễn Hữu Cầu', 'Nguyễn Văn Giai', 'Nguyễn Phi Khanh',
      'Đinh Công Tráng', 'Mai Thị Lựu', 'Nguyễn Văn Thủ', 'Nguyễn Đình Chiểu', 'Cầu Bông', 'Cầu Thị Nghè', 'Chợ Tân Định',
    ],
    routes: [
      '<strong>Qua Cầu Bông (5–6 phút):</strong> Từ Đinh Tiên Hoàng, Võ Thị Sáu, Trần Quang Khải, Hai Bà Trưng chạy thẳng qua Cầu Bông → đường Lê Văn Duyệt → rẽ phải Võ Trường Toản số 27.',
      '<strong>Qua Cầu Thị Nghè (7–8 phút):</strong> Từ Nguyễn Thị Minh Khai, Nguyễn Bỉnh Khiêm, Thảo Cầm Viên qua Cầu Thị Nghè → rẽ trái hướng Lê Văn Duyệt / Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Gửi bé giờ đi làm:</strong> Tiệm mở từ 08:00 sáng tới 21:00 tối — tiện gửi bé sáng đi làm tại Quận 1 và đón chiều về.',
    ],
    areaServed: ['Quận 1, TP. Hồ Chí Minh', 'Phường Tân Định, TP. Hồ Chí Minh', 'Phường Sài Gòn, TP. Hồ Chí Minh'],
    faqs: [
      ['Từ Quận 1 qua Lumi Pet 27 Võ Trường Toản đi đường nào gần nhất?', 'Gần nhất là chạy thẳng Đinh Tiên Hoàng qua Cầu Bông (5–6 phút) hoặc qua Cầu Thị Nghè (7–8 phút), đường thẳng dễ đi cả xe máy lẫn ô tô.'],
      ['Giá Spa & Pet Hotel cho khách Quận 1 tại Lumi Pet có chênh lệch không?', 'Không. Lumi Pet niêm yết 1 biểu phí chung 2026: tắm chó từ 140.000đ, tắm mèo 160.000đ, cắt tỉa từ 290.000đ và Pet Hotel từ 100.000đ/ngày.'],
      ['Lumi Pet có nhận gửi chó mèo dài ngày khi khách Quận 1 đi công tác không?', 'Có. Khách sạn thú cưng 24/7 phòng riêng máy lạnh, quay video Zalo hằng ngày. Ngày thường gửi trên 5 ngày giảm 5%, trên 10 ngày giảm 8%.'],
    ],
  },
  {
    slug: 'spa-thu-cung-quan-go-vap',
    shortName: 'Quận Gò Vấp',
    eyebrow: 'Quận Gò Vấp cũ · Trục Lê Quang Định, Phan Văn Trị & Phạm Văn Đồng',
    title: 'Tắm Chó Mèo, Spa & Hotel Quận Gò Vấp | Lumi Pet',
    description:
      'Spa thú cưng gần Quận Gò Vấp (P. Hạnh Thông, P. An Nhơn, Lê Quang Định, Phan Văn Trị, Phạm Văn Đồng) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, mèo 160k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Quận Gò Vấp (Full 20+ tuyến đường)',
    heroImg: 'vn-evening-spa.jpg',
    heroAlt: 'Tắm chó mèo sấy tay 100% mở cửa đến 21h gần Quận Gò Vấp tại Lumi Pet',
    heroCap: '🌙 Chạy thẳng Lê Quang Định hoặc Phan Văn Trị từ Quận Gò Vấp sang Lumi Pet chỉ 8–12 phút — mở cửa 08:00 – 21:00',
    travelTime: '8–12 phút',
    wardsHtml:
      '<li><a href="../spa-thu-cung-phuong-hanh-thong-go-vap/"><strong>Phường Hạnh Thông</strong></a> (P.1, P.3 cũ — Lê Quang Định, Phạm Văn Đồng, Nguyễn Thái Sơn, Nguyễn Văn Nghi): <strong>8–10 phút</strong></li>' +
      '<li><a href="../spa-thu-cung-phuong-an-nhon-go-vap/"><strong>Phường An Nhơn</strong></a> (P.5, P.6 cũ — Phan Văn Trị, Dương Quảng Hàm, Emart Gò Vấp): <strong>10–12 phút</strong></li>',
    streetsList: [
      'Lê Quang Định', 'Phạm Văn Đồng', 'Phan Văn Trị', 'Nguyễn Thái Sơn', 'Nguyễn Văn Nghi', 'Dương Quảng Hàm',
      'Nguyễn Kiệm', 'Nguyễn Oanh', 'Phạm Ngũ Lão', 'Quang Trung', 'Thống Nhất', 'Lê Lợi',
      'Bạch Đằng (Gò Vấp)', 'Trần Bá Giao', 'Nguyễn Văn Lượng', 'Lê Đức Thọ', 'CityLand Park Hills',
      'CityLand Center Hills', 'Ngã 6 Gò Vấp', 'Emart Phan Văn Trị', 'Chợ Gò Vấp',
    ],
    routes: [
      '<strong>Trục thẳng Lê Quang Định (8–10 phút):</strong> Từ Chợ Gò Vấp / Phạm Văn Đồng chạy thẳng 1 mạch Lê Quang Định hướng về Chợ Bà Chiểu → rẽ Võ Trường Toản số 27.',
      '<strong>Từ Phan Văn Trị / CityLand / Emart (10–12 phút):</strong> Chạy Phan Văn Trị qua Phạm Văn Đồng → nối tiếp Nơ Trang Long hoặc rẽ Lê Quang Định sang 27 Võ Trường Toản.',
      '<strong>Từ Nguyễn Thái Sơn / Nguyễn Kiệm (9–10 phút):</strong> Đi theo Nguyễn Kiệm → Phan Đăng Lưu → hướng Bệnh viện Gia Định → 27 Võ Trường Toản.',
    ],
    areaServed: ['Quận Gò Vấp, TP. Hồ Chí Minh', 'Phường Hạnh Thông, TP. Hồ Chí Minh', 'Phường An Nhơn, TP. Hồ Chí Minh'],
    faqs: [
      ['Từ Quận Gò Vấp sang Lumi Pet 27 Võ Trường Toản bao xa?', 'Khoảng 2,5 – 4,5km (8–12 phút chạy thẳng theo trục Lê Quang Định hoặc Phan Văn Trị), rất dễ di chuyển.'],
      ['Lumi Pet có nhận tắm chó lớn 15–25kg cho khách Gò Vấp không?', 'Có. Bảng giá chó chia rõ 8 mốc cân nặng tới 25kg (430.000đ – 550.000đ cho nhóm 15–25kg), sấy tay khô kiệt tận chân lớp lông kép.'],
      ['Tắm mèo tại Lumi Pet có khu riêng và không dùng lồng sấy nhiệt không?', 'Đúng. Mèo được tắm tách biệt khu chó, thợ sấy tay 100% bằng máy ion giảm ồn, giá từ 160.000đ – 270.000đ.'],
    ],
  },
  {
    slug: 'spa-thu-cung-quan-2-thao-dien',
    shortName: 'Quận 2 – Thảo Điền',
    eyebrow: 'Quận 2 cũ · Thảo Điền, Thủ Thiêm, An Phú (Phường An Khánh)',
    title: 'Tắm Chó Mèo, Spa & Hotel Quận 2 – Thảo Điền | Lumi Pet',
    description:
      'Spa thú cưng & Pet Hotel gần Quận 2, Thảo Điền (Phường An Khánh, Xuân Thủy, Masteri, Thủ Thiêm) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, Hotel 100k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Quận 2 – Thảo Điền (Full 20+ tuyến đường)',
    heroImg: 'vn-hotel-cat-vip.jpg',
    heroAlt: 'Spa thú cưng và khách sạn mèo cao cấp gần Quận 2 Thảo Điền tại Lumi Pet',
    heroCap: '🌉 Qua Cầu Sài Gòn 10–15 phút từ Thảo Điền, Thủ Thiêm, An Phú tới Lumi Pet 27 Võ Trường Toản — tiêu chuẩn sấy tay 100%',
    travelTime: '10–15 phút',
    wardsHtml:
      '<li><a href="../spa-thu-cung-phuong-an-khanh-thao-dien/"><strong>Phường An Khánh</strong></a> (Thảo Điền, An Phú, Thủ Thiêm, An Lợi Đông, An Khánh cũ): <strong>10–15 phút</strong></li>' +
      '<li><a href="../spa-thu-cung-phuong-thanh-my-tay/"><strong>Phường Thạnh Mỹ Tây</strong></a> (nút giao Cầu Sài Gòn, Điện Biên Phủ, Vinhomes Central Park): <strong>6–8 phút</strong></li>',
    streetsList: [
      'Thảo Điền', 'Xuân Thủy', 'Quốc Hương', 'Nguyễn Văn Hưởng', 'Tống Hữu Định', 'Trần Ngọc Diện',
      'Lê Văn Miến', 'Song Hành Xa Lộ Hà Nội', 'Trần Não', 'Lương Định Của', 'Mai Chí Thọ', 'Nguyễn Hoàng',
      'Vũ Tông Phan', 'Masteri Thảo Điền', 'Gateway Thảo Điền', 'The Nassim', 'Estella Heights',
      'Khu đô thị Sala Thủ Thiêm', 'Empire City', 'Cầu Sài Gòn', 'Cầu Ba Son',
    ],
    routes: [
      '<strong>Qua Cầu Sài Gòn (10–14 phút):</strong> Từ Thảo Điền / Xuân Thủy / Masteri qua Cầu Sài Gòn → Điện Biên Phủ → rẽ phải Xô Viết Nghệ Tĩnh / Bạch Đằng hướng Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Qua Cầu Ba Son / Cầu Thủ Thiêm (12–15 phút):</strong> Từ Thủ Thiêm / Trần Não / Sala chạy sang Nguyễn Hữu Cảnh → Điện Biên Phủ → Lê Văn Duyệt → 27 Võ Trường Toản.',
      '<strong>Tiện gửi Pet Hotel dài ngày:</strong> Nhiều khách Thảo Điền gửi bé dài ngày (5–10+ ngày) với mức giá ngày thường chỉ từ 100k–250k/ngày (giảm 5–8% dài ngày) và video Zalo mỗi ngày.',
    ],
    areaServed: ['Quận 2, TP. Hồ Chí Minh', 'Thảo Điền, TP. Hồ Chí Minh', 'Phường An Khánh, TP. Hồ Chí Minh'],
    faqs: [
      ['Từ Quận 2 (Thảo Điền / Thủ Thiêm) sang Lumi Pet mất bao lâu?', 'Khoảng 10–15 phút qua Cầu Sài Gòn hoặc Cầu Thủ Thiêm, đường rộng tiện đi cả xe máy lẫn ô tô/taxi Pet-friendly.'],
      ['Khách sạn thú cưng Lumi Pet có phòng riêng cho mèo và chó không?', 'Có. Phòng riêng sạch sẽ, máy lạnh 24/24, khử khuẩn định kỳ, có nhân viên trực chăm sóc 24/7 và quay video Zalo mỗi ngày.'],
      ['Cắt tỉa lông Poodle, Corgi, Phốc sóc giá bao nhiêu năm 2026?', 'Combo tắm + cắt tỉa từ 290.000đ (<3kg), 360.000đ (3–6kg), 430.000đ (6–9kg) đến 850.000đ (20–25kg), minh bạch trước khi làm.'],
    ],
  },
];

function buildDistrictHtml(d) {
  const url = `${ORIGIN}/${d.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: d.title,
        serviceType: `Tắm chó, tắm mèo, cắt tỉa lông grooming và khách sạn thú cưng 24/7 phục vụ ${d.shortName}`,
        provider: { '@id': `${ORIGIN}/#business` },
        areaServed: d.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '100000',
          highPrice: '850000',
          priceCurrency: 'VND',
          offerCount: '35',
        },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Spa & Hotel Bình Thạnh', item: `${ORIGIN}/spa-thu-cung-binh-thanh/` },
          { '@type': 'ListItem', position: 3, name: d.shortName },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${d.title.replaceAll('&', '&amp;')}</title>
  <meta name="description" content="${d.description.replaceAll('&', '&amp;')}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${d.title.replaceAll('&', '&amp;')}" />
  <meta property="og:description" content="${d.description.replaceAll('&', '&amp;')}" />
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/images/${d.heroImg}">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../spa-thu-cung-binh-thanh/">Spa &amp; Hotel</a> / ${d.shortName}</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">${d.eyebrow}</div>
      <h1>${d.h1.replaceAll('&', '&amp;')}</h1>
      <p class="lead">Ba mẹ đang tìm <strong>spa thú cưng, tắm chó, tắm mèo, cắt tỉa lông hoặc khách sạn thú cưng gần ${d.shortName}</strong> chỉ mất <strong>${d.travelTime}</strong> chạy xe sang <strong>Lumi Pet – 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh)</strong>. Bảng giá 2026 minh bạch, sấy tay 100%, trực Hotel 24/7.</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> Lumi Pet (27 Võ Trường Toản, cách ${d.shortName} ${d.travelTime}) áp dụng bảng giá niêm yết 2026: <strong>tắm vệ sinh chó 140.000đ – 550.000đ</strong> (8 mốc tới 25kg), <strong>tắm mèo sấy tay 100% giá 160.000đ – 270.000đ</strong>, <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>Pet Hotel 24/7 từ 100.000đ/ngày</strong>.
      </div>
      <div class="hero-actions">
        <a class="btn btn-green" href="../dat-lich/">Đặt lịch Spa ngay</a>
        <a class="btn btn-primary" href="../dat-phong/">Book phòng Hotel 24/7</a>
        <a class="btn btn-secondary" href="tel:0989979675">Gọi 0989 979 675</a>
      </div>
    </div>
    <aside class="hero-side">
      <div class="eyebrow">Di chuyển từ ${d.shortName}</div>
      <strong>Chỉ ${d.travelTime}</strong>
      <ul class="mini-list">
        <li>🐶 Tắm chó: 140.000đ – 550.000đ</li>
        <li>🐱 Tắm mèo sấy tay: 160.000đ – 270.000đ</li>
        <li>✂️ Cắt tỉa tạo kiểu: 290.000đ – 850.000đ</li>
        <li>🏨 Pet Hotel 24/7: 100k–250k/ngày</li>
        <li>📍 27 Võ Trường Toản, Phường Gia Định</li>
      </ul>
    </aside>
  </section>

  <figure class="lumi-vn-showcase" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);">
    <img src="../images/${d.heroImg}" alt="${d.heroAlt}" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">${d.heroCap}</figcaption>
  </figure>

  <div class="grid">
    <section class="panel span-6">
      <h2>Các phường mới trực thuộc ${d.shortName} (cũ)</h2>
      <ul>
        ${d.wardsHtml}
      </ul>
      <h3 style="margin-top:18px;">Hướng dẫn đường đi nhanh nhất sang 27 Võ Trường Toản</h3>
      <ul>
${d.routes.map((r) => `        <li>${r}</li>`).join('\n')}
      </ul>
      <p style="margin-top:12px;"><a class="btn btn-secondary" href="https://www.google.com/maps/place/?q=place_id:ChIJQQ1vLgApdTERzUEEgAktmsg" target="_blank" rel="noopener noreferrer">📍 Mở Google Maps chỉ đường</a></p>
    </section>

    <section class="panel span-6">
      <h2>Danh sách đầy đủ tuyến đường ${d.shortName} gần Lumi Pet</h2>
      <p>Khách hàng sinh sống hoặc làm việc tại các tuyến đường, cư xá và chung cư sau tại <strong>${d.shortName}</strong> đều di chuyển cực nhanh tới 27 Võ Trường Toản:</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 14px;">
${d.streetsList
  .map((s) => `        <span style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:5px 10px;border-radius:999px;font-size:12.5px;font-weight:700;">📍 Đường ${s}</span>`)
  .join('\n')}
      </div>
      ${DISTRICT_HUB_LINKS}
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
      <p class="muted">Đã gồm cắt mài móng, vệ sinh tai, cạo đệm chân/bụng/hậu môn, vắt tuyến hôi và sấy tay 100%.</p>
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
      <h3 style="margin-top:16px;">Giá Khách sạn thú cưng (Pet Hotel 24/7)</h3>
      <ul>
        <li>&lt;3kg: <strong>100k</strong> · 3–6kg: <strong>120k</strong> · 6–9kg: <strong>160k</strong> · 9–12kg: <strong>200k</strong> · 12–15kg: <strong>250k/ngày</strong></li>
        <li><strong>Ưu đãi dài ngày (ngày thường):</strong> Trên 5 ngày giảm 5% · Trên 10 ngày giảm 8%</li>
        <li>Phòng riêng máy lạnh 24/24, trực trông giữ 24/7, gửi video Zalo mỗi ngày.</li>
      </ul>
    </section>

${buildGallery(DEFAULT_GALLERY)}

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp cho khách ${d.shortName}</h2>
      <div class="faq">
${d.faqs.map(([q, a], idx) => `        <details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('\n')}
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="../dat-lich/">Đặt lịch Spa →</a></div></div></footer>
</body>
</html>
`;
}

// 1. Write 4 Old-District Hub pages
for (const d of OLD_DISTRICTS) {
  const dir = path.join(PUBLIC_DIR, d.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildDistrictHtml(d), 'utf8');
  console.log(`Generated old-district hub: /${d.slug}/ (T:${d.title.length}c, D:${d.description.length}c)`);
}

// 2. Write 1 Master "Full 100+ Nearby Streets & Landmarks" Directory page
const STREETS_SLUG = 'spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan';
const streetsTitle = 'Spa Thú Cưng Gần Chợ Bà Chiểu & 100+ Đường Lân Cận | Lumi';
const streetsDesc =
  'Tra cứu đường đi tới Lumi Pet 27 Võ Trường Toản (Chợ Bà Chiểu, Phường Gia Định) từ hơn 100 tuyến đường Bình Thạnh, Phú Nhuận, Quận 1, Gò Vấp, Thảo Điền.';

const RINGS = [
  {
    ring: 'Vành đai 1 — Sát vách 1–3 phút (200m – 1km · Phường Gia Định / P.1, 2, 7, 17 Bình Thạnh cũ)',
    note: 'Đi bộ hoặc chạy xe máy chỉ 1–3 phút tới cửa Lumi Pet 27 Võ Trường Toản:',
    items: [
      'Võ Trường Toản', 'Phan Đăng Lưu', 'Lê Văn Duyệt (Đinh Tiên Hoàng cũ)', 'Bạch Đằng', 'Bùi Hữu Nghĩa',
      'Vũ Tùng', 'Vũ Huy Tấn', 'Trịnh Hoài Đức', 'Hoàng Hoa Thám', 'Nguyễn Văn Đậu', 'Lê Quang Định',
      'Nơ Trang Long', 'Trường Sa', 'Diên Hồng', 'Yên Đổ', 'Phó Đức Chính', 'Nguyễn Thiện Thuật',
      'Nguyễn Huy Lượng', 'Lê Trực', 'Trần Bình Trọng', 'Nguyễn Thượng Hiền', 'Phan Văn Trị',
      'Huỳnh Đình Hai', 'Nguyễn Xuân Ôn', 'Chợ Bà Chiểu', 'Lăng Ông Bà Chiểu',
      'Bệnh viện Nhân dân Gia Định', 'Bệnh viện Ung Bướu', 'Đại học Mỹ Thuật TP.HCM',
      'Cư xá Miếu Nổi', 'Cầu Bông', 'Cầu Hoàng Hoa Thám',
    ],
  },
  {
    ring: 'Vành đai 2 — Toàn Quận Bình Thạnh cũ (4–10 phút · P. Bình Thạnh, Bình Lợi Trung, Thạnh Mỹ Tây, Bình Quới)',
    note: 'Các trục đường lớn, khu dân cư và chung cư cao cấp tại Bình Thạnh:',
    items: [
      'Đinh Bộ Lĩnh', 'Xô Viết Nghệ Tĩnh', 'Điện Biên Phủ', 'Nguyễn Hữu Cảnh', 'Ngô Tất Tố',
      'Huỳnh Mẫn Đạt', 'Phan Văn Hân', 'Phạm Viết Chánh', 'Chu Văn An', 'Nguyễn Xí', 'Phan Chu Trinh',
      'Bùi Đình Túy', 'Ung Văn Khiêm', 'Nguyễn Gia Trí (D2)', 'Võ Oanh (D3)', 'Nguyễn Văn Thương (D1)',
      'Bình Quới', 'Thanh Đa', 'Bình Lợi', 'Phạm Văn Đồng', 'Tầm Vu', 'Nơ Trang Long (đoạn P.11, P.13)',
      'Ngã tư Hàng Xanh', 'Bến xe Miền Đông cũ', 'Cầu Đỏ', 'Cầu Kinh Thanh Đa',
      'Vinhomes Central Park', 'Landmark 81', 'Saigon Pearl', 'City Garden', 'The Manor', 'Sunwah Pearl',
    ],
  },
  {
    ring: 'Vành đai 3 — Toàn Quận Phú Nhuận cũ & Quận 1 giáp ranh (5–10 phút)',
    note: 'Đi thẳng trục Phan Đăng Lưu hoặc qua Cầu Bông / Cầu Thị Nghè:',
    items: [
      'Phan Xích Long', 'Thích Quảng Đức', 'Nguyễn Kiệm', 'Hoàng Văn Thụ', 'Nguyễn Văn Trỗi',
      'Huỳnh Văn Bánh', 'Trần Huy Liệu', 'Phan Đình Phùng', 'Cô Giang', 'Cô Bắc',
      'Khu đường Hoa (Hoa Lan, Hoa Phượng, Hoa Sứ, Hoa Đào, Hoa Hồng)', 'Hoàng Sa', 'Đặng Văn Ngữ',
      'Nguyễn Trọng Tuyển', 'Đào Duy Anh', 'Hồ Văn Huê', 'Phùng Văn Cung', 'Trương Quốc Dung',
      'Đinh Tiên Hoàng (Q.1)', 'Hai Bà Trưng', 'Võ Thị Sáu', 'Trần Quang Khải', 'Trần Khánh Dư',
      'Nguyễn Thị Minh Khai', 'Nguyễn Bỉnh Khiêm', 'Mạc Đĩnh Chi', 'Phan Kế Bính', 'Lê Duẩn',
      'Bà Lê Chân', 'Thạch Thị Thanh', 'Đặng Dung', 'Nguyễn Văn Giai', 'Chợ Tân Định', 'Cầu Thị Nghè',
    ],
  },
  {
    ring: 'Vành đai 4 — Quận Gò Vấp giáp ranh & Quận 2 Thảo Điền (8–15 phút)',
    note: 'Thuận tiện trên trục Lê Quang Định – Phan Văn Trị và Cầu Sài Gòn – Cầu Ba Son:',
    items: [
      'Lê Quang Định (Gò Vấp)', 'Phan Văn Trị (Gò Vấp)', 'Phạm Văn Đồng', 'Nguyễn Thái Sơn',
      'Nguyễn Văn Nghi', 'Dương Quảng Hàm', 'Nguyễn Oanh', 'Phạm Ngũ Lão', 'Quang Trung',
      'Thống Nhất', 'Nguyễn Văn Lượng', 'CityLand Park Hills', 'Emart Phan Văn Trị', 'Ngã 6 Gò Vấp',
      'Thảo Điền', 'Xuân Thủy', 'Quốc Hương', 'Nguyễn Văn Hưởng', 'Tống Hữu Định', 'Trần Ngọc Diện',
      'Song Hành Xa Lộ Hà Nội', 'Trần Não', 'Lương Định Của', 'Mai Chí Thọ',
      'Masteri Thảo Điền', 'Gateway Thảo Điền', 'Estella Heights', 'Sala Thủ Thiêm', 'Cầu Sài Gòn',
    ],
  },
];

const streetsUrl = `${ORIGIN}/${STREETS_SLUG}/`;
const streetsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${streetsUrl}#service`,
      name: streetsTitle,
      serviceType: 'Spa tắm vệ sinh chó mèo, Grooming cắt tỉa & Pet Hotel 24/7 gần Chợ Bà Chiểu – 27 Võ Trường Toản',
      provider: { '@id': `${ORIGIN}/#business` },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Phường Gia Định, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận Bình Thạnh, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận Phú Nhuận, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận 1, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận Gò Vấp, TP. Hồ Chí Minh' },
        { '@type': 'AdministrativeArea', name: 'Quận 2 (Thảo Điền), TP. Hồ Chí Minh' },
      ],
      offers: { '@type': 'AggregateOffer', lowPrice: '100000', highPrice: '850000', priceCurrency: 'VND', offerCount: '35' },
      url: streetsUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Liên hệ & Khu vực phục vụ', item: `${ORIGIN}/lien-he/` },
        { '@type': 'ListItem', position: 3, name: 'Full 100+ tuyến đường gần Lumi Pet' },
      ],
    },
  ],
};

const streetsHtml = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${streetsTitle.replaceAll('&', '&amp;')}</title>
  <meta name="description" content="${streetsDesc.replaceAll('&', '&amp;')}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${streetsUrl}">
  <meta property="og:title" content="${streetsTitle.replaceAll('&', '&amp;')}" />
  <meta property="og:description" content="${streetsDesc.replaceAll('&', '&amp;')}" />
  <meta property="og:type" content="website">
  <meta property="og:url" content="${streetsUrl}">
  <meta property="og:image" content="${ORIGIN}/images/vn-pet-shop.jpg">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify(streetsSchema)}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../lien-he/">Liên hệ</a> / Full 100+ tuyến đường gần Lumi Pet</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">27 Võ Trường Toản · Chợ Bà Chiểu · Phường Gia Định</div>
      <h1>Spa thú cưng &amp; Khách sạn chó mèo gần Chợ Bà Chiểu, Võ Trường Toản và 100+ tuyến đường lân cận</h1>
      <p class="lead">Tọa lạc tại <strong>27 Võ Trường Toản, Phường Gia Định (Phường 2, Quận Bình Thạnh cũ)</strong> — nút giao trung tâm kết nối Chợ Bà Chiểu, Bệnh viện Gia Định, Phan Đăng Lưu, Bạch Đằng và Cầu Bông — Lumi Pet phục vụ nhanh khách hàng từ hơn <strong>100 tuyến đường</strong> thuộc Bình Thạnh, Phú Nhuận, Quận 1, Gò Vấp và Thảo Điền (Quận 2 cũ).</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> Bạn đang tìm <strong>spa thú cưng gần đây</strong> quanh Chợ Bà Chiểu, Võ Trường Toản, Phan Đăng Lưu, Lê Văn Duyệt, Bạch Đằng, Phan Xích Long hay Cầu Bông? Ghé ngay <strong>Lumi Pet 27 Võ Trường Toản</strong> (mở cửa 08:00 – 21:00; Pet Hotel trực 24/7). Tắm chó từ <strong>140.000đ</strong>, tắm mèo sấy tay 100% từ <strong>160.000đ</strong>, Hotel từ <strong>100.000đ/ngày</strong>.
      </div>
      <div class="hero-actions">
        <a class="btn btn-primary" href="https://www.google.com/maps/place/?q=place_id:ChIJQQ1vLgApdTERzUEEgAktmsg" target="_blank" rel="noopener noreferrer">📍 Mở Google Maps chỉ đường</a>
        <a class="btn btn-green" href="../dat-lich/">Đặt lịch Spa ngay</a>
        <a class="btn btn-secondary" href="tel:0989979675">Gọi 0989 979 675</a>
      </div>
    </div>
    <aside class="hero-side">
      <div class="eyebrow">Tọa độ trung tâm 5 quận</div>
      <strong>1 – 15 phút</strong>
      <ul class="mini-list">
        <li>📍 27 Võ Trường Toản, P. Gia Định</li>
        <li>🏪 Sát Chợ Bà Chiểu &amp; ĐH Mỹ Thuật</li>
        <li>⏰ Spa &amp; Shop: 08:00 – 21:00</li>
        <li>🏨 Pet Hotel: Trông giữ 24/7</li>
        <li>📞 Zalo/Hotline: 0989 979 675</li>
      </ul>
    </aside>
  </section>

  <figure class="lumi-vn-showcase" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);">
    <img src="../images/vn-pet-shop.jpg" alt="Cửa hàng Lumi Pet Shop Spa và Hotel 24/7 tại 27 Võ Trường Toản gần Chợ Bà Chiểu" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">📍 Lumi Pet 27 Võ Trường Toản — dễ tìm, chỗ đậu xe rộng rãi, thuận tiện đón trả bé cho hơn 100 tuyến đường lân cận</figcaption>
  </figure>

  <div class="grid">
${RINGS.map(
  (r) => `    <section class="panel span-12">
      <h2>${r.ring}</h2>
      <p>${r.note}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
${r.items
  .map((item) => `        <span style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:5px 11px;border-radius:999px;font-size:12.5px;font-weight:700;">📍 ${item}</span>`)
  .join('\n')}
      </div>
    </section>`
).join('\n\n')}

    <section class="panel span-12">
      <h2>Truy cập nhanh theo Quận cũ &amp; 13 Phường mới</h2>
      ${DISTRICT_HUB_LINKS}
      <p class="muted" style="margin-top:8px;"><strong>13 Phường mới phục vụ:</strong> <a href="../tam-cho-phuong-gia-dinh/">Phường Gia Định</a> · <a href="../spa-thu-cung-phuong-binh-thanh/">Phường Bình Thạnh</a> · <a href="../spa-thu-cung-phuong-binh-loi-trung/">Phường Bình Lợi Trung</a> · <a href="../spa-thu-cung-phuong-thanh-my-tay/">Phường Thạnh Mỹ Tây</a> · <a href="../spa-thu-cung-phuong-binh-quoi/">Phường Bình Quới</a> · <a href="../spa-thu-cung-phuong-cau-kieu-phu-nhuan/">Phường Cầu Kiệu</a> · <a href="../spa-thu-cung-phuong-duc-nhuan-phu-nhuan/">Phường Đức Nhuận</a> · <a href="../spa-thu-cung-phuong-phu-nhuan/">Phường Phú Nhuận</a> · <a href="../spa-thu-cung-phuong-tan-dinh-quan-1/">Phường Tân Định</a> · <a href="../spa-thu-cung-phuong-sai-gon-quan-1/">Phường Sài Gòn</a> · <a href="../spa-thu-cung-phuong-hanh-thong-go-vap/">Phường Hạnh Thông</a> · <a href="../spa-thu-cung-phuong-an-nhon-go-vap/">Phường An Nhơn</a> · <a href="../spa-thu-cung-phuong-an-khanh-thao-dien/">Phường An Khánh (Thảo Điền)</a></p>
    </section>

${buildGallery(DEFAULT_GALLERY)}

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp về đường đi &amp; dịch vụ gần Chợ Bà Chiểu</h2>
      <div class="faq">
        <details open><summary>Lumi Pet cách Chợ Bà Chiểu và Bệnh viện Gia Định bao xa?</summary><p>Chỉ khoảng 300m – 500m (1–2 phút đi xe). Tiệm nằm ngay số 27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), rất gần Trường ĐH Mỹ Thuật TP.HCM.</p></details>
        <details><summary>Đường Võ Trường Toản có chỗ đậu ô tô đưa chó lớn đi tắm không?</summary><p>Có. Mặt tiền 27 Võ Trường Toản thông thoáng, có chỗ để xe máy rộng rãi và thuận tiện dừng ô tô ngay trước cửa để đưa đón bé.</p></details>
        <details><summary>Cần đặt lịch trước bao lâu nếu ghé từ các tuyến đường lân cận?</summary><p>Ngày thường bạn có thể đặt trước 1–2 tiếng hoặc nhắn Zalo 0989 979 675. Cuối tuần và dịp cận Noel/Tết nên đặt trước 3–7 ngày để giữ khung giờ đẹp.</p></details>
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="../dat-lich/">Đặt lịch Spa →</a></div></div></footer>
</body>
</html>
`;

const streetsDir = path.join(PUBLIC_DIR, STREETS_SLUG);
fs.mkdirSync(streetsDir, { recursive: true });
fs.writeFileSync(path.join(streetsDir, 'index.html'), streetsHtml, 'utf8');
console.log(`Generated master street directory: /${STREETS_SLUG}/ (T:${streetsTitle.length}c, D:${streetsDesc.length}c)`);

// 3. Inject Full Binh Thanh Street Directory block into /spa-thu-cung-binh-thanh/ and /lien-he/
const binhThanhStreetsBlock = `    <section class="panel span-12 lumi-street-directory">
      <h2>Phục vụ nhanh toàn bộ tuyến đường Bình Thạnh &amp; 5 Quận lân cận</h2>
      <p>Từ <strong>27 Võ Trường Toản (Phường Gia Định)</strong>, ba mẹ tại các trục đường sát vách chỉ mất <strong>1–8 phút</strong> đưa bé tới tắm và cắt tỉa: <strong>Võ Trường Toản, Phan Đăng Lưu, Lê Văn Duyệt (Đinh Tiên Hoàng cũ), Bạch Đằng, Bùi Hữu Nghĩa, Vũ Tùng, Vũ Huy Tấn, Hoàng Hoa Thám, Nguyễn Văn Đậu, Lê Quang Định, Nơ Trang Long, Trường Sa, Đinh Bộ Lĩnh, Xô Viết Nghệ Tĩnh, Điện Biên Phủ, Nguyễn Hữu Cảnh, Chu Văn An, Nguyễn Xí, Ung Văn Khiêm, Nguyễn Gia Trí (D2), Bình Quới – Thanh Đa</strong> (gần Chợ Bà Chiểu, BV Gia Định, Lăng Ông, Miếu Nổi, Vinhomes Central Park, Ngã tư Hàng Xanh).</p>
      ${DISTRICT_HUB_LINKS}
    </section>`;

for (const target of ['spa-thu-cung-binh-thanh', 'lien-he']) {
  const filePath = path.join(PUBLIC_DIR, target, 'index.html');
  let html = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  if (html.includes('lumi-street-directory')) {
    html = html.replace(/    <section class="panel span-12 lumi-street-directory">[\s\S]*?<\/section>/, binhThanhStreetsBlock);
  } else {
    html = html.replace(
      /(\s*<section class="panel span-12">\s*<h2>Câu hỏi thường gặp)/,
      `\n${binhThanhStreetsBlock}\n$1`
    );
  }
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Injected full Binh Thanh street directory into /${target}/`);
}
