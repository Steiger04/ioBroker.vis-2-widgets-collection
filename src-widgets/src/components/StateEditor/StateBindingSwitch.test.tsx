/**
 * Zustandseditor binding switch (ADR-0104 Nachtrag Ticket 06): every detail field can be switched to a plain
 * text field for `{…}` bindings, maintaining `data.bindings` for `name{n}` — and a binding
 * moves with its row.
 *
 * @module components/StateEditor/StateBindingSwitch.test
 * @remarks
 * Rendered through the vis-2 custom-field API as the attribute panel does, inside a host that
 * plays vis-2 (see `StateEditorToolbar.test.tsx`): it applies every patch handed to
 * `onDataChange` to the stored widgets (`null` deletes) and renders the group again.
 * `props.Editor` is a fake of vis-2's `Editor` (fork `Attributes/Widget/WidgetField.tsx`): a
 * fresh function on every render, returning an input that reads `data[field.name]` and tells
 * the field type. Observed: the patches, the switch and the control of each field.
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

import { act, useState } from 'react';
import type React from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import { vis2CommonValues, Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from '../../lib/testing/vis2GroupBody';
import { stateEditorGroup } from '../../lib/stateEditorFields';
import { mergeStateRowPatch } from '../../lib/stateRows';
import { resetStateRowSelection } from './stateRowSelection';

type EditorField = { name: string; type?: string };

type HostProps = {
    /** The stored data per selected widget. */
    widgets: Record<string, WidgetData>;
    onPatch: (patch: WidgetData) => void;
};

