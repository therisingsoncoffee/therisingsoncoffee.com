# Rising Son Coffee — Launch Readiness

Last structured: 2026-09-20

## GREEN — completed / proven
- Public GitHub repository and GitHub Pages deployment pipeline
- Custom domain committed via CNAME
- Four GitHub Pages apex A records entered in Porkbun
- www CNAME changed to therisingsoncoffee.github.io
- Responsive launch landing page
- Founding 40 interest form code and thank-you page
- Privacy and terms launch pages
- Sitemap, robots.txt and custom 404
- Founding 40 operating playbook and tracking template
- Permanent hosted mailbox purchased
- hello@therisingsoncoffee.com mailbox created
- Incoming IMAP tested successfully
- Outgoing SMTP tested successfully
- External send-and-reply path tested successfully
- HTTP apex serves from GitHub Pages and HTTP www redirects to apex (verified 2026-09-20)
- Keyboard-accessible Founding 40 choices and visible focus states
- Explicit signup privacy disclosure linked beside the form
- Checkout integration safety gate prepared with checkout disabled and no payment URL
- Supplier outreach evidence tracker prepared

## YELLOW — waiting / verification
- Public DNS propagation for apex and www
- GitHub HTTPS certificate / Enforce HTTPS
- Live Founding 40 form end-to-end test after domain resolves
- Form provider first-use activation if requested
- Porkbun DKIM + DMARC: configuration requested; last observed status PENDING
- Supplier quote/product facts
- Product unit economics and final retail pricing
- Legal entity choice / LLC formation decision
- EIN
- Stripe business verification and bank connection
- Checkout test
- Social-sharing artwork and final owner art-direction approval

## RED — do not activate yet
- Do not accept coffee orders or payments
- Do not publish unverified price, origin/roast, bag size, inventory, shipping time or fulfillment promises
- Do not display a Founding 40 claimed-spots number without a maintained data source

## Checkout architecture
Planned path:
Rising Son product page -> Stripe-hosted checkout -> payment confirmation -> order notification -> fulfillment record.

Stripe is selected as the intended initial processor, but live activation is intentionally deferred until business identity/tax setup and supplier economics are ready.

## Remaining launch gates
1. DNS + HTTPS healthy
2. Founding 40 form proven
3. DKIM/DMARC healthy
4. Supplier facts verified
5. Unit economics approved
6. Business structure + EIN completed as appropriate
7. Stripe activated and bank connected
8. Checkout test passed
9. Human art-direction/design pass
10. Mobile/desktop QA
11. Launch approval

## Work-mode handoff priorities
When using Work mode, batch tasks to minimize user interruptions:
- Audit repository and deployed site for functional/accessibility/mobile issues.
- Research supplier candidates/quotes and build a sourced comparison; never infer missing commercial terms.
- Build unit-economics scenarios from verified supplier data.
- Prepare checkout integration in disabled/test state until launch gates are met.
- Audit DNS/HTTPS/email authentication and report only verified state.
- Perform final copy/design QA with a handmade, independent-coffee-company feel; avoid generic AI/SaaS visual language.
- Produce one consolidated exception list of items that genuinely require the owner's identity, payment, legal choice or authorization.

## Owner-required items
Reserve interruptions for:
- legal entity/LLC decision and filing
- EIN application identity questions
- Stripe identity/business/bank verification
- supplier contract acceptance/payment
- any new paid service
- final product/pricing approval
- final launch authorization

The maintained consolidated list is `docs/owner-actions.md`.
