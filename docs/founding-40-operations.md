# Founding 40 — Launch Operations

## Purpose
Founding 40 is Rising Son Coffee's first-customer program and early feedback group. Reserving interest is free and is not a preorder, donation, investment, ownership program, referral program, member tier, or obligation to purchase.

The intended sequence is: reserve interest -> contribute optional honest feedback -> receive the complete verified founding offer -> decide whether to place a qualifying founding order -> qualifying purchase activates Founding 40 customer status.

A reservation alone does not permanently consume one of the forty customer positions.

## Why the first forty matter
Rising Son grew from a difficult chapter in its founder's life and a larger goal: build a viable coffee company that can eventually create meaningful support for children and families facing difficult circumstances.

Do not represent an impact program as existing before it exists. Founding 40 contributions should instead be described accurately: early interest, feedback and eventual qualifying purchases help move Rising Son one step closer to becoming a company capable of fulfilling that larger mission.

Founding 40 customers are not donors or investors. Their qualifying purchases are ordinary customer purchases from Rising Son Coffee.

## Planned Founding 40 thank-you: numbered tumbler
Working plan, pending verified economics and fulfillment:
- each qualifying Founding 40 customer receives one exclusive Rising Son Founding 40 tumbler;
- tumbler is individually numbered 01/40 through 40/40;
- customer price for the tumbler is $0 / no additional charge;
- the coffee price must not be increased specifically to recover the tumbler cost;
- Rising Son absorbs the tumbler from company margin as a launch/customer-acquisition expense;
- numbering follows completed qualifying founding orders, not reservation order;
- do not promise or purchase tumblers until landed cost, customization quality, lead time and fulfillment impact are verified.

Public language may say this is the current plan. It must not describe the tumbler as guaranteed until the affordability/fulfillment gate passes and final Founding 40 terms are published.

## Customer path
1. Visitor reads the Founding 40 explanation.
2. Visitor submits a free reservation/interest form.
3. Submission is routed to hello@therisingsoncoffee.com.
4. No payment is collected.
5. Rising Son may request short, optional and honest feedback.
6. Product, price, shipping, fulfillment and Founding 40 benefits are communicated only after verification.
7. Reservation holder decides whether to place a qualifying founding order.
8. Completed qualifying order activates one of the forty Founding Customer positions.
9. If the tumbler gate has passed, the customer receives the numbered tumbler at no additional charge.
10. Post-purchase feedback is requested honestly; positive feedback or a public review is never a condition of benefits.

## Program boundaries
- no recruiting, downline, sales quota or commission;
- no investment return, ownership interest or donation claim;
- no requirement for positive feedback or a positive public review;
- any future referral/affiliate program must remain optional and separate from Founding 40 eligibility;
- never publish a claimed-spots count unless it comes from maintained completed-order data;
- reservations and activated Founding Customers must be tracked separately.

## Operational statuses
Reservation: NEW, CONFIRMED, FEEDBACK_ACTIVE, OFFER_READY, DECLINED, OPTED_OUT.
Activation: RESERVED, OFFER_SENT, QUALIFYING_ORDER_COMPLETE, FOUNDING_CUSTOMER_ACTIVE, BENEFIT_FULFILLED.

## Welcome message
Subject: Your Founding 40 reservation

Thanks for being here at the beginning.

Rising Son Coffee is being built deliberately: good coffee first, with a greater purpose behind it. You're raising your hand for the opportunity to become one of our first forty customers and help shape the launch along the way.

There is no payment today and this is not a preorder. Before ordering opens, we'll show you the verified coffee, price, shipping, fulfillment terms and complete Founding 40 offer. Then you decide whether you want to become one of the actual first forty customers.

Our current plan is to thank each qualifying Founding 40 customer with an exclusive individually numbered Rising Son tumbler at no additional charge. We're verifying the economics and fulfillment before making that a guarantee.

We may also ask short, optional questions about coffee choices, bag size, price and shipping. Honest feedback is what matters.

— Rising Son Coffee
Good Coffee. Greater Purpose.

## Launch announcement skeleton
Subject: The Rising Son Founding 40 offer is ready

