(() => {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ZALO_URL = 'https://zalo.me/0989979675';
  const UI_SCRIPT_URL = document.currentScript?.src ? new URL(document.currentScript.src) : null;
  const ROOT_URL = UI_SCRIPT_URL ? new URL('.', UI_SCRIPT_URL) : new URL('/', location.origin);
  const rootHref = (path = '') => new URL(path, ROOT_URL).href;
  const BRAND_MARK = rootHref('lumi-brand-mark.svg');

  const TOPIC_IMAGES = {
    spa: rootHref('images/vn-bath-dog.jpg'),
    grooming: rootHref('images/vn-hero-spa.jpg'),
    hotel: rootHref('images/vn-hotel-cabins.jpg')
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
    
    .lumi-contact-quote{background:linear-gradient(135deg,#f97316,#ea580c)!important;color:#fff!important;border:none!important;cursor:pointer!important;position:relative!important;font-family:inherit!important}
    .lumi-contact-quote::after{content:'2026';position:absolute;top:-6px;right:-4px;background:#0d9488;color:#fff;font-size:9px;font-weight:900;padding:2px 6px;border-radius:999px;box-shadow:0 2px 6px rgba(13,148,136,.35);animation:lumiQuotePulse 2.2s infinite}
    @keyframes lumiQuotePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
    .price-table tbody tr{cursor:pointer;transition:background .2s,transform .18s}
    .price-table tbody tr:hover{background:#fff7ed!important}
    .lumi-mobile-dock{display:none}
    @media(max-width:768px){
      body:not(.lumi-has-react-root){padding-bottom:78px!important}
      .lumi-contact-rail{display:none!important}
      .lumi-mobile-dock{position:fixed;left:0;right:0;bottom:0;z-index:85;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:8px 10px calc(env(safe-area-inset-bottom,0px) + 8px);background:rgba(255,255,255,.96);backdrop-filter:blur(18px);border-top:1px solid #ffedd5;box-shadow:0 -8px 24px rgba(15,23,42,.08)}
      .lumi-mobile-dock a,.lumi-mobile-dock button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;min-height:46px;padding:6px 4px;border-radius:12px;border:none;text-decoration:none;font-size:10.5px;font-weight:900;cursor:pointer;font-family:inherit;transition:transform .16s ease}
      .lumi-mobile-dock a:active,.lumi-mobile-dock button:active{transform:scale(.94)}
      .lumi-dock-call{background:#fff7ed;color:#ea580c}
      .lumi-dock-zalo{background:#eff6ff;color:#0068ff}
      .lumi-dock-quote{background:#f0fdfa;color:#0d9488}
      .lumi-dock-book{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;box-shadow:0 4px 12px rgba(249,115,22,.28)}
    }
    
    .lumi-modal-overlay{position:fixed;inset:0;z-index:99990;background:rgba(15,23,42,.6);backdrop-filter:blur(8px);display:grid;place-items:center;padding:16px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .25s ease,visibility .25s ease}
    .lumi-modal-overlay.is-active{opacity:1;visibility:visible;pointer-events:auto}
    .lumi-modal-card{width:100%;max-width:440px;background:#fff;border-radius:24px;padding:24px;box-shadow:0 24px 60px rgba(15,23,42,.28);position:relative;transform:translateY(18px) scale(.97);transition:transform .25s cubic-bezier(.2,.8,.2,1);max-height:92vh;overflow-y:auto;box-sizing:border-box}
    .lumi-modal-overlay.is-active .lumi-modal-card{transform:none}
    .lumi-modal-close{position:absolute;top:16px;right:16px;width:34px;height:34px;border-radius:50%;border:none;background:#f1f5f9;color:#64748b;font-size:16px;font-weight:bold;cursor:pointer;display:grid;place-items:center;transition:background .2s,color .2s}
    .lumi-modal-close:hover{background:#fee2e2;color:#ef4444}
    .lumi-q-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:#fff7ed;color:#ea580c;border:1px solid #fed7aa;border-radius:999px;font-size:12px;font-weight:800;margin-bottom:10px}
    .lumi-q-title{font-size:20px;font-weight:900;color:#0f172a;margin:0 0 6px;line-height:1.25}
    .lumi-q-desc{font-size:13px;color:#64748b;margin:0 0 16px;line-height:1.45}
    .lumi-q-field{margin-bottom:14px}
    .lumi-q-label{display:block;font-size:12px;font-weight:800;color:#334155;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px}
    .lumi-q-pills{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
    .lumi-q-pill{padding:9px 6px;border:1.5px solid #e2e8f0;border-radius:12px;background:#f8fafc;color:#475569;font-size:13px;font-weight:700;text-align:center;cursor:pointer;transition:all .18s ease;user-select:none;display:block}
    .lumi-q-pill input{display:none}
    .lumi-q-pill.is-checked{border-color:#f97316;background:#fff7ed;color:#ea580c;box-shadow:0 3px 10px rgba(249,115,22,.15)}
    .lumi-q-select{width:100%;box-sizing:border-box;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:12px;background:#f8fafc;font-size:14px;font-weight:700;color:#0f172a;outline:none;transition:border-color .2s}
    .lumi-q-select:focus{border-color:#f97316;background:#fff}
    .lumi-q-weights{display:flex;flex-wrap:wrap;gap:6px}
    .lumi-q-weights .lumi-q-pill{flex:1 1 calc(33.333% - 6px);min-width:75px;font-size:12px}
    .lumi-q-phone-wrap{position:relative;width:100%}
    .lumi-q-phone-wrap span{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:17px;line-height:1;pointer-events:none;z-index:2}
    .lumi-q-phone-wrap input,.lumi-q-phone-input{display:block!important;width:100%!important;box-sizing:border-box!important;padding:12px 14px 12px 44px!important;border:2px solid #fdba74!important;border-radius:14px!important;background:#fff!important;font-size:16px!important;font-weight:800!important;color:#0f172a!important;outline:none!important;transition:border-color .2s,box-shadow .2s}
    .lumi-q-phone-wrap input:focus,.lumi-q-phone-input:focus{border-color:#ea580c!important;box-shadow:0 0 0 4px rgba(249,115,22,.18)!important}
    .lumi-q-phone-wrap input::placeholder,.lumi-q-phone-input::placeholder{font-size:13.5px;font-weight:500;color:#94a3b8}
    .lumi-q-tip{display:block;font-size:11px;color:#f97316;font-weight:700;margin-top:5px}
    .lumi-q-submit{width:100%;padding:14px;border:none;border-radius:14px;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-size:15px;font-weight:900;cursor:pointer;box-shadow:0 10px 24px rgba(234,88,12,.28);transition:transform .18s,box-shadow .18s}
    .lumi-q-submit:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(234,88,12,.35)}
    .lumi-q-submit:active{transform:scale(.98)}

    .lumi-res-card{text-align:center;padding:8px 0}
    .lumi-res-badge{font-size:40px;line-height:1;margin-bottom:8px}
    .lumi-res-title{font-size:19px;font-weight:900;color:#0f172a;margin:0 0 12px}
    .lumi-res-pricing{background:#fff7ed;border:1.5px dashed #fdba74;border-radius:16px;padding:14px;margin-bottom:14px}
    .lumi-res-old{font-size:13px;color:#94a3b8;margin-bottom:4px}
    .lumi-res-new{font-size:26px;font-weight:900;color:#ea580c;letter-spacing:-.02em}
    .lumi-res-save{display:inline-block;padding:2px 8px;border-radius:999px;background:#ef4444;color:#fff;font-size:11px;font-weight:900;margin-left:6px;vertical-align:middle}
    .lumi-res-voucher{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:10px;margin-bottom:14px;font-size:12px;color:#475569}
    .lumi-res-voucher strong{color:#ea580c}
    .lumi-res-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}
    .lumi-res-call{padding:12px 8px;border-radius:12px;background:#10b981;color:#fff;font-size:13px;font-weight:900;text-decoration:none;display:inline-block;text-align:center}
    .lumi-res-zalo{padding:12px 8px;border-radius:12px;background:#0068ff;color:#fff;font-size:13px;font-weight:900;text-decoration:none;display:inline-block;text-align:center}
  
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
    <a class="lumi-contact-quote" href="#bao-gia" id="lumi-quote-trigger" aria-label="Tính Giá Nhanh Theo Cân Nặng"><span class="lumi-contact-icon">🏷️</span><span class="lumi-contact-label">Tính giá nhanh</span></a>
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
  
  // === LUMI PET 1-TAP PRICE QUOTE & INSTANT ZALO LEAD ALERT ===
  const ZALO_BOT_TOKEN = '2488056338196260982:zEjZvnVEKAtHTnEcXwwntFvamkXZEnUnLJqtwpBiYQuhZpLvNZtRukCgBiUCSFuA';
  const ZALO_CHAT_ID = '6e15121ea4544d0a1445';
  const GOOGLE_CONVERSION_TAG = 'AW-17749467170';

  const PRICING_DB = {
    dog: [
      { id: 'bath', name: 'Tắm vệ sinh chó', tiers: [{ max: 3, p: 140000, l: 'Dưới 3kg' }, { max: 6, p: 190000, l: '3 – 6kg' }, { max: 9, p: 250000, l: '6 – 9kg' }, { max: 12, p: 310000, l: '9 – 12kg' }, { max: 15, p: 370000, l: '12 – 15kg' }, { max: 18, p: 430000, l: '15 – 18kg' }, { max: 20, p: 480000, l: '18 – 20kg' }, { max: 25, p: 550000, l: '20 – 25kg' }] },
      { id: 'shave', name: 'Combo Tắm + Cạo lông chó', tiers: [{ max: 3, p: 200000, l: 'Dưới 3kg' }, { max: 6, p: 270000, l: '3 – 6kg' }, { max: 9, p: 340000, l: '6 – 9kg' }, { max: 12, p: 410000, l: '9 – 12kg' }, { max: 15, p: 480000, l: '12 – 15kg' }, { max: 18, p: 550000, l: '15 – 18kg' }, { max: 20, p: 620000, l: '18 – 20kg' }, { max: 25, p: 700000, l: '20 – 25kg' }] },
      { id: 'groom', name: 'Combo Tắm + Cắt tỉa chó', tiers: [{ max: 3, p: 290000, l: 'Dưới 3kg' }, { max: 6, p: 360000, l: '3 – 6kg' }, { max: 9, p: 430000, l: '6 – 9kg' }, { max: 12, p: 520000, l: '9 – 12kg' }, { max: 15, p: 600000, l: '12 – 15kg' }, { max: 18, p: 680000, l: '15 – 18kg' }, { max: 20, p: 760000, l: '18 – 20kg' }, { max: 25, p: 850000, l: '20 – 25kg' }] }
    ],
    cat: [
      { id: 'bath', name: 'Tắm vệ sinh mèo', tiers: [{ max: 3, p: 160000, l: 'Dưới 3kg' }, { max: 6, p: 220000, l: '3 – 6kg' }, { max: 10, p: 270000, l: '6 – 10kg' }] },
      { id: 'shave', name: 'Tắm + Cạo lông mèo', tiers: [{ max: 3, p: 250000, l: 'Dưới 3kg' }, { max: 6, p: 320000, l: '3 – 6kg' }, { max: 10, p: 380000, l: '6 – 10kg' }] }
    ],
    hotel: [
      { id: 'standard', name: 'Khách sạn thú cưng (Máy lạnh 24/24)', tiers: [{ max: 3, p: 100000, l: 'Dưới 3kg' }, { max: 6, p: 120000, l: '3 – 6kg' }, { max: 9, p: 160000, l: '6 – 9kg' }, { max: 12, p: 200000, l: '9 – 12kg' }, { max: 15, p: 250000, l: '12 – 15kg' }] }
    ]
  };

  const modalHtml = `
    <div id="lumi-quote-modal" class="lumi-modal-overlay" aria-hidden="true">
      <div class="lumi-modal-card">
        <button type="button" class="lumi-modal-close" aria-label="Đóng">✕</button>
        <div id="lumi-modal-form-wrap">
          <div class="lumi-q-badge">🐾 Bảng giá rõ theo cân nặng — Đặt trước không chờ lâu</div>
          <h3 class="lumi-q-title">Tính Giá Nhanh &amp; Giữ Lịch</h3>
          <p class="lumi-q-desc">Chọn dịch vụ &amp; cân nặng để xem báo giá chi tiết và giữ khung giờ ưu tiên cho bé tại 27 Võ Trường Toản!</p>
          <form id="lumi-modal-quote-form">
            <div class="lumi-q-field">
              <label class="lumi-q-label">1. Bé nhà bạn là:</label>
              <div class="lumi-q-pills" id="lumi-species-box">
                <label class="lumi-q-pill is-checked"><input type="radio" name="species" value="dog" checked> 🐶 Chó/Cún</label>
                <label class="lumi-q-pill"><input type="radio" name="species" value="cat"> 🐱 Mèo</label>
                <label class="lumi-q-pill"><input type="radio" name="species" value="hotel"> 🏨 Khách sạn</label>
              </div>
            </div>
            <div class="lumi-q-field">
              <label class="lumi-q-label">2. Dịch vụ cần chọn:</label>
              <select id="lumi-service-box" class="lumi-q-select"></select>
            </div>
            <div class="lumi-q-field">
              <label class="lumi-q-label">3. Cân nặng của bé:</label>
              <div class="lumi-q-weights" id="lumi-weight-box"></div>
            </div>
            <div class="lumi-q-field">
              <label class="lumi-q-label">4. Số điện thoại xem giá &amp; giữ lịch hẹn:</label>
              <div class="lumi-q-phone-wrap">
                <span aria-hidden="true">📱</span>
                <input type="tel" id="lumi-quote-phone-input" class="lumi-q-phone-input" name="tel" autocomplete="tel" inputmode="tel" placeholder="Nhập số điện thoại Zalo của bạn..." required>
              </div>
              <small class="lumi-q-tip">💡 Đã gồm: Vệ sinh tai/mắt, cắt mài móng, xử lý lông bàn chân, vắt tuyến hôi, tắm xả 2 lần &amp; serum dưỡng lông.</small>
            </div>
            <button type="submit" class="lumi-q-submit" id="lumi-quote-submit-btn">🐾 XEM BÁO GIÁ &amp; GIỮ LỊCH NGAY</button>
          </form>
        </div>
        <div id="lumi-modal-result-wrap" class="lumi-res-card" style="display:none">
          <div class="lumi-res-badge">✅</div>
          <h3 class="lumi-res-title">Báo Giá Của Bé Tại Lumi Pet</h3>
          <div class="lumi-res-pricing">
            <div class="lumi-res-old" id="lumi-calc-old">Biểu phí chính thức 2026 tại Lumi Pet</div>
            <div class="lumi-res-new"><span id="lumi-calc-new">—</span> <span class="lumi-res-save" id="lumi-calc-save" style="background:#0d9488">Niêm yết rõ ràng</span></div>
          </div>
          <div class="lumi-res-voucher" style="text-align:left;line-height:1.55">
            ✅ <strong>Quy trình đã bao gồm:</strong> Kiểm tra da lông, xử lý lông bàn chân, vệ sinh tai/mắt, cắt mài móng, vắt tuyến hôi, tắm xả 2 lần, sấy phồng &amp; serum dưỡng lông.<br>
            🏨 <strong>Ưu đãi Khách sạn:</strong> Máy lạnh 24/24, quay video mỗi ngày (Gửi &gt;5 ngày giảm 5%, &gt;10 ngày giảm 8%).<br>
            📞 Đã ghi nhận giữ lịch cho SĐT <strong id="lumi-calc-phone"></strong>
          </div>
          <p style="font-size:12px;color:#64748b;margin:0 0 14px">Lumi Pet tại <strong>27 Võ Trường Toản, Phường Gia Định (P.2, Bình Thạnh cũ)</strong> hân hạnh đón bé!</p>
          <div class="lumi-res-actions">
            <a class="lumi-res-call" href="tel:0989979675">☎ Gọi Xác Nhận Giờ</a>
            <a class="lumi-res-zalo" href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">💬 Nhắn Zalo Ngay</a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modalEl = document.getElementById('lumi-quote-modal');
  const modalClose = modalEl?.querySelector('.lumi-modal-close');
  const formWrap = document.getElementById('lumi-modal-form-wrap');
  const resultWrap = document.getElementById('lumi-modal-result-wrap');
  const speciesBox = document.getElementById('lumi-species-box');
  const serviceBox = document.getElementById('lumi-service-box');
  const weightBox = document.getElementById('lumi-weight-box');
  const quoteForm = document.getElementById('lumi-modal-quote-form');
  const phoneInput = document.getElementById('lumi-quote-phone-input');

  let curSpecies = 'dog';
  let curWeight = 2.5;

  const updateServices = () => {
    if (!serviceBox) return;
    const list = PRICING_DB[curSpecies] || [];
    serviceBox.innerHTML = list.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
    updateWeights();
  };

  const updateWeights = () => {
    if (!weightBox) return;
    const list = PRICING_DB[curSpecies] || [];
    const serv = list.find(s => s.id === serviceBox.value) || list[0];
    if (!serv) return;
    weightBox.innerHTML = serv.tiers.map((t, idx) => `
      <label class="lumi-q-pill ${idx === 0 ? 'is-checked' : ''}">
        <input type="radio" name="weight" value="${t.max}" ${idx === 0 ? 'checked' : ''}> ${t.l}
      </label>
    `).join('');
    curWeight = serv.tiers[0].max;
  };

  speciesBox?.addEventListener('change', e => {
    const target = e.target;
    if (target.name === 'species') {
      curSpecies = target.value;
      speciesBox.querySelectorAll('.lumi-q-pill').forEach(p => p.classList.remove('is-checked'));
      target.closest('.lumi-q-pill')?.classList.add('is-checked');
      updateServices();
    }
  });

  serviceBox?.addEventListener('change', () => {
    updateWeights();
  });

  weightBox?.addEventListener('change', e => {
    const target = e.target;
    if (target.name === 'weight') {
      curWeight = parseFloat(target.value);
      weightBox.querySelectorAll('.lumi-q-pill').forEach(p => p.classList.remove('is-checked'));
      target.closest('.lumi-q-pill')?.classList.add('is-checked');
    }
  });

  updateServices();

  const openQuoteModal = (presetSpecies, presetWeight) => {
    if (presetSpecies && PRICING_DB[presetSpecies]) {
      curSpecies = presetSpecies;
      const radio = speciesBox?.querySelector(`input[value="${presetSpecies}"]`);
      if (radio) {
        radio.checked = true;
        speciesBox?.querySelectorAll('.lumi-q-pill').forEach(p => p.classList.remove('is-checked'));
        radio.closest('.lumi-q-pill')?.classList.add('is-checked');
        updateServices();
      }
    }
    if (formWrap) formWrap.style.display = 'block';
    if (resultWrap) resultWrap.style.display = 'none';
    modalEl?.classList.add('is-active');
    modalEl?.setAttribute('aria-hidden', 'false');
    setTimeout(() => phoneInput?.focus(), 200);
  };

  const closeQuoteModal = () => {
    modalEl?.classList.remove('is-active');
    modalEl?.setAttribute('aria-hidden', 'true');
  };

  modalClose?.addEventListener('click', closeQuoteModal);
  modalEl?.addEventListener('click', e => {
    if (e.target === modalEl) closeQuoteModal();
  });

  // Attach trigger to rail button
  document.getElementById('lumi-quote-trigger')?.addEventListener('click', e => {
    e.preventDefault();
    openQuoteModal();
  });

  // Attach trigger to all table rows in price tables
  document.querySelectorAll('.price-table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      const text = row.innerText.toLowerCase();
      let sp = 'dog';
      if (text.includes('mèo') || location.pathname.includes('meo')) sp = 'cat';
      else if (text.includes('hotel') || location.pathname.includes('hotel')) sp = 'hotel';
      openQuoteModal(sp);
    });
  });

  // Handle Form Submit & Instant Zalo Notification
  quoteForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const phone = phoneInput?.value.trim();
    if (!phone) return;

    const servList = PRICING_DB[curSpecies] || [];
    const serv = servList.find(s => s.id === serviceBox.value) || servList[0];
    let selectedTier = serv.tiers[serv.tiers.length - 1];
    for (const t of serv.tiers) {
      if (curWeight <= t.max) {
        selectedTier = t;
        break;
      }
    }

    const lumiPrice = selectedTier.p;
    const moneyFmt = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    // Show result
    const oldEl = document.getElementById('lumi-calc-old');
    const newEl = document.getElementById('lumi-calc-new');
    const saveEl = document.getElementById('lumi-calc-save');
    const phEl = document.getElementById('lumi-calc-phone');
    if (oldEl) oldEl.textContent = `${serv.name} · ${selectedTier.l}`;
    if (newEl) newEl.textContent = moneyFmt.format(lumiPrice);
    if (saveEl) saveEl.textContent = 'Giá niêm yết 2026';
    if (phEl) phEl.textContent = phone;

    if (formWrap) formWrap.style.display = 'none';
    if (resultWrap) resultWrap.style.display = 'block';

    // 1. Dispatch Instant Alert to Zalo Bot
    const petIcon = curSpecies === 'dog' ? '🐶 Cún' : (curSpecies === 'cat' ? '🐱 Mèo' : '🏨 Khách sạn');
    const timeNow = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date().toLocaleDateString('vi-VN');
    const zaloMsg = [
      '🐾 *【 LUMI PET 】- KHÁCH VỪA XEM BÁO GIÁ & GIỮ LỊCH TRÊN WEB!*',
      '━━━━━━━━━━━━━━━━━━━━',
      `📞 *Số điện thoại:* [${phone}](tel:${phone})`,
      `🐾 *Dịch vụ:* ${petIcon} - ${serv.name} (${selectedTier.l})`,
      `💰 *Giá niêm yết 2026:* *${moneyFmt.format(lumiPrice)}*`,
      `🌐 *Trang xem:* ${location.href}`,
      `⏰ *Thời gian:* ${timeNow}`,
      '━━━━━━━━━━━━━━━━━━━━',
      '👉 *Gọi hoặc nhắn Zalo xác nhận khung giờ đón bé nhé!*'
    ].join('\n');

    const params = new URLSearchParams();
    params.append('chat_id', ZALO_CHAT_ID);
    params.append('text', zaloMsg);
    params.append('parse_mode', 'markdown');

    fetch(`https://bot-api.zaloplatforms.com/bot${ZALO_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      mode: 'no-cors',
      body: params
    }).catch(err => console.error('Lumi Zalo Alert err:', err));

    // 2. Fire Google Ads Conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${GOOGLE_CONVERSION_TAG}/CiEyCJfPr7sdEKLAzY9C`,
        'value': 100000.0,
        'currency': 'VND'
      });
    }
  });

  // Auto Google Ads conversion tracking for Hotline and Zalo links
  document.addEventListener('click', event => {
    const link = event.target.closest('a, button');
    if (!link) return;
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href.startsWith('tel:') && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${GOOGLE_CONVERSION_TAG}/jlZdCJHPr7sdEKLAzY9C`,
        'value': 50000.0,
        'currency': 'VND'
      });
    } else if (href.includes('zalo.me') && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${GOOGLE_CONVERSION_TAG}/BarxCJTPr7sdEKLAzY9C`,
        'value': 50000.0,
        'currency': 'VND'
      });
    }
  }, true);

  // Mobile native-style bottom dock for all static pages (non-React)
  if (document.querySelector('#root')) {
    document.body.classList.add('lumi-has-react-root');
  } else if (!document.querySelector('.lumi-mobile-dock')) {
    const dock = document.createElement('nav');
    dock.className = 'lumi-mobile-dock';
    dock.setAttribute('aria-label', 'Thao tác nhanh trên điện thoại');
    dock.innerHTML = `
      <a class="lumi-dock-call" href="tel:0989979675"><span>☎</span><span>Gọi ngay</span></a>
      <a class="lumi-dock-zalo" href="${ZALO_URL}" target="_blank" rel="noopener noreferrer"><span>💬</span><span>Zalo</span></a>
      <button type="button" class="lumi-dock-quote" id="lumi-dock-quote-btn"><span>💰</span><span>Tính giá</span></button>
      <a class="lumi-dock-book" href="${rootHref('dat-lich/')}"><span>📅</span><span>Đặt lịch</span></a>
    `;
    document.body.appendChild(dock);
    dock.querySelector('#lumi-dock-quote-btn')?.addEventListener('click', () => openQuoteModal());
  }

  // Smooth staggered scroll-reveal animations on all panels/cards
  if (!REDUCED && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.panel, .blog-card, .lumi-vn-showcase, .price-box, .hero-copy, .hero-side');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    targets.forEach((el, idx) => {
      if (!el.classList.contains('lumi-reveal')) {
        el.classList.add('lumi-reveal');
        el.style.transitionDelay = `${Math.min((idx % 4) * 65, 220)}ms`;
      }
      io.observe(el);
    });
  }

  loadBlogEnhancements();
})();
