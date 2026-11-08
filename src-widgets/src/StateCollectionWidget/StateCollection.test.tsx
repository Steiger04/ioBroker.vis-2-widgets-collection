/**
 * StateCollection — the body up to the socket (ADR-0110 Nr. 15).
 *
 * @module widgets/StateCollectionWidget/StateCollection.test
 * @remarks
 * The real body on the scene seam, the real `useValueState` and `useDebounce` behind it and fake
 * timers around it. Every write has two readings, both from {@link writes}: `sent` is what reaches
 * the backend (`setValue`, behind the debounce), `optimistic` is the patch the widget shows at once
 * (`setState`). The patch lands the way the host's `setState` does; a Fremdänderung is a re-render
 * over new scene values. The decision matrix itself is pinned in stateTrigger.test.ts as pure data.
 *
 * This suite pins what the widget does today, including its known findings. A case named
 * `Vn (ticket NN)` or `ticket NN` is an Ist that the fix of that ticket turns over, and that ticket
 * changes the case. The other cases are meant to hold through the whole series; ticket 05 moves the
 * gesture helpers below to Pointer Events, not the cases on top of them.
 *
 * What happy-dom does not show stays a live check (ticket 22): whether a browser fires the
 * mouse events after a touch, what it sends on a cancelled or long press, and the visible colours.
 * The events here are dispatched one by one, so `disabled` holds back only what React itself
 * holds back; the `pointer-events: none` of a disabled MUI button has no effect on them.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // The body imports Generic for the dialog title fallback (Generic.t extends
    // window.visRxWidget, undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { act } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import StateCollection from './StateCollection';

installInertResizeObserver();

const mount = testScopedMount();

const OID = 'demo.0.state';

type Values = Record<string, unknown>;
type Updater = (prev: { values: Values }) => { values: Values };

/** Longer than every debounce and throttle interval in this suite. */
const SETTLE_MS = 2000;

/** The bound object of the given type — `oidObject._id` has to be in the widget data. */
const object = (type: string, extra: Record<string, unknown> = {}): Record<string, unknown> => ({
    _id: OID,
    type,
    ...extra,
});

/** Two rows on a number OID, only states, without header and footer, whose text would shadow the display. */
const BASE_DATA = {
    oid: OID,
    oidObject: object('number'),
    onlyStates: true,
    values_count: 2,
    value1: '0',
    alias1: 'OFF',
    value2: '1',
    alias2: 'ON',
    noHeader: true,
    noFooter: true,
    noHeaderIcon: true,
};

/** Push-button rows: press writes Wert[1] = 1, release writes Wert[2] = 0. */
const PUSH_BUTTON = {
    statePushButton: true,
    value1: '1',
    alias1: 'DOWN',
    value2: '0',
    alias2: 'UP',
};

/** Three rows, which is what a click opens the dialog for. */
const THREE_ROWS = {
    onlyStates: false,
    values_count: 3,
    value1: '0',
    alias1: 'OFF',
    value2: '1',
    alias2: 'ON',
    value3: '2',
    alias3: 'AUTO',
};

/** The object copy's range: what earns the dialog a slider. */
const RANGE = { minValue: 0, maxValue: 100 };

interface MountedState extends MountedCollectionBody {
    /** A state update from outside: the host re-renders over the new value and `lc`. */
    backend: (value: unknown, lc: number) => void;
    /** New widget data, the way the host re-renders the widget. */
    configure: (data: Record<string, unknown>) => void;
}

/** Mounts the body at `value` (`lc` 1000) with the optimistic patch landing like the host's `setState`. */
const mountState = (
    data: Record<string, unknown> = {},
    value: unknown = 0,
    style: Record<string, unknown> = {},
): MountedState => {
    let currentData = data;
    let values: Values = { [`${OID}.val`]: value, [`${OID}.lc`]: 1000 };
    const sceneOf = (): ReturnType<typeof collectionScene> => {
        const scene = collectionScene('state-collection-test', { ...BASE_DATA, ...currentData }, undefined);
        // The scene alone carries only `<oid>.val`; the `.lc` decides what counts as a change.
        scene.context.values = values;
        scene.context.widget.style = style;
        return scene;
    };
    const handle = mount(StateCollection, sceneOf());
    const land = (next: Values): void => {
        values = next;
        handle.rerender(sceneOf());
    };

    handle.setState.mockImplementation((updater: Updater) => land(updater({ values }).values));

    return {
        ...handle,
        backend: (nextValue, lc): void => land({ ...values, [`${OID}.val`]: nextValue, [`${OID}.lc`]: lc }),
        configure: (next): void => {
            currentData = { ...currentData, ...next };
            land(values);
        },
    };
};

/**
 * The two readings of every write so far: `sent` went to the socket, `optimistic` was patched
 * into the widget. Only `sent` is what the device gets.
 */
const writes = ({ setState, setValue }: MountedCollectionBody): { sent: unknown[]; optimistic: unknown[] } => ({
    sent: setValue.mock.calls.map(([oid, value]: unknown[]) => {
        expect(oid).toBe(OID);
        return value;
    }),
    optimistic: setState.mock.calls.map(
        ([updater]: unknown[]) => (updater as Updater)({ values: {} }).values[`${OID}.val`],
    ),
});

/** Lets the timers run: the debounced backend write fires once the interval has passed. */
const advance = (ms: number): void => {
    act(() => {
        vi.advanceTimersByTime(ms);
    });
};

