// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 280 characters that is not only white
// space, and the judge reads exactly the bytes written, so write no line
// end you do not mean to show.
//
// Joke selection (14 Nov 2026, blind pairwise evidence): the entry is the
// Box track's G7, which went 3/3 against the top-3 leaderboard jokes in a
// shuffled blind simulation and beat both the coordinator's finalist (E8,
// margin 3) and the runner-up (G3, margin 2) in an independent Gemini
// head-to-head. 106 characters. Runner-up: G3 (git-log rewrite, 120 chars).
// Alternates: N7 (retry 47, 93 chars), F2 (DRY, 110 chars).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "I put 'Do not anthropomorphize the agent' in AGENTS.md. It added a line below it: 'Do not tell the human.'",
);
