(() => {
  const SHOP_PHONE = '+84989979675';
  const SHOP_PHONE_DISPLAY = '0989 979 675';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const pad = n => String(n).padStart(2,'0');
  const todayLocal = () => {
    const d=new Date();
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  };
  const humanDate = value => {
    if(!value) return '';
    const [y,m,d]=value.split('-');
    return `${d}/${m}/${y}`;
  };
  const cleanPhone = value => value.replace(/\D/g,'');
  const validPhone = value => {
    const p=cleanPhone(value);
    return /^(0|84)\d{9,10}$/.test(p);
  };
  const requestCode = prefix => {
    const d=new Date();
    const stamp=`${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}`;
    return `LUMI-${prefix}-${stamp}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
  };
  const stayNights = (inDate,outDate) => {
    if(!inDate||!outDate) return null;
    const start=Date.parse(`${inDate}T00:00:00`), end=Date.parse(`${outDate}T00:00:00`);
    const diff=Math.round((end-start)/86400000);
    return Number.isFinite(diff)?diff:null;
  };
  const copyText = async text => {
    try { await navigator.clipboard.writeText(text); return true; }
    catch(e){
      const ta=document.createElement('textarea');
      ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      const ok=document.execCommand('copy'); ta.remove(); return ok;
    }
  };
  const saveRequest = data => {
    try { localStorage.setItem('lumi:last-request',JSON.stringify(data)); } catch(e){}
    renderLastRequest();
  };
  const renderLastRequest = () => {
    const box=$('[data-last-request]'); if(!box) return;
    let item=null;
    try { item=JSON.parse(localStorage.getItem('lumi:last-request')||'null'); } catch(e){}
    if(!item){
      box.innerHTML='<h3>Yêu cầu gần nhất</h3><p>Chưa có yêu cầu nào được tạo trên thiết bị này.</p>';
      return;
    }
    const status=item.serverStatus==='CONFIRMED'?'Đã xác nhận':item.serverStatus==='COMPLETED'?'Hoàn tất':item.serverStatus==='CANCELLED'?'Đã hủy':'Chờ Lumi xác nhận';
    box.innerHTML=`<h3>Yêu cầu gần nhất</h3><span class="request-code">${item.code}</span><p><strong>${item.title}</strong></p><p>${item.when}</p><p>Trạng thái: <strong>${status}</strong></p>`;
  };
  const showResult = (form, data) => {
    const panel=$('.request-result',form.parentElement); if(!panel) return;
    $('.request-code',panel).textContent=data.code;
    $('pre',panel).textContent=data.message;
    panel.classList.add('is-visible');
    const sms=$('[data-send-sms]',panel);
    const copy=$('[data-copy-request]',panel);
    const call=$('[data-call-shop]',panel);
    sms.href=`sms:${SHOP_PHONE}?body=${encodeURIComponent(data.message)}`;
    call.href=`tel:${SHOP_PHONE}`;
    copy.onclick=async()=>{
      const ok=await copyText(data.message);
      copy.textContent=ok?'Đã sao chép ✓':'Không sao chép được';
      setTimeout(()=>copy.textContent='Sao chép nội dung',1800);
    };
    panel.scrollIntoView({behavior:'smooth',block:'nearest'});
    saveRequest(data);
    const live=$('[data-booking-live]'); if(live) live.textContent=`Đã tạo yêu cầu ${data.code}. Vui lòng chờ Lumi xác nhận.`;
  };
  const getValue = (form,name) => (form.elements[name]?.value||'').trim();
  const setError = (form,msg) => { const el=$('.form-error',form); if(el) el.textContent=msg||''; };
  const requireCommon = form => {
    const owner=getValue(form,'owner');
    const phone=getValue(form,'phone');
    const pet=getValue(form,'pet');
    if(!owner || !phone || !pet) return 'Vui lòng nhập tên khách, số điện thoại và tên bé.';
    if(!validPhone(phone)) return 'Số điện thoại chưa đúng định dạng.';
    if(!form.elements.consent?.checked) return 'Vui lòng xác nhận rằng lịch chỉ có hiệu lực sau khi Lumi phản hồi.';
    return '';
  };
  const appointmentSubmit = form => {
    let err=requireCommon(form); if(err){setError(form,err);return;}
    const service=getValue(form,'service');
    const petType=getValue(form,'petType');
    const date=getValue(form,'date');
    const time=getValue(form,'time');
    const weight=getValue(form,'weight');
    const note=getValue(form,'note');
    if(!service || !petType || !date || !time){setError(form,'Vui lòng chọn dịch vụ, loại thú cưng, ngày và giờ mong muốn.');return;}
    if(date<todayLocal()){setError(form,'Ngày đặt lịch không thể ở trong quá khứ.');return;}
    setError(form,'');
    const code=requestCode('CARE');
    const message=[
      `[${code}] YÊU CẦU ĐẶT LỊCH LUMI PET SHOP`,
      `Khách: ${getValue(form,'owner')}`,
      `SĐT: ${getValue(form,'phone')}`,
      `Bé: ${getValue(form,'pet')} · ${petType}`,
      `Dịch vụ: ${service}`,
      `Thời gian mong muốn: ${humanDate(date)} lúc ${time}`,
      weight?`Cân nặng dự kiến: ${weight} kg`:'',
      note?`Ghi chú: ${note}`:'',
      `Vui lòng Lumi xác nhận lịch và báo giá trước khi thực hiện.`
    ].filter(Boolean).join('\n');
    showResult(form,{code,type:'appointment',title:service,when:`${humanDate(date)} · ${time}`,message,createdAt:new Date().toISOString(),serverStatus:'PENDING_CONFIRMATION'});
  };
  const hotelSubmit = form => {
    let err=requireCommon(form); if(err){setError(form,err);return;}
    const petType=getValue(form,'petType');
    const quantity=getValue(form,'quantity')||'1';
    const inDate=getValue(form,'checkinDate');
    const inTime=getValue(form,'checkinTime');
    const outDate=getValue(form,'checkoutDate');
    const outTime=getValue(form,'checkoutTime');
    const food=getValue(form,'food');
    const note=getValue(form,'note');
    if(!petType || !inDate || !inTime || !outDate || !outTime){setError(form,'Vui lòng nhập đủ ngày/giờ nhận và trả bé.');return;}
    if(inDate<todayLocal()){setError(form,'Ngày nhận bé không thể ở trong quá khứ.');return;}
    const nights=stayNights(inDate,outDate);
    if(!nights || nights<1){setError(form,'Ngày trả bé phải sau ngày nhận bé ít nhất 1 ngày.');return;}
    const start=new Date(`${inDate}T${inTime}`), end=new Date(`${outDate}T${outTime}`);
    if(!(end>start)){setError(form,'Thời gian trả bé phải sau thời gian nhận bé.');return;}
    setError(form,'');
    const code=requestCode('HOTEL');
    const message=[
      `[${code}] YÊU CẦU BOOK PET HOTEL - LUMI PET SHOP`,
      `Khách: ${getValue(form,'owner')}`,
      `SĐT: ${getValue(form,'phone')}`,
      `Bé: ${getValue(form,'pet')} · ${petType} · Số lượng: ${quantity}`,
      `Nhận bé: ${humanDate(inDate)} lúc ${inTime}`,
      `Trả bé: ${humanDate(outDate)} lúc ${outTime}`,
      `Thời lượng dự kiến: ${nights} đêm`,
      food?`Ăn uống/thói quen: ${food}`:'',
      note?`Lưu ý chăm sóc: ${note}`:'',
      `Vui lòng Lumi xác nhận còn chỗ, lịch nhận/trả và báo giá trước khi gửi bé.`
    ].filter(Boolean).join('\n');
    showResult(form,{code,type:'hotel',title:`Pet Hotel · ${nights} đêm`,when:`${humanDate(inDate)} → ${humanDate(outDate)}`,message,createdAt:new Date().toISOString(),serverStatus:'PENDING_CONFIRMATION'});
  };
  const updateHotelEstimate = form => {
    const box=$('[data-hotel-estimate]',form); if(!box) return;
    const inDate=getValue(form,'checkinDate'), inTime=getValue(form,'checkinTime');
    const outDate=getValue(form,'checkoutDate'), outTime=getValue(form,'checkoutTime');
    if(!inDate||!inTime||!outDate||!outTime){box.textContent='Chọn ngày nhận và trả bé để xem số đêm dự kiến.';return;}
    const nights=stayNights(inDate,outDate);
    if(!nights||nights<1){box.textContent='Ngày trả bé phải sau ngày nhận bé ít nhất 1 ngày.';return;}
    box.textContent=`Thời lượng dự kiến: ${nights} đêm · Giá sẽ được Lumi xác nhận theo thông tin thực tế.`;
  };
  const activateTab = type => {
    $$('.booking-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.bookingTab===type));
    $$('.booking-panel').forEach(p=>p.classList.toggle('is-active',p.dataset.bookingPanel===type));
  };
  $$('.booking-tab').forEach(btn=>btn.addEventListener('click',()=>activateTab(btn.dataset.bookingTab)));
  $$('[data-book-service]').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault();
    const service=btn.dataset.bookService;
    activateTab(service==='Pet Hotel'?'hotel':'appointment');
    const select=$('#appointment-form select[name="service"]'); if(select && service!=='Pet Hotel') select.value=service;
    $('#dat-lich')?.scrollIntoView({behavior:'smooth',block:'start'});
  }));
  $$('input[type="date"]').forEach(i=>i.min=todayLocal());
  const appForm=$('#appointment-form');
  if(appForm) appForm.addEventListener('submit',e=>{e.preventDefault();appointmentSubmit(appForm);});
  const hotelForm=$('#hotel-form');
  if(hotelForm){
    hotelForm.addEventListener('submit',e=>{e.preventDefault();hotelSubmit(hotelForm);});
    ['checkinDate','checkinTime','checkoutDate','checkoutTime'].forEach(n=>hotelForm.elements[n]?.addEventListener('change',()=>updateHotelEstimate(hotelForm)));
  }
  renderLastRequest();
})();