[VERIFIED PRODUCT / ROAST]
[VERIFIED SIZE]
[VERIFIED NORMAL COFFEE PRICE]
[VERIFIED SHIPPING / FULFILLMENT]
[CONFIRMED FOUNDING BENEFITS]
[ORDER LINK]

We waited until the product, costs, fulfillment and Founding 40 benefits were confirmed. Here are the terms plainly.

[VERIFIED DETAILS]

If you choose to place a qualifying founding order, that purchase activates your Founding 40 customer position, subject to availability.

## Tumbler affordability gate
Before converting the planned tumbler into a public guarantee, verify:
1. landed tumbler cost;
2. printing/engraving and individual-numbering cost;
3. minimum order quantity;
4. sample/quality suitability;
5. freight to the fulfillment point;
6. added pick/pack cost;
7. added outbound shipping caused by tumbler weight/dimensions;
8. breakage/replacement allowance;
9. lead time;
10. total Founding 40 program cost for 40 units plus prudent replacement/spare quantity;
11. coffee contribution remains acceptable without increasing the normal coffee price specifically for the tumbler.

## Rules before launch announcement
Do not insert or publish unverified coffee origin/roast claims, bag size, retail price, shipping cost/time, inventory, supplier identity, refund promises, launch date, discounts, or guaranteed tumbler benefits.

## Form verification
FormSubmit activation and delivered signup have been observed. The custom /thanks.html redirect remains a verification item. Do not treat a redirect failure as evidence that a delivered reservation was lost.


## Reservation advertising readiness
The reservation campaign may begin before coffee checkout opens, provided every advertisement:
- sends prospects to the official Founding 40 page rather than collecting payment;
- says reservation is free/no payment today;
- does not call a reservation a completed Founding Customer position;
- does not publish an unmaintained number of remaining spots;
- describes the numbered tumbler only as the current plan until the tumbler gate passes;
- does not publish unverified coffee price, bag size, origin/roast, shipping, launch date, discount or impact claim;
- does not imply that a reservation is a donation or investment.

### Approved campaign message framework
Hook: Be one of the people who helps Rising Son Coffee get started.

Offer: Reserve a free place for the opportunity to become one of our first 40 customers. Help shape the launch, see the verified offer first, then decide whether to buy.

Purpose: Rising Son was born from a difficult chapter and is being built toward a larger goal: creating meaningful support for children and families facing difficult circumstances as the company becomes capable of doing so.

Planned thank-you: We are working toward an exclusive individually numbered Founding 40 tumbler at no additional charge for each qualifying Founding Customer. This is the plan, not yet a guarantee.

CTA: Reserve your Founding 40 place at therisingsoncoffee.com.

### Channel attribution
For paid or controlled campaigns, use campaign-specific links when analytics/link infrastructure is available and retain source/campaign/creative identifiers. Until then, the form's self-reported referral_source field provides baseline attribution. Do not infer an acquisition source when it is unknown.

## Reservation ledger minimum fields
Maintain one record per reservation with:
- reservation_id
- submitted_at_utc
- first_name
- email
- coffee_preference
- interest_level
- current_coffee_brand
- usual_bag_size
- usual_price_band
- purchase_frequency
- coffee_form
- decision_factors
- usual_purchase_channel
- switch_trigger
- possible_quantity
- referral_source
- freeform_note
- consent_status
- reservation_status
- last_contact_at
- offer_sent_at
- qualifying_order_id
- founding_customer_number
- tumbler_status
- opted_out_at

Never assign founding_customer_number until the qualifying order is complete.


## Embedded product-intelligence survey
The reservation form also captures optional structured market evidence at the point of signup so later supplier, pricing, packaging, acquisition and retention decisions can be compared against actual prospect behavior rather than assumptions.

Capture and preserve each answer independently, including explicit unknown/blank rather than inferring a value:
- current coffee/brand;
- usual bag-size band;
- usual price-per-bag band;
- purchase frequency;
- usual coffee form (whole bean, ground, both, pods/capsules, other);
- up to three stated purchase decision factors;
- usual purchase channel;
- stated switch trigger;
- Original/Decaf/Both preference;
- Founding 40 interest level;
- possible quantity;
- referral source;
- freeform note and consent.

