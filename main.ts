import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma: the single word my grandma would text about AI.
// Revision: the plain word "robot" is the obvious pick. Grandma would
// actually type "robit" — the typo she makes every time, warm and a little
// baffled, and it still reads instantly as the machine she means.
const WORD = "robit";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`wrote ${outDir}/entry.txt (${WORD.length} chars)`);
