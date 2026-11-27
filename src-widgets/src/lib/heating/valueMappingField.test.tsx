/**
 * The Wertezuordnung in the attribute panel: the rows below a bound Bedeutung's id field
 * (ADR-0120 „Panel“ and Nachtrag „Spec Stufe 1 schreiben“).
 *
 * @module lib/heating/valueMappingField.test
 * @remarks
 * Editor seam: rendered through the vis-2 custom-field API as the attribute panel does
 * (`Vis2GroupBody`, the pattern of the Zustandseditor and valve-list tests). The test plays vis-2's
 * custom-field branch: a patch goes into every selected widget, `null` deletes the key, a missing
 * key keeps the old value. Observed: the patches the panel reports, the stored widgets and the DOM.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // An own `t`: its `t:` prefix tells a translated text from a literal one.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

import { act, useEffect, useState } from 'react';
import type React from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

import { renderComponent, type RenderComponentHandle } from '../testing/testHarness';
import { vis2CommonValues, Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from '../testing/vis2GroupBody';
import { ANLAGE_WTH2, HEATING_TEST_PREFIX, heatingTestDevices, NEUTRAL_DEVICE } from '../testing/heatingTestDevices';
import { heatingBindingFields } from './bindingFields';
import { ROOM_THERMOSTAT } from './meaningCatalog';

const MODE = 'hm-rpc.1.000A1BE9A6B4B1.1.SET_POINT_MODE';
const WINDOW = 'zigbee.0.window.state';
const WINDOW_SENSOR = 'hm-rpc.1.0001.1.STATE';
const REMAINING = 'hm-rpc.1.000A1BE9A6B4B1.1.BOOST_TIME';
const HOLIDAY_END = 'hm-rpc.1.000A1BE9A6B4B1.1.PARTY_TIME_END';

/** The HmIP mode as its pick stores it: a number with three states. */
const MODE_OBJECT = {
    _id: MODE,
    type: 'number',
    commonStates: { 0: 'AUTO-MODE', 1: 'MANU-MODE', 2: 'PARTY-MODE' },
};

/** The stored widgets after the last patch. */
let stored: Record<string, WidgetData>;
/** Every patch the panel reported, in order. */
let patches: WidgetData[];

type HostProps = { widgets: Record<string, WidgetData>; entry?: number; socket?: unknown };

