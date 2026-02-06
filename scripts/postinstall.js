const fs = require('fs');
const path = require('path');

const target = path.join(
  __dirname,
  '..',
  'node_modules',
  'next',
  'dist',
  'shared',
  'lib',
  'head-manager-context.js'
);

const sourceImport = './head-manager-context.shared-runtime.js';
const shimContents = `module.exports = require('${sourceImport}');\n`;

try {
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, shimContents, 'utf8');
    console.log('[postinstall] Added Next.js head-manager-context shim.');
  }
} catch (error) {
  console.warn('[postinstall] Failed to ensure head-manager-context shim:', error);
}
