import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('G:/lumi-pet-vps-workspace/package.json');
const puppeteer = require('puppeteer');

const POOL1 = 'C:/Users/Lumi Pet/.gemini/antigravity/brain/03a101a1-5f67-4d0d-a300-9fc92aa4718e/scratch/unique-pool';
const POOL2 = 'C:/Users/Lumi Pet/.gemini/antigravity/brain/03a101a1-5f67-4d0d-a300-9fc92aa4718e/scratch/unique-pool-2';
const PUBLIC_DIR = 'G:/lumi-pet-vps-workspace/public';
const IMG_OUT_DIR = path.join(PUBLIC_DIR, 'images');
const ORIGIN = 'https://lumipet.vn';

// Helper to resolve source file in Pool 1 or Pool 2
function srcFile(name) {
  for (const dir of [POOL1, POOL2]) {
    for (const ext of ['.jpg', '.jpeg', '.png']) {
      const p = path.join(dir, `${name}${ext}`);
      if (fs.existsSync(p)) return p;
    }
  }
  throw new Error(`Missing verified photo source: ${name}`);
}

// Semantic topic-matched assignments (61 distinct clean real-camera photos)
const ASSIGNMENTS = [
  // === CORE & SERVICE & WARD PAGES (22 visible leads + 2 og:image for dat-lich / dat-phong) ===
  {
    type: 'core',
    rel: '/grooming-cho-meo-binh-thanh/',
    src: 'px-19145873',
    out: 'pet-real-01.jpg',
    alt: 'Chó Poodle đen đang được thợ sấy tay và chải lông bông xù tại Lumi Pet Bình Thạnh',
    caption: '✂️ Cắt tỉa tạo kiểu, sấy chải tay 100% nhẹ nhàng tại Lumi Pet 27 Võ Trường Toản'
  },
  {
    type: 'core',
    rel: '/tam-cho-phuong-gia-dinh/',
    src: 'dog-corgi-cardigan-3',
    out: 'pet-real-02.jpg',
    alt: 'Chú chó Corgi đeo khăn sạch sẽ sau khi tắm vệ sinh tại Phường Gia Định',
    caption: '🛁 Tắm vệ sinh 10 bước, nước ấm dịu nhẹ và thợ sấy tay 100% cho cún tại Phường Gia Định'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-binh-thanh/',
    src: 'dog-poodle-toy-1',
    out: 'pet-real-03.jpg',
    alt: 'Chú chó Poodle nâu mơ đáng yêu sạch thơm sau buổi spa tại Lumi Pet',
    caption: '🐾 Spa thú cưng gần Phường Bình Thạnh — chăm sóc lông da êm ái, không gây stress'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-binh-quoi/',
    src: 'dog-retriever-golden-4',
    out: 'pet-real-04.jpg',
    alt: 'Chú chó Golden Retriever năng động phù hợp gói tắm sạch khử mùi cho cư dân Bình Quới',
    caption: '🌿 Tắm vệ sinh khử mùi hôi, dưỡng lông mềm mượt đón khách khu vực Bình Quới – Thanh Đa'
  },
  {
    type: 'core',
    rel: '/tam-cho-meo-gan-cho-ba-chieu/',
    src: 'px-15722044',
    out: 'pet-real-05.jpg',
    alt: 'Chú cún nhỏ lông trắng sạch sẽ đáng yêu gần Chợ Bà Chiểu – 27 Võ Trường Toản',
    caption: '📍 Cách Chợ Bà Chiểu chỉ 300m — ghé tắm vệ sinh, cắt móng, vệ sinh tai cực kỳ nhanh gọn'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-binh-loi-trung/',
    src: 'dog-shiba-1',
    out: 'pet-real-06.jpg',
    alt: 'Chú chó Shiba Inu bộ lông gọn sạch phục vụ khách khu vực Phường Bình Lợi Trung',
    caption: '✨ Chải rụng undercoat và tắm sấy chuẩn quy trình cho khách Phường Bình Lợi Trung'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-duc-nhuan-phu-nhuan/',
    src: 'dog-maltese-4',
    out: 'pet-real-07.jpg',
    alt: 'Chú chó Maltese lông trắng mượt phục vụ khách Phường Đức Nhuận Phú Nhuận',
    caption: '🐶 Giữ lông trắng mượt, tỉa gọn quanh mắt miệng cho khách Phường Đức Nhuận (Phú Nhuận)'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-quan-phu-nhuan/',
    src: 'dog-poodle-miniature-4',
    out: 'pet-real-08.jpg',
    alt: 'Chú chó Poodle trắng bông xù sau khi chải sấy tại tiệm gần Quận Phú Nhuận',
    caption: '💈 Dịch vụ tắm cắt tỉa tạo kiểu Poodle, Bichon, Maltese chỉ 5–8 phút từ Quận Phú Nhuận'
  },
  {
    type: 'core',
    rel: '/khach-san-thu-cung-phuong-gia-dinh/',
    src: 'px-11060021',
    out: 'pet-real-09.jpg',
    alt: 'Chú chó Beagle nằm ngủ ngon lành trên nệm êm tại Pet Hotel Phường Gia Định',
    caption: '🏨 Phòng riêng yên tĩnh, máy lạnh 24/24 và gửi video cập nhật mỗi ngày tại Phường Gia Định'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-thanh-my-tay/',
    src: 'px-10117507',
    out: 'pet-real-10.jpg',
    alt: 'Chú chó nghỉ ngơi thoải mái trong không gian sạch sẽ cho khách Phường Thạnh Mỹ Tây',
    caption: '🛏️ Spa & Pet Hotel 24/7 chỉ 4–7 phút di chuyển từ Phường Thạnh Mỹ Tây (Hàng Xanh – Vinhomes)'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-an-nhon-go-vap/',
    src: 'dog-bulldog-french-3',
    out: 'pet-real-11.jpg',
    alt: 'Chú chó French Bulldog ngủ say trên nệm êm ấm cho khách Phường An Nhơn Gò Vấp',
    caption: '🏡 Dịch vụ tắm gội & lưu trú máy lạnh riêng tư đón khách từ Phường An Nhơn (Gò Vấp)'
  },
  {
    type: 'core',
    rel: '/tam-cho-meo-gan-vinhomes-hang-xanh/',
    src: 'dog-samoyed-2',
    out: 'pet-real-12.jpg',
    alt: 'Chú chó Samoyed trắng muốt sạch thơm phục vụ cư dân Vinhomes – Hàng Xanh',
    caption: '🚕 Gần Vinhomes Central Park & Hàng Xanh — có dịch vụ tắm sấy kỹ cho chó lông dày cỡ vừa & lớn'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-cau-kieu-phu-nhuan/',
    src: 'px-35660771',
    out: 'pet-real-13.jpg',
    alt: 'Chú mèo xám nằm ngủ thư giãn trên chăn êm cho khách Phường Cầu Kiệu Phú Nhuận',
    caption: '🐱 Khu Spa & phòng mèo riêng yên tĩnh cách Phường Cầu Kiệu (Phú Nhuận) chỉ vài phút'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-sai-gon-quan-1/',
    src: 'px-35367583',
    out: 'pet-real-14.jpg',
    alt: 'Chú mèo Ba Tư lông vàng dài óng ả phục vụ khách Phường Sài Gòn Quận 1',
    caption: '🐈 Gỡ rối và tắm sấy tay 100% cho mèo lông dài khu vực trung tâm Quận 1'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-quan-1/',
    src: 'px-14311615',
    out: 'pet-real-15.jpg',
    alt: 'Chú mèo Anh lông ngắn sạch sẽ thư thái cho khách từ Quận 1 ghé Lumi Pet',
    caption: '🐾 Chỉ qua Cầu Bông 5 phút từ Quận 1 — bảng giá niêm yết minh bạch, không phí ẩn'
  },
  {
    type: 'core',
    rel: '/gioi-thieu/',
    src: 'cat-bsh-2',
    out: 'pet-real-16.jpg',
    alt: 'Bé mèo con tam thể xinh xắn được chăm sóc dịu dàng tại Lumi Pet 27 Võ Trường Toản',
    caption: '💛 Đội ngũ Groomer Lumi Pet chăm sóc tận tâm, an toàn và minh bạch 2026'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-phu-nhuan/',
    src: 'px-14730839',
    out: 'pet-real-17.jpg',
    alt: 'Chú chó Corgi khuôn mặt rạng rỡ gọn lông cho khách Phường Phú Nhuận',
    caption: '✂️ Cắt tỉa mông đào Corgi, Teddy Poodle chuẩn form cho khách Phường Phú Nhuận'
  },
  {
    type: 'core',
    rel: '/tam-cho-meo-gan-phan-xich-long-mieu-noi/',
    src: 'dog-corgi-cardigan-1',
    out: 'pet-real-18.jpg',
    alt: 'Chú chó Corgi khỏe khoắn năng động gần Phan Xích Long – Cư xá Miếu Nổi',
    caption: '📍 Qua Cầu Sắt / Vạn Kiếp 4–6 phút là tới Lumi Pet 27 Võ Trường Toản — giữ lịch hẹn đúng giờ'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-tan-dinh-quan-1/',
    src: 'px-4046312',
    out: 'pet-real-19.jpg',
    alt: 'Chú chó Shiba Inu đáng yêu phục vụ khách Phường Tân Định Quận 1',
    caption: '🚗 Ngay gần Cầu Bông – Đinh Tiên Hoàng (Tân Định, Q.1) — đặt lịch không lo chờ lâu'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/',
    src: 'cat-sfol-3',
    out: 'pet-real-20.jpg',
    alt: 'Các bé mèo nằm ấm áp sạch sẽ tại Lumi Pet 27 Võ Trường Toản gần Chợ Bà Chiểu',
    caption: '🏥 Mặt tiền 27 Võ Trường Toản gần Chợ Bà Chiểu — tiện gửi giữ 24/7 và đón ngay trong hẻm lớn'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-hanh-thong-go-vap/',
    src: 'cat-ragd-4',
    out: 'pet-real-21.jpg',
    alt: 'Chú mèo lông mượt thư giãn phục vụ khách Phường Hạnh Thông Gò Vấp',
    caption: '🌙 Mở cửa tới 21:00 hằng ngày — thuận tiện cho khách Phường Hạnh Thông (Gò Vấp) ghé sau giờ làm'
  },
  {
    type: 'core',
    rel: '/spa-thu-cung-phuong-an-khanh-thao-dien/',
    src: 'cat-rnd-10',
    out: 'pet-real-22.jpg',
    alt: 'Chú mèo trắng lông xù quý phái phục vụ khách Phường An Khánh – Thảo Điền',
    caption: '✨ Chăm sóc mèo lông dài và phòng lưu trú yên tĩnh cho cư dân An Khánh – Thảo Điền'
  },

  // === BLOG ARTICLES (37 duplicates + husky missing img + khao-sat-bang-gia lead dedupe) ===
  // Group 1: px-6131161 (keep bao-lau-nen-tam-cho-mot-lan) -> 2 extra
  { type: 'blog', slug: 'cho-bi-ngua-sau-khi-tam', src: 'px-5686616', out: 'pet-real-23.jpg', alt: 'Chú chó nằm nghỉ yên trên sàn sạch sau khi tắm vệ sinh dịu nhẹ', caption: 'Theo dõi da lông và phản ứng gãi ngứa của cún sau buổi tắm để chọn sữa tắm phù hợp.' },
  { type: 'blog', slug: 'spa-cho-binh-thanh-gia-bao-nhieu', src: 'px-30537541', out: 'pet-real-24.jpg', alt: 'Chú chó nhỏ sạch sẽ vui vẻ tại Spa thú cưng Bình Thạnh', caption: 'Tham khảo bảng giá spa chó minh bạch theo 8 mốc cân nặng tới 25kg tại Bình Thạnh.' },

  // Group 2: px-6816844 (keep cat-tia-long-cho-gia-bao-nhieu) -> 5 extra
  { type: 'blog', slug: 'cho-lon-tuoi-di-spa-can-luu-y-gi', src: 'px-30810890', out: 'pet-real-25.jpg', alt: 'Chú chó Golden Retriever lớn tuổi điềm đạm cần thao tác spa nhẹ nhàng', caption: 'Chó lớn tuổi cần sàn chống trượt, thời gian đứng ngắn và thợ sấy tay êm ái.' },
  { type: 'blog', slug: 'cho-so-may-say-khi-grooming', src: 'px-30537543', out: 'pet-real-26.jpg', alt: 'Chú chó nằm bình tĩnh trên nệm êm khi làm quen tiếng máy sấy nhẹ', caption: 'Giảm tiếng ồn đột ngột và sấy tay gió ấm từ xa giúp chó nhạy cảm hết hoảng sợ.' },
  { type: 'blog', slug: 'dau-hieu-cho-can-grooming', src: 'px-20504089', out: 'pet-real-27.jpg', alt: 'Chú chó Schnauzer với bộ râu và lông mặt gọn gàng sau khi cắt tỉa', caption: 'Lông che mắt, móng dài cạch sàn hay bết lông nách là dấu hiệu cần đưa bé đi grooming.' },
  { type: 'blog', slug: 'go-roi-long-cho-meo-khi-nao-can', src: 'px-20659445', out: 'pet-real-28.jpg', alt: 'Hai chú chó Schnauzer bộ lông dài cần chải gỡ rối định kỳ', caption: 'Gỡ rối từng lớp nhẹ nhàng giúp giữ bộ lông đẹp mà không cần phải cạo sát da.' },
  { type: 'blog', slug: 'tam-cao-long-cho-gia-bao-nhieu', src: 'dog-pomeranian-3', out: 'pet-real-29.jpg', alt: 'Chú chó lông dài gọn gàng sau combo tắm cạo vệ sinh sạch mát', caption: 'Combo tắm + cạo lông chó 2026 từ 200.000đ theo 8 mốc cân nặng rõ ràng.' },

  // Group 3: px-19145875 (keep cham-soc-long-poodle-khong-bi-roi) -> 3 extra
  { type: 'blog', slug: 'grooming-cho-gom-nhung-gi', src: 'dog-poodle-miniature-3', out: 'pet-real-30.jpg', alt: 'Chú chó Poodle trắng sạch thơm sau quy trình grooming trọn gói', caption: 'Một buổi grooming trọn gói gồm tắm, sấy tay, vệ sinh tai, móng, tuyến hôi và tạo kiểu.' },
  { type: 'blog', slug: 'grooming-poodle-binh-thanh', src: 'dog-poodle-miniature-2', out: 'pet-real-31.jpg', alt: 'Chú chó Poodle đen được tỉa lông gọn gàng tại Bình Thạnh', caption: 'Poodle cần chải tơi từng lớp lông xoăn khi sấy tay để giữ phom xù bền đẹp.' },
  { type: 'blog', slug: 'poodle-nen-de-long-dai-hay-cat-ngan', src: 'dog-corgi-cardigan-2', out: 'pet-real-32.jpg', alt: 'Chú cún con dáng gọn gàng phù hợp độ dài lông theo thời tiết TP.HCM', caption: 'Chọn độ dài lông theo tần suất chải ở nhà và thời tiết nóng ẩm Bình Thạnh.' },

  // Group 4: px-6131165 (keep cho-do-mat-sau-khi-tam) -> 4 extra
  { type: 'blog', slug: 'cho-hat-hoi-sau-khi-tam', src: 'px-7764989', out: 'pet-real-33.jpg', alt: 'Chú chó nghỉ ngơi trong phòng ấm sau khi tắm xả và lau khô kỹ', caption: 'Giữ ấm và kiểm tra nước mũi/nhiệt độ nếu bé hắt hơi nhiều sau khi tắm.' },
  { type: 'blog', slug: 'cho-non-sau-khi-di-spa', src: 'dog-bulldog-french-1', out: 'pet-real-34.jpg', alt: 'Chú chó French Bulldog nghỉ ngơi yên tĩnh tránh ăn no ngay trước và sau spa', caption: 'Không cho bé ăn quá no trong 2 giờ trước khi tắm hoặc cắt tỉa để hạn chế nôn trớ.' },
  { type: 'blog', slug: 'cho-tieu-chay-sau-khi-di-spa', src: 'dog-chihuahua-1', out: 'pet-real-35.jpg', alt: 'Chú chó nhỏ nằm nghỉ ngơi trên chăn sạch khi theo dõi tiêu hóa sau spa', caption: 'Theo dõi phân, bù nước vừa đủ và liên hệ thú y ngay nếu tiêu chảy kèm mệt lả.' },
  { type: 'blog', slug: 'yorkshire-terrier-di-khach-san-can-chuan-bi-gi', src: 'px-35708965', out: 'pet-real-36.jpg', alt: 'Chú chó Yorkshire Terrier lông dài mượt chuẩn bị gửi khách sạn thú cưng', caption: 'Yorkshire Terrier cần mang lược quen, áo mỏng nếu nhạy lạnh và lịch ăn quen thuộc.' },

  // Group 5: bai-vat-tuyen-hoi-cho (keep vat-tuyen-hoi-cho-khi-nao-can [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'cho-khap-khieng-sau-khi-di-spa', src: 'dog-retriever-golden-2', out: 'pet-real-37.jpg', alt: 'Chú chó Golden Retriever nằm thư giãn kiểm tra bàn chân sau khi cắt móng', caption: 'Kiểm tra đệm chân, kẽ ngón và độ dài móng nếu thấy bé nhấc chân hoặc đi khập khiễng.' },

  // Group 6: bai-truc-phan-dang-luu (keep spa-tam-cho-meo-truc-phan-dang-luu... [FEATURED]) -> 2 extra (incl husky!)
  { type: 'blog', slug: 'cho-khat-nuoc-sau-khi-di-spa', src: 'dog-pug-3', out: 'pet-real-38.jpg', alt: 'Chú chó Pug thư giãn uống nước sạch từng ngụm nhỏ sau buổi tắm sấy', caption: 'Cho bé uống nước sạch từng chút một sau buổi spa dài thay vì để uống quá nhanh một lúc.' },
  { type: 'blog', slug: 'husky-di-khach-san-can-chuan-bi-gi', src: 'px-8661623', out: 'pet-real-39.jpg', alt: 'Chú chó Siberian Husky bộ lông kép khỏe khoắn trước kỳ lưu trú Pet Hotel', caption: 'Bàn giao rõ lịch vận động, thói quen kéo dây và tình trạng lông kép khi gửi Husky tại Pet Hotel.' },

  // Group 7: px-19145876 (keep cho-long-dai-di-spa-nen-chon-goi-nao) -> 1 extra
  { type: 'blog', slug: 'tam-cho-truoc-hay-sau-khi-cat-tia', src: 'dog-pomeranian-2', out: 'pet-real-40.jpg', alt: 'Chú chó Phốc sóc lông trắng bông sau quy trình tắm xả rồi mới cắt tỉa', caption: 'Tắm sạch và sấy tơi hoàn toàn trước khi cắt giúp đường kéo đều, mượt và giữ phom lâu.' },

  // Group 8: px-19145895 (keep cho-mang-thai-co-di-spa-duoc-khong) -> 2 extra
  { type: 'blog', slug: 'spa-thu-cung-binh-thanh-nen-chon-noi-nao', src: 'dog-shiba-2', out: 'pet-real-41.jpg', alt: 'Chú chó Shiba Inu đi dạo cùng chủ chọn tiệm spa minh bạch tại Bình Thạnh', caption: '6 tiêu chí kiểm tra trước khi chọn spa thú cưng: sấy tay 100%, minh bạch giá và khử khuẩn.' },
  { type: 'blog', slug: 'tam-cho-o-nha-hay-di-spa', src: 'dog-shiba-3', out: 'pet-real-42.jpg', alt: 'Chú chó bộ lông gọn tơi sạch sẽ cân nhắc giữa tự tắm ở nhà và đi spa', caption: 'So sánh thời gian sấy khô, độ sạch tai/móng/tuyến hôi và chi phí thực tế theo kích thước bé.' },

  // Group 9: bai-cho-meo-con-spa (keep cho-meo-con-may-thang... [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'cho-met-sau-khi-di-spa', src: 'px-1457697', out: 'pet-real-43.jpg', alt: 'Những chú cún nhỏ nghỉ ngơi yên bình sau buổi tắm vệ sinh', caption: 'Phân biệt trạng thái ngủ bù bình thường với dấu hiệu mệt lả cần theo dõi thú y.' },

  // Group 10: px-6131162 (keep cho-run-sau-khi-tam) -> 1 extra
  { type: 'blog', slug: 'cho-van-hoi-sau-khi-tam', src: 'cat-pers-1', out: 'pet-real-44.jpg', alt: 'Kiểm tra mùi tai, kẽ chân và tuyến hôi khi thú cưng vừa tắm xong vẫn còn mùi', caption: 'Mùi hôi dai dẳng sau tắm thường xuất phát từ tuyến hôi, ráy tai hoặc lớp lông sát da sấy chưa khô.' },

  // Group 11: px-19145872 (keep cho-so-cat-mong-khi-grooming) -> 1 extra
  { type: 'blog', slug: 'grooming-cho-mat-bao-lau', src: 'cat-bsh-1', out: 'pet-real-45.jpg', alt: 'Thao tác chăm sóc nhẹ nhàng ước lượng thời gian một buổi grooming thú cưng', caption: 'Tắm vệ sinh thường mất 60–90 phút; combo cắt tỉa tạo kiểu mất khoảng 120–150 phút tùy lông.' },

  // Group 12: px-4587998 (keep cho-so-nguoi-la-khi-di-spa) -> 2 extra
  { type: 'blog', slug: 'cho-tho-gap-sau-khi-di-spa', src: 'cat-bsh-3', out: 'pet-real-46.jpg', alt: 'Bé thú cưng được quan sát nhịp thở khi nghỉ tại không gian thoáng mát sau spa', caption: 'Phân biệt thở nhanh do hồi hộp nhẹ với tình trạng thở gấp kéo dài cần đưa đi khám.' },
  { type: 'blog', slug: 'samoyed-di-khach-san-can-chuan-bi-gi', src: 'px-29106873', out: 'pet-real-47.jpg', alt: 'Chú chó Samoyed trắng muốt cần phòng máy lạnh 24/24 khi gửi Pet Hotel', caption: 'Samoyed cần phòng thoáng mát điều hòa 24/24 và kiểm tra chải lông dưới tránh bết ẩm.' },

  // Group 13: px-7635904 (keep chuan-bi-truoc-khi-gui-cho-meo-khach-san-thu-cung) -> 4 extra
  { type: 'blog', slug: 'gui-cho-khach-san-10-ngay-gia-bao-nhieu', src: 'dog-samoyed-3', out: 'pet-real-48.jpg', alt: 'Chú chó Samoyed sạch sẽ chuẩn bị kỳ lưu trú dài 10 ngày có ưu đãi giảm 8%', caption: 'Gửi chó dài ngày từ 10 ngày tại Lumi Pet được áp dụng mức giảm 8% theo bảng giá 2026.' },
  { type: 'blog', slug: 'gui-cho-khach-san-5-ngay-gia-bao-nhieu', src: 'cat-bsh-4', out: 'pet-real-49.jpg', alt: 'Hai bé thú cưng thư giãn trong gói gửi khách sạn 5 ngày trở lên giảm 5%', caption: 'Lưu trú trên 5 ngày tại Lumi Pet tự động giảm 5% tổng hóa đơn phòng máy lạnh 24/24.' },
  { type: 'blog', slug: 'khach-san-cho-meo-can-kiem-tra-gi', src: 'cat-bsh-5', out: 'pet-real-50.jpg', alt: 'Chú mèo nằm cuộn tròn yên tâm trên nệm sạch trong phòng riêng Pet Hotel', caption: 'Kiểm tra độ tách biệt chuồng, thông gió máy lạnh và quy trình gửi video trước khi gửi bé.' },
  { type: 'blog', slug: 'khach-san-thu-cung-binh-thanh-gia-bao-nhieu', src: 'cat-pers-2', out: 'pet-real-51.jpg', alt: 'Các bé mèo ngủ yên bình trong phòng khách sạn thú cưng Bình Thạnh', caption: 'Giá phòng khách sạn thú cưng Bình Thạnh 2026 niêm yết từ 100.000đ – 250.000đ/ngày theo cân nặng.' },

  // Group 14: px-6816850 (keep go-roi-long-cho-gia-bao-nhieu) -> 2 extra
  { type: 'blog', slug: 'grooming-cho-nho-binh-thanh', src: 'cat-ragd-5', out: 'pet-real-52.jpg', alt: 'Thú cưng lông mượt được chăm chút dịu dàng từng bước tại tiệm Bình Thạnh', caption: 'Chó nhỏ dưới 6kg cần tông đơ nhỏ và kéo mũi tròn để tỉa mặt an toàn không giật mình.' },
  { type: 'blog', slug: 'nhung-vung-long-cho-de-bi-roi', src: 'cat-sfol-4', out: 'pet-real-53.jpg', alt: 'Kiểm tra kỹ vùng sau tai, nách, bẹn và đuôi dễ hình thành búi rối', caption: 'Sau tai, nách, cổ áo yếm và đùi sau là 4 vị trí cần chải gỡ mỗi tuần để tránh vón cục.' },

  // Group 15: bai-gui-meo-cho-tet (keep gui-meo-cho-dip-tet-binh-thanh [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'poodle-di-khach-san-can-chuan-bi-gi', src: 'cat-rnd-1', out: 'pet-real-54.jpg', alt: 'Chuẩn bị vật dụng quen mùi và thức ăn riêng giúp bé Poodle dễ thích nghi khách sạn', caption: 'Mang thức ăn quen và nhắc lịch chải lông giúp bé Poodle ăn ngon ngủ yên khi xa nhà.' },

  // Group 16: bai-truc-vinhomes (keep spa-khach-san...vinhomes [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'khach-san-thu-cung-phong-rieng-hay-phong-chung', src: 'cat-rnd-3', out: 'pet-real-55.jpg', alt: 'Không gian lưu trú tách biệt phòng riêng giúp mèo giảm stress và hạn chế lây chéo', caption: 'Phòng riêng giúp kiểm soát vệ sinh, khẩu phần ăn và độ yên tĩnh tốt hơn nhiều so với nhốt chung.' },

  // Group 17: bai-truc-dinh-bo-linh (keep spa-gui...dinh-bo-linh [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'maltese-di-khach-san-can-chuan-bi-gi', src: 'px-16196931', out: 'pet-real-56.jpg', alt: 'Chuẩn bị khăn lau mắt, thức ăn quen và lịch vệ sinh khi gửi Maltese dài ngày', caption: 'Ghi chú rõ thói quen lau mắt và khẩu phần giúp Maltese luôn sạch đẹp trong kỳ lưu trú.' },

  // Group 18: px-23692910 (keep meo-co-nen-tam-thuong-xuyen-khong) -> 1 extra
  { type: 'blog', slug: 'spa-meo-binh-thanh-gia-bao-nhieu', src: 'px-7224649', out: 'pet-real-57.jpg', alt: 'Chú mèo xám đang được tắm nhẹ nhàng với nước ấm tại Spa Lumi Pet Bình Thạnh', caption: 'Bảng giá tắm mèo tại Bình Thạnh 2026: 160k (<3kg), 210k (3–6kg) và 270k (6–10kg), sấy tay 100%.' },

  // Group 19: bai-spa-meo-khong-long-say (keep spa-meo-khong-dung-long-say-binh-thanh [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'meo-so-may-say-khi-grooming', src: 'px-27564205', out: 'pet-real-58.jpg', alt: 'Chú mèo được ủ khăn ấm giữ bình tĩnh sau khi tắm trước khi sấy tay gió nhẹ', caption: 'Ủ khăn thấm nước kỹ kết hợp máy sấy êm độ ồn thấp giúp mèo không hoảng loạn.' },

  // Group 20: bai-truc-phan-xich-long (keep spa-cho-meo-phan-xich-long... [FEATURED]) -> 1 extra
  { type: 'blog', slug: 'spa-cho-binh-thanh-co-nen-dat-lich-truoc', src: 'cat-rnd-6', out: 'pet-real-59.jpg', alt: 'Bé thú cưng được đón tiếp đúng giờ hẹn khi đặt lịch Spa trước tại Bình Thạnh', caption: 'Đặt lịch trước giúp thợ sắp xếp phòng riêng ngay khi tới, bé không phải nằm lồng chờ đợi.' },

  // Extra cross-dedupe: khao-sat-bang-gia shared bang-gia-spa-grooming-lumi-pet.jpg with /bang-gia-spa-thu-cung/
  { type: 'blog-keep-body-img', slug: 'khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026', src: 'cat-pers-3', out: 'pet-real-60.jpg', alt: 'Thú cưng chỉnh chu sạch đẹp sau buổi Spa – minh họa khảo sát bảng giá Bình Thạnh 2026', caption: 'Khảo sát bảng giá Spa & Grooming Bình Thạnh 2026 theo 8 mốc cân nặng chó và 3 mốc mèo.' },

  // Distinct og:image for dat-lich & dat-phong (currently shared NONE)
  { type: 'og-only', rel: '/dat-lich/', src: 'cat-rnd-4', out: 'pet-real-61.jpg' },
  { type: 'og-only', rel: '/dat-phong/', src: 'cat-rnd-5', out: 'pet-real-62.jpg' }
];

