const form=document.getElementById('foundingForm');
const status=document.getElementById('formStatus');
if(form&&status){
  // Store attribution only in the reservation submission after the visitor consents.
  const params=new URLSearchParams(window.location.search);
  for(const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){
    const field=form.elements.namedItem(key);
    if(field && 'value' in field) field.value=(params.get(key)||'').slice(0,100);
  }
  const referrerField=form.elements.namedItem('referrer_domain');
  if(referrerField && 'value' in referrerField && document.referrer){
    try {
      const origin=new URL(document.referrer);
      if(origin.hostname!==window.location.hostname) referrerField.value=origin.hostname.slice(0,100);
    } catch(_) {}
  }

  form.addEventListener('submit',()=>{
    status.textContent='Submitting… Please wait for the confirmation page before closing this screen.';
    const button=form.querySelector('button[type="submit"]');
    if(button){button.disabled=true;button.textContent='Submitting — please wait…';}

    // A successful FormSubmit request normally redirects to /thanks.html. If a
    // browser/webview submits successfully but fails to follow that redirect,
    // don't leave the customer staring at an apparently frozen form forever.
    window.setTimeout(()=>{
      if(document.visibilityState==='visible'){
        status.innerHTML='Still on this page? Your reservation may already have been received. <a href="/thanks.html">Continue to the confirmation page</a> rather than submitting again.';
        if(button){button.disabled=false;button.textContent='Submit again only if needed';}
      }
    },8000);
  });

  window.addEventListener('pageshow',()=>{
    const button=form.querySelector('button[type="submit"]');
    if(button){button.disabled=false;button.textContent=button.dataset.defaultLabel||'Reserve my spot — free';}
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
