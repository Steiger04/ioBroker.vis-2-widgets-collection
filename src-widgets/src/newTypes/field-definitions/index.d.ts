import type { CommonFieldsRxData } from './common-fields';
import type { CommonObjectFieldsRxData } from './common-object-fields';
import type { StateFieldsRxData } from './state-fields';
import type { DelayFieldsRxData } from './delay-fields';
import type { GaugeFieldsRxData } from './gauge-fields';
import type { SliderFieldsRxData } from './slider-fields';
import type { SwitchFieldsRxData } from './switch-fields';
import type { CheckboxFieldsRxData } from './checkbox-fields';
import type { DialogFieldsRxData } from './dialog-fields';
import type { SelectFieldsRxData } from './select-fields';
import type { RadioGroupFieldsRxData } from './radio-group-fields';
import type { ButtonGroupFieldsRxData } from './button-group-fields';
import type { Light2FieldsRxData } from './light2-fields';

/**
 * Registry aller verfügbaren Field-Definitionen für vis-2 Collection Widgets.
 * Wird verwendet für automatische Typ-Generierung und Widget-Komposition.
 *
 * @remarks
 * Diese Registry mappt Field-Namen zu ihren Type-Definitionen.
 * In Phase 3 werden weitere Field-Typen hinzugefügt (gauge, slider, switch, etc.).
 *
 * Verwendung:
 * - `FieldDefinitions['common']` → CommonFieldsRxData
 * - `FieldDefinitions['commonObject']` → CommonObjectFieldsRxData
 *
 * @example
 * ```typescript
 * import type { FieldDefinitions } from './field-definitions';
 *
 * // Access field definitions
 * type CommonFields = FieldDefinitions['common'];
 * type ObjectFields = FieldDefinitions['commonObject'];
 *
 * // Use in widget data composition
 * import type { CommonFieldsRxData, CommonObjectFieldsRxData } from './field-definitions';
 *
 * interface MyWidgetData extends CommonFieldsRxData, CommonObjectFieldsRxData {
 *     customProp: string;
 * }
 * ```
 */
export interface FieldDefinitions {
    /**
     * Common field types (icons, headers, footers, backgrounds, etc.)
     *
     * @remarks
     * Contains ~35 dynamic properties with `${number}` index signatures
     * and 2 static properties for signals.
     *
     * @see {@link CommonFieldsRxData}
     */
    common: CommonFieldsRxData;

    /**
     * Common object field types (OID, unit, values, etc.)
     *
     * @remarks
     * Contains 8 static properties for main configuration and
     * 3 dynamic index signatures for objects, aliases, and values.
     *
     * @see {@link CommonObjectFieldsRxData}
     * @see {@link AllowedType}
     */
    commonObject: CommonObjectFieldsRxData;

    // ========================================
    // ✅ Phase 3: Widget-spezifische Fields
    // ========================================

    /** State field types (state handling, push button) */
    state: StateFieldsRxData;

    /** Delay field types (sample interval, write delay) */
    delay: DelayFieldsRxData;

    /** Gauge-specific field types (~80 properties) */
    gauge: GaugeFieldsRxData;

    /** Slider-specific field types (orientation, marks, icons) */
    slider: SliderFieldsRxData;

    /** Switch-specific field types (thumb, track) */
    switch: SwitchFieldsRxData;

    /** Checkbox-specific field types (label placement) */
    checkbox: CheckboxFieldsRxData;

    /** Dialog-specific field types (view, dimensions) */
    dialog: DialogFieldsRxData;

    /** Select-specific field types (arrow color, cid) */
    select: SelectFieldsRxData;

    /** Radio group-specific field types (orientation, colors) */
    radioGroup: RadioGroupFieldsRxData;

    /** Button group-specific field types (variant, orientation) */
    buttonGroup: ButtonGroupFieldsRxData;

    /** Light2-specific field types (RGB/HSV/CCT color control) */
    light2: Light2FieldsRxData;
}

// ========================================
// Re-Exports
// ========================================

/**
 * Re-export all types from common-fields for convenience.
 */
export type * from './common-fields';

/**
 * Re-export all types from common-object-fields for convenience.
 */
export type * from './common-object-fields';

/**
 * Re-export all widget-specific field types (Phase 3).
 */
export type * from './state-fields';
export type * from './delay-fields';
export type * from './gauge-fields';
export type * from './slider-fields';
export type * from './switch-fields';
export type * from './checkbox-fields';
export type * from './dialog-fields';
export type * from './select-fields';
export type * from './radio-group-fields';
export type * from './button-group-fields';
export type * from './light2-fields';
