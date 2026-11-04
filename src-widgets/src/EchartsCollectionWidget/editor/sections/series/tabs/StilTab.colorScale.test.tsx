/**
 * Render tests for the Farbskala SubGroup of the Stil tab (ADR-0101): visible for line, bar and
 * scatter; Min/Max/colours disabled while the switch is off (ADR-0019); the empty Min/Max
 * placeholders name their inherit source (and the value only when it is known); the colour field
 * previews the derived scale; the area hint appears only with Farbskala AND area „Verlauf".
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/StilTab.colorScale.test
 * @remarks
 * The t stub joins key and args (`key|arg`) so the placeholders' value is observable. The colour
 * picker is marker-mocked (the StilTab.test precedent).
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: unknown[]): string {
            return [key, ...args].join('|');
        }
    };
});
vi.mock('../../../colorFields', () => ({
    default: (props: { value?: string; fallback?: string; disabled?: boolean }) => (
        <span
            data-testid="color-field"
            data-value={props.value ?? ''}
            data-fallback={props.fallback ?? ''}
            data-disabled={props.disabled ? 'true' : 'false'}
        />
    ),
}));

import { act, createElement, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { StilTab } from './StilTab';
import type { EchartsAxisConfig, EchartsSeriesMeta } from '../../../../../types/field-definitions/echarts-fields';
import type { ValueExtent } from '../../../../seriesColorScale';

const mountStil = (
    meta: EchartsSeriesMeta,
    opts: {
        yAxes?: EchartsAxisConfig[];
        dataExtent?: ValueExtent | null;
        seriesColor?: string;
        colorScalePercent?: boolean;
    } = {},
): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(
            createElement(StilTab, {
                meta,
                defaultType: 'line',
                onPatch: () => undefined,
                pickerCtx: {} as never,
                seriesColor: opts.seriesColor ?? '#ff0000',
                labelColorFallback: '#222',
                yAxes: opts.yAxes ?? [{}],
                dataExtent: opts.dataExtent ?? null,
                colorScalePercent: opts.colorScalePercent,
            }),
        );
    });
    return container;
};

/** The Farbskala SubGroup — the box whose overline title is the group key. */
const group = (el: HTMLElement): HTMLElement | null => {
    const title = Array.from(el.querySelectorAll('span, p')).find(n => n.textContent === 'echarts_grp_color_scale');
    return (title?.parentElement?.parentElement as HTMLElement | null) ?? null;
};
const numberInputs = (g: HTMLElement): HTMLInputElement[] =>
    Array.from(g.querySelectorAll<HTMLInputElement>('input[type="number"]'));
const scaleColorField = (g: HTMLElement): HTMLElement => g.querySelector<HTMLElement>('[data-testid="color-field"]')!;

