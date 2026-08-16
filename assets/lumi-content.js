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
  const primaryImageNames = new Set(['hero.svg', 'spa.svg', 'grooming.svg', 'hotel.svg', 'shop.svg']);
  const pagePath = paths[pageKey] || '/';
  const pageUrl = `${siteRoot}${pagePath}`;
  const contentUrl = `${base}/content/${pageKey}.html`;

  function resolveInternalLinks(html) {
    return html.replace(/\$\{U\('([^']+)'\)\}/g, (_, path) => `${base}/${path}`);
  }

  function applyVisualUpgrade() {
    if (d.querySelector('style[data-lumi-visual-v3]')) return;
    const style = d.createElement('style');
    style.dataset.lumiVisualV3 = '1';
    style.textContent = `
      :root{--clay:#9f4728;--ink:#241814;--muted:#66554d;--shadow:0 28px 70px rgba(71,39,25,.14)}
      body{font-family:"Segoe UI Variable Text","Segoe UI",ui-sans-serif,system-ui,sans-serif;font-size:15px;letter-spacing:-.012em}
      h1,h2,.display,.book h3,.compare h3,.callout strong{font-family:"Segoe UI Variable Display","Segoe UI",ui-sans-serif,system-ui,sans-serif;letter-spacing:-.055em;font-weight:760}
      h1,h2,.display{line-height:.98}.lead,.hero-copy p{line-height:1.7}
      .brand{letter-spacing:-.04em}.brand small{letter-spacing:.16em}.links,.btn,.eyebrow,.chip,.field label{font-family:inherit}
      .hero{padding-top:34px}.hero-grid{grid-template-columns:1.03fr .97fr;gap:34px}
      .hero-art{position:relative;border-radius:32px;overflow:hidden;background:#ead8ca;border:0;box-shadow:0 30px 70px rgba(61,36,27,.18)}
      .hero-art:after{content:"";position:absolute;inset:auto 0 0;height:28%;background:linear-gradient(180deg,transparent,rgba(31,18,13,.14));pointer-events:none}
      .hero-art img{aspect-ratio:5/3;min-height:0;object-fit:cover;object-position:center;transform:scale(1.001)}
      .card,.panel,.book,.topic-card,.callout,.compare>div,.faq details{border-color:rgba(189,153,130,.35);box-shadow:0 16px 42px rgba(72,39,24,.07)}
      .card img{aspect-ratio:16/11;object-fit:cover}.card h3,.product h4{letter-spacing:-.025em}
      .page-hero .inner{grid-template-columns:1fr .9fr;gap:30px}.page-hero img{aspect-ratio:4/3;min-height:0;border:0;box-shadow:0 28px 70px rgba(61,36,27,.16)}
      .panel img,.content-figure img{object-fit:cover;filter:saturate(.96) contrast(1.02)}
      .content-figure{border:0}.content-figure img{aspect-ratio:16/11}
      .eyebrow{background:#efe0d2;padding:8px 13px}.btn{padding:12px 18px}.btn.primary{box-shadow:0 10px 26px rgba(159,71,40,.22)}
      .proof div{background:rgba(255,255,255,.8);backdrop-filter:blur(8px)}
      .footer{background:#71351f}.footer a,.footer span,.footnote{opacity:1}
      @media(max-width:900px){.hero-grid,.page-hero .inner{grid-template-columns:1fr}.hero-copy{max-width:760px}.hero{padding-top:28px}}
      @media(max-width:560px){body{font-size:14px}.display{font-size:44px}.hero-art{border-radius:26px}.page-hero img{border-radius:24px}}
    `;
    d.head.appendChild(style);
  }

  function configureLocalImages() {
    d.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src') || '';
      const name = src.split('/').pop();
      img.decoding = 'async';
      if (primaryImageNames.has(name) || img.closest('.page-hero')) {
        img.loading = 'eager';
        img.fetchPriority = name === 'hero.svg' ? 'high' : 'auto';
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
    if (pageKey === 'shop') return { '@type': 'CollectionPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] };
    if (pageKey === 'contact') return { '@type': 'ContactPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] };
    if (pageKey === 'about') return { '@type': 'AboutPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] };
    if (pageKey === 'home') return { '@type': 'WebSite', '@id': `${siteRoot}/#website`, url: `${siteRoot}/`, name: names.home, inLanguage: 'vi-VN' };
    return { '@type': 'WebPage', '@id': `${pageUrl}#page`, url: pageUrl, name: names[pageKey] || names.home };
  }

  function faqNode() {
    const questions = [...app.querySelectorAll('.long-faq details')].map((details) => {
      const question = details.querySelector('summary')?.textContent?.trim();
      const answer = details.querySelector('p')?.textContent?.trim();
      if (!question || !answer) return null;
      return { '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } };
    }).filter(Boolean);
    return questions.length ? { '@type': 'FAQPage', mainEntity: questions } : null;
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
  configureLocalImages();

  fetch(contentUrl, { credentials: 'same-origin' })
    .then((response) => {
      if (!response.ok) throw new Error(`CONTENT_${response.status}`);
      return response.text();
    })
    .then((raw) => {
      app.insertAdjacentHTML('beforeend', resolveInternalLinks(raw));
      configureLocalImages();
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