/** vis-2's attribute panel for one values group, writing every patch to all selected widgets. */
function Host({ widgets: initial, onPatch }: HostProps): React.JSX.Element {
    const [widgets, setWidgets] = useState(initial);
    const ids = Object.keys(widgets);
    // Several widgets: vis-2 hands the field its `commonValues` — a key differing by `!==` is
    // `null`, an object (`bindings`, `oidObject`) always (Attributes/Widget/index.tsx).
    const data = ids.length === 1 ? widgets[ids[0]] : vis2CommonValues(widgets);
    // A fresh Editor function on every render, exactly like vis-2's WidgetField.
    const Editor = ({ field, disabled }: { field: EditorField; disabled?: boolean }): React.JSX.Element => (
        <input
            data-editor={field.name}
            data-type={field.type ?? ''}
            disabled={!!disabled}
            readOnly
            value={data[field.name] === undefined ? '' : String(data[field.name])}
        />
    );
    const props = {
        context: {
            theme: vis2HostTheme,
            socket: {},
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
            projectName: 'main',
            instance: 0,
            adapterName: 'vis-2',
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        Editor,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    const onDataChange = (patch: WidgetData): void => {
        onPatch(patch);
        setWidgets(current =>
            Object.fromEntries(Object.entries(current).map(([id, d]) => [id, mergeStateRowPatch(d, patch)])),
        );
    };
    const fields = stateEditorGroup().fields as Vis2PanelField[];

    return (
        <Vis2GroupBody
            fields={fields}
            data={data}
            stored={ids.map(id => widgets[id])}
            onDataChange={onDataChange}
            props={props}
        />
    );
}

/** A State widget whose OID has three states; row 2's header is bound, the widget title too. */
const THREE_ROWS: WidgetData = {
    oid: 'a.0.mode',
    oidObject: { type: 'number', commonStates: { 0: 'Off', 1: 'Eco', 2: 'Comfort' } },
    ignoreCommonStates: false,
    values_count: 3,
    value1: 0,
    alias1: 'Off',
    header1: 'Plain',
    value2: 1,
    alias2: 'Eco',
    header2: '{a.0.label}',
    value3: 2,
    alias3: 'Comfort',
    bindings: ['title', 'header2'],
};

let handle: RenderComponentHandle<HostProps> | null = null;

beforeEach(() => {
    resetStateRowSelection();
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    document.body.innerHTML = '';
});

const mount = (widgets: Record<string, WidgetData> | WidgetData): { container: HTMLElement; patches: WidgetData[] } => {
    const patches: WidgetData[] = [];
    const stored = 'oid' in widgets ? { w1: widgets as WidgetData } : (widgets as Record<string, WidgetData>);
    handle = renderComponent<HostProps>(Host, {
        widgets: stored,
        onPatch: patch => {
            patches.push(patch);
        },
    });
    return { container: handle.container, patches };
};

const click = (element: HTMLElement): void => {
    act(() => {
        element.click();
    });
};
const selectRow = (container: HTMLElement, n: number): void =>
    click(container.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]')[n - 1]);
const tool = (container: HTMLElement, action: string): HTMLButtonElement => {
    const element = container.querySelector<HTMLButtonElement>(`button[aria-label="t:state_editor_${action}"]`);
    if (!element) {
        throw new Error(`no toolbar button ${action}`);
    }
    return element;
};
/** The detail wrapper of a per-state field (base name). */
const wrapper = (container: HTMLElement, base: string): HTMLElement => {
    const element = container.querySelector<HTMLElement>(`[data-state-detail="${base}"]`);
    if (!element) {
        throw new Error(`no detail field ${base}`);
    }
    return element;
};
/** The binding switch of a detail field, or `null`. */
const bindingSwitch = (container: HTMLElement, base: string): HTMLButtonElement | null =>
    wrapper(container, base).querySelector<HTMLButtonElement>('button[data-binding-switch]');
/** How a detail field is shown: `bound` (text field + LinkOff), `plain`, or `none` without switch. */
const mode = (container: HTMLElement, base: string): string => {
    const button = bindingSwitch(container, base);
    return button ? (button.getAttribute('aria-pressed') === 'true' ? 'bound' : 'plain') : 'none';
};
const control = (container: HTMLElement, base: string): HTMLInputElement => {
    const element = wrapper(container, base).querySelector<HTMLInputElement>('input[data-editor]');
    if (!element) {
        throw new Error(`no control for ${base}`);
    }
    return element;
};

describe('the binding switch of a detail field', () => {
    it('sits at the start of the value cell of every field vis-2 offered a binding for, with its tooltip', () => {
        const { container } = mount(THREE_ROWS);

        const header = wrapper(container, 'header');
        expect(header.firstElementChild?.querySelector('button[data-binding-switch]')).not.toBeNull();
        expect(bindingSwitch(container, 'header')?.getAttribute('aria-label')).toBe('t:state_editor_binding_on');
        expect(bindingSwitch(container, 'header')?.querySelector('svg[data-testid="LinkIcon"]')).not.toBeNull();
        // vis-2: custom fields with a label (the colour fields) yes, checkboxes only with noBinding: false.
        expect(mode(container, 'iconColor')).toBe('plain');
        expect(mode(container, 'icon')).toBe('plain');
        expect(mode(container, 'enableIconColorMask')).toBe('none');
    });

    it('binds name{n} of the selected row in one patch and turns the field into a text field', () => {
        const { container, patches } = mount(THREE_ROWS);
        expect(control(container, 'header').dataset.type).toBe('html');

        click(bindingSwitch(container, 'header') as HTMLButtonElement);

        expect(patches).toEqual([{ bindings: ['title', 'header2', 'header1'] }]);
        expect(mode(container, 'header')).toBe('bound');
        expect(bindingSwitch(container, 'header')?.getAttribute('aria-label')).toBe('t:state_editor_binding_off');
        expect(bindingSwitch(container, 'header')?.querySelector('svg[data-testid="LinkOffIcon"]')).not.toBeNull();
        expect(control(container, 'header')).toMatchObject({ value: 'Plain' });
        expect(control(container, 'header').dataset).toMatchObject({ editor: 'header1', type: 'text' });
    });

    it('converts a widget saved with ignoreCommonStates on, like every Zustandseditor action', () => {
        // The legacy widget shows its OID's three states (Zustandsmenge); the toggle writes that count.
        const { container, patches } = mount({ ...THREE_ROWS, values_count: 0, ignoreCommonStates: true });

        click(bindingSwitch(container, 'header') as HTMLButtonElement);

        expect(patches).toEqual([
            { bindings: ['title', 'header2', 'header1'], values_count: 3, ignoreCommonStates: false },
        ]);
    });

    it('unbinds it again and gives the field its own control back; the value stays', () => {
        const { container, patches } = mount(THREE_ROWS);
        selectRow(container, 2);
        expect(mode(container, 'header')).toBe('bound');
        expect(control(container, 'header').dataset.type).toBe('text');

        click(bindingSwitch(container, 'header') as HTMLButtonElement);

        expect(patches).toEqual([{ bindings: ['title'] }]);
        expect(mode(container, 'header')).toBe('plain');
        expect(control(container, 'header').dataset).toMatchObject({ editor: 'header2', type: 'html' });
        expect(control(container, 'header').value).toBe('{a.0.label}');
    });

    it('binds a colour field as a text field too', () => {
        const { container } = mount(THREE_ROWS);

        click(bindingSwitch(container, 'iconColor') as HTMLButtonElement);

        expect(control(container, 'iconColor').dataset).toMatchObject({ editor: 'iconColor1', type: 'text' });
    });

    it('follows the row selection without writing', () => {
        const { container, patches } = mount(THREE_ROWS);
        expect(mode(container, 'header')).toBe('plain');

        selectRow(container, 2);
        expect(mode(container, 'header')).toBe('bound');
        selectRow(container, 3);
        expect(mode(container, 'header')).toBe('plain');
        expect(patches).toEqual([]);
    });
});

describe('a binding moves with its row', () => {
    /** Per row: how the header field is shown and which key it edits. */
    const headers = (container: HTMLElement, count: number): string[] =>
        Array.from({ length: count }, (_, i) => {
            selectRow(container, i + 1);
            return `${control(container, 'header').dataset.editor}:${mode(container, 'header')}`;
        });

    it('clone: the copy is bound like its source, every other row keeps its own state', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'clone_row'));

        expect(headers(container, 4)).toEqual(['header1:plain', 'header2:bound', 'header3:bound', 'header4:plain']);
    });

    it('delete: the rows behind close up with their bindings', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 1);

        click(tool(container, 'delete_row'));

        expect(headers(container, 2)).toEqual(['header1:bound', 'header2:plain']);
        expect(control(container, 'header').value).toBe('');
        selectRow(container, 1);
        expect(control(container, 'header').value).toBe('{a.0.label}');
    });

    it('move: the binding goes along to the new place', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 2);

        click(tool(container, 'move_row_down'));

        expect(headers(container, 3)).toEqual(['header1:plain', 'header2:plain', 'header3:bound']);
    });

    it('a binding set in the editor moves too', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 3);
        click(bindingSwitch(container, 'footer') as HTMLButtonElement);

        click(tool(container, 'move_row_up'));

        selectRow(container, 2);
        expect(mode(container, 'footer')).toBe('bound');
        selectRow(container, 3);
        expect(mode(container, 'footer')).toBe('plain');
    });
});

