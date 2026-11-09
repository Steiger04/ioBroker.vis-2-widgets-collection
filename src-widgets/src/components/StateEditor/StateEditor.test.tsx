/**
 * Zustandseditor (ADR-0104): the values group's list, Gewählte Zeile row and shared row
 * selection.
 *
 * @module components/StateEditor/StateEditor.test
 * @remarks
 * Rendered through the vis-2 custom-field API exactly as the attribute panel does: every field
 * of the group built by `stateEditorGroup` becomes a table row — native label cell, then the
 * value cell with `field.component(field, data, onDataChange, props)` — and a field whose
 * `hidden` predicate holds is left out. Observed: the DOM and the patches handed to
 * `onDataChange` (a row switch must hand none).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // An own `t`: its `t:` prefix tells a translated text from a literal one.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

// The per-state field list renders colour fields and dividers; the master fields under test
// never render them (StateDetailField.test covers the detail fields).
vi.mock('../ContractColorField', () => ({ default: () => null }));
vi.mock('../PlainColorField', () => ({ default: () => null }));
vi.mock('../CollectionDivider', () => ({ default: () => null }));

import { act } from 'react';
import type React from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import { Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from '../../lib/testing/vis2GroupBody';
import { stateEditorGroup } from '../../lib/stateEditorFields';
import { resetStateRowListStore, setStateRowSearch } from './stateRowListStore';
import { resetStateRowSelection, stateRowSelectionKey } from './stateRowSelection';

const editorProps = (selectedWidgets: string[] = ['w1'], view = 'v'): RxWidgetInfoCustomComponentProperties =>
    ({
        context: { theme: vis2HostTheme, socket: {}, views: {} },
        selectedView: view,
        selectedWidgets,
        selectedWidget: selectedWidgets[0],
    }) as unknown as RxWidgetInfoCustomComponentProperties;

type PanelProps = {
    fields: readonly Vis2PanelField[];
    data: WidgetData;
    onDataChange: (patch: WidgetData) => void;
    props: RxWidgetInfoCustomComponentProperties;
};

/**
 * The raw data of every selected widget, as vis-2 hands it to a `hidden` predicate — the
 * stored widgets of `context.views`, else (no project in the test) the field data.
 */
const rawDatas = (data: WidgetData, props: RxWidgetInfoCustomComponentProperties): WidgetData[] => {
    const views = props.context.views as unknown as Record<string, { widgets?: Record<string, { data: WidgetData }> }>;
    const stored = props.selectedWidgets.map(id => views?.[props.selectedView]?.widgets?.[id]?.data);
    return stored.every(Boolean) && stored.length > 0 ? (stored as WidgetData[]) : [data];
};

/** The group body as vis-2 renders it (`renderGroupBody` / `renderFieldRow`); a field is hidden when its predicate holds for every selected widget. */
function Panel({ fields, data, onDataChange, props }: PanelProps): React.JSX.Element {
    return (
        <Vis2GroupBody
            fields={fields}
            data={data}
            stored={rawDatas(data, props)}
            onDataChange={onDataChange}
            props={props}
        />
    );
}

/** A State widget whose OID has three states; row 2 has an icon. */
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
    value3: 2,
    alias3: 'Comfort',
};

/** `count` rows without common.states. */
const manyRows = (count: number): WidgetData => {
    const data: WidgetData = { oid: 'a.0.level', oidObject: { type: 'number' }, ignoreCommonStates: false };
    data.values_count = count;
    for (let n = 1; n <= count; n++) {
        data[`value${n}`] = n * 10;
        data[`alias${n}`] = `Step ${n}`;
    }
    return data;
};

let handle: RenderComponentHandle<PanelProps> | null = null;

beforeEach(() => {
    resetStateRowSelection();
    resetStateRowListStore();
});

afterEach(() => {
    handle?.unmount();
    handle = null;
});

