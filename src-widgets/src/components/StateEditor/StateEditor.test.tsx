/**
 * Zustandseditor (T4, Ticket 02): the „Werte" group's list, Kopfzeile and shared row selection.
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
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

// The per-state field list renders colour fields and dividers; the master fields under test
// never render them (the detail fields come with Ticket 03).
vi.mock('../ContractColorField', () => ({ default: () => null }));
vi.mock('../PlainColorField', () => ({ default: () => null }));
vi.mock('../CollectionDivider', () => ({ default: () => null }));

import { createTheme } from '@mui/material';
import { act } from 'react';
import type React from 'react';

import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    WidgetData,
} from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import { stateEditorGroup } from '../../lib/stateEditorFields';
import { resetStateRowSelection } from './stateRowSelection';

const hostTheme = Object.assign(createTheme(), { name: 'light' });

const editorProps = (selectedWidgets: string[] = ['w1'], view = 'v'): RxWidgetInfoCustomComponentProperties =>
    ({
        context: { theme: hostTheme, socket: {}, views: {} },
        selectedView: view,
        selectedWidgets,
        selectedWidget: selectedWidgets[0],
    }) as unknown as RxWidgetInfoCustomComponentProperties;

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

type PanelProps = {
    fields: readonly FieldLike[];
    data: WidgetData;
    onDataChange: (patch: WidgetData) => void;
    props: RxWidgetInfoCustomComponentProperties;
};

/** The group body as vis-2 renders it (`renderGroupBody` / `renderFieldRow`). */
function Panel({ fields, data, onDataChange, props }: PanelProps): React.JSX.Element {
    return (
        <table>
            <tbody>
                {fields.map((field, index) =>
                    typeof field.hidden === 'function' && (field.hidden as (d: WidgetData) => boolean)(data) ? null : (
                        <tr
                            key={index}
                            data-field={field.name ?? `#${index}`}
                        >
                            <td>
                                <span>{field.label}</span>
                            </td>
                            <td>{field.component?.(field, data, onDataChange, props)}</td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
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
    const panel: PanelProps = { fields: stateEditorGroup().fields as FieldLike[], data, onDataChange, props };
    handle = renderComponent(Panel, panel);
    return { container: handle.container, onDataChange, panel };
};

const listRows = (container: HTMLElement): HTMLElement[] => [
    ...container.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]'),
];
const rowText = (row: HTMLElement): string[] =>
    [...row.querySelectorAll<HTMLElement>('[data-col]')].map(cell => cell.textContent ?? '');
const selectedRow = (container: HTMLElement): HTMLElement | undefined =>
    listRows(container).find(row => row.getAttribute('aria-selected') === 'true');
const header = (container: HTMLElement): HTMLElement => {
    const element = container.querySelector<HTMLElement>('[data-state-row-header]');
    if (!element) {
        throw new Error('no Kopfzeile rendered');
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
    it('lists every row with Nr, Wert, Alias and an icon hint for rows with an icon', () => {
        const { container } = mount(THREE_ROWS);

        expect(listRows(container).map(rowText)).toEqual([
            ['1', '0', 'Off', ''],
            ['2', '1', 'Eco', 't:state_editor_has_icon'],
            ['3', '2', 'Comfort', ''],
        ]);
        expect(listRows(container).map(row => !!row.querySelector('[data-icon-hint]'))).toEqual([false, true, false]);
    });

    it('shows the row count beside the native label „Zeilen"', () => {
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
    it('clicking a row selects it and the Kopfzeile follows', () => {
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
    it('shows the InfoBox „erst OID wählen" and neither list nor Kopfzeile', () => {
        const { container } = mount({ oid: '', values_count: 0 });

        expect(container.querySelector('[data-info-box]')?.textContent).toBe('t:state_editor_pick_oid_first');
        expect(container.querySelector('[role="listbox"]')).toBeNull();
        expect(container.querySelector('[data-state-row-header]')).toBeNull();
    });
});

describe('Zustandseditor with no rows yet', () => {
    it('shows an empty list and no Kopfzeile', () => {
        const { container } = mount({ oid: 'a.0.level', oidObject: { type: 'number' }, values_count: 0 });

        expect(listRows(container)).toHaveLength(0);
        expect(container.querySelector('[role="listbox"]')?.textContent).toBe('t:state_editor_no_rows');
        expect(container.querySelector('[data-state-row-header]')).toBeNull();
    });
});
