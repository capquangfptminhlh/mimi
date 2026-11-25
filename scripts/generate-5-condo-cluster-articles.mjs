import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const IMG_DIR = path.join(PUBLIC_DIR, 'images');
const BLOG_DIR = path.join(PUBLIC_DIR, 'bai-viet');
const ORIGIN = 'https://lumipet.vn';
const TODAY = '2026-11-25';

// Copy 5 visually-verified, unused-as-thumbnail real-camera photos to dedicated condo filenames
const photoPairs = [
  ['bai-extra-golden-shop.jpg', 'bai-condo-vinhomes.jpg'],
  ['bai-extra-cat-cozy.jpg', 'bai-condo-saigon-pearl.jpg'],
  ['bai-extra-clipper-trim.jpg', 'bai-condo-city-garden.jpg'],
  ['bai-extra-poodle-tub.jpg', 'bai-condo-richmond.jpg'],
  ['bai-extra-shihtzu-clean.jpg', 'bai-condo-botanic.jpg'],
];
for (const [src, dst] of photoPairs) {
  fs.copyFileSync(path.join(IMG_DIR, src), path.join(IMG_DIR, dst));
}

const articles = [
  {
    slug: 'tam-cho-meo-cu-dan-vinhomes-central-park-landmark-81',
    title: 'Tắm Chó Mèo Cư Dân Vinhomes Central Park & Landmark 81',
    desc: 'Hướng dẫn cư dân Vinhomes Central Park, Landmark 81 đi tắm chó từ 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & Pet Hotel 24/7 tại Lumi Pet cách 7–9 phút.',
    category: 'Cư Dân Chung Cư · Vinhomes – Landmark 81',
    h1: 'Tắm chó mèo, Cắt tỉa & Gửi thú cưng cho cư dân Vinhomes Central Park – Landmark 81',
    dek: 'Tóm tắt nhanh: Từ Vinhomes Central Park & Landmark 81 (Phường Thạnh Mỹ Tây), bạn chỉ mất 7–9 phút chạy xe sang Lumi Pet (27 Võ Trường Toản, Phường Gia Định) để tắm chó 10 bước từ 140k, tắm mèo khu riêng sấy tay 100% từ 160k, cắt tỉa từ 290k hoặc gửi Pet Hotel 24/7 từ 100k/ngày với mặt tiền rộng dễ dừng ô tô.',
    heroImg: 'bai-condo-vinhomes.jpg',
    heroAlt: 'Chó lớn và chó nhỏ của cư dân Vinhomes Central Park Landmark 81 đi tắm spa tại Lumi Pet Bình Thạnh',
    caption: '📍 Lumi Pet 27 Võ Trường Toản — cách Vinhomes Central Park & Landmark 81 chỉ 7–9 phút, thuận tiện dừng ô tô trả/đón các bé chó lớn tới 25kg',
    bodyHtml: `
      <p><strong>Tóm tắt nhanh:</strong> Rất nhiều gia đình sống tại các tòa <strong>Central, Park, Landmark 1–6 và Landmark 81 (Vinhomes Central Park)</strong> nuôi Poodle, Corgi, Phốc sóc, Golden, Samoyed và mèo Anh/Ragdoll cần một tiệm spa <strong>giá niêm yết rõ ràng, sấy tay 100% không nhốt lồng sấy và mở tối tới 21:00</strong>. Cách khu đô thị khoảng 7–9 phút di chuyển, <strong>Lumi Pet Shop – Spa &amp; Hotel 24/7 (27 Võ Trường Toản, Phường Gia Định)</strong> đáp ứng trọn gói cả tắm vệ sinh, grooming lẫn khách sạn lưu trú 24/7.</p>

      <h2 id="lo-trinh-vinhomes">1. Lộ trình 7–9 phút từ Vinhomes Central Park sang 27 Võ Trường Toản</h2>
      <ul>
        <li><strong>Đi ô tô (khuyên dùng cho bé trên 12kg như Golden, Husky, Samoyed):</strong> Ra cổng Điện Biên Phủ → đi thẳng qua cầu vượt Hàng Xanh → rẽ phải sang Bạch Đằng → qua Chợ Bà Chiểu rẽ vào <strong>27 Võ Trường Toản</strong>. Mặt tiền thoáng dễ dừng xe trả/đón bé an toàn.</li>
        <li><strong>Đi xe máy khung giờ 17:00–18:30 (tránh kẹt Nguyễn Hữu Cảnh):</strong> Đi hướng Ngô Tất Tố → Xô Viết Nghệ Tĩnh → Bạch Đằng → Võ Trường Toản, rút ngắn thời gian còn khoảng 7 phút.</li>
        <li><strong>Đặt ca tối sau giờ làm:</strong> Lumi Pet mở cửa <strong>08:00 – 21:00 mỗi ngày</strong> (không phụ thu ngoài giờ), ba mẹ làm ở Quận 1 hoặc quanh Landmark 81 tan ca 18:30 vẫn kịp đưa bé sang tắm.</li>
      </ul>

      <h2 id="bang-gia-vinhomes">2. Bảng giá niêm yết 2026 cho cư dân Vinhomes Central Park</h2>
      <table>
        <thead><tr><th>Dịch vụ tại Lumi Pet (27 Võ Trường Toản)</th><th>Giá niêm yết 2026</th><th>Quyền lợi đi kèm (0đ)</th></tr></thead>
        <tbody>
          <tr><td><a href="../../tam-cho-phuong-gia-dinh/">Tắm vệ sinh chó 10 bước</a></td><td><strong>140.000đ – 550.000đ</strong> (8 mốc tới 25kg)</td><td>Cắt mài móng, nhổ lông tai, cạo bàn chân/bụng, vắt tuyến hôi, sấy tay 100%</td></tr>
          <tr><td><a href="../../cat-tia-long-cho-phuong-gia-dinh/">Combo Tắm + Cắt tỉa chó</a></td><td><strong>290.000đ – 850.000đ</strong></td><td>Tắm 10 bước + cắt kéo tạo kiểu Teddy, Corgi mông đào, Boo, Bichon</td></tr>
          <tr><td><a href="../../tam-meo-phuong-gia-dinh/">Tắm vệ sinh mèo khu riêng</a></td><td><strong>160.000đ – 270.000đ</strong> (tới 10kg)</td><td>Tách riêng khu chó, sấy tay máy ion giảm ồn, không dùng lồng sấy</td></tr>
          <tr><td><a href="../../khach-san-thu-cung-binh-thanh/">Khách sạn thú cưng 24/7</a></td><td><strong>100.000đ – 250.000đ/ngày</strong></td><td>Phòng riêng máy lạnh 24/24, gửi video Zalo mỗi ngày, giảm 5–8% khi gửi dài ngày</td></tr>
        </tbody>
      </table>

      <h2 id="vi-sao-chon-lumi">3. Lý do cư dân Landmark 81 &amp; Vinhomes ưu tiên Lumi Pet</h2>
      <ol>
        <li><strong>Minh bạch 8 mốc cân nặng tới 25kg:</strong> Rất phù hợp cho các bé chó lớn (Golden, Husky, Samoyed) sống tại căn hộ Vinhomes — biết trước đúng giá trước khi sang tiệm, không báo giá mập mờ.</li>
        <li><strong>Sấy tay 100% tận chân lông kép:</strong> Môi trường căn hộ máy lạnh rất dễ làm chó mèo bị ẩm da hoặc có mùi nếu sấy ẩu. Thợ Lumi Pet sấy tay và chải tơi từng lớp đảm bảo khô hẳn trước khi bàn giao.</li>
        <li><strong>Gửi Pet Hotel 24/7 khi đi công tác / nghỉ lễ:</strong> Có phòng riêng cho chó và khu yên tĩnh cho mèo, nhân viên trực đêm 24/7 và quay clip gửi Zalo hằng ngày. Xem thêm trang <a href="../../tam-cho-meo-gan-vinhomes-hang-xanh/">Tắm chó mèo gần Vinhomes – Hàng Xanh</a> và <a href="../../khach-san-thu-cung-tet-binh-thanh/">Khách sạn thú cưng Tết 2027</a>.</li>
      </ol>
      <p><em>Lưu ý chuyên môn:</em> Lumi Pet là cơ sở Spa, Grooming &amp; Pet Hotel chuyên biệt, không phải phòng khám thú y. Nếu bé có dấu hiệu sốt, lở loét da nặng hoặc chấn thương, ba mẹ nên đưa bé thăm khám bác sĩ thú y trước khi tắm.</p>
    `,
    faqs: [
      ['Từ Vinhomes Central Park đi ô tô sang Lumi Pet 27 Võ Trường Toản có chỗ dừng đón bé không?', 'Có. Mặt tiền 27 Võ Trường Toản rộng thoáng, thuận tiện dừng ô tô trả hoặc đón các bé chó lớn (Golden, Husky, Samoyed) chỉ mất 1–2 phút, tổng đường đi từ Vinhomes khoảng 7–9 phút.'],
      ['Cư dân Vinhomes đặt lịch tắm chó lớn 20–25kg tại Lumi Pet giá bao nhiêu?', 'Theo bảng giá 2026 chính thức, tắm vệ sinh chó 15–18kg là 430.000đ, 18–20kg là 480.000đ và 20–25kg là 550.000đ — đã bao gồm vệ sinh tai, cắt mài móng, vắt tuyến hôi và sấy tay khô 100%.'],
      ['Mèo sống căn hộ Vinhomes nhát người có sợ tiếng chó sủa khi đi tắm không?', 'Không. Lumi Pet bố trí khu tắm và sấy tay riêng biệt cho mèo bằng máy sấy ion giảm ồn, tuyệt đối không nhốt mèo vào lồng sấy kín.'],
      ['Lumi Pet mở cửa tối tới mấy giờ để cư dân đi làm về kịp ghé?', 'Quầy Spa & Shop mở cửa 08:00 – 21:00 tất cả các ngày (không phụ thu ca tối). Bạn nên nhắn Zalo 0989 979 675 giữ lịch trước 1–2 tiếng để sang là làm ngay.'],
    ],
  },
  {
    slug: 'spa-tam-cho-meo-saigon-pearl-the-manor-sunwah-pearl',
    title: 'Spa Tắm Chó Mèo Saigon Pearl, The Manor & Sunwah Pearl',
    desc: 'Cẩm nang tắm chó 140k, tắm mèo sấy tay 160k, cắt tỉa lông 290k & Pet Hotel 24/7 cho cư dân Saigon Pearl, The Manor, Sunwah Pearl (Nguyễn Hữu Cảnh).',
    category: 'Cư Dân Chung Cư · Nguyễn Hữu Cảnh',
    h1: 'Spa tắm chó mèo, Cắt tỉa & Pet Hotel cho cư dân Saigon Pearl, The Manor và Sunwah Pearl',
    dek: 'Tóm tắt nhanh: Nằm cách cụm chung cư Saigon Pearl, The Manor và Sunwah Pearl (90–92 Nguyễn Hữu Cảnh) chỉ 6–8 phút chạy xe, Lumi Pet 27 Võ Trường Toản cung cấp dịch vụ tắm chó 10 bước từ 140k, tắm mèo khu riêng không lồng sấy từ 160k và Pet Hotel máy lạnh 24/7 từ 100k/ngày.',
    heroImg: 'bai-condo-saigon-pearl.jpg',
    heroAlt: 'Mèo cưng của cư dân Saigon Pearl The Manor Sunwah Pearl được chăm sóc nhẹ nhàng tại Lumi Pet Bình Thạnh',
    caption: '🐱 Khu tắm sấy tay riêng biệt cho mèo Anh, Ragdoll, Ba Tư — chỉ 6–8 phút từ Saigon Pearl, The Manor & Sunwah Pearl',
    bodyHtml: `
      <p><strong>Tóm tắt nhanh:</strong> Cụm 3 chung cư ven sông <strong>Saigon Pearl, The Manor và Sunwah Pearl</strong> dọc đường Nguyễn Hữu Cảnh có cộng đồng nuôi mèo cảnh (Anh lông ngắn, Anh lông dài, Ragdoll, Ba Tư) và chó nhỏ (Poodle, Bichon, Maltese, Pomeranian) rất đông. <strong>Lumi Pet tại 27 Võ Trường Toản, Phường Gia Định</strong> chỉ cách khoảng 6–8 phút đi xe máy/ô tô, mở cửa <strong>08:00 – 21:00</strong> và cam kết sấy tay 100% an toàn.</p>

      <h2 id="lo-trinh-saigon-pearl">1. Cách đi nhanh 6–8 phút từ Saigon Pearl / The Manor / Sunwah Pearl</h2>
      <ul>
        <li><strong>Tuyến nhanh nhất (tránh ngã tư Hàng Xanh):</strong> Từ Nguyễn Hữu Cảnh rẽ vào đường <strong>Ngô Tất Tố</strong> → băng qua Xô Viết Nghệ Tĩnh vào <strong>Phan Văn Hân / Bạch Đằng</strong> → rẽ phải sang <strong>27 Võ Trường Toản</strong>.</li>
        <li><strong>Khi đi làm về từ Quận 1:</strong> Tạt thẳng qua Cầu Bông → Lê Văn Duyệt → Phan Đăng Lưu → rẽ vào Võ Trường Toản rồi đón bé về Saigon Pearl cực kỳ tiện 1 cung đường.</li>
      </ul>

      <h2 id="cham-meo-can-ho">2. Tại sao cư dân nuôi mèo ở The Manor &amp; Sunwah Pearl chọn Lumi Pet?</h2>
      <table>
        <thead><tr><th>Nhu cầu phổ biến của mèo &amp; chó căn hộ</th><th>Giải pháp tại Lumi Pet 27 Võ Trường Toản</th><th>Giá 2026</th></tr></thead>
        <tbody>
          <tr><td>Mèo ALN/ALD, Ragdoll rụng lông, bết nhờn đuôi</td><td>Tắm khử dầu gốc đuôi + chải lông chết + sấy tay ion khu riêng</td><td><strong>160k – 270k</strong></td></tr>
          <tr><td>Mèo lông dài bị rối mảng bụng/nách</td><td>Combo tắm + cạo lông an toàn bằng tông đơ êm (giữ độ dài bảo vệ da)</td><td><strong>250k – 380k</strong></td></tr>
          <tr><td>Poodle, Bichon, Maltese hay ố mắt &amp; rối lông</td><td>Combo tắm 10 bước + vệ sinh mắt + cắt tỉa tạo phom bền 4–6 tuần</td><td><strong>290k – 520k</strong></td></tr>
          <tr><td>Gửi bé khi đi công tác / du lịch 3–10 ngày</td><td>Phòng riêng máy lạnh 24/24 tách chó–mèo, gửi video Zalo hằng ngày</td><td><strong>100k – 250k/ngày</strong></td></tr>
        </tbody>
      </table>

      <h2 id="kinh-nghiem-dua-be">3. 3 lưu ý nhỏ giúp bé ở chung cư đi Spa hoàn toàn thoải mái</h2>
      <ol>
        <li><strong>Đặt lịch trước qua Zalo 0989 979 675:</strong> Để tiệm sắp sẵn phòng mèo yên tĩnh hoặc thợ grooming đúng khung giờ bạn mong muốn (tránh bé phải ngồi trong balo chờ lâu).</li>
        <li><strong>Chuẩn bị balo/lồng cứng thoáng khí cho mèo:</strong> Khi di chuyển 6–8 phút từ Nguyễn Hữu Cảnh sang Võ Trường Toản, phủ thêm 1 chiếc khăn mỏng giúp mèo không bị giật mình bởi tiếng xe ngoài đường.</li>
        <li><strong>Xem chi tiết bảng giá trước khi đi:</strong> Tham khảo đầy đủ tại <a href="../../bang-gia-spa-thu-cung/">Bảng giá Spa &amp; Hotel 2026</a> và bài <a href="../spa-meo-khong-dung-long-say-binh-thanh/">Spa mèo không dùng lồng sấy Bình Thạnh</a>.</li>
      </ol>
    `,
    faqs: [
      ['Từ Saigon Pearl, The Manor hay Sunwah Pearl sang Lumi Pet mất bao lâu?', 'Chỉ khoảng 6–8 phút đi theo hướng Ngô Tất Tố – Bạch Đằng – 27 Võ Trường Toản (Phường Gia Định), rất dễ đi và không cần vòng qua các nút giao xa.'],
      ['Tắm mèo Anh lông dài hoặc Ragdoll 5kg tại Lumi Pet hết bao nhiêu?', 'Theo bảng giá 2026 chính thức, tắm vệ sinh mèo từ 3–6kg là 220.000đ (dưới 3kg là 160.000đ, 6–10kg là 270.000đ) — đã gồm cắt móng, vệ sinh tai, khử nhờn đuôi và sấy tay 100% khu riêng.'],
      ['Cư dân Sunwah Pearl muốn gửi mèo dịp cuối tuần hoặc Tết 2027 cần đặt trước mấy ngày?', 'Ngày thường nên đặt trước 1–2 ngày; dịp cao điểm Noel/Tết Tây nên giữ phòng trước 5–10 ngày và Tết Nguyên Đán trước 2–4 tuần qua Zalo 0989 979 675.'],
      ['Tiệm có nhận tắm buổi tối sau 18h30 cho người đi làm không?', 'Có. Lumi Pet mở cửa 08:00 – 21:00 mỗi ngày với một mức giá niêm yết duy nhất, không phụ thu ca tối.'],
    ],
  },
  {
    slug: 'tam-cat-tia-cho-meo-city-garden-soho-premier-wilton-tower',
    title: 'Tắm & Cắt Tỉa Chó Mèo City Garden, Wilton Tower, Soho',
    desc: 'Cư dân City Garden (Ngô Tất Tố), Wilton Tower (D1), Soho Premier đi tắm chó 140k, cắt tỉa Poodle/Corgi 290k & tắm mèo 160k chỉ 5 phút tại Lumi Pet.',
    category: 'Cư Dân Chung Cư · Ngô Tất Tố – Hàng Xanh',
    h1: 'Tắm & Cắt tỉa chó mèo cho cư dân City Garden, Wilton Tower và Soho Premier',
    dek: 'Tóm tắt nhanh: Chỉ cách City Garden (59 Ngô Tất Tố), Wilton Tower (71/3 Nguyễn Văn Thương) và Soho Premier khoảng 5–6 phút chạy xe, Lumi Pet (27 Võ Trường Toản) là điểm tắm chó 140k, cắt tỉa Poodle/Corgi/Phốc sóc từ 290k và tắm mèo sấy tay từ 160k quen thuộc của cư dân khu vực.',
    heroImg: 'bai-condo-city-garden.jpg',
    heroAlt: 'Cắt tỉa lông chó gọn đẹp tại Lumi Pet gần City Garden Wilton Tower và Soho Premier',
    caption: '✂️ Tắm 10 bước & cắt tỉa tạo kiểu chuẩn form cho Poodle, Corgi, Phốc sóc — chỉ 5–6 phút từ City Garden & Wilton Tower',
    bodyHtml: `
      <p><strong>Tóm tắt nhanh:</strong> Nếu bạn đang sống tại <strong>City Garden (59 Ngô Tất Tố), Wilton Tower (Nguyễn Văn Thương D1), Pearl Plaza hoặc Soho Premier (Xô Viết Nghệ Tĩnh)</strong>, bạn chỉ cần 5–6 phút di chuyển thẳng sang <strong>Lumi Pet 27 Võ Trường Toản, Phường Gia Định</strong>. Đây là điểm spa thú cưng mở cửa từ <strong>08:00 – 21:00</strong> mỗi ngày, bảng giá công khai minh bạch 2026 và cam kết 100% thợ sấy tay.</p>

      <h2 id="lo-trinh-city-garden">1. Tuyến đường 5 phút cực tiện từ City Garden &amp; Wilton Tower</h2>
      <ul>
        <li><strong>Từ City Garden (59 Ngô Tất Tố):</strong> Chạy thẳng qua Phan Văn Hân hoặc Xô Viết Nghệ Tĩnh → rẽ trái sang Bạch Đằng → qua Chợ Bà Chiểu rẽ vào <strong>27 Võ Trường Toản</strong> (~5 phút).</li>
        <li><strong>Từ Wilton Tower / Pearl Plaza / D1 – D2:</strong> Chạy qua Điện Biên Phủ → Xô Viết Nghệ Tĩnh (hoặc Bùi Đình Túy – Phan Chu Trinh) → Bạch Đằng → Võ Trường Toản (~6 phút).</li>
        <li><strong>Từ Soho Premier (636A Xô Viết Nghệ Tĩnh):</strong> Đi thẳng trục Xô Viết Nghệ Tĩnh – Bạch Đằng lên hướng Chợ Bà Chiểu chưa tới 6 phút.</li>
      </ul>

      <h2 id="goi-cat-tia-pho-bien">2. Các gói dịch vụ cư dân City Garden &amp; Wilton Tower đặt nhiều nhất</h2>
      <table>
        <thead><tr><th>Giống chó / mèo &amp; Dịch vụ</th><th>Mức giá 2026 tại Lumi Pet</th><th>Thời gian làm dự kiến</th></tr></thead>
        <tbody>
          <tr><td>Tắm vệ sinh chó 10 bước (dưới 3kg – 25kg)</td><td><strong>140.000đ – 550.000đ</strong></td><td>45 – 75 phút</td></tr>
          <tr><td><a href="../cat-tia-long-poodle-binh-thanh-gia-bao-nhieu/">Cắt tỉa Poodle kiểu Teddy / Bichon</a></td><td><strong>290.000đ – 520.000đ</strong></td><td>90 – 120 phút</td></tr>
          <tr><td><a href="../cat-tia-long-corgi-mong-dao-binh-thanh/">Cắt tỉa Corgi mông đào / Phốc sóc Boo</a></td><td><strong>290.000đ – 600.000đ</strong></td><td>90 – 120 phút</td></tr>
          <tr><td>Tắm vệ sinh mèo sấy tay 100% khu riêng</td><td><strong>160.000đ – 270.000đ</strong></td><td>50 – 75 phút</td></tr>
          <tr><td>Khách sạn chó mèo máy lạnh 24/7</td><td><strong>100.000đ – 250.000đ/ngày</strong></td><td>Trực 24/7 · Giảm 5–8% dài ngày</td></tr>
        </tbody>
      </table>

      <h2 id="meo-dat-lich-nhanh">3. Đặt lịch trước 1–2 tiếng — ghé sang là làm ngay</h2>
      <p>Với cư dân làm việc văn phòng quanh Hàng Xanh, Điện Biên Phủ và Quận 1, bạn có thể nhắn trước qua Zalo <strong>0989 979 675</strong> hoặc đặt trực tiếp trên <a href="../../dat-lich/">trang Đặt lịch Online</a> vào khung <strong>09:30–11:30</strong>, <strong>14:00–16:00</strong> hoặc ca tối <strong>18:00–19:30</strong>. Tiệm có sẵn khu chờ sạch sẽ và sẽ gọi báo ngay khi bé hoàn tất để bạn qua đón về căn hộ.</p>
    `,
    faqs: [
      ['Từ City Garden (Ngô Tất Tố) sang Lumi Pet 27 Võ Trường Toản có xa không?', 'Rất gần, chỉ khoảng 1,8–2km (khoảng 5 phút chạy xe qua Bạch Đằng – Chợ Bà Chiểu), rất tiện đưa đón bé định kỳ mỗi 1–2 tuần.'],
      ['Cắt tỉa lông Poodle 4kg kiểu Teddy tại Lumi Pet giá bao nhiêu?', 'Theo bảng giá 2026 chính thức, Combo Tắm + Cắt tỉa chó 3–6kg là 360.000đ (dưới 3kg là 290.000đ), đã bao gồm đủ 10 bước tắm vệ sinh, cắt móng, nhổ lông tai, vắt tuyến hôi và sấy tay.'],
      ['Nếu lông bé bị rối bết nhẹ thì tiệm xử lý thế nào?', 'Thợ sẽ kiểm tra tình trạng lông trực tiếp và báo rõ mức phụ thu gỡ rối (50.000đ – 500.000đ tùy độ bết) trước khi làm để ba mẹ quyết định, không phát sinh bất ngờ.'],
      ['Cư dân Wilton Tower gửi bé ở Pet Hotel 6 ngày có được giảm giá không?', 'Có. Chính sách ngày thường tại Lumi Pet giảm 5% cho kỳ lưu trú trên 5 ngày và giảm 8% cho kỳ trên 10 ngày (dịp Lễ/Tết xác nhận trước khi chốt phòng).'],
    ],
  },
  {
    slug: 'spa-gui-cho-meo-richmond-city-saigonres-plaza-nguyen-xi',
    title: 'Spa & Gửi Chó Mèo Richmond City, Saigonres Plaza Nguyễn Xí',
    desc: 'Cư dân Richmond City, Saigonres Plaza, Thủy Lợi 4 (Nguyễn Xí) đi tắm chó 140k, tắm mèo 160k, cắt tỉa 290k & Pet Hotel 24/7 chỉ 6–8 phút tại Lumi Pet.',
    category: 'Cư Dân Chung Cư · Nguyễn Xí – Chu Văn An',
    h1: 'Spa tắm chó mèo & Khách sạn thú cưng 24/7 cho cư dân Richmond City, Saigonres Plaza (Nguyễn Xí)',
    dek: 'Tóm tắt nhanh: Từ cụm chung cư Richmond City, Saigonres Plaza và Thủy Lợi 4 trên đường Nguyễn Xí, chỉ mất 6–8 phút đi qua Chu Văn An – Phan Chu Trinh – Bạch Đằng là tới Lumi Pet (27 Võ Trường Toản): tắm chó từ 140k, tắm mèo sấy tay từ 160k và Pet Hotel 24/7 từ 100k/ngày.',
    heroImg: 'bai-condo-richmond.jpg',
    heroAlt: 'Cún cưng của cư dân Richmond City và Saigonres Plaza Nguyễn Xí đi tắm vệ sinh tại Lumi Pet Bình Thạnh',
    caption: '🛁 Tắm chó 10 bước sạch sâu, sấy tay 100% & Pet Hotel 24/7 — cách Richmond City & Saigonres Plaza Nguyễn Xí chỉ 6–8 phút',
    bodyHtml: `
      <p><strong>Tóm tắt nhanh:</strong> Khu vực đường <strong>Nguyễn Xí – Chu Văn An – Nơ Trang Long</strong> tập trung hàng nghìn hộ dân tại <strong>Richmond City (207C Nguyễn Xí), Saigonres Plaza (188 Nguyễn Xí), Chung cư Thủy Lợi 4 và Đất Phương Nam</strong>. Thay vì phải chạy xa vào trung tâm hay lo kẹt xe Đinh Bộ Lĩnh, cư dân có thể di chuyển nhanh 6–8 phút theo nhánh Chu Văn An sang <strong>Lumi Pet 27 Võ Trường Toản, Phường Gia Định</strong>.</p>

      <h2 id="lo-trinh-richmond">1. Lộ trình 6–8 phút tránh kẹt xe Đinh Bộ Lĩnh từ Nguyễn Xí</h2>
      <ul>
        <li><strong>Hướng tối ưu nhất:</strong> Từ Richmond City / Saigonres Plaza chạy ra <strong>Nguyễn Xí</strong> → rẽ vào <strong>Nơ Trang Long</strong> hoặc <strong>Chu Văn An → Phan Chu Trinh</strong> → nhập vào <strong>Bạch Đằng / Phan Đăng Lưu</strong> → rẽ vào <strong>27 Võ Trường Toản</strong>. Tuyến này rất thoáng, tránh hoàn toàn điểm ùn ứ Bến xe Miền Đông cũ.</li>
        <li><strong>Tiện đi tắm buổi tối &amp; cuối tuần:</strong> Lumi Pet nhận khách từ <strong>08:00 – 21:00</strong> hằng ngày, phù hợp cho gia đình đi làm hành chính hoặc tranh thủ đưa bé đi tắm sau khi mua sắm ở Vincom Nguyễn Xí.</li>
      </ul>

      <h2 id="hotel-cu-dan-nguyen-xi">2. Dịch vụ Spa &amp; Pet Hotel 24/7 được cư dân Nguyễn Xí tin chọn</h2>
      <table>
        <thead><tr><th>Hạng mục dịch vụ</th><th>Bảng giá chính thức 2026</th><th>Điểm nổi bật cho cư dân căn hộ</th></tr></thead>
        <tbody>
          <tr><td>Tắm chó vệ sinh 10 bước</td><td><strong>140k – 550k</strong> (tới 25kg)</td><td>Khử mùi hôi triệt để, sấy tay khô tận chân lông, vắt tuyến hôi 0đ</td></tr>
          <tr><td>Combo Tắm + Cắt tỉa tạo kiểu</td><td><strong>290k – 850k</strong></td><td>Tỉa gọn lông bàn chân, vệ sinh vùng mắt miệng giữ căn hộ luôn sạch</td></tr>
          <tr><td>Tắm mèo khu riêng không lồng sấy</td><td><strong>160k – 270k</strong> (cạo lông 250k–380k)</td><td>Yên tĩnh, giảm rụng lông bám sofa/giường căn hộ</td></tr>
          <tr><td><a href="../../khach-san-thu-cung-phuong-gia-dinh/">Khách sạn thú cưng 24/7</a></td><td><strong>100k – 250k/ngày</strong></td><td>Phòng riêng máy lạnh 24/24, trực đêm 24/7, quay video Zalo mỗi ngày</td></tr>
        </tbody>
      </table>

      <h2 id="gui-be-cuoi-tuan-tet">3. Kinh nghiệm gửi chó mèo cuối tuần &amp; Lễ Tết cho cư dân Richmond City</h2>
      <p>Rất nhiều gia đình ở Richmond City và Saigonres Plaza về quê miền Trung/Tây hoặc đi Vũng Tàu, Đà Lạt cuối tuần. Bạn chỉ cần mang theo <strong>sổ tiêm phòng</strong> và phần thức ăn quen bụng của bé (nếu bé kén ăn). Gửi trên 5 ngày giảm <strong>5%</strong>, trên 10 ngày giảm <strong>8%</strong> (ngày thường). Xem thêm bài <a href="../spa-gui-cho-meo-truc-dinh-bo-linh-xo-viet-nghe-tinh-chu-van-an/">Cẩm nang trục Đinh Bộ Lĩnh – Chu Văn An – Nguyễn Xí</a> và <a href="../../dat-phong/">Book phòng Hotel Online</a>.</p>
    `,
    faqs: [
      ['Từ Richmond City hoặc Saigonres Plaza sang Lumi Pet đi đường nào đỡ kẹt xe nhất?', 'Bạn đi theo hướng Nguyễn Xí → Chu Văn An → Phan Chu Trinh → Bạch Đằng → 27 Võ Trường Toản (chỉ 6–8 phút), tránh được đoạn đông xe quanh Đinh Bộ Lĩnh.'],
      ['Gửi chó 5kg tại Pet Hotel Lumi Pet 3 ngày cuối tuần hết bao nhiêu?', 'Chó từ 3–6kg có giá lưu trú ngày thường là 120.000đ/ngày (3 ngày là 360.000đ), đã bao gồm phòng riêng máy lạnh 24/24, nhân viên trực chăm 24/7 và gửi video Zalo mỗi ngày.'],
      ['Tắm chó xong ở Lumi Pet có được cắt móng và vắt tuyến hôi miễn phí không?', 'Có. Cả 10 bước cơ bản gồm cắt mài móng, nhổ lông tai, vệ sinh mắt/tai, cạo lông bàn chân – bụng và vắt tuyến hôi đều đã bao gồm sẵn trong gói tắm từ 140.000đ.'],
      ['Làm sao đặt lịch trước để sang là tắm ngay không cần chờ?', 'Bạn nhắn Zalo 0989 979 675 hoặc đặt trên lumipet.vn/dat-lich/ trước 1–2 tiếng, nhân viên sẽ chốt đúng khung giờ đẹp cho bé.'],
    ],
  },
  {
    slug: 'spa-tam-cho-meo-botanic-towers-orchard-garden-phan-xich-long',
    title: 'Spa Tắm Chó Mèo Botanic Towers, Orchard Garden, Miếu Nổi',
    desc: 'Cư dân Botanic Towers, KDC Miếu Nổi, Phan Xích Long, Orchard Garden (Phú Nhuận) đi tắm chó 140k, tắm mèo 160k, cắt tỉa 290k chỉ 4–6 phút tại Lumi Pet.',
    category: 'Cư Dân Chung Cư · Phú Nhuận – Miếu Nổi',
    h1: 'Spa tắm chó mèo & Cắt tỉa cho cư dân Botanic Towers, Orchard Garden và KDC Miếu Nổi',
    dek: 'Tóm tắt nhanh: Chỉ 1 trục thẳng Phan Đăng Lưu khoảng 4–6 phút từ Botanic Towers (Nguyễn Thượng Hiền), KDC Miếu Nổi – Phan Xích Long và Orchard Garden (Phú Nhuận), Lumi Pet 27 Võ Trường Toản phục vụ tắm chó 140k, tắm mèo sấy tay 160k, cắt tỉa 290k và Pet Hotel 24/7 từ 100k/ngày.',
    heroImg: 'bai-condo-botanic.jpg',
    heroAlt: 'Chó Phốc sóc và Shih Tzu sạch đẹp sau cắt tỉa tại Lumi Pet gần Botanic Towers Miếu Nổi Phú Nhuận',
    caption: '🐾 Chỉ 4–6 phút chạy thẳng trục Phan Đăng Lưu từ Botanic Towers, Miếu Nổi & Phan Xích Long sang 27 Võ Trường Toản',
    bodyHtml: `
      <p><strong>Tóm tắt nhanh:</strong> Nằm ngay ranh giới <strong>Phường Gia Định (Bình Thạnh cũ) và Quận Phú Nhuận cũ</strong>, <strong>Lumi Pet tại 27 Võ Trường Toản</strong> là tiệm spa chó mèo gần như sát vách đối với cư dân <strong>Botanic Towers (312 Nguyễn Thượng Hiền), KDC Miếu Nổi – Phan Xích Long, Newton Residence, Golden Mansion và Orchard Garden</strong>. Chỉ 4–6 phút chạy thẳng một trục không cần qua cầu lớn.</p>

      <h2 id="lo-trinh-phu-nhuan-condo">1. Lộ trình 1 trục thẳng 4–6 phút từ các chung cư Phú Nhuận</h2>
      <ul>
        <li><strong>Từ Botanic Towers (Nguyễn Thượng Hiền):</strong> Ra đường <strong>Phan Đăng Lưu</strong> rẽ phải chạy thẳng qua ngã tư Nơ Trang Long ~200m là tới nhánh rẽ vào <strong>27 Võ Trường Toản</strong> (chỉ khoảng 4 phút!).</li>
        <li><strong>Từ KDC Miếu Nổi / Phan Xích Long / Vạn Kiếp:</strong> Chạy qua Phan Đăng Lưu hướng Chợ Bà Chiểu ~4–5 phút là tới ngay trước cửa tiệm.</li>
        <li><strong>Từ Orchard Garden / Golden Mansion / Newton Residence:</strong> Đi thẳng Nguyễn Kiệm → Phan Đăng Lưu ~7–9 phút, rất tiện kết hợp đi làm hoặc đi chợ Bà Chiểu.</li>
      </ul>

      <h2 id="bang-gia-phu-nhuan">2. Bảng giá 2026 trọn gói không phát sinh ẩn tại Lumi Pet</h2>
      <table>
        <thead><tr><th>Dịch vụ chăm sóc bé</th><th>Giá niêm yết 2026</th><th>Ghi chú quan trọng</th></tr></thead>
        <tbody>
          <tr><td>Tắm vệ sinh chó 10 bước</td><td><strong>140.000đ – 550.000đ</strong></td><td>8 mốc cân nặng rõ ràng tới 25kg, sấy tay 100%</td></tr>
          <tr><td>Combo Tắm + Cắt tỉa tạo kiểu</td><td><strong>290.000đ – 850.000đ</strong></td><td>Chuyên Poodle, Bichon, Shih Tzu, Maltese, Phốc sóc, Corgi</td></tr>
          <tr><td>Tắm mèo sấy tay khu riêng</td><td><strong>160.000đ – 270.000đ</strong></td><td>3 mốc tới 10kg, khu riêng yên tĩnh không lồng sấy</td></tr>
          <tr><td>Combo Tắm + Cạo lông mèo</td><td><strong>250.000đ – 380.000đ</strong></td><td>Tông đơ êm ít ồn, giữ độ dài an toàn bảo vệ da</td></tr>
          <tr><td>Khách sạn thú cưng 24/7</td><td><strong>100.000đ – 250.000đ/ngày</strong></td><td>Phòng riêng máy lạnh 24/24, quay clip Zalo hằng ngày</td></tr>
        </tbody>
      </table>

      <h2 id="lien-ket-phu-nhuan">3. Xem thêm thông tin khu vực Phú Nhuận – Miếu Nổi</h2>
      <p>Cư dân khu vực có thể xem thêm trang tổng hợp <a href="../../tam-cho-meo-gan-phan-xich-long-mieu-noi/">Tắm chó mèo gần Phan Xích Long – Miếu Nổi</a>, <a href="../../spa-thu-cung-quan-phu-nhuan/">Spa thú cưng Quận Phú Nhuận</a> và đặt lịch trước qua Zalo <strong>0989 979 675</strong> (mở cửa <strong>08:00 – 21:00</strong> mỗi ngày, không phụ thu ca tối).</p>
    `,
    faqs: [
      ['Từ chung cư Botanic Towers (Nguyễn Thượng Hiền) sang Lumi Pet mất mấy phút?', 'Chỉ mất khoảng 4 phút chạy thẳng trục Phan Đăng Lưu sang số 27 Võ Trường Toản (cách Chợ Bà Chiểu ~300m).'],
      ['Cư dân Miếu Nổi – Phan Xích Long đưa mèo đi tắm buổi tối sau 19h có được không?', 'Được. Lumi Pet mở cửa tới 21:00 hằng ngày không phụ thu ca tối; bạn nên nhắn Zalo 0989 979 675 trước 18:30 để tiệm giữ khu mèo riêng và sấy tay kỹ 100% cho bé.'],
      ['Tắm và cắt tỉa Shih Tzu / Maltese 4kg tại Lumi Pet giá bao nhiêu?', 'Combo Tắm + Cắt tỉa cho chó 3–6kg là 360.000đ (dưới 3kg là 290.000đ), đã bao gồm vệ sinh vùng mắt, cắt móng, nhổ lông tai, vắt tuyến hôi và sấy chải bông.'],
      ['Gửi thú cưng dài ngày trên 10 ngày dịp công tác có ưu đãi gì không?', 'Có. Chính sách ngày thường giảm 5% cho kỳ trên 5 ngày và giảm 8% cho kỳ trên 10 ngày tại khu Pet Hotel máy lạnh 24/24.'],
    ],
  },
];

