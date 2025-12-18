/**
 * Ambient type declarations for the `canvas-gauges` library used by Gauge widgets.
 *
 * @remarks
 * These typings focus on the options and classes consumed by our widgets and keep
 * the surface minimal: `GaugeOptions`, `LinearGauge`, and `RadialGauge`. Extend if
 * additional features are required by future widgets.
 */
declare module 'canvas-gauges' {
    export interface GaugeOptions {
        renderTo?: HTMLCanvasElement | null;
        gaugeType?: string;
        width?: number;
        height?: number;
        minValue?: number;
        maxValue?: number;
        value?: number;
        units?: string;
        title?: string;
        exactTicks?: boolean;
        majorTicks?: number[];
        minorTicks?: number;
        strokeTicks?: boolean;
        majorTicksInt?: number;
        majorTicksDec?: number;
        highlights?: Array<{
            from: number;
            to: number;
            color: string;
        }>;
        highlightsWidth?: number;
        numbersMargin?: number;
        barWidth?: number;
        barStrokeWidth?: number;
        barProgress?: boolean;
        barShadow?: number;
        animation?: boolean;
        animationDuration?: number;
        animationRule?: string;
        animatedValue?: boolean;
        animateOnInit?: boolean;
    }

    export interface Gauge {
        value: number;
        options: GaugeOptions;
        destroy(): void;
        update(options: Partial<GaugeOptions>): void;
        draw(): this;
    }

    export class LinearGauge implements Gauge {
        value: number;
        options: GaugeOptions;
        constructor(options: GaugeOptions);
        destroy(): void;
        update(options: Partial<GaugeOptions>): void;
        draw(): this;
    }

    export class RadialGauge implements Gauge {
        value: number;
        options: GaugeOptions;
        constructor(options: GaugeOptions);
        destroy(): void;
        update(options: Partial<GaugeOptions>): void;
        draw(): this;
    }
}
