/**
 * Zustandseditor detail fields (T4, Ticket 03): the fields of the selected Zustandszeile as native
 * vis-2 attribute rows (Bauform A).
 *
 * @module components/StateEditor/StateDetailField.test
 * @remarks
 * Rendered through the vis-2 custom-field API as the attribute panel does: every field of the
 * group built by `stateEditorGroup` becomes a table row — native label cell, then the value cell
 * with `field.component(field, data, onDataChange, props)` — and a field whose `hidden` predicate
 * holds (vis-2 passes no index outside an indexed group) is left out. `props.Editor` is a fake of
 * vis-2's `Editor` (fork `Attributes/Widget/WidgetField.tsx`): a fresh function on every panel
 * render, returning the stable field component that reads `data[field.name]` and writes
 * `{ [field.name]: value }` into the selected widgets. Observed: the DOM and the patches.
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

// The colour fields and dividers come back through the fake Editor / as rows; their own
// rendering is covered by their tests.
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
import type { StateEditorParams } from '../../lib/stateEditorConfig';
import { stateEditorGroup } from '../../lib/stateEditorFields';
import { resetStateRowSelection } from './stateRowSelection';

const hostTheme = Object.assign(createTheme(), { name: 'light' });

/** What the fake reads of the field vis-2's Editor gets. */
type EditorField = { name: string; type?: string; fallbackFields?: string[] };
type FakeEditorProps = { field: EditorField; disabled?: boolean };

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
    /** The data vis-2 hands the fields: the widget's data, under multi-selection its `commonValues`. */
    data: WidgetData;
    onDataChange: (patch: WidgetData) => void;
    /** The stored widgets under multi-selection (`context.views`); one widget `w1` without it. */
    widgets?: Record<string, WidgetData>;
};

/**
 * vis-2's `commonValues` of several widgets (`Attributes/Widget/index.tsx` recalculateFields):
 * the first widget's keys, every key that differs by `!==` in another widget set to `null`.
 */
const commonValuesOf = (widgets: Record<string, WidgetData>): WidgetData => {
    const [first, ...others] = Object.values(widgets);
    const common: WidgetData = { ...first };
    for (const other of others) {
        for (const key of Object.keys(common)) {
            if (common[key] !== other[key]) {
                common[key] = null;
            }
        }
    }
    return common;
};

/**
 * The fake vis-2 field: reads `data[field.name]`, keeps its own typing state (like WidgetField's
 * `cachedValue`) and writes one-key patches.
 */
function FakeWidgetField({
    field,
    disabled,
    data,
    onDataChange,
}: FakeEditorProps & { data: WidgetData; onDataChange: (patch: WidgetData) => void }): React.JSX.Element {
    const stored = data[field.name] as string | number | boolean | undefined;
    const [typed, setTyped] = useState<string | null>(null);
    return (
        <input
            data-editor={field.name}
            data-fallback={(field.fallbackFields ?? []).join(',')}
            data-type={field.type}
            disabled={!!disabled}
            value={typed ?? (stored === undefined ? '' : String(stored))}
            onChange={event => {
                setTyped(event.target.value);
                onDataChange({ [field.name]: event.target.value });
            }}
        />
    );
}

