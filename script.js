(function(){
'use strict';

const CART_KEY='sunnycells_cart_v2';
const CHECKOUT_KEY='sunnycells_checkout_v1';
const PRODUCT={id:'metabolic-morning-blend',name:'Metabolic Morning Blend',firstPrice:19,recurringPrice:39,servings:30};
const CADENCES={monthly:'Every month','two-months':'Every two months','three-months':'Every three months'};
const CADENCE_KEYS=['monthly','two-months','three-months'];
const IMAGES={
  single:'https://d2ol7oe51mr4n9.cloudfront.net/user_3DH6Bh0OA2Yi7N9q16mQzq6hHiU/9eff1733-2a15-4f12-aefa-d6e129d4302d.webp',
  three:'https://d2ol7oe51mr4n9.cloudfront.net/user_3DH6Bh0OA2Yi7N9q16mQzq6hHiU/99a57f78-5d35-4683-8b9c-42db76d4d9d3.webp',
  six:'https://d2ol7oe51mr4n9.cloudfront.net/user_3DH6Bh0OA2Yi7N9q16mQzq6hHiU/52aa1034-3ef6-4a34-8f03-05cea06ffdb5.webp'
};

function parseJSON(value,fallback){try{const parsed=JSON.parse(value);return parsed==null?fallback:parsed}catch(error){return fallback}}
function money(value){return '$'+Math.round(Number(value)||0)}
function itemKey(cadence){return PRODUCT.id+':'+cadence}
function productImage(qty){if(qty>=4)return IMAGES.six;if(qty>=2)return IMAGES.three;return IMAGES.single}

function getCart(){
  const raw=parseJSON(localStorage.getItem(CART_KEY),[]);
  if(!Array.isArray(raw))return[];
  return raw.filter(item=>item&&item.productId===PRODUCT.id&&CADENCES[item.cadence]&&Number(item.qty)>0).map(item=>({
    key:itemKey(item.cadence),productId:PRODUCT.id,name:PRODUCT.name,cadence:item.cadence,
    qty:Math.max(1,Math.min(12,Math.round(Number(item.qty)||1))),firstPrice:PRODUCT.firstPrice,recurringPrice:PRODUCT.recurringPrice
  }));
}
function saveCart(cart){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartBadges(cart);window.dispatchEvent(new CustomEvent('sunnycells:cart',{detail:cart}))}
function countCart(cart){return cart.reduce((sum,item)=>sum+item.qty,0)}
function totals(cart){return cart.reduce((out,item)=>{out.today+=item.firstPrice*item.qty;out.recurring+=item.recurringPrice*item.qty;return out},{today:0,recurring:0})}
function renewalText(cart){
  if(!cart.length)return 'Add Metabolic Morning Blend to see your renewal schedule.';
  const total=totals(cart).recurring;
  const cadences=[...new Set(cart.map(item=>item.cadence))];
  if(cadences.length===1)return 'Then '+money(total)+' '+CADENCES[cadences[0]].toLowerCase()+'. Skip or cancel anytime.';
  return 'Then '+money(total)+' across your selected renewal schedules. Skip or cancel anytime.';
}
function addToCart(cadence,qty=1){
  const chosen=CADENCES[cadence]?cadence:'monthly';
  const cart=getCart();
  const key=itemKey(chosen);
  const hit=cart.find(item=>item.key===key);
  if(hit)hit.qty=Math.min(12,hit.qty+qty);else cart.push({key,productId:PRODUCT.id,name:PRODUCT.name,cadence:chosen,qty:Math.max(1,qty),firstPrice:19,recurringPrice:39});
  saveCart(cart);return cart;
}
function setQuantity(key,qty){
  const amount=Math.round(Number(qty)||0);
  let cart=getCart();
  if(amount<=0)cart=cart.filter(item=>item.key!==key);else cart=cart.map(item=>item.key===key?{...item,qty:Math.min(12,amount)}:item);
  saveCart(cart);return cart;
}
function removeItem(key){const cart=getCart().filter(item=>item.key!==key);saveCart(cart);return cart}
function changeCadence(key,cadence){
  if(!CADENCES[cadence])return getCart();
  let cart=getCart();const source=cart.find(item=>item.key===key);if(!source)return cart;
  const nextKey=itemKey(cadence);if(nextKey===key)return cart;
  const target=cart.find(item=>item.key===nextKey);
  if(target)target.qty=Math.min(12,target.qty+source.qty);else cart.push({...source,key:nextKey,cadence});
  cart=cart.filter(item=>item.key!==key);saveCart(cart);return cart;
}
function updateCartBadges(cart=getCart()){
  const count=countCart(cart);
  document.querySelectorAll('[data-cart-count]').forEach(node=>node.textContent=String(count));
  document.querySelectorAll('.bag-link span').forEach(node=>node.textContent=String(count));
}
function showToast(message){
  const toast=document.querySelector('.commerce-toast')||document.querySelector('.toast');if(!toast)return;
  if(toast.classList.contains('commerce-toast'))toast.textContent=message;
  toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2100);
}
function setYear(){document.querySelectorAll('[data-year]').forEach(node=>node.textContent=String(new Date().getFullYear()))}

function initLanding(){
  const menuBtn=document.querySelector('.menu-btn');const mobileMenu=document.querySelector('.mobile-menu');
  menuBtn?.addEventListener('click',()=>{const open=!mobileMenu.hasAttribute('hidden');if(open){mobileMenu.setAttribute('hidden','');menuBtn.setAttribute('aria-expanded','false')}else{mobileMenu.removeAttribute('hidden');menuBtn.setAttribute('aria-expanded','true')}});
  document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>{mobileMenu?.setAttribute('hidden','');menuBtn?.setAttribute('aria-expanded','false')}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileMenu&&!mobileMenu.hasAttribute('hidden')){mobileMenu.setAttribute('hidden','');menuBtn?.setAttribute('aria-expanded','false')}});

  const ingredientName=document.getElementById('ingredientName');const ingredientCopy=document.getElementById('ingredientCopy');
  document.querySelectorAll('.ingredient').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.ingredient').forEach(item=>item.classList.remove('active'));btn.classList.add('active');if(ingredientName)ingredientName.textContent=btn.querySelector('b')?.textContent||'';if(ingredientCopy)ingredientCopy.textContent=btn.dataset.copy||''}));

  document.querySelectorAll('.sub-option').forEach(option=>option.addEventListener('click',()=>{document.querySelectorAll('.sub-option').forEach(item=>item.classList.remove('selected'));option.classList.add('selected');const input=option.querySelector('input');if(input)input.checked=true}));

  const mainProduct=document.querySelector('.main-product img');
  document.querySelectorAll('.thumb').forEach(thumb=>thumb.addEventListener('click',()=>{document.querySelectorAll('.thumb').forEach(item=>item.classList.remove('active'));thumb.classList.add('active');if(mainProduct&&thumb.dataset.img)mainProduct.src=thumb.dataset.img}));

  const bagLink=document.querySelector('.bag-link');if(bagLink)bagLink.href='cart.html';
  document.querySelector('.add-btn')?.addEventListener('click',()=>{
    const options=[...document.querySelectorAll('.sub-option')];
    const selectedIndex=Math.max(0,options.findIndex(option=>option.classList.contains('selected')||option.querySelector('input')?.checked));
    addToCart(CADENCE_KEYS[selectedIndex]||'monthly',1);showToast('Added to bag');
  });
}

