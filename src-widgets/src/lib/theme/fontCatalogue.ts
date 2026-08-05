/**
 * Bundled font catalogue + lazy `@font-face` loading (ADR-0020).
 *
 * @module lib/theme/fontCatalogue
 * @remarks
 * Holds the curated `@fontsource` family selection for the theme studio and injects
 * the matching `@font-face` rules into the document **on demand**:
 * {@link ensureBundledFontFaces} dynamically imports the latin 400/700 woff2 faces
 * (Vite `?inline` — data URIs inside tiny async chunks) and injects the rules.
 *
 * Why lazy: the catalogue previously imported all 20 woff2 files statically, so
 * every widget bundle paid ~400–600 KB of base64 at load — even though a theme
 * references at most one bundled family (and most reference none). Now the faces
 * load only when actually needed:
 * - runtime widgets: {@link module:hooks/useCollectionTheme} ensures the family the
 *   effective theme's `typography.fontFamily` references (via {@link bundledFamiliesOf});
 * - the studio panel: opening the typography section ensures the whole catalogue so
 *   the family select previews render in their real faces.
 *
 * Inlining — rather than importing `@fontsource` CSS, which references the font
 * files by relative `url()` — keeps the `@font-face` rules self-contained: there
 * is no external font fetch, so loading works identically in the Vite dev server
 * and the production build. (The ioBroker web server does not reliably serve
 * binary font assets from the widget directory, which broke font loading —
 * "Failed to decode downloaded font" — when fonts were emitted as files.)
 *
 * {@link FONT_CATALOGUE} drives the font-family selector; each entry's `value`
 * is the CSS stack persisted into `typography.fontFamily` — with a generic
 * fallback so rendering degrades gracefully if a face is ever missing.
 */

/** One lazily-loadable bundled face (family + weight + data-URI loader). */
interface BundledFaceLoader {
    /** CSS `font-family` name (must match the quoted name in {@link FONT_CATALOGUE}). */
    family: string;
    /** Numeric CSS font-weight. */
    weight: 400 | 700;
    /** Dynamic-import loader: resolves to the `?inline` module (default export = data URI). */
    load: () => Promise<{ default: string }>;
}

