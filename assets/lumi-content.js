(() => {
  'use strict';
  const d = document;
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
      photo.style.cssText = [
        'display:block',
        'width:100%',
        `aspect-ratio:${aspectFor(img)}`,
        `background-image:url("${atlas}")`,
        'background-size:400% 300%',
        `background-position:${pos}`,
        'background-repeat:no-repeat',
        'background-color:#ead8ca',
        'filter:saturate(.98) contrast(1.02)',
        'overflow:hidden'
      ].join(';');
      if (img.closest('.page-hero')) photo.style.borderRadius = '32px';

      const alt = (img.getAttribute('alt') || '').trim();
      if (alt) {
        photo.setAttribute('role', 'img');
        photo.setAttribute('aria-label', alt);
      } else {
        photo.setAttribute('aria-hidden', 'true');
      }
      img.replaceWith(photo);
    });
  }

  upgrade();
  const observer = new MutationObserver(() => upgrade());
  observer.observe(d.documentElement, { childList: true, subtree: true });
})();
