/**
 * The Raumthermostat at the widget seam: an instance of its class rendered from raw data with a fake
 * socket and values carrying `.q` and `.lc`, as vis-2 renders it (Naht 2 of the AI integration).
 *
 * @module HeatingThermostatCollectionWidget/HeatingThermostatCollectionWidget.test
 * @remarks
 * The frame publishes the injected Content-Box (the scene's test seam), so the content shows in
 * the arrangement of that box. Objects come from the heating test devices behind the socket: a
 * Bedeutung stored with its id only reads its object the way the pick would store it (Lese-Naht).
 * Pinned here: the readings (Messwerte) — „–“ for a bound Bedeutung without a value or not yet
 * reported, nothing for an unbound one, the valve mean, the window through its Wertezuordnung,
 * the battery with its unit and its low mark — and that reading writes nothing.
 */
import { act, type ReactElement } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Theme } from '@iobroker/gui-components';

import { InjectedContentBoxContext, type ContentBox } from '../hooks/useContentBox';
import { installInertResizeObserver } from '../lib/testing/collectionScene';
import { heatingTestDevices, NEUTRAL_DEVICE, ANLAGE_WTH2, valuesOf } from '../lib/testing/heatingTestDevices';
import { createTestRoot } from '../lib/testing/testRoots';
import HeatingThermostatCollectionWidget from './HeatingThermostatCollectionWidget';

// The host base class with what renderWidgetBody reaches (as in lib/aiRawDataRender.test). Its `t`
// reads `this` like the host's and returns the key.
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string): string {
            void this.getI18nPrefix;
            return key;
        }

        props: unknown;

        state: unknown = {};

        constructor(props: unknown) {
            this.props = props;
        }

        // eslint-disable-next-line class-methods-use-this
        renderWidgetBody(): null {
            return null;
        }

        // eslint-disable-next-line class-methods-use-this
        isSignalVisible(): boolean {
            return false;
        }

        // eslint-disable-next-line class-methods-use-this
        setState(): void {}
    };
});

installInertResizeObserver();

/** Where the test devices live in these tests. */
const PREFIX = 'hz.';

/** The test devices: objects behind the socket, states as the host's values. */
const DEVICES = heatingTestDevices(PREFIX);

/** The id of a neutral-device state bound to a Bedeutung. */
const neutral = (meaning: string): string => `${PREFIX}${NEUTRAL_DEVICE.binding[meaning]}`;

/** The start size's Content-Box: Voll, arrangement Groß (420 × 700 px outer). */
const START_BOX: ContentBox = { width: 396, height: 636 };

/** The fake socket: objects from the test devices; every write is recorded. */
const socket = {
    getState: (): Promise<null> => Promise.resolve(null),
    subscribeState: (): Promise<void> => Promise.resolve(),
    unsubscribeState: (): void => undefined,
    getObject: vi.fn((id: string): Promise<unknown> => Promise.resolve(DEVICES.objects[id])),
    setState: vi.fn((): Promise<void> => Promise.resolve()),
    setObject: vi.fn((): Promise<void> => Promise.resolve()),
};

type WidgetInstance = {
    state: unknown;
    renderWidgetBody: (props: unknown) => ReactElement;
};

const unmounts: (() => void)[] = [];

afterEach(() => {
    unmounts.splice(0).forEach(unmount => unmount());
    socket.setState.mockClear();
    socket.setObject.mockClear();
});

/**
 * Mounts the Raumthermostat the way vis-2 renders it, inside a frame that publishes `box`.
 *
 * @param data - The stored data (`rxData` and `props.widget.data`).
 * @param values - The subscribed state values (`<id>.val/.ack/.ts/.lc/.q`).
 * @param box - The Content-Box the frame publishes.
 * @returns The container.
 */
async function mount(
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    box: ContentBox = START_BOX,
): Promise<HTMLElement> {
    const instance = new (HeatingThermostatCollectionWidget as unknown as new (props: unknown) => WidgetInstance)({
        context: { socket, themeType: 'light', lang: 'en', theme: Theme('light') },
    });
    instance.state = { rxData: data, rxStyle: {}, values, editMode: false };
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);
    await act(() => {
        root.render(
            <InjectedContentBoxContext.Provider value={box}>
                {instance.renderWidgetBody({
                    id: 'preview-heating-thermostat',
                    widget: { data, style: {} },
                    style: {},
                    refService: { current: null },
                })}
            </InjectedContentBoxContext.Provider>,
        );
        return Promise.resolve();
    });
    // A macrotask: the object reads of the Bedeutungen stored without their object resolve.
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 0)));
    unmounts.push(() => {
        act(() => root.unmount());
        container.remove();
    });
    return container;
}

