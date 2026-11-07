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
 *
 * The adapter keys updates by content itself (ADR-0085 decision 4, enforced
 * here per ADR-0107 decision 5): it remembers the JSON signature of the options
 * it last applied and calls `update()` only when the signature differs. A new
 * reference with equal content — vis-2 renews references on a mere editor move —
 * therefore never redraws. JSON is a faithful key because the options are plain
 * data (numbers, strings, booleans, arrays, arcs); `renderTo` never enters it,
 * since the canvas is only added to the constructor's copy.
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
    // Signature of the options last handed to the current instance's update();
    // null while the instance has not received any (fresh or only skipped ones).
    const appliedSignatureRef = useRef<string | null>(null);

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
        // The new instance has not been through update() yet — it must get the
        // options below even when their content equals the old instance's.
        appliedSignatureRef.current = null;
    }, [options.gaugeType, options]);

    // Apply option changes — only on a content difference to the last applied
    // options (see the module remarks). A skip below the minimum size leaves the
    // remembered signature untouched: the instance still holds the last applied
    // options, so growing back to them needs no redraw, any other content does.
    useEffect(() => {
        const gauge = gaugeRef.current;
        if (!gauge) {
            return;
        }
        if ((options.width ?? 0) <= MIN_RENDER_SIZE || (options.height ?? 0) <= MIN_RENDER_SIZE) {
            return;
        }
        const signature = JSON.stringify(options);
        if (signature === appliedSignatureRef.current) {
            return;
        }
        gauge.value = options.value ?? 0;
        gauge.update(options);
        appliedSignatureRef.current = signature;
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
