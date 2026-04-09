---
id: api
title: REST API
---

# REST API

:::info Pro Feature
The REST API requires an Orvana Pro license.
:::

Orvana exposes a REST API at `/api/v1/` for integration with external systems.

## Authentication

All API requests require a bearer token generated in **Admin → API → Tokens**.

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://radio.yourstation.com/api/v1/status
```

## Available Endpoints

- `GET /api/v1/status` — current playout status
- `GET /api/v1/queue` — current play queue
- `POST /api/v1/queue` — add item to queue
- `GET /api/v1/nowplaying` — now playing metadata
- `POST /api/v1/skip` — skip current track

Full API reference coming in v1.0.0.
