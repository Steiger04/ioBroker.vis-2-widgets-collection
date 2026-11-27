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
// reads `this` like the host's and returns the key, with its arguments in brackets.
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string, ...args: string[]): string {
            void this.getI18nPrefix;
            return args.length ? `${key}(${args.join('|')})` : key;
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

/** A mounted Raumthermostat: its container, and a new report of state values rendered into it. */
interface MountedWidget {
    container: HTMLElement;
    report: (values: Record<string, unknown>) => Promise<void>;
}

/**
 * Mounts the Raumthermostat the way vis-2 renders it, inside a frame that publishes `box`.
 *
 * @param data - The stored data (`rxData` and `props.widget.data`).
 * @param values - The subscribed state values (`<id>.val/.ack/.ts/.lc/.q`).
 * @param box - The Content-Box the frame publishes.
 * @param lang - The host language.
 * @returns The container and a way to render new state values, as the host does on a report.
 */
async function mountWidget(
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    box: ContentBox = START_BOX,
    lang = 'en',
): Promise<MountedWidget> {
    const instance = new (HeatingThermostatCollectionWidget as unknown as new (props: unknown) => WidgetInstance)({
        context: { socket, themeType: 'light', lang, theme: Theme('light') },
    });
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);
    const render = async (current: Record<string, unknown>): Promise<void> => {
        instance.state = { rxData: data, rxStyle: {}, values: current, editMode: false };
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
    };
    await render(values);
    unmounts.push(() => {
        act(() => root.unmount());
        container.remove();
    });
    return { container, report: render };
}

/**
 * Mounts the Raumthermostat the way vis-2 renders it, inside a frame that publishes `box`.
 *
 * @param data - The stored data (`rxData` and `props.widget.data`).
 * @param values - The subscribed state values (`<id>.val/.ack/.ts/.lc/.q`).
 * @param box - The Content-Box the frame publishes.
 * @param lang - The host language.
 * @returns The container.
 */