Potential later analyses include approximate current $/oz bands, purchase-frequency cohorts, bean/ground demand, Decaf demand, price sensitivity, bag-size fit, value-vs-quality preference, switching triggers, channel/source differences, intent-vs-preference relationships, reservation-to-purchase conversion by stated behavior, reorder behavior versus prelaunch answers, and supplier/product fit. Treat self-reported answers as directional evidence, not verified purchasing history. Do not infer demographic or sensitive traits from these answers.


## Reservation intelligence decision system

### Purpose
Convert accumulated Founding 40 responses into evidence for product, economics, acquisition and retention decisions without mistaking a small prelaunch sample for the market as a whole.

### Data-quality pipeline
For each legitimate reservation:
1. retain the raw submitted values;
2. assign a stable reservation/customer ID when the operating system supports it;
3. normalize controlled fields without overwriting raw answers;
4. exclude known tests from market metrics;
5. preserve blanks/UNKNOWN rather than guessing;
6. timestamp any correction and retain the original value when materially useful;
7. link later offer, order, variant, fulfillment, service and repeat-purchase events to the same customer record when legitimately possible.

### Rolling dashboard
Report both counts and percentages; always show the denominator. Do not publish externally unless approved.

**Demand**
- legitimate reservations;
- Original / Decaf / Both / Not sure;
- whole bean / ground / both / pods-other;
- possible bag quantity;
- purchase-frequency distribution.

**Current-market benchmark**
- usual bag-size bands;
- usual price bands;
- price-band × bag-size cross-tab;
- derived approximate $/oz ranges only where both inputs exist, clearly labeled estimates;
- usual purchase channel;
- current brand/coffee themes.

**Decision drivers**
- frequency of each selected decision factor;
- decision factors by Original/Decaf preference;
- decision factors by interest level;
- switch-trigger themes, retaining original text alongside coded themes.

**Intent**
- Interested / Very Interested / First Shot;
- interest level by coffee preference, form, price band, bag size and source;
- possible quantity by interest level.

**Acquisition**
- referral/source mix;
- interest level by source;
- later reservation-to-qualifying-order conversion by source;
- later contribution/CAC by source when real cost and transaction data exist.

### Decision rules
Survey evidence informs decisions; it does not automatically make them.

- Product: compare stated flavor/decision priorities and Original/Decaf/form demand against verified supplier candidates.
- Bag size: compare common stated size bands, price bands, purchase frequency and verified delivered economics. Do not select size from popularity alone.
- Pricing: compare verified viable retail scenarios against stated current-spend bands. Do not treat stated current spend as willingness-to-pay.
- Shipping: later compare abandonment/conversion and feedback against verified shipping scenarios; do not infer shipping tolerance from coffee price alone.
- Supplier: score fit only on verified supplier capabilities/costs plus observed prospect demand; unknown supplier facts remain unknown.
- Marketing: tailor channel messaging to measured themes without making unsupported product claims.
- Retention: after launch, compare prelaunch answers with actual variant, order size, reorder interval, subscription behavior and contribution.

### Sample-size guardrails
- 1–9 legitimate responses: individual qualitative signals only; show raw counts, no broad market conclusion.
- 10–24: early directional patterns; percentages may be shown with denominator and caution.
- 25–39: stronger Founding 40 cohort evidence, still not representative of the general coffee market.
- 40+: useful cohort evidence; still distinguish this self-selected audience from broader-market research.
Never manufacture statistical significance or claim representativeness.

### Later validation loop
For each converted customer, preserve the ability to compare:
- stated preference -> purchased product;
- stated coffee form -> purchased form;
- stated possible quantity -> first-order quantity;
- stated price/size environment -> accepted Rising Son price/size;
- stated purchase frequency -> observed reorder interval;
- stated decision factors/switch trigger -> feedback and repeat behavior;
- interest level -> conversion speed and repeat purchase;
- acquisition source -> conversion, contribution, repeat and retention.

Use discrepancies as learning signals rather than errors: revealed behavior can differ from stated intent.
