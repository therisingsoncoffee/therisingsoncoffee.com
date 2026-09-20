# Work Mode — Rising Son Coffee Master Handoff

Goal: move Rising Son Coffee as close to launch-ready as possible while minimizing owner interruptions.

## Operating rule
Proceed autonomously on research, analysis, repository QA, drafts, comparisons and implementation that does not require identity verification, payment, a legal attestation, contract acceptance or final launch authorization. Batch owner-required items into one concise exception list.

## Read first
- docs/launch-readiness.md
- docs/founding-40-operations.md
- docs/product-economics.md
- docs/supplier-due-diligence.md
- docs/order-fulfillment-sop.md
- privacy.html
- terms.html

## Work packages
A. Deployment: verify apex/www DNS, GitHub Pages deployment, HTTPS/certificate, redirects and broken links.
B. Forms: verify Founding 40 end-to-end, activation, thank-you redirect, mobile behavior and data-handling disclosures.
C. Email: verify SPF/DKIM/DMARC and domain-mail deliverability without disturbing working MX/hosted email.
D. Supplier: source/research viable Original + Decaf suppliers; obtain or prepare quote requests; distinguish verified facts from unknowns.
E. Economics: populate scenarios only with sourced/verified inputs; calculate contribution per order and shipping sensitivity.
F. Checkout: prepare Stripe-hosted checkout integration in disabled/test state; do not activate live sales until all launch gates pass.
G. Design: audit and refine for a personal independent-coffee-company feel. Avoid generic AI/SaaS visual tropes, excessive symmetry, canned marketing copy and unnecessary animation.
H. Operations: prepare order tracking, fulfillment, exception handling and customer communications.
I. QA: mobile-first accessibility, copy, legal-page consistency, metadata, performance and error states.
J. Final output: update launch-readiness.md and produce a short OWNER ACTIONS list containing only true blockers.

## Hard constraints
- No fabricated supplier/product/pricing/shipping claims.
- No live checkout until approved.
- No fake Founding 40 count.
- Do not remove MX/SPF/DNS records without proving they are obsolete.
- Do not expose credentials or personal identity/bank/tax information in repository files.
