(() => {
  const base = (() => {
    const p = location.pathname;
    const i = p.indexOf('/mimi/');
    return i >= 0 ? p.slice(0, i + 6) : './';
  })();

  const go = path => {
    location.href = `${base}${path}`.replace(/\/+/g, '/');
  };

  const canonicalTabRoutes = {
    'nav-tab-spa': 'spa-thu-cung-binh-thanh/',
    'mobile-nav-tab-spa': 'spa-thu-cung-binh-thanh/',
    'nav-tab-hotel': 'khach-san-thu-cung-binh-thanh/',
    'mobile-nav-tab-hotel': 'khach-san-thu-cung-binh-thanh/',
    'nav-tab-pricing': 'bang-gia-spa-thu-cung/',
    'mobile-nav-tab-pricing': 'bang-gia-spa-thu-cung/'
  };

  const spaIds = new Set([
    'navbar-booking-btn',
    'navbar-booking-mobile-btn',
    'mobile-nav-booking-btn',
    'estimator-spa-book-btn'
  ]);

  document.addEventListener('click', e => {
    const el = e.target.closest('button,a');
    if (!el) return;

    const id = el.id || '';
    const text = (el.textContent || '').trim().toLowerCase();

    if (canonicalTabRoutes[id]) {
      e.preventDefault();
      e.stopPropagation();
      go(canonicalTabRoutes[id]);
      return;
    }

    if (
      spaIds.has(id) ||
      text.includes('đặt lịch spa / hotel') ||
      text === 'đặt lịch ngay' ||
      text === 'đặt lịch' ||
      text.includes('đặt lịch spa') ||
      text.includes('book spa') ||
      text.includes('bắt đầu đặt spa') ||
      text.includes('xác nhận giữ chỗ') ||
      text.includes('áp dụng nhận khuyến mãi')
    ) {
      e.preventDefault();
      e.stopPropagation();
      go('dat-lich/');
      return;
    }

    if (
      text === 'đặt phòng' ||
      text.includes('đặt phòng ngay') ||
      text.includes('book phòng') ||
      text.includes('đặt hotel') ||
      text.includes('đặt cabin') ||
      text.includes('giữ phòng') ||
      text.includes('giữ cabin')
    ) {
      e.preventDefault();
      e.stopPropagation();
      go('dat-phong/');
    }
  }, true);

  const links = document.createElement('div');
  links.className = 'booking-shortcuts';
  links.innerHTML = `<a class="spa" href="${base}dat-lich/">Đặt lịch Spa</a><a class="hotel" href="${base}dat-phong/">Book phòng</a>`;
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(links));
})();
