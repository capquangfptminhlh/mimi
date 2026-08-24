(() => {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ZALO_URL = 'https://zalo.me/0989979675';

  const style = document.createElement('style');
  style.textContent = `
    .lumi-page-transition{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:rgba(255,255,255,.94);backdrop-filter:blur(12px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,visibility .22s ease}
    .lumi-page-transition.is-active{opacity:1;visibility:visible;pointer-events:auto}
    .lumi-paw-loader{display:flex;align-items:center;gap:10px;padding:20px 24px;border:1px solid #ffedd5;border-radius:28px;background:#fff;box-shadow:0 24px 70px rgba(124,45,18,.15)}
    .lumi-paw-loader span{display:block;font-size:32px;line-height:1;transform:translateY(5px) scale(.72);opacity:.28;animation:lumiPawStep .72s ease-in-out infinite}
    .lumi-paw-loader span:nth-child(2){animation-delay:.12s}.lumi-paw-loader span:nth-child(3){animation-delay:.24s}
    @keyframes lumiPawStep{0%,100%{transform:translateY(6px) scale(.72) rotate(-8deg);opacity:.28}45%{transform:translateY(-4px) scale(1.08) rotate(5deg);opacity:1}70%{transform:translateY(0) scale(.92);opacity:.7}}
    .lumi-reveal{opacity:0;transform:translateY(22px) scale(.985);transition:opacity .62s cubic-bezier(.2,.8,.2,1),transform .62s cubic-bezier(.2,.8,.2,1)}
    .lumi-reveal.is-visible{opacity:1;transform:none}
    .lumi-contact-rail{position:fixed;right:16px;bottom:18px;z-index:80;display:flex;flex-direction:column;gap:10px;font-family:inherit}
    .lumi-contact-rail a{display:flex;align-items:center;justify-content:center;gap:8px;min-width:126px;padding:12px 15px;border-radius:999px;text-decoration:none;color:#fff;font-size:13px;font-weight:900;box-shadow:0 14px 36px rgba(15,23,42,.18);transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}
    .lumi-contact-rail a:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 18px 42px rgba(15,23,42,.22);filter:saturate(1.08)}
    .lumi-contact-call{background:#10b981}.lumi-contact-zalo{background:#0068ff}.lumi-contact-icon{font-size:16px;line-height:1}
    .lumi-mobile-toggle{display:none;width:44px;height:44px;border:1px solid #fed7aa;border-radius:14px;background:#fff;color:#334155;font-size:22px;font-weight:900;cursor:pointer;box-shadow:0 7px 18px rgba(15,23,42,.06);transition:transform .2s ease,background .2s ease}
    .lumi-mobile-nav{display:none;border-top:1px solid #ffead7;background:#fff;padding:10px 16px 16px;box-shadow:0 18px 34px rgba(15,23,42,.08)}
    .lumi-mobile-nav a{display:block;padding:12px 14px;border-radius:12px;color:#475569;text-decoration:none;font-weight:800;transition:background .2s ease,color .2s ease,transform .2s ease}
    .lumi-mobile-nav a:hover{background:#fff7ed;color:#ea580c}.lumi-mobile-nav .lumi-mobile-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;padding-top:10px;border-top:1px solid #ffead7}.lumi-mobile-nav .call{background:#ecfdf5;color:#047857;text-align:center}.lumi-mobile-nav .zalo{background:#eff6ff;color:#0068ff;text-align:center}
    .lumi-hero-visual{position:relative;margin-top:20px;overflow:hidden;border-radius:22px;border:1px solid #ffead7;background:#f8fafc;box-shadow:0 12px 30px rgba(15,23,42,.08)}
    .lumi-hero-visual img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
    .lumi-hero-visual:hover img{transform:scale(1.045)}
    .lumi-hero-visual figcaption{position:absolute;left:12px;bottom:12px;padding:7px 10px;border-radius:999px;background:rgba(15,23,42,.76);color:#fff;font-size:11px;font-weight:800;backdrop-filter:blur(8px)}
    .btn:active,.nav-cta:active,.lumi-contact-rail a:active,.lumi-mobile-nav a:active,.lumi-mobile-toggle:active{transform:scale(.96)}
    @media(max-width:850px){.lumi-mobile-toggle{display:grid;place-items:center}.lumi-mobile-nav.is-open{display:block;animation:lumiMenuIn .24s ease both}@keyframes lumiMenuIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}}
    @media(max-width:640px){.lumi-contact-rail{right:10px;bottom:84px;gap:8px}.lumi-contact-rail a{min-width:48px;width:48px;height:48px;padding:0;border-radius:16px}.lumi-contact-label{display:none}.lumi-hero-visual{border-radius:18px}}
    @media(prefers-reduced-motion:reduce){.lumi-paw-loader span{animation:none}.lumi-reveal{opacity:1;transform:none;transition:none}.lumi-page-transition{transition:none}.lumi-hero-visual img{transition:none}}
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'lumi-page-transition';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="lumi-paw-loader" aria-label="Đang chuyển trang"><span>🐾</span><span>🐾</span><span>🐾</span></div>';
  document.body.appendChild(overlay);

  const rail = document.createElement('div');
  rail.className = 'lumi-contact-rail';
  rail.setAttribute('aria-label', 'Liên hệ nhanh Lumi Pet');
  rail.innerHTML = `
    <a class="lumi-contact-call" href="tel:0989979675" aria-label="Gọi Lumi Pet 0989 979 675"><span class="lumi-contact-icon">☎</span><span class="lumi-contact-label">Gọi ngay</span></a>
    <a class="lumi-contact-zalo" href="${ZALO_URL}" target="_blank" rel="noopener noreferrer" aria-label="Nhắn Lumi Pet qua Zalo"><span class="lumi-contact-icon">Z</span><span class="lumi-contact-label">Nhắn Zalo</span></a>
  `;
  document.body.appendChild(rail);

  const enhanceStaticNav = () => {
    const header = document.querySelector('.lumi-top');
    const inner = header?.querySelector('.lumi-top-inner');
    const nav = inner?.querySelector('.main-nav');
    if (!header || !inner || !nav || header.querySelector('.lumi-mobile-toggle')) return;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'lumi-mobile-toggle';
    toggle.setAttribute('aria-label', 'Mở menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';

    const mobile = document.createElement('nav');
    mobile.className = 'lumi-mobile-nav';
    mobile.setAttribute('aria-label', 'Điều hướng mobile');
    mobile.innerHTML = `${nav.innerHTML}<div class="lumi-mobile-actions"><a class="call" href="tel:0989979675">☎ Gọi ngay</a><a class="zalo" href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">Z Nhắn Zalo</a></div>`;

    toggle.addEventListener('click', () => {
      const open = mobile.classList.toggle('is-open');
      toggle.textContent = open ? '×' : '☰';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    });

    inner.appendChild(toggle);
    header.appendChild(mobile);
  };

  const addHeroVisual = () => {
    const side = document.querySelector('.hero-side');
    if (!side || side.querySelector('.lumi-hero-visual')) return;
    const path = location.pathname.toLowerCase();
    let src = 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000&auto=format&fit=crop&q=82';
    let alt = 'Ảnh minh hoạ thú cưng tại dịch vụ Lumi Pet';
    if (path.includes('hotel') || path.includes('khach-san') || path.includes('dat-phong')) {
      src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1000&auto=format&fit=crop&q=82';
      alt = 'Ảnh minh hoạ khu lưu trú thú cưng';
    } else if (path.includes('groom') || path.includes('spa') || path.includes('dat-lich')) {
      src = 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1000&auto=format&fit=crop&q=82';
      alt = 'Ảnh minh hoạ chăm sóc và grooming thú cưng';
    } else if (path.includes('lien-he') || path.includes('gioi-thieu')) {
      src = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1000&auto=format&fit=crop&q=82';
      alt = 'Ảnh minh hoạ thú cưng';
    }
    const figure = document.createElement('figure');
    figure.className = 'lumi-hero-visual';
    figure.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" decoding="async"><figcaption>Ảnh minh hoạ</figcaption>`;
    side.appendChild(figure);
  };

  enhanceStaticNav();
  addHeroVisual();

  let revealObserver;
  const prepareReveals = () => {
    const nodes = document.querySelectorAll('main section, .panel, .hero-copy, .hero-side, .price-box, .feature-list li, .price-table, form');
    nodes.forEach((node, index) => {
      if (node.classList.contains('lumi-reveal')) return;
      node.classList.add('lumi-reveal');
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
      if (REDUCED) node.classList.add('is-visible');
      else revealObserver?.observe(node);
    });
  };

  if (!REDUCED && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .10, rootMargin: '0px 0px -24px 0px' });
  }

  prepareReveals();
  window.setTimeout(prepareReveals, 120);
  window.setTimeout(prepareReveals, 600);

  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
    const raw = anchor.getAttribute('href') || '';
    if (!raw || raw.startsWith('#') || raw.startsWith('tel:') || raw.startsWith('mailto:') || raw.startsWith('javascript:')) return;

    let url;
    try { url = new URL(anchor.href, location.href); } catch { return; }
    if (url.origin !== location.origin || url.href === location.href) return;

    event.preventDefault();
    if (REDUCED) {
      location.href = url.href;
      return;
    }
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    window.setTimeout(() => { location.href = url.href; }, 430);
  }, true);

  window.addEventListener('pageshow', () => {
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
  });
})();
