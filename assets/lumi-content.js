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

  const pagePath = paths[pageKey] || '/';
  const pageUrl = `${siteRoot}${pagePath}`;
  const contentUrl = `${base}/content/${pageKey}.html`;

  function resolveInternalLinks(html) {
    return html.replace(/\$\{U\('([^']+)'\)\}/g, (_, path) => `${base}/${path}`);
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

  fetch(contentUrl, { credentials: 'same-origin' })
    .then((response) => {
      if (!response.ok) throw new Error(`CONTENT_${response.status}`);
      return response.text();
    })
    .then((raw) => {
      app.insertAdjacentHTML('beforeend', resolveInternalLinks(raw));
      app.dataset.content = 'loaded';
      d.documentElement.classList.add('longform-loaded');
      injectStructuredData();
    })
    .catch((error) => {
      console.error('LUMI_CONTENT_LOAD_FAILED', pageKey, error?.message || error);
      app.dataset.content = 'failed';
    });
})();
