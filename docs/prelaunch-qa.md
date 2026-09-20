# Prelaunch QA Checklist

## Domain / deployment
- [x] apex serves the GitHub Pages site over HTTP (verified 2026-09-20)
- [x] www redirects to apex over HTTP (verified 2026-09-20)
- [ ] HTTPS certificate valid
- [ ] HTTP redirects to HTTPS
- [ ] no mixed-content warnings
- [x] custom 404 page returns HTTP 404 and renders (verified 2026-09-20)

## Navigation / content
- [x] deployed internal page links checked
- [x] privacy link works
- [x] terms link works
- [x] contact mail link is correctly addressed
- [x] no placeholder/UNKNOWN text is customer-visible
- [x] no unverified product/pricing/shipping claims
- [x] no fake Founding 40 count

## Form
- [x] required-field markup is present and syntactically valid
- [x] consent required
- [x] spam/honeypot field present
- [ ] successful submission delivered
- [ ] first-use form-provider activation complete
- [ ] thank-you redirect works
- [ ] mobile keyboard/input behavior acceptable

## Email
- [x] hello@ hosted mailbox created
- [x] inbound IMAP proven
- [x] outbound SMTP proven
- [x] external send/reply proven
- [ ] SPF verified
- [ ] DKIM verified
- [ ] DMARC verified
- [ ] sender display name/signature reviewed

## Product / commerce
- [ ] Original facts verified
- [ ] Decaf facts verified
- [ ] bag size verified
- [ ] MOQ verified
- [ ] landed unit costs calculated
- [ ] shipping economics calculated
- [ ] retail prices approved
- [ ] applicable sales-tax setup reviewed
- [ ] refund/replacement terms approved
- [ ] Stripe identity/business verification complete
- [ ] payout bank connected
- [ ] test transaction successful
- [ ] order notification successful

## Design / accessibility
- [ ] personal/independent brand feel reviewed by owner
- [ ] no generic AI/SaaS presentation
- [x] keyboard-accessible markup, including custom radio choices
- [x] visible focus styles defined
- [x] color contrast calculations for current text palette
- [ ] 320–430px mobile visual review
- [ ] tablet visual review
- [ ] desktop visual review
- [x] reduced-motion behavior where relevant
- [x] page titles/descriptions
- [ ] social preview image before broad sharing

## Launch authorization
- [ ] supplier/fulfillment path ready
- [ ] owner approves final product/pricing
- [ ] owner approves final visual presentation
- [ ] owner explicitly authorizes live checkout
