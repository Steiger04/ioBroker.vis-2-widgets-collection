import { describe, expect, it } from 'vitest';
import { dateReader, localDay } from './dateReader';

// Expected instants are built with the LOCAL Date constructor, never with a fixed zone,
// so the suite holds in every timezone the tests run in.
const local = (y: number, month1: number, d: number, h = 0, min = 0, s = 0, ms = 0): number =>
    new Date(y, month1 - 1, d, h, min, s, ms).getTime();

describe('dateReader — stage 1: detected date columns read through the engine', () => {
    it('reads the detected format', () => {
        const read = dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' });
        expect(read('01.12.2024')).toBe(local(2024, 12, 1));
    });

    it('honours an ISO-8601 zone, and reads epoch numbers by the engine thresholds', () => {
        const read = dateReader({ type: 'date', dateFormat: 'ISO-8601' });
        expect(read('2024-12-01T10:00:00Z')).toBe(Date.UTC(2024, 11, 1, 10));
        expect(read('2024-12-01T10:00:00+02:00')).toBe(Date.UTC(2024, 11, 1, 8));
        expect(read(1704067200)).toBe(1704067200000);
        expect(read(1704067200000)).toBe(1704067200000);
        expect(read(20241201)).toBeNull();
    });

    it('accepts no tolerant pattern — only what the engine reads', () => {
        const read = dateReader({ type: 'date', dateFormat: 'ISO-8601' });
        expect(read('2024-12-01T10:00:00')).toBeNull();
        expect(read('2024-12-01 10:00:00')).toBeNull();
        expect(read('1704067200')).toBeNull();
        expect(read('Dec 1, 2024')).toBeNull();
        expect(read(new Date(2024, 11, 1))).toBeNull();
    });

    it('reads the minority format of a mixed column (engine patterns are disjoint)', () => {
        // The detector types a column of ISO and plain dates as `date` with the MAJORITY
        // format; the values of the other engine pattern made it a date column too.
        const read = dateReader({ type: 'date', dateFormat: 'ISO-8601' });
        expect(read('2024-12-01')).toBe(local(2024, 12, 1));
        expect(dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' })('01.12.2024 10:30')).toBe(
            local(2024, 12, 1, 10, 30),
        );
    });
});

describe('dateReader — stage 2: date columns without detection also read fixed tolerant patterns', () => {
    const read = dateReader({ type: 'string' });

    it('reads ISO without zone as local time, minutes to milliseconds', () => {
        expect(read('2024-12-01T10:15')).toBe(local(2024, 12, 1, 10, 15));
        expect(read('2024-12-01T10:15:30')).toBe(local(2024, 12, 1, 10, 15, 30));
        expect(read('2024-12-01T10:15:30.250')).toBe(local(2024, 12, 1, 10, 15, 30, 250));
    });

    it('reads YYYY-MM-DD HH:mm(:ss) as local time', () => {
        expect(read('2024-12-01 10:15')).toBe(local(2024, 12, 1, 10, 15));
        expect(read('2024-12-01 10:15:30')).toBe(local(2024, 12, 1, 10, 15, 30));
        expect(read('  2024-12-01 10:00:00 ')).toBe(local(2024, 12, 1, 10));
    });

    // Thresholds checked against the engine: dateValue.ts (parseDateToMs, numbers) and
    // typeDetector.ts (detectDateFromNumber) — >= 1e11 ms, >= 1e9 s, below no date.
    it('reads epoch strings by the engine thresholds', () => {
        expect(read('1704067200')).toBe(1704067200000);
        expect(read('1704067200000')).toBe(1704067200000);
        expect(read('999999999')).toBeNull();
        expect(read('20241201')).toBeNull();
    });

    it('reads the engine patterns and epoch numbers like the engine', () => {
        expect(read('2024-12-01')).toBe(local(2024, 12, 1));
        expect(read('01.12.2024 10:30')).toBe(local(2024, 12, 1, 10, 30));
        expect(read('2024-12-01T10:00:00Z')).toBe(Date.UTC(2024, 11, 1, 10));
        expect(read(1704067200)).toBe(1704067200000);
        expect(read(42)).toBeNull();
    });

    it('reads a Date instance directly', () => {
        expect(read(new Date(2024, 11, 1, 10))).toBe(local(2024, 12, 1, 10));
        expect(read(new Date(Number.NaN))).toBeNull();
    });

    it('reads nothing else — no browser heuristic', () => {
        for (const value of ['1.12.2024', 'Dec 1, 2024', 'Raum 1', '2024/12/01', '', '  ', 'abc', null, undefined]) {
            expect(read(value)).toBeNull();
        }
        expect(read(true)).toBeNull();
        expect(read({ ts: 1704067200 })).toBeNull();
    });

    it('rejects out-of-range parts of a tolerant pattern', () => {
        expect(read('2024-13-01 10:00')).toBeNull();
        expect(read('2024-12-00T10:00')).toBeNull();
        expect(read('2024-12-01T24:00')).toBeNull();
        expect(read('2024-12-01 10:60')).toBeNull();
        expect(read('2024-12-01T10:00:60')).toBeNull();
    });

    it('reads the same without any detection', () => {
        expect(dateReader()('2024-12-01 10:00')).toBe(local(2024, 12, 1, 10));
        expect(dateReader()('1704067200')).toBe(1704067200000);
    });
});

describe('localDay — the local calendar day of an instant', () => {
    it('is the same day from local midnight to the last millisecond before the next', () => {
        for (const ms of [local(2024, 12, 1), local(2024, 12, 1, 0, 30), local(2024, 12, 1, 23, 59, 59, 999)]) {
            expect(localDay(ms)).toEqual({ start: local(2024, 12, 1), key: '2024-12-01' });
        }
        expect(localDay(local(2024, 12, 2))).toEqual({ start: local(2024, 12, 2), key: '2024-12-02' });
    });

    it('pads month and day', () => {
        expect(localDay(local(2025, 3, 7, 12)).key).toBe('2025-03-07');
    });
});

describe('dateReader — only representable instants', () => {
    it('rejects an epoch beyond the Date range in both stages', () => {
        expect(dateReader({ type: 'date', dateFormat: 'epoch-ms' })(1e17)).toBeNull();
        expect(dateReader()('100000000000000000')).toBeNull();
    });
});