const settle = (): void => advance(SETTLE_MS);

const buttonOf = ({ container }: MountedCollectionBody): HTMLButtonElement => {
    const button = container.querySelector('button');
    if (!button) {
        throw new Error('the body rendered no button');
    }
    return button;
};

const fire = (element: Element, event: Event): void => {
    act(() => {
        element.dispatchEvent(event);
    });
};

const mouse = (type: string, init: MouseEventInit = {}): MouseEvent =>
    new MouseEvent(type, { bubbles: true, cancelable: true, ...init });

/** Touch events carry no data the body reads; the plain event is enough for React's handlers. */
const touch = (type: string): Event => new Event(type, { bubbles: true, cancelable: true });

// The push-button gestures, named by what the user does: ticket 05 moves them to Pointer Events
// here, and the cases on top of them stay as they are.
const press = (state: MountedState, init?: MouseEventInit): void => fire(buttonOf(state), mouse('mousedown', init));
const release = (state: MountedState, init?: MouseEventInit): void => fire(buttonOf(state), mouse('mouseup', init));
const leave = (state: MountedState): void => fire(buttonOf(state), mouse('mouseout'));
const touchPress = (state: MountedState): void => fire(buttonOf(state), touch('touchstart'));
const touchRelease = (state: MountedState): void => fire(buttonOf(state), touch('touchend'));

const click = (state: MountedState): void => fire(buttonOf(state), mouse('click'));

/** A whole mouse press as the browser delivers it: down, the hold, up and the trailing click. */
const tap = (state: MountedState, holdMs: number): void => {
    press(state);
    advance(holdMs);
    release(state);
    click(state);
};

const dialogOf = (): HTMLElement | null => document.querySelector<HTMLElement>('.MuiDialog-root');

const rowsOf = (): HTMLElement[] => Array.from(document.querySelectorAll<HTMLElement>('.MuiListItemButton-root'));

const rowTexts = (): (string | null)[] => rowsOf().map(row => row.textContent);

const rowNamed = (text: string): HTMLElement => {
    const row = rowsOf().find(candidate => candidate.textContent === text);
    if (!row) {
        throw new Error(`the dialog rendered no row "${text}", only ${JSON.stringify(rowTexts())}`);
    }
    return row;
};

const markedRows = (): (string | null)[] =>
    rowsOf()
        .filter(row => row.classList.contains('Mui-selected'))
        .map(row => row.textContent);

const sliderOf = (): HTMLElement | null => document.querySelector<HTMLElement>('.MuiDialog-root .MuiSlider-root');

const rangeOf = (): HTMLInputElement => {
    const input = document.querySelector<HTMLInputElement>('.MuiDialog-root input[type="range"]');
    if (!input) {
        throw new Error('the dialog rendered no slider');
    }
    return input;
};

const thumb = (): number => Number(rangeOf().getAttribute('aria-valuenow'));

/** Moves the thumb like a user would: the native range input fires `change`. */
const drag = (value: number): void => {
    const input = rangeOf();
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, String(value));
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });
};

const titleOf = (): string | null | undefined => document.querySelector('.MuiDialogTitle-root')?.textContent;

const closeDialog = (): void => {
    const close = document.querySelector('.MuiDialog-root .MuiIconButton-root');
    if (!close) {
        throw new Error('the dialog rendered no close button');
    }
    fire(close, mouse('click'));
};

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('StateCollection wiring', () => {
    it('toggles on click: current Wert[1] writes Wert[2] as the optimistic patch', () => {
        const state = mountState();

        click(state);

        expect(state.setState).toHaveBeenCalledTimes(1);
        expect(writes(state).optimistic).toEqual([1]);
        const next = state.setState.mock.calls[0][0] as Updater;
        expect(next({ values: {} }).values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);
    });

    it('opens the change dialog for more than two states instead of writing', () => {
        const state = mountState({ values_count: 3, value3: '2', alias3: 'AUTO' });

        click(state);

        expect(state.setState).not.toHaveBeenCalled();
        // The dialog portals into document.body.
        expect(dialogOf()).not.toBeNull();
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: object('number', { write: false }) }],
    ])('disables the button for %s (Sperre)', (_case, data) => {
        const { container } = mountState(data);

        expect(container.querySelector('button.MuiButton-root.Mui-disabled')).not.toBeNull();
    });

    it('push-button: press/release write synchronously and the trailing click writes nothing', () => {
        const state = mountState({ statePushButton: true });

        press(state);
        expect(state.setState).toHaveBeenCalledTimes(1);
        expect(writes(state).optimistic).toEqual([0]); // press → Wert[1]

        release(state);
        expect(state.setState).toHaveBeenCalledTimes(2);
        expect(writes(state).optimistic).toEqual([0, 1]); // release → Wert[2]

        // The browser fires click after mouseup — it must not write (release wins).
        click(state);
        expect(state.setState).toHaveBeenCalledTimes(2);
    });

    it('push-button: a keyboard click (no press/release) is an honest no-op', () => {
        const state = mountState({ statePushButton: true });

        click(state);

        expect(state.setState).not.toHaveBeenCalled();
    });
});

