import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');

// 1. Replace fake Fast-Track/90K banner in bang-gia-spa-thu-cung & dat-lich
const honestBanner = `<div class="lumi-honest-banner" style="background: linear-gradient(90deg, #f97316, #f59e0b, #14b8a6); color: #fff; padding: 12px 18px; border-radius: 16px; margin: 14px 0; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; box-shadow: 0 6px 18px rgba(249,115,22,0.22);"><div style="display:flex; align-items:center; gap:8px;"><span>🐾</span><span>Đặt lịch trước để được phục vụ tốt nhất · Đến đúng giờ hẹn tránh để boss chờ lâu</span></div><span style="background: rgba(255,255,255,0.22); padding: 4px 12px; border-radius: 999px; font-size: 11px; text-transform: uppercase;">An toàn · Không gây stress</span></div>`;

for (const rel of ['public/bang-gia-spa-thu-cung/index.html', 'public/dat-lich/index.html']) {
  const f = path.join(ROOT, rel);
  let html = fs.readFileSync(f, 'utf8');
  html = html.replace(/<div class="cro-fast-track-banner"[\s\S]*?<\/div>\s*<\/div>/, honestBanner);
  // In case banner was nested differently (1 inner div)
  html = html.replace(/<div class="cro-fast-track-banner"[\s\S]*?<\/span>\s*<\/div>/, honestBanner);
  fs.writeFileSync(f, html, 'utf8');
}

