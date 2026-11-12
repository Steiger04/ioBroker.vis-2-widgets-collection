/**
 * The chart body reads every field default like the key missing (Spec-Leitplanke 2, ADR-0114).
 *
 * @module EchartsCollectionWidget/echartsDefaults.parity.test
 * @remarks
 * The body's readers carry fallbacks for a missing key — `'line'`, `?? 600`, `'topCenter'`,
 * the history count 500, the 24 h range, the canvas renderer … — copies of the field defaults.
 * In the widget the data's reading (`lib/fieldDefaults`) fills a missing key with its default
 * before any of them runs; mounted here WITHOUT that reading, the body sees the raw data, so each
 * fallback is on trial. For every default of the definition the body renders a widget with the
 * default stored exactly like the same widget without the key: the same echarts init and option,
 * the same history requests, the same markup. A fallback drifting from its field — or a default
 * changed without its fallback — turns this red.
 *
 * The body is mounted on the real CollectionProvider (the empty-state suite's harness); echarts'
 * `init` is replaced by a recorder, the history fetch by a fixed answer, the clock is fixed.
 */
import { act } from 'react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import echartsFields from '../lib/echartsFields';
import { fieldDefaultsOf } from '../lib/fieldDefaults';
import { installInertResizeObserver, mountCollectionBody } from '../lib/testing/collectionScene';
import { buildPreviewContext } from '../preview/mockContext';
import EchartsCollection from './EchartsCollection';
import { fetchMultiSeries, toSeriesData, windowToOptions } from './historyLogic';
import { toPresentationBase } from './presentation';
import type { ThemeTokens } from './echartsTheme';
import type { PreviewScene } from '../preview/types';

/** What echarts saw of one chart: its init options and every option set on it. */
interface ChartRecord {
    el: HTMLElement;
    init: unknown;
    options: unknown[];
}

const charts = vi.hoisted((): ChartRecord[] => []);

vi.mock('echarts/core', async importOriginal => {
    const actual: Record<string, unknown> = await importOriginal();
    return {
        ...actual,
        init: (el: HTMLElement, _theme: unknown, init: unknown) => {
            const record: ChartRecord = { el, init, options: [] };
            charts.push(record);
            return {
                setOption: (option: unknown) => record.options.push(option),
                on: () => undefined,
                off: () => undefined,
                resize: () => undefined,
                dispose: () => undefined,
                getOption: () => ({}),
                dispatchAction: () => undefined,
            };
        },
    };
});

installInertResizeObserver();

const OID = 'demo.0.temperature';
const JSON_OID = 'demo.0.chart';
const NOW = Date.UTC(2026, 10, 12, 10, 30);

/** The history answer: a real curve with a gap, so the null handling has something to do. */
const HISTORY = [
    { ts: NOW - 3_600_000, val: 20.25 },
    { ts: NOW - 2_400_000, val: null },
    { ts: NOW - 1_200_000, val: 21.5 },
];

/** A finished-series payload for the JSON family (ADR-0011). */
const JSON_PAYLOAD = JSON.stringify([
    {
        name: 'Room',
        data: [
            [NOW - 3_600_000, 1.25],
            [NOW, 2.5],
        ],
    },
]);

/** The field defaults, read from the definition. */
const defaults = fieldDefaultsOf([{ name: 'echarts', fields: echartsFields() }]);

/** The widgets the defaults are tried on: the paths a missing key can take through the body. */
const BASES: Readonly<Record<string, Record<string, unknown>>> = {
    // Nothing set at all: the assistant's empty insert (the empty state).
    empty: {},
    // A Verlauf line chart with one bound series.
    history: { series_count: 1, oid1: OID },
    // The same with a title, a drawn frame and a preset palette: the defaults acting only under them.
    styled: {
        series_count: 1,
        oid1: OID,
        titleText: 'Title',
        frameEnabled: true,
        frameWidth: 2,
        paletteSource: 'preset',
    },
    // A title off the centre column, where the horizontal offset acts.
    titled: { series_count: 1, oid1: OID, titleText: 'Title', titlePos: 'topLeft' },
    // A frame switched on without its width.
    frame: { series_count: 1, oid1: OID, frameEnabled: true },
    // A bound OID without its series count: the count's own fallback.
    uncounted: { oid1: OID },
    // A static window: its bounds unset.
    static: { series_count: 1, oid1: OID, timeType: 'static' },
    // A pie over the same series.
    pie: { chartType: 'pie', series_count: 1, oid1: OID },
    // A JSON chart over a finished-series payload.
    json: { mode: 'json', jsonOid: JSON_OID },
};