// Bundled families — latin subset, weights 400 (regular) + 700 (bold). The dynamic
// imports keep the data URIs out of the initial bundle; each literal specifier
// becomes its own async chunk (Vite cannot code-split variable specifiers).
const BUNDLED_FACE_LOADERS: ReadonlyArray<BundledFaceLoader> = [
    {
        family: 'Roboto',
        weight: 400,
        load: () => import('@fontsource/roboto/files/roboto-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Roboto',
        weight: 700,
        load: () => import('@fontsource/roboto/files/roboto-latin-700-normal.woff2?inline'),
    },
    { family: 'Inter', weight: 400, load: () => import('@fontsource/inter/files/inter-latin-400-normal.woff2?inline') },
    { family: 'Inter', weight: 700, load: () => import('@fontsource/inter/files/inter-latin-700-normal.woff2?inline') },
    {
        family: 'Open Sans',
        weight: 400,
        load: () => import('@fontsource/open-sans/files/open-sans-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Open Sans',
        weight: 700,
        load: () => import('@fontsource/open-sans/files/open-sans-latin-700-normal.woff2?inline'),
    },
    {
        family: 'Montserrat',
        weight: 400,
        load: () => import('@fontsource/montserrat/files/montserrat-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Montserrat',
        weight: 700,
        load: () => import('@fontsource/montserrat/files/montserrat-latin-700-normal.woff2?inline'),
    },
    {
        family: 'Roboto Slab',
        weight: 400,
        load: () => import('@fontsource/roboto-slab/files/roboto-slab-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Roboto Slab',
        weight: 700,
        load: () => import('@fontsource/roboto-slab/files/roboto-slab-latin-700-normal.woff2?inline'),
    },
    {
        family: 'Merriweather',
        weight: 400,
        load: () => import('@fontsource/merriweather/files/merriweather-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Merriweather',
        weight: 700,
        load: () => import('@fontsource/merriweather/files/merriweather-latin-700-normal.woff2?inline'),
    },
    {
        family: 'Playfair Display',
        weight: 400,
        load: () => import('@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Playfair Display',
        weight: 700,
        load: () => import('@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff2?inline'),
    },
    {
        family: 'JetBrains Mono',
        weight: 400,
        load: () => import('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2?inline'),
    },
    {
        family: 'JetBrains Mono',
        weight: 700,
        load: () => import('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2?inline'),
    },
    {
        family: 'Oswald',
        weight: 400,
        load: () => import('@fontsource/oswald/files/oswald-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Oswald',
        weight: 700,
        load: () => import('@fontsource/oswald/files/oswald-latin-700-normal.woff2?inline'),
    },
    {
        family: 'Nunito',
        weight: 400,
        load: () => import('@fontsource/nunito/files/nunito-latin-400-normal.woff2?inline'),
    },
    {
        family: 'Nunito',
        weight: 700,
        load: () => import('@fontsource/nunito/files/nunito-latin-700-normal.woff2?inline'),
    },
];

/** Faces already injected (`family:weight`). */
const injectedFaces = new Set<string>();

/** In-flight face loads (`family:weight` → promise), so concurrent ensure calls share one fetch. */
const pendingFaces = new Map<string, Promise<void>>();

/** Loads + injects ONE face (idempotent; concurrent callers share the same promise). */
function ensureFace(loader: BundledFaceLoader): Promise<void> {
    const key = `${loader.family}:${loader.weight}`;
    if (injectedFaces.has(key) || typeof document === 'undefined') {
        return Promise.resolve();
    }
    const pending = pendingFaces.get(key);
    if (pending) {
        return pending;
    }
    const promise = loader
        .load()
        .then(mod => {
            const style = document.createElement('style');
            style.setAttribute('data-collection-fonts', '');
            style.textContent = `@font-face{font-family:'${loader.family}';font-style:normal;font-display:swap;font-weight:${loader.weight};src:url(${mod.default}) format("woff2")}`;
            document.head.appendChild(style);
            injectedFaces.add(key);
        })
        .finally(() => pendingFaces.delete(key));
    pendingFaces.set(key, promise);
    return promise;
}

/**
 * Ensures the bundled `@font-face` rules are injected. With `families`, only those
 * families (both weights each); without, the whole catalogue (the studio's family
 * select previews every bundled entry in its real face). Idempotent, SSR-safe.
 *
 * @param families - CSS family names to ensure (defaults to all bundled families).
 */
export function ensureBundledFontFaces(families?: readonly string[]): Promise<void> {
    if (typeof document === 'undefined') {
        return Promise.resolve();
    }
    const loaders = families
        ? BUNDLED_FACE_LOADERS.filter(loader => families.includes(loader.family))
        : BUNDLED_FACE_LOADERS;
    return Promise.all(loaders.map(ensureFace)).then(() => undefined);
}

/** Selector group: bundled `@fontsource` families vs. generic system stacks. */
export type FontGroup = 'bundled' | 'system';

/** One selectable font-family entry. */
export interface FontCatalogueEntry {
    /** CSS stack persisted into `typography.fontFamily` (with generic fallback). */
    value: string;
    /** Display label (proper noun — not translated). For bundled entries this IS the CSS family name. */
    label: string;
    /** Selector group. */
    group: FontGroup;
}

/**
 * Curated font-family selection offered in the wizard's typography section.
 *
 * `value` is the exact string written to `typography.fontFamily`; multi-word
 * family names are quoted, and every entry ends in a generic family so the
 * browser can fall back if the named face is unavailable.
 */
export const FONT_CATALOGUE: ReadonlyArray<FontCatalogueEntry> = [
    // Bundled @fontsource families — render reliably, also offline. Ordered by
    // use case: neutral/humanist sans, geometric sans, serif, display serif,
    // slab, monospace, condensed, rounded, default sans.
    { value: "'Inter', system-ui, sans-serif", label: 'Inter', group: 'bundled' },
    { value: "'Open Sans', system-ui, sans-serif", label: 'Open Sans', group: 'bundled' },
    { value: "'Montserrat', system-ui, sans-serif", label: 'Montserrat', group: 'bundled' },
    { value: "'Merriweather', Georgia, serif", label: 'Merriweather', group: 'bundled' },
    { value: "'Playfair Display', Georgia, serif", label: 'Playfair Display', group: 'bundled' },
    { value: "'Roboto Slab', Georgia, serif", label: 'Roboto Slab', group: 'bundled' },
    { value: "'JetBrains Mono', ui-monospace, monospace", label: 'JetBrains Mono', group: 'bundled' },
    { value: "'Oswald', system-ui, sans-serif", label: 'Oswald', group: 'bundled' },
    { value: "'Nunito', system-ui, sans-serif", label: 'Nunito', group: 'bundled' },
    { value: "'Roboto', system-ui, sans-serif", label: 'Roboto', group: 'bundled' },
    // Common named system fonts — render with the local face if installed, else
    // the generic fallback. No bundle cost; availability depends on the device.
    { value: "'Arial', sans-serif", label: 'Arial', group: 'system' },
    { value: "'Helvetica Neue', Helvetica, Arial, sans-serif", label: 'Helvetica', group: 'system' },
    { value: "'Segoe UI', sans-serif", label: 'Segoe UI', group: 'system' },
    { value: "'Verdana', sans-serif", label: 'Verdana', group: 'system' },
    { value: "'Tahoma', sans-serif", label: 'Tahoma', group: 'system' },
    { value: "'Trebuchet MS', sans-serif", label: 'Trebuchet MS', group: 'system' },
    { value: "'Calibri', sans-serif", label: 'Calibri', group: 'system' },
    { value: "'Georgia', serif", label: 'Georgia', group: 'system' },
    { value: "'Times New Roman', Times, serif", label: 'Times New Roman', group: 'system' },
    { value: "'Palatino Linotype', Palatino, serif", label: 'Palatino', group: 'system' },
    { value: "'Garamond', serif", label: 'Garamond', group: 'system' },
    { value: "'Cambria', serif", label: 'Cambria', group: 'system' },
    { value: "'Courier New', monospace", label: 'Courier New', group: 'system' },
    { value: "'Consolas', monospace", label: 'Consolas', group: 'system' },
    { value: "'Lucida Console', monospace", label: 'Lucida Console', group: 'system' },
    // Generic stacks — no bundle cost; rendering depends on the device.
    { value: 'system-ui, sans-serif', label: 'System UI', group: 'system' },
    { value: 'sans-serif', label: 'Sans-serif', group: 'system' },
    { value: 'Georgia, "Times New Roman", serif', label: 'Serif', group: 'system' },
    { value: 'ui-monospace, monospace', label: 'Monospace', group: 'system' },
];

/** Bundled families only (group order preserved). */
export const BUNDLED_FONTS: ReadonlyArray<FontCatalogueEntry> = FONT_CATALOGUE.filter(
    entry => entry.group === 'bundled',
);

/** System stacks only (group order preserved). */
export const SYSTEM_FONTS: ReadonlyArray<FontCatalogueEntry> = FONT_CATALOGUE.filter(entry => entry.group === 'system');

/** Sentinel select value marking the "custom free-text" option. */
export const CUSTOM_FONT_VALUE = '__custom__';

/**
 * Maps a stored `typography.fontFamily` value to the bundled families it references
 * (0 or 1 — a catalogue value names exactly one family). Non-catalogue values
 * (system stacks, custom, Google-Font stacks) yield none.
 *
 * @param fontFamily - The stored CSS stack (or undefined when unset).
 */
export function bundledFamiliesOf(fontFamily: string | undefined): string[] {
    if (!fontFamily) {
        return [];
    }
    const entry = FONT_CATALOGUE.find(e => e.value === fontFamily);
    return entry && entry.group === 'bundled' ? [entry.label] : [];
}

/**
 * Maps a stored `typography.fontFamily` value to the wizard's select state:
 * a matching catalogue entry's `value`, the {@link CUSTOM_FONT_VALUE} sentinel,
 * or `''` (none / MUI default).
 */
export function resolveFontSelectValue(fontFamily: string | undefined): string {
    if (!fontFamily) {
        return '';
    }
    return FONT_CATALOGUE.some(entry => entry.value === fontFamily) ? fontFamily : CUSTOM_FONT_VALUE;
}
