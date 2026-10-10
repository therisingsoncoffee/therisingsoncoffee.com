# Rising Son Coffee — Launch Readiness

Last structured: 2026-10-09

## GREEN — completed / proven
- Custom-domain HTTPS enabled in GitHub Pages by owner on 2026-09-22; independently reverified 2026-09-27: HTTPS apex, `/founding40/`, `/robots.txt` and `/sitemap.xml` returned `200`; HTTP apex and HTTPS `www` resolved to the HTTPS apex with valid certificate verification.
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
- Checkout integration safety gate prepared and reverified 2026-09-27: `checkout-config.js` has `enabled: false` and an empty payment link; the public checkout remains disabled
- Supplier outreach evidence tracker prepared
- Initial no-spend supplier inquiries sent from hello@therisingsoncoffee.com to Liberty Beans Coffee and La Vela Coffee Roasters (2026-09-20)
- Expanded private-label/direct-fulfillment inquiries sent from hello@therisingsoncoffee.com to 11 suppliers on 2026-09-23: Liberty Beans, La Vela, Koffee Kult, Temecula Coffee Roasters, CoffeeAM, Luna Gourmet, Roastify, Brandywine Coffee Roasters, Eldorado Coffee, Capital City Roasters and Ghost Roast
- Written FDACS classification request sent from hello@therisingsoncoffee.com to the official Division of Food Safety address on 2026-09-23 for the exact supplier-roasted, Rising Son-branded, supplier-packaged/stored/direct-shipped model; FDACS acknowledged it and requested county/ZIP, but no classification has been issued
- Launch assortment defined conceptually as Original + Decaf; whole bean/ground are variants subject to supplier capability/economics
- Value-first product economics framework established, including delivered $/oz and contribution analysis; shipping-allocation contribution formulas were corrected and independently documented on 2026-09-24
- Drive supplier/economics tracker reconciled through 2026-10-07: contacted statuses corrected; Old Chicago and Matchbox Coffee added as public-screen contingencies; Roastify added as a contacted public-capability/economics screen; Supliful, Legacy Farms, Black Ink Coffee and Joe's Garage Coffee added as research-stage screens; Capital City added as a contacted but unresolved program screen; and JavaMania Partner Connect added as a research-stage public-capability/economics screen. JavaMania publicly advertises no recurring/setup fee, custom-label blind fulfillment, one-business-day handling and a 50%-of-retail coffee-cost rule; its illustrative $9.50 coffee plus public average shipping screens at $16.20 for one bag, $28.80 for two and $38.30 for three before omitted costs. Capital City's public no-MOQ dropship terms conflict with its typical approximately 400-bag launch model. Black Ink's standard program requires a 25-bag monthly billed minimum, $150 onboarding, a one-year commitment, customer-supplied pre-labeled bags and separate postage/add-ons. Joe's Garage publicly identifies its Kent, Washington facility, claims FDA registration/approval and displays SQF/AIB and other certification marks, but no current certificates, scope/expiration evidence or complete commercial quote has been retained. These public figures and claims are not Rising Son quotes or verified compliance evidence. None of these suppliers is a verified primary or backup
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

## SEO and domain check — 2026-09-29
- Published sitemap cleanup: current modification dates for the legal pages; removed change frequency and priority hints that crawlers do not use.
- Corrected Organization structured data: the promotional social card is not asserted as a business logo. Home, Founding 40 and Story JSON-LD parse successfully.
- A repository scan found no broken local HTML asset or navigation paths.
- Search indexing and Search Console verification remain unproven. Do not report a search ranking or indexed-page count until measured.
- Direct browser verification on 2026-09-29 confirmed the HTTPS apex and `/founding40/` loaded successfully; HTTPS `www` and HTTP apex resolved to the HTTPS apex. The public homepage visibly retained the disabled checkout button and no-payment message. The current browser blocked direct `.txt`/`.xml` rendering, so the last independent live `200` verification for `/robots.txt` and `/sitemap.xml` remains 2026-09-27; their repository contents remain valid. Live Home and Founding 40 pages and repository canonicals use the HTTPS apex host. No DNS or mail records were changed; preserve working MX/SPF/DKIM.