// Verify zero duplicate src or out or target slug/rel!
const usedSrc = new Set();
const usedOut = new Set();
const usedTargets = new Set();
for (const a of ASSIGNMENTS) {
  if (usedSrc.has(a.src)) throw new Error(`Dup src: ${a.src}`);
  if (usedOut.has(a.out)) throw new Error(`Dup out: ${a.out}`);
  const tgt = a.slug || a.rel;
  if (usedTargets.has(tgt)) throw new Error(`Dup target: ${tgt}`);
  usedSrc.add(a.src);
  usedOut.add(a.out);
  usedTargets.add(tgt);
}

console.log(`Validated ${ASSIGNMENTS.length} unique assignments. Exporting 1200x675 crisp JPEGs...`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 675, deviceScaleFactor: 1 });

for (const item of ASSIGNMENTS) {
  const inPath = srcFile(item.src);
  const ext = path.extname(inPath).toLowerCase();
  const mime = ext === '.png' ? 'image/png' : 'image/jpeg';
  const b64 = (await fsp.readFile(inPath)).toString('base64');
  const outPath = path.join(IMG_OUT_DIR, item.out);

  const dataUrl = `data:${mime};base64,${b64}`;
  const html = `<!doctype html><html><body style="margin:0;padding:0;overflow:hidden;background:#f8fafc;">
    <img src="${dataUrl}" style="width:1200px;height:675px;object-fit:cover;object-position:center 35%;display:block;" />
  </body></html>`;
  await page.setContent(html, { waitUntil: 'load' });
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 88 });
}
await browser.close();
console.log(`Exported ${ASSIGNMENTS.length} images to ${IMG_OUT_DIR}`);

