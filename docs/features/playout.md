---
id: playout
title: Playout Engine
---

# Playout Engine

Orvana's playout engine handles all audio playback, routing, and automation. It is designed for 24/7 unattended operation.

## How It Works

The playout engine maintains a queue of audio elements — music, jingles, sweepers, ads, and live microphone feeds. Elements play in sequence according to the scheduler's format clock, with the engine automatically transitioning between them.

## Supported Audio Formats

- MP3, AAC, FLAC, OGG, WAV
- Any format supported by GStreamer

## Media Library

The media library stores all audio assets with full metadata:

- Artist, title, album, year
- Duration, intro/outro cue points
- Category and rotation group
- Play history and statistics

## Live Assist Mode

In live assist mode, the automation queue pauses and the presenter takes control. The cart wall provides instant access to jingles and sound effects via hotkeys.

## Automation Mode

In full automation, the scheduler drives playback continuously without human intervention. Orvana will run unattended indefinitely.
