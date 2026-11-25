import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://lumipet.vn';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORT_DIR = path.resolve(__dirname, '..', 'reports');

const FORBIDDEN = [
  /capquangfptminhlh\.github\.io/i,
  /fast-track/i,
  /02 suất/i,
  /khai trương chi nhánh/i,
  /giảm 20%/i,
  /đặc quyền 90\.000/i,
];

const CORE_AND_WARD_PAGES = [
  { path: '/', needFaq: false },
  { path: '/spa-thu-cung-binh-thanh/', needFaq: true },
  { path: '/grooming-cho-meo-binh-thanh/', needFaq: true },
  { path: '/khach-san-thu-cung-binh-thanh/', needFaq: true },
  { path: '/khach-san-thu-cung-tet-binh-thanh/', needFaq: true },
  { path: '/spa-cho-meo-don-noel-tet-binh-thanh/', needFaq: true },
  { path: '/bang-gia-spa-thu-cung/', needFaq: true },
  { path: '/tam-cho-phuong-gia-dinh/', needFaq: true },
  { path: '/tam-meo-phuong-gia-dinh/', needFaq: true },
  { path: '/cat-tia-long-cho-phuong-gia-dinh/', needFaq: true },
  { path: '/khach-san-thu-cung-phuong-gia-dinh/', needFaq: true },
  { path: '/spa-thu-cung-phuong-binh-thanh/', needFaq: true },
  { path: '/spa-thu-cung-phuong-binh-loi-trung/', needFaq: true },
  { path: '/spa-thu-cung-phuong-thanh-my-tay/', needFaq: true },
  { path: '/spa-thu-cung-phuong-binh-quoi/', needFaq: true },
  { path: '/spa-thu-cung-phuong-cau-kieu-phu-nhuan/', needFaq: true },
  { path: '/spa-thu-cung-phuong-duc-nhuan-phu-nhuan/', needFaq: true },
  { path: '/spa-thu-cung-phuong-phu-nhuan/', needFaq: true },
  { path: '/spa-thu-cung-phuong-tan-dinh-quan-1/', needFaq: true },
  { path: '/spa-thu-cung-phuong-sai-gon-quan-1/', needFaq: true },
  { path: '/spa-thu-cung-phuong-hanh-thong-go-vap/', needFaq: true },
  { path: '/spa-thu-cung-phuong-an-nhon-go-vap/', needFaq: true },
  { path: '/spa-thu-cung-phuong-an-khanh-thao-dien/', needFaq: true },
  { path: '/spa-thu-cung-quan-phu-nhuan/', needFaq: true },
  { path: '/spa-thu-cung-quan-1/', needFaq: true },
  { path: '/spa-thu-cung-quan-go-vap/', needFaq: true },
  { path: '/spa-thu-cung-quan-2-thao-dien/', needFaq: true },
  { path: '/spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/', needFaq: true },
  { path: '/dat-lich/', needFaq: false },
  { path: '/dat-phong/', needFaq: false },
  { path: '/gioi-thieu/', needFaq: true },
  { path: '/lien-he/', needFaq: true },
  { path: '/bai-viet/', needFaq: false },
];

const FEEDS = [
  '/sitemap.xml',
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
  '/c8f4a2e9b1d7403e9a5c6f2d8b1e4a70.txt',
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    https
      .get(url, { headers: { 'User-Agent': 'LumiPet-Weekly-SEO-Check/1.0' } }, (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            ms: Date.now() - t0,
            headers: res.headers,
            body,
          });
        });
      })
      .on('error', reject);
  });
}

