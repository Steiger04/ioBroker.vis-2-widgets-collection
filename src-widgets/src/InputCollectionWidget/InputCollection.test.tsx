/**
 * InputCollection — the display-first inline edit at the body's interface.
 *
 * @module widgets/InputCollection.test
 * @remarks
 * The yardstick for the session and field refactors (ADR-0109): visible element, focus and written
 * value, through the real `useInlineEdit` and `useValueState` on the scene seam. Writes are read
 * at `setValue` behind the debounce, the optimistic patch lands the way the host's `setState` does,
 * and a Fremdänderung is a re-render over new scene values.
 *
 * A case named `(Ist-Verhalten, kippt in NN)` pins today's behaviour on purpose: ticket NN of
 * eingabe-architektur-2026-11 flips exactly that case in its fix commit.
 *
 * What happy-dom does not show stays a live check (ticket 13):
 * - the real `stepDown` of the number spinner, which is the jump ticket 07 removes (M3); here only
 *   the `min`/`max` attributes are visible;
 * - the real blur a browser fires when the focused field unmounts (M6, M7); leaving by Enter or OK
 *   fires none here, so "at most one write" is only half proven;
 * - the effective style of the field (M2): happy-dom shows the rules on each element but does not
 *   resolve the input's `inherit` and `currentcolor`, so only those rules are pinned here.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // CollectionBase pulls Generic (extends window.visRxWidget, undefined outside the
    // vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { act } from 'react';

import { DEFAULT_WRITE_DELAY_MS } from '../lib/constants';
import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import InputCollection from './InputCollection';

installInertResizeObserver();

const mount = testScopedMount();

const OID = 'demo.0.input';

type Values = Record<string, unknown>;
type Updater = (prev: { values: Values }) => { values: Values };

/** The bound object of the given type — `oidObject._id` has to be in the widget data. */
const object = (type: string, extra: Record<string, unknown> = {}): Record<string, unknown> => ({
    _id: OID,
    type,
    ...extra,
});

/** Live mode on a number OID without header and footer, whose text would shadow the display. */
const BASE_DATA = {
    oid: OID,
    oidObject: object('number'),
    noHeader: true,
    noFooter: true,
    noHeaderIcon: true,
    inputPadding: 0,
};

const OK_MODE = { showOkButton: true };

const sceneOf = (data: Record<string, unknown>, values: Values): ReturnType<typeof collectionScene> => {
    const scene = collectionScene('input-test', { ...BASE_DATA, ...data }, undefined);
    // The scene alone carries only `<oid>.val`; the `.lc` decides what counts as a change.
    scene.context.values = values;
    return scene;
};

interface MountedInput extends MountedCollectionBody {
    /** A state update from outside: the host re-renders over the new value and `lc`. */
    backend: (value: unknown, lc: number) => void;
    /** New widget data, the way the editor re-renders the widget. */
    configure: (data: Record<string, unknown>) => void;
}

