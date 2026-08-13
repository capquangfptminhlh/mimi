(() => {
  const links=[...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const setActive=id=>links.forEach(a=>a.classList.toggle('nav-current',a.getAttribute('href')===`#${id}`));
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      const hit=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(hit)setActive(hit.target.id);
    },{rootMargin:'-20% 0px -65% 0px',threshold:[0,.15,.35]});
    sections.forEach(s=>io.observe(s));
  }
  links.forEach(a=>a.addEventListener('click',()=>setActive(a.getAttribute('href').slice(1))));
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();

  const loadScript=src=>new Promise((resolve,reject)=>{
    if(document.querySelector(`script[src="${src}"]`)){resolve();return}
    const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s);
  });
  const loadRemoteStack=async()=>{
    if(!document.querySelector('link[href="assets/booking-remote.css"]')){
      const l=document.createElement('link');l.rel='stylesheet';l.href='assets/booking-remote.css';document.head.appendChild(l);
    }
    try{
      await loadScript('assets/api-config.js');
      await loadScript('assets/api-client.js');
      if(window.LumiApi?.configured()) await loadScript('assets/booking-remote.js');
    }catch(e){console.warn('Lumi remote features unavailable')}
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',loadRemoteStack,{once:true});
  else loadRemoteStack();
})();