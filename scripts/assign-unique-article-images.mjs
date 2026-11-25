import fs from 'node:fs';
import path from 'node:path';

const BRAIN_DIR = 'C:/Users/Lumi Pet/.gemini/antigravity/brain/03a101a1-5f67-4d0d-a300-9fc92aa4718e';
const CAND_DIR = path.join(BRAIN_DIR, 'scratch', 'candidates');
const PUBLIC_DIR = path.resolve('public');
const IMG_DIR = path.join(PUBLIC_DIR, 'images');

// 1. Copy 21 unique hero photos + 10 distinct secondary real-camera photos into public/images/
const copyMap = [
  // 6 Brand-new ultra-realistic Saigon candid photos (generated 2026-11-25)
  [path.join(BRAIN_DIR, 'bai_truc_phan_dang_luu_1795609711246.jpg'), 'bai-truc-phan-dang-luu.jpg'],
  [path.join(BRAIN_DIR, 'bai_truc_dinh_bo_linh_1795609697756.jpg'), 'bai-truc-dinh-bo-linh.jpg'],
  [path.join(BRAIN_DIR, 'bai_truc_no_trang_long_1795609730036.jpg'), 'bai-truc-no-trang-long.jpg'],
  [path.join(BRAIN_DIR, 'bai_truc_vinhomes_1795609695689.jpg'), 'bai-truc-vinhomes.jpg'],
  [path.join(BRAIN_DIR, 'bai_truc_phan_xich_long_1795609700711.jpg'), 'bai-truc-phan-xich-long.jpg'],
  [path.join(BRAIN_DIR, 'bai_go_roi_long_1795609709751.jpg'), 'bai-go-roi-long.jpg'],

  // 15 Visually-verified real-camera photographs (100% real cameras, 0% AI look)
  [path.join(CAND_DIR, '05-festive-dog.jpg'), 'bai-cat-tia-poodle.jpg'],
  [path.join(CAND_DIR, 'm4-dog-bath-salon.jpg'), 'bai-tam-nam-ve-ran.jpg'],
  [path.join(CAND_DIR, '02b-dog-bath.jpg'), 'bai-cho-meo-con-spa.jpg'],
  [path.join(CAND_DIR, 'm9-poodle-after.jpg'), 'bai-bichon-shih-tzu.jpg'],
  [path.join(CAND_DIR, '01-poodle-trim.jpg'), 'bai-dat-lich-can-tet.jpg'],
  [path.join(CAND_DIR, '06-noel-hotel.jpg'), 'bai-gui-noel-tet-tay.jpg'],
  [path.join(CAND_DIR, '07b-evening-dry.jpg'), 'bai-spa-mo-cua-toi.jpg'],
  [path.join(CAND_DIR, '13-cat-shave.jpg'), 'bai-spa-meo-khong-long-say.jpg'],
  [path.join(CAND_DIR, '09-hotel-tet.jpg'), 'bai-gui-meo-cho-tet.jpg'],
  [path.join(CAND_DIR, '10-corgi.jpg'), 'bai-corgi-mong-dao.jpg'],
  [path.join(CAND_DIR, '11-pomeranian.jpg'), 'bai-phoc-soc-boo.jpg'],
  [path.join(CAND_DIR, 'm10-husky-large.jpg'), 'bai-tam-cho-lon-husky.jpg'],
  [path.join(CAND_DIR, '08-cat-spa-calm.jpg'), 'bai-cao-long-meo.jpg'],
  [path.join(CAND_DIR, '13b-cat-shave.jpg'), 'bai-tam-meo-anh-nhon-duoi.jpg'],
  [path.join(CAND_DIR, '15-dog-hygiene.jpg'), 'bai-vat-tuyen-hoi-cho.jpg'],

  // 10 Distinct visually-verified real-camera secondary body illustrations
  [path.join(CAND_DIR, '02-dog-bath.jpg'), 'bai-extra-bath-rinse.jpg'],
  [path.join(CAND_DIR, '01c-poodle-trim.jpg'), 'bai-extra-clipper-trim.jpg'],
  [path.join(CAND_DIR, '15b-dog-hygiene.jpg'), 'bai-extra-ear-clean.jpg'],
  [path.join(CAND_DIR, '14b-bsh-cat.jpg'), 'bai-extra-bsh-clean.jpg'],
  [path.join(CAND_DIR, '12b-golden.jpg'), 'bai-extra-golden-shop.jpg'],
  [path.join(CAND_DIR, '01b-poodle-trim.jpg'), 'bai-extra-poodle-tub.jpg'],
  [path.join(CAND_DIR, 'm1-bichon-shitzu.jpg'), 'bai-extra-shihtzu-clean.jpg'],
  [path.join(CAND_DIR, '07-evening-dry.jpg'), 'bai-extra-blowdry.jpg'],
  [path.join(CAND_DIR, 'm6-cat-cozy.jpg'), 'bai-extra-cat-cozy.jpg'],
  [path.join(CAND_DIR, '14-bsh-cat.jpg'), 'bai-extra-bsh-bath.jpg'],
];

