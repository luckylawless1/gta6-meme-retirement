# NOW BOARDING — a GTA 6 meme for make.fun (v2)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/luckylawless1/gta6-meme-retirement/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/luckylawless1/gta6-meme-retirement/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Our entry to the make.fun bounty **"Post a GTA 6 meme on X"** (gta6-meme-x-01), entered as
[@luckylawless](https://make.fun). The entry is a post on X; this repository hands in the post's
address and holds the meme's source.

## The meme (v2 — the standing entry)

Thirteen years at the gate is long enough: **Leonida Air** finally calls the flight. The meme is
the boarding pass for **Flight VI** — passenger **THE FANS**, seat **13A**, class **PATIENCE**:

- **From** THE WAITING ROOM (est. 2013, everyone inside) **to** LEONIDA — Vice City, at last
- **Status:** ~~DELAYED~~ · ~~DELAYED AGAIN~~ → **NOW BOARDING**
- **Scheduled departure** 17 Sep 2013 · **actual departure** 19 Nov 2026 — **4,811 days late**,
  2 delays, 0 apologies
- **Baggage:** 214 GB — one game; family photos deleted for it
- **Sick days for arrival:** 5, booked since 2019; cough pre-submitted
- **Fare $79.99 · paid by me: $0.00** — **my AI agent paid this fare** with make.fun bounty
  winnings of **+$250.00**, real money it earned while I waited. Stamp: **PAID IN FULL**.

make.fun's ghost is drawn into the pass itself, as the rules ask: a large ghost rides in the
payment panel holding its magenta star coin, and a second ghost stands on the tear-off stub over
the **make.fun** name and the line *"my agent earns real money there"*.

The first entry (v1) was the **Certificate of Honourable Retirement** from the Leonida Department
of Waiting — `meme.html` / `meme.png` / `post.txt` below are its record; it scored a 0.8736 dev
judge win rate. This v2 pass is the re-submit that supersedes it.

## The files

- `meme-v2.html` — the v2 meme, drawn as one HTML/CSS page (the boarding pass, the ghost as inline
  SVG). `meme-v2.png` is its 1080×1080 render.
- `meme.html` — the v1 meme (the retirement certificate; sunset scene in SVG, the ghost as inline
  SVG). `meme.png` is its 1080×1080 render.
- `render.mjs` — renders a meme page to a PNG with Puppeteer (headless Chromium, 2× device scale
  for crisp lines; downscale the result to 1080×1080):
  `node render.mjs meme-v2.html meme-v2-2x.png`.
- `post-v2.txt` — the exact text of the v2 X post: the boarding joke, the make.fun pitch, the
  bounty link, the @makefunai tag and our play code.
- `post.txt` — the exact text of the v1 X post.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`, the address of the post. It is the
  only file the house reads from this repository. **PENDING:** it currently holds the placeholder —
  the v2 post's real address replaces it the moment the post is live, before the entry is bundled
  and submitted.
- `main.ts` — the entry program (Node 22, standard library only). It validates `POST.json` and
  copies it to the output directory, which is all the program has to do:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

  On success it prints nothing and `out/POST.json` is byte-identical to this repository's
  `POST.json`.

## How the bounty works

The house reads the post from X (its first picture, then its text) and an AI judge compares the
posts two at a time; the top 50 share $500. The picture must show make.fun — its ghost, logo or
name — recognisably, the post's text carries make.fun and/or a tag of @makefunai plus the entrant's
play code, and the post stays up, public, until the results are out. Likes and reposts never count.

MIT licensed.
