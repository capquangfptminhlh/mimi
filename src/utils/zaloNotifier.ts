/**
 * Lumi Pet - Zalo Bot Notification Service
 * Tự động gửi thông báo đơn đặt lịch Spa, đặt phòng Hotel và đơn hàng về Zalo Bot
 */

import { Booking, Product } from '../types';

export const ZALO_BOT_CONFIG = {
  BOT_ID: '2488056338196260982',
  BOT_NAME: 'Bot lumipet',
  BOT_TOKEN: '2488056338196260982:zEjZvnVEKAtHTnEcXwwntFvamkXZEnUnLJqtwpBiYQuhZpLvNZtRukCgBiUCSFuA',
  CHAT_ID: '6e15121ea4544d0a1445',
  API_URL: 'https://bot-api.zaloplatforms.com'
};

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

/**
 * Gửi tin nhắn văn bản thuần hoặc Markdown tới Zalo Bot
 */
export async function sendZaloRaw(text: string): Promise<boolean> {
  // 1. Thử gửi qua Secure VPS Endpoint trước (đảm bảo không lộ token, có rate limit)
  try {
    const apiRes = await fetch('/api/notify-zalo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    if (apiRes.ok) {
      return true;
    }
  } catch {
    // Endpoint nội bộ chưa chạy hoặc môi trường dev -> fallback
  }

  // 2. Fallback trực tiếp để đảm bảo thông báo luôn được gửi không bao giờ trễ
  try {
    const url = `${ZALO_BOT_CONFIG.API_URL}/bot${ZALO_BOT_CONFIG.BOT_TOKEN}/sendMessage`;
    const params = new URLSearchParams();
    params.append('chat_id', ZALO_BOT_CONFIG.CHAT_ID);
    params.append('text', text);
    params.append('parse_mode', 'markdown');

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: params
    });

    return true;
  } catch (error) {
    console.error('❌ [ZaloBot] Lỗi khi gửi thông báo tới Zalo Bot:', error);
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
