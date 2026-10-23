#!/usr/bin/env node

/**
 * Fail if any built page links to an internal route without a trailing slash.
 *
 * GitHub Pages serves every route as /route/index.html, so /route 301-redirects
 * to /route/. Internal links, canonicals and og:url must use the slash form or
 * every click and crawl costs an extra redirect hop. lychee (links.yml) checks
 * that link targets exist but treats /route and /route/ as the same directory,
 * so it can't catch this.
 *
 * Run after `npm run build`.
 */

const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const SITE = 'https://target-ops.io';

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

const problems = [];

for (const file of htmlFiles(DIST)) {
  const html = fs.readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|content)="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith(SITE)) continue;
    if (href.startsWith('//')) continue;
    const urlPath = href.replace(SITE, '').split(/[?#]/)[0];
    if (urlPath === '' || urlPath.endsWith('/')) continue;
    // Files (/assets/x.js, /favicon.ico, /sitemap.xml) are not routes
    if (path.extname(urlPath)) continue;
    problems.push(`${path.relative(DIST, file)}: ${href}`);
  }
}

if (problems.length) {
  console.error(`💥 ${problems.length} internal link(s) missing a trailing slash (each one 301-redirects):\n`);
  problems.forEach(p => console.error(`   ${p}`));
  process.exit(1);
}

console.log('✅ All internal links use canonical trailing-slash URLs.');
