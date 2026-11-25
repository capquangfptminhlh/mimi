import fs from 'node:fs';
import path from 'node:path';

const BLOG_DIR = path.resolve('public/bai-viet');
const ORIGIN = 'https://lumipet.vn';
const TODAY = '2026-11-24';

const articles = [
  {
    slug: 'cat-tia-long-corgi-mong-dao-binh-thanh',
    category: 'Grooming · Corgi',
    title: 'Cắt Tỉa Lông Corgi Mông Đào Bình Thạnh Giá Bao Nhiêu?',
    desc: 'Cắt tỉa lông Corgi mông đào tại Lumi Pet Phường Gia Định, Bình Thạnh: bảng giá 2026 theo cân nặng (360k–600k), lưu ý không cạo sát lớp lông kép bảo vệ.',
    h1: 'Cắt tỉa lông Corgi mông đào tại Bình Thạnh: Bảng giá 2026 & Lưu ý giữ lông kép',
    dek: 'Kiểu tỉa mông trái đào giúp bé Corgi vừa gọn gàng sạch sẽ khi đi vệ sinh vừa tôn dáng tròn đáng yêu. Tuy nhiên Corgi sở hữu bộ lông kép (double coat) nên cần kỹ thuật tỉa kéo đúng chuẩn thay vì cạo sát da.',
    img: '../../images/vn-hotel-cabins.jpg',
    imgAlt: 'Chó Corgi bộ lông gọn mượt sau khi cắt tỉa tại Lumi Pet Phường Gia Định Bình Thạnh',
    quickAnswer: 'Tại <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong>, chi phí <strong>tắm vệ sinh + cắt tỉa lông Corgi</strong> năm 2026 theo cân nặng: <strong>430.000đ</strong> (6–9kg), <strong>520.000đ</strong> (9–12kg) và <strong>600.000đ</strong> (12–15kg). Tạo kiểu mông đào cầu kỳ có phụ thu nhẹ 50.000đ – 100.000đ (luôn báo trước).',
    toc: [
      ['#gia-corgi', '1. Bảng giá tắm & tỉa Corgi 2026'],
      ['#tai-sao-khong-cao', '2. Vì sao không nên cạo sát lông Corgi?'],
      ['#quy-trinh-mong-dao', '3. Cách tỉa mông đào chuẩn đẹp'],
      ['#faq-corgi', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="gia-corgi">1. Bảng giá tắm vệ sinh &amp; cắt tỉa lông Corgi 2026 tại Lumi Pet</h2>
        <p>Corgi trưởng thành thường nặng từ 8kg đến 14kg. Tại Lumi Pet Phường Gia Định (Bình Thạnh), giá được tính minh bạch theo đúng cân nặng thực tế tại quầy:</p>
        <table>
          <thead><tr><th>Cân nặng Corgi</th><th>Tắm vệ sinh</th><th>Combo Tắm + Cắt tỉa</th><th>Phụ thu tạo kiểu mông đào kỹ (nếu cần)</th></tr></thead>
          <tbody>
            <tr><td>3 – 6kg (Corgi nhỏ)</td><td>190.000đ</td><td><strong>360.000đ</strong></td><td>50.000đ – 100.000đ</td></tr>
            <tr><td>6 – 9kg</td><td>250.000đ</td><td><strong>430.000đ</strong></td><td>50.000đ – 100.000đ</td></tr>
            <tr><td>9 – 12kg (phổ biến)</td><td>310.000đ</td><td><strong>520.000đ</strong></td><td>50.000đ – 100.000đ</td></tr>
            <tr><td>12 – 15kg</td><td>370.000đ</td><td><strong>600.000đ</strong></td><td>50.000đ – 100.000đ</td></tr>
          </tbody>
        </table>
        <p>Gói tắm và cắt tỉa đã bao gồm đầy đủ: chải rụng lớp lông tơ chết, cạo vệ sinh đệm bàn chân &amp; bụng/hậu môn, vệ sinh tai, cắt mài móng, vắt tuyến hôi, tắm xả 2 lần và sấy tay 100% không lồng sấy nhiệt. Xem thêm <a href="../../cat-tia-long-cho-phuong-gia-dinh/">dịch vụ cắt tỉa lông chó Phường Gia Định</a>.</p>

        <h2 id="tai-sao-khong-cao">2. Vì sao Groomer luôn khuyên KHÔNG cạo sát da cho Corgi?</h2>
        <p>Corgi thuộc nhóm chó <strong>lông 2 lớp (double coat)</strong>: lớp lông tơ mềm bên trong cách nhiệt và lớp lông cứng bên ngoài cản tia UV, bụi bẩn. Nếu cạo sát 0mm bằng tông đơ vì nghĩ cho mát, bé dễ gặp 3 vấn đề:</p>
        <ul>
          <li><strong>Lông mọc lại xơ cứng, lởm chởm hoặc hói mảng (Post-clipping alopecia):</strong> Lớp lông tơ mọc nhanh hơn lớp lông bảo vệ khiến bộ lông mất độ bóng tự nhiên.</li>
          <li><strong>Dễ cháy nắng &amp; viêm da kích ứng:</strong> Da bụng và lưng Corgi khá nhạy cảm khi không còn lớp lông che chắn.</li>
          <li><strong>Không giảm rụng lông như kỳ vọng:</strong> Lông ngắn vẫn rụng theo chu kỳ tự nhiên nhưng sợi ngắn lại dễ cắm vào quần áo và sofa hơn.</li>
        </ul>

        <h2 id="quy-trinh-mong-dao">3. Tỉa kéo mông đào &amp; gọn bụng đúng chuẩn cho Corgi</h2>
        <ol>
          <li><strong>Chải xả lông rụng bằng lược chuyên dụng (deshedding):</strong> Loại bỏ lớp lông tơ bí bách giúp Corgi mát mẻ hơn hẳn mà vẫn giữ nguyên lớp lông bảo vệ.</li>
          <li><strong>Tắm xả 2 lần &amp; sấy tay tơi bông:</strong> Sấy ngược chiều lông vùng mông và ngực để từng sợi lông dựng đều trước khi đi kéo.</li>
          <li><strong>Tỉa kéo bo tròn mông trái đào &amp; gọn viền bụng:</strong> Giữ độ dài an toàn ở thân, bo tròn 2 má mông, tỉa gọn lông ngực và chân để bé đi lại không dính bùn đất.</li>
        </ol>
        <p>Nếu bé nhà bạn cũng cần chỗ gửi khi đi công tác, tham khảo thêm <a href="../corgi-di-khach-san-can-chuan-bi-gi/">checklist chuẩn bị cho Corgi đi khách sạn</a>.</p>`,
    faqs: [
      ['Tỉa lông mông đào cho Corgi 10kg ở Bình Thạnh giá bao nhiêu?', 'Corgi 10kg thuộc nhóm 9–12kg: Combo tắm + cắt tỉa là 520.000đ. Nếu yêu cầu tạo kiểu bo tròn mông đào sâu cầu kỳ, phụ thu tạo kiểu đặc biệt 50.000đ – 100.000đ (luôn báo trước).'],
      ['Bao lâu nên đưa Corgi đi tắm xả lông và tỉa lại mông đào?', 'Nên tắm vệ sinh kết hợp chải lông chết 2–3 tuần/lần và tỉa gọn lại form mông đào mỗi 6–8 tuần để lông luôn sạch đẹp.'],
      ['Corgi rụng lông nhiều có nên cạo trọc không?', 'Không nên cạo sát da với Corgi vì dễ làm hỏng cấu trúc lông kép. Giải pháp đúng là tắm dưỡng kết hợp chải xả lông tơ định kỳ và tỉa kéo gọn viền.'],
      ['Một ca tắm cắt tỉa cho Corgi tại Lumi Pet mất bao lâu?', 'Khoảng 90–150 phút để đảm bảo sấy khô hoàn toàn tận gốc lớp lông kép dày, giúp bé không bị ẩm da gây nấm.'],
    ],
  },
  {
    slug: 'cat-tia-long-phoc-soc-pomeranian-binh-thanh',
    category: 'Grooming · Pomeranian',
    title: 'Cắt Tỉa Lông Phốc Sóc (Pomeranian) Bình Thạnh | Lumi Pet',
    desc: 'Cắt tỉa lông Phốc sóc (Pomeranian) kiểu gấu Boo tại Lumi Pet Phường Gia Định, Bình Thạnh từ 290k–360k. Vì sao không nên cạo sát da 0mm tránh rụng lông.',
    h1: 'Cắt tỉa lông Phốc sóc (Pomeranian) tại Bình Thạnh: Đẹp form gấu Boo, giữ an toàn cho da',
    dek: 'Phốc sóc (Pom) cực kỳ dễ thương khi được tỉa form tròn Boo, nhưng lại là giống chó nhạy cảm bậc nhất với việc cạo tông đơ sát da. Dưới đây là bảng giá 2026 và cách chăm sóc lông Pom chuẩn Groomer.',
    img: '../../images/vn-hero-spa.jpg',
    imgAlt: 'Groomer Việt Nam tỉa lông nhẹ nhàng cho chó nhỏ tại Lumi Pet Phường Gia Định Bình Thạnh',
    quickAnswer: 'Giá <strong>cắt tỉa lông Phốc sóc (Pomeranian)</strong> tại <strong>Lumi Pet Bình Thạnh (27 Võ Trường Toản, Phường Gia Định)</strong> năm 2026 là <strong>290.000đ</strong> (dưới 3kg) và <strong>360.000đ</strong> (3–6kg) đã gồm trọn gói tắm vệ sinh, cắt mài móng, vệ sinh tai và vắt tuyến hôi. Tạo kiểu bo tròn Boo cầu kỳ phụ thu 50.000đ – 100.000đ.',
    toc: [
      ['#gia-pom', '1. Bảng giá Spa & cắt tỉa Phốc sóc 2026'],
      ['#canh-bao-alopecia', '2. Tránh hội chứng rụng lông BSD/Alopecia ở Phốc sóc'],
      ['#kieu-cat-dep', '3. 3 kiểu cắt tỉa Phốc sóc đẹp & an toàn'],
      ['#faq-pom', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="gia-pom">1. Bảng giá tắm &amp; cắt tỉa Phốc sóc (Pomeranian) 2026</h2>
        <table>
          <thead><tr><th>Cân nặng Phốc sóc</th><th>Tắm vệ sinh</th><th>Combo Tắm + Cắt tỉa</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td>Dưới 3kg (Pom mini/tiny)</td><td>140.000đ</td><td><strong>290.000đ</strong></td><td>Đã gồm 10 bước vệ sinh cơ bản</td></tr>
            <tr><td>3 – 6kg (Pom tiêu chuẩn)</td><td>190.000đ</td><td><strong>360.000đ</strong></td><td>Phụ thu tạo kiểu bo tròn kỹ: 50k–100k</td></tr>
          </tbody>
        </table>
        <p>Trường hợp lông bé bị rối bết vùng sau tai, nách hoặc quá nhiều lông bông tốn thời gian chải sấy, thợ sẽ kiểm tra trực tiếp và báo trước phụ thu gỡ rối (50k–500k) hoặc lông dày (50k–150k) nếu thực tế phát sinh.</p>

        <h2 id="canh-bao-alopecia">2. Cảnh báo quan trọng: Không nên cạo sát da cho Phốc sóc</h2>
        <p>Phốc sóc là giống dễ gặp tình trạng <strong>ngừng mọc lông sau khi cạo sát (Alopecia X / Black Skin Disease)</strong>. Lưỡi tông đơ đi quá sát da làm tổn thương nang lông vốn nhạy cảm ở giống Pom. Vì vậy tại Lumi Pet:</p>
        <ul>
          <li>Ưu tiên <strong>tỉa kéo thủ công hoàn toàn</strong>, chừa lại tối thiểu 1,5 – 2cm lớp lông bảo vệ da.</li>
          <li>Sấy tay 100% ở nhiệt độ gió ấm nhẹ kết hợp lược chải phồng để từng sợi lông dựng đứng, giúp đường kéo bo tròn mềm mại không lộ vết cắt.</li>
          <li>Nếu bé đang bị rụng lông mảng hoặc sạm da đen bất thường, tiệm sẽ khuyên ba mẹ đưa bé đi khám bác sĩ thú y kiểm tra nội tiết thay vì chỉ cắt tỉa thẩm mỹ.</li>
        </ul>

        <h2 id="kieu-cat-dep">3. 3 kiểu cắt tỉa Phốc sóc được ba mẹ chọn nhiều nhất</h2>
        <ol>
          <li><strong>Kiểu gấu Boo (Teddy Boo Cut):</strong> Bo tròn đầu và thân, giữ độ dài vừa phải để lông vẫn xù mịn và che phủ tốt làn da.</li>
          <li><strong>Kiểu Cáo nhỏ tự nhiên (Fox Trim):</strong> Tỉa gọn lông chỉa ở chân, tai, viền bụng và đuôi, giữ nguyên vẻ kiêu sa cổ điển của Phốc sóc.</li>
          <li><strong>Tỉa vệ sinh gọn gàng (Sanitary Trim):</strong> Dành cho Pom con đang thay lông sữa — chỉ cạo vệ sinh bàn chân/hậu môn và tỉa nhẹ viền chân để lông trưởng thành mọc đều đẹp.</li>
        </ol>
        <p>Xem thêm chi tiết tại trang <a href="../../cat-tia-long-cho-phuong-gia-dinh/">Cắt tỉa lông chó Phường Gia Định</a> hoặc <a href="../../grooming-cho-meo-binh-thanh/">Grooming Bình Thạnh</a>.</p>`,
    faqs: [
      ['Cắt tỉa lông Phốc sóc 2.5kg tại Lumi Pet Bình Thạnh giá bao nhiêu?', 'Phốc sóc dưới 3kg có giá combo tắm + cắt tỉa 290.000đ (nếu tạo kiểu bo tròn gấu Boo cầu kỳ, phụ thu thêm 50.000đ – 100.000đ và luôn báo trước).'],
      ['Phốc sóc mấy tháng tuổi thì nên cắt tỉa tạo kiểu lần đầu?', 'Nên đợi bé qua giai đoạn thay lông sữa (khoảng 7–8 tháng tuổi trở lên) mới tỉa form toàn thân. Trước đó chỉ nên tắm vệ sinh định kỳ và tỉa gọn lông bàn chân, hậu môn.'],
      ['Lumi Pet có nhận cạo sát 0mm cho Phốc sóc không?', 'Groomer Lumi Pet luôn tư vấn tỉa kéo giữ độ dài an toàn để bảo vệ nang lông cho Phốc sóc, hạn chế tối đa việc cạo sát trừ khi bé bị bết tảng nặng hoặc có chỉ định điều trị da từ bác sĩ thú y.'],
      ['Làm sao giữ lông Phốc sóc không bị bết rối giữa 2 lần đi Spa?', 'Ba mẹ nên chải nhẹ vùng sau tai, cổ và nách 2–3 lần/tuần bằng lược răng thưa/slicker chuyên dụng và tránh để lông ướt tự khô sau khi đi mưa.'],
    ],
  },
  {
    slug: 'tam-cho-lon-husky-golden-samoyed-binh-thanh',
    category: 'Spa Chó Lớn · 15–25kg',
    title: 'Tắm Chó Lớn Husky, Golden, Samoyed Bình Thạnh (15–25kg)',
    desc: 'Bảng giá tắm chó lớn 15–25kg (Golden, Husky, Samoyed, Alaska) tại Lumi Pet Phường Gia Định, Bình Thạnh: 430k–550k, thợ sấy tay khô kiệt tận chân lông kép.',
    h1: 'Tắm chó lớn (Golden, Husky, Samoyed, Alaska) tại Bình Thạnh: Bảng giá 2026 tới 25kg',
    dek: 'Tắm các giống chó lớn lông kép tại nhà rất dễ để sót ẩm sát da gây hôi lông và viêm da ẩm (hot spot). Bảng giá 2026 mới nhất của Lumi Pet đã mở rộng minh bạch 8 mốc cân nặng lên tới 25kg.',
    img: '../../images/vn-bath-dog.jpg',
    imgAlt: 'Dịch vụ tắm chó lớn lông kép sạch sâu sấy khô tận gốc tại Lumi Pet Bình Thạnh',
    quickAnswer: 'Bảng giá <strong>tắm vệ sinh chó lớn (Golden, Husky, Samoyed)</strong> năm 2026 tại <strong>Lumi Pet Bình Thạnh (27 Võ Trường Toản, Phường Gia Định)</strong>: <strong>370.000đ</strong> (12–15kg), <strong>430.000đ</strong> (15–18kg), <strong>480.000đ</strong> (18–20kg) và <strong>550.000đ</strong> (20–25kg). Chó trên 25kg báo giá riêng theo giống và độ dày lông.',
    toc: [
      ['#gia-cho-lon', '1. Bảng giá tắm chó lớn 2026 (12–25kg+)'],
      ['#vi-sao-can-say-ky', '2. Vì sao chó lớn lông kép bắt buộc sấy tay khô 100%?'],
      ['#phu-thu-long-day', '3. Lưu ý phụ thu lông quá dày & đặt lịch trước'],
      ['#faq-cho-lon', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="gia-cho-lon">1. Bảng giá Spa chó lớn 2026 (12kg – 25kg) tại Lumi Pet</h2>
        <table>
          <thead><tr><th>Cân nặng chó lớn</th><th>Tắm vệ sinh</th><th>Combo Tắm + Cạo</th><th>Combo Tắm + Cắt tỉa</th></tr></thead>
          <tbody>
            <tr><td>12 – 15kg</td><td><strong>370.000đ</strong></td><td>480.000đ</td><td>600.000đ</td></tr>
            <tr><td>15 – 18kg</td><td><strong>430.000đ</strong></td><td>550.000đ</td><td>680.000đ</td></tr>
            <tr><td>18 – 20kg</td><td><strong>480.000đ</strong></td><td>620.000đ</td><td>760.000đ</td></tr>
            <tr><td>20 – 25kg</td><td><strong>550.000đ</strong></td><td>700.000đ</td><td>850.000đ</td></tr>
            <tr><td>Trên 25kg (Alaska, Golden lớn...)</td><td colspan="3">Nhắn Zalo <strong>0989 979 675</strong> gửi ảnh &amp; cân nặng để báo giá chính xác</td></tr>
          </tbody>
        </table>
        <p>Đã bao gồm trọn bộ vệ sinh: cắt mài móng, vệ sinh tai, cạo lông đệm bàn chân/bụng/hậu môn, vắt tuyến hôi, tắm xả 2 lần và sấy tay khô tận gốc. Xem đầy đủ <a href="../../bang-gia-spa-thu-cung/">Bảng giá Spa 2026 (8 mốc chó)</a>.</p>

        <h2 id="vi-sao-can-say-ky">2. Điều quan trọng nhất khi tắm Golden, Husky, Samoyed</h2>
        <p>Các giống chó cỡ lớn có lớp lông lót dày giữ nước cực lâu. Nếu tắm ở nhà dùng máy sấy gia đình yếu, lớp lông ngoài tưởng đã khô nhưng sát chân da vẫn còn ẩm — chỉ sau 2–3 ngày sẽ phát sinh mùi hôi ẩm nồng và mảng viêm da mưng mủ (hot spot).</p>
        <ul>
          <li><strong>Máy sấy công suất chuyên dụng kết hợp sấy tay 100%:</strong> Thổi bung toàn bộ nước đọng và đẩy sạch lớp lông chết thay mùa mà không nhốt bé trong lồng sấy nóng.</li>
          <li><strong>Kiểm tra kỹ vùng cổ, nách, bụng và gốc đuôi:</strong> Đây là 4 vị trí giữ ẩm lâu nhất ở Golden và Samoyed.</li>
          <li><strong>Vắt tuyến hôi &amp; cạo gọn kẽ đệm bàn chân:</strong> Giúp chó lớn chạy nhảy trong nhà không bị trơn trượt ảnh hưởng khớp háng.</li>
        </ul>

        <h2 id="phu-thu-long-day">3. Phụ thu minh bạch cho chó lông quá dày &amp; cách đặt lịch</h2>
        <p>Với những bé Husky, Samoyed, Alaska đang vào mùa rụng lông dày hoặc bộ lông bông gấp đôi thông thường (tốn 2–3 tiếng sấy chải liên tục), bảng giá 2026 niêm yết rõ mục <strong>phụ thu lông quá dày, nhiều bông: 50.000đ – 150.000đ</strong> (nhân viên luôn kiểm tra trực tiếp và báo trước với chủ). Ba mẹ nuôi chó lớn nên <a href="../../dat-lich/">đặt lịch trước 1 ngày</a> để tiệm bố trí sẵn 2 nhân sự hỗ trợ bế tắm an toàn.</p>`,
    faqs: [
      ['Tắm chó Golden hoặc Husky 22kg tại Lumi Pet Bình Thạnh giá bao nhiêu?', 'Chó 22kg thuộc mốc 20–25kg: Tắm vệ sinh trọn gói 550.000đ. Nếu bộ lông quá dày nhiều bông cần chải xả lâu, phụ thu lông dày 50.000đ – 150.000đ (báo trước khi làm).'],
      ['Chó Alaska 30kg Lumi Pet có nhận tắm không?', 'Có. Chó trên 25kg bạn vui lòng nhắn Zalo 0989 979 675 kèm ảnh và cân nặng của bé để tiệm báo giá và sắp xếp khung giờ có 2 thợ hỗ trợ.'],
      ['Tắm một bé Samoyed hoặc Husky mất bao lâu?', 'Thường mất từ 90 đến 150 phút để chải xả lông rụng, tắm 2 lần và sấy tay khô hoàn toàn tận sát da.'],
      ['Mùa nóng có nên cạo trọc lông cho Husky hoặc Samoyed không?', 'Không nên cạo sát da cho giống chó xứ lạnh có lông kép vì lớp lông giúp cách nhiệt và chống nắng. Nên tắm xả lông tơ định kỳ kết hợp tỉa gọn vùng bụng và bàn chân.'],
    ],
  },
  {
    slug: 'cao-long-meo-binh-thanh-gia-bao-nhieu',
    category: 'Spa Mèo · Cạo Lông',
    title: 'Cạo Lông Mèo Bình Thạnh Giá Bao Nhiêu? Lưu Ý An Toàn',
    desc: 'Bảng giá combo tắm + cạo lông mèo 2026 tại Lumi Pet Phường Gia Định, Bình Thạnh: 250k (<3kg), 320k (3–6kg), 380k (6–10kg). Khu riêng yên tĩnh, an toàn.',
    h1: 'Cạo lông mèo Bình Thạnh giá bao nhiêu? Bảng giá 2026 & Khi nào nên cạo',
    dek: 'Cạo lông mèo đòi hỏi sự tỉ mỉ và kiên nhẫn cao vì da mèo rất mỏng, dễ co giãn và mèo dễ giật mình bởi tiếng tông đơ. Dưới đây là bảng giá combo tắm cạo mèo 2026 và những trường hợp thực sự nên cạo.',
    img: '../../images/vn-spa-cat.jpg',
    imgAlt: 'Chăm sóc và cạo lông mèo nhẹ nhàng tại khu riêng Lumi Pet Phường Gia Định Bình Thạnh',
    quickAnswer: 'Theo bảng giá 2026 tại <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong>, <strong>combo tắm vệ sinh + cạo lông mèo</strong> có giá: <strong>250.000đ</strong> (dưới 3kg), <strong>320.000đ</strong> (3–6kg) và <strong>380.000đ</strong> (6–10kg). Mèo trên 10kg báo giá riêng. Đã gồm tắm xả sạch, cắt móng, vệ sinh tai và sấy tay 100%.',
    toc: [
      ['#gia-cao-meo', '1. Bảng giá cạo lông mèo 2026 tại Bình Thạnh'],
      ['#khi-nao-nen-cao', '2. Khi nào NÊN và KHÔNG NÊN cạo lông mèo?'],
      ['#an-toan-da-meo', '3. Quy chuẩn cạo lông mèo an toàn tại Lumi Pet'],
      ['#faq-cao-meo', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="gia-cao-meo">1. Bảng giá Tắm + Cạo lông mèo 2026 tại Lumi Pet Bình Thạnh</h2>
        <table>
          <thead><tr><th>Cân nặng mèo</th><th>Tắm vệ sinh</th><th>Combo Tắm + Cạo lông mèo</th></tr></thead>
          <tbody>
            <tr><td>Dưới 3kg</td><td>160.000đ</td><td><strong>250.000đ</strong></td></tr>
            <tr><td>3 – 6kg</td><td>220.000đ</td><td><strong>320.000đ</strong></td></tr>
            <tr><td>6 – 10kg</td><td>270.000đ</td><td><strong>380.000đ</strong></td></tr>
          </tbody>
        </table>
        <p>Mèo dữ, cào cắn mạnh cần thêm nhân sự giữ an toàn có phụ thu 50.000đ – 200.000đ; lông bết cục sát da cần xử lý lâu có phụ thu gỡ rối 50.000đ – 500.000đ (luôn kiểm tra trước và thống nhất với chủ). Xem thêm <a href="../../tam-meo-phuong-gia-dinh/">dịch vụ tắm mèo Phường Gia Định</a>.</p>

        <h2 id="khi-nao-nen-cao">2. Khi nào NÊN cạo lông mèo và khi nào nên giữ lông?</h2>
        <ul>
          <li><strong>Nên cạo lông (kiểu sư tử chừa đầu, 4 bàn chân &amp; chỏm đuôi) khi:</strong> Mèo lông dài (Ba Tư, Anh lông dài, Ragdoll) bị bết rối thành tảng sát da gây đau; mèo đang cần bôi thuốc điều trị nấm da theo hướng dẫn bác sĩ thú y; hoặc mèo rụng lông quá nhiều mùa nắng nóng gây nôn búi lông liên tục.</li>
          <li><strong>Không cần thiết cạo khi:</strong> Mèo lông ngắn khỏe mạnh, không rối, chỉ hơi rụng lông thông thường — lúc này chỉ cần <strong>tắm vệ sinh kết hợp chải lông chết</strong> (từ 160k) là đủ sạch mát và giữ lớp lông bảo vệ da tự nhiên.</li>
        </ul>

        <h2 id="an-toan-da-meo">3. Tiêu chuẩn an toàn khi cạo lông mèo tại Lumi Pet</h2>
        <ol>
          <li><strong>Không gian tách biệt khu chó:</strong> Hạn chế tiếng sủa giúp mèo bình tĩnh hơn trước khi bật tông đơ.</li>
          <li><strong>Tông đơ êm giảm rung &amp; lưỡi giữ độ dài an toàn (không cạo trắng sát 0mm):</strong> Chừa lớp lông mịn khoảng 2–3mm để tránh trầy xước vùng da bụng mỏng và hạn chế kích ứng da.</li>
          <li><strong>Tắm xả sạch lông vụn &amp; sấy tay 100%:</strong> Loại bỏ sạch lông cắt vụn bám trên da giúp mèo không bị ngứa ngáy sau khi về nhà.</li>
        </ol>`,
    faqs: [
      ['Cạo lông mèo 4kg ở Bình Thạnh giá bao nhiêu?', 'Mèo 4kg thuộc nhóm 3–6kg: Combo tắm vệ sinh + cạo lông mèo tại Lumi Pet giá 320.000đ (đã gồm cắt móng, vệ sinh tai và sấy tay).'],
      ['Cạo lông mèo có gây đau hay stress cho bé không?', 'Nếu làm nhẹ nhàng bằng tông đơ giảm ồn trong không gian yên tĩnh và không cạo sát 0mm thì hoàn toàn không đau. Với mèo quá hoảng loạn hoặc hung dữ, thợ sẽ tạm dừng trao đổi với chủ thay vì ép giữ gây nguy hiểm.'],
      ['Sau khi cạo lông mèo bao lâu thì lông mọc lại như cũ?', 'Thông thường lông mèo bắt đầu mọc đều sau 3–4 tuần và dài hoàn chỉnh lại sau khoảng 2–4 tháng tùy giống mèo lông ngắn hay lông dài.'],
      ['Tiệm có cạo lông không tắm cho mèo không?', 'Lumi Pet khuyến nghị làm trọn combo tắm + cạo vì sau khi đi tông đơ rất nhiều vụn lông li ti bám trên da sẽ khiến mèo liếm phải hoặc ngứa ngáy nếu không tắm xả sạch.'],
    ],
  },
  {
    slug: 'tam-meo-anh-long-ngan-long-dai-het-nhon-duoi',
    category: 'Spa Mèo · Giống Mèo',
    title: 'Tắm Mèo Anh Lông Ngắn, Lông Dài Sạch Nhờn Đuôi Bình Thạnh',
    desc: 'Tắm mèo Anh lông ngắn, Anh lông dài sạch bết dầu đuôi & giảm rụng lông tại Lumi Pet Phường Gia Định, Bình Thạnh từ 160k–270k. Sấy tay 100%, không stress.',
    h1: 'Tắm mèo Anh lông ngắn & Anh lông dài sạch nhờn đuôi, bồng mượt tại Bình Thạnh',
    dek: 'Mèo Anh lông ngắn (ALN) và Anh lông dài (ALD) nổi tiếng với bộ lông dày mịn như nhung nhưng rất hay gặp tình trạng bết dầu gốc đuôi (stud tail) và mụn cằm. Tắm đúng kỹ thuật giúp lông bé tơi mượt rõ rệt ngay sau 1 buổi.',
    img: '../../images/vn-hotel-cat-vip.jpg',
    imgAlt: 'Mèo Anh lông ngắn bộ lông tơi bông sạch sẽ tại Lumi Pet Bình Thạnh',
    quickAnswer: 'Giá <strong>tắm vệ sinh mèo Anh lông ngắn / Anh lông dài</strong> tại <strong>Lumi Pet Bình Thạnh (27 Võ Trường Toản, Phường Gia Định)</strong> năm 2026: <strong>160.000đ</strong> (dưới 3kg), <strong>220.000đ</strong> (3–6kg) và <strong>270.000đ</strong> (6–10kg). Quy trình tẩy dầu dịu nhẹ vùng đuôi, sấy tay 100% không lồng sấy nhiệt.',
    toc: [
      ['#nguyen-nhan-nhon', '1. Vì sao mèo ALN/ALD hay bị bết dầu gốc đuôi?'],
      ['#quy-trinh-meo-aln', '2. Quy trình tắm tẩy dầu sạch bết & giảm rụng lông'],
      ['#gia-tam-meo-aln', '3. Bảng giá tắm mèo 2026 & tần suất hợp lý'],
      ['#faq-meo-aln', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="nguyen-nhan-nhon">1. Vì sao mèo Anh lông ngắn, lông dài hay bị bết nhờn đuôi &amp; rụng lông nhiều?</h2>
        <p>Tuyến bã nhờn ở gốc đuôi mèo (đặc biệt là mèo đực chưa triệt sản hoặc mèo ăn thức ăn giàu chất béo) tiết dầu mạnh. Khi dầu tích tụ lâu ngày không được làm sạch đúng cách, lông đuôi sẽ bết dính thành từng lọn, sẫm màu và dễ nổi mụn đen.</p>
        <p>Ngoài ra, lớp lông lót dày của mèo ALN/ALD trong khí hậu nóng ẩm Sài Gòn khiến lông chết rụng bám sâu dưới da; nếu chỉ dùng sữa tắm thường sẽ không tách hết dầu thừa.</p>

        <h2 id="quy-trinh-meo-aln">2. Quy trình tắm mèo ALN/ALD chuẩn sạch tại Lumi Pet</h2>
        <ol>
          <li><strong>Cắt móng &amp; vệ sinh tai trước khi vào bồn:</strong> Giúp bé an toàn và sạch ráy tai sâu.</li>
          <li><strong>Ủ tẩy nhờn dịu nhẹ vùng gốc đuôi &amp; cằm:</strong> Dùng sản phẩm làm sạch dầu chuyên dụng cho mèo để hòa tan lớp bã nhờn bết dính mà không làm khô da.</li>
          <li><strong>Tắm xả 2 lần bằng sữa tắm cao cấp pH cân bằng cho mèo:</strong> Đánh tan bụi bẩn, giảm mùi hôi và hỗ trợ gỡ bớt lớp lông rụng.</li>
          <li><strong>Thấm khăn microfiber &amp; thợ sấy tay 100%:</strong> Rẽ từng lớp lông dày của mèo ALN/ALD để sấy khô kiệt tận gốc da vùng bụng và kẽ chân — tuyệt đối không nhốt lồng sấy nhiệt.</li>
        </ol>

        <h2 id="gia-tam-meo-aln">3. Bảng giá tắm mèo 2026 &amp; lịch tắm khuyến nghị</h2>
        <table>
          <thead><tr><th>Cân nặng mèo ALN / ALD</th><th>Tắm vệ sinh trọn gói</th><th>Combo Tắm + Cạo lông</th></tr></thead>
          <tbody>
            <tr><td>Dưới 3kg</td><td><strong>160.000đ</strong></td><td>250.000đ</td></tr>
            <tr><td>3 – 6kg (phổ biến nhất)</td><td><strong>220.000đ</strong></td><td>320.000đ</td></tr>
            <tr><td>6 – 10kg (mèo lớn/béo)</td><td><strong>270.000đ</strong></td><td>380.000đ</td></tr>
          </tbody>
        </table>
        <p>Tần suất lý tưởng cho mèo nuôi trong nhà là <strong>3–4 tuần/lần</strong> (mèo đang nhờn đuôi nặng có thể tắm 2 tuần/lần trong tháng đầu). Tham khảo thêm <a href="../spa-meo-khong-dung-long-say-binh-thanh/">tại sao nên chọn spa mèo không dùng lồng sấy</a>.</p>`,
    faqs: [
      ['Tắm mèo Anh lông ngắn 4.5kg tại Lumi Pet Bình Thạnh hết bao nhiêu?', 'Mèo 4.5kg thuộc nhóm 3–6kg, giá tắm vệ sinh trọn gói 220.000đ (sấy tay 100%, cắt móng, vệ sinh tai, cạo lông bàn chân/hậu môn).'],
      ['Mèo Anh lông dài bị rối bụng và nách có gỡ được không?', 'Nếu rối nhẹ, thợ sẽ chải gỡ bằng lược chuyên dụng (phụ thu gỡ rối từ 50.000đ tùy mức độ). Nếu bết tảng sát da quá đau, thợ sẽ tư vấn chuyển sang gói tắm cạo sạch mát.'],
      ['Mèo bị nhờn đuôi tắm 1 lần có hết hẳn không?', 'Ngay lần tắm đầu tiên lớp dầu bết sẽ sạch rõ rệt, lông tơi bông trở lại. Tuy nhiên nếu là mèo đực chưa triệt sản thì tuyến dầu vẫn hoạt động, cần duy trì tắm định kỳ 3–4 tuần/lần.'],
      ['Tiệm có khu riêng cho mèo không sợ chó sủa không?', 'Có. Lumi Pet sắp xếp không gian riêng yên tĩnh cho mèo và nhận đặt lịch theo khung giờ để mèo không phải chờ lâu.'],
    ],
  },
  {
    slug: 'vat-tuyen-hoi-cho-khi-nao-can',
    category: 'Chăm Sóc Chó · Vệ Sinh',
    title: 'Vắt Tuyến Hôi Cho Chó: Khi Nào Cần & Giá Tại Bình Thạnh',
    desc: 'Dấu hiệu chó cần vắt tuyến hôi (cọ mông xuống sàn, mùi hôi vùng đuôi), tần suất an toàn và lưu ý bước vắt tuyến hôi đã bao gồm sẵn trong gói tắm Lumi Pet.',
    h1: 'Vắt tuyến hôi cho chó: 4 dấu hiệu nhận biết & Lưu ý để không làm viêm tuyến',
    dek: 'Nhiều ba mẹ thấy cún vừa tắm xong vẫn có mùi tanh khắm vùng đuôi hoặc hay lê mông trên sàn nhà — nguyên nhân hàng đầu là tuyến hôi (tuyến hậu môn) bị đầy dịch mà chưa được làm sạch đúng cách.',
    img: '../../images/vn-bath-dog.jpg',
    imgAlt: 'Quy trình tắm vệ sinh kèm vắt tuyến hôi an toàn cho chó tại Lumi Pet Bình Thạnh',
    quickAnswer: 'Chó cần được kiểm tra và <strong>vắt tuyến hôi</strong> khoảng <strong>2–4 tuần/lần</strong> (hoặc mỗi lần đi tắm Spa) khi thấy dấu hiệu cọ mông xuống sàn, liếm vùng đuôi liên tục hoặc có mùi tanh khắm. Tại <strong>Lumi Pet Bình Thạnh (27 Võ Trường Toản)</strong>, bước vắt tuyến hôi <strong>đã bao gồm sẵn trong mọi gói tắm vệ sinh (từ 140.000đ)</strong>, không tính phí lẻ.',
    toc: [
      ['#dau-hieu', '1. 4 dấu hiệu cho thấy chó đang bị đầy tuyến hôi'],
      ['#co-nen-tu-vat', '2. Có nên tự vắt tuyến hôi cho chó tại nhà?'],
      ['#gia-vat-tuyen-hoi', '3. Vắt tuyến hôi tại Lumi Pet Bình Thạnh giá bao nhiêu?'],
      ['#faq-tuyen-hoi', '4. Câu hỏi thường gặp'],
    ],
    body: `
        <h2 id="dau-hieu">1. 4 dấu hiệu rõ nhất cho thấy cún đang bị đầy tuyến hôi</h2>
        <p>Hai túi tuyến hôi nằm ở vị trí 4 giờ và 8 giờ hai bên hậu môn của chó. Thông thường dịch tuyến sẽ tự thoát ra khi bé đi vệ sinh phân khuôn cứng, nhưng với chó giống nhỏ (Poodle, Chihuahua, Phốc sóc, Corgi, Pug) hoặc bé ăn nhiều đồ mềm ít chất xơ, túi tuyến rất dễ bị ứ đọng:</p>
        <ul>
          <li><strong>Cún lê mông, cọ mông trượt trên sàn nhà hoặc thảm</strong> do căng tức, ngứa rát vùng hậu môn.</li>
          <li><strong>Quay lại liếm hoặc cắn vùng gốc đuôi liên tục.</strong></li>
          <li><strong>Phát ra mùi tanh nồng rất đặc trưng</strong> dù bạn vừa tắm xà phòng thơm cách đó 1–2 ngày.</li>
          <li><strong>Ngồi bồn chồn, khó chịu khi chạm nhẹ vào phần mông.</strong></li>
        </ul>

        <h2 id="co-nen-tu-vat">2. Có nên tự vắt tuyến hôi cho chó tại nhà không?</h2>
        <p>Nếu chưa quen lực tay, việc bóp quá mạnh hoặc sai vị trí dễ làm dập mô mềm, gây đau rát hoặc làm sưng viêm túi tuyến. Đặc biệt:</p>
        <ul>
          <li><strong>Không vắt quá thường xuyên</strong> (tránh vắt mỗi tuần khi không đầy dịch vì sẽ làm tuyến lệ thuộc, mất cơ chế tự tiết).</li>
          <li><strong>Dừng ngay và đưa đi bác sĩ thú y nếu thấy sưng đỏ, chảy mủ, có máu hoặc khối áp-xe:</strong> Lúc này tuyến đã bị viêm/vỡ cần bác sĩ thú y xử lý y khoa — không được tự bóp và không đưa đi tắm spa.</li>
        </ul>

        <h2 id="gia-vat-tuyen-hoi">3. Bước vắt tuyến hôi đã bao gồm trong gói tắm vệ sinh tại Lumi Pet</h2>
        <p>Tại <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định, Bình Thạnh)</strong>, bước kiểm tra và vắt tuyến hôi nhẹ nhàng trong bồn nước ấm <strong>đã nằm sẵn 0đ trong mọi gói tắm vệ sinh</strong> (chó dưới 3kg chỉ 140.000đ, 3–6kg là 190.000đ, 6–9kg là 250.000đ...) cùng với cắt mài móng, vệ sinh tai, cạo vệ sinh bàn chân/bụng/hậu môn và sấy tay 100%. Xem thêm <a href="../../tam-cho-phuong-gia-dinh/">dịch vụ tắm chó Phường Gia Định</a> hoặc đọc thêm <a href="../cho-van-hoi-sau-khi-tam/">vì sao chó vẫn hôi sau khi tắm</a>.</p>`,
    faqs: [
      ['Vắt tuyến hôi cho chó tại Lumi Pet có tính tiền riêng không?', 'Không. Vắt tuyến hôi đã bao gồm sẵn trong toàn bộ các gói tắm vệ sinh, tắm cạo và tắm cắt tỉa tại Lumi Pet (giá gói tắm chó từ 140.000đ).'],
      ['Mèo có cần vắt tuyến hôi như chó không?', 'Đa số mèo tự làm sạch và ít bị tắc tuyến hôi hơn chó. Nhân viên chỉ kiểm tra và hỗ trợ nhẹ nhàng nếu thấy bé mèo thực sự có dấu hiệu đầy dịch hoặc mùi hôi vùng đuôi.'],
      ['Bao lâu nên vắt tuyến hôi cho chó Poodle một lần?', 'Khoảng 2–4 tuần/lần kết hợp cùng lịch tắm vệ sinh định kỳ, kết hợp bổ sung đủ chất xơ trong khẩu phần ăn giúp phân khuôn tốt để tuyến tự thoát tự nhiên.'],
      ['Nếu vùng hậu môn của chó bị sưng cục đỏ thì tiệm Spa có vắt được không?', 'Không. Khi có dấu hiệu sưng đỏ, đau dữ dội hoặc chảy mủ/máu, đó là viêm hoặc áp-xe tuyến hậu môn — ba mẹ cần đưa bé đến bác sĩ thú y thăm khám ngay.'],
    ],
  },
];

for (const a of articles) {
  if (a.title.length > 62) throw new Error(`Title > 62 (${a.title.length}): ${a.slug}`);
  if (a.desc.length < 130 || a.desc.length > 160) throw new Error(`Desc out of range (${a.desc.length}): ${a.slug}`);

  const url = `${ORIGIN}/bai-viet/${a.slug}/`;
  const escTitle = a.title.replaceAll('&', '&amp;');
  const escDesc = a.desc.replaceAll('&', '&amp;');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.h1,
        description: a.desc,
        datePublished: TODAY,
        dateModified: TODAY,
        author: { '@id': `${ORIGIN}/gioi-thieu/#lead-groomer` },
        publisher: { '@id': `${ORIGIN}/#business` },
        mainEntityOfPage: url,
        image: `${ORIGIN}/${a.img.replace('../../', '')}`,
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

  const faqHtml = a.faqs
    .map(([q, ans], idx) => `<details${idx === 0 ? ' open' : ''}><summary>${q}</summary><p>${ans}</p></details>`)
    .join('\n          ');

  const tocHtml = a.toc.map(([href, label]) => `<a href="${href}">${label}</a>`).join('\n        ');

  const html = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escTitle}</title>
  <meta name="description" content="${escDesc}" />
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${escTitle}" />
  <meta property="og:description" content="${escDesc}" />
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ORIGIN}/${a.img.replace('../../', '')}">
  <link rel="stylesheet" href="../../lumi-seo.css">
  <link rel="stylesheet" href="../../lumi-blog.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<main class="blog-shell">
  <div class="breadcrumb"><a href="../../">Lumi Pet</a> / <a href="../">Kiến thức</a> / ${escTitle}</div>
  <article>
    <header class="article-hero">
      <span class="article-category">${a.category}</span>
      <h1>${a.h1}</h1>
      <p class="article-dek">${a.dek}</p>
      <div class="article-meta"><span>Cập nhật: 24/11/2026</span><span>6 phút đọc</span><span>Kiểm duyệt: Đội ngũ Groomer Lumi Pet</span></div>
      <figure class="article-visual"><img src="${a.img}" alt="${a.imgAlt}" loading="lazy"><figcaption>${a.imgAlt}</figcaption></figure>
    </header>

    <div class="article-layout">
      <div class="article-prose">
        <p><strong>Câu trả lời ngắn:</strong> ${a.quickAnswer}</p>
        ${a.body}

        <h2 id="${a.toc[a.toc.length - 1][0].slice(1)}">${a.toc[a.toc.length - 1][1]}</h2>
        <div class="faq">
          ${faqHtml}
        </div>

        <section class="blog-cta">
          <h2>Đặt lịch chăm sóc nhẹ nhàng cho boss tại 27 Võ Trường Toản</h2>
          <p>Đặt lịch trước giúp tiệm chuẩn bị đúng thợ và khung giờ, tránh để bé chờ lâu. Bảng giá 2026 niêm yết minh bạch theo cân nặng.</p>
          <div class="blog-cta-actions">
            <a class="btn" href="../../dat-lich/">Đặt lịch Spa Online</a>
            <a class="btn btn-secondary" href="https://zalo.me/0989979675" target="_blank" rel="noopener noreferrer">Nhắn Zalo 0989 979 675</a>
          </div>
        </section>
      </div>
      <aside class="article-toc">
        <strong>Trong bài này</strong>
        ${tocHtml}
      </aside>
    </div>
  </article>
</main>
<footer class="footer"><div class="footer-inner"><div><strong>LUMI PET SHOP – SPA &amp; HOTEL 24/7</strong><br>27 Võ Trường Toản, Phường Gia Định (P.2, Bình Thạnh cũ), TP.HCM</div><div><a href="tel:0989979675">0989 979 675</a><br>Spa: 08:00 – 21:00 · Hotel: 24/7</div><div><a href="../">Kiến thức →</a></div></div></footer>
<script src="../../lumi-ui.js" defer></script>
</body>
</html>
`;

  const dir = path.join(BLOG_DIR, a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`[CREATED] /bai-viet/${a.slug}/ | Title(${a.title.length}c) | Desc(${a.desc.length}c)`);
}
