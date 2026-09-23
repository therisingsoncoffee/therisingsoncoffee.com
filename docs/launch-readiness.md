# Rising Son Coffee — Launch Readiness

Last structured: 2026-09-23

## GREEN — completed / proven
- Custom-domain HTTPS enabled in GitHub Pages by owner on 2026-09-22; independently reverified 2026-09-23: HTTPS apex and `/founding40/` returned 200, HTTP apex and HTTPS `www` returned 301 to HTTPS apex, and robots/sitemap returned 200.
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
- Expanded private-label/direct-fulfillment inquiries sent from hello@therisingsoncoffee.com to 11 suppliers on 2026-09-23: Liberty Beans, La Vela, Koffee Kult, Temecula Coffee Roasters, CoffeeAM, Luna Gourmet, Roastify, Brandywine Coffee Roasters, Eldorado Coffee, Capital City Roasters and Ghost Roast
- Written FDACS classification request sent from hello@therisingsoncoffee.com to the official Division of Food Safety address on 2026-09-23 for the exact supplier-roasted, Rising Son-branded, supplier-packaged/stored/direct-shipped model; response pending
- Launch assortment defined conceptually as Original + Decaf; whole bean/ground are variants subject to supplier capability/economics
- Value-first product economics framework established, including delivered $/oz and contribution analysis
- Subscription-ready economics framework established; no discount/savings claim until verified
- Supplier due-diligence framework expanded for direct fulfillment, variants, recurring orders, traceability and exception policies
- Order/fulfillment SOP expanded for subscription, metadata, AI/human service and professional fulfillment
- Customer/commerce data architecture defined from Founding 40 through order, fulfillment, service, reorder and subscription
- Founding 40 public messaging aligned around free reservation -> verified offer -> qualifying purchase -> activated Founding Customer
- Planned numbered tumbler documented as a pending, non-guaranteed Founding benefit and separate acquisition expense
- Founding 40 reservation campaign messaging and advertising guardrails prepared
- Dedicated /founding40/ acquisition page and /story/ brand-story page implemented
- Mobile primary navigation made persistently visible
- Homepage reservation form aligned with dedicated Founding 40 interest-level qualification (Interested / Very Interested / First Shot) (2026-09-20)
- Privacy and Terms CTAs aligned to the dedicated Founding 40 page; Terms corrected to current reservation -> verified offer -> qualifying purchase activation model (2026-09-20)
- Optional Founding 40 product-intelligence survey implemented on homepage and dedicated acquisition page; owner confirmed live mobile rendering looks good (2026-09-21)
- Reservation-intelligence decision framework documented for demand, price/size, decision drivers, acquisition, later conversion and retention analysis (2026-09-21)
- Privacy notice expanded to disclose the detailed optional market-research fields and their use in product/size/pricing/fulfillment launch decisions (2026-09-22)

## SEO and domain check — 2026-09-23
- Published sitemap cleanup: current modification dates for the legal pages; removed change frequency and priority hints that crawlers do not use.
- Corrected Organization structured data: the promotional social card is not asserted as a business logo. Home, Founding 40 and Story JSON-LD parse successfully.
- A repository scan found no broken local HTML asset or navigation paths.
- Search indexing and Search Console verification remain unproven. Do not report a search ranking or indexed-page count until measured.
- Live endpoint verification on 2026-09-23 confirmed the intended canonical host and redirects without changing DNS: HTTPS apex `200`; HTTPS `www` `301` to HTTPS apex; HTTP apex `301` to HTTPS apex; `/founding40/`, `/sitemap.xml` and `/robots.txt` all `200`. Repository canonicals for home, Founding 40, Privacy and Terms point to the HTTPS apex host. Preserve working MX/SPF/DKIM records.

## YELLOW — waiting / verification
- Customer-side Founding 40 confirmation redirect/fallback after one real submission delivered successfully by email but did not visibly redirect; fallback deployed, controlled retest deferred by owner
- Expanded survey end-to-end field rendering in delivered FormSubmit email, especially multi-select `decision_factors[]`; controlled test deferred by owner
- Supplier quote/product facts; 11 expanded inquiries were sent on 2026-09-23, and a targeted connected-inbox audit found no inbound reply from those supplier domains yet
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
- Final browser-based desktop launch QA (repository/static QA and endpoint verification completed; visual desktop review remains)
- Written FDACS classification for the exact Florida e-commerce/private-label/supplier-direct model, including whether Rising Son needs a permit and any precise permit/fee; official request sent 2026-09-23, response pending
- Liability-insurance decision: no universal legal mandate should be claimed without controlling authority; separately resolve legal requirement, supplier/contract requirement and prudent products/completed-operations coverage before paid orders

## RESERVATION CAMPAIGN STATUS
- Copy/offer structure: READY
- Form activation/backend delivery: proven
- Public mobile page load and expanded survey rendering: owner-observed and proven 2026-09-21
- A prior live mobile reservation reached the custom Rising Son confirmation page on 2026-09-20; a later real reservation was delivered by email but the customer reported no visible post-submit confirmation, so redirect UX remains YELLOW pending retest
- Checkout/payment: intentionally disabled
- Founding 40 reservation funnel: advertising-capable for free reservations; monitor redirect UX and avoid asking already-delivered prospects to resubmit
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
1. Supplier product facts and samples verified
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
- Monitor replies from all 11 contacted suppliers and build a sourced comparison; never infer missing commercial terms.
- Monitor the written FDACS classification request and preserve the agency response as compliance evidence.
- Build unit-economics scenarios immediately from verified supplier data.
- Evaluate samples against the documented sensory target when evidence/user tasting becomes available.
- Prepare checkout integration in disabled/test state until launch gates are met.
- Maintain the customer/order data architecture and avoid unnecessary vendor lock-in.
- Audit DNS/HTTPS/email authentication and report only verified state.
- Perform final copy/design QA with a handmade, independent-coffee-company feel; avoid generic AI/SaaS visual language.
- Keep homepage and dedicated Founding 40 form fields semantically aligned so CRM reporting does not split equivalent intent data.
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
