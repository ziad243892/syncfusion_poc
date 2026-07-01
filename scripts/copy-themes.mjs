import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'src/assets/themes');
const base = join(root, 'node_modules/@syncfusion/ej2-base/styles');
const material = join(root, 'node_modules/@syncfusion/ej2-material-theme/styles');

mkdirSync(out, { recursive: true });

const copies = [
  [join(base, 'material3.scss'), join(out, 'material3.scss')],
  [join(base, 'fluent2.css'), join(out, 'fluent2.css')],
  [join(base, 'bootstrap5.3.css'), join(out, 'bootstrap5.3.css')],
  [join(base, 'tailwind3.css'), join(out, 'tailwind3.css')],
  [join(base, 'material.css'), join(out, 'material-legacy.css')],
  [join(material, 'material.css'), join(out, 'material-components.css')],
];

for (const [from, to] of copies) {
  copyFileSync(from, to);
  console.log(`Copied ${to}`);
}
