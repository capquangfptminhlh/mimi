import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';

const ARTICLES = [
  {
    slug: 'cat-tia-long-poodle-binh-thanh-gia-bao-nhieu',
    category: 'Grooming · Poodle',
    title: 'Cắt Tỉa Lông Poodle Bình Thạnh: Kiểu Teddy & Giá 2026',
    description:
      'Bảng giá cắt tỉa lông Poodle 2026 tại Lumi Pet Bình Thạnh (290k–520k): kiểu Teddy, mặt gấu, cắt Nhật, giữ lông không rối và quy trình sấy tay 100%.',
    h1: 'Cắt tỉa lông Poodle tại Bình Thạnh giá bao nhiêu? Các kiểu Teddy, mặt gấu đẹp & bền phom',
    dek: 'Poodle là giống chó đi Spa thường xuyên nhất nhưng cũng dễ rối bết sát da nhất nếu để quá 6 tuần. Xem bảng giá cắt tỉa Poodle 2026 theo từng cân nặng và cách chọn kiểu tỉa phù hợp thời tiết Sài Gòn.',
    heroImg: 'vn-spa-noel-tet.jpg',
    heroAlt: 'Cắt tỉa lông Poodle kiểu Teddy tròn đẹp tại Lumi Pet Bình Thạnh',
    heroCap: '✂️ Tỉa kéo tròn mặt gấu Teddy cho Poodle tại Lumi Pet 27 Võ Trường Toản — sấy tay bông tơi 100%',
    secondImg: 'vn-hero-spa.jpg',
    secondAlt: 'Chải bông và hoàn thiện phom lông cho Poodle tại Lumi Pet Phường Gia Định',
    secondCap: '🐾 Chu kỳ 4–6 tuần/lần giúp Poodle luôn giữ phom đẹp, không bết lông vùng tai, nách và kẽ chân',
    readTime: '7 phút đọc',
    bodyHtml: `
        <p><strong>Câu trả lời nhanh:</strong> Tại <strong>Lumi Pet Bình Thạnh (27 Võ Trường Toản, Phường Gia Định)</strong>, giá <strong>Combo Tắm + Cắt tỉa lông Poodle năm 2026</strong> được niêm yết rõ theo cân nặng: <strong>290.000đ</strong> (Teacup/Tiny dưới 3kg), <strong>360.000đ</strong> (Toy Poodle 3–6kg), <strong>430.000đ</strong> (Miniature 6–9kg) và <strong>520.000đ</strong> (9–12kg). Gói đã gồm cắt mài móng, nhổ/lau lông tai, cạo đệm chân &amp; bụng, vắt tuyến hôi, tắm xả 2 lần và thợ sấy tay chải bông 100%.</p>

        <h2 id="gia-poodle">1. Bảng giá cắt tỉa &amp; tắm vệ sinh Poodle 2026 tại Bình Thạnh</h2>
        <table>
          <thead><tr><th>Dòng Poodle &amp; Cân nặng</th><th>Tắm vệ sinh 10 bước</th><th>Combo Tắm + Cạo</th><th>Combo Tắm + Cắt tỉa</th></tr></thead>
          <tbody>
            <tr><td>Teacup / Tiny (&lt;3kg)</td><td>140.000đ</td><td>200.000đ</td><td><strong>290.000đ</strong></td></tr>
            <tr><td>Toy Poodle (3–6kg)</td><td>190.000đ</td><td>270.000đ</td><td><strong>360.000đ</strong></td></tr>
            <tr><td>Miniature Poodle (6–9kg)</td><td>250.000đ</td><td>340.000đ</td><td><strong>430.000đ</strong></td></tr>
            <tr><td>Poodle lớn (9–12kg)</td><td>310.000đ</td><td>410.000đ</td><td><strong>520.000đ</strong></td></tr>
          </tbody>
        </table>
        <p><em>Lưu ý phụ thu minh bạch (chỉ báo khi cần thiết):</em> Tạo kiểu đặc biệt bo tròn kỹ/mông đào 50.000đ – 100.000đ; gỡ rối nếu lông bết sát da 50.000đ – 500.000đ tùy mức độ. Bạn có thể xem chi tiết tại <a href="../../bang-gia-spa-thu-cung/">Bảng giá Spa 2026</a>.</p>

        <h2 id="kieu-poodle">2. 4 kiểu cắt tỉa lông Poodle đẹp và dễ chăm nhất tại TP.HCM</h2>
        <ul>
          <li><strong>Kiểu Gấu Teddy (Teddy Bear):</strong> Mõm bo tròn gọn, đầu tròn bông mềm, thân giữ độ dài 1–1,5cm — dễ thương, hợp với 90% bé Toy Poodle.</li>
          <li><strong>Kiểu Mùa Hè gọn gàng (Summer Cut):</strong> Thân cắt ngắn thoáng mát (6–9mm), giữ đầu tròn &amp; đuôi bông — rất hợp thời tiết nóng ẩm Sài Gòn và hạn chế bết lông vùng bụng.</li>
          <li><strong>Kiểu Nhật / Chân ống (Korean/Japanese Style):</strong> Mặt tròn gọn, tai để thả mềm hoặc cắt ngắn tròn, 4 chân tỉa ống trụ đều — cần chải lông tại nhà 2–3 lần/tuần để giữ phom.</li>
          <li><strong>Cạo máu cho Poodle con lần đầu (4–6 tháng):</strong> Nhiều chủ nuôi chọn cạo đều 1 lần lớp lông tơ mềm để lớp lông trưởng thành mọc xoăn và dày hơn.</li>
        </ul>

        <h2 id="chu-ky-poodle">3. Bao lâu nên cho Poodle đi tắm &amp; cắt tỉa 1 lần?</h2>
        <ul>
          <li><strong>Tắm vệ sinh &amp; vệ sinh tai/tuyến hôi:</strong> 7–10 ngày/lần (Poodle tai cụp nên rất dễ ẩm tai và có ráy nếu để quá lâu).</li>
          <li><strong>Cắt tỉa tạo kiểu lại phom:</strong> 4–6 tuần/lần để mắt bé không bị lông che, đồng thời tránh bết tảng ở nách, cổ và mang tai.</li>
          <li><strong>Chăm sóc tại nhà:</strong> Chải bằng lược ghim (slicker brush) + lược sắt thưa 2–3 lần/tuần trước khi tắm.</li>
        </ul>`,
    faqs: [
      ['Cắt tỉa lông Toy Poodle 4kg tại Lumi Pet Bình Thạnh giá bao nhiêu?', 'Bé Toy Poodle 4kg (mốc 3–6kg) có giá Combo Tắm + Cắt tỉa 2026 là 360.000đ, đã gồm cắt mài móng, nhổ lông tai, cạo đệm chân, vắt tuyến hôi và sấy tay 100%.'],
      ['Poodle bị rối lông cục ở tai và nách có gỡ được không?', 'Tùy mức độ rối: rối nhẹ thợ sẽ xịt dưỡng gỡ cẩn thận (phụ thu 50k–500k tùy mức độ); nếu bết cứng sát da gây đau rát, thợ sẽ tư vấn chuyển sang combo tắm + cạo (200k–410k) để bảo vệ da bé.'],
      ['Làm một ca cắt tỉa Poodle mất bao lâu?', 'Khoảng 90 đến 150 phút tùy độ dày lông và kiểu tỉa. Bạn nên đặt lịch trước qua Zalo 0989 979 675 để thợ dành đủ thời gian tỉa kỹ không làm vội.'],
    ],
  },
  {
    slug: 'go-roi-long-cho-meo-bi-bet-sat-da-binh-thanh',
    category: 'Grooming · Xử Lý Lông Bết',
    title: 'Gỡ Rối Lông Chó Mèo Bị Bết: Khi Nào Gỡ, Khi Nào Cạo?',
    description:
      'Chó Poodle, Phốc sóc hay mèo lông dài bị rối lông bết sát da phải làm sao? Hướng dẫn phân loại 3 mức độ bết, bảng phí gỡ rối minh bạch 50k–500k tại Lumi Pet.',
    h1: 'Gỡ rối lông chó mèo bị bết sát da tại Bình Thạnh: Khi nào nên gỡ, khi nào nên cạo?',
    dek: 'Lông rối bết thành mảng không chỉ làm bé mất thẩm mỹ mà còn gây bí da, hăm đỏ và nấm ngứa. Bài viết giúp ba mẹ nhận biết 3 mức độ rối lông và hiểu rõ chi phí gỡ rối minh bạch trước khi đưa bé đi Spa.',
    heroImg: 'vn-grooming-corgi.jpg',
    heroAlt: 'Kiểm tra và chải gỡ rối lông nhẹ nhàng cho thú cưng tại Lumi Pet Bình Thạnh',
    heroCap: '🔍 Thợ kiểm tra trực tiếp từng vùng lông bết (mang tai, nách, cổ, bụng) và báo rõ phương án trước khi làm',
    secondImg: 'vn-spa-cat.jpg',
    secondAlt: 'Xử lý lông bết rối an toàn cho mèo lông dài tại Lumi Pet',
    secondCap: '🐱 Với mèo Anh lông dài / Ba Tư bị rối bết tảng sát da, tông đơ êm ở khu riêng giúp bé đỡ đau và ít stress hơn cố gỡ kéo',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Câu trả lời nhanh:</strong> Khi chó mèo bị rối lông nhẹ từng cụm rời, Groomer có thể xịt dưỡng xả và chải gỡ giữ lại bộ lông đẹp (phụ thu gỡ rối tại <strong>Lumi Pet Bình Thạnh</strong> từ <strong>50.000đ – 500.000đ</strong> tùy diện tích bết). Ngược lại, nếu lông đã <strong>đóng thành tấm cứng dính sát da</strong>, việc cố gỡ sẽ gây đau rát, bầm da và ám ảnh tâm lý — lúc này nên chuyển sang <strong>Combo Tắm + Cạo</strong> (chó 200k–700k, mèo 250k–380k) để da bé thở lại an toàn.</p>

        <h2 id="phan-loai-roi">1. Phân biệt 3 mức độ rối lông ở chó mèo</h2>
        <table>
          <thead><tr><th>Mức độ rối</th><th>Dấu hiệu nhận biết khi sờ tay</th><th>Phương án xử lý an toàn</th></tr></thead>
          <tbody>
            <tr><td><strong>Mức 1 (Rối nhẹ)</strong></td><td>Lược thưa hơi vướng ở mang tai, đuôi, kẽ chân; vẫn thấy chân da thoáng</td><td>Xịt dưỡng gỡ rối + sấy chải bông (phụ thu nhẹ 50k–100k hoặc xử lý nhanh)</td></tr>
            <tr><td><strong>Mức 2 (Rối cục vừa)</strong></td><td>Có cục bông xoắn ở nách, bụng, cổ áo; tay tách vẫn còn khe hở sát da</td><td>Ủ xả mềm, tách từng lọn bằng lược chuyên dụng (tốn thêm 30–60 phút, phụ thu theo diện tích)</td></tr>
            <tr><td><strong>Mức 3 (Bết tảng sát da)</strong></td><td>Lông kết thành mảng cứng như nỉ dính chặt vào da, không luồn lược vào được</td><td><strong>Khuyên chuyển sang Tắm + Cạo sạch</strong> giữ độ dài an toàn (1,5–3mm) để tránh rách da &amp; viêm hăm</td></tr>
          </tbody>
        </table>

        <h2 id="vi-sao-khong-tu-cat">2. 3 sai lầm dễ làm tổn thương da bé khi tự xử lý lông bết tại nhà</h2>
        <ul>
          <li><strong>Dùng kéo thường cắt sát cục rối:</strong> Da chó mèo (đặc biệt vùng nách, bụng, cổ mèo) rất mỏng và hay bị kéo phồng theo cục lông bết — rất nhiều bé bị cắt phạm chảy máu khi chủ tự cắt tại nhà.</li>
          <li><strong>Tắm nước trước khi gỡ rối:</strong> Nước làm các sợi lông xoắn co rút chặt hơn gấp đôi, biến rối nhẹ thành tảng cứng gần như không thể chải nổi.</li>
          <li><strong>Bôi dầu ăn / phấn rôm lên cục bết:</strong> Gây bít lỗ chân lông và kích ứng da nặng hơn.</li>
        </ul>

        <h2 id="quy-trinh-minh-bach">3. Cam kết báo giá trước khi làm tại Lumi Pet (27 Võ Trường Toản)</h2>
        <p>Tại Lumi Pet, thợ luôn <strong>kiểm tra trực tiếp bằng tay toàn thân bé ngay tại quầy tiếp nhận</strong>, cho ba mẹ xem rõ vùng bết, thống nhất phương án (gỡ rối hay cạo thoáng) và <strong>chốt chính xác chi phí trước khi nhận bé</strong> — tuyệt đối không tự ý làm rồi tính thêm phụ phí khi thanh toán. Tham khảo thêm <a href="../cao-long-meo-binh-thanh-gia-bao-nhieu/">giá cạo lông mèo 2026</a> và <a href="../../grooming-cho-meo-binh-thanh/">dịch vụ Grooming Bình Thạnh</a>.</p>`,
    faqs: [
      ['Phụ thu gỡ rối lông chó mèo tại Lumi Pet tính thế nào?', 'Theo bảng giá niêm yết 2026, phụ thu gỡ rối dao động 50.000đ – 500.000đ tùy mức độ rối nhẹ hay bết nặng diện rộng, và luôn được thợ kiểm tra báo giá rõ trước khi thực hiện.'],
      ['Nếu lông mèo bết cứng toàn thân thì có nên cạo không?', 'Nên cạo bằng tông đơ chuyên dụng độ dài an toàn (giữ 1,5–3mm không cạo sát tróc da). Cố gỡ lông bết tảng sẽ khiến mèo cực kỳ đau, hoảng loạn và dễ tổn thương lớp da mỏng.'],
      ['Làm sao để Poodle và mèo lông dài không bị rối lông lại?', 'Chải lông 2–3 lần/tuần tập trung vào mang tai, cổ, nách, bụng (nơi mặc áo hoặc đeo vòng cổ), hạn chế mặc áo 24/24 và đi tắm xả dưỡng định kỳ 2–4 tuần/lần.'],
    ],
  },
  {
    slug: 'tam-cho-bi-nam-ve-ran-viem-da-luu-y-an-toan',
    category: 'Chăm Sóc Da · E-E-A-T',
    title: 'Tắm Chó Bị Nấm, Ve Rận & Viêm Da Nhẹ: Lưu Ý An Toàn',
    description:
      'Chó bị nấm nhẹ, gàu hay ve rận có tắm Spa được không? Phân biệt rõ ranh giới Spa vs Bác sĩ thú y và quy trình tắm sấy khô 100% an toàn tại Lumi Pet.',
    h1: 'Tắm cho chó bị nấm, ve rận & viêm da nhẹ: Ranh giới an toàn giữa Spa và Bác sĩ thú y',
    dek: 'Khi thấy cún gãi nhiều, có vảy gàu hoặc ve rận, nhiều ba mẹ băn khoăn nên đưa đi Spa tắm hỗ trợ hay tới phòng khám thú y. Bài viết phân định rõ từng tình huống để bảo vệ sức khỏe bé tốt nhất.',
    heroImg: 'vn-bath-dog.jpg',
    heroAlt: 'Tắm vệ sinh nước ấm kiểm tra kỹ lông da cho cún tại Lumi Pet Bình Thạnh',
    heroCap: '🛡️ Kiểm tra da trước khi tắm, dùng sữa tắm chuyên dụng phù hợp và sấy khô 100% tận chân da giúp hạn chế nấm ẩm',
    secondImg: 'vn-evening-spa.jpg',
    secondAlt: 'Sấy tay 100% kiểm tra độ khô kẽ chân và vùng bụng cho chó tại Lumi Pet',
    secondCap: '🌬️ Sấy khô kiệt 100% các vùng dễ ẩm (kẽ ngón chân, nách, bụng, gốc tai) là yếu tố then chốt ngăn nấm tái phát',
    readTime: '7 phút đọc',
    bodyHtml: `
        <p><strong>Câu trả lời ngắn &amp; Ranh giới chuyên môn:</strong> <strong>Lumi Pet là trung tâm Spa, Grooming &amp; Pet Hotel — KHÔNG phải phòng khám hay bệnh viện thú y.</strong> Nếu bé chỉ bị <strong>gàu nhẹ, bết dầu, ve rận ngoài da mức nhẹ hoặc đang trong giai đoạn bác sĩ thú y cho phép tắm sữa tắm hỗ trợ</strong>, Lumi Pet có hỗ trợ tắm bằng sữa tắm chuyên dụng (phụ thu <strong>50.000đ – 100.000đ</strong>) kết hợp sấy tay khô kiệt 100%. Nếu bé bị <strong>viêm da nặng, lở loét chảy dịch mủ, rụng lông mảng lớn hoặc kèm sốt/bỏ ăn</strong>, ba mẹ <strong>bắt buộc đưa bé đi bác sĩ thú y khám và kê phác đồ trước</strong>.</p>

        <h2 id="ranh-gioi">1. Bảng phân biệt: Khi nào đi Spa hỗ trợ vs Khi nào PHẢI khám thú y?</h2>
        <table>
          <thead><tr><th>Tình trạng da lông của bé</th><th>Đi Spa hỗ trợ được không?</th><th>Hướng xử lý đúng</th></tr></thead>
          <tbody>
            <tr><td>Lông hôi ẩm, gàu nhẹ, bết dầu, ít ve rận bám ngoài</td><td><strong>Có thể hỗ trợ</strong></td><td>Tắm sạch sâu + sữa tắm chuyên dụng (phụ thu 50k–100k) + sấy khô 100% tận da; kết hợp nhỏ gáy phòng ve định kỳ theo tư vấn thú y</td></tr>
            <tr><td>Đang theo phác đồ nấm của bác sĩ thú y (da không chảy máu/mủ)</td><td><strong>Tắm hỗ trợ theo chỉ định</strong></td><td>Mang theo sữa tắm bác sĩ kê (nếu có) để thợ tắm đúng thời gian ủ và sấy khô hoàn toàn</td></tr>
            <tr><td>Da lở loét, rỉ dịch vàng/mủ, rụng lông loang lổ nặng, mùi hôi thối</td><td><strong>KHÔNG — cần khám thú y</strong></td><td>Tới bác sĩ thú y soi da xác định nấm/Demodex/vi khuẩn và điều trị y khoa trước</td></tr>
            <tr><td>Bé sốt, bỏ ăn, nôn ói, tiêu chảy hoặc có vết thương hở</td><td><strong>TUYỆT ĐỐI KHÔNG</strong></td><td>Cấp cứu/thăm khám bác sĩ thú y ngay, không cho tiếp xúc nước</td></tr>
          </tbody>
        </table>

        <h2 id="vi-sao-say-kho">2. Vì sao độ ẩm sau tắm là "kẻ thù số 1" khiến chó hay bị nấm da?</h2>
        <ul>
          <li>Khi tắm ở nhà và để lông tự khô hoặc sấy chỉ khô lớp ngoài, hơi ẩm đọng lại ở <strong>kẽ ngón chân, bụng, nách và mang tai</strong> suốt nhiều giờ — tạo môi trường lý tưởng cho vi nấm Malassezia phát triển.</li>
          <li>Tại <a href="../../spa-thu-cung-binh-thanh/">Lumi Pet 27 Võ Trường Toản</a>, 100% cún được thợ <strong>sấy tay kết hợp rẽ từng lớp lông kiểm tra sát da</strong>, đồng thời cạo gọn lông kẽ đệm bàn chân giúp thông thoáng sạch sẽ.</li>
          <li>Dụng cụ (lược, kéo, bàn tắm, khăn) được vệ sinh khử khuẩn giữa các bé để đảm bảo an toàn vệ sinh chung.</li>
        </ul>`,
    faqs: [
      ['Lumi Pet có khám chữa bệnh nấm da hay tiêm thuốc trị ve rận không?', 'KHÔNG. Lumi Pet là Spa, Grooming & Khách sạn thú cưng, không phải phòng khám thú y nên không khám bệnh, không tiêm và không kê đơn thuốc.'],
      ['Tắm sữa tắm hỗ trợ nấm, ve rận hoặc trắng lông tại Lumi Pet phụ thu bao nhiêu?', 'Phụ thu sữa tắm chuyên dụng theo bảng giá niêm yết 2026 là 50.000đ – 100.000đ (chỉ áp dụng khi bạn đồng ý trước lúc làm).'],
      ['Chó bị nấm có thể cạo bớt lông cho thoáng để bôi thuốc dễ hơn không?', 'Nếu da không bị lở loét chảy máu và bác sĩ thú y khuyên cạo gọn để bôi thuốc, thợ có thể hỗ trợ cạo thoáng nhẹ nhàng (giữ độ dài an toàn không cạo sát trầy da). Hãy nhắn Zalo 0989 979 675 gửi ảnh tình trạng da trước khi đưa bé tới.'],
    ],
  },
  {
    slug: 'cho-meo-con-may-thang-di-spa-duoc-bao-lau-tam-1-lan',
    category: 'AEO · Chăm Sóc Cơ Bản',
    title: 'Chó Mèo Con Mấy Tháng Đi Spa Được & Bao Lâu Tắm 1 Lần?',
    description:
      'Giải đáp chuẩn thực tế: chó mèo con mấy tháng đi Spa được (mốc vắc-xin an toàn), tần suất tắm chuẩn cho chó (7–14 ngày) và mèo trong nhà (3–6 tuần).',
    h1: 'Chó mèo con mấy tháng đi Spa được? Bao lâu nên tắm chó, tắm mèo 1 lần là chuẩn nhất?',
    dek: 'Đưa chó mèo con đi tắm quá sớm khi chưa đủ miễn dịch rất dễ khiến bé bị cảm lạnh hoặc nhiễm bệnh. Xem ngay mốc tuổi an toàn và lịch tắm chuẩn giúp lông da bé luôn khỏe mạnh.',
    heroImg: 'vn-hero-spa.jpg',
    heroAlt: 'Chăm sóc nhẹ nhàng cho chó con đã đủ tiêm ngừa tại Lumi Pet Bình Thạnh',
    heroCap: '🍼 Đợi bé hoàn tất đủ mũi vắc-xin cơ bản + 7–14 ngày rồi mới đưa đi Spa lần đầu để đảm bảo miễn dịch vững vàng',
    secondImg: 'vn-hotel-cat-vip.jpg',
    secondAlt: 'Mèo khỏe mạnh sạch sẽ sau khi tắm định kỳ đúng tần suất tại Lumi Pet',
    secondCap: '🐱 Mèo nuôi trong nhà chỉ cần tắm định kỳ 3–6 tuần/lần kết hợp chải lông mỗi tuần để da không bị khô kích ứng',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Câu trả lời nhanh:</strong> Chó mèo con nên đi Spa bên ngoài khi đạt <strong>tối thiểu 3 – 3,5 tháng tuổi</strong>, đã <strong>tiêm đủ các mũi vắc-xin cơ bản</strong> theo sổ thú y và <strong>cách mũi tiêm gần nhất ít nhất 7–14 ngày</strong>. Về tần suất: <strong>chó</strong> nên tắm <strong>7–14 ngày/lần</strong> (tùy giống &amp; tần suất ra ngoài); <strong>mèo nuôi trong nhà</strong> chỉ nên tắm <strong>3–6 tuần/lần</strong> để bảo vệ lớp dầu tự nhiên trên da.</p>

        <h2 id="moc-tuoi-be-con">1. Chó mèo con mấy tháng tuổi mới an toàn đi Spa?</h2>
        <ul>
          <li><strong>Dưới 2 tháng tuổi (chưa tiêm phòng):</strong> Tuyệt đối KHÔNG mang đi Spa ngoài tiệm. Nếu bé dính bẩn phân/thức ăn, chỉ dùng khăn ấm vắt khô lau nhẹ cục bộ và sấy ấm ngay trong phòng kín gió tại nhà.</li>
          <li><strong>2 – 3 tháng tuổi (mới tiêm mũi 1 hoặc mũi 2):</strong> Hệ miễn dịch đang hoàn thiện, vẫn nên hạn chế tiếp xúc môi trường ngoài.</li>
          <li><strong>Từ 3 – 3,5 tháng trở lên (đã đủ mũi vắc-xin cơ bản + sau tiêm 7–14 ngày):</strong> Đây là mốc vàng để đưa bé đi làm quen Spa lần đầu (tắm nước ấm 37–39°C, cắt mài móng, vệ sinh tai, sấy tay gió êm nhẹ).</li>
        </ul>

        <h2 id="tan-suat-tam">2. Bảng tần suất tắm chuẩn cho từng nhóm chó mèo</h2>
        <table>
          <thead><tr><th>Nhóm thú cưng</th><th>Tần suất tắm khuyên dùng</th><th>Lý do thực tế</th></tr></thead>
          <tbody>
            <tr><td>Chó lông xoăn / hay ra công viên (Poodle, Corgi, Golden, Phốc sóc)</td><td><strong>7 – 10 ngày / lần</strong></td><td>Dễ bám bụi, mùi mồ hôi chân và tuyến hôi; tắm đều giúp lông tơi không bết</td></tr>
            <tr><td>Chó lông ngắn nuôi hoàn toàn trong nhà (Pug, Bull Pháp, Chihuahua)</td><td><strong>10 – 14 ngày / lần</strong></td><td>Tắm quá dày (2–3 ngày/lần) dễ làm khô da, tăng tiết dầu gây hôi ngược</td></tr>
            <tr><td>Mèo lông ngắn nuôi trong nhà (ALN, Mèo ta)</td><td><strong>4 – 6 tuần / lần</strong></td><td>Mèo tự liếm sạch tốt; tắm định kỳ giúp giảm rụng lông, sạch nhờn gốc đuôi</td></tr>
            <tr><td>Mèo lông dài (ALD, Ba Tư, Ragdoll, Maine Coon)</td><td><strong>3 – 4 tuần / lần</strong></td><td>Lông dài dễ bết dầu cổ/bụng và dính cát vệ sinh</td></tr>
          </tbody>
        </table>

        <h2 id="luu-y-lan-dau">3. Mẹo giúp chó mèo con đi Spa lần đầu không bị sợ</h2>
        <p>Lần đầu tiên đi Spa quyết định tâm lý của bé suốt nhiều năm sau. Hãy chọn khung giờ vắng khách (sáng hoặc đầu giờ chiều ngày thường), báo trước với thợ đây là lần đầu của bé để thợ dành thêm thời gian làm quen, hạ nhỏ tốc độ máy sấy ion và <strong>chỉ chọn tiệm cam kết sấy tay 100% không nhốt lồng sấy</strong> như <a href="../../tam-cho-phuong-gia-dinh/">Lumi Pet Phường Gia Định (27 Võ Trường Toản)</a>.</p>`,
    faqs: [
      ['Chó con mới tiêm vắc-xin hôm qua, hôm nay đi tắm Spa được không?', 'Không nên. Sau khi tiêm vắc-xin, bé cần nghỉ ngơi và kiêng tắm tối thiểu 7 ngày (tốt nhất 10–14 ngày) để cơ thể sinh kháng thể ổn định, tránh cảm lạnh.'],
      ['Tắm chó 2–3 ngày một lần có sạch hơn không?', 'Ngược lại, tắm quá dày làm mất lớp màng dầu bảo vệ da tự nhiên khiến da khô, tróc gàu, kích thích tuyến bã nhờn tiết dầu nhiều hơn và nhanh có mùi hôi hơn.'],
      ['Giá tắm lần đầu cho chó con, mèo con dưới 3kg tại Lumi Pet bao nhiêu?', 'Theo bảng giá 2026: tắm vệ sinh chó dưới 3kg là 140.000đ; tắm vệ sinh mèo dưới 3kg là 160.000đ (đã gồm đủ 10 bước cơ bản và sấy tay 100%).'],
    ],
  },
  {
    slug: 'tam-cat-tia-cho-bichon-shih-tzu-maltese-binh-thanh',
    category: 'Grooming · Chó Lông Trắng',
    title: 'Tắm & Cắt Tỉa Bichon, Shih Tzu, Maltese Bình Thạnh | Lumi',
    description:
      'Dịch vụ tắm trắng, vệ sinh vùng mắt và cắt tỉa đầu tròn Bichon, Shih Tzu, Maltese tại Lumi Pet Bình Thạnh (27 Võ Trường Toản): tắm từ 140k, cắt tỉa từ 290k.',
    h1: 'Tắm & Cắt tỉa lông chó Bichon, Shih Tzu, Maltese tại Bình Thạnh: Giữ lông trắng bông sạch mắt',
    dek: 'Nhóm chó lông trắng dài (Bichon Frise, Maltese, Shih Tzu, Westie) cực kỳ dễ bị ố đỏ khóe mắt, vàng râu mép và rối lông vùng bụng. Xem quy trình chăm sóc & bảng giá 2026 tại Lumi Pet.',
    heroImg: 'vn-evening-spa.jpg',
    heroAlt: 'Sấy chải bông lông trắng cho Bichon và Maltese tại Lumi Pet Bình Thạnh',
    heroCap: '☁️ Sấy tay kết hợp chải bông từng lớp giúp đầu Bichon tròn xốp tự nhiên và lông Maltese thẳng mượt không bết',
    secondImg: 'vn-spa-noel-tet.jpg',
    secondAlt: 'Hoàn thiện cắt tỉa phom mặt tròn dễ thương cho cún nhỏ tại Lumi Pet',
    secondCap: '✂️ Tỉa gọn vùng khóe mắt, râu mép giúp nhóm chó lông trắng hạn chế đọng nước mắt gây ố vàng',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Câu trả lời nhanh:</strong> Tại <strong>Lumi Pet Bình Thạnh (27 Võ Trường Toản, Phường Gia Định)</strong>, giá <strong>tắm vệ sinh cho Bichon, Maltese, Shih Tzu</strong> năm 2026 từ <strong>140.000đ</strong> (&lt;3kg) và <strong>190.000đ</strong> (3–6kg); <strong>Combo Tắm + Cắt tỉa tạo kiểu</strong> từ <strong>290.000đ</strong> (&lt;3kg) đến <strong>360.000đ</strong> (3–6kg) và <strong>430.000đ</strong> (6–9kg). Tiệm có hỗ trợ sữa tắm trắng lông (phụ thu 50k–100k nếu cần).</p>

        <h2 id="dac-thu-long-trang">1. 3 điểm cần kỹ thuật riêng khi chăm sóc Bichon, Shih Tzu &amp; Maltese</h2>
        <ul>
          <li><strong>Vệ sinh khóe mắt &amp; tỉa gọn râu mép:</strong> Nước mắt và nước uống đọng trên lông trắng rất nhanh chuyển màu nâu đỏ (tear stain). Groomer sẽ làm sạch nhẹ khóe mắt, tỉa gọn phần lông dễ chọc mắt và sấy khô kỹ vùng mõm.</li>
          <li><strong>Sấy duỗi &amp; chải bông đúng phom từng giống:</strong> Bichon cần sấy chải ngược tạo độ phồng tròn như đám mây; trong khi Maltese và Shih Tzu cần chải xuôi mượt, tỉa gọn chân váy/mặt tròn để không dính bẩn khi đi dạo.</li>
          <li><strong>Cạo vệ sinh đệm chân &amp; vùng bụng/hậu môn:</strong> Giúp chó lông trắng đi vệ sinh không bị dính vàng lông đuôi và lông chân.</li>
        </ul>

        <h2 id="gia-bichon-maltese">2. Bảng giá Spa &amp; Grooming 2026 cho Bichon, Shih Tzu, Maltese</h2>
        <table>
          <thead><tr><th>Cân nặng phổ biến</th><th>Tắm vệ sinh 10 bước</th><th>Combo Tắm + Cạo</th><th>Combo Tắm + Cắt tỉa</th></tr></thead>
          <tbody>
            <tr><td>Maltese / Shih Tzu nhỏ (&lt;3kg)</td><td><strong>140.000đ</strong></td><td>200.000đ</td><td><strong>290.000đ</strong></td></tr>
            <tr><td>Bichon / Shih Tzu / Maltese (3–6kg)</td><td><strong>190.000đ</strong></td><td>270.000đ</td><td><strong>360.000đ</strong></td></tr>
            <tr><td>Bichon / Shih Tzu lớn (6–9kg)</td><td><strong>250.000đ</strong></td><td>340.000đ</td><td><strong>430.000đ</strong></td></tr>
          </tbody>
        </table>
        <p><em>Phụ thu minh bạch (nếu bạn yêu cầu thêm):</em> Sữa tắm trắng lông 50.000đ – 100.000đ; tạo kiểu bo tròn đầu Bichon đặc biệt 50.000đ – 100.000đ. Xem thêm <a href="../cat-tia-long-poodle-binh-thanh-gia-bao-nhieu/">bài cắt tỉa Poodle</a> và <a href="../../cat-tia-long-cho-phuong-gia-dinh/">trang Cắt tỉa lông chó Phường Gia Định</a>.</p>`,
    faqs: [
      ['Sữa tắm trắng lông có tẩy hết hoàn toàn vết ố mắt nâu đỏ trong 1 lần tắm không?', 'Sữa tắm chuyên dụng giúp lông sáng sạch và mờ ố rõ hơn, nhưng vết ố đỏ lâu ngày cần kết hợp cắt bỏ phần ngọn lông đã oxy hóa, lau khô mắt hằng ngày tại nhà và kiểm tra nguyên nhân chảy nước mắt (hạt ăn, lông mi quặm).'],
      ['Cắt tỉa đầu tròn Bichon 5kg tại Lumi Pet giá bao nhiêu?', 'Bé Bichon 5kg (mốc 3–6kg) có giá Combo Tắm + Cắt tỉa cơ bản là 360.000đ; nếu yêu cầu tạo kiểu bo tròn kỹ đặc biệt có thể phụ thu thêm 50.000đ – 100.000đ (báo trước khi làm).'],
      ['Nên đặt lịch cắt tỉa Bichon/Maltese trước bao lâu?', 'Ngày thường bạn nên nhắn Zalo 0989 979 675 trước 2–4 tiếng; cuối tuần hoặc dịp cận Noel/Tết nên chốt lịch trước 5–10 ngày để chọn đúng khung giờ đẹp.'],
    ],
  },
];

function buildArticleHtml(a) {
  const url = `${ORIGIN}/bai-viet/${a.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.h1,
        description: a.description,
        datePublished: '2026-11-25',
        dateModified: '2026-11-25',
        author: { '@id': `${ORIGIN}/gioi-thieu/#lead-groomer` },
        publisher: { '@id': `${ORIGIN}/#business` },
        mainEntityOfPage: url,
        image: `${ORIGIN}/images/${a.heroImg}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Kiến thức', item: `${ORIGIN}/bai-viet/` },
          { '@type': 'ListItem', position: 3, name: a.title },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${a.title.replaceAll('&', '&amp;')}</title>
  <meta name="description" content="${a.description.replaceAll('&', '&amp;')}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${a.title.replaceAll('&', '&amp;')}" />
  <meta property="og:description" content="${a.description.replaceAll('&', '&amp;')}" />
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/images/${a.heroImg}">
  <link rel="stylesheet" href="../../lumi-seo.css">
  <link rel="stylesheet" href="../../lumi-blog.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="blog-shell">
  <div class="breadcrumb"><a href="../../">Lumi Pet</a> / <a href="../">Kiến thức</a> / ${a.title.replaceAll('&', '&amp;')}</div>
  <article>
    <header class="article-hero">
      <span class="article-category">${a.category}</span>
      <h1>${a.h1.replaceAll('&', '&amp;')}</h1>
      <p class="article-dek">${a.dek.replaceAll('&', '&amp;')}</p>
      <div class="article-meta"><span>Cập nhật: 25/11/2026</span><span>${a.readTime}</span><span>Kiểm duyệt: Đội ngũ Groomer Lumi Pet Bình Thạnh</span></div>
    </header>

    <div class="article-layout">
      <div class="article-prose">
        <figure class="lumi-article-photo" style="margin:0 0 20px;border-radius:20px;overflow:hidden;border:1px solid #ffead7;background:#fff;">
          <img src="../../images/${a.heroImg}" alt="${a.heroAlt}" loading="lazy" style="width:100%;max-height:360px;object-fit:cover;display:block;">
          <figcaption style="padding:10px 16px;font-size:12.5px;font-weight:700;color:#64748b;background:#fffaf3;">${a.heroCap}</figcaption>
        </figure>
${a.bodyHtml}
        <figure class="lumi-article-photo-2" style="margin:20px 0;border-radius:20px;overflow:hidden;border:1px solid #ffead7;background:#fff;">
          <img src="../../images/${a.secondImg}" alt="${a.secondAlt}" loading="lazy" style="width:100%;max-height:340px;object-fit:cover;display:block;">
          <figcaption style="padding:10px 16px;font-size:12.5px;font-weight:700;color:#64748b;background:#fffaf3;">${a.secondCap}</figcaption>
        </figure>

        <section class="panel" style="margin-top:24px;">
          <h2>Câu hỏi thường gặp</h2>
          <div class="faq">
${a.faqs.map(([q, ans], i) => `            <details${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${ans}</p></details>`).join('\n')}
          </div>
        </section>
      </div>
    </div>
  </article>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (Phường 2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: trông bé 24/7</div><div><a href="../../dat-lich/">Đặt lịch Spa →</a></div></div></footer>
</body>
</html>
`;
}

for (const a of ARTICLES) {
  const dir = path.join(PUBLIC_DIR, 'bai-viet', a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildArticleHtml(a), 'utf8');
  console.log(`Generated AEO article: /bai-viet/${a.slug}/ (T:${a.title.length}c, D:${a.description.length}c)`);
}