async function mount(
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    box: ContentBox = START_BOX,
    lang = 'en',
): Promise<HTMLElement> {
    return (await mountWidget(data, values, box, lang)).container;
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

    it('reads a missing mapping through the read seam also while the window holds its own object', async () => {
        // E.g. after the user removed the last chip of the picked window: its object stays.
        const fensterObject = {
            _id: neutral('fenster'),
            type: 'number',
            commonStates: { 0: 'CLOSED', 1: 'TILTED', 2: 'OPEN' },
        };
        expect(shownWindow(await windowAt(2, { fensterZuordnung: undefined, fensterObject }))).toEqual([
            'heating_neutral_offen',
            'kühl',
        ]);
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
        ['the tile with its footer', { width: 156, height: 80 }, 'tile', false],
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

/** The neutral device with every status Bedeutung bound, each with its stored Wertezuordnung. */
const statusData = (extra: Record<string, unknown> = {}): Record<string, unknown> =>
    neutralData({
        betriebsart: neutral('betriebsart'),
        boost: neutral('boost'),
        erreichbarkeit: neutral('erreichbarkeit'),
        betriebsartZuordnung: { auto: [0], manuell: [1], urlaub: [2], aus: [3], boost: [4] },
        boostZuordnung: { an: [true], aus: [false] },
        fensterZuordnung: { zu: [0], offen: [1, 2] },
        erreichbarkeitZuordnung: { erreichbar: [true], unerreichbar: [false] },
        batterieSchwachZuordnung: { schwach: [true], ok: [false] },
        ...extra,
    });

/** All values, with the given Bedeutungen of the neutral device reporting `val` (q = 0). */
const reporting = (reports: Record<string, unknown>, base = allValues()): Record<string, unknown> => ({
    ...base,
    ...Object.fromEntries(
        Object.entries(reports).flatMap(([meaning, val]) => [
            [`${neutral(meaning)}.val`, val],
            [`${neutral(meaning)}.q`, 0],
        ]),
    ),
});

/** The status chip of the Kartenkopf: its text and tone; `null` without a chip. */
const chipOf = (container: HTMLElement): [string, string | null] | null => {
    const chip = container.querySelector('[data-heating-region="head"] [data-heating-chip]');
    return chip ? [chip.textContent ?? '', chip.getAttribute('data-tone')] : null;
};

describe('HeatingThermostatCollectionWidget: status chip', () => {
    it.each([
        ['1 unreachable, also with the window open', { erreichbarkeit: false, fenster: 2 }, 'unerreichbar', 'störung'],
        ['2 window open, also with Boost', { fenster: 1, boost: true }, 'fenster', 'kühl'],
        ['3 off by the operating mode, also with Boost', { betriebsart: 3, boost: true }, 'aus', 'neutral'],
        ['4 Boost, also during Urlaub', { boost: true, betriebsart: 2 }, 'boost', 'heizt'],
        ['5 Urlaub by the operating mode', { betriebsart: 2 }, 'urlaub', 'neutral'],
        ['6 heating with a reported valve above 0', { ventil: 35 }, 'heizt', 'heizt'],
        ['6 holding with a reported valve at 0', { ventil: 0 }, 'haelt', 'neutral'],
    ])('%s', async (_case, reports, chip, tone) => {
        expect(chipOf(await mount(statusData(), reporting(reports)))).toEqual([`heating_status_${chip}`, tone]);
    });

    it('7 without a valve shows the operating mode, never „Heizt“ from set-point above actual', async () => {
        const data = statusData({ ventilAnzahl: 0, ventil1: undefined });
        // Set-point 21 °C above actual 20.5 °C.
        expect(chipOf(await mount(data, reporting({ betriebsart: 0 })))).toEqual(['heating_neutral_auto', 'neutral']);
        expect(chipOf(await mount(data, reporting({ betriebsart: 1 })))).toEqual([
            'heating_neutral_manuell',
            'neutral',
        ]);
    });

    it('7 shows the commonStates label of an operating mode without a mapping', async () => {
        const data = statusData({ ventilAnzahl: 0, ventil1: undefined, betriebsartZuordnung: { auto: [0] } });

        expect(chipOf(await mount(data, reporting({ betriebsart: 1 })))).toEqual(['MANUAL', 'neutral']);
    });

    it('treats a bound valve that has not reported like no valve: the operating mode, no „Hält“', async () => {
        const values = { ...reporting({ betriebsart: 0 }), [`${neutral('ventil')}.q`]: 0x20 };

        expect(chipOf(await mount(statusData(), values))).toEqual(['heating_neutral_auto', 'neutral']);
    });

    it('shows no chip without a valve and without an operating mode', async () => {
        expect(chipOf(await mount({ soll: neutral('soll'), ist: neutral('ist') }, allValues()))).toBeNull();
    });

    it('keeps the chip on a Hinweis: battery low changes nothing', async () => {
        expect(chipOf(await mount(statusData(), reporting({ batterieSchwach: true })))).toEqual([
            'heating_status_heizt',
            'heizt',
        ]);
    });
});

/** A state of the installation's HmIP-WTH-2. */
const wth2 = (name: string): string => `${PREFIX}${ANLAGE_WTH2.id}.${name}`;

/** All values, with the given ids reporting `val` (q = 0). */
const reportingIds = (reports: Record<string, unknown>, base = allValues()): Record<string, unknown> => ({
    ...base,
    ...Object.fromEntries(
        Object.entries(reports).flatMap(([id, val]) => [
            [`${id}.val`, val],
            [`${id}.q`, 0],
        ]),
    ),
});

describe('HeatingThermostatCollectionWidget: Aus', () => {
    /** The HmIP-WTH-2 as the hint table binds it: no `aus` in either operating-mode mapping. */
    const hmipData = {
        soll: wth2('1.SET_POINT_TEMPERATURE'),
        betriebsart: wth2('1.SET_POINT_MODE'),
        betriebsartZuordnung: { auto: [0], manuell: [1], urlaub: [2] },
        betriebsartSetzen: wth2('1.CONTROL_MODE'),
        betriebsartSetzenZuordnung: { auto: [0], manuell: [1] },
    };

    it('shows „Aus“ where Aus writes the real minimum and the reported set-point equals it (4.5 °C)', async () => {
        const values = reportingIds({ [wth2('1.SET_POINT_MODE')]: 0, [wth2('1.SET_POINT_TEMPERATURE')]: 4.5 });

        expect(chipOf(await mount(hmipData, values))).toEqual(['heating_status_aus', 'neutral']);
    });

    it('does not show „Aus“ for the same 4.5 °C not yet reported (q = 0x20)', async () => {
        const values = reportingIds({ [wth2('1.SET_POINT_MODE')]: 0 });
        expect(values[`${wth2('1.SET_POINT_TEMPERATURE')}.q`]).toBe(0x20);

        expect(chipOf(await mount(hmipData, values))).toEqual(['heating_neutral_auto', 'neutral']);
    });

    it('does not judge by the set-point where the operating mode maps `aus`: 5 °C (the minimum) is no „Aus“', async () => {
        const container = await mount(statusData(), reporting({ soll: 5, betriebsart: 0 }));

        expect(chipOf(container)).toEqual(['heating_status_heizt', 'heizt']);
    });
});

describe('HeatingThermostatCollectionWidget: Boost', () => {
    const REST = `${PREFIX}${NEUTRAL_DEVICE.baits.boostRestzeit}`;
    /** The boost reading's own value left unbound: the remaining time decides. */
    const restData = (mapping: Record<string, unknown>): Record<string, unknown> =>
        statusData({ boost: '', boostRestzeit: REST, boostRestzeitZuordnung: mapping });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('counts a remaining time of 10 min down locally until a new report comes', async () => {
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        vi.setSystemTime(new Date(2026, 10, 27, 12, 0, 0));
        const reportAt = (values: Record<string, unknown>): Record<string, unknown> => ({
            ...values,
            [`${REST}.ts`]: Date.now(),
            [`${REST}.lc`]: Date.now(),
        });
        const { container, report } = await mountWidget(
            restData({ einheit: 'min' }),
            reportAt(reportingIds({ [REST]: 10 })),
        );
        expect(chipOf(container)).toEqual(['heating_status_boost_rest(10:00)', 'heizt']);

        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(chipOf(container)).toEqual(['heating_status_boost_rest(9:59)', 'heizt']);
        act(() => {
            vi.advanceTimersByTime(60_000);
        });
        expect(chipOf(container)?.[0]).toBe('heating_status_boost_rest(8:59)');

        await report(reportAt(reportingIds({ [REST]: 5 })));
        expect(chipOf(container)?.[0]).toBe('heating_status_boost_rest(5:00)');
    });

    it('shows „Boost“ without a time for a remaining time without unit, and counts towards an end time', async () => {
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        vi.setSystemTime(new Date(2026, 10, 27, 12, 0, 0));

        expect(chipOf(await mount(restData({}), reportingIds({ [REST]: 3 })))).toEqual([
            'heating_status_boost',
            'heizt',
        ]);
        const end = await mount(
            restData({ zeitformat: 'YYYY_MM_DD HH:mm' }),
            reportingIds({ [REST]: '2026_11_27 12:05' }),
        );
        expect(chipOf(end)?.[0]).toBe('heating_status_boost_rest(5:00)');
    });

    it('shows no Boost for a remaining time of 0 and follows the operating mode `boost` without other sources', async () => {
        expect(chipOf(await mount(restData({ einheit: 'min' }), reportingIds({ [REST]: 0 })))?.[0]).toBe(
            'heating_status_heizt',
        );
        expect(chipOf(await mount(statusData({ boost: '' }), reporting({ betriebsart: 4 })))).toEqual([
            'heating_status_boost',
            'heizt',
        ]);
    });

    it('follows a reported Boost value over the operating mode: Boost off wins over mode `boost`', async () => {
        expect(chipOf(await mount(statusData(), reporting({ boost: false, betriebsart: 4 })))?.[0]).toBe(
            'heating_status_heizt',
        );
    });

    it('reads a BOOST_MODE-like data point with `common.read: false` as readable once it reports', async () => {
        const data = { soll: wth2('1.SET_POINT_TEMPERATURE'), boost: wth2('1.BOOST_MODE') };
        const mapping = { boostZuordnung: { an: [true], aus: [false] } };
        expect(DEVICES.objects[wth2('1.BOOST_MODE')].common.read).toBe(false);

        expect(chipOf(await mount({ ...data, ...mapping }, reportingIds({ [wth2('1.BOOST_MODE')]: true })))).toEqual([
            'heating_status_boost',
            'heizt',
        ]);
        // Still on the device's substitute value (q = 0x20): nothing is known.
        expect(chipOf(await mount({ ...data, ...mapping }, allValues()))).toBeNull();
    });
});

describe('HeatingThermostatCollectionWidget: hint line', () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    /** The hint line in its place: text, tone and whether it carries the triangle. */
    const hintOf = (container: HTMLElement): [string, string | null, boolean] | null => {
        const hint = container.querySelector('[data-heating-slot="hint"] [data-heating-hint]');
        return hint
            ? [hint.textContent ?? '', hint.getAttribute('data-tone'), !!hint.querySelector('[data-heating-hint-sign]')]
            : null;
    };

    it('reports a Störung with the time from `lc` of the reachability — today only the time — toned with the triangle', async () => {
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        vi.setSystemTime(new Date(2026, 10, 27, 15, 0, 0));
        const at = (lc: Date): Record<string, unknown> => ({
            ...reporting({ erreichbarkeit: false, batterieSchwach: true }),
            [`${neutral('erreichbarkeit')}.lc`]: lc.getTime(),
        });

        expect(hintOf(await mount(statusData(), at(new Date(2026, 10, 27, 13, 52)), START_BOX, 'de'))).toEqual([
            'heating_hinweis_keine_verbindung_seit(13:52)',
            'störung',
            true,
        ]);
        expect(hintOf(await mount(statusData(), at(new Date(2026, 10, 24, 13, 52)), START_BOX, 'de'))?.[0]).toBe(
            'heating_hinweis_keine_verbindung_seit(24.11., 13:52)',
        );
    });

    it('reports battery low as a Hinweis, toned with the triangle, and leaves the chip alone', async () => {
        const container = await mount(statusData(), reporting({ batterieSchwach: true, fenster: 1 }));

        expect(hintOf(container)).toEqual(['heating_hinweis_batterie_schwach', 'hinweis', true]);
        expect(chipOf(container)).toEqual(['heating_status_fenster', 'kühl']);
    });

    it.each([
        ['window open with the reported set-point', { fenster: 1, soll: 12 }, 'heating_hinweis_fenster_soll(12.0 °C)'],
        ['Aus', { betriebsart: 3 }, 'heating_hinweis_aus'],
        ['Boost', { boost: true }, 'heating_hinweis_boost'],
        ['Urlaub', { betriebsart: 2 }, 'heating_hinweis_urlaub'],
        ['manual', { betriebsart: 1 }, 'heating_hinweis_manuell'],
        ['auto', { betriebsart: 0 }, 'heating_hinweis_auto'],
    ])('stays quiet for %s: no tone, no triangle', async (_case, reports, text) => {
        expect(hintOf(await mount(statusData(), reporting(reports)))).toEqual([text, null, false]);
    });

    it('shows the end of an Urlaub in its time format, and none for the default „2000_01_01 00:00“', async () => {
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        vi.setSystemTime(new Date(2026, 10, 27, 12, 0, 0));
        const data = {
            soll: wth2('1.SET_POINT_TEMPERATURE'),
            urlaub: wth2('1.PARTY_MODE'),
            urlaubZuordnung: { an: [true], aus: [false] },
            urlaubEnde: wth2('1.PARTY_TIME_END'),
            urlaubEndeZuordnung: { zeitformat: 'YYYY_MM_DD HH:mm' },
        };
        const at = (end: string): Record<string, unknown> =>
            reportingIds({ [wth2('1.PARTY_MODE')]: true, [wth2('1.PARTY_TIME_END')]: end });

        const running = await mount(data, at('2026_11_29 18:00'), START_BOX, 'de');
        expect(hintOf(running)?.[0]).toBe('heating_hinweis_urlaub_bis(So., 29.11., 18:00)');
        expect(chipOf(running)).toEqual(['heating_status_urlaub', 'neutral']);
        expect(hintOf(await mount(data, at('2000_01_01 00:00'), START_BOX, 'de'))?.[0]).toBe('heating_hinweis_urlaub');
    });

    it.each([
        ['Mittel', { width: 296, height: 400 }],
        ['Quer', { width: 500, height: 150 }],
        ['Kompakt', { width: 280, height: 180 }],
    ])(
        '%s: a Meldung takes the hint place; without one Mittel shows none and Einfach the actual temperature',
        async (_case, box) => {
            const quiet = await mount(statusData(), reporting({ betriebsart: 1 }), box);
            expect(hintOf(quiet)).toBeNull();
            expect(quiet.querySelector('[data-heating-slot="hint"] [data-heating-actual]') !== null).toBe(
                _case !== 'Mittel',
            );

            const low = await mount(statusData(), reporting({ batterieSchwach: true }), box);
            expect(hintOf(low)).toEqual(['heating_hinweis_batterie_schwach', 'hinweis', true]);
            expect(low.querySelector('[data-heating-slot="hint"] [data-heating-actual]')).toBeNull();
        },
    );

    it('the tile footer shows a Meldung instead of the actual temperature', async () => {
        const box = { width: 156, height: 80 };
        const footer = (container: HTMLElement): Element | null =>
            container.querySelector(
                '[data-heating-tile] [data-heating-hint], [data-heating-tile] [data-heating-actual]',
            );

        expect(footer(await mount(statusData(), reporting({}), box))?.hasAttribute('data-heating-actual')).toBe(true);
        const low = footer(await mount(statusData(), reporting({ batterieSchwach: true }), box));
        expect([low?.textContent, low?.getAttribute('data-tone')]).toEqual([
            'heating_hinweis_batterie_schwach',
            'hinweis',
        ]);
    });
});

describe('HeatingThermostatCollectionWidget: the tile status', () => {
    const TILE_BOX = { width: 156, height: 66 };

    /** The tile's sign (kind and tone) and its button's accessible name. */
    const tileOf = async (reports: Record<string, unknown>): Promise<[string | null, string | null, string | null]> => {
        const container = await mount(statusData({ bezeichnung: 'Bad' }), reporting(reports), TILE_BOX);
        const sign = container.querySelector('[data-heating-tile] [data-heating-status]');
        return [
            sign?.getAttribute('data-heating-status') ?? null,
            sign?.getAttribute('data-tone') ?? null,
            container.querySelector('[data-heating-tile] button')?.getAttribute('aria-label') ?? null,
        ];
    };

    it('shows Störung over Hinweis over the chip tone, and names the status', async () => {
        expect(await tileOf({ erreichbarkeit: false, batterieSchwach: true })).toEqual([
            'triangle',
            'störung',
            'Bad, heating_status_unerreichbar',
        ]);
        expect(await tileOf({ batterieSchwach: true })).toEqual([
            'triangle',
            'hinweis',
            'Bad, heating_status_heizt, heating_hinweis_batterie_schwach',
        ]);
        expect(await tileOf({})).toEqual(['dot', 'heizt', 'Bad, heating_status_heizt']);
        expect(await tileOf({ fenster: 1 })).toEqual(['dot', 'kühl', 'Bad, heating_status_fenster']);
    });
});

describe('HeatingThermostatCollectionWidget: not reachable', () => {
    it('draws the set-point dimmed and keeps the device operable', async () => {
        const reachable = await mount(statusData(), reporting({}));
        expect(reachable.querySelector('[data-heating-dimmed]')).toBeNull();

        const container = await mount(statusData(), reporting({ erreichbarkeit: false }));
        expect(container.querySelector('[data-heating-dimmed] [data-heating-setpoint]')).not.toBeNull();

        const tile = await mount(statusData(), reporting({ erreichbarkeit: false }), { width: 156, height: 66 });
        expect(tile.querySelector('[data-heating-dimmed] [data-heating-setpoint]')).not.toBeNull();
        const button = tile.querySelector<HTMLButtonElement>('[data-heating-tile] button')!;
        expect(button.disabled).toBe(false);
        act(() => button.click());
        expect(button.getAttribute('aria-expanded')).toBe('true');
    });
});

describe('HeatingThermostatCollectionWidget: motion', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    /** Answers `prefers-reduced-motion: reduce` as given. */
    const reducedMotion = (reduce: boolean): void => {
        vi.spyOn(window, 'matchMedia').mockImplementation(
            query =>
                ({
                    matches: reduce && query.includes('prefers-reduced-motion: reduce'),
                    media: query,
                    onchange: null,
                    addListener: () => {},
                    removeListener: () => {},
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    dispatchEvent: () => false,
                }) as MediaQueryList,
        );
    };

    const pulses = (container: HTMLElement): boolean =>
        container.querySelector('[data-heating-chip] [data-heating-chip-sign]')!.hasAttribute('data-pulse');

    it('pulses the chip dot while heating, but not under prefers-reduced-motion', async () => {
        reducedMotion(false);
        expect(pulses(await mount(statusData(), reporting({})))).toBe(true);
        reducedMotion(true);
        expect(pulses(await mount(statusData(), reporting({})))).toBe(false);
    });
});

/** The states written through the socket, as `[id, value]`. */
const writes = (): [string, unknown][] =>
    (socket.setState.mock.calls as unknown as [string, unknown][]).map(([id, value]) => [id, value]);

/** A pill of the pill row (Absenk / Komfort / Aus) by its key; `null` when it is not there. */
const pill = (container: HTMLElement, key: string): HTMLButtonElement | null =>
    container.querySelector<HTMLButtonElement>(`[data-heating-slot="pills"] [data-heating-pill="${key}"]`);

/** Clicks a control. */
const press = async (control: HTMLElement | null): Promise<void> => {
    expect(control).not.toBeNull();
    await act(() => {
        control!.click();
        return Promise.resolve();
    });
};

describe('HeatingThermostatCollectionWidget: Komfort and Absenk', () => {
    it('Komfort writes 21 and Absenk 17 into the set-point, one state per action', async () => {
        const container = await mount(statusData(), reporting({ soll: 19 }));

        await press(pill(container, 'komfort'));
        expect(writes()).toEqual([[neutral('soll'), 21]]);

        socket.setState.mockClear();
        await press(pill(container, 'absenk'));
        expect(writes()).toEqual([[neutral('soll'), 17]]);
    });
});

/** Own data points of these tests, behind the same socket. */
const OWN = {
    /** A set-point without `common.min/max` and without a step. */
    bareSetpoint: 'hz.own.bare.setpoint',
    /** A set-point that is not writable. */
    readOnlySetpoint: 'hz.own.readonly.setpoint',
    /** A writable „Betriebsart setzen“. */
    modeSet: 'hz.own.mode.set',
    /** A „Betriebsart“ that is not writable. */
    readOnlyMode: 'hz.own.mode.readonly',
} as const;

const ownState = (id: string, common: Record<string, unknown>): ioBroker.Object =>
    ({ _id: id, type: 'state', common: { name: id, read: true, ...common }, native: {} }) as ioBroker.Object;

Object.assign(DEVICES.objects, {
    [OWN.bareSetpoint]: ownState(OWN.bareSetpoint, {
        role: 'level.temperature',
        type: 'number',
        unit: '°C',
        write: true,
    }),
    [OWN.readOnlySetpoint]: ownState(OWN.readOnlySetpoint, {
        role: 'level.temperature',
        type: 'number',
        unit: '°C',
        min: 5,
        max: 30,
        write: false,
    }),
    [OWN.modeSet]: ownState(OWN.modeSet, { role: 'level.mode.thermostat', type: 'number', write: true }),
    [OWN.readOnlyMode]: ownState(OWN.readOnlyMode, { role: 'level.mode.thermostat', type: 'number', write: false }),
});

/** Lets the write chain's debounce (300 ms) pass. */
const debounced = (): Promise<void> => act(() => new Promise<void>(resolve => setTimeout(resolve, 350)));

/** The ± button of a direction; `null` when it is not there. */
const stepButton = (container: HTMLElement, direction: 'down' | 'up'): HTMLButtonElement | null =>
    container.querySelector<HTMLButtonElement>(`[data-heating-step="${direction}"]`);

/** The pills of the pill row present, in display order. */
const pillKeys = (container: HTMLElement): string[] =>
    [...container.querySelectorAll('[data-heating-slot="pills"] [data-heating-pill]')].map(element =>
        element.getAttribute('data-heating-pill')!,
    );

/** The lit pills of the pill row. */
const litPills = (container: HTMLElement): string[] =>
    [...container.querySelectorAll('[data-heating-slot="pills"] [data-heating-pill][aria-pressed="true"]')].map(
        element => element.getAttribute('data-heating-pill')!,
    );

/** The shown set-point. */
const shownSetpoint = (container: HTMLElement): string | null | undefined =>
    container.querySelector('[data-heating-setpoint]')?.textContent;

describe('HeatingThermostatCollectionWidget: pills', () => {
    it('shows Absenk, Komfort and Aus in Groß, with the values they write', async () => {
        const container = await mount(statusData(), reporting({ soll: 19 }));

        expect(pillKeys(container)).toEqual(['absenk', 'komfort', 'aus']);
        expect(
            [...container.querySelectorAll('[data-heating-pill-detail]')].map(element => element.textContent),
        ).toEqual(['17.0 °C', '21.0 °C']);
    });

    it('writes the widget values of Komfort and Absenk', async () => {
        const container = await mount(statusData({ komfort: 22.5, absenk: 16 }), reporting({ soll: 19 }));

        await press(pill(container, 'komfort'));
        await press(pill(container, 'absenk'));
        expect(writes()).toEqual([
            [neutral('soll'), 22.5],
            [neutral('soll'), 16],
        ]);
    });

    it('lights a pill while the reported set-point equals its value, not while it has not reported', async () => {
        expect(litPills(await mount(statusData(), reporting({ soll: 21 })))).toEqual(['komfort']);
        expect(litPills(await mount(statusData(), reporting({ soll: 17 })))).toEqual(['absenk']);
        expect(litPills(await mount(statusData(), reporting({ soll: 19.5 })))).toEqual([]);

        const notReported = { ...reporting({ soll: 21 }), [`${neutral('soll')}.q`]: 0x20 };
        expect(litPills(await mount(statusData(), notReported))).toEqual([]);
    });

    it('stands only in Groß', async () => {
        const mittel = await mount(statusData(), reporting({ soll: 19 }), { width: 300, height: 400 });
        expect(mittel.querySelector('[data-heating-dial]')).not.toBeNull();
        expect(pillKeys(mittel)).toEqual([]);
    });
});

describe('HeatingThermostatCollectionWidget: Aus', () => {
    it('writes the first value of `aus` into „Betriebsart setzen“ where it is bound', async () => {
        const data = statusData({ betriebsartSetzen: OWN.modeSet, betriebsartSetzenZuordnung: { aus: [7, 8] } });
        const container = await mount(data, reporting({ soll: 19 }));

        await press(pill(container, 'aus'));
        expect(writes()).toEqual([[OWN.modeSet, 7]]);
    });

    it('writes through „Betriebsart“ without „Betriebsart setzen“', async () => {
        const container = await mount(statusData(), reporting({ soll: 19 }));

        await press(pill(container, 'aus'));
        expect(writes()).toEqual([[neutral('betriebsart'), 3]]);
    });

    it('writes the real minimum into the set-point without a mapped `aus` (5 °C)', async () => {
        const data = statusData({ betriebsartZuordnung: { auto: [0], manuell: [1] } });
        const container = await mount(data, reporting({ soll: 19 }));

        await press(pill(container, 'aus'));
        expect(writes()).toEqual([[neutral('soll'), 5]]);
    });

    it('shows no Aus without a mapped `aus` and without a real minimum', async () => {
        const data = statusData({ soll: OWN.bareSetpoint, betriebsartZuordnung: { auto: [0], manuell: [1] } });
        const container = await mount(data, reportingIds({ [OWN.bareSetpoint]: 19 }));

        expect(pillKeys(container)).toEqual(['absenk', 'komfort']);
    });

    it('lights Aus by the rule of the chip „Aus“', async () => {
        const off = await mount(statusData(), reporting({ soll: 19, betriebsart: 3 }));
        expect(litPills(off)).toEqual(['aus']);

        expect(litPills(await mount(statusData(), reporting({ soll: 19, betriebsart: 1 })))).toEqual([]);
    });

    it('shows no Aus where its operating-mode target is not writable', async () => {
        const data = statusData({ betriebsart: OWN.readOnlyMode });
        const container = await mount(data, reportingIds({ [OWN.readOnlyMode]: 1 }, reporting({ soll: 19 })));

        expect(pillKeys(container)).toEqual(['absenk', 'komfort']);
    });
});

describe('HeatingThermostatCollectionWidget: ± and the scale', () => {
    it('± writes one step of 0.5 K after the debounce, one state per press', async () => {
        const container = await mount(statusData(), reporting({ soll: 21 }));

        await press(stepButton(container, 'up'));
        expect(writes()).toEqual([]);
        await debounced();
        expect(writes()).toEqual([[neutral('soll'), 21.5]]);

        socket.setState.mockClear();
        await press(stepButton(container, 'down'));
        await debounced();
        expect(writes()).toEqual([[neutral('soll'), 20.5]]);
    });

    it('snaps a set-point off the grid to the next step', async () => {
        const container = await mount(statusData(), reporting({ soll: 20.3 }));

        await press(stepButton(container, 'up'));
        await debounced();
        expect(writes()).toEqual([[neutral('soll'), 20.5]]);
    });

    it('locks + at the maximum and − at the minimum of the real limits (5–30)', async () => {
        const top = await mount(statusData(), reporting({ soll: 30 }));
        expect([stepButton(top, 'down')!.disabled, stepButton(top, 'up')!.disabled]).toEqual([false, true]);

        const bottom = await mount(statusData(), reporting({ soll: 5 }));
        expect([stepButton(bottom, 'down')!.disabled, stepButton(bottom, 'up')!.disabled]).toEqual([true, false]);
    });

    it('runs on 5–30 °C for a set-point without `common.min/max`', async () => {
        const data = { soll: OWN.bareSetpoint };
        const top = await mount(data, reportingIds({ [OWN.bareSetpoint]: 30 }));
        expect(stepButton(top, 'up')!.disabled).toBe(true);
        expect(top.querySelector('[data-heating-ring]')?.getAttribute('aria-valuemax')).toBe('30');

        const bottom = await mount(data, reportingIds({ [OWN.bareSetpoint]: 5 }));
        expect(stepButton(bottom, 'down')!.disabled).toBe(true);
        expect(bottom.querySelector('[data-heating-ring]')?.getAttribute('aria-valuemin')).toBe('5');
    });

    it('runs on the real limits 4.5–30.5 °C where the object has them', async () => {
        const setpoint = wth2('1.SET_POINT_TEMPERATURE');
        const data = { soll: setpoint };

        const below = await mount(data, reportingIds({ [setpoint]: 30 }));
        await press(stepButton(below, 'up'));
        await debounced();
        expect(writes()).toEqual([[setpoint, 30.5]]);

        const top = await mount(data, reportingIds({ [setpoint]: 30.5 }));
        expect(stepButton(top, 'up')!.disabled).toBe(true);
        const bottom = await mount(data, reportingIds({ [setpoint]: 4.5 }));
        expect(stepButton(bottom, 'down')!.disabled).toBe(true);
    });

    it('stands with the big set-point in Quer and Kompakt, and in the tile from about 220 px', async () => {
        for (const box of [
            { width: 456, height: 120 },
            { width: 256, height: 150 },
            { width: 196, height: 68 },
        ]) {
            const container = await mount(statusData(), reporting({ soll: 21 }), box);
            expect([stepButton(container, 'down'), stepButton(container, 'up')]).not.toContain(null);
        }

        const narrowTile = await mount(statusData(), reporting({ soll: 21 }), { width: 156, height: 68 });
        expect(stepButton(narrowTile, 'up')).toBeNull();
    });

    it('draws the big set-point of Kompakt no wider than its row beside ± (300 × 190 px outer)', async () => {
        const container = await mount(statusData(), reporting({ soll: 21 }), { width: 274, height: 164 });
        const setpoint = container.querySelector<HTMLElement>('[data-heating-slot="setpoint"] [data-heating-setpoint]')!;
        const font = parseFloat(getComputedStyle(setpoint).fontSize);

        // „21,0 °C“ measured 161 px wide at 48 px of font; ± 52 px with 12 px of gap on both sides.
        expect(font * (161 / 48) + 2 * 52 + 2 * 12).toBeLessThanOrEqual(274);
    });

    it('draws the set-point of the tile so that ± and the footer fit (240 × 110 and 220 × 110 px outer)', async () => {
        // „21,0 °C“ measured 161 px wide at 48 px of font, its line 1.2 × the font; ± 44 px with 6 px
        // of gap; head row 20 px, footer line 28 px, 4 px between the rows.
        const fontOf = (container: HTMLElement): number =>
            parseFloat(getComputedStyle(container.querySelector<HTMLElement>('[data-heating-tile] [data-heating-setpoint]')!).fontSize);

        const withButtons = await mount(statusData(), reporting({ soll: 21 }), { width: 214, height: 84 });
        expect(stepButton(withButtons, 'up')).not.toBeNull();
        expect(fontOf(withButtons) * (161 / 48) + 2 * 44 + 2 * 6).toBeLessThanOrEqual(214);

        const withFooter = await mount(statusData(), reporting({ soll: 21 }), { width: 194, height: 84 });
        expect(withFooter.querySelector('[data-heating-tile] [data-heating-actual]')).not.toBeNull();
        expect(20 + 4 + 1.2 * fontOf(withFooter) + 4 + 28).toBeLessThanOrEqual(84);
    });

    it('steps from the tile', async () => {
        const tile = await mount(statusData(), reporting({ soll: 21 }), { width: 196, height: 68 });

        await press(stepButton(tile, 'down'));
        await debounced();
        expect(writes()).toEqual([[neutral('soll'), 20.5]]);
        expect(tile.querySelector('[data-heating-tile] button[aria-expanded="true"]')).toBeNull();
    });
});

/** Fires a pointer event on the ring at a point of its 320-unit box. */
const pointer = async (ring: Element, type: string, [x, y]: [number, number]): Promise<void> => {
    await act(() => {
        ring.dispatchEvent(new PointerEvent(type, { bubbles: true, clientX: x, clientY: y, pointerId: 1 }));
        return Promise.resolve();
    });
};

/** The ring of a mounted dial, laid out as a 320 × 320 px box at the origin. */
const ringOf = (container: HTMLElement): Element => {
    const ring = container.querySelector('[data-heating-ring]')!;
    ring.getBoundingClientRect = () => ({ left: 0, top: 0, width: 320, height: 320 }) as DOMRect;
    return ring;
};

/** Points of the ring (radius 118 around 160/160): the top and the right. */
const RING_TOP: [number, number] = [160, 42];
const RING_RIGHT: [number, number] = [278, 160];

describe('HeatingThermostatCollectionWidget: dragging the ring', () => {
    it('shows the value while dragging and writes it once on release', async () => {
        const container = await mount(statusData(), reporting({ soll: 21 }));
        const ring = ringOf(container);

        // Top of 5–30: 17.5; right: 225° of 270° → 25.83 → 26.0 on the 0.5 grid.
        await pointer(ring, 'pointerdown', RING_TOP);
        expect(shownSetpoint(container)).toBe('17.5 °C');
        await pointer(ring, 'pointermove', RING_RIGHT);
        expect(shownSetpoint(container)).toBe('26.0 °C');
        expect(writes()).toEqual([]);

        await pointer(ring, 'pointerup', RING_RIGHT);
        expect(writes()).toEqual([[neutral('soll'), 26]]);
    });

    it('takes the real limits: the top of 4.5–30.5 is 17.5', async () => {
        const setpoint = wth2('1.SET_POINT_TEMPERATURE');
        const container = await mount({ soll: setpoint }, reportingIds({ [setpoint]: 21 }));
        const ring = ringOf(container);

        await pointer(ring, 'pointerdown', [
            160 + 118 * Math.cos(Math.PI * 1.25),
            160 + 118 * Math.sin(Math.PI * 1.25),
        ]);
        await pointer(ring, 'pointerup', RING_TOP);
        // 225° is 90° along the 270° ring: 4.5 + 26 / 3 = 13.17 → 13.0.
        expect(writes()).toEqual([[setpoint, 13]]);
    });

    it('writes nothing on a cancelled drag or a press beside the ring', async () => {
        const container = await mount(statusData(), reporting({ soll: 21 }));
        const ring = ringOf(container);

        await pointer(ring, 'pointerdown', RING_TOP);
        await pointer(ring, 'pointercancel', RING_TOP);
        await pointer(ring, 'pointerdown', [160, 160]);
        await pointer(ring, 'pointerup', [160, 160]);
        expect(writes()).toEqual([]);
        expect(shownSetpoint(container)).toBe('21.0 °C');
    });

    it('steps like ± with the arrow keys', async () => {
        const container = await mount(statusData(), reporting({ soll: 21 }));
        const ring = ringOf(container);
        expect(ring.getAttribute('tabindex')).toBe('0');

        await act(() => {
            ring.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'ArrowUp' }));
            return Promise.resolve();
        });
        await debounced();
        expect(writes()).toEqual([[neutral('soll'), 21.5]]);
    });

    it('writes nothing when released on the reported value', async () => {
        const container = await mount(statusData(), reporting({ soll: 17.5 }));
        const ring = ringOf(container);

        await pointer(ring, 'pointerdown', RING_TOP);
        await pointer(ring, 'pointerup', RING_TOP);
        expect(writes()).toEqual([]);
    });
});

