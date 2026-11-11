/**
 * Factory functions and shared constants for building vis-2 field definitions.
 *
 * @module lib/fieldFactories
 * @remarks
 * Provides the deep building blocks used across every `*Fields.tsx` file:
 * - color field factories (`createColorField`, `createColorFields`) and
 *   the Schlichtes-Farbfeld factory (`createPlainColorField`)
 * - the hidden-predicate family (`hiddenUnless`, `hiddenIf`, `hiddenWhenFalsy`)
 * - shared option constants (`fontWeightOptions`, `fontStyleOptions`, `sideOptions`)
 * - `createDivider` for section dividers
 * - `guardWidgetData`, the wrapper every data-reading custom field is declared through
 *
 * Per-type factories for number/select/checkbox fields are intentionally NOT
 * provided: a factory that only injects the vis-2 field `type` and passes the
 * keys through is a shallow rename (deleting it just moves the keys inline —
 * complexity does not concentrate). Those fields stay as raw object literals
 * with a `hidden` clause; the depth lives here, in the predicates, option
 * constants, and dividers. The one exception is a FIXED field duplicated
 * verbatim across field lists (`createOnlyDisplayField`): seven hand-synced
 * copies are drift, not depth.
 * @example
 * // Single color field
 * const sliderColorField = createColorField({
 *     name: 'sliderColor',
 *     label: 'slider_color',
 * });
 * @example
 * // Color field with fallback
 * const thumbColorField = createColorField({
 *     name: 'thumbColor',
 *     label: 'thumb_color',
 *     fallbackFields: ['sliderColor'],
 * });
 * @example
 * // Multiple color fields at once
 * const colorFields = createColorFields([
 *     { name: 'sliderColor', label: 'slider_color' },
 *     { name: 'thumbColor', label: 'thumb_color', fallbackFields: ['sliderColor'] },
 * ]);
 */

import ContractColorField from '../components/ContractColorField';
import PlainColorField from '../components/PlainColorField';
import CollectionDivider from '../components/CollectionDivider';
import type { ColorTerminal, ExtendedField } from '../types/field-definitions/extended-field';
import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    WidgetData,
} from '@iobroker/types-vis-2';
import type React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Custom-field data guard
// ─────────────────────────────────────────────────────────────────────────────

/** The one empty data map every guarded custom field gets while vis-2 passes none. */
const NO_WIDGET_DATA = Object.freeze({}) as WidgetData;

/**
 * Wraps a vis-2 custom-field render function so it never sees `data === undefined`.
 *
 * @remarks
 * When the selection grows from one widget to several, vis-2 renders the attribute panel
 * once with the stale single-selection `commonValues` (`{}`, no `data`) before it computes
 * the shared values; every custom field reading `data[...]` then throws and takes the
 * whole editor down. The guard hands that render one frozen empty map — stable across
 * renders, so `useMemo` dependencies on `data` stay put — and passes real data through.
 * Every custom field that reads `data` must be declared through it.
 * @param component - The custom-field render function (`field, data, onDataChange, props`).
 * @returns The same function, tolerant of a missing data map.
 */
export function guardWidgetData<F, R>(
    component: (
        field: F,
        data: WidgetData,
        onDataChange: (patch: WidgetData) => void,
        props: RxWidgetInfoCustomComponentProperties,
    ) => R,
): (
    field: F,
    data: WidgetData | undefined,
    onDataChange: (patch: WidgetData) => void,
    props: RxWidgetInfoCustomComponentProperties,
) => R {
    return (field, data, onDataChange, props) => component(field, data ?? NO_WIDGET_DATA, onDataChange, props);
}

/**
 * Options for creating a color field definition.
 */
export interface ColorFieldOptions {
    /** Field name (e.g., 'sliderColor', 'thumbColor') */
    name: string;
    /** Label translation key (e.g., 'slider_color', 'thumb_color') */
    label: string;
    /** Default value (empty string by default) */
    default?: string;
    /**
     * Orders the fallback stage of the field's runtime resolution cascade, which the
     * picker preview and the widget resolve alike (stages at `cascadeCandidates`,
     * `lib/helper/resolveEffectiveColor`). See `ExtendedField.fallbackFields` and ADR 0004.
     */
    fallbackFields?: string[];
    /** Solid colours only: the Farbwähler hides Solid/Gradient, a typed gradient is an error. */
    noGradient?: boolean;
    /**
     * Terminal default — the most general end of the resolution cascade.
     * See `ExtendedField.terminal` and ADR 0004.
     */
    terminal?: ColorTerminal;
    /** The terminal under `noCard`. See `ExtendedField.terminalWithoutCard` and ADR 0004. */
    terminalWithoutCard?: ColorTerminal;
    /**
     * Whether the cascade consults the vis-2 widget CSS `color` before the
     * terminal default. See `ExtendedField.inheritTextStyle` and ADR 0004.
     */
    inheritTextStyle?: boolean;
    /** Hidden condition (string expression or function) */
    hidden?: string | ((data: Record<string, unknown>, index?: number) => boolean);
}

