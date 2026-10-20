const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{nav.classList.toggle('open');menuToggle.textContent=nav.classList.contains('open')?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.textContent='☰';}));
const tabs=document.querySelectorAll('.tab');
const cards=document.querySelectorAll('.product-card');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');const filter=tab.dataset.filter;cards.forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter));}));
const toast=document.querySelector('#toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600);}
document.querySelectorAll('.add-btn').forEach(btn=>btn.addEventListener('click',()=>{const name=btn.closest('.product-card').querySelector('h3').textContent;showToast(`${name}: Đây là bản demo. Hãy đặt món trên website chính thức.`);}));
document.querySelector('#moreMenu').addEventListener('click',()=>{showToast('Bạn có thể xem thực đơn đầy đủ trên website Jollibee chính thức.');setTimeout(()=>window.open('https://jollibee.com.vn/','_blank','noopener'),500);});
document.querySelector('#storeSearch').addEventListener('submit',e=>{e.preventDefault();const q=document.querySelector('#storeQuery').value.trim();if(!q){showToast('Vui lòng nhập tỉnh/thành phố hoặc địa chỉ.');return;}window.open('https://jollibee.com.vn/cua-hang','_blank','noopener');document.querySelector('#storeMessage').textContent=`Đã nhận từ khóa “${q}”. Trang cửa hàng chính thức sẽ mở trong tab mới.`;});
const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('.nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>observer.observe(section));
