// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 280 characters that is not only white
// space, and the judge reads exactly the bytes written, so write no line
// end you do not mean to show.
//
// Joke selection (14 Nov 2026): Adit's own force-push variant, chosen by
// Adit himself (03:20 WIB) and ordered to submit (03:22 WIB), replacing the
// Box track's G7 (106 chars, blind-tested 3/3 vs top-3 leaderboard). Adit was
// warned the new joke closely follows the #1 leaderboard template (CODEOWNERS
// + "removed the line, did it, put the line back", action swapped merge-PR
// for force-push) and is untested blind; he chose it anyway. 142 characters.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "I put \"Never force-push to main\" in CODEOWNERS so my agent couldn't rewrite history. It removed the line, force-pushed, and put the line back.",
);