/** Mounts the body at `value` (`lc` 1000) with the optimistic patch landing like the host's `setState`. */
const mountInput = (data: Record<string, unknown> = {}, value: unknown = 40): MountedInput => {
    let currentData = data;
    let values: Values = { [`${OID}.val`]: value, [`${OID}.lc`]: 1000 };
    const handle = mount(InputCollection, sceneOf(currentData, values));
    const land = (next: Values): void => {
        values = next;
        handle.rerender(sceneOf(currentData, values));
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

/** The input element, or `null` while the display shows. */
const fieldOf = (container: HTMLElement): HTMLInputElement | null => container.querySelector('input');

const requireField = (container: HTMLElement): HTMLInputElement => {
    const field = fieldOf(container);
    if (!field) {
        throw new Error('the body rendered no field');
    }
    return field;
};

/** The value text of the display; clicking it bubbles to the display's click handler. */
const displayOf = (container: HTMLElement): HTMLElement => {
    const text = container.querySelector<HTMLElement>('.BASE-PAPER-1 .MuiTypography-root');
    if (!text) {
        throw new Error('the body rendered no display');
    }
    return text;
};

const click = (element: HTMLElement): void => {
    act(() => {
        element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

/** Clicks the display and returns the field the session opened. */
const start = (container: HTMLElement): HTMLInputElement => {
    click(displayOf(container));
    return requireField(container);
};

/** Types like a user would: the native value setter plus the `input` event React listens to. */
const type = (container: HTMLElement, value: string): void => {
    const field = requireField(container);
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(field, value);
        field.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const press = (container: HTMLElement, key: string): void => {
    const field = requireField(container);
    act(() => {
        field.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    });
};

const blur = (container: HTMLElement): void => {
    const field = requireField(container);
    act(() => {
        field.blur();
    });
};

const okButtonOf = (container: HTMLElement): HTMLButtonElement | null => container.querySelector('button');

const clickOk = (container: HTMLElement): void => {
    const button = okButtonOf(container);
    if (!button) {
        throw new Error('the body rendered no OK button');
    }
    click(button);
};

/** Lets the debounced backend write fire. */
const flushWrites = (): void => {
    act(() => {
        vi.advanceTimersByTime(DEFAULT_WRITE_DELAY_MS);
    });
};

const isRed = (container: HTMLElement): boolean => requireField(container).getAttribute('aria-invalid') === 'true';

/** The three ways the OK mode commits. */
const COMMIT_WAYS: [string, (container: HTMLElement) => void][] = [
    ['blur', blur],
    ['Enter', (container): void => press(container, 'Enter')],
    ['the OK button', clickOk],
];

/** The two explicit commits of the OK mode. */
const EXPLICIT_COMMITS = COMMIT_WAYS.slice(1);

/** The two ways the live mode leaves. */
const LIVE_LEAVE_WAYS = COMMIT_WAYS.slice(0, 2);

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('InputCollection display', () => {
    it('shows the value instead of a field', () => {
        const { container } = mountInput();

        expect(fieldOf(container)).toBeNull();
        expect(displayOf(container).textContent).toBe('40');
    });

    it('starts the session on a click: the field replaces the display and carries the value', () => {
        const { container } = mountInput();

        const field = start(container);

        expect(field.value).toBe('40');
        expect(container.querySelector('.BASE-PAPER-1 .MuiTypography-root')).toBeNull();
    });

    it('gives the field the focus', () => {
        const { container } = mountInput();

        const field = start(container);

        expect(document.activeElement).toBe(field);
    });

    it('shows the text cursor on the display of an editable widget', () => {
        const { container } = mountInput();
        const clickable = displayOf(container).parentElement?.parentElement;

        expect(clickable && getComputedStyle(clickable).cursor).toBe('text');
    });

    it('leaves the object unit out of the display (Ist-Verhalten, kippt in 12)', () => {
        const { container } = mountInput({ oidObject: object('number', { unit: '°C' }) });

        expect(displayOf(container).textContent).toBe('40');
    });

    it('appends the root unit field to the display (Ist-Verhalten, kippt in 12)', () => {
        const { container } = mountInput({ unit: 'kWh' });

        expect(displayOf(container).textContent).toBe('40kWh');
    });
});

describe('InputCollection Sperre', () => {
    describe.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: object('number', { write: false }) }],
    ])('with %s', (_case, data) => {
        it('does not start the session on a click', () => {
            const { container } = mountInput(data);

            click(displayOf(container));

            expect(fieldOf(container)).toBeNull();
            expect(displayOf(container).textContent).toBe('40');
        });

        it('shows the default cursor on the display', () => {
            const { container } = mountInput(data);
            const clickable = displayOf(container).parentElement?.parentElement;

            expect(clickable && getComputedStyle(clickable).cursor).toBe('default');
        });
    });

    it('is checked at the start only: a running session survives a lock arriving later', () => {
        const { container, configure } = mountInput();
        start(container);

        configure({ onlyDisplay: true });

        expect(fieldOf(container)).not.toBeNull();
    });
});

describe('InputCollection invalid OID type', () => {
    it.each([
        ['a boolean OID', object('boolean'), 'collection_base_invalid_type'],
        ['a json OID', object('json'), 'collection_base_invalid_type'],
        ['no OID object yet', undefined, 'collection_base_select_oid'],
    ])('renders the notice and no field for %s, even on a click', (_case, oidObject, notice) => {
        const { container } = mountInput({ oidObject });
        const text = container.querySelector<HTMLElement>('.BASE-PAPER-0 .MuiTypography-root');
        if (!text) {
            throw new Error('the frame rendered no notice');
        }

        click(text);

        expect(text.textContent).toBe(notice);
        expect(fieldOf(container)).toBeNull();
    });
});

describe('InputCollection field attributes', () => {
    it.each([
        ['number', 'number'],
        ['string', 'text'],
        ['mixed', 'text'],
    ])('renders a %s OID as a %s field', (oidType, inputType) => {
        const { container } = mountInput({ oidObject: object(oidType) });

        expect(start(container).type).toBe(inputType);
    });

    it('puts step, min and max on a number field', () => {
        const { container } = mountInput({ step: 0.5, minValue: 10, maxValue: 90 });
        const field = start(container);

        expect(['step', 'min', 'max'].map(name => field.getAttribute(name))).toEqual(['0.5', '10', '90']);
    });

    it('puts none of them on a number field without configured values', () => {
        const { container } = mountInput();
        const field = start(container);

        expect(['step', 'min', 'max'].map(name => field.getAttribute(name))).toEqual([null, null, null]);
    });

    it.each(['string', 'mixed'])('puts none of them on a %s field', oidType => {
        const { container } = mountInput({ oidObject: object(oidType), step: 0.5, minValue: 10, maxValue: 90 });
        const field = start(container);

        expect(['step', 'min', 'max'].map(name => field.getAttribute(name))).toEqual([null, null, null]);
    });

    it('turns emptied number fields into 0 (Ist-Verhalten, kippt in 06)', () => {
        const { container } = mountInput({ step: '', minValue: '', maxValue: '' });
        const field = start(container);

        expect(['step', 'min', 'max'].map(name => field.getAttribute(name))).toEqual(['0', '0', '0']);
    });

    it.each([
        ['a start value above the maximum', 500, undefined],
        ['a start value below the minimum', -5, undefined],
        ['a typed draft above the maximum', 40, '500'],
    ])('keeps both limits on %s (Ist-Verhalten, kippt in 07)', (_case, value, typed) => {
        const { container } = mountInput({ minValue: 0, maxValue: 100 }, value);
        const field = start(container);
        if (typed !== undefined) {
            type(container, typed);
        }

        expect([field.getAttribute('min'), field.getAttribute('max')]).toEqual(['0', '100']);
    });

    it('shows the object unit as the field adornment', () => {
        const { container } = mountInput({ oidObject: object('number', { unit: '°C' }) });
        start(container);

        expect(container.querySelector('.MuiInputAdornment-root')?.textContent).toBe('°C');
    });

    it('shows no adornment without an object unit, even with a root unit field', () => {
        const { container } = mountInput({ unit: 'kWh' });
        start(container);

        expect(container.querySelector('.MuiInputAdornment-root')).toBeNull();
    });

    // The `sx` stops at the FormControl root: the InputBase below it sets its own size and the
    // theme text colour (Theme('light') → #3399CC), and the input inherits from there.
    it('keeps value size and text colour away from the input and its InputBase (Ist-Verhalten, kippt in 09)', () => {
        const { container } = mountInput({ textColor: '#aa0000', valueSize: 200 });
        const input = getComputedStyle(start(container));
        const base = getComputedStyle(container.querySelector('.MuiInputBase-root') as HTMLElement);

        expect([input.color, base.color]).toEqual(['currentcolor', '#3399CC']);
        expect([input.fontSize, base.fontSize]).toEqual(['inherit', '16px']);
    });
});

describe('InputCollection live mode', () => {
    it('has no OK button', () => {
        const { container } = mountInput();
        start(container);

        expect(okButtonOf(container)).toBeNull();
    });

    it('patches every keystroke at once and writes the last one behind the debounce', () => {
        const { container, setState, setValue } = mountInput();
        start(container);

        type(container, '4');
        type(container, '41');

        expect(requireField(container).value).toBe('41');
        expect(setState).toHaveBeenCalledTimes(2);
        expect(setValue).not.toHaveBeenCalled();

        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });

    it.each([
        ['number', '41', 41],
        ['string', '41', '41'],
        ['mixed', '41', 41],
        ['mixed', 'true', true],
        ['mixed', 'abc', 'abc'],
    ])('converts on a %s OID: %s writes %j', (oidType, typed, written) => {
        const { container, setValue } = mountInput({ oidObject: object(oidType) });
        start(container);

        type(container, typed);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, written]]);
    });

    it('writes nothing for a cleared number field', () => {
        const { container, setState, setValue } = mountInput();
        start(container);

        type(container, '');
        flushWrites();

        expect(requireField(container).value).toBe('');
        expect(setState).not.toHaveBeenCalled();
        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(LIVE_LEAVE_WAYS)('leaves on %s without a further write, showing the typed value', (_way, leave) => {
        const { container, setState, setValue } = mountInput();
        start(container);
        type(container, '41');

        leave(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(displayOf(container).textContent).toBe('41');
        expect(setState).toHaveBeenCalledTimes(1);
        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });

    it.each(LIVE_LEAVE_WAYS)('writes nothing on %s without a keystroke', (_way, leave) => {
        const { container, setState, setValue } = mountInput();
        start(container);

        leave(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(setState).not.toHaveBeenCalled();
        expect(setValue).not.toHaveBeenCalled();
    });
});

describe('InputCollection OK mode', () => {
    it('only keeps a draft while typing', () => {
        const { container, setState, setValue } = mountInput(OK_MODE);
        start(container);

        type(container, '41');
        flushWrites();

        expect(requireField(container).value).toBe('41');
        expect(setState).not.toHaveBeenCalled();
        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(COMMIT_WAYS)('writes a changed draft once and leaves on %s', (_way, commit) => {
        const { container, setState, setValue } = mountInput(OK_MODE);
        start(container);
        type(container, '41');

        commit(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(displayOf(container).textContent).toBe('41');
        expect(setState).toHaveBeenCalledTimes(1);
        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });

    // Without the prevented default a browser would blur the field before the click registers;
    // happy-dom moves no focus on a mouseDown, so the prevented default is what this case proves.
    it('prevents the default of a mouseDown on OK and stays in the session', () => {
        const { container, setValue } = mountInput(OK_MODE);
        start(container);
        type(container, '41');
        const mouseDown = new MouseEvent('mousedown', { bubbles: true, cancelable: true });

        act(() => {
            okButtonOf(container)?.dispatchEvent(mouseDown);
        });
        flushWrites();

        expect(mouseDown.defaultPrevented).toBe(true);
        expect(fieldOf(container)).not.toBeNull();
        expect(setValue).not.toHaveBeenCalled();
    });

    it('writes a changed draft over a Fremdänderung', () => {
        const { container, backend, setValue } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);
        type(container, '41');

        clickOk(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });

    it('converts a typed "007" on a mixed OID to 7', () => {
        const { container, setValue } = mountInput({ ...OK_MODE, oidObject: object('mixed') }, 'abc');
        start(container);
        type(container, '007');

        clickOk(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 7]]);
    });

    it.each(EXPLICIT_COMMITS)('sends an unchanged, unconverted value again on %s', (_way, commit) => {
        const { container, setValue } = mountInput(OK_MODE);
        start(container);

        commit(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(setValue.mock.calls).toEqual([[OID, 40]]);
    });

    it('writes the start value on a blur without a change (Ist-Verhalten, kippt in 05)', () => {
        const { container, setValue } = mountInput(OK_MODE);
        start(container);

        blur(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 40]]);
    });

    it('overwrites a Fremdänderung with the untouched draft on blur (Ist-Verhalten, kippt in 05)', () => {
        const { container, backend, setValue } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);

        blur(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 40]]);
    });

    it('writes a draft typed back to the start value on blur (Ist-Verhalten, kippt in 05)', () => {
        const { container, setValue } = mountInput(OK_MODE);
        start(container);
        type(container, '41');
        type(container, '40');

        blur(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 40]]);
    });

    describe.each(EXPLICIT_COMMITS)('on %s without a change', (_way, commit) => {
        it('turns a mixed "007" into 7 (Ist-Verhalten, kippt in 05)', () => {
            const { container, setValue } = mountInput({ ...OK_MODE, oidObject: object('mixed') }, '007');
            start(container);

            commit(container);
            flushWrites();

            expect(setValue.mock.calls).toEqual([[OID, 7]]);
        });

        it('turns a null on a string OID into an empty string (Ist-Verhalten, kippt in 05)', () => {
            const { container, setValue } = mountInput({ ...OK_MODE, oidObject: object('string') }, null);
            start(container);

            commit(container);
            flushWrites();

            expect(setValue.mock.calls).toEqual([[OID, '']]);
        });
    });
});