/**
 * Keys whose default the body reads unlike the missing key, each with its reason. The data's
 * reading fills the missing key before the body reads it, so none of these differs in a widget.
 */
const READ_UNLIKE_MISSING: Readonly<Record<string, string>> = {
    // tooltipDecimals 0 rounds the tooltip values; a missing key leaves them as they are
    // (`formatChartValue`) — no fallback copies the default here.
    tooltipDecimals: 'missing = no rounding',
    // A preset palette without a preset name falls to the theme palette (`resolvePalette`).
    palettePreset: 'missing = the theme palette',
    // A frame without a width draws no frame (`resolveFrameCss`); the editor opens it at 1.
    frameWidth: 'missing = no frame',
};

/** A comparable snapshot: functions as a marker, so a formatter that appears or goes shows. */
const plain = (value: unknown): unknown =>
    JSON.parse(JSON.stringify(value, (_k, v: unknown) => (typeof v === 'function' ? '[function]' : v)));

const sceneOf = (data: Record<string, unknown>): PreviewScene =>
    ({
        slug: 'echarts-defaults-parity',
        size: { width: 480, height: 240 },
        context: {
            widget: { data: { noHeader: true, noFooter: true, ...data }, style: {} },
            values: { [`${JSON_OID}.val`]: JSON_PAYLOAD },
            mode: 'light',
            wrappedContent: true,
        },
    }) as unknown as PreviewScene;

/** What the body did with one widget's data. */
interface Rendered {
    markup: string;
    charts: unknown;
    history: unknown;
}

/** Each base rendered without a key and once per default key, keyed `<base>` / `<base>:<key>`. */
const rendered = new Map<string, Rendered>();

const variantsOf = (base: Record<string, unknown>): [string | null, Record<string, unknown>][] => [
    [null, base],
    ...[...defaults.keys()]
        .filter(key => !(key in base))
        .map((key): [string, Record<string, unknown>] => [key, { ...base, [key]: defaults.get(key) }]),
];

beforeAll(async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(NOW);
    const mounts: {
        id: string;
        container: HTMLDivElement;
        getHistory: ReturnType<typeof vi.fn>;
        unmount: () => void;
    }[] = [];
    for (const [name, base] of Object.entries(BASES)) {
        for (const [key, data] of variantsOf(base)) {
            const scene = sceneOf(data);
            const getHistory = vi.fn(() => Promise.resolve(HISTORY));
            const socket = {
                ...(buildPreviewContext(scene).socket as unknown as Record<string, unknown>),
                getObject: () => Promise.resolve(null),
                getHistory,
            };
            const { container, unmount } = mountCollectionBody(EchartsCollection, scene, { socket });
            mounts.push({ id: key ? `${name}:${key}` : name, container, getHistory, unmount });
        }
    }
    // The history fetch is debounced (200 ms) — wait it out with the real clock, once for all.
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 300)));
    for (const { id, container, getHistory, unmount } of mounts) {
        rendered.set(id, {
            markup: container.innerHTML,
            charts: plain(
                charts.filter(c => container.contains(c.el)).map(c => ({ init: c.init, option: c.options.at(-1) })),
            ),
            history: plain(getHistory.mock.calls),
        });
        unmount();
    }
}, 60_000);

afterAll(() => {
    vi.useRealTimers();
});

