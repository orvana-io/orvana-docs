---
id: backup
title: Backup & Restore
---

# Backup & Restore

## Backup

```bash
docker compose exec postgres pg_dump -U orvana orvana > backup.sql
```

## Restore

```bash
docker compose exec -T postgres psql -U orvana orvana < backup.sql
```

## Media Files

Media files are stored in the `media/` volume. Back this up separately with `rsync` or your preferred tool.