// 2. Replace fake features across all public HTML, llms.txt, llms-full.txt, and scripts/unify-static-shell.mjs
const textReplacements = [
  // Fast-track & 90K gift
  [/HÔM NAY CHỈ CÒN 02 SUẤT FAST-TRACK[^<"]*/gi, 'Đặt lịch trước để được phục vụ tốt nhất · Tránh để boss chờ lâu'],
  [/Tặng Gói Đặc Quyền 90\.000đ[^<"]*/gi, 'Cam kết an toàn · Không gây stress cho boss'],
  [/🎁 Tặng soi da UV &amp; nơ cổ khi đặt lịch web/gi, '✓ Đặt lịch trước để phục vụ nhanh, không chờ lâu'],
  [/🎁 Tặng soi da UV & nơ cổ khi đặt lịch web/gi, '✓ Đặt lịch trước để phục vụ nhanh, không chờ lâu'],
  // Wood UV lamp / soi da / nơ / súp thưởng
  [/và soi da đèn Wood kiểm tra nấm 0đ/gi, 'và tắm xả sản phẩm cao cấp dịu nhẹ'],
  [/<li><strong>Soi da đèn Wood kiểm tra nấm\/ký sinh trùng \(0đ\):<\/strong> Thực hiện trước mặt ba mẹ trong 30 giây đầu nhận bé\.<\/li>/gi, '<li><strong>Kiểm tra tổng quát lông da trước khi tắm:<\/strong> Đánh giá độ rối và tình trạng da để chọn sữa tắm phù hợp nhất cho bé.<\/li>'],
  [/<li><strong>Tiếp nhận &amp; làm quen tâm lý:<\/strong> Cho bé ngửi tay làm quen, thưởng nhẹ súp thưởng \(khi ba mẹ đồng ý\) để bé thả lỏng trước khi lên bàn\.<\/li>/gi, '<li><strong>Tiếp nhận &amp; làm quen nhẹ nhàng:<\/strong> Cho bé ngửi tay làm quen, vuốt ve trấn an để bé thả lỏng trước khi lên bàn.<\/li>'],
  [/<li><strong>Soi da bằng đèn UV Wood \(0đ\):<\/strong> Kiểm tra nhanh các mảng gàu, nấm da, bọ chét hoặc vết trầy ẩn dưới lớp lông dày để chọn đúng dòng sữa tắm\.<\/li>/gi, '<li><strong>Kiểm tra tình trạng lông da:<\/strong> Kiểm tra kỹ độ rối bết và tình trạng da của bé để chọn dòng sữa tắm phù hợp và báo trước nếu cần gỡ rối.<\/li>'],
  [/<li><strong>Xịt dưỡng thơm, đeo nơ &amp; bàn giao Phiếu kiểm tra da lông:<\/strong> Xịt dưỡng collagen dịu nhẹ, tặng nơ\/khăn cổ xinh xắn và bàn giao phiếu ghi chú tình trạng da, tai, lông để ba mẹ theo dõi tại nhà\.<\/li>/gi, '<li><strong>Sấy chải hoàn thiện &amp; dưỡng thơm lông:<\/strong> Chải tơi mượt, xịt dưỡng lông dịu nhẹ và trao đổi lại tình trạng lông da thực tế khi giao bé cho ba mẹ.<\/li>'],
  [/Tiệm có hỗ trợ soi da bằng đèn Wood phát hiện dấu hiệu nấm\/ve rận ban đầu trước khi tắm, nhưng không chẩn đoán hay điều trị bệnh thay bác sĩ thú y\./gi, 'Tiệm chỉ thực hiện chăm sóc vệ sinh lông da bên ngoài, không chẩn đoán hay điều trị bệnh thay bác sĩ thú y.'],
  [/Tại quầy có hỗ trợ soi da đèn Wood kiểm tra dấu hiệu nấm\/ve rận ban đầu, nhưng nếu bé cần khám hoặc điều trị y khoa, tiệm sẽ khuyên ba mẹ đưa bé tới phòng khám thú y\./gi, 'Nếu bé có dấu hiệu bệnh lý da liễu nặng hoặc bệnh nội khoa, tiệm luôn khuyên ba mẹ đưa bé tới bác sĩ thú y thăm khám.'],
  [/Tiệm có hỗ trợ soi da bằng đèn Wood miễn phí 0đ để phát hiện sớm dấu hiệu nấm\/ve rận trước khi tắm; các trường hợp bệnh lý nặng sẽ được hướng dẫn đến bác sĩ thú y\./gi, 'Các trường hợp bệnh lý da liễu nặng hoặc bệnh truyền nhiễm sẽ được hướng dẫn đến bác sĩ thú y thăm khám.'],
  [/Tại quầy có dịch vụ \*\*soi da miễn phí 0đ bằng đèn UV Wood\*\* trong 30 giây trước khi tắm để giúp chủ nhận biết sớm mảng nấm, gàu hoặc ve rận nhằm chọn dòng sữa tắm phù hợp\./gi, 'Trước khi tắm, nhân viên kiểm tra trực quan tình trạng lông rối và da để chọn dòng sữa tắm phù hợp cho bé.'],
  [/soi da đèn Wood 0đ, /gi, 'kiểm tra tình trạng da lông, '],
  [/soi da đèn Wood 0đ/gi, 'kiểm tra tình trạng lông da'],
  [/soi da đèn Wood kiểm tra nấm\/ve rận, /gi, 'kiểm tra tình trạng lông da, '],
  [/Tiệm hỗ trợ soi da đèn Wood 0đ và có gói sữa tắm hỗ trợ kiểm soát nấm/gi, 'Tiệm có gói sữa tắm chuyên dụng hỗ trợ kiểm soát nấm'],
  [/Có\. Trước khi tắm, nhân viên soi da miễn phí bằng đèn Wood trong 30 giây để phát hiện sớm mảng nấm\/ve rận và tư vấn sữa tắm phù hợp\. Nếu tình trạng viêm da nặng, tiệm sẽ khuyên ba mẹ đưa bé đi khám bác sĩ thú y\./gi, 'Trước khi tắm, nhân viên kiểm tra trực quan tình trạng da lông để tư vấn dòng sữa tắm phù hợp (có tùy chọn sữa tắm hỗ trợ nấm, ve rận). Nếu bé bị viêm da nặng, tiệm sẽ khuyên ba mẹ đưa bé đi khám bác sĩ thú y.'],
  [/1\. Soi da bằng đèn Wood phát hiện nấm\/ve rận trước mặt chủ \(0đ\)\./gi, '1. Kiểm tra trực quan tình trạng lông da và độ rối trước khi tắm.'],
  [/2\. Soi da đèn UV Wood 0đ kiểm tra nấm\/gàu\/ve rận\./gi, '2. Kiểm tra tình trạng lông da để chọn dòng sữa tắm phù hợp.'],
  [/\(thưởng súp thưởng nếu chủ đồng ý\)/gi, '(vuốt ve làm quen dịu nhẹ)'],
  [/bằng súp thưởng trước khi chạm vào kéo\/tông đơ/gi, 'bằng thao tác vuốt ve dịu nhẹ trước khi bắt đầu'],
  [/đeo nơ cổ & bàn giao phiếu kiểm tra sức khỏe da lông/gi, 'dưỡng lông mượt thơm & trao đổi tình trạng lông da khi trả bé'],
  [/đeo nơ\/khăn cổ xinh xắn & bàn giao phiếu ghi chú tình trạng da lông khi trả bé/gi, 'chải hoàn thiện bông mượt và trao đổi tình trạng lông da với chủ khi trả bé'],
  [/, soi da đèn Wood 0đ/gi, ''],
  [/bằng pate\/súp thưởng thơm hoặc trộn thức ăn quen/gi, 'bằng thức ăn quen bụng của bé hoặc chia nhỏ bữa'],
  // Video after 15 mins -> Daily video updates
  [/cam kết gửi <strong>video check-in sau 15 phút nhận bé<\/strong> qua Zalo/gi, 'cam kết <strong>quay video tương tác gửi Zalo mỗi ngày</strong> cho ba mẹ yên tâm'],
  [/gửi video check-in sau 15 phút nhận phòng/gi, 'quay video tương tác mỗi ngày'],
  [/gửi video check-in sau 15 phút &amp; cập nhật mỗi ngày qua Zalo/gi, 'quay video tương tác mỗi ngày gửi Zalo'],
  [/gửi video check-in sau 15 phút/gi, 'quay video tương tác mỗi ngày'],
  [/Video check-in sau 15 phút nhận phòng/gi, 'Quay video tương tác mỗi ngày'],
  [/Video Check-in sau 15 phút &amp; báo cáo hằng ngày:<\/strong> 15 phút sau khi ba mẹ rời đi, nhân viên gửi clip ngắn cảnh bé ăn súp thưởng hoặc nằm nghỉ qua Zalo để ba mẹ yên tâm đi công tác\/du lịch\./gi, 'Quay video tương tác mỗi ngày:</strong> Nhân viên quay video cập nhật tình hình ăn uống, nghỉ ngơi của bé gửi qua Zalo hằng ngày để ba mẹ yên tâm công tác hoặc du lịch.'],
  [/Ổn định phòng riêng &amp; gửi Video Check-in sau 15 phút:<\/strong> Đặt đồ quen mùi của bé vào phòng giúp bé giảm lo âu, sau đó quay clip thực tế gửi ngay qua Zalo cho chủ\./gi, 'Ổn định phòng riêng sạch sẽ:</strong> Đặt đồ quen mùi của bé vào phòng giúp bé giảm lo âu và làm quen không gian nhanh chóng.'],
  [/Đúng 15 phút sau khi check-in, nhân viên sẽ gửi video đầu tiên qua Zalo để bạn yên tâm, sau đó tiếp tục gửi hình ảnh\/video tương tác mỗi ngày\./gi, 'Nhân viên sẽ quay video tương tác cập nhật tình hình ăn uống, nghỉ ngơi của bé gửi trực tiếp qua Zalo mỗi ngày.'],
  [/gửi video check-in sau 15 phút nhận bé qua Zalo/gi, 'quay video tương tác gửi Zalo mỗi ngày'],
  [/gửi video gửi Zalo sau 15 phút nhận bé kèm báo cáo mỗi ngày/gi, 'quay video tương tác gửi Zalo mỗi ngày'],
  [/cam kết quay video gửi Zalo sau 15 phút nhận bé kèm báo cáo mỗi ngày/gi, 'quay video tương tác gửi Zalo mỗi ngày'],
  [/cam kết gửi clip tương tác sau 15 phút nhận bé, kèm báo cáo tình hình ăn uống, vệ sinh và vui chơi 3 bữa mỗi ngày qua Zalo cho ba mẹ yên tâm/gi, 'quay video tương tác gửi trực tiếp qua Zalo mỗi ngày để ba mẹ yên tâm theo dõi tình hình ăn uống và nghỉ ngơi của bé'],
  [/gửi video check-in sau 15 phút nhận phòng Hotel và cập nhật hằng ngày qua Zalo/gi, 'quay video tương tác hằng ngày gửi qua Zalo cho ba mẹ'],
  [/\*\*cam kết gửi Video Check-in qua Zalo sau 15 phút nhận bé\*\* và cập nhật video tương tác mỗi ngày/gi, '**quay video tương tác gửi trực tiếp qua Zalo mỗi ngày**'],
  [/Trả kèm phiếu ghi nhận tình trạng tai, da, lông và tuyến hôi sau mỗi ca Spa; /gi, 'Trao đổi rõ tình trạng lông da khi trả bé; '],
  // Thẻ tích điểm
  [/<div class="notice"><strong>Chương trình Thẻ Tích Điểm Khách Hàng Thân Thiết:<\/strong>[\s\S]*?<\/div>/gi, '<div class="notice"><strong>Đặt lịch trước tiện lợi:</strong> Ba mẹ nên nhắn Zalo <strong>0989 979 675</strong> hoặc đặt lịch qua website trước khi đến để tiệm sắp xếp khung giờ phù hợp, tránh để boss chờ lâu.</div>'],
];

function walkFiles(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkFiles(p));
    else if (/\.(html|txt|mjs)$/.test(e.name)) out.push(p);
  }
  return out;
}

const targets = [
  ...walkFiles(path.join(ROOT, 'public')),
  path.join(ROOT, 'scripts', 'unify-static-shell.mjs'),
];

let cleanedCount = 0;
for (const f of targets) {
  const orig = fs.readFileSync(f, 'utf8');
  let next = orig;
  for (const [re, rep] of textReplacements) {
    next = next.replace(re, rep);
  }
  if (next !== orig) {
    fs.writeFileSync(f, next, 'utf8');
    cleanedCount++;
  }
}

// 3. Inject fresh Vietnamese photos into core static service pages & update og:image
const visualInjections = [
  {
    file: 'public/spa-thu-cung-binh-thanh/index.html',
    img: '../images/vn-bath-dog.jpg',
    alt: 'Groomer Việt Nam tại Lumi Pet Bình Thạnh đang tắm vệ sinh nhẹ nhàng cho cún cưng',
    caption: 'Không gian tắm vệ sinh sạch sẽ, dịu nhẹ, không gây stress cho boss tại Lumi Pet Bình Thạnh',
  },
  {
    file: 'public/grooming-cho-meo-binh-thanh/index.html',
    img: '../images/vn-hero-spa.jpg',
    alt: 'Groomer Việt Nam đang sấy chải và cắt tỉa lông cho bé Poodle tại Lumi Pet Bình Thạnh',
    caption: 'Cắt tỉa gọn gàng, sấy chải nhẹ nhàng giúp bé xinh rạng rỡ tại 27 Võ Trường Toản',
  },
  {
    file: 'public/khach-san-thu-cung-binh-thanh/index.html',
    img: '../images/vn-hotel-cabins.jpg',
    alt: 'Phòng kính riêng sạch sẽ có máy lạnh 24/24 tại Khách sạn thú cưng Lumi Pet Bình Thạnh',
    caption: 'Phòng lưu trú riêng sạch sẽ, máy lạnh mát mẻ 24/24 và quay video tương tác mỗi ngày',
  },
  {
    file: 'public/gioi-thieu/index.html',
    img: '../images/vn-spa-cat.jpg',
    alt: 'Nhân viên Lumi Pet Bình Thạnh chăm sóc nhẹ nhàng cho bé mèo tại phòng riêng',
    caption: 'Lumi Pet Bình Thạnh — Chăm sóc tận tâm, yêu thương boss như gia đình',
  },
  {
    file: 'public/lien-he/index.html',
    img: '../images/vn-pet-shop.jpg',
    alt: 'Góc cửa hàng Lumi Pet Shop – Spa & Hotel 24/7 tại 27 Võ Trường Toản, Bình Thạnh',
    caption: 'Lumi Pet Shop – Spa & Hotel 24/7 tại 27 Võ Trường Toản, Phường Gia Định, Bình Thạnh',
  },
];

for (const item of visualInjections) {
  const f = path.join(ROOT, item.file);
  let html = fs.readFileSync(f, 'utf8');
  if (!html.includes('lumi-vn-showcase')) {
    const figureHtml = `<figure class="lumi-vn-showcase lumi-reveal" style="margin:0 0 24px;border-radius:26px;overflow:hidden;border:1px solid #ffead7;background:#fff;box-shadow:0 12px 32px rgba(103,65,31,0.09);"><img src="${item.img}" alt="${item.alt}" loading="lazy" style="width:100%;height:clamp(220px,36vw,380px);object-fit:cover;display:block;"><figcaption style="padding:12px 18px;font-size:13px;font-weight:700;color:#64748b;background:#fffaf3;">🐾 ${item.caption}</figcaption></figure>`;
    html = html.replace('<div class="grid">', `${figureHtml}\n  <div class="grid">`);
    fs.writeFileSync(f, html, 'utf8');
  }
}

console.log(`Sanitized ${cleanedCount} files & injected new Vietnamese photography into ${visualInjections.length} core pages.`);