describe('StateCollection value text (Ticket 12)', () => {
    it('appends the object unit when the value matches no state row', () => {
        const state = mountState({ oidObject: object('number', { unit: '°C' }) }, 5);

        expect(buttonOf(state).textContent).toBe('5°C');
    });

    it('lets the alias of a matching row win over the object unit', () => {
        const state = mountState({ oidObject: object('number', { unit: '°C' }) }, 1);

        expect(buttonOf(state).textContent).toBe('ON');
    });
});

describe('StateCollection push button up to the socket', () => {
    describe('press and release', () => {
        it('V3 (ticket 06): a long hold sends both values, each an interval after its event', () => {
            const state = mountState(PUSH_BUTTON);

            press(state);
            expect(writes(state)).toEqual({ sent: [], optimistic: [1] });

            advance(299);
            expect(writes(state).sent).toEqual([]);
            advance(1);
            expect(writes(state).sent).toEqual([1]);

            advance(100);
            release(state);
            click(state);
            expect(writes(state)).toEqual({ sent: [1], optimistic: [1, 0] });

            advance(299);
            expect(writes(state).sent).toEqual([1]);
            advance(1);
            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });

        it.each([
            [100, [0]],
            [299, [0]],
        ])('V3 (ticket 06): a tap of %i ms under the debounce sends only Wert[2]: %j', (holdMs, sent) => {
            const state = mountState(PUSH_BUTTON);

            tap(state, holdMs);
            settle();

            expect(writes(state)).toEqual({ sent, optimistic: [1, 0] });
        });

        it.each([
            [300, [1, 0]],
            [400, [1, 0]],
        ])('a hold of %i ms at the debounce or longer sends both values: %j', (holdMs, sent) => {
            const state = mountState(PUSH_BUTTON);

            tap(state, holdMs);
            settle();

            expect(writes(state)).toEqual({ sent, optimistic: [1, 0] });
        });

        it('a hold as long as a configured delay sends both values', () => {
            const state = mountState({ ...PUSH_BUTTON, delay: 1000 });

            tap(state, 1000);
            settle();

            expect(writes(state).sent).toEqual([1, 0]);
        });

        it('V3 (ticket 06): a tap under a configured delay sends only Wert[2]', () => {
            const state = mountState({ ...PUSH_BUTTON, delay: 1000 });

            tap(state, 999);
            settle();

            expect(writes(state).sent).toEqual([0]);
        });

        it('delay 0: a tap with time between press and release sends both values', () => {
            const state = mountState({ ...PUSH_BUTTON, delay: 0 });

            tap(state, 100);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });

        it('V3 (ticket 06): delay 0 with press and release in one tick sends only Wert[2]', () => {
            const state = mountState({ ...PUSH_BUTTON, delay: 0 });

            press(state);
            release(state);
            click(state);
            settle();

            expect(writes(state)).toEqual({ sent: [0], optimistic: [1, 0] });
        });

        it('V3 (ticket 06): sample interval, a hold across the interval sends both values, each at the end of its window', () => {
            const state = mountState({ ...PUSH_BUTTON, sampleInterval: true, sampleIntervalValue: 200 });

            press(state);
            advance(199);
            expect(writes(state).sent).toEqual([]);
            advance(1);
            expect(writes(state).sent).toEqual([1]);

            advance(200);
            release(state);
            click(state);
            advance(199);
            expect(writes(state).sent).toEqual([1]);
            advance(1);

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });

        it('V3 (ticket 06): sample interval, a tap inside the window sends only Wert[2]', () => {
            const state = mountState({ ...PUSH_BUTTON, sampleInterval: true, sampleIntervalValue: 200 });

            tap(state, 100);
            settle();

            expect(writes(state)).toEqual({ sent: [0], optimistic: [1, 0] });
        });
    });

    describe('passing over and leaving', () => {
        it('V1 (ticket 04): passing the mouse over without a press sends Wert[2]', () => {
            const state = mountState(PUSH_BUTTON);

            fire(buttonOf(state), mouse('mouseover'));
            leave(state);
            settle();

            expect(writes(state)).toEqual({ sent: [0], optimistic: [0] });
        });

        it('V1 (ticket 04): passing over twice sends Wert[2] twice', () => {
            const state = mountState(PUSH_BUTTON);

            leave(state);
            settle();
            leave(state);
            settle();

            expect(writes(state)).toEqual({ sent: [0, 0], optimistic: [0, 0] });
        });

        it('V2 (tickets 04 and 05): a mouseout from a child while holding counts as a release, the real one writes again', () => {
            const state = mountState(PUSH_BUTTON);
            const child = buttonOf(state).firstElementChild;
            if (!child) {
                throw new Error('the button rendered no child');
            }

            press(state);
            advance(400);
            // mouseout bubbles: moving between the button's children reaches its handler.
            fire(child, mouse('mouseout', { relatedTarget: buttonOf(state) }));
            settle();
            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });

            release(state);
            click(state);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0, 0], optimistic: [1, 0, 0] });
        });

        it('leaving the button while holding counts as a release', () => {
            const state = mountState(PUSH_BUTTON);

            press(state);
            advance(400);
            leave(state);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });

        it('V1 (ticket 04): coming back still pressed and letting go writes a second Wert[2]', () => {
            const state = mountState(PUSH_BUTTON);

            press(state);
            advance(400);
            leave(state);
            settle();
            fire(buttonOf(state), mouse('mouseover'));
            release(state);
            click(state);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0, 0], optimistic: [1, 0, 0] });
        });
    });

    describe('the mouse buttons', () => {
        it('ticket 05: the right mouse button presses like the main one', () => {
            const state = mountState(PUSH_BUTTON);

            press(state, { button: 2 });
            advance(400);
            release(state, { button: 2 });
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });

        it('ticket 05: the middle mouse button presses like the main one', () => {
            const state = mountState(PUSH_BUTTON);

            press(state, { button: 1 });
            advance(400);
            release(state, { button: 1 });
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });
    });

    describe('touch', () => {
        it('a touch with a long hold sends both values', () => {
            const state = mountState(PUSH_BUTTON);

            touchPress(state);
            advance(400);
            touchRelease(state);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
        });

        it('V3 (ticket 06): a short touch sends only Wert[2]', () => {
            const state = mountState(PUSH_BUTTON);

            touchPress(state);
            advance(100);
            touchRelease(state);
            settle();

            expect(writes(state)).toEqual({ sent: [0], optimistic: [1, 0] });
        });

        it('V4 (ticket 05): a cancelled touch stays on Wert[1]', () => {
            const state = mountState(PUSH_BUTTON);

            touchPress(state);
            advance(400);
            fire(buttonOf(state), touch('touchcancel'));
            settle();

            expect(writes(state)).toEqual({ sent: [1], optimistic: [1] });
        });

        it('ticket 05: mouse events following a touch press again', () => {
            const state = mountState(PUSH_BUTTON);

            touchPress(state);
            advance(400);
            touchRelease(state);
            tap(state, 0);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0, 1, 0] });
        });

        it('ticket 05: a second finger presses again', () => {
            const state = mountState(PUSH_BUTTON);

            touchPress(state);
            advance(400);
            touchPress(state);
            settle();

            expect(writes(state)).toEqual({ sent: [1, 1], optimistic: [1, 1] });
        });
    });

    describe('ending from outside', () => {
        it('V3, V20 (tickets 06 and 07): unmounting inside the debounce window loses the press value', () => {
            const state = mountState(PUSH_BUTTON);

            press(state);
            advance(100);
            state.unmount();
            settle();

            expect(writes(state)).toEqual({ sent: [], optimistic: [1] });
        });

        it('ticket 07: unmounting while holding writes nothing more', () => {
            const state = mountState(PUSH_BUTTON);

            press(state);
            advance(400);
            state.unmount();
            settle();

            expect(writes(state)).toEqual({ sent: [1], optimistic: [1] });
        });

        it('ticket 07: the Sperre taking hold while holding writes nothing, not even on the release', () => {
            const state = mountState(PUSH_BUTTON);

            press(state);
            advance(400);
            state.configure({ onlyDisplay: true });
            settle();
            // React drops mouseup on a disabled button.
            release(state);
            settle();

            expect(writes(state)).toEqual({ sent: [1], optimistic: [1] });
        });
    });

    describe('the keyboard', () => {
        it('a keyboard click (no press and no release) sends nothing', () => {
            const state = mountState(PUSH_BUTTON);

            click(state);
            settle();

            expect(writes(state)).toEqual({ sent: [], optimistic: [] });
        });
    });

    describe('when the widget is no push button', () => {
        it.each([
            ['without the flag', { statePushButton: false }],
            ['without onlyStates', { onlyStates: false }],
            ['with one state', { values_count: 1 }],
            ['with three states', { values_count: 3, value3: '2' }],
            ['with one of two rows blank', { value2: '  ' }],
        ])('%s press, release and leaving send nothing', (_case, data) => {
            const state = mountState({ ...PUSH_BUTTON, ...data });

            press(state);
            advance(400);
            release(state);
            leave(state);
            touchPress(state);
            touchRelease(state);
            settle();

            expect(writes(state)).toEqual({ sent: [], optimistic: [] });
        });
    });
});