/** The neutral device bound with ids only, as the assistant writes it. */
const neutralData = (extra: Record<string, unknown> = {}): Record<string, unknown> => ({
    soll: neutral('soll'),
    ist: neutral('ist'),
    luftfeuchte: neutral('luftfeuchte'),
    fenster: neutral('fenster'),
    batterieSchwach: neutral('batterieSchwach'),
    batteriestand: neutral('batteriestand'),
    ventilAnzahl: 1,
    ventil1: neutral('ventil'),
    ...extra,
});

/** The values of every test device as the host spreads them. */
const allValues = (): Record<string, unknown> => valuesOf(DEVICES.states);

/** The values without the given ids (a state that has no value). */
const withoutValues = (values: Record<string, unknown>, ...ids: string[]): Record<string, unknown> =>
    Object.fromEntries(Object.entries(values).filter(([key]) => !ids.some(id => key.startsWith(`${id}.`))));

/** The text of one reading in the readings bar; `null` when the reading is not there. */
const reading = (container: HTMLElement, meaning: string): string | null =>
    container.querySelector(`[data-heating-reading="${meaning}"] [data-heating-reading-value]`)?.textContent ?? null;

describe('HeatingThermostatCollectionWidget: readings', () => {
    it('shows no humidity reading while `luftfeuchte` is unbound, and „–“ for a bound one without a value', async () => {
        const unbound = await mount(neutralData({ luftfeuchte: '' }), allValues());
        expect(unbound.querySelector('[data-heating-reading="luftfeuchte"]')).toBeNull();
        expect(reading(unbound, 'batteriestand')).not.toBeNull();

        const noValue = await mount(neutralData(), withoutValues(allValues(), neutral('luftfeuchte')));
        expect(reading(noValue, 'luftfeuchte')).toBe('–');
    });
});

describe('HeatingThermostatCollectionWidget: not yet reported', () => {
    /** A state of the installation's HmIP-WTH-2 („Thermostat Bad“, still on its placeholder). */
    const wth2 = (name: string): string => `${PREFIX}${ANLAGE_WTH2.id}.1.${name}`;
    const SETPOINT = wth2('SET_POINT_TEMPERATURE');
    const ACTUAL = wth2('ACTUAL_TEMPERATURE');
    const data = { soll: SETPOINT, ist: ACTUAL };

    /** The set-point and the actual temperature the content shows. */
    const shown = (container: HTMLElement): (string | null | undefined)[] => [
        container.querySelector('[data-heating-setpoint]')?.textContent,
        container.querySelector('[data-heating-actual-value]')?.textContent,
    ];

    it('shows „–“ for set-point and actual temperature on the placeholder (q = 0x20, 4.5 °C and 0 °C)', async () => {
        expect([DEVICES.states[SETPOINT].q, DEVICES.states[SETPOINT].val, DEVICES.states[ACTUAL].val]).toEqual([
            0x20, 4.5, 0,
        ]);

        expect(shown(await mount(data, allValues()))).toEqual(['–', '–']);
    });

    it('shows the numbers of the same values once reported (q = 0)', async () => {
        const values = { ...allValues(), [`${SETPOINT}.q`]: 0, [`${ACTUAL}.q`]: 0 };

        expect(shown(await mount(data, values))).toEqual(['4.5 °C', '0.0 °C']);
    });

    it('shows „–“ for the host placeholder of a state without a value (val "null", q = 0)', async () => {
        const values = {
            ...allValues(),
            [`${SETPOINT}.val`]: 'null',
            [`${SETPOINT}.q`]: 0,
            [`${ACTUAL}.val`]: 'null',
            [`${ACTUAL}.q`]: 0,
        };

        expect(shown(await mount(data, values))).toEqual(['–', '–']);
    });

    it('shows „–“ for a reading that has not reported yet', async () => {
        const values = {
            ...allValues(),
            [`${neutral('luftfeuchte')}.q`]: 0x20,
            [`${neutral('batteriestand')}.q`]: 0x20,
        };
        const container = await mount(neutralData(), values);

        expect([reading(container, 'luftfeuchte'), reading(container, 'batteriestand')]).toEqual(['–', '–']);
    });
});

