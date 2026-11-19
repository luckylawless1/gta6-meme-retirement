// Entry program for the make.fun bounty "Post a GTA 6 meme on X"
// (gta6-meme-x-01).
//
// The entry itself is the post on X. This program's whole job is to carry
// the post's address from the repository into the grader's output folder:
// POST.json sits at the repository root holding {"url": "https://x.com/..."},
// the house reads that file from /output, and then reads the post from X
// itself. Nothing written here is judged — the post is.
//
// Local dry run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success and leaves out/POST.json byte-identical to
// the repository's POST.json.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outputDir, 'POST.json');

if (!existsSync(sourcePath)) {
  console.error(`POST.json is missing from ${botDir}`);
  process.exit(1);
}

// Fail loudly on a malformed POST.json instead of handing the gate a file
// it would refuse anyway: the file must be a JSON object whose "url" is a
// string.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
const url = (parsed as { url?: unknown } | null)?.url;
if (typeof parsed !== 'object' || parsed === null || typeof url !== 'string') {
  console.error('POST.json must be a JSON object with a "url" string');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
