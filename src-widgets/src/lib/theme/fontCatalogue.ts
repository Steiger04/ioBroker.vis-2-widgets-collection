/**
 * Bundled font catalogue + `@font-face` loading for the theme wizard.
 *
 * @module lib/theme/fontCatalogue
 * @remarks
 * Imports the latin 400/700 woff2 weights of a curated set of `@fontsource`
 * families as inlined data URIs (via the Vite `?inline` query) and injects the
 * matching `@font-face` rules into the document. Inlining — rather than
 * importing `@fontsource` CSS, which references the font files by relative
 * `url()` — keeps the `@font-face` rules self-contained: there is no external
 * font fetch, so loading works identically in the Vite dev server and the
 * production build. (The ioBroker web server does not reliably serve binary
 * font assets from the widget directory, which broke font loading —
 * "Failed to decode downloaded font" — when fonts were emitted as files.)
 *
 * {@link FONT_CATALOGUE} drives the font-family selector; each entry's `value`
 * is the CSS stack persisted into `typography.fontFamily` — with a generic
 * fallback so rendering degrades gracefully if a face is ever missing.
 */

// Bundled families — latin subset, weights 400 (regular) + 700 (bold), inlined
// as data URIs so no external font file is fetched at runtime.
import roboto400 from '@fontsource/roboto/files/roboto-latin-400-normal.woff2?inline';
import roboto700 from '@fontsource/roboto/files/roboto-latin-700-normal.woff2?inline';
import inter400 from '@fontsource/inter/files/inter-latin-400-normal.woff2?inline';
import inter700 from '@fontsource/inter/files/inter-latin-700-normal.woff2?inline';
import openSans400 from '@fontsource/open-sans/files/open-sans-latin-400-normal.woff2?inline';
import openSans700 from '@fontsource/open-sans/files/open-sans-latin-700-normal.woff2?inline';
import lato400 from '@fontsource/lato/files/lato-latin-400-normal.woff2?inline';
import lato700 from '@fontsource/lato/files/lato-latin-700-normal.woff2?inline';
import montserrat400 from '@fontsource/montserrat/files/montserrat-latin-400-normal.woff2?inline';
import montserrat700 from '@fontsource/montserrat/files/montserrat-latin-700-normal.woff2?inline';
import sourceSans3_400 from '@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2?inline';
import sourceSans3_700 from '@fontsource/source-sans-3/files/source-sans-3-latin-700-normal.woff2?inline';
import notoSans400 from '@fontsource/noto-sans/files/noto-sans-latin-400-normal.woff2?inline';
import notoSans700 from '@fontsource/noto-sans/files/noto-sans-latin-700-normal.woff2?inline';
import robotoMono400 from '@fontsource/roboto-mono/files/roboto-mono-latin-400-normal.woff2?inline';
import robotoMono700 from '@fontsource/roboto-mono/files/roboto-mono-latin-700-normal.woff2?inline';
import robotoSlab400 from '@fontsource/roboto-slab/files/roboto-slab-latin-400-normal.woff2?inline';
import robotoSlab700 from '@fontsource/roboto-slab/files/roboto-slab-latin-700-normal.woff2?inline';

/** A bundled `@font-face` rule to inject (family + weight + inlined woff2). */
interface BundledFontFace {
    /** CSS `font-family` name (must match the quoted name in {@link FONT_CATALOGUE}). */
    family: string;
    /** Numeric CSS font-weight. */
    weight: 400 | 700;
    /** Inlined woff2 data URI. */
    data: string;
}

/** Bundled `@font-face` rules, in catalogue order. */
const BUNDLED_FONT_FACES: ReadonlyArray<BundledFontFace> = [
    { family: 'Roboto', weight: 400, data: roboto400 },
    { family: 'Roboto', weight: 700, data: roboto700 },
    { family: 'Inter', weight: 400, data: inter400 },
    { family: 'Inter', weight: 700, data: inter700 },
    { family: 'Open Sans', weight: 400, data: openSans400 },
    { family: 'Open Sans', weight: 700, data: openSans700 },
    { family: 'Lato', weight: 400, data: lato400 },
    { family: 'Lato', weight: 700, data: lato700 },
    { family: 'Montserrat', weight: 400, data: montserrat400 },
    { family: 'Montserrat', weight: 700, data: montserrat700 },
    { family: 'Source Sans 3', weight: 400, data: sourceSans3_400 },
    { family: 'Source Sans 3', weight: 700, data: sourceSans3_700 },
    { family: 'Noto Sans', weight: 400, data: notoSans400 },
    { family: 'Noto Sans', weight: 700, data: notoSans700 },
    { family: 'Roboto Mono', weight: 400, data: robotoMono400 },
    { family: 'Roboto Mono', weight: 700, data: robotoMono700 },
    { family: 'Roboto Slab', weight: 400, data: robotoSlab400 },
    { family: 'Roboto Slab', weight: 700, data: robotoSlab700 },
];

let fontFacesInjected = false;

/**
 * Injects the bundled `@font-face` rules into the document head (idempotent).
 *
 * @remarks
 * No-op when there is no `document` (SSR) or when already injected. Runs once
 * on module import, so the fonts are available wherever the catalogue is used
 * — runtime widgets via {@link module:components/CollectionProvider} and the
 * wizard preview via {@link module:ThemeConfigWizard/sections/TypographySection}.
 */
function injectFontFaces(): void {
    if (fontFacesInjected || typeof document === 'undefined') {
        return;
    }
    const css = BUNDLED_FONT_FACES.map(
        face =>
            `@font-face{font-family:'${face.family}';font-style:normal;font-display:swap;font-weight:${face.weight};src:url(${face.data}) format("woff2")}`,
    ).join('');
    const style = document.createElement('style');
    style.setAttribute('data-collection-fonts', '');
    style.textContent = css;
    document.head.appendChild(style);
    fontFacesInjected = true;
}

injectFontFaces();

/** Selector group: bundled `@fontsource` families vs. generic system stacks. */
export type FontGroup = 'bundled' | 'system';

/** One selectable font-family entry. */
export interface FontCatalogueEntry {
    /** CSS stack persisted into `typography.fontFamily` (with generic fallback). */
    value: string;
    /** Display label (proper noun — not translated). */
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
    // Bundled @fontsource families — render reliably, also offline.
    { value: "'Roboto', system-ui, sans-serif", label: 'Roboto', group: 'bundled' },
    { value: "'Inter', system-ui, sans-serif", label: 'Inter', group: 'bundled' },
    { value: "'Open Sans', system-ui, sans-serif", label: 'Open Sans', group: 'bundled' },
    { value: "'Lato', system-ui, sans-serif", label: 'Lato', group: 'bundled' },
    { value: "'Montserrat', system-ui, sans-serif", label: 'Montserrat', group: 'bundled' },
    { value: "'Source Sans 3', system-ui, sans-serif", label: 'Source Sans 3', group: 'bundled' },
    { value: "'Noto Sans', system-ui, sans-serif", label: 'Noto Sans', group: 'bundled' },
    { value: "'Roboto Mono', ui-monospace, monospace", label: 'Roboto Mono', group: 'bundled' },
    { value: "'Roboto Slab', Georgia, serif", label: 'Roboto Slab', group: 'bundled' },
    // Generic system stacks — no bundle cost; rendering depends on the device.
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
