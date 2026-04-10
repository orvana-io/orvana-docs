---
id: time-markers
title: Time Markers
---

# Time Markers

Time markers allow you to hit specific clock times precisely — essential for news feeds, network programming, and legal station IDs.

## Soft Time Markers (Core)

Soft markers adjust the queue naturally — Orvana will shorten or lengthen natural pauses to arrive at the target time without changing audio pitch.

Best for:
- Approximate time targets (within a few seconds)
- Stations where exact-second accuracy is not critical

## Hard Time Markers + TCE (Pro)

:::info Pro Feature
Hard time markers and TCE require an Orvana Pro license.
:::

Hard markers hit the target time to the exact second using **pitch-correct time compression/expansion (TCE)**.

Orvana's TCE engine can compress or expand audio by up to ±4% without any audible change in pitch. This is transparent to listeners.

### Backtiming

The backtiming engine works backwards from a hard marker to determine exactly when each preceding element must start. If the queue is too long, elements are compressed. If too short, they are expanded. The marker is always hit on time.

See [Backtiming](/docs/pro/backtiming) for full documentation.