describe('HeatingThermostatCollectionWidget: set-point not reported', () => {
    const notReported = (): Record<string, unknown> => ({
        ...reporting({ soll: 21 }),
        [`${neutral('soll')}.q`]: 0x20,
    });

    it('locks ± and the ring while the set-point has not reported (q = 0x20)', async () => {
        const container = await mount(statusData(), notReported());
        expect([stepButton(container, 'down')!.disabled, stepButton(container, 'up')!.disabled]).toEqual([true, true]);
        const ring = ringOf(container);
        expect([ring.getAttribute('aria-disabled'), ring.getAttribute('tabindex')]).toEqual(['true', '-1']);

        await pointer(ring, 'pointerdown', RING_TOP);
        await pointer(ring, 'pointerup', RING_TOP);
        expect(writes()).toEqual([]);
    });

    it('locks them as well on the host placeholder (val "null", q = 0)', async () => {
        const values = { ...reporting({}), [`${neutral('soll')}.val`]: 'null', [`${neutral('soll')}.q`]: 0 };
        const container = await mount(statusData(), values);

        expect(stepButton(container, 'up')!.disabled).toBe(true);
    });

    it('still writes Komfort, Absenk and Aus', async () => {
        const container = await mount(statusData(), notReported());

        await press(pill(container, 'komfort'));
        await press(pill(container, 'absenk'));
        await press(pill(container, 'aus'));
        expect(writes()).toEqual([
            [neutral('soll'), 21],
            [neutral('soll'), 17],
            [neutral('betriebsart'), 3],
        ]);
    });
});

