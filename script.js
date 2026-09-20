const form=document.getElementById('foundingForm');
const status=document.getElementById('formStatus');
if(form&&status){
  form.addEventListener('submit',()=>{
    status.textContent='Sending your Founding 40 signup…';
    const button=form.querySelector('button[type="submit"]');
    if(button){button.disabled=true;button.textContent='Sending…';}
  });

  window.addEventListener('pageshow',()=>{
    const button=form.querySelector('button[type="submit"]');
    if(button){button.disabled=false;button.textContent='Join the feedback list';}
    status.textContent='';
  });
}

const checkoutButton=document.getElementById('checkoutButton');
const checkoutStatus=document.getElementById('checkoutStatus');
const checkoutConfig=window.RISING_SON_CHECKOUT;
if(checkoutButton&&checkoutStatus&&checkoutConfig?.enabled===true&&checkoutConfig.paymentLink){
  checkoutButton.disabled=false;
  checkoutButton.textContent='Continue to secure checkout';
  checkoutStatus.textContent='You will continue to Stripe to complete your order.';
  checkoutButton.addEventListener('click',()=>window.location.assign(checkoutConfig.paymentLink));
}