describe('EchartsCollection — the body reads each field default like the key missing', () => {
    it('tries the defaults of the definition on charts that draw', () => {
        expect(defaults.size).toBeGreaterThan(40);
        expect(rendered.get('history')?.history).not.toEqual([]);
        expect(rendered.get('history')?.charts).toHaveLength(1);
        expect(rendered.get('pie')?.charts).toHaveLength(1);
        expect(rendered.get('json')?.charts).toHaveLength(1);
    });

    it.each(Object.keys(BASES))('%s: every default renders like the key missing', name => {
        const unset = rendered.get(name)!;
        const unlike = variantsOf(BASES[name])
            .flatMap(([key]) => (key ? [key] : []))
            .filter(key => !(key in READ_UNLIKE_MISSING))
            .filter(key => JSON.stringify(rendered.get(`${name}:${key}`)) !== JSON.stringify(unset));

        expect(unlike).toEqual([]);
    });

    // A static window without usable bounds degrades to the relative default window (ADR-0063):
    // the window of the default range and end, not a span of its own.
    it('requests the default window for a static window without bounds', () => {
        expect(rendered.get('static')?.history).toEqual(rendered.get('history')?.history);
    });

    it('excepts only keys that do render unlike the missing key', () => {
        const stale = Object.keys(READ_UNLIKE_MISSING).filter(
            key =>
                !Object.keys(BASES).some(
                    name =>
                        rendered.has(`${name}:${key}`) &&
                        JSON.stringify(rendered.get(`${name}:${key}`)) !== JSON.stringify(rendered.get(name)),
                ),
        );

        expect(stale).toEqual([]);
    });
});

// The pipeline always hands the history request a count and the fetch a null mode, so these
// fallbacks never act from the body — pinned here directly.
describe('the history request — its fallbacks read like the field defaults', () => {
    const win = { start: NOW - 86_400_000, end: NOW };

    it('requests the default count and aggregate when none is given', () => {
        expect(windowToOptions(win)).toEqual(
            windowToOptions(win, {
                count: defaults.get('count') as number,
                aggregate: defaults.get('aggregate') as never,
            }),
        );
    });

    it('handles the gaps by the default null mode when none is given', async () => {
        const ignoreNull = defaults.get('ignoreNull') as never;
        const getHistory = (): Promise<typeof HISTORY> => Promise.resolve(HISTORY);
        const entries = [{ oid: OID }];
        const options = windowToOptions(win);

        expect(toSeriesData(HISTORY)).toEqual(toSeriesData(HISTORY, ignoreNull));
        expect(await fetchMultiSeries(getHistory, entries, options)).toEqual(
            await fetchMultiSeries(getHistory, entries, options, ignoreNull),
        );
    });
});

// The presentation base turns some fields into closures (formatters, row filters) the body's
// snapshot shows only as a marker — its fallbacks are pinned on its own result as well.
describe('the presentation base — each field default reads like the key missing', () => {
    /** Keys the base reads unlike the missing key — a representation, see each reason. */
    const BASE_READ_UNLIKE_MISSING: Readonly<Record<string, string>> = {
        // '' and the missing key both mean no template / no unit downstream (`if (p.tooltipTemplate)`,
        // `units ? … : …`) — the body above renders them alike.
        tooltipTemplate: "'' = missing = no template",
        tooltipUnits: "'' = missing = no unit",
        // See READ_UNLIKE_MISSING: 0 rounds, the missing key does not.
        tooltipDecimals: READ_UNLIKE_MISSING.tooltipDecimals,
    };
    const baseOf = (family: 'cartesian' | 'pie', src: Record<string, unknown>): unknown =>
        toPresentationBase({ src, palette: ['#111'], family, themeTokens: {} as ThemeTokens, themeDark: false });

    it.each(['cartesian', 'pie'] as const)('%s: reads every default like the key missing', family => {
        const unlike = [...defaults.keys()].filter(
            key => JSON.stringify(baseOf(family, { [key]: defaults.get(key) })) !== JSON.stringify(baseOf(family, {})),
        );

        expect(unlike.sort()).toEqual(Object.keys(BASE_READ_UNLIKE_MISSING).sort());
    });
});
