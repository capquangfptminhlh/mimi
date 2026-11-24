import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const BLOG_INDEX = path.join(PUBLIC_DIR, 'bai-viet', 'index.html');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const ORIGIN = 'https://lumipet.vn';
const TODAY = '2026-11-24';

// 1. Update public/bai-viet/index.html (CollectionPage + ItemList + feature 4 new AEO/GEO articles)
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
        { '@type': 'ListItem', position: 1, name: 'Khảo sát bảng giá Spa thú cưng Bình Thạnh 2026', url: `${ORIGIN}/bai-viet/khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026/` },
        { '@type': 'ListItem', position: 2, name: 'Spa chó mèo mở cửa tối đến 21h tại Bình Thạnh', url: `${ORIGIN}/bai-viet/spa-cho-meo-mo-cua-toi-binh-thanh/` },
        { '@type': 'ListItem', position: 3, name: 'Spa mèo không dùng lồng sấy tại Bình Thạnh', url: `${ORIGIN}/bai-viet/spa-meo-khong-dung-long-say-binh-thanh/` },
        { '@type': 'ListItem', position: 4, name: 'Gửi mèo chó dịp Tết Bình Thạnh: Kinh nghiệm & Đặt phòng', url: `${ORIGIN}/bai-viet/gui-meo-cho-dip-tet-binh-thanh/` },
        { '@type': 'ListItem', position: 5, name: 'Spa chó Bình Thạnh giá bao nhiêu?', url: `${ORIGIN}/bai-viet/spa-cho-binh-thanh-gia-bao-nhieu/` },
        { '@type': 'ListItem', position: 6, name: 'Khách sạn thú cưng Bình Thạnh giá bao nhiêu?', url: `${ORIGIN}/bai-viet/khach-san-thu-cung-binh-thanh-gia-bao-nhieu/` },
      ],
    },
  },
  null,
  2
)}\n</script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, newSchema);

const newCards = `<section><h2>Mới cập nhật (AEO &amp; Dữ liệu 2026)</h2><div class="blog-grid">
<a class="blog-card" href="./khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026/"><img src="../images/bang-gia-spa-grooming-lumi-pet.jpg" alt="Khảo sát bảng giá Spa thú cưng Bình Thạnh 2026" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Báo cáo 2026 · Dữ liệu Giá</span><h2>Khảo sát bảng giá Spa thú cưng Bình Thạnh 2026</h2><p>Phân tích 8 phân khúc cân nặng chó (140k–850k), 3 phân khúc mèo (160k–380k) và bóc tách 5 khoản phụ phí phổ biến.</p></div></a>
<a class="blog-card" href="./spa-cho-meo-mo-cua-toi-binh-thanh/"><div class="blog-card-body"><span class="blog-card-tag">Spa Bình Thạnh · Khung giờ tối</span><h2>Spa chó mèo mở cửa tối đến 21h tại Bình Thạnh</h2><p>Hướng dẫn đặt ca tắm sau giờ tan làm, không phụ thu giờ tối và cam kết sấy tay khô 100% tránh cảm lạnh.</p></div></a>
<a class="blog-card" href="./spa-meo-khong-dung-long-say-binh-thanh/"><div class="blog-card-body"><span class="blog-card-tag">Spa Mèo · An toàn</span><h2>Spa mèo không dùng lồng sấy tại Bình Thạnh</h2><p>Vì sao sấy tay bằng máy ion giảm ồn ở khu riêng giúp mèo tránh stress và sốc nhiệt so với lồng sấy kín.</p></div></a>
<a class="blog-card" href="./gui-meo-cho-dip-tet-binh-thanh/"><div class="blog-card-body"><span class="blog-card-tag">Pet Hotel 24/7 · Lễ Tết</span><h2>Gửi mèo chó dịp Tết Bình Thạnh: 5 kinh nghiệm cần biết</h2><p>Nên chốt phòng trước bao lâu, checklist tiêm ngừa, đồ mang theo và cam kết trực 24/7 gửi video mỗi ngày.</p></div></a>
<a class="blog-card" href="./cho-so-cat-mong-khi-grooming/"><img src="https://images.pexels.com/photos/19145872/pexels-photo-19145872.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400" alt="Groomer đang cắt móng cho chó tại bàn grooming" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Hành vi · Grooming · Problem/Solution</span><h2>Chó sợ cắt móng khi grooming: làm sao bớt stress?</h2><p>Dấu hiệu stress, cách làm quen từng bước và khi nào nên dừng thay vì ép giữ.</p></div></a>
<a class="blog-card" href="./golden-retriever-di-khach-san-can-chuan-bi-gi/"><img src="https://images.pexels.com/photos/33145687/pexels-photo-33145687.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400" alt="Golden Retriever ngồi trong nhà, minh họa chuẩn bị trước khi gửi Pet Hotel" loading="lazy"><div class="blog-card-body"><span class="blog-card-tag">Pet Hotel · Golden Retriever · Breed-specific</span><h2>Golden Retriever đi khách sạn cần chuẩn bị gì?</h2><p>Checklist sức khỏe, khẩu phần, vận động, hành vi và bộ lông kép trước khi boarding.</p></div></a>
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
  { loc: `${ORIGIN}/bang-gia-spa-thu-cung/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-cho-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/tam-meo-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/cat-tia-long-cho-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
  { loc: `${ORIGIN}/khach-san-thu-cung-phuong-gia-dinh/`, priority: '0.95', changefreq: 'weekly' },
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
    'khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026',
    'spa-cho-meo-mo-cua-toi-binh-thanh',
    'spa-meo-khong-dung-long-say-binh-thanh',
    'gui-meo-cho-dip-tet-binh-thanh',
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
