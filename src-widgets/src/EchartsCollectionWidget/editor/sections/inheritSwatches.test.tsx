/**
 * Inherit swatches of the chart-wide surfaces (ADR-0027 „Honest inherit swatches", spec
 * „Geerbte Farben sichtbar" ticket 06): every ECharts colour field without a value shows the
 * colour the chart paints — the fields WITHOUT a theme token are pinned here.
 *
 * @module EchartsCollectionWidget/editor/sections/inheritSwatches.test
 * @remarks
 * Seam: section → `ColorField` (`fallback` = the swatch colour while the field inherits, the
 * `ColorField` itself is covered by `colorFields.test.tsx`). The field is marker-mocked and
 * reports its title + fallback; the editor theme is a real MUI theme so the canvas colour runs
 * through the shared resolver.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@mui/icons-material', () => ({ ExpandMore: () => null, Add: () => null, ErrorOutline: () => null }));
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));
vi.mock('../JsonEditor', () => ({ default: () => null }));
vi.mock('./RawJsonSection', () => ({ default: () => null }));
vi.mock('../colorFields', () => ({
    // The marker reports what the swatch is fed: the title and the inherit fallback.
    default: ({ title, fallback }: { title?: string; fallback?: string }) => (
        <span
            data-color-field={title}
            data-fallback={fallback}
        />
    ),
    ColorListField: () => null,
}));

/** The collection theme the editor resolves — switched per test (host light / dark). */
const host = vi.hoisted(() => ({ mode: 'light' as 'light' | 'dark' }));
vi.mock('../useEditorTheme', async () => {
    const { createTheme } = await import('@mui/material/styles');
    return {
        useEditorTheme: () => ({
            palette: ['#111', '#222'],
            themeTokens: { textPrimary: '#1', textSecondary: '#2', divider: '#3' },
            theme: createTheme({ palette: { mode: host.mode } }),
        }),
    };
});

import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import LegendSection from './LegendSection';
import TooltipSection from './TooltipSection';
import ColorsSection from './ColorsSection';
import ToolboxSection from './ToolboxSection';
import { DEFAULT_EDITOR_STATE } from '../editorState';

/** Mounts a section, clicks through every tab and returns each colour field's fallback by title. */
const fallbacks = (type: (props: never) => unknown, over: Record<string, unknown> = {}): Map<string, string | null> => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
        root.render(
            createElement(type as never, {
                state: { ...DEFAULT_EDITOR_STATE, ...over },
                set: () => undefined,
                pickerCtx: {},
            } as never),
        );
    });
    const seen = new Map<string, string | null>();
    const collect = (): void => {
        for (const el of Array.from(container.querySelectorAll<HTMLElement>('[data-color-field]'))) {
            seen.set(el.dataset.colorField ?? '', el.getAttribute('data-fallback'));
        }
    };
    collect();
    for (const tab of Array.from(container.querySelectorAll('[role="tab"]'))) {
        act(() => {
            tab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        collect();
    }
    act(() => root.unmount());
    container.remove();
    return seen;
};

describe('inherit swatches without a theme token (ADR-0027, ticket 06)', () => {
    it('tooltip background: the surface ECharts 6 paints (neutral00, white)', () => {
        host.mode = 'light';
        expect(fallbacks(TooltipSection).get('echarts_tooltip_bg')).toBe('#fff');
    });

    it('chart background: transparent while the chart follows the host mode', () => {
        host.mode = 'light';
        expect(fallbacks(ColorsSection, { darkMode: 'auto' }).get('echarts_background')).toBe('transparent');
        expect(fallbacks(ColorsSection, { darkMode: 'light' }).get('echarts_background')).toBe('transparent');
        host.mode = 'dark';
        expect(fallbacks(ColorsSection, { darkMode: 'dark' }).get('echarts_background')).toBe('transparent');
    });

    it('chart background: the fixed canvas colour of a forced mode that differs from the host', () => {
        host.mode = 'light';
        expect(fallbacks(ColorsSection, { darkMode: 'dark' }).get('echarts_background')).toBe('#1e1e1e');
        host.mode = 'dark';
        expect(fallbacks(ColorsSection, { darkMode: 'light' }).get('echarts_background')).toBe('#ffffff');
    });

    it('legend and toolbox background: transparent (the chart paints none)', () => {
        host.mode = 'light';
        expect(fallbacks(LegendSection).get('echarts_legend_background')).toBe('transparent');
        expect(
            fallbacks(ToolboxSection, { toolbox: { ...DEFAULT_EDITOR_STATE.toolbox, show: true } }).get(
                'echarts_toolbox_background',
            ),
        ).toBe('transparent');
    });
});