describe('HeatingThermostatCollectionWidget: set-point not writable', () => {
    it('shows no control that writes into it, and Aus only through the writable operating mode', async () => {
        const data = statusData({ soll: OWN.readOnlySetpoint });
        const values = reportingIds({ [OWN.readOnlySetpoint]: 21 });
        const container = await mount(data, values);

        expect([stepButton(container, 'down'), stepButton(container, 'up')]).toEqual([null, null]);
        expect(pillKeys(container)).toEqual(['aus']);
        const ring = ringOf(container);
        expect(ring.getAttribute('aria-disabled')).toBe('true');
        await pointer(ring, 'pointerdown', RING_TOP);
        await pointer(ring, 'pointerup', RING_TOP);
        await debounced();
        expect(writes()).toEqual([]);

        const minimumOnly = await mount({ ...data, betriebsartZuordnung: { auto: [0] } }, values);
        expect(pillKeys(minimumOnly)).toEqual([]);

        for (const box of [
            { width: 456, height: 120 },
            { width: 196, height: 68 },
        ]) {
            expect(stepButton(await mount(data, values, box), 'up')).toBeNull();
        }
    });
});

/** The pills of the operating-mode segment (with the Urlaub row), in display order. */
const modeKeys = (container: HTMLElement): string[] =>
    [...container.querySelectorAll('[data-heating-slot="modes"] [data-heating-pill]')].map(element =>
        element.getAttribute('data-heating-pill')!,
    );

