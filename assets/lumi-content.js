(() => {
  'use strict';

  const d = document;
  const body = d.body;
  const pageKey = body.dataset.page || 'home';
  const base = body.dataset.base || '.';
  const app = d.getElementById('app');
  if (!app) return;

  const siteRoot = 'https://capquangfptminhlh.github.io/mimi';
  const paths = {
    home: '/',
    spa: '/spa-thu-cung-binh-thanh/',
    grooming: '/grooming-cho-meo-binh-thanh/',
    hotel: '/pet-hotel-binh-thanh/',
    shop: '/pet-shop-binh-thanh/',
    price: '/bang-gia/',
    booking: '/dat-lich/',
    contact: '/lien-he/',
    about: '/gioi-thieu/',
    faq: '/faq/'
  };
  const names = {
    home: 'Lumi Pet Shop',
    spa: 'Spa thú cưng Bình Thạnh',
    grooming: 'Grooming chó mèo Bình Thạnh',
    hotel: 'Pet Hotel Bình Thạnh',
    shop: 'Pet Shop Bình Thạnh',
    price: 'Bảng giá Lumi Pet',
    booking: 'Đặt lịch Lumi Pet',
    contact: 'Liên hệ Lumi Pet',
    about: 'Giới thiệu Lumi Pet',
    faq: 'Câu hỏi thường gặp Lumi Pet'
  };

  const photoMap = {
    'hero.svg': 'https://images.pexels.com/photos/16395150/pexels-photo-16395150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'spa.svg': 'https://images.pexels.com/photos/19145895/pexels-photo-19145895.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'grooming.svg': 'https://images.pexels.com/photos/6816844/pexels-photo-6816844.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'hotel.svg': 'https://images.pexels.com/photos/37264836/pexels-photo-37264836.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'shop.svg': 'https://images.pexels.com/photos/18705269/pexels-photo-18705269.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'care-journey.svg': 'https://images.pexels.com/photos/6821106/pexels-photo-6821106.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'spa-detail.svg': 'https://images.pexels.com/photos/19145877/pexels-photo-19145877.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'grooming-detail.svg': 'https://images.pexels.com/photos/6816837/pexels-photo-6816837.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'hotel-detail.svg': 'https://images.pexels.com/photos/14770947/pexels-photo-14770947.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'shop-detail.svg': 'https://images.pexels.com/photos/4001455/pexels-photo-4001455.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'lobby.svg': 'https://images.pexels.com/photos/16366333/pexels-photo-16366333.jpeg?auto=compress&cs=tinysrgb&w=1400',
    'trust-lobby.svg': 'https://images.pexels.com/photos/10954785/pexels-photo-10954785.jpeg?auto=compress&cs=tinysrgb&w=1400'
  };

  const pagePath = paths[pageKey] || '/';
  const pageUrl = `${siteRoot}${pagePath}`;
  const contentUrl = `${base}/content/${pageKey}.html`;

  function resolveInternalLinks(html) {
    return html.replace(/\$\{U\('([^']+)'\)\}/g, (_, path) => `${base}/${path}`);
  }

  function applyVisualUpgrade() {
    if (!d.querySelector('link[data-lumi-fonts]')) {
      const preconnect = d.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.googleapis.com';
      d.head.appendChild(preconnect);

      const fontLink = d.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Manrope:wght@400;500;600;700;800&display=swap';
      fontLink.dataset.lumiFonts = '1';
      d.head.appendChild(fontLink);
    }

    if (!d.querySelector('style[data-lumi-visual-v3]')) {
      const style = d.createElement('style');
      style.dataset.lumiVisualV3 = '1';
      style.textContent = `
        :root{--clay:#9f4728;--ink:#241814;--muted:#66554d;--shadow:0 28px 70px rgba(71,39,25,.14)}
        body{font-family:"Manrope",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;font-size:15px;letter-spacing:-.01em}
        h1,h2,.display,.book h3,.compare h3,.callout strong{font-family:"Fraunces",Georgia,serif;font-variation-settings:"opsz" 72;letter-spacing:-.045em}
        h1,h2,.display{font-weight:700}.display{line-height:.98}.lead,.hero-copy p{line-height:1.7}
        .brand{letter-spacing:-.035em}.brand small{font-family:"Manrope",sans-serif;letter-spacing:.17em}
        .links,.btn,.eyebrow,.chip,.field label{font-family:"Manrope",sans-serif}
        .hero{padding-top:34px}.hero-grid{grid-template-columns:.88fr 1.12fr;gap:44px}
        .hero-art{position:relative;border-radius:38px;overflow:hidden;background:#ead8ca;border:0;box-shadow:0 34px 80px rgba(61,36,27,.2)}
        .hero-art:after{content:"";position:absolute;inset:auto 0 0;height:34%;background:linear-gradient(180deg,transparent,rgba(31,18,13,.16));pointer-events:none}
        .hero-art img{aspect-ratio:5/5.35;min-height:520px;object-fit:cover;object-position:center;transform:scale(1.001)}
        .card,.panel,.book,.topic-card,.callout,.compare>div,.faq details{border-color:rgba(189,153,130,.35);box-shadow:0 16px 42px rgba(72,39,24,.07)}
        .card img{aspect-ratio:16/11;object-fit:cover}.card h3,.product h4{letter-spacing:-.025em}
        .page-hero .inner{grid-template-columns:.92fr 1.08fr;gap:42px}.page-hero img{aspect-ratio:5/4;min-height:430px;border:0;box-shadow:0 28px 70px rgba(61,36,27,.16)}
        .panel img,.content-figure img{object-fit:cover;filter:saturate(.94) contrast(1.02)}
        .content-figure{border:0}.content-figure img{aspect-ratio:16/11}
        .eyebrow{background:#efe0d2;padding:8px 13px}.btn{padding:12px 18px}.btn.primary{box-shadow:0 10px 26px rgba(159,71,40,.22)}
        .proof div{background:rgba(255,255,255,.8);backdrop-filter:blur(8px)}
        .footer{background:#71351f}.footer a,.footer span,.footnote{opacity:1}
        @media(max-width:900px){.hero-grid,.page-hero .inner{grid-template-columns:1fr}.hero-art img{min-height:0;aspect-ratio:5/4}.page-hero img{min-height:0;aspect-ratio:5/4}.hero-copy{max-width:760px}.hero{padding-top:28px}}
        @media(max-width:560px){body{font-size:14px}.display{font-size:44px}.hero-art{border-radius:26px}.hero-art img,.page-hero img{aspect-ratio:4/3}.page-hero img{border-radius:24px}}
      `;
      d.head.appendChild(style);
    }
  }

  function replaceIllustrationsWithPhotos() {
    const images = [...d.querySelectorAll('img')];
    images.forEach((img, index) => {
      const current = img.getAttribute('src') || '';
      const key = Object.keys(photoMap).find((name) => current.endsWith(name));
      if (!key || img.dataset.photoUpgraded === '1') return;
      img.src = photoMap[key];
      img.dataset.photoUpgraded = '1';
      img.decoding = 'async';
      if (index === 0 || key === 'hero.svg') {
        img.loading = 'eager';
        img.fetchPriority = 'high';
      } else {
        img.loading = 'lazy';
      }
    });
  }

  function applyAccessibilityFixes() {
    if (!d.querySelector('style[data-lumi-a11y]')) {
      const style = d.createElement('style');
      style.dataset.lumiA11y = '1';
      style.textContent = ':root{--clay:#9f4728}.footer{color:#fff}.footer a,.footer span,.footnote{opacity:1}';
      d.head.appendChild(style);
    }

    let sequence = 0;
    d.querySelectorAll('.field').forEach((field) => {
      const label = field.querySelector('label');
      const control = field.querySelector('input, select, textarea');
      if (!label || !control) return;
      if (!control.id) {
        sequence += 1;
        control.id = `lumi-${pageKey}-field-${sequence}`;
      }
      label.htmlFor = control.id;
    });
  }

  function businessNode() {
    return {
      '@type': 'PetStore',
      '@id': `${siteRoot}/#business`,
      name: 'Lumi Pet Shop',
      url: `${siteRoot}/`,
      telephone: '+84989979675',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '27 Võ Trường Toản',
        addressLocality: 'Phường Gia Định',
        addressRegion: 'TP.HCM',
        addressCountry: 'VN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 10.8022901,
        longitude: 106.6997529
      }
    };
  }

  function primaryNode() {
    if (['spa', 'grooming', 'hotel'].includes(pageKey)) {
      return {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        url: pageUrl,
        name: names[pageKey],
        provider: { '@id': `${siteRoot}/#business` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Bình Thạnh, TP.HCM' }
      };
    }
    if (pageKey === 'shop') {
      return { '@type': 'CollectionPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] };
    }
    if (pageKey === 'contact') {
      return { '@type': 'ContactPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] };
    }
    if (pageKey === 'about') {
      return { '@type': 'AboutPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] };
    }
    if (pageKey === 'home') {
      return { '@type': 'WebSite', '@id': `${siteRoot}/#website`, url: `${siteRoot}/`, name: names.home, inLanguage: 'vi-VN' };
    }
    return { '@type': 'WebPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] || names.home };
  }

  function faqNode() {
    const questions = [...app.querySelectorAll('.long-faq details')]
      .map((details) => {
        const question = details.querySelector('summary')?.textContent?.trim();
        const answer = details.querySelector('p')?.textContent?.trim();
        if (!question || !answer) return null;
        return {
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        };
      })
      .filter(Boolean);
    if (!questions.length) return null;
    return { '@type': 'FAQPage', mainEntity: questions };
  }

  function injectStructuredData() {
    d.querySelectorAll('script[data-lumi-schema]').forEach((node) => node.remove());
    const graph = [businessNode(), primaryNode()];
    if (pageKey !== 'home') {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Lumi Pet', item: `${siteRoot}/` },
          { '@type': 'ListItem', position: 2, name: names[pageKey] || names.home, item: pageUrl }
        ]
      });
    }
    const faq = faqNode();
    if (faq) graph.push(faq);

    const script = d.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.lumiSchema = '1';
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    d.head.appendChild(script);
  }

  applyVisualUpgrade();
  replaceIllustrationsWithPhotos();

  fetch(contentUrl, { credentials: 'same-origin' })
    .then((response) => {
      if (!response.ok) throw new Error(`CONTENT_${response.status}`);
      return response.text();
    })
    .then((raw) => {
      app.insertAdjacentHTML('beforeend', resolveInternalLinks(raw));
      replaceIllustrationsWithPhotos();
      applyAccessibilityFixes();
      injectStructuredData();
      app.dataset.content = 'loaded';
      d.documentElement.classList.add('longform-loaded', 'lumi-photo-upgrade');
    })
    .catch((error) => {
      console.error('LUMI_CONTENT_LOAD_FAILED', pageKey, error?.message || error);
      app.dataset.content = 'failed';
    });
})();
