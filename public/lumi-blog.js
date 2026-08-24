(() => {
  const script = document.currentScript;
  const rootUrl = script ? new URL('.', script.src) : new URL('./', location.href);
  const rootPath = rootUrl.pathname.endsWith('/') ? rootUrl.pathname : `${rootUrl.pathname}/`;
  const blogUrl = new URL('bai-viet/', rootUrl).href;

  const articles = [
    {
      slug: 'spa-cho-binh-thanh-gia-bao-nhieu',
      title: 'Spa chó Bình Thạnh giá bao nhiêu? Bảng giá và cách chọn dịch vụ',
      category: 'Spa & Grooming',
      excerpt: 'Xem mức giá theo cân nặng, khác nhau giữa tắm vệ sinh, tắm + cạo và tắm + cắt tỉa tại Lumi Pet.',
      image: 'https://images.pexels.com/photos/6131161/pexels-photo-6131161.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      slug: 'khach-san-thu-cung-binh-thanh-gia-bao-nhieu',
      title: 'Khách sạn thú cưng Bình Thạnh giá bao nhiêu? Cách tính theo ngày',
      category: 'Pet Hotel',
      excerpt: 'Bảng giá từ 100.000đ/ngày, cách tính ưu đãi lưu trú dài ngày và những thông tin nên chuẩn bị trước khi gửi bé.',
      image: 'https://images.pexels.com/photos/7635904/pexels-photo-7635904.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      slug: 'grooming-poodle-binh-thanh',
      title: 'Grooming Poodle ở Bình Thạnh: khi nào nên cắt tỉa và giá thế nào?',
      category: 'Poodle',
      excerpt: 'Hướng dẫn chọn tắm + cạo hay tắm + cắt tỉa cho Poodle dựa trên độ rối, form lông và cân nặng.',
      image: 'https://images.pexels.com/photos/19145875/pexels-photo-19145875.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const addKnowledgeLink = () => {
    const navs = [
      ...document.querySelectorAll('nav[aria-label="Điều hướng chính"], nav[aria-label="Điều hướng mobile"], .main-nav, .lumi-mobile-nav'),
    ];
    navs.forEach(nav => {
      if (nav.querySelector('[data-lumi-blog-link]')) return;
      const link = document.createElement('a');
      link.href = blogUrl;
      link.textContent = 'Kiến thức';
      link.dataset.lumiBlogLink = 'true';
      if (nav.classList.contains('main-nav')) link.className = '';
      else link.className = 'rounded-xl px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-orange-50 hover:text-orange-600';
      const actionBlock = nav.querySelector('.lumi-mobile-actions');
      if (actionBlock) nav.insertBefore(link, actionBlock);
      else nav.appendChild(link);
    });
  };

  const addHomepageArticles = () => {
    const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
    if (currentPath !== rootPath || document.querySelector('#lumi-latest-articles')) return;
    const main = document.querySelector('main');
    if (!main) return;

    const section = document.createElement('section');
    section.id = 'lumi-latest-articles';
    section.className = 'mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8';
    section.innerHTML = `
      <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div class="max-w-3xl">
          <span class="text-xs font-black uppercase tracking-[0.16em] text-orange-500">Kiến thức chăm sóc thú cưng</span>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Bài viết mới từ Lumi Pet</h2>
          <p class="mt-3 text-sm font-medium leading-6 text-slate-600">Giải đáp các câu hỏi khách thường tìm trước khi chọn Spa, Grooming hoặc Hotel cho bé.</p>
        </div>
        <a href="${blogUrl}" class="inline-flex items-center gap-2 text-sm font-extrabold text-orange-600">Xem tất cả bài viết →</a>
      </div>
      <div class="mt-9 grid gap-6 md:grid-cols-3">
        ${articles.map(article => `
          <a href="${new URL(`bai-viet/${article.slug}/`, rootUrl).href}" class="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
            <div class="overflow-hidden"><img src="${article.image}" alt="${article.title}" loading="lazy" decoding="async" class="h-48 w-full object-cover transition duration-700 group-hover:scale-105"></div>
            <div class="p-6">
              <span class="text-[11px] font-black uppercase tracking-[0.12em] text-orange-500">${article.category}</span>
              <h3 class="mt-2 text-xl font-black leading-snug text-slate-950">${article.title}</h3>
              <p class="mt-3 text-sm font-medium leading-6 text-slate-600">${article.excerpt}</p>
              <span class="mt-5 inline-flex text-sm font-extrabold text-teal-700">Đọc bài đầy đủ →</span>
            </div>
          </a>`).join('')}
      </div>`;
    main.appendChild(section);
  };

  const run = () => {
    addKnowledgeLink();
    addHomepageArticles();
  };

  run();
  setTimeout(run, 120);
  setTimeout(run, 500);
  const observer = new MutationObserver(() => run());
  observer.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 3000);
})();
