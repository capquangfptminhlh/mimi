/**
 * Lumi Pet - Secure Zalo Notification Client
 * Toàn bộ token Zalo Bot được giữ kín hoàn toàn trên VPS (/api/booking & /api/notify-zalo),
 * tuyệt đối không lưu hoặc đẩy token xuống trình duyệt khách hàng.
 */

import { Booking, Product } from '../types';

const PRIMARY_ENDPOINT = '/api/booking';
const FALLBACK_ENDPOINT = '/api/notify-zalo';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

/**
 * Gửi payload đặt lịch / tư vấn / đơn hàng tới Secure VPS Endpoint (không lộ token ở client)
 */
async function dispatchToServer(payload: Record<string, unknown>): Promise<boolean> {
  const body = JSON.stringify({ ...payload, _hp: '' });
  for (const endpoint of [PRIMARY_ENDPOINT, FALLBACK_ENDPOINT]) {
    try {
      const apiRes = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      if (apiRes.ok) {
        return true;
      }
    } catch {
      // Try next internal endpoint
    }
  }
  console.error('❌ [ZaloBot] Không thể gửi thông báo qua API nội bộ VPS');
  return false;
}

/**
 * Gửi tin nhắn văn bản thuần hoặc Markdown tới Zalo Bot qua Secure VPS Proxy
 */
export async function sendZaloRaw(text: string, meta: Record<string, unknown> = {}): Promise<boolean> {
  const safeText = String(text || '').trim().slice(0, 1900);
  if (safeText.length < 5) return false;
  return dispatchToServer({
    ...meta,
    text: safeText,
    message: safeText,
    pageUrl: typeof location !== 'undefined' ? location.href : 'https://lumipet.vn/',
  });
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

  return sendZaloRaw(text, {
    id: booking.id,
    bookingType: booking.bookingType,
    type: isSpa ? 'Đặt lịch Spa' : 'Đặt phòng Hotel 24/7',
    customerName: booking.customerName,
    name: booking.customerName,
    customerPhone: booking.customerPhone,
    phone: booking.customerPhone,
    customerEmail: booking.customerEmail || '',
    petName: booking.petName,
    petType: petTypeStr,
    petWeight: booking.petWeight,
    weight: `${booking.petWeight}kg`,
    serviceType: booking.serviceType,
    service: booking.serviceType,
    date: booking.date || booking.checkInDate || '',
    timeSlot: booking.timeSlot || '',
    checkInDate: booking.checkInDate || '',
    checkOutDate: booking.checkOutDate || '',
    totalPrice: booking.totalPrice,
    price: formatCurrency(booking.totalPrice),
    notes: booking.notes || '',
  });
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

  return sendZaloRaw(text, {
    id: order.id,
    bookingType: 'order',
    type: 'Đơn hàng Pet Shop',
    customerName: order.buyerName,
    name: order.buyerName,
    customerPhone: order.buyerPhone,
    phone: order.buyerPhone,
    service: `Đơn hàng Pet Shop (${order.items.length} SP)`,
    serviceType: `Đơn hàng Pet Shop (${order.items.length} SP)`,
    totalPrice: order.total,
    price: formatCurrency(order.total),
    notes: `Địa chỉ: ${order.buyerAddress}${order.buyerNote ? ' | ' + order.buyerNote : ''}`,
  });
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

  return sendZaloRaw(text, {
    bookingType: 'quote',
    type: 'Yêu cầu báo giá & tư vấn',
    customerName: data.customerName || 'Khách xem báo giá',
    name: data.customerName || 'Khách xem báo giá',
    customerPhone: data.phone,
    phone: data.phone,
    petType: petTypeStr,
    petWeight: data.petWeight || 0,
    service: data.serviceName,
    serviceType: data.serviceName,
    totalPrice: data.estimatedPrice,
    price: formatCurrency(data.estimatedPrice),
    notes: data.note || '',
  });
}