function cartItemHTML(item){
  const options=Object.entries(CADENCES).map(([value,label])=>'<option value="'+value+'"'+(value===item.cadence?' selected':'')+'>'+label+'</option>').join('');
  return '<article class="cart-item" data-key="'+item.key+'">'+
    '<div class="cart-item-image"><img src="'+productImage(item.qty)+'" alt="SUNNYCELLS Metabolic Morning Blend"></div>'+
    '<div class="cart-item-body"><div class="cart-item-top"><div><p class="micro">Subscription · 30 servings per pouch</p><h3>'+PRODUCT.name+'</h3></div><button class="remove-item" type="button" data-remove="'+item.key+'">Remove</button></div>'+
    '<div class="cart-item-price"><strong>'+money(item.firstPrice)+'</strong><span>first order per pouch<br>then '+money(item.recurringPrice)+' per pouch</span></div>'+
    '<div class="cart-item-controls"><label><span>Delivery</span><select data-cadence="'+item.key+'">'+options+'</select></label><div class="qty-control" aria-label="Quantity"><button type="button" data-qty="decrease" aria-label="Decrease quantity">−</button><span>'+item.qty+'</span><button type="button" data-qty="increase" aria-label="Increase quantity">+</button></div></div></div>'+
    '<div class="cart-item-total"><span>Due today</span><b>'+money(item.firstPrice*item.qty)+'</b></div></article>';
}
function renderCart(){
  const root=document.getElementById('cartItems');if(!root)return;
  const cart=getCart();const sum=totals(cart);
  root.innerHTML=cart.length?cart.map(cartItemHTML).join(''):'<div class="empty-bag"><p class="micro">Nothing here yet</p><h3>YOUR BAG IS EMPTY.</h3><p>Start with Metabolic Morning Blend and choose the delivery schedule that fits your morning.</p><a class="btn btn-black" href="index.html#buy">SHOP METABOLIC MORNING BLEND</a></div>';
  const subtotal=document.getElementById('cartSubtotal');const total=document.getElementById('cartTotal');const renewal=document.getElementById('cartRenewal');const checkout=document.getElementById('checkoutButton');
  if(subtotal)subtotal.textContent=money(sum.today);if(total)total.textContent=money(sum.today);if(renewal)renewal.textContent=renewalText(cart);
  if(checkout){checkout.setAttribute('aria-disabled',String(!cart.length));checkout.tabIndex=cart.length?0:-1}
  root.querySelectorAll('[data-remove]').forEach(btn=>btn.addEventListener('click',()=>{removeItem(btn.dataset.remove);renderCart();showToast('Item removed')}));
  root.querySelectorAll('[data-cadence]').forEach(select=>select.addEventListener('change',()=>{changeCadence(select.dataset.cadence,select.value);renderCart();showToast('Delivery schedule updated')}));
  root.querySelectorAll('.cart-item').forEach(node=>{const key=node.dataset.key;node.querySelectorAll('[data-qty]').forEach(btn=>btn.addEventListener('click',()=>{const item=getCart().find(line=>line.key===key);if(!item)return;setQuantity(key,item.qty+(btn.dataset.qty==='increase'?1:-1));renderCart();showToast('Bag updated')}))});
}

