/**
 * Render tests for the Zuordnung tab's mapping body (zuordnung-redesign ticket 02) — the
 * Zeilenpfad CHIP ROW: every candidate visible at once, the selection filled, the drift
 * honest, and the suggestion MARKED on the chip, never silently set (ADR-0075 decision 8's
 * new clothes).
 *
 * @module EchartsCollectionWidget/editor/sections/dataSourceMapping.test
 * @remarks
 * The live-schema hook is stubbed to a scenario schema (the pure `suggestedRowPath` logic
 * stays REAL — the badge must follow its semantics, not a mock's); every test pins its own
 * schema so order never leaks. The icons barrel and the OidPicker are marker-mocked (the
 * sectionTabs precedent).
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
vi.mock('../OidPicker', () => ({ default: () => null }));

/** The scenario schema — swapped per test; the hook reads `current`. */
type Scenario = {
    arrayPaths: { path: string; length: number }[];
    columns: Record<string, unknown>[];
    /** Set when a discovery walk hit the depth cap — the Zuordnung's honest sight hint. */
    depthCapped?: boolean;
};
const { schema } = vi.hoisted(() => ({
    schema: {
        current: {
            arrayPaths: [],
            columns: [],
        } as unknown as { arrayPaths: { path: string; length: number }[]; columns: unknown[] },
    },
}));
vi.mock('../useJsonTableSchema', async importOriginal => ({
    // The pure helpers (suggestedRowPath above all) stay REAL — only the subscription hook
    // is pinned to the scenario.
    ...(await importOriginal()),
    useJsonTableSchema: () => schema.current,
}));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import DataSourceSection from './DataSourceSection';
import { DEFAULT_EDITOR_STATE } from '../editorState';

/** A document whose top level IS an array, plus two nested candidates. */
const SCHEMA_TOP = {
    arrayPaths: [
        { path: '', length: 3 },
        { path: 'data.rows', length: 299 },
        { path: 'groups.members', length: 5 },
    ],
    columns: [],
};

/** An object document with two nested candidates — no top-level array. */
const SCHEMA_NO_TOP = {
    arrayPaths: [
        { path: 'data.rows', length: 299 },
        { path: 'groups.members', length: 5 },
    ],
    columns: [],
};

/** The editor state as the tabellarische Zuordnung needs it (fields per test overridden). */
const state = (over: Record<string, unknown> = {}): Record<string, unknown> => ({
    ...DEFAULT_EDITOR_STATE,
    mode: 'json',
    jsonKind: 'table',
    ...over,
});

