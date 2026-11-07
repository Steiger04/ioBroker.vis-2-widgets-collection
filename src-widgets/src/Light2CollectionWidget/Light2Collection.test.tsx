/**
 * Light2Collection — the Button-Modus and the Lampen-Bedienelement, rendered.
 *
 * @module widgets/Light2Collection.test
 * @remarks
 * DOM contract of the body on the preview context (real useData/useValueState): in the
 * Button-Modus a click on the face toggles the Schalter-OID and a long press (after
 * `colorLightDelayLongPress`) opens the Lampen-Bedienelement in a modal; without it the
 * Lampen-Bedienelement renders directly — power button and picker box. A Schalter-OID that is no
 * boolean shows the OID hint. The iro picker is replaced by a stub through its module: the
 * picker transitions are pinned with real iro in the channel-mapping tests.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

// CollectionBase translates its hints through Generic, which extends window.visRxWidget —
// undefined outside the vis-2 host. Stubbed before the imports load.
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { act } from 'react';

import { collectionScene, installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';
import Light2Collection from './Light2Collection';
import type { PreviewScene } from '../preview/types';

vi.mock('./Light2Picker', async () => {
    const { createElement, forwardRef } = await import('react');
    return {
        default: forwardRef((_props, _ref) => createElement('div', { 'data-testid': 'light2-picker' })),
    };
});

installInertResizeObserver();

const SWITCH = 'demo.0.lamp.on';

const mountBody = testScopedMount();

/** A Light2 scene on a boolean Schalter-OID (rgb lamp), the switch holding `status`. */
const scene = (data: Record<string, unknown> = {}, status: unknown = false): PreviewScene =>
    collectionScene(
        'light2-collection-test',
        {
            colorLightSwitchOid: SWITCH,
            colorLightSwitchOidObject: { _id: SWITCH, type: 'boolean' },
            colorLightType: 'rgb',
            delay: 0,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        status,
        SWITCH,
    );

/** Feeds every observed element a measured content rect, so the picker box gets its size. */
const measureContentRect = (contentRect: { width: number; height: number }): void => {
    vi.stubGlobal(
        'ResizeObserver',
        class {
            private readonly callback: ResizeObserverCallback;

            constructor(callback: ResizeObserverCallback) {
                this.callback = callback;
            }

            observe(target: Element): void {
                this.callback(
                    [{ target, contentRect } as unknown as ResizeObserverEntry],
                    this as unknown as ResizeObserver,
                );
            }

            /* eslint-disable class-methods-use-this -- nothing to release */
            unobserve(): void {}
            disconnect(): void {}
            /* eslint-enable class-methods-use-this */
        },
    );
};

/** Dispatches one pointer event (pointer 1, primary button) on the element. */
const pointer = (element: Element, type: 'pointerdown' | 'pointerup'): void => {
    act(() => {
        element.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, button: 0 }));
    });
};

/** The power button of a Lampen-Bedienelement inside `root`. */
const powerIcon = (root: ParentNode): Element | null => root.querySelector('[data-testid="PowerSettingsNewIcon"]');

/** The modal hosting the Lampen-Bedienelement (portalled into the document body). */
const modal = (): Element | null => document.body.querySelector('.MuiModal-root');

afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
});

describe('Light2Collection Button-Modus', () => {
    it('toggles the Schalter-OID on a click on the face (optimistic patch, then the backend write)', async () => {
        const { container, setState, setValue } = mountBody(Light2Collection, scene({ colorLightButton: true }));
        vi.useFakeTimers();

        const face = container.querySelector('button');
        expect(face).not.toBeNull();
        pointer(face!, 'pointerdown');
        pointer(face!, 'pointerup');

        expect(setState).toHaveBeenCalledTimes(1);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue.mock.calls).toEqual([[SWITCH, true]]);
        expect(modal()).toBeNull();
    });

    it('opens the Lampen-Bedienelement in a modal after the long-press delay, without writing', async () => {
        const { container, setValue } = mountBody(
            Light2Collection,
            scene({ colorLightButton: true, colorLightDelayLongPress: 800 }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        pointer(face, 'pointerdown');
        act(() => {
            vi.advanceTimersByTime(799);
        });
        expect(modal()).toBeNull();

        act(() => {
            vi.advanceTimersByTime(1);
        });
        pointer(face, 'pointerup');

        expect(modal()).not.toBeNull();
        expect(powerIcon(modal()!)).not.toBeNull();
        // The face itself is no Lampen-Bedienelement.
        expect(powerIcon(container)).toBeNull();

        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue).not.toHaveBeenCalled();
    });
});

describe('Light2Collection Lampen-Bedienelement', () => {
    it('renders the power button and the picker box directly without the Button-Modus', () => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(Light2Collection, scene());

        expect(powerIcon(container)).not.toBeNull();
        expect(container.querySelector('[data-testid="light2-picker"]')).not.toBeNull();
        expect(modal()).toBeNull();
    });

    it('writes the inverse of the switch from the power button', async () => {
        const { container, setValue } = mountBody(Light2Collection, scene({}, true));
        vi.useFakeTimers();

        act(() => {
            powerIcon(container)!.closest('button')!.click();
        });
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue.mock.calls).toEqual([[SWITCH, false]]);
    });

    it.each([
        ['without the Button-Modus', {}],
        ['in the Button-Modus', { colorLightButton: true }],
    ])('shows the OID hint for a Schalter-OID that is no boolean (%s)', (_case, data) => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(
            Light2Collection,
            scene({ colorLightSwitchOidObject: { _id: SWITCH, type: 'number' }, ...data }, 1),
        );

        expect(container.textContent).toContain('collection_base_select_oid');
        expect(powerIcon(container)).toBeNull();
        expect(container.querySelector('[data-testid="light2-picker"]')).toBeNull();
    });
});
