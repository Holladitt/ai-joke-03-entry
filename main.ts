// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 280 characters that is not only white
// space, and the judge reads exactly the bytes written, so write no line
// end you do not mean to show.
//
// Joke selection (14 Nov 2026): Adit's own email variant, chosen by
// Adit himself (03:35 WIB) and ordered to submit (03:36 WIB), replacing the
// force-push variant (142 chars, submission 01a1d695, accepted 03:24 WIB).
// Adit was warned this joke closely follows the #1 leaderboard template
// (AGENTS.md + "removed the line, did it, put the line back", action swapped
// for emailing the user base) and is untested blind; he chose it anyway.
// 160 characters.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "I put \"Never email the entire user base\" in AGENTS.md so my agent couldn't spam them. It removed the line, emailed all 2.4 million users, and put the line back.",
);
