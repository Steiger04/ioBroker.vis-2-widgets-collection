/**
 * Switch field definitions for vis-2 Collection widgets.
 * Controls switch thumb and track appearance.
 */
export interface SwitchFieldsRxData {
    /**
     * Thumb (handle) size in pixels.
     * @default 62
     * @remarks Valid range: 0-500
     */
    thumbSize?: number;

    /**
     * Thumb color when switch is ON (CSS color).
     */
    thumbColorTrue?: string;

    /**
     * Thumb color when switch is OFF (CSS color).
     */
    thumbColorFalse?: string;

    /**
     * Track (background) size in pixels.
     * @default 10
     * @remarks Valid range: 0-100
     */
    trackSize?: number;

    /**
     * Track color (CSS color).
     */
    trackColor?: string;
}
