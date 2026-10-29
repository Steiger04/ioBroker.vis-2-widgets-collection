/**
 * Canvas-Adapter for the Gauge widget.
 *
 * @module widgets/Gauge
 * @remarks
 * Pure adapter between the Options-Builder's output and a canvas-gauges
 * instance: it mounts the right class (`gaugeType` travels inside the option
 * object so `update()` keeps it stable), applies option changes, recreates the
 * instance on a class switch and destroys it on unmount. Everything else —
 * coercion, defaults, computed options, the segment icon overlay — lives in
 * {@link module:GaugeCollectionWidget/gaugeOptions} resp. GaugeCollection.
 */

import React, { useEffect, useId, useRef } from 'react';
import { LinearGauge, RadialGauge } from 'canvas-gauges';

import type { GaugeOptions } from 'canvas-gauges';

/** Gauges smaller than this (in either dimension) are neither drawn nor updated. */
const MIN_RENDER_SIZE = 30;

/** Props for {@link module:widgets/Gauge.default}. */
interface GaugeAdapterProps {
    /** Complete canvas-gauges option set (from {@link module:GaugeCollectionWidget/gaugeOptions.buildGaugeOptions}). */
    options: GaugeOptions;
}

/**
 * Mounts a canvas-gauges instance for the given options and keeps it in sync.
 */
const Gauge = ({ options }: GaugeAdapterProps): React.JSX.Element => {
    const gaugeRef = useRef<RadialGauge | LinearGauge | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasId = useId();

    // Create (or recreate on a gaugeType switch). Option-only changes are the
    // update effect's business; creation must not re-run for them.
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        if (gaugeRef.current !== null && gaugeRef.current.options.gaugeType === options.gaugeType) {
            return;
        }
        gaugeRef.current?.destroy();
        const initialOptions = { ...options, renderTo: canvas };
        const instance =
            options.gaugeType === 'radial' ? new RadialGauge(initialOptions) : new LinearGauge(initialOptions);
        gaugeRef.current = instance.draw();
    }, [options.gaugeType, options]);

    // Apply option changes. The caller passes a content-keyed options object,
    // so this only fires when the options actually changed.
    useEffect(() => {
        const gauge = gaugeRef.current;
        if (!gauge) {
            return;
        }
        if ((options.width ?? 0) <= MIN_RENDER_SIZE || (options.height ?? 0) <= MIN_RENDER_SIZE) {
            return;
        }
        gauge.value = options.value ?? 0;
        gauge.update(options);
    }, [options]);

    // Destroy on unmount — the instance keeps its own draw machinery alive otherwise.
    useEffect(() => () => gaugeRef.current?.destroy(), []);

    return (
        <canvas
            id={canvasId}
            ref={canvasRef}
            style={{
                position: 'absolute',
            }}
        />
    );
};

export default Gauge;
