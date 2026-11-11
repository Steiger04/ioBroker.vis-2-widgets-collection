/**
 * SwitchCollection — the height budget, rendered.
 *
 * @module widgets/SwitchCollection.test
 * @remarks
 * DOM contract of the body on the preview context: the thumb is capped by the height
 * budget, the frame's Content-Box height (ADR-0098, injected through the test scene).
 * The travel math behind the cap is pinned as pure data in chrome.test.ts. The Sperre
 * cases pin the switch's `disabled` against the OID binding's `locked`. The checked cases pin
 * the boolean pair's rule (`sameStateValue` against `true`, ADR-0105), the toggle cases its
 * write through the Schreibkette.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { act } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
} from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import SwitchCollection from './SwitchCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.power';

const mountBody = testScopedMount();

const scene = (data: Record<string, unknown> = {}, status: unknown = true): PreviewScene =>
    collectionScene(
        'switch-collection-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'boolean' },
            thumbSize: 40,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        status,
    );

/** The switch thumb. */
const thumb = (container: HTMLElement): HTMLElement => {
    const element = container.querySelector<HTMLElement>('.MuiSwitch-thumb');
    if (!element) {
        throw new Error('switch thumb not rendered');
    }
    return element;
};

describe('SwitchCollection height budget (Content-Box)', () => {
    it('caps the thumb at the Content-Box height when the thumb size exceeds it', () => {
        const { container } = mountBody(SwitchCollection, withContentBox(scene(), { width: 200, height: 24 }));

        const { maxWidth, maxHeight } = getComputedStyle(thumb(container));
        expect([maxWidth, maxHeight]).toEqual(['24px', '24px']);
    });

    it('leaves the thumb uncapped until the box is measured', () => {
        const { container } = mountBody(SwitchCollection, scene());

        const { height, maxHeight } = getComputedStyle(thumb(container));
        expect(height).toBe('40px');
        // No cap rule at all ('' or the initial 'none', whichever happy-dom reports).
        expect(['', 'none']).toContain(maxHeight);
    });

    it('draws the switch with the schema thumb size when none is stored', () => {
        const { container } = mountBody(SwitchCollection, scene({ thumbSize: undefined }));

        expect(getComputedStyle(thumb(container)).height).toBe('62px');
    });

    it('draws the switch with the schema thumb size when the stored size was emptied', () => {
        // The number box beside the vis-2 slider stores '' when cleared; the track size reads it as unset too.
        const { container } = mountBody(SwitchCollection, scene({ thumbSize: '' }));

        expect(getComputedStyle(thumb(container)).height).toBe('62px');
    });
});

describe('SwitchCollection Sperre', () => {
    /** The switch's native checkbox input. */
    const input = (container: HTMLElement): HTMLInputElement | null =>
        container.querySelector<HTMLInputElement>('input.MuiSwitch-input');

    it('leaves the switch enabled for a writable bound object', () => {
        const { container } = mountBody(SwitchCollection, scene());

        expect(input(container)?.disabled).toBe(false);
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: { _id: OID, type: 'boolean', write: false } }],
    ])('disables the switch for %s', (_case, data) => {
        const { container } = mountBody(SwitchCollection, scene(data));

        expect(input(container)?.disabled).toBe(true);
    });
});

describe('SwitchCollection checked state (sameStateValue against true)', () => {
    const input = (container: HTMLElement): HTMLInputElement =>
        container.querySelector<HTMLInputElement>('input.MuiSwitch-input') as HTMLInputElement;

    it.each([
        ['the boolean true', true, true],
        ['the string "true"', 'true', true],
        ['the boolean false', false, false],
        // Truthy, but not the `true` state: useData resolves the `false` row.
        ['the string "false"', 'false', false],
        ['the number 1', 1, false],
        ['the number 0', 0, false],
    ])('decides checked for %s', (_case, backend, expected) => {
        const { container } = mountBody(SwitchCollection, scene({}, backend));

        expect(input(container).checked).toBe(expected);
    });
});

describe('SwitchCollection toggle (Schreibkette)', () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it.each([
        ['true', true, false],
        ['false', false, true],
        // The non-boolean "false" shows off, so the toggle turns it on.
        ['the string "false"', 'false', true],
    ])(
        'writes the inverse of checked for the backend value %s (optimistic patch, then the backend write)',
        async (_case, backend, written) => {
            const { container, setState, setValue } = mountBody(SwitchCollection, scene({ delay: 0 }, backend));
            vi.useFakeTimers();

            act(() => {
                container.querySelector<HTMLInputElement>('input.MuiSwitch-input')?.click();
            });

            // Optimistic patch: the inverted value plus the own-write sentinel.
            expect(setState).toHaveBeenCalledTimes(1);
            const updater = setState.mock.calls[0][0] as (prev: { values: Record<string, unknown> }) => {
                values: Record<string, unknown>;
            };
            expect(updater({ values: {} }).values).toEqual({
                [`${OID}.val`]: written,
                [`${OID}.lc`]: VALUE_NOT_CHANGED_TIMESTAMP,
            });

            await act(async () => {
                await vi.advanceTimersByTimeAsync(1);
            });
            expect(setValue.mock.calls).toEqual([[OID, written]]);
        },
    );
});

describe('SwitchCollection thumb colour (sx specificity)', () => {
    const colours = { thumbColorTrue: '#00ff00', thumbColorFalse: '#ff0000' };

    it.each([
        ['on', true, '#00ff00'],
        ['off', false, '#ff0000'],
    ])('paints the contract colour on the thumb while %s', (_state, status, colour) => {
        const { container } = mountBody(SwitchCollection, scene(colours, status));

        expect(getComputedStyle(thumb(container)).background).toContain(colour);
    });
});
