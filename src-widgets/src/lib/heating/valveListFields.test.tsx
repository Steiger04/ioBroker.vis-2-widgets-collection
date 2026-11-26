/**
 * The valve list of the heating binding block: a small counted list `ventil1…ventilN` with
 * `ventil{m}Object` and the counter `ventilAnzahl` (ADR-0119, ADR-0121).
 *
 * @module lib/heating/valveListFields.test
 * @remarks
 * Rendered through the vis-2 custom-field API as the attribute panel does (`Vis2GroupBody`). The
 * test plays vis-2's custom-field branch: a patch goes into every selected widget, `null` deletes
 * the key; `props.Editor` is a fake of vis-2's `Editor` that renders the field it gets and keeps
 * it for the test. The object database is faked; a valve's pick runs the field's own `onChange`
 * (editor seam). Observed: the stored widgets, the DOM, what a pick hands to `changeData`.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

import { act, useEffect, useState } from 'react';
import type React from 'react';

import type { Connection } from '@iobroker/gui-components';
import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    RxWidgetInfoFieldChangeHandler,
    WidgetData,
} from '@iobroker/types-vis-2';

import { oidPickFieldsOf } from '../pickedWidgetData';
import { renderComponent, type RenderComponentHandle } from '../testing/testHarness';
import { vis2CommonValues, Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from '../testing/vis2GroupBody';
import { heatingValveListFields } from './valveListFields';

const VALVE_1 = 'hm-rpc.1.0031A0C9A4F0D2.2.LEVEL';
const VALVE_2 = 'hm-rpc.1.0031A0C9A4F0D2.3.LEVEL';
const VALVE_3 = 'hm-rpc.1.0031A0C9A4F0D2.4.LEVEL';

/** A floor-heating actuator's valve level as the object database holds it. */
const valveObject = (id: string): unknown => ({
    _id: id,
    type: 'state',
    common: { name: 'Level', type: 'number', role: 'level', read: true, write: true, min: 0, max: 1, unit: '%' },
});

const fakeSocket = {
    getObject: (id: string): Promise<unknown> => Promise.resolve(valveObject(id)),
} as unknown as Connection;

/** What the fake Editor got, by field name: the fields vis-2 would render natively. */
let editorFields: Record<string, RxWidgetInfoAttributesField>;

type HostProps = { widgets: Record<string, WidgetData> };

/** The stored widgets after the last patch. */
let stored: Record<string, WidgetData>;

