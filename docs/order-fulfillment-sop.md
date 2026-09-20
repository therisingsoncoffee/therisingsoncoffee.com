# Rising Son Coffee — Order & Fulfillment SOP (Prelaunch)

This SOP is intentionally processor- and supplier-ready without pretending unknown details are known.

## Launch assortment
- Coffee products: Original and Decaf only.
- Whole bean and ground are variants when supplier capability and economics support both.
- Additional coffees/roasts are future expansion, not launch scope.
- Bag size, retail price, supplier, shipping economics and product claims remain unverified until supported by supplier evidence.

## Order lifecycle
1. PAYMENT RECEIVED — payment processor confirms successful payment.
2. REVIEW — verify product, variant, quantity, shipping address and payment status.
3. READY FOR FULFILLMENT — order is valid and product is available.
4. SUBMITTED / PICKING — order is with supplier/fulfillment workflow.
5. SHIPPED — tracking exists and customer notification is sent.
6. DELIVERED — carrier reports delivery.
7. FOLLOW-UP — capture satisfaction, product feedback and reorder/subscription signals where appropriate.
8. EXCEPTION — address, stock, payment, damage, loss or other issue.
9. CLOSED — fulfilled with no unresolved customer issue.
10. REFUNDED / PARTIAL REFUND / REPLACED — only after applicable policy and facts are verified.

## Minimum order record
- internal order ID and processor order/payment ID
- order and status timestamps
- customer ID, name and email
- shipping address
- acquisition/signup source where known
- product: Original or Decaf
- form: whole bean or ground
- grind option, if supplier supports multiple grinds
- bag size/weight
- quantity
- one-time or subscription purchase
- subscription cadence, if applicable
- merchandise subtotal
- discount/promotion, if any
- shipping charged
- tax collected
- total charged
- processor fee
- supplier product cost
- fulfillment/pick-pack cost
- outbound shipping cost
- contribution margin
- supplier/fulfillment partner
- supplier order/reference ID
- batch/lot identifier where available
- tracking number/carrier
- fulfillment, ship and delivery timestamps
- status
- notes/exceptions

Do not store full card numbers or security codes. Collect only customer information needed for legitimate commerce, service and analysis.

## Subscription-ready fields
Subscription capability may be introduced after launch economics support a genuine customer benefit. Architecture should support:
- subscription/customer ID
- product and variant
- quantity
- cadence
- subscription discount
- shipping benefit/cost
- start date
- next renewal date
- active/paused/cancelled status
- skip/pause history
- cancellation date/reason
- renewal success/failure
- subscriber contribution margin
- subscriber lifetime value and retention

Do not advertise a subscription discount or savings amount until verified economics support it.

## Customer communication checkpoints
- order confirmation
- shipping/tracking
- material delay or stock exception
- delivery/customer-service response where needed
- optional post-delivery feedback/reorder communication
- subscription renewal/changes/cancellation communications if subscriptions are enabled

## Customer service and exception handling
Working philosophy: personal, reasonable, fast and human in tone. When Rising Son or its fulfillment partner clearly causes a legitimate fulfillment or quality problem, make it right through replacement or refund as appropriate. Exact public guarantees remain unpublished until supplier policies and economics are verified.

Track:
- issue category
- affected order/product/variant
- supplier/batch/lot where available
- first-contact and resolution timestamps
- resolution type
- refund/replacement cost
- AI-handled, human-handled or escalated
- escalation reason
- subsequent customer outcome/repeat purchase where appropriate

Routine, policy-bounded cases may eventually be handled by an AI service agent. Unusual refunds, significant financial exceptions, disputes, legal/safety matters, supplier conflicts or cases outside established authority escalate to the owner.

## Data and analytics principle
Founding 40 and commerce records should form a continuous structured dataset. Use consistent IDs, timestamps, source attribution and structured fields so Rising Son can later analyze:
- Original vs Decaf demand and retention
- whole bean vs ground demand and retention
- one-time vs subscription behavior
- reorder interval and subscription cadence
- delivered price per ounce
- contribution margin by product, variant, bag size and order quantity
- acquisition source performance
- fulfillment time and exception rate
- supplier/batch feedback patterns
- refunds/replacements and their causes
- customer retention and lifetime value

Metadata collection should serve an operational or analytical purpose; do not collect personal data merely because it is technically available.

## Fulfillment constraint
Rising Son does not plan to use owner-home storage/packing at launch. Launch planning assumes supplier-direct fulfillment or another professional fulfillment arrangement. Supplier evaluation must therefore include direct/private-label fulfillment capability and the true delivered economics: coffee + packaging + label + pick/pack + shipping + payment processing + setup/order fees.

## Prelaunch gates
No live order may be accepted until:
- product and bag size verified
- supplier cost/MOQ/lead time verified
- direct/professional fulfillment method verified
- retail price approved
- delivered price-per-ounce and contribution margin reviewed
- shipping approach approved
- applicable tax configuration reviewed
- refund/replacement terms approved
- legal/business and payment-processor requirements completed
- processor account activated and bank connected
- test transaction completed
- notification and fulfillment workflow tested
- checkout safety gate intentionally enabled
- final launch authorization given
