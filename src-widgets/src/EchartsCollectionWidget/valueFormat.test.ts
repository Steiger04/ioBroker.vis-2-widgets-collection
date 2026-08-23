/**
 * Unit tests for the chart-wide value formatting core (ADR-0054 parity Build E) — the
 * `useComma` base mechanic shared by tooltip values, legend values and default Y-axis labels —
 * and the per-series Wert-Formatter grown on top of it (parity Build B, ADR-0057).
 *
 * @module EchartsCollectionWidget/valueFormat.test
 */
import { describe, expect, it } from 'vitest';

import { formatChartValue, formatSeriesValue, hasSeriesValueFormat, resolveValueFacts } from './valueFormat';

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

describe('formatSeriesValue (ADR-0057 per-series Wert-Formatter, parity Build B)', () => {
    it('appends the per-series unit with a space (the chart-level units idiom)', () => {
        expect(formatSeriesValue(21.5, { unit: '°C' })).toBe('21.5 °C');
        expect(formatSeriesValue(21.5, { unit: '°C' }, {})).toBe('21.5 °C');
    });

    it('an empty/whitespace unit counts as unset (a cleared field never emits a dangling space)', () => {
        expect(formatSeriesValue(21.5, { unit: '' })).toBe('21.5');
        expect(formatSeriesValue(21.5, { unit: '   ' })).toBe('21.5');
    });

    it('per-series decimals clamp like the chart-level ones (adapter afterComma)', () => {
        expect(formatSeriesValue(21.5678, { decimals: 2 })).toBe('21.57');
        expect(formatSeriesValue(21, { decimals: 1 })).toBe('21.0');
        expect(formatSeriesValue(21, { decimals: 0 })).toBe('21');
    });

    it('series facts beat the chart-level fallback; chart applies where the series is silent', () => {
        // Adapter parity is ONE formatter per series; our chart-level tooltip cluster stays as
        // the fallback for series without their own facts (explicit beats inherited, ADR-0018 —
        // PER FACT: a series unit wins while its silent decimals still inherit the chart clamp).
        expect(formatSeriesValue(21.5678, { unit: 'kWh' }, { units: 'W', decimals: 0 })).toBe('22 kWh');
        expect(formatSeriesValue(21.5678, undefined, { units: 'W', decimals: 0 })).toBe('22 W');
        expect(formatSeriesValue(21.5678, {}, { units: 'W', decimals: 0 })).toBe('22 W');
    });

    it('series decimals 0 is a FACT and wins over the chart-level clamp', () => {
        expect(formatSeriesValue(21.5678, { decimals: 0 }, { decimals: 2 })).toBe('22');
    });

    it('the chart-wide comma separator interacts with both fact sources', () => {
        expect(formatSeriesValue(21.5, { decimals: 1 }, { comma: true })).toBe('21,5');
        expect(formatSeriesValue(21.5, { unit: '°C' }, { comma: true })).toBe('21,5 °C');
        expect(formatSeriesValue(21.5, undefined, { comma: true })).toBe('21,5');
    });

    it('no facts at all → the bare formatChartValue contract (plain number text)', () => {
        expect(formatSeriesValue(21.5)).toBe('21.5');
        expect(formatSeriesValue(21.5, {}, {})).toBe('21.5');
        expect(formatSeriesValue('abc', { unit: 'x' })).toBe('abc x'); // cast-through passthrough
    });
});

describe('resolveValueFacts / hasSeriesValueFormat (the emission gate)', () => {
    it('resolves unit/decimals with the series-first, chart-fallback precedence', () => {
        expect(resolveValueFacts({ unit: 'A', decimals: 1 }, { units: 'B', decimals: 2 })).toEqual({
            unit: 'A',
            decimals: 1,
        });
        expect(resolveValueFacts({ unit: '' }, { units: 'B' })).toEqual({ unit: 'B' });
        expect(resolveValueFacts(undefined, { units: 'B' })).toEqual({ unit: 'B' });
        expect(resolveValueFacts({}, {})).toEqual({});
    });

    it('hasSeriesValueFormat: true for any authored fact or chart comma, false for nothing', () => {
        expect(hasSeriesValueFormat({ unit: '°C' })).toBe(true);
        expect(hasSeriesValueFormat({ decimals: 0 })).toBe(true);
        expect(hasSeriesValueFormat(undefined, { units: 'W' })).toBe(true);
        expect(hasSeriesValueFormat(undefined, { decimals: 2 })).toBe(true);
        expect(hasSeriesValueFormat(undefined, { comma: true })).toBe(true);
        expect(hasSeriesValueFormat()).toBe(false);
        expect(hasSeriesValueFormat({}, {})).toBe(false);
        expect(hasSeriesValueFormat({ unit: '' }, {})).toBe(false);
    });
});
