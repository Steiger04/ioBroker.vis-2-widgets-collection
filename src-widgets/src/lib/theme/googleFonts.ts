/**
 * Google Font loading + `@font-face` injection for the theme wizard.
 *
 * @module lib/theme/googleFonts
 * @remarks
 * The adapter has no backend (`mode: "none"`), so Google Fonts are loaded
 * purely in the browser: {@link loadGoogleFont} fetches the CSS2 stylesheet,
 * extracts the latin woff2 `url()`s, downloads the font binaries, and base64-
 * encodes them into data URIs. The result is stored on the ioBroker theme state
 * (`theme.googleFonts`), so it is permanent, shared across clients, and
 * offline-capable after the one-time fetch. {@link injectGoogleFontFaces} turns
 * the stored entries into `@font-face` rules — the same data-URI mechanism used
 * for the bundled `@fontsource` fonts in `fontCatalogue`.
 */

import type { GoogleFontFace, GoogleFontsMap } from './themeTypes';

/** Marker attribute on the `<style>` element holding the injected `@font-face`s. */
const STYLE_DATA_ATTR = 'data-collection-google-fonts';

/** Google Fonts CSS2 stylesheet endpoint (latin, default weights 400/700). */
const GOOGLE_CSS2_URL = 'https://fonts.googleapis.com/css2';

/**
 * Fetches a Google Font by family name and returns its latin woff2 faces as
 * inlined data URIs.
 *
 * @param name - Google Font family name (e.g. `"Roboto"`, `"Open Sans"`).
 * @returns The latin faces (typically weights 400 + 700) as `{ weight, data }`.
 * @throws When the font cannot be fetched, is not found, or has no latin face.
 */
export async function loadGoogleFont(name: string): Promise<GoogleFontFace[]> {
    const family = name.trim().replace(/\s+/g, '+');
    if (!family) {
        throw new Error('Empty font name');
    }
    const cssUrl = `${GOOGLE_CSS2_URL}?family=${family}&display=swap`;

    const cssResponse = await fetch(cssUrl);
    if (!cssResponse.ok) {
        throw new Error(`Google Fonts CSS request failed (${cssResponse.status})`);
    }
    const css = await cssResponse.text();

    // The CSS2 stylesheet has one `@font-face` block per (subset, weight). The
    // response may be pretty-printed (`@font-face {`, multi-line) or minified
    // (`@font-face{`), so allow optional whitespace before the brace and let the
    // body span newlines (no nested braces inside @font-face).
    const blockRe = /@font-face\s*\{([^}]*)\}/g;
    const allBodies: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = blockRe.exec(css)) !== null) {
        allBodies.push(match[1]);
    }

    // Prefer the `/* latin */` subset (basic Latin + digits + punctuation) to
    // keep storage lean. Fall back to a block whose unicode-range covers basic
    // Latin (U+0000-00FF); else every block (last resort for unusual fonts).
    const latinCommentRe = /\/\*\s*latin\s*\*\/\s*@font-face\s*\{([^}]*)\}/g;
    const bodies: string[] = [];
    while ((match = latinCommentRe.exec(css)) !== null) {
        bodies.push(match[1]);
    }
    if (bodies.length === 0) {
        bodies.push(...allBodies.filter(body => /unicode-range:[^;}]*0000-00FF/i.test(body)));
    }
    if (bodies.length === 0) {
        bodies.push(...allBodies);
    }

    const faces: GoogleFontFace[] = [];
    for (const body of bodies) {
        const weightMatch = body.match(/font-weight:\s*(\d+)/);
        // The modern (woff2) browser stylesheet has a single woff2 `src: url(…)`.
        const urlMatch = body.match(/src:\s*url\(([^)]+)\)/);
        if (!urlMatch) {
            continue;
        }
        const weight = weightMatch ? Number(weightMatch[1]) : 400;
        const data = await fetchAsDataUri(urlMatch[1]);
        faces.push({ weight, data });
    }

    if (faces.length === 0) {
        throw new Error(`No latin face found for "${name}"`);
    }
    return faces;
}

/**
 * Fetches a font binary and returns it as a `data:font/woff2;base64,…` URI.
 */
async function fetchAsDataUri(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Font file request failed (${response.status})`);
    }
    const buffer = await response.arrayBuffer();
    return `data:font/woff2;base64,${arrayBufferToBase64(buffer)}`;
}

/** Base64-encodes an `ArrayBuffer` (chunked to avoid call-stack limits). */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000; // 32 KB
    let binary = '';
    for (let i = 0; i < bytes.length; i += chunkSize) {
        const chunk = bytes.subarray(i, i + chunkSize);
        binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
}

/**
 * Injects `@font-face` rules for every stored Google Font into the document
 * head (idempotent).
 *
 * @remarks
 * Writes all faces into a single `<style data-collection-google-fonts>`
 * element, replacing its content on each call so added/removed fonts are
 * reflected. No-op without a `document` (SSR) or when `googleFonts` is empty.
 */
export function injectGoogleFontFaces(googleFonts: GoogleFontsMap | undefined): void {
    if (typeof document === 'undefined') {
        return;
    }
    let style = document.querySelector<HTMLStyleElement>(`style[${STYLE_DATA_ATTR}]`);
    if (!style) {
        style = document.createElement('style');
        style.setAttribute(STYLE_DATA_ATTR, '');
        document.head.appendChild(style);
    }
    if (!googleFonts) {
        style.textContent = '';
        return;
    }
    const entries = Object.entries(googleFonts);
    if (entries.length === 0) {
        style.textContent = '';
        return;
    }
    const css = entries
        .map(([family, faces]) =>
            faces
                .map(
                    face =>
                        `@font-face{font-family:'${family}';font-style:normal;` +
                        `font-display:swap;font-weight:${face.weight};` +
                        `src:url(${face.data}) format("woff2")}`,
                )
                .join(''),
        )
        .join('');
    style.textContent = css;
}
