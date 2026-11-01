/**
 * useInlineEdit — the hook fabric over the pure transitions.
 *
 * @module widgets/InputCollectionWidget/useInlineEdit.hook.test
 * @remarks
 * Pins the composition of the edit session over useValueState: draft adoption,
 * the enter guard, live-vs-OK write behaviour and the Enter/Escape key paths.
 * The session rules themselves are pinned in the node-project suite
 * (useInlineEdit.test.ts); the Escape case here pins the composed discard path.
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
    captured: { current?: UseInlineEditReturn };
    rerender: () => void;
    unmount: () => void;
}

const mount = (box: ContextBox, options: UseInlineEditOptions): Mounted => {
    const captured: { current?: UseInlineEditReturn } = {};

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

describe('useInlineEdit hook', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('adopts the backend value as draft and passes the binding through', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: false });

        expect(captured.current?.value).toBe('alt');
        expect(captured.current?.draft).toBe('alt');
        expect(captured.current?.editing).toBe(false);
        unmount();
    });

    it.each([
        ['a writable bound object', false, {}],
        ['onlyDisplay', true, { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object', true, { oidObject: { _id: OID, type: 'string', write: false } }],
    ])('passes the Sperre of the binding through: locked for %s is %s', (_case, locked, data) => {
        const box = makeBox({ ...stringOid(), ...data }, { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: false });

        expect(captured.current?.locked).toBe(locked);
        unmount();
    });

    it('enterEdit only starts the session when editable', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: false });

        act(() => {
            captured.current?.enterEdit(false);
        });
        expect(captured.current?.editing).toBe(false);

        act(() => {
            captured.current?.enterEdit(true);
        });
        expect(captured.current?.editing).toBe(true);
        unmount();
    });

    it('live mode writes per keystroke', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: false });

        act(() => {
            captured.current?.enterEdit(true);
        });
        act(() => {
            captured.current?.handleChange('a');
            captured.current?.handleChange('ab');
        });

        expect(captured.current?.draft).toBe('ab');
        expect(box.setState).toHaveBeenCalledTimes(2);
        expect(box.values[`${OID}.val`]).toBe('ab');
        unmount();
    });

    it('OK mode buffers the draft and commits exactly once', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current?.enterEdit(true);
        });
        act(() => {
            captured.current?.handleChange('ent');
            captured.current?.handleChange('wurf');
        });
        expect(box.setState).not.toHaveBeenCalled();

        act(() => {
            captured.current?.commit();
        });

        expect(captured.current?.editing).toBe(false);
        expect(box.setState).toHaveBeenCalledTimes(1);
        expect(box.values[`${OID}.val`]).toBe('wurf');
        expect(box.values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);
        unmount();
    });

    it('blur commits in OK mode and only leaves in live mode', () => {
        const okBox = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const ok = mount(okBox, { showOkButton: true });
        act(() => {
            ok.captured.current?.enterEdit(true);
        });
        act(() => {
            ok.captured.current?.handleChange('neu');
        });
        act(() => {
            ok.captured.current?.handleBlur();
        });
        expect(ok.captured.current?.editing).toBe(false);
        expect(okBox.values[`${OID}.val`]).toBe('neu');
        ok.unmount();

        const liveBox = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const live = mount(liveBox, { showOkButton: false });
        act(() => {
            live.captured.current?.enterEdit(true);
        });
        act(() => {
            live.captured.current?.handleChange('x');
        });
        const writesAfterKeystroke = liveBox.setState.mock.calls.length;
        act(() => {
            live.captured.current?.handleBlur();
        });
        expect(live.captured.current?.editing).toBe(false);
        expect(liveBox.setState.mock.calls.length).toBe(writesAfterKeystroke); // no extra write on leave
        live.unmount();
    });

    it('Enter runs the blur path', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current?.enterEdit(true);
        });
        act(() => {
            captured.current?.handleChange('neu');
        });
        act(() => {
            captured.current?.handleKeyDown('Enter');
        });

        expect(captured.current?.editing).toBe(false);
        expect(box.values[`${OID}.val`]).toBe('neu');
        unmount();
    });

    it('Escape leaves without committing: OK-mode draft is discarded, the backend value returns', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, rerender, unmount } = mount(box, { showOkButton: true });

        act(() => {
            captured.current?.enterEdit(true);
        });
        act(() => {
            captured.current?.handleChange('vergessen');
        });
        act(() => {
            captured.current?.handleKeyDown('Escape');
        });

        expect(captured.current?.editing).toBe(false);
        expect(box.setState).not.toHaveBeenCalled(); // nothing committed

        rerender();
        expect(captured.current?.draft).toBe('alt'); // discarded draft, backend value back
        unmount();
    });

    it('keeps the draft while editing against backend changes and adopts after leaving', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'alt', [`${OID}.lc`]: 1000 });
        const { captured, rerender, unmount } = mount(box, { showOkButton: false });

        act(() => {
            captured.current?.enterEdit(true);
        });
        act(() => {
            captured.current?.handleChange('getippt');
        });

        // Foreign backend change while editing: the draft holds (syncDraft gate).
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 'fremd' };
        rerender();
        expect(captured.current?.draft).toBe('getippt');

        // After leaving (live blur writes nothing extra), the draft adopts the backend value.
        box.values = { ...box.values, [`${OID}.lc`]: 3000, [`${OID}.val`]: 'neu-fremd' };
        act(() => {
            captured.current?.handleBlur();
        });
        rerender();
        expect(captured.current?.draft).toBe('neu-fremd');
        unmount();
    });
});
