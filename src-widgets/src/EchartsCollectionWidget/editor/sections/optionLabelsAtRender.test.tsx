/**
 * The option tables of the ECharts sections read their labels when they render, not when their
 * module loads.
 *
 * @module EchartsCollectionWidget/editor/sections/optionLabelsAtRender.test
 * @remarks
 * The host switches `I18n` when `system.config` changes its language while the editor stays
 * open (GenericApp `onSystemConfigChanged`); a table translated at module load keeps the old
 * language until a reload. Here `Generic.t` answers differently only after the modules have
 * loaded, which is that situation.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@iobroker/gui-components', () => ({ SelectID: () => null }));
vi.mock('../colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('../useEditorTheme', () => ({
    useEditorTheme: () => ({
        palette: ['#111', '#222'],
        themeTokens: { textPrimary: '#1', textSecondary: '#2', divider: '#3' },
    }),
}));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';

import Generic from '../../../Generic';
import { DEFAULT_EDITOR_STATE } from '../editorState';
import MarkCard from './axes/MarkCard';
import LegendSection from './LegendSection';
import TitleSection from './TitleSection';

let root: Root | undefined;

/** Mounts a component, clicks through its tabs and returns all text and accessible names seen. */
const textsOf = (type: (props: never) => unknown, props: unknown): string => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
        root?.render(createElement(type as never, props as never));
    });
    const collect = (): string =>
        [
            container.textContent ?? '',
            ...Array.from(container.querySelectorAll('[aria-label]')).map(el => el.getAttribute('aria-label')),
        ].join('|');
    let seen = collect();
    for (const tab of Array.from(container.querySelectorAll('[role="tab"]'))) {
        act(() => {
            tab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        seen += collect();
    }
    return seen;
};

afterEach(() => {
    act(() => root?.unmount());
    root = undefined;
    document.body.innerHTML = '';
    vi.restoreAllMocks();
});

const legendProps = {
    state: { ...DEFAULT_EDITOR_STATE, legend: { fontWeight: 100, fontStyle: 'italic' } },
    set: () => undefined,
    pickerCtx: {},
};

const titleProps = { state: DEFAULT_EDITOR_STATE, set: () => undefined, pickerCtx: {} };

const markProps = {
    mark: { id: '1', upper: 24, labelUpperPosition: 'start' },
    axisOptions: [['0', '1 · PV']],
    open: true,
    onToggle: () => undefined,
    onChange: () => undefined,
    onRemove: () => undefined,
    pickerCtx: {},
    dividerColor: '#d',
    textSecondary: '#ts',
};

describe('option labels of the ECharts sections', () => {
    it.each([
        ['the nine grid positions', LegendSection, legendProps, 'echarts_pos_bottom_right'],
        ['the legend symbols', LegendSection, legendProps, 'echarts_legend_icon_inherit'],
        ['the font weights', LegendSection, legendProps, 'echarts_weight_100'],
        ['the font styles', LegendSection, legendProps, 'echarts_font_style_italic'],
        ['the six title positions', TitleSection, titleProps, 'echarts_pos_top_center'],
        ['the marking label places', MarkCard, markProps, 'echarts_mark_pos_start'],
    ])('reads %s when rendering', (_name, type, props, key) => {
        vi.spyOn(Generic, 't').mockImplementation(k => `now ${k}`);

        expect(textsOf(type as never, props)).toContain(`now ${key}`);
    });
});