/** The lit pills of the operating-mode segment. */
const litModes = (container: HTMLElement): string[] =>
    [...container.querySelectorAll('[data-heating-slot="modes"] [data-heating-pill][aria-pressed="true"]')].map(
        element => element.getAttribute('data-heating-pill')!,
    );

/** A pill of the operating-mode segment by its key. */
const modePill = (container: HTMLElement, key: string): HTMLButtonElement | null =>
    container.querySelector<HTMLButtonElement>(`[data-heating-slot="modes"] [data-heating-pill="${key}"]`);

describe('HeatingThermostatCollectionWidget: operating mode', () => {
    it('writes the first device value of Auto and Manuell into „Betriebsart“ without „Betriebsart setzen“', async () => {
        const data = statusData({ betriebsartZuordnung: { auto: [0, 5], manuell: [1, 6], aus: [3] } });
        const container = await mount(data, reporting({ betriebsart: 1 }));

        expect(modeKeys(container)).toEqual(['auto', 'manuell', 'boost']);
        expect(litModes(container)).toEqual(['manuell']);
        await press(modePill(container, 'auto'));
        await press(modePill(container, 'manuell'));
        expect(writes()).toEqual([
            [neutral('betriebsart'), 0],
            [neutral('betriebsart'), 1],
        ]);
    });

    it('HmIP-like: Auto writes 0 and Manuell 1 into „Betriebsart setzen“, lit by the read operating mode', async () => {
        const data = {
            soll: wth2('1.SET_POINT_TEMPERATURE'),
            betriebsart: wth2('1.SET_POINT_MODE'),
            betriebsartZuordnung: { auto: [0], manuell: [1], urlaub: [2] },
            betriebsartSetzen: wth2('1.CONTROL_MODE'),
            betriebsartSetzenZuordnung: { auto: [0], manuell: [1] },
        };
        const container = await mount(data, reportingIds({ [wth2('1.SET_POINT_MODE')]: 0 }));

        expect(modeKeys(container)).toEqual(['auto', 'manuell']);
        expect(litModes(container)).toEqual(['auto']);
        await press(modePill(container, 'manuell'));
        await press(modePill(container, 'auto'));
        expect(writes()).toEqual([
            [wth2('1.CONTROL_MODE'), 1],
            [wth2('1.CONTROL_MODE'), 0],
        ]);
    });

    it('shows no pill for a value mapped as „nicht vorhanden“ (empty list) or not mapped', async () => {
        const data = statusData({ betriebsartZuordnung: { auto: [], manuell: [1] } });

        expect(modeKeys(await mount(data, reporting({ betriebsart: 1 })))).toEqual(['manuell', 'boost']);
    });

    it('shows no Auto or Manuell where the target is not writable — a bound „Betriebsart setzen“ never falls back', async () => {
        const readOnly = statusData({ betriebsart: OWN.readOnlyMode });
        expect(modeKeys(await mount(readOnly, reportingIds({ [OWN.readOnlyMode]: 1 }, reporting({}))))).toEqual([
            'boost',
        ]);

        const readOnlySet = statusData({
            betriebsartSetzen: OWN.readOnlyMode,
            betriebsartSetzenZuordnung: { auto: [0], manuell: [1] },
        });
        expect(modeKeys(await mount(readOnlySet, reporting({ betriebsart: 1 })))).toEqual(['boost']);
    });

    it('lights no pill for a device value without a mapping; the chip names the raw value', async () => {
        const data = statusData({
            ventilAnzahl: 0,
            ventil1: undefined,
            betriebsartZuordnung: { auto: [0], manuell: [1] },
        });
        const container = await mount(data, reporting({ betriebsart: 3 }));

        expect(modeKeys(container)).toEqual(['auto', 'manuell', 'boost']);
        expect(litModes(container)).toEqual([]);
        expect(chipOf(container)).toEqual(['3', 'neutral']);
    });

    it('stands in Groß and in Quer from sufficient height, not in Mittel, Kompakt or a low Quer', async () => {
        const at = async (box: ContentBox): Promise<string[]> =>
            modeKeys(await mount(statusData(), reporting({ betriebsart: 0 }), box));

        expect(await at({ width: 456, height: 240 })).toEqual(['auto', 'manuell', 'boost']);
        expect(await at({ width: 456, height: 200 })).toEqual([]);
        expect(await at({ width: 300, height: 400 })).toEqual([]);
        expect(await at({ width: 256, height: 150 })).toEqual([]);
    });
});

