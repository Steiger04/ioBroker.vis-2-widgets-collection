/**
 * Canvas-Adapter tests (mount / update / class switch / destroy) against a
 * faked canvas-gauges API.
 *
 * @module GaugeCollectionWidget/Gauge.test
 */

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

    it('does not update when the options object is referentially unchanged', () => {
        const options = baseOptions();
        const handle = renderComponent(Gauge, { options });
        const instance = fakes.FakeGauge.instances[0];
        const updatesAfterMount = instance.updates.length;

        handle.rerender({ options });
        expect(instance.updates).toHaveLength(updatesAfterMount);
        handle.unmount();
    });

    it('updates value and options when the options object changes', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];

        handle.rerender({ options: baseOptions({ value: 7 }) });
        expect(instance.updates.length).toBeGreaterThan(1);
        expect(instance.value).toBe(7);
        expect(instance.options.value).toBe(7);
        handle.unmount();
    });

    it('skips updates below the minimum render size', () => {
        const handle = renderComponent(Gauge, { options: baseOptions({ width: 10 }) });
        const instance = fakes.FakeGauge.instances[0];
        expect(instance.updates).toHaveLength(0);
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

    it('destroys the instance on unmount', () => {
        const handle = renderComponent(Gauge, { options: baseOptions() });
        const instance = fakes.FakeGauge.instances[0];
        handle.unmount();
        expect(instance.destroyed).toBe(1);
    });
});