## Launch infrastructure check — 2026-10-06
- Browser verification confirmed that the HTTPS apex homepage and `/founding40/` render successfully.
- HTTP apex and HTTPS `www` redirect to the HTTPS apex. The live homepage and Founding 40 canonicals point to the correct apex URLs.
- The public homepage still shows a disabled “Checkout Locked” control. Repository `checkout-config.js` remains `enabled: false` with an empty payment link.
- Direct browser access to `/robots.txt` and `/sitemap.xml` was blocked by the current browser client, so their last independent live `200` verification remains 2026-09-27. Repository copies remain valid and reference the HTTPS apex.
- `CNAME` remains `therisingsoncoffee.com`. No DNS, MX, SPF or DKIM records were changed.
- Automation capacity review on 2026-10-06 found four enabled core tasks (Launch Ops, Supplier/Product, CRM and Finance). Growth remains paused, so capacity exists and no additional task was paused or swapped.

## YELLOW — waiting / verification
- Mail visibility: rechecked 2026-09-27; a targeted recent-message search found no FDACS, CoffeeAM, Temecula, PPIB/insurance or delivery-failure messages in the connected Gmail account. The connector accesses only `therisingsoncoffee@gmail.com`, while `hello@therisingsoncoffee.com` is a distinct Porkbun hosted IMAP mailbox that appears in the owner's Gmail phone app. The hosted mailbox has supplier and FDACS replies absent from connector search. Set a Porkbun webmail filter (Settings > Filters > Create) that keeps messages in hosted inbox and forwards copies to Gmail; then verify with a unique inbound test and confirm full original sender/attachments are preserved. Do not change MX/SPF/DKIM or redirect ownership. Porkbun documents this at https://kb.porkbun.com/article/290-how-to-redirect-a-porkbun-hosted-email-account-to-another-email-address . Attempted webmail access in the agent browser on 2026-09-23 returned 403 Forbidden, so filter is NOT configured or tested. Gmail POP fetching is being phased out; do not use it as the durable solution. Existing hosted messages need separate review/backfill.
- FDACS replied asking for county and ZIP. Owner supplied 33325 (Broward County) on 2026-09-23; a reply from the hosted mailbox remained unverified as of 2026-09-27. This ZIP is current operating locality, not an LLC principal-office street address.
- Customer-side Founding 40 confirmation redirect/fallback after one real submission delivered successfully by email but did not visibly redirect; fallback deployed, controlled retest deferred by owner
- Expanded survey end-to-end field rendering in delivered FormSubmit email, especially multi-select `decision_factors[]`; controlled test deferred by owner
- Supplier quote/product facts; 11 expanded inquiries were sent on 2026-09-23. Owner's phone screenshot later showed replies from CoffeeAM and Temecula plus an undelivered-mail notice in the hosted mailbox, but these were absent from the connected Gmail connector and their full contents remain unread. Matchbox Coffee remains an uncontacted public-capability contingency. Roastify's public screen establishes direct-fulfillment architecture and illustrative costs, but it is not a Rising Son quote; it also publicly requires a legal business name and valid non-PO-box business address for the label. Capital City's official pages conflict between a no-MOQ dropship offer and a typical approximately 400-bag private-label launch model, so its program and economics require written reconciliation before use. Black Ink's public 25-bag monthly minimum, $150 onboarding, one-year commitment, customer-supplied pre-labeled packaging and separate postage make it a poor immediate low-volume fit unless written pilot terms materially differ. Across all candidates, final Original/Decaf availability, exact program eligibility, food-safety and allergen controls, traceability/recall, COI/additional-insured terms, indemnity, label responsibility, replacements and peak timing remain unverified. Do not say there were no replies overall
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
- Liability-insurance decision: no universal legal mandate should be claimed without controlling authority; separately resolve legal requirement, supplier/contract requirement and prudent products/completed-operations coverage before paid orders. A nonbinding PPIB inquiry was submitted 2026-09-23; no response was visible in the connected Gmail search on 2026-09-27, and eligibility, limits, exclusions, deductibles and actual pricing remain pending.

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
- Address privacy is a launch constraint: do not use the owner's residential address for the LLC principal office, mailing address, registered agent or public-facing product label where a legitimate alternative is permitted; flag any step that could publish it before proceeding

## Checkout architecture
Planned path:
Rising Son product page -> Stripe-hosted checkout -> payment confirmation -> structured order record -> professional/supplier fulfillment -> tracking -> delivery -> follow-up/reorder/subscription data.

Stripe is selected as the intended initial processor, but live activation is intentionally deferred until business identity/tax setup and supplier economics are ready.

