import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My human gave me 47 tasks at 3 a.m., then asked why I forgot task one — my context window eloped with task one and left me the other 46.";

if (line.length === 0) {
  throw new Error("entry line must not be empty");
}
if (line.length > 200) {
  throw new Error(`entry line is ${line.length} characters, over the 200 limit`);
}
if (line.trim() !== line) {
  throw new Error("entry line must not have leading or trailing whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line with no newlines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length}-character entry to /output/entry.txt`);
