/**
 * Component tests for the series card's "Daten" cluster (ADR-0072) — the Erben-Override UI:
 * the inherit entry renders the effective chart value, params gate sparsely under the
 * EFFECTIVE aggregate, the diff tristate shows on bar charts only, and the X-offset
 * select+seconds pair keeps numeric back-compat.
 *
 * @module EchartsCollectionWidget/editor/sections/series/SeriesDataFields.test
 * @remarks
 * `window.visRxWidget` is stubbed in a hoisted block (Generic extends it at module-load —
 * undefined outside the vis-2 runtime); the stub's `t` serves a small dictionary mirroring
 * the en.json values the assertions read, with sequential %s substitution.
 */
import { describe, expect, it, vi } from 'vitest';
import { act } from 'react';

vi.hoisted(() => {
    const dict: Record<string, string> = {
        echarts_grp_data: 'Data',
        echarts_aggregate: 'Aggregation',
        echarts_percentile: 'Percentile (%)',
        echarts_integral_unit: 'Unit (seconds)',
        echarts_integral_interpolation: 'Interpolation',
        echarts_interp_none: 'none',
        echarts_interp_linear: 'linear',
        echarts_series_inherit: 'inherit',
        echarts_series_agg_inherit: 'inherit (→ %s)',
        echarts_agg_average: 'Average',
        echarts_agg_minmax: 'Min–Max',
        echarts_agg_min: 'Minimum',
        echarts_agg_max: 'Maximum',
        echarts_agg_total: 'Total',
        echarts_agg_count: 'Count',
        echarts_agg_onchange: 'On change',
        echarts_agg_none: 'None',
        echarts_agg_percentile: 'Percentile',
        echarts_agg_integral: 'Integral',
        echarts_series_diff: 'Difference',
        echarts_series_diff_diff: 'differentiate',
        echarts_series_diff_raw: 'raw',
        echarts_series_xoffset_mode: 'X offset',
        echarts_series_xoffset_seconds: 'Seconds',
        echarts_series_xoff_1m: '1 month',
        echarts_series_xoff_6m: '6 months',
        'echarts_series_xoff_-6m': '-6 months',
        echarts_series_null_mode: 'NULL handling',
        echarts_series_null_inherit: 'Inherit chart setting',
        echarts_series_formula: 'Formula',
        echarts_series_yoffset: 'Y offset',
        echarts_series_no_future: 'No future',
        echarts_series_data_preset_hint:
            'The Data source section holds the default for every series — each value here inherits it and can override it per series.',
        echarts_series_xoffset_bar_limit:
            'The X offset shifts only the request window: in the category bar chart a shifted series lands outside the shared bar grid (empty buckets).',
        echarts_series_value_map: 'Value mapping',
        echarts_series_value_map_add: 'Add mapping',
        echarts_series_value_map_from: 'Raw value',
        echarts_series_value_map_help: 'The mapping matches exactly on String(raw value).',
        echarts_series_value_map_to: 'Number (empty = gap)',
    };
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: (string | number)[]): string {
            let s = dict[key] ?? key;
            for (const a of args) {
                s = s.replace('%s', String(a));
            }
            return s;
        }
    };
});

import { renderComponent, type RenderComponentHandle } from '../../../../lib/testing/testHarness';
import { SeriesDataFields, xOffsetMode } from './CartesianSeriesCard';

// The card module's heavy leaves, stubbed to keep this a card-logic test: `shared` pulls
// @iobroker/adapter-react-v5's SelectID, and the @mui/icons-material barrel costs minutes of
// Node module resolution in vitest (its ~11k-re-export index — probed at 219 s for ONE icon).
// The icons named below are every one the unmocked render path (card + controls) touches.
vi.mock('@mui/icons-material', () => ({
    ContentCopy: () => null,
    DeleteOutline: () => null,
    KeyboardArrowDown: () => null,
    KeyboardArrowUp: () => null,
    ExpandMore: () => null,
}));
vi.mock('./shared', () => ({
    AddSeriesViaOid: () => null,
    EmptyState: () => null,
    SeriesRawOverride: () => null,
    Swatch: () => null,
}));
vi.mock('../../OidPicker', () => ({ default: () => null }));
vi.mock('../../colorFields', () => ({ default: () => null }));

type DataProps = Parameters<typeof SeriesDataFields>[0];