/** Own Boost and Urlaub data points of these tests. */
const OWN_OVERRIDES = {
    /** A writable „Boost beenden“ (a button). */
    boostStop: 'hz.own.boost.stop',
    /** A „Boost beenden“ that is not writable. */
    readOnlyBoostStop: 'hz.own.boost.stop.readonly',
    /** A writable „Urlaub“. */
    holiday: 'hz.own.holiday',
} as const;

Object.assign(DEVICES.objects, {
    [OWN_OVERRIDES.boostStop]: ownState(OWN_OVERRIDES.boostStop, { role: 'button', type: 'boolean', write: true }),
    [OWN_OVERRIDES.readOnlyBoostStop]: ownState(OWN_OVERRIDES.readOnlyBoostStop, {
        role: 'button',
        type: 'boolean',
        write: false,
    }),
    [OWN_OVERRIDES.holiday]: ownState(OWN_OVERRIDES.holiday, { role: 'switch', type: 'boolean', write: true }),
});

describe('HeatingThermostatCollectionWidget: Boost pill', () => {
    it('starts Boost with `boost` = an', async () => {
        const container = await mount(statusData(), reporting({ boost: false }));

        expect(litModes(container)).not.toContain('boost');
        await press(modePill(container, 'boost'));
        expect(writes()).toEqual([[neutral('boost'), true]]);
    });

    it('ends a running Boost with `boost` = aus without „Boost beenden“', async () => {
        const container = await mount(statusData(), reporting({ boost: true }));

        expect(litModes(container)).toContain('boost');
        await press(modePill(container, 'boost'));
        expect(writes()).toEqual([[neutral('boost'), false]]);
    });

    it('ends a running Boost with `boostBeenden` = beenden where it is bound', async () => {
        const data = statusData({ boostBeenden: OWN_OVERRIDES.boostStop, boostBeendenZuordnung: { beenden: [true] } });
        const container = await mount(data, reporting({ boost: true }));

        await press(modePill(container, 'boost'));
        expect(writes()).toEqual([[OWN_OVERRIDES.boostStop, true]]);
    });

    it('follows „Boost läuft“ of the status: a running Boost by the operating mode ends through `boost` = aus', async () => {
        const container = await mount(statusData(), reporting({ betriebsart: 4, boost: 'x' }));

        expect(litModes(container)).toEqual(['boost']);
        await press(modePill(container, 'boost'));
        expect(writes()).toEqual([[neutral('boost'), false]]);
    });

    it('shows no Boost pill while the action a tap would take is not writable', async () => {
        const stopReadOnly = statusData({
            boostBeenden: OWN_OVERRIDES.readOnlyBoostStop,
            boostBeendenZuordnung: { beenden: [true] },
        });
        expect(modeKeys(await mount(stopReadOnly, reporting({ boost: true })))).toEqual(['auto', 'manuell']);
        expect(modeKeys(await mount(stopReadOnly, reporting({ boost: false })))).toEqual(['auto', 'manuell', 'boost']);

        const noStart = statusData({ boostZuordnung: { an: [], aus: [false] } });
        expect(modeKeys(await mount(noStart, reporting({ boost: false })))).toEqual(['auto', 'manuell']);
    });
});

