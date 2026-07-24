/**
 * Preview-image generator driver.
 *
 * @module scripts/gen-previews
 * @remarks
 * Boots a standalone Vite server (vite.preview.config.ts — no Module Federation),
 * drives headless Chromium to render each preview scene, screenshots `#scene` at
 * 2x, and writes the PNG to all three committed locations (public/img is the Vite
 * build source, widgets/.../img is the shipped visPrev target, documentation/img
 * is the docs mirror).
 *
 * Usage:
 *   npm run gen-previews              # regenerate every scene
 *   npm run gen-previews -- --only input
 *   npm run gen-previews -- --new SliderCollectionWidget [--slug slider]
 */

import { createServer } from 'vite';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '..'); // src-widgets
const REPO = resolve(SRC, '..');
const PORT = 4194;
const BASE = `http://localhost:${PORT}`;

// --- CLI -----------------------------------------------------------------
const argv = process.argv.slice(2);
const flag = name => {
    const i = argv.indexOf(name);
    return i !== -1 ? argv[i + 1] : null;
};
const only = flag('--only');
const newWidget = flag('--new');
const slugOverride = flag('--slug');
const mode = flag('--mode');
if (mode !== null && mode !== 'light' && mode !== 'dark') {
    throw new Error(`--mode must be 'light' or 'dark' (got '${mode}')`);
}

const PREVIEW_HTML = `${BASE}/preview.html`;

// --- output paths --------------------------------------------------------
const outputPaths = slug => [
    resolve(SRC, 'public/img', `prev-collection-${slug}.png`), // vite build source
    resolve(REPO, 'widgets/vis-2-widgets-collection/img', `prev-collection-${slug}.png`), // shipped visPrev
    resolve(SRC, 'src/documentation/img', `collection-${slug}.png`), // docs (no prev- prefix)
];

const slugFor = widgetName => {
    const base = widgetName.replace(/CollectionWidget$/, '');
    return base.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

// --- server lifecycle ----------------------------------------------------
async function startServer() {
    const server = await createServer({
        configFile: resolve(SRC, 'vite.preview.config.ts'),
        root: SRC,
        logLevel: 'error',
    });
    await server.listen(PORT);
    return server;
}

// --- core ----------------------------------------------------------------
// First run triggers Vite dependency pre-bundling (MUI, adapter-react-v5,
// rxjs, …) which can take well over 30s cold; cached in node_modules/.vite
// thereafter. So don't gate on `load`/`networkidle` — gate on the in-page
// readiness signals with a generous timeout.
const COLD_TIMEOUT = 90_000;

function attachConsole(page, label) {
    page.on('console', m => {
        if (m.type() === 'error') {
            console.log(`  [console:${label}] ${m.text()}`);
        }
    });
}

async function discoverSlugs(page) {
    await page.goto(PREVIEW_HTML, { waitUntil: 'domcontentloaded' });
    return page.waitForFunction(() => window.__scenes, { timeout: COLD_TIMEOUT }).then(r => r.jsonValue());
}

async function renderScene(page, slug) {
    const errors = [];
    const onErr = e => errors.push(String(e));
    page.on('pageerror', onErr);
    attachConsole(page, slug);

    const modeQuery = mode ? `&mode=${mode}` : '';
    await page.goto(`${PREVIEW_HTML}?scene=${encodeURIComponent(slug)}${modeQuery}`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.__previewReady === true, { timeout: COLD_TIMEOUT });

    if (errors.length) {
        throw new Error(`Scene "${slug}" errored:\n  ${errors.join('\n  ')}`);
    }

    const buf = await page.locator('#scene').screenshot({ type: 'png', omitBackground: false });
    page.off('pageerror', onErr);

    for (const p of outputPaths(slug)) {
        await mkdir(dirname(p), { recursive: true });
        await writeFile(p, buf);
        console.log(`  ✓ ${p} (${buf.length} bytes)`);
    }
}

async function scaffold(page, widgetName) {
    await page.goto(`${PREVIEW_HTML}?scaffold=${encodeURIComponent(widgetName)}`, { waitUntil: 'domcontentloaded' });
    attachConsole(page, 'scaffold');
    const target = await page
        .waitForFunction(
            () => (window.__scaffoldSource ? { slug: window.__scaffoldSlug, source: window.__scaffoldSource } : false),
            {
                timeout: COLD_TIMEOUT,
            },
        )
        .then(r => r.jsonValue());
    const slug = slugOverride ?? target.slug;
    const file = resolve(SRC, 'src/preview/scenes', `${slug}.tsx`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, target.source);
    console.log(`  ✓ scaffolded ${file}`);
    return slug;
}

async function main() {
    const browser = await chromium.launch();

    try {
        if (newWidget) {
            // Scaffold first (writes the fixture file), then restart the server so
            // Vite's import.meta.glob picks the new file up, then render it.
            let server = await startServer();
            const page = await browser.newPage({ deviceScaleFactor: 2 });
            const slug = await scaffold(page, newWidget);
            await page.close();
            await server.close();

            server = await startServer();
            const page2 = await browser.newPage({ deviceScaleFactor: 2 });
            console.log(`Rendering scaffolded scene "${slug}"…`);
            await renderScene(page2, slug);
            await page2.close();
            await server.close();
            return;
        }

        const server = await startServer();
        const page = await browser.newPage({ deviceScaleFactor: 2 });
        try {
            const slugs = (await discoverSlugs(page)).filter(s => (only ? s === only : true));
            if (!slugs.length) {
                throw new Error(`No scenes to render${only ? ` matching --only ${only}` : ''}.`);
            }
            for (const slug of slugs) {
                console.log(`Rendering "${slug}"…`);
                await renderScene(page, slug);
            }
        } finally {
            await page.close();
            await server.close();
        }
    } finally {
        await browser.close();
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