/** The attribute panel around the valve list, with vis-2's patch handling. */
function Host({ widgets: initial }: HostProps): React.JSX.Element {
    const [widgets, setWidgets] = useState(initial);
    useEffect(() => {
        stored = widgets;
    });
    const ids = Object.keys(widgets);
    const data = ids.length > 1 ? vis2CommonValues(widgets) : widgets[ids[0]];
    const onDataChange = (patch: WidgetData): void =>
        setWidgets(previous =>
            Object.fromEntries(
                Object.entries(previous).map(([id, one]) => {
                    const next = { ...one };
                    for (const [key, value] of Object.entries(patch)) {
                        if (value === null) {
                            delete next[key];
                        } else {
                            next[key] = value;
                        }
                    }
                    return [id, next];
                }),
            ),
        );
    const Editor = ({ field }: { field: RxWidgetInfoAttributesField & { name: string } }): React.JSX.Element => {
        editorFields[field.name] = field;
        return (
            <input
                data-editor={field.name}
                readOnly
                value={String(data[field.name] ?? '')}
            />
        );
    };
    const props = {
        context: {
            theme: vis2HostTheme,
            socket: fakeSocket,
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        Editor,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    return (
        <Vis2GroupBody
            fields={heatingValveListFields() as Vis2PanelField[]}
            data={data}
            stored={Object.values(widgets)}
            onDataChange={onDataChange}
            props={props}
        />
    );
}

let handle: RenderComponentHandle<HostProps> | undefined;

const mount = (widgets: Record<string, WidgetData>): HTMLElement => {
    handle = renderComponent(Host, { widgets });
    return handle.container;
};

/** The ids of the valve rows the panel shows, in order. */
const shownValves = (container: HTMLElement): string[] =>
    [...container.querySelectorAll<HTMLInputElement>('[data-editor]')].map(input => input.dataset.editor ?? '');

const click = (element: Element | null): void => {
    if (!element) {
        throw new Error('no such button');
    }
    act(() => {
        (element as HTMLElement).click();
    });
};

const addButton = (container: HTMLElement): HTMLButtonElement | null =>
    container.querySelector<HTMLButtonElement>('button[aria-label="t:heating_ventil_hinzufuegen"]');

const removeButtons = (container: HTMLElement): HTMLButtonElement[] => [
    ...container.querySelectorAll<HTMLButtonElement>('button[aria-label="t:heating_ventil_entfernen"]'),
];

/** Three picked valves, each with its object. */
const THREE_VALVES: WidgetData = {
    ventilAnzahl: 3,
    ventil1: VALVE_1,
    ventil1Object: { _id: VALVE_1 },
    ventil2: VALVE_2,
    ventil2Object: { _id: VALVE_2 },
    ventil3: VALVE_3,
    ventil3Object: { _id: VALVE_3 },
};

beforeEach(() => {
    editorFields = {};
});

afterEach(() => {
    handle?.unmount();
    handle = undefined;
    vi.useRealTimers();
});

describe('valve list — declaration', () => {
    it('declares the base field ventil once, hidden, as an id field the host numbers by its digit rule', () => {
        const base = heatingValveListFields().find(field => field.name === 'ventil') as Vis2PanelField;

        expect((base as { type?: string }).type).toBe('id');
        expect(typeof base.hidden === 'function' && (base.hidden as () => boolean)()).toBe(true);
        expect(oidPickFieldsOf([{ name: 'valves', fields: heatingValveListFields() }])).toEqual([
            { name: 'ventil', allowedTypes: ['number'], inventRange: false },
        ]);
    });

    it('declares no zone reference', () => {
        expect(heatingValveListFields().map(field => field.name)).toEqual(['ventil', 'ventilAnzahl']);
    });
});

describe('valve list — add and remove', () => {
    it('shows one id field per valve, up to the counter', () => {
        const container = mount({ w1: THREE_VALVES });

        expect(shownValves(container)).toEqual(['ventil1', 'ventil2', 'ventil3']);
    });

    it('adds an empty valve and counts it', () => {
        const container = mount({ w1: { ventilAnzahl: 1, ventil1: VALVE_1, ventil1Object: { _id: VALVE_1 } } });

        click(addButton(container));

        expect(stored.w1).toEqual({ ventilAnzahl: 2, ventil1: VALVE_1, ventil1Object: { _id: VALVE_1 } });
        expect(shownValves(container)).toEqual(['ventil1', 'ventil2']);
    });

    it('adds the first valve to a widget without a counter', () => {
        const container = mount({ w1: {} });

        click(addButton(container));

        expect(stored.w1).toEqual({ ventilAnzahl: 1 });
    });

    it('removes a valve, moving the later valves up with their objects', () => {
        const container = mount({ w1: THREE_VALVES });

        click(removeButtons(container)[0]);

        expect(stored.w1).toEqual({
            ventilAnzahl: 2,
            ventil1: VALVE_2,
            ventil1Object: { _id: VALVE_2 },
            ventil2: VALVE_3,
            ventil2Object: { _id: VALVE_3 },
        });
        expect(shownValves(container)).toEqual(['ventil1', 'ventil2']);
    });

    it('removes the last valve without leaving its object behind', () => {
        const container = mount({ w1: THREE_VALVES });

        click(removeButtons(container)[2]);

        expect(stored.w1).toEqual({
            ventilAnzahl: 2,
            ventil1: VALVE_1,
            ventil1Object: { _id: VALVE_1 },
            ventil2: VALVE_2,
            ventil2Object: { _id: VALVE_2 },
        });
    });

    it('locks add and remove while the selected widgets hold different valve lists', () => {
        const container = mount({ w1: THREE_VALVES, w2: { ventilAnzahl: 1, ventil1: VALVE_3 } });

        expect(addButton(container)?.disabled).toBe(true);
        expect(removeButtons(container).every(button => button.disabled)).toBe(true);
        expect(container.querySelector('[data-info-box]')?.textContent).toBe('t:heating_ventile_verschieden');
    });
});

describe('valve list — editor seam: the pick of a valve', () => {
    it('runs the shared pick for that valve alone: it stores ventil{m}Object, nothing else', async () => {
        vi.useFakeTimers();
        mount({ w1: THREE_VALVES });
        const field = editorFields.ventil2 as RxWidgetInfoAttributesField & {
            onChange: RxWidgetInfoFieldChangeHandler;
        };
        const other = 'hm-rpc.1.0031A0C9A4F0D2.7.LEVEL';
        let emitted: WidgetData | undefined;

        await field.onChange(
            field,
            { ...THREE_VALVES, ventil2: other },
            newData => {
                emitted = newData;
            },
            fakeSocket,
        );
        vi.runAllTimers();

        expect((field as { type?: string }).type).toBe('id');
        expect(emitted).toEqual({
            ...THREE_VALVES,
            ventil2: other,
            ventil2Object: expect.objectContaining({ _id: other, maxValue: 1 }),
        });
    });
});