describe('HeatingThermostatCollectionWidget: Urlaub pill', () => {
    const END = `${PREFIX}${NEUTRAL_DEVICE.baits.urlaubEnde}`;
    /** The neutral device with its holiday end bound as a pattern. */
    const holidayData = (extra: Record<string, unknown> = {}): Record<string, unknown> =>
        statusData({ urlaubEnde: END, urlaubEndeZuordnung: { zeitformat: 'YYYY_MM_DD HH:mm' }, ...extra });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('shows only while Urlaub runs, lit, with its end', async () => {
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        vi.setSystemTime(new Date(2026, 10, 27, 12, 0, 0));
        const running = await mount(
            holidayData(),
            reportingIds({ [END]: '2026_11_29 18:00' }, reporting({ betriebsart: 2 })),
        );

        expect(modeKeys(running)).toEqual(['auto', 'manuell', 'boost', 'urlaub']);
        expect(litModes(running)).toEqual(['urlaub']);
        expect(modePill(running, 'urlaub')?.querySelector('[data-heating-pill-detail]')?.textContent).toBe(
            'heating_pill_bis(Sun, 11/29, 06:00 PM)',
        );

        const none = await mount(
            holidayData(),
            reportingIds({ [END]: '2026_11_29 18:00' }, reporting({ betriebsart: 0 })),
        );
        expect(modeKeys(none)).toEqual(['auto', 'manuell', 'boost']);
    });

    it('is ended by Auto or Manuell through „Betriebsart setzen“, as the CCU WebUI does', async () => {
        const data = {
            soll: wth2('1.SET_POINT_TEMPERATURE'),
            betriebsart: wth2('1.SET_POINT_MODE'),
            betriebsartZuordnung: { auto: [0], manuell: [1], urlaub: [2] },
            betriebsartSetzen: wth2('1.CONTROL_MODE'),
            betriebsartSetzenZuordnung: { auto: [0], manuell: [1] },
            urlaub: wth2('1.PARTY_MODE'),
            urlaubZuordnung: { an: [true], aus: [false] },
        };
        const container = await mount(
            data,
            reportingIds({ [wth2('1.SET_POINT_MODE')]: 2, [wth2('1.PARTY_MODE')]: true }),
        );

        expect(modeKeys(container)).toEqual(['auto', 'manuell', 'urlaub']);
        await press(modePill(container, 'auto'));
        await press(modePill(container, 'manuell'));
        expect(writes()).toEqual([
            [wth2('1.CONTROL_MODE'), 0],
            [wth2('1.CONTROL_MODE'), 1],
        ]);
    });

    it('writes nothing on a tap where `urlaub` is not writable (PARTY_MODE only shows)', async () => {
        const data = {
            soll: wth2('1.SET_POINT_TEMPERATURE'),
            urlaub: wth2('1.PARTY_MODE'),
            urlaubZuordnung: { an: [true], aus: [false] },
        };
        const container = await mount(data, reportingIds({ [wth2('1.PARTY_MODE')]: true }));
        const holiday = modePill(container, 'urlaub');

        expect(holiday?.disabled).toBe(true);
        await press(holiday);
        expect(writes()).toEqual([]);
    });

    it('writes `aus` of a writable `urlaub` on a tap of the active pill', async () => {
        const data = holidayData({ urlaub: OWN_OVERRIDES.holiday, urlaubZuordnung: { an: [true], aus: [false] } });
        const container = await mount(
            data,
            reportingIds({ [OWN_OVERRIDES.holiday]: true }, reporting({ betriebsart: 0 })),
        );

        expect(litModes(container)).toEqual(['auto', 'urlaub']);
        await press(modePill(container, 'urlaub'));
        expect(writes()).toEqual([[OWN_OVERRIDES.holiday, false]]);
    });
});

