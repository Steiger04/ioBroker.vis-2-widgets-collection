/**
 * Widget Registry Module
 *
 * Central registry that maps widget IDs to their composed field definitions.
 * This module provides automatic widget data type generation using type-level programming.
 *
 * @module widget-registry
 * @see {@link field-definitions/index.d.ts} for available field definitions
 * @see {@link context-types.d.ts} for React Context integration
 *
 * @remarks
 * Added in Phase 4 of the type system migration.
 *
 * @example
 * ```typescript
 * // Get widget data type automatically
 * import type { WidgetRegistry, WidgetDataFor } from 'vis-2-widgets-collection/newTypes';
 *
 * // Direct registry access
 * type StateWidgetData = WidgetRegistry['tplStateCollectionWidget'];
 * // Result: CommonFieldsRxData & CommonObjectFieldsRxData & StateFieldsRxData & DelayFieldsRxData
 *
 * // Using helper type
 * type SliderWidgetData = WidgetDataFor<'tplSliderCollectionWidget'>;
 * ```
 */

import type { FieldDefinitions } from './field-definitions';
import type { UnionToIntersection } from './widget-builder';

// ============================================================================
// Widget Field Mappings
// ============================================================================

/**
 * Central mapping table defining which field definitions each widget uses.
 *
 * @remarks
 * This is the **single source of truth** for widget composition.
 * Adding a new widget requires only adding one entry here - all types
 * are automatically generated from this mapping.
 *
 * Field Names Reference:
 * - `common`: Common fields (alias, style, visibility, etc.) - ~30 properties
 * - `commonObject`: Object-related fields (oid, writeDelay, states) - ~15 properties
 * - `state`: State display fields (onlyStates, showIcon) - ~5 properties
 * - `checkbox`: Checkbox-specific fields (checkedValue, uncheckedValue) - ~3 properties
 * - `switch`: Switch-specific fields (readOnly, switchLabel) - ~4 properties
 * - `slider`: Slider-specific fields (min, max, step, orientation) - ~7 properties
 * - `radioGroup`: Radio group fields (options, orientation) - ~5 properties
 * - `buttonGroup`: Button group fields (buttons, activeButton) - ~6 properties
 * - `select`: Select dropdown fields (options, emptyValue) - ~4 properties
 * - `gauge`: Gauge visualization fields (gaugeType, min, max, thresholds) - ~80 properties
 * - `dialog`: Dialog/modal fields (dialogTitle, dialogContent) - ~5 properties
 * - `light2`: Advanced light control fields (brightness, color, effects) - ~24 properties
 * - `delay`: Delay behavior fields (delay, delayEnabled) - ~2 properties
 *
 * @example
 * ```typescript
 * // Check which fields a widget uses
 * type StateFields = WidgetFieldMappings['tplStateCollectionWidget'];
 * // Result: ['common', 'commonObject', 'state', 'delay']
 * ```
 */
export interface WidgetFieldMappings {
    /**
     * Template Widget - Base widget with minimal fields
     * Fields: common (30) + commonObject (15) = ~45 properties
     */
    tplTemplateCollectionWidget: ['common', 'commonObject'];

    /**
     * State Widget - Display and monitor state values
     * Fields: common (30) + commonObject (15) + state (5) + delay (2) = ~52 properties
     */
    tplStateCollectionWidget: ['common', 'commonObject', 'state', 'delay'];

    /**
     * Checkbox Widget - Boolean state control via checkbox
     * Fields: common (30) + commonObject (15) + checkbox (3) + delay (2) = ~50 properties
     */
    tplCheckboxCollectionWidget: ['common', 'commonObject', 'checkbox', 'delay'];

    /**
     * Switch Widget - Boolean state control via switch/toggle
     * Fields: common (30) + commonObject (15) + switch (4) + delay (2) = ~51 properties
     */
    tplSwitchCollectionWidget: ['common', 'commonObject', 'switch', 'delay'];