async function main() {
  const dateStr = new Date().toISOString().slice(0, 10);
  const rows = [];
  let passCount = 0;
  let failCount = 0;

  console.log(`\n=== LUMI PET WEEKLY SEO · AEO · GEO HEALTH CHECK (${dateStr}) ===\n`);

  for (const item of CORE_AND_WARD_PAGES) {
    const fullUrl = `${ORIGIN}${item.path}?seo_check=${Date.now()}`;
    try {
      const r = await fetchUrl(fullUrl);
      const title = ((r.body.match(/<title>([^<]+)<\/title>/i) || [])[1] || '').replaceAll('&amp;', '&');
      const desc = ((r.body.match(/<meta name="description" content="([^"]+)"/i) || [])[1] || '').replaceAll('&amp;', '&');
      const hasLB = r.body.includes('LocalBusiness');
      const hasFaq = !item.needFaq || r.body.includes('FAQPage');
      const hasOg = r.body.includes('property="og:image"');
      const titleOk = title.length > 15 && title.length <= 62;
      const descOk = desc.length >= 130 && desc.length <= 160;
      const forbiddenHits = FORBIDDEN.filter((re) => re.test(r.body)).map((re) => re.source);

      const ok = r.status === 200 && titleOk && descOk && hasLB && hasFaq && hasOg && forbiddenHits.length === 0;
      if (ok) passCount++;
      else failCount++;

      const statusLabel = ok ? 'PASS' : 'FAIL';
      console.log(
        `[${statusLabel}] ${item.path.padEnd(42)} | HTTP ${r.status} | ${String(r.ms).padStart(4)}ms | T:${title.length}c | D:${desc.length}c | LB:${hasLB} | FAQ:${hasFaq}`
      );
      if (!ok && forbiddenHits.length) console.error('   Forbidden:', forbiddenHits);

      rows.push(
        `| \`${item.path}\` | ${ok ? '✅ PASS' : '❌ FAIL'} | ${r.status} | ${r.ms}ms | ${title.length}c | ${desc.length}c | ${hasLB ? '✓' : '✗'} | ${hasFaq ? '✓' : '✗'} |`
      );
    } catch (err) {
      failCount++;
      console.error(`[ERR ] ${item.path}:`, err.message);
      rows.push(`| \`${item.path}\` | ❌ ERR | — | — | — | — | — | — |`);
    }
  }

  console.log('\n--- Technical & GEO Feeds ---');
  const feedRows = [];
  for (const f of FEEDS) {
    try {
      const r = await fetchUrl(`${ORIGIN}${f}?seo_check=${Date.now()}`);
      let detail = `${r.body.length} bytes`;
      if (f === '/sitemap.xml') {
        const count = (r.body.match(/<loc>/g) || []).length;
        detail = `${count} URLs`;
      }
      const ok = r.status === 200 && r.body.length > 20;
      if (ok) passCount++;
      else failCount++;
      console.log(`[${ok ? 'PASS' : 'FAIL'}] ${f.padEnd(42)} | HTTP ${r.status} | ${String(r.ms).padStart(4)}ms | ${detail}`);
      feedRows.push(`| \`${f}\` | ${ok ? '✅ PASS' : '❌ FAIL'} | ${r.status} | ${r.ms}ms | ${detail} |`);
    } catch (err) {
      failCount++;
      console.error(`[ERR ] ${f}:`, err.message);
      feedRows.push(`| \`${f}\` | ❌ ERR | — | — | ${err.message} |`);
    }
  }

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const reportFile = path.join(REPORT_DIR, `seo-health-${dateStr}.md`);
  const md = `# Báo cáo Sức khỏe SEO · AEO · GEO — lumipet.vn (${dateStr})

- **Tổng kết:** **${passCount}/${passCount + failCount} PASS** · **${failCount} FAIL**
- **Thời điểm kiểm tra:** ${new Date().toLocaleString('vi-VN')}

## 1. Trang Lõi & 9 Trang Phường Mới / Quận Cũ
| Đường dẫn | Trạng thái | HTTP | TTFB | Title | Desc | LocalBusiness | FAQPage |
| :--- | :---: | :-: | :-: | :-: | :-: | :-: | :-: |
${rows.join('\n')}

## 2. Feeds Kỹ thuật & GEO / AI Search
| File | Trạng thái | HTTP | TTFB | Ghi chú |
| :--- | :---: | :-: | :-: | :--- |
${feedRows.join('\n')}
`;

  fs.writeFileSync(reportFile, md, 'utf8');
  console.log(`\n=== DONE: ${passCount}/${passCount + failCount} PASSED | Report saved: ${reportFile} ===\n`);
  process.exit(failCount === 0 ? 0 : 1);
}

main();
