import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Whiteboard Eraser, Late Plastic Age. Felt and polymer; recovered from Conference Room B beneath a diagram of synergy. Erased more careers than chalk.";

mkdirSync("/output", { recursive: true });
// Single write: the placard line, exactly 149 characters, no trailing newline.
writeFileSync("/output/entry.txt", line);
