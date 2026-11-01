import { describe, expect, it } from 'vitest';
import { formatDateValue } from './formatters';
import { dateReader } from '../dateReader';

// How values are read as dates is the Datums-Leser's contract (dateReader.test.ts); these
// tests pin what the display does with the reading. Expected values stay timezone-robust:
// local-constructor inputs for token output, UTC-explicit instants for the ISO output.

const manualDate = dateReader();
const detectedDmy = dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' });

describe('formatDateValue', () => {
    it('returns empty string for null/empty', () => {
        expect(formatDateValue(null, undefined, manualDate)).toBe('');
        expect(formatDateValue('', undefined, manualDate)).toBe('');
    });

    it('formats the year of a UTC-noon instant (TZ-stable)', () => {
        expect(formatDateValue('2024-06-15T12:00:00Z', 'yyyy', manualDate)).toBe('2024');
    });

    it('round-trips a pure yyyy-MM-dd through local midnight', () => {
        expect(formatDateValue('2024-06-15', 'yyyy-MM-dd', manualDate)).toBe('2024-06-15');
    });

    it('formats every token in local time', () => {
        const ms = new Date(2024, 5, 15, 9, 5, 7, 42).getTime();
        expect(formatDateValue(ms, 'dd.MM.yyyy HH:mm:ss.SSS', manualDate)).toBe('15.06.2024 09:05:07.042');
    });

    it('defaults to yyyy-MM-dd', () => {
        expect(formatDateValue('15.06.2024', undefined, detectedDmy)).toBe('2024-06-15');
    });

    it('keeps the ISO-8601 (UTC) output', () => {
        expect(formatDateValue('2024-06-15T12:00:00Z', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", manualDate)).toBe(
            '2024-06-15T12:00:00.000Z',
        );
    });

    it('formats a Date instance (the format editor preview)', () => {
        expect(formatDateValue(new Date(2024, 5, 15), 'dd.MM.yyyy', manualDate)).toBe('15.06.2024');
    });

    it('shows a value the reader cannot read as its Raw value', () => {
        expect(formatDateValue(true, undefined, manualDate)).toBe('true');
        expect(formatDateValue('n/a', 'dd.MM.yyyy', detectedDmy)).toBe('n/a');
    });

    // Regression: the browser parser read "1.12.2024" as 12 January 2024.
    it('shows 1.12.2024 in a manual date column as raw text, not 12 January', () => {
        expect(formatDateValue('1.12.2024', 'yyyy-MM-dd', manualDate)).toBe('1.12.2024');
    });

    // Regression: epoch strings sorted as dates but displayed as raw text.
    it('formats an epoch string in a manual date column', () => {
        const ms = new Date(2024, 11, 1, 10, 30).getTime();
        expect(formatDateValue(String(ms), 'dd.MM.yyyy HH:mm', manualDate)).toBe('01.12.2024 10:30');
        expect(formatDateValue(String(ms / 1000), 'dd.MM.yyyy HH:mm', manualDate)).toBe('01.12.2024 10:30');
    });

    it('formats the tolerant patterns of a manual date column', () => {
        expect(formatDateValue('2024-12-01 10:00:00', 'dd.MM.yyyy HH:mm', manualDate)).toBe('01.12.2024 10:00');
        expect(formatDateValue('2024-12-01T10:00', 'dd.MM.yyyy HH:mm', manualDate)).toBe('01.12.2024 10:00');
    });
});
