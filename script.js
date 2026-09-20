const form=document.getElementById('foundingForm');
const status=document.getElementById('formStatus');
if(form&&status){
  form.addEventListener('submit',()=>{
    status.textContent='Sending your Founding 40 signup…';
    const button=form.querySelector('button[type="submit"]');
    if(button){button.disabled=true;button.textContent='Sending…';}
  });
}
