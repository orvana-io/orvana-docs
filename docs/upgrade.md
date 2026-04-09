---
id: upgrade
title: Upgrading
sidebar_position: 4
---

# Upgrading

## Manual Upgrade (Core)

```bash
docker compose pull
docker compose up -d
```

Run after each new release.

## Auto-Upgrade (Pro)

:::info Pro Feature
Auto-upgrades require an Orvana Pro license.
:::

Enable in **Admin → System → Updates → Enable Auto-Upgrades**.

Orvana checks for updates daily and applies them during a low-activity window.
