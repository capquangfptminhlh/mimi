import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://lumipet.vn';
const TODAY = '2026-11-25';
const BLOG_DIR = path.resolve('public', 'bai-viet');

// Clean replacements for 9 SVG placeholders + 5 fragile non-Pexels third-party hotlinks
const fragileImgMap = {
  'cho-chay-dai-sau-khi-di-spa': 'bai-extra-ear-clean.jpg',
  'cho-ho-sau-khi-di-spa': 'bai-extra-golden-shop.jpg',
  'cho-khap-khieng-sau-khi-di-spa': 'bai-vat-tuyen-hoi-cho.jpg',
  'cho-khat-nuoc-sau-khi-di-spa': 'bai-truc-phan-dang-luu.jpg',
  'cho-liem-chan-sau-khi-di-spa': 'bai-extra-bath-rinse.jpg',
  'cho-sung-mat-sau-khi-di-spa': 'bai-extra-shihtzu-clean.jpg',
  'maltese-di-khach-san-can-chuan-bi-gi': 'bai-truc-dinh-bo-linh.jpg',
  'schnauzer-di-khach-san-can-chuan-bi-gi': 'bai-extra-clipper-trim.jpg',
  'spa-cho-binh-thanh-co-nen-dat-lich-truoc': 'bai-truc-phan-xich-long.jpg',
  'cho-met-sau-khi-di-spa': 'bai-cho-meo-con-spa.jpg',
  'khach-san-thu-cung-phong-rieng-hay-phong-chung': 'bai-truc-vinhomes.jpg',
  'meo-lan-dau-di-khach-san-can-luu-y-gi': 'bai-extra-cat-cozy.jpg',
  'meo-so-may-say-khi-grooming': 'bai-spa-meo-khong-long-say.jpg',
  'poodle-di-khach-san-can-chuan-bi-gi': 'bai-gui-meo-cho-tet.jpg',
};

