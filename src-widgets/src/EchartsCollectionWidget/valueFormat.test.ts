/**
 * Unit tests for the chart-wide value formatting core (ADR-0054 parity Build E) — the
 * `useComma` base mechanic shared by tooltip values, legend values and default Y-axis labels —
 * and the per-series Wert-Formatter grown on top of it (parity Build B, ADR-0057).
 *
 * @module EchartsCollectionWidget/valueFormat.test
 */
import { describe, expect, it } from 'vitest';

import {
    factsOfMeta,
    formatChartValue,
    formatSeriesValue,
    hasSeriesValueFormat,
    resolveValueFacts,
} from './valueFormat';

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

describe('formatSeriesValue — bool/enum texts (ADR-0058, adapter yFormatter semantics)', () => {
    const STATES: Record<string, string> = { '-1': 'FEHLER', 0: 'AUS', 1: 'AUTO', 2: 'AN' };

    it('states: an exact hit maps to the state name (the tooltip/legend semantics)', () => {
        expect(formatSeriesValue(1, { states: STATES })).toBe('AUTO');
        expect(formatSeriesValue(0, { states: STATES })).toBe('AUS');
        expect(formatSeriesValue(-1, { states: STATES })).toBe('FEHLER');
        expect(formatSeriesValue('2', { states: STATES })).toBe('AN'); // string keys coerce
    });

    it('states: an in-between value stays EMPTY in exact mode — no half states (ticket: 0.8 bei bool)', () => {
        expect(formatSeriesValue(0.5, { states: STATES })).toBe('');
        expect(formatSeriesValue(99, { states: STATES })).toBe('');
    });

    it('states: axis mode rounds to the next state UP (keys sorted by value), beyond the last → the last', () => {
        expect(formatSeriesValue(-0.5, { states: STATES }, {}, 'axis')).toBe('AUS'); // first key above
        expect(formatSeriesValue(0.5, { states: STATES }, {}, 'axis')).toBe('AUTO');
        expect(formatSeriesValue(1.4, { states: STATES }, {}, 'axis')).toBe('AN');
        expect(formatSeriesValue(5, { states: STATES }, {}, 'axis')).toBe('AN'); // beyond → highest
        expect(formatSeriesValue(-2, { states: STATES }, {}, 'axis')).toBe('FEHLER');
    });

    it('bool texts: exact 0/1 (and true/false literals) map; other values stay empty', () => {
        expect(formatSeriesValue(1, { trueText: 'AN', falseText: 'AUS' })).toBe('AN');
        expect(formatSeriesValue(0, { trueText: 'AN', falseText: 'AUS' })).toBe('AUS');
        expect(formatSeriesValue(true, { trueText: 'AN', falseText: 'AUS' })).toBe('AN');
        expect(formatSeriesValue('false', { trueText: 'AN', falseText: 'AUS' })).toBe('AUS');
        expect(formatSeriesValue(0.8, { trueText: 'AN', falseText: 'AUS' })).toBe(''); // ticket example
    });

    it('bool texts: axis mode splits at 0.5 (the nearest side)', () => {
        expect(formatSeriesValue(0.8, { trueText: 'AN', falseText: 'AUS' }, {}, 'axis')).toBe('AN');
        expect(formatSeriesValue(0.4, { trueText: 'AN', falseText: 'AUS' }, {}, 'axis')).toBe('AUS');
    });

    it('one authored bool text defaults the other to TRUE/FALSE (the adapter || rule)', () => {
        expect(formatSeriesValue(1, { falseText: 'AUS' })).toBe('TRUE');
        expect(formatSeriesValue(0, { trueText: 'AN' })).toBe('FALSE');
        expect(formatSeriesValue(0.8, { falseText: 'AUS' }, {}, 'axis')).toBe('TRUE');
    });

    it('a text hit suppresses unit and decimals entirely (the adapter ignores the unit for text series)', () => {
        expect(formatSeriesValue(1, { states: STATES, unit: 'kWh', decimals: 2 }, { units: 'W', comma: true })).toBe(
            'AUTO',
        );
        expect(formatSeriesValue(0, { trueText: 'AN', falseText: 'AUS', unit: 'V' })).toBe('AUS');
    });

    it('texts need AUTHORING: an empty map / empty strings are unset and the number renders as before', () => {
        expect(formatSeriesValue(1, { states: {} })).toBe('1');
        expect(formatSeriesValue(1, { trueText: '', falseText: '' })).toBe('1');
        expect(formatSeriesValue(1, { trueText: '  ', falseText: 'AUS' })).toBe('TRUE'); // whitespace = unset
    });

    it('hasSeriesValueFormat: text facts activate the gate; empty ones do not', () => {
        expect(hasSeriesValueFormat({ states: STATES })).toBe(true);
        expect(hasSeriesValueFormat({ trueText: 'AN' })).toBe(true);
        expect(hasSeriesValueFormat({ falseText: 'AUS' })).toBe(true);
        expect(hasSeriesValueFormat({ states: {} })).toBe(false);
        expect(hasSeriesValueFormat({ trueText: ' ' })).toBe(false);
    });

    it('resolveValueFacts passes the text facts through series-only (never a chart fallback)', () => {
        expect(resolveValueFacts({ states: STATES }, { units: 'W' }).states).toEqual(STATES);
        expect(resolveValueFacts({ trueText: 'AN' }).trueText).toBe('AN');
        expect(resolveValueFacts({}, { units: 'W' }).states).toBeUndefined();
    });

    it('factsOfMeta projects the text facts (texts trimmed, empty map dropped)', () => {
        expect(factsOfMeta({ trueText: ' AN ', falseText: '', states: STATES })).toEqual({
            trueText: 'AN',
            states: STATES,
        });
        expect(factsOfMeta({ states: {} }).states).toBeUndefined();
        expect(factsOfMeta({ unit: '°C' }).trueText).toBeUndefined();
    });
});