describe('HeatingThermostatCollectionWidget: valve', () => {
    const VALVES = ['hz.valve.a', 'hz.valve.b', 'hz.valve.c'];
    /** Reported levels 20 and 40, the third valve without a value. */
    const levels = (): Record<string, unknown> => ({
        ...allValues(),
        [`${VALVES[0]}.val`]: 20,
        [`${VALVES[0]}.q`]: 0,
        [`${VALVES[1]}.val`]: 40,
        [`${VALVES[1]}.q`]: 0,
    });
    const valves = (count: number): Record<string, unknown> => ({
        ventilAnzahl: count,
        ...Object.fromEntries(VALVES.slice(0, count).map((id, index) => [`ventil${index + 1}`, id])),
    });

    it('shows the mean of the bound valves with a value: 20 % and 40 % make 30 %', async () => {
        expect(reading(await mount(neutralData(valves(2)), levels()), 'ventil')).toBe('30 %');
    });

    it('leaves out a bound valve without a value or not yet reported', async () => {
        expect(reading(await mount(neutralData(valves(3)), levels()), 'ventil')).toBe('30 %');
        expect(
            reading(
                await mount(neutralData(valves(3)), {
                    ...levels(),
                    [`${VALVES[2]}.val`]: 90,
                    [`${VALVES[2]}.q`]: 0x20,
                }),
                'ventil',
            ),
        ).toBe('30 %');
    });

    it('shows „–“ while no bound valve has a value', async () => {
        expect(reading(await mount(neutralData(valves(3)), allValues()), 'ventil')).toBe('–');
    });

    it('leaves the valve out without a bound valve', async () => {
        const container = await mount(neutralData({ ventilAnzahl: 0, ventil1: undefined }), levels());

        expect(container.querySelector('[data-heating-reading="ventil"]')).toBeNull();
        expect(reading(container, 'luftfeuchte')).not.toBeNull();
    });
});

describe('HeatingThermostatCollectionWidget: window', () => {
    /** The window as it reports `value`. */
    const windowAt = async (value: unknown, extra: Record<string, unknown> = {}): Promise<HTMLElement> =>
        mount(neutralData({ fensterZuordnung: { zu: [0], offen: [1, 2] }, ...extra }), {
            ...allValues(),
            [`${neutral('fenster')}.val`]: value,
        });

    /** The window reading's text and tone. */
    const shownWindow = (container: HTMLElement): [string | null, string | null] => {
        const value = container.querySelector('[data-heating-reading="fenster"] [data-heating-reading-value]');
        return [value?.textContent ?? null, value?.getAttribute('data-tone') ?? null];
    };

    it('shows „Open“ toned `kühl` for 2 through the stored mapping {zu: [0], offen: [1, 2]}', async () => {
        expect(shownWindow(await windowAt(2))).toEqual(['heating_neutral_offen', 'kühl']);
        expect(shownWindow(await windowAt(1))).toEqual(['heating_neutral_offen', 'kühl']);
    });

    it('shows „Closed“ without a tone for 0', async () => {
        expect(shownWindow(await windowAt(0))).toEqual(['heating_neutral_zu', null]);
    });

    it('shows the commonStates label of a value without a mapping, without a neutral state', async () => {
        // The neutral device's window object lists 0 CLOSED, 1 TILTED, 2 OPEN; the read seam stores it.
        expect(shownWindow(await windowAt(1, { fensterZuordnung: { zu: [0], offen: [2] } }))).toEqual(['TILTED', null]);
    });

    it('shows „–“ for the host placeholder and for a window not yet reported, never the raw value', async () => {
        expect(shownWindow(await windowAt('null'))).toEqual(['–', null]);
        const notReported = await mount(neutralData({ fensterZuordnung: { zu: [0], offen: [1, 2] } }), {
            ...allValues(),
            [`${neutral('fenster')}.val`]: 2,
            [`${neutral('fenster')}.q`]: 0x20,
        });
        expect(shownWindow(notReported)).toEqual(['–', null]);
    });

    it('shows the raw value of a value without a mapping and without a commonStates label', async () => {
        expect(shownWindow(await windowAt(7))).toEqual(['7', null]);
    });

    it('shows the commonStates label of a value whose own object carries no mapping (no read-seam derivation)', async () => {
        const fensterObject = {
            _id: neutral('fenster'),
            type: 'number',
            commonStates: { 0: 'CLOSED', 1: 'TILTED', 2: 'OPEN' },
        };
        expect(shownWindow(await windowAt(2, { fensterZuordnung: undefined, fensterObject }))).toEqual(['OPEN', null]);
    });

    it('reads a missing mapping through the read seam like a pick of the window would store it', async () => {
        expect(shownWindow(await windowAt(2, { fensterZuordnung: undefined }))).toEqual([
            'heating_neutral_offen',
            'kühl',
        ]);
    });
});