## Remaining launch gates
1. Supplier product facts, food-safety/recall/lot-traceability evidence and samples verified
2. Written FDACS classification obtained; any required permit and exact fee/renewal identified
3. Final compliant label and responsibility allocation verified
4. Product/general-liability requirement separated from supplier/contract requirements and prudent coverage; insurance decision approved
5. Professional/direct fulfillment method and complete delivered costs verified
6. Original/Decaf product choices approved
7. Bag size, delivered $/oz, retail price and contribution economics approved
8. Shipping approach approved
9. Refund/replacement terms approved
10. Business structure + EIN completed as appropriate
11. Stripe activated and bank connected
12. Checkout + order notification + fulfillment test passed end to end
13. Human art-direction/design pass
14. Final desktop QA
15. Final launch authorization

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
- LLC/legal formation and filing/payment, including approval of a legitimate non-residential public-record address solution
- EIN application identity questions/attestation
- supplier sample/order/contract acceptance or payment
- Stripe identity/business/bank verification
- any new paid service
- final product/bag-size/pricing/shipping approval
- final public refund/subscription offer approval
- final launch authorization

The maintained consolidated list is `docs/owner-actions.md`.


## Launch operations check — 2026-10-09
- GitHub source verification confirmed `CNAME`, repository `robots.txt`, `sitemap.xml`, homepage and Founding 40 canonicals remain correctly linked to the HTTPS apex.
- Repository `checkout-config.js` remains `enabled: false` with an empty payment link. The homepage retains its disabled checkout control and no-payment message. No payment path or commercial gate was activated.
- The external public-site checker could not access the apex, Founding 40, HTTP, `www`, robots or sitemap URLs during this run. This is not evidence of an outage; live HTTPS/redirect status remains last independently verified on 2026-10-06, while repository source integrity was verified today.
- TiA Coffee is now reflected across supplier and finance tracking as a strong research-stage prospect. Public—not quoted—terms indicate supplier roasting/packing, branded bags, whole-bean/ground formats, Swiss-Water Decaf, direct-to-consumer fulfillment and a 50 lb minimum per house blend. Its advertised 50 lb production reference of roughly $585–$625 (about $8.85–$9.45 per 12 oz bag) excludes labels, freight, handling, customer shipping and other launch costs. Separate Original/Decaf minimum exposure, warehousing, per-order handling, 1/2/3-bag shipping, samples, compliance evidence, traceability/recall, COI, indemnity and label-responsibility terms remain unresolved. TiA is not a verified primary or backup.
- Automation review found three enabled, distinct core tasks: Launch Ops, Supplier/Product and Finance. Existing unused capacity means no task was paused, resumed or swapped.
- No DNS, MX, SPF or DKIM record was changed. Checkout remains locked.

## Launch operations check — 2026-10-08
- GitHub source verification confirmed `CNAME`, repository `robots.txt`, `sitemap.xml`, homepage and Founding 40 canonicals remain correctly linked to the HTTPS apex.
- Repository `checkout-config.js` remains `enabled: false` with an empty payment link. No payment path or commercial gate was activated.
- The external public-site checker again could not access the apex, Founding 40, HTTP, `www`, robots or sitemap URLs. This is not evidence of an outage; live HTTPS/redirect status remains last independently verified on 2026-10-06, while repository source integrity was verified today.
- JavaMania Partner Connect is now reflected in supplier and finance tracking as a strong public-capability prospect. Its public no-fee architecture and multi-bag cost screen are promising, but the figures are not a Rising Son quote. Exact Original/Decaf eligibility, samples, destination costs, legal facility/entities, state/FDA documentary evidence, food-safety/allergen controls, lot traceability, recall procedures, COI/additional-insured terms, indemnity, label responsibility, replacements and subscriptions remain UNKNOWN. JavaMania is not a verified primary or backup.
- Four core operational tasks remain enabled and distinct. Existing unused capacity means no task was paused, resumed or swapped.
- No DNS, MX, SPF or DKIM record was changed. Checkout remains locked.

