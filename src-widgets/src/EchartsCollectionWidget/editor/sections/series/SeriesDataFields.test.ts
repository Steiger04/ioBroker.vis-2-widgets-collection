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
        expect(combos(h.container)[0]).toBe('inherit (→ max)');
        h.rerender({ meta: {}, onPatch: () => undefined, chartAggregate: 'total', isBarChart: false });
        expect(combos(h.container)[0]).toBe('inherit (→ total)');
    });

    it('an override renders as the concrete value; the inherit entry stays reachable (override → back)', () => {
        const h = mount({ meta: { aggregate: 'max' }, chartAggregate: 'average' });
        expect(combos(h.container)[0]).toBe('max'); // the authored override, not the default
        h.rerender({ meta: {}, onPatch: () => undefined, chartAggregate: 'average', isBarChart: false });
        expect(combos(h.container)[0]).toBe('inherit (→ average)'); // cleared = back on inherit
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
