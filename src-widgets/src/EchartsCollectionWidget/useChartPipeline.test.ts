import { describe, expect, it } from 'vitest';
import type { EChartsOption } from 'echarts';

import { toPresentationConfig } from './presentation';
import type { ThemeTokens } from './echartsTheme';
import {
    BODY_MAX_HISTORY_POINTS,
    DEFAULT_HISTORY_COUNT,
    RANGE_MS,
    assemblePipelineResult,
    hasMergedData,
    isUsableOid,
    pipelineError,
    subscribedOids,
    usableSeries,
    type AssemblePipelineInput,
    type ChartPipelineSeries,
} from './useChartPipeline';

const series = (...oids: string[]): ChartPipelineSeries[] => oids.map(oid => ({ oid, name: oid }));

describe('RANGE_MS / point ceilings (single source, ADR-0046)', () => {
    it('maps the three Verlauf presets to exact millisecond windows', () => {
        expect(RANGE_MS).toEqual({
            '24h': 86_400_000,
            '7d': 7 * 86_400_000,
            '30d': 30 * 86_400_000,
        });
    });

    it('defaults the count to 500 and the hard ceiling to the body cap (the preview passes 200)', () => {
        expect(DEFAULT_HISTORY_COUNT).toBe(500);
        expect(BODY_MAX_HISTORY_POINTS).toBe(5000);
    });
});

describe('usableSeries / isUsableOid', () => {
    it('drops empty and nothing_selected OIDs, keeps the rest in order', () => {
        const list = series('', 'a.0', 'nothing_selected', 'b.0');
        expect(usableSeries(list).map(s => s.oid)).toEqual(['a.0', 'b.0']);
    });

    it('isUsableOid is the one predicate for bound OIDs', () => {
        expect(isUsableOid('a.0')).toBe(true);
        expect(isUsableOid('')).toBe(false);
        expect(isUsableOid(undefined)).toBe(false);
        expect(isUsableOid('nothing_selected')).toBe(false);
    });

    it('returns the input shape untouched when every OID is usable', () => {
        const list = series('a.0', 'b.0');
        expect(usableSeries(list)).toEqual(list);
    });
});

describe('subscribedOids (family/mode knowledge, ADR-0046)', () => {
    it('gauge needs only the first usable series value (Aktuellwert)', () => {
        expect(subscribedOids('gauge', 'history', series('a.0', 'b.0'), [], '', false)).toEqual(['a.0']);
    });

    it('radar subscribes the indicator OIDs, skipping empty ones', () => {
        expect(
            subscribedOids(
                'radar',
                'history',
                series('poly'),
                [{ oid: 'a.0' }, { oid: '' }, { oid: 'b.0' }],
                '',
                false,
            ),
        ).toEqual(['a.0', 'b.0']);
    });

    it('json subscribes the payload state; nothing_selected subscribes nothing', () => {
        expect(subscribedOids('cartesian', 'json', series('a.0'), [], 'javascript.0.chart', false)).toEqual([
            'javascript.0.chart',
        ]);
        expect(subscribedOids('pie', 'json', series('a.0'), [], 'nothing_selected', false)).toEqual([]);
    });

    it('live subscribes every usable series OID', () => {
        expect(subscribedOids('cartesian', 'live', series('a.0', 'b.0'), [], '', false)).toEqual(['a.0', 'b.0']);
    });

    it('Verlauf subscribes nothing — unless the early refresh listens for values', () => {
        expect(subscribedOids('cartesian', 'history', series('a.0'), [], '', false)).toEqual([]);
        expect(subscribedOids('cartesian', 'history', series('a.0'), [], '', true)).toEqual(['a.0']);
    });
});

describe('hasMergedData (unified on the MERGED option, ADR-0046)', () => {
    it('is true when any merged series carries a non-empty data array', () => {
        expect(hasMergedData({ series: [{ data: [] }, { data: [[1, 2]] }] } as never)).toBe(true);
    });

    it('is false for empty data arrays, no series, or non-array data', () => {
        expect(hasMergedData({ series: [{ data: [] }] } as never)).toBe(false);
        expect(hasMergedData({} as never)).toBe(false);
        expect(hasMergedData({ series: [{ data: 'nope' }] } as never)).toBe(false);
    });
});