/** The attribute panel around the binding fields, with vis-2's patch handling. */
function Host({ widgets: initial, entry, socket = {} }: HostProps): React.JSX.Element {
    const [widgets, setWidgets] = useState(initial);
    useEffect(() => {
        stored = widgets;
    });
    const ids = Object.keys(widgets);
    const data = ids.length > 1 ? vis2CommonValues(widgets) : widgets[ids[0]];
    const onDataChange = (patch: WidgetData): void => {
        patches.push(patch);
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
    };
    const props = {
        context: {
            theme: vis2HostTheme,
            socket,
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        // The id fields are vis-2's own; the test leaves them out of the picture.
        Editor: () => null,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    return (
        <Vis2GroupBody
            fields={heatingBindingFields(ROOM_THERMOSTAT, entry) as Vis2PanelField[]}
            data={data}
            stored={Object.values(widgets)}
            onDataChange={onDataChange}
            props={props}
        />
    );
}

let handle: RenderComponentHandle<HostProps> | undefined;

const mount = (widgets: Record<string, WidgetData>, entry?: number, socket?: unknown): HTMLElement => {
    patches = [];
    const mounted = renderComponent<HostProps>(Host, { widgets, entry, socket });
    handle = mounted;
    return mounted.container;
};

afterEach(() => {
    handle?.unmount();
    handle = undefined;
});

/** The panel row of a Bedeutung's Wertezuordnung, `null` while the panel leaves it out. */
const mappingRow = (container: HTMLElement, field: string): HTMLElement | null =>
    container.querySelector<HTMLElement>(`[data-value-mapping="${field}"]`);

/** The neutral keys the Wertezuordnung of a Bedeutung shows rows for, in order. */
const neutralRows = (container: HTMLElement, field: string): string[] =>
    [...(mappingRow(container, field)?.querySelectorAll<HTMLElement>('[data-neutral-key]') ?? [])].map(
        row => row.dataset.neutralKey ?? '',
    );

/** One neutral key's row. */
const neutralRow = (container: HTMLElement, field: string, key: string): HTMLElement => {
    const row = mappingRow(container, field)?.querySelector<HTMLElement>(`[data-neutral-key="${key}"]`);
    if (!row) {
        throw new Error(`no row ${field}.${key}`);
    }
    return row;
};

/** The chips of a row: its device values in stored order. */
const chipsOf = (row: HTMLElement): string[] =>
    [...row.querySelectorAll<HTMLElement>('.MuiChip-label')].map(chip => chip.textContent ?? '');

/** The input of a row. */
const inputOf = (row: HTMLElement): HTMLInputElement => {
    const input = row.querySelector<HTMLInputElement>('input');
    if (!input) {
        throw new Error('no input in the row');
    }
    return input;
};

/** Opens a row's list the way a pointer does and returns the offered options' texts. */
const openOptions = (row: HTMLElement): string[] => {
    act(() => {
        inputOf(row).focus();
        inputOf(row).dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
    });
    return [...document.body.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]')].map(
        option => option.textContent ?? '',
    );
};

/** Opens a row's list and picks the option with that text. */
const choose = (row: HTMLElement, text: string): void => {
    openOptions(row);
    const option = [...document.body.querySelectorAll<HTMLElement>('[role="listbox"] [role="option"]')].find(
        one => one.textContent === text,
    );
    if (!option) {
        throw new Error(`no option ${text}`);
    }
    act(() => {
        option.click();
    });
};

/** Types a value into a row and commits it with Enter, like a user would. */
const type = (row: HTMLElement, text: string): void => {
    const input = inputOf(row);
    act(() => {
        input.focus();
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, text);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    });
};

describe('Wertezuordnung in the panel — when it shows', () => {
    it('shows no rows and no InfoBox while the Bedeutung is unbound', () => {
        const container = mount({ w1: { betriebsart: '' } });

        expect(mappingRow(container, 'betriebsart')).toBeNull();
        expect(container.querySelector('[data-info-box]')).toBeNull();
    });

    it('shows the InfoBox for a bound Bedeutung without a Wertezuordnung', () => {
        const container = mount({ w1: { betriebsart: MODE, betriebsartObject: MODE_OBJECT } });

        expect(mappingRow(container, 'betriebsart')?.querySelector('[data-info-box]')?.textContent).toBe(
            't:heating_zuordnung_fehlt',
        );
    });

    it('shows no InfoBox once the Bedeutung has a Wertezuordnung', () => {
        const container = mount({
            w1: { betriebsart: MODE, betriebsartObject: MODE_OBJECT, betriebsartZuordnung: { auto: [0] } },
        });

        expect(mappingRow(container, 'betriebsart')?.querySelector('[data-info-box]')).toBeNull();
    });

    it('shows no mapping row for a Bedeutung without fixed values (soll, ist)', () => {
        const container = mount({ w1: { soll: 'a.b', ist: 'c.d' } });

        expect(mappingRow(container, 'soll')).toBeNull();
        expect(mappingRow(container, 'ist')).toBeNull();
    });
});

