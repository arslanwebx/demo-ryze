const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');

menuBtn?.addEventListener('click',()=>{
  const open=!mobileMenu.hasAttribute('hidden');
  if(open){
    mobileMenu.setAttribute('hidden','');
    menuBtn.setAttribute('aria-expanded','false');
  }else{
    mobileMenu.removeAttribute('hidden');
    menuBtn.setAttribute('aria-expanded','true');
  }
});

document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>{
  mobileMenu.setAttribute('hidden','');
  menuBtn.setAttribute('aria-expanded','false');
}));

const ingredientName=document.getElementById('ingredientName');
const ingredientCopy=document.getElementById('ingredientCopy');
document.querySelectorAll('.ingredient').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.ingredient').forEach(item=>item.classList.remove('active'));
  btn.classList.add('active');
  ingredientName.textContent=btn.querySelector('b').textContent;
  ingredientCopy.textContent=btn.dataset.copy;
}));

document.querySelectorAll('.sub-option').forEach(option=>option.addEventListener('click',()=>{
  document.querySelectorAll('.sub-option').forEach(item=>item.classList.remove('selected'));
  option.classList.add('selected');
  option.querySelector('input').checked=true;
}));

const mainProduct=document.querySelector('.main-product img');
document.querySelectorAll('.thumb').forEach(thumb=>thumb.addEventListener('click',()=>{
  document.querySelectorAll('.thumb').forEach(item=>item.classList.remove('active'));
  thumb.classList.add('active');
  mainProduct.src=thumb.dataset.img;
}));

document.querySelector('.add-btn')?.addEventListener('click',()=>{
  const toast=document.querySelector('.toast');
  const bag=document.querySelector('.bag-link span');
  bag.textContent=String(Number(bag.textContent)+1);
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
});