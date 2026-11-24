import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';

const wards = [
  {
    slug: 'spa-thu-cung-phuong-binh-thanh',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Bình Thạnh | Lumi Pet',
    desc: 'Spa thú cưng gần Phường Bình Thạnh (Quận Bình Thạnh cũ) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, cắt tỉa 290k, gửi chó mèo từ 100k.',
    eyebrow: 'Phường Bình Thạnh · Quận Bình Thạnh cũ',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Bình Thạnh',
    lead: 'Khách hàng sinh sống tại <strong>Phường Bình Thạnh</strong> (khu vực đường Bạch Đằng, Xô Viết Nghệ Tĩnh, Đinh Bộ Lĩnh, Nguyễn Xí, Chu Văn An — Quận Bình Thạnh cũ) chỉ mất <strong>5–8 phút</strong> di chuyển sang <strong>Lumi Pet – 27 Võ Trường Toản, Phường Gia Định</strong> để tắm chó, tắm mèo sấy tay 100%, cắt tỉa lông và gửi Pet Hotel 24/7.',
    answer: 'Tại Lumi Pet (27 Võ Trường Toản, cách trung tâm Phường Bình Thạnh 5–8 phút chạy xe), bảng giá 2026 niêm yết công khai: <strong>tắm vệ sinh chó từ 140.000đ</strong> (8 mốc tới 25kg), <strong>tắm vệ sinh mèo từ 160.000đ</strong> (sấy tay 100%), <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>khách sạn thú cưng từ 100.000đ/ngày</strong> (giảm đến 8% dài ngày).',
    img: '../images/vn-bath-dog.jpg',
    imgAlt: 'Dịch vụ tắm chó mèo sạch sẽ dịu nhẹ phục vụ khách Phường Bình Thạnh tại Lumi Pet',
    imgCap: 'Tắm vệ sinh sạch sẽ, cắt móng, vệ sinh tai, vắt tuyến hôi và sấy tay nhẹ nhàng tại Lumi Pet Bình Thạnh',
    areaServed: ['Phường Bình Thạnh, TP. Hồ Chí Minh', 'Quận Bình Thạnh, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ đường Đinh Bộ Lĩnh / Bến xe Miền Đông cũ (6 phút):</strong> Chạy thẳng Đinh Bộ Lĩnh → rẽ phải Bạch Đằng hướng Chợ Bà Chiểu → rẽ vào Võ Trường Toản số 27.',
      '<strong>Từ trục Xô Viết Nghệ Tĩnh / Chu Văn An (5–7 phút):</strong> Đi theo hướng Ngã tư Hàng Xanh hoặc Phan Chu Trinh nối sang Bạch Đằng → Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Từ Nguyễn Xí / Nơ Trang Long (7–8 phút):</strong> Chạy hướng Bệnh viện Ung Bướu / Bệnh viện Nhân dân Gia Định → rẽ vào khu vực Trường ĐH Mỹ Thuật – Võ Trường Toản.',
    ],
    localTips: 'Khu vực Phường Bình Thạnh mật độ giao thông cao vào giờ tan tầm 17:30–19:00. Ba mẹ có thể đặt trước khung giờ tối 18:30 – 19:30 (tiệm mở cửa tới 21:00 không phụ thu ca tối) để đi làm về ghé gửi bé tắm luôn rất tiện lợi.',
    faqs: [
      ['Từ Phường Bình Thạnh sang Lumi Pet 27 Võ Trường Toản bao xa?', 'Chỉ khoảng 1,5 – 2,5km (5–8 phút chạy xe máy theo trục Bạch Đằng hoặc Đinh Bộ Lĩnh), rất thuận tiện đưa đón chó mèo đi tắm định kỳ và gửi khách sạn.'],
      ['Tắm chó và tắm mèo tại Lumi Pet giá bao nhiêu năm 2026?', 'Tắm vệ sinh chó từ 140.000đ (dưới 3kg) đến 550.000đ (20–25kg). Tắm vệ sinh mèo từ 160.000đ (dưới 3kg) đến 270.000đ (6–10kg). Cắt tỉa lông chó từ 290.000đ.'],
      ['Lumi Pet có nhận gửi chó mèo dài ngày cho khách Phường Bình Thạnh không?', 'Có. Khách sạn thú cưng 24/7 giá 100.000đ – 250.000đ/ngày, phòng riêng máy lạnh 24/24, quay video mỗi ngày qua Zalo. Gửi trên 5 ngày giảm 5%, trên 10 ngày giảm 8%.'],
      ['Đưa bé đi tắm ở Lumi Pet có cần đặt lịch trước không?', 'Nên đặt trước qua website hoặc Zalo 0989 979 675 để tiệm sắp xếp sẵn thợ đúng giờ hẹn, tránh để boss chờ lâu vào cuối tuần.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-binh-loi-trung',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Bình Lợi Trung | Lumi Pet',
    desc: 'Tắm chó 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & gửi chó mèo 24/7 cho khách Phường Bình Lợi Trung (Nơ Trang Long, Lê Quang Định, Phan Văn Trị cũ).',
    eyebrow: 'Phường Bình Lợi Trung · Nơ Trang Long – Lê Quang Định',
    h1: 'Tắm chó mèo, Grooming & Hotel cho khách Phường Bình Lợi Trung (Bình Thạnh cũ)',
    lead: 'Dành cho ba mẹ nuôi thú cưng tại <strong>Phường Bình Lợi Trung</strong> (khu vực Nơ Trang Long, Lê Quang Định, Phan Văn Trị, Nguyễn Văn Đậu, Phạm Văn Đồng — Phường 5, 11, 13 Bình Thạnh cũ). Chỉ <strong>5–9 phút</strong> chạy thẳng xuống <strong>Lumi Pet – 27 Võ Trường Toản, Phường Gia Định</strong> với bảng giá 2026 minh bạch và thợ sấy tay 100% không lồng sấy nhiệt.',
    answer: 'Khách tại <strong>Phường Bình Lợi Trung</strong> có thể đưa chó mèo tới Lumi Pet (27 Võ Trường Toản, gần Chợ Bà Chiểu) với biểu phí 2026 rõ ràng: <strong>tắm chó 140.000đ – 550.000đ</strong>, <strong>tắm mèo 160.000đ – 270.000đ</strong>, <strong>cắt tỉa chó 290.000đ – 850.000đ</strong> và <strong>gửi Pet Hotel 24/7 từ 100.000đ/ngày</strong>. Mở cửa 07:00 – 21:00 mỗi ngày.',
    img: '../images/vn-hero-spa.jpg',
    imgAlt: 'Groomer sấy chải và cắt tỉa lông chó Poodle cho khách Phường Bình Lợi Trung tại Lumi Pet',
    imgCap: 'Grooming cắt tỉa tạo kiểu Poodle, Corgi, Phốc sóc và tắm vệ sinh chó mèo chuẩn an toàn gần Phường Bình Lợi Trung',
    areaServed: ['Phường Bình Lợi Trung, TP. Hồ Chí Minh', 'Quận Bình Thạnh, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ trục Lê Quang Định / Chợ Cây Thị (5 phút):</strong> Chạy thẳng Lê Quang Định xuống hướng Chợ Bà Chiểu → rẽ Phan Đăng Lưu / Võ Trường Toản số 27.',
      '<strong>Từ Nơ Trang Long / Nguyễn Văn Đậu (6 phút):</strong> Chạy thẳng Nơ Trang Long qua Bệnh viện Nhân dân Gia Định → rẽ vào đường Võ Trường Toản.',
      '<strong>Từ Phan Văn Trị / Phạm Văn Đồng (8–9 phút):</strong> Đi theo Phan Văn Trị nối Lê Quang Định hoặc Nơ Trang Long xuống khu vực Gia Định – Võ Trường Toản.',
    ],
    localTips: 'Các khu dân cư dọc Nơ Trang Long, Nguyễn Văn Đậu và Lê Quang Định có rất nhiều gia đình nuôi Poodle, Corgi và mèo Anh lông ngắn. Ba mẹ có thể gửi ảnh kiểu lông muốn cắt qua Zalo 0989 979 675 để Groomer tư vấn trước khi đưa bé đi.',
    faqs: [
      ['Từ đường Nơ Trang Long / Lê Quang Định (Phường Bình Lợi Trung) tới Lumi Pet mất bao lâu?', 'Chỉ mất khoảng 5–9 phút chạy thẳng xuống khu vực Chợ Bà Chiểu – Bệnh viện Gia Định và rẽ vào 27 Võ Trường Toản, có chỗ đậu xe máy và dừng ô tô thuận tiện.'],
      ['Tắm mèo và cạo lông mèo cho khách Phường Bình Lợi Trung giá bao nhiêu?', 'Tắm vệ sinh mèo sấy tay 100% giá 160.000đ (dưới 3kg), 220.000đ (3–6kg), 270.000đ (6–10kg). Combo tắm + cạo lông mèo giá 250.000đ – 380.000đ.'],
      ['Chó lớn 15–25kg (Golden, Husky, Samoyed) tiệm có nhận tắm không?', 'Có. Lumi Pet niêm yết rõ tới 8 mốc cân nặng: 15–18kg (430k), 18–20kg (480k), 20–25kg (550k) cho gói tắm vệ sinh trọn gói; bé trên 25kg vui lòng nhắn Zalo báo giá riêng.'],
      ['Lumi Pet có mở cửa Thứ 7 và Chủ nhật không?', 'Có. Quầy Spa & Grooming mở cửa 07:00 – 21:00 tất cả các ngày trong tuần kể cả Thứ 7, Chủ nhật; khu Pet Hotel trông giữ bé 24/7.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-thanh-my-tay',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Thạnh Mỹ Tây | Lumi Pet',
    desc: 'Spa thú cưng cho khách Phường Thạnh Mỹ Tây (Hàng Xanh, Điện Biên Phủ, Vinhomes, Bình Thạnh cũ): tắm chó từ 140k, tắm mèo 160k, cắt tỉa 290k, Hotel 100k.',
    eyebrow: 'Phường Thạnh Mỹ Tây · Hàng Xanh – Điện Biên Phủ – Landmark 81',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Thạnh Mỹ Tây',
    lead: 'Phục vụ nhanh chóng cư dân <strong>Phường Thạnh Mỹ Tây</strong> (khu Ngã tư Hàng Xanh, Điện Biên Phủ, Xô Viết Nghệ Tĩnh, Ngô Tất Tố, Nguyễn Hữu Cảnh, Vinhomes Central Park – Phường 19, 22, 25 Bình Thạnh cũ). Chỉ <strong>6–10 phút</strong> sang <strong>Lumi Pet – 27 Võ Trường Toản</strong> với giá niêm yết 2026 rõ ràng, phòng riêng máy lạnh 24/24.',
    answer: 'Khách hàng tại <strong>Phường Thạnh Mỹ Tây</strong> (Hàng Xanh, Điện Biên Phủ, khu Vinhomes Central Park) có thể đặt lịch tại Lumi Pet 27 Võ Trường Toản với mức giá dễ chịu hơn mặt bằng khu căn hộ: <strong>tắm chó từ 140.000đ</strong>, <strong>tắm mèo sấy tay từ 160.000đ</strong>, <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>khách sạn chó mèo 24/7 từ 100.000đ/ngày</strong>.',
    img: '../images/vn-hotel-cabins.jpg',
    imgAlt: 'Phòng khách sạn thú cưng máy lạnh 24/24 và dịch vụ spa phục vụ khách Phường Thạnh Mỹ Tây tại Lumi Pet',
    imgCap: 'Không gian Spa sạch sẽ và phòng kính Pet Hotel riêng tư máy lạnh 24/24 chỉ cách Hàng Xanh – Thạnh Mỹ Tây vài phút chạy xe',
    areaServed: ['Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh', 'Quận Bình Thạnh, TP. Hồ Chí Minh', 'Phường An Khánh (Thảo Điền), TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Ngã tư Hàng Xanh / Điện Biên Phủ (6 phút):</strong> Chạy thẳng Bạch Đằng hướng về Chợ Bà Chiểu → rẽ phải vào đường Võ Trường Toản số 27.',
      '<strong>Từ khu Vinhomes Central Park / Nguyễn Hữu Cảnh / Ngô Tất Tố (8–10 phút):</strong> Qua cầu Thủ Thiêm/Ngô Tất Tố → rẽ Xô Viết Nghệ Tĩnh hoặc Điện Biên Phủ → Bạch Đằng → 27 Võ Trường Toản.',
      '<strong>Từ D2 / Nguyễn Gia Trí / Ung Văn Khiêm (8 phút):</strong> Chạy qua Điện Biên Phủ hướng Hàng Xanh → thẳng Bạch Đằng đến khu Chợ Bà Chiểu – Võ Trường Toản.',
    ],
    localTips: 'Rất nhiều cư dân căn hộ khu Thạnh Mỹ Tây – Vinhomes chọn gửi bé tại Pet Hotel 24/7 của Lumi Pet mỗi dịp công tác hoặc cuối tuần vì giá phòng minh bạch từ 100k–250k/ngày (giảm đến 8% dài ngày) và luôn có video tương tác gửi Zalo mỗi ngày.',
    faqs: [
      ['Từ Ngã tư Hàng Xanh hoặc khu Vinhomes (Phường Thạnh Mỹ Tây) đi Lumi Pet mất mấy phút?', 'Từ Hàng Xanh chạy thẳng trục Bạch Đằng chỉ mất khoảng 6 phút; từ khu Nguyễn Hữu Cảnh / Vinhomes Central Park mất khoảng 8–10 phút, đường thẳng rất dễ tìm.'],
      ['Giá gửi chó mèo khách sạn 24/7 tại Lumi Pet cho cư dân Thạnh Mỹ Tây là bao nhiêu?', 'Giá theo cân nặng: dưới 3kg là 100k/ngày, 3–6kg là 120k/ngày, 6–9kg là 160k/ngày, 9–12kg là 200k/ngày, 12–15kg là 250k/ngày. Gửi >5 ngày giảm 5%, >10 ngày giảm 8%.'],
      ['Tiệm có nhận tắm chó mèo sau 18h cho người đi làm về muộn không?', 'Có. Lumi Pet mở cửa tới 21:00 mỗi ngày, không phụ thu ca tối. Bạn nên đặt trước khung 18:00 – 19:30 để thợ có đủ thời gian sấy tay khô hoàn toàn cho bé.'],
      ['Mèo căn hộ rất nhát và sợ máy sấy, Lumi Pet tắm thế nào?', 'Mèo được chăm sóc tại khu riêng yên tĩnh, thấm khô bằng khăn mềm trước rồi thợ sấy tay 100% bằng máy gió êm — tuyệt đối không nhốt lồng sấy nhiệt.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-cau-kieu-phu-nhuan',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Cầu Kiệu Phú Nhuận | Lumi',
    desc: 'Tắm chó từ 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & Hotel 24/7 gần Phường Cầu Kiệu, Phú Nhuận (Phan Đăng Lưu, Phan Xích Long) tại Lumi Pet 27 Võ Trường Toản.',
    eyebrow: 'Phường Cầu Kiệu · Quận Phú Nhuận cũ – Phan Xích Long',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Cầu Kiệu (Phú Nhuận)',
    lead: 'Nằm ngay ranh giới giáp <strong>Phường Cầu Kiệu (Phường 1, 2, 7 Quận Phú Nhuận cũ)</strong> và trục đường <strong>Phan Đăng Lưu – Phan Xích Long – Hoàng Hoa Thám</strong>, <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định)</strong> chỉ cách khách hàng Phú Nhuận <strong>4–6 phút</strong> di chuyển. Giá tắm chó từ 140k, tắm mèo sấy tay từ 160k, Pet Hotel 24/7 từ 100k/ngày.',
    answer: 'Cư dân <strong>Phường Cầu Kiệu và Quận Phú Nhuận cũ</strong> (Phan Xích Long, Phan Đăng Lưu, Cô Giang, Hoa Sứ, Hoa Lan) chỉ cần chạy thẳng Phan Đăng Lưu 4–6 phút là tới <strong>Lumi Pet 27 Võ Trường Toản</strong>: tắm chó 140k–550k, tắm mèo sấy tay 100% 160k–270k, cắt tỉa chó 290k–850k và gửi chó mèo Hotel 24/7 từ 100k/ngày.',
    img: '../images/vn-spa-cat.jpg',
    imgAlt: 'Tắm mèo sấy tay 100% và spa chó mèo gần Phường Cầu Kiệu Phú Nhuận tại Lumi Pet',
    imgCap: 'Khu chăm sóc riêng tư cho mèo và bàn grooming sạch sẽ chỉ cách trục Phan Xích Long – Phan Đăng Lưu (Phường Cầu Kiệu) 4–6 phút',
    areaServed: ['Phường Cầu Kiệu, TP. Hồ Chí Minh', 'Phường Phú Nhuận, TP. Hồ Chí Minh', 'Phường Đức Nhuận, TP. Hồ Chí Minh', 'Quận Phú Nhuận, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ khu Phan Xích Long / Các đường Hoa (4–5 phút):</strong> Ra đường Phan Đăng Lưu → chạy thẳng hướng Chợ Bà Chiểu → rẽ vào khu vực Võ Trường Toản số 27.',
      '<strong>Từ Cầu Kiệu / Hai Bà Trưng – Phan Đình Phùng (5 phút):</strong> Rẽ phải Phan Đăng Lưu đi thẳng 1,2km hướng Bình Thạnh là tới gần ngã tư Võ Trường Toản.',
      '<strong>Từ Hoàng Hoa Thám / Nguyễn Thượng Hiền / Ngã tư Phú Nhuận (5–6 phút):</strong> Chạy thẳng Phan Đăng Lưu hướng Chợ Bà Chiểu chỉ mất 5 phút không lo đường vòng.',
    ],
    localTips: 'Nhiều chủ nuôi mèo và Poodle khu vực Phan Xích Long – Cầu Kiệu chọn Lumi Pet vì đường Phan Đăng Lưu thẳng tắp dễ đi, ít kẹt hơn đi vào trung tâm, lại có bảng giá 2026 công khai rõ ràng không phát sinh phí vặt.',
    faqs: [
      ['Từ khu Phan Xích Long / Phường Cầu Kiệu (Phú Nhuận) qua Lumi Pet có gần không?', 'Rất gần — chỉ khoảng 1,2 – 1,8km (4–6 phút chạy thẳng đường Phan Đăng Lưu hướng Chợ Bà Chiểu, rẽ vào 27 Võ Trường Toản).'],
      ['Giá tắm chó, cắt tỉa lông và tắm mèo tại Lumi Pet có phụ phí ẩn không?', 'Không. Giá niêm yết 2026 đã gồm trọn gói cắt mài móng, vệ sinh tai, cạo lông bàn chân/bụng/hậu môn và vắt tuyến hôi. Chỉ các trường hợp gỡ rối nặng, sữa tắm đặc trị, tạo kiểu khó hoặc bé dữ mới có phụ thu và luôn báo trước.'],
      ['Tiệm có nhận tắm cạo lông cho mèo ở Phú Nhuận mang sang không?', 'Có. Combo tắm + cạo lông mèo giá 250.000đ (dưới 3kg), 320.000đ (3–6kg) và 380.000đ (6–10kg), thao tác nhẹ nhàng tại khu riêng.'],
      ['Tôi đi công tác muốn gửi chó/mèo từ Phú Nhuận sang Hotel Lumi Pet thì cần chuẩn bị gì?', 'Chỉ cần mang sổ tiêm ngừa (hoặc ảnh chụp), thức ăn quen bụng nếu bé kén ăn và đặt phòng trước qua website hoặc Zalo 0989 979 675.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-tan-dinh-quan-1',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Tân Định Quận 1 | Lumi',
    desc: 'Spa thú cưng gần Phường Tân Định, Quận 1 (Cầu Bông, Đinh Tiên Hoàng, Hai Bà Trưng) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, Hotel 100k.',
    eyebrow: 'Phường Tân Định · Quận 1 cũ – Cầu Bông – Đa Kao',
    h1: 'Tắm chó mèo, Grooming & Khách sạn thú cưng gần Phường Tân Định (Quận 1)',
    lead: 'Chỉ cần qua <strong>Cầu Bông 5 phút</strong> từ <strong>Phường Tân Định &amp; Đa Kao (Quận 1 cũ)</strong> — khu Chợ Tân Định, Công viên Lê Văn Tám, Đinh Tiên Hoàng, Hai Bà Trưng, Trần Quang Khải — là tới <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định)</strong>. Dịch vụ chỉn chu, dễ dừng xe và bảng giá 2026 tối ưu hơn đáng kể so với mặt bằng trung tâm Quận 1.',
    answer: 'Khách hàng ở <strong>Phường Tân Định, Quận 1</strong> qua Cầu Bông 5 phút tới Lumi Pet (27 Võ Trường Toản) được áp dụng đúng bảng giá niêm yết 2026: <strong>tắm chó từ 140.000đ</strong> (8 mốc tới 25kg), <strong>tắm mèo sấy tay 100% từ 160.000đ</strong>, <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>khách sạn thú cưng 24/7 từ 100.000đ/ngày</strong>.',
    img: '../images/vn-pet-shop.jpg',
    imgAlt: 'Lumi Pet Shop Spa và Hotel 24/7 chỉ cách Phường Tân Định Quận 1 qua Cầu Bông 5 phút',
    imgCap: 'Không gian sạch sẽ, thân thiện và thuận tiện dừng ô tô/xe máy chỉ cách Phường Tân Định – Cầu Bông (Quận 1) 5 phút di chuyển',
    areaServed: ['Phường Tân Định, TP. Hồ Chí Minh', 'Phường Sài Gòn, TP. Hồ Chí Minh', 'Quận 1, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Đinh Tiên Hoàng / Đa Kao / Công viên Lê Văn Tám (4–5 phút):</strong> Chạy thẳng Đinh Tiên Hoàng qua <strong>Cầu Bông</strong> → nối thẳng Lê Văn Duyệt hướng Chợ Bà Chiểu → rẽ Võ Trường Toản số 27.',
      '<strong>Từ Chợ Tân Định / Hai Bà Trưng / Trần Quang Khải (5–6 phút):</strong> Rẽ Trần Quang Khải hoặc Võ Thị Sáu ra Đinh Tiên Hoàng → qua Cầu Bông chạy thẳng 1km là tới.',
      '<strong>Đi ô tô từ Quận 1:</strong> Trục Đinh Tiên Hoàng – Lê Văn Duyệt – Phan Đăng Lưu rộng thoáng, rất tiện dừng xe thả/đón bé trước cửa tiệm 27 Võ Trường Toản.',
    ],
    localTips: 'So với mặt bằng giá Spa & Pet Hotel tại lõi Quận 1 (thường từ 220k–350k cho gói tắm cơ bản), khách Phường Tân Định chạy qua Cầu Bông chỉ thêm 5 phút nhưng tiết kiệm chi phí rõ rệt mà bé vẫn được sấy tay 100% và phòng riêng máy lạnh 24/24.',
    faqs: [
      ['Từ Phường Tân Định (Quận 1) qua Lumi Pet 27 Võ Trường Toản đi đường nào nhanh nhất?', 'Nhanh nhất là chạy thẳng đường Đinh Tiên Hoàng qua Cầu Bông, nối thẳng đường Lê Văn Duyệt hướng Chợ Bà Chiểu rồi rẽ vào 27 Võ Trường Toản (chỉ mất khoảng 5 phút).'],
      ['Tắm chó và cắt tỉa Poodle cho khách Quận 1 tại Lumi Pet giá bao nhiêu?', 'Chó dưới 3kg: tắm vệ sinh 140.000đ, tắm cắt tỉa 290.000đ. Chó 3–6kg: tắm vệ sinh 190.000đ, tắm cắt tỉa 360.000đ. Bảng giá niêm yết trọn gói, không tăng giá theo khu vực khách ở.'],
      ['Gửi chó mèo khách sạn gần Quận 1 có quay video hằng ngày không?', 'Có. Pet Hotel 24/7 tại Lumi Pet có không gian phòng riêng mỗi bé, máy lạnh 24/24, giá từ 100.000đ/ngày và luôn quay video tương tác gửi Zalo mỗi ngày.'],
      ['Cuối tuần đưa bé từ Quận 1 qua có phải chờ lâu không?', 'Bạn chỉ cần đặt lịch trước qua website hoặc Zalo 0989 979 675 trước 1–2 tiếng để tiệm giữ đúng khung giờ hẹn, tránh chờ đợi.'],
    ],
  },
];

function buildHtml(w) {
  if (w.title.length > 62) throw new Error(`Title > 62 chars (${w.title.length}): ${w.slug}`);
  if (w.desc.length < 130 || w.desc.length > 160) throw new Error(`Desc out of 130-160 (${w.desc.length}): ${w.slug}`);

  const url = `${ORIGIN}/${w.slug}/`;
  const escTitle = w.title.replaceAll('&', '&amp;');
  const escDesc = w.desc.replaceAll('&', '&amp;');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: w.title,
        serviceType: 'Tắm chó, tắm mèo, cắt tỉa lông grooming và khách sạn thú cưng 24/7',
        provider: { '@id': `${ORIGIN}/#business` },
        areaServed: w.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
        offers: { '@type': 'AggregateOffer', lowPrice: '100000', highPrice: '850000', priceCurrency: 'VND', offerCount: '35' },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Spa & Hotel Bình Thạnh', item: `${ORIGIN}/spa-thu-cung-binh-thanh/` },
          { '@type': 'ListItem', position: 3, name: w.eyebrow.split('·')[0].trim() },
        ],
      },
    ],
  };

  const faqHtml = w.faqs
    .map(([q, a], idx) => `<details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`)
    .join('\n        ');

  const otherWards = [
    ['/tam-cho-phuong-gia-dinh/', 'Tắm chó Phường Gia Định'],
    ['/tam-meo-phuong-gia-dinh/', 'Tắm mèo Phường Gia Định'],
    ['/cat-tia-long-cho-phuong-gia-dinh/', 'Cắt tỉa lông chó Phường Gia Định'],
    ['/khach-san-thu-cung-phuong-gia-dinh/', 'Khách sạn thú cưng Phường Gia Định'],
    ['/spa-thu-cung-phuong-binh-thanh/', 'Phường Bình Thạnh'],
    ['/spa-thu-cung-phuong-binh-loi-trung/', 'Phường Bình Lợi Trung'],
    ['/spa-thu-cung-phuong-thanh-my-tay/', 'Phường Thạnh Mỹ Tây'],
    ['/spa-thu-cung-phuong-cau-kieu-phu-nhuan/', 'Phường Cầu Kiệu (Phú Nhuận)'],
    ['/spa-thu-cung-phuong-tan-dinh-quan-1/', 'Phường Tân Định (Quận 1)'],
  ]
    .filter(([href]) => !href.includes(w.slug))
    .map(([href, label]) => `<a href="..${href}">${label}</a>`)
    .join(' · ');

  return `<!doctype html>
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
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/${w.img.replace('../', '')}">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../spa-thu-cung-binh-thanh/">Spa &amp; Hotel</a> / ${w.eyebrow.split('·')[0].trim()}</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">${w.eyebrow}</div>
      <h1>${w.h1}</h1>
      <p class="lead">${w.lead}</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> ${w.answer}
      </div>
      <div class="hero-actions">
        <a class="btn btn-green" href="../dat-lich/">Đặt lịch Spa ngay</a>
        <a class="btn btn-primary" href="../dat-phong/">Book phòng Hotel 24/7</a>
        <a class="btn btn-secondary" href="tel:0989979675">Gọi 0989 979 675</a>
      </div>
    </div>
    <aside class="hero-side">
      <div class="eyebrow">Bảng giá 2026 minh bạch</div>
      <strong>Từ 100k – 140k</strong>
      <ul class="mini-list">
        <li>🐶 Tắm chó: 140.000đ – 550.000đ</li>
        <li>🐱 Tắm mèo sấy tay: 160.000đ – 270.000đ</li>
        <li>✂️ Cắt tỉa chó: 290.000đ – 850.000đ</li>
        <li>🏨 Pet Hotel 24/7: 100k–250k/ngày (giảm đến 8%)</li>
        <li>📍 27 Võ Trường Toản, Phường Gia Định</li>
      </ul>
    </aside>
  </section>

  <figure class="lumi-vn-showcase" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);">
    <img src="${w.img}" alt="${w.imgAlt}" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">🐾 ${w.imgCap}</figcaption>
  </figure>

  <div class="grid">
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
      <p class="muted">Đã gồm cắt mài móng, vệ sinh tai, cạo đệm chân/bụng/hậu môn, vắt tuyến hôi và sấy tay 100%. Chó trên 25kg liên hệ Zalo <strong>0989 979 675</strong> báo giá.</p>
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
      <h3 style="margin-top:18px;">Giá Khách sạn chó mèo (Pet Hotel 24/7)</h3>
      <ul>
        <li>Dưới 3kg: <strong>100.000đ/ngày</strong> · 3–6kg: <strong>120.000đ/ngày</strong></li>
        <li>6–9kg: <strong>160.000đ/ngày</strong> · 9–12kg: <strong>200.000đ/ngày</strong> · 12–15kg: <strong>250.000đ/ngày</strong></li>
        <li><strong>Ưu đãi dài ngày:</strong> Trên 5 ngày giảm 5% · Trên 10 ngày giảm 8%</li>
        <li>Phòng riêng sạch sẽ, máy lạnh 24/24, quay video tương tác mỗi ngày.</li>
      </ul>
    </section>

    <section class="panel span-6">
      <h2>Hướng dẫn đường đi sang 27 Võ Trường Toản</h2>
      <ul>
        ${w.routes.map((r) => `<li>${r}</li>`).join('\n        ')}
      </ul>
      <div class="notice">${w.localTips}</div>
      <p style="margin-top:12px;"><a class="btn btn-secondary" href="https://www.google.com/maps/place/?q=place_id:ChIJQQ1vLgApdTERzUEEgAktmsg" target="_blank" rel="noopener noreferrer">📍 Mở Google Maps chỉ đường</a></p>
    </section>

    <section class="panel span-6">
      <h2>Phụ thu minh bạch &amp; Khu vực phục vụ</h2>
      <ul>
        <li><strong>Gỡ rối lông:</strong> 50.000đ – 500.000đ (tùy mức độ rối).</li>
        <li><strong>Tạo kiểu đặc biệt (bo tròn, mông đào...):</strong> 50.000đ – 100.000đ.</li>
        <li><strong>Sữa tắm trắng lông, nấm, ve rận:</strong> 50.000đ – 100.000đ.</li>
        <li><strong>Bé dữ, khó hợp tác:</strong> 50.000đ – 200.000đ.</li>
        <li><strong>Lông quá dày, nhiều bông, tốn thời gian:</strong> 50.000đ – 150.000đ.</li>
      </ul>
      <p class="muted" style="margin-top:12px;"><strong>Xem thêm khu vực lân cận:</strong> ${otherWards}</p>
    </section>

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp</h2>
      <div class="faq">
        ${faqHtml}
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (P.2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 07:00 – 21:00 · Hotel: 24/7</div><div><a href="../dat-lich/">Đặt lịch ngay →</a></div></div></footer>
<script src="../lumi-ui.js" defer></script>
</body>
</html>
`;
}

for (const w of wards) {
  const dir = path.join(PUBLIC_DIR, w.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = buildHtml(w);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`[CREATED] /${w.slug}/ | Title(${w.title.length}c) | Desc(${w.desc.length}c)`);
}
