/**
 * Lumi Pet - Secure Zalo Notification Client
 * Toàn bộ token Zalo Bot được giữ kín hoàn toàn trên VPS (/api/notify-zalo),
 * tuyệt đối không lưu hoặc đẩy token xuống trình duyệt khách hàng.
 */

import { Booking, Product } from '../types';

const NOTIFY_ENDPOINT = '/api/notify-zalo';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

/**
 * Gửi tin nhắn văn bản thuần hoặc Markdown qua Secure VPS Proxy (rate-limited, origin-checked)
 */
export async function sendZaloRaw(text: string): Promise<boolean> {
  const safeText = String(text || '').trim().slice(0, 1900);
  if (safeText.length < 5) return false;

  try {
    const apiRes = await fetch(NOTIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: safeText, _hp: '' })
    });
    return apiRes.ok;
  } catch (error) {
    console.error('❌ [ZaloBot] Không thể gửi thông báo qua /api/notify-zalo:', error);
    return false;
  }
}

/**
 * Gửi thông báo khi có khách đặt lịch Spa hoặc Hotel
 */
export async function notifyZaloBooking(booking: Booking): Promise<boolean> {
  const isSpa = booking.bookingType === 'spa';
  const petTypeStr = booking.petType === 'dog' ? '🐶 Chó' : (booking.petType === 'cat' ? '🐱 Mèo' : 'Thú cưng');

  let text = '';
  if (isSpa) {
    text = [
      '🔔 *【 LUMI PET 】- CÓ LỊCH HẸN SPA MỚI!*',
      '━━━━━━━━━━━━━━━━━━━━',
      `🔖 *Mã đặt lịch:* \`#${booking.id}\``,
      `👤 *Khách hàng:* ${booking.customerName}`,
      `📞 *Số điện thoại:* [${booking.customerPhone}](tel:${booking.customerPhone})`,
      booking.customerEmail ? `✉️ *Email:* ${booking.customerEmail}` : null,
      `🐾 *Thú cưng:* ${booking.petName} (${petTypeStr} - ${booking.petWeight}kg)`,
      `✂️ *Dịch vụ:* ${booking.serviceType}`,
      `📅 *Thời gian hẹn:* ${booking.timeSlot || ''} (Ngày ${booking.date || 'Hôm nay'})`,
      `💰 *Tạm tính:* *${formatCurrency(booking.totalPrice)}*`,
      booking.notes ? `📝 *Ghi chú của khách:* ${booking.notes}` : null,
      '━━━━━━━━━━━━━━━━━━━━',
      '⚡ _Khách vừa đặt trực tuyến trên web. Vui lòng liên hệ xác nhận khung giờ!_'
    ].filter(Boolean).join('\n');
  } else {
    text = [
      '🏨 *【 LUMI PET 】- CÓ ĐƠN ĐẶT PHÒNG HOTEL 24/7!*',
      '━━━━━━━━━━━━━━━━━━━━',
      `🔖 *Mã đặt phòng:* \`#${booking.id}\``,
      `👤 *Khách hàng:* ${booking.customerName}`,
      `📞 *Số điện thoại:* [${booking.customerPhone}](tel:${booking.customerPhone})`,
      booking.customerEmail ? `✉️ *Email:* ${booking.customerEmail}` : null,
      `🐾 *Thú cưng:* ${booking.petName} (${petTypeStr} - ${booking.petWeight}kg)`,
      `🏠 *Hạng phòng:* ${booking.serviceType}`,
      `📥 *Check-in:* ${booking.checkInDate || 'Chưa chọn'}`,
      `📤 *Check-out:* ${booking.checkOutDate || 'Chưa chọn'}`,
      `💰 *Tạm tính:* *${formatCurrency(booking.totalPrice)}*`,
      booking.notes ? `📝 *Yêu cầu chăm sóc:* ${booking.notes}` : null,
      '━━━━━━━━━━━━━━━━━━━━',
      '⚡ _Khách vừa đặt lưu trú trên web. Vui lòng kiểm tra phòng trống và chốt với khách!_'
    ].filter(Boolean).join('\n');
  }

  return sendZaloRaw(text);
}

export interface OrderNotificationData {
  id: string;
  buyerName: string;
  buyerPhone: string;
  buyerAddress: string;
  items: Array<{ product: Product; quantity: number }>;
  total: number;
  buyerNote?: string;
}

/**
 * Gửi thông báo khi có khách đặt mua hàng Pet Shop
 */
export async function notifyZaloOrder(order: OrderNotificationData): Promise<boolean> {
  const itemsText = order.items.map((it, idx) => 
    `   ${idx + 1}. ${it.product.name} x${it.quantity} (${formatCurrency(it.product.price)})`
  ).join('\n');

  const text = [
    '🛍️ *【 LUMI PET 】- CÓ ĐƠN HÀNG SHOPPING MỚI!*',
    '━━━━━━━━━━━━━━━━━━━━',
    `🔖 *Mã đơn hàng:* \`#${order.id}\``,
    `👤 *Người nhận:* ${order.buyerName}`,
    `📞 *Số điện thoại:* [${order.buyerPhone}](tel:${order.buyerPhone})`,
    `📍 *Địa chỉ giao hàng:* ${order.buyerAddress}`,
    '📦 *Danh sách sản phẩm:*',
    itemsText || '   (Không có chi tiết sản phẩm)',
    `💰 *Tổng thanh toán COD:* *${formatCurrency(order.total)}*`,
    order.buyerNote ? `📝 *Ghi chú giao hàng:* ${order.buyerNote}` : null,
    '━━━━━━━━━━━━━━━━━━━━',
    '⚡ _Đơn hàng vừa đặt trên web. Vui lòng gọi xác nhận địa chỉ và xuất kho!_'
  ].filter(Boolean).join('\n');

  return sendZaloRaw(text);
}

export interface PriceQuoteNotificationData {
  phone: string;
  customerName?: string;
  petType?: 'dog' | 'cat' | string;
  petWeight?: number;
  serviceName: string;
  estimatedPrice: number;
  note?: string;
}

/**
 * Gửi thông báo ngay lập tức khi khách xem/tham khảo giá và để lại SĐT
 */
export async function notifyZaloPriceQuote(data: PriceQuoteNotificationData): Promise<boolean> {
  const petTypeStr = data.petType === 'dog' ? '🐶 Chó' : (data.petType === 'cat' ? '🐱 Mèo' : 'Thú cưng');
  const petWeightStr = data.petWeight ? ` - ${data.petWeight}kg` : '';

  const text = [
    '🐾 *【 LUMI PET 】- CÓ KHÁCH YÊU CẦU TƯ VẤN & BÁO GIÁ!*',
    '━━━━━━━━━━━━━━━━━━━━',
    `📞 *Số điện thoại:* [${data.phone}](tel:${data.phone})`,
    data.customerName ? `👤 *Tên khách:* ${data.customerName}` : null,
    `🐾 *Thú cưng:* ${petTypeStr}${petWeightStr}`,
    `✂️ *Dịch vụ đang xem:* ${data.serviceName}`,
    `💰 *Mức giá tham khảo:* *${formatCurrency(data.estimatedPrice)}*`,
    data.note ? `📝 *Ghi chú nguồn:* ${data.note}` : null,
    `⏰ *Thời gian:* ${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} (Hôm nay)`,
    '━━━━━━━━━━━━━━━━━━━━',
    '⚡ _Khách vừa để lại SĐT nhận tư vấn trên web. Vui lòng gọi hoặc nhắn Zalo xác nhận khung giờ cho khách!_'
  ].filter(Boolean).join('\n');

  return sendZaloRaw(text);
}
