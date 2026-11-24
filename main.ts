import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "We ran out of disk space while saving your file, so we saved the error instead. Free up some room and try again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
