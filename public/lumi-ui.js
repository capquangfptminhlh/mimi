(() => {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ZALO_URL = 'https://zalo.me/0989979675';
  const UI_SCRIPT_URL = document.currentScript?.src ? new URL(document.currentScript.src) : null;
  const ROOT_URL = UI_SCRIPT_URL ? new URL('.', UI_SCRIPT_URL) : new URL('/', location.origin);
  const rootHref = (path = '') => new URL(path, ROOT_URL).href;
  const BRAND_MARK = rootHref('lumi-brand-mark.svg');

  const TOPIC_IMAGES = {
    spa: 'https://images.pexels.com/photos/6131161/pexels-photo-6131161.jpeg?auto=compress&cs=tinysrgb&w=1400',
    grooming: 'https://images.pexels.com/photos/6816844/pexels-photo-6816844.jpeg?auto=compress&cs=tinysrgb&w=1400',
    hotel: 'https://images.pexels.com/photos/7635904/pexels-photo-7635904.jpeg?auto=compress&cs=tinysrgb&w=1400'
  };

  const style = document.createElement('style');
  style.textContent = `
    .lumi-page-transition{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:rgba(255,255,255,.94);backdrop-filter:blur(12px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,visibility .22s ease}
    .lumi-page-transition.is-active{opacity:1;visibility:visible;pointer-events:auto}
    .lumi-paw-loader{display:flex;align-items:center;gap:10px;padding:20px 24px;border:1px solid #ffedd5;border-radius:28px;background:#fff;box-shadow:0 24px 70px rgba(124,45,18,.15)}
    .lumi-paw-loader span{display:block;font-size:32px;line-height:1;transform:translateY(5px) scale(.72);opacity:.28;animation:lumiPawStep .72s ease-in-out infinite}
    .lumi-paw-loader span:nth-child(2){animation-delay:.12s}.lumi-paw-loader span:nth-child(3){animation-delay:.24s}
    @keyframes lumiPawStep{0%,100%{transform:translateY(6px) scale(.72) rotate(-8deg);opacity:.28}45%{transform:translateY(-4px) scale(1.08) rotate(5deg);opacity:1}70%{transform:translateY(0) scale(.92);opacity:.7}}

    .lumi-top{z-index:50!important;background:rgba(255,255,255,.95)!important;backdrop-filter:blur(20px)!important}
    .lumi-top-inner{max-width:1280px!important;min-height:80px!important;padding:12px 24px!important;gap:18px!important}
    .lumi-brand{display:flex;min-width:0;align-items:center;gap:12px;text-decoration:none;color:#0f172a}
    .lumi-brand-mark{display:block;width:44px;height:44px;flex:0 0 44px;border-radius:16px;box-shadow:0 10px 22px rgba(249,115,22,.2);transition:transform .2s ease}
    .lumi-brand:hover .lumi-brand-mark{transform:rotate(6deg) scale(1.05)}
    .lumi-brand-copy{min-width:0;line-height:1.05}.lumi-brand-copy strong{display:block;font-size:20px;font-weight:900;letter-spacing:-.025em;color:#0f172a}.lumi-brand-copy small{display:block;margin-top:4px;color:#f97316;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.16em}
    .lumi-top .main-nav{display:flex;align-items:center;gap:4px;flex-wrap:nowrap;margin-left:auto}
    .lumi-top .main-nav a{padding:10px 13px;border-radius:12px;font-size:14px;font-weight:800;color:#64748b;text-decoration:none;white-space:nowrap;transition:transform .2s ease,background .2s ease,color .2s ease}
    .lumi-top .main-nav a:hover,.lumi-top .main-nav a[aria-current="page"]{transform:translateY(-1px);background:#fff7ed;color:#ea580c}
    .lumi-header-actions{display:flex;align-items:center;gap:8px;flex:0 0 auto}
    .lumi-header-action{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:9px 13px;border-radius:13px;font-size:13px;font-weight:900;text-decoration:none;white-space:nowrap;transition:transform .2s ease,box-shadow .2s ease,background .2s ease,border-color .2s ease}
    .lumi-header-action:hover{transform:translateY(-2px)}
    .lumi-header-call{border:1px solid #ffedd5;background:#fff;color:#475569}.lumi-header-call:hover{border-color:#fdba74;color:#ea580c}
    .lumi-header-zalo{background:#0068ff;color:#fff;box-shadow:0 8px 18px rgba(0,104,255,.2)}.lumi-header-zalo:hover{background:#005be0}
    .lumi-header-book{background:#0d9488;color:#fff;box-shadow:0 8px 18px rgba(13,148,136,.18)}.lumi-header-book:hover{background:#0f766e}
    .lumi-mobile-toggle{display:none;width:44px;height:44px;border:1px solid #fed7aa;border-radius:14px;background:#fff;color:#334155;font-size:22px;font-weight:900;cursor:pointer;box-shadow:0 7px 18px rgba(15,23,42,.06);transition:transform .2s ease,background .2s ease}
    .lumi-mobile-nav{display:none;border-top:1px solid #ffead7;background:#fff;padding:10px 16px 16px;box-shadow:0 18px 34px rgba(15,23,42,.08)}
    .lumi-mobile-nav a{display:block;padding:12px 14px;border-radius:12px;color:#475569;text-decoration:none;font-weight:800;transition:background .2s ease,color .2s ease,transform .2s ease}
    .lumi-mobile-nav a:hover,.lumi-mobile-nav a[aria-current="page"]{background:#fff7ed;color:#ea580c}
    .lumi-mobile-nav .lumi-mobile-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px;padding-top:10px;border-top:1px solid #ffead7}
    .lumi-mobile-nav .call{background:#fff7ed;color:#ea580c;text-align:center;border:1px solid #fed7aa}.lumi-mobile-nav .zalo{background:#0068ff;color:#fff;text-align:center}.lumi-mobile-nav .book{background:#0d9488;color:#fff;text-align:center}

    .lumi-reveal{opacity:0;transform:translateY(22px) scale(.985);transition:opacity .62s cubic-bezier(.2,.8,.2,1),transform .62s cubic-bezier(.2,.8,.2,1)}
    .lumi-reveal.is-visible{opacity:1;transform:none}
    .lumi-contact-rail{position:fixed;right:16px;bottom:18px;z-index:80;display:flex;flex-direction:column;gap:10px;font-family:inherit}
    .lumi-contact-rail a{display:flex;align-items:center;justify-content:center;gap:8px;min-width:126px;padding:12px 15px;border-radius:999px;text-decoration:none;color:#fff;font-size:13px;font-weight:900;box-shadow:0 14px 36px rgba(15,23,42,.18);transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}
    .lumi-contact-rail a:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 18px 42px rgba(15,23,42,.22);filter:saturate(1.08)}
    .lumi-contact-call{background:#10b981}.lumi-contact-zalo{background:#0068ff}.lumi-contact-icon{font-size:16px;line-height:1}
    .lumi-hero-visual{position:relative;margin-top:20px;overflow:hidden;border-radius:22px;border:1px solid #ffead7;background:#f8fafc;box-shadow:0 12px 30px rgba(15,23,42,.08)}
    .lumi-hero-visual img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
    .lumi-hero-visual:hover img{transform:scale(1.045)}
    .lumi-hero-visual figcaption{position:absolute;left:12px;bottom:12px;padding:7px 10px;border-radius:999px;background:rgba(15,23,42,.76);color:#fff;font-size:11px;font-weight:800;backdrop-filter:blur(8px)}
    .btn:active,.nav-cta:active,.lumi-contact-rail a:active,.lumi-mobile-nav a:active,.lumi-mobile-toggle:active,.lumi-header-action:active{transform:scale(.96)}
    @media(max-width:1080px){.lumi-top .main-nav{display:none!important}.lumi-header-actions .lumi-desktop-action{display:none}.lumi-mobile-toggle{display:grid;place-items:center}.lumi-mobile-nav.is-open{display:block;animation:lumiMenuIn .24s ease both}@keyframes lumiMenuIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}}
    @media(max-width:640px){.lumi-top-inner{min-height:68px!important;padding:10px 16px!important}.lumi-brand-mark{width:40px;height:40px;flex-basis:40px;border-radius:13px}.lumi-brand-copy strong{font-size:18px}.lumi-header-actions .lumi-header-book{display:none}.lumi-contact-rail{right:10px;bottom:84px;gap:8px}.lumi-contact-rail a{min-width:48px;width:48px;height:48px;padding:0;border-radius:16px}.lumi-contact-label{display:none}.lumi-hero-visual{border-radius:18px}}
    @media(prefers-reduced-motion:reduce){.lumi-paw-loader span{animation:none}.lumi-reveal{opacity:1;transform:none;transition:none}.lumi-page-transition{transition:none}.lumi-hero-visual img{transition:none}}
  `;
  document.head.appendChild(style);

  const currentPath = location.pathname.toLowerCase();
  const navItems = [
    ['Spa', 'spa-thu-cung-binh-thanh/', 'spa-thu-cung-binh-thanh'],
    ['Hotel', 'khach-san-thu-cung-binh-thanh/', 'khach-san-thu-cung-binh-thanh'],
    ['Bảng giá', 'bang-gia-spa-thu-cung/', 'bang-gia-spa-thu-cung'],
    ['Giới thiệu', 'gioi-thieu/', 'gioi-thieu'],
    ['Liên hệ', 'lien-he/', 'lien-he'],
    ['Kiến thức', 'bai-viet/', 'bai-viet']
  ];

  const navMarkup = () => navItems.map(([label, path, activeKey]) => {
    const active = currentPath.includes(activeKey) ? ' aria-current="page"' : '';
    const dataBlog = label === 'Kiến thức' ? ' data-lumi-blog-link="true"' : '';
    return `<a href="${rootHref(path)}"${active}${dataBlog}>${label}</a>`;
  }).join('');

  const renderCanonicalStaticHeader = () => {
    const header = document.querySelector('.lumi-top');
    if (!header || document.querySelector('#root')) return;

    header.innerHTML = `
      <div class="lumi-top-inner">
        <a class="lumi-brand" href="${rootHref()}" aria-label="Lumi Pet - Trang chủ">
          <img class="lumi-brand-mark" src="${BRAND_MARK}" alt="" aria-hidden="true">
          <span class="lumi-brand-copy"><strong>Lumi Pet</strong><small>Spa & Hotel 24/7</small></span>
        </a>
        <nav class="main-nav" aria-label="Điều hướng chính">${navMarkup()}</nav>
        <div class="lumi-header-actions">
          <a class="lumi-header-action lumi-header-call lumi-desktop-action" href="tel:0989979675">☎ Gọi ngay</a>
          <a class="lumi-header-action lumi-header-zalo lumi-desktop-action" href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">◯ Zalo</a>
          <a class="lumi-header-action lumi-header-book" href="${rootHref('dat-lich/')}">▣ Đặt lịch</a>
          <button type="button" class="lumi-mobile-toggle" aria-label="Mở menu" aria-expanded="false">☰</button>
        </div>
      </div>
      <nav class="lumi-mobile-nav" aria-label="Điều hướng mobile">
        ${navMarkup()}
        <div class="lumi-mobile-actions">
          <a class="call" href="tel:0989979675">☎ Gọi</a>
          <a class="zalo" href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">Z Zalo</a>
          <a class="book" href="${rootHref('dat-lich/')}">▣ Đặt lịch</a>
        </div>
      </nav>`;

    const toggle = header.querySelector('.lumi-mobile-toggle');
    const mobile = header.querySelector('.lumi-mobile-nav');
    toggle?.addEventListener('click', () => {
      const open = mobile.classList.toggle('is-open');
      toggle.textContent = open ? '×' : '☰';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    });
  };

  renderCanonicalStaticHeader();

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

  const imageForPath = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('hotel') || path.includes('khach-san') || path.includes('dat-phong')) {
      return { src: TOPIC_IMAGES.hotel, alt: 'Chó trong khu lưu trú pet boarding, ảnh minh hoạ đúng chủ đề khách sạn thú cưng' };
    }
    if (path.includes('groom')) {
      return { src: TOPIC_IMAGES.grooming, alt: 'Chó đang được groomer cắt tỉa bằng tông đơ tại salon thú cưng' };
    }
    if (path.includes('spa') || path.includes('dat-lich') || path.includes('bang-gia')) {
      return { src: TOPIC_IMAGES.spa, alt: 'Chó đang được tắm và chăm sóc tại khu grooming thú cưng' };
    }
    return { src: TOPIC_IMAGES.grooming, alt: 'Groomer đang chăm sóc chó tại salon thú cưng' };
  };

  const addHeroVisual = () => {
    const side = document.querySelector('.hero-side');
    if (!side || side.querySelector('.lumi-hero-visual')) return;
    const { src, alt } = imageForPath();
    const figure = document.createElement('figure');
    figure.className = 'lumi-hero-visual';
    figure.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" decoding="async"><figcaption>Ảnh minh hoạ đúng dịch vụ</figcaption>`;
    side.appendChild(figure);
  };

  const syncHomepageImages = () => {
    const images = Array.from(document.querySelectorAll('#root img'));
    if (!images.length) return false;
    let changed = 0;
    images.forEach(img => {
      const alt = (img.getAttribute('alt') || '').toLowerCase();
      let target = null;
      if (alt.includes('khách sạn') || alt.includes('lưu trú') || alt.includes('hotel')) target = TOPIC_IMAGES.hotel;
      else if (alt.includes('spa') || alt.includes('grooming') || alt.includes('thú cưng')) {
        target = alt.includes('spa') && !alt.includes('grooming') ? TOPIC_IMAGES.spa : TOPIC_IMAGES.grooming;
      }
      if (target && img.src !== target) {
        img.src = target;
        img.removeAttribute('srcset');
        img.setAttribute('referrerpolicy', 'no-referrer');
        changed += 1;
      }
    });
    return changed > 0;
  };

  addHeroVisual();
  syncHomepageImages();
  window.setTimeout(syncHomepageImages, 80);
  window.setTimeout(syncHomepageImages, 300);
  window.setTimeout(syncHomepageImages, 900);

  if (document.querySelector('#root')) {
    const rootObserver = new MutationObserver(() => syncHomepageImages());
    rootObserver.observe(document.querySelector('#root'), { childList: true, subtree: true });
    window.setTimeout(() => rootObserver.disconnect(), 5000);
  }

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

  const loadBlogEnhancements = () => {
    if (document.querySelector('script[data-lumi-blog]')) return;
    const uiScript = Array.from(document.scripts).find(item => item.src.includes('lumi-ui.js'));
    if (!uiScript) return;
    const blogScript = document.createElement('script');
    blogScript.src = new URL('lumi-blog.js', uiScript.src).href;
    blogScript.defer = true;
    blogScript.dataset.lumiBlog = 'true';
    document.body.appendChild(blogScript);
  };
  loadBlogEnhancements();
})();
