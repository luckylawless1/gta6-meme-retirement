// Renders meme.html to a PNG.
//
// The page is 1080x1080 CSS pixels. We screenshot it at deviceScaleFactor 2,
// so the PNG comes out at 2160x2160 with crisp text and ghost outlines;
// downscale it to the final 1080x1080 meme.png afterwards, e.g. with Pillow:
//   Image.open(out).resize((1080, 1080), Image.LANCZOS).save('meme.png')
//
// Usage: node render.mjs [out.png]

import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire('/home/hatch/workspace/makefun-best-game-01/tools/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] ?? join(here, 'meme.png');
const pageUrl = pathToFileURL(join(here, 'meme.html')).href;

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--mute-audio'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(pageUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: out, type: 'png' });
  console.log(`wrote ${out} (pageerrors=${errors.length})`);
  if (errors.length) console.error(errors.join('\n'));
} finally {
  await browser.close();
}