describe('pipelineError (unified three-source error, ADR-0046)', () => {
    it('stays null off cartesian/pie even with errors present', () => {
        expect(pipelineError('gauge', 'json', 'parse failed', 'fetch failed')).toBeNull();
        expect(pipelineError('radar', 'history', undefined, 'fetch failed')).toBeNull();
    });

    it('json mode surfaces the parse error', () => {
        expect(pipelineError('cartesian', 'json', 'Unexpected token', null)).toBe('Unexpected token');
        expect(pipelineError('pie', 'json', undefined, 'ignored')).toBeNull();
    });

    it('Verlauf prefers the fetch error, then the first per-series error', () => {
        expect(pipelineError('cartesian', 'history', undefined, 'fetch failed', [{ error: 'series failed' }])).toBe(
            'fetch failed',
        );
        expect(pipelineError('cartesian', 'history', undefined, null, [{}, { error: 'series failed' }])).toBe(
            'series failed',
        );
        expect(pipelineError('cartesian', 'history', undefined, null, [])).toBeNull();
    });

    it('live mode has no error source', () => {
        expect(pipelineError('cartesian', 'live', 'parse', 'fetch', [{ error: 'x' }])).toBeNull();
    });
});

// ── assemblePipelineResult — the pure build core (dispatch, merge, title fold, hasData) ──

const tokens = {
    primary: '#1',
    secondary: '#2',
    success: '#3',
    warning: '#4',
    error: '#5',
    info: '#6',
    divider: '#7',
    textPrimary: '#8',
    textSecondary: '#9',
} as unknown as ThemeTokens;

const makeInput = (
    family: 'cartesian' | 'pie' | 'gauge' | 'radar',
    mode: string,
    over: Partial<AssemblePipelineInput> = {},
): AssemblePipelineInput => {
    const src = over.src ?? {};
    return {
        family,
        mode,
        usable: [],
        indicators: [],
        values: {},
        history: { series: [], loading: false, error: null },
        liveBuffers: {},
        jsonParsed: { series: [] },
        presentation: toPresentationConfig({ src, palette: ['#111'], family, themeTokens: tokens, themeDark: false }),
        themeBase: {} as EChartsOption,
        companions: { chartConfig: {}, yAxes: [], markLines: [], jsonSeriesStyle: {}, jsonHidden: [], series: [] },
        ...over,
        src,
    };
};

const seriesOf = (option: EChartsOption): { name: string; data: unknown[] }[] =>
    (option.series as { name: string; data: unknown[] }[]) ?? [];

describe('assemblePipelineResult (pure build core, ADR-0046)', () => {
    it('Verlauf maps fetched history series 1:1 and reports hasData from the merged option', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 2],
                                [3, 4],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        expect(hasData).toBe(true);
        expect(seriesOf(option).map(s => s.name)).toEqual(['A']);
        expect(seriesOf(option)[0]?.data).toHaveLength(2);
    });

    it('Live falls back to the OID as the series name and reads the rolling buffer', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'live', {
                usable: [{ oid: 'a.0' }],
                liveBuffers: { 'a.0': [[1, 5]] },
            }),
        );
        expect(hasData).toBe(true);
        expect(seriesOf(option)[0]?.name).toBe('a.0');
    });

    it('JSON filters the jsonHidden deny-list and applies the name-keyed overlay meta', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('pie', 'json', {
                jsonParsed: {
                    series: [
                        { name: 'A', data: [[0, 1]] },
                        { name: 'B', data: [[0, 2]] },
                    ],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: { A: { color: '#f00' } },
                    jsonHidden: ['B'],
                    series: [],
                },
            }),
        );
        expect(hasData).toBe(true);
        // Pie collapses series to slices — the (filtered) payload names live in the slice data.
        const slices = (seriesOf(option)[0]?.data as { name?: string }[]) ?? [];
        expect(slices.map(d => d.name)).toEqual(['A']);
    });

    it('folds a raw title even without title text (ADR-0044)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                src: { titleText: '' },
                companions: {
                    chartConfig: { titleRaw: '{"padding": 8}' },
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [],
                },
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
            }),
        );
        expect((option.title as Record<string, unknown> | undefined)?.padding).toBe(8);
    });

    it('injects a non-transparent background colour from the presentation', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                src: { bgColor: '#123456' },
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
            }),
        );
        expect(option.backgroundColor).toBe('#123456');
    });

    it('gauge reads its scalar from the values map (hasData by value)', () => {
        const withValue = assemblePipelineResult(
            makeInput('gauge', 'history', {
                usable: [{ oid: 'g.0' }],
                values: { 'g.0': 42 },
            }),
        );
        expect(withValue.hasData).toBe(true);
        const without = assemblePipelineResult(makeInput('gauge', 'history', { usable: [{ oid: 'g.0' }] }));
        expect(without.hasData).toBe(false);
    });

    it('radar reads its indicator values (hasData by value)', () => {
        const { hasData } = assemblePipelineResult(
            makeInput('radar', 'history', { indicators: [{ oid: 'r.0' }, { oid: '' }], values: { 'r.0': 5 } }),
        );
        expect(hasData).toBe(true);
    });
});