const mount = (
    data: WidgetData,
    props = editorProps(),
): { container: HTMLElement; onDataChange: ReturnType<typeof vi.fn>; panel: PanelProps } => {
    const onDataChange = vi.fn();
    const panel: PanelProps = { fields: stateEditorGroup().fields as Vis2PanelField[], data, onDataChange, props };
    handle = renderComponent(Panel, panel);
    return { container: handle.container, onDataChange, panel };
};

const listRows = (container: HTMLElement): HTMLElement[] => [
    ...container.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]'),
];
const rowText = (row: HTMLElement): string[] =>
    [...row.querySelectorAll<HTMLElement>('[data-col]:not([data-col="grip"])')].map(cell => cell.textContent ?? '');
const selectedRow = (container: HTMLElement): HTMLElement | undefined =>
    listRows(container).find(row => row.getAttribute('aria-selected') === 'true');
const header = (container: HTMLElement): HTMLElement => {
    const element = container.querySelector<HTMLElement>('[data-selected-state-row]');
    if (!element) {
        throw new Error('no Gewählte Zeile row rendered');
    }
    return element;
};
const button = (container: HTMLElement, label: string): HTMLButtonElement => {
    const element = container.querySelector<HTMLButtonElement>(`button[aria-label="${label}"]`);
    if (!element) {
        throw new Error(`no button ${label}`);
    }
    return element;
};
const click = (element: HTMLElement): void => {
    act(() => {
        element.click();
    });
};

describe('Zustandseditor list — the Zustandszeilen at a glance', () => {
    it('lists every row with no., value, alias and an icon hint for rows with an icon', () => {
        const { container } = mount(THREE_ROWS);

        expect(listRows(container).map(rowText)).toEqual([
            ['1', '0', 'Off', ''],
            ['2', '1', 'Eco', 't:state_editor_has_icon'],
            ['3', '2', 'Comfort', ''],
        ]);
        expect(listRows(container).map(row => !!row.querySelector('[data-icon-hint]'))).toEqual([false, true, false]);
    });

    it('shows the row count beside the native label "Rows"', () => {
        const { container } = mount(THREE_ROWS);
        const labelCell = container.querySelector('tr[data-field="values_count"] td');

        expect(labelCell?.textContent).toBe('state_editor_rows (3)');
    });

    it('shows the rows of a widget saved with ignoreCommonStates on (the Zustandsmenge)', () => {
        const { container } = mount({ ...THREE_ROWS, values_count: 0, ignoreCommonStates: true });

        expect(listRows(container)).toHaveLength(3);
    });

    it('selects the first row by default', () => {
        const { container } = mount(THREE_ROWS);

        expect(selectedRow(container)?.textContent).toContain('Off');
        expect(header(container).textContent).toContain('1 / 3');
    });
});

