(() => {
  const STORAGE_KEY = 'paws_perfect_bookings';
  const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
  const spaServices = {
    dog: [
      { id: 'dog-bath', name: 'Tắm vệ sinh', tiers: [[3,120000,'Dưới 3kg'],[6,170000,'3 – 6kg'],[9,220000,'6 – 9kg'],[12,270000,'9 – 12kg'],[18,350000,'12 – 18kg']] },
      { id: 'dog-shave', name: 'Combo tắm + cạo lông', tiers: [[3,180000,'Dưới 3kg'],[6,240000,'3 – 6kg'],[9,300000,'6 – 9kg'],[12,360000,'9 – 12kg'],[18,460000,'12 – 18kg']] },
      { id: 'dog-groom', name: 'Combo tắm + cắt tỉa', tiers: [[3,260000,'Dưới 3kg'],[6,320000,'3 – 6kg'],[9,380000,'6 – 9kg'],[12,450000,'9 – 12kg'],[18,550000,'12 – 18kg']] }
    ],
    cat: [
      { id: 'cat-bath', name: 'Combo tắm vệ sinh mèo', tiers: [[3,150000,'Dưới 3kg'],[6,200000,'3 – 6kg'],[10,250000,'6 – 10kg']] },
      { id: 'cat-shave', name: 'Combo tắm + cạo lông mèo', tiers: [[3,230000,'Dưới 3kg'],[6,290000,'3 – 6kg'],[10,350000,'6 – 10kg']] }
    ]
  };
  const hotelTiers = [[3,100000,'Dưới 3kg'],[6,120000,'3 – 6kg'],[9,160000,'6 – 9kg'],[12,200000,'9 – 12kg'],[15,250000,'12 – 15kg']];
  const today = new Date();
  const yyyyMmDd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const tierFor = (weight, tiers) => {
    if (!Number.isFinite(weight) || weight <= 0) return null;
    for (let i=0;i<tiers.length;i++) {
      const [max, price, label] = tiers[i];
      if (i === 0 ? weight < max : weight <= max) return { price, label };
    }
    return null;
  };
  const readBookings = () => {
    try { const v = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(v) ? v : []; }
    catch { return []; }
  };
  const saveBooking = booking => {
    const all = readBookings(); all.unshift(booking); localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  };
  const bookingId = () => `LP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
  const qs = (root, sel) => root.querySelector(sel);
  const setText = (root, sel, text) => { const el = qs(root,sel); if (el) el.textContent = text; };
  const showSuccess = (root, booking) => {
    const box = qs(root,'.success'); if (!box) return;
    box.hidden = false;
    setText(box,'.success-code',booking.id);
    setText(box,'.success-total',money.format(booking.totalPrice));
    box.scrollIntoView({behavior:'smooth',block:'center'});
  };

  function initSpa(root) {
    const form = qs(root,'form');
    const petType = qs(form,'[name="petType"]');
    const service = qs(form,'[name="serviceId"]');
    const weight = qs(form,'[name="petWeight"]');
    const date = qs(form,'[name="date"]');
    date.min = yyyyMmDd(today);
    const renderServices = () => {
      service.innerHTML = spaServices[petType.value].map(s => `<option value="${s.id}">${s.name}</option>`).join('');
      recalc();
    };
    const recalc = () => {
      const list = spaServices[petType.value];
      const selected = list.find(s => s.id === service.value) || list[0];
      const tier = tierFor(Number(weight.value), selected.tiers);
      if (!tier) {
        setText(root,'.price-total','Liên hệ shop');
        setText(root,'.price-tier','Ngoài khung cân nặng tự động');
        root.dataset.total = '0';
        root.dataset.tier = '';
        root.dataset.serviceName = selected.name;
        return;
      }
      setText(root,'.price-total',money.format(tier.price));
      setText(root,'.price-tier',tier.label);
      root.dataset.total = String(tier.price);
      root.dataset.tier = tier.label;
      root.dataset.serviceName = selected.name;
    };
    petType.addEventListener('change',renderServices); service.addEventListener('change',recalc); weight.addEventListener('input',recalc);
    renderServices();
    form.addEventListener('submit', e => {
      e.preventDefault(); recalc();
      const total = Number(root.dataset.total || 0);
      if (!total) { alert('Cân nặng này cần Lumi Pet báo giá trực tiếp. Vui lòng gọi 0989 979 675.'); return; }
      const data = new FormData(form);
      const booking = {
        id: bookingId(), customerName: String(data.get('customerName')||'').trim(), customerPhone: String(data.get('customerPhone')||'').trim(), customerEmail: String(data.get('customerEmail')||'').trim(),
        petName: String(data.get('petName')||'').trim(), petType: data.get('petType'), petWeight: Number(data.get('petWeight')), bookingType: 'spa',
        serviceType: `${root.dataset.serviceName} – ${root.dataset.tier}`, serviceId: String(data.get('serviceId')), date: String(data.get('date')), timeSlot: String(data.get('timeSlot')),
        notes: String(data.get('notes')||'').trim(), totalPrice: total, status: 'pending', createdAt: new Date().toISOString()
      };
      if (!booking.customerName || !booking.customerPhone || !booking.petName || !booking.date || !booking.timeSlot) { alert('Vui lòng điền đủ họ tên, số điện thoại, tên bé, ngày và khung giờ.'); return; }
      saveBooking(booking); showSuccess(root,booking); form.reset(); petType.value='dog'; weight.value='5'; renderServices(); date.min=yyyyMmDd(today);
    });
  }

  function initHotel(root) {
    const form = qs(root,'form'); const weight = qs(form,'[name="petWeight"]'); const checkIn = qs(form,'[name="checkInDate"]'); const checkOut = qs(form,'[name="checkOutDate"]');
    checkIn.min = yyyyMmDd(today); checkOut.min = yyyyMmDd(today);
    const recalc = () => {
      const tier = tierFor(Number(weight.value), hotelTiers);
      const start = checkIn.value ? new Date(`${checkIn.value}T00:00:00`) : null; const end = checkOut.value ? new Date(`${checkOut.value}T00:00:00`) : null;
      const days = start && end && end >= start ? Math.max(1,Math.ceil((end-start)/86400000)) : 0;
      const discount = days > 10 ? .08 : days > 5 ? .05 : 0;
      if (!tier) { setText(root,'.price-total','Liên hệ shop'); setText(root,'.price-tier','Trên 15kg cần báo giá'); root.dataset.total='0'; root.dataset.days=String(days); root.dataset.tier=''; return; }
      const subtotal = tier.price * days; const total = Math.round(subtotal*(1-discount));
      setText(root,'.price-day',money.format(tier.price)); setText(root,'.price-tier',tier.label); setText(root,'.price-days',days ? `${days} ngày` : 'Chọn ngày'); setText(root,'.price-discount',discount ? `${discount*100}%` : '0%'); setText(root,'.price-total',days ? money.format(total) : 'Chọn ngày');
      root.dataset.total=String(total); root.dataset.days=String(days); root.dataset.tier=tier.label; root.dataset.dayPrice=String(tier.price); root.dataset.discount=String(discount);
    };
    [weight,checkIn,checkOut].forEach(el => el.addEventListener('input',() => { if (el===checkIn && checkIn.value) checkOut.min=checkIn.value; recalc(); })); recalc();
    form.addEventListener('submit', e => {
      e.preventDefault(); recalc(); const total=Number(root.dataset.total||0), days=Number(root.dataset.days||0);
      if (!root.dataset.tier) { alert('Bé trên 15kg cần Lumi Pet báo giá trực tiếp. Vui lòng gọi 0989 979 675.'); return; }
      if (!days || !total) { alert('Vui lòng chọn ngày nhận và ngày trả hợp lệ.'); return; }
      const data=new FormData(form); const discount=Number(root.dataset.discount||0);
      const booking={ id:bookingId(), customerName:String(data.get('customerName')||'').trim(), customerPhone:String(data.get('customerPhone')||'').trim(), customerEmail:String(data.get('customerEmail')||'').trim(), petName:String(data.get('petName')||'').trim(), petType:data.get('petType'), petWeight:Number(data.get('petWeight')), bookingType:'hotel', serviceType:`Khách sạn thú cưng – ${root.dataset.tier}`, serviceId:'hotel-weight-tier', checkInDate:String(data.get('checkInDate')), checkOutDate:String(data.get('checkOutDate')), notes:`${String(data.get('notes')||'').trim()}${discount?` | Ưu đãi lưu trú ${discount*100}%`:''}`.trim(), totalPrice:total, status:'pending', createdAt:new Date().toISOString() };
      if(!booking.customerName||!booking.customerPhone||!booking.petName){alert('Vui lòng điền đủ họ tên, số điện thoại và tên bé.');return;}
      saveBooking(booking); showSuccess(root,booking); form.reset(); weight.value='5'; checkIn.min=yyyyMmDd(today); checkOut.min=yyyyMmDd(today); recalc();
    });
  }
  document.querySelectorAll('[data-booking-kind="spa"]').forEach(initSpa);
  document.querySelectorAll('[data-booking-kind="hotel"]').forEach(initHotel);
})();