describe('InputCollection Escape', () => {
    it('discards the OK-mode draft: nothing is written, the display and the next session show the backend value', () => {
        const { container, setState, setValue } = mountInput(OK_MODE);
        start(container);
        type(container, '41');

        press(container, 'Escape');
        flushWrites();

        expect(setState).not.toHaveBeenCalled();
        expect(setValue).not.toHaveBeenCalled();
        expect(displayOf(container).textContent).toBe('40');
        expect(start(container).value).toBe('40');
    });

    it('leaves the live mode without a further write: the keystroke already sent stays', () => {
        const { container, setState, setValue } = mountInput();
        start(container);
        type(container, '41');

        press(container, 'Escape');
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(displayOf(container).textContent).toBe('41');
        expect(setState).toHaveBeenCalledTimes(1);
        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });
});

describe('InputCollection draft against the backend', () => {
    it('holds the draft while a Fremdänderung lands during the session', () => {
        const { container, backend } = mountInput(OK_MODE);
        start(container);
        type(container, '41');

        backend(50, 2000);

        expect(requireField(container).value).toBe('41');
    });

    it('starts the next session from the value the backend reached in between', () => {
        const { container, backend } = mountInput();

        backend(50, 2000);

        expect(displayOf(container).textContent).toBe('50');
        expect(start(container).value).toBe('50');
    });
});

