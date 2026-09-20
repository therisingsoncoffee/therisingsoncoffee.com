# Checkout Integration — Prepared, Disabled

## Current state
Checkout is deliberately disabled in `checkout-config.js`:

- `enabled` is `false`.
- `paymentLink` is empty.
- The page states that no orders or payments are being accepted.
- The browser script will only unlock the button when both an explicit enabled flag and a non-empty URL exist.

This prepares the static GitHub Pages site for a Stripe-hosted checkout link without collecting credentials or exposing a secret key in the repository.

## Required launch sequence
Do not reorder or skip these gates.

1. Verify the selected Original and Decaf products, sizes, costs, MOQ, production time, shipping and replacement terms.
2. Approve retail prices, shipping charges, tax configuration and customer-facing refund/replacement terms.
3. Complete business identity, Stripe verification and payout-bank connection outside the repository.
4. Create products/prices and Stripe-hosted payment link(s) in Stripe.
5. Keep Stripe in test mode and perform a complete test order, confirmation, notification and fulfillment-record test.
6. Record the test result and approved live payment link without committing secret keys.
7. Obtain explicit owner authorization for live checkout.
8. Only then set `paymentLink` to the verified Stripe-hosted URL and `enabled` to `true` in one reviewed change.
9. Re-test desktop/mobile, success/cancel behavior and order notification after deployment.

## Security rule
Never place Stripe secret keys, webhook signing secrets, bank details, tax IDs or identity documents in this repository. A Stripe Payment Link is a public URL; account credentials are not.

## Rollback
Set `enabled` to `false` and deploy. The button immediately returns to the locked state even if a payment link remains configured.
