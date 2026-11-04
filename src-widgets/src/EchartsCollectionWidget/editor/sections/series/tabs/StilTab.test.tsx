/**
 * Render tests for the Stil tab's Flächen-Verlauf field (ADR-0101): in area mode „Verlauf"
 * without a chosen gradient, the field's inherit preview (the ColorField `fallback`, which is
 * also the picker's start value) is the DERIVED Flächen-Verlauf of the effective series colour.
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/StilTab.test
 * @remarks
 * The colour picker is marker-mocked (it builds a collection theme off the host theme, which a
 * headless mount cannot provide — the sectionTabs precedent); the marker exposes the props the
 * field hands it.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('../../../colorFields', () => ({
    default: (props: { value?: string; fallback?: string; title?: string }) => (
        <span
            data-testid="color-field"
            data-title={props.title ?? ''}
            data-value={props.value ?? ''}
            data-fallback={props.fallback ?? ''}
        />
    ),
}));

import { act, createElement, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { StilTab } from './StilTab';
import type { EchartsSeriesMeta } from '../../../../../types/field-definitions/echarts-fields';

const mountStil = (meta: EchartsSeriesMeta, seriesColor = '#5470c6', chartCanvas = 'transparent'): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(
            createElement(StilTab, {
                meta,
                defaultType: 'line',
                onPatch: () => undefined,
                pickerCtx: {} as never,
                seriesColor,
                chartCanvas,
            }),
        );
    });
    return container;
};

const colorFields = (el: HTMLElement): HTMLElement[] =>
    Array.from(el.querySelectorAll<HTMLElement>('[data-testid="color-field"]'));

describe('StilTab — the Flächen-Verlauf field (ADR-0101)', () => {
    it('previews the derived Flächen-Verlauf of the effective series colour when no gradient is chosen', () => {
        const el = mountStil({ name: 'A', type: 'line', area: 'gradient' });
        const [field] = colorFields(el);
        expect(field.dataset.value).toBe('');
        expect(field.dataset.fallback).toBe(
            'linear-gradient(180deg, rgba(84, 112, 198, 1) 0%, rgba(84, 112, 198, 0.5) 50%, rgba(84, 112, 198, 0) 100%)',
        );
    });

    it('keeps a chosen gradient as the field value', () => {
        const chosen = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const el = mountStil({ name: 'A', type: 'line', area: 'gradient', areaGradient: chosen });
        expect(colorFields(el)[0].dataset.value).toBe(chosen);
    });

    it('falls back to the solid series colour when it cannot derive a gradient', () => {
        const el = mountStil({ name: 'A', type: 'line', area: 'gradient' }, 'var(--accent)');
        expect(colorFields(el)[0].dataset.fallback).toBe('var(--accent)');
    });
});

const barLabelField = (el: HTMLElement): HTMLElement | undefined =>
    colorFields(el).find(f => f.dataset.title === 'echarts_bar_label_color');

describe('StilTab — the bar label colour previews the echarts auto contrast (ADR-0080 decision 4)', () => {
    it('inside (unset position = echarts default): a light bar gets the dark label', () => {
        const el = mountStil({ name: 'A', type: 'bar', label: true }, '#ffeb3b');
        expect(barLabelField(el)?.dataset.fallback).toBe('#333');
    });

    it('inside: a dark bar gets the light label', () => {
        const el = mountStil({ name: 'A', type: 'bar', label: true, labelPosition: 'insideTop' }, '#222222');
        expect(barLabelField(el)?.dataset.fallback).toBe('#ccc');
    });

    it('outside (top): the label follows the canvas mode, not the bar', () => {
        const meta: EchartsSeriesMeta = { name: 'A', type: 'bar', label: true, labelPosition: 'top' };
        expect(barLabelField(mountStil(meta, '#ffeb3b', 'transparent'))?.dataset.fallback).toBe('#333');
        expect(barLabelField(mountStil(meta, '#ffeb3b', '#1e1e1e'))?.dataset.fallback).toBe('#ccc');
    });

    it('an authored label colour stays the field value', () => {
        const el = mountStil({ name: 'A', type: 'bar', label: true, labelColor: '#ff0000' }, '#222222');
        expect(barLabelField(el)?.dataset.value).toBe('#ff0000');
    });
});

describe('StilTab — the bar label position select follows the runtime (ADR-0056)', () => {
    /** Mounts the tab statefully: every patch merges into the meta the tab sees next. */
    const mountLive = (
        initial: EchartsSeriesMeta,
        seriesColor: string,
        chartCanvas: string,
    ): { el: HTMLElement; patches: Partial<EchartsSeriesMeta>[] } => {
        const patches: Partial<EchartsSeriesMeta>[] = [];
        const Harness = (): ReturnType<typeof StilTab> => {
            const [meta, setMeta] = useState(initial);
            return createElement(StilTab, {
                meta,
                defaultType: 'line',
                onPatch: (patch: Partial<EchartsSeriesMeta>) => {
                    patches.push(patch);
                    setMeta(m => ({ ...m, ...patch }));
                },
                pickerCtx: {} as never,
                seriesColor,
                chartCanvas,
            });
        };
        const el = document.createElement('div');
        document.body.appendChild(el);
        act(() => {
            createRoot(el).render(createElement(Harness));
        });
        return { el, patches };
    };

    const positionBox = (el: HTMLElement): HTMLElement =>
        Array.from(el.querySelectorAll<HTMLElement>('[role="combobox"]')).find(c =>
            /echarts_bar_label_/.test(c.textContent ?? ''),
        )!;

    const pickPosition = (el: HTMLElement, label: string): void => {
        act(() => {
            positionBox(el).dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
        });
        const option = Array.from(document.querySelectorAll<HTMLElement>('[role="option"]'))
            .filter(o => o.textContent === label)
            .pop()!;
        act(() => {
            option.click();
        });
    };

    it('an unset position shows the inside option echarts paints, beside the inside contrast', () => {
        const { el } = mountLive({ name: 'A', type: 'bar', label: true }, '#ffeb3b', '#1e1e1e');
        expect(positionBox(el).textContent).toBe('echarts_bar_label_inside_middle');
        expect(barLabelField(el)?.dataset.fallback).toBe('#333');
    });

    it('picking "above" stores top explicitly and the swatch switches to the outside contrast', () => {
        const { el, patches } = mountLive({ name: 'A', type: 'bar', label: true }, '#ffeb3b', '#1e1e1e');
        pickPosition(el, 'echarts_bar_label_top');
        expect(patches.at(-1)).toEqual({ label: true, labelPosition: 'top' });
        expect(positionBox(el).textContent).toBe('echarts_bar_label_top');
        expect(barLabelField(el)?.dataset.fallback).toBe('#ccc');
    });

    it('the other options keep storing their own position', () => {
        const { el, patches } = mountLive(
            { name: 'A', type: 'bar', label: true, labelPosition: 'top' },
            '#1976d2',
            'transparent',
        );
        pickPosition(el, 'echarts_bar_label_inside_bottom');
        expect(patches.at(-1)).toEqual({ label: true, labelPosition: 'insideBottom' });
        pickPosition(el, 'echarts_bar_label_pos_none');
        expect(patches.at(-1)).toEqual({ label: false });
    });
});