    /**
     * Slider Widget - Numeric state control via slider
     * Fields: common (30) + commonObject (15) + slider (7) + delay (2) = ~54 properties
     */
    tplSliderCollectionWidget: ['common', 'commonObject', 'slider', 'delay'];

    /**
     * Radio Group Widget - Single selection from options
     * Fields: common (30) + commonObject (15) + radioGroup (5) + delay (2) = ~52 properties
     */
    tplRadioGroupCollectionWidget: ['common', 'commonObject', 'radioGroup', 'delay'];

    /**
     * Button Group Widget - Multiple action buttons
     * Fields: common (30) + commonObject (15) + buttonGroup (6) + delay (2) = ~53 properties
     */
    tplButtonGroupCollectionWidget: ['common', 'commonObject', 'buttonGroup', 'delay'];

    /**
     * Select Widget - Dropdown selection control
     * Fields: common (30) + commonObject (15) + select (4) + delay (2) = ~51 properties
     */
    tplSelectCollectionWidget: ['common', 'commonObject', 'select', 'delay'];

    /**
     * Gauge Widget - Visual value representation with thresholds
     * Fields: common (30) + commonObject (15) + gauge (80) = ~125 properties
     */
    tplGaugeCollectionWidget: ['common', 'commonObject', 'gauge'];

    /**
     * Dialog Widget - Modal/dialog display and interaction
     * Fields: common (30) + commonObject (15) + dialog (5) = ~50 properties
     */
    tplDialogCollectionWidget: ['common', 'commonObject', 'dialog'];

    /**
     * Light2 Widget - Advanced light control (brightness, color, effects)
     * Fields: common (30) + commonObject (15) + light2 (24) + delay (2) = ~71 properties
     */
    tplLight2CollectionWidget: ['common', 'commonObject', 'light2', 'delay'];
}

// ============================================================================
// Widget Registry Type
// ============================================================================

/**
 * Auto-generated widget registry mapping widget IDs to their composed data types.
 *
 * @remarks
 * This type is automatically computed from {@link WidgetFieldMappings} using
 * type-level programming. Each widget's data type is an intersection of all
 * its specified field definitions.
 *
 * Type Generation Process:
 * 1. Iterate over each widget ID in WidgetFieldMappings
 * 2. Get the array of field names for that widget
 * 3. Map each field name to its corresponding type in FieldDefinitions
 * 4. Combine all field types using UnionToIntersection
 *
 * @example
 * ```typescript
 * // Access widget data types
 * import type { WidgetRegistry } from 'vis-2-widgets-collection/newTypes';
 *
 * // State widget combines 4 field definition types
 * type StateData = WidgetRegistry['tplStateCollectionWidget'];
 * // Expands to: CommonFieldsRxData & CommonObjectFieldsRxData & StateFieldsRxData & DelayFieldsRxData
 *
 * // Use in widget class
 * class StateWidget extends Generic<StateData> {
 *     // TypeScript knows about all properties:
 *     // - alias1...alias20 (common)
 *     // - oid1...oid20 (commonObject)
 *     // - onlyStates, showIcon (state)
 *     // - delay, delayEnabled (delay)
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Check widget data at compile time
 * import { expectType } from 'tsd';
 * import type { CommonFieldsRxData, StateFieldsRxData } from './field-definitions';
 *
 * type StateData = WidgetRegistry['tplStateCollectionWidget'];
 *
 * // Verify composition
 * expectAssignable<CommonFieldsRxData>(null as any as StateData);
 * expectAssignable<StateFieldsRxData>(null as any as StateData);
 *
 * // Access dynamic properties
 * declare const data: StateData;
 * expectType<string | undefined>(data.alias1);
 * expectType<string | undefined>(data.oid1);
 * expectType<boolean | undefined>(data.onlyStates);
 * ```
 */
export type WidgetRegistry = {
    [K in keyof WidgetFieldMappings]: WidgetFieldMappings[K][number] extends keyof FieldDefinitions
        ? UnionToIntersection<FieldDefinitions[WidgetFieldMappings[K][number]]>
        : never;
};

