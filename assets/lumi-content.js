(() => {
  'use strict';
  const d = document;
  const b = d.body;
  const base = b.dataset.base || '.';
  const page = b.dataset.page || '';
  const U = (p = '') => `${base}/${p}`;
  const atlas = 'https://capquangfptminhlh.github.io/mimi/assets/photos/lumi-atlas.webp?v=20260817-2';
  const slots = {
    'hero.svg': '0% 0%',
    'spa.svg': '33.333% 0%',
    'grooming.svg': '66.667% 0%',
    'hotel.svg': '100% 0%',
    'shop.svg': '0% 50%',
    'care-journey.svg': '33.333% 50%',
    'spa-detail.svg': '66.667% 50%',
    'grooming-detail.svg': '100% 50%',
    'hotel-detail.svg': '0% 100%',
    'shop-detail.svg': '33.333% 100%',
    'lobby.svg': '66.667% 100%',
    'trust-lobby.svg': '100% 100%'
  };

  const logo = `<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 15c-2.5-1.4-3.5-5.5-.4-7.1 2.1-1.1 4.4.7 4.8 3.2M25 15c2.5-1.4 3.5-5.5.4-7.1-2.1-1.1-4.4.7-4.8 3.2"/><path d="M9.5 13.3c1.5-2.7 4-4.1 6.5-4.1s5 1.4 6.5 4.1c2.2 4 1 10.7-6.5 10.7S7.3 17.3 9.5 13.3Z"/><circle cx="13" cy="16" r="1.1" fill="currentColor" stroke="none"/><circle cx="19" cy="16" r="1.1" fill="currentColor" stroke="none"/><path d="M14 19c1.2 1.1 2.8 1.1 4 0" stroke-linecap="round"/></svg></span><span class="brand-copy"><strong>Lumi Pet</strong><small>BÌNH THẠNH</small></span>`;

  const activeFor = (name) => page === name ? ' class="active" aria-current="page"' : '';
  const nav = `<header class="top"><div class="container nav"><a class="brand" href="${U('')}" aria-label="Lumi Pet Bình Thạnh - Trang chủ">${logo}</a><nav class="links" id="links" aria-label="Điều hướng chính"><a${activeFor('spa')} href="${U('spa-thu-cung-binh-thanh/')}">Spa</a><a${activeFor('grooming')} href="${U('grooming-cho-meo-binh-thanh/')}">Grooming</a><a${activeFor('hotel')} href="${U('pet-hotel-binh-thanh/')}">Pet Hotel</a><a${activeFor('shop')} href="${U('pet-shop-binh-thanh/')}">Pet Shop</a><a${activeFor('price')} href="${U('bang-gia/')}">Bảng giá</a><a${activeFor('faq')} href="${U('faq/')}">FAQ</a><a${activeFor('contact')} href="${U('lien-he/')}">Liên hệ</a></nav><button class="hamb" id="hamb" type="button" aria-label="Mở menu" aria-controls="links" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><a class="btn primary nav-book" href="${U('dat-lich/')}">Đặt lịch ngay</a></div></header>`;

  const bottom = `<nav class="bottom-nav" aria-label="Điều hướng di động"><a href="${U('')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 11 9-8 9 8v10h-6v-6H9v6H3V11Z"/></svg><span>Trang chủ</span></a><a${page==='spa'?' class="active"':''} href="${U('spa-thu-cung-binh-thanh/')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14l-1 6H6l-1-6Z"/><path d="M8 12c0-2 1.6-3.5 4-3.5S16 10 16 12"/></svg><span>Spa</span></a><a class="booking${page==='booking'?' active':''}" href="${U('dat-lich/')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg><span>Đặt lịch</span></a><a${page==='shop'?' class="active"':''} href="${U('pet-shop-binh-thanh/')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg><span>Pet Shop</span></a><a${page==='contact'?' class="active"':''} href="${U('lien-he/')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Liên hệ</span></a></nav>`;

  const foot = `<footer class="footer"><div class="footer-grid"><div><a class="brand" href="${U('')}">${logo}</a><p>Chăm sóc thú cưng & gửi yêu cầu dịch vụ tại Bình Thạnh.</p></div><div><h4>Dịch vụ</h4><a href="${U('spa-thu-cung-binh-thanh/')}">Spa & Tắm</a><a href="${U('grooming-cho-meo-binh-thanh/')}">Grooming</a><a href="${U('pet-hotel-binh-thanh/')}">Pet Hotel</a></div><div><h4>Khám phá</h4><a href="${U('pet-shop-binh-thanh/')}">Pet Shop</a><a href="${U('bang-gia/')}">Bảng giá</a><a href="${U('faq/')}">FAQ</a></div><div><h4>Liên hệ</h4><a href="tel:+84989979675">0989 979 675</a><span>27 Võ Trường Toản, Phường Gia Định, TP.HCM</span><a href="${U('dat-lich/')}">Gửi yêu cầu đặt lịch →</a></div></div><div class="footnote">Giá, tồn kho, lịch và điều kiện dịch vụ chỉ chính thức sau khi Lumi xác nhận.</div></footer>${bottom}`;

  const navHost = d.getElementById('site-nav');
  const footHost = d.getElementById('site-footer');
  if (navHost) navHost.innerHTML = nav;
  if (footHost) footHost.innerHTML = foot;
  const hamb = d.getElementById('hamb');
  const links = d.getElementById('links');
  if (hamb && links) {
    hamb.onclick = () => {
      const open = links.classList.toggle('open');
      hamb.setAttribute('aria-expanded', String(open));
    };
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      hamb.setAttribute('aria-expanded', 'false');
    }));
  }

  function aspectFor(img) {
    if (img.closest('.hero-art')) return '5 / 3';
    if (img.closest('.page-hero')) return '4 / 3';
    if (img.closest('.panel')) return '16 / 10';
    if (img.closest('.card')) return '4 / 3';
    return '4 / 3';
  }

  function upgrade(root = d) {
    root.querySelectorAll('img').forEach((img) => {
      if (img.dataset.lumiPhoto === '1') return;
      const name = (img.getAttribute('src') || '').split('/').pop()?.split('?')[0];
      const pos = slots[name];
      if (!pos) return;
      const photo = d.createElement('div');
      photo.className = `lumi-generated-photo${img.className ? ` ${img.className}` : ''}`;
      photo.dataset.lumiPhoto = '1';
      photo.dataset.slot = name;
      photo.style.cssText = [`display:block`,`width:100%`,`aspect-ratio:${aspectFor(img)}`,`background-image:url("${atlas}")`,'background-size:400% 300%',`background-position:${pos}`,'background-repeat:no-repeat','background-color:#eaf2ed','filter:saturate(.98) contrast(1.02)','overflow:hidden'].join(';');
      const alt = (img.getAttribute('alt') || '').trim();
      if (alt) { photo.setAttribute('role','img'); photo.setAttribute('aria-label',alt); } else photo.setAttribute('aria-hidden','true');
      img.replaceWith(photo);
    });
  }

  const iconMap = {
    dog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 8 4 5v6M17 8l3-3v6"/><path d="M6 10c0-4 12-4 12 0v5c0 4-12 4-12 0v-5Z"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><path d="M10 15h4"/></svg>',
    cat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 8-1-5 5 3h4l5-3-1 5v7c0 4-12 4-12 0V8Z"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><path d="M10 15h4"/></svg>',
    treat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 8c-2-2-5 1-3 3l2 1-2 1c-2 2 1 5 3 3l10-8c2-2-1-5-3-3l-1 2-1-2c-2-2-5 1-3 3"/></svg>',
    care:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3h6v4H9zM7 7h10l1 14H6L7 7Z"/><path d="M9 12h6M10 16h4"/></svg>',
    toy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M7 8c4 2 6 6 7 11M17 7c-4 2-6 6-7 11"/></svg>',
    acc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 9c4-4 10-4 14 0l-2 8H7L5 9Z"/><path d="M9 7v10M15 7v10"/></svg>'
  };
  d.querySelectorAll('[data-product]').forEach(card => {
    const ico = card.querySelector('.ico');
    if (ico && iconMap[card.dataset.catval]) ico.innerHTML = iconMap[card.dataset.catval];
  });

  upgrade();
  const observer = new MutationObserver(() => upgrade());
  observer.observe(d.getElementById('app') || d.documentElement, { childList: true, subtree: true });
})();