function checkoutItemHTML(item){return '<article class="checkout-item"><div class="checkout-item-image"><img src="'+productImage(item.qty)+'" alt="SUNNYCELLS Metabolic Morning Blend"></div><div class="checkout-item-copy"><b>'+PRODUCT.name+'</b><span>'+CADENCES[item.cadence]+' · Qty '+item.qty+'</span><small>Then '+money(item.recurringPrice*item.qty)+' on this schedule</small></div><strong>'+money(item.firstPrice*item.qty)+'</strong></article>'}
function loadCheckout(form){const saved=parseJSON(localStorage.getItem(CHECKOUT_KEY),{});Object.entries(saved).forEach(([name,value])=>{const field=form.elements[name];if(field&&field.type!=='checkbox')field.value=value})}
function saveCheckout(form){const data={};['email','firstName','lastName','address','address2','city','region','postalCode','country'].forEach(name=>{if(form.elements[name])data[name]=form.elements[name].value});localStorage.setItem(CHECKOUT_KEY,JSON.stringify(data));return data}
function markField(field){const wrapper=field.closest('.commerce-field');if(wrapper)wrapper.classList.toggle('has-error',!field.validity.valid)}
function initCheckout(){
  const form=document.getElementById('checkoutForm');const root=document.getElementById('checkoutItems');if(!form||!root)return;
  const cart=getCart();const layout=document.getElementById('checkoutLayout');const empty=document.getElementById('checkoutEmpty');
  if(!cart.length){if(layout)layout.hidden=true;if(empty)empty.hidden=false;return}
  const sum=totals(cart);root.innerHTML=cart.map(checkoutItemHTML).join('');
  ['checkoutSubtotal','checkoutTotal','checkoutTotalMobile'].forEach(id=>{const node=document.getElementById(id);if(node)node.textContent=money(sum.today)});const renewal=document.getElementById('checkoutRenewal');if(renewal)renewal.textContent=renewalText(cart);
  loadCheckout(form);
  form.querySelectorAll('input').forEach(field=>{if(field.type!=='checkbox'){field.addEventListener('input',()=>{markField(field);saveCheckout(form)});field.addEventListener('blur',()=>markField(field))}});
  form.addEventListener('submit',event=>{
    event.preventDefault();form.querySelectorAll('input[required]').forEach(field=>{if(field.type!=='checkbox')markField(field)});
    const terms=form.elements.subscriptionTerms;terms?.closest('.terms-check')?.classList.toggle('invalid',!terms.checked);
    if(!form.checkValidity()){form.querySelector(':invalid')?.focus();showToast('Please complete the highlighted fields');return}
    const payload={cart,totals:sum,customer:saveCheckout(form)};
    if(window.SUNNYCELLS_PAYMENT&&typeof window.SUNNYCELLS_PAYMENT.checkout==='function'){
      const button=document.getElementById('checkoutSubmit');if(button){button.disabled=true;button.textContent='ONE MOMENT'}
      Promise.resolve(window.SUNNYCELLS_PAYMENT.checkout(payload)).catch(()=>{if(button){button.disabled=false;button.textContent='CONTINUE TO SECURE PAYMENT'}showToast('Payment could not start. Please try again.')});return;
    }
    const panel=document.getElementById('paymentPanel');const help=document.getElementById('paymentHelp');panel?.classList.add('needs-provider');if(help)help.textContent='Payment provider is not connected yet. Your contact and shipping details are saved locally. No card data has been requested.';panel?.scrollIntoView({behavior:'smooth',block:'center'});showToast('Checkout details saved');
  });
}

setYear();updateCartBadges();window.addEventListener('storage',event=>{if(event.key===CART_KEY)updateCartBadges()});
const page=document.body.dataset.page||'home';if(page==='cart')renderCart();else if(page==='checkout')initCheckout();else initLanding();
window.SunnycellsStore={getCart,saveCart,addToCart,setQuantity,removeItem,changeCadence,totals,product:PRODUCT,cadences:CADENCES,images:IMAGES};
})();