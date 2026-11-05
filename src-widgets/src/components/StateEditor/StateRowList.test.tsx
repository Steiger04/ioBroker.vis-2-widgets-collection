/**
 * Zustandseditor list (T4, Ticket 05): search, keyboard, drag-and-drop and the height grip.
 *
 * @module components/StateEditor/StateRowList.test
 * @remarks
 * Rendered through the vis-2 custom-field API inside a host that plays vis-2 (as in
 * `StateEditorToolbar.test.tsx`): every patch handed to `onDataChange` is applied to the stored
 * widgets and the group renders again. Observed: the patches, the list, the toolbar and the
 * focused element — vis-2 deletes the selected widget on Delete while the focus is on `<body>`
 * (vis-2 `Editor.tsx` `onKeyDown`), so the list must keep the focus.
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
import { mergeStateRowPatch } from '../../lib/stateRows';
import { resetStateRowSelection } from './stateRowSelection';
import { resetStateRowListStore, STATE_ROW_LIST_STORAGE_KEY } from './stateRowListStore';

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
    widget: WidgetData;
    onPatch: (patch: WidgetData) => void;
};

/** vis-2's attribute panel for one „Werte" group of one selected widget. */
function Host({ widget: initial, onPatch }: HostProps): React.JSX.Element {
    const [widget, setWidget] = useState(initial);
    const props = {
        context: { theme: hostTheme, socket: {}, views: { v: { widgets: { w1: { data: widget } } } } },
        selectedView: 'v',
        selectedWidgets: ['w1'],
        selectedWidget: 'w1',
    } as unknown as RxWidgetInfoCustomComponentProperties;
    const onDataChange = (patch: WidgetData): void => {
        onPatch(patch);
        setWidget(current => mergeStateRowPatch(current, patch));
    };
    const fields = stateEditorGroup().fields as FieldLike[];

    return (
        <table>
            <tbody>
                {fields.map((field, index) =>
                    typeof field.hidden === 'function' &&
                    (field.hidden as (d: WidgetData) => boolean)(widget) ? null : (
                        <tr key={index}>
                            <td>{field.label}</td>
                            <td>{field.component?.(field, widget, onDataChange, props)}</td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
    );
}

/** A State widget whose OID has four states. */
const FOUR_ROWS: WidgetData = {
    oid: 'a.0.mode',
    oidObject: { type: 'number', commonStates: { 0: 'Off', 1: 'Eco', 2: 'Comfort', 3: 'Boost' } },
    ignoreCommonStates: false,
    values_count: 4,
    value1: 0,
    alias1: 'Off',
    value2: 1,
    alias2: 'Eco',
    value3: 2,
    alias3: 'Comfort',
    value4: 3,
    alias4: 'Boost',
};

/** A State widget with `count` own rows `v1`…`vN` / `Row 1`…`Row N`. */
const manyRows = (count: number): WidgetData => ({
    oid: 'a.0.level',
    oidObject: { type: 'number' },
    ignoreCommonStates: false,
    values_count: count,
    ...Object.fromEntries(
        Array.from({ length: count }, (_, i) => [
            [`value${i + 1}`, `v${i + 1}`],
            [`alias${i + 1}`, `Row ${i + 1}`],
        ]).flat(),
    ),
});

let handle: RenderComponentHandle<HostProps> | null = null;

beforeEach(() => {
    resetStateRowSelection();
    resetStateRowListStore();
    localStorage.clear();
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    document.body.innerHTML = '';
});

const mount = (widget: WidgetData = FOUR_ROWS): { container: HTMLElement; patches: WidgetData[] } => {
    const patches: WidgetData[] = [];
    handle = renderComponent<HostProps>(Host, { widget, onPatch: patch => patches.push(patch) });
    return { container: handle.container, patches };
};

const list = (container: HTMLElement): HTMLElement => container.querySelector<HTMLElement>('[role="listbox"]')!;
const listRows = (container: HTMLElement): string[] =>
    [...container.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]')].map(row =>
        [...row.querySelectorAll<HTMLElement>('[data-col="nr"], [data-col="value"], [data-col="alias"]')]
            .map(cell => cell.textContent)
            .join(' '),
    );
const option = (container: HTMLElement, n: number): HTMLElement =>
    container.querySelector<HTMLElement>(`[role="option"][data-row="${n}"]`)!;
const selectedRow = (container: HTMLElement): string =>
    container.querySelector<HTMLElement>('[role="option"][aria-selected="true"] [data-col="nr"]')?.textContent ?? '';
const tool = (container: HTMLElement, action: string): HTMLButtonElement =>
    container.querySelector<HTMLButtonElement>(`button[aria-label="t:state_editor_${action}"]`)!;
const searchInput = (container: HTMLElement): HTMLInputElement =>
    container.querySelector<HTMLInputElement>('input[aria-label="t:state_editor_search"]')!;

const click = (element: HTMLElement): void => {
    act(() => {
        element.click();
    });
};
const type = (input: HTMLInputElement, text: string): void => {
    act(() => {
        // React tracks the value through the native setter.
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(input, text);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};
const press = (element: HTMLElement, key: string, init: KeyboardEventInit = {}): boolean => {
    let notCancelled = true;
    act(() => {
        notCancelled = element.dispatchEvent(
            new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...init }),
        );
    });
    return notCancelled;
};

describe('Zustandseditor list — search', () => {
    it('filters the rows by Nr, value and alias, as a case-insensitive substring', () => {
        const { container } = mount();

        type(searchInput(container), 'cOm');
        expect(listRows(container)).toEqual(['3 2 Comfort']);

        type(searchInput(container), '3');
        expect(listRows(container)).toEqual(['3 2 Comfort', '4 3 Boost']);

        type(searchInput(container), '');
        expect(listRows(container)).toHaveLength(4);
    });
});

describe('Zustandseditor list — search locks reordering', () => {
    it('locks up/down, Alt+↑/↓ and dragging while it filters; add, clone, delete and clear stay', () => {
        const { container, patches } = mount();
        click(option(container, 2));

        type(searchInput(container), 'o');

        expect(tool(container, 'move_row_up').disabled).toBe(true);
        expect(tool(container, 'move_row_down').disabled).toBe(true);
        expect(option(container, 2).getAttribute('draggable')).toBe('false');
        press(list(container), 'ArrowDown', { altKey: true });
        expect(patches).toHaveLength(0);

        expect(tool(container, 'add_row').disabled).toBe(false);
        expect(tool(container, 'clone_row').disabled).toBe(false);
        expect(tool(container, 'delete_row').disabled).toBe(false);
        expect(tool(container, 'clear_row').disabled).toBe(false);
        click(tool(container, 'clone_row'));
        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 5, value3: 1, alias3: 'Eco' });
    });

    it('unlocks reordering once the search is emptied', () => {
        const { container } = mount();
        click(option(container, 2));
        type(searchInput(container), 'eco');

        type(searchInput(container), '');

        expect(tool(container, 'move_row_up').disabled).toBe(false);
        expect(option(container, 2).getAttribute('draggable')).toBe('true');
    });
});

