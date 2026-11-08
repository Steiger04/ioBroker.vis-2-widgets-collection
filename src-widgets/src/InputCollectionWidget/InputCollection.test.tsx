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

import type { Connection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, RxWidgetInfoFieldChangeHandler, WidgetData } from '@iobroker/types-vis-2';

import commonObjectFields from '../lib/commonObjectFields';
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

    it('appends the object unit to the display, with no matching row (12)', () => {
        const { container } = mountInput({ oidObject: object('number', { unit: '°C' }) });

        expect(displayOf(container).textContent).toBe('40°C');
    });

    it('leaves the root unit field out of the display: it only feeds the object copy (12)', () => {
        const { container } = mountInput({ unit: 'kWh' });

        expect(displayOf(container).textContent).toBe('40');
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

    it('sets no attribute for emptied number fields (06)', () => {
        const { container } = mountInput({ step: '', minValue: '', maxValue: '' });
        const field = start(container);

        expect(['step', 'min', 'max'].map(name => field.getAttribute(name))).toEqual([null, null, null]);
    });

    it.each<[string, number, string | undefined, (string | null)[]]>([
        ['a start value above the maximum', 500, undefined, ['0', null]],
        ['a start value below the minimum', -5, undefined, [null, '100']],
        ['a start value on the maximum', 100, undefined, ['0', '100']],
        ['a typed draft above the maximum', 40, '500', ['0', null]],
        ['a typed draft back in range', 500, '50', ['0', '100']],
    ])('drops only the crossed limit on %s (07)', (_case, value, typed, limits) => {
        const { container } = mountInput({ minValue: 0, maxValue: 100 }, value);
        const field = start(container);
        if (typed !== undefined) {
            type(container, typed);
        }

        expect([field.getAttribute('min'), field.getAttribute('max')]).toEqual(limits);
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

    // The input carries both itself: the InputBase above it keeps its own size and the theme text
    // colour (Theme('light') → #3399CC), so a rule on the FormControl root would stop there.
    it('puts value size and text colour on the input, not on its InputBase or the root (09)', () => {
        const { container } = mountInput({ textColor: '#aa0000', valueSize: 200 });
        const input = getComputedStyle(start(container));
        const base = getComputedStyle(container.querySelector('.MuiInputBase-root') as HTMLElement);
        const root = getComputedStyle(container.querySelector('.MuiFormControl-root') as HTMLElement);

        expect([input.color, base.color]).toEqual(['#aa0000', '#3399CC']);
        expect([input.fontSize, base.fontSize]).toEqual(['calc(32px * 0.875)', '16px']);
        expect([root.color, root.fontSize]).not.toContain('#aa0000');
        expect([root.color, root.fontSize]).not.toContain('calc(32px * 0.875)');
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

    it('writes nothing on a blur without a change', () => {
        const { container, setValue } = mountInput(OK_MODE);
        start(container);

        blur(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(setValue).not.toHaveBeenCalled();
    });

    it('leaves a Fremdänderung alone on a blur with the untouched draft', () => {
        const { container, backend, setValue } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);

        blur(container);
        flushWrites();

        expect(displayOf(container).textContent).toBe('50');
        expect(setValue).not.toHaveBeenCalled();
    });

    it('writes nothing on a blur after a draft typed back to the start value', () => {
        const { container, setValue } = mountInput(OK_MODE);
        start(container);
        type(container, '41');
        type(container, '40');

        blur(container);
        flushWrites();

        expect(setValue).not.toHaveBeenCalled();
    });

    describe.each(EXPLICIT_COMMITS)('on %s without a change', (_way, commit) => {
        it('leaves a mixed "007" as it is', () => {
            const { container, setState, setValue } = mountInput({ ...OK_MODE, oidObject: object('mixed') }, '007');
            start(container);

            commit(container);
            flushWrites();

            expect(fieldOf(container)).toBeNull();
            expect(setState).not.toHaveBeenCalled();
            expect(setValue).not.toHaveBeenCalled();
        });

        it('leaves a null on a string OID as it is', () => {
            const { container, setState, setValue } = mountInput({ ...OK_MODE, oidObject: object('string') }, null);
            start(container);

            commit(container);
            flushWrites();

            expect(fieldOf(container)).toBeNull();
            expect(setState).not.toHaveBeenCalled();
            expect(setValue).not.toHaveBeenCalled();
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

    it('stays calm on entering after a change before the session', () => {
        const { container, backend } = mountInput();
        backend(50, 2000);

        start(container);

        expect(isRed(container)).toBe(false);
    });

    it('stays red through jitter during a conflict', () => {
        const { container, backend } = mountInput();
        start(container);
        backend(50, 2000);

        backend(50.5, 3000);

        expect(isRed(container)).toBe(true);
    });
});

describe('InputCollection Sitzungskonflikt (04)', () => {
    it('turns red on a follow-up change after a change before the session', () => {
        const { container, backend } = mountInput();
        backend(50, 2000);
        start(container);

        backend(60, 3000);

        expect(isRed(container)).toBe(true);
    });

    it('holds in OK mode past a keystroke', () => {
        const { container, backend } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);

        type(container, '41');

        expect(isRed(container)).toBe(true);
    });

    it('starts the next session without the mark', () => {
        const { container, backend } = mountInput();
        start(container);
        backend(50, 2000);

        press(container, 'Escape');
        start(container);

        expect(isRed(container)).toBe(false);
    });

    it('stays calm on a stale flag while a cleared number field writes nothing', () => {
        const { container, backend, setState } = mountInput();
        backend(50, 2000);
        start(container);

        type(container, '');

        expect(setState).not.toHaveBeenCalled();
        expect(isRed(container)).toBe(false);
    });

    it('stays calm on the converted echo of the last of several keystrokes', () => {
        const { container, backend, setValue } = mountInput();
        start(container);
        type(container, '5');
        type(container, '5.0');
        flushWrites();
        expect(setValue.mock.calls).toEqual([[OID, 5]]);

        backend(5, 2000);

        expect(isRed(container)).toBe(false);
    });

    it('changes no written value: a conflict in live mode, the keystroke still writes itself', () => {
        const { container, backend, setValue } = mountInput();
        start(container);
        backend(50, 2000);

        type(container, '41');
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });

    it('changes no written value: a conflict in OK mode, a changed draft still commits', () => {
        const { container, backend, setValue } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);
        type(container, '41');
        expect(isRed(container)).toBe(true);

        clickOk(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });
});

describe('InputCollection a blur is no command (05)', () => {
    it('writes a changed draft on a blur in a conflict', () => {
        const { container, backend, setValue } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);
        type(container, '41');

        blur(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 41]]);
    });

    it.each(EXPLICIT_COMMITS)('sends the start value again on %s in a conflict', (_way, commit) => {
        const { container, backend, setValue } = mountInput(OK_MODE);
        start(container);
        backend(50, 2000);

        commit(container);
        flushWrites();

        expect(setValue.mock.calls).toEqual([[OID, 40]]);
    });

    it.each(EXPLICIT_COMMITS)('leaves on %s without a write when the conversion drops the value', (_way, commit) => {
        const { container, setState, setValue } = mountInput(OK_MODE, null);
        start(container);

        commit(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(setState).not.toHaveBeenCalled();
        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(EXPLICIT_COMMITS)('leaves on %s without a write on an emptied number field', (_way, commit) => {
        const { container, setState, setValue } = mountInput(OK_MODE);
        start(container);
        type(container, '');

        commit(container);
        flushWrites();

        expect(fieldOf(container)).toBeNull();
        expect(setState).not.toHaveBeenCalled();
        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(LIVE_LEAVE_WAYS)('writes nothing on %s in live mode, also on a mixed "007"', (_way, leave) => {
        const { container, setValue } = mountInput({ oidObject: object('mixed') }, '007');
        start(container);

        leave(container);
        flushWrites();

        expect(setValue).not.toHaveBeenCalled();
    });
});

describe('InputCollection unit through the panel field (Ticket 12)', () => {
    const socket = {
        getObject: (): Promise<unknown> =>
            Promise.resolve({ _id: OID, type: 'state', common: { name: 'Setpoint', type: 'number', unit: '°C' } }),
    } as unknown as Connection;

    /** Runs a field's real `onChange` over the data vis-2 stored and returns what it hands back. */
    const change = async (name: string, data: WidgetData): Promise<WidgetData> => {
        const field = commonObjectFields(['number']).find(candidate => candidate.name === name);
        let emitted: WidgetData | undefined;

        await (field as { onChange: RxWidgetInfoFieldChangeHandler }).onChange(
            field as RxWidgetInfoAttributesField,
            data,
            next => {
                emitted = next;
            },
            socket,
        );
        vi.runAllTimers();

        return emitted as WidgetData;
    };

    it('shows the picked unit, then the override, and nothing once the field is emptied', async () => {
        const picked = await change('oid', { oid: OID } as WidgetData);
        const { container, configure } = mountInput(picked);
        expect(displayOf(container).textContent).toBe('40°C');
        expect(picked.unit).toBe('°C');

        const overridden = await change('unit', { ...picked, unit: 'K' });
        configure(overridden);
        expect(displayOf(container).textContent).toBe('40K');

        const emptied = await change('unit', { ...overridden, unit: '' });
        configure(emptied);
        expect(displayOf(container).textContent).toBe('40');
    });
});

describe('InputCollection field style (Ticket 09)', () => {
    const WITH_UNIT = { oidObject: object('number', { unit: '°C' }) };

    /** The text of the unit adornment: MUI wraps a string in a Typography with its own size and colour. */
    const unitOf = (container: HTMLElement): CSSStyleDeclaration =>
        getComputedStyle(container.querySelector('.MuiInputAdornment-root .MuiTypography-root') as HTMLElement);

    it.each([
        ['a solid colour', '#aa0000', '#aa0000'],
        ['an rgba colour', 'rgba(170, 0, 0, 0.5)', 'rgba(170, 0, 0, 0.5)'],
        [
            'a gradient, as its Repräsentative Vollfarbe',
            'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)',
            'rgb(128, 0, 128)',
        ],
    ])('paints %s on the input', (_case, textColor, painted) => {
        const { container } = mountInput({ textColor });

        expect(getComputedStyle(start(container)).color).toBe(painted);
    });

    it.each([
        ['a colour name', 'red'],
        ['transparent', 'transparent'],
        ['a CSS variable', 'var(--vis2-text)'],
        ['a gradient without readable stops', 'linear-gradient(90deg, red, blue)'],
    ])('leaves the theme text colour on the input for %s: no Repräsentative Vollfarbe', (_case, textColor) => {
        const { container } = mountInput({ textColor });

        expect(getComputedStyle(start(container)).color).toBe('currentcolor');
    });

    it('puts the value size on the input and the unit', () => {
        const { container } = mountInput({ ...WITH_UNIT, valueSize: 200 });

        expect(getComputedStyle(start(container)).fontSize).toBe('calc(32px * 0.875)');
        expect(unitOf(container).fontSize).toBe('calc(32px * 0.875)');
    });

    it('keeps the size of the field and the unit without a value size', () => {
        const { container } = mountInput(WITH_UNIT);
        const input = getComputedStyle(start(container));
        const base = getComputedStyle(container.querySelector('.MuiInputBase-root') as HTMLElement);

        expect([input.fontSize, base.fontSize]).toEqual(['inherit', '16px']);
        expect(unitOf(container).fontSize).toBe('16px');
    });

    it('keeps the colour of the unit, whatever the text colour', () => {
        const plain = mountInput(WITH_UNIT);
        start(plain.container);
        const unitColor = unitOf(plain.container).color;

        const coloured = mountInput({ ...WITH_UNIT, textColor: '#aa0000', valueSize: 200 });
        start(coloured.container);

        expect(unitColor).not.toBe('#aa0000');
        expect(unitOf(coloured.container).color).toBe(unitColor);
    });

    // MUI's red is the underline or outline behind `Mui-error`, never the text; the computed line
    // colour is a live check (ticket 13).
    it('keeps the red of the conflict on the field that carries the text colour', () => {
        const { container, backend } = mountInput({ textColor: '#aa0000', valueSize: 200 });
        start(container);

        backend(50, 2000);

        expect(isRed(container)).toBe(true);
        expect(container.querySelector('.MuiInputBase-root')?.classList.contains('Mui-error')).toBe(true);
        expect(getComputedStyle(requireField(container)).color).toBe('#aa0000');
    });
});