describe('HeatingThermostatCollectionWidget: battery', () => {
    it('shows the level with the unit of its object', async () => {
        expect(reading(await mount(neutralData(), allValues()), 'batteriestand')).toBe('80 %');
    });

    it('marks the level as a Hinweis while `batterieSchwach` reads `schwach`', async () => {
        const mapping = { batterieSchwachZuordnung: { schwach: [true], ok: [false] } };
        const tone = (container: HTMLElement): string | null | undefined =>
            container
                .querySelector('[data-heating-reading="batteriestand"] [data-heating-reading-value]')
                ?.getAttribute('data-tone');

        expect(tone(await mount(neutralData(mapping), allValues()))).toBeNull();
        expect(
            tone(await mount(neutralData(mapping), { ...allValues(), [`${neutral('batterieSchwach')}.val`]: true })),
        ).toBe('hinweis');
    });
});

describe('HeatingThermostatCollectionWidget: reading writes nothing', () => {
    it('renders the readings without writing a state or an object, and leaves the data as it is', async () => {
        const data = neutralData({ fensterZuordnung: { zu: [0], offen: [1, 2] } });
        const before = structuredClone(data);

        await mount(Object.freeze(data), allValues());

        expect(socket.setState).not.toHaveBeenCalled();
        expect(socket.setObject).not.toHaveBeenCalled();
        expect(data).toEqual(before);
    });
});

describe('HeatingThermostatCollectionWidget: where the readings stand per arrangement', () => {
    /** Where the actual temperature stands: the arrangement's place, or the tile. */
    const actualPlace = (container: HTMLElement): string | null => {
        const actual = container.querySelector('[data-heating-actual]');
        if (actual?.closest('[data-heating-tile]')) {
            return 'tile';
        }
        return actual?.closest('[data-heating-slot]')?.getAttribute('data-heating-slot') ?? null;
    };

    it.each([
        ['Groß', START_BOX, 'dial', true],
        ['Mittel', { width: 296, height: 400 }, 'dial', false],
        ['Quer', { width: 500, height: 150 }, 'hint', false],
        ['Kompakt', { width: 280, height: 180 }, 'hint', false],
        ['the tile with its footer', { width: 156, height: 66 }, 'tile', false],
    ])('%s: actual temperature in its place, the readings bar only in Groß', async (_case, box, place, bar) => {
        const container = await mount(neutralData(), allValues(), box);

        expect(actualPlace(container)).toBe(place);
        expect(container.querySelector('[data-heating-actual-value]')?.textContent).toBe('20.5 °C');
        expect(container.querySelector('[data-heating-slot="readings"]') !== null).toBe(bar);
    });

    it('leaves the actual temperature out while `ist` is unbound, and the bar while nothing of it is bound', async () => {
        const container = await mount(
            {
                soll: neutral('soll'),
            },
            allValues(),
        );

        expect(container.querySelector('[data-heating-actual]')).toBeNull();
        expect(container.querySelector('[data-heating-slot="readings"]')).toBeNull();
        expect(container.querySelector('[data-heating-setpoint]')?.textContent).toBe('21.0 °C');
    });

    it('shows the readings bar in the design order: humidity, valve, window, battery', async () => {
        const container = await mount(neutralData(), allValues());

        expect(
            [...container.querySelectorAll('[data-heating-reading]')].map(element =>
                element.getAttribute('data-heating-reading'),
            ),
        ).toEqual(['luftfeuchte', 'ventil', 'fenster', 'batteriestand']);
        expect(reading(container, 'luftfeuchte')).toBe('48 %');
        expect(reading(container, 'ventil')).toBe('35 %');
    });
});
