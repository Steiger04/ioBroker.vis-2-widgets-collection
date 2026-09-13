/**
 * Tests for the X sample-values line's pure core (zuordnung-redesign ticket 04) — the format
 * cases per detected type and the honest gates (row index, drift, null-only).
 *
 * @module EchartsCollectionWidget/editor/xSampleValues.test
 */
import { describe, expect, it } from 'vitest';

import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis';
import { formatSampleValue, xSampleLine } from './xSampleValues';

/** Local-clock ms — the formatted expectation must not depend on the runner's timezone. */
const local = (y: number, m1: number, d: number, h = 0, min = 0): number => new Date(y, m1 - 1, d, h, min).getTime();

const column = (over: Partial<JsonTableColumn> & Pick<JsonTableColumn, 'path' | 'type'>): JsonTableColumn => ({
    nullable: false,
    typeCounts: {},
    nullCount: 0,
    distinctCount: 0,
    confidence: 1,
    ...over,
});

describe('formatSampleValue — per detected type', () => {
    it('dates render through the moment core in the host locale (L LT)', () => {
        const iso = new Date(local(2026, 10, 12, 12, 5)).toISOString();
        expect(formatSampleValue(iso, 'date', 'ISO-8601', 'de')).toBe('12.10.2026 12:05');
        expect(formatSampleValue(iso, 'date', 'ISO-8601', 'en')).toBe('10/12/2026 12:05 PM');
    });

    it("epoch numbers parse through the column's date format", () => {
        const ms = local(2026, 10, 12, 12, 5);
        expect(formatSampleValue(ms / 1000, 'date', 'epoch-s', 'de')).toBe('12.10.2026 12:05');
    });

    it('numbers localize through Intl in the host locale', () => {
        expect(formatSampleValue(1234.5, 'number', undefined, 'de')).toBe('1.234,5');
        expect(formatSampleValue(1234.5, 'number', undefined, 'en')).toBe('1,234.5');
    });

    it('strings ride raw, capped at 24 characters with an ellipsis', () => {
        expect(formatSampleValue('Alufelge', 'string', undefined, 'de')).toBe('Alufelge');
        const long = 'a'.repeat(30);
        expect(formatSampleValue(long, 'string', undefined, 'de')).toBe(`${'a'.repeat(23)}…`);
    });

    it('booleans render raw; unparsable dates fall back to raw text', () => {
        expect(formatSampleValue(true, 'boolean', undefined, 'de')).toBe('true');
        expect(formatSampleValue('not a date', 'date', 'ISO-8601', 'de')).toBe('not a date');
    });
});

describe('xSampleLine — the honest gates', () => {
    const COLUMNS: JsonTableColumn[] = [
        column({ path: 'name', type: 'string', samples: ['Alufelge', 'Stahlfelge'] }),
        column({ path: 'when', type: 'date', dateFormat: 'ISO-8601', samples: ['2026-10-12T12:05:00Z'] }),
        column({ path: 'empty', type: 'string' }),
    ];

    it("joins the selected column's samples", () => {
        expect(xSampleLine(COLUMNS, 'name', 'de')).toBe('Alufelge, Stahlfelge');
    });

    it('the row index (empty xpath) carries no line', () => {
        expect(xSampleLine(COLUMNS, '', 'de')).toBeNull();
    });

    it('a drifted path (not in the schema) carries no line', () => {
        expect(xSampleLine(COLUMNS, 'gone.column', 'de')).toBeNull();
    });

    it('a null-only column (no samples) carries no line', () => {
        expect(xSampleLine(COLUMNS, 'empty', 'de')).toBeNull();
    });
});
