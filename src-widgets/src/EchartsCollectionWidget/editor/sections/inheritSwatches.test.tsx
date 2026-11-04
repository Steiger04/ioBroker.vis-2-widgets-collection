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
    const { resolveThemeTokens } = await import('../../echartsTheme');
    return {
        // The tokens run through the real shared resolver (dark-mode-aware, honours `darkMode`).
        useEditorTheme: (state: { darkMode?: 'light' | 'dark' | 'auto' }) => {
            const theme = createTheme({ palette: { mode: host.mode } });
            return { palette: ['#111', '#222'], themeTokens: resolveThemeTokens(theme, state.darkMode), theme };
        },
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

describe('tooltip background swatch: the paper token (ADR-0027 addendum 2026-11-04, ticket 10)', () => {
    it('shows the theme paper while the chart follows the host mode (light and dark)', () => {
        host.mode = 'light';
        expect(fallbacks(TooltipSection, { darkMode: 'auto' }).get('echarts_tooltip_bg')).toBe('#fff');
        host.mode = 'dark';
        expect(fallbacks(TooltipSection, { darkMode: 'auto' }).get('echarts_tooltip_bg')).toBe('#121212');
        expect(fallbacks(TooltipSection, { darkMode: 'dark' }).get('echarts_tooltip_bg')).toBe('#121212');
    });

    it('shows the fixed canvas colour of a forced mode that differs from the host', () => {
        host.mode = 'light';
        expect(fallbacks(TooltipSection, { darkMode: 'dark' }).get('echarts_tooltip_bg')).toBe('#1e1e1e');
        host.mode = 'dark';
        expect(fallbacks(TooltipSection, { darkMode: 'light' }).get('echarts_tooltip_bg')).toBe('#ffffff');
    });
});

describe('inherit swatches without a theme token (ADR-0027, ticket 06)', () => {

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

describe('frame colour inherit swatch (ADR-0027/ADR-0056, ticket 13)', () => {
    // The frame is container CSS: body and preview paint the COLLECTION theme's divider, which
    // follows the host mode — never the dark-mode-aware token of a forced chart mode.
    it('shows the collection theme divider, also under a forced mode that differs from the host', () => {
        host.mode = 'light';
        expect(fallbacks(ColorsSection, { darkMode: 'auto' }).get('echarts_frame_color')).toBe('rgba(0, 0, 0, 0.12)');
        expect(fallbacks(ColorsSection, { darkMode: 'dark' }).get('echarts_frame_color')).toBe('rgba(0, 0, 0, 0.12)');
        host.mode = 'dark';
        expect(fallbacks(ColorsSection, { darkMode: 'light' }).get('echarts_frame_color')).toBe(
            'rgba(255, 255, 255, 0.12)',
        );
    });
});
