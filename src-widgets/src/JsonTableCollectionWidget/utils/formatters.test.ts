import { describe, expect, it } from 'vitest';
import { formatDateValue, normalizeToIsoDate, toDateMs } from './formatters';
import type { DateFormatId } from '../../hooks/useJsonTableAnalysis/types';

// Characterization tests: lock the CURRENT behaviour of the three date functions
// before the parseDateToMs consolidation (candidate B, Q3=A). Expected values are
// chosen to be timezone-robust: local-constructor equivalence for local-parsing
// paths, UTC-explicit instants for normalizeToIsoDate (which slices toISOString),
// and year tokens for formatDateValue.

const DMY = 'dd.MM.yyyy' as DateFormatId;
const MDY = 'MM/dd/yyyy' as DateFormatId;

describe('toDateMs', () => {
    it('returns null for empty-ish inputs', () => {
        expect(toDateMs(null)).toBeNull();
        expect(toDateMs(undefined)).toBeNull();
        expect(toDateMs('')).toBeNull();
    });

    it('passes epoch-ms through (>= 1e11)', () => {
        expect(toDateMs(1_700_000_000_000)).toBe(1_700_000_000_000);
    });

    it('scales epoch-seconds to ms (< 1e11)', () => {
        expect(toDateMs(1_700_000_000)).toBe(1_700_000_000_000);
    });

    it('returns getTime for a Date object', () => {
        expect(toDateMs(new Date(1_700_000_000_000))).toBe(1_700_000_000_000);
    });

    it('parses European dd.MM.yyyy as local midnight', () => {
        expect(toDateMs('15.06.2024', DMY)).toBe(new Date(2024, 5, 15).getTime());
    });

    it('parses US MM/dd/yyyy as local midnight', () => {
        expect(toDateMs('06/15/2024', MDY)).toBe(new Date(2024, 5, 15).getTime());
    });

    it('parses pure yyyy-MM-dd as local midnight (not UTC)', () => {
        expect(toDateMs('2024-06-15')).toBe(new Date(2024, 5, 15).getTime());
    });

    it('parses numeric strings as epoch (s vs ms by 1e11)', () => {
        expect(toDateMs('1700000000')).toBe(1_700_000_000_000);
    });

    it('returns null for unparseable strings', () => {
        expect(toDateMs('not a date')).toBeNull();
    });
});

describe('normalizeToIsoDate', () => {
    it('returns empty string for null/undefined', () => {
        expect(normalizeToIsoDate(null)).toBe('');
        expect(normalizeToIsoDate(undefined)).toBe('');
    });

    it('slices a UTC-explicit instant to its UTC day', () => {
        expect(normalizeToIsoDate('2024-06-15T12:00:00Z')).toBe('2024-06-15');
    });

    it('reassembles European input to yyyy-MM-dd (no Date involved)', () => {
        expect(normalizeToIsoDate('15.06.2024', DMY)).toBe('2024-06-15');
    });

    it('returns empty string for unparseable input', () => {
        expect(normalizeToIsoDate('not a date')).toBe('');
    });
});

describe('formatDateValue', () => {
    it('returns empty string for null/empty', () => {
        expect(formatDateValue(null)).toBe('');
        expect(formatDateValue('')).toBe('');
    });

    it('formats the year of a UTC-noon instant (TZ-stable)', () => {
        expect(formatDateValue('2024-06-15T12:00:00Z', 'yyyy')).toBe('2024');
    });

    it('round-trips a pure yyyy-MM-dd through local midnight', () => {
        expect(formatDateValue('2024-06-15', 'yyyy-MM-dd')).toBe('2024-06-15');
    });

    it('falls back to toDisplayString for non-date values', () => {
        expect(formatDateValue(true)).toBe('true');
    });
});
