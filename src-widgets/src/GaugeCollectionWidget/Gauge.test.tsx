/**
 * Canvas-Adapter tests (mount / update / class switch / destroy) against a
 * faked canvas-gauges API.
 *
 * @module GaugeCollectionWidget/Gauge.test
 */

import { act, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { GaugeOptions } from 'canvas-gauges';

import { renderComponent } from '../lib/testing/testHarness';
import Gauge from './Gauge';

/** Recording fake for a canvas-gauges instance. */
const fakes = vi.hoisted(() => {
    class FakeGauge {
        static instances: FakeGauge[] = [];
        kind: 'radial' | 'linear';
        options: Record<string, unknown>;
        value = 0;
        updates: Record<string, unknown>[] = [];
        destroyed = 0;
        constructor(kind: 'radial' | 'linear', options: Record<string, unknown>) {
            this.kind = kind;
            this.options = { ...options };
            FakeGauge.instances.push(this);
        }
        draw(): this {
            return this;
        }
        update(options: Record<string, unknown>): void {
            this.updates.push(options);
            Object.assign(this.options, options);
        }
        destroy(): void {
            this.destroyed++;
        }
        static reset(): void {
            FakeGauge.instances = [];
        }
    }
    return { FakeGauge };
});

vi.mock('canvas-gauges', () => ({
    RadialGauge: class extends fakes.FakeGauge {
        constructor(options: Record<string, unknown>) {
            super('radial', options);
        }
    },
    LinearGauge: class extends fakes.FakeGauge {
        constructor(options: Record<string, unknown>) {
            super('linear', options);
        }
    },
}));

const baseOptions = (overrides: Partial<GaugeOptions> = {}): GaugeOptions => ({
    gaugeType: 'radial',
    width: 100,
    height: 100,
    value: 5,
    ...overrides,
});

beforeEach(() => {
    fakes.FakeGauge.reset();
});

describe('Gauge Canvas-Adapter', () => {
    it('mounts the gauge class selected by gaugeType and hands over the canvas', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        expect(fakes.FakeGauge.instances).toHaveLength(1);
        const instance = fakes.FakeGauge.instances[0];
        expect(instance.kind).toBe('radial');
        expect(instance.options.renderTo).toBeInstanceOf(HTMLCanvasElement);
        expect(handle.container.querySelector('canvas')).toBe(instance.options.renderTo);
        handle.unmount();
    });

    it('applies the initial options through update()', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];
        expect(instance.updates).toHaveLength(1);
        expect(instance.value).toBe(5);
        handle.unmount();
    });

    it('does not update when a new options object carries the same content', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];
        const updatesAfterMount = instance.updates.length;

        // vis-2 renews references on a mere editor move — content equality must suffice.
        handle.rerender({ options: baseOptions() });
        handle.rerender({ options: baseOptions({ highlights: [{ from: 0, to: 5, color: '#f00' }] }) });
        const updatesAfterHighlights = instance.updates.length;
        handle.rerender({ options: baseOptions({ highlights: [{ from: 0, to: 5, color: '#f00' }] }) });
        expect(updatesAfterHighlights).toBe(updatesAfterMount + 1);
        expect(instance.updates).toHaveLength(updatesAfterHighlights);
        handle.unmount();
    });

    it('updates value and options when the value changes', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];

        handle.rerender({ options: baseOptions({ value: 7 }) });
        expect(instance.updates).toHaveLength(2);
        expect(instance.value).toBe(7);
        expect(instance.options.value).toBe(7);
        handle.unmount();
    });

    it('updates when the size changes', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];

        handle.rerender({ options: baseOptions({ width: 200, value: 6 }) });
        expect(instance.updates).toHaveLength(2);
        expect(instance.options.width).toBe(200);
        expect(instance.value).toBe(6);
        handle.unmount();
    });

    it('skips updates below the minimum render size', () => {
        const handle = renderComponent(Gauge, { options: baseOptions({ width: 10 }) });
        const instance = fakes.FakeGauge.instances[0];
        expect(instance.updates).toHaveLength(0);
        handle.unmount();
    });

    it('does not remember skipped options as applied: growing past the minimum size updates', () => {
        const handle = renderComponent(Gauge, { options: baseOptions({ width: 10 }) });
        const instance = fakes.FakeGauge.instances[0];

        handle.rerender({ options: baseOptions({ width: 10, value: 8 }) });
        expect(instance.updates).toHaveLength(0);

        handle.rerender({ options: baseOptions({ value: 8 }) });
        expect(instance.updates).toHaveLength(1);
        expect(instance.value).toBe(8);
        handle.unmount();
    });

    it('compares against the last applied options, not the last skipped ones', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];

        // Shrinking is skipped, so the instance still holds the first options; returning
        // to exactly them needs no redraw, while returning with a new value does.
        handle.rerender({ options: baseOptions({ width: 10 }) });
        handle.rerender({ options: baseOptions() });
        expect(instance.updates).toHaveLength(1);

        handle.rerender({ options: baseOptions({ width: 10 }) });
        handle.rerender({ options: baseOptions({ value: 9 }) });
        expect(instance.updates).toHaveLength(2);
        expect(instance.value).toBe(9);
        handle.unmount();
    });

    it('destroys the old instance and creates the other class on a gaugeType switch', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const radial = fakes.FakeGauge.instances[0];

        handle.rerender({ options: baseOptions({ gaugeType: 'linear' }) });
        expect(radial.destroyed).toBe(1);
        expect(fakes.FakeGauge.instances).toHaveLength(2);
        expect(fakes.FakeGauge.instances[1].kind).toBe('linear');
        handle.unmount();
    });

    it('applies the options to the new instance after a gaugeType switch', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });

        handle.rerender({ options: baseOptions({ gaugeType: 'linear' }) });
        const linear = fakes.FakeGauge.instances[1];
        expect(linear.updates).toHaveLength(1);
        expect(linear.value).toBe(5);

        // Switching back with otherwise identical content must not skip the fresh instance.
        handle.rerender({ options: baseOptions() });
        const radial = fakes.FakeGauge.instances[2];
        expect(radial.kind).toBe('radial');
        expect(radial.updates).toHaveLength(1);
        expect(radial.value).toBe(5);
        handle.unmount();
    });

    it('destroys the instance on unmount', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];
        handle.unmount();
        expect(instance.destroyed).toBe(1);
    });

    it('survives a StrictMode effect re-run with a fresh, updated instance', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const root = createRoot(container);
        const render = (options: GaugeOptions): Promise<void> =>
            act(() => {
                root.render(
                    <StrictMode>
                        <Gauge options={options} />
                    </StrictMode>,
                );
                return Promise.resolve();
            });
        // The sync act of renderComponent does not flush StrictMode's effect re-run — the
        // async act (thenable callback) does: mount, cleanup (destroy), mount again.
        await render(baseOptions());

        const live = fakes.FakeGauge.instances.filter(instance => instance.destroyed === 0);
        expect(live).toHaveLength(1);
        expect(live[0].updates).toHaveLength(1);

        await render(baseOptions({ value: 3 }));
        expect(live[0].value).toBe(3);
        await act(() => {
            root.unmount();
            return Promise.resolve();
        });
        container.remove();
        expect(live[0].destroyed).toBe(1);
    });
});
