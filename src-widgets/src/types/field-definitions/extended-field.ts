/**
 * Extended field definition carrying a color field's resolution contract
 * (`fallbackFields`, `terminal`, `inheritTextStyle`) and the `noGradient` flag.
 *
 * @module types/field-definitions/extended-field
 * @remarks
 * This type extends RxWidgetInfoAttributesField to support custom properties
 * used by the contract colour fields (`createColorField` → `ContractColorField`) and field
 * definitions across the widget collection.
 *
 * Color resolution contract (ADR 0004): `fallbackFields`, `inheritTextStyle` and
 * `terminal` declare a field's Auflösungskaskade — layered general → specific,
 * resolved from the most specific stage: override → fallback
 * fields → vis-2 style → terminal. The stages and the values each one skips
 * are documented once, at `cascadeCandidates` (`lib/helper/resolveEffectiveColor`).
 *
 * Who walks that cascade whole, through `resolveEffectiveColor` /
 * `resolveEffectiveSolidColor`: the editor swatch (`ContractColorField`), the Gauge's color options and
 * most chrome contract consumers (Chrome-Farbvertrag). The chrome
 * slots that paint their stored value raw — the Switch's thumbs and tracks and the
 * Radio's unchecked icon — go through `resolveStoredChromeColor`: the field, then
 * its fallback fields, as stored, else a Sperre default, else the terminal, without
 * the vis-2 style stage. Others build their own chain and share only the terminal
 * mapping (`terminalColor`): the state resolvers (`hooks/useData/propertyResolvers`)
 * and the table's header bar, which paints its explicit value raw over the
 * terminal. The Button-Group separator takes the stored value raw
 * wherever a color calculation reads it, before it walks the cascade. The cascade
 * reads stored values with the Regeln für Farbeingaben (any CSS colour the browser
 * accepts, complete gradients), so only a value that is no colour at all (historic
 * free text) can paint raw at runtime while the swatch skips it; each such
 * divergence is documented in the consumer's contract or chrome module.
 *
 * The picker never writes a resolved value into data — only an explicit user
 * choice is persisted.
 *
 * [fallbackFields] - Orders the fallback stage only. `undefined` and `[]` both mean
 *                    "no fallback fields"; neither decides what applies at the end —
 *                    that is the terminal's job.
 * [terminal] - The color the cascade ends on (`'transparent'` when omitted).
 * [inheritTextStyle] - Enables the vis-2 style stage.
 * [noGradient] - Solid colours only: no Solid/Gradient in the Farbwähler, a typed gradient is an error.
 * [plainColor] - Marks a Schlichtes Farbfeld (`createPlainColorField`): no contract at all.
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
 *         <ContractColorField field={field} data={data} onDataChange={onDataChange} props={props} />
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
 *         <ContractColorField field={field} data={data} onDataChange={onDataChange} props={props} />
 *     ),
 * };
 */

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import type { StoredValue } from '../../lib/usableWidgetData';

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
     * Fallback stage of the resolution cascade (ADR 0004): field names whose
     * stored colors stand in, in order, when this field has none of its own.
     * `undefined` and `[]` behave the same — no fallback fields. Which entries and
     * values the stage skips: `cascadeCandidates` (`lib/helper/resolveEffectiveColor`).
     */
    fallbackFields?: string[];

    /**
     * Solid colours only (e.g. icon colours): the Farbwähler hides Solid/Gradient, and a gradient
     * typed into the field is an error ("Verlauf hier nicht möglich") — never reduced to a solid
     * (Regeln für Farbeingaben, ADR-0102).
     */
    noGradient?: boolean;

    /**
     * The terminal default — the most general stage of the resolution cascade,
     * resolved last (see the module remarks and ADR 0004).
     *
     * - `'primary'` → `theme.palette.primary.main`
     * - `'text'` → `theme.palette.text.primary`
     * - `'paper'` → `theme.palette.background.paper` (frame/card surfaces)
     * - `'divider'` → `theme.palette.divider` (chrome lines: borders, separators)
     * - `'textSecondary'` → `theme.palette.text.secondary` (subdued chrome: unchecked icons)
     * - `'onBackground'` → MUI's `common.onBackground`: `theme.palette.common.black` (light) /
     *   `theme.palette.common.white` (dark) — the contrast colour on the background (Switch track off)
     * - `'switchThumbOff'` → MUI's Switch thumb default (6.5.0, unchanged in 9.5.0):
     *   `theme.palette.common.white` (light) / `theme.palette.grey[300]` (dark) — the one
     *   widget-specific terminal
     * - `'transparent'` → `''` (no fill / inherit)
     *
     * If undefined, `'transparent'` is assumed (preserves the legacy behavior of
     * fields without an explicit terminal).
     */
    terminal?: ColorTerminal;

    /**
     * The terminal under `noCard`, where the slot's surface differs from the card: the swatch
     * then shows what the widget paints (ADR-0004). Omitted: `noCard` changes nothing.
     */
    terminalWithoutCard?: ColorTerminal;

    /**
     * Schlichtes Farbfeld marker (`createPlainColorField`, ADR-0102): a colour field without a
     * Field-Vertrag — no cascade, the stored value or else the schema default. Runtime consumers
     * that walk a field list read it like a vis-2 `type: 'color'` field.
     */
    plainColor?: boolean;

    /**
     * Whether the resolution cascade consults the vis-2 widget's CSS `color`
     * (`textStyles.color`) before falling back to the terminal default.
     *
     * True for text-bearing fields (e.g. `textColor`); false for accent/fill
     * fields (e.g. `iconColor`, `background`). See ADR 0004.
     */
    inheritTextStyle?: boolean;

    /**
     * What a data-bearing `custom` field stores under its name (KI-Integration, ADR-0114). The
     * Rückfall-Regel (`lib/usableWidgetData`) reads a stored value of another kind as unset; a
     * custom field that stores nothing under its name declares none.
     */
    storedValue?: StoredValue;
};

/**
 * Terminal default categories for color fields. See {@link ExtendedField.terminal}.
 */
export type ColorTerminal =
    'primary' | 'text' | 'paper' | 'divider' | 'textSecondary' | 'onBackground' | 'switchThumbOff' | 'transparent';
