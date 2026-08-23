/**
 * Data pins for the 17 ioBroker.echarts theme palettes (ADR-0053).
 *
 * @module EchartsCollectionWidget/themePalettes.test
 * @remarks
 * The arrays are adopted VERBATIM from the adapter's `THEMES` table
 * (`ioBroker.echarts` src/lib/ChartOption.ts, Apache-2.0). Three palettes are pinned here as
 * independently written literals — copied from the adapter source, NOT imported — so an accidental
 * edit of a colour value cannot pass unnoticed (the pins would still pass if both sides shared the
 * same import).
 */
import { describe, expect, it } from 'vitest';

import { THEME_PALETTES } from './themePalettes';

/** The 17 palette names of ADR-0053, in dropdown order. */
const EXPECTED_KEYS = [
    'dark',
    'dark-bold',
    'dark-blue',
    'gray',
    'vintage',
    'macarons',
    'infographic',
    'shine',
    'roma',
    'azul',
    'bee-inspired',
    'blue',
    'royal',
    'tech-blue',
    'red',
    'red-velvet',
    'green',
] as const;

describe('THEME_PALETTES — verbatim adapter data (ADR-0053)', () => {
    it('carries exactly the 17 spec palettes, in dropdown order', () => {
        expect(Object.keys(THEME_PALETTES)).toEqual([...EXPECTED_KEYS]);
    });

    it('keys stay dropdown-safe (lowercase kebab, no sentinel collision)', () => {
        // ColorsSection encodes the choice as `preset:<name>` and decodes via slice(7) — a key
        // containing ':' would break the round-trip; 'theme'/'custom' are the bare sentinels.
        for (const key of Object.keys(THEME_PALETTES)) {
            expect(key).toMatch(/^[a-z][a-z0-9-]*$/);
        }
    });

    it('every palette is a non-empty list of distinct hex colours', () => {
        for (const [name, colors] of Object.entries(THEME_PALETTES)) {
            expect(colors.length, `${name} length`).toBeGreaterThanOrEqual(6);
            for (const c of colors) {
                expect(c, `${name} colour format`).toMatch(/^#[0-9a-fA-F]{6}$/);
            }
            expect(new Set(colors).size, `${name} no duplicates`).toBe(colors.length);
        }
    });

    // Verbatim pins — literals below are copied from the adapter source, not imported.
    it('vintage is adopted verbatim', () => {
        expect(THEME_PALETTES.vintage).toEqual([
            '#d87c7c',
            '#919e8b',
            '#d7ab82',
            '#6e7074',
            '#61a0a8',
            '#efa18d',
            '#787464',
            '#cc7e63',
            '#724e58',
            '#4b565b',
        ]);
    });

    it('infographic is adopted verbatim', () => {
        expect(THEME_PALETTES.infographic).toEqual([
            '#C1232B',
            '#27727B',
            '#FCCE10',
            '#E87C25',
            '#B5C334',
            '#FE8463',
            '#9BCA63',
            '#FAD860',
            '#F3A43B',
            '#60C0DD',
            '#D7504B',
            '#C6E579',
            '#F4E001',
            '#F0805A',
            '#26C0C0',
        ]);
    });

    it('red-velvet is adopted verbatim', () => {
        expect(THEME_PALETTES['red-velvet']).toEqual([
            '#8b1a2d',
            '#a7314b',
            '#e6004c',
            '#ff8066',
            '#8e5c4e',
            '#ff1a66',
            '#d6c582',
            '#f0d4af',
        ]);
    });
});