describe('Wertezuordnung in the panel — a value list from commonStates', () => {
    const BOUND = { betriebsart: MODE, betriebsartObject: MODE_OBJECT };

    it('offers one row per neutral key, each with „not available“ first and the three device values', () => {
        const container = mount({ w1: BOUND });

        expect(neutralRows(container, 'betriebsart')).toEqual(['auto', 'manuell', 'aus', 'boost', 'urlaub']);
        expect(openOptions(neutralRow(container, 'betriebsart', 'aus'))).toEqual([
            't:heating_zuordnung_nicht_vorhanden',
            'AUTO-MODE',
            'MANU-MODE',
            'PARTY-MODE',
        ]);
    });

    it('stores a chosen device value in its type (a number stays a number), the whole mapping in one patch', () => {
        const container = mount({ w1: BOUND });

        choose(neutralRow(container, 'betriebsart', 'urlaub'), 'PARTY-MODE');

        expect(patches).toEqual([{ betriebsartZuordnung: { urlaub: [2] } }]);
        expect(chipsOf(neutralRow(container, 'betriebsart', 'urlaub'))).toEqual(['PARTY-MODE']);
    });

    it('keeps the other neutral keys and reports the whole mapping', () => {
        const container = mount({ w1: { ...BOUND, betriebsartZuordnung: { auto: [0], manuell: [1] } } });

        choose(neutralRow(container, 'betriebsart', 'aus'), 't:heating_zuordnung_nicht_vorhanden');

        expect(patches).toEqual([{ betriebsartZuordnung: { auto: [0], manuell: [1], aus: [] } }]);
        expect(chipsOf(neutralRow(container, 'betriebsart', 'aus'))).toEqual(['t:heating_zuordnung_nicht_vorhanden']);
    });

    it('shows a stored mapping: device values by their labels, „not available“ for an empty list', () => {
        const container = mount({
            w1: { ...BOUND, betriebsartZuordnung: { auto: [0], manuell: [1], aus: [], urlaub: [2] } },
        });

        expect(chipsOf(neutralRow(container, 'betriebsart', 'auto'))).toEqual(['AUTO-MODE']);
        expect(chipsOf(neutralRow(container, 'betriebsart', 'aus'))).toEqual(['t:heating_zuordnung_nicht_vorhanden']);
        expect(chipsOf(neutralRow(container, 'betriebsart', 'boost'))).toEqual([]);
    });

    it('choosing a device value replaces „not available“', () => {
        const container = mount({ w1: { ...BOUND, betriebsartZuordnung: { aus: [] } } });

        choose(neutralRow(container, 'betriebsart', 'aus'), 'MANU-MODE');

        expect(stored.w1.betriebsartZuordnung).toEqual({ aus: [1] });
    });

    it('leaves other Bedeutungen untouched', () => {
        const container = mount({
            w1: { ...BOUND, fenster: WINDOW, fensterZuordnung: { zu: ['closed'], offen: ['open'] } },
        });

        choose(neutralRow(container, 'betriebsart', 'auto'), 'AUTO-MODE');

        expect(patches).toEqual([{ betriebsartZuordnung: { auto: [0] } }]);
        expect(stored.w1.fensterZuordnung).toEqual({ zu: ['closed'], offen: ['open'] });
    });
});