describe('Zustandseditor list — a new row the search would hide', () => {
    it('add empties the search, so the new row is shown and selected', () => {
        const { container } = mount();
        click(option(container, 2));
        type(searchInput(container), 'eco');

        click(tool(container, 'add_row'));

        expect(searchInput(container).value).toBe('');
        expect(listRows(container)).toHaveLength(5);
        expect(selectedRow(container)).toBe('5');
    });

    it('clone keeps the search while the copy matches it', () => {
        const { container } = mount();
        click(option(container, 2));
        type(searchInput(container), 'eco');

        click(tool(container, 'clone_row'));

        expect(searchInput(container).value).toBe('eco');
        expect(listRows(container)).toEqual(['2 1 Eco', '3 1 Eco']);
        expect(selectedRow(container)).toBe('3');
    });

    it('clone empties the search when only the Nr of the source matched', () => {
        const { container } = mount();
        click(option(container, 4));
        type(searchInput(container), '4');

        click(tool(container, 'clone_row'));

        expect(searchInput(container).value).toBe('');
        expect(selectedRow(container)).toBe('5');
    });
});

describe('Zustandseditor list — keyboard', () => {
    it('↑/↓ change the selection without writing anything', () => {
        const { container, patches } = mount();
        click(option(container, 2));

        press(list(container), 'ArrowDown');
        expect(selectedRow(container)).toBe('3');
        press(list(container), 'ArrowUp');
        press(list(container), 'ArrowUp');
        expect(selectedRow(container)).toBe('1');
        press(list(container), 'ArrowUp');
        expect(selectedRow(container)).toBe('1');

        expect(patches).toHaveLength(0);
    });

    it('↑/↓ step through the rows the search keeps', () => {
        const { container } = mount();
        type(searchInput(container), 'o'); // Off, Eco, Comfort, Boost — all; narrow it:
        type(searchInput(container), 'f'); // Off, Comfort

        press(list(container), 'ArrowDown');

        expect(selectedRow(container)).toBe('3');
    });

    it('Alt+↑/↓ move the selected row in one patch and keep it selected', () => {
        const { container, patches } = mount();
        click(option(container, 2));

        press(list(container), 'ArrowDown', { altKey: true });

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 4, value2: 2, value3: 1, alias3: 'Eco' });
        expect(listRows(container)).toEqual(['1 0 Off', '2 2 Comfort', '3 1 Eco', '4 3 Boost']);
        expect(selectedRow(container)).toBe('3');

        press(list(container), 'ArrowUp', { altKey: true });
        press(list(container), 'ArrowUp', { altKey: true });
        expect(listRows(container)).toEqual(['1 1 Eco', '2 0 Off', '3 2 Comfort', '4 3 Boost']);
        expect(selectedRow(container)).toBe('1');

        press(list(container), 'ArrowUp', { altKey: true });
        expect(patches).toHaveLength(3);
    });

    it('the arrow keys do not scroll the attribute panel', () => {
        const { container } = mount();

        expect(press(list(container), 'ArrowDown')).toBe(false);
        expect(press(list(container), 'ArrowDown', { altKey: true })).toBe(false);
    });
});