describe('StilTab — the Farbskala SubGroup (ADR-0101)', () => {
    it.each(['line', 'bar', 'scatter'] as const)('renders for a %s series, before „Nur in Legende"', type => {
        const el = mountStil({ type });
        expect(group(el)).not.toBeNull();
        const text = el.textContent ?? '';
        expect(text.indexOf('echarts_grp_color_scale')).toBeLessThan(text.indexOf('echarts_series_legend_only'));
    });

    it('orders Linie · Fläche · Farbskala for a line series', () => {
        const text = mountStil({ type: 'line' }).textContent ?? '';
        expect(text.indexOf('echarts_grp_line')).toBeLessThan(text.indexOf('echarts_grp_area'));
        expect(text.indexOf('echarts_grp_area')).toBeLessThan(text.indexOf('echarts_grp_color_scale'));
    });

    it('disables Min, Max and Farben while the switch is off — and enables them when on', () => {
        const off = group(mountStil({ type: 'line' }))!;
        expect(numberInputs(off)).toHaveLength(2);
        expect(numberInputs(off).every(i => i.disabled)).toBe(true);
        expect(scaleColorField(off).dataset.disabled).toBe('true');

        const on = group(mountStil({ type: 'line', colorScale: true }))!;
        expect(numberInputs(on).every(i => !i.disabled)).toBe(true);
        expect(scaleColorField(on).dataset.disabled).toBe('false');
    });

    it('carries the hint that the scale replaces the series colour as an InfoBox', () => {
        const g = group(mountStil({ type: 'bar' }))!;
        const boxes = Array.from(g.querySelectorAll('[data-info-box]')).map(b => b.textContent);
        expect(boxes).toEqual(['echarts_color_scale_hint']);
    });

    it('names the inherit source in the empty placeholders — the value only when known', () => {
        // Axis bounds: always known.
        const axis = group(mountStil({ type: 'line', colorScale: true }, { yAxes: [{ min: 0, max: 40 }] }))!;
        expect(numberInputs(axis).map(i => i.placeholder)).toEqual([
            'echarts_color_scale_placeholder_axis|0',
            'echarts_color_scale_placeholder_axis|40',
        ]);
        // Data without loaded preview data: the source, no invented value.
        const unknown = group(mountStil({ type: 'line', colorScale: true }))!;
        expect(numberInputs(unknown).map(i => i.placeholder)).toEqual([
            'echarts_color_scale_placeholder_data_unknown',
            'echarts_color_scale_placeholder_data_unknown',
        ]);
        // Mixed: min from the bound axis, max from the loaded data.
        const mixed = group(
            mountStil(
                { type: 'line', colorScale: true, yAxisIndex: 1 },
                { yAxes: [{}, { min: 5 }], dataExtent: { min: 7, max: 12.5 } },
            ),
        )!;
        expect(numberInputs(mixed).map(i => i.placeholder)).toEqual([
            'echarts_color_scale_placeholder_axis|5',
            'echarts_color_scale_placeholder_data|12.5',
        ]);
    });

    it('carries the full Erben text as tooltip and accessible name of an empty bound (ticket 07)', () => {
        const g = group(
            mountStil(
                { type: 'line', colorScale: true, yAxisIndex: 1 },
                { yAxes: [{}, { min: 5 }], dataExtent: { min: 7, max: 12.5 } },
            ),
        )!;
        const [min, max] = numberInputs(g);
        expect(min.title).toBe('echarts_color_scale_inherit_axis|5');
        expect(max.title).toBe('echarts_color_scale_inherit_data|12.5');
        expect(min.getAttribute('aria-label')).toBe(
            'echarts_series_color_scale_min, echarts_color_scale_inherit_axis|5',
        );
        expect(max.getAttribute('aria-label')).toBe(
            'echarts_series_color_scale_max, echarts_color_scale_inherit_data|12.5',
        );
    });

    it('drops the Erben tooltip once a bound is entered — the field then shows its own value', () => {
        const g = group(mountStil({ type: 'line', colorScale: true, colorScaleMax: 30 }))!;
        const [min, max] = numberInputs(g);
        expect(min.title).toBe('echarts_color_scale_inherit_data_unknown');
        expect(max.title).toBe('');
        expect(max.getAttribute('aria-label')).toBe('echarts_series_color_scale_max');
    });

    it('shows the inherited bounds of a percent-stacked bar in displayed percent (ticket 08)', () => {
        const g = group(
            mountStil(
                { type: 'bar', colorScale: true },
                { dataExtent: { min: 0.125, max: 0.35 }, colorScalePercent: true },
            ),
        )!;
        expect(numberInputs(g).map(i => i.placeholder)).toEqual([
            'echarts_color_scale_placeholder_data|12.5',
            'echarts_color_scale_placeholder_data|35',
        ]);
    });

    it('shows an entered bound as the value, not as a placeholder', () => {
        const g = group(mountStil({ type: 'line', colorScale: true, colorScaleMax: 30 }))!;
        expect(numberInputs(g)[1].value).toBe('30');
    });

    it('previews the derived scale of the effective series colour in the colour field', () => {
        const g = group(mountStil({ type: 'scatter', colorScale: true }, { seriesColor: '#0000ff' }))!;
        const field = scaleColorField(g);
        expect(field.dataset.value).toBe('');
        expect(field.dataset.fallback).toBe(
            'linear-gradient(90deg, rgba(128, 128, 255, 1) 0%, rgba(0, 0, 255, 1) 50%, rgba(0, 0, 128, 1) 100%)',
        );
    });

    it('flags an entered Min ≥ Max at the fields — the helper text names the consequence (ticket 05)', () => {
        const KEY = 'echarts_val_color_scale_range';
        const bad = group(mountStil({ type: 'line', colorScale: true, colorScaleMin: 30, colorScaleMax: 5 }))!;
        expect(numberInputs(bad).map(i => i.getAttribute('aria-invalid'))).toEqual(['true', 'true']);
        // ONE helper text for the pair, not a duplicate under each field.
        expect(bad.querySelectorAll('.MuiFormHelperText-root')).toHaveLength(1);
        expect(bad.querySelector('.MuiFormHelperText-root')!.textContent).toBe(KEY);
        // Scale off or a bound inherited: no input error.
        for (const meta of [
            { type: 'line', colorScaleMin: 30, colorScaleMax: 5 },
            { type: 'line', colorScale: true, colorScaleMin: 30 },
        ] as EchartsSeriesMeta[]) {
            const g = group(mountStil(meta))!;
            expect(numberInputs(g).map(i => i.getAttribute('aria-invalid'))).toEqual(['false', 'false']);
            expect(g.textContent).not.toContain(KEY);
        }
    });

    it('drops the field error the moment the range becomes valid', () => {
        const Harness = (): React.JSX.Element => {
            const [meta, setMeta] = useState<EchartsSeriesMeta>({
                type: 'line',
                colorScale: true,
                colorScaleMin: 30,
                colorScaleMax: 5,
            });
            return createElement(StilTab, {
                meta,
                defaultType: 'line',
                onPatch: p => setMeta(m => ({ ...m, ...p })),
                pickerCtx: {} as never,
                seriesColor: '#ff0000',
                labelColorFallback: '#222',
                yAxes: [{}],
            });
        };
        const container = document.createElement('div');
        document.body.appendChild(container);
        act(() => createRoot(container).render(createElement(Harness)));
        const max = numberInputs(group(container)!)[1];
        expect(max.getAttribute('aria-invalid')).toBe('true');
        act(() => {
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(max, '50');
            max.dispatchEvent(new Event('input', { bubbles: true }));
        });
        const g = group(container)!;
        expect(numberInputs(g).map(i => i.getAttribute('aria-invalid'))).toEqual(['false', 'false']);
        expect(g.textContent).not.toContain('echarts_val_color_scale_range');
    });

    it('explains the area/line split only with Farbskala AND area „Verlauf"', () => {
        const hintsOf = (meta: EchartsSeriesMeta): string[] =>
            Array.from(group(mountStil(meta))!.querySelectorAll('[data-info-box]')).map(b => b.textContent ?? '');
        const AREA_HINT = 'echarts_color_scale_area_hint';
        expect(hintsOf({ type: 'line', colorScale: true, area: 'gradient' })).toContain(AREA_HINT);
        expect(hintsOf({ type: 'line', colorScale: false, area: 'gradient' })).not.toContain(AREA_HINT);
        expect(hintsOf({ type: 'line', colorScale: true, area: 'flat' })).not.toContain(AREA_HINT);
        expect(hintsOf({ type: 'line', colorScale: true })).not.toContain(AREA_HINT);
    });
});
