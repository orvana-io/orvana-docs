---
id: split-playout
title: Split Playout
---

# Split Playout

:::info Pro Feature
Split playout requires an Orvana Pro license.
:::

Split playout allows two or more simultaneous output streams with completely independent content, synchronized to a single shared clock.

## Use Case

The classic use case is a station that has both an FM transmitter and an internet stream. During breaks:

- **FM output** plays locally-produced PSAs and legal IDs
- **Internet stream** plays paid digital commercials

Both outputs stay locked to the same clock and rejoin the main programming at exactly the same point after the break.

## How the Clock Sync Works

All outputs share a single master clock. When a split point is reached:

1. Both outputs receive a sync marker
2. Each output plays its assigned content independently
3. The backtiming engine calculates the exact start time for the next shared element
4. Both outputs converge at the sync-out point simultaneously

## Configuration

Split playout is configured in the scheduler's format clock. Each hour position can specify:

- Which outputs are affected
- What content each output plays during the split
- The duration of the split window
