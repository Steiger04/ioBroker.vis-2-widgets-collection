/**
 * RadioGroupCollection — the wiring, rendered.
 *
 * @module widgets/RadioGroupCollection.test
 * @remarks
 * DOM contract of the renderer on the preview context (the Checkbox/ButtonGroup pattern):
 * every checked icon sized by its OWN state, and the ripple in the checked icon's colour.
 * MUI draws the `checkedIcon` on checked radios only, so two checked icons coexist only
 * when two states share the OID value — that render is where the per-state icon size
 * becomes observable.
 */
import { describe, expect, it, vi } from 'vitest';
import { createElement, act } from 'react';
import { createRoot } from 'react-dom/client';

import '../lib/testing/testHarness'; // sets IS_REACT_ACT_ENVIRONMENT
import CollectionProvider from '../components/CollectionProvider';
import { buildPreviewContext } from '../preview/mockContext';
import RadioGroupCollection from './RadioGroupCollection';
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

const OID = 'demo.0.mode';
const ICON = '/vis.0/main/img/mode.png';

const scene = (data: Record<string, unknown> = {}, value: unknown = 1): PreviewScene =>
    ({
        slug: 'radio-group-test',
        size: { width: 480, height: 120 },
        context: {
            widget: {
                data: {
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
                style: {},
            },
            values: { [`${OID}.val`]: value },
            mode: 'light',
            wrappedContent: true,
        },
    }) as unknown as PreviewScene;

interface MountedRadioGroup {
    container: HTMLDivElement;
    setState: ReturnType<typeof vi.fn>;
}

const mountRadioGroup = (currentScene: PreviewScene): MountedRadioGroup => {
    const setState = vi.fn();
    const context = {
        ...buildPreviewContext(currentScene),
        setState,
    } as unknown as AllCollectionContextProps;

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
        root.render(createElement(CollectionProvider, { context } as never, createElement(RadioGroupCollection)));
    });
    return { container, setState };
};

describe('RadioGroupCollection wiring', () => {
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
});
