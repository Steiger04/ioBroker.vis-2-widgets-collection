/**
 * Tests for the pure date VALUE parser (ADR-0075) — the acceptance matrix: epoch thresholds
 * (1e9/1e11), TZ-aware ISO, the locally parsed formats, and the explicit-format restriction.
 *
 * @module hooks/useJsonTableAnalysis/dateValue.test
 */
import { describe, expect, it } from 'vitest';

import { parseDateToMs } from './dateValue';

/** Local-time expectation helper — asserts against the local clock, like the parser. */
const local = (y: number, m1: number, d: number, h = 0, min = 0, s = 0): number =>
    new Date(y, m1 - 1, d, h, min, s).getTime();

describe('parseDateToMs — epoch numbers (thresholds mirror detectDateFromNumber)', () => {
    it('epoch-s (>= 1e9, < 1e11) is multiplied by 1000', () => {
        expect(parseDateToMs(1e9)).toBe(1e12);
        expect(parseDateToMs(1_700_000_000)).toBe(1_700_000_000_000);
        expect(parseDateToMs(1e11 - 1)).toBe((1e11 - 1) * 1000);
    });

    it('epoch-ms (>= 1e11) passes through', () => {
        expect(parseDateToMs(1e11)).toBe(1e11);
        expect(parseDateToMs(1_700_000_000_000)).toBe(1_700_000_000_000);
    });

    it('small, negative and non-finite numbers are no date', () => {
        expect(parseDateToMs(999_999_999)).toBeNull();
        expect(parseDateToMs(42)).toBeNull();
        expect(parseDateToMs(0)).toBeNull();
        expect(parseDateToMs(-1e12)).toBeNull();
        expect(parseDateToMs(Number.NaN)).toBeNull();
        expect(parseDateToMs(Number.POSITIVE_INFINITY)).toBeNull();
    });
});

describe('parseDateToMs — strings', () => {
    it('ISO with Z or offset parses via Date.parse (TZ-aware)', () => {
        expect(parseDateToMs('2024-12-01T10:15:30Z')).toBe(Date.parse('2024-12-01T10:15:30Z'));
        expect(parseDateToMs('2024-12-01T10:15:30+02:00')).toBe(Date.parse('2024-12-01T10:15:30+02:00'));
        expect(parseDateToMs('2024-12-01T10:15:30.123Z')).toBe(Date.parse('2024-12-01T10:15:30.123Z'));
    });

    it('ISO without Z/offset is no date — detector parity (the pattern requires the zone)', () => {
        expect(parseDateToMs('2024-12-01T10:15:30')).toBeNull();
    });

    it('YYYY-MM-DD parses as local midnight', () => {
        expect(parseDateToMs('2024-12-01')).toBe(local(2024, 12, 1));
        expect(parseDateToMs('2024-13-01')).toBeNull(); // month out of range — validation
        expect(parseDateToMs('2024-12-32')).toBeNull();
    });

    it('dd.MM.yyyy ± time parses locally (day first)', () => {
        expect(parseDateToMs('01.12.2024')).toBe(local(2024, 12, 1));
        expect(parseDateToMs('01.12.2024 10:30')).toBe(local(2024, 12, 1, 10, 30));
        expect(parseDateToMs('01.12.2024 10:30:45')).toBe(local(2024, 12, 1, 10, 30, 45));
        expect(parseDateToMs('32.13.2024')).toBeNull(); // both ranges violated
        expect(parseDateToMs('01.12.2024 25:00')).toBeNull(); // hour range — no HM fallback
    });

    it('MM/dd/yyyy ± time parses locally (month first)', () => {
        expect(parseDateToMs('12/01/2024')).toBe(local(2024, 12, 1));
        expect(parseDateToMs('12/01/2024 10:30')).toBe(local(2024, 12, 1, 10, 30));
        expect(parseDateToMs('12/01/2024 10:30:45')).toBe(local(2024, 12, 1, 10, 30, 45));
        expect(parseDateToMs('13/32/2024')).toBeNull();
    });

    it('non-dates, other types and empty input are null', () => {
        expect(parseDateToMs('hello')).toBeNull();
        expect(parseDateToMs('')).toBeNull();
        expect(parseDateToMs('   ')).toBeNull();
        expect(parseDateToMs(null)).toBeNull();
        expect(parseDateToMs(undefined)).toBeNull();
        expect(parseDateToMs(true)).toBeNull();
        expect(parseDateToMs({})).toBeNull();
        expect(parseDateToMs('1700000000')).toBeNull(); // numeric string is no epoch
    });

    it('whitespace around the value is tolerated (like the detector)', () => {
        expect(parseDateToMs('  01.12.2024  ')).toBe(local(2024, 12, 1));
    });
});

describe('parseDateToMs — explicit format hint', () => {
    it('restricts string parsing to that pattern', () => {
        expect(parseDateToMs('01.12.2024', 'dd.MM.yyyy')).toBe(local(2024, 12, 1));
        expect(parseDateToMs('12/01/2024', 'dd.MM.yyyy')).toBeNull(); // wrong pattern for the hint
        expect(parseDateToMs('2024-12-01', 'YYYY-MM-DD')).toBe(local(2024, 12, 1));
    });

    it('numbers keep the epoch rules regardless of the hint', () => {
        expect(parseDateToMs(1_700_000_000, 'epoch-s')).toBe(1_700_000_000_000);
        expect(parseDateToMs(1_700_000_000, 'dd.MM.yyyy')).toBe(1_700_000_000_000);
        expect(parseDateToMs(999, 'epoch-s')).toBeNull();
    });

    it('epoch formats never parse strings', () => {
        expect(parseDateToMs('1700000000', 'epoch-s')).toBeNull();
    });
});
