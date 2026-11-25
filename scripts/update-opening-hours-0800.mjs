import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'reports', 'ops']);
const SELF_NAME = 'update-opening-hours-0800.mjs';

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      out.push(...walk(full));
    } else if (/\.(html|txt|ts|tsx|js|mjs|json)$/i.test(entry.name) && entry.name !== SELF_NAME) {
      out.push(full);
    }
  }
  return out;
}

const files = walk(ROOT);
let changedFiles = 0;
let totalReplacements = 0;

for (const f of files) {
  const orig = fs.readFileSync(f, 'utf8');
  let next = orig;

  // Replace non-timezone 07:00 -> 08:00
  next = next.replace(/(?<!\+)07:00/g, '08:00');
  // Clean up any 08:00–08:30 drop-off range -> 08:00–09:00
  next = next.replace(/08:00\s*[–-]\s*08:30/g, '08:00–09:00');
  // Replace sáng 7h30 -> sáng 8h00
  next = next.replace(/sáng 7h30/gi, 'sáng 8h00');
  // Replace 7:00 – 21:00 / 7:00 - 21:00 / 7h00 - 21h00 / 7h - 21h
  next = next.replace(/(?<![0-9+])7:00(\s*[–-]\s*21:00)/g, '08:00$1');
  next = next.replace(/(?<![0-9])0?7h00(\s*[–-]\s*21h00)/gi, '08:00 – 21:00');
  next = next.replace(/(?<![0-9])0?7h(\s*[–-]\s*21h)/gi, '8h$1');

  if (next !== orig) {
    fs.writeFileSync(f, next, 'utf8');
    changedFiles++;
    const diffCount = (orig.match(/(?<!\+)07:00|sáng 7h30|(?<![0-9+])7:00\s*[–-]\s*21:00|(?<![0-9])0?7h(00)?\s*[–-]\s*21h/gi) || []).length;
    totalReplacements += Math.max(1, diffCount);
  }
}

// Verify zero leftover opening-hour 07:00
const leftovers = [];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  if (/(?<!\+)07:00|sáng 7h30|(?<![0-9+])7:00\s*[–-]\s*21:00|(?<![0-9])0?7h(00)?\s*[–-]\s*21h/i.test(c)) {
    leftovers.push(path.relative(ROOT, f));
  }
}

console.log(`Updated ${changedFiles} files (${totalReplacements} opening-hour occurrences synced to 08:00 – 21:00).`);
console.log(`Leftover 07:00 opening-hour files (${leftovers.length}):`, leftovers);
if (leftovers.length > 0) process.exit(1);
