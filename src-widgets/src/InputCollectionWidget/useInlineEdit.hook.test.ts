/**
 * useInlineEdit — the hook fabric over the pure transition.
 *
 * @module widgets/InputCollectionWidget/useInlineEdit.hook.test
 * @remarks
 * Pins the composition of the edit session over useValueState: the Sperre and the backend value
 * reaching the transition, events chaining within one tick and the writes reaching the Schreibkette.
 * The session rules themselves are pinned in the node-project suite (inlineEditSession.test.ts).
 */
import { act } from 'react';
import { createElement, type FC } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CollectionContext } from '../components/CollectionProvider';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import useInlineEdit, { type UseInlineEditOptions, type UseInlineEditReturn } from './useInlineEdit';
import type { AllCollectionContextProps } from '../types';

const OID = 'adapter.0.test';

/** Mutable box the stub context reads from — the widget's state.values in miniature. */
interface ContextBox {
    data: Record<string, unknown>;
    values: Record<string, unknown>;
    setState: ReturnType<typeof vi.fn>;
    setValue: ReturnType<typeof vi.fn>;
}

const makeBox = (data: Record<string, unknown>, values: Record<string, unknown> = {}): ContextBox => {
    const box = {} as ContextBox;

    box.data = data;
    box.values = values;
    box.setValue = vi.fn();
    box.setState = vi.fn(
        (updater: (prev: { values: Record<string, unknown> }) => { values: Record<string, unknown> }) => {
            // Apply like the real widget: the merged values land in state.values.
            box.values = updater({ values: box.values }).values ?? box.values;
        },
    );

    return box;
};

const makeContext = (box: ContextBox): AllCollectionContextProps =>
    ({
        widget: { data: box.data },
        get values(): Record<string, unknown> {
            return box.values;
        },
        getPropertyValue: (name: string): unknown => box.values[`${box.data[name]}.val`],
        setState: box.setState,
        setValue: box.setValue,
    }) as unknown as AllCollectionContextProps;

interface Mounted {
    captured: { current: UseInlineEditReturn };
    rerender: () => void;
    unmount: () => void;
}

const mount = (box: ContextBox, options: UseInlineEditOptions): Mounted => {
    const captured = {} as { current: UseInlineEditReturn };

    const Inner: FC = () => {
        captured.current = useInlineEdit('oid', options);
        return null;
    };

    const Probe: FC<{ context: AllCollectionContextProps }> = ({ context }) =>
        createElement(CollectionContext.Provider, { value: context }, createElement(Inner));

    const handle: RenderComponentHandle<{ context: AllCollectionContextProps }> = renderComponent(Probe, {
        context: makeContext(box),
    });

    return {
        captured,
        rerender: (): void => handle.rerender({ context: makeContext(box) }),
        unmount: (): void => handle.unmount(),
    };
};

const stringOid = (): Record<string, unknown> => ({
    oid: OID,
    oidObject: { _id: OID, type: 'string', write: true },
    delay: 0,
});

const stringBox = (): ContextBox => makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });

const typed = (value: string): { target: { value: string } } => ({ target: { value } });

