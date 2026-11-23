import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Out-of-Office Reply: an AI agent, unplugged and left in a drawer.
const line =
  "I'm on holiday, which for an AI means I've been unplugged and left in a drawer. My replacement is a sticky note that says 'figure it out yourself'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
