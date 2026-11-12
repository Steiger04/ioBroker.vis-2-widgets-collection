/**
 * The stored chart configuration as its decoders read it: a blob of another shape like no blob, a
 * list entry that is no object like an unset entry, a key not of its JSON type like the key left
 * out (KI-Integration, ADR-0114). The rendered effect is Naht 2's (`lib/aiRawDataRender.test`).
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import { parseJsonSeriesStyle, parseSeriesConfig } from './optionBuilder';

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