describe('Zustandseditor list — focus and the Delete key', () => {
    /** vis-2's editor shortcut: Delete with the focus on <body> deletes the selected widget. */
    const watchVisDelete = (): { deleted: () => boolean; stop: () => void } => {
        let deleted = false;
        const listener = (event: KeyboardEvent): void => {
            if (event.key === 'Delete' && document.activeElement?.tagName === 'BODY') {
                deleted = true;
            }
        };
        window.addEventListener('keydown', listener);
        return { deleted: () => deleted, stop: () => window.removeEventListener('keydown', listener) };
    };

    it('Delete in the list neither deletes a row nor reaches vis-2 as a widget delete', () => {
        const vis = watchVisDelete();
        const { container, patches } = mount();
        list(container).focus();
        click(option(container, 2));

        press(document.activeElement as HTMLElement, 'Delete');

        expect(patches).toHaveLength(0);
        expect(listRows(container)).toHaveLength(4);
        expect(vis.deleted()).toBe(false);
        vis.stop();
    });

    it('keeps the focus in the list after Alt+↑/↓', () => {
        const { container } = mount();
        list(container).focus();

        press(list(container), 'ArrowDown', { altKey: true });

        expect(document.activeElement).toBe(list(container));
    });

    it('hands the focus to the list after a toolbar action — a button that turns disabled drops it on <body>', () => {
        const vis = watchVisDelete();
        const { container } = mount();
        click(option(container, 3));
        tool(container, 'move_row_down').focus();

        click(tool(container, 'move_row_down'));

        expect(tool(container, 'move_row_down').disabled).toBe(true);
        expect(document.activeElement).toBe(list(container));
        press(document.activeElement as HTMLElement, 'Delete');
        expect(vis.deleted()).toBe(false);
        vis.stop();
    });
});

describe('Zustandseditor list — drag-and-drop', () => {
    /** A minimal DataTransfer: happy-dom dispatches drag events without one. */
    const dataTransfer = (): Pick<DataTransfer, 'effectAllowed' | 'dropEffect' | 'setData' | 'getData'> => {
        const store = new Map<string, string>();
        return {
            effectAllowed: 'none',
            dropEffect: 'none',
            setData: (format: string, value: string) => {
                store.set(format, value);
            },
            getData: (format: string) => store.get(format) ?? '',
        };
    };
    const fire = (element: HTMLElement, eventType: string, transfer: ReturnType<typeof dataTransfer>): boolean => {
        let notCancelled = true;
        act(() => {
            const event = new Event(eventType, { bubbles: true, cancelable: true });
            Object.defineProperty(event, 'dataTransfer', { value: transfer });
            notCancelled = element.dispatchEvent(event);
        });
        return notCancelled;
    };
    const dragAndDrop = (container: HTMLElement, from: number, to: number): void => {
        const transfer = dataTransfer();
        fire(option(container, from), 'dragstart', transfer);
        fire(option(container, to), 'dragover', transfer);
        fire(option(container, to), 'drop', transfer);
        fire(option(container, from), 'dragend', transfer);
    };

    it('every row has a grip and can be dragged', () => {
        const { container } = mount();

        for (const n of [1, 2, 3, 4]) {
            expect(option(container, n).getAttribute('draggable')).toBe('true');
            expect(option(container, n).querySelector('[data-col="grip"] svg')).not.toBeNull();
        }
    });

    it('dropping a row moves it to the place of the target row in one patch and selects it', () => {
        const { container, patches } = mount();

        dragAndDrop(container, 1, 3);

        expect(patches).toHaveLength(1);
        expect(patches[0]).toMatchObject({ values_count: 4, value1: 1, value2: 2, value3: 0, alias3: 'Off' });
        expect(listRows(container)).toEqual(['1 1 Eco', '2 2 Comfort', '3 0 Off', '4 3 Boost']);
        expect(selectedRow(container)).toBe('3');
        expect(document.activeElement).toBe(list(container));
    });

    it('dropping upwards and onto the last row reaches every place', () => {
        const { container } = mount();

        dragAndDrop(container, 4, 1);
        expect(listRows(container)).toEqual(['1 3 Boost', '2 0 Off', '3 1 Eco', '4 2 Comfort']);

        dragAndDrop(container, 1, 4);
        expect(listRows(container)).toEqual(['1 0 Off', '2 1 Eco', '3 2 Comfort', '4 3 Boost']);
    });

    it('accepts the drop over a row and ignores a drop onto the dragged row itself', () => {
        const { container, patches } = mount();
        const transfer = dataTransfer();
        fire(option(container, 2), 'dragstart', transfer);

        expect(fire(option(container, 3), 'dragover', transfer)).toBe(false);
        fire(option(container, 2), 'drop', transfer);

        expect(patches).toHaveLength(0);
    });

    it('ignores a drag that did not start in the list', () => {
        const { container, patches } = mount();
        const transfer = dataTransfer();

        expect(fire(option(container, 3), 'dragover', transfer)).toBe(true);
        fire(option(container, 3), 'drop', transfer);

        expect(patches).toHaveLength(0);
    });
});

