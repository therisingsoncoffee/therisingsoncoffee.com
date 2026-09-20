# Rising Son Coffee — Customer & Commerce Data Architecture

Status: prelaunch design. This defines the minimum useful data model without requiring a paid analytics platform.

## Principle
Founding 40, commerce, subscription, fulfillment and customer-service activity should form one continuous dataset. Capture data because it answers an operational or business question, not merely because it is available.

Use stable internal IDs, UTC timestamps plus source-local display where needed, structured enums, source attribution and evidence references. Do not store full payment-card data or unnecessary sensitive personal information.

## Core entities

### Customer
- customer_id
- created_at
- email
- name when legitimately needed
- acquisition_source
- first_touch_source
- latest_touch_source
- Founding 40 status
- marketing consent/status where applicable
- first_order_at
- latest_order_at
- order_count
- lifetime_gross_revenue
- lifetime_contribution
- subscription status
- customer-service interaction count

### Founding 40 signup
- signup_id
- customer_id
- signup_at
- signup_source/page
- referral/source tag where legitimately captured
- stated coffee preferences
- Original/Decaf interest
- whole-bean/ground preference
- feedback participation status
- conversion_to_customer_at
- first_order_id

Do not fabricate an occupied-spots count. Capacity and actual accepted participants must remain distinct fields.

### Product/variant
- product_id: Original or Decaf
- variant_id
- form: whole bean / ground
- grind option if applicable
- net weight
- supplier
- supplier product/reference
- batch/lot where available
- active_from / active_to

### Order
Use the detailed order record in order-fulfillment-sop.md. Link each order to customer_id and one or more order_item records.

### Order item
- order_item_id
- order_id
- product_id
- variant_id
- quantity
- unit retail price
- discount allocated
- unit supplier cost
- packaging/grinding cost
- fulfillment allocation
- shipping allocation where useful
- contribution

### Subscription
- subscription_id
- customer_id
- status
- started_at
- cancelled_at
- cancellation_reason
- cadence
- next_renewal_at
- discount
- shipping benefit
- skips
- pauses
- failed renewals
- renewal order IDs

### Fulfillment
- fulfillment_id
- order_id
- supplier/partner
- supplier order/reference
- submitted_at
- shipped_at
- delivered_at
- carrier
- tracking reference
- status
- exception category
- batch/lot where available

### Customer-service event
- service_event_id
- customer_id
- order_id if applicable
- opened_at
- issue category
- channel
- AI / human / escalated
- escalation reason
- resolution
- resolved_at
- refund/replacement amount or cost
- supplier/batch link where applicable
- follow-up outcome

## Event taxonomy
Use structured events so funnel behavior can be analyzed consistently:
- founding40_signup
- founding40_feedback_submitted
- checkout_started
- purchase_completed
- fulfillment_submitted
- order_shipped
- order_delivered
- refund_issued
- replacement_issued
- subscription_started
- subscription_renewed
- subscription_skipped
- subscription_paused
- subscription_cancelled
- service_opened
- service_resolved
- feedback_submitted
- reorder_completed

Each event should carry event_id, occurred_at, customer_id when known, order/subscription IDs when relevant, source and only the metadata necessary for that event.

## Acquisition and attribution
Preserve source information where available:
- direct
- Founding 40
- email
- organic search
- social platform/campaign
- referral
- QR/offline campaign
- unknown

Do not silently convert UNKNOWN into direct. Preserve campaign/source parameters only when useful and lawful.

## Business metrics enabled
This architecture should allow Rising Son to calculate:
- Founding 40 signup-to-purchase conversion
- first-purchase product/variant mix
- Original vs Decaf repeat rate
- whole-bean vs ground repeat rate
- average order value
- delivered customer $/oz
- contribution per order
- reorder interval
- one-time-to-subscription conversion
- subscription retention/churn
- subscriber contribution and lifetime value
- acquisition-source conversion and contribution
- fulfillment lead time and exception rate
- refund/replacement rate and cost
- supplier/batch complaint patterns
- AI resolution vs escalation rates

## Privacy and security boundaries
- Never store full card number, CVV or authentication secrets in this dataset.
- Minimize personal data.
- Restrict access according to operational need.
- Do not use customer communications for unrelated purposes without an appropriate basis/consent.
- Establish retention/deletion rules before collecting data beyond normal order/account requirements.
- Keep voice-model credentials and authorization separate from ordinary service-agent access if voice automation is later implemented.

## Implementation stages
### Prelaunch
Define IDs, field names, source tags and event names. No paid analytics dependency is required.

### Checkout activation
Map processor/customer/order IDs into the internal schema and verify successful + failed test transactions.

### Fulfillment activation
Map supplier reference, tracking, shipment and exception data.

### Subscription activation
Map recurring billing/subscription IDs, cadence, renewal, skip/pause/cancel events and economics.

### Growth
Only add analytics/CRM/help-desk tooling when the operational benefit justifies the cost. Preserve exportable structured data so Rising Son is not unnecessarily locked into one vendor.

## Data-quality rule
A useful dataset is better than a large dirty dataset. Required fields should have controlled values; unknown values remain UNKNOWN/null as appropriate; corrections should preserve an audit trail when financially or operationally material.
