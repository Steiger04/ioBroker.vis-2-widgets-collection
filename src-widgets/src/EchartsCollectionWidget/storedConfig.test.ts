/**
 * The stored chart configuration as its decoders read it: a blob of another shape like no blob, a
 * list entry that is no object like an unset entry, a key not of its JSON type like the key left
 * out (KI-Integration, ADR-0114). The rendered effect is Naht 2's (`lib/aiRawDataRender.test`).
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import { parseJsonSeriesStyle, parseSeriesConfig } from './optionBuilder';
import { decodeAxes, decodeChartConfig, decodeXAxis, decodeXAxisWithLegacy } from './presentation';

const blob = (value: unknown): string => encodeBlob(JSON.stringify(value));

describe('the series settings (seriesConfig, jsonSeriesStyle)', () => {
    it('reads a key not of its JSON type like the key left out', () => {
        const broken = {
            name: 5,
            yPath: { a: 1 },
            formula: 7,
            lineWidth: '4',
            smooth: 'true',
            snippets: 'x',
            valueMap: [1],
        };

        expect(parseSeriesConfig(JSON.stringify([{ ...broken, color: '#f00' }]))).toEqual([{ color: '#f00' }]);
        expect(parseJsonSeriesStyle(blob({ A: { ...broken, color: '#f00' } }))).toEqual({ A: { color: '#f00' } });
    });

    it('keeps the legacy forms the builders heal', () => {
        const legacy = [{ area: true, type: 'area', xOffset: '-1m' }, { xOffset: 3600000 }];

        expect(parseSeriesConfig(blob(legacy))).toEqual(legacy);
    });

    it('reads a series entry that is no object as an empty entry, keeping the places of the OIDs', () => {
        expect(parseSeriesConfig('[null, 5, "x", ["x"], {"name":"B"}]')).toEqual([{}, {}, {}, {}, { name: 'B' }]);
    });

    it('reads a style by name that is no object like the name left out', () => {
        expect(parseJsonSeriesStyle('{"A":null,"B":5,"C":{"color":"#f00"}}')).toEqual({ C: { color: '#f00' } });
    });
});

describe('the axes (yAxes, xAxis)', () => {
    it('reads a key not of its JSON type like the key left out', () => {
        const broken = { name: 5, raw: { a: 1 }, splitNumber: '5', splitLine: 'true', snippets: [1] };

        expect(decodeAxes(JSON.stringify([{ ...broken, max: 10 }]))).toEqual([{ max: 10 }]);
        expect(decodeXAxis(blob({ ...broken, labelRotate: 30 }))).toEqual({ labelRotate: 30 });
    });

    it('reads an axis entry that is no object as an empty axis, keeping the places of yAxisIndex', () => {
        expect(decodeAxes('[null, 5, {"name":"W"}]')).toEqual([{}, {}, { name: 'W' }]);
    });

    it('reads an X axis of another shape as none, so the legacy fallback applies', () => {
        expect(decodeXAxis('[{"name":"Zeit"}]')).toBeNull();
        expect(decodeXAxisWithLegacy('{"oops', true)).toEqual({ splitLine: true });
        expect(decodeXAxisWithLegacy('{}', true)).toEqual({});
    });
});

describe('the family and section settings (chartConfig)', () => {
    it('reads a key not of its JSON type like the key left out, in the pie settings too', () => {
        expect(
            decodeChartConfig(
                JSON.stringify({
                    titleRaw: 5,
                    legendSnippets: 'x',
                    stackSum: 'true',
                    stackMode: 'stack',
                    pie: { raw: { a: 1 }, innerRadius: '40', label: 'percent' },
                }),
            ),
        ).toEqual({ stackMode: 'stack', pie: { label: 'percent' } });
        expect(decodeChartConfig(blob({ pie: 'x', tooltipRaw: '{}' }))).toEqual({ tooltipRaw: '{}' });
    });

    it('reads a blob of another shape as none', () => {
        expect(decodeChartConfig('[{"stackMode":"stack"}]')).toEqual({});
    });
});
