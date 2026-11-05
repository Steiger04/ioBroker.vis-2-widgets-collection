/**
 * Zustandseditor toolbar (T4, Ticket 04): every row action writes one patch of the
 * Zustandszeilen-Operationen and the selection follows the action.
 *
 * @module components/StateEditor/StateEditorToolbar.test
 * @remarks
 * Rendered through the vis-2 custom-field API as the attribute panel does (see
 * `StateEditor.test.tsx`), inside a host that plays vis-2: it applies every patch handed to
 * `onDataChange` to the stored widgets (`null` deletes) and renders the group again — so the
 * list shows what the patch did. Observed: the patches and the list.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

vi.mock('../ContractColorField', () => ({ default: () => null }));
vi.mock('../PlainColorField', () => ({ default: () => null }));
vi.mock('../CollectionDivider', () => ({ default: () => null }));

import { createTheme } from '@mui/material';
import { act, useState } from 'react';
import type React from 'react';

import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    WidgetData,
} from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import { stateEditorGroup } from '../../lib/stateEditorFields';
import { stateEditorSpec, type StateEditorParams } from '../../lib/stateEditorConfig';
import { mergeStateRowPatch } from '../../lib/stateRows';
import StateEditorToolbar from './StateEditorToolbar';
import { resetStateRowSelection, selectStateRow, stateRowSelectionKey } from './stateRowSelection';
import { resetStateRowListStore } from './stateRowListStore';

const hostTheme = Object.assign(createTheme(), { name: 'light' });

type FieldLike = RxWidgetInfoAttributesField & {
    label?: string;
    hidden?: unknown;
    component?: (
        field: unknown,
        data: WidgetData,
        onDataChange: (patch: WidgetData) => void,
        props: RxWidgetInfoCustomComponentProperties,
    ) => React.JSX.Element;
};

type HostProps = {
    /** The stored data per selected widget. */
    widgets: Record<string, WidgetData>;
    /** The data vis-2 hands the field (the widget's data, or its merged `commonValues`). */
    fieldData?: WidgetData;
    params?: StateEditorParams;
    onPatch: (patch: WidgetData) => void;
};

