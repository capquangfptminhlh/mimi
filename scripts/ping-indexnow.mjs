import https from 'node:https';

const HOST = 'lumipet.vn';
const KEY = 'c8f4a2e9b1d7403e9a5c6f2d8b1e4a70';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/spa-thu-cung-binh-thanh/`,
  `https://${HOST}/grooming-cho-meo-binh-thanh/`,
  `https://${HOST}/khach-san-thu-cung-binh-thanh/`,
  `https://${HOST}/khach-san-thu-cung-tet-binh-thanh/`,
  `https://${HOST}/spa-cho-meo-don-noel-tet-binh-thanh/`,
  `https://${HOST}/bang-gia-spa-thu-cung/`,
  `https://${HOST}/tam-cho-phuong-gia-dinh/`,
  `https://${HOST}/tam-meo-phuong-gia-dinh/`,
  `https://${HOST}/cat-tia-long-cho-phuong-gia-dinh/`,
  `https://${HOST}/khach-san-thu-cung-phuong-gia-dinh/`,
  `https://${HOST}/spa-thu-cung-phuong-binh-thanh/`,
  `https://${HOST}/spa-thu-cung-phuong-binh-loi-trung/`,
  `https://${HOST}/spa-thu-cung-phuong-thanh-my-tay/`,
  `https://${HOST}/spa-thu-cung-phuong-binh-quoi/`,
  `https://${HOST}/spa-thu-cung-phuong-cau-kieu-phu-nhuan/`,
  `https://${HOST}/spa-thu-cung-phuong-duc-nhuan-phu-nhuan/`,
  `https://${HOST}/spa-thu-cung-phuong-phu-nhuan/`,
  `https://${HOST}/spa-thu-cung-phuong-tan-dinh-quan-1/`,
  `https://${HOST}/spa-thu-cung-phuong-sai-gon-quan-1/`,
  `https://${HOST}/spa-thu-cung-phuong-hanh-thong-go-vap/`,
  `https://${HOST}/spa-thu-cung-phuong-an-nhon-go-vap/`,
  `https://${HOST}/spa-thu-cung-phuong-an-khanh-thao-dien/`,
  `https://${HOST}/spa-thu-cung-quan-phu-nhuan/`,
  `https://${HOST}/spa-thu-cung-quan-1/`,
  `https://${HOST}/spa-thu-cung-quan-go-vap/`,
  `https://${HOST}/spa-thu-cung-quan-2-thao-dien/`,
  `https://${HOST}/spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/`,
  `https://${HOST}/tam-cho-meo-gan-cho-ba-chieu/`,
  `https://${HOST}/tam-cho-meo-gan-phan-xich-long-mieu-noi/`,
  `https://${HOST}/tam-cho-meo-gan-vinhomes-hang-xanh/`,
  `https://${HOST}/gioi-thieu/`,
  `https://${HOST}/lien-he/`,
  `https://${HOST}/dat-lich/`,
  `https://${HOST}/dat-phong/`,
  `https://${HOST}/bai-viet/`,
  `https://${HOST}/bai-viet/spa-tam-cho-meo-truc-phan-dang-luu-bach-dang-le-van-duyet/`,
  `https://${HOST}/bai-viet/spa-gui-cho-meo-truc-dinh-bo-linh-xo-viet-nghe-tinh-chu-van-an/`,
  `https://${HOST}/bai-viet/tam-cho-meo-truc-no-trang-long-le-quang-dinh-phan-van-tri/`,
  `https://${HOST}/bai-viet/spa-khach-san-cho-meo-nguyen-huu-canh-dien-bien-phu-vinhomes/`,
  `https://${HOST}/bai-viet/spa-cho-meo-phan-xich-long-hai-ba-trung-dinh-tien-hoang/`,
  `https://${HOST}/bai-viet/cat-tia-long-poodle-binh-thanh-gia-bao-nhieu/`,
  `https://${HOST}/bai-viet/go-roi-long-cho-meo-bi-bet-sat-da-binh-thanh/`,
  `https://${HOST}/bai-viet/tam-cho-bi-nam-ve-ran-viem-da-luu-y-an-toan/`,
  `https://${HOST}/bai-viet/cho-meo-con-may-thang-di-spa-duoc-bao-lau-tam-1-lan/`,
  `https://${HOST}/bai-viet/tam-cat-tia-cho-bichon-shih-tzu-maltese-binh-thanh/`,
  `https://${HOST}/bai-viet/dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh/`,
  `https://${HOST}/bai-viet/gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh/`,
  `https://${HOST}/bai-viet/khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026/`,
  `https://${HOST}/bai-viet/spa-cho-meo-mo-cua-toi-binh-thanh/`,
  `https://${HOST}/bai-viet/spa-meo-khong-dung-long-say-binh-thanh/`,
  `https://${HOST}/bai-viet/gui-meo-cho-dip-tet-binh-thanh/`,
  `https://${HOST}/bai-viet/cat-tia-long-corgi-mong-dao-binh-thanh/`,
  `https://${HOST}/bai-viet/cat-tia-long-phoc-soc-pomeranian-binh-thanh/`,
  `https://${HOST}/bai-viet/tam-cho-lon-husky-golden-samoyed-binh-thanh/`,
  `https://${HOST}/bai-viet/cao-long-meo-binh-thanh-gia-bao-nhieu/`,
  `https://${HOST}/bai-viet/tam-meo-anh-long-ngan-long-dai-het-nhon-duoi/`,
  `https://${HOST}/bai-viet/vat-tuyen-hoi-cho-khi-nao-can/`,
  `https://${HOST}/bai-viet/tam-cho-meo-cu-dan-vinhomes-central-park-landmark-81/`,
  `https://${HOST}/bai-viet/spa-tam-cho-meo-saigon-pearl-the-manor-sunwah-pearl/`,
  `https://${HOST}/bai-viet/tam-cat-tia-cho-meo-city-garden-soho-premier-wilton-tower/`,
  `https://${HOST}/bai-viet/spa-gui-cho-meo-richmond-city-saigonres-plaza-nguyen-xi/`,
  `https://${HOST}/bai-viet/spa-tam-cho-meo-botanic-towers-orchard-garden-phan-xich-long/`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
});

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    let body = '';
    res.on('data', (c) => (body += c));
    res.on('end', () => {
      console.log(`IndexNow response: HTTP ${res.statusCode} (${urlList.length} URLs submitted)`);
      if (body) console.log('Body:', body);
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('SUCCESS: Bing / ChatGPT Search / IndexNow accepted the URL batch!');
        process.exit(0);
      } else {
        console.warn('Warning: IndexNow returned non-2xx status:', res.statusCode);
        process.exit(0);
      }
    });
  }
);

req.on('error', (err) => {
  console.error('IndexNow request failed:', err.message);
  process.exit(1);
});

req.write(payload);
req.end();
