/**
 * Unit tests for the chart-wide value formatting core (ADR-0054 parity Build E) — the
 * `useComma` base mechanic shared by tooltip values, legend values and default Y-axis labels.
 *
 * @module EchartsCollectionWidget/valueFormat.test
 */
import { describe, expect, it } from 'vitest';

import { formatChartValue } from './valueFormat';

describe('formatChartValue (ADR-0054 comma base mechanic)', () => {
    it('stringifies numbers unchanged without decimals/comma', () => {
        expect(formatChartValue(21)).toBe('21');
        expect(formatChartValue(-0.5)).toBe('-0.5');
        expect(formatChartValue(1234.5678)).toBe('1234.5678');
    });

    it('clamps decimals via toFixed', () => {
        expect(formatChartValue(21.5678, 2)).toBe('21.57');
        expect(formatChartValue(21, 1)).toBe('21.0');
        expect(formatChartValue(21, 0)).toBe('21');
    });

    it('replaces the decimal point with a comma when comma is on (adapter String.replace parity)', () => {
        expect(formatChartValue(21.5, undefined, true)).toBe('21,5');
        expect(formatChartValue(21.5678, 2, true)).toBe('21,57');
        // No fractional part → nothing to replace.
        expect(formatChartValue(21, 2, true)).toBe('21,00');
    });

    it('leaves integers without decimals comma-free', () => {
        expect(formatChartValue(42, undefined, true)).toBe('42');
    });

    it('passes non-finite/non-number inputs through like the tooltip valueFormatter always did', () => {
        // The historical makeValueFormatter contract: a non-number input is cast, non-finite
        // results fall back to the RAW value (String(NaN) → 'NaN', strings stay strings).
        expect(formatChartValue('abc', 2)).toBe('abc');
        expect(formatChartValue(NaN)).toBe('NaN');
        expect(formatChartValue(null)).toBe('null');
        expect(formatChartValue(true, undefined, true)).toBe('true');
    });
});
