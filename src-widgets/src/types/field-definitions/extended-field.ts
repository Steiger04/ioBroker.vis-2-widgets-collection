/**
 * Extended field definition carrying a color field's resolution contract
 * (`fallbackFields`, `terminal`, `inheritTextStyle`) and the `noGradient` flag.
 *
 * @module types/field-definitions/extended-field
 * @remarks
 * This type extends RxWidgetInfoAttributesField to support custom properties
 * used by CollectionGradientColorPicker and field definitions across the widget collection.
 *
 * Color resolution contract (ADR 0004). `resolveEffectiveColor` walks one
 * cascade, most specific first, for both the picker swatch and the widget
 * runtime; the first stage with a valid color wins:
 * 1. Override — the field's own stored value (`data[name]`)
 * 2. Fallback fields — each `fallbackFields` entry's stored value, in order
 * 3. vis-2 style — the widget's CSS `color`, only when `inheritTextStyle` is true
 * 4. Terminal — the theme color of `terminal`; always the last stage
 *
 * An empty value — and an invalid stored value — is "inherit": the stage is skipped. The picker never
 * writes a resolved value into data — only an explicit user choice is persisted.
 *
 * [fallbackFields] - Orders the fallback stage only. `undefined` and `[]` both mean
 *                    "no fallback fields"; neither decides what applies at the end —
 *                    that is the terminal's job.
 * [terminal] - The color the cascade ends on (`'transparent'` when omitted).
 * [inheritTextStyle] - Enables the vis-2 style stage.
 * [noGradient] - When true, extracts solid color at 50% position from gradients before saving.
 *                User can still input/view gradients in UI, but only solid colors are persisted.
 *
 * @example
 * // Thumb color: own value → sliderColor → theme primary
 * const field: ExtendedField = {
 *     name: 'thumbColor',
 *     label: 'thumb_color',
 *     type: 'custom',
 *     fallbackFields: ['sliderColor'],
 *     terminal: 'primary',
 *     component: (field, data, onDataChange, props) => (
 *         <CollectionGradientColorPicker field={field} data={data} onDataChange={onDataChange} props={props} />
 *     ),
 * };
 *
 * @example
 * // Icon color field that only accepts solid colors (no gradients)
 * const iconColorField: ExtendedField = {
 *     name: 'iconColor',
 *     label: 'icon_color',
 *     type: 'custom',
 *     noGradient: true,
 *     component: (field, data, onDataChange, props) => (
 *         <CollectionGradientColorPicker field={field} data={data} onDataChange={onDataChange} props={props} />
 *     ),
 * };
 */

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Extended field definition with the color resolution contract
 * (`fallbackFields`, `terminal`, `inheritTextStyle`) and the `noGradient` flag.
 *
 * This type extends RxWidgetInfoAttributesField to allow custom field extensions
 * without violating TypeScript excess property checks.
 *
 * Note: Uses intersection type instead of interface extension because
 * RxWidgetInfoAttributesField is a union type.
 */
export type ExtendedField = RxWidgetInfoAttributesField & {
    /**
     * Fallback stage of the resolution cascade (ADR 0004, `resolveEffectiveColor`):
     * field names whose stored colors stand in, in order, when this field has no
     * valid value of its own. The first valid one wins.
     *
     * Empty-string entries (the legacy `['']` convention) and empty or invalid
     * stored values are skipped. `undefined` and `[]` behave the same — no
     * fallback fields. This list only orders the fallbacks; what applies after
     * them is decided by `inheritTextStyle` and `terminal`.
     */
    fallbackFields?: string[];

    /**
     * When true, extracts solid color at 50% position from gradients before saving.
     *
     * User can still input/view gradients in UI, but only solid colors are persisted.
     * This is useful for properties that only support solid colors (e.g., icon colors).
     */
    noGradient?: boolean;

    /**
     * The terminal default — the last, most general stage of the resolution
     * cascade (override → `fallbackFields` → vis-2 style → terminal), used when
     * no earlier stage provides a valid color. See ADR 0004 and
     * `resolveEffectiveColor`.
     *
     * - `'primary'` → `theme.palette.primary.main`
     * - `'text'` → `theme.palette.text.primary`
     * - `'paper'` → `theme.palette.background.paper` (frame/card surfaces)
     * - `'divider'` → `theme.palette.divider` (chrome lines: borders, separators)
     * - `'textSecondary'` → `theme.palette.text.secondary` (subdued chrome: unchecked icons)
     * - `'transparent'` → `''` (no fill / inherit)
     *
     * If undefined, `'transparent'` is assumed (preserves the legacy behavior of
     * fields without an explicit terminal).
     */
    terminal?: ColorTerminal;

    /**
     * Whether the resolution cascade consults the vis-2 widget's CSS `color`
     * (`textStyles.color`) before falling back to the terminal default.
     *
     * True for text-bearing fields (e.g. `textColor`); false for accent/fill
     * fields (e.g. `iconColor`, `background`). See ADR 0004.
     */
    inheritTextStyle?: boolean;
};

/**
 * Terminal default categories for color fields. See {@link ExtendedField.terminal}.
 */
export type ColorTerminal = 'primary' | 'text' | 'paper' | 'divider' | 'textSecondary' | 'transparent';
