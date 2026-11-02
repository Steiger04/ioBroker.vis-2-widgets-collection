/**
 * RadioGroupCollection — the wiring, rendered.
 *
 * @module widgets/RadioGroupCollection.test
 * @remarks
 * DOM contract of the renderer on the preview context (the Checkbox/ButtonGroup pattern):
 * every checked icon sized by its OWN state, the ripple in the checked icon's colour, a
 * selection writing through the Schreibkette, and the read-only guard locking the group.
 * MUI draws the `checkedIcon` on checked radios only, so two checked icons coexist only
 * when two states share the OID value — that render is where the per-state icon size
 * becomes observable. The item size follows the frame's Content-Box (ADR-0098, injected
 * through the test scene).
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // CollectionBase translates its hints through Generic, which extends
    // window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
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
    mountCollectionBody,
    withContentBox,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import RadioGroupCollection from './RadioGroupCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.mode';
const ICON = '/vis.0/main/img/mode.png';

const scene = (data: Record<string, unknown> = {}): PreviewScene =>
    collectionScene(
        'radio-group-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'number' },
            values_count: 2,
            value1: '0',
            alias1: 'OFF',
            value2: '1',
            alias2: 'ON',
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        1,
    );

const mountRadioGroup = (currentScene: PreviewScene): MountedCollectionBody =>
    mountCollectionBody(RadioGroupCollection, currentScene);

/** The radio input of the state with the given value. */
const radioInput = (container: HTMLElement, value: string): HTMLInputElement =>
    container.querySelector<HTMLInputElement>(`input[type="radio"][value="${value}"]`) as HTMLInputElement;

describe('RadioGroupCollection wiring', () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it("sizes every checked icon by its own state's icon size, not by the first matching state", () => {
        const { container } = mountRadioGroup(
            scene({ value1: '1', alias1: 'A', value2: '1', alias2: 'B', icon: ICON, iconSize1: 40, iconSize2: 80 }),
        );

        const widths = Array.from(container.querySelectorAll<HTMLImageElement>('.MuiRadio-root.Mui-checked img')).map(
            img => img.style.width,
        );
        expect(widths).toEqual(['calc(40% * 0.5)', 'calc(80% * 0.5)']);
    });

    it.each([
        // The checked dot falls back to the theme primary; the label text colour (the
        // former ripple fallback) must not leak into the ripple.
        ['no icon colour set: theme primary, not the label text colour', { textColor: '#00aa00' }],
        // Differs from the primary the checked radio root passes down, so this case fails
        // should the ripple merely inherit its colour instead of resolving it.
        ["the state's own icon colour", { textColor: '#00aa00', iconColor2: '#aa0000' }],
    ])("ripples in the checked icon's colour (%s)", async (_case, data) => {
        const { container } = mountRadioGroup(scene(data));

        const [checked] = container.querySelectorAll<HTMLElement>('.MuiRadio-root.Mui-checked');
        const iconColor = getComputedStyle(checked.querySelector('svg') as SVGElement).color;
        // MUI mounts the ripple lazily on the first press.
        await act(async () => {
            checked.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            await Promise.resolve();
        });
        const ripple = checked.querySelector('.MuiTouchRipple-root') as HTMLElement;

        // Guards against a vacuous match should happy-dom stop resolving the Emotion rules.
        expect(iconColor).not.toBe('');
        expect(getComputedStyle(ripple).color).toBe(iconColor);
    });

    it("writes the selected state's value through the Schreibkette (optimistic patch, then the backend write)", async () => {
        const { container, setState, setValue } = mountRadioGroup(scene({ delay: 0 }));
        vi.useFakeTimers();

        act(() => {
            radioInput(container, '0').click();
        });

        // Optimistic patch: the value converted to the OID's number type, plus the own-write sentinel.
        expect(setState).toHaveBeenCalledTimes(1);
        const updater = setState.mock.calls[0][0] as (prev: { values: Record<string, unknown> }) => {
            values: Record<string, unknown>;
        };
        expect(updater({ values: {} }).values).toEqual({
            [`${OID}.val`]: 0,
            [`${OID}.lc`]: VALUE_NOT_CHANGED_TIMESTAMP,
        });

        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue.mock.calls).toEqual([[OID, 0]]);
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: { _id: OID, type: 'number', write: false } }],
    ])('locks every radio for %s (Sperre): disabled, and a click writes nothing', (_case, data) => {
        const { container, setState } = mountRadioGroup(scene(data));

        const inputs = Array.from(container.querySelectorAll<HTMLInputElement>('input[type="radio"]'));
        expect(inputs.map(input => input.disabled)).toEqual([true, true]);

        act(() => {
            radioInput(container, '0').click();
        });
        expect(setState).not.toHaveBeenCalled();
    });
});

describe('RadioGroupCollection item size (Content-Box)', () => {
    /** The computed size property of every radio button. */
    const radioSizes = (container: HTMLElement, property: 'height' | 'maxHeight'): string[] =>
        Array.from(container.querySelectorAll<HTMLElement>('.MuiRadio-root')).map(
            radio => getComputedStyle(radio)[property],
        );

    it('splits the Content-Box height evenly between the stacked items', () => {
        const { container } = mountRadioGroup(withContentBox(scene(), { width: 200, height: 120 }));

        expect(radioSizes(container, 'height')).toEqual(['60px', '60px']);
        expect(radioSizes(container, 'maxHeight')).toEqual(['60px', '60px']);
    });

    it('caps every item at the full Content-Box height when laid out horizontally', () => {
        const { container } = mountRadioGroup(
            withContentBox(scene({ radioOrientation: 'horizontal' }), { width: 200, height: 120 }),
        );

        expect(radioSizes(container, 'maxHeight')).toEqual(['120px', '120px']);
    });

    it('leaves the items unsized until the box is measured', () => {
        const { container } = mountRadioGroup(scene());

        expect(radioSizes(container, 'height')).toEqual(['auto', 'auto']);
        // No cap rule at all ('' or the initial 'none', whichever happy-dom reports).
        expect(radioSizes(container, 'maxHeight').every(cap => cap === '' || cap === 'none')).toBe(true);
    });
});
