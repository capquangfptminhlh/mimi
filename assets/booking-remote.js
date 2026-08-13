(()=>{
  'use strict';
  const api=window.LumiApi;
  if(!api||!api.configured()) return;
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const get=(form,name)=>(form.elements[name]?.value||'').trim();
  const formatMoney=value=>new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(value);

  function resultBox(form){return $('.request-result',form.parentElement)}
  function codeFrom(form){return $('.request-code',resultBox(form))?.textContent?.trim()||''}
  function syncNode(form){
    const box=resultBox(form); if(!box) return null;
    let node=$('.server-sync-status',box);
    if(!node){node=document.createElement('div');node.className='server-sync-status';node.setAttribute('aria-live','polite');box.appendChild(node)}
    return node;
  }
  function saveServerState(code,status){
    try{
      const item=JSON.parse(localStorage.getItem('lumi:last-request')||'null');
      if(item&&item.code===code){item.serverStatus=status;item.syncedAt=new Date().toISOString();localStorage.setItem('lumi:last-request',JSON.stringify(item))}
    }catch{}
  }
  function appointmentPayload(form,code){return{type:'appointment',code,owner:get(form,'owner'),phone:get(form,'phone'),pet:get(form,'pet'),petType:get(form,'petType'),service:get(form,'service'),weight:get(form,'weight'),date:get(form,'date'),time:get(form,'time'),note:get(form,'note')}}
  function hotelPayload(form,code){return{type:'hotel',code,owner:get(form,'owner'),phone:get(form,'phone'),pet:get(form,'pet'),petType:get(form,'petType'),quantity:Number(get(form,'quantity')||1),checkinDate:get(form,'checkinDate'),checkinTime:get(form,'checkinTime'),checkoutDate:get(form,'checkoutDate'),checkoutTime:get(form,'checkoutTime'),food:get(form,'food'),note:get(form,'note')}}
  async function sync(form,type){
    await new Promise(r=>setTimeout(r,20));
    const box=resultBox(form); if(!box?.classList.contains('is-visible')) return;
    const code=codeFrom(form); if(!code) return;
    const node=syncNode(form); if(node){node.dataset.state='syncing';node.textContent='Đang lưu yêu cầu vào hệ thống Lumi…'}
    try{
      const payload=type==='hotel'?hotelPayload(form,code):appointmentPayload(form,code);
      const result=await api.createBooking(payload);
      saveServerState(code,result.status||'PENDING_CONFIRMATION');
      if(node){node.dataset.state='success';node.textContent='✓ Yêu cầu đã được lưu vào hệ thống Lumi và đang chờ xác nhận.'}
    }catch(error){
      if(node){
        node.dataset.state=error?.message==='BOOKING_CODE_EXISTS'?'success':'error';
        node.textContent=error?.message==='BOOKING_CODE_EXISTS'?'✓ Yêu cầu này đã có trong hệ thống Lumi.':'Chưa đồng bộ được lên máy chủ. Yêu cầu trên thiết bị vẫn được giữ; bạn có thể SMS hoặc gọi Lumi.';
      }
    }
  }
  function installRemoteSubmit(selector,type){const form=$(selector);if(form)form.addEventListener('submit',()=>sync(form,type))}

  async function hydratePublicConfig(){
    try{
      const remote=await api.getPublicConfig();
      const prices=remote?.prices||{};
      if(!prices.published) return;
      const rows=$$('.price-table tbody tr');
      const bindings=[[0,'bathSpa'],[1,'grooming'],[2,'hotelPerNight']];
      bindings.forEach(([index,key])=>{const value=prices[key],el=$('.price-status',rows[index]);if(el&&typeof value==='number'&&value>0){el.textContent=formatMoney(value);el.classList.add('verified-price')}});
      const note=$('.pricing-section .pricing-note');
      if(note&&prices.note) note.textContent=prices.note;
    }catch{}
  }

  function installAvailability(){
    const form=$('#hotel-form'); if(!form) return;
    let node=$('.remote-availability',form.parentElement);
    if(!node){node=document.createElement('div');node.className='remote-availability';const estimate=$('[data-hotel-estimate]',form);if(estimate)estimate.insertAdjacentElement('afterend',node)}
    let timer;
    const check=()=>{clearTimeout(timer);timer=setTimeout(async()=>{
      const start=get(form,'checkinDate'),end=get(form,'checkoutDate');
      if(!start||!end||end<=start){node.textContent='';return}
      node.textContent='Đang kiểm tra tình trạng Pet Hotel…';
      try{
        const result=await api.getAvailability(start,end);
        if(result.status==='CONTACT_REQUIRED'){node.textContent='Sức chứa Hotel chưa được Lumi công bố. Shop sẽ xác nhận chỗ trống trực tiếp.';return}
        node.textContent=`Ước tính còn ${result.availableEstimate}/${result.capacity} chỗ theo booking đã xác nhận; ${result.pendingUnits} chỗ đang chờ xác nhận.`;
      }catch{node.textContent='Không lấy được tình trạng Hotel lúc này; bạn vẫn có thể tạo yêu cầu hoặc gọi Lumi.'}
    },250)};
    ['checkinDate','checkoutDate'].forEach(name=>form.elements[name]?.addEventListener('change',check));
  }

  function updatePrivacyCopy(){
    const cards=$$('.booking-trust>div');
    if(cards[0]){const strong=$('strong',cards[0]),span=$('span',cards[0]);if(strong)strong.textContent='🔐 Chỉ gửi khi bạn bấm tạo yêu cầu';if(span)span.textContent='Khi hệ thống online, yêu cầu được lưu vào CRM Lumi để shop xử lý; SMS/gọi vẫn là phương án dự phòng.'}
  }

  installRemoteSubmit('#appointment-form','appointment');
  installRemoteSubmit('#hotel-form','hotel');
  installAvailability();
  hydratePublicConfig();
  updatePrivacyCopy();
})();