describe('HeatingThermostatCollectionWidget: inserted by the assistant (ids only)', () => {
    it('reads the operating mode and Boost of the HmIP-WTH-2 and writes what the pick would have stored', async () => {
        const data = Object.freeze({
            soll: wth2('1.SET_POINT_TEMPERATURE'),
            betriebsart: wth2('1.SET_POINT_MODE'),
            betriebsartSetzen: wth2('1.CONTROL_MODE'),
            boost: wth2('1.BOOST_MODE'),
        });
        const stored = JSON.stringify(data);
        const container = await mount(
            data,
            reportingIds({ [wth2('1.SET_POINT_MODE')]: 1, [wth2('1.BOOST_MODE')]: false }),
        );

        expect(modeKeys(container)).toEqual(['auto', 'manuell', 'boost']);
        expect(litModes(container)).toEqual(['manuell']);
        expect(chipOf(container)).toEqual(['heating_neutral_manuell', 'neutral']);
        await press(modePill(container, 'auto'));
        await press(modePill(container, 'manuell'));
        await press(modePill(container, 'boost'));
        expect(writes()).toEqual([
            [wth2('1.CONTROL_MODE'), 0],
            [wth2('1.CONTROL_MODE'), 1],
            [wth2('1.BOOST_MODE'), true],
        ]);
        expect(JSON.stringify(data)).toBe(stored);
        expect(socket.setObject).not.toHaveBeenCalled();
    });

    it('writes the neutral device’s first device values into „Betriebsart“ and reads a running Boost', async () => {
        const data = Object.freeze(
            neutralData({ betriebsart: neutral('betriebsart'), boost: neutral('boost'), ventilAnzahl: 0, ventil1: '' }),
        );
        const container = await mount(data, reporting({ betriebsart: 0, boost: true }));

        expect(litModes(container)).toEqual(['auto', 'boost']);
        expect(chipOf(container)).toEqual(['heating_status_boost', 'heizt']);
        await press(modePill(container, 'manuell'));
        await press(modePill(container, 'boost'));
        expect(writes()).toEqual([
            [neutral('betriebsart'), 1],
            [neutral('boost'), false],
        ]);
    });
});
