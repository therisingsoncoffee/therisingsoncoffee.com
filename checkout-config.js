/*
 * Prelaunch safety gate. Keep enabled false until every launch gate is complete,
 * the owner explicitly approves live checkout, and a verified Stripe-hosted URL
 * replaces the empty paymentLink value.
 */
window.RISING_SON_CHECKOUT = Object.freeze({
  enabled: false,
  paymentLink: ''
});
