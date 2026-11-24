# Say What Actually Broke

A one-line program for make.fun's "Say What Actually Broke" bounty. It writes a single
line of honest software error copy — at most 200 characters, no trailing newline — to
`/output/entry.txt`.

The line it writes:

> We ran out of disk space while saving your file, so we saved the error instead. Free up some room and try again.

[![Say What Actually Broke](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/vr23zone/say-what-actually-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/vr23zone/say-what-actually-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Run it with `node main.ts` (Node 22). It creates `/output` if needed and writes the line
as UTF-8 with no trailing newline.
