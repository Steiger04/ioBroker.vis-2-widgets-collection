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
        // [key: string]: any;
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
