# Lumi Pet API — Full Function v2

Backend serverless cho booking/CRM của Lumi Pet Shop. Website ở root vẫn giữ fallback client-side; khi cấu hình API, yêu cầu booking sẽ đồng bộ lên D1 và admin có thể quản lý trạng thái.

## Stack
- Cloudflare Workers
- Cloudflare D1
- Không framework runtime; Worker dùng Web APIs + D1 prepared statements.
- `ADMIN_TOKEN` lưu bằng Workers Secret, không commit vào Git.

## API chính
Public: `GET /health`, `GET /api/public/config`, `GET /api/availability`, `POST /api/bookings`.
Admin Bearer token: danh sách/cập nhật booking, settings, Hotel board.

## Setup
```bash
cd backend
npm install
npx wrangler login
npx wrangler d1 create lumi-pet-booking
cp wrangler.jsonc.example wrangler.jsonc
```
Thay `REPLACE_WITH_D1_DATABASE_ID`, sau đó:
```bash
npm run db:migrate:local
npm run test
npm run dev
npm run db:migrate:remote
npx wrangler secret put ADMIN_TOKEN
npm run deploy
```

Sau deploy, cập nhật `assets/api-config.js` bằng URL Worker. `ALLOWED_ORIGINS` phải chứa origin website thật.

## Nguyên tắc
- Booking mới luôn là `PENDING_CONFIRMATION`.
- Giá chỉ public khi admin bật `price_published`.
- Ước tính Hotel chỉ public khi nhập sức chứa thật và bật `hotel_capacity_published`.
- Không log request body/PII.
