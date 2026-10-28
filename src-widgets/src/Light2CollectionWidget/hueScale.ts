/**
 * Hue-compatible scale conversion (percent ⇄ 0-254).
 *
 * @module Light2CollectionWidget/hueScale
 * @remarks
 * Philips Hue and compatible bridges expose dimmer/saturation channels on a 0-254
 * scale while the picker UI operates on percent (0-100). The stored OID metadata
 * (`maxValue`, written by the editor's OID change handler) marks such channels
 * with `maxValue = 254`. These helpers are the single place that knows about the
 * 254 convention — use them instead of re-implementing the conversion.
 */

const HUE_SCALE_MAX = 254;

/**
 * Returns whether the stored `maxValue` marks a Hue-compatible 0-254 channel.
 */
export const isHueScale = (maxValue?: number | null): boolean => maxValue === HUE_SCALE_MAX;

/**
 * Converts a picker percent value (0-100) to the Hue scale (0-254).
 */
export const toHueScale = (percent: number): number => Math.round((percent / 100) * HUE_SCALE_MAX);

/**
 * Converts a Hue scale value (0-254) to picker percent (0-100).
 */
export const fromHueScale = (value: number): number => Math.round((value / HUE_SCALE_MAX) * 100);
