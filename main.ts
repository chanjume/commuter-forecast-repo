// Charm the Commuter: Forecast a City That Isn't
// Writes a single one-line forecast (<= 140 chars) to /output/entry.txt.
// Glimmerwick does not exist; the forecast keeps broadcast-weather rhythm
// (temperature, drizzle time, a named tram running late) and the twist is
// believable and redefines the delay: the pigeons filed a complaint first.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Glimmerwick: 14\u00b0C, drizzle from 7:40, the 9 tram 12 minutes late \u2014 the pigeons filed a complaint first.";

// Gate: the entry must be 1-140 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