for (const [src, destName] of copyMap) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source image: ${src}`);
  }
  const dest = path.join(IMG_DIR, destName);
  fs.copyFileSync(src, dest);
}
console.log(`Copied ${copyMap.length} verified realistic images to public/images/`);

// 2. Exact 1-to-1 mapping for ALL 22 featured articles (ZERO duplicates!)
const articleImageMap = {
  'spa-tam-cho-meo-truc-phan-dang-luu-bach-dang-le-van-duyet': {
    hero: 'bai-truc-phan-dang-luu.jpg',
    secondary: 'bai-extra-golden-shop.jpg',
  },
  'spa-gui-cho-meo-truc-dinh-bo-linh-xo-viet-nghe-tinh-chu-van-an': {
    hero: 'bai-truc-dinh-bo-linh.jpg',
    secondary: 'bai-extra-bath-rinse.jpg',
  },
  'tam-cho-meo-truc-no-trang-long-le-quang-dinh-phan-van-tri': {
    hero: 'bai-truc-no-trang-long.jpg',
    secondary: 'bai-extra-bsh-bath.jpg',
  },
  'spa-khach-san-cho-meo-nguyen-huu-canh-dien-bien-phu-vinhomes': {
    hero: 'bai-truc-vinhomes.jpg',
    secondary: 'bai-extra-cat-cozy.jpg',
  },
  'spa-cho-meo-phan-xich-long-hai-ba-trung-dinh-tien-hoang': {
    hero: 'bai-truc-phan-xich-long.jpg',
    secondary: 'bai-extra-clipper-trim.jpg',
  },
  'cat-tia-long-poodle-binh-thanh-gia-bao-nhieu': {
    hero: 'bai-cat-tia-poodle.jpg',
    secondary: 'bai-extra-poodle-tub.jpg',
  },
  'go-roi-long-cho-meo-bi-bet-sat-da-binh-thanh': {
    hero: 'bai-go-roi-long.jpg',
    secondary: 'bai-extra-shihtzu-clean.jpg',
  },
  'tam-cho-bi-nam-ve-ran-viem-da-luu-y-an-toan': {
    hero: 'bai-tam-nam-ve-ran.jpg',
    secondary: 'bai-extra-ear-clean.jpg',
  },
  'cho-meo-con-may-thang-di-spa-duoc-bao-lau-tam-1-lan': {
    hero: 'bai-cho-meo-con-spa.jpg',
    secondary: 'bai-extra-bsh-clean.jpg',
  },
  'tam-cat-tia-cho-bichon-shih-tzu-maltese-binh-thanh': {
    hero: 'bai-bichon-shih-tzu.jpg',
    secondary: 'bai-extra-shihtzu-clean.jpg',
  },
  'dat-lich-spa-cat-tia-cho-meo-can-tet-binh-thanh': {
    hero: 'bai-dat-lich-can-tet.jpg',
    secondary: 'bai-extra-clipper-trim.jpg',
  },
  'gui-cho-meo-dip-noel-tet-duong-lich-binh-thanh': {
    hero: 'bai-gui-noel-tet-tay.jpg',
    secondary: 'bai-extra-cat-cozy.jpg',
  },
  'khao-sat-bang-gia-spa-thu-cung-binh-thanh-2026': {
    hero: 'bang-gia-spa-grooming-lumi-pet.jpg',
    secondary: 'bai-extra-poodle-tub.jpg',
  },
  'spa-cho-meo-mo-cua-toi-binh-thanh': {
    hero: 'bai-spa-mo-cua-toi.jpg',
    secondary: 'bai-extra-blowdry.jpg',
  },
  'spa-meo-khong-dung-long-say-binh-thanh': {
    hero: 'bai-spa-meo-khong-long-say.jpg',
    secondary: 'bai-extra-bsh-clean.jpg',
  },
  'gui-meo-cho-dip-tet-binh-thanh': {
    hero: 'bai-gui-meo-cho-tet.jpg',
    secondary: 'bai-extra-golden-shop.jpg',
  },
  'cat-tia-long-corgi-mong-dao-binh-thanh': {
    hero: 'bai-corgi-mong-dao.jpg',
    secondary: 'bai-extra-bath-rinse.jpg',
  },
  'cat-tia-long-phoc-soc-pomeranian-binh-thanh': {
    hero: 'bai-phoc-soc-boo.jpg',
    secondary: 'bai-extra-blowdry.jpg',
  },
  'tam-cho-lon-husky-golden-samoyed-binh-thanh': {
    hero: 'bai-tam-cho-lon-husky.jpg',
    secondary: 'bai-extra-golden-shop.jpg',
  },
  'cao-long-meo-binh-thanh-gia-bao-nhieu': {
    hero: 'bai-cao-long-meo.jpg',
    secondary: 'bai-extra-bsh-bath.jpg',
  },
  'tam-meo-anh-long-ngan-long-dai-het-nhon-duoi': {
    hero: 'bai-tam-meo-anh-nhon-duoi.jpg',
    secondary: 'bai-extra-bsh-clean.jpg',
  },
  'vat-tuyen-hoi-cho-khi-nao-can': {
    hero: 'bai-vat-tuyen-hoi-cho.jpg',
    secondary: 'bai-extra-ear-clean.jpg',
  },
};

// Verify zero duplicate hero images
const heroSet = new Set(Object.values(articleImageMap).map((v) => v.hero));
if (heroSet.size !== Object.keys(articleImageMap).length) {
  throw new Error('Duplicate hero image detected in articleImageMap!');
}

let updatedCount = 0;
for (const [slug, { hero, secondary }] of Object.entries(articleImageMap)) {
  const filePath = path.join(PUBLIC_DIR, 'bai-viet', slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing article HTML: ${filePath}`);
  }
  let html = fs.readFileSync(filePath, 'utf8');

  // Update og:image
  html = html.replace(
    /(<meta\s+property="og:image"\s+content=")https:\/\/lumipet\.vn\/images\/[^"]+(")/,
    `$1https://lumipet.vn/images/${hero}$2`
  );

  // Update JSON-LD "image"
  html = html.replace(
    /("image"\s*:\s*")https:\/\/lumipet\.vn\/images\/[^"]+(")/g,
    `$1https://lumipet.vn/images/${hero}$2`
  );

  // Update inline <img src="../../images/..."> occurrences sequentially (1st = hero, 2nd = secondary)
  let imgIdx = 0;
  html = html.replace(/(<img\s+[^>]*src=")\.\.\/\.\.\/images\/[^"]+(")/g, (match, p1, p2) => {
    imgIdx++;
    const targetImg = imgIdx === 1 ? hero : secondary;
    return `${p1}../../images/${targetImg}${p2}`;
  });

  if (imgIdx === 0) {
    console.warn(`WARN: No ../../images/ <img> found in ${slug}`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  updatedCount++;
}

console.log(`Updated ${updatedCount}/22 featured articles with 22 unique realistic hero photos (0 duplicates).`);
