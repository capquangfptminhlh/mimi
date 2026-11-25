import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const BLOG_INDEX = path.join(PUBLIC_DIR, 'bai-viet', 'index.html');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ORIGIN = 'https://lumipet.vn';
const TODAY = '2026-11-25';

// 1. Update public/bai-viet/index.html (CollectionPage + ItemList + feature new AEO/GEO articles)
let html = fs.readFileSync(BLOG_INDEX, 'utf8').replace(/\r\n/g, '\n');

const newSchema = `<script type="application/ld+json">\n${JSON.stringify(
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${ORIGIN}/bai-viet/#collection`,
    name: 'Kiến thức chăm sóc chó mèo | Lumi Pet Bình Thạnh',
    description:
      'Cẩm nang chuyên sâu về tắm vệ sinh, cắt tỉa lông grooming, khảo sát giá 2026 và lưu trú khách sạn thú cưng an toàn.',
    url: `${ORIGIN}/bai-viet/`,
    publisher: { '@id': `${ORIGIN}/#business` },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Bài viết nổi bật về Spa, Grooming & Pet Hotel Bình Thạnh',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cắt tỉa lông Poodle Bình Thạnh: Kiểu Teddy & Giá 2026', url: `${ORIGIN}/bai-viet/cat-tia-long-poodle-binh-thanh-gia-bao-nhieu/` },
        { '@type': 'ListItem', position: 2, name: 'Gỡ rối lông chó mèo bị bết sát da: Khi nào gỡ, khi nào cạo?', url: `${ORIGIN}/bai-viet/go-roi-long-cho-meo-bi-bet-sat-da-binh-thanh/` },
        { '@type': 'ListItem', position: 3, name: 'Tắm chó bị nấm, ve rận & viêm da nhẹ: Lưu ý an toàn', url: `${ORIGIN}/bai-viet/tam-cho-bi-nam-ve-ran-viem-da-luu-y-an-toan/` },
        { '@type': 'ListItem', position: 4, name: 'Chó mèo con mấy tháng đi Spa được & bao lâu tắm 1 lần?', url: `${ORIGIN}/bai-viet/cho-meo-con-may-thang-di-spa-duoc-bao-lau-tam-1-lan/` },
        { '@type': 'ListItem', position: 5, name: 'Tắm & Cắt tỉa Bichon, Shih Tzu, Maltese Bình Thạnh', url: `${ORIGIN}/bai-viet/tam-cat-tia-cho-bichon-shih-tzu-maltese-binh-thanh/` },
        { '@type': 'ListItem', position: 6, name: 'Đặt lịch tắm & cắt tỉa chó mèo cận Tết tại Bình Thạnh', url: `${ORIGIN}/bai-viet/dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh/` },
        { '@type': 'ListItem', position: 7, name: 'Gửi chó mèo dịp Noel & Tết Dương lịch Bình Thạnh', url: `${ORIGIN}/bai-viet/gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh/` },
        { '@type': 'ListItem', position: 8, name: 'Khảo sát bảng giá Spa thú cưng Bình Thạnh 2026', url: `${ORIGIN}/bai-viet/khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026/` },
        { '@type': 'ListItem', position: 9, name: 'Spa chó mèo mở cửa tối đến 21h tại Bình Thạnh', url: `${ORIGIN}/bai-viet/spa-cho-meo-mo-cua-toi-binh-thanh/` },
        { '@type': 'ListItem', position: 10, name: 'Spa mèo không dùng lồng sấy tại Bình Thạnh', url: `${ORIGIN}/bai-viet/spa-meo-khong-dung-long-say-binh-thanh/` },
        { '@type': 'ListItem', position: 11, name: 'Gửi mèo chó dịp Tết Bình Thạnh: Kinh nghiệm & Đặt phòng', url: `${ORIGIN}/bai-viet/gui-meo-cho-dip-tet-binh-thanh/` },
        { '@type': 'ListItem', position: 12, name: 'Cắt tỉa lông Corgi mông đào Bình Thạnh giá bao nhiêu?', url: `${ORIGIN}/bai-viet/cat-tia-long-corgi-mong-dao-binh-thanh/` },
        { '@type': 'ListItem', position: 13, name: 'Cắt tỉa lông Phốc sóc (Pomeranian) Bình Thạnh', url: `${ORIGIN}/bai-viet/cat-tia-long-phoc-soc-pomeranian-binh-thanh/` },
        { '@type': 'ListItem', position: 14, name: 'Tắm chó lớn Husky, Golden, Samoyed Bình Thạnh (15–25kg)', url: `${ORIGIN}/bai-viet/tam-cho-lon-husky-golden-samoyed-binh-thanh/` },
        { '@type': 'ListItem', position: 15, name: 'Cạo lông mèo Bình Thạnh giá bao nhiêu?', url: `${ORIGIN}/bai-viet/cao-long-meo-binh-thanh-gia-bao-nhieu/` },
        { '@type': 'ListItem', position: 16, name: 'Tắm mèo Anh lông ngắn, lông dài sạch nhờn đuôi', url: `${ORIGIN}/bai-viet/tam-meo-anh-long-ngan-long-dai-het-nhon-duoi/` },
        { '@type': 'ListItem', position: 17, name: 'Vắt tuyến hôi cho chó: khi nào cần & giá tại Bình Thạnh', url: `${ORIGIN}/bai-viet/vat-tuyen-hoi-cho-khi-nao-can/` },
      ],
    },
  },
  null,
  2
)}\n</script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, newSchema);