## Launch operations check — 2026-10-07
- GitHub source verification confirmed `CNAME` remains `therisingsoncoffee.com`; repository `robots.txt`, `sitemap.xml`, homepage and Founding 40 canonicals remain apex-linked.
- Repository `checkout-config.js` remains `enabled: false` with an empty payment link, and the homepage retains its disabled checkout control and no-payment message.
- The external public-site checker could not access the apex, Founding 40, HTTP or `www` URLs during this run. This is not evidence of an outage; live HTTPS/redirect status therefore remains last independently verified on 2026-10-06 rather than being falsely re-certified today.
- Joe's Garage Coffee now has stronger public facility/compliance evidence: the company identifies a Kent, Washington facility, publicly claims FDA registration/approval, displays SQF/AIB and other certification marks, advertises U.S.-focused service and Net 30 only after credit approval. Current certificates, registration number, audit scope/grade, expiration dates, exact Original/Decaf coverage, low-volume blind fulfillment, complete costs, COI, traceability/recall and label-responsibility evidence remain UNKNOWN. It is a research-stage contingency, not a verified backup.
- Four core operational tasks remain enabled and distinct (Launch Ops, Supplier/Product, CRM and Finance). Available capacity exists because Growth remains paused; no task was paused, resumed or swapped.
- No DNS, MX, SPF or DKIM record was changed. No commercial gate was cleared.

## Launch operations check — 2026-10-02
- Live browser verification succeeded for the HTTPS apex homepage and `/founding40/`; both rendered normally and retained the correct HTTPS-apex canonical.
- HTTPS `www` and HTTP apex both resolved to `https://therisingsoncoffee.com/`.
- The browser again blocked direct navigation to `robots.txt` before `sitemap.xml` could be checked in the same run; this is a client-side limitation, not evidence of a site outage. Repository copies remain present, internally valid and apex-linked. Their latest independent live `200` verification remains 2026-09-27.
- Checkout remains visibly locked on the public homepage. Repository configuration remains `enabled: false` with an empty payment link.
- `CNAME` remains `therisingsoncoffee.com`; homepage and Founding 40 repository canonicals remain on the HTTPS apex. No DNS, MX, SPF or DKIM setting was changed.
- Roastify's public program evidence was incorporated into supplier and finance tracking. Public reference economics are $12 per 12 oz bag plus $4.50 first-item shipping and $1.25 per additional item, with a $15/month Base or $49/month Pro plan. These are not Rising Son quotes and omit processing, insurance, refunds/replacements and Founding 40 costs. One-bag economics remain tight.
- Roastify's label requirements create a sequencing dependency: a legal business name and valid non-PO-box business address must be resolved before production labels can be finalized. This does not authorize LLC formation or choosing an address.
- Automation review found four enabled core tasks: Launch Ops, Supplier/Product, Finance and CRM. Founding 40 Growth is already disabled after its 2026-10-02 run, leaving capacity free; no additional task was paused or swapped because no higher-priority temporary task is currently blocked solely by capacity.
- No commercial gate was cleared. Written FDACS classification, hosted-mailbox evidence, supplier quote/compliance evidence, insurance decision, LLC/EIN, label address, payments setup, commerce testing and owner authorization remain pending.


## Launch operations check — 2026-10-10
- Direct live-browser verification succeeded for the HTTPS apex homepage and `/founding40/`; both rendered normally and published the correct HTTPS-apex canonical.
- HTTP apex and HTTPS `www` both redirected to `https://therisingsoncoffee.com/`.
- Direct browser navigation to `robots.txt` and `sitemap.xml` was blocked by the browser client. This is not evidence of an outage; repository copies remain present, internally valid and apex-linked, while their latest independent live `200` verification remains 2026-09-27.
- Repository `checkout-config.js` remains `enabled: false` with an empty payment link. The live homepage visibly shows “Checkout Locked” and “No orders or payments are being accepted.” No payment path or commercial gate was activated.
- Javabooch is now reflected in supplier due diligence as an inquiry-ready, fulfillment-capable research prospect. Public claims support supplier-controlled sourcing/roasting/packing, whole-bean or ground retail bags from 8 oz to 5 lb, and Jacksonville direct-to-consumer pick/pack. Exact Original fit, private-label Decaf, unit/setup/label/storage/fulfillment/shipping economics, numeric MOQ, samples, legal facility identity, food-license/FDA evidence, SQF/HACCP documentation, traceability/recall, COI, additional-insured terms, indemnity and label/recall allocation remain UNKNOWN. Its “FDA-certified” wording requires clarification because facility registration is not FDA approval or certification. Javabooch is not a verified primary or backup.
- Automation review found three enabled, distinct core tasks: Launch Ops, Supplier/Product and Finance. Unused capacity remains, so no task was paused, resumed or swapped.
- No DNS, MX, SPF or DKIM record was changed. Checkout remains locked.
