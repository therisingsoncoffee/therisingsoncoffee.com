const form=document.getElementById('foundingForm');
const status=document.getElementById('formStatus');
if(form&&status){
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
    if(button){button.disabled=false;button.textContent='Reserve free — no purchase required';}
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