/**
 * Creates a contract colour field: a custom field rendered by the contract adapter
 * (`components/ContractColorField`), which resolves the Auflösungskaskade and shows the
 * Textfeld-Zeile (text field · trash · swatch opening the Farbwähler, ADR-0102).
 *
 * @param options - Field configuration options
 * @returns ExtendedField definition ready for use in field arrays
 * @example
 * // Basic color field
 * createColorField({ name: 'sliderColor', label: 'slider_color' })
 * @example
 * // Color field with fallback and noGradient
 * createColorField({
 *     name: 'iconColor',
 *     label: 'icon_color',
 *     fallbackFields: ['textColor'],
 *     noGradient: true,
 * })
 */
export function createColorField(options: ColorFieldOptions): ExtendedField {
    const {
        name,
        label,
        default: defaultValue = '',
        fallbackFields,
        noGradient,
        terminal,
        terminalWithoutCard,
        inheritTextStyle,
        hidden,
    } = options;

    // Build the base field object with all properties
    const field: ExtendedField = {
        name,
        label,
        default: defaultValue,
        type: 'custom',
        // A CSS colour string; anything else reads as unset (lib/usableWidgetData).
        storedValue: 'string',
        component: guardWidgetData((field: ExtendedField, data, onDataChange, props): React.JSX.Element => (
            <ContractColorField
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        )),
    };

    // Only add optional properties if they have values
    if (fallbackFields !== undefined) {
        field.fallbackFields = fallbackFields;
    }

    if (noGradient !== undefined) {
        field.noGradient = noGradient;
    }

    if (terminal !== undefined) {
        field.terminal = terminal;
    }

    if (terminalWithoutCard !== undefined) {
        field.terminalWithoutCard = terminalWithoutCard;
    }

    if (inheritTextStyle !== undefined) {
        field.inheritTextStyle = inheritTextStyle;
    }

    if (hidden !== undefined) {
        // Cast to any to bypass readonly restriction
        (field as Record<string, unknown>).hidden = hidden;
    }

    return field;
}

/**
 * Creates multiple color field definitions at once.
 *
 * @param fields - Array of field configuration options
 * @returns Array of ExtendedField definitions
 * @example
 * const colorFields = createColorFields([
 *     { name: 'sliderColor', label: 'slider_color' },
 *     { name: 'thumbColor', label: 'thumb_color', fallbackFields: ['sliderColor'] },
 *     { name: 'thumbBorderColor', label: 'thumb_border_color', fallbackFields: ['sliderColor'] },
 * ]);
 */
export function createColorFields(fields: ColorFieldOptions[]): ExtendedField[] {
    return fields.map(createColorField);
}

/**
 * Options for creating a Schlichtes Farbfeld — a colour field without a Field-Vertrag.
 */
export interface PlainColorFieldOptions {
    /** Field name (e.g., 'gaugeColorBar') */
    name: string;
    /** Label translation key (e.g., 'gauge_color_bar') */
    label: string;
    /** Schema default; omitted when not given (an empty field then means the widget's built-in default). */
    default?: string;
    /** Hidden condition (string expression or function; vis-2 hands a function the raw widget data). */
    hidden?: string | ((data: Record<string, unknown>, index?: number) => boolean);
}

/**
 * Creates a Schlichtes Farbfeld (ADR-0102): a custom field rendered by
 * `components/PlainColorField` — the Textfeld-Zeile without "erbt", the swatch shows the stored
 * value (else the schema default), solid colours only, no Auflösungskaskade.
 *
 * @remarks
 * `noGradient: true` keeps the adapter solid only (read like on a contract field). Marked
 * `plainColor: true` so runtime consumers that walk a field list read it like the former vis-2
 * `type: 'color'` field — stored value, else the schema default
 * (`GaugeCollectionWidget/gaugeOptions`). It carries no `terminal`/`fallbackFields`, and its
 * component is not the contract adapter, so the terminal parity test does not cover it.
 * @param options - Field configuration options
 * @returns ExtendedField definition ready for use in field arrays
 * @example
 * createPlainColorField({ name: 'gaugeColorBar', label: 'gauge_color_bar', default: '#ccc' })
 */