const newCards = `<section><h2>Mới cập nhật (Noel 2026 · Tết 2027 &amp; Cẩm Nang Giống Chó Mèo)</h2><div class="blog-grid">
<a class="blog-card" href="./cat-tia-long-poodle-binh-thanh-gia-bao-nhieu/"><img src="../images/vn-spa-noel-tet.jpg" alt="Cắt tỉa lông Poodle kiểu Teddy tại Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Grooming · Poodle</span><h2>Cắt tỉa lông Poodle Bình Thạnh: Kiểu Teddy &amp; Giá 2026</h2><p>Bảng giá cắt tỉa Poodle 290k–520k theo cân nặng, 4 kiểu đẹp bền phom và chu kỳ chăm sóc không rối lông.</p></div></a>
<a class="blog-card" href="./go-roi-long-cho-meo-bi-bet-sat-da-binh-thanh/"><img src="../images/vn-grooming-corgi.jpg" alt="Gỡ rối lông chó mèo bị bết sát da Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Grooming · Xử Lý Lông Bết</span><h2>Gỡ rối lông chó mèo bị bết: Khi nào gỡ, khi nào cạo?</h2><p>Phân biệt 3 mức độ rối lông, tránh cắt phạm da tại nhà và bảng phụ thu gỡ rối minh bạch 50k–500k.</p></div></a>
<a class="blog-card" href="./tam-cho-bi-nam-ve-ran-viem-da-luu-y-an-toan/"><img src="../images/vn-bath-dog.jpg" alt="Tắm chó bị nấm ve rận viêm da nhẹ an toàn" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Chăm Sóc Da · E-E-A-T</span><h2>Tắm chó bị nấm, ve rận &amp; viêm da nhẹ: Lưu ý an toàn</h2><p>Phân định rõ ranh giới Spa hỗ trợ tắm sấy khô 100% vs trường hợp bắt buộc thăm khám bác sĩ thú y.</p></div></a>
<a class="blog-card" href="./cho-meo-con-may-thang-di-spa-duoc-bao-lau-tam-1-lan/"><img src="../images/vn-hero-spa.jpg" alt="Chó mèo con mấy tháng đi Spa được" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">AEO · Chăm Sóc Cơ Bản</span><h2>Chó mèo con mấy tháng đi Spa được &amp; bao lâu tắm 1 lần?</h2><p>Mốc tiêm đủ mũi vắc-xin an toàn (3–3,5 tháng), tần suất tắm chuẩn cho chó 7–14 ngày và mèo 3–6 tuần.</p></div></a>
<a class="blog-card" href="./tam-cat-tia-cho-bichon-shih-tzu-maltese-binh-thanh/"><img src="../images/vn-evening-spa.jpg" alt="Tắm và cắt tỉa Bichon Shih Tzu Maltese Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Grooming · Chó Lông Trắng</span><h2>Tắm &amp; Cắt tỉa Bichon, Shih Tzu, Maltese Bình Thạnh</h2><p>Xử lý ố mắt, sấy bông tròn đầu Bichon và bảng giá cắt tỉa 2026 từ 290k–430k tại Lumi Pet.</p></div></a>
<a class="blog-card" href="./dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh/"><img src="../images/vn-spa-noel-tet.jpg" alt="Đặt lịch tắm và cắt tỉa chó mèo cận Tết Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Mùa Lễ · Spa Tết 2027</span><h2>Đặt lịch tắm &amp; cắt tỉa chó mèo cận Tết: Nên đặt khi nào?</h2><p>Mốc đặt trước 7–14 ngày cho cắt tỉa Poodle/Corgi và 3–5 ngày cho tắm vệ sinh, tránh chờ lâu dịp cao điểm Noel &amp; Tết.</p></div></a>
<a class="blog-card" href="./gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh/"><img src="../images/vn-hotel-tet.jpg" alt="Gửi chó mèo dịp Noel và Tết Dương lịch Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Pet Hotel · Noel &amp; Tết Tây</span><h2>Gửi chó mèo dịp Noel &amp; Tết Dương lịch Bình Thạnh</h2><p>Phòng riêng máy lạnh 24/24, trực trông giữ 24/7 và quay video Zalo mỗi ngày khi ba mẹ đi chơi Giáng Sinh, nghỉ lễ.</p></div></a>
<a class="blog-card" href="./khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026/"><img src="../images/bang-gia-spa-grooming-lumi-pet.jpg" alt="Khảo sát bảng giá Spa thú cưng Bình Thạnh 2026" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Báo cáo 2026 · Dữ liệu Giá</span><h2>Khảo sát bảng giá Spa thú cưng Bình Thạnh 2026</h2><p>Phân tích 8 phân khúc cân nặng chó (140k–850k), 3 phân khúc mèo (160k–380k) và bóc tách 5 khoản phụ phí phổ biến.</p></div></a>
<a class="blog-card" href="./spa-cho-meo-mo-cua-toi-binh-thanh/"><img src="../images/vn-evening-spa.jpg" alt="Spa chó mèo mở cửa tối đến 21h tại Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Spa Bình Thạnh · Khung giờ tối</span><h2>Spa chó mèo mở cửa tối đến 21h tại Bình Thạnh</h2><p>Hướng dẫn đặt ca tắm sau giờ tan làm, không phụ thu giờ tối và cam kết sấy tay khô 100% tránh cảm lạnh.</p></div></a>
<a class="blog-card" href="./spa-meo-khong-dung-long-say-binh-thanh/"><img src="../images/vn-spa-cat.jpg" alt="Spa mèo không dùng lồng sấy tại Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Spa Mèo · An toàn</span><h2>Spa mèo không dùng lồng sấy tại Bình Thạnh</h2><p>Vì sao sấy tay bằng máy ion giảm ồn ở khu riêng giúp mèo tránh stress và sốc nhiệt so với lồng sấy kín.</p></div></a>
<a class="blog-card" href="./gui-meo-cho-dip-tet-binh-thanh/"><img src="../images/vn-hotel-cabins.jpg" alt="Gửi mèo chó dịp Tết Bình Thạnh 24/7" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Pet Hotel 24/7 · Lễ Tết</span><h2>Gửi mèo chó dịp Tết Bình Thạnh: 5 kinh nghiệm cần biết</h2><p>Nên chốt phòng trước bao lâu, checklist tiêm ngừa, đồ mang theo và cam kết trực 24/7 gửi video mỗi ngày.</p></div></a>
<a class="blog-card" href="./cat-tia-long-corgi-mong-dao-binh-thanh/"><img src="../images/vn-grooming-corgi.jpg" alt="Cắt tỉa lông Corgi mông đào Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Grooming · Corgi</span><h2>Cắt tỉa lông Corgi mông đào Bình Thạnh giá bao nhiêu?</h2><p>Bảng giá 2026 (360k–600k) và lưu ý tỉa kéo chuẩn giữ lớp lông kép bảo vệ da cho Corgi.</p></div></a>
<a class="blog-card" href="./cat-tia-long-phoc-soc-pomeranian-binh-thanh/"><img src="../images/vn-hero-spa.jpg" alt="Cắt tỉa lông Phốc sóc Pomeranian Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Grooming · Phốc Sóc</span><h2>Cắt tỉa lông Phốc sóc (Pomeranian) Bình Thạnh</h2><p>Tỉa kiểu gấu Boo từ 290k–360k và cảnh báo tránh cạo sát da 0mm gây rụng lông Alopecia.</p></div></a>
<a class="blog-card" href="./tam-cho-lon-husky-golden-samoyed-binh-thanh/"><img src="../images/vn-bath-dog.jpg" alt="Tắm chó lớn Husky Golden Samoyed Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Spa Chó Lớn · 15–25kg</span><h2>Tắm chó lớn Husky, Golden, Samoyed Bình Thạnh</h2><p>Bảng giá 8 mốc tới 25kg (430k–550k), sấy tay khô tận chân lông kép tránh hôi ẩm.</p></div></a>
<a class="blog-card" href="./cao-long-meo-binh-thanh-gia-bao-nhieu/"><img src="../images/vn-spa-cat.jpg" alt="Cạo lông mèo Bình Thạnh giá bao nhiêu" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Spa Mèo · Cạo Lông</span><h2>Cạo lông mèo Bình Thạnh giá bao nhiêu?</h2><p>Combo tắm + cạo mèo 250k–380k tại khu riêng yên tĩnh, tông đơ êm giữ độ dài an toàn.</p></div></a>
<a class="blog-card" href="./tam-meo-anh-long-ngan-long-dai-het-nhon-duoi/"><img src="../images/vn-hotel-cat-vip.jpg" alt="Tắm mèo Anh lông ngắn lông dài sạch nhờn đuôi" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Spa Mèo · ALN / ALD</span><h2>Tắm mèo Anh lông ngắn, lông dài sạch nhờn đuôi</h2><p>Xử lý bết dầu gốc đuôi, giảm rụng lông và sấy tay 100% không stress từ 160k–270k.</p></div></a>
<a class="blog-card" href="./vat-tuyen-hoi-cho-khi-nao-can/"><img src="../images/vn-bath-dog.jpg" alt="Vắt tuyến hôi cho chó tại Bình Thạnh" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Chăm Sóc Chó · Vệ Sinh</span><h2>Vắt tuyến hôi cho chó: khi nào cần &amp; lưu ý an toàn</h2><p>4 dấu hiệu chó đầy tuyến hôi và lưu ý bước vắt tuyến hôi đã bao gồm sẵn trong gói tắm.</p></div></a>
</div></section>`;

