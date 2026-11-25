import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const ORIGIN = 'https://lumipet.vn';

const CORRIDOR_ARTICLES = [
  {
    slug: 'spa-tam-cho-meo-truc-phan-dang-luu-bach-dang-le-van-duyet',
    category: 'Cẩm Nang Tuyến Đường · Lõi 1–3 Phút',
    title: 'Tắm Chó Mèo Trục Phan Đăng Lưu, Bạch Đằng, Lê Văn Duyệt',
    description:
      'Hướng dẫn đi tắm chó 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & gửi thú cưng cho cư dân Phan Đăng Lưu, Bạch Đằng, Lê Văn Duyệt, Võ Trường Toản, Bùi Hữu Nghĩa.',
    h1: 'Tắm chó mèo, Cắt tỉa & Gửi thú cưng trục Phan Đăng Lưu – Bạch Đằng – Lê Văn Duyệt (quanh Chợ Bà Chiểu)',
    dek: 'Nằm ngay lõi Phường Gia Định (27 Võ Trường Toản), cư dân các tuyến đường quanh Chợ Bà Chiểu, Lăng Ông và Bệnh viện Gia Định chỉ mất 1–3 phút đưa bé đi Spa hoặc gửi Pet Hotel 24/7 mà không sợ kẹt xe.',
    heroImg: 'vn-bath-dog.jpg',
    heroAlt: 'Tắm chó mèo sạch sẽ sấy tay 100% gần trục Phan Đăng Lưu Bạch Đằng Lê Văn Duyệt tại Lumi Pet',
    heroCap: '📍 Lumi Pet 27 Võ Trường Toản — cách Chợ Bà Chiểu, Phan Đăng Lưu, Bạch Đằng và Lê Văn Duyệt chỉ 1–3 phút chạy xe',
    secondImg: 'vn-pet-shop.jpg',
    secondAlt: 'Mặt tiền Lumi Pet 27 Võ Trường Toản thuận tiện đậu xe đưa đón thú cưng',
    secondCap: '🛵 Mặt tiền Võ Trường Toản thoáng rộng, có chỗ để xe máy & dừng ô tô đón trả các bé chó lớn an toàn',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Tóm tắt nhanh:</strong> Nếu bạn sống trên trục <strong>Võ Trường Toản, Phan Đăng Lưu, Bạch Đằng, Lê Văn Duyệt (Đinh Tiên Hoàng cũ), Bùi Hữu Nghĩa, Vũ Tùng, Trịnh Hoài Đức, Diên Hồng, Yên Đổ, Phó Đức Chính</strong> (gần Chợ Bà Chiểu, Lăng Ông, Bệnh viện Gia Định, ĐH Mỹ Thuật TP.HCM), <strong>Lumi Pet tại 27 Võ Trường Toản</strong> là điểm tắm chó mèo sát nhà nhất (chỉ 200m–800m). Giá niêm yết 2026: <strong>tắm chó từ 140.000đ</strong>, <strong>tắm mèo sấy tay 100% từ 160.000đ</strong>, <strong>cắt tỉa chó từ 290.000đ</strong> và <strong>Pet Hotel 24/7 từ 100.000đ/ngày</strong>.</p>

        <h2 id="lo-trinh-tranh-ket">1. Lộ trình di chuyển 1–3 phút &amp; mẹo tránh ùn ứ quanh Chợ Bà Chiểu</h2>
        <ul>
          <li><strong>Từ đường Bạch Đằng (hướng Hàng Xanh lên Bà Chiểu):</strong> Qua cổng Chợ Bà Chiểu rẽ phải ngay sang trục Võ Trường Toản (cạnh ĐH Mỹ Thuật), tránh đi vòng ngã tư Phan Đăng Lưu giờ cao điểm 17:30–18:30.</li>
          <li><strong>Từ Lê Văn Duyệt / Vũ Tùng / Bùi Hữu Nghĩa:</strong> Chạy thẳng lên nút giao Lăng Ông Bà Chiểu → rẽ phải sang Phan Đăng Lưu rồi rẽ vào số 27 Võ Trường Toản (chỉ ~2 phút).</li>
          <li><strong>Từ Phan Đăng Lưu (đoạn Bệnh viện Nhân dân Gia Định – Bệnh viện Ung Bướu):</strong> Đi thẳng qua ngã tư Nơ Trang Long khoảng 200m là thấy nhánh rẽ vào Võ Trường Toản — rất tiện cho cư dân đi bộ hoặc chở cún bằng xe máy.</li>
        </ul>

        <h2 id="goi-dich-vu-loi">2. Các dịch vụ cư dân trục Bà Chiểu – Gia Định đặt nhiều nhất</h2>
        <table>
          <thead><tr><th>Dịch vụ tại 27 Võ Trường Toản</th><th>Giá chính thức 2026</th><th>Phù hợp nhất cho</th></tr></thead>
          <tbody>
            <tr><td><a href="../../tam-cho-phuong-gia-dinh/">Tắm chó vệ sinh 10 bước</a></td><td><strong>140.000đ – 550.000đ</strong> (8 mốc tới 25kg)</td><td>Cún tắm định kỳ 7–10 ngày/lần, đã gồm cắt móng, tai, tuyến hôi</td></tr>
            <tr><td><a href="../../tam-meo-phuong-gia-dinh/">Tắm mèo sấy tay 100%</a></td><td><strong>160.000đ – 270.000đ</strong> (3 mốc tới 10kg)</td><td>Mèo ALN, ALD, Ba Tư nhạy cảm tiếng ồn, không nhốt lồng sấy</td></tr>
            <tr><td><a href="../../cat-tia-long-cho-phuong-gia-dinh/">Cắt tỉa lông chó (Grooming)</a></td><td><strong>290.000đ – 850.000đ</strong></td><td>Poodle Teddy, Corgi mông đào, Phốc sóc, Bichon, Shih Tzu</td></tr>
            <tr><td><a href="../../khach-san-thu-cung-phuong-gia-dinh/">Khách sạn thú cưng 24/7</a></td><td><strong>100.000đ – 250.000đ/ngày</strong></td><td>Gửi ngắn ngày/dài ngày (giảm 5–8%), gửi video Zalo mỗi ngày</td></tr>
          </tbody>
        </table>

        <h2 id="khung-gio-dep">3. Gợi ý khung giờ vắng khách &amp; đặt lịch ca tối tới 21:00</h2>
        <p>Khu vực quanh Chợ Bà Chiểu và Phan Đăng Lưu khá nhộn nhịp buổi sáng 07:30–09:00 và chiều 17:00–18:30. Ba mẹ ở sát tiệm có thể chọn khung <strong>09:30–11:30</strong>, <strong>13:30–16:00</strong> hoặc đặt trước <strong>ca tối 18:30–19:30</strong> (tiệm mở tới 21:00 không phụ thu ngoài giờ). Xem thêm trang tổng hợp <a href="../../tam-cho-meo-gan-cho-ba-chieu/">Tắm chó mèo gần Chợ Bà Chiểu</a>.</p>`,
    faqs: [
      ['Từ Bùi Hữu Nghĩa, Vũ Tùng hay Bạch Đằng sang 27 Võ Trường Toản có chỗ đậu xe không?', 'Có. Mặt tiền 27 Võ Trường Toản rộng thoáng, có chỗ để xe máy ngay trước tiệm và thuận tiện dừng ô tô trả/đón các bé chó lớn.'],
      ['Đi tắm chó gần Chợ Bà Chiểu buổi tối sau 18h có phụ thu không?', 'Không. Lumi Pet mở cửa 08:00 – 21:00 mỗi ngày với 1 bảng giá thống nhất 2026, không phụ thu ca tối.'],
      ['Làm sao đặt lịch trước để sang là làm ngay không phải chờ?', 'Bạn nhắn Zalo hoặc gọi trực tiếp 0989 979 675, hoặc đặt lịch online trên lumipet.vn trước 1–2 tiếng.'],
    ],
  },
  {
    slug: 'spa-gui-cho-meo-truc-dinh-bo-linh-xo-viet-nghe-tinh-chu-van-an',
    category: 'Cẩm Nang Tuyến Đường · Trung Tâm Bình Thạnh',
    title: 'Spa & Gửi Chó Mèo Trục Đinh Bộ Lĩnh, Chu Văn An, Nguyễn Xí',
    description:
      'Lộ trình 5–8 phút đi tắm chó 140k, tắm mèo 160k, cắt tỉa & gửi chó mèo 24/7 từ Đinh Bộ Lĩnh, Xô Viết Nghệ Tĩnh, Chu Văn An, Nguyễn Xí, Bùi Đình Túy sang Lumi Pet.',
    h1: 'Spa & Gửi chó mèo trục Đinh Bộ Lĩnh – Xô Viết Nghệ Tĩnh – Chu Văn An – Nguyễn Xí (Phường Bình Thạnh)',
    dek: 'Cư dân khu vực Bến xe Miền Đông cũ, Cư xá Chu Văn An, Nguyễn Xí, Bùi Đình Túy và Bình Quới – Thanh Đa có tuyến đường nối thẳng sang Lumi Pet 27 Võ Trường Toản chỉ 5–10 phút cực kỳ thuận tiện.',
    heroImg: 'vn-evening-spa.jpg',
    heroAlt: 'Spa chó mèo mở cửa tối 21h gần Đinh Bộ Lĩnh Chu Văn An Nguyễn Xí tại Lumi Pet',
    heroCap: '🌙 Cư dân Đinh Bộ Lĩnh, Chu Văn An, Nguyễn Xí dễ dàng ghé gửi bé tắm ca tối sau giờ tan làm (mở tới 21:00)',
    secondImg: 'vn-hotel-cabins.jpg',
    secondAlt: 'Phòng khách sạn thú cưng riêng tư máy lạnh 24/24 cho khách khu Bình Thạnh',
    secondCap: '🏨 Khách khu Phường Bình Thạnh & Bình Quới thường kết hợp gửi Pet Hotel 24/7 trên trục đường đi làm vào trung tâm',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Tóm tắt nhanh:</strong> Khách nuôi chó mèo trên trục <strong>Đinh Bộ Lĩnh, Xô Viết Nghệ Tĩnh, Chu Văn An, Nguyễn Xí, Phan Chu Trinh, Bùi Đình Túy, Cầu Đỏ, Bến xe Miền Đông cũ, Bình Quới – Thanh Đa</strong> (thuộc <a href="../../spa-thu-cung-phuong-binh-thanh/">Phường Bình Thạnh</a> và <a href="../../spa-thu-cung-phuong-binh-quoi/">Phường Bình Quới</a>) chỉ mất <strong>5–10 phút</strong> di chuyển sang <strong>Lumi Pet – 27 Võ Trường Toản, Phường Gia Định</strong>. Bảng giá 2026 minh bạch: tắm chó từ 140k, tắm mèo sấy tay 100% từ 160k, cắt tỉa từ 290k và Hotel 24/7 từ 100k/ngày.</p>

        <h2 id="lo-trinh-truc-binh-thanh">1. Cách đi nhanh từ từng tuyến đường (Tránh kẹt Ngã tư Hàng Xanh &amp; Đinh Bộ Lĩnh)</h2>
        <ul>
          <li><strong>Từ Cư xá Chu Văn An / Phan Chu Trinh (5–6 phút):</strong> Chạy thẳng Phan Chu Trinh → cắt ngang Nơ Trang Long hoặc rẽ Bùi Đình Túy ra Bạch Đằng → Chợ Bà Chiểu → 27 Võ Trường Toản (tránh hẳn kẹt xe nút Đinh Bộ Lĩnh).</li>
          <li><strong>Từ Nguyễn Xí / Bến xe Miền Đông cũ / Đinh Bộ Lĩnh (6–8 phút):</strong> Chạy Đinh Bộ Lĩnh hướng vào trung tâm → rẽ phải Bạch Đằng ngay dưới chân cầu/ngã tư → chạy thẳng hướng Bà Chiểu → rẽ Võ Trường Toản số 27.</li>
          <li><strong>Từ Bình Quới / Cư xá Thanh Đa / Xô Viết Nghệ Tĩnh (8–12 phút):</strong> Qua Cầu Kinh Thanh Đa → đi Ung Văn Khiêm hoặc Xô Viết Nghệ Tĩnh → rẽ phải Bạch Đằng hướng Chợ Bà Chiểu → 27 Võ Trường Toản.</li>
        </ul>

        <h2 id="goi-y-cho-cu-dan">2. Gợi ý chăm sóc phù hợp cho các bé ở khu Chu Văn An – Nguyễn Xí – Thanh Đa</h2>
        <ul>
          <li><strong>Cún lớn hay đi dạo công viên / bờ kè Thanh Đa:</strong> Nên chọn gói <a href="../tam-cho-lon-husky-golden-samoyed-binh-thanh/">tắm chó lớn 15–25kg</a> (430k–550k), sấy tay khô kiệt tận gốc lớp lông kép để tránh hôi ẩm và nấm kẽ chân.</li>
          <li><strong>Mèo căn hộ chung cư Nguyễn Xí / Richmond / Saigonres:</strong> Mèo ít ra đường nên rất sợ tiếng ồn — tại Lumi Pet mèo được tắm khu tách biệt chó và <strong>sấy tay 100% không nhốt lồng sấy</strong> (160k–270k).</li>
          <li><strong>Gửi chó mèo dài ngày khi đi công tác / về quê:</strong> Tiện gửi buổi sáng từ 08:00 ngay trên trục vào trung tâm Quận 1, nhận video Zalo hằng ngày và ưu đãi dài ngày (trên 5 ngày giảm 5%, trên 10 ngày giảm 8%).</li>
        </ul>`,
    faqs: [
      ['Từ chung cư Nguyễn Xí / Chu Văn An sang Lumi Pet 27 Võ Trường Toản mất bao lâu?', 'Khoảng 5–8 phút theo trục Phan Chu Trinh – Bạch Đằng hoặc Đinh Bộ Lĩnh – Bạch Đằng (khoảng 1,8 – 2,5km).'],
      ['Tắm chó lớn Golden, Husky từ khu Thanh Đa – Bình Quới giá bao nhiêu?', 'Theo bảng giá 2026: chó 15–18kg là 430.000đ, 18–20kg là 480.000đ và 20–25kg là 550.000đ, đã gồm cắt mài móng, vệ sinh tai, cạo đệm chân, vắt tuyến hôi và sấy tay 100%.'],
      ['Có cần đặt trước khi gửi mèo khu chung cư đi tắm không?', 'Nên nhắn Zalo 0989 979 675 đặt trước để tiệm sắp xếp ca tắm khu riêng cho mèo, giúp bé vào làm ngay không phải chờ đợi.'],
    ],
  },
  {
    slug: 'tam-cho-meo-truc-no-trang-long-le-quang-dinh-phan-van-tri',
    category: 'Cẩm Nang Tuyến Đường · Bình Lợi Trung & Gò Vấp',
    title: 'Tắm Chó Mèo Trục Nơ Trang Long, Lê Quang Định, Phan Văn Trị',
    description:
      'Tắm chó 140k, tắm mèo sấy tay 160k, cắt tỉa 290k & Pet Hotel 24/7 trên trục thẳng Nơ Trang Long, Lê Quang Định, Nguyễn Văn Đậu, Phan Văn Trị, Phạm Văn Đồng.',
    h1: 'Tắm chó mèo, Cắt tỉa & Pet Hotel trục Nơ Trang Long – Lê Quang Định – Nguyễn Văn Đậu – Phan Văn Trị',
    dek: 'Trục đường thẳng nối từ Phường Bình Lợi Trung và Quận Gò Vấp (Phạm Văn Đồng, CityLand, Emart) xuống thẳng khu Bà Chiểu – 27 Võ Trường Toản chỉ mất 5–12 phút.',
    heroImg: 'vn-hero-spa.jpg',
    heroAlt: 'Tắm vệ sinh và cắt tỉa chó mèo cho khách trục Nơ Trang Long Lê Quang Định Phan Văn Trị tại Lumi Pet',
    heroCap: '🛵 Chạy thẳng 1 trục Lê Quang Định hoặc Nơ Trang Long là tới ngay Lumi Pet 27 Võ Trường Toản — không cần rẽ phức tạp',
    secondImg: 'vn-spa-cat.jpg',
    secondAlt: 'Tắm mèo khu riêng sấy tay 100% không lồng sấy tại Lumi Pet',
    secondCap: '🐱 Quy trình tắm mèo êm ái không lồng sấy nhiệt, được nhiều chủ nuôi khu Bình Lợi Trung và Gò Vấp tin chọn',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Tóm tắt nhanh:</strong> Nếu bạn sống dọc các tuyến <strong>Nơ Trang Long, Lê Quang Định, Nguyễn Văn Đậu, Hoàng Hoa Thám, Phan Văn Trị, Bình Lợi, Phạm Văn Đồng, Dương Quảng Hàm, Nguyễn Thái Sơn, CityLand Park Hills</strong> (thuộc <a href="../../spa-thu-cung-phuong-binh-loi-trung/">Phường Bình Lợi Trung</a>, <a href="../../spa-thu-cung-phuong-hanh-thong-go-vap/">Phường Hạnh Thông</a> và <a href="../../spa-thu-cung-phuong-an-nhon-go-vap/">Phường An Nhơn Gò Vấp</a>), bạn chỉ cần chạy thẳng một trục duy nhất xuống khu Bệnh viện Gia Định / Chợ Bà Chiểu là tới ngay <strong>Lumi Pet – 27 Võ Trường Toản</strong> (5–12 phút).</p>

        <h2 id="lo-trinh-mot-truc">1. Lộ trình 1 trục thẳng không lo lạc đường</h2>
        <ul>
          <li><strong>Từ Nơ Trang Long / Nguyễn Văn Đậu / Hoàng Hoa Thám (4–7 phút):</strong> Chạy thẳng Nơ Trang Long hướng về Bệnh viện Ung Bướu / Bệnh viện Nhân dân Gia Định → cắt ngang Phan Đăng Lưu → rẽ vào 27 Võ Trường Toản.</li>
          <li><strong>Từ Lê Quang Định / Chợ Gò Vấp / Phạm Văn Đồng (6–10 phút):</strong> Chạy thẳng 1 mạch Lê Quang Định hướng về Chợ Bà Chiểu → rẽ phải Võ Trường Toản số 27.</li>
          <li><strong>Từ Phan Văn Trị / Emart Gò Vấp / CityLand (10–12 phút):</strong> Qua vòng xoay Phạm Văn Đồng → đi tiếp trục Phan Văn Trị – Nơ Trang Long hoặc rẽ Lê Quang Định xuống 27 Võ Trường Toản.</li>
        </ul>

        <h2 id="bang-gia-truc-le-quang-dinh">2. Điểm cộng khi khách Bình Lợi Trung &amp; Gò Vấp ghé Lumi Pet</h2>
        <ul>
          <li><strong>Không phí ẩn &amp; chốt giá tại quầy trước khi làm:</strong> Tắm chó 140k–550k (8 mốc tới 25kg), tắm mèo 160k–270k, tắm + cạo 200k–700k (chó) / 250k–380k (mèo), cắt tỉa tạo kiểu 290k–850k.</li>
          <li><strong>Mở cửa từ 08:00 sáng tới 21:00 tối:</strong> Cư dân Gò Vấp đi làm vào Quận 1 – Bình Thạnh rất tiện gửi bé sáng sớm (08:00–09:00) rồi chiều tan làm đón về sạch thơm.</li>
          <li><strong>Phụ thu minh bạch rõ ràng:</strong> Chỉ áp dụng khi có sự đồng ý trước (gỡ rối 50k–500k, sữa tắm đặc trị 50k–100k, tạo kiểu đặc biệt 50k–100k). Xem thêm <a href="../../spa-thu-cung-quan-go-vap/">trang Quận Gò Vấp</a>.</li>
        </ul>`,
    faqs: [
      ['Từ Nơ Trang Long hoặc Lê Quang Định sang Lumi Pet bao xa?', 'Từ đoạn P.5, P.11, P.13 Bình Thạnh cũ (P. Bình Lợi Trung) chỉ mất 5–7 phút (~1,5–2,5km); từ Phạm Văn Đồng / Chợ Gò Vấp mất khoảng 8–10 phút.'],
      ['sáng 8h00 trên đường đi làm từ Gò Vấp có gửi bé tắm hoặc gửi Hotel được không?', 'Được. Quầy tiếp nhận Lumi Pet mở cửa từ 08:00 sáng mỗi ngày; bạn chỉ cần nhắn trước qua Zalo 0989 979 675 để nhân viên tiếp nhận nhanh gọn.'],
      ['Lumi Pet có nhận gỡ rối và cắt tỉa cho Poodle, Phốc sóc không?', 'Có. Combo cắt tỉa Poodle/Phốc sóc từ 290.000đ (<3kg) và 360.000đ (3–6kg); nếu bé bị rối nặng thợ sẽ kiểm tra và báo rõ phương án trước khi làm.'],
    ],
  },
  {
    slug: 'spa-khach-san-cho-meo-nguyen-huu-canh-dien-bien-phu-vinhomes',
    category: 'Cẩm Nang Tuyến Đường · Chung Cư Cao Cấp & Hàng Xanh',
    title: 'Spa & Hotel Chó Mèo Nguyễn Hữu Cảnh, Điện Biên Phủ, D2',
    description:
      'Tắm chó 140k, tắm mèo 160k, cắt tỉa 290k & Pet Hotel 24/7 từ 100k/ngày cho cư dân Nguyễn Hữu Cảnh, Điện Biên Phủ, Ngô Tất Tố, D2, Vinhomes Central Park.',
    h1: 'Spa & Khách sạn thú cưng trục Nguyễn Hữu Cảnh – Điện Biên Phủ – D2 (Vinhomes, Saigon Pearl, City Garden)',
    dek: 'Giải pháp tắm sấy tay 100%, cắt tỉa Poodle/Corgi chuẩn phom và gửi Pet Hotel 24/7 giá minh bạch chỉ cách Vinhomes Central Park, Landmark 81, Saigon Pearl và Ngã tư Hàng Xanh 6–9 phút.',
    heroImg: 'vn-hotel-tet.jpg',
    heroAlt: 'Phòng khách sạn thú cưng sạch sẽ máy lạnh 24/24 cho cư dân Vinhomes Nguyễn Hữu Cảnh tại Lumi Pet',
    heroCap: '🏙️ Chỉ 6–9 phút từ Vinhomes Central Park, Saigon Pearl, City Garden & Hàng Xanh tới Lumi Pet 27 Võ Trường Toản',
    secondImg: 'vn-grooming-corgi.jpg',
    secondAlt: 'Cắt tỉa lông Corgi mông đào và Poodle chuyên nghiệp tại Lumi Pet Bình Thạnh',
    secondCap: '✂️ Tỉa kéo thủ công chuẩn phom Corgi, Poodle, Bichon & tắm mèo khu riêng tách biệt chó',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Tóm tắt nhanh:</strong> Cư dân các khu căn hộ và tuyến đường <strong>Nguyễn Hữu Cảnh, Điện Biên Phủ, Ngô Tất Tố, Huỳnh Mẫn Đạt, Phạm Viết Chánh, Ung Văn Khiêm, Nguyễn Gia Trí (D2), Võ Oanh (D3), Nguyễn Văn Thương (D1), Vinhomes Central Park, Landmark 81, Saigon Pearl, City Garden, The Manor, Sunwah Pearl</strong> (và cả <a href="../../spa-thu-cung-quan-2-thao-dien/">Thảo Điền qua Cầu Sài Gòn</a>) chỉ mất <strong>6–12 phút</strong> tới <strong>Lumi Pet – 27 Võ Trường Toản</strong> với bảng giá 2026 minh bạch và tiết kiệm.</p>

        <h2 id="lo-trinh-vinhomes">1. Đường đi tiện nhất bằng xe máy &amp; ô tô / taxi Pet-friendly</h2>
        <ul>
          <li><strong>Từ Vinhomes Central Park / Landmark 81 / Saigon Pearl (7–9 phút):</strong> Đi Nguyễn Hữu Cảnh → rẽ Điện Biên Phủ → vòng sang Xô Viết Nghệ Tĩnh / Bạch Đằng hướng Chợ Bà Chiểu → 27 Võ Trường Toản.</li>
          <li><strong>Từ City Garden / The Manor / Ngô Tất Tố / Phạm Viết Chánh (5–7 phút):</strong> Ra Điện Biên Phủ → rẽ Lê Văn Duyệt hướng Cầu Bông / Bà Chiểu → rẽ phải 27 Võ Trường Toản (cực kỳ gần và thoáng).</li>
          <li><strong>Từ Ngã tư Hàng Xanh / D2 Nguyễn Gia Trí / Ung Văn Khiêm (5–7 phút):</strong> Chạy thẳng Bạch Đằng hướng Chợ Bà Chiểu → rẽ Võ Trường Toản số 27.</li>
        </ul>

        <h2 id="vi-sao-cu-dan-vinhomes-chon">2. Vì sao nhiều cư dân căn hộ chọn Lumi Pet cho Spa &amp; Pet Hotel dài ngày?</h2>
        <ul>
          <li><strong>Chi phí lưu trú dài ngày minh bạch &amp; hợp lý:</strong> Phòng riêng máy lạnh 24/24 chỉ <strong>100k–250k/ngày</strong> (ngày thường), gửi trên 5 ngày giảm 5%, trên 10 ngày giảm 8% — có nhân viên trực 24/7 và quay video Zalo mỗi ngày.</li>
          <li><strong>Tiêu chuẩn sấy tay 100% không lồng sấy:</strong> Đặc biệt an toàn cho mèo Anh lông ngắn/dài, Ragdoll, Ba Tư và các giống chó nhỏ sống trong môi trường căn hộ máy lạnh.</li>
          <li><strong>Xem thêm trang chuyên biệt:</strong> <a href="../../tam-cho-meo-gan-vinhomes-hang-xanh/">Tắm chó mèo &amp; Hotel gần Vinhomes – Hàng Xanh</a> và <a href="../../spa-thu-cung-phuong-thanh-my-tay/">Phường Thạnh Mỹ Tây</a>.</li>
        </ul>`,
    faqs: [
      ['Từ Vinhomes Central Park bắt taxi/Grab mang chó lớn sang Lumi Pet có dễ dừng xe không?', 'Rất dễ. Đường Võ Trường Toản rộng thoáng, ô tô/taxi có thể dừng ngay trước cửa số 27 để nhân viên ra đón bé vào an toàn.'],
      ['Cư dân Vinhomes gửi mèo đi công tác 7–10 ngày tại Lumi Pet giá bao nhiêu?', 'Ví dụ mèo 4kg (mốc 3–6kg) giá ngày thường 120.000đ/ngày; gửi 7 ngày giảm 5% còn 114.000đ/ngày; gửi trên 10 ngày giảm 8% (dịp Lễ/Tết xác nhận giá riêng trước khi chốt phòng).'],
      ['Lumi Pet có nhận cắt tỉa tạo kiểu Corgi, Poodle, Bichon cho khách khu Hàng Xanh không?', 'Có. Bảng giá cắt tỉa 2026 từ 290.000đ (<3kg), 360.000đ (3–6kg), 430.000đ (6–9kg), 520.000đ (9–12kg), đã gồm trọn gói 10 bước tắm vệ sinh cơ bản.'],
    ],
  },
  {
    slug: 'spa-cho-meo-phan-xich-long-hai-ba-trung-dinh-tien-hoang',
    category: 'Cẩm Nang Tuyến Đường · Phú Nhuận & Quận 1',
    title: 'Spa Chó Mèo Trục Phan Xích Long, Đinh Tiên Hoàng, Cầu Bông',
    description:
      'Chỉ 4–8 phút từ Phan Xích Long, khu đường Hoa, Miếu Nổi (Phú Nhuận) và Đinh Tiên Hoàng, Hai Bà Trưng, Võ Thị Sáu (Quận 1) sang Lumi Pet 27 Võ Trường Toản.',
    h1: 'Đưa bé đi Spa & Pet Hotel từ trục Phan Xích Long (Phú Nhuận) & Đinh Tiên Hoàng – Hai Bà Trưng (Quận 1)',
    dek: 'Chỉ qua Cầu Bông hoặc chạy thẳng Phan Đăng Lưu 4–8 phút, cư dân Phú Nhuận và Quận 1 đã tới ngay Lumi Pet 27 Võ Trường Toản với mức giá nội khu Bình Thạnh minh bạch.',
    heroImg: 'vn-spa-noel-tet.jpg',
    heroAlt: 'Làm đẹp cắt tỉa Poodle và tắm mèo cho khách Phú Nhuận Quận 1 tại Lumi Pet',
    heroCap: '🌉 Qua Cầu Bông hoặc chạy thẳng Phan Đăng Lưu chỉ 4–8 phút từ Quận 1 & Phú Nhuận sang Lumi Pet 27 Võ Trường Toản',
    secondImg: 'vn-hotel-cat-vip.jpg',
    secondAlt: 'Phòng mèo yên tĩnh riêng biệt cho khách Phú Nhuận và Quận 1 tại Lumi Pet',
    secondCap: '🏨 Khu lưu trú yên tĩnh máy lạnh 24/24 — tiện gửi bé sáng đi làm ở Quận 1, chiều ghé đón về',
    readTime: '6 phút đọc',
    bodyHtml: `
        <p><strong>Tóm tắt nhanh:</strong> Nằm ngay giáp ranh giữa 3 quận trung tâm, <strong>Lumi Pet (27 Võ Trường Toản, Phường Gia Định)</strong> chỉ cách <strong>Phan Xích Long, Khu đường Hoa (Hoa Lan, Hoa Phượng, Hoa Sứ, Hoa Đào), Cư xá Miếu Nổi, Thích Quảng Đức, Nguyễn Kiệm, Trường Sa</strong> (<a href="../../spa-thu-cung-quan-phu-nhuan/">Quận Phú Nhuận cũ</a>) và <strong>Đinh Tiên Hoàng, Hai Bà Trưng, Võ Thị Sáu, Trần Quang Khải, Nguyễn Thị Minh Khai, Đa Kao, Chợ Tân Định</strong> (<a href="../../spa-thu-cung-quan-1/">Quận 1 cũ</a>) đúng <strong>4–8 phút đi xe</strong>.</p>

        <h2 id="lo-trinh-q1-pn">1. 3 tuyến nối nhanh nhất từ Phú Nhuận &amp; Quận 1</h2>
        <ul>
          <li><strong>Từ Phan Xích Long / Khu đường Hoa / Miếu Nổi (4–5 phút):</strong> Chạy thẳng Phan Đăng Lưu hướng Chợ Bà Chiểu hoặc đi Vũ Huy Tấn → Lê Văn Duyệt → rẽ 27 Võ Trường Toản.</li>
          <li><strong>Từ Đinh Tiên Hoàng / Hai Bà Trưng / Võ Thị Sáu / Chợ Tân Định (5–7 phút):</strong> Chạy thẳng qua <strong>Cầu Bông</strong> → nối tiếp Lê Văn Duyệt → rẽ phải Võ Trường Toản số 27.</li>
          <li><strong>Từ Đa Kao / Nguyễn Thị Minh Khai / Thảo Cầm Viên (7–8 phút):</strong> Qua <strong>Cầu Thị Nghè</strong> → rẽ trái hướng Trường Sa / Lê Văn Duyệt → vào 27 Võ Trường Toản.</li>
        </ul>

        <h2 id="loi-the-cho-khach-q1-pn">2. Lý do khách văn phòng Quận 1 &amp; cư dân Phú Nhuận chuộng Lumi Pet</h2>
        <ul>
          <li><strong>Giá minh bạch 1 biểu phí chung:</strong> Không chênh giá như khu lõi Quận 1 — tắm chó từ 140k, tắm mèo sấy tay 100% từ 160k, cắt tỉa Poodle/Corgi/Bichon từ 290k, Pet Hotel từ 100k/ngày.</li>
          <li><strong>Khung giờ linh hoạt 08:00 – 21:00:</strong> Tiện gửi bé buổi sáng trên đường qua Cầu Bông vào văn phòng Quận 1, hoặc ghé tắm ca tối 18:30–19:30 sau khi tan làm (không phụ thu ngoài giờ).</li>
          <li><strong>Xem thêm:</strong> <a href="../../tam-cho-meo-gan-phan-xich-long-mieu-noi/">Tắm chó mèo gần Phan Xích Long – Miếu Nổi</a> · <a href="../../spa-thu-cung-phuong-tan-dinh-quan-1/">Phường Tân Định (Q.1)</a> · <a href="../../spa-thu-cung-phuong-cau-kieu-phu-nhuan/">Phường Cầu Kiệu (Phú Nhuận)</a>.</li>
        </ul>`,
    faqs: [
      ['Từ đường Hai Bà Trưng / Võ Thị Sáu (Quận 1) qua Lumi Pet có xa không?', 'Chỉ khoảng 1,8 – 2,2km (5–7 phút chạy thẳng qua Cầu Bông), đường thẳng rất dễ di chuyển.'],
      ['Từ khu đường Hoa Phan Xích Long sang Lumi Pet mất mấy phút?', 'Chỉ 4–5 phút chạy thẳng trục Phan Đăng Lưu hướng về Bệnh viện Gia Định và Chợ Bà Chiểu.'],
      ['Khách Quận 1 & Phú Nhuận đặt lịch trước bằng cách nào nhanh nhất?', 'Đặt trực tuyến tại lumipet.vn/dat-lich/ hoặc nhắn Zalo 0989 979 675 để nhân viên chốt khung giờ và báo giá chuẩn theo cân nặng bé.'],
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
      <div class="article-meta"><span>Cập nhật: 25/11/2026</span><span>${a.readTime}</span><span>Kiểm duyệt: Đội ngũ Lumi Pet Bình Thạnh</span></div>
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

// 1. Write 5 street-corridor local guide articles
for (const a of CORRIDOR_ARTICLES) {
  const dir = path.join(PUBLIC_DIR, 'bai-viet', a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildArticleHtml(a), 'utf8');
  console.log(`Generated corridor guide: /bai-viet/${a.slug}/ (T:${a.title.length}c, D:${a.description.length}c)`);
}

// 2. Smart street/landmark router: turn EVERY dead <span> pill across all 12 pages into a LIVE contextual <a href="..."> link!
function resolveTargetHref(label) {
  const s = label.toLowerCase();
  // Service-prefixed combos on Gia Dinh / Landmark pages
  if (s.includes('chợ bà chiểu') || s.includes('lăng ông') || s.includes('gia định') || s.includes('ung bướu') || s.includes('mỹ thuật') || s.includes('võ trường toản') || s.includes('bạch đằng') || s.includes('lê văn duyệt') || s.includes('bùi hữu nghĩa') || s.includes('vũ tùng') || s.includes('trịnh hoài đức') || s.includes('diên hồng') || s.includes('yên đổ') || s.includes('phó đức chính') || s.includes('nguyễn thiện thuật') || s.includes('nguyễn huy lượng') || s.includes('lê trực') || s.includes('trần bình trọng') || s.includes('nguyễn thượng hiền') || s.includes('huỳnh đình hai') || s.includes('nguyễn xuân ôn')) {
    return '../bai-viet/spa-tam-cho-meo-truc-phan-dang-luu-bach-dang-le-van-duyet/';
  }
  if (s.includes('đinh bộ lĩnh') || s.includes('xô viết nghệ tĩnh') || s.includes('chu văn an') || s.includes('nguyễn xí') || s.includes('phan chu trinh') || s.includes('bùi đình túy') || s.includes('bến xe miền đông') || s.includes('cầu đỏ') || s.includes('tầm vu')) {
    return '../bai-viet/spa-gui-cho-meo-truc-dinh-bo-linh-xo-viet-nghe-tinh-chu-van-an/';
  }
  if (s.includes('bình quới') || s.includes('thanh đa')) {
    return '../spa-thu-cung-phuong-binh-quoi/';
  }
  if (s.includes('nơ trang long') || s.includes('lê quang định') || s.includes('nguyễn văn đậu') || s.includes('phan văn trị') || s.includes('phạm văn đồng') || s.includes('bình lợi') || s.includes('nguyễn thái sơn') || s.includes('nguyễn văn nghi') || s.includes('dương quảng hàm') || s.includes('nguyễn oanh') || s.includes('phạm ngũ lão') || s.includes('quang trung') || s.includes('thống nhất') || s.includes('lê lợi') || s.includes('trần bá giao') || s.includes('nguyễn văn lượng') || s.includes('lê đức thọ') || s.includes('cityland') || s.includes('ngã 6 gò vấp') || s.includes('emart') || s.includes('chợ gò vấp')) {
    return '../bai-viet/tam-cho-meo-truc-no-trang-long-le-quang-dinh-phan-van-tri/';
  }
  if (s.includes('vinhomes') || s.includes('landmark') || s.includes('saigon pearl') || s.includes('city garden') || s.includes('manor') || s.includes('sunwah') || s.includes('nguyễn hữu cảnh') || s.includes('điện biên phủ') || s.includes('ngô tất tố') || s.includes('huỳnh mẫn đạt') || s.includes('phan văn hân') || s.includes('phạm viết chánh') || s.includes('ung văn khiêm') || s.includes('nguyễn gia trí') || s.includes('võ oanh') || s.includes('nguyễn văn thương') || s.includes('hàng xanh')) {
    return '../bai-viet/spa-khach-san-cho-meo-nguyen-huu-canh-dien-bien-phu-vinhomes/';
  }
  if (s.includes('thảo điền') || s.includes('xuân thủy') || s.includes('quốc hương') || s.includes('nguyễn văn hưởng') || s.includes('tống hữu định') || s.includes('trần ngọc diện') || s.includes('lê văn miến') || s.includes('song hành') || s.includes('trần não') || s.includes('lương định của') || s.includes('mai chí thọ') || s.includes('nguyễn hoàng') || s.includes('vũ tông phan') || s.includes('masteri') || s.includes('gateway') || s.includes('nassim') || s.includes('estella') || s.includes('sala') || s.includes('empire') || s.includes('cầu sài gòn') || s.includes('cầu ba son')) {
    return '../spa-thu-cung-phuong-an-khanh-thao-dien/';
  }
  if (s.includes('phan xích long') || s.includes('miếu nổi') || s.includes('hoa lan') || s.includes('hoa phượng') || s.includes('hoa sứ') || s.includes('hoa đào') || s.includes('hoa hồng') || s.includes('hoa mai') || s.includes('hoa cau') || s.includes('đường hoa') || s.includes('vũ huy tấn') || s.includes('trường sa') || s.includes('hoàng hoa thám') || s.includes('đinh tiên hoàng') || s.includes('hai bà trưng') || s.includes('võ thị sáu') || s.includes('trần quang khải') || s.includes('trần khánh dư') || s.includes('nguyễn thị minh khai') || s.includes('nguyễn bỉnh khiêm') || s.includes('phan kế bính') || s.includes('mạc đĩnh chi') || s.includes('lê duẩn') || s.includes('hoàng sa') || s.includes('bà lê chân') || s.includes('thạch thị thanh') || s.includes('đặng dung') || s.includes('nguyễn hữu cầu') || s.includes('nguyễn văn giai') || s.includes('nguyễn phi khanh') || s.includes('đinh công tráng') || s.includes('mai thị lựu') || s.includes('nguyễn văn thủ') || s.includes('nguyễn đình chiểu') || s.includes('cầu bông') || s.includes('cầu thị nghè') || s.includes('tân định') || s.includes('hoàn mỹ') || s.includes('phan đăng lưu')) {
    return '../bai-viet/spa-cho-meo-phan-xich-long-hai-ba-trung-dinh-tien-hoang/';
  }
  if (s.includes('thích quảng đức') || s.includes('nguyễn kiệm') || s.includes('hoàng văn thụ') || s.includes('đào duy anh') || s.includes('hồ văn huê') || s.includes('cầm bá thước')) {
    return '../spa-thu-cung-phuong-duc-nhuan-phu-nhuan/';
  }
  if (s.includes('nguyễn văn trỗi') || s.includes('huỳnh văn bánh') || s.includes('trần huy liệu') || s.includes('phan đình phùng') || s.includes('cô giang') || s.includes('cô bắc') || s.includes('đặng văn ngữ') || s.includes('nguyễn trọng tuyển') || s.includes('phùng văn cung') || s.includes('trương quốc dung') || s.includes('đoàn thị điểm')) {
    return '../spa-thu-cung-phuong-phu-nhuan/';
  }
  return '../spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/';
}

const PAGES_WITH_PILLS = [
  'spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan',
  'spa-thu-cung-quan-phu-nhuan',
  'spa-thu-cung-quan-1',
  'spa-thu-cung-quan-go-vap',
  'spa-thu-cung-quan-2-thao-dien',
  'tam-cho-meo-gan-cho-ba-chieu',
  'tam-cho-meo-gan-phan-xich-long-mieu-noi',
  'tam-cho-meo-gan-vinhomes-hang-xanh',
  'tam-cho-phuong-gia-dinh',
  'tam-meo-phuong-gia-dinh',
  'cat-tia-long-cho-phuong-gia-dinh',
  'khach-san-thu-cung-phuong-gia-dinh',
];

let totalConverted = 0;
for (const slug of PAGES_WITH_PILLS) {
  const filePath = path.join(PUBLIC_DIR, slug, 'index.html');
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  let count = 0;
  html = html.replace(
    /<span style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:5px 1[01]px;border-radius:999px;font-size:12\.5px;font-weight:700;">([^<]+)<\/span>/g,
    (_, innerText) => {
      count++;
      totalConverted++;
      const href = resolveTargetHref(innerText);
      return `<a href="${href}" style="background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:5px 11px;border-radius:999px;font-size:12.5px;font-weight:700;text-decoration:none;display:inline-block;">${innerText}</a>`;
    }
  );

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Converted ${count} dead street/landmark spans -> live links in /${slug}/`);
}
console.log(`TOTAL_LIVE_LINKS_CONVERTED=${totalConverted}`);

// 3. Add a dedicated "5 Bài Cẩm Nang Tuyến Đường Chuyên Sâu" card block onto /spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/
const masterPath = path.join(PUBLIC_DIR, 'spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan', 'index.html');
let masterHtml = fs.readFileSync(masterPath, 'utf8').replace(/\r\n/g, '\n');
const corridorGuidesBlock = `    <section class="panel span-12 lumi-corridor-guides">
      <h2>5 Bài Cẩm Nang Hướng Dẫn Chi Tiết Theo Từng Trục Đường Lớn</h2>
      <p>Mỗi bài viết dưới đây phân tích rõ tuyến đường tránh kẹt xe giờ tan tầm, chỗ đậu xe ô tô cho chó lớn và khung giờ đẹp đặt lịch Spa/Hotel cho cư dân từng khu vực:</p>
      <ul>
        <li><a href="../bai-viet/spa-tam-cho-meo-truc-phan-dang-luu-bach-dang-le-van-duyet/"><strong>Trục lõi 1–3 phút:</strong> Phan Đăng Lưu · Bạch Đằng · Lê Văn Duyệt · Võ Trường Toản · Bùi Hữu Nghĩa (quanh Chợ Bà Chiểu) →</a></li>
        <li><a href="../bai-viet/spa-gui-cho-meo-truc-dinh-bo-linh-xo-viet-nghe-tinh-chu-van-an/"><strong>Trục trung tâm Bình Thạnh:</strong> Đinh Bộ Lĩnh · Xô Viết Nghệ Tĩnh · Chu Văn An · Nguyễn Xí · Bùi Đình Túy →</a></li>
        <li><a href="../bai-viet/tam-cho-meo-truc-no-trang-long-le-quang-dinh-phan-van-tri/"><strong>Trục Bình Lợi Trung – Gò Vấp:</strong> Nơ Trang Long · Lê Quang Định · Nguyễn Văn Đậu · Phan Văn Trị · Phạm Văn Đồng →</a></li>
        <li><a href="../bai-viet/spa-khach-san-cho-meo-nguyen-huu-canh-dien-bien-phu-vinhomes/"><strong>Trục chung cư cao cấp &amp; Hàng Xanh:</strong> Nguyễn Hữu Cảnh · Điện Biên Phủ · D2 · Vinhomes Central Park · Saigon Pearl · City Garden →</a></li>
        <li><a href="../bai-viet/spa-cho-meo-phan-xich-long-hai-ba-trung-dinh-tien-hoang/"><strong>Trục Phú Nhuận &amp; Quận 1 giáp ranh:</strong> Phan Xích Long · Khu đường Hoa · Miếu Nổi · Đinh Tiên Hoàng · Hai Bà Trưng · Cầu Bông →</a></li>
      </ul>
    </section>`;

if (masterHtml.includes('lumi-corridor-guides')) {
  masterHtml = masterHtml.replace(/    <section class="panel span-12 lumi-corridor-guides">[\s\S]*?<\/section>/, corridorGuidesBlock);
} else {
  masterHtml = masterHtml.replace(
    /(\s*<section class="panel span-12 lumi-landmark-matrix">)/,
    `\n${corridorGuidesBlock}\n$1`
  );
}
fs.writeFileSync(masterPath, masterHtml, 'utf8');
console.log('Added 5 Street Corridor Guides section to /spa-thu-cung-gan-cho-ba-chieu-vo-truong-toan/');