/** vis-2's attribute panel for one values group, writing every patch to all selected widgets. */
function Host({ widgets: initial, fieldData, params, onPatch }: HostProps): React.JSX.Element {
    const [widgets, setWidgets] = useState(initial);
    const ids = Object.keys(widgets);
    const data = fieldData ?? widgets[ids[0]];
    const props = {
        context: {
            theme: hostTheme,
            socket: {},
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
    } as unknown as RxWidgetInfoCustomComponentProperties;
    const onDataChange = (patch: WidgetData): void => {
        onPatch(patch);
        setWidgets(current =>
            Object.fromEntries(Object.entries(current).map(([id, d]) => [id, mergeStateRowPatch(d, patch)])),
        );
    };
    const fields = stateEditorGroup(params).fields as FieldLike[];

    return (
        <table>
            <tbody>
                {fields.map((field, index) =>
                    typeof field.hidden === 'function' &&
                    ids.every(id => (field.hidden as (d: WidgetData) => boolean)(widgets[id])) ? null : (
                        <tr key={index}>
                            <td>{field.label}</td>
                            <td>{field.component?.(field, data, onDataChange, props)}</td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
    );
}

/** A State widget whose OID has three states; row 2 has an icon and a bound header. */
const THREE_ROWS: WidgetData = {
    oid: 'a.0.mode',
    oidObject: { type: 'number', commonStates: { 0: 'Off', 1: 'Eco', 2: 'Comfort' } },
    ignoreCommonStates: false,
    values_count: 3,
    value1: 0,
    alias1: 'Off',
    value2: 1,
    alias2: 'Eco',
    iconSmall2: 'data:image/svg+xml;base64,AAAA',
    header2: '{a.0.label}',
    bindings: ['header2'],
    value3: 2,
    alias3: 'Comfort',
};

/** A boolean OID: its two rows are fixed. */
const BOOLEAN_ROWS: WidgetData = {
    oid: 'a.0.on',
    oidObject: { type: 'boolean' },
    ignoreCommonStates: false,
    values_count: 2,
    value1: true,
    alias1: 'ON',
    value2: false,
    alias2: 'OFF',
};

/** Two own rows of an OID without common.states. */
const OWN_ROWS: WidgetData = {
    oid: 'a.0.level',
    oidObject: { type: 'number' },
    ignoreCommonStates: false,
    values_count: 2,
    value1: 10,
    alias1: 'Low',
    value2: 20,
    alias2: 'High',
};

let handle: RenderComponentHandle<HostProps> | null = null;

beforeEach(() => {
    resetStateRowSelection();
    resetStateRowListStore();
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    document.body.innerHTML = '';
});

const mount = (
    widgets: Record<string, WidgetData> | WidgetData,
    options: Omit<HostProps, 'widgets' | 'onPatch'> = {},
): { container: HTMLElement; patches: WidgetData[] } => {
    const patches: WidgetData[] = [];
    const stored = 'oid' in widgets ? { w1: widgets as WidgetData } : (widgets as Record<string, WidgetData>);
    const host = renderComponent<HostProps>(Host, {
        widgets: stored,
        onPatch: patch => {
            patches.push(patch);
        },
        ...options,
    });
    handle = host;
    return { container: host.container, patches };
};

const listRows = (container: HTMLElement): string[] =>
    [...container.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]')].map(row =>
        [...row.querySelectorAll<HTMLElement>('[data-col="value"], [data-col="alias"]')]
            .map(cell => cell.textContent)
            .join(' '),
    );
const selectedRow = (container: HTMLElement): string =>
    container.querySelector<HTMLElement>('[role="option"][aria-selected="true"] [data-col="nr"]')?.textContent ?? '';
const tool = (container: HTMLElement, action: string): HTMLButtonElement => {
    const element = container.querySelector<HTMLButtonElement>(`button[aria-label="t:state_editor_${action}"]`);
    if (!element) {
        throw new Error(`no toolbar button ${action}`);
    }
    return element;
};
const click = (element: HTMLElement): void => {
    act(() => {
        element.click();
    });
};
const selectRow = (container: HTMLElement, n: number): void =>
    click(container.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]')[n - 1]);

describe('Zustandseditor toolbar — add, clone, delete', () => {
    it('add appends a row with defaults in one patch and selects it', () => {
        const { container, patches } = mount(THREE_ROWS);

        click(tool(container, 'add_row'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 4, ignoreCommonStates: false, value4: '', alias4: '' });
        expect(listRows(container)).toEqual(['0 Off', '1 Eco', '2 Comfort', ' ']);
        expect(selectedRow(container)).toBe('4');
    });
});

describe('Zustandseditor toolbar — clone and delete', () => {
    it('clone inserts the copy behind the selected row, carries its binding along and selects the copy', () => {
        const { container, patches } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'clone_row'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 4, header3: '{a.0.label}', bindings: ['header2', 'header3'] });
        expect(listRows(container)).toEqual(['0 Off', '1 Eco', '1 Eco', '2 Comfort']);
        expect(selectedRow(container)).toBe('3');
    });

    it('delete closes the gap without asking and selects the following row', () => {
        const { container, patches } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'delete_row'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 2, value2: 2, alias2: 'Comfort', value3: null, bindings: [] });
        expect(document.querySelector('[role="dialog"]')).toBeNull();
        expect(listRows(container)).toEqual(['0 Off', '2 Comfort']);
        expect(selectedRow(container)).toBe('2');
    });

    it('delete of the last row selects the previous one', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 3);

        click(tool(container, 'delete_row'));

        expect(listRows(container)).toEqual(['0 Off', '1 Eco']);
        expect(selectedRow(container)).toBe('2');
    });
});

describe('Zustandseditor toolbar — up and down', () => {
    it('up moves the selected row one place up and keeps it selected', () => {
        const { container, patches } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'move_row_up'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 3, value1: 1, value2: 0, header1: '{a.0.label}' });
        expect(listRows(container)).toEqual(['1 Eco', '0 Off', '2 Comfort']);
        expect(selectedRow(container)).toBe('1');
    });

    it('down moves the selected row one place down and keeps it selected', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'move_row_down'));

        expect(listRows(container)).toEqual(['0 Off', '2 Comfort', '1 Eco']);
        expect(selectedRow(container)).toBe('3');
    });

    it('up is off on the first row, down on the last', () => {
        const { container } = mount(THREE_ROWS);

        expect(tool(container, 'move_row_up').disabled).toBe(true);
        expect(tool(container, 'move_row_down').disabled).toBe(false);
        selectRow(container, 3);
        expect(tool(container, 'move_row_up').disabled).toBe(false);
        expect(tool(container, 'move_row_down').disabled).toBe(true);
    });
});

