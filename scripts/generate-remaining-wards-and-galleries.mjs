import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';

const NEW_WARDS = [
  {
    slug: 'spa-thu-cung-phuong-binh-quoi',
    wardShort: 'Phường Bình Quới',
    eyebrow: 'Phường Bình Quới · Thanh Đa, Bình Thạnh cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Bình Quới | Lumi Pet',
    description:
      'Spa thú cưng gần Phường Bình Quới (P.27, P.28 Thanh Đa, Bình Thạnh cũ) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, Hotel 24/7 từ 100k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Bình Quới (Thanh Đa)',
    ogImage: 'vn-bath-dog.jpg',
    heroImg: 'vn-bath-dog.jpg',
    heroAlt: 'Tắm vệ sinh chó mèo sấy tay 100% phục vụ khách Phường Bình Quới Thanh Đa tại Lumi Pet',
    heroCap: '🐾 Khách từ Thanh Đa, Bình Quới chỉ mất 10–12 phút sang Lumi Pet 27 Võ Trường Toản tắm vệ sinh 10 bước & sấy tay 100%',
    travelTime: '10–12 phút',
    oldDistrictText: 'khu vực Bán đảo Thanh Đa, đường Bình Quới, Xô Viết Nghệ Tĩnh (Phường 27 & Phường 28, Bình Thạnh cũ)',
    areaServed: ['Phường Bình Quới, TP. Hồ Chí Minh', 'Quận Bình Thạnh, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ đường Bình Quới / Cư xá Thanh Đa (10–12 phút):</strong> Qua Cầu Kinh Thanh Đa → chạy thẳng Xô Viết Nghệ Tĩnh hướng Ngã tư Hàng Xanh → rẽ phải Bạch Đằng hướng Chợ Bà Chiểu → rẽ Võ Trường Toản số 27.',
      '<strong>Hướng tránh kẹt xe Hàng Xanh (10 phút):</strong> Qua Cầu Kinh → rẽ phải Ung Văn Khiêm → D2 (Nguyễn Gia Trí) hoặc Đinh Bộ Lĩnh → Bạch Đằng → Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Đi ô tô / taxi đưa chó lớn:</strong> Đường Võ Trường Toản thông thoáng, dễ dừng đỗ sát cửa 27 Võ Trường Toản để đón trả các bé Husky, Golden, Samoyed.',
    ],
    tip: 'Khách ở khu Bình Quới – Thanh Đa có cún hay đi dạo công viên dễ dính bùn đất nên đặt lịch tắm vệ sinh định kỳ 7–10 ngày/lần hoặc đặt ca tối (tiệm mở tới 21:00 không phụ thu ngoài giờ).',
    faqs: [
      ['Từ Phường Bình Quới (Thanh Đa) sang Lumi Pet 27 Võ Trường Toản bao xa?', 'Khoảng 3,5 – 4,5km (10–12 phút chạy xe qua Cầu Kinh Thanh Đa → Xô Viết Nghệ Tĩnh → Bạch Đằng), rất tiện ghé trên trục đường đi làm vào trung tâm.'],
      ['Tắm chó lớn và tắm mèo cho khách Bình Quới giá bao nhiêu năm 2026?', 'Tắm vệ sinh chó chia 8 mốc rõ ràng tới 25kg từ 140.000đ – 550.000đ; tắm vệ sinh mèo từ 160.000đ – 270.000đ (sấy tay 100% không lồng sấy nhiệt); cắt tỉa chó từ 290.000đ.'],
      ['Lumi Pet có nhận gửi chó mèo dài ngày khi gia đình ở Thanh Đa đi du lịch không?', 'Có. Pet Hotel 24/7 giá 100.000đ – 250.000đ/ngày, phòng riêng máy lạnh 24/24, quay video Zalo mỗi ngày. Gửi trên 5 ngày giảm 5%, trên 10 ngày giảm 8% (ngày thường).'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-duc-nhuan-phu-nhuan',
    wardShort: 'Phường Đức Nhuận (Phú Nhuận)',
    eyebrow: 'Phường Đức Nhuận · Quận Phú Nhuận cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Đức Nhuận | Lumi Pet',
    description:
      'Spa thú cưng sát Phường Đức Nhuận (P.4, P.5, P.9 Phú Nhuận cũ) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo sấy tay 160k, cắt tỉa 290k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Đức Nhuận (Phú Nhuận)',
    ogImage: 'vn-hero-spa.jpg',
    heroImg: 'vn-hero-spa.jpg',
    heroAlt: 'Spa tắm vệ sinh và cắt tỉa chó mèo sát Phường Đức Nhuận Phú Nhuận tại Lumi Pet',
    heroCap: '✨ Chỉ 5–7 phút từ Nguyễn Kiệm, Thích Quảng Đức, Phan Đăng Lưu sang Lumi Pet 27 Võ Trường Toản làm đẹp cho bé',
    travelTime: '5–7 phút',
    oldDistrictText: 'khu vực đường Thích Quảng Đức, Nguyễn Kiệm, Phan Đăng Lưu, Hoàng Văn Thụ, Đào Duy Anh (Phường 4, 5, 9 Quận Phú Nhuận cũ)',
    areaServed: ['Phường Đức Nhuận, TP. Hồ Chí Minh', 'Quận Phú Nhuận, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Thích Quảng Đức / Phan Đăng Lưu (5 phút):</strong> Chạy thẳng Phan Đăng Lưu hướng về Bệnh viện Nhân dân Gia Định / Chợ Bà Chiểu → rẽ phải vào Võ Trường Toản số 27.',
      '<strong>Từ Nguyễn Kiệm / Ngã tư Phú Nhuận (6–7 phút):</strong> Rẽ trái vào Phan Đăng Lưu, chạy thẳng qua giao lộ Phan Xích Long – Hoàng Hoa Thám là tới ngay khu Võ Trường Toản.',
      '<strong>Từ Đào Duy Anh / Công viên Gia Định (7–8 phút):</strong> Chạy Nguyễn Kiệm → Hoàng Minh Giám → Thích Quảng Đức hoặc Phan Đăng Lưu sang 27 Võ Trường Toản.',
    ],
    tip: 'Phường Đức Nhuận nằm sát vách Phường Gia Định trên cùng trục thẳng Phan Đăng Lưu — khách Phú Nhuận có thể ghé gửi bé tắm sau giờ làm tới 19:30 (tiệm mở tới 21:00 mỗi ngày).',
    faqs: [
      ['Từ Phường Đức Nhuận (Phú Nhuận) sang Lumi Pet mất bao lâu?', 'Chỉ khoảng 5–7 phút đi thẳng trục Phan Đăng Lưu (khoảng 1,5 – 2km), là một trong những tuyến đường gần nhất tới 27 Võ Trường Toản.'],
      ['Tắm mèo ở Lumi Pet có dùng lồng sấy nhiệt không?', 'Tuyệt đối KHÔNG. 100% mèo được tắm khu riêng yên tĩnh và thợ sấy tay trực tiếp bằng máy ion giảm ồn, tránh stress và sốc nhiệt. Giá 160.000đ – 270.000đ theo cân nặng.'],
      ['Đặt lịch Spa & Pet Hotel cho khách Phường Đức Nhuận bằng cách nào?', 'Bạn đặt trực tuyến trên website hoặc nhắn Zalo/gọi 0989 979 675 để giữ khung giờ đẹp và không phải chờ lâu.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-phu-nhuan',
    wardShort: 'Phường Phú Nhuận',
    eyebrow: 'Phường Phú Nhuận · Quận Phú Nhuận cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Phú Nhuận | Lumi Pet',
    description:
      'Spa thú cưng gần Phường Phú Nhuận (Nguyễn Văn Trỗi, Huỳnh Văn Bánh) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, cắt tỉa 290k, Hotel 24/7.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Phú Nhuận',
    ogImage: 'vn-grooming-corgi.jpg',
    heroImg: 'vn-grooming-corgi.jpg',
    heroAlt: 'Cắt tỉa lông tạo kiểu chó mèo chuyên nghiệp gần Phường Phú Nhuận tại Lumi Pet',
    heroCap: '✂️ Cắt tỉa kéo chuẩn phom Poodle, Corgi, Phốc sóc & tắm vệ sinh 10 bước chỉ cách Phường Phú Nhuận 8–10 phút',
    travelTime: '8–10 phút',
    oldDistrictText: 'khu vực đường Nguyễn Văn Trỗi, Huỳnh Văn Bánh, Trần Huy Liệu, Trương Quốc Dung, Đặng Văn Ngữ (Phường 8, 10, 11, 13 & phần P.15 Phú Nhuận cũ)',
    areaServed: ['Phường Phú Nhuận, TP. Hồ Chí Minh', 'Quận Phú Nhuận, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Nguyễn Văn Trỗi / Trần Huy Liệu (8–10 phút):</strong> Rẽ vào Huỳnh Văn Bánh hoặc Nguyễn Trọng Tuyển → sang Phan Đình Phùng / Phan Đăng Lưu → chạy thẳng hướng Chợ Bà Chiểu → rẽ Võ Trường Toản số 27.',
      '<strong>Từ Ngã tư Phú Nhuận / Hoàng Văn Thụ (7–8 phút):</strong> Đi thẳng Phan Đăng Lưu qua Ngã tư Phan Xích Long → tới khu Bệnh viện Gia Định rẽ vào 27 Võ Trường Toản.',
      '<strong>Từ Huỳnh Văn Bánh / Lê Văn Sỹ (9–10 phút):</strong> Chạy Huỳnh Văn Bánh → Phan Đình Phùng → rẽ phải Phan Đăng Lưu → Võ Trường Toản.',
    ],
    tip: 'Với khách ở khu chung cư Nguyễn Văn Trỗi – Huỳnh Văn Bánh đi làm giờ hành chính, Lumi Pet mở cửa từ 07:00 sáng đến 21:00 tối nên bạn dễ gửi bé buổi sáng trước khi đi làm hoặc buổi tối sau giờ tan ca.',
    faqs: [
      ['Từ Phường Phú Nhuận sang Lumi Pet 27 Võ Trường Toản đi đường nào nhanh nhất?', 'Đường nhanh nhất là chạy thẳng Phan Đăng Lưu hướng về Chợ Bà Chiểu (8–10 phút), sau đó rẽ vào Võ Trường Toản số 27.'],
      ['Cắt tỉa lông Poodle, Corgi, Phốc sóc giá bao nhiêu tại Lumi Pet?', 'Combo tắm + cắt tỉa tạo kiểu 2026 từ 290.000đ (<3kg), 360.000đ (3–6kg), 430.000đ (6–9kg) đến 850.000đ (20–25kg), đã gồm đủ bước vệ sinh cơ bản.'],
      ['Khách sạn thú cưng có nhận trông chó mèo 24/7 dịp cuối tuần và Lễ Tết không?', 'Có. Pet Hotel 24/7 phòng riêng máy lạnh, có nhân viên chăm sóc và quay video gửi Zalo mỗi ngày. Giá ngày thường từ 100.000đ/ngày.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-sai-gon-quan-1',
    wardShort: 'Phường Sài Gòn (Quận 1)',
    eyebrow: 'Phường Sài Gòn · Bến Nghé, Đa Kao, Quận 1 cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Sài Gòn Q1 | Lumi Pet',
    description:
      'Spa thú cưng gần Phường Sài Gòn (Bến Nghé, Đa Kao, Quận 1 cũ) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, Hotel 24/7 từ 100k/ngày.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Sài Gòn (Quận 1 cũ)',
    ogImage: 'vn-spa-cat.jpg',
    heroImg: 'vn-spa-cat.jpg',
    heroAlt: 'Tắm mèo khu riêng sấy tay 100% gần Phường Sài Gòn Quận 1 tại Lumi Pet',
    heroCap: '🐱 Qua Cầu Thị Nghè hoặc Cầu Bông chỉ 7–10 phút tới Lumi Pet 27 Võ Trường Toản — giá minh bạch như nội khu Bình Thạnh',
    travelTime: '7–10 phút',
    oldDistrictText: 'khu vực đường Nguyễn Thị Minh Khai, Lê Duẩn, Nguyễn Bỉnh Khiêm, Đinh Tiên Hoàng, Thảo Cầm Viên (Phường Bến Nghé, một phần Đa Kao & Nguyễn Thái Bình — Quận 1 cũ)',
    areaServed: ['Phường Sài Gòn, TP. Hồ Chí Minh', 'Quận 1, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Đa Kao / Nguyễn Bỉnh Khiêm / Thảo Cầm Viên (7 phút):</strong> Qua Cầu Thị Nghè → chạy thẳng Xô Viết Nghệ Tĩnh hoặc rẽ trái Trường Sa → rẽ Đinh Tiên Hoàng / Lê Văn Duyệt → Võ Trường Toản số 27.',
      '<strong>Từ Đinh Tiên Hoàng / Nguyễn Thị Minh Khai (7–8 phút):</strong> Chạy thẳng Đinh Tiên Hoàng qua Cầu Bông → nối tiếp đường Lê Văn Duyệt → rẽ phải vào Võ Trường Toản số 27.',
      '<strong>Từ khu trung tâm Bến Nghé / Lê Duẩn (9–10 phút):</strong> Đi theo trục Hai Bà Trưng hoặc Đinh Tiên Hoàng hướng Cầu Bông sang Phường Gia Định.',
    ],
    tip: 'Rất nhiều ba mẹ làm việc tại khu văn phòng Quận 1 (Phường Sài Gòn) gửi bé làm Spa hoặc lưu trú ngày tại Lumi Pet lúc sáng đi làm (từ 07:00) và đón bé trên đường về nhà (đến 21:00) với mức giá tiết kiệm hơn đáng kể so với lõi trung tâm Quận 1.',
    faqs: [
      ['Từ Phường Sài Gòn (Bến Nghé / Đa Kao Quận 1) sang Lumi Pet bao xa?', 'Chỉ khoảng 2 – 3km (7–10 phút chạy xe qua Cầu Bông hoặc Cầu Thị Nghè), đường đi thẳng rất dễ tìm.'],
      ['Giá Spa & Pet Hotel tại Lumi Pet cho khách Quận 1 có tính giá riêng không?', 'Không. Lumi Pet áp dụng duy nhất 1 bảng giá niêm yết 2026 công khai: tắm chó từ 140.000đ, tắm mèo từ 160.000đ, cắt tỉa từ 290.000đ và Pet Hotel từ 100.000đ/ngày.'],
      ['Gửi chó mèo đi công tác từ Quận 1 có được xem video hằng ngày không?', 'Có. Nhân viên trực chăm sóc 24/7, quay video tương tác ăn uống & nghỉ ngơi gửi trực tiếp qua Zalo mỗi ngày.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-hanh-thong-go-vap',
    wardShort: 'Phường Hạnh Thông (Gò Vấp)',
    eyebrow: 'Phường Hạnh Thông · Quận Gò Vấp cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường Hạnh Thông | Lumi Pet',
    description:
      'Spa thú cưng gần Phường Hạnh Thông (P.1, P.3 Gò Vấp cũ, Phạm Văn Đồng, Lê Quang Định) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường Hạnh Thông (Gò Vấp)',
    ogImage: 'vn-evening-spa.jpg',
    heroImg: 'vn-evening-spa.jpg',
    heroAlt: 'Tắm chó mèo sấy tay 100% mở cửa đến 21h gần Phường Hạnh Thông Gò Vấp tại Lumi Pet',
    heroCap: '🌙 Chạy thẳng trục Lê Quang Định từ Phường Hạnh Thông sang Lumi Pet chỉ 8–10 phút — mở cửa đến 21:00 mỗi ngày',
    travelTime: '8–10 phút',
    oldDistrictText: 'khu vực đường Lê Quang Định, Phạm Văn Đồng, Nguyễn Thái Sơn, Nguyễn Kiệm, Nguyễn Văn Nghi (Phường 1 & Phường 3, Quận Gò Vấp cũ)',
    areaServed: ['Phường Hạnh Thông, TP. Hồ Chí Minh', 'Quận Gò Vấp, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Lê Quang Định / Chợ Gò Vấp / Phạm Văn Đồng (8–10 phút):</strong> Chạy thẳng 1 mạch đường Lê Quang Định hướng về Chợ Bà Chiểu → qua ngã tư Phan Đăng Lưu là sát khu Võ Trường Toản số 27.',
      '<strong>Từ Nguyễn Thái Sơn / Ngã 6 Gò Vấp (9–10 phút):</strong> Đi theo Phạm Ngũ Lão → Nguyễn Kiệm hoặc Nguyễn Văn Đậu → nối sang Phan Đăng Lưu → rẽ Võ Trường Toản số 27.',
      '<strong>Từ Nguyễn Văn Nghi / ĐH Công Nghiệp (8–9 phút):</strong> Chạy thẳng Lê Quang Định hướng Bình Thạnh khoảng 2,8km là tới.',
    ],
    tip: 'Trục Lê Quang Định nối thẳng Phường Hạnh Thông (Gò Vấp) sang khu Bà Chiểu – Võ Trường Toản cực kỳ thuận đường. Bạn nên đặt trước lịch qua Zalo 0989 979 675 nếu ghé cuối tuần hoặc sau 18:00.',
    faqs: [
      ['Từ Phường Hạnh Thông (Gò Vấp) sang Lumi Pet 27 Võ Trường Toản mất bao lâu?', 'Khoảng 8–10 phút chạy thẳng trục đường Lê Quang Định hướng về Chợ Bà Chiểu (~2,5 – 3km).'],
      ['Tắm vệ sinh 10 bước tại Lumi Pet đã bao gồm cắt móng, vệ sinh tai, vắt tuyến hôi chưa?', 'Đã bao gồm đầy đủ trong gói: cắt mài móng, nhổ/lau lông tai, cạo đệm bàn chân & bụng, vắt tuyến hôi, tắm xả 2 lần và thợ sấy tay 100%.'],
      ['Lumi Pet có nhận tắm chó lớn Husky, Golden, Samoyed cho khách Gò Vấp không?', 'Có. Bảng giá chó chia 8 mốc rõ ràng tới 25kg (từ 430.000đ – 550.000đ cho nhóm 15–25kg), sấy tay khô kiệt tận gốc lớp lông kép.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-an-nhon-go-vap',
    wardShort: 'Phường An Nhơn (Gò Vấp)',
    eyebrow: 'Phường An Nhơn · Phan Văn Trị, Gò Vấp cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Phường An Nhơn Gò Vấp | Lumi Pet',
    description:
      'Spa thú cưng gần Phường An Nhơn (P.5, P.6 Gò Vấp cũ, Phan Văn Trị, Dương Quảng Hàm) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, Hotel 24/7.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường An Nhơn (Gò Vấp)',
    ogImage: 'vn-hotel-cabins.jpg',
    heroImg: 'vn-hotel-cabins.jpg',
    heroAlt: 'Khách sạn thú cưng phòng riêng máy lạnh và Spa gần Phường An Nhơn Gò Vấp tại Lumi Pet',
    heroCap: '🏨 Từ Phan Văn Trị, Dương Quảng Hàm (Phường An Nhơn) sang Lumi Pet gửi Pet Hotel 24/7 & Spa chỉ 10–12 phút',
    travelTime: '10–12 phút',
    oldDistrictText: 'khu vực đường Phan Văn Trị, Dương Quảng Hàm, Nguyễn Thái Sơn, Nguyễn Oanh, Emart Phan Văn Trị (Phường 5 & Phường 6, Quận Gò Vấp cũ)',
    areaServed: ['Phường An Nhơn, TP. Hồ Chí Minh', 'Quận Gò Vấp, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Phan Văn Trị / Emart Gò Vấp (10–12 phút):</strong> Chạy thẳng Phan Văn Trị qua Phạm Văn Đồng → nối tiếp trục Phan Văn Trị – Nơ Trang Long hoặc rẽ Lê Quang Định hướng Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Từ Dương Quảng Hàm / Nguyễn Thái Sơn (10 phút):</strong> Ra Phạm Văn Đồng → rẽ Lê Quang Định chạy thẳng xuống khu Bà Chiểu → Võ Trường Toản số 27.',
      '<strong>Thuận tiện kết hợp đi làm vào trung tâm:</strong> Rất nhiều khách cư dân CityLand / Phan Văn Trị gửi bé tắm hoặc lưu trú buổi sáng trên đường vào Quận 1 – Bình Thạnh.',
    ],
    tip: 'Với khách ở Phường An Nhơn cần gửi bé dài ngày dịp công tác hoặc Lễ Tết, nên nhắn Zalo 0989 979 675 chốt phòng trước và mang theo thức ăn quen bụng của bé để bé thích nghi tốt nhất.',
    faqs: [
      ['Từ Phường An Nhơn (Phan Văn Trị Gò Vấp) sang Lumi Pet bao xa?', 'Khoảng 3,5 – 4,5km (10–12 phút qua Phan Văn Trị → Lê Quang Định hoặc Nơ Trang Long), rất dễ đi thẳng một trục.'],
      ['Giá gửi chó mèo Khách sạn 24/7 cho khách Phường An Nhơn bao nhiêu?', 'Giá ngày thường 100.000đ (<3kg), 120.000đ (3–6kg), 160.000đ (6–9kg), 200.000đ (9–12kg), 250.000đ (12–15kg). Trên 5 ngày giảm 5%, trên 10 ngày giảm 8%.'],
      ['Lumi Pet mở cửa tới mấy giờ mỗi ngày?', 'Quầy Spa & Shop mở cửa 07:00 – 21:00 tất cả các ngày (kể cả Thứ 7, Chủ nhật); Khách sạn thú cưng trực chăm sóc 24/7.'],
    ],
  },
  {
    slug: 'spa-thu-cung-phuong-an-khanh-thao-dien',
    wardShort: 'Phường An Khánh (Thảo Điền)',
    eyebrow: 'Phường An Khánh · Thảo Điền, An Phú, Quận 2 cũ',
    title: 'Tắm Chó Mèo, Spa & Hotel Thảo Điền, An Khánh | Lumi Pet',
    description:
      'Spa thú cưng & Pet Hotel gần Phường An Khánh (Thảo Điền, Thủ Thiêm, Quận 2 cũ) tại Lumi Pet 27 Võ Trường Toản: tắm chó 140k, tắm mèo 160k, Hotel 24/7.',
    h1: 'Tắm chó mèo, Cắt tỉa & Khách sạn thú cưng gần Phường An Khánh (Thảo Điền, Q.2 cũ)',
    ogImage: 'vn-hotel-cat-vip.jpg',
    heroImg: 'vn-hotel-cat-vip.jpg',
    heroAlt: 'Spa thú cưng và phòng khách sạn mèo riêng yên tĩnh gần Thảo Điền Phường An Khánh tại Lumi Pet',
    heroCap: '🌉 Qua Cầu Sài Gòn 10–15 phút tới Lumi Pet 27 Võ Trường Toản — tiêu chuẩn sấy tay 100%, phòng riêng máy lạnh 24/24',
    travelTime: '10–15 phút',
    oldDistrictText: 'khu vực Thảo Điền, Xuân Thủy, Quốc Hương, An Phú, Thủ Thiêm, Trần Não (Phường Thảo Điền, An Khánh, An Lợi Đông, Thủ Thiêm — Quận 2 / TP. Thủ Đức cũ)',
    areaServed: ['Phường An Khánh, TP. Hồ Chí Minh', 'Thảo Điền, TP. Hồ Chí Minh', 'Phường Gia Định, TP. Hồ Chí Minh'],
    routes: [
      '<strong>Từ Thảo Điền / Xuân Thủy / Masteri (10–14 phút):</strong> Qua Cầu Sài Gòn → chạy thẳng Điện Biên Phủ → rẽ phải Xô Viết Nghệ Tĩnh (hoặc Bạch Đằng) hướng Chợ Bà Chiểu → 27 Võ Trường Toản.',
      '<strong>Từ Thủ Thiêm / Trần Não / Lương Định Của (12–15 phút):</strong> Qua Cầu Ba Son hoặc Cầu Thủ Thiêm → chạy Nguyễn Hữu Cảnh → rẽ Điện Biên Phủ / Lê Văn Duyệt → Võ Trường Toản số 27.',
      '<strong>Đi ô tô / taxi Pet-friendly:</strong> Trục Điện Biên Phủ – Bạch Đằng – Võ Trường Toản đi thẳng dễ đón trả bé ngay trước cửa số 27.',
    ],
    tip: 'Nhiều chủ nuôi khu Thảo Điền – An Khánh chọn gửi bé Pet Hotel 24/7 dài ngày (từ 5–10+ ngày) hoặc đưa bé sang Lumi Pet tắm sấy tay vì mức giá minh bạch (chỉ từ 100k/ngày lưu trú và 140k tắm chó), luôn gửi video Zalo mỗi ngày.',
    faqs: [
      ['Từ Thảo Điền / Phường An Khánh sang Lumi Pet 27 Võ Trường Toản bao xa?', 'Khoảng 4,5 – 6km (10–15 phút qua Cầu Sài Gòn hoặc Cầu Thủ Thiêm), đường rộng thuận tiện đi xe máy hoặc ô tô.'],
      ['Tắm mèo Anh lông ngắn, lông dài, Ba Tư ở Lumi Pet có an toàn không?', 'Rất an toàn: mèo được tắm khu tách biệt chó, nước ấm ổn định và 100% thợ sấy tay bằng máy ion êm ái, tuyệt đối không dùng lồng sấy nhiệt. Giá 160.000đ – 270.000đ.'],
      ['Gửi chó mèo dài ngày tại Lumi Pet có ưu đãi gì không?', 'Ngày thường gửi trên 5 ngày giảm 5%, trên 10 ngày giảm 8%. Dịp Lễ/Tết nhân viên sẽ báo giá rõ ràng trước khi bạn chốt phòng qua Zalo 0989 979 675.'],
    ],
  },
];

const ALL_WARD_LINKS_HTML =
  '<p class="muted" style="margin-top:12px;"><strong>Mạng lưới khu vực phục vụ (Bình Thạnh · Phú Nhuận · Quận 1 · Gò Vấp · Thảo Điền):</strong> ' +
  '<a href="../tam-cho-phuong-gia-dinh/">Tắm chó Phường Gia Định</a> · ' +
  '<a href="../tam-meo-phuong-gia-dinh/">Tắm mèo Phường Gia Định</a> · ' +
  '<a href="../cat-tia-long-cho-phuong-gia-dinh/">Cắt tỉa lông chó Phường Gia Định</a> · ' +
  '<a href="../khach-san-thu-cung-phuong-gia-dinh/">Khách sạn thú cưng Phường Gia Định</a> · ' +
  '<a href="../spa-thu-cung-phuong-binh-thanh/">Phường Bình Thạnh</a> · ' +
  '<a href="../spa-thu-cung-phuong-binh-loi-trung/">Phường Bình Lợi Trung</a> · ' +
  '<a href="../spa-thu-cung-phuong-thanh-my-tay/">Phường Thạnh Mỹ Tây</a> · ' +
  '<a href="../spa-thu-cung-phuong-binh-quoi/">Phường Bình Quới</a> · ' +
  '<a href="../spa-thu-cung-phuong-cau-kieu-phu-nhuan/">Phường Cầu Kiệu (Phú Nhuận)</a> · ' +
  '<a href="../spa-thu-cung-phuong-duc-nhuan-phu-nhuan/">Phường Đức Nhuận (Phú Nhuận)</a> · ' +
  '<a href="../spa-thu-cung-phuong-phu-nhuan/">Phường Phú Nhuận</a> · ' +
  '<a href="../spa-thu-cung-phuong-tan-dinh-quan-1/">Phường Tân Định (Quận 1)</a> · ' +
  '<a href="../spa-thu-cung-phuong-sai-gon-quan-1/">Phường Sài Gòn (Quận 1)</a> · ' +
  '<a href="../spa-thu-cung-phuong-hanh-thong-go-vap/">Phường Hạnh Thông (Gò Vấp)</a> · ' +
  '<a href="../spa-thu-cung-phuong-an-nhon-go-vap/">Phường An Nhơn (Gò Vấp)</a> · ' +
  '<a href="../spa-thu-cung-phuong-an-khanh-thao-dien/">Phường An Khánh (Thảo Điền)</a></p>';

function buildGallerySection(items, heading = 'Hình ảnh thực tế dịch vụ Spa, Grooming & Pet Hotel tại Lumi Pet') {
  return `    <section class="panel span-12 lumi-photo-gallery">
      <h2>${heading}</h2>
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

const DEFAULT_WARD_GALLERY = [
  { img: 'vn-bath-dog.jpg', alt: 'Tắm vệ sinh chó 10 bước sấy tay 100% tại Lumi Pet', cap: '🛁 Tắm vệ sinh 10 bước & sấy tay 100% không lồng sấy' },
  { img: 'vn-spa-cat.jpg', alt: 'Tắm mèo khu riêng yên tĩnh tại Lumi Pet Bình Thạnh', cap: '🐱 Tắm mèo khu riêng giảm stress, giá từ 160.000đ' },
  { img: 'vn-grooming-corgi.jpg', alt: 'Cắt tỉa lông tạo kiểu Corgi Poodle Phốc sóc tại Lumi Pet', cap: '✂️ Cắt tỉa kéo tạo kiểu Poodle, Corgi, Phốc sóc từ 290k' },
  { img: 'vn-hotel-cabins.jpg', alt: 'Phòng khách sạn thú cưng riêng tư máy lạnh 24/24 tại Lumi Pet', cap: '🏨 Pet Hotel phòng riêng máy lạnh 24/24, gửi video Zalo' },
];

const NOEL_TET_GALLERY = [
  { img: 'vn-spa-noel-tet.jpg', alt: 'Làm đẹp tắm cắt tỉa chó mèo đón Noel và Tết 2027 tại Lumi Pet', cap: '🎄 Spa tắm & cắt tỉa tạo kiểu đón Noel 2026 & Tết 2027' },
  { img: 'vn-hotel-tet.jpg', alt: 'Khách sạn thú cưng phòng riêng sạch sẽ đón Tết tại Lumi Pet', cap: '🧧 Phòng Pet Hotel riêng tư máy lạnh 24/24, trực trông 24/7' },
  { img: 'vn-grooming-corgi.jpg', alt: 'Cắt tỉa lông Corgi mông đào và Poodle Teddy đón Tết', cap: '✂️ Tỉa kéo chuẩn phom giữ lớp lông kép bảo vệ da cho bé' },
  { img: 'bang-gia-spa-grooming-lumi-pet.jpg', alt: 'Bảng giá niêm yết chính thức 2026 tại Lumi Pet 27 Võ Trường Toản', cap: '📋 Bảng giá chính thức 2026 niêm yết minh bạch tại quầy' },
];

function buildWardHtml(w) {
  const url = `${ORIGIN}/${w.slug}/`;
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
          { '@type': 'ListItem', position: 3, name: w.wardShort },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${w.title.replaceAll('&', '&amp;')}</title>
  <meta name="description" content="${w.description.replaceAll('&', '&amp;')}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${w.title.replaceAll('&', '&amp;')}" />
  <meta property="og:description" content="${w.description.replaceAll('&', '&amp;')}" />
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/images/${w.ogImage}">
  <link rel="stylesheet" href="../lumi-seo.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="shell">
  <div class="breadcrumb"><a href="../">Lumi Pet</a> / <a href="../spa-thu-cung-binh-thanh/">Spa &amp; Hotel</a> / ${w.wardShort}</div>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">${w.eyebrow}</div>
      <h1>${w.h1.replaceAll('&', '&amp;')}</h1>
      <p class="lead">Khách hàng sinh sống tại <strong>${w.wardShort}</strong> (${w.oldDistrictText}) chỉ mất <strong>${w.travelTime}</strong> di chuyển sang <strong>Lumi Pet – 27 Võ Trường Toản, Phường Gia Định (Bình Thạnh)</strong> để tắm chó, tắm mèo sấy tay 100%, cắt tỉa lông và gửi Pet Hotel 24/7.</p>
      <div class="answer">
        <strong>Trả lời nhanh:</strong> Tại Lumi Pet (27 Võ Trường Toản, cách ${w.wardShort} ${w.travelTime} đi xe), bảng giá 2026 niêm yết công khai: <strong>tắm vệ sinh chó từ 140.000đ</strong> (8 mốc tới 25kg), <strong>tắm vệ sinh mèo từ 160.000đ</strong> (sấy tay 100%), <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>khách sạn thú cưng từ 100.000đ/ngày</strong> (giảm đến 8% dài ngày).
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
    <img src="../images/${w.heroImg}" alt="${w.heroAlt}" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;">
    <figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">${w.heroCap}</figcaption>
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
        <li><strong>Ưu đãi dài ngày (ngày thường):</strong> Trên 5 ngày giảm 5% · Trên 10 ngày giảm 8%</li>
        <li>Phòng riêng sạch sẽ, máy lạnh 24/24, quay video tương tác mỗi ngày.</li>
      </ul>
    </section>

    <section class="panel span-6">
      <h2>Hướng dẫn đường đi từ ${w.wardShort} sang 27 Võ Trường Toản</h2>
      <ul>
${w.routes.map((r) => `        <li>${r}</li>`).join('\n')}
      </ul>
      <div class="notice">${w.tip}</div>
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
      ${ALL_WARD_LINKS_HTML}
    </section>

${buildGallerySection(DEFAULT_WARD_GALLERY)}

    <section class="panel span-12">
      <h2>Câu hỏi thường gặp</h2>
      <div class="faq">
${w.faqs.map(([q, a], idx) => `        <details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('\n')}
      </div>
    </section>
  </div>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 07:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="../dat-lich/">Đặt lịch Spa →</a></div></div></footer>
</body>
</html>
`;
}

// 1. Write 7 new ward pages
for (const w of NEW_WARDS) {
  const dir = path.join(PUBLIC_DIR, w.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildWardHtml(w), 'utf8');
  console.log(`Generated ward page: /${w.slug}/ (T:${w.title.length}c, D:${w.description.length}c)`);
}

// 2. Add full gallery + updated cross-links to existing 5 ward pages, 4 Gia Dinh pages, and 2 Noel/Tet pages
const EXISTING_LANDING_UPDATES = [
  { slug: 'spa-thu-cung-phuong-binh-thanh', gallery: DEFAULT_WARD_GALLERY, updateLinks: true },
  { slug: 'spa-thu-cung-phuong-binh-loi-trung', gallery: DEFAULT_WARD_GALLERY, updateLinks: true },
  { slug: 'spa-thu-cung-phuong-thanh-my-tay', gallery: DEFAULT_WARD_GALLERY, updateLinks: true },
  { slug: 'spa-thu-cung-phuong-cau-kieu-phu-nhuan', gallery: DEFAULT_WARD_GALLERY, updateLinks: true },
  { slug: 'spa-thu-cung-phuong-tan-dinh-quan-1', gallery: DEFAULT_WARD_GALLERY, updateLinks: true },
  { slug: 'tam-cho-phuong-gia-dinh', gallery: DEFAULT_WARD_GALLERY },
  { slug: 'tam-meo-phuong-gia-dinh', gallery: DEFAULT_WARD_GALLERY },
  { slug: 'cat-tia-long-cho-phuong-gia-dinh', gallery: DEFAULT_WARD_GALLERY, swapHero: 'vn-grooming-corgi.jpg' },
  { slug: 'khach-san-thu-cung-phuong-gia-dinh', gallery: DEFAULT_WARD_GALLERY },
  { slug: 'khach-san-thu-cung-tet-binh-thanh', gallery: NOEL_TET_GALLERY, swapHero: 'vn-hotel-tet.jpg', galleryHeading: 'Hình ảnh thực tế Phòng Khách sạn Tết & Spa tại Lumi Pet' },
  { slug: 'spa-cho-meo-don-noel-tet-binh-thanh', gallery: NOEL_TET_GALLERY, swapHero: 'vn-spa-noel-tet.jpg', galleryHeading: 'Hình ảnh làm đẹp chó mèo đón Noel & Tết 2027 tại Lumi Pet' },
];

for (const u of EXISTING_LANDING_UPDATES) {
  const filePath = path.join(PUBLIC_DIR, u.slug, 'index.html');
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  if (u.swapHero) {
    html = html.replace(/<meta property="og:image" content="https:\/\/lumipet\.vn\/images\/[^"]+">/, `<meta property="og:image" content="${ORIGIN}/images/${u.swapHero}">`);
    html = html.replace(/(<figure class="lumi-vn-showcase"[\s\S]*?<img src="\.\.\/images\/)[^"]+(")/, `$1${u.swapHero}$2`);
  }

  if (u.updateLinks) {
    html = html.replace(/<p class="muted" style="margin-top:12px;"><strong>(?:Xem thêm khu vực lân cận|Mạng lưới khu vực phục vụ)[\s\S]*?<\/p>/, ALL_WARD_LINKS_HTML);
  }

  const galleryHtml = buildGallerySection(u.gallery, u.galleryHeading);
  if (html.includes('lumi-photo-gallery')) {
    html = html.replace(/    <section class="panel span-12 lumi-photo-gallery">[\s\S]*?<\/section>/, galleryHtml);
  } else {
    html = html.replace(
      /(\s*<section class="panel span-12">\s*<h2>Câu hỏi thường gặp)/,
      `\n${galleryHtml}\n$1`
    );
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Enriched existing page with full gallery: /${u.slug}/`);
}

// 3. Add full editorial photos to the 4 flagship articles with 0 images + upgrade seasonal & Corgi articles
const ARTICLE_IMAGE_UPDATES = [
  {
    slug: 'khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026',
    heroImg: 'bang-gia-spa-grooming-lumi-pet.jpg',
    heroAlt: 'Bảng giá niêm yết Spa và Grooming chó mèo chính thức 2026 tại Lumi Pet Bình Thạnh',
    heroCap: '📋 Bảng giá niêm yết 2026 tại Lumi Pet 27 Võ Trường Toản — chia rõ 8 mốc cân nặng chó tới 25kg và 3 mốc mèo',
    secondImg: 'vn-hero-spa.jpg',
    secondAlt: 'Quy trình tắm vệ sinh 10 bước trọn gói không phụ phí ẩn tại Lumi Pet Bình Thạnh',
    secondCap: '🐾 Trọn gói 10 bước cơ bản đã gồm cắt mài móng, vệ sinh tai, cạo đệm chân, vắt tuyến hôi và sấy tay 100%',
  },
  {
    slug: 'spa-cho-meo-mo-cua-toi-binh-thanh',
    heroImg: 'vn-evening-spa.jpg',
    heroAlt: 'Spa chó mèo mở cửa tối đến 21h sấy tay 100% tại Lumi Pet Bình Thạnh',
    heroCap: '🌙 Khung ca tối sau giờ tan làm (18:00 – 21:00) tại Lumi Pet — thợ sấy tay khô kiệt 100%, không phụ thu ngoài giờ',
    secondImg: 'vn-bath-dog.jpg',
    secondAlt: 'Tắm nước ấm 37-39 độ phòng kín gió cho cún buổi tối tại Lumi Pet',
    secondCap: '🛁 Nước ấm ổn định trong phòng kín gió giúp bé tắm buổi tối hoàn toàn ấm áp, không lo cảm lạnh',
  },
  {
    slug: 'spa-meo-khong-dung-long-say-binh-thanh',
    heroImg: 'vn-spa-cat.jpg',
    heroAlt: 'Spa mèo không dùng lồng sấy nhiệt, thợ sấy tay 100% tại Lumi Pet Bình Thạnh',
    heroCap: '🐱 Khu tắm mèo tách biệt chó, thợ sấy tay trực tiếp bằng máy ion giảm ồn — tuyệt đối không nhốt lồng sấy nhiệt',
    secondImg: 'vn-hotel-cat-vip.jpg',
    secondAlt: 'Không gian sạch sẽ yên tĩnh dành riêng cho mèo tại Lumi Pet',
    secondCap: '✨ Không gian yên tĩnh giúp mèo Anh lông ngắn, lông dài, Ba Tư thư giãn và hạn chế stress tối đa',
  },
  {
    slug: 'gui-meo-cho-dip-tet-binh-thanh',
    heroImg: 'vn-hotel-tet.jpg',
    heroAlt: 'Khách sạn thú cưng phòng riêng máy lạnh đón Tết 2027 tại Lumi Pet Bình Thạnh',
    heroCap: '🧧 Phòng khách sạn chó mèo riêng tư máy lạnh 24/24 tại Lumi Pet 27 Võ Trường Toản, có nhân viên trực chăm sóc 24/7',
    secondImg: 'vn-hotel-cabins.jpg',
    secondAlt: 'Khu cabin kính thoáng sạch và quay video Zalo mỗi ngày tại Lumi Pet',
    secondCap: '📹 Cập nhật video ăn uống, nghỉ ngơi của bé trực tiếp qua Zalo mỗi ngày giúp ba mẹ yên tâm về quê ăn Tết',
  },
  {
    slug: 'dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh',
    swapHero: 'vn-spa-noel-tet.jpg',
    secondImg: 'vn-grooming-corgi.jpg',
    secondAlt: 'Cắt tỉa tạo kiểu Corgi và Poodle đón Tết tại Lumi Pet Bình Thạnh',
    secondCap: '✂️ Nên đặt lịch cắt tỉa tạo kiểu trước 7–14 ngày cận Tết để Groomer tỉa kỹ chuẩn phom từng giống bé',
  },
  {
    slug: 'gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh',
    swapHero: 'vn-hotel-tet.jpg',
    secondImg: 'vn-hotel-cat-vip.jpg',
    secondAlt: 'Phòng mèo yên tĩnh riêng biệt dịp Noel và Tết Dương lịch tại Lumi Pet',
    secondCap: '🎄 Khu phòng mèo yên tĩnh tách biệt khu chó, giữ phòng sớm dịp Noel 24/12 & Tết Tây 01/01 qua Zalo 0989 979 675',
  },
  {
    slug: 'cat-tia-long-corgi-mong-dao-binh-thanh',
    swapHero: 'vn-grooming-corgi.jpg',
  },
];

for (const a of ARTICLE_IMAGE_UPDATES) {
  const filePath = path.join(PUBLIC_DIR, 'bai-viet', a.slug, 'index.html');
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  const primaryImg = a.swapHero || a.heroImg;
  if (primaryImg) {
    html = html.replace(/<meta property="og:image" content="https:\/\/lumipet\.vn\/images\/[^"]+">/, `<meta property="og:image" content="${ORIGIN}/images/${primaryImg}">`);
    html = html.replace(/"image":\s*"https:\/\/lumipet\.vn\/images\/[^"]+"/, `"image": "${ORIGIN}/images/${primaryImg}"`);
  }

  if (a.swapHero) {
    html = html.replace(/(<figure class="lumi-article-photo"[\s\S]*?<img src="\.\.\/\.\.\/images\/)[^"]+(")/, `$1${a.swapHero}$2`);
  }

  if (a.heroImg && !html.includes('lumi-article-photo')) {
    const heroFig = `        <figure class="lumi-article-photo" style="margin:0 0 20px;border-radius:20px;overflow:hidden;border:1px solid #ffead7;background:#fff;">
          <img src="../../images/${a.heroImg}" alt="${a.heroAlt}" loading="lazy" style="width:100%;max-height:360px;object-fit:cover;display:block;">
          <figcaption style="padding:10px 16px;font-size:12.5px;font-weight:700;color:#64748b;background:#fffaf3;">${a.heroCap}</figcaption>
        </figure>\n`;
    html = html.replace(/(<div class="article-prose">\s*)/, `$1\n${heroFig}`);
  }

  if (a.secondImg && !html.includes('lumi-article-photo-2')) {
    const secFig = `\n        <figure class="lumi-article-photo-2" style="margin:20px 0;border-radius:20px;overflow:hidden;border:1px solid #ffead7;background:#fff;">
          <img src="../../images/${a.secondImg}" alt="${a.secondAlt}" loading="lazy" style="width:100%;max-height:340px;object-fit:cover;display:block;">
          <figcaption style="padding:10px 16px;font-size:12.5px;font-weight:700;color:#64748b;background:#fffaf3;">${a.secondCap}</figcaption>
        </figure>\n`;
    const h2Matches = [...html.matchAll(/<h2[^>]*>/g)];
    if (h2Matches.length >= 2) {
      const pos = h2Matches[1].index;
      html = html.slice(0, pos) + secFig + html.slice(pos);
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated article photos: /bai-viet/${a.slug}/`);
}