// 1. Update Root index.html so it owns vn-hero-spa.jpg uniquely (instead of colliding with bang-gia)
{
  const rootHtmlPath = 'G:/lumi-pet-vps-workspace/index.html';
  let rootHtml = fs.readFileSync(rootHtmlPath, 'utf8');
  rootHtml = rootHtml
    .replace(/https:\/\/lumipet\.vn\/images\/bang-gia-spa-grooming-lumi-pet\.jpg/g, 'https://lumipet.vn/images/vn-hero-spa.jpg');
  fs.writeFileSync(rootHtmlPath, rootHtml, 'utf8');
  console.log('Updated root index.html og:image/schema -> vn-hero-spa.jpg');
}

// 2. Apply Core & Service & Ward & Booking updates
for (const item of ASSIGNMENTS.filter((x) => x.type === 'core' || x.type === 'og-only')) {
  const fp = path.join(PUBLIC_DIR, item.rel.slice(1), 'index.html');
  let html = fs.readFileSync(fp, 'utf8');
  const absImg = `${ORIGIN}/images/${item.out}`;
  const relImg = `../images/${item.out}`;

  if (item.type === 'og-only') {
    // Fix stale github.io canonicals & inject og:image
    html = html.replace(/https:\/\/capquangfptminhlh\.github\.io\/mimi/g, ORIGIN);
    if (/property="og:image"/i.test(html)) {
      html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${absImg}">`);
    } else {
      html = html.replace(/(<meta property="og:url" content="[^"]*"\s*\/?>)/i, `$1<meta property="og:image" content="${absImg}">`);
    }
    fs.writeFileSync(fp, html, 'utf8');
    console.log(`Updated ${item.rel} (og-only + canonical fix) -> ${item.out}`);
    continue;
  }

  // Update og:image
  if (/property="og:image"/i.test(html)) {
    html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${absImg}">`);
  } else {
    html = html.replace(/(<meta property="og:url" content="[^"]*"\s*\/?>)/i, `$1\n  <meta property="og:image" content="${absImg}">`);
  }

  // Replace ONLY the first non-brand <img> tag (and its sibling figcaption if present)
  let replacedFirst = false;
  html = html.replace(/<figure[^>]*class="[^"]*lumi-vn-showcase[^"]*"[^>]*>[\s\S]*?<\/figure>/i, (fig) => {
    if (replacedFirst) return fig;
    replacedFirst = true;
    let outFig = fig.replace(/<img([^>]*?)src="[^"]*"([^>]*?)alt="[^"]*"/i, `<img$1src="${relImg}"$2alt="${item.alt}"`);
    if (outFig === fig) {
      outFig = fig.replace(/<img([^>]*?)src="[^"]*"/i, `<img$1src="${relImg}"`);
    }
    outFig = outFig.replace(/<figcaption[^>]*>[\s\S]*?<\/figcaption>/i, (cap) => {
      const tagOpen = cap.match(/^<figcaption[^>]*>/i)[0];
      return `${tagOpen}${item.caption}</figcaption>`;
    });
    return outFig;
  });

  if (!replacedFirst) {
    throw new Error(`Could not find showcase <figure> in ${fp}`);
  }
  fs.writeFileSync(fp, html, 'utf8');
  console.log(`Updated ${item.rel} -> ${item.out}`);
}

// 3. Apply Blog updates
const hubPath = path.join(PUBLIC_DIR, 'bai-viet', 'index.html');
let hubHtml = fs.readFileSync(hubPath, 'utf8');
const updateScriptPath = 'G:/lumi-pet-vps-workspace/scripts/update-blog-index-and-sitemap.mjs';
let updateScript = fs.readFileSync(updateScriptPath, 'utf8');

for (const item of ASSIGNMENTS.filter((x) => x.type === 'blog' || x.type === 'blog-keep-body-img')) {
  const fp = path.join(PUBLIC_DIR, 'bai-viet', item.slug, 'index.html');
  let html = fs.readFileSync(fp, 'utf8');
  const absImg = `${ORIGIN}/images/${item.out}`;
  const relImg = `../../images/${item.out}`;

  if (item.type === 'blog-keep-body-img') {
    // Insert dedicated hero photo figure right before the price sheet figure so price sheet stays visible inside article
    const heroFig = `<figure class="lumi-article-photo" style="margin:0 0 18px;border-radius:20px;overflow:hidden;border:1px solid #ffead7;background:#fff;"><img src="${relImg}" alt="${item.alt}" loading="lazy" style="width:100%;max-height:360px;object-fit:cover;display:block;"><figcaption style="padding:10px 16px;font-size:12.5px;font-weight:700;color:#64748b;background:#fffaf3;">🐾 ${item.caption}</figcaption></figure>\n        `;
    html = html.replace(/<figure class="lumi-article-photo"/i, `${heroFig}<figure class="lumi-article-photo"`);

    // Update featured hub card thumbnail & featured generator script too
    hubHtml = hubHtml.replace(
      new RegExp(`(<a class="blog-card" href="\\./${item.slug}/"><img src=")([^"]+)(")`),
      `$1../images/${item.out}$3`
    );
    updateScript = updateScript.replace(
      /img:\s*'\.\.\/images\/bang-gia-spa-grooming-lumi-pet\.jpg'/g,
      `img: '../images/${item.out}'`
    );
  } else {
    // Normal blog article: update existing first non-brand <img> or inject figure (for husky)
    const hasImg = /<img[^>]+src="([^"]+)"/i.test(html);
    if (!hasImg) {
      const figHtml = `<figure class="article-visual"><img src="${relImg}" alt="${item.alt}" loading="lazy"><figcaption>${item.caption}</figcaption></figure>`;
      html = html.replace(/<\/header>/i, `${figHtml}</header>`);
    } else {
      let doneImg = false;
      html = html.replace(/<img([^>]*?)src="([^"]+)"([^>]*)>/gi, (m, a, src, b) => {
        if (doneImg || src.includes('lumi-brand-mark')) return m;
        doneImg = true;
        let tag = `<img${a}src="${relImg}"${b}>`;
        if (/alt="[^"]*"/i.test(tag)) {
          tag = tag.replace(/alt="[^"]*"/i, `alt="${item.alt}"`);
        }
        return tag;
      });
      // Replace first article figcaption if inside article-visual or lumi-article-photo
      let doneCap = false;
      html = html.replace(/<figcaption[^>]*>[\s\S]*?<\/figcaption>/i, (cap) => {
        if (doneCap) return cap;
        doneCap = true;
        const open = cap.match(/^<figcaption[^>]*>/i)[0];
        return `${open}${item.caption}</figcaption>`;
      });
    }
  }

  // Sync og:image and JSON-LD image (upgrade script will also re-verify)
  if (/property="og:image"/i.test(html)) {
    html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${absImg}">`);
  }
  html = html.replace(/"image":"[^"]*"/, `"image":"${absImg}"`);

  fs.writeFileSync(fp, html, 'utf8');
  console.log(`Updated blog/${item.slug} -> ${item.out}`);
}

fs.writeFileSync(hubPath, hubHtml, 'utf8');
fs.writeFileSync(updateScriptPath, updateScript, 'utf8');
console.log('Updated /bai-viet/index.html & update-blog-index-and-sitemap.mjs cleanly.');