describe('Zustandseditor list — height', () => {
    const grip = (container: HTMLElement): HTMLElement =>
        container.querySelector<HTMLElement>('[role="separator"][aria-label="t:state_editor_resize_list"]')!;
    const pointer = (element: HTMLElement, eventType: string, clientY: number): void => {
        act(() => {
            element.dispatchEvent(
                new PointerEvent(eventType, { bubbles: true, cancelable: true, pointerId: 1, button: 0, clientY }),
            );
        });
    };

    it('shows 8 rows by default', () => {
        const { container } = mount(manyRows(20));

        expect(grip(container).getAttribute('aria-valuenow')).toBe('8');
        expect(getComputedStyle(list(container)).height).toBe('224px');
    });

    it('dragging the grip changes the height by whole rows and stores it', () => {
        const { container } = mount(manyRows(20));

        pointer(grip(container), 'pointerdown', 100);
        pointer(grip(container), 'pointermove', 160);
        expect(grip(container).getAttribute('aria-valuenow')).toBe('10');
        expect(localStorage.getItem(STATE_ROW_LIST_STORAGE_KEY)).toBeNull();
        pointer(grip(container), 'pointerup', 160);

        expect(localStorage.getItem(STATE_ROW_LIST_STORAGE_KEY)).toBe('10');
        expect(getComputedStyle(list(container)).height).toBe('280px');
    });

    it('↑/↓ on the grip change the height by one row', () => {
        const { container } = mount(manyRows(20));

        press(grip(container), 'ArrowUp');

        expect(grip(container).getAttribute('aria-valuenow')).toBe('7');
        expect(localStorage.getItem(STATE_ROW_LIST_STORAGE_KEY)).toBe('7');
    });

    it('restores the stored height after a reload', () => {
        localStorage.setItem(STATE_ROW_LIST_STORAGE_KEY, '12');

        const { container } = mount(manyRows(20));

        expect(grip(container).getAttribute('aria-valuenow')).toBe('12');
        expect(getComputedStyle(list(container)).height).toBe('336px');
    });

    it('falls back to 8 rows on a stored value it cannot use', () => {
        localStorage.setItem(STATE_ROW_LIST_STORAGE_KEY, 'abc');

        const { container } = mount(manyRows(20));

        expect(grip(container).getAttribute('aria-valuenow')).toBe('8');
    });

    it('never grows beyond the rows there are', () => {
        const { container } = mount();

        expect(getComputedStyle(list(container)).height).toBe('112px');
    });
});

describe('Zustandseditor list — focus after a confirmed action', () => {
    it('hands the focus to the list once the question of „Zeile leeren" closes', async () => {
        const { container, patches } = mount();
        click(option(container, 2));
        tool(container, 'clear_row').focus();
        click(tool(container, 'clear_row'));

        click(document.querySelector<HTMLButtonElement>('[data-state-editor-confirm="ok"]')!);
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
        });

        expect(patches).toHaveLength(1);
        expect(document.activeElement).toBe(list(container));
    });
});
