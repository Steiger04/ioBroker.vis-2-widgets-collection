/**
 * UTF-8 safe Base64 helpers for persisted widget-config blobs.
 *
 * @module lib/encoding
 * @remarks
 * The `b64:` prefix avoids vis-2's `extractBinding` regex matching curly braces in JSON
 * values (JsonTable precedent). Encoding is UTF-8 safe so non-ASCII content (umlauts,
 * CJK) round-trips correctly.
 */

/** Prefix marking a Base64-encoded blob. */
const B64_PREFIX = 'b64:';

/**
 * Encode a UTF-8 string to Base64 safely.
 *
 * @param str - The UTF-8 string to encode.
 * @returns Base64 encoded string.
 */
export const utf8ToBase64 = (str: string): string => {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
};

/**
 * Decode a Base64 string to UTF-8 safely.
 *
 * @param base64 - The Base64 string to decode.
 * @returns Decoded UTF-8 string.
 */
export const base64ToUtf8 = (base64: string): string => {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
};

/**
 * Decode a persisted blob: strip the `b64:` prefix and decode when present, else return raw.
 *
 * @remarks Backward compatible with plain JSON strings (no prefix).
 */
export const decodeBlob = (raw: string | undefined | null): string => {
    if (!raw) {
        return '';
    }
    return raw.startsWith(B64_PREFIX) ? base64ToUtf8(raw.slice(B64_PREFIX.length)) : raw;
};

/**
 * Encode a string into the persisted `b64:`-prefixed form.
 */
export const encodeBlob = (str: string): string => `${B64_PREFIX}${utf8ToBase64(str)}`;
