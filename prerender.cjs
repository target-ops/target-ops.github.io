#!/usr/bin/env node

/**
 * Prerender static content into each route's index.html.
 *
 * The site is a client-side SPA: `vite build` + generate-pages.cjs produce a
 * correct <head> (title, meta, canonical, JSON-LD) per route but an EMPTY
 * <div id="root"></div>. Search crawlers index that empty body first, which is
 * why content-rich pages (e.g. /solutions/devops-consulting) historically
 * ranked far down despite real content existing client-side.
 *
 * This script boots each built route in headless Chrome, lets React render,
 * and writes the rendered #root HTML back into the static file — so crawlers
 * (and no-JS visitors) get the full content. React still takes over on load.
 *
 * Chrome resolution order:
 *   1. PUPPETEER_EXECUTABLE_PATH (set this in CI)
 *   2. common macOS / Linux Chrome paths
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
// puppeteer-core is ESM; load via dynamic import so this .cjs works on
// every Node version (require() of ESM throws on Node < 22).

const DIST = path.join(__dirname, 'dist');
const PORT = 4178;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.ttf': 'font/ttf', '.txt': 'text/plain', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json',
};

function resolveChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ].filter(Boolean);
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error(
    'No Chrome/Chromium executable found. Set PUPPETEER_EXECUTABLE_PATH to a Chrome binary.'
  );
}

// Minimal static file server for dist/. Serves each route's own index.html;
// falls back to root index.html for any unmatched client route.
function startServer() {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);
    try {
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
      if (!fs.existsSync(filePath)) {
        // Asset misses → 404; route misses → SPA shell
        if (path.extname(urlPath)) { res.writeHead(404); return res.end('not found'); }
        filePath = path.join(DIST, 'index.html');
      }
      const body = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      res.end(body);
    } catch (e) {
      res.writeHead(500); res.end(String(e));
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// Find every app route to prerender: dist/**/index.html that is NOT a
// meta-refresh redirect stub and NOT the 404 page.
function findRoutes(dir = DIST, base = '') {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...findRoutes(full, `${base}/${entry.name}`));
    } else if (entry.name === 'index.html') {
      const html = fs.readFileSync(full, 'utf8');
      if (/http-equiv="refresh"/.test(html)) continue; // redirect stub
      routes.push({ route: base === '' ? '/' : base, file: full });
    }
  }
  return routes;
}

async function run() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('❌ dist/ not found. Run "npm run build" first.');
    process.exit(1);
  }

  const puppeteer = (await import('puppeteer-core')).default;
  const executablePath = resolveChrome();
  console.log(`🧭 Using Chrome: ${executablePath}`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const routes = findRoutes();
  console.log(`🚀 Prerendering ${routes.length} routes...\n`);

  let ok = 0, skipped = 0, failed = 0;
  for (const { route, file } of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      // Wait until React has actually rendered something into #root.
      await page.waitForFunction(
        () => { const r = document.getElementById('root'); return r && r.children.length > 0 && r.innerText.trim().length > 50; },
        { timeout: 15000 }
      );
      const rendered = await page.$eval('#root', (el) => el.innerHTML);
      // Capture react-helmet-injected JSON-LD from the rendered <head>
      // (e.g. Service / FAQPage / Article schema) so crawlers get it too.
      const headSchemas = await page.$$eval(
        'head script[type="application/ld+json"]',
        (els) => els.map((e) => e.textContent)
      );

      let html = fs.readFileSync(file, 'utf8');
      if (!/<div id="root"><\/div>/.test(html)) {
        console.log(`  ⏭️  ${route} — no empty #root marker, skipped`);
        skipped++;
      } else {
        // Inject any helmet schema not already present in the static head.
        const extra = headSchemas
          .filter((s) => s && !html.includes(s.trim()))
          .map((s) => `<script type="application/ld+json">${s}</script>`)
          .join('\n    ');
        if (extra) html = html.replace('</head>', `    ${extra}\n  </head>`);

        html = html.replace(
          '<div id="root"></div>',
          `<div id="root" data-prerendered="true">${rendered}</div>`
        );
        fs.writeFileSync(file, html);
        const chars = rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length;
        const schemaNote = extra ? ` (+${extra.match(/ld\+json/g).length} schema)` : '';
        console.log(`  ✅ ${route} — ${chars} chars of content embedded${schemaNote}`);
        ok++;
      }
    } catch (e) {
      console.log(`  ❌ ${route} — ${e.message.split('\n')[0]}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\n📊 Prerender: ${ok} embedded, ${skipped} skipped, ${failed} failed.`);
  if (failed > 0) process.exitCode = 1;
}

run().catch((e) => { console.error(e); process.exit(1); });
