const tabs=[...document.querySelectorAll('.tabs button')];
const options=[...document.querySelectorAll('.option')];
const price=document.getElementById('price');
const per=document.getElementById('per');
const cartBtn=document.getElementById('demoCart');
const toast=document.getElementById('toast');
let mode='sub';
let selected=options[0];

function refresh(){
  const amount=Number(selected.dataset[mode]);
  const servings=Number(selected.dataset.servings);
  price.textContent=`$${amount}`;
  per.textContent=`$${(amount/servings).toFixed(2)}`;
  cartBtn.textContent=`Add to demo cart — $${amount}`;
  options.forEach(o=>{o.querySelector('strong').textContent=`$${o.dataset[mode]}`});
}

tabs.forEach(tab=>tab.addEventListener('click',()=>{
  tabs.forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  mode=tab.dataset.mode;
  refresh();
}));

options.forEach(option=>option.addEventListener('click',()=>{
  options.forEach(o=>o.classList.remove('active'));
  option.classList.add('active');
  selected=option;
  refresh();
}));

cartBtn?.addEventListener('click',()=>{
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2200);
});

const notes={
  cacao:'Cacao gives MORROW its familiar, cozy backbone—the part that makes it feel more like a café ritual than a supplement.',
  lions:'Lion’s mane brings classic functional-mushroom character to the blend while staying behind the cacao-forward flavor.',
  greens:'The greens blend keeps the formula plant-forward and simple without turning the cup into a grassy-tasting chore.',
  cinnamon:'Cinnamon rounds out the cup with warmth and aroma, making the finish feel familiar from the very first sip.'
};
const ingredientNote=document.getElementById('ingredientNote');
document.querySelectorAll('.ingredient-item').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.ingredient-item').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  ingredientNote.textContent=notes[btn.dataset.ingredient];
}));

const menuToggle=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
function closeMenu(){
  mobileMenu?.classList.remove('open');
  mobileMenu?.setAttribute('aria-hidden','true');
  menuToggle?.setAttribute('aria-expanded','false');
}
menuToggle?.addEventListener('click',()=>{
  const open=!mobileMenu.classList.contains('open');
  mobileMenu.classList.toggle('open',open);
  mobileMenu.setAttribute('aria-hidden',String(!open));
  menuToggle.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const href=a.getAttribute('href');
  if(href==='#') return;
  const target=document.querySelector(href);
  if(target){
    e.preventDefault();
    closeMenu();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  }
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const mobileBar=document.querySelector('.mobile-bar');
const hero=document.querySelector('.hero');
window.addEventListener('scroll',()=>{
  if(!mobileBar||!hero) return;
  const show=window.scrollY>hero.offsetHeight*.55 && window.innerWidth<=680;
  mobileBar.classList.toggle('show',show);
},{passive:true});

refresh();