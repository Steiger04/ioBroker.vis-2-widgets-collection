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

import { act, createElement, useState, type ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { HistorySeriesList } from './sources/history';
import { JsonSeriesList } from './sources/json';
import { TableSeriesList } from './sources/table';
import { PreviewExtentsContext, type PreviewExtents } from '../../previewExtents';
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
    extents: PreviewExtents = {},
    extra: Partial<typeof DEFAULT_EDITOR_STATE> = {},
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
                          ...extra,
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
                            ...extra,
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
                            ...extra,
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

    it.each(SOURCES)(
        '%s: a constant loaded series draws the middle colour only — so does the header swatch',
        source => {
            const el = card(source, { type: 'line', colorScale: true }, { A: { min: 12, max: 12 } });
            expect(el.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe('rgba(255, 0, 0, 1)');
        },
    );

    it.each(SOURCES)(
        '%s: a loaded series without values draws no scale — the swatch keeps the series colour',
        source => {
            const empty = card(source, { type: 'line', colorScale: true }, { A: null });
            expect(empty.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe('#ff0000');
            // A completely entered range stands on its own — the chart draws it, so does the swatch.
            const entered = card(
                source,
                { type: 'line', colorScale: true, colorScaleMin: 0, colorScaleMax: 10 },
                { A: null },
            );
            expect(entered.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe(
                'linear-gradient(90deg, rgba(255, 128, 128, 1) 0%, rgba(255, 0, 0, 1) 50%, rgba(128, 0, 0, 1) 100%)',
            );
        },
    );

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
            expect.arrayContaining([
                'echarts_color_scale_placeholder_data|3',
                'echarts_color_scale_placeholder_data|9',
            ]),
        );
    });

    it.each(SOURCES)(
        '%s: a percent-stacked bar names its data-inherited bounds in displayed percent (ticket 08)',
        source => {
            const extent = { A: { min: 0.125, max: 0.35 } };
            const placeholders = (el: HTMLElement): string[] =>
                Array.from(el.querySelectorAll<HTMLInputElement>('input[type="number"]')).map(i => i.placeholder);
            const percent = card(source, { type: 'bar', colorScale: true }, extent, { stackMode: 'percent' });
            openStil(percent);
            expect(placeholders(percent)).toEqual(
                expect.arrayContaining([
                    'echarts_color_scale_placeholder_data|12.5',
                    'echarts_color_scale_placeholder_data|35',
                ]),
            );
            // Opted out of the stack: absolute values — the shares stay as they are.
            const optedOut = card(source, { type: 'bar', colorScale: true, stack: 'none' }, extent, {
                stackMode: 'percent',
            });
            openStil(optedOut);
            expect(placeholders(optedOut)).toEqual(
                expect.arrayContaining([
                    'echarts_color_scale_placeholder_data|0.125',
                    'echarts_color_scale_placeholder_data|0.35',
                ]),
            );
        },
    );

    it.each(SOURCES)('%s: a percent-stacked bar reads entered bounds as percent for the header swatch', source => {
        // Min 20 % + the data max (share 0.9 = 90 %): a real range, the scale draws. Read as a
        // share, 20 would collide with 0.9 and degrade to the middle colour.
        const el = card(
            source,
            { type: 'bar', colorScale: true, colorScaleMin: 20 },
            { A: { min: 0.1, max: 0.9 } },
            { stackMode: 'percent' },
        );
        expect(el.querySelector<HTMLElement>('[data-testid="swatch"]')!.dataset.color).toBe(
            'linear-gradient(90deg, rgba(255, 128, 128, 1) 0%, rgba(255, 0, 0, 1) 50%, rgba(128, 0, 0, 1) 100%)',
        );
    });

    it('switching the type line → bar → scatter on the card keeps the Farbskala fields (US 49)', () => {
        const scale: EchartsSeriesMeta = {
            colorScale: true,
            colorScaleMin: 1,
            colorScaleMax: 9,
            colorScaleColors: 'linear-gradient(90deg, #00ff00 0%, #ff0000 100%)',
        };
        let latest: EchartsSeriesMeta = {};
        const Harness = (): ReactElement => {
            const [style, setStyle] = useState<Record<string, EchartsSeriesMeta>>({ A: { type: 'line', ...scale } });
            latest = style.A;
            return createElement(
                JsonSeriesList as never,
                {
                    ...common,
                    state: {
                        ...DEFAULT_EDITOR_STATE,
                        chartType: 'line',
                        mode: 'json',
                        jsonOid: 'javascript.0.chart',
                        yAxes: [{ id: 'ax-1', position: 'left' }],
                        jsonSeriesStyle: style,
                        jsonHidden: [],
                    },
                    // Two payload series: the per-series type override shows from the second on.
                    jsonSeriesNames: ['A', 'B'],
                    onUpdateJson: (name: string, patch: Partial<EchartsSeriesMeta>) =>
                        setStyle(s => ({ ...s, [name]: { ...s[name], ...patch } })),
                } as never,
            );
        };
        const el = render(createElement(Harness));
        // The Basis tab's type select (MUI: a mousedown on the combobox opens the portalled menu).
        const pick = (label: string): void => {
            const box = Array.from(el.querySelectorAll<HTMLElement>('[role="combobox"]')).find(c =>
                /echarts_type_/.test(c.textContent ?? ''),
            )!;
            act(() => {
                box.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
            });
            const option = Array.from(document.querySelectorAll<HTMLElement>('[role="option"]'))
                .filter(o => o.textContent === label)
                .pop()!;
            act(() => {
                option.click();
            });
        };
        pick('echarts_type_bar');
        expect(latest).toMatchObject({ type: 'bar', ...scale });
        pick('echarts_type_scatter');
        expect(latest).toMatchObject({ type: 'scatter', ...scale });
    });
});
