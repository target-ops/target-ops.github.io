// Source assets are encoded losslessly in brand/assets.base64.json so changes
// can be reviewed without a binary upload. No network or image dependencies.
const fs = require('node:fs');
const path = require('node:path');
const assets = require('./brand-assets.base64.json');
const allowed = ['assets/og-cover.png', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon.ico'];
if (Object.keys(assets).length !== allowed.length || allowed.some(name => typeof assets[name] !== 'string')) {
  throw new Error('Unexpected brand asset manifest');
}
for (const name of allowed) {
  const bytes = Buffer.from(assets[name], 'base64');
  if (!bytes.length || bytes.toString('base64') !== assets[name]) throw new Error(`Invalid asset: ${name}`);
  const destination = path.join(__dirname, 'public', name);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, bytes);
}
console.log('Prepared approved share cover and favicon assets.');
