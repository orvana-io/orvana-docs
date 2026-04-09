---
id: installation
title: Installation
sidebar_position: 2
---

# Installation

Orvana installs with a single command using Docker. It runs on any Linux server — physical, virtual, or cloud.

## Requirements

- Linux server (Ubuntu 22.04+ recommended)
- Docker Engine 24.0+
- Docker Compose v2+
- 2 CPU cores, 4GB RAM minimum
- A domain name with DNS pointing to your server (for SSL)

## One-Line Install

```bash
curl -fsSL https://get.orvana.io | bash
```

This script will:
1. Check for Docker and install it if missing
2. Download `docker-compose.yml` and default configuration
3. Generate secure random secrets
4. Start all services
5. Print your access URL

Orvana will be available at `https://your-server-ip` or your configured domain within about 60 seconds.

## Manual Install

If you prefer to review the files before running:

```bash
# Download the compose file
curl -O https://raw.githubusercontent.com/orvana-io/orvana-docker/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/orvana-io/orvana-docker/main/.env.example

# Copy and edit the environment file
cp .env.example .env
nano .env

# Start Orvana
docker compose up -d
```

## What Gets Installed

| Service | Purpose |
|---------|--------|
| `orvana` | Main application (Node.js) |
| `postgres` | Primary database |
| `redis` | Real-time state and pub/sub |
| `caddy` | Reverse proxy with automatic SSL |

## First Login

After installation, navigate to your server's address in a browser. You'll be prompted to create your admin account on first launch.

## Upgrading

For Core installations, upgrades are manual:

```bash
docker compose pull
docker compose up -d
```

Pro subscribers can enable **auto-upgrades** from the admin panel.
