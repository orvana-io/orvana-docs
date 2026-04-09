---
id: licensing
title: Pro Licensing
---

# Pro Licensing

Orvana Pro is $20/month per station. Licenses are managed through Stripe and delivered automatically via email.

## Getting a License

1. Visit [orvana.io/#pricing](https://orvana.io/#pricing)
2. Click **Get Started** under Pro
3. Enter your payment details via Stripe
4. Your license key will be emailed within seconds

## Activating Your License

Add the license key to your `.env` file:

```bash
ORVANA_LICENSE_KEY=XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

Then restart Orvana:

```bash
docker compose restart orvana
```

Pro features will be enabled immediately.

## Validation

Orvana validates your license key:
- On startup
- Every 24 hours

If validation fails (e.g. network issue), Orvana continues in Pro mode for up to **7 days** before falling back to Core. Your station will never go off air due to a licensing system outage.

## Managing Your Subscription

Visit the [Stripe Customer Portal](https://orvana.io/billing) to:
- Update your payment method
- View invoices
- Cancel your subscription

## Per-Station Licensing

Each physical station installation requires its own Pro license. A license is tied to a single Orvana instance.