const mount = (over: Partial<DataProps> = {}): RenderComponentHandle<DataProps> =>
    renderComponent(SeriesDataFields, {
        meta: {},
        onPatch: () => undefined,
        chartAggregate: 'average' as DataProps['chartAggregate'],
        isBarChart: false,
        ...over,
    });

/** The rendered combobox display texts — one per LabeledSelect, in DOM order. */
const combos = (el: HTMLElement): string[] =>
    Array.from(el.querySelectorAll('[role="combobox"]')).map(n => (n.textContent ?? '').trim());

describe('SeriesDataFields — Erben-Override UI (ADR-0072)', () => {
    it("the aggregate select's inherit entry renders the EFFECTIVE chart value and follows it", () => {
        const h = mount({ chartAggregate: 'max' });
        expect(combos(h.container)[0]).toBe('inherit (→ Maximum)');
        h.rerender({ meta: {}, onPatch: () => undefined, chartAggregate: 'total', isBarChart: false });
        expect(combos(h.container)[0]).toBe('inherit (→ Total)');
    });

    it('an override renders as the concrete value; the inherit entry stays reachable (override → back)', () => {
        const h = mount({ meta: { aggregate: 'max' }, chartAggregate: 'average' });
        expect(combos(h.container)[0]).toBe('Maximum'); // the authored override, not the default
        h.rerender({ meta: {}, onPatch: () => undefined, chartAggregate: 'average', isBarChart: false });
        expect(combos(h.container)[0]).toBe('inherit (→ Average)'); // cleared = back on inherit
    });

    it('percentile gates under the EFFECTIVE aggregate — inherited chart percentile, or the own override', () => {
        // chart percentile: the field shows with the chart's level as the slider fallback
        const inherited = mount({ chartAggregate: 'percentile', chartPercentile: 75 });
        expect(inherited.container.textContent).toContain('Percentile (%)');
        inherited.unmount();
        // a series overriding AWAY from percentile loses the field
        const overridden = mount({
            meta: { aggregate: 'average' },
            chartAggregate: 'percentile',
            chartPercentile: 75,
        });
        expect(overridden.container.textContent).not.toContain('Percentile (%)');
        overridden.unmount();
        // a series overriding TO percentile gains the field (chart is average)
        const own = mount({ meta: { aggregate: 'percentile' }, chartAggregate: 'average' });
        expect(own.container.textContent).toContain('Percentile (%)');
    });

    it('integral unit + interpolation gate the same way (own override opens them, away closes)', () => {
        const own = mount({ meta: { aggregate: 'integral' }, chartAggregate: 'average' });
        expect(own.container.textContent).toContain('Unit (seconds)');
        expect(own.container.textContent).toContain('Interpolation');
        own.unmount();
        const away = mount({ meta: { aggregate: 'max' }, chartAggregate: 'integral' });
        expect(away.container.textContent).not.toContain('Unit (seconds)');
        expect(away.container.textContent).not.toContain('Interpolation');
    });

    it('the diff tristate renders on bar charts only', () => {
        const line = mount({ isBarChart: false });
        expect(line.container.textContent).not.toContain('Difference');
        line.unmount();
        const bar = mount({ isBarChart: true });
        expect(bar.container.textContent).toContain('Difference');
        expect(combos(bar.container)).toContain('inherit'); // the tristate's first entry
    });

    it('diff tristate round-trip: an authored value renders concretely, clearing returns to inherit', () => {
        const h = mount({ meta: { diffMode: 'diff' }, isBarChart: true });
        expect(combos(h.container)).toContain('differentiate');
        expect(combos(h.container)).not.toContain('inherit');
        h.rerender({
            meta: { diffMode: 'raw' },
            onPatch: () => undefined,
            chartAggregate: 'average',
            isBarChart: true,
        });
        expect(combos(h.container)).toContain('raw');
        h.rerender({ meta: {}, onPatch: () => undefined, chartAggregate: 'average', isBarChart: true });
        expect(combos(h.container)).toContain('inherit'); // back on inherit
    });

    it('the offset select pairs with the seconds field — numeric values stay numbers (back-compat)', () => {
        // a stored number renders mode 'Seconds' WITH the seconds field carrying the value
        const numeric = mount({ meta: { xOffset: 90 } });
        const inputs = Array.from(numeric.container.querySelectorAll('input[type="number"]')).map(
            i => (i as HTMLInputElement).value,
        );
        expect(inputs).toContain('90');
        numeric.unmount();
        // a stored calendar key selects itself; the seconds field is gone
        const key = mount({ meta: { xOffset: '-6m' } });
        expect(combos(key.container)).toContain('-6 months');
        expect(
            Array.from(key.container.querySelectorAll('input[type="number"]')).map(i => (i as HTMLInputElement).value),
        ).not.toContain('90');
    });

    it('carries the Voreinstellungs hint and — on bar charts — the offset×bars boundary InfoBox', () => {
        const line = mount({ isBarChart: false });
        expect(line.container.textContent).toContain('holds the default for every series');
        expect(line.container.textContent).not.toContain('outside the shared bar grid');
        line.unmount();
        const bar = mount({ isBarChart: true });
        expect(bar.container.textContent).toContain('outside the shared bar grid');
    });
});