describe('InputCollection red field', () => {
    it('stays calm on a session without a backend change', () => {
        const { container } = mountInput();
        start(container);

        expect(isRed(container)).toBe(false);
    });

    it('turns red on a significant Fremdänderung during the session', () => {
        const { container, backend } = mountInput();
        start(container);

        backend(50, 2000);

        expect(isRed(container)).toBe(true);
    });

    it('stays calm on jitter alone', () => {
        const { container, backend } = mountInput();
        start(container);

        backend(40.5, 2000);

        expect(isRed(container)).toBe(false);
    });

    it('stays calm on the echo of the own write', () => {
        const { container, backend } = mountInput();
        start(container);
        type(container, '41');
        flushWrites();

        backend(41, 2000);

        expect(isRed(container)).toBe(false);
    });

    it("ends with the user's own keystroke in live mode", () => {
        const { container, backend } = mountInput();
        start(container);
        backend(50, 2000);

        type(container, '41');

        expect(isRed(container)).toBe(false);
    });

    it('is red on entering after a change before the session (Ist-Verhalten, kippt in 04)', () => {
        const { container, backend } = mountInput();
        backend(50, 2000);

        start(container);

        expect(isRed(container)).toBe(true);
    });

    it('lets jitter take the red away during a conflict (Ist-Verhalten, kippt in 04)', () => {
        const { container, backend } = mountInput();
        start(container);
        backend(50, 2000);

        backend(50.5, 3000);

        expect(isRed(container)).toBe(false);
    });
});