describe('Zustandseditor selection — a row switch writes no project data', () => {
    it('clicking a row selects it and the Gewählte Zeile follows', () => {
        const { container, onDataChange } = mount(THREE_ROWS);

        click(listRows(container)[1]);

        expect(rowText(selectedRow(container) as HTMLElement)[2]).toBe('Eco');
        expect(header(container).textContent).toContain('2 / 3');
        expect(header(container).textContent).toContain('1 · Eco');
        expect(onDataChange).not.toHaveBeenCalled();
    });

    it('‹ › page through the rows and stop at the ends', () => {
        const { container, onDataChange } = mount(THREE_ROWS);
        const previous = button(container, 't:state_editor_previous_row');
        const next = button(container, 't:state_editor_next_row');

        expect(previous.disabled).toBe(true);
        click(next);
        click(next);
        expect(header(container).textContent).toContain('3 / 3');
        expect(next.disabled).toBe(true);
        click(previous);
        expect(header(container).textContent).toContain('2 / 3');
        expect(rowText(selectedRow(container) as HTMLElement)[2]).toBe('Eco');
        expect(onDataChange).not.toHaveBeenCalled();
    });

    it('‹ › page only through the rows an active search keeps, so the selection stays in the list', () => {
        // "f" keeps Off (1) and Comfort (3), not Eco (2).
        setStateRowSearch(stateRowSelectionKey('v', ['w1']), 'f');
        const { container, onDataChange } = mount(THREE_ROWS);
        const previous = button(container, 't:state_editor_previous_row');
        const next = button(container, 't:state_editor_next_row');

        click(next);
        expect(header(container).textContent).toContain('3 / 3');
        expect(rowText(selectedRow(container) as HTMLElement)[2]).toBe('Comfort');
        expect(next.disabled).toBe(true);
        click(previous);
        expect(header(container).textContent).toContain('1 / 3');
        expect(previous.disabled).toBe(true);
        expect(onDataChange).not.toHaveBeenCalled();
    });

    it('is remembered per view and selected widgets while the page stays open', () => {
        const { container } = mount(THREE_ROWS, editorProps(['w1']));
        click(listRows(container)[2]);
        handle?.unmount();

        expect(header(mount(THREE_ROWS, editorProps(['w1'])).container).textContent).toContain('3 / 3');
        handle?.unmount();
        expect(header(mount(THREE_ROWS, editorProps(['w2'])).container).textContent).toContain('1 / 3');
        handle?.unmount();
        expect(header(mount(THREE_ROWS, editorProps(['w1'], 'other')).container).textContent).toContain('1 / 3');
    });

    it('falls back to the last row when the selected one is gone', () => {
        const { container, panel } = mount(THREE_ROWS);
        click(listRows(container)[2]);

        handle?.rerender({ ...panel, data: { ...THREE_ROWS, values_count: 2 } });

        expect(header(container).textContent).toContain('2 / 2');
    });

    it('keeps the selected row in view of the scrolling list', () => {
        const { container } = mount(manyRows(20));
        const list = container.querySelector<HTMLElement>('[role="listbox"]') as HTMLElement;
        const next = button(container, 't:state_editor_next_row');

        for (let i = 0; i < 9; i++) {
            click(next);
        }

        // Row 10 of 28 px rows at the bottom of an 8-row (224 px) list.
        expect(header(container).textContent).toContain('10 / 20');
        expect(list.scrollTop).toBe(10 * 28 - 8 * 28);
    });
});

describe('Zustandseditor without an OID object', () => {
    it('shows the InfoBox "pick an OID first" and neither list nor Gewählte Zeile row', () => {
        const { container } = mount({ oid: '', values_count: 0 });

        expect(container.querySelector('[data-info-box]')?.textContent).toBe('t:state_editor_pick_oid_first');
        expect(container.querySelector('[role="listbox"]')).toBeNull();
        expect(container.querySelector('[data-selected-state-row]')).toBeNull();
    });
});

describe('Zustandseditor with no rows yet', () => {
    it('shows an empty list and no Gewählte Zeile row', () => {
        const { container } = mount({ oid: 'a.0.level', oidObject: { type: 'number' }, values_count: 0 });

        expect(listRows(container)).toHaveLength(0);
        expect(container.querySelector('[role="listbox"]')?.textContent).toBe('t:state_editor_no_rows');
        expect(container.querySelector('[data-selected-state-row]')).toBeNull();
    });
});

describe('Zustandseditor under multi-selection — reads the stored widgets, not vis-2s merged data', () => {
    it('shows the rows although vis-2 merged the OID object of two widgets to null', () => {
        // vis-2 hands a custom field `commonValues` under multi-selection: every key whose
        // values differ by `!==` is null — an object like `oidObject` always is
        // (Attributes/Widget/index.tsx, commonValues).
        const merged: WidgetData = { ...THREE_ROWS, oidObject: null };
        const props = editorProps(['w1', 'w2']);
        (props.context as unknown as { views: unknown }).views = {
            v: { widgets: { w1: { data: { ...THREE_ROWS } }, w2: { data: { ...THREE_ROWS } } } },
        };
        const { container } = mount(merged, props);

        expect(container.querySelector('[data-info-box]')).toBeNull();
        expect(listRows(container)).toHaveLength(3);
    });
});
