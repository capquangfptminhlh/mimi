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
    'estimator-spa-book-btn',
    'hero-book-spa-btn'
  ]);

  const hotelIds = new Set(['hero-book-hotel-btn']);

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
      hotelIds.has(id) ||
      text === 'đặt phòng' ||
      text.includes('đặt phòng ngay') ||
      text.includes('book phòng') ||
      text.includes('đặt hotel') ||
      text.includes('đặt cabin') ||
      text.includes('giữ phòng') ||
      text.includes('giữ cabin') ||
      text.includes('xem tất cả các phòng kính') ||
      text.includes('tính giá trực tuyến') ||
      text.includes('tính thử chi phí số đêm')
    ) {
      e.preventDefault();
      e.stopPropagation();
      go('dat-phong/');
      return;
    }

    if (text.includes('bảng giá spa')) {
      e.preventDefault();
      e.stopPropagation();
      go('bang-gia-spa-thu-cung/');
    }
  }, true);

  const hiddenSectionPhrases = [
    'tại sao ba mẹ chọn lumi pet',
    'khám phá những cabin nghỉ dưỡng tốt nhất',
    'trải nghiệm trị liệu trẻ hoá',
    'phản hồi từ khách hàng'
  ];

  const hideUnverifiedLegacyContent = () => {
    document.querySelectorAll('#root section').forEach(section => {
      const text = (section.textContent || '').toLowerCase();
      if (hiddenSectionPhrases.some(phrase => text.includes(phrase))) {
        section.style.display = 'none';
        section.setAttribute('aria-hidden', 'true');
        section.dataset.lumiHiddenReason = 'unverified-legacy-content';
      }
    });

    document.querySelectorAll('#root span').forEach(span => {
      const text = (span.textContent || '').toLowerCase();
      if (text.includes('khai trương chi nhánh sang chảnh mới')) {
        const ribbon = span.parentElement;
        if (ribbon) {
          ribbon.style.display = 'none';
          ribbon.setAttribute('aria-hidden', 'true');
          ribbon.dataset.lumiHiddenReason = 'unverified-promotion';
        }
      }
    });

    document.querySelectorAll('#root h3').forEach(heading => {
      const text = (heading.textContent || '').trim().toLowerCase();
      if (text === 'câu hỏi thường gặp faq') {
        const faqCard = heading.parentElement;
        if (faqCard) {
          faqCard.style.display = 'none';
          faqCard.setAttribute('aria-hidden', 'true');
          faqCard.dataset.lumiHiddenReason = 'unverified-faq-content';
        }
      }
    });

    document.querySelectorAll('#root footer').forEach(footer => {
      footer.querySelectorAll('h4').forEach(heading => {
        const text = (heading.textContent || '').toLowerCase();
        if (text.includes('danh mục pet shop') || text === 'các dịch vụ') {
          const column = heading.parentElement;
          if (column) {
            column.style.display = 'none';
            column.setAttribute('aria-hidden', 'true');
            column.dataset.lumiHiddenReason = 'unverified-footer-content';
          }
        }
      });

      footer.querySelectorAll('p').forEach(p => {
        const text = (p.textContent || '').toLowerCase();
        if (text.includes('hàng đầu việt nam')) {
          p.textContent = 'Lumi Pet Shop – Spa & Hotel 24/7 tại 27 Võ Trường Toản, Bình Thạnh, TP.HCM.';
        }
      });
    });
  };

  const links = document.createElement('div');
  links.className = 'booking-shortcuts';
  links.innerHTML = `<a class="spa" href="${base}dat-lich/">Đặt lịch Spa</a><a class="hotel" href="${base}dat-phong/">Book phòng</a>`;

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(links);
    hideUnverifiedLegacyContent();

    const root = document.getElementById('root');
    if (root) {
      const observer = new MutationObserver(hideUnverifiedLegacyContent);
      observer.observe(root, { childList: true, subtree: true });
    }

    window.setTimeout(hideUnverifiedLegacyContent, 250);
    window.setTimeout(hideUnverifiedLegacyContent, 1000);
  });
})();