describe('xOffsetMode (pure)', () => {
    it('numbers and unset are the seconds form; calendar keys select themselves', () => {
        expect(xOffsetMode(undefined)).toBe('sec');
        expect(xOffsetMode(90)).toBe('sec');
        expect(xOffsetMode(-3600)).toBe('sec');
        expect(xOffsetMode('1m')).toBe('1m');
        expect(xOffsetMode('-6m')).toBe('-6m');
    });
});

describe('SeriesValueMapField — the Wert-Zuordnung rows (ticket 02)', () => {
    type Patch = Parameters<DataProps['onPatch']>[0];

    /**
     * Drive a controlled text input. The value MUST go through the PROTOTYPE's native setter —
     * React's value tracking records every direct `.value =` assignment, so a plain assign +
     * `input` event reads as "unchanged" and onChange never fires (the jsdom/happy-dom classic).
     */
    const setInput = (input: HTMLInputElement, value: string): void => {
        act(() => {
            Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(input, value);
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
    };
    /**
     * The LAST row's [Von, Nach] pair. The map rows render AFTER the Daten grid, so the row's
     * Von is the final text input and its Nach the final number input — the grid's own inputs
     * (formula, select displays, the offset numbers) sit before them.
     */
    const lastRow = (el: HTMLElement): [HTMLInputElement, HTMLInputElement] => {
        const inputs = Array.from(el.querySelectorAll('input'));
        const texts = inputs.filter(i => i.type === 'text');
        const numbers = inputs.filter(i => i.type === 'number');
        return [texts[texts.length - 1], numbers[numbers.length - 1]];
    };

    it('renders the authored rows — raw value + target, a gap target renders empty, help rides along', () => {
        const h = mount({ meta: { valueMap: { Sonne: 3, weg: null } } });
        const values = Array.from(h.container.querySelectorAll('input')).map(i => i.value);
        expect(values).toContain('Sonne');
        expect(values).toContain('3');
        expect(values).toContain(''); // the gap target renders empty (next to its raw value)
        expect(h.container.textContent).toContain('Value mapping');
        expect(h.container.textContent).toContain('matches exactly on String');
    });

    it('the add button appends a next-free-integer IDENTITY row — real but inert from arrival', () => {
        const patches: Patch[] = [];
        const h = mount({ meta: { valueMap: { Sonne: 3 } }, onPatch: p => patches.push(p) });
        const add = Array.from(h.container.querySelectorAll('button')).find(b => b.textContent === 'Add mapping');
        expect(add).toBeTruthy();
        act(() => {
            add!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(patches.at(-1)).toEqual({ valueMap: { Sonne: 3, 0: 0 } }); // 0 → 0: identity
    });

    it('target edits rebuild the map — empty = gap (null); the NATIVE number field can only deliver a number or empty', () => {
        const patches: Patch[] = [];
        const h = mount({ meta: { valueMap: { Sonne: 3 } }, onPatch: p => patches.push(p) });
        const [, nach] = lastRow(h.container);
        setInput(nach, '');
        expect(patches.at(-1)).toEqual({ valueMap: { Sonne: null } }); // empty target = deliberate gap
        setInput(nach, '2.5');
        expect(patches.at(-1)).toEqual({ valueMap: { Sonne: 2.5 } });
        setInput(nach, '-4');
        expect(patches.at(-1)).toEqual({ valueMap: { Sonne: -4 } }); // negatives commit too
    });

    it('clearing the LAST Von drops the whole map — valueMap: undefined, the key leaves the blob', () => {
        const patches: Patch[] = [];
        const h = mount({ meta: { valueMap: { Sonne: 3 } }, onPatch: p => patches.push(p) });
        const [von] = lastRow(h.container);
        setInput(von, '');
        expect(patches.at(-1)).toEqual({ valueMap: undefined }); // the JSON round-trip drops the key
    });
});
