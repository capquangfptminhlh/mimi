(() => {
  const STORAGE_KEY = 'paws_perfect_bookings';
  const BOOKING_EMAIL = 'petlumi063@gmail.com';
  const EMAIL_ENDPOINT = `https://formsubmit.co/ajax/${BOOKING_EMAIL}`;
  const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

  const spaServices = {
    dog: [
      { id: 'dog-bath', name: 'Tắm vệ sinh', tiers: [[3,140000,'Dưới 3kg'],[6,190000,'3 – 6kg'],[9,250000,'6 – 9kg'],[12,310000,'9 – 12kg'],[15,370000,'12 – 15kg'],[18,430000,'15 – 18kg'],[20,480000,'18 – 20kg'],[25,550000,'20 – 25kg']] },
      { id: 'dog-shave', name: 'Combo tắm + cạo lông', tiers: [[3,200000,'Dưới 3kg'],[6,270000,'3 – 6kg'],[9,340000,'6 – 9kg'],[12,410000,'9 – 12kg'],[15,480000,'12 – 15kg'],[18,550000,'15 – 18kg'],[20,620000,'18 – 20kg'],[25,700000,'20 – 25kg']] },
      { id: 'dog-groom', name: 'Combo tắm + cắt tỉa', tiers: [[3,290000,'Dưới 3kg'],[6,360000,'3 – 6kg'],[9,430000,'6 – 9kg'],[12,520000,'9 – 12kg'],[15,600000,'12 – 15kg'],[18,680000,'15 – 18kg'],[20,760000,'18 – 20kg'],[25,850000,'20 – 25kg']] }
    ],
    cat: [
      { id: 'cat-bath', name: 'Combo tắm vệ sinh mèo', tiers: [[3,160000,'Dưới 3kg'],[6,220000,'3 – 6kg'],[10,270000,'6 – 10kg']] },
      { id: 'cat-shave', name: 'Combo tắm + cạo lông mèo', tiers: [[3,250000,'Dưới 3kg'],[6,320000,'3 – 6kg'],[10,380000,'6 – 10kg']] }
    ]
  };

  const hotelTiers = [[3,100000,'Dưới 3kg'],[6,120000,'3 – 6kg'],[9,160000,'6 – 9kg'],[12,200000,'9 – 12kg'],[15,250000,'12 – 15kg']];
  const today = new Date();
  const yyyyMmDd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

  const tierFor = (weight, tiers) => {
    if (!Number.isFinite(weight) || weight <= 0) return null;
    for (let i = 0; i < tiers.length; i++) {
      const [max, price, label] = tiers[i];
      if (i === 0 ? weight < max : weight <= max) return { price, label };
    }
    return null;
  };

  const readBookings = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };

  const saveBooking = booking => {
    const all = readBookings();
    all.unshift(booking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  };

  const bookingId = () => `LP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
  const qs = (root, sel) => root.querySelector(sel);
  const setText = (root, sel, text) => {
    const el = qs(root, sel);
    if (el) el.textContent = text;
  };

  const bookingEmailText = booking => {
    const pet = booking.petType === 'dog' ? 'Chó' : 'Mèo';
    const schedule = booking.bookingType === 'spa'
      ? `Ngày Spa: ${booking.date}\nKhung giờ: ${booking.timeSlot}`
      : `Check-in: ${booking.checkInDate}\nCheck-out: ${booking.checkOutDate}`;
    return [
      `BOOKING MỚI - ${booking.id}`,
      '',
      `Khách hàng: ${booking.customerName}`,
      `Số điện thoại: ${booking.customerPhone}`,
      `Email khách: ${booking.customerEmail || 'Không cung cấp'}`,
      `Tên bé: ${booking.petName}`,
      `Loại: ${pet}`,
      `Cân nặng: ${booking.petWeight}kg`,
      `Loại booking: ${booking.bookingType === 'spa' ? 'SPA' : 'HOTEL'}`,
      `Dịch vụ: ${booking.serviceType}`,
      schedule,
      `Tạm tính: ${money.format(booking.totalPrice)}`,
      `Ghi chú: ${booking.notes || 'Không có'}`,
      `Trạng thái: Chờ xác nhận`,
      `Tạo lúc: ${new Date(booking.createdAt).toLocaleString('vi-VN')}`
    ].join('\n');
  };

  const fallbackMailto = booking => {
    const subject = encodeURIComponent(`[Lumi Pet] Booking mới ${booking.id} - ${booking.customerPhone}`);
    const body = encodeURIComponent(bookingEmailText(booking));
    return `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
  };

  const NOTIFY_ZALO_ENDPOINT = '/api/notify-zalo';

  async function sendZaloBotNotification(booking) {
    try {
      const isSpa = booking.bookingType === 'spa';
      const petTypeStr = booking.petType === 'dog' ? '🐶 Chó' : (booking.petType === 'cat' ? '🐱 Mèo' : 'Thú cưng');
      const timeStr = isSpa 
        ? `📅 *Thời gian hẹn:* ${booking.timeSlot || ''} (Ngày ${booking.date || 'Hôm nay'})` 
        : `📥 *Check-in:* ${booking.checkInDate || ''}\n📤 *Check-out:* ${booking.checkOutDate || ''}`;
      
      const text = [
        isSpa ? '🔔 *【 LUMI PET 】- CÓ LỊCH HẸN SPA MỚI!*' : '🏨 *【 LUMI PET 】- CÓ ĐƠN ĐẶT PHÒNG HOTEL 24/7!*',
        '━━━━━━━━━━━━━━━━━━━━',
        `🔖 *Mã đặt lịch:* \`#${booking.id}\``,
        `👤 *Khách hàng:* ${booking.customerName}`,
        `📞 *Số điện thoại:* [${booking.customerPhone}](tel:${booking.customerPhone})`,
        booking.customerEmail ? `✉️ *Email:* ${booking.customerEmail}` : null,
        `🐾 *Thú cưng:* ${booking.petName} (${petTypeStr} - ${booking.petWeight}kg)`,
        `✂️ *Dịch vụ:* ${booking.serviceType}`,
        timeStr,
        `💰 *Tạm tính:* *${money.format(booking.totalPrice)}*`,
        booking.notes ? `📝 *Ghi chú:* ${booking.notes}` : null,
        '━━━━━━━━━━━━━━━━━━━━',
        '⚡ _Khách vừa đặt trực tuyến trên web. Vui lòng liên hệ xác nhận khung giờ!_'
      ].filter(Boolean).join('\n');

      // Gửi duy nhất qua Secure VPS Endpoint (không lộ token ở client, có rate limit & origin check)
      fetch(NOTIFY_ZALO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text.slice(0, 1900), _hp: '' })
      }).catch(e => console.error('Lumi Pet Zalo API error:', e));
      return true;
    } catch (err) {
      console.error('Lumi Pet Zalo Bot error:', err);
      return false;
    }
  }

  async function sendBookingEmail(booking) {
    const payload = {
      _subject: `[Lumi Pet] Booking mới ${booking.id} - ${booking.bookingType.toUpperCase()}`,
      _template: 'table',
      _captcha: 'false',
      'Mã booking': booking.id,
      'Loại booking': booking.bookingType === 'spa' ? 'SPA' : 'HOTEL',
      'Khách hàng': booking.customerName,
      'Số điện thoại': booking.customerPhone,
      'Email khách': booking.customerEmail || 'Không cung cấp',
      'Tên bé': booking.petName,
      'Loại thú cưng': booking.petType === 'dog' ? 'Chó' : 'Mèo',
      'Cân nặng': `${booking.petWeight} kg`,
      'Dịch vụ': booking.serviceType,
      'Ngày Spa': booking.date || '',
      'Khung giờ': booking.timeSlot || '',
      'Check-in': booking.checkInDate || '',
      'Check-out': booking.checkOutDate || '',
      'Tạm tính': money.format(booking.totalPrice),
      'Ghi chú': booking.notes || 'Không có',
      'Trạng thái': 'Chờ xác nhận',
      'Nguồn': location.href
    };
    if (booking.customerEmail) payload._replyto = booking.customerEmail;

    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || `HTTP ${response.status}`);
      return { ok: true };
    } catch (error) {
      console.error('Lumi Pet booking email error:', error);
      return { ok: false, mailto: fallbackMailto(booking) };
    }
  }

  const setSubmitting = (form, busy) => {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    if (!button.dataset.originalText) button.dataset.originalText = button.textContent || 'Xác nhận';
    button.disabled = busy;
    button.textContent = busy ? 'Đang gửi booking...' : button.dataset.originalText;
  };

  const attachPhoneLeadCapture = (root, kind) => {
    const phoneInput = root.querySelector('input[name="customerPhone"]');
    if (!phoneInput) return;
    let captured = false;

    const tryCapture = () => {
      const val = phoneInput.value.replace(/\D/g, '');
      if (!captured && (val.length === 10 || val.length === 11) && val.startsWith('0')) {
        captured = true;
        const nameInput = root.querySelector('input[name="customerName"]');
        const petNameInput = root.querySelector('input[name="petName"]');
        const weightInput = root.querySelector('input[name="petWeight"]');
        const total = root.dataset.total || '0';

        const text = [
          '🔥 *【 LUMI PET 】- CÓ KHÁCH ĐANG ĐIỀN THÔNG TIN TRÊN WEB!*',
          '━━━━━━━━━━━━━━━━━━━━',
          `📞 *Số điện thoại:* [${val}](tel:${val})`,
          nameInput && nameInput.value ? `👤 *Họ tên:* ${nameInput.value}` : null,
          petNameInput && petNameInput.value ? `🐾 *Tên bé:* ${petNameInput.value}` : null,
          weightInput && weightInput.value ? `⚖️ *Cân nặng:* ${weightInput.value}kg` : null,
          `🏷️ *Trang đang xem:* ${kind === 'spa' ? 'Đặt lịch Spa Chăm Sóc' : 'Đặt phòng Hotel 24/7'}`,
          Number(total) > 0 ? `💰 *Giá tạm tính:* *${money.format(Number(total))}*` : null,
          `⏰ *Thời gian:* ${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} (Hôm nay)`,
          '━━━━━━━━━━━━━━━━━━━━',
          '⚡ _Khách vừa gõ SĐT vào form trên web! Nếu khách chưa bấm gửi hoặc thoát trang, hãy gọi lại hỗ trợ ngay!_'
        ].filter(Boolean).join('\n');

        fetch(NOTIFY_ZALO_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: text.slice(0, 1900), _hp: '' })
        }).catch(e => console.error(e));
      }
    };

    phoneInput.addEventListener('blur', tryCapture);
    phoneInput.addEventListener('change', tryCapture);
  };

  const showSuccess = (root, booking, emailResult) => {
    const box = qs(root, '.success');
    if (!box) return;
    box.hidden = false;
    setText(box, '.success-code', booking.id);
    setText(box, '.success-total', money.format(booking.totalPrice));

    let emailState = box.querySelector('.email-status');
    if (!emailState) {
      emailState = document.createElement('p');
      emailState.className = 'email-status';
      box.appendChild(emailState);
    }
    emailState.textContent = '';

    if (emailResult.ok) {
      emailState.textContent = '✓ Thông tin booking đã được gửi qua email cho Lumi Pet. Shop sẽ liên hệ để xác nhận.';
    } else {
      emailState.append('Booking đã lưu trên thiết bị, nhưng email tự động chưa gửi được. ');
      const link = document.createElement('a');
      link.href = emailResult.mailto;
      link.textContent = 'Bấm để gửi email dự phòng';
      link.style.fontWeight = '800';
      emailState.appendChild(link);
    }
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  function initSpa(root) {
    const form = qs(root, 'form');
    const petType = qs(form, '[name="petType"]');
    const service = qs(form, '[name="serviceId"]');
    const weight = qs(form, '[name="petWeight"]');
    const date = qs(form, '[name="date"]');
    date.min = yyyyMmDd(today);

    const recalc = () => {
      const list = spaServices[petType.value];
      const selected = list.find(s => s.id === service.value) || list[0];
      const tier = tierFor(Number(weight.value), selected.tiers);
      if (!tier) {
        setText(root, '.price-total', 'Liên hệ shop');
        setText(root, '.price-tier', 'Ngoài khung cân nặng tự động');
        root.dataset.total = '0';
        root.dataset.tier = '';
        root.dataset.serviceName = selected.name;
        return;
      }
      setText(root, '.price-total', money.format(tier.price));
      setText(root, '.price-tier', tier.label);
      root.dataset.total = String(tier.price);
      root.dataset.tier = tier.label;
      root.dataset.serviceName = selected.name;
    };

    const renderServices = () => {
      service.innerHTML = spaServices[petType.value].map(s => `<option value="${s.id}">${s.name}</option>`).join('');
      recalc();
    };

    petType.addEventListener('change', renderServices);
    service.addEventListener('change', recalc);
    weight.addEventListener('input', recalc);
    renderServices();

    form.addEventListener('submit', async e => {
      e.preventDefault();
      recalc();
      const total = Number(root.dataset.total || 0);
      if (!total) {
        alert('Cân nặng này cần Lumi Pet báo giá trực tiếp. Vui lòng gọi 0989 979 675.');
        return;
      }
      const data = new FormData(form);
      const booking = {
        id: bookingId(),
        customerName: String(data.get('customerName') || '').trim(),
        customerPhone: String(data.get('customerPhone') || '').trim(),
        customerEmail: String(data.get('customerEmail') || '').trim(),
        petName: String(data.get('petName') || '').trim(),
        petType: data.get('petType'),
        petWeight: Number(data.get('petWeight')),
        bookingType: 'spa',
        serviceType: `${root.dataset.serviceName} – ${root.dataset.tier}`,
        serviceId: String(data.get('serviceId')),
        date: String(data.get('date')),
        timeSlot: String(data.get('timeSlot')),
        notes: String(data.get('notes') || '').trim(),
        totalPrice: total,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      if (!booking.customerName || !booking.customerPhone || !booking.petName || !booking.date || !booking.timeSlot) {
        alert('Vui lòng điền đủ họ tên, số điện thoại, tên bé, ngày và khung giờ.');
        return;
      }

      setSubmitting(form, true);
      saveBooking(booking);
      sendZaloBotNotification(booking);
      const emailResult = await sendBookingEmail(booking);
      showSuccess(root, booking, emailResult);
      form.reset();
      petType.value = 'dog';
      weight.value = '5';
      renderServices();
      date.min = yyyyMmDd(today);
      setSubmitting(form, false);
    });

    attachPhoneLeadCapture(root, 'spa');
  }

  function initHotel(root) {
    const form = qs(root, 'form');
    const weight = qs(form, '[name="petWeight"]');
    const checkIn = qs(form, '[name="checkInDate"]');
    const checkOut = qs(form, '[name="checkOutDate"]');
    checkIn.min = yyyyMmDd(today);
    checkOut.min = yyyyMmDd(today);

    const recalc = () => {
      const tier = tierFor(Number(weight.value), hotelTiers);
      const start = checkIn.value ? new Date(`${checkIn.value}T00:00:00`) : null;
      const end = checkOut.value ? new Date(`${checkOut.value}T00:00:00`) : null;
      const days = start && end && end >= start ? Math.max(1, Math.ceil((end - start) / 86400000)) : 0;
      const discount = days > 10 ? 0.08 : days > 5 ? 0.05 : 0;

      if (!tier) {
        setText(root, '.price-total', 'Liên hệ shop');
        setText(root, '.price-tier', 'Trên 15kg cần báo giá');
        root.dataset.total = '0';
        root.dataset.days = String(days);
        root.dataset.tier = '';
        return;
      }

      const subtotal = tier.price * days;
      const total = Math.round(subtotal * (1 - discount));
      setText(root, '.price-day', money.format(tier.price));
      setText(root, '.price-tier', tier.label);
      setText(root, '.price-days', days ? `${days} ngày` : 'Chọn ngày');
      setText(root, '.price-discount', discount ? `${discount * 100}%` : '0%');
      setText(root, '.price-total', days ? money.format(total) : 'Chọn ngày');
      root.dataset.total = String(total);
      root.dataset.days = String(days);
      root.dataset.tier = tier.label;
      root.dataset.dayPrice = String(tier.price);
      root.dataset.discount = String(discount);
    };

    [weight, checkIn, checkOut].forEach(el => el.addEventListener('input', () => {
      if (el === checkIn && checkIn.value) checkOut.min = checkIn.value;
      recalc();
    }));
    recalc();

    form.addEventListener('submit', async e => {
      e.preventDefault();
      recalc();
      const total = Number(root.dataset.total || 0);
      const days = Number(root.dataset.days || 0);
      if (!root.dataset.tier) {
        alert('Bé trên 15kg cần Lumi Pet báo giá trực tiếp. Vui lòng gọi 0989 979 675.');
        return;
      }
      if (!days || !total) {
        alert('Vui lòng chọn ngày nhận và ngày trả hợp lệ.');
        return;
      }

      const data = new FormData(form);
      const discount = Number(root.dataset.discount || 0);
      const booking = {
        id: bookingId(),
        customerName: String(data.get('customerName') || '').trim(),
        customerPhone: String(data.get('customerPhone') || '').trim(),
        customerEmail: String(data.get('customerEmail') || '').trim(),
        petName: String(data.get('petName') || '').trim(),
        petType: data.get('petType'),
        petWeight: Number(data.get('petWeight')),
        bookingType: 'hotel',
        serviceType: `Khách sạn thú cưng – ${root.dataset.tier}`,
        serviceId: 'hotel-weight-tier',
        checkInDate: String(data.get('checkInDate')),
        checkOutDate: String(data.get('checkOutDate')),
        notes: `${String(data.get('notes') || '').trim()}${discount ? ` | Ưu đãi lưu trú ${discount * 100}%` : ''}`.trim(),
        totalPrice: total,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      if (!booking.customerName || !booking.customerPhone || !booking.petName) {
        alert('Vui lòng điền đủ họ tên, số điện thoại và tên bé.');
        return;
      }

      setSubmitting(form, true);
      saveBooking(booking);
      sendZaloBotNotification(booking);
      const emailResult = await sendBookingEmail(booking);
      showSuccess(root, booking, emailResult);
      form.reset();
      weight.value = '5';
      checkIn.min = yyyyMmDd(today);
      checkOut.min = yyyyMmDd(today);
      recalc();
      setSubmitting(form, false);
    });

    attachPhoneLeadCapture(root, 'hotel');
  }

  document.querySelectorAll('[data-booking-kind="spa"]').forEach(initSpa);
  document.querySelectorAll('[data-booking-kind="hotel"]').forEach(initHotel);
})();