// ============================================================================
// Helper Types
// ============================================================================

/**
 * Extract widget data type for a specific widget ID.
 *
 * @template T - Widget ID (must be a key in WidgetRegistry)
 *
 * @example
 * ```typescript
 * import type { WidgetDataFor } from 'vis-2-widgets-collection/newTypes';
 *
 * // Equivalent to WidgetRegistry['tplSliderCollectionWidget']
 * type SliderData = WidgetDataFor<'tplSliderCollectionWidget'>;
 *
 * // Use in generic functions
 * function createWidgetConfig<T extends keyof WidgetRegistry>(
 *     widgetId: T,
 *     data: Partial<WidgetDataFor<T>>
 * ) {
 *     // TypeScript knows exact properties for each widget
 * }
 * ```
 */
export type WidgetDataFor<T extends keyof WidgetRegistry> = WidgetRegistry[T];

/**
 * Extract field names used by a specific widget.
 *
 * @template T - Widget ID (must be a key in WidgetFieldMappings)
 *
 * @example
 * ```typescript
 * import type { WidgetFieldsFor } from 'vis-2-widgets-collection/newTypes';
 *
 * // Get field names for state widget
 * type StateFields = WidgetFieldsFor<'tplStateCollectionWidget'>;
 * // Result: 'common' | 'commonObject' | 'state' | 'delay'
 *
 * // Use for validation
 * function validateWidgetFields<T extends keyof WidgetRegistry>(
 *     widgetId: T,
 *     field: WidgetFieldsFor<T>
 * ): boolean {
 *     // Compile-time check that field belongs to widget
 *     return true;
 * }
 * ```
 */
export type WidgetFieldsFor<T extends keyof WidgetRegistry> = WidgetFieldMappings[T][number];

/**
 * Union of all widget IDs in the registry.
 *
 * @example
 * ```typescript
 * import type { WidgetId } from 'vis-2-widgets-collection/newTypes';
 *
 * // Type-safe widget ID handling
 * function getWidgetInfo(widgetId: WidgetId): string {
 *     // widgetId is guaranteed to be a valid widget ID
 *     return `Widget: ${widgetId}`;
 * }
 * ```
 */
export type WidgetId = keyof WidgetRegistry;

/**
 * Union of all widget data types in the registry.
 *
 * @example
 * ```typescript
 * import type { AnyWidgetData } from 'vis-2-widgets-collection/newTypes';
 *
 * // Accept any widget data
 * function processWidgetData(data: AnyWidgetData): void {
 *     // data can be any widget's data type
 *     if ('onlyStates' in data) {
 *         // Type narrowing works
 *         console.log('State widget detected');
 *     }
 * }
 * ```
 */
export type AnyWidgetData = WidgetRegistry[keyof WidgetRegistry];

// ============================================================================
// Validation Types
// ============================================================================

/**
 * Type guard to check if a widget ID is valid.
 *
 * @example
 * ```typescript
 * import type { IsValidWidgetId } from 'vis-2-widgets-collection/newTypes';
 *
 * // Compile-time validation
 * type Valid = IsValidWidgetId<'tplStateCollectionWidget'>; // true
 * type Invalid = IsValidWidgetId<'tplInvalidWidget'>; // false
 * ```
 */
export type IsValidWidgetId<T extends string> = T extends keyof WidgetRegistry ? true : false;

/**
 * Get widget ID from widget data type (reverse lookup).
 *
 * @template T - Widget data type
 *
 * @example
 * ```typescript
 * import type { WidgetIdFromData, WidgetRegistry } from 'vis-2-widgets-collection/newTypes';
 *
 * // Get widget ID from data type
 * type StateWidgetId = WidgetIdFromData<WidgetRegistry['tplStateCollectionWidget']>;
 * // Result: 'tplStateCollectionWidget'
 * ```
 */
export type WidgetIdFromData<T> = {
    [K in keyof WidgetRegistry]: T extends WidgetRegistry[K] ? K : never;
}[keyof WidgetRegistry];
