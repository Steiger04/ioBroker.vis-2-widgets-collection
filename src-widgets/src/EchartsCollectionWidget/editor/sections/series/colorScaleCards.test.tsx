/**
 * The Farbskala across the three Kartenquellen (ADR-0101 + ADR-0100): the SubGroup in the shared
 * Stil tab for line, bar and scatter on the Verlauf, JSON and Tabellarisch cards; the header
 * swatch showing the effective scale as a mini gradient while the scale is on; the
 * data-inherited placeholder naming the loaded preview value.
 *
 * @module EchartsCollectionWidget/editor/sections/series/colorScaleCards.test
 * @remarks
 * The swatch is marker-mocked to expose the colour the card hands it; the t stub joins key and
 * args (`key|arg`).
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: unknown[]): string {
            return [key, ...args].join('|');
        }
    };
});
vi.mock('@mui/icons-material', () => ({
    ExpandMore: () => null,
    Add: () => null,
    ArrowDownward: () => null,
    ArrowUpward: () => null,
    DeleteOutline: () => null,
    DonutLarge: () => null,
    KeyboardArrowDown: () => null,
    KeyboardArrowUp: () => null,
    ContentCopy: () => null,
    Restore: () => null,
    VisibilityOff: () => null,
}));
vi.mock('../../colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));
vi.mock('../../OidPicker', () => ({ default: () => null }));
vi.mock('./shared', () => ({
    AddSeriesViaOid: () => null,
    EmptyState: () => null,
    SeriesRawOverride: () => null,
    Swatch: ({ color }: { color: string }) => (
        <span
            data-testid="swatch"
            data-color={color}
        />
    ),
}));

import { act, createElement, type ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { HistorySeriesList } from './sources/history';
import { JsonSeriesList } from './sources/json';
import { TableSeriesList } from './sources/table';
import { PreviewExtentsContext } from '../../previewExtents';
import { DEFAULT_EDITOR_STATE } from '../../editorState';
import type { EchartsSeriesMeta } from '../../../../types/field-definitions/echarts-fields';

const render = (node: ReactElement): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(node);
    });
    return container;
};

const noops = {
    onToggleCard: () => undefined,
    onUpdate: () => undefined,
    onRemove: () => undefined,
    onMove: () => undefined,
    onDuplicate: () => undefined,
    onAddWithOid: () => undefined,
    onAddWithColumn: () => undefined,
    onRebindAxis: () => undefined,
    onUpdateJson: () => undefined,
    onRebindJsonAxis: () => undefined,
    onHideJson: () => undefined,
    onShowJson: () => undefined,
};
const common = {
    pickerCtx: {},
    slot: () => '#ff0000',
    labelColorFallback: '#222',
    expanded: { 0: true },
    ...noops,
};

type Source = 'history' | 'json' | 'table';

/** One expanded card of the given source, bound to `meta`. */
const card = (
    source: Source,
    meta: EchartsSeriesMeta,
    extents: Record<string, { min: number; max: number }> = {},
): HTMLElement => {
    const yAxes = [{ id: 'ax-1', position: 'left' as const }];
    const list =
        source === 'history'
            ? createElement(
                  HistorySeriesList as never,
                  {
                      ...common,
                      state: {
                          ...DEFAULT_EDITOR_STATE,
                          chartType: 'line',
                          mode: 'history',
                          yAxes,
                          series: [{ id: 's1', oid: 'a.0', name: 'A', ...meta }],
                      },
                      historyInstances: { instances: [], loaded: true },
                  } as never,
              )
            : source === 'json'
              ? createElement(
                    JsonSeriesList as never,
                    {
                        ...common,
                        state: {
                            ...DEFAULT_EDITOR_STATE,
                            chartType: 'line',
                            mode: 'json',
                            jsonOid: 'javascript.0.chart',
                            yAxes,
                            jsonSeriesStyle: { A: meta },
                            jsonHidden: [],
                        },
                        jsonSeriesNames: ['A'],
                    } as never,
                )
              : createElement(
                    TableSeriesList as never,
                    {
                        ...common,
                        state: {
                            ...DEFAULT_EDITOR_STATE,
                            chartType: 'line',
                            mode: 'json',
                            jsonKind: 'table',
                            jsonOid: 'javascript.0.table',
                            yAxes,
                            series: [{ id: 's1', oid: '', yPath: 'A', ...meta }],
                        },
                        columns: [],
                    } as never,
                );
    return render(createElement(PreviewExtentsContext.Provider, { value: extents }, list));
};

