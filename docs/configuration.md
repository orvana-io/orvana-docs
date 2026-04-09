---
id: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

Orvana is configured via environment variables in the `.env` file created during installation.

## Core Settings

```bash
# Station identity
STATION_NAME="My Radio Station"
STATION_TIMEZONE="America/Chicago"

# Security — generate with: openssl rand -hex 32
SECRET_KEY=your_secret_key_here

# Database (auto-configured by installer)
DATABASE_URL=postgres://orvana:password@postgres:5432/orvana
REDIS_URL=redis://redis:6379

# Domain (for SSL)
DOMAIN=radio.yourstation.com
```

## Pro License

```bash
# Add your Pro license key to unlock Pro features
ORVANA_LICENSE_KEY=XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

License keys are validated against Keygen on startup and every 24 hours. If validation fails, Orvana continues running in Pro mode for up to 7 days before falling back to Core.

## Authentication

By default, only local accounts are enabled. To add OAuth providers:

```bash
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Microsoft OAuth
MICROSOFT_CLIENT_ID=your_microsoft_client_id
MICROSOFT_CLIENT_SECRET=your_microsoft_client_secret
```

## Applying Changes

After editing `.env`, restart Orvana:

```bash
docker compose restart orvana
```
