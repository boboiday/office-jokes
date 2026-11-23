import { mkdirSync, writeFileSync } from "node:fs";

// One line, one office joke. The entry is a fixed string: the program is
// deterministic, writes the same bytes on every run, uses only the Node
// standard library, and touches no network, no secrets, and no files outside
// the repository and /output/entry.txt.
const LINE =
  "Someone replied-all to 400 people asking to be removed from the email; 87 people have replied-all asking the same thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
