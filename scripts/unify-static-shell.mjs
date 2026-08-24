import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else if (entry.isFile() && entry.name === 'index.html') files.push(absolute);
  }
  return files;
}

function prefixFor(relativeFile) {
  const dir = path.posix.dirname(relativeFile.replaceAll(path.sep, '/'));
  if (dir === '.') return './';
  const depth = dir.split('/').filter(Boolean).length;
  return '../'.repeat(depth);
}

function currentKey(relativeFile) {
  const normalized = relativeFile.replaceAll(path.sep, '/').toLowerCase();
  if (normalized.includes('spa-thu-cung-binh-thanh')) return 'spa';
  if (normalized.includes('khach-san-thu-cung-binh-thanh')) return 'hotel';
  if (normalized.includes('bang-gia-spa-thu-cung')) return 'price';
  if (normalized.includes('gioi-thieu')) return 'about';
  if (normalized.includes('lien-he')) return 'contact';
  if (normalized.includes('bai-viet')) return 'blog';
  return '';
}

const iconPhone = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z"/></svg>';
const iconMessage = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>';
const iconCalendar = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/></svg>';

function headerMarkup(prefix, activeKey) {
  const nav = [
    ['Spa', 'spa-thu-cung-binh-thanh/', 'spa'],
    ['Hotel', 'khach-san-thu-cung-binh-thanh/', 'hotel'],
    ['Bảng giá', 'bang-gia-spa-thu-cung/', 'price'],
    ['Giới thiệu', 'gioi-thieu/', 'about'],
    ['Liên hệ', 'lien-he/', 'contact'],
    ['Kiến thức', 'bai-viet/', 'blog'],
  ].map(([label, href, key]) => `<a href="${prefix}${href}"${activeKey === key ? ' aria-current="page"' : ''}${key === 'blog' ? ' data-lumi-blog-link="true"' : ''}>${label}</a>`).join('');

  return `<header class="lumi-top lumi-unified-header" data-lumi-unified-header="true"><div class="lumi-top-inner"><a class="lumi-brand" href="${prefix}" aria-label="Lumi Pet - Trang chủ"><img class="lumi-brand-mark" src="${prefix}lumi-brand-mark.svg" alt="" aria-hidden="true"><span class="lumi-brand-copy"><strong>Lumi Pet</strong><small>Spa & Hotel 24/7</small></span></a><nav class="main-nav" aria-label="Điều hướng chính">${nav}</nav><div class="lumi-header-actions"><a class="lumi-header-action lumi-header-call lumi-desktop-action" href="tel:0989979675">${iconPhone}<span>Gọi ngay</span></a><a class="lumi-header-action lumi-header-zalo lumi-desktop-action" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">${iconMessage}<span>Zalo</span></a><a class="lumi-header-action lumi-header-book" href="${prefix}dat-lich/">${iconCalendar}<span>Đặt lịch</span></a><button type="button" class="lumi-mobile-toggle" aria-label="Mở menu" aria-expanded="false">☰</button></div></div><nav class="lumi-mobile-nav" aria-label="Điều hướng mobile">${nav}<div class="lumi-mobile-actions"><a class="call" href="tel:0989979675">Gọi</a><a class="zalo" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Zalo</a><a class="book" href="${prefix}dat-lich/">Đặt lịch</a></div></nav></header>`;
}

const files = await walk(DIST);
let updated = 0;

for (const file of files) {
  const relative = path.relative(DIST, file);
  if (relative.replaceAll(path.sep, '/') === 'index.html') continue; // React homepage owns its own header.

  let html = await readFile(file, 'utf8');
  if (!/<header\s+class="lumi-top"[\s\S]*?<\/header>/.test(html)) continue;

  const prefix = prefixFor(relative);
  const shellCss = `<link rel="stylesheet" href="${prefix}lumi-shell.css">`;
  if (!html.includes('lumi-shell.css')) html = html.replace('</head>', `${shellCss}</head>`);

  html = html.replace(/<header\s+class="lumi-top"[\s\S]*?<\/header>/, headerMarkup(prefix, currentKey(relative)));
  await writeFile(file, html, 'utf8');
  updated += 1;
}

if (updated === 0) throw new Error('Unified static shell did not update any page.');
console.log(`Unified Lumi Pet header written to ${updated} static page(s).`);
