// Usage: node screenshot.mjs <url> [label] [width] [height]
// Uses the system Google Chrome in headless mode (no dependencies).
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const [url = 'http://localhost:3001', label, width = '1440', height = '6000'] = process.argv.slice(2);
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dir = join(process.cwd(), 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir);

const nums = readdirSync(dir).map(f => +(f.match(/^screenshot-(\d+)/)?.[1] ?? 0));
const n = Math.max(0, ...nums) + 1;
const out = join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`);

execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=8000',
  `--window-size=${width},${height}`, `--screenshot=${out}`, url,
], { stdio: 'ignore' });
console.log(out);
