/**
 * SelectCollection — the wiring, rendered.
 *
 * @module widgets/SelectCollectionWidget/SelectCollection.test
 * @remarks
 * DOM contract of the body on the preview context (the ButtonGroup/State pattern):
 * the closed select shows the entry matching the main OID's status (none without a
 * match), a selection writes the chosen state value — to the main OID, or with a
 * control ID set to the control ID ALONE: exactly one backend write and no
 * optimistic patch of the main OID (Schreibziel, ADR-0090) — and the lock follows
 * the write target. The decision table itself is pinned in lib/writeTarget.test.ts
 * as pure data.
 *
 * Selections are driven through the real UI: a primary-button mousedown on the
 * combobox opens the menu (MUI renders it in a portal on document.body), a click
 * on an option selects it. The rendered native input's change path cannot drive
 * it — MUI matches that input's string value strictly against the numeric entry
 * indices.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createElement, act } from 'react';
import { createRoot, type Root } from 'react-dom/client';

import '../lib/testing/testHarness'; // sets IS_REACT_ACT_ENVIRONMENT
import CollectionProvider from '../components/CollectionProvider';
import { buildPreviewContext } from '../preview/mockContext';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import SelectCollection from './SelectCollection';
import type { AllCollectionContextProps } from '../types';
import type { PreviewScene } from '../preview/types';

if (typeof (globalThis as { ResizeObserver?: unknown }).ResizeObserver === 'undefined') {
    /* eslint-disable class-methods-use-this -- inert stub, nothing to use `this` for */
    (globalThis as { ResizeObserver?: unknown }).ResizeObserver = class {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
    };
    /* eslint-enable class-methods-use-this */
}

/** The main OID — the status the display follows. */
const OID = 'demo.0.status';
/** The control ID (Steuer-ID) — the command target when set. */
const CID = 'demo.0.command';

const scene = (data: Record<string, unknown> = {}, status: unknown = 1): PreviewScene =>
    ({
        slug: 'select-collection-test',
        size: { width: 480, height: 120 },
        context: {
            widget: {
                data: {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number', write: true },
                    values_count: 3,
                    value1: '0',
                    alias1: 'Eco',
                    value2: '1',
                    alias2: 'Comfort',
                    value3: '2',
                    alias3: 'Boost',
                    // Explicit write delay: a missing one debounces with NaN (see useDebounce).
                    delay: 0,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                style: {},
            },
            values: { [`${OID}.val`]: status },
            mode: 'light',
            wrappedContent: true,
        },
    }) as unknown as PreviewScene;

interface MountedSelect {
    container: HTMLDivElement;
    setState: ReturnType<typeof vi.fn>;
    setValue: ReturnType<typeof vi.fn>;
}

const mounted: { root: Root; container: HTMLDivElement }[] = [];

const mountSelect = (currentScene: PreviewScene): MountedSelect => {
    const setState = vi.fn();
    const setValue = vi.fn();
    const context = {
        ...buildPreviewContext(currentScene),
        setState,
        setValue,
    } as unknown as AllCollectionContextProps;

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
        root.render(createElement(CollectionProvider, { context } as never, createElement(SelectCollection)));
    });
    mounted.push({ root, container });
    return { container, setState, setValue };
};

/** The closed select — its text is the displayed entry. */
const combobox = (container: HTMLElement): HTMLElement => {
    const element = container.querySelector<HTMLElement>('[role="combobox"]');
    if (!element) {
        throw new Error('select combobox not rendered');
    }
    return element;
};

/** The listed options — the menu lives in a portal on document.body, not in the container. */
const options = (): HTMLElement[] => Array.from(document.querySelectorAll<HTMLElement>('[role="option"]'));

/** Opens the menu the way a pointer does: a primary-button mousedown on the combobox. */
const openMenu = (container: HTMLElement): void => {
    act(() => {
        combobox(container).dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
    });
};

/** Picks an entry through the real UI: open the menu, click the option. */
const choose = (container: HTMLElement, label: string): void => {
    openMenu(container);
    const option = options().find(candidate => candidate.textContent === label);
    if (!option) {
        throw new Error(`option "${label}" not listed`);
    }
    act(() => {
        option.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

/** Lets the debounced backend write (`delay: 0`) fire. */
const flushWrites = async (): Promise<void> => {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(1);
    });
};

type Updater = (prev: { values: Record<string, unknown> }) => { values: Record<string, unknown> };

/** Every optimistic patch, merged — each setState updater applied to an empty state. */
const optimisticPatch = (setState: ReturnType<typeof vi.fn>): Record<string, unknown> =>
    Object.assign({}, ...setState.mock.calls.map(([updater]) => (updater as Updater)({ values: {} }).values));

describe('SelectCollection wiring', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        // Unmount so an open menu (portal on document.body) cannot leak into the next test.
        for (const { root, container } of mounted.splice(0)) {
            act(() => {
                root.unmount();
            });
            container.remove();
        }
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    describe('active state', () => {
        it('shows the state matching the main OID status', () => {
            const { container } = mountSelect(scene({}, 1));

            expect(combobox(container).textContent).toBe('Comfort');
        });

        it('shows no entry while the status matches none of the states', () => {
            const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
            const { container } = mountSelect(scene({}, 7));

            expect(combobox(container).textContent).not.toMatch(/Eco|Comfort|Boost/);
            // The empty selection is MUI's '' — never an out-of-range value.
            expect(warn.mock.calls.flat().join('\n')).not.toMatch(/out-of-range/);
        });
    });

    describe('write on selection (Schreibziel, ADR-0090)', () => {
        it('writes the chosen state value to the main OID', async () => {
            const { container, setState, setValue } = mountSelect(scene());

            choose(container, 'Boost');
            // The optimistic patch lands at once — the display snaps to the choice.
            expect(optimisticPatch(setState)).toEqual({
                [`${OID}.val`]: 2,
                [`${OID}.lc`]: VALUE_NOT_CHANGED_TIMESTAMP,
            });

            await flushWrites();
            expect(setValue.mock.calls).toEqual([[OID, 2]]);
        });

        it('with a control ID set, writes the control ID alone: one write, no patch of the main OID', async () => {
            const { container, setState, setValue } = mountSelect(
                scene({ cid: CID, cidObject: { _id: CID, type: 'number', write: true } }),
            );

            choose(container, 'Boost');
            await flushWrites();

            expect(setValue.mock.calls).toEqual([[CID, 2]]);
            // The display follows the status alone — it moves only when the status echo arrives.
            expect(Object.keys(optimisticPatch(setState)).filter(key => key.startsWith(`${OID}.`))).toEqual([]);
        });
    });

    describe('lock (follows the write target)', () => {
        it('locks the select when onlyDisplay is set', () => {
            const { container } = mountSelect(scene({ onlyDisplay: true }));

            expect(combobox(container).getAttribute('aria-disabled')).toBe('true');
            openMenu(container);
            expect(options()).toEqual([]);
        });

        it('stays usable over a read-only status OID while a writable control ID is set', async () => {
            const { container, setValue } = mountSelect(
                scene({
                    oidObject: { _id: OID, type: 'number', write: false },
                    cid: CID,
                    cidObject: { _id: CID, type: 'number', write: true },
                }),
            );

            expect(combobox(container).getAttribute('aria-disabled')).toBeNull();
            choose(container, 'Eco');
            await flushWrites();
            expect(setValue.mock.calls).toEqual([[CID, 0]]);
        });
    });
});
