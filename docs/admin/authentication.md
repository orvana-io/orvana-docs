---
id: authentication
title: Authentication
---

# Authentication

Orvana supports local accounts and OAuth providers.

## Local Accounts

Enabled by default. Users log in with email and password.

## OAuth Providers

- **Google** — configure via `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- **Microsoft** — configure via `MICROSOFT_CLIENT_ID` and `MICROSOFT_CLIENT_SECRET`

## SSO / SAML

:::info Pro Feature
SSO/SAML requires an Orvana Pro license.
:::

Configure via `SAML_ENTRY_POINT` and `SAML_CERT` in your `.env` file.
