---
id: backtiming
title: Backtiming Engine
---

# Backtiming Engine

:::info Pro Feature
The backtiming engine requires an Orvana Pro license.
:::

The backtiming engine calculates backwards from a hard time marker to determine exactly when each preceding element must start.

## How It Works

1. A hard time marker is placed at a target time (e.g. top of hour news)
2. The engine sums the duration of all queued elements before the marker
3. If the queue is too long or short, TCE adjusts each element proportionally
4. All elements play in sequence and the marker is hit exactly on time

## TCE Range

Time compression/expansion is limited to ±4% to remain transparent to listeners.
