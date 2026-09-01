import { readFileSync, writeFileSync } from 'node:fs';
import { readFileSync as rd } from 'node:fs';

const files = rd('/tmp/phone_files.txt', 'utf8')
  .split('\n')
  .map((f) => f.trim())
  .filter(Boolean);

// Ordered literal replacements (longest/most-specific first)
const replacements = [
  ['tel:+40316320183', 'tel:+40745506443'],
  ['+40 (31) 632 01 83', '+40 745 506 443'],
  ['031 632 01 83', '+40 745 506 443'],
  ['+40316320183', '+40745506443'],
  ['(31) 632 01 83', '+40 745 506 443'],
  ['0316320183', '+40 745 506 443'],
];

let totalChanged = 0;
for (const file of files) {
  const orig = readFileSync(file, 'utf8');
  let cur = orig;
  for (const [from, to] of replacements) {
    cur = cur.split(from).join(to);
  }
  if (cur !== orig) {
    writeFileSync(file, cur);
    totalChanged++;
  }
}
console.log(`Processed ${files.length} files, modified ${totalChanged}.`);