/** The group body as vis-2 renders it (`renderGroupBody` / `renderFieldRow`). */
function Panel({ fields, data, onDataChange, widgets }: PanelProps): React.JSX.Element {
    // A fresh Editor function on every render, exactly like vis-2's WidgetField.
    const Editor = (editorProps: FakeEditorProps): React.JSX.Element => (
        <FakeWidgetField
            {...editorProps}
            data={data}
            onDataChange={onDataChange}
        />
    );
    const ids = widgets ? Object.keys(widgets) : ['w1'];
    const views = widgets ? { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } } : {};
    const props = {
        context: { theme: hostTheme, socket: {}, views, projectName: 'main', instance: 0, adapterName: 'vis-2' },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        Editor,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    // vis-2 hides a field only when its rule holds for every selected widget (`checkFunction`).
    const stored = widgets ? Object.values(widgets) : [data];

    return (
        <table>
            <tbody>
                {fields.map((field, index) =>
                    typeof field.hidden === 'function' &&
                    stored.every(d => (field.hidden as (d: WidgetData, i?: number) => boolean)(d, undefined)) ? null : (
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

/** A State widget whose OID has three states; row 2 has an icon and its own colours. */
const THREE_ROWS: WidgetData = {
    oid: 'a.0.mode',
    oidObject: { type: 'number', commonStates: { 0: 'Off', 1: 'Eco', 2: 'Comfort' } },
    ignoreCommonStates: false,
    values_count: 3,
    value1: 0,
    alias1: 'Off',
    value2: 1,
    alias2: 'Eco',
    header2: 'Eco mode',
    iconSmall2: 'data:image/svg+xml;base64,AAAA',
    value3: 2,
    alias3: 'Comfort',
};

/** The labels of the per-state rows in today's order („Wert [n]"), dividers as ''. */
const DETAIL_LABELS = [
    '',
    'icon',
    'small_icon',
    'icon_size',
    'enable_icon_color_mask',
    'icon_color',
    'icon_x_offset',
    'icon_y_offset',
    '',
    'header_text',
    'header_size',
    '',
    'alias',
    'value',
    'value_size',
    '',
    'footer_text',
    'footer_size',
    '',
    'text_color',
    '',
    'background',
    '',
    'frame_background',
];

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
    params: StateEditorParams = {},
): { container: HTMLElement; onDataChange: ReturnType<typeof vi.fn>; panel: PanelProps } => {
    const onDataChange = vi.fn();
    const panel: PanelProps = { fields: stateEditorGroup(params).fields as FieldLike[], data, onDataChange };
    handle = renderComponent(Panel, panel);
    return { container: handle.container, onDataChange, panel };
};

/** Mounts the group with several selected widgets: the fields get vis-2's `commonValues`. */
const mountSelected = (
    widgets: Record<string, WidgetData>,
    params: StateEditorParams = {},
): { container: HTMLElement; onDataChange: ReturnType<typeof vi.fn> } => {
    const onDataChange = vi.fn();
    const panel: PanelProps = {
        fields: stateEditorGroup(params).fields as FieldLike[],
        data: commonValuesOf(widgets),
        onDataChange,
        widgets,
    };
    handle = renderComponent(Panel, panel);
    return { container: handle.container, onDataChange };
};

/** The rows below the Kopfzeile: the detail of the selected row. */
const detailRows = (container: HTMLElement): HTMLElement[] => {
    const rows = [...container.querySelectorAll<HTMLElement>('tbody > tr')];
    const header = rows.findIndex(row => row.querySelector('[data-state-row-header]'));
    return header < 0 ? [] : rows.slice(header + 1);
};
const detailLabels = (container: HTMLElement): string[] =>
    detailRows(container).map(row => row.querySelector('td')?.textContent ?? '');
const editors = (container: HTMLElement): HTMLInputElement[] => [
    ...container.querySelectorAll<HTMLInputElement>('input[data-editor]'),
];
const editor = (container: HTMLElement, name: string): HTMLInputElement => {
    const element = container.querySelector<HTMLInputElement>(`input[data-editor="${name}"]`);
    if (!element) {
        throw new Error(`no editor for ${name}`);
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
/** Types into a controlled input the way React notices it. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        setter?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

describe('the detail of the selected row — native attribute rows', () => {
    it('shows every per-state field as a labelled row, in the order and sections of „Wert [n]"', () => {
        const { container } = mount(THREE_ROWS);

        expect(detailLabels(container)).toEqual(DETAIL_LABELS);
    });

    it('edits the keys of the selected row through the vis-2 Editor', () => {
        const { container } = mount(THREE_ROWS);

        expect(editors(container).map(input => input.dataset.editor)).toEqual([
            'icon1',
            'iconSmall1',
            'iconSize1',
            'enableIconColorMask1',
            'iconColor1',
            'iconXOffset1',
            'iconYOffset1',
            'header1',
            'headerSize1',
            'alias1',
            'value1',
            'valueSize1',
            'footer1',
            'footerSize1',
            'textColor1',
            'background1',
            'frameBackground1',
        ]);
        expect(editor(container, 'alias1').value).toBe('Off');
    });

    it('a row switch shows the values of the new row and writes nothing', () => {
        const { container, onDataChange } = mount(THREE_ROWS);

        selectRow(container, 2);

        expect(editors(container).every(input => input.dataset.editor?.endsWith('2'))).toBe(true);
        expect(editor(container, 'alias2').value).toBe('Eco');
        expect(editor(container, 'header2').value).toBe('Eco mode');
        expect(onDataChange).not.toHaveBeenCalled();
    });

    it('a field change writes name{n} of the selected row', () => {
        const { container, onDataChange } = mount(THREE_ROWS);
        selectRow(container, 3);

        type(editor(container, 'header3'), 'Comfy');

        expect(onDataChange).toHaveBeenCalledTimes(1);
        expect(onDataChange).toHaveBeenCalledWith({ header3: 'Comfy' });
    });
});

describe('hiding on widget level works as in „Wert [n]"', () => {
    it('without icon, header or footer their sections are gone', () => {
        const { container } = mount({ ...THREE_ROWS, noIcon: true, noHeader: true, noFooter: true });

        // Icon and small icon (and the mask, the colour) stay — they never had the noIcon rule.
        expect(detailLabels(container)).toEqual([
            'icon',
            'small_icon',
            'enable_icon_color_mask',
            'icon_color',
            '',
            'alias',
            'value',
            'value_size',
            '',
            'text_color',
            '',
            'background',
            '',
            'frame_background',
        ]);
    });

    it('a boolean OID hides the value field', () => {
        const { container } = mount({
            oid: 'a.0.on',
            oidObject: { type: 'boolean' },
            ignoreCommonStates: false,
            values_count: 2,
            value1: true,
            value2: false,
        });

        expect(detailLabels(container)).not.toContain('value');
        expect(detailLabels(container)).toContain('alias');
    });

    it('shows no detail without an OID object or without rows', () => {
        const withoutOid = mount({ oid: '', values_count: 0 });
        expect(withoutOid.container.querySelectorAll('[data-state-detail]')).toHaveLength(0);
        expect([...withoutOid.container.querySelectorAll('tbody > tr')]).toHaveLength(1);
        handle?.unmount();

        const withoutRows = mount({ oid: 'a.0.level', oidObject: { type: 'number' }, values_count: 0 });
        expect(withoutRows.container.querySelectorAll('[data-state-detail]')).toHaveLength(0);
        expect(editors(withoutRows.container)).toHaveLength(0);
    });
});

describe('colour fields inherit as in „Wert [n]" (ADR-0004)', () => {
    it('render their own definition under the indexed name, inheriting the base field', () => {
        const { container } = mount(THREE_ROWS);
        selectRow(container, 2);

        expect(editor(container, 'iconColor2').dataset).toMatchObject({ type: 'custom', fallback: 'iconColor' });
        expect(editor(container, 'textColor2').dataset).toMatchObject({ type: 'custom', fallback: 'textColor' });
        expect(editor(container, 'background2').dataset.fallback).toBe('background');
        expect(editor(container, 'frameBackground2').dataset.fallback).toBe('frameBackground');
    });

    it('inherit the Marker-Ebene first on the slider', () => {
        const { container } = mount(THREE_ROWS, { markerLayer: true });

        expect(editor(container, 'iconColor1').dataset.fallback).toBe('markerIconColor,iconColor');
        expect(editor(container, 'textColor1').dataset.fallback).toBe('markerTextColor,textColor');
        expect(editor(container, 'background1').dataset.fallback).toBe('background');
    });
});

describe('„Icon-Farbmaske" is always shown, locked by the old rule', () => {
    const maskRow = (container: HTMLElement): HTMLElement =>
        detailRows(container).find(
            row => row.querySelector('td')?.textContent === 'enable_icon_color_mask',
        ) as HTMLElement;

    it('is locked on a row with neither URL icon nor colour, label greyed like a disabled vis-2 row', () => {
        const { container } = mount(THREE_ROWS);

        expect(editor(container, 'enableIconColorMask1').disabled).toBe(true);
        expect(maskRow(container).querySelector('td')?.style.opacity).toBe('0.8');
    });

    it.each<[string, WidgetData]>([
        ['a URL icon', { icon2: '/vis-2/img/lamp.png' }],
        ['a URL small icon', { iconSmall2: 'https://example.com/lamp.svg' }],
        ['an own icon colour', { iconColor2: '#f00' }],
        ['a widget icon colour', { iconColor: '#f00' }],
        ['the widget mask on', { enableIconColorMask: true }],
    ])('is usable on a row with %s', (_case, extra) => {
        const { container } = mount({ ...THREE_ROWS, ...extra });
        selectRow(container, 2);

        expect(editor(container, 'enableIconColorMask2').disabled).toBe(false);
        expect(maskRow(container).querySelector('td')?.style.opacity).toBe('');
    });

    it('follows the selected row without hiding it', () => {
        const { container } = mount({ ...THREE_ROWS, iconColor3: '#0f0' });

        expect(editor(container, 'enableIconColorMask1').disabled).toBe(true);
        selectRow(container, 3);
        expect(editor(container, 'enableIconColorMask3').disabled).toBe(false);
        expect(maskRow(container).querySelector('td')?.style.opacity).toBe('');
    });

    it.each<[string, WidgetData, WidgetData, boolean]>([
        ['both widgets have their own URL icon', { icon2: '/a.png' }, { icon2: '/b.png' }, false],
        ['one widget has a URL icon (vis-2 hides only when all would)', { icon2: '/a.png' }, {}, false],
        ['neither widget has a URL icon or a colour', {}, {}, true],
    ])('under multi-selection reads the stored widgets: %s', (_case, first, second, locked) => {
        const { container } = mountSelected({ w1: { ...THREE_ROWS, ...first }, w2: { ...THREE_ROWS, ...second } });
        selectRow(container, 2);

        expect(editor(container, 'enableIconColorMask2').disabled).toBe(locked);
    });

    it('locks nothing else', () => {
        const { container } = mount(THREE_ROWS);

        expect(
            editors(container)
                .filter(input => input.disabled)
                .map(input => input.dataset.editor),
        ).toEqual(['enableIconColorMask1']);
    });
});

describe('the vis-2 field keeps its state', () => {
    it('across a vis-2 re-render with a fresh Editor function (focus, typing)', () => {
        const { container, panel } = mount(THREE_ROWS);
        const before = editor(container, 'header1');
        type(before, 'Typ');

        handle?.rerender({ ...panel, data: { ...THREE_ROWS, header1: 'Typ' } });

        expect(editor(container, 'header1')).toBe(before);
    });

    it('but starts fresh on a row switch', () => {
        const { container } = mount(THREE_ROWS);
        // Typed text the vis-2 field still caches (not yet in the data).
        type(editor(container, 'footer1'), 'pending');

        selectRow(container, 3);

        expect(editor(container, 'footer3').value).toBe('');
    });
});

describe('the image preview of the native label cell', () => {
    it('shows the icon of the selected row beside its label, the project path resolved', () => {
        const { container } = mount({ ...THREE_ROWS, icon2: '_PRJ_NAME/lamp.png' });
        const iconLabel = (): HTMLElement =>
            detailRows(container)
                .find(row => row.querySelector('td span')?.textContent === 'icon')
                ?.querySelector('td') as HTMLElement;

        expect(iconLabel().querySelector('[data-state-detail-preview]')).toBeNull();
        selectRow(container, 2);
        expect(iconLabel().querySelector('img')?.getAttribute('src')).toBe('../vis-2.0/main/lamp.png');
    });
});

describe('multi-selection — fields whose values differ are marked „unterschiedlich"', () => {
    const differing = (container: HTMLElement): string[] =>
        [...container.querySelectorAll<HTMLElement>('[data-state-detail]')]
            .filter(hull => hull.querySelector('[data-state-detail-different]'))
            .map(hull => hull.dataset.stateDetail ?? '');

    it('marks exactly the fields of the selected row that differ, with vis-2s word', () => {
        const { container } = mountSelected({
            w1: { ...THREE_ROWS, iconColor2: '#f00' },
            w2: { ...THREE_ROWS, header2: 'Saving', iconColor2: '#0f0' },
        });

        expect(differing(container)).toEqual([]);
        selectRow(container, 2);

        expect(differing(container)).toEqual(['iconColor', 'header']);
        expect(container.querySelector('[data-state-detail-different]')?.textContent).toBe('t:state_editor_different');
    });

    it('marks a field set in one widget only — vis-2s merged data misses a key the first widget lacks', () => {
        const { container } = mountSelected({ w1: { ...THREE_ROWS }, w2: { ...THREE_ROWS, footer1: 'x' } });

        expect(differing(container)).toEqual(['footer']);
    });

    it('marks nothing with one selected widget', () => {
        const { container } = mount({ ...THREE_ROWS, footer1: 'x' });

        expect(differing(container)).toEqual([]);
    });
});
