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
    default: (props: { value?: string; fallback?: string }) => (
        <span
            data-testid="color-field"
            data-value={props.value ?? ''}
            data-fallback={props.fallback ?? ''}
        />
    ),
}));

import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { StilTab } from './StilTab';
import type { EchartsSeriesMeta } from '../../../../../types/field-definitions/echarts-fields';

const mountStil = (meta: EchartsSeriesMeta, colorFallback = '#5470c6'): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(
            createElement(StilTab, {
                meta,
                defaultType: 'line',
                onPatch: () => undefined,
                pickerCtx: {} as never,
                colorFallback,
                labelColorFallback: '#222',
            }),
        );
    });
    return container;
};

const colorFields = (el: HTMLElement): HTMLElement[] =>
    Array.from(el.querySelectorAll<HTMLElement>('[data-testid="color-field"]'));

describe('StilTab — the Flächen-Verlauf field (ADR-0101)', () => {
    it('previews the derived Flächen-Verlauf of the palette colour when no gradient is chosen', () => {
        const el = mountStil({ name: 'A', type: 'line', area: 'gradient' });
        const [field] = colorFields(el);
        expect(field.dataset.value).toBe('');
        expect(field.dataset.fallback).toBe(
            'linear-gradient(180deg, rgba(84, 112, 198, 1) 0%, rgba(84, 112, 198, 0.5) 50%, rgba(84, 112, 198, 0) 100%)',
        );
    });

    it('follows the series’ own colour over the palette colour', () => {
        const el = mountStil({ name: 'A', type: 'line', area: 'gradient', color: 'rgb(10, 20, 30)' });
        expect(colorFields(el)[0].dataset.fallback).toBe(
            'linear-gradient(180deg, rgba(10, 20, 30, 1) 0%, rgba(10, 20, 30, 0.5) 50%, rgba(10, 20, 30, 0) 100%)',
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
