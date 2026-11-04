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

import { act, createElement } from 'react';
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