html = html.replace(/<section><h2>Mới cập nhật[\s\S]*?<\/div><\/section>/, newCards);
fs.writeFileSync(BLOG_INDEX, html, 'utf8');
console.log('Updated public/bai-viet/index.html');

// 2. Rebuild public/sitemap.xml cleanly (only indexable URLs, real lastmod, zero noindex scaled pages)
const coreUrls = [
  { loc: `${ORIGIN}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-binh-thanh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/grooming-cho-meo-binh-thanh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/khach-san-thu-cung-binh-thanh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/khach-san-thu-cung-tet-binh-thanh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-cho-meo-don-noel-tet-binh-thanh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/bang-gia-spa-thu-cung/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-cho-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-meo-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/cat-tia-long-cho-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/khach-san-thu-cung-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-binh-thanh/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-binh-loi-trung/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-thanh-my-tay/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-binh-quoi/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-cau-kieu-phu-nhuan/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-duc-nhuan-phu-nhuan/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-phu-nhuan/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-tan-dinh-quan-1/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-sai-gon-quan-1/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-hanh-thong-go-vap/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-an-nhon-go-vap/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-phuong-an-khanh-thao-dien/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-quan-phu-nhuan/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-quan-1/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-quan-go-vap/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-quan-2-thao-dien/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-cho-meo-gan-cho-ba-chieu/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-cho-meo-gan-phan-xich-long-mieu-noi/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-cho-meo-gan-vinhomes-hang-xanh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/dat-lich/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/dat-phong/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${ORIGIN}/gioi-thieu/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${ORIGIN}/lien-he/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${ORIGIN}/bai-viet/`, priority: '0.85', changefreq: 'weekly' },
];