export function createPlainColorField(options: PlainColorFieldOptions): ExtendedField {
    const { name, label, default: defaultValue, hidden } = options;

    const field: ExtendedField = {
        name,
        label,
        type: 'custom',
        plainColor: true,
        noGradient: true,
        component: guardWidgetData((field: ExtendedField, data, onDataChange, props): React.JSX.Element => (
            <PlainColorField
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        )),
    };

    if (defaultValue !== undefined) {
        (field as Record<string, unknown>).default = defaultValue;
    }

    if (hidden !== undefined) {
        // Cast to bypass the readonly restriction, matching createColorField.
        (field as Record<string, unknown>).hidden = hidden;
    }

    return field;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hidden-predicate family
//
// Deep module: the same predicate bodies (e.g. `data.gaugeType !== 'linear'`)
// were inlined 30+ times in gaugeFields alone, and recur across every field
// file. One named predicate per recurring shape replaces them all. Rare
// compound conditions stay inline.
// ─────────────────────────────────────────────────────────────────────────────

/** A vis-2 field `hidden` predicate over widget data. */
export type HiddenPredicate = (data: Record<string, unknown>, index?: number) => boolean;

/**
 * Hides a field unless `data[field] === value` — i.e. the field is visible
 * only when `field` holds `value`. Covers the dominant `data.x !== 'y'` pattern.
 *
 * @example hiddenUnless('gaugeType', 'linear')
 */
export const hiddenUnless =
    (field: string, value: unknown): HiddenPredicate =>
    data =>
        data[field] !== value;

/**
 * Hides a field when `data[field] === value`.
 *
 * @example hiddenIf('oidObject', undefined)
 */
export const hiddenIf =
    (field: string, value: unknown): HiddenPredicate =>
    data =>
        data[field] === value;

/**
 * Hides a field when `data[field]` is falsy (0, '', false, null, undefined).
 *
 * @example hiddenWhenFalsy('write')
 */
export const hiddenWhenFalsy =
    (field: string): HiddenPredicate =>
    data =>
        !data[field];

/**
 * Hides a field when `data[field]` is truthy — the predicate form of vis-2's string
 * condition `'data.<field>'` (a predicate can be combined with others, a string cannot).
 *
 * @example hiddenWhenTruthy('noIcon')
 */
export const hiddenWhenTruthy =
    (field: string): HiddenPredicate =>
    data =>
        !!data[field];

// ─────────────────────────────────────────────────────────────────────────────
// Shared option constants
//
// Previously copy-pasted verbatim (font-weight ×4, font-style ×4, side ×3).
// One definition each; select fields reference the constant.
// ─────────────────────────────────────────────────────────────────────────────

export const fontStyleOptions = [
    { value: 'normal', label: 'normal' },
    { value: 'italic', label: 'italic' },
    { value: 'oblique', label: 'oblique' },
];

export const fontWeightOptions = [
    { value: 'normal', label: 'normal' },
    { value: 'bold', label: 'bold' },
    { value: 'bolder', label: 'bolder' },
    { value: 'lighter', label: 'lighter' },
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
    { value: '400', label: '400' },
    { value: '500', label: '500' },
    { value: '600', label: '600' },
    { value: '700', label: '700' },
    { value: '800', label: '800' },
    { value: '900', label: '900' },
];

export const sideOptions = [
    { value: 'both', label: 'both' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Divider builder
//
// The 5-line `{ label:'', type:'custom', component: () => <CollectionDivider dividerText=…/> }`
// block recurred 20+ times in gaugeFields and across all 14 field files.
// `createDivider` hides that tedium behind one call.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Options for {@link createDivider}.
 */
export interface DividerOptions {
    /** Predicate that hides the divider (e.g. `hiddenUnless('gaugeType', 'linear')`). */
    hidden?: HiddenPredicate;
}

/**
 * Builds a `CollectionDivider` section-divider field.
 *
 * @param dividerText - Translation key rendered as the divider label.
 * @param options - Optional {@link DividerOptions}.
 * @example createDivider('gauge_basic_options')
 * @example createDivider('gauge_linear_borders_options', { hidden: hiddenUnless('gaugeType', 'linear') })
 */
export function createDivider(dividerText: string, options?: DividerOptions): ExtendedField {
    const field: ExtendedField = {
        label: '',
        type: 'custom',
        component: (): React.JSX.Element => <CollectionDivider dividerText={dividerText} />,
    };

    if (options?.hidden !== undefined) {
        // Cast to bypass the readonly restriction, matching createColorField.
        (field as Record<string, unknown>).hidden = options.hidden;
    }

    return field;
}

// ─────────────────────────────────────────────────────────────────────────────
// onlyDisplay field builder
//
// The literal recurred verbatim in seven field lists (buttonGroup, checkbox,
// radioGroup, select, slider, state, switch) — a label or predicate edit would
// have to be hand-synced seven times. One builder, seven consumers; the editor
// flag pairs with the renderer-side write guard `isOidReadOnly`
// (onlyDisplay || write === false).
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Builds the shared `onlyDisplay` field: the display-only toggle of every
 * interactive widget.
 *
 * @param isLocked - When the toggle is moot: it is hidden and disabled while
 *   this holds. Default: the bound OID is explicitly non-writable
 *   (`write === false`); a missing `write` stays writable by convention — see
 *   {@link module:lib/helper/isOidReadOnly}.
 * @returns A fresh field definition per call, so field lists never share one
 *   object instance with the vis-2 editor.
 * @remarks
 * A widget whose writes do not go to the root `write`'s OID passes its own lock —
 * the Select passes `writeTargetDeniesWrite` (its write target, ADR-0090).
 * @example createOnlyDisplayField()
 * @example createOnlyDisplayField(writeTargetDeniesWrite)
 */
export function createOnlyDisplayField(
    isLocked: (data: WidgetData) => boolean = (data: WidgetData) => data.write === false,
): RxWidgetInfoAttributesField {
    return {
        name: 'onlyDisplay',
        type: 'checkbox',
        label: 'only_display',
        disabled: isLocked,
        default: false,
        hidden: isLocked,
    };
}