describe('Zustandseditor toolbar — "clear row" and "recreate" ask first', () => {
    const dialogButton = (which: 'ok' | 'cancel'): HTMLElement => {
        const element = document.querySelector<HTMLElement>(`[data-state-editor-confirm="${which}"]`);
        if (!element) {
            throw new Error(`no dialog button ${which}`);
        }
        return element;
    };

    it('"clear row" asks, then deletes every style key of the row and keeps value and alias', () => {
        const { container, patches } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'clear_row'));

        expect(patches).toHaveLength(0);
        expect(document.querySelector('[role="dialog"]')?.textContent).toContain('t:state_editor_clear_row_confirm');
        click(dialogButton('ok'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ iconSmall2: null, header2: null, bindings: [] });
        expect(patches[0]).not.toHaveProperty('value2');
        expect(patches[0]).not.toHaveProperty('alias2');
        expect(listRows(container)).toEqual(['0 Off', '1 Eco', '2 Comfort']);
        expect(selectedRow(container)).toBe('2');
    });

    it('cancelling "clear row" writes nothing', () => {
        const { container, patches } = mount(THREE_ROWS);

        click(tool(container, 'clear_row'));
        click(dialogButton('cancel'));

        expect(patches).toHaveLength(0);
    });

    it('"recreate" asks, then makes the rows from common.states anew and selects the first', () => {
        const { container, patches } = mount({
            ...THREE_ROWS,
            alias1: 'Aus',
            values_count: 4,
            value4: 9,
            alias4: 'Own',
        });
        selectRow(container, 4);

        click(tool(container, 'recreate_rows'));

        expect(patches).toHaveLength(0);
        expect(document.querySelector('[role="dialog"]')?.textContent).toContain(
            't:state_editor_recreate_rows_confirm',
        );
        click(dialogButton('ok'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 3, ignoreCommonStates: false, value4: null });
        expect(listRows(container)).toEqual(['0 Off', '1 Eco', '2 Comfort']);
        expect(selectedRow(container)).toBe('1');
    });

    it('cancelling "recreate" writes nothing', () => {
        const { container, patches } = mount(THREE_ROWS);

        click(tool(container, 'recreate_rows'));
        click(dialogButton('cancel'));

        expect(patches).toHaveLength(0);
    });
});

describe('Zustandseditor toolbar — what a widget refuses', () => {
    const enabled = (container: HTMLElement): string[] =>
        [...container.querySelectorAll<HTMLButtonElement>('[data-state-editor-toolbar] button')]
            .filter(button => !button.disabled)
            .map(button => (button.getAttribute('aria-label') ?? '').replace('t:state_editor_', ''));

    it('a boolean OID offers move, clear and recreate, but no add, clone or delete', () => {
        const { container } = mount(BOOLEAN_ROWS);

        expect(enabled(container)).toEqual(['move_row_down', 'clear_row', 'recreate_rows']);
    });

    it('a widget with fixed rows refuses add, clone and delete whatever its OID type', () => {
        const { container } = mount(OWN_ROWS, { params: { fixedRows: true } });

        // "recreate" yields true/false whatever the OID declares, so it is always offered.
        expect(enabled(container)).toEqual(['move_row_down', 'clear_row', 'recreate_rows']);
    });

    it('"recreate" is off while the OID has no common.states; own rows can be added', () => {
        const { container } = mount(OWN_ROWS);

        expect(enabled(container)).toEqual(['add_row', 'clone_row', 'delete_row', 'move_row_down', 'clear_row']);
    });

    it('adds the first own row to an OID without common.states', () => {
        const { container } = mount({ oid: 'a.0.level', oidObject: { type: 'number' }, values_count: 0 });

        expect(enabled(container)).toEqual(['add_row']);
        click(tool(container, 'add_row'));

        expect(listRows(container)).toHaveLength(1);
        expect(selectedRow(container)).toBe('1');
    });
});

describe('Zustandseditor toolbar — reorder lock (the list search, Ticket 05)', () => {
    it('locks up and down, the other actions stay', () => {
        const props = {
            context: { theme: hostTheme, socket: {}, views: {} },
            selectedView: 'v',
            selectedWidgets: ['w1'],
            selectedWidget: 'w1',
        } as unknown as RxWidgetInfoCustomComponentProperties;
        const toolbar = renderComponent(StateEditorToolbar, {
            spec: stateEditorSpec(),
            data: THREE_ROWS,
            onDataChange: () => undefined,
            props,
            reorderLocked: true,
        });
        act(() => {
            selectStateRow(stateRowSelectionKey('v', ['w1']), 2);
        });

        try {
            const off = (action: string): boolean => tool(toolbar.container, action).disabled;
            expect(off('move_row_up')).toBe(true);
            expect(off('move_row_down')).toBe(true);
            expect(['add_row', 'clone_row', 'delete_row', 'clear_row', 'recreate_rows'].map(off)).toEqual([
                false,
                false,
                false,
                false,
                false,
            ]);
        } finally {
            toolbar.unmount();
        }
    });
});

