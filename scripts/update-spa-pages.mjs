import fs from 'node:fs';

// 1. Update public/spa-thu-cung-binh-thanh/index.html
let spaHtml = fs.readFileSync('G:/lumi-pet-vps-workspace/public/spa-thu-cung-binh-thanh/index.html', 'utf8');

// replace canonical
spaHtml = spaHtml.replace(/https:\/\/capquangfptminhlh\.github\.io\/mimi/g, 'https://lumipet.vn');
spaHtml = spaHtml.replace('tắm vệ sinh chó từ 120.000đ, mèo từ 150.000đ', 'tắm vệ sinh chó từ 140.000đ, mèo từ 160.000đ');
spaHtml = spaHtml.replace('<strong>120.000đ</strong><p>Tắm vệ sinh chó dưới 3kg.</p><ul class="mini-list"><li>Mèo dưới 3kg: 150.000đ</li><li>Chó tắm + cạo từ 180.000đ</li><li>Chó tắm + cắt tỉa từ 260.000đ</li></ul>', '<strong>140.000đ</strong><p>Tắm vệ sinh chó dưới 3kg.</p><ul class="mini-list"><li>Mèo dưới 3kg: 160.000đ</li><li>Chó tắm + cạo từ 200.000đ</li><li>Chó tắm + cắt tỉa từ 290.000đ</li></ul>');

// Dog table in spa
const oldDogTable = `<tbody><tr><td>Dưới 3kg</td><td>120.000đ</td></tr><tr><td>3 – 6kg</td><td>170.000đ</td></tr><tr><td>6 – 9kg</td><td>220.000đ</td></tr><tr><td>9 – 12kg</td><td>270.000đ</td></tr><tr><td>12 – 18kg</td><td>350.000đ</td></tr></tbody>`;
const newDogTable = `<tbody><tr><td>Dưới 3kg</td><td>140.000đ</td></tr><tr><td>3 – 6kg</td><td>190.000đ</td></tr><tr><td>6 – 9kg</td><td>250.000đ</td></tr><tr><td>9 – 12kg</td><td>310.000đ</td></tr><tr><td>12 – 15kg</td><td>370.000đ</td></tr><tr><td>15 – 18kg</td><td>430.000đ</td></tr><tr><td>18 – 20kg</td><td>480.000đ</td></tr><tr><td>20 – 25kg</td><td>550.000đ</td></tr></tbody>`;
spaHtml = spaHtml.replace(oldDogTable, newDogTable);

// Cat table in spa
const oldCatTable = `<tbody><tr><td>Dưới 3kg</td><td>150.000đ</td></tr><tr><td>3 – 6kg</td><td>200.000đ</td></tr><tr><td>6 – 10kg</td><td>250.000đ</td></tr></tbody>`;
const newCatTable = `<tbody><tr><td>Dưới 3kg</td><td>160.000đ</td></tr><tr><td>3 – 6kg</td><td>220.000đ</td></tr><tr><td>6 – 10kg</td><td>270.000đ</td></tr></tbody>`;
spaHtml = spaHtml.replace(oldCatTable, newCatTable);
spaHtml = spaHtml.replace('Mèo tắm + cạo: từ 230.000đ đến 350.000đ theo cân nặng.', 'Mèo tắm + cạo: từ 250.000đ đến 380.000đ theo cân nặng.');
spaHtml = spaHtml.replace('Tắm vệ sinh chó bắt đầu 120.000đ cho bé dưới 3kg; mèo bắt đầu 150.000đ.', 'Tắm vệ sinh chó bắt đầu 140.000đ cho bé dưới 3kg; mèo bắt đầu 160.000đ.');
spaHtml = spaHtml.replace('Combo tắm + cắt tỉa cho chó bắt đầu 260.000đ', 'Combo tắm + cắt tỉa cho chó bắt đầu 290.000đ');

fs.writeFileSync('G:/lumi-pet-vps-workspace/public/spa-thu-cung-binh-thanh/index.html', spaHtml, 'utf8');
console.log('Updated public/spa-thu-cung-binh-thanh/index.html');

// 2. Update public/grooming-cho-meo-binh-thanh/index.html
let groomHtml = fs.readFileSync('G:/lumi-pet-vps-workspace/public/grooming-cho-meo-binh-thanh/index.html', 'utf8');
groomHtml = groomHtml.replace(/https:\/\/capquangfptminhlh\.github\.io\/mimi/g, 'https://lumipet.vn');
groomHtml = groomHtml.replace('260.000', '290.000');
groomHtml = groomHtml.replace('180.000', '200.000');
fs.writeFileSync('G:/lumi-pet-vps-workspace/public/grooming-cho-meo-binh-thanh/index.html', groomHtml, 'utf8');
console.log('Updated public/grooming-cho-meo-binh-thanh/index.html');