/** Mount with a recording `set` over the given schema; returns [container, set]. */
const mount = (
    scenario: Scenario | typeof SCHEMA_TOP,
    over: Record<string, unknown> = {},
): [HTMLElement, ReturnType<typeof vi.fn>] => {
    schema.current = scenario;
    const set = vi.fn();
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createRoot(container);
    act(() => {
        root.render(createElement(DataSourceSection as never, { state: state(over), set, pickerCtx: {} } as never));
    });
    // The Zuordnung rides tab 2 — select it before anything reads the mapping body.
    act(() => {
        const mappingTab = Array.from(container.querySelectorAll('[role="tab"]'))[1];
        mappingTab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    return [container, set];
};

const chips = (el: HTMLElement): HTMLElement[] => Array.from(el.querySelectorAll('.MuiChip-root'));

const chipWith = (el: HTMLElement, text: string): HTMLElement => {
    const chip = chips(el).find(c => (c.textContent ?? '').includes(text));
    if (!chip) {
        throw new Error(`no chip containing "${text}"`);
    }
    return chip;
};

describe('Zuordnung — the Zeilenpfad chip row (zuordnung-redesign ticket 02)', () => {
    it('renders one chip per candidate, lengths badged, the top option worded', () => {
        const [el] = mount(SCHEMA_TOP);
        const texts = chips(el).map(c => (c.textContent ?? '').trim());
        expect(texts).toContain('echarts_mapping_rows_top (3)');
        expect(texts).toContain('data.rows (299)');
        expect(texts).toContain('groups.members (5)');
    });

    it('the selected candidate is the filled chip; the others stay outlined', () => {
        const [el] = mount(SCHEMA_TOP, { jsonRowPath: 'data.rows' });
        expect(chipWith(el, 'data.rows').className).toContain('MuiChip-filled');
        expect(chipWith(el, 'groups.members').className).toContain('MuiChip-outlined');
    });

    it('clicking a candidate authors it — one authored click, no detour', () => {
        const [el, set] = mount(SCHEMA_TOP);
        const chip = chipWith(el, 'data.rows');
        act(() => {
            chip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(set).toHaveBeenCalledWith({ jsonRowPath: 'data.rows' });
    });

    it('a drifted path stays an honest, clickable warning chip', () => {
        const [el, set] = mount(SCHEMA_TOP, { jsonRowPath: 'gone.list' });
        const drift = chipWith(el, 'gone.list (?)');
        expect(drift.className).toContain('MuiChip-colorWarning');
        expect(drift.title).toBe('echarts_mapping_drifted');
        act(() => {
            drift.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(set).toHaveBeenCalledWith({ jsonRowPath: 'gone.list' });
    });

    it('marks the suggested chip while unset — and never sets it (decision 8)', () => {
        // suggestedRowPath picks the LONGEST candidate when no top-level array exists
        const [el, set] = mount(SCHEMA_NO_TOP);
        expect(chipWith(el, 'groups.members').textContent).toContain('echarts_mapping_suggestion_badge');
        expect(chipWith(el, 'data.rows').textContent).not.toContain('echarts_mapping_suggestion_badge');
        expect(set).not.toHaveBeenCalled();
    });

    it('an authored path — even a different one — kills the suggestion badge', () => {
        const [el] = mount(SCHEMA_NO_TOP, { jsonRowPath: 'data.rows' });
        for (const chip of chips(el)) {
            expect(chip.textContent).not.toContain('echarts_mapping_suggestion_badge');
        }
    });

    it('a top-level array stays unmarked (unset already reads the top level)', () => {
        const [el] = mount(SCHEMA_TOP);
        for (const chip of chips(el)) {
            expect(chip.textContent).not.toContain('echarts_mapping_suggestion_badge');
        }
    });

    it('the X column rides BELOW the chip row (no side-by-side pair, no old suggestion InfoBox)', () => {
        const [el] = mount(SCHEMA_TOP);
        const text = el.textContent ?? '';
        expect(text).toContain('echarts_mapping_rowpath');
        expect(text).toContain('echarts_mapping_xpath');
        // the sequence is visible in the DOM order: label → candidates → the X picker below
        // (the FieldGrid peer layout is gone; CSS stacking itself is no assertable in happy-dom)
        expect(text.indexOf('echarts_mapping_rowpath')).toBeLessThan(text.indexOf('data.rows'));
        expect(text.indexOf('data.rows')).toBeLessThan(text.indexOf('echarts_mapping_xpath'));
        // the former suggestion InfoBox is gone — its key no longer exists anywhere
        expect(text).not.toContain('echarts_mapping_rowpath_suggestion');
    });

    it('arrow keys walk the chip row (keyboard is no mouse-only road)', () => {
        const [el] = mount(SCHEMA_TOP);
        const row = chips(el); // [top, data.rows, groups.members]
        act(() => {
            row[0].focus();
        });
        act(() => {
            row[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
        });
        expect(document.activeElement).toBe(row[1]);
        act(() => {
            row[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
        });
        expect(document.activeElement).toBe(row[0]);
    });

    it('a chosen X column shows its sample values — the row index stays quiet (ticket 04)', () => {
        const [withX] = mount(
            {
                arrayPaths: [{ path: '', length: 2 }],
                columns: [
                    {
                        path: 'temp',
                        type: 'number',
                        nullable: false,
                        typeCounts: { number: 2 },
                        nullCount: 0,
                        distinctCount: 2,
                        confidence: 1,
                        samples: [3, 17],
                    },
                ],
            },
            { jsonRowPath: '', jsonXPath: 'temp' },
        );
        expect(withX.textContent).toContain('echarts_mapping_samples_prefix');
        expect(withX.textContent).toContain('3');
        expect(withX.textContent).toContain('17');

        const [rowIndex] = mount(
            {
                arrayPaths: [{ path: '', length: 2 }],
                columns: [
                    {
                        path: 'temp',
                        type: 'number',
                        nullable: false,
                        typeCounts: { number: 2 },
                        nullCount: 0,
                        distinctCount: 2,
                        confidence: 1,
                        samples: [3, 17],
                    },
                ],
            },
            { jsonRowPath: '', jsonXPath: '' },
        );
        expect(rowIndex.textContent).not.toContain('echarts_mapping_samples_prefix');
    });

    it('the depth-cap hint shows when the schema flags it — and stays quiet otherwise', () => {
        // The honest sight beside the quiet truncation: one flag covers both discovery walks.
        const [capped] = mount({ ...SCHEMA_TOP, depthCapped: true });
        expect(capped.textContent).toContain('echarts_mapping_depth_cap');
        const [shallow] = mount(SCHEMA_TOP);
        expect(shallow.textContent).not.toContain('echarts_mapping_depth_cap');
    });
});

describe('Datenabruf preset hint (ADR-0082 ticket 03 — the pie variant names the point shaping)', () => {
    /** Verlauf mount with the Datenabruf tab selected (tab index 1 in history mode). */
    const mountHistory = (over: Record<string, unknown>): HTMLElement => {
        const set = vi.fn();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const root: Root = createRoot(container);
        act(() => {
            root.render(
                createElement(DataSourceSection as never, {
                    state: state({ mode: 'history', ...over }),
                    set,
                    pickerCtx: {},
                } as never),
            );
        });
        act(() => {
            const fetchTab = Array.from(container.querySelectorAll('[role="tab"]'))[1];
            fetchTab.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        return container;
    };

    it('cartesian keeps the Erben-Override preset hint (byte-stable)', () => {
        const el = mountHistory({ chartType: 'bar' });
        expect(el.textContent).toContain('echarts_datasource_preset_hint');
        expect(el.textContent).not.toContain('echarts_datasource_preset_hint_pie');
    });

    it('pie says point shaping instead — slice rows carry no Daten tab to preset for', () => {
        const el = mountHistory({ chartType: 'pie' });
        expect(el.textContent).toContain('echarts_datasource_preset_hint_pie');
    });
});
