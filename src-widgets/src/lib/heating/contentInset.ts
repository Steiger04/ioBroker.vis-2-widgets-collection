/**
 * The Inhaltsabstand of the heating family: the space a type keeps inside the card around its
 * content (ADR-0122 Nachtrag 2026-11-27, ADR-0123 Nr. 4).
 *
 * @module lib/heating/contentInset
 * @remarks
 * Stored per widget in the theme's spacing units. The size-stage module turns it into px in the
 * theme it draws in, keeps it all round Voll and Einfach, half of it in the tile and all of it in the
 * Mini-Dialog, and hands the type's rule the box without it. Pure; no component.
 */

/** The field's range, step and standard, in spacing units. */
export const CONTENT_INSET = { min: 0, max: 4, step: 0.5, standard: 1.5 } as const;

/**
 * The Inhaltsabstand a stored value stands for, in spacing units.
 *
 * @remarks
 * Unset, emptied or not a number reads the standard; below 0 reads 0. A value above the slider's
 * range stays as stored (a hand-written one renders, like the frame's padding).
 * @param stored - The stored value (number, numeric string, or anything else).
 * @returns The spacing units.
 */
export function contentInsetUnits(stored: unknown): number {
    const value = typeof stored === 'string' && stored.trim() !== '' ? Number(stored) : stored;
    if (typeof value !== 'number' || !Number.isFinite(value)) {
        return CONTENT_INSET.standard;
    }
    return Math.max(CONTENT_INSET.min, value);
}