describe('StateCollection click up to the socket', () => {
    it('one state: a click sends that state, whatever the current value', () => {
        const state = mountState({ values_count: 1, value1: '5' }, 5);

        click(state);
        settle();

        expect(writes(state)).toEqual({ sent: [5], optimistic: [5] });
    });

    it('two states: each click sends the other state', () => {
        const state = mountState();

        click(state);
        expect(writes(state)).toEqual({ sent: [], optimistic: [1] });
        settle();
        expect(writes(state).sent).toEqual([1]);

        click(state);
        settle();

        expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
    });

    it('two states: clicks inside the debounce send only the last one', () => {
        const state = mountState();

        click(state);
        advance(100);
        click(state);
        settle();

        expect(writes(state)).toEqual({ sent: [0], optimistic: [1, 0] });
    });

    it('two states: a value matching no row sends Wert[1]', () => {
        const state = mountState({}, 7);

        click(state);
        settle();

        expect(writes(state).sent).toEqual([0]);
    });

    it('two states on a boolean OID: sends the typed value, not the row text', () => {
        const state = mountState({ oidObject: object('boolean'), value1: 'false', value2: 'true' }, false);

        click(state);
        settle();

        expect(writes(state).sent).toEqual([true]);
    });

    it('two states on a numeric string value: the String "0" meets the configured 0', () => {
        const state = mountState({}, '0');

        click(state);
        settle();

        expect(writes(state).sent).toEqual([1]);
    });

    it.each([
        ['debounce', {}],
        ['sample interval', { sampleInterval: true, sampleIntervalValue: 200 }],
    ])('V20 (ticket 11): unmounting inside the %s window loses the toggled value', (_case, data) => {
        const state = mountState(data);

        click(state);
        advance(100);
        state.unmount();
        settle();

        expect(writes(state)).toEqual({ sent: [], optimistic: [1] });
    });

    it('sample interval: the value goes out at the end of the window, not of a debounce', () => {
        const state = mountState({ sampleInterval: true, sampleIntervalValue: 200 });

        click(state);
        advance(100);
        click(state);
        advance(99);
        expect(writes(state).sent).toEqual([]);
        advance(1);

        expect(writes(state)).toEqual({ sent: [0], optimistic: [1, 0] });
    });

    it('sample interval: without an interval the field default of 200 ms applies', () => {
        const state = mountState({ sampleInterval: true });

        click(state);
        advance(199);
        expect(writes(state).sent).toEqual([]);
        advance(1);

        expect(writes(state).sent).toEqual([1]);
    });

    it('sample interval wins over a configured delay', () => {
        const state = mountState({ sampleInterval: true, sampleIntervalValue: 200, delay: 1000 });

        click(state);
        advance(200);

        expect(writes(state).sent).toEqual([1]);
    });

    it('a configured delay replaces the default debounce', () => {
        const state = mountState({ delay: 1000 });

        click(state);
        advance(999);
        expect(writes(state).sent).toEqual([]);
        advance(1);

        expect(writes(state).sent).toEqual([1]);
    });

    it('more than two states: a click opens the dialog and sends nothing', () => {
        const state = mountState({ ...THREE_ROWS, onlyStates: true });

        click(state);
        settle();

        expect(dialogOf()).not.toBeNull();
        expect(writes(state)).toEqual({ sent: [], optimistic: [] });
    });

    it('without onlyStates: a click opens the dialog even for two states', () => {
        const state = mountState({ onlyStates: false });

        click(state);
        settle();

        expect(dialogOf()).not.toBeNull();
        expect(writes(state)).toEqual({ sent: [], optimistic: [] });
    });
});

