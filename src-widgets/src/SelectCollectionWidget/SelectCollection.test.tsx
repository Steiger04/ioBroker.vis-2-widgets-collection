/**
 * SelectCollection — the wiring, rendered.
 *
 * @module widgets/SelectCollectionWidget/SelectCollection.test
 * @remarks
 * DOM contract of the body on the preview context (the ButtonGroup/State pattern):
 * the closed select shows the entry matching the main OID's status (none without a
 * match) — also across a blank state row (CONTEXT "Feldnummer") — states sharing a
 * value list as separate entries, a selection writes the chosen state value — to the
 * main OID, or with a control ID set to the control ID ALONE: exactly one backend
 * write and no optimistic patch of the main OID
 * (Schreibziel, ADR-0090) — and the lock follows the write target. The decision
 * table itself is pinned in lib/writeTarget.test.ts as pure data.
 *
 * The Select-Chrome is pinned as rendered, too — only its wiring, i.e. which inputs
 * the body feeds in: the arrow takes `arrowColor`, else the ACTIVE state's text
 * colour; the popup surface follows the explicit `noCard` alone (an embedded Select
 * keeps its elevated popup); the width bound follows the measured content box. The
 * rules themselves are pinned as pure data in chrome.test.ts.
 *
 * Selections are driven through the real UI: a primary-button mousedown on the
 * combobox opens the menu (MUI renders it in a portal on document.body), a click
 * on an option selects it. The rendered native input's change path cannot drive
 * it — MUI matches that input's string value strictly against the numeric entry
 * indices.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    mountCollectionBody,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import SelectCollection from './SelectCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

/** The main OID — the status the display follows. */
const OID = 'demo.0.status';
/** The control ID (Steuer ID) — the command target when set. */
const CID = 'demo.0.command';

const scene = (data: Record<string, unknown> = {}, status: unknown = 1): PreviewScene =>
    collectionScene(
        'select-collection-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'number', write: true },
            values_count: 3,
            value1: '0',
            alias1: 'Eco',
            value2: '1',
            alias2: 'Comfort',
            value3: '2',
            alias3: 'Boost',
            // Write at once: a missing delay debounces with the 300 ms field default.
            delay: 0,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        status,
    );

const mounted: MountedCollectionBody[] = [];

const mountSelect = (currentScene: PreviewScene): MountedCollectionBody => {
    const select = mountCollectionBody(SelectCollection, currentScene);
    mounted.push(select);
    return select;
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

/** The select's root — it carries the width bound and the arrow rule. */
const selectRoot = (container: HTMLElement): HTMLElement => {
    const element = container.querySelector<HTMLElement>('.MuiInputBase-root');
    if (!element) {
        throw new Error('select root not rendered');
    }
    return element;
};

/** The dropdown arrow. */
const arrow = (container: HTMLElement): Element => {
    const element = container.querySelector('.MuiSelect-icon');
    if (!element) {
        throw new Error('select arrow not rendered');
    }
    return element;
};

/** A popup part — portaled to document.body like the options. */
const popup = (selector: '.MuiMenu-root' | '.MuiMenu-paper'): HTMLElement => {
    const element = document.querySelector<HTMLElement>(selector);
    if (!element) {
        throw new Error(`${selector} not rendered`);
    }
    return element;
};

/** The same scene, rendered embedded (inside a dialog or another widget): no wrapping card. */
const embedded = (currentScene: PreviewScene): PreviewScene =>
    ({
        ...currentScene,
        context: { ...currentScene.context, wrappedContent: false },
    }) as PreviewScene;

/** A ResizeObserver that reports every observed element at the given content width. */
const reportingResizeObserver = (width: number): unknown =>
    class {
        private readonly callback: ResizeObserverCallback;

        constructor(callback: ResizeObserverCallback) {
            this.callback = callback;
        }

        observe(target: Element): void {
            this.callback(
                [{ target, contentRect: { width, height: 120 } } as unknown as ResizeObserverEntry],
                this as unknown as ResizeObserver,
            );
        }

        /* eslint-disable class-methods-use-this -- nothing to release */
        unobserve(): void {}
        disconnect(): void {}
        /* eslint-enable class-methods-use-this */
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
        for (const select of mounted.splice(0)) {
            select.unmount();
        }
        vi.useRealTimers();
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
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

    describe('across a blank state row (Feldnummer ≠ list position)', () => {
        // value2 blank: the entries are Eco (field 1) and Boost (field 3) — Boost sits at
        // list position 1. Status 2 matches Boost.
        const gap = { value2: '', textColor2: '#00aa00', textColor3: '#0000aa' };

        it('shows the entry of the state matching the status', () => {
            const { container } = mountSelect(scene(gap, 2));

            expect(combobox(container).textContent).toBe('Boost');
        });

        it("colours the arrow with the matching state's own text colour, not the blank row's", () => {
            const { container } = mountSelect(scene(gap, 2));

            expect(getComputedStyle(arrow(container)).color).toBe('#0000aa');
        });
    });

    describe('entries', () => {
        it('lists states sharing a value as separate entries without a React key clash', () => {
            const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
            const { container } = mountSelect(scene({ value3: '1', alias3: 'Comfort+' }));

            openMenu(container);

            expect(options().map(option => option.textContent)).toEqual(['Eco', 'Comfort', 'Comfort+']);
            expect(error.mock.calls.flat().join('\n')).not.toMatch(/same key/);
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

    describe('chrome (Select-Chrome, as rendered)', () => {
        it("colours the arrow with arrowColor, else with the active state's text colour", () => {
            // Status 1 → the second state ('Comfort') is the active one.
            const own = mountSelect(scene({ arrowColor: '#aa0000', textColor2: '#00aa00' }));
            const inherited = mountSelect(scene({ textColor2: '#00aa00' }));

            expect(getComputedStyle(arrow(own.container)).color).toBe('#aa0000');
            expect(getComputedStyle(arrow(inherited.container)).color).toBe('#00aa00');
        });

        it.each([
            ['the explicit noCard flattens it: no shadow', scene({ noCard: true }), 'none'],
            // Portaled to the body, the popup never sits on the host's card: embedded, it keeps its own surface.
            ['embedded without noCard, it keeps its elevation', embedded(scene()), undefined],
        ])('draws the popup surface from noCard alone — %s', (_case, currentScene, shadow) => {
            const { container } = mountSelect(currentScene);
            openMenu(container);

            const { boxShadow } = getComputedStyle(popup('.MuiMenu-paper'));
            if (shadow === undefined) {
                expect(boxShadow).not.toBe('none');
            } else {
                expect(boxShadow).toBe(shadow);
            }
        });

        it('paints the popup surface with the frame background', () => {
            const { container } = mountSelect(scene({ frameBackground: '#123456' }));
            openMenu(container);

            expect(getComputedStyle(popup('.MuiMenu-paper')).backgroundColor).toBe('#123456');
        });

        it('bounds the select and its popup by the measured content box (300 px until measured)', () => {
            const unmeasured = mountSelect(scene());
            expect(getComputedStyle(selectRoot(unmeasured.container)).maxWidth).toBe('calc(300px - 10%)');

            vi.stubGlobal('ResizeObserver', reportingResizeObserver(480));
            const measured = mountSelect(scene());
            expect(getComputedStyle(selectRoot(measured.container)).maxWidth).toBe('calc(480px - 10%)');

            openMenu(measured.container);
            expect(getComputedStyle(popup('.MuiMenu-root')).maxWidth).toBe('480px');
        });
    });
});
