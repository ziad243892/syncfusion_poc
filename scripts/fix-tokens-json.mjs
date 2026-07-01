import { readFileSync, writeFileSync } from 'node:fs';

const path = 'c:/Users/ziad.abuzayyad/Downloads/Light.tokens.json';
const raw = readFileSync(path, 'utf8').trim();

// Figma exports sometimes omit the root object wrapper
let content = raw.startsWith('{') ? raw : `{${raw}}`;

const open = (content.match(/\{/g) ?? []).length;
const close = (content.match(/\}/g) ?? []).length;

if (close < open) {
  content += '}'.repeat(open - close);
}

const parsed = JSON.parse(content);
writeFileSync(path, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8');

console.log('Fixed successfully.');
console.log('Top-level keys:', Object.keys(parsed).join(', '));
