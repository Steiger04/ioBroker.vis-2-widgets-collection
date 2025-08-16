// iro.js v5.5.2 TypeScript definitions
declare module '@jaames/iro' {
    export interface IroRgb {
        r: number;
        g: number;
        b: number;
    }

    export interface IroRgba extends IroRgb {
        a: number;
    }

    export interface IroHsl {
        h: number;
        s: number;
        l: number;
    }

    export interface IroHsla extends IroHsl {
        a: number;
    }

    export interface IroHsv {
        h: number;
        s: number;
        v: number;
    }

    export interface IroHsva extends IroHsv {
        a: number;
    }

    export interface IroColor {
        // Color format properties
        hexString: string;
        hex8String: string;
        rgb: IroRgb;
        rgba: IroRgba;
        rgbString: string;
        rgbaString: string;
        hsl: IroHsl;
        hsla: IroHsla;
        hslString: string;
        hslaString: string;
        hsv: IroHsv;
        hsva: IroHsva;

        // Individual channel properties
        red: number;
        green: number;
        blue: number;
        alpha: number;
        hue: number;
        saturation: number;
        value: number;
        kelvin: number;

        // Methods
        clone(): IroColor;
        lighten(amount?: number): IroColor;
        darken(amount?: number): IroColor;
        saturate(amount?: number): IroColor;
        desaturate(amount?: number): IroColor;
        mix(color: IroColor | string, ratio?: number): IroColor;
    }

    export interface IroComponentConfig {
        component: string;
        options?: Record<string, any>;
    }

    export interface IroColorPickerOptions {
        width?: number;
        color?: string | IroColor;
        colors?: Array<string | IroColor>;
        display?: string;
        id?: string;
        layout?: IroComponentConfig[];
        layoutDirection?: 'vertical' | 'horizontal';
        padding?: number;
        margin?: number;
        borderWidth?: number;
        borderColor?: string;
        handleRadius?: number;
        activeHandleRadius?: number;
        handleSvg?: string;
        handleProps?: { x: number; y: number };
        wheelLightness?: boolean;
        wheelAngle?: number;
        wheelDirection?: 'clockwise' | 'anticlockwise';
        sliderSize?: number;
        boxHeight?: number;
    }

    export interface IroColorPicker {
        // Properties
        color: IroColor;
        colors: IroColor[];
        el: HTMLElement;
        base: HTMLElement;
        props: IroColorPickerOptions;
        id: string | null;

        // Event methods
        on(events: string | string[], callback: (...args: any[]) => void): void;
        off(events: string | string[], callback: (...args: any[]) => void): void;

        // Multicolor methods
        addColor(color: string | IroColor, index?: number): void;
        removeColor(index: number): void;
        setActiveColor(index: number): void;
        setColors(colors: Array<string | IroColor>): void;

        // Utility methods
        resize(width: number): void;
        reset(): void;
        forceUpdate(): void;
        emit(eventType: string, ...args: any[]): void;
        deferredEmit(eventType: string, ...args: any[]): void;
    }

    export interface IroStatic {
        ColorPicker: new (element: string | HTMLElement, options?: IroColorPickerOptions) => IroColorPicker;
        Color: new (color?: string | IroColor) => IroColor;
        version: string;
    }

    const iro: IroStatic;
    export default iro;
}