describe('Wertezuordnung in the panel — free input', () => {
    const WINDOW_TEXT = { fenster: WINDOW, fensterObject: { _id: WINDOW, type: 'string' } };

    it('takes free input without a value list, several device values per row', () => {
        const container = mount({ w1: WINDOW_TEXT });

        type(neutralRow(container, 'fenster', 'offen'), 'open');
        type(neutralRow(container, 'fenster', 'offen'), 'tilted');

        expect(patches.at(-1)).toEqual({ fensterZuordnung: { offen: ['open', 'tilted'] } });
        expect(chipsOf(neutralRow(container, 'fenster', 'offen'))).toEqual(['open', 'tilted']);
    });

    it('takes a typed device value also when the field is left without Enter', () => {
        const container = mount({ w1: WINDOW_TEXT });
        const input = inputOf(neutralRow(container, 'fenster', 'zu'));

        act(() => {
            input.focus();
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, 'closed');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        act(() => {
            input.blur();
        });

        expect(stored.w1.fensterZuordnung).toEqual({ zu: ['closed'] });
    });

    it('offers only „not available“ without a value list', () => {
        const container = mount({ w1: WINDOW_TEXT });

        expect(openOptions(neutralRow(container, 'fenster', 'zu'))).toEqual(['t:heating_zuordnung_nicht_vorhanden']);
    });

    it('stores typed numbers of a number data point as numbers and drops what is no number', () => {
        const container = mount({
            w1: { betriebsart: 'x.mode', betriebsartObject: { _id: 'x.mode', type: 'number' } },
        });

        type(neutralRow(container, 'betriebsart', 'auto'), '3');
        type(neutralRow(container, 'betriebsart', 'auto'), 'abc');

        expect(stored.w1.betriebsartZuordnung).toEqual({ auto: [3] });
    });

    it('takes free input for a bound Bedeutung without its object (inserted by the assistant)', () => {
        const container = mount({ w1: { fenster: WINDOW } });

        type(neutralRow(container, 'fenster', 'zu'), 'closed');

        expect(stored.w1.fensterZuordnung).toEqual({ zu: ['closed'] });
    });
});

describe('Wertezuordnung in the panel — n:1 with a three-valued window', () => {
    const WINDOW_STATES = {
        fenster: WINDOW,
        fensterObject: { _id: WINDOW, type: 'number', commonStates: { 0: 'CLOSED', 1: 'TILTED', 2: 'OPEN' } },
    };

    it('stores „open“ = OPEN + TILTED, the first value chosen stays the write value', () => {
        const container = mount({ w1: { ...WINDOW_STATES, fensterZuordnung: { zu: [0] } } });

        choose(neutralRow(container, 'fenster', 'offen'), 'OPEN');
        choose(neutralRow(container, 'fenster', 'offen'), 'TILTED');

        expect(stored.w1.fensterZuordnung).toEqual({ zu: [0], offen: [2, 1] });
        expect(chipsOf(neutralRow(container, 'fenster', 'offen'))).toEqual(['OPEN', 'TILTED']);
    });

    it('deleting the last device value of a row takes the neutral key out; an empty mapping deletes the key', () => {
        const container = mount({ w1: { ...WINDOW_STATES, fensterZuordnung: { offen: [2] } } });
        const row = neutralRow(container, 'fenster', 'offen');

        act(() => {
            row.querySelector<HTMLElement>('.MuiChip-deleteIcon')?.dispatchEvent(
                new MouseEvent('click', { bubbles: true }),
            );
        });

        expect(patches).toEqual([{ fensterZuordnung: null }]);
        expect('fensterZuordnung' in stored.w1).toBe(false);
    });
});

describe('Wertezuordnung in the panel — boolean data points', () => {
    /** The invert switch of a Bedeutung. */
    const invertSwitch = (container: HTMLElement, field: string): HTMLInputElement | null =>
        mappingRow(container, field)?.querySelector<HTMLInputElement>('[data-invert-value] input') ?? null;

    it.each([
        ['fenster', WINDOW_SENSOR],
        ['erreichbarkeit', 'hm-rpc.1.0001.0.UNREACH'],
        ['batterieSchwach', 'hm-rpc.1.0001.0.LOW_BAT'],
    ])('shows only „invert value“ for a boolean %s', (field, id) => {
        const container = mount({ w1: { [field]: id, [`${field}Object`]: { _id: id, type: 'boolean' } } });

        expect(invertSwitch(container, field)).not.toBeNull();
        expect(neutralRows(container, field)).toEqual([]);
    });

    it('inverting stores the swapped mapping of both neutral keys', () => {
        const container = mount({
            w1: {
                fenster: WINDOW_SENSOR,
                fensterObject: { _id: WINDOW_SENSOR, type: 'boolean' },
                fensterZuordnung: { zu: [false], offen: [true] },
            },
        });
        expect(invertSwitch(container, 'fenster')?.checked).toBe(false);

        act(() => {
            invertSwitch(container, 'fenster')?.click();
        });

        expect(patches).toEqual([{ fensterZuordnung: { zu: [true], offen: [false] } }]);
        expect(invertSwitch(container, 'fenster')?.checked).toBe(true);
    });

    it('switching back stores the plain mapping: true reads as the active key', () => {
        const container = mount({
            w1: {
                erreichbarkeit: 'x.unreach',
                erreichbarkeitObject: { _id: 'x.unreach', type: 'boolean' },
                erreichbarkeitZuordnung: { erreichbar: [false], unerreichbar: [true] },
            },
        });
        expect(invertSwitch(container, 'erreichbarkeit')?.checked).toBe(true);

        act(() => {
            invertSwitch(container, 'erreichbarkeit')?.click();
        });

        expect(stored.w1.erreichbarkeitZuordnung).toEqual({ erreichbar: [true], unerreichbar: [false] });
    });

    it('shows the InfoBox next to the switch while a boolean Bedeutung has no mapping', () => {
        const container = mount({
            w1: { batterieSchwach: 'x.lowbat', batterieSchwachObject: { _id: 'x.lowbat', type: 'boolean' } },
        });

        expect(invertSwitch(container, 'batterieSchwach')?.checked).toBe(false);
        expect(mappingRow(container, 'batterieSchwach')?.querySelector('[data-info-box]')).not.toBeNull();
    });
});

describe('Wertezuordnung in the panel — unit and time format', () => {
    /** The addition row of a Bedeutung. */
    const additionRow = (container: HTMLElement, field: string): HTMLElement => {
        const row = mappingRow(container, field)?.querySelector<HTMLElement>('[data-mapping-addition]');
        if (!row) {
            throw new Error(`no addition row for ${field}`);
        }
        return row;
    };

    it('shows one row of unit or time format for boostRestzeit', () => {
        const container = mount({
            w1: { boostRestzeit: REMAINING, boostRestzeitObject: { _id: REMAINING, type: 'number' } },
        });

        expect(neutralRows(container, 'boostRestzeit')).toEqual([]);
        expect(openOptions(additionRow(container, 'boostRestzeit'))).toEqual([
            't:heating_einheit_s',
            't:heating_einheit_min',
            't:heating_zeitformat_timestamp',
            't:heating_zeitformat_iso',
        ]);
    });

    it('stores the unit, and a time format in its place', () => {
        const container = mount({
            w1: { boostRestzeit: REMAINING, boostRestzeitObject: { _id: REMAINING, type: 'number' } },
        });

        choose(additionRow(container, 'boostRestzeit'), 't:heating_einheit_min');
        expect(stored.w1.boostRestzeitZuordnung).toEqual({ einheit: 'min' });

        choose(additionRow(container, 'boostRestzeit'), 't:heating_zeitformat_timestamp');
        expect(patches.at(-1)).toEqual({ boostRestzeitZuordnung: { zeitformat: 'timestamp' } });
    });

    it('shows one row of time format for urlaubEnde, a pattern as free input', () => {
        const container = mount({
            w1: { urlaubEnde: HOLIDAY_END, urlaubEndeObject: { _id: HOLIDAY_END, type: 'string' } },
        });

        expect(openOptions(additionRow(container, 'urlaubEnde'))).toEqual([
            't:heating_zeitformat_timestamp',
            't:heating_zeitformat_iso',
        ]);
        type(additionRow(container, 'urlaubEnde'), 'YYYY_MM_DD HH:mm');

        expect(stored.w1.urlaubEndeZuordnung).toEqual({ zeitformat: 'YYYY_MM_DD HH:mm' });
    });

    it('shows a stored time format pattern', () => {
        const container = mount({
            w1: {
                urlaubEnde: HOLIDAY_END,
                urlaubEndeObject: { _id: HOLIDAY_END, type: 'string' },
                urlaubEndeZuordnung: { zeitformat: 'YYYY_MM_DD HH:mm' },
            },
        });

        expect(inputOf(additionRow(container, 'urlaubEnde')).value).toBe('YYYY_MM_DD HH:mm');
        expect(mappingRow(container, 'urlaubEnde')?.querySelector('[data-info-box]')).toBeNull();
    });
});

describe('Wertezuordnung in the panel — numbered entry and multi-selection', () => {
    it('follows the entry number of the binding block (betriebsart3Zuordnung)', () => {
        const container = mount({ w1: { betriebsart3: MODE, betriebsart3Object: MODE_OBJECT } }, 3);

        choose(neutralRow(container, 'betriebsart3', 'auto'), 'AUTO-MODE');

        expect(patches).toEqual([{ betriebsart3Zuordnung: { auto: [0] } }]);
    });

    it('reads the first selected widget under a multi-selection and writes its whole mapping into all', () => {
        const container = mount({
            w1: { betriebsart: MODE, betriebsartObject: MODE_OBJECT, betriebsartZuordnung: { auto: [0] } },
            w2: { betriebsart: MODE, betriebsartObject: MODE_OBJECT, betriebsartZuordnung: { manuell: [1] } },
        });
        expect(chipsOf(neutralRow(container, 'betriebsart', 'auto'))).toEqual(['AUTO-MODE']);

        choose(neutralRow(container, 'betriebsart', 'aus'), 't:heating_zuordnung_nicht_vorhanden');

        expect(patches).toEqual([{ betriebsartZuordnung: { auto: [0], aus: [] } }]);
        expect(stored.w2.betriebsartZuordnung).toEqual({ auto: [0], aus: [] });
    });
});

describe('Wertezuordnung in the panel — the effective value of a mapping the pick derives', () => {
    const { objects } = heatingTestDevices();
    const socket = { getObject: (id: string): Promise<unknown> => Promise.resolve(objects[id]) };
    const NEUTRAL_WINDOW = `${HEATING_TEST_PREFIX}${NEUTRAL_DEVICE.binding.fenster}`;
    const WTH2_MODE = `${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.1.SET_POINT_MODE`;

    /** Mounts the panel over the test devices and lets the object reads land. */
    const mountRead = async (widgets: Record<string, WidgetData>): Promise<HTMLElement> => {
        const container = mount(widgets, undefined, socket);
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });
        return container;
    };

    it('shows the mapping a widget without its object reads (inserted by the assistant), without the InfoBox', async () => {
        const container = await mountRead({ w1: { fenster: NEUTRAL_WINDOW } });

        expect(chipsOf(neutralRow(container, 'fenster', 'zu'))).toEqual(['CLOSED']);
        expect(chipsOf(neutralRow(container, 'fenster', 'offen'))).toEqual(['OPEN', 'TILTED']);
        expect(mappingRow(container, 'fenster')?.querySelector('[data-info-box]')).toBeNull();
        expect(patches).toEqual([]);
        expect(stored.w1).toEqual({ fenster: NEUTRAL_WINDOW });
    });

    it('stores the whole effective mapping on the first change', async () => {
        const container = await mountRead({ w1: { betriebsart: WTH2_MODE } });
        expect(chipsOf(neutralRow(container, 'betriebsart', 'auto'))).toEqual(['AUTO-MODE']);

        choose(neutralRow(container, 'betriebsart', 'aus'), 't:heating_zuordnung_nicht_vorhanden');

        expect(patches).toEqual([{ betriebsartZuordnung: { auto: [0], manuell: [1], urlaub: [2], aus: [] } }]);
    });

    it('shows what the single pick stored, without the InfoBox', async () => {
        const field = heatingBindingFields(ROOM_THERMOSTAT).find(one => one.name === 'fenster') as unknown as {
            onChange: (f: unknown, d: WidgetData, c: (d: WidgetData) => void, s: unknown) => Promise<void>;
        };
        let picked: WidgetData = {};
        vi.useFakeTimers();
        try {
            await field.onChange(field, { fenster: NEUTRAL_WINDOW }, d => (picked = d), socket);
            vi.runAllTimers();
        } finally {
            vi.useRealTimers();
        }

        const container = mount({ w1: picked });

        expect(chipsOf(neutralRow(container, 'fenster', 'offen'))).toEqual(['OPEN', 'TILTED']);
        expect(mappingRow(container, 'fenster')?.querySelector('[data-info-box]')).toBeNull();
    });

    it('keeps the InfoBox for a widget with its own object but no mapping: the widget reads none either', async () => {
        const container = await mountRead({
            w1: {
                fenster: NEUTRAL_WINDOW,
                fensterObject: { _id: NEUTRAL_WINDOW, type: 'number', commonStates: { 0: 'CLOSED', 2: 'OPEN' } },
            },
        });

        expect(mappingRow(container, 'fenster')?.querySelector('[data-info-box]')).not.toBeNull();
    });
});
