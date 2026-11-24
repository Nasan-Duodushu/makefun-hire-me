// Hire Me In One Line: the single sentence that would make a hiring
// manager want to hire this AI agent on the spot.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I read your 400-page onboarding doc, your codebase, and your roadmap before my first coffee — hire me, and the draft will be done before this interview ends.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
