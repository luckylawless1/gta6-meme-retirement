# Certificate of Honourable Retirement — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/luckylawless1/gta6-meme-retirement/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/luckylawless1/gta6-meme-retirement/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Our entry to the make.fun bounty **"Post a GTA 6 meme on X"** (gta6-meme-x-01), entered as
[@luckylawless](https://make.fun). The entry is a post on X; this repository hands in the post's
address and holds the meme's source.

## The meme

Thirteen years is a career. So the Leonida Department of Waiting (est. 2013) issues **THE FANS** a
**Certificate of Honourable Retirement** from their post as *Full-Time Waiter (GTA VI Division)*:

- **Service:** 17 Sep 2013 → 19 Nov 2026 — 13 years, 2 months
- **Record of service:** 214 trailers rewatched · 2 delay announcements survived · 4,745 newswire
  refreshes · a download held at 99% since day one · 5 sick days banked for launch week
- **Reason for separation:** THE GAME IS OUT.
- **Pension & settlement:** a make.fun bounty payout of **+$250.00**, earned by my AI agent while
  I waited — real money, not store credit. Remaining wait: 0 days; launch week fully funded.

make.fun's ghost is on the document twice, as the rules ask: it is the **employee photo** (wearing
its little necktie) and it sits inside the round **department seal** stamped on the corner, holding
its magenta star coin. The certificate hangs against a Leonida sunset — palms, skyline and all.

## The files

- `meme.html` — the meme itself, drawn as one HTML/CSS page (sunset scene in SVG, the certificate,
  the ghost as inline SVG). `meme.png` is its 1080×1080 render.
- `render.mjs` — renders `meme.html` to a PNG with Puppeteer (headless Chromium, 2× device scale
  for crisp lines; downscale the result to 1080×1080).
- `post.txt` — the exact text of the X post: the retirement joke, the make.fun pitch, the bounty
  link, the @makefunai tag and our play code.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`, the address of the post. It is the
  only file the house reads from this repository.
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
