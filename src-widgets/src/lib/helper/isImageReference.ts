/**
 * Predicates for treating a cell value as a graphic (image column rendering).
 *
 * Two predicates with different strictness, both operating on the concept of a
 * visual reference (see `CONTEXT.md`):
 *
 * - {@link isImageFileReference} — STRICT. Used by the analysis engine to *classify*
 *   a column as `image`. Only counts values with a strong image signal, so columns of
 *   generic URLs (e.g. HTML links) are not misclassified.
 * - {@link isRenderableAsImage} — LENIENT. Used by the cell renderer to decide whether
 *   to attempt rendering a value as a graphic or fall back to text. Accepts any value
 *   the cell renderer can draw as a graphic (URL/path, `data:image/…`, UTF-8 glyph).
 *
 * @module lib/helper/isImageReference
 */

import { isUrlIcon } from './isUrlIcon';

/** Known raster + vector image file extensions. */
const IMAGE_EXT_RE = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico|apng|tiff?)$/i;

/** `data:image/…` URI prefix (covers `data:image/svg+xml`, `data:image/png;base64`, …). */
const DATA_IMAGE_PREFIX = 'data:image/';

/**
 * True for a short UTF-8 glyph (e.g. an emoji) that the cell renderer renders as a
 * character. Most emoji are 1–2 UTF-16 code units and contain a non-ASCII code point;
 * plain ASCII tokens like "ab" are excluded so they fall back to text.
 *
 * Uses explicit code-point comparison to avoid embedding control characters in a regex.
 */
function isUtf8Glyph(value: string): boolean {
    if (value.length === 0 || value.length > 2) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        // Non-ASCII (incl. surrogate halves, which are outside 0x00–0x7F).
        if (code > 0x7f) {
            return true;
        }
    }
    return false;
}

/**
 * Returns the trimmed string form of `value`, or `null` if it is not a non-empty
 * string. Shared guard for the reference predicates below.
 */
function asNonEmptyTrimmed(value: unknown): string | null {
    if (typeof value !== 'string') {
        return null;
    }
    const trimmed = value.trim();
    return trimmed || null;
}

/**
 * STRICT image-reference predicate (column classification).
 *
 * True only for `data:image/…` URIs and URLs/paths ending in a known image extension.
 *
 * @param value - The value to test.
 * @returns true if the value carries a strong image signal.
 */
export function isImageFileReference(value: unknown): value is string {
    const trimmed = asNonEmptyTrimmed(value);
    if (!trimmed) {
        return false;
    }
    if (trimmed.startsWith(DATA_IMAGE_PREFIX)) {
        return true;
    }
    return IMAGE_EXT_RE.test(trimmed);
}

/**
 * LENIENT image-reference predicate (render-time decision).
 *
 * True for any value the cell renderer can draw as a graphic: a URL or file path
 * (via {@link isUrlIcon}), a `data:image/…` URI, or a short UTF-8 glyph. Anything else
 * (plain text, icon *names* like `mdi-home`) returns false and triggers text fallback.
 *
 * @param value - The value to test.
 * @returns true if the value should be rendered as a graphic in an image column.
 */
export function isRenderableAsImage(value: unknown): value is string {
    const trimmed = asNonEmptyTrimmed(value);
    if (!trimmed) {
        return false;
    }
    if (trimmed.startsWith(DATA_IMAGE_PREFIX) || isUrlIcon(trimmed)) {
        return true;
    }
    return isUtf8Glyph(trimmed);
}