describe('StateCollection change dialog up to the socket', () => {
    describe('the list', () => {
        it('a row sends its typed value behind the debounce and the dialog stays open', () => {
            const state = mountState(THREE_ROWS);

            click(state);
            fire(rowNamed('AUTO'), mouse('click'));
            expect(writes(state)).toEqual({ sent: [], optimistic: [2] });

            advance(300);

            expect(writes(state)).toEqual({ sent: [2], optimistic: [2] });
            expect(dialogOf()).not.toBeNull();
        });

        it('two rows inside the debounce send only the last one', () => {
            const state = mountState(THREE_ROWS);

            click(state);
            fire(rowNamed('AUTO'), mouse('click'));
            advance(100);
            fire(rowNamed('ON'), mouse('click'));
            settle();

            expect(writes(state)).toEqual({ sent: [1], optimistic: [2, 1] });
        });

        it('closing the dialog inside the debounce still sends: the write belongs to the body', () => {
            const state = mountState(THREE_ROWS);

            click(state);
            fire(rowNamed('AUTO'), mouse('click'));
            closeDialog();
            settle();

            expect(dialogOf()).toBeNull();
            expect(writes(state).sent).toEqual([2]);
        });

        it.each([
            ['number', '0', 0],
            ['number', '50', 50],
            ['number', '2.5', 2.5],
            ['string', 'aus', 'aus'],
            ['string', '2', '2'],
            ['boolean', 'true', true],
            ['boolean', 'false', false],
            ['boolean', '1', false],
            ['mixed', 'true', true],
            ['mixed', '50', 50],
            ['mixed', 'text', 'text'],
        ])('a %s OID with the row value %j sends %j', (type, value1, sent) => {
            const state = mountState(
                { onlyStates: false, oidObject: object(type), values_count: 1, value1, alias1: 'A' },
                null,
            );

            click(state);
            fire(rowNamed('A'), mouse('click'));
            settle();

            expect(writes(state).sent).toEqual([sent]);
        });

        it('a row on a number OID that is no number sends nothing', () => {
            const state = mountState({ onlyStates: false, value1: 'abc', alias1: 'A' }, 1);

            click(state);
            fire(rowNamed('A'), mouse('click'));
            settle();

            expect(writes(state)).toEqual({ sent: [], optimistic: [] });
        });

        it('non-integer values keep the order of the rows', () => {
            const state = mountState({
                onlyStates: false,
                oidObject: object('string'),
                value1: 'b',
                alias1: 'first',
                value2: 'a',
                alias2: 'second',
            });

            click(state);

            expect(rowTexts()).toEqual(['first', 'second']);
        });

        it('ticket 13: integer values keep the order of the rows', () => {
            const state = mountState({
                ...THREE_ROWS,
                value1: '100',
                alias1: 'hundert',
                value2: '50',
                alias2: 'fünfzig',
                value3: '0',
                alias3: 'null',
            });

            click(state);

            expect(rowTexts()).toEqual(['hundert', 'fünfzig', 'null']);
        });

        it('ticket 13: duplicate values stay rows of their own, each with its alias', () => {
            const state = mountState({
                ...THREE_ROWS,
                value1: '1',
                alias1: 'A',
                value2: '1',
                alias2: 'B',
                value3: '2',
                alias3: 'C',
            });

            click(state);

            expect(rowTexts()).toEqual(['A', 'B', 'C']);
        });

        it('ticket 13: a row without an alias on an object copy without a unit key reads the bare value', () => {
            const state = mountState({ ...THREE_ROWS, alias1: '', alias2: undefined });

            click(state);

            expect(rowTexts()).toEqual(['0', '1', 'AUTO']);
        });

        it.each([
            ['an empty alias', ''],
            ['a blank alias', '   '],
            ['no alias', undefined],
        ])('%s shows the value with the unit of the object', (_case, alias1) => {
            const state = mountState({
                ...THREE_ROWS,
                oidObject: object('number', { unit: '°C' }),
                alias1,
            });

            click(state);

            expect(rowTexts()).toEqual(['0°C', 'ON', 'AUTO']);
        });

        it('an empty unit on the object shows the bare value', () => {
            const state = mountState({ ...THREE_ROWS, oidObject: object('number', { unit: '' }), alias1: '' });

            click(state);

            expect(rowTexts()).toEqual(['0', 'ON', 'AUTO']);
        });

        it('ticket 14: the row with the current value is marked, the others are not', () => {
            const state = mountState(THREE_ROWS, 1);

            click(state);

            expect(markedRows()).toEqual(['ON']);
        });
    });

    describe('the slider', () => {
        const SLIDER = { ...THREE_ROWS, oidObject: object('number', RANGE) };

        it('sits on the current value inside the bounds of the object copy', () => {
            const state = mountState(SLIDER, 40);

            click(state);

            expect(thumb()).toBe(40);
            expect(rangeOf().getAttribute('aria-valuemin')).toBe('0');
            expect(rangeOf().getAttribute('aria-valuemax')).toBe('100');
            expect(writes(state)).toEqual({ sent: [], optimistic: [] });
        });

        it('a drag commits every step optimistically and sends the last one behind the debounce', () => {
            const state = mountState(SLIDER, 40);

            click(state);
            drag(50);
            advance(100);
            drag(60);
            advance(100);
            drag(70);
            expect(writes(state)).toEqual({ sent: [], optimistic: [50, 60, 70] });
            expect(thumb()).toBe(70);

            advance(299);
            expect(writes(state).sent).toEqual([]);
            advance(1);

            expect(writes(state)).toEqual({ sent: [70], optimistic: [50, 60, 70] });
        });

        it('steps apart by more than the debounce send each one', () => {
            const state = mountState(SLIDER, 40);

            click(state);
            drag(50);
            advance(300);
            drag(60);
            settle();

            expect(writes(state).sent).toEqual([50, 60]);
        });

        it('a list row moves the thumb and sends its value', () => {
            const state = mountState(SLIDER, 40);

            click(state);
            fire(rowNamed('AUTO'), mouse('click'));
            settle();

            expect(thumb()).toBe(2);
            expect(writes(state).sent).toEqual([2]);
        });

        it('the own echo does not move the thumb while the drag is the last word', () => {
            const state = mountState(SLIDER, 40);

            click(state);
            drag(70);
            state.backend(55, 2000);

            expect(thumb()).toBe(70);
        });

        it('V11 (ticket 16): the step is 1, whatever the object copy says', () => {
            const state = mountState(
                { ...THREE_ROWS, oidObject: object('number', { minValue: 0, maxValue: 1, step: 0.1 }) },
                0,
            );

            click(state);

            expect(rangeOf().getAttribute('step')).toBe('1');
        });

        it('V6 (ticket 15): a numeric string seeds the thumb at 0', () => {
            const state = mountState(SLIDER, '50');

            click(state);

            expect(thumb()).toBe(0);
        });
    });

    describe('Fremdänderung while the dialog is open', () => {
        const SLIDER = { ...THREE_ROWS, oidObject: object('number', RANGE) };

        it('V5 (ticket 15): the button follows, the thumb stays where it was', () => {
            const state = mountState(SLIDER, 10);

            click(state);
            expect(thumb()).toBe(10);

            state.backend(70, 2000);

            expect(buttonOf(state).textContent).toBe('70');
            expect(thumb()).toBe(10);
        });

        it('the dialog stays open and nothing is written', () => {
            const state = mountState(SLIDER, 10);

            click(state);
            state.backend(70, 2000);
            settle();

            expect(dialogOf()).not.toBeNull();
            expect(writes(state)).toEqual({ sent: [], optimistic: [] });
        });

        it('reopening seeds the thumb from the changed value', () => {
            const state = mountState(SLIDER, 10);

            click(state);
            state.backend(70, 2000);
            closeDialog();
            click(state);

            expect(thumb()).toBe(70);
        });

        it('ticket 14: the mark follows the change and the dialog stays open', () => {
            const state = mountState(SLIDER, 0);

            click(state);
            expect(markedRows()).toEqual(['OFF']);

            state.backend(1, 2000);

            expect(markedRows()).toEqual(['ON']);
            expect(dialogOf()).not.toBeNull();
        });
    });

    describe('the slider gate', () => {
        it('a number OID with both bounds on the object copy and no onlyStates earns the slider', () => {
            const state = mountState(
                { ...THREE_ROWS, oidObject: object('number', { minValue: -20, maxValue: 40 }) },
                5,
            );

            click(state);

            expect(rangeOf().getAttribute('aria-valuemin')).toBe('-20');
            expect(rangeOf().getAttribute('aria-valuemax')).toBe('40');
        });

        it.each([
            ['an old widget without a range', { oidObject: object('number') }],
            ['only a lower bound', { oidObject: object('number', { minValue: 0 }) }],
            ['only an upper bound', { oidObject: object('number', { maxValue: 100 }) }],
            ['a range on the widget root only', { oidObject: object('number'), minValue: 0, maxValue: 100 }],
            ['a range with onlyStates', { oidObject: object('number', RANGE), onlyStates: true }],
            ['a string OID with a range', { oidObject: object('string', RANGE) }],
            ['a mixed OID with a range', { oidObject: object('mixed', RANGE) }],
            ['a boolean OID with a range', { oidObject: object('boolean', RANGE) }],
        ])('%s gets the list without a slider', (_case, data) => {
            const state = mountState({ ...THREE_ROWS, ...data });

            click(state);

            expect(dialogOf()).not.toBeNull();
            expect(sliderOf()).toBeNull();
            expect(rowsOf().length).toBeGreaterThan(0);
        });

        it('a number OID with a range and no rows gets the slider alone', () => {
            const state = mountState({ ...THREE_ROWS, values_count: 0, oidObject: object('number', RANGE) });

            click(state);

            expect(sliderOf()).not.toBeNull();
            expect(rowsOf()).toEqual([]);
        });

        it.each([
            ['V7 (ticket 17): a string OID without rows', { oidObject: object('string'), onlyStates: false }],
            ['V7 (ticket 17): a stale onlyStates on a number OID without rows', { oidObject: object('number', RANGE) }],
            [
                'V7 (ticket 17): a number OID without rows and without a range',
                { oidObject: object('number'), onlyStates: false },
            ],
        ])('%s opens an empty dialog', (_case, data) => {
            const state = mountState({ ...data, values_count: 0 });

            click(state);
            settle();

            expect(dialogOf()).not.toBeNull();
            expect(rowsOf()).toEqual([]);
            expect(sliderOf()).toBeNull();
            expect(writes(state)).toEqual({ sent: [], optimistic: [] });
        });

        it.each([
            ['min = max', { minValue: 5, maxValue: 5 }],
            ['min > max', { minValue: 10, maxValue: 0 }],
        ])('V12 (ticket 17): %s still gets a slider', (_case, range) => {
            const state = mountState({ ...THREE_ROWS, oidObject: object('number', range) }, 5);

            click(state);

            expect(sliderOf()).not.toBeNull();
        });
    });

    describe('the title chain', () => {
        it.each([
            ['the configured header', { header: 'Kopf', oidObject: object('number', { name: 'Objekt' }) }, 'Kopf'],
            ['the name of the object', { oidObject: object('number', { name: 'Objekt' }) }, 'Objekt'],
            ['the translated fallback', {}, 'state_change_dialog_title'],
        ])('the dialog title falls back to %s', (_case, data, title) => {
            const state = mountState({ ...THREE_ROWS, ...data });

            click(state);

            expect(titleOf()).toBe(title);
        });

        it('the configured header of the active row wins over the base header', () => {
            const state = mountState({ ...THREE_ROWS, header: 'Kopf', header2: 'Zeile' }, 1);

            click(state);

            expect(titleOf()).toBe('Zeile');
        });
    });

    describe('the colours', () => {
        const paperOf = (): HTMLElement => {
            const paper = document.querySelector<HTMLElement>('.MuiDialog-paper');
            if (!paper) {
                throw new Error('the dialog rendered no paper');
            }
            return paper;
        };

        /** The colour a browser draws: happy-dom hands the `inherit` keyword down instead of resolving it. */
        const paintedColor = (element: Element): string => {
            const { color } = getComputedStyle(element);
            return color === 'inherit' && element.parentElement ? paintedColor(element.parentElement) : color;
        };

        const titleElementOf = (): HTMLElement => {
            const title = document.querySelector<HTMLElement>('.MuiDialogTitle-root');
            if (!title) {
                throw new Error('the dialog rendered no title');
            }
            return title;
        };

        const listOf = (): HTMLElement => {
            const list = document.querySelector<HTMLElement>('.MuiDialog-root .MuiList-root');
            if (!list) {
                throw new Error('the dialog rendered no list');
            }
            return list;
        };

        const cardOf = (): HTMLElement => {
            const card = document.querySelector<HTMLElement>('.MuiDialogContent-root > .MuiPaper-root');
            if (!card) {
                throw new Error('the dialog rendered no inner card');
            }
            return card;
        };

        const GRADIENT = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';

        it('V15 (ticket 18): the widget background reaches the dialog paper and shows through the inner card', () => {
            const state = mountState(THREE_ROWS, 0, { 'background-color': '#123456' });

            click(state);

            expect(getComputedStyle(paperOf()).backgroundColor).toBe('#123456');
            expect(getComputedStyle(cardOf()).backgroundColor).toBe('transparent');
        });

        it('V15 (ticket 18): the text colour reaches the dialog paper and the inner card inherits it', () => {
            const state = mountState({ ...THREE_ROWS, textColor: '#0000aa' });

            click(state);

            expect(getComputedStyle(paperOf()).color).toBe('#0000aa');
            expect(paintedColor(cardOf())).toBe('#0000aa');
        });

        it('V15 (ticket 18): a gradient as text colour clips through the title, the list paints its Vollfarbe', () => {
            const state = mountState({ ...THREE_ROWS, textColor: GRADIENT });

            click(state);

            expect(getComputedStyle(titleElementOf()).color).toBe('transparent');
            expect(paintedColor(listOf())).toBe('rgb(128, 0, 128)');
        });

        describe('ticket 18', () => {
            it('the background field reaches the dialog when the widget has no CSS background colour', () => {
                const state = mountState({ ...THREE_ROWS, background: '#654321' });

                click(state);

                expect(getComputedStyle(paperOf()).backgroundColor).toBe('#654321');
            });

            it('the CSS background colour wins over the background field', () => {
                const state = mountState({ ...THREE_ROWS, background: '#654321' }, 0, {
                    'background-color': '#123456',
                });

                click(state);

                expect(getComputedStyle(paperOf()).backgroundColor).toBe('#123456');
            });

            it('without colours the inner card keeps the theme surface and the theme text', () => {
                const state = mountState(THREE_ROWS);

                click(state);

                expect(getComputedStyle(cardOf()).backgroundColor).toBe('#fff');
                expect(paintedColor(cardOf())).toBe('#3399CC');
                expect(paintedColor(listOf())).toBe('#3399CC');
            });
        });

        it('without colours the paper keeps the theme surface', () => {
            const state = mountState(THREE_ROWS);

            click(state);

            expect(getComputedStyle(paperOf()).backgroundColor).toBe('#fff');
        });
    });
});