describe('Zustandseditor toolbar — multi-selection', () => {
    it('runs a structural action on identical rows from the stored widgets, not from the merged field data', () => {
        const { container, patches } = mount(
            { w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS } },
            // vis-2 merges objects of different widgets to null (`commonValues`).
            { fieldData: { ...THREE_ROWS, oidObject: null, bindings: null } as unknown as WidgetData },
        );
        selectRow(container, 2);

        click(tool(container, 'clone_row'));

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 4, bindings: ['header2', 'header3'] });
    });

    it('offers no structural action while the rows of the widgets differ', () => {
        const { container } = mount({ w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS, alias3: 'Warm' } });

        for (const action of ['add_row', 'clone_row', 'delete_row', 'move_row_down', 'recreate_rows']) {
            expect(tool(container, action).disabled).toBe(true);
        }
        expect(tool(container, 'clear_row').disabled).toBe(false);
    });

    const infoBoxes = (container: HTMLElement): string[] =>
        [...container.querySelectorAll<HTMLElement>('[data-info-box]')].map(box => box.textContent ?? '');
    const differingRows = (container: HTMLElement): string[] =>
        [...container.querySelectorAll<HTMLElement>('[role="option"][data-state-row-differs]')].map(
            row => row.querySelector('[data-col="nr"]')?.textContent ?? '',
        );

    it('explains the lock in an InfoBox and marks the rows that differ', () => {
        const { container } = mount({
            w1: { ...THREE_ROWS },
            w2: { ...THREE_ROWS, alias3: 'Warm', bindings: [] },
        });

        expect(infoBoxes(container)).toEqual(['t:state_editor_rows_differ']);
        expect(differingRows(container)).toEqual(['2', '3']);
        expect(
            container.querySelector('[role="option"][data-state-row-differs]')?.getAttribute('aria-description'),
        ).toBe('t:state_editor_different');
    });

    it('marks the rows another widget does not have', () => {
        const { container } = mount({ w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS, values_count: 1 } });

        expect(differingRows(container)).toEqual(['2', '3']);
        expect(infoBoxes(container)).toEqual(['t:state_editor_rows_differ']);
    });

    it('names the row count, not a mark, when only another widget has more rows', () => {
        const { container } = mount({ w1: { ...THREE_ROWS, values_count: 1 }, w2: { ...THREE_ROWS } });

        expect(differingRows(container)).toEqual([]);
        expect(infoBoxes(container)).toEqual(['t:state_editor_rows_differ_count']);
    });

    it('names the bindings, not a mark, when only bindings outside the rows differ', () => {
        const { container } = mount({
            w1: { ...THREE_ROWS },
            w2: { ...THREE_ROWS, bindings: ['header2', 'title'] },
        });

        expect(differingRows(container)).toEqual([]);
        expect(infoBoxes(container)).toEqual(['t:state_editor_rows_differ_bindings']);
    });

    it('shows neither InfoBox nor marks on identical rows, everything stays usable', () => {
        const { container } = mount({ w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS, header: 'Other' } });
        selectRow(container, 2);

        expect(infoBoxes(container)).toEqual([]);
        expect(differingRows(container)).toEqual([]);
        for (const action of ['add_row', 'clone_row', 'delete_row', 'move_row_up', 'move_row_down', 'clear_row']) {
            expect(tool(container, action).disabled).toBe(false);
        }
    });

    it('keeps the mark on its Feldnummer while the search filters, and locks drag and Alt+↑/↓ (Ticket 05)', () => {
        const { container, patches } = mount({ w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS, alias3: 'Warm' } });
        const search = container.querySelector<HTMLInputElement>('input[aria-label="t:state_editor_search"]')!;
        const list = container.querySelector<HTMLElement>('[role="listbox"]')!;

        act(() => {
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(search, 'comf');
            search.dispatchEvent(new Event('input', { bubbles: true }));
        });

        expect(differingRows(container)).toEqual(['3']);
        expect(infoBoxes(container)).toEqual(['t:state_editor_rows_differ']);
        expect(container.querySelector('[role="option"]')?.getAttribute('draggable')).toBe('false');
        act(() => {
            list.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', altKey: true, bubbles: true }));
        });
        expect(patches).toHaveLength(0);
    });

    it('hands the focus to the list after "clear row", the row action left under differing rows (Ticket 05)', async () => {
        const { container, patches } = mount({ w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS, alias3: 'Warm' } });
        selectRow(container, 2);
        tool(container, 'clear_row').focus();
        click(tool(container, 'clear_row'));

        click(document.querySelector<HTMLButtonElement>('[data-state-editor-confirm="ok"]')!);
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
        });

        expect(patches).toHaveLength(1);
        expect(document.activeElement).toBe(container.querySelector('[role="listbox"]'));
    });

    it('shows neither InfoBox nor marks with one widget', () => {
        const { container } = mount(THREE_ROWS);

        expect(infoBoxes(container)).toEqual([]);
        expect(differingRows(container)).toEqual([]);
    });
});
