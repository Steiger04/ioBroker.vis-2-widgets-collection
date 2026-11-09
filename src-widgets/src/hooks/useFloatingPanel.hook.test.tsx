/**
 * useFloatingPanel — what the n/s grips announce while the height is Auto.
 *
 * @module hooks/useFloatingPanel.hook.test
 * @remarks
 * With Auto height the n/s grips announce the last measured panel height: before the panel is
 * measurable the minimum, after opening and after a window resize the measured height.
 */
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { act, createElement, type FC } from 'react';

import { PANEL_MIN_H, useFloatingPanel } from './useFloatingPanel';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';

const KEY = 'vis-2-widgets-collection:test:floating-panel';

let panelHeight = 300;
const offsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        configurable: true,
        get(this: HTMLElement) {
            return this.dataset.panel === 'true' ? panelHeight : 0;
        },
    });
});
afterAll(() => {
    if (offsetHeight) {
        Object.defineProperty(HTMLElement.prototype, 'offsetHeight', offsetHeight);
    }
});

const mounted: RenderComponentHandle<{ active: boolean }>[] = [];
beforeEach(() => {
    localStorage.removeItem(KEY);
    panelHeight = 300;
});
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

const Panel: FC<{ active: boolean }> = ({ active }) => {
    const panel = useFloatingPanel({
        storageKey: KEY,
        defaultGeometry: () => ({ x: 10, y: 10, w: 400, h: null }),
        labels: { width: 'Width', height: 'Height' },
        active,
    });
    return createElement(
        'div',
        { ref: panel.panelRef, 'data-panel': 'true' },
        createElement('div', { 'data-grip': 'n', 'aria-valuenow': panel.edgeProps.n['aria-valuenow'] }),
    );
};

const mount = (active: boolean): RenderComponentHandle<{ active: boolean }> => {
    const handle = renderComponent(Panel, { active });
    mounted.push(handle);
    return handle;
};

const announced = (handle: RenderComponentHandle<{ active: boolean }>): number =>
    Number(handle.container.querySelector('[data-grip="n"]')?.getAttribute('aria-valuenow'));

describe('useFloatingPanel — Auto height on the n/s grips', () => {
    it('announces the minimum height before the panel is measured', () => {
        expect(announced(mount(false))).toBe(PANEL_MIN_H);
    });

    it('announces the measured height once the panel opens', () => {
        const handle = mount(false);
        handle.rerender({ active: true });
        expect(announced(handle)).toBe(300);
    });

    it('announces the height measured on a window resize', () => {
        const handle = mount(true);
        panelHeight = 350;
        act(() => {
            window.dispatchEvent(new Event('resize'));
        });
        expect(announced(handle)).toBe(350);
    });
});