describe('StateCollection change dialog marks the active row (ticket 14)', () => {
    it('marks the row of value 50 among 100, 50 and 0', () => {
        const state = mountState(
            {
                ...THREE_ROWS,
                value1: '100',
                alias1: 'hundert',
                value2: '50',
                alias2: 'fünfzig',
                value3: '0',
                alias3: 'null',
            },
            50,
        );

        click(state);

        expect(markedRows()).toEqual(['fünfzig']);
    });

    it('marks every duplicate of the current value', () => {
        const state = mountState(
            { ...THREE_ROWS, value1: '1', alias1: 'A', value2: '1', alias2: 'B', value3: '2', alias3: 'C' },
            1,
        );

        click(state);

        expect(markedRows()).toEqual(['A', 'B']);
    });

    it('marks no row for a value that matches none', () => {
        const state = mountState(THREE_ROWS, 7);

        click(state);

        expect(markedRows()).toEqual([]);
    });

    it('a chosen row takes the mark at once and the dialog stays open', () => {
        const state = mountState(THREE_ROWS, 0);

        click(state);
        fire(rowNamed('AUTO'), mouse('click'));

        expect(markedRows()).toEqual(['AUTO']);
        expect(dialogOf()).not.toBeNull();
    });
});

describe('StateCollection Sperre up to the socket', () => {
    const SPERREN: [string, Record<string, unknown>][] = [
        ['onlyDisplay', { onlyDisplay: true }],
        ['write === false', { oidObject: object('number', { write: false }) }],
    ];

    it.each(SPERREN)('%s: a toggle click sends nothing', (_case, data) => {
        const state = mountState(data);

        click(state);
        settle();

        expect(writes(state)).toEqual({ sent: [], optimistic: [] });
    });

    it.each(SPERREN)('%s: a click on more than two states opens no dialog', (_case, data) => {
        const state = mountState({ ...THREE_ROWS, ...data });

        click(state);

        expect(dialogOf()).toBeNull();
    });

    it.each(SPERREN)('%s: a push-button press and release send nothing', (_case, data) => {
        const state = mountState({ ...PUSH_BUTTON, ...data });

        tap(state, 400);
        settle();

        expect(writes(state)).toEqual({ sent: [], optimistic: [] });
    });

    it('write === false: the guard of the Schreibkette holds back what disabled lets through', () => {
        const state = mountState({ ...PUSH_BUTTON, oidObject: object('number', { write: false }) });

        leave(state);
        touchPress(state);
        touchRelease(state);
        settle();

        expect(writes(state)).toEqual({ sent: [], optimistic: [] });
    });

    it('V1 (ticket 04): onlyDisplay does not hold back the mouseout, React passes it to a disabled button', () => {
        const state = mountState({ ...PUSH_BUTTON, onlyDisplay: true });

        leave(state);
        settle();

        expect(writes(state)).toEqual({ sent: [0], optimistic: [0] });
    });

    it('ticket 05: onlyDisplay does not hold back a touch, React passes it to a disabled button', () => {
        const state = mountState({ ...PUSH_BUTTON, onlyDisplay: true });

        touchPress(state);
        advance(400);
        touchRelease(state);
        settle();

        expect(writes(state)).toEqual({ sent: [1, 0], optimistic: [1, 0] });
    });

    it('onlyDisplay taking hold while the dialog is open: the row still sends', () => {
        const state = mountState(THREE_ROWS);

        click(state);
        state.configure({ onlyDisplay: true });
        fire(rowNamed('AUTO'), mouse('click'));
        settle();

        expect(buttonOf(state).disabled).toBe(true);
        expect(writes(state).sent).toEqual([2]);
    });

    it('write === false taking hold while the dialog is open: the guard holds the row back', () => {
        const state = mountState(THREE_ROWS);

        click(state);
        state.configure({ oidObject: object('number', { write: false }) });
        fire(rowNamed('AUTO'), mouse('click'));
        settle();

        expect(writes(state)).toEqual({ sent: [], optimistic: [] });
    });
});