describe('useInlineEdit hook', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('seeds the draft from the backend value when the session starts', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: false });

        expect(captured.current.editing).toBe(false);

        act(() => {
            captured.current.start();
        });

        expect(captured.current.editing).toBe(true);
        expect(captured.current.field.value).toBe('alt');
        expect(box.setState).not.toHaveBeenCalled();
        unmount();
    });

    it.each([
        ['a writable bound object', false, {}],
        ['onlyDisplay', true, { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object', true, { oidObject: { _id: OID, type: 'string', write: false } }],
    ])('takes the Sperre from the binding: with %s, locked is %s and start follows it', (_case, locked, data) => {
        const box = makeBox({ ...stringOid(), ...data }, { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: false });

        expect(captured.current.locked).toBe(locked);

        act(() => {
            captured.current.start();
        });

        expect(captured.current.editing).toBe(!locked);
        unmount();
    });

    it('chains two keystrokes in one tick and writes each of them in live mode', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: false });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onChange(typed('a'));
            captured.current.field.onChange(typed('ab'));
        });

        expect(captured.current.field.value).toBe('ab');
        expect(box.setState).toHaveBeenCalledTimes(2);
        expect(box.values[`${OID}.val`]).toBe('ab');
        unmount();
    });

    it('OK mode buffers the draft and commits exactly once through the Schreibkette', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onChange(typed('ent'));
            captured.current.field.onChange(typed('wurf'));
        });
        expect(box.setState).not.toHaveBeenCalled();

        act(() => {
            captured.current.confirm();
        });

        expect(captured.current.editing).toBe(false);
        expect(box.setState).toHaveBeenCalledTimes(1);
        expect(box.values[`${OID}.val`]).toBe('wurf');
        expect(box.values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);
        unmount();
    });

    it('chains a keystroke and a commit in one tick: the commit writes the new draft', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onChange(typed('neu'));
            captured.current.confirm();
        });

        expect(box.setState).toHaveBeenCalledTimes(1);
        expect(box.values[`${OID}.val`]).toBe('neu');
        unmount();
    });

    it('chains a commit and a blur in one tick: the session is over, so only one write', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onKeyDown({ key: 'Enter' });
            captured.current.field.onBlur();
        });

        expect(captured.current.editing).toBe(false);
        expect(box.setState).toHaveBeenCalledTimes(1);
        unmount();
    });

    it('blur commits in OK mode and only leaves in live mode', () => {
        const okBox = stringBox();
        const ok = mount(okBox, { showOkButton: true });
        act(() => {
            ok.captured.current.start();
        });
        act(() => {
            ok.captured.current.field.onChange(typed('neu'));
        });
        act(() => {
            ok.captured.current.field.onBlur();
        });
        expect(ok.captured.current.editing).toBe(false);
        expect(okBox.values[`${OID}.val`]).toBe('neu');
        ok.unmount();

        const liveBox = stringBox();
        const live = mount(liveBox, { showOkButton: false });
        act(() => {
            live.captured.current.start();
        });
        act(() => {
            live.captured.current.field.onChange(typed('x'));
        });
        const writesAfterKeystroke = liveBox.setState.mock.calls.length;
        act(() => {
            live.captured.current.field.onBlur();
        });
        expect(live.captured.current.editing).toBe(false);
        expect(liveBox.setState.mock.calls.length).toBe(writesAfterKeystroke); // no extra write on leave
        live.unmount();
    });

    it('Enter runs the blur path', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onChange(typed('neu'));
        });
        act(() => {
            captured.current.field.onKeyDown({ key: 'Enter' });
        });

        expect(captured.current.editing).toBe(false);
        expect(box.values[`${OID}.val`]).toBe('neu');
        unmount();
    });

    it('Escape leaves without committing: the next session starts from the backend value', () => {
        const box = stringBox();
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onChange(typed('vergessen'));
        });
        act(() => {
            captured.current.field.onKeyDown({ key: 'Escape' });
        });

        expect(captured.current.editing).toBe(false);
        expect(box.setState).not.toHaveBeenCalled(); // nothing committed

        act(() => {
            captured.current.start();
        });
        expect(captured.current.field.value).toBe('alt'); // discarded draft, backend value back
        unmount();
    });

    it('keeps the draft while editing against backend changes and starts the next session from them', () => {
        const box = stringBox();
        const { captured, rerender, unmount } = mount(box, { showOkButton: false });

        act(() => {
            captured.current.start();
        });
        act(() => {
            captured.current.field.onChange(typed('getippt'));
        });

        // Foreign backend change while editing: the draft holds.
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 'fremd' };
        rerender();
        expect(captured.current.field.value).toBe('getippt');

        // After leaving (live blur writes nothing extra), a new session seeds from the backend value.
        box.values = { ...box.values, [`${OID}.lc`]: 3000, [`${OID}.val`]: 'neu-fremd' };
        rerender();
        act(() => {
            captured.current.field.onBlur();
        });
        act(() => {
            captured.current.start();
        });
        expect(captured.current.field.value).toBe('neu-fremd');
        unmount();
    });

    it('passes hasBackendChange through as the error of the field', () => {
        const box = stringBox();
        const { captured, rerender, unmount } = mount(box, { showOkButton: false });

        act(() => {
            captured.current.start();
        });
        expect(captured.current.field.error).toBe(false);

        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 'fremd' };
        rerender();
        expect(captured.current.field.error).toBe(true);
        unmount();
    });
});
