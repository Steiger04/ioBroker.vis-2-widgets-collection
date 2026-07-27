/**
 * Unit tests for the option builders + config parsers (the G side of the data-wins seam,
 * JSON-state parsing, seriesConfig blob decoding, and the Advanced-JSON validator).
 *
 * @module EchartsCollectionWidget/optionBuilder.test
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import {
    LINE_TEMPLATE_DEFAULTS,
    buildGeneratedOption,
    parseJsonState,
    parseSeriesConfig,
    parseUserJson,
} from './optionBuilder';

describe('parseUserJson', () => {
    it('accepts an empty string as no overrides', () => {
        expect(parseUserJson('')).toEqual({ ok: true, value: {} });
        expect(parseUserJson('   ')).toEqual({ ok: true, value: {} });
    });

    it('accepts a JSON object of presentation keys', () => {
        const r = parseUserJson('{ "tooltip": { "trigger": "axis" } }');
        expect(r.ok).toBe(true);
        expect((r as { ok: true; value: Record<string, unknown> }).value.tooltip).toEqual({ trigger: 'axis' });
    });

    it('rejects a JSON array', () => {
        const r = parseUserJson('[1, 2, 3]');
        expect(r.ok).toBe(false);
    });

    it('rejects invalid JSON with the parse error', () => {
        const r = parseUserJson('{ not json');
        expect(r.ok).toBe(false);
        expect((r as { ok: false; error: string }).error).toBeTruthy();
    });
});

describe('parseJsonState', () => {
    it('parses { series: [{ name, data }] } into multiple series', () => {
        const out = parseJsonState(
            JSON.stringify({
                series: [
                    {
                        name: 'A',
                        data: [
                            [1, 10],
                            [2, 20],
                        ],
                    },
                    { name: 'B', data: [[1, 30]] },
                ],
            }),
        );
        expect(out).toHaveLength(2);
        expect(out[0]).toEqual({
            name: 'A',
            data: [
                [1, 10],
                [2, 20],
            ],
        });
        expect(out[1]).toEqual({ name: 'B', data: [[1, 30]] });
    });

    it('parses { data: [...] } into a single series', () => {
        const out = parseJsonState(
            JSON.stringify({
                data: [
                    [1, 5],
                    [2, 6],
                ],
            }),
        );
        expect(out).toEqual([
            {
                name: 'Series 1',
                data: [
                    [1, 5],
                    [2, 6],
                ],
            },
        ]);
    });

    it('parses a bare array of points into a single series', () => {
        const out = parseJsonState(
            JSON.stringify([
                [100, 1],
                [200, 2],
            ]),
        );
        expect(out).toEqual([
            {
                name: 'Series 1',
                data: [
                    [100, 1],
                    [200, 2],
                ],
            },
        ]);
    });

    it('normalizes object points { ts, val } / { time, value } / { x, y }', () => {
        const a = parseJsonState(JSON.stringify([{ ts: 1, val: 9 }]));
        const b = parseJsonState(JSON.stringify([{ time: 2, value: 8 }]));
        const c = parseJsonState(JSON.stringify([{ x: 3, y: 7 }]));
        expect(a[0].data).toEqual([[1, 9]]);
        expect(b[0].data).toEqual([[2, 8]]);
        expect(c[0].data).toEqual([[3, 7]]);
    });

    it('defaults a missing series name to "Series N"', () => {
        const out = parseJsonState(JSON.stringify({ series: [{ data: [[0, 0]] }, { data: [] }] }));
        expect(out[0].name).toBe('Series 1');
        expect(out[1].name).toBe('Series 2');
    });

    it('returns [] for empty / invalid JSON', () => {
        expect(parseJsonState(undefined)).toEqual([]);
        expect(parseJsonState('')).toEqual([]);
        expect(parseJsonState('nope')).toEqual([]);
        expect(parseJsonState('123')).toEqual([]);
    });
});

describe('parseSeriesConfig', () => {
    it('returns [] for empty input', () => {
        expect(parseSeriesConfig(undefined)).toEqual([]);
        expect(parseSeriesConfig('')).toEqual([]);
    });

    it('decodes a b64-encoded blob (round-trip with encodeBlob)', () => {
        const meta = [{ name: 'Temp', color: '#f00', type: 'line', yAxisIndex: 0 }];
        const out = parseSeriesConfig(encodeBlob(JSON.stringify(meta)));
        expect(out).toEqual(meta);
    });

    it('accepts a plain (non-prefixed) JSON array for backward compat', () => {
        const out = parseSeriesConfig(JSON.stringify([{ name: 'X' }]));
        expect(out).toEqual([{ name: 'X' }]);
    });

    it('returns [] for invalid JSON or non-array payload', () => {
        expect(parseSeriesConfig('b64:not-valid')).toEqual([]);
        expect(parseSeriesConfig(JSON.stringify({ nope: 1 }))).toEqual([]);
    });
});

describe('buildGeneratedOption', () => {
    const legendData = (option: ReturnType<typeof buildGeneratedOption>): unknown[] | undefined =>
        (option.legend as { data?: unknown[] } | undefined)?.data;

    it('builds legend.data from (meta → series → fallback) names and maps series 1:1', () => {
        const option = buildGeneratedOption(
            [
                { name: 'ignored-when-meta-has-name', data: [[1, 2]] },
                { name: 'Second', data: [[1, 3]] },
            ],
            [{ name: 'First' }],
        );
        expect(legendData(option)).toEqual(['First', 'Second']);
        expect(option.series).toHaveLength(2);
    });

    it('falls back to "Series N" when neither meta nor series provides a name', () => {
        const option = buildGeneratedOption([{ name: '', data: [[0, 0]] }], []);
        expect(legendData(option)).toEqual(['Series 1']);
    });

    it('applies meta colour to the series entry', () => {
        const option = buildGeneratedOption([{ name: 'A', data: [] }], [{ name: 'A', color: '#abc' }]);
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.color).toBe('#abc');
        expect(first.itemStyle).toEqual({ color: '#abc' });
    });

    it('always provides a time xAxis and two value yAxes', () => {
        const option = buildGeneratedOption([], []);
        expect(option.xAxis).toEqual({ type: 'time' });
        expect(option.yAxis).toEqual([{ type: 'value' }, { type: 'value' }]);
    });
});

describe('LINE_TEMPLATE_DEFAULTS', () => {
    it('contains the presentation defaults the chart merges under the user overrides', () => {
        expect(LINE_TEMPLATE_DEFAULTS.tooltip).toEqual({ trigger: 'axis' });
        expect(LINE_TEMPLATE_DEFAULTS.grid).toBeDefined();
    });
});
