import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function getReadme() {
  return readFileSync(resolve(process.cwd(), 'README.md'), 'utf8');
}