const blogDir = path.join(PUBLIC_DIR, 'bai-viet');
const blogSlugs = fs
  .readdirSync(blogDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

const blogUrls = [];
let excludedNoindex = 0;

for (const slug of blogSlugs) {
  const indexPath = path.join(blogDir, slug, 'index.html');
  if (!fs.existsSync(indexPath)) continue;
  const content = fs.readFileSync(indexPath, 'utf8');
  if (content.includes('content="noindex')) {
    excludedNoindex++;
    continue;
  }
  const isNewFlagship = [
    'cat-tia-long-poodle-binh-thanh-gia-bao-nhieu',
    'go-roi-long-cho-meo-bi-bet-sat-da-binh-thanh',
    'tam-cho-bi-nam-ve-ran-viem-da-luu-y-an-toan',
    'cho-meo-con-may-thang-di-spa-duoc-bao-lau-tam-1-lan',
    'tam-cat-tia-cho-bichon-shih-tzu-maltese-binh-thanh',
    'dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh',
    'gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh',
    'khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026',
    'spa-cho-meo-mo-cua-toi-binh-thanh',
    'spa-meo-khong-dung-long-say-binh-thanh',
    'gui-meo-cho-dip-tet-binh-thanh',
    'cat-tia-long-corgi-mong-dao-binh-thanh',
    'cat-tia-long-phoc-soc-pomeranian-binh-thanh',
    'tam-cho-lon-husky-golden-samoyed-binh-thanh',
    'cao-long-meo-binh-thanh-gia-bao-nhieu',
    'tam-meo-anh-long-ngan-long-dai-het-nhon-duoi',
    'vat-tuyen-hoi-cho-khi-nao-can',
  ].includes(slug);

  blogUrls.push({
    loc: `${ORIGIN}/bai-viet/${slug}/`,
    priority: isNewFlagship ? '0.85' : '0.7',
    changefreq: 'monthly',
  });
}

const allUrls = [...coreUrls, ...blogUrls];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}\n</urlset>\n`;

fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`Rebuilt public/sitemap.xml: ${allUrls.length} indexable URLs (${excludedNoindex} consolidated noindex scaled pages cleanly excluded).`);
