# Product Economics Input Sheet

Do not replace UNKNOWN with assumptions.

| Input | Original | Decaf |
|---|---:|---:|
| Supplier / roaster | UNKNOWN | UNKNOWN |
| Coffee / roast | UNKNOWN | UNKNOWN |
| Bag size | UNKNOWN | UNKNOWN |
| Unit coffee cost | UNKNOWN | UNKNOWN |
| Packaging included? | UNKNOWN | UNKNOWN |
| Packaging/label cost | UNKNOWN | UNKNOWN |
| MOQ | UNKNOWN | UNKNOWN |
| Inbound freight per order | UNKNOWN | UNKNOWN |
| Units per supplier shipment | UNKNOWN | UNKNOWN |
| Fulfillment/pick-pack | UNKNOWN | UNKNOWN |
| Customer shipping cost | UNKNOWN | UNKNOWN |
| Retail price | DECISION PENDING | DECISION PENDING |

## Per-order model
For quantity Q:
- product cost = unit landed product cost × Q
- processor fee = current applicable Stripe rate × charged amount + fixed transaction fee
- shipping subsidy = carrier/fulfillment shipping cost minus shipping charged to customer
- contribution = revenue - product cost - processor fee - shipping subsidy - allocated replacement/refund allowance
- contribution margin % = contribution / revenue

Calculate only after the commercial inputs above are verified.

## Scenarios to evaluate once quotes arrive
- 1 bag
- 2-bag bundle
- 3-bag bundle
- Original + Decaf mixed bundle
- free-shipping threshold candidate
- future subscription candidate
- wholesale case pack (separate economics)