for (const a of articles) {
  const dir = path.join(BLOG_DIR, a.slug);
  fs.mkdirSync(dir, { recursive: true });
  const pageUrl = `${ORIGIN}/bai-viet/${a.slug}/`;
  const imgUrl = `${ORIGIN}/images/${a.heroImg}`;

  const faqHtml = a.faqs
    .map(([q, ans], idx) => `          <details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${ans}</p></details>`)
    .join('\n');

  const html = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${a.title}</title>
  <meta name="description" content="${a.desc}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${a.title}">
  <meta property="og:description" content="${a.desc}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${imgUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="../../lumi-seo.css">
  <link rel="stylesheet" href="../../lumi-blog.css">
</head>
<body>
<main class="blog-shell">
  <div class="breadcrumb"><a href="../../">Lumi Pet</a> / <a href="../">Kiến thức</a> / ${a.title}</div>
  <article>
    <header class="article-hero">
      <span class="article-category">${a.category}</span>
      <h1>${a.h1}</h1>
      <p class="article-dek">${a.dek}</p>
      <div class="article-meta"><span>Cập nhật: 25/11/2026</span><span>6 phút đọc</span><span>Kiểm duyệt: Đội ngũ Lumi Pet Bình Thạnh</span></div>
    </header>

    <div class="article-layout">
      <div class="article-prose">
        <figure class="lumi-article-photo" style="margin:0 0 20px;border-radius:20px;overflow:hidden;border:1px solid #ffead7;background:#fff;">
          <img src="../../images/${a.heroImg}" alt="${a.heroAlt}" loading="lazy" style="width:100%;max-height:360px;object-fit:cover;display:block;">
          <figcaption style="padding:10px 16px;font-size:12.5px;font-weight:700;color:#64748b;background:#fffaf3;">${a.caption}</figcaption>
        </figure>
${a.bodyHtml}
        <section class="panel" style="margin-top:24px;">
          <h2>Câu hỏi thường gặp</h2>
          <div class="faq">
${faqHtml}
          </div>
        </section>

        <section class="blog-cta" style="margin-top:24px;">
          <h2>Đặt lịch nhanh cho cư dân chung cư</h2>
          <p>Lumi Pet 27 Võ Trường Toản, Phường Gia Định · Mở cửa 08:00 – 21:00 mỗi ngày · Pet Hotel trực 24/7.</p>
          <div class="blog-cta-actions">
            <a class="btn" href="../../dat-lich/">Đặt lịch Spa</a>
            <a class="btn btn-secondary" href="../../dat-phong/">Book phòng Hotel</a>
            <a class="btn btn-secondary" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Nhắn Zalo 0989 979 675</a>
          </div>
        </section>
      </div>
    </div>
  </article>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="../../dat-lich/">Đặt lịch Spa →</a></div></div></footer>
</body>
</html>`;

  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`Created /bai-viet/${a.slug}/index.html (${a.heroImg})`);
}