const openStil = (el: HTMLElement): void => {
    const tab = Array.from(el.querySelectorAll('[role="tab"]')).find(
        t => t.textContent?.trim() === 'echarts_card_tab_style',
    );
    act(() => {
        tab!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

const SOURCES: Source[] = ['history', 'json', 'table'];

describe('Farbskala on the series cards (ADR-0101)', () => {
    for (const source of SOURCES) {
        it.each(['line', 'bar', 'scatter'] as const)(`${source}: the Stil tab carries the SubGroup for %s`, type => {
            const el = card(source, { type });
            openStil(el);
            expect(el.textContent).toContain('echarts_grp_color_scale');
            expect(el.textContent).toContain('echarts_series_color_scale_min');
        });
    }

    it.each(SOURCES)('%s: the header swatch shows the effective scale while the scale is on', source => {
        const off = card(source, { type: 'line' });
        expect(off.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe('#ff0000');

        const on = card(source, { type: 'line', colorScale: true });
        expect(on.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe(
            'linear-gradient(90deg, rgba(255, 128, 128, 1) 0%, rgba(255, 0, 0, 1) 50%, rgba(128, 0, 0, 1) 100%)',
        );

        const chosen = card(source, {
            type: 'line',
            colorScale: true,
            colorScaleColors: 'linear-gradient(90deg, #00ff00 0%, #ff0000 100%)',
        });
        expect(chosen.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe(
            'linear-gradient(90deg, #00ff00 0%, #ff0000 100%)',
        );
    });

    it.each(SOURCES)('%s: the series’ own colour wins over the palette slot — plain and as the scale', source => {
        const own = card(source, { type: 'line', color: '#0000ff' });
        expect(own.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe('#0000ff');
        const scaled = card(source, { type: 'line', color: '#0000ff', colorScale: true });
        expect(scaled.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe(
            'linear-gradient(90deg, rgba(128, 128, 255, 1) 0%, rgba(0, 0, 255, 1) 50%, rgba(0, 0, 128, 1) 100%)',
        );
    });

    it.each(SOURCES)('%s: an entered Min ≥ Max draws no scale — the header swatch keeps the series colour', source => {
        const bad = card(source, { type: 'line', colorScale: true, colorScaleMin: 9, colorScaleMax: 1 });
        expect(bad.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe('#ff0000');
    });

    it.each(SOURCES)(
        '%s: an entered Min ≥ Max puts the ⚠ dot on the Stil tab — a valid range none (ticket 05)',
        source => {
            const dotTabs = (el: HTMLElement): string[] =>
                Array.from(el.querySelectorAll('[data-issue-dot]')).map(
                    d => d.closest('[role="tab"]')?.textContent ?? '',
                );
            const bad = card(source, { type: 'line', colorScale: true, colorScaleMin: 9, colorScaleMax: 1 });
            expect(dotTabs(bad)).toEqual(['echarts_card_tab_style']);
            expect(
                dotTabs(card(source, { type: 'line', colorScale: true, colorScaleMin: 1, colorScaleMax: 9 })),
            ).toEqual([]);
            expect(dotTabs(card(source, { type: 'line', colorScaleMin: 9, colorScaleMax: 1 }))).toEqual([]);
        },
    );

    it.each(SOURCES)('%s: the data-inherited placeholder names the loaded preview value', source => {
        const el = card(source, { type: 'line', colorScale: true }, { A: { min: 3, max: 9 } });
        openStil(el);
        const placeholders = Array.from(el.querySelectorAll<HTMLInputElement>('input[type="number"]')).map(
            i => i.placeholder,
        );
        expect(placeholders).toEqual(
            expect.arrayContaining(['echarts_color_scale_inherit_data|3', 'echarts_color_scale_inherit_data|9']),
        );
    });
});