describe('the binding switch with several widgets selected', () => {
    const SECOND: WidgetData = { ...THREE_ROWS, header2: 'Other' };

    it('reads the bindings of the stored widgets and writes one patch for all', () => {
        const { container, patches } = mount({ w1: THREE_ROWS, w2: { ...SECOND, bindings: ['header2', 'title'] } });
        selectRow(container, 2);
        expect(mode(container, 'header')).toBe('bound');

        click(bindingSwitch(container, 'header') as HTMLButtonElement);

        expect(patches).toEqual([{ bindings: ['title'] }]);
        expect(mode(container, 'header')).toBe('plain');
    });

    it('is locked while the widgets bind different fields — one patch would overwrite them', () => {
        const { container, patches } = mount({ w1: THREE_ROWS, w2: { ...SECOND, bindings: ['header2'] } });
        selectRow(container, 2);
        const button = bindingSwitch(container, 'header') as HTMLButtonElement;

        expect(mode(container, 'header')).toBe('bound');
        expect(button.disabled).toBe(true);
        click(button);
        expect(patches).toEqual([]);
    });

    it('shows a field bound in one of the widgets as bound, as vis-2 does', () => {
        const { container } = mount({ w1: { ...THREE_ROWS, bindings: [] }, w2: THREE_ROWS });
        selectRow(container, 2);

        expect(mode(container, 'header')).toBe('bound');
        expect(control(container, 'header').dataset.type).toBe('text');
    });
});
