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
- Founding 40 first-customer operating playbook, reservation funnel, campaign guardrails and tracking fields
- Permanent hosted mailbox purchased
- hello@therisingsoncoffee.com mailbox created
- Incoming IMAP tested successfully
- Outgoing SMTP tested successfully
- External send-and-reply path tested successfully
- Live sender-address test delivered to Gmail from hello@therisingsoncoffee.com (2026-09-20)
- Gmail authentication results passed SPF, DKIM (selector `default`) and DMARC for the live sender test (2026-09-20)
- Public SPF and DMARC TXT records resolved through Google Public DNS (2026-09-20)
- Webmail sender identity set to `Rising Son Coffee` with a minimal brand signature (2026-09-20)
- Founding 40 FormSubmit activation completed and a labeled test submission delivered to hello@therisingsoncoffee.com (2026-09-20)
- HTTP apex serves from GitHub Pages and HTTP www redirects to apex (verified 2026-09-20)
- Keyboard-accessible Founding 40 choices and visible focus states
- Explicit signup privacy disclosure linked beside the form
- Checkout integration safety gate prepared with checkout disabled and no payment URL
- Supplier outreach evidence tracker prepared
- Initial no-spend supplier inquiries sent from hello@therisingsoncoffee.com to Liberty Beans Coffee and La Vela Coffee Roasters (2026-09-20)
- Launch assortment defined conceptually as Original + Decaf; whole bean/ground are variants subject to supplier capability/economics
- Value-first product economics framework established, including delivered $/oz and contribution analysis
- Subscription-ready economics framework established; no discount/savings claim until verified
- Supplier due-diligence framework expanded for direct fulfillment, variants, recurring orders, traceability and exception policies
- Order/fulfillment SOP expanded for subscription, metadata, AI/human service and professional fulfillment
- Customer/commerce data architecture defined from Founding 40 through order, fulfillment, service, reorder and subscription
- Founding 40 public messaging aligned around free reservation -> verified offer -> qualifying purchase -> activated Founding Customer
- Planned numbered tumbler documented as a pending, non-guaranteed Founding benefit and separate acquisition expense
- Founding 40 reservation campaign messaging and advertising guardrails prepared

## YELLOW — waiting / verification
- HTTPS availability and HTTP-to-HTTPS redirect
- GitHub HTTPS certificate / Enforce HTTPS
- Supplier quote/product facts
- Product samples / sensory fit against intended Original and Decaf profiles
- Direct/private-label fulfillment capability and complete delivered costs
- Product unit economics, bag-size optimization and final retail pricing
- Subscription cadence/discount/shipping offer (requires verified economics; need not launch on day one)
- Refund/replacement public terms (requires supplier policy/economics)
- Legal entity / LLC formation
- EIN
- Stripe business verification and bank connection
- Checkout test
- Social-sharing artwork and final owner art-direction approval
- Final desktop launch QA

## RESERVATION CAMPAIGN STATUS
- Copy/offer structure: READY
- Form activation/delivery: proven
- Live mobile reservation submission -> custom Rising Son confirmation page: proven 2026-09-20
- Public mobile page load: proven 2026-09-20
- Checkout/payment: intentionally disabled
- Founding 40 reservation funnel: GREEN / ready to advertise
- Advertising may collect free reservations only; coffee orders/payments remain locked until the separate commerce launch gates pass

## RED — do not activate yet
- Do not accept coffee orders or payments
- Do not publish unverified price, origin/roast, bag size, inventory, shipping time, fulfillment, savings or subscription claims
- Do not display a Founding 40 claimed-spots number without a maintained data source
- Do not plan owner-home coffee storage/packing as the launch fulfillment method
- Do not let AI/service automation authorize exceptions outside approved policy/financial limits

## Locked working decisions
- Launch coffee assortment: Original + Decaf only
- Whole bean and ground offered when supplier capability/economics make both practical
- Product philosophy: more good coffee for your money; quality threshold first, then optimize quantity/value and sustainable margin
- Bag size is an economics/value variable, not predetermined
- Decaf should resemble Original where quality permits; quality takes priority over forced similarity
- Launch fulfillment should be supplier-direct or another professional arrangement
- Subscription architecture is desired and should provide a real economic customer benefit; launch timing remains economics-dependent
- Brand/customer-service voice: polished independent company with owner personality underneath
- Routine service may become AI-handled within defined authority; unusual/high-risk exceptions escalate
- Metadata/data continuity is a core operating principle, with privacy minimization
- Checkout remains disabled until launch gates are intentionally cleared

## Checkout architecture
Planned path:
Rising Son product page -> Stripe-hosted checkout -> payment confirmation -> structured order record -> professional/supplier fulfillment -> tracking -> delivery -> follow-up/reorder/subscription data.

Stripe is selected as the intended initial processor, but live activation is intentionally deferred until business identity/tax setup and supplier economics are ready.

## Remaining launch gates
1. HTTPS healthy and HTTP redirects to HTTPS
2. Supplier product facts and samples verified
3. Professional/direct fulfillment method and complete delivered costs verified
4. Original/Decaf product choices approved
5. Bag size, delivered $/oz, retail price and contribution economics approved
6. Shipping approach approved
7. Refund/replacement terms approved
8. Business structure + EIN completed as appropriate
9. Stripe activated and bank connected
10. Checkout + order notification + fulfillment test passed end to end
11. Human art-direction/design pass
12. Final desktop QA
13. Final launch authorization

Subscription is architecture-ready but is not a blocker to initial one-time-purchase launch unless owner later makes it a day-one requirement.

## Work-mode handoff priorities
When using Work mode, batch tasks to minimize user interruptions:
- Audit repository and deployed site for functional/accessibility/mobile issues.
- Resolve/verify HTTPS and Founding 40 redirect behavior where possible without owner action.
- Monitor supplier responses and build a sourced comparison; never infer missing commercial terms.
- Build unit-economics scenarios immediately from verified supplier data.
- Evaluate samples against the documented sensory target when evidence/user tasting becomes available.
- Prepare checkout integration in disabled/test state until launch gates are met.
- Maintain the customer/order data architecture and avoid unnecessary vendor lock-in.
- Audit DNS/HTTPS/email authentication and report only verified state.
- Perform final copy/design QA with a handmade, independent-coffee-company feel; avoid generic AI/SaaS visual language.
- Produce one consolidated exception list of items that genuinely require the owner's identity, payment, legal choice or authorization.

## Owner-required items
Reserve interruptions for:
- LLC/legal formation and filing/payment
- EIN application identity questions/attestation
- supplier sample/order/contract acceptance or payment
- Stripe identity/business/bank verification
- any new paid service
- final product/bag-size/pricing/shipping approval
- final public refund/subscription offer approval
- final launch authorization

The maintained consolidated list is `docs/owner-actions.md`.