function decodeEntities(s) {
  return (s || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(s) {
  return decodeEntities((s || '').replace(/<[^>]+>/g, ' '));
}

function escapeAttr(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function extractVisibleFaqs(html) {
  const faqs = [];
  const seen = new Set();

  // Pattern 1: <details><summary>Q</summary><p>A</p></details>
  for (const m of html.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi)) {
    const q = stripTags(m[1]);
    const a = stripTags(m[2]);
    if (q && a && !seen.has(q)) {
      seen.add(q);
      faqs.push({ q, a });
    }
  }

  // Pattern 2: <h2 id="faq">...</h2> followed by <h3>Q</h3><p>A</p>
  if (faqs.length === 0) {
    const faqSectionMatch = html.match(/<h2[^>]*id="faq"[^>]*>[\s\S]*?(?=<h2|<section class="blog-cta"|<footer|<\/article>)/i)
      || html.match(/<h2[^>]*>\s*(?:Câu hỏi thường gặp|FAQ)[^<]*<\/h2>[\s\S]*?(?=<h2|<section class="blog-cta"|<footer|<\/article>)/i);
    if (faqSectionMatch) {
      const block = faqSectionMatch[0];
      for (const m of block.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)) {
        const q = stripTags(m[1]);
        const a = stripTags(m[2]);
        if (q && a && !seen.has(q)) {
          seen.add(q);
          faqs.push({ q, a });
        }
      }
    }
  }

  return faqs;
}

const slugs = fs.readdirSync(BLOG_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();

let upgraded = 0;
let skippedNoindex = 0;

for (const slug of slugs) {
  const fp = path.join(BLOG_DIR, slug, 'index.html');
  if (!fs.existsSync(fp)) continue;
  let html = fs.readFileSync(fp, 'utf8');

  if (html.includes('content="noindex')) {
    skippedNoindex++;
    continue;
  }

  const pageUrl = `${ORIGIN}/bai-viet/${slug}/`;

  // 1. Replace fragile third-party hotlinks & SVG placeholders
  if (fragileImgMap[slug]) {
    const localImg = fragileImgMap[slug];
    html = html.replace(
      /(<img\s+[^>]*src=")(?:[^"]+\.svg|https?:\/\/(?!images\.pexels\.com|lumipet\.vn)[^"]+)(")/gi,
      `$1../../images/${localImg}$2`
    );
  }

  // Extract core metadata
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const rawTitle = stripTags(titleMatch ? titleMatch[1] : slug);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const headline = stripTags(h1Match ? h1Match[1] : rawTitle);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  const description = decodeEntities(descMatch ? descMatch[1] : headline);

  // Resolve primary image URL for og:image & Article.image
  let resolvedImage = `${ORIGIN}/images/bai-truc-phan-dang-luu.jpg`;
  const firstImgMatch = html.match(/<img[^>]+src="([^"]+)"/i);
  if (firstImgMatch) {
    const src = firstImgMatch[1];
    if (src.startsWith('http://') || src.startsWith('https://')) {
      resolvedImage = src;
    } else if (src.includes('images/')) {
      const cleanRel = src.replace(/^(\.\.\/)+/, '');
      resolvedImage = `${ORIGIN}/${cleanRel}`;
    }
  } else {
    const ogImgMatch = html.match(/property="og:image"\s+content="([^"]+)"/i);
    if (ogImgMatch) resolvedImage = ogImgMatch[1];
  }

  // Extract existing datePublished if available
  const existingLdMatch = html.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  let datePublished = TODAY;
  if (existingLdMatch) {
    const dpMatch = existingLdMatch[1].match(/"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})"/);
    if (dpMatch) datePublished = dpMatch[1];
  }

  // 2. Ensure AEO Quick-Answer prefix exists
  if (!/Tóm tắt nhanh|Câu trả lời ngắn|Trả lời nhanh|quick-answer|summary-box|tldr/i.test(html)) {
    if (/<p class="article-dek">/.test(html)) {
      html = html.replace(/<p class="article-dek">/, '<p class="article-dek"><strong>Tóm tắt nhanh:</strong> ');
    } else {
      html = html.replace(
        /(<div class="article-prose">)/,
        `$1<p><strong>Tóm tắt nhanh:</strong> ${escapeAttr(description)}</p>`
      );
    }
  }

  // 3. Ensure Local GEO Entity & Official Info Box exists when NAP or hotline is missing
  if (!html.includes('lumi-geo-box') && (!html.includes('27 Võ Trường Toản') || (!html.includes('0989 979 675') && !html.includes('0989979675')))) {
    const geoBox = `<aside class="lumi-geo-box" style="margin:22px 0;padding:16px 18px;border-radius:16px;background:#fffaf3;border:1px solid #ffead7;font-size:14px;line-height:1.65;"><strong>📍 Thông tin địa điểm kiểm chứng (Lumi Pet Bình Thạnh):</strong> Lumi Pet Shop – Spa &amp; Hotel 24/7 tại <strong>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP. Hồ Chí Minh</strong> (cách Chợ Bà Chiểu ~300m). Mở cửa Spa &amp; Shop <strong>08:00 – 21:00</strong> mỗi ngày · Pet Hotel trực trông giữ <strong>24/7</strong> · Hotline/Zalo: <a href="tel:0989979675"><strong>0989 979 675</strong></a>. Giá niêm yết 2026: Tắm chó từ 140k, tắm mèo sấy tay 100% từ 160k, cắt tỉa từ 290k, Pet Hotel từ 100k/ngày — xem <a href="../../bang-gia-spa-thu-cung/">bảng giá chính thức</a> hoặc <a href="../../dat-lich/">đặt lịch trực tuyến</a>.</aside>`;
    if (/<section class="blog-cta"/.test(html)) {
      html = html.replace(/<section class="blog-cta"/, `${geoBox}\n<section class="blog-cta"`);
    } else if (/<h2[^>]*>Bài liên quan/.test(html)) {
      html = html.replace(/<h2[^>]*>Bài liên quan/, `${geoBox}\n$&`);
    } else {
      html = html.replace(/<\/article>/, `${geoBox}</article>`);
    }
  }

  // 4. Extract visible FAQs for 100% synced FAQPage JSON-LD
  let visibleFaqs = extractVisibleFaqs(html);
  if (visibleFaqs.length === 0) {
    // Fallback: never invent unshown FAQs — inject visible FAQ block matching schema
    visibleFaqs = [
      {
        q: 'Lumi Pet Bình Thạnh ở đâu và mở cửa đến mấy giờ?',
        a: 'Lumi Pet tọa lạc tại 27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM. Quầy Spa & Shop mở cửa từ 08:00 – 21:00 mỗi ngày, khu Pet Hotel có nhân viên trực trông giữ 24/7.',
      },
      {
        q: 'Bảng giá Spa & Pet Hotel Lumi Pet 2026 bao nhiêu?',
        a: 'Tắm chó vệ sinh từ 140.000đ – 550.000đ (8 mốc tới 25kg), tắm mèo sấy tay 100% từ 160.000đ – 270.000đ, cắt tỉa chó từ 290.000đ và Pet Hotel 24/7 từ 100.000đ – 250.000đ/ngày. Liên hệ Zalo 0989 979 675.',
      },
    ];
    const faqHtml = `<section class="faq-block"><h2>Câu hỏi thường gặp</h2><div class="faq">${visibleFaqs
      .map((f, idx) => `<details${idx === 0 ? ' open' : ''}><summary>${f.q}</summary><p>${f.a}</p></details>`)
      .join('')}</div></section>`;
    html = html.replace(/<\/article>/, `${faqHtml}</article>`);
  }

  // 5. Build complete unified SEO + GEO + AEO JSON-LD @graph
  const graph = [
    {
      '@type': 'Article',
      headline,
      description,
      inLanguage: 'vi',
      datePublished,
      dateModified: TODAY,
      image: resolvedImage,
      mainEntityOfPage: pageUrl,
      author: {
        '@id': `${ORIGIN}/gioi-thieu/#lead-groomer`,
        '@type': 'Person',
        name: 'Đội ngũ Groomer Lumi Pet Bình Thạnh',
      },
      publisher: {
        '@id': `${ORIGIN}/#business`,
      },
      about: [
        { '@type': 'Thing', name: 'Spa, Grooming & Pet Hotel Bình Thạnh' },
        { '@type': 'Place', name: 'Phường Gia Định, Quận Bình Thạnh, TP. Hồ Chí Minh' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Kiến thức', item: `${ORIGIN}/bai-viet/` },
        { '@type': 'ListItem', position: 3, name: rawTitle, item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: visibleFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  ];

  const ldTag = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;

  // Replace all existing ld+json scripts cleanly with the unified @graph
  if (/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i.test(html)) {
    html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  }

  // Clean & normalize OG / Twitter tags in <head>
  html = html.replace(/<meta\s+property="og:(?:type|title|description|url|image)"[^>]*>\s*/gi, '');
  html = html.replace(/<meta\s+name="twitter:card"[^>]*>\s*/gi, '');

  const ogBlock = [
    `<meta property="og:type" content="article">`,
    `<meta property="og:title" content="${escapeAttr(rawTitle)}">`,
    `<meta property="og:description" content="${escapeAttr(description)}">`,
    `<meta property="og:url" content="${pageUrl}">`,
    `<meta property="og:image" content="${escapeAttr(resolvedImage)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    ldTag,
  ].join('\n  ');

  html = html.replace(/<\/head>/i, `  ${ogBlock}\n</head>`);

  fs.writeFileSync(fp, html, 'utf8');
  upgraded++;
}

console.log(`Upgraded ${upgraded} indexable blog articles to 100% SEO + GEO + AEO standard (${skippedNoindex} consolidated noindex pages untouched).`);
